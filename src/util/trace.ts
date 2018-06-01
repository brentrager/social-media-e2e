import * as moment from "moment";

export function trace(topic: string, trace: string) {
  console.log(`${moment().toISOString()}: ${topic}: ${trace}`);
}

export function traceError(topic: string, trace: string) {
  console.error(`${moment().toISOString()}: ${topic}: ${trace}`);
}
