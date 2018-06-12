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

    public async launch() {
        try {
            this.log(`Launching Interaction Connect at: ${this.config.interactionConnect.url}`);

            // Load the page
            this.page = await this.browser.newPage();
            await this.page.setViewport({ width: 1000, height: 800 });
            await this.page.goto(this.config.interactionConnect.url);

            this.log(`Choosing server: ${this.config.ic.server}`);
            let serverTextInput = <puppeteer.ElementHandle>(await this.page.waitFor('input[data-inintest=ic-logon-server]')).asElement();
            await serverTextInput.type(this.config.ic.server);
            let chooseServerButton = <puppeteer.ElementHandle>(await this.page.$('button[data-inintest=ic-logon-choose-server]'));
            await chooseServerButton.click();

            this.log(`Logging on as: ${this.config.ic.user}, ${this.config.ic.password}`);
            let icAuthButton = <puppeteer.ElementHandle>(await this.page.waitFor('button[data-inintest="ic-logon-auth-type-Interaction Center Authentication"]')).asElement();
            await icAuthButton.click();
            let icAuthUsernameInput = <puppeteer.ElementHandle>(await this.page.waitFor('input#username')).asElement();
            await icAuthUsernameInput.type(this.config.ic.user);
            let icAuthPasswordInput = <puppeteer.ElementHandle>(await this.page.$('input#password'));
            await icAuthPasswordInput.type(this.config.ic.password);
            let icAuthSubmitButton = <puppeteer.ElementHandle>(await this.page.$('button[data-inintest=sts-ic-auth-submit]'));
            await icAuthSubmitButton.click();

            this.log('Changing station.');
            let changeStationButton = <puppeteer.ElementHandle>(await this.page.waitFor('button[data-inintest=ic-change-station-submit]')).asElement();
            await changeStationButton.click();

            this.log('Waiting for ready for interactions.');
            await this.page.waitFor('button[data-inintest=inin-command-button-pickup-base]');

            this.log('Ready for interactions.');
        } catch (error) {
            this.logError(`Error launching: ${error}`);
            throw error;
        }
    }

    public async bringToFront() {
        await this.page.bringToFront();
    }

    public async logout() {
        await this.page.bringToFront();
        if (!this.page) { throw new Error('Page is not yet loaded.'); }
        await this.page.click('button[data-inintest="user-menu-dropdown-toggle"]');
        await this.page.click('button[data-inintest="navbar-logoff-button"]');
        await this.checkOrWaitFor('button[data-inintest="ic-return-to-logon"]');
        this.log('Logged out of Interaction Connect.');
    }

    private async checkOrWaitFor(selector: string, timeout: number = this.DEFAULT_TIMEOUT, visible: boolean = false) {
        if (!this.page) { throw new Error('Page is not yet loaded.'); }
        let options: any = { timeout: timeout };
        if (visible) {
            options.visible = true;
        }
        return <puppeteer.ElementHandle>((await this.page.waitForSelector(selector, { timeout: timeout })).asElement());
    }

    private async getInteractionStates() {
        if (!this.page) { throw new Error('Page is not yet loaded.'); }
        const map = new Map<string, string>();
        const elements = <Array<puppeteer.ElementHandle>>await this.page.$$('div.queue-content div[col-container-name="\'body\'"] div.filtered-interaction-queue-row');
        for (const element of elements) {
            let result = await this.page.evaluate(row => {
                // data-inintest for interaction is like something-something-#### where #### is interactionId
                const interaction = row.getAttribute('data-inintest').split('-').slice(-1)[0];
                const state = row.querySelector('div[data-inintest="qcol-State"] span').getAttribute('uib-tooltip');
                return Promise.resolve({ interaction, state });
            }, element);
            map.set(result.interaction, result.state);
        }
        return map;
    }

    public async getInteractionRow(interaction: string) {
        await this.page.bringToFront();
        if (!this.page) { throw new Error('Page is not yet loaded.'); }
        const results = await this.page.$$(`div.queue-content div[data-inintest*="${interaction}"]`);
        if (results.length > 0) {
            return results[1];
        } else {
            return null;
        }
    }

    private async waitForStateAndGetInteractionInState(state: string, interactionToFind?: string, timeout: number = this.DEFAULT_TIMEOUT) {
        if (!this.page) { throw new Error('Page is not yet loaded.'); }
        await this.checkOrWaitFor(`div.queue-content div[data-inintest="qcol-State"] span[uib-tooltip*="${state}"]`, timeout);

        let interactionMap = <Map<string, string>>await this.getInteractionStates();

        let interactionToGet;
        for (let [interaction, interactionState] of interactionMap) {
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

    public async clickOnInteraction(interaction: string) {
        await this.page.bringToFront();
        const interactionRow = await this.getInteractionRow(interaction);
        await interactionRow.click();
    }

    private async performActionOnInteraction(interaction: string, action: string) {
        await this.clickOnInteraction(interaction);
        await this.page.click(`button[data-inintest=inin-command-button-${action}-base]`);
        this.log(`Performed '${action}' on interaction ${interaction}`);
    }

    public async pickupAlertingInteraction(timeout: number = this.DEFAULT_TIMEOUT) {
        await this.page.bringToFront();
        const interactionToPickUp = await this.waitForStateAndGetInteractionInState('Alerting', undefined, timeout);

        if (!interactionToPickUp) {
            throw new Error('Found no alerting interaction to pick up!');
        }

        return await this.pickupInteraction(interactionToPickUp);
    }

    public async pickupInteraction(interaction: string, timeout: number = this.DEFAULT_TIMEOUT) {
        await this.page.bringToFront();
        await this.performActionOnInteraction(interaction, 'pickup');

        const pickedupInteraction = await this.waitForStateAndGetInteractionInState('ACD - Assigned', interaction, timeout);

        return (pickedupInteraction === interaction) ? pickedupInteraction : undefined;
    }

    public async disconnectInteraction(interaction: string, timeout: number = this.DEFAULT_TIMEOUT) {
        await this.page.bringToFront();
        await this.performActionOnInteraction(interaction, 'disconnect');

        const disconnectedInteraction = await this.waitForStateAndGetInteractionInState('Disconnected', interaction, timeout);

        return (disconnectedInteraction === interaction) ? disconnectedInteraction : undefined;
    }

    public async disconnectInteractions(timeout: number = this.DEFAULT_TIMEOUT) {
        await this.page.bringToFront();
        let interactions = await this.getInteractionStates();
        this.log('Disconnecting all interactions');
        for (let [interaction, state] of interactions) {
            if (!state.includes('Disconnected')) {
                await this.disconnectInteraction(interaction, timeout);
            }
        }
    }

    public async holdInteraction(interaction: string, timeout: number = this.DEFAULT_TIMEOUT) {
        await this.page.bringToFront();
        await this.performActionOnInteraction(interaction, 'hold');

        const heldInteraction = await this.waitForStateAndGetInteractionInState('Held', interaction, timeout);

        return (heldInteraction === interaction) ? heldInteraction : undefined;
    }

    private async waitForNewReply(reply: string, timeout: number = 5 * 60 * 1000): Promise<puppeteer.JSHandle> {
        const timeoutTime = moment().add(moment.duration(timeout));
        while (moment() < timeoutTime) {
            await this.page.waitFor(500);
            let post = await this.page.evaluateHandle(reply => {
                return new Promise(resolve => {
                    const posts = document.querySelectorAll('div[data-inintest="post-text"]');
                    for (let post of posts) {
                        if (post.innerHTML === reply) {
                            // Return the parent post.
                            return resolve(post.closest('div.ng-scope'));
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

    public async replyToRootPostAndVerifyReply(reply: string) {
        await this.page.bringToFront();
        const replyTextArea = <puppeteer.ElementHandle>await this.checkOrWaitFor(`textarea[data-inintest="social-conversation-composition-text-input"]`);

        await replyTextArea.type(reply);

        this.log(`Replying to root post: ${reply}`);
        await this.page.click('button[data-inintest="social-conversation-composition-send-link"]');

        const post = await this.waitForNewReply(reply);
        this.log(`Verified reply to root post: ${reply}`);

        return post;
    }

    public async replyToCommentAndVerifyReply(comment: puppeteer.ElementHandle, reply: string) {
        await this.page.bringToFront();
        let replyButton = <puppeteer.ElementHandle>await comment.$('span.toolbar-image');
        await replyButton.click();

        const replyTextArea = <puppeteer.ElementHandle>await this.checkOrWaitFor(`div.comment-window textarea[data-inintest="social-conversation-composition-text-input"]`);
        await replyTextArea.type(reply);

        this.log(`Replying to comment: ${reply}`);
        await this.page.click('div.comment-window button[data-inintest="social-conversation-composition-send-link"]');

        const post = await this.waitForNewReply(reply);
        this.log(`Verified reply to comment: ${reply}`);

        return post;
    }

    public async verifyPostVisible(post: string) {
        await this.page.bringToFront();
        const postDiv = <puppeteer.ElementHandle>await this.checkOrWaitFor(`div.company-post-text`);
        const postText = await (await postDiv.getProperty('innerHTML')).jsonValue();
        this.log(`Verifying post '${post}'. Found: '${postText}'`);
        return postText === post;
    }

    public async waitFor(timeout: number) {
        await this.page.bringToFront();
        await this.page.waitFor(timeout);
    }

    public async openTab(tabName: string) {
        await this.page.bringToFront();
        await this.page.click(`span.inin-docking-region-display-name[uib-tooltip="${tabName}"]`);
        this.log(`Opening tab: ${tabName}`);
        await this.page.waitFor(5000);
    }

    public async clearQueueFilter() {
        await this.page.bringToFront();
        const iconFilter = <puppeteer.ElementHandle>await this.checkOrWaitFor(`i.icon-filter`, this.DEFAULT_TIMEOUT, true);
        await iconFilter.click();
        const interactionTypeSelect = <puppeteer.ElementHandle>await this.checkOrWaitFor(`div.popover-content div[data-inintest="filter-interaction-types-multiselect inin-checkbox-multiselect-All"]`);
        await interactionTypeSelect.click();
        const deselectAllButton = <puppeteer.ElementHandle>await this.checkOrWaitFor(`div.popover-content button[data-inintest="inin-checkbox-multiselect-deselect-all"]`);
        await deselectAllButton.click();
        await iconFilter.click();
        await this.page.waitFor(5000);
    }

    public async filterQueueOnSocialConversations() {
        await this.page.bringToFront();
        const iconFilter = <puppeteer.ElementHandle>await this.checkOrWaitFor(`i.icon-filter`, this.DEFAULT_TIMEOUT, true);
        await iconFilter.click();
        const interactionTypeSelect = <puppeteer.ElementHandle>await this.checkOrWaitFor(`div[data-inintest="filter-interaction-types-multiselect inin-checkbox-multiselect-All`, this.DEFAULT_TIMEOUT, true);
        await interactionTypeSelect.click();
        const socialConversationCheckbox = <puppeteer.ElementHandle>await this.checkOrWaitFor(`div.popover-content input[data-inintest="inin-checkbox-multiselect-item-checkbox-Social Conversation"]`);
        await socialConversationCheckbox.click();
        await iconFilter.click();
        await this.page.waitFor(5000);
    }

    private async openSettings() {
        const userMenuButton = <puppeteer.ElementHandle>await this.checkOrWaitFor(`button[data-inintest="user-menu-dropdown-toggle"]`, this.DEFAULT_TIMEOUT, true);
        await userMenuButton.click();
        const settingsButton = <puppeteer.ElementHandle>await this.checkOrWaitFor(`button[data-inintest="navbar-configuration-link"]`);
        await settingsButton.click();
        return <puppeteer.ElementHandle>await this.checkOrWaitFor(`div[data-inintest="configuration-modal"]`);
    }

    public async openRingSoundsSettings() {
        await this.page.bringToFront();
        await this.openSettings();
        const ringSoundsLink = <puppeteer.ElementHandle>await this.checkOrWaitFor(`a[data-inintest="configuration-modal-menu-item-ringSounds"]`);
        await ringSoundsLink.click();
        this.log('Opened Ring Sound Settings');
    }

    public async getCurrentSocialConversationRingSound() {
        await this.page.bringToFront();
        await this.checkOrWaitFor(`ic-ring-sound-select#ring-sounds-form-social-conversation`);
        return (await (await (await this.page.$('select#ic-ring-sound-select-ring-sounds-form-social-conversation')).getProperty('value')).jsonValue());
    }

    private originalRingSound: string;

    public async toggleSocialConversationRingSound() {
        // Changes between the original setting and another setting
        await this.page.bringToFront();
        if (!this.originalRingSound) {
            this.originalRingSound = await this.getCurrentSocialConversationRingSound();
            this.log(`Original ring sound set to "${this.originalRingSound}"`);
        }

        let currentRingSound = await this.getCurrentSocialConversationRingSound();

        if (currentRingSound === this.originalRingSound) {
            let newOptionText: string;
            for (let option of await this.page.$$('select#ic-ring-sound-select-ring-sounds-form-social-conversation option')) {
                let optionText = (await (await option.getProperty('value')).jsonValue()) as string;
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
}