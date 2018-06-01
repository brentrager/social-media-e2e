import { trace, traceError } from "./trace";

export default class Base {
    logTopic: string = "Base";

    log(logString: any) {
        trace(this.logTopic, logString);
    }

    logError(logString: any) {
        traceError(this.logTopic, logString);
    }
}
