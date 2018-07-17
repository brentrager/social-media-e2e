/* tslint:disable */
declare module 'random-words';
declare module 'jasmine-fail-fast';

declare namespace NodeJS {
  interface Global {
    tcdb: any;
    jasmine: any;
    browser: any;
  }
}

declare namespace jest {
  interface It {
    each: Function;
  }
}
