import { config } from '../util/Config';
import InteractionConnect from '../util/InteractionConnect';
import { setupTCDBJasmineReporter, tcdbTest } from '../util/TCDB';
import * as failFast from 'jasmine-fail-fast';
import Hubless from '../util/Hubless';
global.jasmine.getEnv().addReporter(failFast.init()); // Stop test after first failure.

let interactionConnect: InteractionConnect;
let hubless: Hubless;

jest.setTimeout(5 * 60 * 1000); // Big timeout for long running Puppeteer Actions

beforeAll(async () => {
    setupTCDBJasmineReporter();
});

describe('Social Media - Recorder', () => {
    beforeAll(async () => {
        // Launch Interaction Connect
        interactionConnect = new InteractionConnect(config, global.browser);
        await interactionConnect.launch();
        await interactionConnect.openTab('My Interactions');
        await interactionConnect.disconnectInteractions();
        hubless = new Hubless(config, global.browser);
    });
    describe('Facebook Social Conversations Recordings', () => {
        tcdbTest('58309.0', '0', `Play the Social Media recording on the Scorecard details view`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_BROWSER_FREE_ENTRY }] },
            async (addStep: Function, trace: Function) => {
                // Make a Facebook post
                await hubless.facebookPost();
                trace('Waiting 5 minutes for Facebook to pass through interaction.');
                let pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction).toBeTruthy();
                await interactionConnect.disconnectInteractions();
                await interactionConnect.runQualitySearch();
                addStep("Open a scorecard");
                await interactionConnect.selectQualityResult(0);
                addStep("Play the recording");
                let socialRecording = await interactionConnect.doesElementExist('.ic-recorder-social-conversation');
                expect(socialRecording).toBeTruthy();
                addStep("Close the scorecard");
                await interactionConnect.closeScorecardDetails();
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );

        tcdbTest('58311.0', '0', `Creating a Social Media Snippet Recording and Playback`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_BROWSER_FREE_ENTRY }] },
            async (addStep: Function, trace: Function) => {
                // Make a Facebook post
                addStep("Initate a social media interaction");
                await hubless.facebookPost();
                trace('Waiting 5 minutes for Facebook to pass through interaction.');
                addStep("User answers social media interaction");
                let pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction).toBeTruthy();
                //Start Snippet
                addStep("Press the snip button during the interaction");
                await interactionConnect.snipRecord(true);
                //Check that adhoc is unavailable
                let canAdHocRecord = await interactionConnect.canAdHocRecord();
                expect(canAdHocRecord).toBeFalsy();
                //Stop Snippet
                addStep("End the snippet recording");
                await interactionConnect.snipRecord(false);
                await interactionConnect.disconnectInteractions();
                await interactionConnect.runQualitySearch();
                addStep("Open a scorecard");
                await interactionConnect.selectQualityResult(0);
                addStep("Play the recording");
                let socialRecording = await interactionConnect.doesElementExist('.ic-recorder-social-conversation');
                expect(socialRecording).toBeTruthy();
                addStep("Close the scorecard");
                await interactionConnect.closeScorecardDetails();
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );

    });

    

    describe('Twitter Social Conversations Recordings', () => {
        tcdbTest('58309.0', '0', `Play the Social Media recording on the Scorecard details view`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_BROWSER_FREE_ENTRY }] },
            async (addStep: Function, trace: Function) => {
                // Make a Twitter post
                await hubless.twitterPost();
                trace('Waiting 5 minutes for Twitter to pass through interaction.');
                let pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction).toBeTruthy();
                await interactionConnect.disconnectInteractions();
                await interactionConnect.runQualitySearch();
                addStep("Open a scorecard");
                await interactionConnect.selectQualityResult(0);
                addStep("Play the recording");
                let socialRecording = await interactionConnect.doesElementExist('.ic-recorder-social-conversation');
                expect(socialRecording).toBeTruthy();
                addStep("Close the scorecard");
                await interactionConnect.closeScorecardDetails();
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );
    
        tcdbTest('58311.0', '0', `Creating a Social Media Snippet Recording and Playback`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_BROWSER_FREE_ENTRY }] },
        async (addStep: Function, trace: Function) => {
                // Make a Twitter post
                addStep("Initate a social media interaction");
                await hubless.twitterPost();
                trace('Waiting 5 minutes for Twitter to pass through interaction.');
                addStep("User answers social media interaction");
                let pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction).toBeTruthy();
                //Start Snippet
                addStep("Press the snip button during the interaction");
                await interactionConnect.snipRecord(true);
                //Check that adhoc is unavailable
                let canAdHocRecord = await interactionConnect.canAdHocRecord();
                expect(canAdHocRecord).toBeFalsy();
                //Stop Snippet
                addStep("End the snippet recording");
                await interactionConnect.snipRecord(false);
                await interactionConnect.disconnectInteractions();
                await interactionConnect.runQualitySearch();
                addStep("Open a scorecard");
                await interactionConnect.selectQualityResult(0);
                addStep("Play the recording");
                let socialRecording = await interactionConnect.doesElementExist('.ic-recorder-social-conversation');
                expect(socialRecording).toBeTruthy();
                addStep("Close the scorecard");
                await interactionConnect.closeScorecardDetails();
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );
    });
    afterAll(async () => {
        await interactionConnect.openTab('My Interactions');
        await interactionConnect.disconnectInteractions();
        await interactionConnect.logout();
    });
    
});