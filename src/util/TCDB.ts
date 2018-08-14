/* tslint:disable:quotemark max-line-length */
import { Config } from './Config';
import * as request from 'request-promise-native';
import Base from './Base';
import * as moment from 'moment';
import { trace } from './trace';

interface TcdbUser {
    Email: string;
}

interface TcdbArchitecture {
    Id: number;
    Name: string;
}

interface TcdbExecutionStep {
    Result: string;
    Comment: string;
    CreatedDateTime: string;
}

interface TcdbAttributes {
    AttributeType: any;
    Value: string;
}

interface TcdbExecution {
    User: TcdbUser;
    Build: any;
    HowExecuted: string;
    Result: string;
    Architecture: TcdbArchitecture;
    ExecutionSteps: Array<TcdbExecutionStep>;
    Attributes?: Array<TcdbAttributes>;
}

interface TcdbTest {
    number: string;
    version: string;
    stepCount: number;
    description: string;
    options: any;
}

export class TCDB extends Base {
    private builds: Array<any>;
    private build: any;
    private token: string;
    private attributes = new Map<number, any>();
    private attributeBrowserVersion = new Map<number, string>();
    private actualBrowserVersion: string;

    ATTRIBUTE_BROWSER_LIST = 61;
    ATTRIBUTE_BROWSER_FREE_ENTRY = 161;
    ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE = 162;

    private buildUrl(endpoint: string): string {
        return `${this.config.tcdb.baseUrl}/${endpoint}`;
    }

    constructor(private config: Config) {
        super();
        this.logTopic = 'TCDB';

        if (!this.config.tcdb.build) {
            const error = new Error('Must configure build for TCDB submission');
            this.logError(error);
            throw error;
        }

        if (!this.config.tcdb.baseUrl) {
            const error = new Error('Must configure baseUrl for TCDB API');
            this.logError(error);
            throw error;
        }
    }

    private getBrowserVersion(browserVersion: string): void {
        // Format: Chrome/67.0.3391.0
        // Want to turn it into "Chrome 67"
        this.actualBrowserVersion = `${browserVersion.split('/')[0]} ${browserVersion.split('/')[1].split('.')[0]}`;
    }

    private async initializeAttributes(browserVersion: string): Promise<void> {
        this.getBrowserVersion(browserVersion);

        for (const attribute of [this.ATTRIBUTE_BROWSER_FREE_ENTRY, this.ATTRIBUTE_BROWSER_LIST, this.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE]) {
            const options = {
                method: 'GET',
                uri: this.buildUrl(`api/attributes/${attribute}`),
                headers: { token: this.token },
                json: true
            };

            const attributeData = await request(options);
            this.attributes.set(attribute, attributeData);

            // Get browser version attribute
            if (attribute === this.ATTRIBUTE_BROWSER_FREE_ENTRY || attribute === this.ATTRIBUTE_BROWSER_LIST) {
                const chromeBrowserVersionsSet = new Set<string>();

                // Find the max legal chrome version.
                let maxVersionNum = 0;
                let maxChromeVersion = '';
                for (const version of attributeData.LegalValues) {
                    const browserString: string = version.Value;
                    if (browserString.match(/Chrome \d+/)) {
                        chromeBrowserVersionsSet.add(browserString);
                        const parts = browserString.split(' ');
                        const versionNum = parseInt(parts[1], 10);
                        maxVersionNum = Math.max(maxVersionNum, versionNum);
                        if (maxVersionNum === versionNum) {
                            maxChromeVersion = browserString;
                        }
                    }
                }

                this.attributeBrowserVersion.set(attribute, chromeBrowserVersionsSet.has(this.actualBrowserVersion) ? this.actualBrowserVersion : maxChromeVersion);
            }
        }
    }

    async initialize(browserVersion: string): Promise<void> {
        try {
            this.log('Initializing TCDB');

            let options: any = {
                method: 'GET',
                uri: this.buildUrl('api/builds'),
                json: true
            };

            this.builds = await request(options);
            this.build = this.builds.find(x => x.Name === this.config.tcdb.build);

            options = {
                method: 'POST',
                uri: this.buildUrl('login'),
                body: {UserName: 'automation.user', Password: ''},
                json: true
            };

            this.token = (await request(options)).Token;

            await this.initializeAttributes(browserVersion);

            this.log('TCDB initialized');
        } catch (error) {
            this.logError(`Error getting builds: ${error}`);
            throw error;
        }
    }

    async submitSuccess(tcNumber: string, tcVersion: string, stepCount: number, options: any): Promise<void> {
        try {
            if (!this.build) { throw new Error('Cannot submit results without build.'); }
            if (!this.token) { throw new Error('Cannot submit results without logging in.'); }
            const execution = {} as TcdbExecution;
            if (this.config.tcdb.email) {
                execution.User = {Email: this.config.tcdb.email};
            }
            execution.Build = this.build;
            execution.HowExecuted = 'Automated';
            execution.Result = 'Passed';
            execution.Architecture = {Id: 1, Name: 'Premises'};
            execution.Attributes = [];
            execution.ExecutionSteps = [];
            for (let i = 0; i < stepCount; i++) {
                execution.ExecutionSteps.push({Result: 'Passed', Comment: '', CreatedDateTime: moment().toISOString()});
            }

            if (options && options.attributes && options.attributes.length) {
                for (const attribute of options.attributes) {
                    if (attribute.attribute && attribute.attribute === this.ATTRIBUTE_BROWSER_FREE_ENTRY || attribute.attribute === this.ATTRIBUTE_BROWSER_LIST) {
                        const browserVersionAttribute: TcdbAttributes = {
                            AttributeType: this.attributes.get(attribute.attribute),
                            Value: this.attributeBrowserVersion.get(attribute.attribute)
                        };

                        execution.Attributes.push(browserVersionAttribute);
                    } else if (attribute.attribute && attribute.attribute === this.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE && attribute.value) {
                        const socialConversationInteractionTypeAttribute: TcdbAttributes = {
                            AttributeType: this.attributes.get(attribute.attribute),
                            Value: attribute.value
                        };

                        execution.Attributes.push(socialConversationInteractionTypeAttribute);
                    }
                }
            }

            const requestOptions = {
                method: 'POST',
                uri: this.buildUrl(`api/testcases/${tcNumber}/${tcVersion}/Executions`),
                headers: {token: this.token},
                body: execution,
                json: true
            };

            await request(requestOptions);

            this.log(`Successfully submitted success result for TC${tcNumber}.${tcVersion}`);
        } catch (error) {
            this.logError(`Error submitting success: ${error}`);
            console.error(error);
            throw error;
        }
    }

    testMap: Map<string, TcdbTest> = new Map();

    addTest(jestDescription: string, tcdbTest1: TcdbTest): void {
        this.testMap.set(jestDescription, tcdbTest1);
    }

    addStep(jestDescription: string): number {
        const tcdbTest1 = this.testMap.get(jestDescription);
        if (tcdbTest1) {
            return ++tcdbTest1.stepCount;
        }

        return -1;
    }

    async submitTest(jestDescription: string): Promise<void> {
        const tcdbTest1 = this.testMap.get(jestDescription);
        if (tcdbTest) {
            await this.submitSuccess(tcdbTest1.number, tcdbTest1.version, tcdbTest1.stepCount, tcdbTest1.options);
            const testName = `${tcdbTest1.number}.${tcdbTest1.version}`;
            trace(testName, `Submitted PASS for '${tcdbTest1.description}'.`);
        }
    }
}

export function setupTCDBJasmineReporter(): void {
    const tcdbJasmineReporter = {
        specDone: async (result) => {
            if (global.tcdb && result.status && result.status === 'passed') {
                await global.tcdb.submitTest(result.description);
            }
        }
    } as jasmine.CustomReporter;

    global.jasmine.getEnv().addReporter(tcdbJasmineReporter);
    // This makes tests stop executing after the first failure.
}

function addStep(testName: string, jestDescription: string): Function {
    return (stepDescription?: string) => {
        if (global.tcdb) {
            const step = global.tcdb.addStep(jestDescription);
            trace(testName, `Step ${step} - ${stepDescription}`);
        }
    };
}

function testTrace(testName: string): Function {
    return (logTrace: any) => {
        trace(testName, logTrace);
    };
}

interface TcdbTestFunction {
    (tcNumber: string, tcVersion: string, tcDescription: string, tcOptions: any, testFunction: any, timeoutMs?: number, jestFunction?: any): any;
    skip: Function;
    only: Function;
}

export const tcdbTest: TcdbTestFunction = (() => {
    const _tcdbTest: any = (tcNumber: string, tcVersion: string, tcDescription: string, tcOptions: any, testFunction: any, timeoutMs = 5 * 60 * 1000, jestFunction = test) => {
        const testName = `${tcNumber}.${tcVersion}`;
        const jestDescription = `${testName}: ${tcDescription}`;
        const tcdbTest1 = {} as TcdbTest;
        tcdbTest1.number = tcNumber;
        tcdbTest1.version = tcVersion;
        tcdbTest1.stepCount = 0;
        tcdbTest1.description = tcDescription;
        tcdbTest1.options = tcOptions;
        if (global.tcdb) {
            global.tcdb.addTest(jestDescription, tcdbTest1);
        }

        return jestFunction.each([[addStep(testName, jestDescription), testTrace(testName)]])(jestDescription, testFunction, timeoutMs);
    };
    _tcdbTest.skip = function tcdbTestSkip(tcNumber: string, tcVersion: string, tcDescription: string, tcOptions: any, testFunction: any, timeoutMs?: number): Function {
        return _tcdbTest(tcNumber, tcVersion, tcDescription, tcOptions, testFunction, timeoutMs, test.skip);
    };
    _tcdbTest.only = function tcdbTestOnly(tcNumber: string, tcVersion: string, tcDescription: string, tcOptions: any, testFunction: any, timeoutMs?: number): Function {
        return _tcdbTest(tcNumber, tcVersion, tcDescription, tcOptions, testFunction, timeoutMs, test.only);
    };

    return _tcdbTest;
})();