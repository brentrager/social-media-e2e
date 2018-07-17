/* tslint:disable:quotemark max-line-length */
import { config } from '../util/Config';
import InteractionConnect from '../util/InteractionConnect';
import Twitter from '../util/Twitter';
import { setupTCDBJasmineReporter, tcdbTest } from '../util/TCDB';
import * as randomWords from 'random-words';
import * as puppeteer from 'puppeteer';
import * as failFast from 'jasmine-fail-fast';
global.jasmine.getEnv().addReporter(failFast.init()); // Stop test after first failure.

let interactionConnect: InteractionConnect;
let twitter: Twitter;

jest.setTimeout(5 * 60 * 1000); // Big timeout for long running Puppeteer Actions

beforeAll(async () => {
    setupTCDBJasmineReporter();
});

describe('Social Media - Twitter', () => {
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
        tcdbTest('57556', '2', `Pickup a Social - Conversation Interaction`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Twitter' }] },
            async (addStep: Function, trace: Function) => {
                addStep(`Place a Social - Conversation interaction into TestWorkgroup's queue.`);
                // Make a Twitter post
                await twitter.postRandom();

                addStep(`Pickup the alerting Social - Conversation interaction.`);
                trace('Waiting 5 minutes for Twitter to pass through interaction.');
                pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction).toBeTruthy();
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );

        let comment: puppeteer.ElementHandle;
        tcdbTest('57562', '2', `Responding to a Social - Conversation interaction via the post text box.`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Twitter' }] },
            async (addStep: Function, trace: Function) => {
                addStep(`Using TestAgent's web client, in the 'Current Interaction' view, type out the text of choice in the post text box, and press the send button.`);
                comment = (await interactionConnect.replyToRootPostAndVerifyReply(randomWords(10).join(' '))).asElement();
                expect(comment).toBeTruthy();
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );

        tcdbTest('57563', '0', `Responding to a Social - Conversation interaction via the comment icon in the Current Interaction View.`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Twitter' }] },
            async (addStep: Function, trace: Function) => {
                addStep(`Using TestAgent's web client, in the 'Current Interaction' view, select the comment icon underneath the post that is to be commented on.`);
                addStep(`Type out the text of choice in the post text box, and press the send button..`);
                const commentReply = await interactionConnect.replyToCommentAndVerifyReply(comment, randomWords(10).join(' '));
                expect(commentReply).toBeTruthy();
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );

        tcdbTest('57645', '0', `Place a Social - Conversation Interaction On Hold`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Twitter' }] },
            async (addStep: Function, trace: Function) => {
                addStep(`Using TestAgent's web client, select the Social - Conversation interaction and click the hold button.`);
                expect(await interactionConnect.holdInteraction(pickedUpInteraction)).toBeTruthy();
                addStep(`Pickup the held interaction.`);
                expect(await interactionConnect.pickupInteraction(pickedUpInteraction)).toBeTruthy();
            }
        );

        tcdbTest('57558', '2', `Disconnect a Social - Conversation Interaction`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Twitter' }] },
            async (addStep: Function, trace: Function) => {
                addStep(`Using TestAgent's web client, select the Social - Conversation interaction and click the disconnect button.`);
                expect(await interactionConnect.disconnectInteraction(pickedUpInteraction)).toBeTruthy();
            }
        );

        tcdbTest('57560', '1', `Selecting a Social - Conversation interaction in the 'My Interactions'  view will display the contents of the interaction in the 'Current Interaction' view.`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Twitter' }] },
            async (addStep: Function, trace: Function) => {
                // TODO: Once https://devjira.inin.com/browse/IC-149464 works, this should be changed to make two posts and let
                // the user tiemout on the ACD assignment. Then, the user would go back to available and we would ahve two
                // non connected interactions to quickly peek at (before the ACD timeout). This would be more reliable
                // than getting two posts to come through within the ACD timeout timeframe.

                addStep(`Place 2 different Social - Conversation interactions into TestWorkgroup's queue.`);
                // Make a Twitter post
                const post1 = await twitter.postRandom();
                // Wait 5 minutes for an interaction to alert
                trace('Waiting 5 minutes for Twitter to pass through interaction.');
                // TODO: Remove the pickup step. This must work without pickup. - https://devjira.inin.com/browse/IC-149464
                const pickedUpInteraction1 = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);

                addStep(`Select one of the alerting Social - Conversation interactions.`);
                expect(await interactionConnect.verifyPostVisible(post1)).toBeTruthy();

                // Make a Twitter post
                const post2 = await twitter.postRandom();
                // Wait 5 minutes for an interaction to alert
                trace('Waiting 5 minutes for Twitter to pass through interaction.');
                // TODO: Remove the pickup step. This must work without pickup. - https://devjira.inin.com/browse/IC-149464
                await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);

                addStep(`Select the second alerting Social - Conversation interaction.`);
                expect(await interactionConnect.verifyPostVisible(post2)).toBeTruthy();

                addStep(`Select the Social - Conversation interaction that was selected the first time.`);
                await interactionConnect.clickOnInteraction(pickedUpInteraction1);
                // Let the current interaction view update.
                await interactionConnect.waitFor(2000);

                expect(await interactionConnect.verifyPostVisible(post1)).toBeTruthy();

                // TODO: should use disconnect interaction
                await interactionConnect.disconnectInteractions();
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );

        tcdbTest('58321', '0', `Social - Conversation Interaction Twitter Retweet With a Comment Handling`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Twitter' }] },
            async (addStep: Function, trace: Function) => {
                addStep(`Place a Social - Conversation interaction into TestWorkgroup's queue via a Twitter retweet with a comment.`);
                // Make retweet with a random comment
                const text = randomWords(10).join(' ');
                const tweetURL = await twitter.retweetWithComment(text);

                addStep(`Pickup the alerting Social - Conversation interaction.`);
                // Wait 5 minutes for an interaction to alert
                trace('Waiting 5 minutes for Twitter to pass through interaction.');
                // Pickup interaction
                const pickedUpInteraction1 = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction1).toBeTruthy();
                expect(await interactionConnect.verifyPostContainsText(text)).toBeTruthy();
                expect(await interactionConnect.verifyPostContainsLink(tweetURL)).toBeTruthy();

                addStep(`Reply to the Social - Conversation interaction.`);
                const comment1 = (await interactionConnect.replyToRootPostAndVerifyReply(randomWords(10).join(' '))).asElement();
                expect(comment1).toBeTruthy();

                // TODO: should use disconnect interaction
                await interactionConnect.disconnectInteractions();
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );

        tcdbTest('58306', '1', `Social - Conversation Interaction Inline Image Handling`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Twitter' }] },
            async (addStep: Function, trace: Function) => {
                addStep(`Place a Social - Conversation interaction containing an attached image into TestWorkgroup's queue.`);
                // Make a Twitter post on the alternate account with the main account handle
                await twitter.postRandomWithImage();

                addStep(`Pickup the alerting Social - Conversation interaction.`);
                // Wait 5 minutes for an interaction to alert
                trace('Waiting 5 minutes for Twitter to pass through interaction.');
                // Pickup interaction
                const pickedUpInteraction1 = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction1).toBeTruthy();

                addStep(`Verify that the attached image is viewable in TestAgent's 'Current Interaction' tab.`);
                expect(await interactionConnect.verifyImageVisible()).toBeTruthy();

                // TODO: should use disconnect interaction
                await interactionConnect.disconnectInteractions();
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );

        tcdbTest('58307', '0', `Social - Conversation Interaction Twitter Handle Handling`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Twitter' }] },
            async (addStep: Function, trace: Function) => {
                addStep(`Place a Social - Conversation interaction into TestWorkgroup's queue via a Twitter handle '@' tag.`);
                // Make a Twitter post on the alternate account with the main account handle
                await twitter.postRandomOnAltAccountWithHandle();

                addStep(`Pickup the alerting Social - Conversation interaction.`);
                // Wait 5 minutes for an interaction to alert
                trace('Waiting 5 minutes for Twitter to pass through interaction.');
                // Pickup interaction
                const pickedUpInteraction1 = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                expect(pickedUpInteraction1).toBeTruthy();

                addStep(`Reply to the Social - Conversation interaction.`);
                const comment1 = (await interactionConnect.replyToRootPostAndVerifyReply(randomWords(10).join(' '))).asElement();
                expect(comment1).toBeTruthy();

                // TODO: should use disconnect interaction
                await interactionConnect.disconnectInteractions();
            }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
        );
    });

    afterAll(async () => {
        await interactionConnect.openTab('My Interactions');
        await interactionConnect.disconnectInteractions();
        await interactionConnect.logout();
        await twitter.logout();
    });
});