/* tslint:disable:quotemark max-line-length */
import { config } from '../util/Config';
import InteractionConnect from '../util/InteractionConnect';
import Twitter from '../util/Twitter';
import { setupTCDBJasmineReporter, tcdbTest } from '../util/TCDB';
import * as randomWords from 'random-words';
import * as failFast from 'jasmine-fail-fast';
global.jasmine.getEnv().addReporter(failFast.init()); // Stop test after first failure.

let interactionConnect: InteractionConnect;
let twitter: Twitter;

jest.setTimeout(10 * 60 * 1000); // Big timeout for long running Puppeteer Actions

beforeAll(async () => {
    setupTCDBJasmineReporter();
});

describe('Social Media - Twitter Social Direct Messages', () => {
    beforeAll(async () => {
        // Launch Twitter
        twitter = new Twitter(config, global.browser);
        await twitter.launch();

        // Launch Interaction Connect
        interactionConnect = new InteractionConnect(config, global.browser);
        await interactionConnect.setupTwitterConfig();
        await interactionConnect.launch(false);
        await interactionConnect.openMyInteractionsTab();
        await interactionConnect.disconnectInteractions();
    });
    
    let pickedUpInteraction: string;
    let originalMessage: string;
    tcdbTest('57557', '3', 'Pickup a Social - Direct Message Interaction', { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_DIRECT_MESSAGE_INTERACTION_TYPE, value: 'Twitter' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Place a Social - Direct Message interaction into TestWorkgroup's queue.`);
            await twitter.logout();
            await twitter.signIn(config.twitter.user2, config.twitter.password2);
            originalMessage = await twitter.messageRandom(config.twitter.displayName);
            addStep(`Pickup the alerting Social - Direct Message interaction.`);
            trace('Waiting 5 minutes for Twitter to pass through interaction.');
            pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
            expect(pickedUpInteraction).toBeTruthy();
        }
    );

    tcdbTest('57646', '2', 'Place a Social - Direct Message Interaction On Hold', { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_DIRECT_MESSAGE_INTERACTION_TYPE, value: 'Twitter' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Using TestAgent's web client, select the Social - Direct Message interaction and click the hold button.`);
            expect(await interactionConnect.holdInteraction(pickedUpInteraction)).toBeTruthy();
            addStep(`Pickup the held interaction.`);
            expect(await interactionConnect.pickupInteraction(pickedUpInteraction)).toBeTruthy();
        }
    );

    tcdbTest('58932', '0', 'Responding to a Social - Direct Message interaction via the post text box', { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_DIRECT_MESSAGE_INTERACTION_TYPE, value: 'Twitter' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Using TestAgent's web client, in the 'Current Interaction' view, type out the text of choice in the post text box, and press the send button.`);
            const message = await interactionConnect.replyDirectMessageAndVerifyReply(randomWords(10).join(' '));
            expect(message).toBeTruthy();
        }
    );

    tcdbTest('58934', '0', 'Social - Direct Message Interaction Inline Image Handling', { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_DIRECT_MESSAGE_INTERACTION_TYPE, value: 'Twitter' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Place a Social - Direct Message interaction containing an  image into TestWorkgroup's queue.`);
            addStep(`Pickup the alerting Social - Direct Message interaction.`);
            addStep(`Verify that the image is viewable in TestAgent's 'Current Interaction' tab.`);
            await twitter.messageImage(config.twitter.displayName);
            await interactionConnect.waitForDirectMessageImage();
        }
    );

    tcdbTest('57549', '3', 'Filter a Workgroup Queue By Social - Direct Message Interaction Type', { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_DIRECT_MESSAGE_INTERACTION_TYPE, value: 'Twitter' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Add TestWorkgroup's workgroup queue view to TestUser's web client.`);
            await interactionConnect.openWorkgroupQueueTab(config.ic.workgroup);
            addStep(`Click the filter queue button.`);
            addStep(`Choose to filter the workgroup queue by the Social - Direct Message interaction type.`);
            await interactionConnect.waitFor(2000);
            await interactionConnect.filterWorkgroupQueueOnDirectMessages();
            expect(await interactionConnect.getInteractionRow(pickedUpInteraction)).toBeTruthy();
            await interactionConnect.clearWorkgroupQueueFilter();
        }
    );

    tcdbTest('57553', '4', 'Filter a User Queue By Social - Direct Message Interaction Type', { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_DIRECT_MESSAGE_INTERACTION_TYPE, value: 'Twitter' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Add TestUser's user queue view to TestUser's web client.`);
            await interactionConnect.openUserQueueTab(config.ic.user);
            addStep(`Click the filter queue button.`);
            addStep(`Choose to filter the user queue by the Social - Direct Message interaction type.`);
            await interactionConnect.waitFor(2000);
            await interactionConnect.filterUserQueueOnDirectMessages();
            expect(await interactionConnect.getInteractionRow(pickedUpInteraction)).toBeTruthy();
            await interactionConnect.clearUserQueueFilter();
        }
    );

    let pickedUpInteraction2: string;
    tcdbTest('57561', '2', 'Selecting a Social - Direct Message interaction in the \'My Interactions\'  view will display the contents of the interaction in the \'Current Interaction\' view.', { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_DIRECT_MESSAGE_INTERACTION_TYPE, value: 'Twitter' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Place 2 different Social - Direct Message interactions into TestWorkgroup's queue.`);
            await twitter.logout();
            await twitter.signIn(config.twitter.user3, config.twitter.password3);
            const twitterMessage2 = await twitter.messageRandom(config.twitter.displayName);
            pickedUpInteraction2 = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);

            addStep(`Select one of the alerting Social - Direct Message interactions.`);
            await interactionConnect.waitForDirectMessage(twitterMessage2);

            addStep(`Select the second alerting Social - Direct Message interaction.`);
            await interactionConnect.clickOnInteraction(pickedUpInteraction);
            await interactionConnect.waitForDirectMessage(originalMessage);
        }
    );

    tcdbTest('57648', '3', 'Transfer a Social - Direct Message Interaction', { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_DIRECT_MESSAGE_INTERACTION_TYPE, value: 'Twitter' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Using TestAgent1's web client, select the Social - Direct Message interaction and click the transfer button.`);
            addStep(`Within the transfer dialog, enter TestAgent2's extension.`);
            addStep(`Click Transfer.`);
            await interactionConnect.clickOnInteraction(pickedUpInteraction2);
            await interactionConnect.transferInteraction(pickedUpInteraction2, config.ic.adminUser);
            await interactionConnect.openUserQueueTab(config.ic.adminUser);
            await interactionConnect.waitFor(2000);
            expect(await interactionConnect.getInteractionRow(pickedUpInteraction2)).toBeTruthy();
            // TODO: await interactionConnect.disconnectInteraction(pickedUpInteraction2);
            // TODO: await interactionConnect.confirmUnownedDisconnect();
            await interactionConnect.openMyInteractionsTab();
        }
    );

    tcdbTest('57559', '4', 'Disconnect a Social - Direct Message Interaction', { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_DIRECT_MESSAGE_INTERACTION_TYPE, value: 'Twitter' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Using TestAgent's web client, select the Social - Direct Message interaction and click the disconnect button.`);
            expect(await interactionConnect.disconnectInteraction(pickedUpInteraction)).toBeTruthy();
        }
    );

    tcdbTest('57546', '2', 'Configure Ring Sound for Social - Direct Messages', { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_DIRECT_MESSAGE_INTERACTION_TYPE, value: 'Twitter' }] },
        async (addStep: Function, trace: Function) => {
            addStep(`Open the application settings dialog and navigate to the ring sounds settings page.`);
            await interactionConnect.openRingSoundsSettings();

            addStep(`Choose a ring sound from the menu (other than the currently selected option) for Social - Direct Message interactions.`);
            addStep(`Save the settings.`);
            const originalRingSound = await interactionConnect.getCurrentDirectMessageRingSound();
            const newRingSound = await interactionConnect.toggleDirectMessageRingSound();
            expect(originalRingSound).not.toEqual(newRingSound);

            addStep(`Re-open the application settings dialog, navigating to the Ring Sounds tab.`);
            await interactionConnect.openRingSoundsSettings();
            const reopenSettingsRingSound = await interactionConnect.getCurrentDirectMessageRingSound();
            expect(reopenSettingsRingSound).toEqual(newRingSound);
            await interactionConnect.toggleDirectMessageRingSound();
        }
    );

    afterAll(async () => {
        await interactionConnect.openMyInteractionsTab();
        await interactionConnect.disconnectInteractions();
        await interactionConnect.logout();
        await interactionConnect.page.close();
        await interactionConnect.launch(true);
        await interactionConnect.openSocialMediaConfigTab();
        await interactionConnect.removeAllAccounts('twitter');
        await interactionConnect.logout();
        await interactionConnect.page.close();
        await twitter.logout();
        await twitter.page.close();
    });
});