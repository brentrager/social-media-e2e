import { config } from "../util/Config";
import InteractionConnect from "../util/InteractionConnect";
import Facebook from "../util/Facebook";
import { setupTCDBJasmineReporter, tcdbTest } from "../util/TCDB";
import * as randomWords from "random-words";
import * as puppeteer from "puppeteer";

let interactionConnect: InteractionConnect;
let facebook: Facebook;

// Big timeout for long running Puppeteer Actions
jest.setTimeout(2 * 100 * 1000);

beforeAll(async () => {
  setupTCDBJasmineReporter();
});

describe("Social Media Interactions Test", () => {
  beforeAll(async () => {
    // Launch Interaction Connect
    interactionConnect = new InteractionConnect(config, global.browser);
    await interactionConnect.launch();
    await interactionConnect.openTab("My Interactions");

    // Launch Facebook
    facebook = new Facebook(config, global.browser);
    await facebook.launch();
  });

  let pickedUpInteraction: string;
  tcdbTest(
    "57556",
    "2",
    `Pickup a Social - Conversation Interaction`,
    {
      attributes: [
        {
          attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE,
          value: "Facebook"
        }
      ]
    },
    async (addStep: Function, trace: Function) => {
      addStep(
        `Place a Social - Conversation interaction into TestWorkgroup's queue.`
      );
      // Make a Facebook post
      await facebook.postRandom();

      addStep(`Pickup the alerting Social - Conversation interaction.`);
      trace("Waiting 5 minutes for Facebook to pass through interaction.");
      pickedUpInteraction = await interactionConnect.pickupAlertingInteraction(
        60 * 1000 * 5
      );
      expect(pickedUpInteraction).toBeTruthy();
    },
    10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
  );

  let comment: puppeteer.ElementHandle;
  tcdbTest(
    "57562",
    "2",
    `Responding to a Social - Conversation interaction via the post text box.`,
    {
      attributes: [
        {
          attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE,
          value: "Facebook"
        }
      ]
    },
    async (addStep: Function, trace: Function) => {
      addStep(
        `Using TestAgent's web client, in the 'Current Interaction' view, type out the text of choice in the post text box, and press the send button.`
      );
      comment = (await interactionConnect.replyToFacebookRootPostAndVerifyReply(
        randomWords(10).join(" ")
      )).asElement();
      expect(comment).toBeTruthy();
    },
    10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
  );

  tcdbTest(
    "57563",
    "0",
    `Responding to a Social - Conversation interaction via the comment icon in the Current Interaction View.`,
    {
      attributes: [
        {
          attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE,
          value: "Facebook"
        }
      ]
    },
    async (addStep: Function, trace: Function) => {
      addStep(`Social Conversation Interaction Type`);
      const commentReply = await interactionConnect.replyToFacebookCommentAndVerifyReply(
        comment,
        randomWords(10).join(" ")
      );
      expect(commentReply).toBeTruthy();
    },
    10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
  );

  tcdbTest(
    "57645",
    "0",
    `Place a Social - Conversation Interaction On Hold`,
    {
      attributes: [
        {
          attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE,
          value: "Facebook"
        }
      ]
    },
    async (addStep: Function, trace: Function) => {
      addStep(
        `Using TestAgent's web client, select the Social - Conversation interaction and click the hold button.`
      );
      expect(
        await interactionConnect.holdInteraction(pickedUpInteraction)
      ).toBeTruthy();
      addStep(`Pickup the held interaction.`);
      expect(
        await interactionConnect.pickupInteraction(pickedUpInteraction)
      ).toBeTruthy();
    }
  );

  tcdbTest(
    "57558",
    "2",
    `Disconnect a Social - Conversation Interaction`,
    {
      attributes: [
        {
          attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE,
          value: "Facebook"
        }
      ]
    },
    async (addStep: Function, trace: Function) => {
      addStep(
        `Using TestAgent's web client, select the Social - Conversation interaction and click the disconnect button.`
      );
      expect(
        await interactionConnect.disconnectInteraction(pickedUpInteraction)
      ).toBeTruthy();
    }
  );

  let pickedUpInteractions: any = {};
  tcdbTest(
    "57560",
    "1",
    `Selecting a Social - Conversation interaction in the 'My Interactions'  view will display the contents of the interaction in the 'Current Interaction' view.`,
    {
      attributes: [
        {
          attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE,
          value: "Facebook"
        }
      ]
    },
    async (addStep: Function, trace: Function) => {
      // TODO: Once https://devjira.inin.com/browse/IC-149464 works, this should be changed to make two posts and let
      // the user tiemout on the ACD assignment. Then, the user would go back to available and we would ahve two
      // non connected interactions to quickly peek at (before the ACD timeout). This would be more reliable
      // than getting two posts to come through within the ACD timeout timeframe.

      addStep(
        `Place 2 different Social - Conversation interactions into TestWorkgroup's queue.`
      );
      // Make a Facebook post
      const post1 = await facebook.postRandom();
      // Wait 5 minutes for an interaction to alert
      trace("Waiting 5 minutes for Facebook to pass through interaction.");
      // TODO: Remove the pickup step. This must work without pickup. - https://devjira.inin.com/browse/IC-149464
      const pickedUpInteraction1 = await interactionConnect.pickupAlertingInteraction(
        60 * 1000 * 5
      );

      addStep(`Select one of the alerting Social - Conversation interactions.`);
      expect(
        await interactionConnect.verifyFacebookPostVisible(post1)
      ).toBeTruthy();

      // Make a Facebook post
      const post2 = await facebook.postRandom();
      // Wait 5 minutes for an interaction to alert
      trace("Waiting 5 minutes for Facebook to pass through interaction.");
      // TODO: Remove the pickup step. This must work without pickup. - https://devjira.inin.com/browse/IC-149464
      const pickedUpInteraction2 = await interactionConnect.pickupAlertingInteraction(
        60 * 1000 * 5
      );

      addStep(`Select the second alerting Social - Conversation interaction.S`);
      expect(
        await interactionConnect.verifyFacebookPostVisible(post2)
      ).toBeTruthy();

      addStep(
        `Select the Social - Conversation interaction that was selected the first time.`
      );
      await interactionConnect.clickOnInteraction(pickedUpInteraction1);
      // Let the current interaction view update.
      await interactionConnect.waitFor(2000);

      expect(
        await interactionConnect.verifyFacebookPostVisible(post1)
      ).toBeTruthy();

      pickedUpInteractions = { pickedUpInteraction1, pickedUpInteraction2 };
    },
    10 * 60 * 1000 // We give a long timeout here in case the interaction takes forever.
  );

  tcdbTest(
    "57552",
    "1",
    `Filter a User Queue By Social - Conversation Interaction Type`,
    { attributes: [{ attribute: global.tcdb.ATTRIBUTE_BROWSER_LIST }] },
    async (addStep: Function, trace: Function) => {
      addStep(`Add TestUser's user queue view to TestUser's web client.`);
      await interactionConnect.openTab(config.ic.user);

      addStep(`Click the filter queue button.`);
      addStep(
        `Choose to filter the user queue by the Social - Conversation interaction type.`
      );
      await interactionConnect.filterQueueOnSocialConversations();
      expect(
        await interactionConnect.getInteractionRow(
          pickedUpInteractions.pickedUpInteraction1
        )
      ).toBeTruthy();

      await interactionConnect.clearQueueFilter();
    }
  );

  tcdbTest(
    "57548",
    "3",
    `Disconnect a Social - Conversation Interaction`,
    { attributes: [{ attribute: global.tcdb.ATTRIBUTE_BROWSER_LIST }] },
    async (addStep: Function, trace: Function) => {
      addStep(
        `Add TestWorkgroup's workgroup queue view to TestUser's web client.`
      );
      await interactionConnect.openTab(config.ic.workgroup);

      addStep(`Click the filter queue button.`);
      addStep(
        `Choose to filter the workgroup queue by the Social - Conversation interaction type.`
      );
      await interactionConnect.filterQueueOnSocialConversations();
      expect(
        await interactionConnect.getInteractionRow(
          pickedUpInteractions.pickedUpInteraction1
        )
      ).toBeTruthy();

      await interactionConnect.clearQueueFilter();
    }
  );

  tcdbTest(
    "57547",
    "0",
    `Configure Ring Sound for Social - Conversations`,
    { attributes: [{ attribute: global.tcdb.ATTRIBUTE_BROWSER_FREE_ENTRY }] },
    async (addStep: Function, trace: Function) => {
      addStep(
        `Open the application settings dialog and navigate to the ring sounds settings page.`
      );
      await interactionConnect.openRingSoundsSettings();

      addStep(
        `Choose a ring sound from the menu (other than the currently selected option) for Social - Conversation interactions.`
      );
      addStep(`Save the settings.`);
      let originalRingSound = await interactionConnect.getCurrentSocialConversationRingSound();
      let newRingSound = await interactionConnect.toggleSocialConversationRingSound();

      expect(originalRingSound).not.toEqual(newRingSound);

      addStep(
        `Re-open the application settings dialog, navigating to the Ring Sounds tab.`
      );
      await interactionConnect.openRingSoundsSettings();
      let reopenSettingsRingSound = await interactionConnect.getCurrentSocialConversationRingSound();

      expect(reopenSettingsRingSound).toEqual(newRingSound);

      await interactionConnect.toggleSocialConversationRingSound();
    }
  );

  afterAll(async () => {
    await interactionConnect.openTab("My Interactions");
    await interactionConnect.disconnectInteractions();
    await interactionConnect.logout();
  });
});
