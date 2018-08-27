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
        tcdbTest('58309', '0', `Play the Social Media recording on the Scorecard details view`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_BROWSER_FREE_ENTRY }] },
            async (addStep: Function, trace: Function) => {
                // Make a Facebook post
                await hubless.facebookPost();
                let pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction).toBeTruthy();
                await interactionConnect.waitFor(1000);
                await interactionConnect.disconnectInteractions();
                await interactionConnect.waitFor(35000);
                await interactionConnect.runQualitySearch();
                addStep("Open a scorecard");
                await interactionConnect.selectQualityResult(0);
                addStep("Play the recording");
                let socialRecording = await interactionConnect.doesElementExist('.ic-recorder-social-conversation');
                expect(socialRecording).toBeTruthy();
                addStep("Close the scorecard");
                await interactionConnect.closeScorecardDetails();
                await interactionConnect.openTab('My Interactions');
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );

        tcdbTest('58310', '1', `Snippet Recordings Can be Started After an Ad-hoc Recording Has Already Started in Connect on a social interaction`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_BROWSER_FREE_ENTRY }] },
            async (addStep: Function, trace: Function) => {
                // Make a Facebook post
                addStep("Open the Connect Client and login to User1");
                addStep("Initate a social media interaction");
                await hubless.facebookPost();
                trace('Waiting 5 minutes for Facebook to pass through interaction.');
                addStep("User1 picks up the social interaction");
                let pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction).toBeTruthy();
                //Start Snippet
                addStep("Click the Snip button.");
                await interactionConnect.snipRecord(true);
                //Check that adhoc is unavailable
                addStep("Click the Ad-hoc 'Record' button")
                await interactionConnect.waitFor(1000);
                let canAdHocRecord = await interactionConnect.canAdHocRecord();
                expect(canAdHocRecord).toBeFalsy();
                //Stop Snippet
                addStep("Click the snip button again.");
                await interactionConnect.snipRecord(false);
                addStep("Click the Ad-hoc 'Record' button to start an adhoc recording"); //Can't be done
                addStep("Click the Snip button.");
                await interactionConnect.snipRecord(true);
                await interactionConnect.waitFor(1000);
                addStep("Disconnect the call.");
                await interactionConnect.disconnectInteractions();
                await interactionConnect.waitFor(35000);
                await interactionConnect.runQualitySearch();
                addStep("In IRClient search for recordings and verify the snippet recording is listed");
                await interactionConnect.selectQualityResult(0);
                addStep("Verify the snippet recording can be opened");
                let socialRecording = await interactionConnect.doesElementExist('.ic-recorder-social-conversation');
                expect(socialRecording).toBeTruthy();
                await interactionConnect.closeScorecardDetails();
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );

        tcdbTest('58311', '0', `Creating a Social Media Snippet Recording and Playback`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_BROWSER_FREE_ENTRY }] },
            async (addStep: Function, trace: Function) => {
                //If test 58310 passes this test will pass as well; however, ad-hoc isn't a thing for this so 58310 should be removed and changed to 58311
                addStep("Log on to Interaction Connect with a user that can create snippet recordings.");
                addStep("Initate a social media interaction");
                addStep("User answers social media interaction");
                addStep("Press the snip button during the interaction");
                addStep("Click the Snip interaction to highlight it, then Disconnect the snip interaction");
                addStep("Log on to ICBM with a user that can retrieve and play snippet recordings and click the Recorder workspace.");
                addStep("Right click Private Searches and select New > Recording Search.");
                addStep("Click New Attribute > Interactions > Media Type.");
                addStep("Check Socail and click Create Search.");
                addStep("Double click the snippet recording created earlier.")
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );

    });

    describe('Facebook and Twitter Social Direct Message Recordings', () => {
        tcdbTest('58742', '1', `Open Social Media Direct Message interaction in Interaction Connect`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_BROWSER_FREE_ENTRY }] },
            async (addStep: Function, trace: Function) => {
                // Make a Facebook message
                await hubless.facebookDirectMessage();
                let pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction).toBeTruthy();
                await interactionConnect.waitFor(1000);
                await interactionConnect.disconnectInteractions();
                await interactionConnect.waitFor(35000);
                await interactionConnect.runQualitySearch();
                addStep("Open a scorecard");
                await interactionConnect.selectQualityResult(0);
                addStep("Play the recording");
                let socialRecording = await interactionConnect.doesElementExist('.ic-recorder-social-direct-message');
                expect(socialRecording).toBeTruthy();
                addStep("Close the scorecard");
                await interactionConnect.closeScorecardDetails();
                await interactionConnect.openTab('My Interactions');
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );

        tcdbTest('59052', '0', `Open Social Media Direct Message interaction in Interaction Connect`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_BROWSER_FREE_ENTRY }] },
            async (addStep: Function, trace: Function) => {
                // Make a Twitter message
                await hubless.twitterDirectMessage();
                let pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction).toBeTruthy();
                await interactionConnect.waitFor(1000);
                await interactionConnect.disconnectInteractions();
                await interactionConnect.waitFor(35000);
                await interactionConnect.runQualitySearch();
                addStep("Open a scorecard");
                await interactionConnect.selectQualityResult(0);
                addStep("Play the recording");
                let socialRecording = await interactionConnect.doesElementExist('.ic-recorder-social-direct-message');
                expect(socialRecording).toBeTruthy();
                addStep("Close the scorecard");
                await interactionConnect.closeScorecardDetails();
                await interactionConnect.openTab('My Interactions');
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );

        tcdbTest('58745', '1', `Creating Social Media Direct Message Snippet recording and playback`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_BROWSER_FREE_ENTRY }] },
            async (addStep: Function, trace: Function) => {
                // Make a Facebook direct message
                addStep("Place a Facebook direct message Interaction.");
                await hubless.facebookDirectMessage();
                addStep("Answer the Facebook interaction and give reply to that message.");
                let pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction).toBeTruthy();
                //Start and stop the Snippet recording
                addStep("Click the Snip button to Start and Stop the Snippet recording.");
                await interactionConnect.snipRecord(true);
                await interactionConnect.waitFor(1000);
                await interactionConnect.snipRecord(false);
                await interactionConnect.waitFor(1000);
                addStep("Disconnect the Facebook interaction.");
                await interactionConnect.disconnectInteractions();
                await interactionConnect.waitFor(35000);
                await interactionConnect.runQualitySearch();
                addStep("From ICBM score the snippet recording and open scorecard from My Quality Results view");
                await interactionConnect.selectQualityResult(0);
                addStep("Play the snippet recording");
                let socialRecording = await interactionConnect.doesElementExist('.ic-recorder-social-direct-message');
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