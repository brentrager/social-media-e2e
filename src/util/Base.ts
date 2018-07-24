import { trace, traceError } from './trace';

export default class Base {
    logTopic: string = 'Base';

    log(logString: any): void {
        trace(this.logTopic, logString);
    }

    logError(logString: any): void {
        traceError(this.logTopic, logString);
    }
}
