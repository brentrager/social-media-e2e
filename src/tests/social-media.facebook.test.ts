/* tslint:disable:quotemark max-line-length */
import { config } from '../util/Config';
import InteractionConnect from '../util/InteractionConnect';
import Facebook from '../util/Facebook';
import { setupTCDBJasmineReporter, tcdbTest } from '../util/TCDB';
import * as randomWords from 'random-words';
import * as failFast from 'jasmine-fail-fast';
import Twitter from '../util/Twitter';
global.jasmine.getEnv().addReporter(failFast.init()); // Stop test after first failure.

let interactionConnect: InteractionConnect;
let facebook: Facebook;
let twitter: Twitter;

jest.setTimeout(5 * 60 * 1000); // Big timeout for long running Puppeteer Actions

beforeAll(async () => {
    setupTCDBJasmineReporter();
});

describe('Social Media - Facebook', () => {
    /*
    describe.skip('Facebook Social Config', () => {
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
                // await interactionConnect.disableSocialMediaAccount();

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
                expect(await interactionConnect.addFacebookChannel(channelName, config.facebook.pageName, config.facebook.socialConversationWorkgroup)).toBe(true);

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

                // TODO: Make sure no interaction alerts expect(await interactionConnect.pickupAlertingInteraction(60 * 1000 * 1)).toThrow();
            }
        );

        afterAll(async () => {
            await interactionConnect.openSocialMediaConfigTab();
            await interactionConnect.removeFacebookAccount(config.facebook.displayName);
            await interactionConnect.logout();
            await interactionConnect.page.close();
            await facebook.page.close();
        });
    });

    */
    describe.only('Social Media Facebook Interactions', async () => {
        beforeAll(async () => {
            // Launch Interaction Connect
            interactionConnect = new InteractionConnect(config, global.browser);
            await interactionConnect.launch();
            await interactionConnect.openTab('My Interactions');
            await interactionConnect.disconnectInteractions();
            // await interactionConnect.openSocialMediaConfigTab();
            // await interactionConnect.addFacebookAccount(config.facebook.user, config.facebook.password);
            // await interactionConnect.addFacebookChannel(randomWords(2).join(' '), config.facebook.pageName, config.facebook.socialConversationWorkgroup);

            // Launch Facebook
            facebook = new Facebook(config, global.browser);
            await facebook.launch();
        });

        /*
        describe.skip('Facebook Social Conversations', () => {
            let pickedUpInteraction: string;
            tcdbTest.only('57557', '3', `Pickup a Social - Direct Message Interaction`, {},
                async (addStep: Function, trace: Function) => {
                    addStep(`Place a Social - Direct Message interaction into TestWorkgroup's queue.`);
                    // Make a Facebook post
                    await facebook.postRandom();

                    addStep(`Pickup the alerting Social - Direct Message interaction.`);
                    trace('Waiting 5 minutes for Facebook to pass through interaction.');
                    pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                    expect(pickedUpInteraction).toBeTruthy();
                }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
            );

            let comment: puppeteer.ElementHandle;
            tcdbTest('57562', '2', `Responding to a Social - Conversation interaction via the post text box.`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Facebook' }] },
                async (addStep: Function, trace: Function) => {
                    addStep(`Using TestAgent's web client, in the 'Current Interaction' view, type out the text of choice in the post text box, and press the send button.`);
                    comment = (await interactionConnect.replyToRootPostAndVerifyReply(randomWords(10).join(' '))).asElement();
                    expect(comment).toBeTruthy();
                }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
            );

            tcdbTest('57563', '0', `Responding to a Social - Conversation interaction via the comment icon in the Current Interaction View.`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Facebook' }] },
                async (addStep: Function, trace: Function) => {
                    addStep(`Using TestAgent's web client, in the 'Current Interaction' view, select the comment icon underneath the post that is to be commented on.`);
                    addStep(`Type out the text of choice in the post text box, and press the send button..`);
                    const commentReply = await interactionConnect.replyToCommentAndVerifyReply(comment, randomWords(10).join(' '));
                    expect(commentReply).toBeTruthy();
                }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
            );

            tcdbTest('57645', '0', `Place a Social - Conversation Interaction On Hold`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Facebook' }] },
                async (addStep: Function, trace: Function) => {
                    addStep(`Using TestAgent's web client, select the Social - Conversation interaction and click the hold button.`);
                    expect(await interactionConnect.holdInteraction(pickedUpInteraction)).toBeTruthy();
                    addStep(`Pickup the held interaction.`);
                    expect(await interactionConnect.pickupInteraction(pickedUpInteraction)).toBeTruthy();
                }
            );

            tcdbTest('57558', '2', `Disconnect a Social - Conversation Interaction`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Facebook' }] },
                async (addStep: Function, trace: Function) => {
                    addStep(`Using TestAgent's web client, select the Social - Conversation interaction and click the disconnect button.`);
                    expect(await interactionConnect.disconnectInteraction(pickedUpInteraction)).toBeTruthy();
                }
            );

            let pickedUpInteractions: any = {};
            tcdbTest('57560', '1', `Selecting a Social - Conversation interaction in the 'My Interactions'  view will display the contents of the interaction in the 'Current Interaction' view.`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Facebook' }] },
                async (addStep: Function, trace: Function) => {
                    // TODO: Once https://devjira.inin.com/browse/IC-149464 works, this should be changed to make two posts and let
                    // the user tiemout on the ACD assignment. Then, the user would go back to available and we would ahve two
                    // non connected interactions to quickly peek at (before the ACD timeout). This would be more reliable
                    // than getting two posts to come through within the ACD timeout timeframe.

                    addStep(`Place 2 different Social - Conversation interactions into TestWorkgroup's queue.`);
                    // Make a Facebook post
                    const post1 = await facebook.postRandom();
                    // Wait 5 minutes for an interaction to alert
                    trace('Waiting 5 minutes for Facebook to pass through interaction.');
                    // TODO: Remove the pickup step. This must work without pickup. - https://devjira.inin.com/browse/IC-149464
                    const pickedUpInteraction1 = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);

                    addStep(`Select one of the alerting Social - Conversation interactions.`);
                    expect(await interactionConnect.verifyPostVisible(post1)).toBeTruthy();

                    // Make a Facebook post
                    const post2 = await facebook.postRandom();
                    // Wait 5 minutes for an interaction to alert
                    trace('Waiting 5 minutes for Facebook to pass through interaction.');
                    // TODO: Remove the pickup step. This must work without pickup. - https://devjira.inin.com/browse/IC-149464
                    const pickedUpInteraction2 = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);

                    addStep(`Select the second alerting Social - Conversation interaction.`);
                    expect(await interactionConnect.verifyPostVisible(post2)).toBeTruthy();

                    addStep(`Select the Social - Conversation interaction that was selected the first time.`);
                    await interactionConnect.openMyInteractionsTab();
                    await interactionConnect.clickOnInteraction(pickedUpInteraction1);
                    // Let the current interaction view update.
                    await interactionConnect.waitFor(2000);

                    expect(await interactionConnect.verifyPostVisible(post1)).toBeTruthy();

                    pickedUpInteractions = { pickedUpInteraction1, pickedUpInteraction2 };
                }, 10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
            );

            tcdbTest('57552', '1', `Filter a User Queue By Social - Conversation Interaction Type`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Facebook' }] },
                async (addStep: Function, trace: Function) => {
                    addStep(`Add TestUser's user queue view to TestUser's web client.`);
                    await interactionConnect.openUserQueueTab(config.ic.user);

                    addStep(`Click the filter queue button.`);
                    addStep(`Choose to filter the user queue by the Social - Conversation interaction type.`);
                    await interactionConnect.waitFor(2000);
                    await interactionConnect.filterUserQueueOnSocialConversations();
                    expect(await interactionConnect.getInteractionRow(pickedUpInteractions.pickedUpInteraction1)).toBeTruthy();

                    await interactionConnect.clearUserQueueFilter();
                }
            );

            tcdbTest('57548', '3', `Filter a Workgroup Queue By Social - Conversation Interaction Type`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Facebook' }] },
                async (addStep: Function, trace: Function) => {
                    addStep(`Add TestWorkgroup's workgroup queue view to TestUser's web client.`);
                    await interactionConnect.openWorkgroupQueueTab(config.ic.workgroup);

                    addStep(`Click the filter queue button.`);
                    addStep(`Choose to filter the workgroup queue by the Social - Conversation interaction type.`);
                    await interactionConnect.waitFor(2000);
                    await interactionConnect.filterWorkgroupQueueOnSocialConversations();
                    expect(await interactionConnect.getInteractionRow(pickedUpInteractions.pickedUpInteraction1)).toBeTruthy();

                    await interactionConnect.clearWorkgroupQueueFilter();
                }
            );

            tcdbTest('57547', '0', `Configure Ring Sound for Social - Conversations`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Facebook' }] },
                async (addStep: Function, trace: Function) => {
                    addStep(`Open the application settings dialog and navigate to the ring sounds settings page.`);
                    await interactionConnect.openRingSoundsSettings();

                    addStep(`Choose a ring sound from the menu (other than the currently selected option) for Social - Conversation interactions.`);
                    addStep(`Save the settings.`);
                    const originalRingSound = await interactionConnect.getCurrentSocialConversationRingSound();
                    const newRingSound = await interactionConnect.toggleSocialConversationRingSound();

                    expect(originalRingSound).not.toEqual(newRingSound);

                    addStep(`Re-open the application settings dialog, navigating to the Ring Sounds tab.`);
                    await interactionConnect.openRingSoundsSettings();
                    const reopenSettingsRingSound = await interactionConnect.getCurrentSocialConversationRingSound();

                    expect(reopenSettingsRingSound).toEqual(newRingSound);

                    await interactionConnect.toggleSocialConversationRingSound();
                }
            );
        });
*/
        describe.only('Facebook Social Direct Messages', () => {
            beforeAll(async () => {
                twitter = new Twitter(config, global.browser);
                await twitter.launch();
                await twitter.logout();
            });

            let pickedUpInteraction: string;
            let originalMessage: string;
            tcdbTest('57557', '3', 'Pickup a Social - Direct Message Interaction', {},
                async (addStep: Function, trace: Function) => {
                    addStep(`Place a Social - Direct Message interaction into TestWorkgroup's queue.`);
                    originalMessage = await facebook.messageRandom();
                    addStep(`Pickup the alerting Social - Direct Message interaction.`);
                    trace('Waiting 5 minutes for Facebook to pass through interaction.');
                    pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);
                    expect(pickedUpInteraction).toBeTruthy();
                }
            );

            tcdbTest.skip('57646', '2', 'Place a Social - Direct Message Interaction On Hold', {},
                async (addStep: Function, trace: Function) => {
                    addStep(`Using TestAgent's web client, select the Social - Direct Message interaction and click the hold button.`);
                    expect(await interactionConnect.holdInteraction(pickedUpInteraction)).toBeTruthy();
                    addStep(`Pickup the held interaction.`);
                    expect(await interactionConnect.pickupInteraction(pickedUpInteraction)).toBeTruthy();
                }
            );

            tcdbTest.skip('58932', '0', 'Responding to a Social - Direct Message interaction via the post text box', {},
                async (addStep: Function, trace: Function) => {
                    addStep(`Using TestAgent's web client, in the 'Current Interaction' view, type out the text of choice in the post text box, and press the send button.`);
                    const message = await interactionConnect.replyDirectMessageAndVerifyReply(randomWords(10).join(' '));
                    expect(message).toBeTruthy();
                }
            );

            tcdbTest.skip('58934', '0', 'Social - Direct Message Interaction Inline Image Handling', {},
                async (addStep: Function, trace: Function) => {
                    addStep(`Place a Social - Direct Message interaction containing an  image into TestWorkgroup's queue.`);
                    addStep(`Pickup the alerting Social - Direct Message interaction.`);
                    addStep(`Verify that the image is viewable in TestAgent's 'Current Interaction' tab.`);
                    await facebook.messageImage();
                    await interactionConnect.waitForDirectMessageImage();
                }
            );

            tcdbTest.skip('57549', '3', 'Filter a Workgroup Queue By Social - Direct Message Interaction Type', {},
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

            tcdbTest.skip('57553', '4', 'Filter a User Queue By Social - Direct Message Interaction Type', {},
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
            tcdbTest('57561', '2', 'Selecting a Social - Direct Message interaction in the \'My Interactions\'  view will display the contents of the interaction in the \'Current Interaction\' view.', {},
                async (addStep: Function, trace: Function) => {
                    addStep(`Place 2 different Social - Direct Message interactions into TestWorkgroup's queue.`);
                    // Send a Twitter DM to get another DM in the system.
                    await twitter.signIn(config.twitter.user2, config.twitter.password2);
                    const twitterMessage = await twitter.messageRandom(config.twitter.user);
                    pickedUpInteraction2 = await interactionConnect.pickupAlertingInteraction(60 * 1000 * 5);

                    addStep(`Select one of the alerting Social - Direct Message interactions.`);
                    await interactionConnect.waitForDirectMessage(twitterMessage);

                    addStep(`Select the second alerting Social - Direct Message interaction.`);
                    await interactionConnect.clickOnInteraction(pickedUpInteraction);
                    await interactionConnect.waitForDirectMessage(originalMessage);

                }
            );

            tcdbTest('57648', '3', 'Transfer a Social - Direct Message Interaction', {},
                async (addStep: Function, trace: Function) => {
                    addStep(`Using TestAgent1's web client, select the Social - Direct Message interaction and click the transfer button.`);
                    await interactionConnect.clickOnInteraction(pickedUpInteraction2);
                    addStep(`Within the transfer dialog, enter TestAgent2's extension.`);
                    addStep(`Click Transfer.`);
                }
            );

            tcdbTest.skip('57559', '4', 'Disconnect a Social - Direct Message Interaction', {},
                async (addStep: Function, trace: Function) => {
                    addStep(`Using TestAgent's web client, select the Social - Direct Message interaction and click the disconnect button.`);
                    expect(await interactionConnect.disconnectInteraction(pickedUpInteraction)).toBeTruthy();
                }
            );

            tcdbTest.skip('57546', '2', 'Configure Ring Sound for Social - Direct Messages', {},
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
                await twitter.page.close();
            });
        });

        afterAll(async () => {
            await interactionConnect.openTab('My Interactions');
            await interactionConnect.disconnectInteractions();
            await interactionConnect.logout();
            await interactionConnect.page.close();
            await facebook.page.close();
        });
    });
});
