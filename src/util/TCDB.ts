import { Config } from './Config';
import * as request from 'request-promise-native';
import Base from './Base';
import * as moment from 'moment';
import { trace } from './trace';
import * as failFast from 'jasmine-fail-fast';

interface TcdbUser {
    Email: string
}

interface TcdbArchitecture {
    Id: number,
    Name: string
}

interface TcdbExecutionStep {
    Result: string,
    Comment: string,
    CreatedDateTime: string
}

interface TcdbAttributes {
    AttributeType: any;
    Value: string;
}

interface TcdbExecution {
    User: TcdbUser,
    Build: any,
    HowExecuted: string,
    Result: string,
    Architecture: TcdbArchitecture,
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

    public ATTRIBUTE_BROWSER_LIST = 61;
    public ATTRIBUTE_BROWSER_FREE_ENTRY = 161;
    public ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE = 162;

    private buildUrl(endpoint: string) {
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

    private getBrowserVersion(browserVersion: string) {
        // Format: Chrome/67.0.3391.0
        // Want to turn it into "Chrome 67"
        this.actualBrowserVersion = `${browserVersion.split('/')[0]} ${browserVersion.split('/')[1].split('.')[0]}`;        
    }

    private async initializeAttributes(browserVersion: string) {
        this.getBrowserVersion(browserVersion);

        for (let attribute of [this.ATTRIBUTE_BROWSER_FREE_ENTRY, this.ATTRIBUTE_BROWSER_LIST, this.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE]) {
            let options = {
                method: 'GET',
                uri: this.buildUrl(`api/attributes/${attribute}`),
                headers: { token: this.token },
                json: true
            };

            let attributeData = await request(options);
            this.attributes.set(attribute, attributeData);

            // Get browser version attribute
            if (attribute === this.ATTRIBUTE_BROWSER_FREE_ENTRY || attribute === this.ATTRIBUTE_BROWSER_LIST) {
                let chromeBrowserVersionsSet = new Set<string>();

                // Find the max legal chrome version.
                let maxVersionNum = 0;
                let maxChromeVersion = '';
                for (let version of attributeData.LegalValues) {
                    let browserString: string = version.Value;
                    if (browserString.match(/Chrome \d+/)) {
                        chromeBrowserVersionsSet.add(browserString);
                        let parts = browserString.split(' ');
                        let versionNum = parseInt(parts[1]);
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

    public async initialize(browserVersion: string) {
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

    public async submitSuccess(tcNumber: string, tcVersion: string, stepCount: number, options: any) {
        try {
            if (!this.build) { throw new Error('Cannot submit results without build.'); }
            if (!this.token) { throw new Error('Cannot submit results without logging in.'); }
            let execution = <TcdbExecution>{};
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
                execution.ExecutionSteps.push({Result: 'Passed', Comment: '', CreatedDateTime: moment().toISOString()})
            }

            if (options && options.attributes && options.attributes.length) {
                for (let attribute of options.attributes)
                {
                    if (attribute.attribute && attribute.attribute === this.ATTRIBUTE_BROWSER_FREE_ENTRY || attribute.attribute === this.ATTRIBUTE_BROWSER_LIST) {
                        let browserVersionAttribute: TcdbAttributes = {
                            AttributeType: this.attributes.get(attribute.attribute),
                            Value: this.attributeBrowserVersion.get(attribute.attribute)
                        };

                        execution.Attributes.push(browserVersionAttribute);
                    } else if (attribute.attribute && attribute.attribute === this.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE && attribute.value) {
                        let socialConversationInteractionTypeAttribute: TcdbAttributes = {
                            AttributeType: this.attributes.get(attribute.attribute),
                            Value: attribute.value
                        }

                        execution.Attributes.push(socialConversationInteractionTypeAttribute);
                    }
                }
            }

            let requestOptions = {
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

    public addTest(jestDescription: string, tcdbTest: TcdbTest) {
        this.testMap.set(jestDescription, tcdbTest);
    }

    public addStep(jestDescription: string) {
        const tcdbTest = this.testMap.get(jestDescription);
        if (tcdbTest) {
            return ++tcdbTest.stepCount;
        }
        return -1;
    }

    public async submitTest(jestDescription: string) {
        const tcdbTest = this.testMap.get(jestDescription);
        if (tcdbTest) {
            await this.submitSuccess(tcdbTest.number, tcdbTest.version, tcdbTest.stepCount, tcdbTest.options);
            const testName = `${tcdbTest.number}.${tcdbTest.version}`;
            trace(testName, `Submitted PASS for '${tcdbTest.description}'.`);
        }
    }
}

export function setupTCDBJasmineReporter() {
    const tcdbJasmineReporter = {
        specDone: async (result) => {
            if (global.tcdb && result.status && result.status === 'passed') {
                global.tcdb.submitTest(result.description);
            }
        }
    } as jasmine.CustomReporter;

    global.jasmine.getEnv().addReporter(tcdbJasmineReporter);
    // This makes tests stop executing after the first failure.
    global.jasmine.getEnv().addReporter(failFast.init());
}

function addStep(testName: string, jestDescription: string) {
    return (stepDescription?: string) => {
        if (global.tcdb) {
            const step = global.tcdb.addStep(jestDescription);
            trace(testName, `Step ${step} - ${stepDescription}`);
        }
    }
};

function testTrace(testName: string) {
    return (logTrace: any) => {
        trace(testName, logTrace);
    }
}

export function tcdbTest(tcNumber: string, tcVersion: string, tcDescription: string, tcOptions: any, testFunction: any, timeoutMs?: number) {
    const testName = `${tcNumber}.${tcVersion}`;
    const jestDescription = `${testName}: ${tcDescription}`;
    const tcdbTest = {} as TcdbTest;
    tcdbTest.number = tcNumber;
    tcdbTest.version = tcVersion;
    tcdbTest.stepCount = 0;
    tcdbTest.description = tcDescription;
    tcdbTest.options = tcOptions;
    if (global.tcdb) {
        global.tcdb.addTest(jestDescription, tcdbTest);
    }
    return test.each([[addStep(testName, jestDescription), testTrace(testName)]])(jestDescription, testFunction, timeoutMs);
}