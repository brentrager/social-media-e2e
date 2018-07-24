import * as moment from 'moment';

export function trace(topic: string, trace1: string): void {
    console.log(`${moment().toISOString()}: ${topic}: ${trace1}`);
}

export function traceError(topic: string, trace1: string): void {
    console.error(`${moment().toISOString()}: ${topic}: ${trace1}`);
}
