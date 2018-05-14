import * as moment from 'moment';

export default class Base {
    logTopic: string = 'Base';

    log(logString: any) {
        console.log(`${moment().toISOString()}: ${this.logTopic}: ${logString}`);
    }

    logError(logString: any) {
        console.error(`${moment().toISOString()}: ${this.logTopic}: ${logString}`);
    }
}