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

        return ((await this.page.waitForSelector(selector, { timeout })).asElement()) as puppeteer.ElementHandle;
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
        const interactionToPickUp = await this.waitForStateAndGetInteractionInState('Alerting', undefined, timeout);

        if (!interactionToPickUp) {
            throw new Error('Found no alerting interaction to pick up!');
        }

        return await this.pickupInteraction(interactionToPickUp);
    }

    async pickupInteraction(interaction: string, timeout: number = this.DEFAULT_TIMEOUT): Promise<string | undefined> {
        await this.page.bringToFront();
        await this.performActionOnInteraction(interaction, 'pickup');

        const pickedupInteraction = await this.waitForStateAndGetInteractionInState('ACD - Assigned', interaction, timeout);

        return (pickedupInteraction === interaction) ? pickedupInteraction : undefined;
    }

    async disconnectInteraction(interaction: string, timeout: number = this.DEFAULT_TIMEOUT): Promise<string | undefined> {
        await this.page.bringToFront();
        await this.performActionOnInteraction(interaction, 'disconnect');

        const disconnectedInteraction = await this.waitForStateAndGetInteractionInState('Disconnected', interaction, timeout);

        return (disconnectedInteraction === interaction) ? disconnectedInteraction : undefined;
    }

    async disconnectInteractions(timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
        await this.page.bringToFront();
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
        const postDiv = await this.checkOrWaitFor(`div.company-post-text`) as puppeteer.ElementHandle;
        const postText = await (await postDiv.getProperty('innerHTML')).jsonValue();
        this.log(`Verifying post '${post}'. Found: '${postText}'`);

        return postText === post;
    }

    async verifyPostContainsText(post: string): Promise<boolean> {
        await this.page.bringToFront();
        const postDiv = await this.checkOrWaitFor(`div.company-post-text`) as puppeteer.ElementHandle;
        const postText = await (await postDiv.getProperty('innerHTML')).jsonValue();
        this.log(`Verifying post '${post}'. Found: '${postText}'`);

        return postText.includes(post);
    }

    async verifyPostContainsLink(link: string): Promise<boolean> {
        await this.page.bringToFront();
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
        const postDiv = await this.checkOrWaitFor(`div.company-post-container-open img.image`) as puppeteer.ElementHandle;

        return postDiv;
    }

    async waitFor(timeout: number): Promise<void> {
        await this.page.bringToFront();
        await this.page.waitFor(timeout);
    }

    public async addNewView(viewId: string) {
        await this.page.bringToFront();
        await this.page.click('.inin-tabset-end-button[data-inintest="docking-add-view"]');
        this.log("Opening add view dropdown");
        await this.page.click('button[data-inintest="add-view-popover-center-show-all"]');
        this.log("Opening add view popover");
        await this.page.click(`label[data-inintest="add-view-dialog-item-${viewId}"]`);
        this.log(`Checking add view for: ${viewId}`);
        await this.page.waitFor(100);
        await this.page.click(`.add-view-button[data-inintest="add-link"]`);
        this.log(`Adding View`);
        await this.page.waitFor(2500);
    }

    async openTab(tabName: string): Promise<void> {
        await this.page.bringToFront();
        await this.page.click(`span.inin-docking-region-display-name[uib-tooltip="${tabName}"]`);
        this.log(`Opening tab: ${tabName}`);
        await this.page.waitFor(5000);
    }

    async clearQueueFilter(): Promise<void> {
        await this.page.bringToFront();
        const iconFilter = await this.checkOrWaitFor(`i.icon-filter`, this.DEFAULT_TIMEOUT, true) as puppeteer.ElementHandle;
        await iconFilter.click();
        const interactionTypeSelect = await this.checkOrWaitFor(`div.popover-content div[data-inintest="filter-interaction-types-multiselect inin-checkbox-multiselect-All"]`) as puppeteer.ElementHandle;
        await interactionTypeSelect.click();
        const deselectAllButton = await this.checkOrWaitFor(`div.popover-content button[data-inintest="inin-checkbox-multiselect-deselect-all"]`) as puppeteer.ElementHandle;
        await deselectAllButton.click();
        await iconFilter.click();
        await this.page.waitFor(5000);
    }

    async filterQueueOnSocialConversations(): Promise<void> {
        await this.page.bringToFront();
        const iconFilter = await this.checkOrWaitFor(`i.icon-filter`, this.DEFAULT_TIMEOUT, true) as puppeteer.ElementHandle;
        await iconFilter.click();
        const interactionTypeSelect = await this.checkOrWaitFor(`div[data-inintest="filter-interaction-types-multiselect inin-checkbox-multiselect-All`, this.DEFAULT_TIMEOUT, true) as puppeteer.ElementHandle;
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

        return (await (await (await this.page.$('select#ic-ring-sound-select-ring-sounds-form-social-conversation')).getProperty('value')).jsonValue());
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
            for (const option of await this.page.$$('select#ic-ring-sound-select-ring-sounds-form-social-conversation option')) {
                const optionText = (await (await option.getProperty('value')).jsonValue()) as string;
                if (optionText !== this.originalRingSound) {
                    newOptionText = optionText;
                    break;
                }
            }

            await this.page.select('select#ic-ring-sound-select-ring-sounds-form-social-conversation', newOptionText);
        } else {
            await this.page.select('select#ic-ring-sound-select-ring-sounds-form-social-conversation', this.originalRingSound);
        }

        currentRingSound = await this.getCurrentSocialConversationRingSound();
        this.log(`Selected Social Conversation Ring Sound: ${currentRingSound}`);

        await this.page.click('button[data-inintest="configuration-dialog-okay"]');

        // Let the modal close.
        await this.page.waitFor(5000);

        return currentRingSound;
    }

    public async doesElementExist(selector: string) {
        const element = await this.page.$(selector);
        return element !== null;
    }

    public async getGridRow(index: number, gridSelector = "") : Promise<puppeteer.ElementHandle> {
        if (gridSelector === "") {
            gridSelector += `.ui-grid-viewport .ui-grid-row`;
        }
        const gridRows = <Array<puppeteer.ElementHandle>>await this.page.$$(gridSelector);
        if (gridRows.length === 0) {
            this.log("Grid was empty returning null");
            return null;
        }
        if (gridRows.length > index) {
            this.log(`Found requested index: ${index}`);
            return gridRows[index];
        } else {
            this.log("Grid was smaller than requested returning null");
            return gridRows[0];
        }
    }

    public async runQualitySearch() {
        const tabExists = await this.doesElementExist(`span.inin-docking-region-display-name[uib-tooltip="My Quality Results"]`);
        if (!tabExists) {
            await this.addNewView("qualityDashboard");
        }
        await this.openTab("My Quality Results")
        await this.page.click('.find-scorecards-button[data-inintest="ic-quality-search-controls-find-scorecards-button"]');
        this.log("Clicking search button");
        await this.page.waitFor(5000);
    }

    public async selectQualityResult(index: number) {
        const row = await this.getGridRow(index, '[data-inintest="ic-quality-scorecard-search-results-grid"]');
        if (row === null) {
            this.log("Was unable to click requested row");
            return;
        }
        this.log(`Retrieved row: ${index}`);
        const scorecardButton = <puppeteer.ElementHandle>await row.$('[data-inintest="scorecard-search-results-open-link-data.scorecard.scorecardId"]');
        this.log("Found scorecard button for row");
        await scorecardButton.click();
        this.log("Clicked scorecard button");
        await this.page.waitFor(5000);
    }

    public async closeScorecardDetails() {
        //Some kind of puppeteer bug with clicking musses this up but
        //direct execution works for some reason
        await this.page.evaluate(selector => document.querySelector(selector).click(),
        '[data-inintest="ic-quality-scorecard-focus-close-button"');
        this.log("Closing Scorecard");
    }

    public async canAdHocRecord() {
        const disabledAdHoc = await this.doesElementExist('.disabled[data-inintest="inin-command-button-record"]');
        return !disabledAdHoc;
    }

    public async adHocRecord(start: boolean) {
        if (await this.canAdHocRecord()) {
            await this.page.click('[data-inintest="inin-command-button-record"]');
            if (start) {
                this.log("Started ad hoc recording");
            } else {
                this.log("Stopped ad hoc recording");
            }
        } else {
            this.log("Cannot start an ad hoc recording");
            throw new Error("Could not properly start an ad hoc recording");
        }
    }

    public async canSnipRecord() {
        const disabledSnip = await !this.doesElementExist('.disabled[data-inintest="inin-command-button-recordSnippet"]');
        return !disabledSnip;
    }

    public async snipRecord(start: boolean) {
        if (await this.canSnipRecord()) {
            await this.page.click('[data-inintest="inin-command-button-recordSnippet"]');
            if (start) {
                this.log("Started snippet recording");
            } else {
                this.log("Stopped snippet recording");
            }
        } else {
            this.log("Cannot start a snippet recording");
            throw new Error("Could not properly start a snippet recording");
        }
    }

}