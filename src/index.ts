import {config} from './Config';
import * as puppeteer from 'puppeteer';
import * as minimist from 'minimist';
import InteractionConnect from './InteractionConnect';
import Facebook from './Facebook';
import Test from './Test';
import Tcdb from './TCDB';

interface CommandLineArguments {
    _: Array<any>,
    showBrowser?: boolean
}

const args = <CommandLineArguments>minimist(process.argv.slice(2));

// Assumptions:
// * Server available and configured for Social Media with a Social Media Processor instance
// * Configured user has ACD Social Media license and Social Media ACD utilization.

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: !args.showBrowser });
        
        let tcdb: Tcdb;
        if (config.tcdb) {
            tcdb = new Tcdb(config);
            await tcdb.initialize(await browser.version());
        }

        // Launch Interaction Connect
        const interactionConnect = new InteractionConnect(config, browser);
        await interactionConnect.launch();
        await interactionConnect.openTab('My Interactions');        

        // Launch Facebook
        const facebook = new Facebook(config, browser);
        await facebook.launch();
        
        // Run tests
        const test = new Test(interactionConnect, facebook, tcdb, args._);
        await test.execute();

        await interactionConnect.openTab('My Interactions');
        await interactionConnect.disconnectInteractions();
        await interactionConnect.logout();
        await browser.close();
    } catch (error) {
        console.error(`Error running test: ${error}`);
        console.error(error);
    }
})();