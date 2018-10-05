/* tslint:disable:quotemark max-line-length */
import { config } from '../util/Config';
import InteractionConnect from '../util/InteractionConnect';
import Facebook from '../util/Facebook';
import { setupTCDBJasmineReporter, tcdbTest } from '../util/TCDB';
import * as randomWords from 'random-words';
import * as failFast from 'jasmine-fail-fast';
global.jasmine.getEnv().addReporter(failFast.init()); // Stop test after first failure.

let interactionConnect: InteractionConnect;
let facebook: Facebook;

jest.setTimeout(10 * 60 * 1000); // Big timeout for long running Puppeteer Actions

beforeAll(async () => {
    setupTCDBJasmineReporter();
});

describe('Social Media - Facebook Config', () => {
    beforeAll(async () => {
        // Launch Interaction Connect
        interactionConnect = new InteractionConnect(config, global.browser);
        const asAdmin = true;
        await interactionConnect.launch(asAdmin);
        await interactionConnect.openSocialMediaConfigTab();
        facebook = new Facebook(config, global.browser);
        await facebook.launch();
    });

    tcdbTest('58359', '4', `Social Media Config - Connect an IC Server(s)  With the Corresponding Social Media Processor(s)`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Facebook' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Using TestAgent's web client, verify that you have the 'Enable Social Media' window open, and fill in the 'Genesys Hub URL',
                'Social Media Process URL', and the 'Social Media Processor Secret' sections.`);
            trace('Disabling Social Media initially.');
            await interactionConnect.openSocialMediaAccordion('Enable Social Media');
            await interactionConnect.disableSocialMedia();

            addStep(`Click the 'Connect Social Media Process' button.`);
            await interactionConnect.enableSocialMedia(config.socialMedia.hub, config.socialMedia.socialMediaProcessor, config.socialMedia.socialMediaProcessor2, config.socialMedia.socialMediaProcessorSecret);
            // expect(await interactionConnect.isSocialMediaAccordionExpanded('Social Media Account')).toBe(true);
        }
    );

    tcdbTest('58360', '4', `Social Media Config - Provision a Genesys Hub Account`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Facebook' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Using TestAgent's web client, verify that you have the 'Social Media Account' window open, and fill in the 'E-Mail' and 'Password' sections.e`);
            await interactionConnect.openSocialMediaAccordion('Social Media Account');

            addStep(`Click the 'Create or Log-On Social Media Account' button.`);
            await interactionConnect.enableSocialMediaAccount(config.genesysHub.email, config.genesysHub.password);
            expect(await interactionConnect.isSocialMediaAccordionExpanded('Facebook')).toBe(true);
        }
    );

    tcdbTest('58364', '2', `Social Media Config - Link and Unlink a Social Media Account`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Facebook' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Using TestAgent's web client, verify that you have the 'Twitter' or 'Facebook' account window open, and select 'Link Account'.`);
            await interactionConnect.openSocialMediaAccordion('Facebook');

            addStep(`Fill in the social media account credentials, and select 'Continue'.`);
            expect(await interactionConnect.addFacebookAccount(config.facebook.user, config.facebook.password)).toBe(true);

            addStep(`With the created account selected, click the 'Unlink Account' button.`);
            expect(await interactionConnect.removeFacebookAccount(config.facebook.displayName)).toBe(true);
        }
    );

    tcdbTest('58365', '0', `Social Media Config - Creating and Deleting Social Media Interaction Channels`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Facebook' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Using TestAgent's web client, verify that you have the 'Twitter' or 'Facebook' account window open,
                and select the account you wish to add a channel to.`);
            await interactionConnect.openSocialMediaAccordion('Facebook');
            expect(await interactionConnect.addFacebookAccount(config.facebook.user, config.facebook.password)).toBe(true);
            await interactionConnect.selectFacebookAccount(config.facebook.displayName);

            addStep(`Click the '+ New' button.`);
            addStep(`Input the desired channel name and click 'Create'.`);
            addStep(`Fill out the channel's edit page with the desired information, and click 'Save'.`);
            const channelName = randomWords(2).join(' ');
            expect(await interactionConnect.addFacebookChannel(channelName, config.facebook.pageName, config.facebook.socialConversationWorkgroup, config.facebook.socialDirectMessageWorkgroup)).toBe(true);

            addStep(`Open the 'My Interactions' view on TestAgent and place a Social - Conversation interaction
                (from the social media platform type used to create the new channel) into the utilized workgroup's queue,`);
            await interactionConnect.openMyInteractionsTab();
            await facebook.postRandom();

            trace('Waiting 5 minutes for Facebook to pass through interaction.');
            const pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
            expect(pickedUpInteraction).toBeTruthy();

            addStep(`Disconnect the connected Social - Conversation interaction.`);
            expect(await interactionConnect.disconnectInteraction(pickedUpInteraction)).toBeTruthy();

            addStep(`Select the recently created channel in the Social Media Config view and click 'Delete'.`);
            await interactionConnect.openSocialMediaConfigTab();
            expect(await interactionConnect.deleteFacebookChannel(channelName)).toBe(true);

            addStep(`Attempt to place another Social - Conversation interaction (from the social media platform type used to create the new channel) into the utilized workgroup's queue.`);
            await interactionConnect.openMyInteractionsTab();
            await facebook.postRandom();

            //Make sure no interaction alerts
            let expectedAlertingError;
            try {
                await interactionConnect.pickupAlertingInteraction(60 * 1000 * 1);
            } catch (error) {
                expectedAlertingError = error;
            }
            expect(expectedAlertingError).toBeTruthy();
        }
    );

    afterAll(async () => {
        await interactionConnect.openSocialMediaConfigTab();
        await interactionConnect.removeAllFacebookAccounts();
        await interactionConnect.logout();
        await interactionConnect.page.close();
        await facebook.logout();
        await facebook.page.close();
    });
});