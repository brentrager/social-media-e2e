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
    describe('Twitter Social Conversations', () => {
        beforeAll(async () => {
            // Launch Interaction Connect
            interactionConnect = new InteractionConnect(config, global.browser);
            await interactionConnect.launch();
            await interactionConnect.openTab('My Interactions');
            await interactionConnect.disconnectInteractions();       
            // Launch Twitter
            twitter = new Twitter(config, global.browser);
            await twitter.launch();     
        });

        let pickedUpInteraction: string;
        tcdbTest('58572', '2', `Insert a Text Response into a Social Conversation.`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Twitter' }] },
            async (addStep: Function, trace: Function) => {
                await twitter.postRandom();
                trace('Waiting 5 minutes for Twitter to pass through interaction.');
                pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction).toBeTruthy();
                await interactionConnect.openCurrentInteractionTab(); 
                addStep(`Within the Response Management view, select Response1.`);                
                await interactionConnect.addAndInsertTextResponse();
                addStep(`Insert the Text response into the Social Conversation interaction on TestAgent's queue.`);
                addStep(`Send the Social Conversation message.`);
                await interactionConnect.sendTextResponse();
            }, 10 * 60 * 1000 );
    });

    afterAll(async () => {
        await interactionConnect.openTab('My Interactions');
        await interactionConnect.disconnectInteractions();
        await interactionConnect.logout();
        await twitter.logout();
        await interactionConnect.page.close();
        await twitter.page.close();
    });
});