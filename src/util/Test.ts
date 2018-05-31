import * as randomWords from 'random-words';
import InteractionConnect from './InteractionConnect';
import Facebook from './Facebook';
import Tcdb from './Tcdb';
import Base from './Base';

export default class Test extends Base {
    private testsToRun: Set<string>;

    private assertOrThrow(assertion: any, assertionString: string) {
        if (!assertion) {
            const error = new Error(`Assertion error in ${assertionString}`);
            this.logError(error);
            throw error;
        } else {
            this.log(`Assertion passed: ${assertionString}`);
        }
    }
    
    constructor(private interactionConnect: InteractionConnect, private facebook: Facebook, private tcdb: Tcdb, private tests: Array<any>) {
        super();
        this.logTopic = 'Test';
        this.testsToRun = new Set<string>(tests.map(x => (typeof(x) === 'number') ? x.toString() : x) as Array<string>);
    }

    // tcNumber: Test Case Number (TC#####)
    // tcVersion: Teset Case Version (TC1234.#)
    // tcStepCount: Number of steps in the test case in TCDB. This is for the TCDB submission.
    //      TODO: Worth it to programmatically retrieve the number of steps from TCDB?
    // description: Description of the test case purely for logging purposes
    // test: The function to run for the test. Takes one argument, assertOrThrow, a function to use for assertions.
    public async executeTest(tcNumber: string, tcVersion: string, tcStepCount: number, description: string, options: any, test: Function) {
        let result;
        if (this.testsToRun.size === 0 || this.testsToRun.has(tcNumber)) {
            const testName = `TC${tcNumber}.${tcVersion}`;
            this.log(`Executing ${testName}: ${description}`);
            try {
                result = await test((assertion: any, assertionDescription: string) => {
                    this.assertOrThrow(assertion, `${testName}: ${description} - ${assertionDescription}`);
                });
            } catch(error) {
                this.logError(`Error in test: ${testName}: ${error}`);
                throw error;
            }
            this.log(`Test successful: ${testName}: ${description}`);
            if (this.tcdb) {
                await this.tcdb.submitSuccess(tcNumber, tcVersion, tcStepCount, options);
            }
            console.log();
        }
        return result;
    }

    public async execute() {
        try {
            let pickedUpInteraction = await this.executeTest('57556', '2', 2, 'Pickup Social Conversation', {}, async (assertOrThrow: Function) => {
                // Make a Facebook post
                await this.facebook.postRandom();
                // Wait 5 minutes for an interaction to alert
                this.log('Waiting 5 minutes for Facebook to pass through interaction.');
                let pickedUpInteraction = await this.interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                assertOrThrow(pickedUpInteraction, 'interaction picked up');
                return pickedUpInteraction;
            });

            const comment = await this.executeTest('57562', '2', 1, 'Respond to Facebook root post', {}, async (assertOrThrow: Function) => {
                const comment = await this.interactionConnect.replyToFacebookRootPostAndVerifyReply(randomWords(10).join(' '));
                assertOrThrow(comment, 'root post responded to');
                return comment;
            });

            await this.executeTest('57563', '0', 2, 'Respond to Facebook comment', {}, async (assertOrThrow: Function) => {
                const commentReply = await this.interactionConnect.replyToFacebookCommentAndVerifyReply(comment, randomWords(10).join(' '));
                assertOrThrow(commentReply, 'root post responded to');
                return commentReply;
            });

            await this.executeTest('57645', '0', 2, 'Hold Social Conversation', {}, async (assertOrThrow: Function) => {
                // Disconnect interaction
                assertOrThrow(await this.interactionConnect.holdInteraction(pickedUpInteraction), 'interaction held');
                assertOrThrow(await this.interactionConnect.pickupInteraction(pickedUpInteraction), 'interaction picked up');
            });

            await this.executeTest('57558', '2', 1, 'Disconnect Social Conversation', {}, async (assertOrThrow: Function) => {
                // Disconnect interaction
                assertOrThrow(await this.interactionConnect.disconnectInteraction(pickedUpInteraction), 'interaction disconnected');
            });

            const pickedUpInteractions = await this.executeTest('57560', '1', 4, 'Switch between Social Conversations', {}, async (assertOrThrow: Function) => {
                // Once https://devjira.inin.com/browse/IC-149464 works, this should be changed to make two posts and let
                // the user tiemout on the ACD assignment. Then, the user would go back to available and we would ahve two
                // non connected interactions to quickly peek at (before the ACD timeout). This would be more reliable
                // than getting two posts to come through within the ACD timeout timeframe.

                // Make a Facebook post
                const post1 = await this.facebook.postRandom();
                // Wait 5 minutes for an interaction to alert
                this.log('Waiting 5 minutes for Facebook to pass through interaction.');
                // TODO: Remove the pickup step. This must work without pickup. - https://devjira.inin.com/browse/IC-149464
                const pickedUpInteraction1 = await this.interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);

                assertOrThrow(await this.interactionConnect.verifyFacebookPostVisible(post1), 'first post is visible');

                // Make a Facebook post
                const post2 = await this.facebook.postRandom();
                // Wait 5 minutes for an interaction to alert
                this.log('Waiting 5 minutes for Facebook to pass through interaction.');
                // TODO: Remove the pickup step. This must work without pickup. - https://devjira.inin.com/browse/IC-149464
                const pickedUpInteraction2 = await this.interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);

                assertOrThrow(await this.interactionConnect.verifyFacebookPostVisible(post2), 'second post is visible');
                
                await this.interactionConnect.clickOnInteraction(pickedUpInteraction1);

                // Let the current interaction view update.
                await this.interactionConnect.waitFor(2000);

                assertOrThrow(await this.interactionConnect.verifyFacebookPostVisible(post1), 'first post comes back to visible');

                return {pickedUpInteraction1, pickedUpInteraction2};
            });

            await this.executeTest('57552', '1', 3, 'Filter user queue by Social Conversation', { attributes: [this.tcdb.ATTRIBUTE_BROWSER_LIST] }, async (assertOrThrow: Function) => {
                await this.interactionConnect.openTab('user1');
                await this.interactionConnect.filterQueueOnSocialConversations();

                assertOrThrow(await this.interactionConnect.getInteractionRow(pickedUpInteractions.pickedUpInteraction1), 'interaction visible');

                await this.interactionConnect.clearQueueFilter();
                assertOrThrow(true);
            });

            await this.executeTest('57548', '3', 3, 'Filter workgroup queue by Social Conversation', { attributes: [this.tcdb.ATTRIBUTE_BROWSER_LIST] }, async (assertOrThrow: Function) => {
                await this.interactionConnect.openTab('workgroup1');
                await this.interactionConnect.filterQueueOnSocialConversations();

                assertOrThrow(await this.interactionConnect.getInteractionRow(pickedUpInteractions.pickedUpInteraction1), 'interaction visible');

                await this.interactionConnect.clearQueueFilter();
                assertOrThrow(true);
            });

            await this.executeTest('57547', '0', 4, 'Configure Ring Sound for Social - Conversations', { attributes: [this.tcdb.ATTRIBUTE_BROWSER_FREE_ENTRY] }, async (assertOrThrow: Function) => {
                await this.interactionConnect.openRingSoundsSettings();
                let originalRingSound = await this.interactionConnect.getCurrentSocialConversationRingSound();
                let newRingSound = await this.interactionConnect.toggleSocialConversationRingSound();
                assertOrThrow(originalRingSound !== newRingSound, 'original ring sound setting changed');
                await this.interactionConnect.openRingSoundsSettings();
                let reopenSettingsRingSound = await this.interactionConnect.getCurrentSocialConversationRingSound();         
                assertOrThrow(reopenSettingsRingSound === newRingSound, 'new ring sound setting saved');
                // Reset to original
                await this.interactionConnect.toggleSocialConversationRingSound();
            });
        } catch(error) {
            this.logError(`Error running tests: ${error}`);
            console.error(error);
        }
    }
}