/* tslint:disable:quotemark max-line-length */
import { config } from '../util/Config';
import InteractionConnect from '../util/InteractionConnect';
import Twitter from '../util/Twitter';
import { setupTCDBJasmineReporter, tcdbTest } from '../util/TCDB';
import * as failFast from 'jasmine-fail-fast';
global.jasmine.getEnv().addReporter(failFast.init()); // Stop test after first failure.

let interactionConnect: InteractionConnect;
let twitter: Twitter;

jest.setTimeout(5 * 60 * 1000); // Big timeout for long running Puppeteer Actions

beforeAll(async () => {
    setupTCDBJasmineReporter();
});

describe('Social Media - Response Management', () => {
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

    describe('Twitter Social Conversations', () => {
        let pickedUpInteraction: string;
        let textResponseInserted: boolean;
        tcdbTest('58572', '2', `Insert a Text Response into a Social Conversation.`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Twitter' }] },
            async (addStep: Function, trace: Function) => {
                await twitter.postRandom();
                trace('Waiting 5 minutes for Twitter to pass through interaction.');
                pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction).toBeTruthy();
                addStep('Within the Response Management view, select Response1.');                
                await interactionConnect.addAndInsertTextResponse();
                addStep(`Insert the Text response into the Social Conversation interaction on TestAgent's queue.`);
                textResponseInserted = await interactionConnect.isTextResponseInserted("test response text");
                expect(textResponseInserted).toBeTruthy();
                addStep('Send the Social Conversation message.');
                await interactionConnect.sendReplyToRootPostAndVerifyReply("test response text");
            }, 10 * 60 * 1000 );
    });

    afterAll(async () => {
        await interactionConnect.openResponseManagementTab();
        await interactionConnect.removeAllResponses();
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