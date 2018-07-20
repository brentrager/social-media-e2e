/*jshint esversion: 6 */
// custom-environment.js
const PuppeteerEnvironment = require('jest-environment-puppeteer');
require('ts-node/register');
const { config } = require('./Config');
const { TCDB } = require('./TCDB');

module.exports = class TestEnvironment extends PuppeteerEnvironment {
    async setup() {
        await super.setup();
        this.global.tcdb = new TCDB(config);
        await this.global.tcdb.initialize(await this.global.browser.version());
        this.global.XMLHttpRequest = require('xmlhttprequest-cookie').XMLHttpRequest;
    }

    async teardown() {
        // Your teardown
        await super.teardown();
    }
}