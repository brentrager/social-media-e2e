/* tslint:disable:quotemark max-line-length */
import * as puppeteer from 'puppeteer';
import * as randomWords from 'random-words';
import { Config } from './Config';
import Base from './Base';

export default class Twitter extends Base {
    page: puppeteer.Page;

    constructor(private config: Config, private browser: puppeteer.Browser) {
        super();
        this.logTopic = 'Twitter';
    }

    async authorize(authUrl: string): Promise<void> {
        try {
            this.log(`Authorizing Twitter`);
            // Load the page
            const twitterLoginPage = await this.browser.newPage();
            await twitterLoginPage.setViewport({ width: 1000, height: 800 });
            await twitterLoginPage.goto(authUrl);
            const twitterUsernameInput: puppeteer.ElementHandle = (await twitterLoginPage.waitFor('#username_or_email')).asElement() as puppeteer.ElementHandle;
            await twitterUsernameInput.type(this.config.twitter.user);
            const twitterPasswordInput: puppeteer.ElementHandle = (await twitterLoginPage.waitFor('#password')).asElement() as puppeteer.ElementHandle;
            await twitterPasswordInput.type(this.config.twitter.password);
            const twitterLoginButton: puppeteer.ElementHandle = (await twitterLoginPage.waitFor('#allow')).asElement() as puppeteer.ElementHandle;
            await twitterLoginButton.click();
            const closePopupLink: puppeteer.ElementHandle = (await twitterLoginPage.waitFor('body > div > div > div.well > div > div > p:nth-child(3) > a')).asElement() as puppeteer.ElementHandle;
            await closePopupLink.click();
            await twitterLoginPage.close();
        } catch (error) {
            this.logError(`Error launching: ${error}`);
            throw error;
        }
    }
    async launch(): Promise<void> {
        try {
            // Get the url
            this.log(`Launching Twitter`);

            // Load the page
            this.page = await this.browser.newPage();
            await this.page.setViewport({ width: 1100, height: 800 });

            await this.signIn(this.config.twitter.user, this.config.twitter.password);
        } catch (error) {
            this.logError(`Error launching: ${error}`);
            throw error;
        }
    }

    async signIn(user: string, password: string): Promise<void> {
        await this.page.bringToFront();
        await this.page.goto("https://twitter.com");
        this.log(`Logging on as: ${user}, ${password}`);
        const twitterUsernameInput = ((await this.page.waitFor('input[type="text"]')).asElement()) as puppeteer.ElementHandle;
        await twitterUsernameInput.type(user);
        const twitterPasswordInput = (await this.page.$('input[type="password"]')) as puppeteer.ElementHandle;
        await twitterPasswordInput.type(password);
        const twitterSubmitButton = (await this.page.$('input.EdgeButton[value="Log in"]')) as puppeteer.ElementHandle;
        await twitterSubmitButton.click();
        // The first easy thing I found to wait for after login was the search bar.
        await this.page.waitForSelector('input.search-input', {visible: true});
    }

    async logout(): Promise<void> {
        if (!this.page) {
            throw new Error("Page is not yet loaded.");
        }

        try {
            await this.page.bringToFront();
            await this.page.waitFor('a#user-dropdown-toggle');
            await this.page.waitFor(1000);
            await this.page.click('a#user-dropdown-toggle');
            await this.page.waitFor('li#signout-button');
            await this.page.waitFor(500);
            await this.page.click('li#signout-button');
            await this.page.waitFor('input[placeholder="Password"]');
            this.log(`Logging out of Twitter`);
        } catch (error) {
            this.logError(`Error logging out: ${error}`);
            throw error;
        }
    }

    async bringToFront(): Promise<void> {
        await this.page.bringToFront();
    }

    async postRandom(): Promise<string> {
        if (!this.page) {
            throw new Error("Page is not yet loaded.");
        }
        let randomPost;

        try {
            randomPost = randomWords(10).join(" ");
            await this.post(randomPost);
        } catch (error) {
            this.logError(`Error making random post: ${error}`);
            throw error;
        }

        return randomPost;
    }

    async postRandomWithImage(): Promise<string> {
        if (!this.page) {
            throw new Error("Page is not yet loaded.");
        }
        let randomPost;

        try {
            randomPost = randomWords(10).join(" ");
            const testImageLocation = './src/resources/testImage.png';
            await this.post(randomPost, testImageLocation);
        } catch (error) {
            this.logError(`Error making random post: ${error}`);
            throw error;
        }

        return randomPost;
    }

    async retweetWithComment(text: string): Promise<string> {
        if (!this.page) {
            throw new Error("Page is not yet loaded.");
        }

        let tweetUrl;
        try {
            await this.bringToFront();
            this.log(`Load page: ${this.config.twitter.pageUrl}`);
            await this.page.goto(this.config.twitter.pageUrl);

            const randomTweet = ((await this.page.waitFor('li.js-stream-item')).asElement()) as puppeteer.ElementHandle;
            await randomTweet.click();
            const twitterRetweetButton = ((await this.page.waitFor('div#permalink-overlay-dialog span.Icon--retweet')).asElement()) as puppeteer.ElementHandle;
            tweetUrl = this.page.url();
            await twitterRetweetButton.click();
            const twitterRetweetComment = ((await this.page.waitFor('div#retweet-with-comment')).asElement()) as puppeteer.ElementHandle;
            await twitterRetweetComment.type(text);
            await this.page.waitFor(1000);
            const twitterSubmitRetweetButton = (await this.page.$('div#retweet-tweet-dialog-dialog button.retweet-action')) as puppeteer.ElementHandle;
            await twitterSubmitRetweetButton.click();
            // TODO: find a better solution for this
            await this.page.waitFor(1000);
            this.log(`Posted random post: ${text}`);
        } catch (error) {
            this.logError(`Error making random post: ${error}`);
            throw error;
        }

        return tweetUrl;
    }

    async post(text: string, file?: string): Promise<void> {
        if (!this.page) {
            throw new Error("Page is not yet loaded.");
        }

        try {
            await this.bringToFront();
            this.log(`Load page: ${this.config.twitter.pageUrl}`);
            await this.page.goto(this.config.twitter.pageUrl);

            const twitterComposeTweetButton = ((await this.page.waitFor('button#global-new-tweet-button')).asElement()) as puppeteer.ElementHandle;
            await twitterComposeTweetButton.click();
            const twitterTweetInput = ((await this.page.waitForSelector("div#Tweetstorm-tweet-box-0", {visible: true})).asElement()) as puppeteer.ElementHandle;
            await twitterTweetInput.click();
            await twitterTweetInput.type(text);
            if  (file) {
                const twitterFileInput = (await this.page.$('div#Tweetstorm-dialog-dialog input[type=file]')) as puppeteer.ElementHandle;
                await twitterFileInput.uploadFile(file);
            }
            await this.page.waitFor(1000);
            const twitterSubmitTweetButton = (await this.page.$('button.SendTweetsButton')) as puppeteer.ElementHandle;
            await twitterSubmitTweetButton.click();
            // TODO: find a better solution for this
            await this.page.waitFor(1000);
            this.log(`Posted random post: ${text}`);
        } catch (error) {
            this.logError(`Error making random post: ${error}`);
            throw error;
        }
    }

    async postRandomOnAltAccountWithHandle(): Promise<string> {
        if (!this.page) {
            throw new Error("Page is not yet loaded.");
        }
        let randomPost;

        try {
            await this.bringToFront();
            await this.logout();

            await this.signIn(this.config.twitter.user2, this.config.twitter.password2);
            randomPost = `${this.config.twitter.handle} ${randomWords(10).join(" ")}`;
            await this.post(randomPost);
            await this.logout();

            await this.signIn(this.config.twitter.user, this.config.twitter.password);
        } catch (error) {
            this.logError(`Error making random post: ${error}`);
            throw error;
        }

        return randomPost;
    }

    async messageRandom(user: string): Promise<string> {
        if (!this.page) {
            throw new Error("Page is not yet loaded.");
        }
        const randomPost = randomWords(10).join(" ");
        await this.bringToFront();
        await this.page.waitFor(3000);
        await this.page.waitFor('a.global-dm-nav');
        await this.page.click('a.global-dm-nav');
        await this.page.waitFor('button.DMComposeButton');
        await this.page.waitFor(3000);
        const conversations = await this.page.$$('div.DMInboxItem-title span.username b');

        for (const conversation of conversations) {
            const username = await (await conversation.getProperty('innerHTML')).jsonValue();
            if (username === user) {
                await conversation.click();
                await this.page.waitFor('div.DMComposer-editor');
                await this.page.click('div.DMComposer-editor');
                await this.page.type('div.DMComposer-editor', randomPost);
                await this.page.click('div.DMComposer-send button');
                await this.page.click('div.DMActivity--open button.DMActivity-close');

                return randomPost;
            }
        }

        const error = new Error(`Failed to send random message to user ${user}`);
        this.logError(error);
        throw error;
    }

    async messageImage(user: string): Promise<void> {
        if (!this.page) {
            throw new Error("Page is not yet loaded.");
        }
        const randomPost = randomWords(10).join(" ");
        await this.bringToFront();
        await this.page.waitFor(3000);
        await this.page.waitFor('a.global-dm-nav');
        await this.page.click('a.global-dm-nav');
        await this.page.waitFor('button.DMComposeButton');
        await this.page.waitFor(3000);
        const conversations = await this.page.$$('div.DMInboxItem-title span.username b');

        for (const conversation of conversations) {
            const username = await (await conversation.getProperty('innerHTML')).jsonValue();
            if (username === user) {
                await conversation.click();
                await this.page.waitFor('div.DMComposer-editor');
                const upload = await this.page.$('form.DMComposer input[type=file]');
                await upload.uploadFile('./src/resources/testImage.png');
                await this.page.waitFor('div.DMComposer-send button');
                await this.page.click('div.DMComposer-send button');
                await this.page.click('div.DMActivity--open button.DMActivity-close');

                return randomPost;
            }
        }

        const error = new Error(`Failed to send random message to user ${user}`);
        this.logError(error);
        throw error;
    }
}
