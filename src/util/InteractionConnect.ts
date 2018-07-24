/* tslint:disable:quotemark max-line-length */
import * as puppeteer from 'puppeteer';
import * as moment from 'moment';
import { Config } from './Config';
import Base from './Base';

export default class InteractionConnect extends Base {
    private DEFAULT_TIMEOUT: number = 2 * 60 * 1000;
    private page: puppeteer.Page;

    constructor(private config: Config, private browser: puppeteer.Browser) {
        super();
        this.logTopic = 'Interaction Connect';
    }

    async launch(): Promise<void> {
        try {
            this.log(`Launching Interaction Connect at: ${this.config.interactionConnect.url}`);

            // Load the page
            this.page = await this.browser.newPage();
            await this.page.setViewport({ width: 1000, height: 800 });
            await this.page.goto(this.config.interactionConnect.url);

            this.log(`Choosing server: ${this.config.ic.server}`);
            const serverTextInput = (await this.page.waitFor('input[data-inintest=ic-logon-server]')).asElement() as puppeteer.ElementHandle;
            await serverTextInput.type(this.config.ic.server);
            const chooseServerButton = (await this.page.$('button[data-inintest=ic-logon-choose-server]')) as puppeteer.ElementHandle;
            await chooseServerButton.click();

            this.log(`Logging on as: ${this.config.ic.user}, ${this.config.ic.password}`);
            const icAuthButton = (await this.page.waitFor('button[data-inintest="ic-logon-auth-type-Interaction Center Authentication"]')).asElement() as puppeteer.ElementHandle;
            await icAuthButton.click();
            const icAuthUsernameInput = (await this.page.waitFor('input#username')).asElement() as puppeteer.ElementHandle;
            await icAuthUsernameInput.type(this.config.ic.user);
            const icAuthPasswordInput = (await this.page.$('input#password')) as puppeteer.ElementHandle;
            await icAuthPasswordInput.type(this.config.ic.password);
            const icAuthSubmitButton = (await this.page.$('button[data-inintest=sts-ic-auth-submit]')) as puppeteer.ElementHandle;
            await icAuthSubmitButton.click();

            this.log('Changing station.');
            const changeStationButton = (await this.page.waitFor('button[data-inintest=ic-change-station-submit]')).asElement() as puppeteer.ElementHandle;
            await changeStationButton.click();

            this.log('Waiting for ready for interactions.');
            await this.page.waitFor('button[data-inintest=inin-command-button-pickup-base]');

            this.log('Ready for interactions.');
        } catch (error) {
            this.logError(`Error launching: ${error}`);
            throw error;
        }
    }

    async bringToFront(): Promise<void> {
        await this.page.bringToFront();
    }

    async logout(): Promise<void> {
        await this.page.bringToFront();
        if (!this.page) { throw new Error('Page is not yet loaded.'); }
        await this.page.click('button[data-inintest="user-menu-dropdown-toggle"]');
        await this.page.click('button[data-inintest="navbar-logoff-button"]');
        await this.checkOrWaitFor('button[data-inintest="ic-return-to-logon"]');
        this.log('Logged out of Interaction Connect.');
    }

    private async checkOrWaitFor(selector: string, timeout: number = this.DEFAULT_TIMEOUT, visible: boolean = false): Promise<puppeteer.ElementHandle> {
        if (!this.page) { throw new Error('Page is not yet loaded.'); }
        const options: any = { timeout };
        if (visible) {
            options.visible = true;
        }

        return ((await this.page.waitForSelector(selector, options)).asElement()) as puppeteer.ElementHandle;
    }

    private async getInteractionStates(): Promise<Map<string, string>> {
        if (!this.page) { throw new Error('Page is not yet loaded.'); }
        const map = new Map<string, string>();
        const elements = await this.page.$$('div.queue-content div[col-container-name="\'body\'"] div.filtered-interaction-queue-row') as Array<puppeteer.ElementHandle>;
        for (const element of elements) {
            const result = await this.page.evaluate(row => {
                // data-inintest for interaction is like something-something-#### where #### is interactionId
                const interaction = row.getAttribute('data-inintest').split('-').slice(-1)[0];
                const state = row.querySelector('div[data-inintest="qcol-State"] span').getAttribute('uib-tooltip');

                return Promise.resolve({ interaction, state });
            }, element);
            map.set(result.interaction, result.state);
        }

        return map;
    }

    async getInteractionRow(interaction: string): Promise<puppeteer.ElementHandle | null> {
        await this.page.bringToFront();
        if (!this.page) { throw new Error('Page is not yet loaded.'); }
        const results = await this.page.$$(`div.queue-content div[data-inintest*="${interaction}"]`);
        if (results.length > 0) {
            return results[1];
        } else {
            return null;
        }
    }

    private async waitForStateAndGetInteractionInState(state: string, interactionToFind?: string, timeout: number = this.DEFAULT_TIMEOUT): Promise<string> {
        if (!this.page) { throw new Error('Page is not yet loaded.'); }
        await this.checkOrWaitFor(`div.queue-content div[data-inintest="qcol-State"] span[uib-tooltip*="${state}"]`, timeout);

        const interactionMap = await this.getInteractionStates() as Map<string, string>;

        let interactionToGet;
        for (const [interaction, interactionState] of interactionMap) {
            if (interactionToFind) {
                if (interaction !== interactionToFind) {
                    continue;
                }
            }
            if (interactionState.includes(state)) {
                interactionToGet = interaction;
                break;
            }
        }

        return interactionToGet;
    }

    async clickOnInteraction(interaction: string): Promise<void> {
        await this.page.bringToFront();
        const interactionRow = await this.getInteractionRow(interaction);
        await interactionRow.click();
    }

    private async performActionOnInteraction(interaction: string, action: string): Promise<void> {
        await this.clickOnInteraction(interaction);
        await this.page.click(`button[data-inintest=inin-command-button-${action}-base]`);
        this.log(`Performed '${action}' on interaction ${interaction}`);
    }

    async pickupAlertingInteraction(timeout: number = this.DEFAULT_TIMEOUT): Promise<string> {
        await this.page.bringToFront();
        await this.openMyInteractionsTab();
        const interactionToPickUp = await this.waitForStateAndGetInteractionInState('Alerting', undefined, timeout);

        if (!interactionToPickUp) {
            throw new Error('Found no alerting interaction to pick up!');
        }

        return await this.pickupInteraction(interactionToPickUp);
    }

    async pickupInteraction(interaction: string, timeout: number = this.DEFAULT_TIMEOUT): Promise<string | undefined> {
        await this.page.bringToFront();
        await this.openMyInteractionsTab();
        await this.performActionOnInteraction(interaction, 'pickup');

        const pickedupInteraction = await this.waitForStateAndGetInteractionInState('ACD - Assigned', interaction, timeout);

        return (pickedupInteraction === interaction) ? pickedupInteraction : undefined;
    }

    async disconnectInteraction(interaction: string, timeout: number = this.DEFAULT_TIMEOUT): Promise<string | undefined> {
        await this.page.bringToFront();
        await this.openMyInteractionsTab();
        await this.performActionOnInteraction(interaction, 'disconnect');

        const disconnectedInteraction = await this.waitForStateAndGetInteractionInState('Disconnected', interaction, timeout);

        return (disconnectedInteraction === interaction) ? disconnectedInteraction : undefined;
    }

    async disconnectInteractions(timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
        await this.page.bringToFront();
        await this.openMyInteractionsTab();
        const interactions = await this.getInteractionStates();
        this.log('Disconnecting all interactions');
        for (const [interaction, state] of interactions) {
            if (!state.includes('Disconnected')) {
                await this.disconnectInteraction(interaction, timeout);
            }
        }
    }

    async holdInteraction(interaction: string, timeout: number = this.DEFAULT_TIMEOUT): Promise<string | undefined> {
        await this.page.bringToFront();
        await this.openMyInteractionsTab();
        await this.performActionOnInteraction(interaction, 'hold');

        const heldInteraction = await this.waitForStateAndGetInteractionInState('Held', interaction, timeout);

        return (heldInteraction === interaction) ? heldInteraction : undefined;
    }

    private async waitForNewReply(reply: string, timeout: number = 5 * 60 * 1000): Promise<puppeteer.JSHandle> {
        const timeoutTime = moment().add(moment.duration(timeout));
        while (moment() < timeoutTime) {
            await this.page.waitFor(500);
            const post = await this.page.evaluateHandle(reply1 => {
                return new Promise(resolve => {
                    const posts = document.querySelectorAll('div[data-inintest="post-text"]');
                    for (const post1 of posts) {
                        if (post1.innerHTML === reply1) {
                            // Return the parent post.
                            return resolve(post1.closest('div.ng-scope'));
                        }
                    }

                    return resolve(undefined);
                });
            }, reply);
            if (post.asElement()) {
                return post;
            }
        }
        const error = new Error(`Timeout waiting for reply: ${reply}`);
        this.logError(error);
        throw error;
    }

    async replyToRootPostAndVerifyReply(reply: string): Promise<puppeteer.JSHandle> {
        await this.page.bringToFront();
        await this.openCurrentInteractionTab();
        const replyTextArea = await this.checkOrWaitFor(`textarea[data-inintest="social-conversation-composition-text-input"]`) as puppeteer.ElementHandle;

        await replyTextArea.type(reply);

        this.log(`Replying to root post: ${reply}`);
        await this.page.click('button[data-inintest="social-conversation-composition-send-link"]');

        const post = await this.waitForNewReply(reply);
        this.log(`Verified reply to root post: ${reply}`);

        return post;
    }

    async replyToCommentAndVerifyReply(comment: puppeteer.ElementHandle, reply: string): Promise<puppeteer.JSHandle> {
        await this.page.bringToFront();
        await this.openCurrentInteractionTab();
        const replyButton = await comment.$('span.toolbar-image') as puppeteer.ElementHandle;
        await replyButton.click();

        const replyTextArea = await this.checkOrWaitFor(`div.comment-window textarea[data-inintest="social-conversation-composition-text-input"]`) as puppeteer.ElementHandle;
        await replyTextArea.type(reply);

        this.log(`Replying to comment: ${reply}`);
        await this.page.click('div.comment-window button[data-inintest="social-conversation-composition-send-link"]');

        const post = await this.waitForNewReply(reply);
        this.log(`Verified reply to comment: ${reply}`);

        return post;
    }

    async verifyPostVisible(post: string): Promise<boolean> {
        await this.page.bringToFront();
        await this.openCurrentInteractionTab();
        const postDiv = await this.checkOrWaitFor(`div.company-post-text`) as puppeteer.ElementHandle;
        const postText = await (await postDiv.getProperty('innerHTML')).jsonValue();
        this.log(`Verifying post '${post}'. Found: '${postText}'`);

        return postText === post;
    }

    async verifyPostContainsText(post: string): Promise<boolean> {
        await this.page.bringToFront();
        await this.openCurrentInteractionTab();
        const postDiv = await this.checkOrWaitFor(`div.company-post-text`) as puppeteer.ElementHandle;
        const postText = await (await postDiv.getProperty('innerHTML')).jsonValue();
        this.log(`Verifying post '${post}'. Found: '${postText}'`);

        return postText.includes(post);
    }

    async verifyPostContainsLink(link: string): Promise<boolean> {
        await this.page.bringToFront();
        await this.openCurrentInteractionTab();
        const postDivLink = await this.checkOrWaitFor(`div.company-post-text a`) as puppeteer.ElementHandle;
        const linkText = await (await postDivLink.getProperty('href')).jsonValue();
        const testPage = await this.browser.newPage();
        await testPage.setViewport({ width: 1000, height: 800 });
        await testPage.goto(linkText);
        await testPage.waitFor('div#permalink-overlay-dialog');
        const testUrl = testPage.url();
        this.log(`Verifying link '${link}'. Found: '${testUrl}'`);

        return testUrl === link;
    }

    async verifyImageVisible(): Promise<puppeteer.ElementHandle> {
        await this.page.bringToFront();
        await this.openCurrentInteractionTab();
        const postDiv = await this.checkOrWaitFor(`div.company-post-container-open img.image`) as puppeteer.ElementHandle;

        return postDiv;
    }

    async waitFor(timeout: number): Promise<void> {
        await this.page.bringToFront();
        await this.page.waitFor(timeout);
    }

    async waitForTabToOpen(tabName: string): Promise<puppeteer.ElementHandle> {
        await this.page.bringToFront();

        // If this selector is available, the tab is available.
        return await this.checkOrWaitFor(`span.inin-docking-region-display-name[uib-tooltip="${tabName}"]`);
    }

    async tabIsAvailable(tabName: string): Promise<boolean> {
        await this.page.bringToFront();

        // If this selector is available, the tab is available.
        return !!await this.page.$(`span.inin-docking-region-display-name[uib-tooltip="${tabName}"]`);
    }

    async openTab(tabName: string): Promise<void> {
        if (!await this.tabIsAvailable(tabName)) {
            const error = new Error(`Tab '${tabName}' not available.`);
            this.logError(`Error launching: ${error}`);
            throw error;
        }
        await this.page.bringToFront();
        await this.page.click(`span.inin-docking-region-display-name[uib-tooltip="${tabName}"]`);
        this.log(`Opening tab: ${tabName}`);
        await this.page.waitFor(5000);
    }

    async openMyInteractionsTab(): Promise<void> {
        const myInteractionsView = 'My Interactions';
        await this.openTab(myInteractionsView);
    }

    async openCurrentInteractionTab(): Promise<void> {
        const currentInteractionView = 'Current Interaction';
        if (await this.tabIsAvailable(currentInteractionView)) {
            await this.openTab(currentInteractionView);
        } else {
            // Open the Current Interaction View
            // Click add view icon
            await this.page.click('button[data-inintest="docking-add-view"] i.glyphicons-plus');
            await this.checkOrWaitFor('button[data-inintest="add-view-popover-center-show-all"]');
            await this.page.click('button[data-inintest="add-view-popover-center-show-all"]');
            await this.checkOrWaitFor('label[data-inintest="add-view-dialog-item-interactionEditor"]');
            // Click Current Interaction
            await this.page.click('label[data-inintest="add-view-dialog-item-interactionEditor"]');
            // Click Add View
            await this.page.click('button[data-inintest="add-link"]');
            await this.waitForTabToOpen(currentInteractionView);
            await this.openTab(currentInteractionView);
        }
    }

    async openUserQueueTab(userQueue: string): Promise<void> {
        if (await this.tabIsAvailable(userQueue)) {
            await this.page.waitFor(5000); // No idea why this needs to be here.
            await this.openTab(userQueue);
        } else {
            // Open the User Queue View
            // Click add view icon
            await this.page.click('button[data-inintest="docking-add-view"] i.glyphicons-plus');
            await this.checkOrWaitFor('button[data-inintest="add-view-popover-center-show-all"]');
            await this.page.click('button[data-inintest="add-view-popover-center-show-all"]');
            // Click User Queue
            await this.checkOrWaitFor('label[data-inintest="add-view-dialog-item-userQueue"]');
            await this.page.click('label[data-inintest="add-view-dialog-item-userQueue"]');
            // Search for userQueue
            await this.checkOrWaitFor('input[data-inintest="add-view-dialog-userQueue-search"]');
            await this.page.type('input[data-inintest="add-view-dialog-userQueue-search"]', userQueue);

            // Can't get this to work without a delay.
            await this.page.waitFor(1000);
            // Click userQueue
            await this.checkOrWaitFor(`label[data-inintest="add-view-dialog-userQueue-popover-item-${userQueue}-label"]`);
            await this.page.click(`label[data-inintest="add-view-dialog-userQueue-popover-item-${userQueue}-label"]`);
            // Click Add View
            await this.page.click('button[data-inintest="add-link"]');
            await this.waitForTabToOpen(userQueue);
            await this.openTab(userQueue);
        }
    }

    async openWorkgroupQueueTab(workgroupQueue: string): Promise<void> {
        if (await this.tabIsAvailable(workgroupQueue)) {
            await this.page.waitFor(5000); // No idea why this needs to be here.
            await this.openTab(workgroupQueue);
        } else {
            // Open the Workgroup Queue View
            // Click add view icon
            await this.page.click('button[data-inintest="docking-add-view"] i.glyphicons-plus');
            await this.checkOrWaitFor('button[data-inintest="add-view-popover-center-show-all"]');
            await this.page.click('button[data-inintest="add-view-popover-center-show-all"]');
            // Click Workgroup Queue
            await this.checkOrWaitFor('label[data-inintest="add-view-dialog-item-workgroupQueue"]');
            await this.page.click('label[data-inintest="add-view-dialog-item-workgroupQueue"]');
            // Search for workgroupQueue
            await this.checkOrWaitFor('input[data-inintest="add-view-dialog-workgroupQueue-search"]');
            await this.page.type('input[data-inintest="add-view-dialog-workgroupQueue-search"]', workgroupQueue);
            // Can't get this to work without a delay.
            await this.page.waitFor(1000);
            // Click workgroupQueue
            await this.checkOrWaitFor(`label[data-inintest="add-view-dialog-workgroupQueue-popover-item-${workgroupQueue}-label"]`);
            await this.page.click(`label[data-inintest="add-view-dialog-workgroupQueue-popover-item-${workgroupQueue}-label"]`);
            // Click Add View
            await this.page.click('button[data-inintest="add-link"]');
            await this.waitForTabToOpen(workgroupQueue);
            await this.openTab(workgroupQueue);
        }
    }

    async clearUserQueueFilter(): Promise<void> {
        await this.page.bringToFront();
        const iconFilter = await this.checkOrWaitFor(`div[data-inintest*="ic-interactions-queue-view-User-view"] i.icon-filter`, this.DEFAULT_TIMEOUT, true) as puppeteer.ElementHandle;
        await iconFilter.click();
        await this.page.waitFor(1000);
        const resetButton = await this.checkOrWaitFor('div.popover-content button[data-inintest="filter-clear-filter"]', this.DEFAULT_TIMEOUT, true) as puppeteer.ElementHandle;
        await resetButton.click();
        await iconFilter.click();
        await this.page.waitFor(5000);
    }

    async clearWorkgroupQueueFilter(): Promise<void> {
        await this.page.bringToFront();
        const iconFilter = await this.checkOrWaitFor(`div[data-inintest*="ic-interactions-queue-view-Workgroup-view"] i.icon-filter`, this.DEFAULT_TIMEOUT, true) as puppeteer.ElementHandle;
        await iconFilter.click();
        await this.page.waitFor(1000);
        const resetButton = await this.checkOrWaitFor('div.popover-content button[data-inintest="filter-clear-filter"]', this.DEFAULT_TIMEOUT, true) as puppeteer.ElementHandle;
        await resetButton.click();
        await iconFilter.click();
        await this.page.waitFor(5000);
    }

    async filterUserQueueOnSocialConversations(): Promise<void> {
        await this.page.bringToFront();
        const iconFilter = await this.checkOrWaitFor(`div[data-inintest*="ic-interactions-queue-view-User-view"] i.icon-filter`, this.DEFAULT_TIMEOUT, true) as puppeteer.ElementHandle;
        await iconFilter.click();
        const interactionTypeSelect = await this.checkOrWaitFor(`div.popover-content div[data-inintest="filter-interaction-types-multiselect inin-checkbox-multiselect-All`, this.DEFAULT_TIMEOUT, true) as puppeteer.ElementHandle;
        await interactionTypeSelect.click();
        const socialConversationCheckbox = await this.checkOrWaitFor(`div.popover-content input[data-inintest="inin-checkbox-multiselect-item-checkbox-Social Conversation"]`) as puppeteer.ElementHandle;
        await socialConversationCheckbox.click();
        await iconFilter.click();
        await this.page.waitFor(5000);
    }

    async filterWorkgroupQueueOnSocialConversations(): Promise<void> {
        await this.page.bringToFront();
        const iconFilter = await this.checkOrWaitFor(`div[data-inintest*="ic-interactions-queue-view-Workgroup-view"] i.icon-filter`, this.DEFAULT_TIMEOUT, true) as puppeteer.ElementHandle;
        await iconFilter.click();
        const interactionTypeSelect = await this.checkOrWaitFor(`div.popover-content div[data-inintest="filter-interaction-types-multiselect inin-checkbox-multiselect-All"]`, this.DEFAULT_TIMEOUT, true) as puppeteer.ElementHandle;
        await interactionTypeSelect.click();
        const socialConversationCheckbox = await this.checkOrWaitFor(`div.popover-content input[data-inintest="inin-checkbox-multiselect-item-checkbox-Social Conversation"]`) as puppeteer.ElementHandle;
        await socialConversationCheckbox.click();
        await iconFilter.click();
        await this.page.waitFor(5000);
    }

    private async openSettings(): Promise<puppeteer.ElementHandle> {
        const userMenuButton = await this.checkOrWaitFor(`button[data-inintest="user-menu-dropdown-toggle"]`, this.DEFAULT_TIMEOUT, true) as puppeteer.ElementHandle;
        await userMenuButton.click();
        const settingsButton = await this.checkOrWaitFor(`button[data-inintest="navbar-configuration-link"]`) as puppeteer.ElementHandle;
        await settingsButton.click();

        return await this.checkOrWaitFor(`div[data-inintest="configuration-modal"]`) as puppeteer.ElementHandle;
    }

    async openRingSoundsSettings(): Promise<void> {
        await this.page.bringToFront();
        await this.openSettings();
        const ringSoundsLink = await this.checkOrWaitFor(`a[data-inintest="configuration-modal-menu-item-ringSounds"]`) as puppeteer.ElementHandle;
        await ringSoundsLink.click();
        this.log('Opened Ring Sound Settings');
    }

    async getCurrentSocialConversationRingSound(): Promise<string> {
        await this.page.bringToFront();
        await this.checkOrWaitFor(`ic-ring-sound-select#ring-sounds-form-social-conversation`);

        return (await (await (await this.page.$('ic-ring-sound-select#ring-sounds-form-social-conversation select')).getProperty('value')).jsonValue());
    }

    private originalRingSound: string;

    async toggleSocialConversationRingSound(): Promise<string> {
        // Changes between the original setting and another setting
        await this.page.bringToFront();
        if (!this.originalRingSound) {
            this.originalRingSound = await this.getCurrentSocialConversationRingSound();
            this.log(`Original ring sound set to "${this.originalRingSound}"`);
        }

        let currentRingSound = await this.getCurrentSocialConversationRingSound();

        if (currentRingSound === this.originalRingSound) {
            let newOptionText: string;
            for (const option of await this.page.$$('ic-ring-sound-select#ring-sounds-form-social-conversation select option')) {
                const optionText = (await (await option.getProperty('value')).jsonValue()) as string;
                if (optionText !== this.originalRingSound) {
                    newOptionText = optionText;
                    break;
                }
            }

            await this.page.select('ic-ring-sound-select#ring-sounds-form-social-conversation select', newOptionText);
        } else {
            await this.page.select('ic-ring-sound-select#ring-sounds-form-social-conversation select', this.originalRingSound);
        }

        currentRingSound = await this.getCurrentSocialConversationRingSound();
        this.log(`Selected Social Conversation Ring Sound: ${currentRingSound}`);

        await this.page.click('button[data-inintest="configuration-dialog-okay"]');

        // Let the modal close.
        await this.page.waitFor(5000);

        return currentRingSound;
    }
}