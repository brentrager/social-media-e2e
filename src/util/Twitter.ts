import * as path from "path";
import * as puppeteer from "puppeteer";
import * as randomWords from "random-words";
import { Config } from "./Config";
import Base from "./Base";

export default class Twitter extends Base {
    private page: puppeteer.Page;

    constructor(private config: Config, private browser: puppeteer.Browser) {
        super();
        this.logTopic = "Twitter";
    }

    public async launch() {
        try {
            // Get the url
            this.log(`Launching Twitter`);

            // Load the page
            this.page = await this.browser.newPage();
            await this.page.setViewport({ width: 1100, height: 800 });

            await this.signIn(this.config.twitter.user, this.config.twitter.password)
        } catch (error) {
            this.logError(`Error launching: ${error}`);
            throw error;
        }
    }

    public async signIn(user: string, password: string) {
        await this.page.goto("https://twitter.com");
        this.log(`Logging on as: ${user}, ${password}`);
        let twitterUsernameInput = <puppeteer.ElementHandle>((await this.page.waitFor('input[type="text"]')).asElement());
        await twitterUsernameInput.type(user);
        let twitterPasswordInput = <puppeteer.ElementHandle>(await this.page.$('input[type="password"]'));
        await twitterPasswordInput.type(password);
        let twitterSubmitButton = <puppeteer.ElementHandle>(await this.page.$('input[value="Log in"]'));
        await twitterSubmitButton.click();
        // The first easy thing I found to wait for after login was the search bar.
        await this.page.waitForSelector('div.wtf-module', {visible: true});
    }

    public async logout() {
        if (!this.page) {
            throw new Error("Page is not yet loaded.");
        }

        try {
            await this.page.bringToFront();
            let twitterUserDropdown = <puppeteer.ElementHandle>((await this.page.waitForSelector('a#user-dropdown-toggle', {visible: true})).asElement());
            await twitterUserDropdown.click();
            let twitterLogoutButton = <puppeteer.ElementHandle>((await this.page.waitForSelector("li#signout-button", {visible: true})).asElement());
            await twitterLogoutButton.click();
            await this.page.waitFor('input[placeholder="Password"]');
            this.log(`Logging out of Twitter`);
        } catch (error) {
            this.logError(`Error logging out: ${error}`);
            throw error;
        }
    }

    public async bringToFront() {
        await this.page.bringToFront();
    }

    public async postRandom() {
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

    public async postRandomWithImage() {
        if (!this.page) {
            throw new Error("Page is not yet loaded.");
        }
        let randomPost;

        try {
            randomPost = randomWords(10).join(" ");
            let testImageLocation = './src/resources/testImage.png';
            await this.post(randomPost, testImageLocation);
        } catch (error) {
            this.logError(`Error making random post: ${error}`);
            throw error;
        }

        return randomPost;
    }

    public async retweetWithComment(text: string) {
        if (!this.page) {
            throw new Error("Page is not yet loaded.");
        }

        let tweetUrl;
        try {
            await this.bringToFront();
            this.log(`Load page: ${this.config.twitter.pageUrl}`);
            await this.page.goto(this.config.twitter.pageUrl);

            let randomTweet = <puppeteer.ElementHandle>((await this.page.waitFor('li.js-stream-item')).asElement());
            await randomTweet.click();
            let twitterRetweetButton = <puppeteer.ElementHandle>((await this.page.waitFor('div#permalink-overlay-dialog span.Icon--retweet')).asElement());
            tweetUrl = this.page.url();
            await twitterRetweetButton.click();
            let twitterRetweetComment = <puppeteer.ElementHandle>((await this.page.waitFor('div#retweet-with-comment')).asElement());
            await twitterRetweetComment.type(text);
            await this.page.waitFor(1000);
            let twitterSubmitRetweetButton = <puppeteer.ElementHandle>(await this.page.$('div#retweet-tweet-dialog-dialog button.retweet-action'));
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

    public async post(text: string, file?: string) {
        if (!this.page) {
            throw new Error("Page is not yet loaded.");
        }

        try {
            await this.bringToFront();
            this.log(`Load page: ${this.config.twitter.pageUrl}`);
            await this.page.goto(this.config.twitter.pageUrl);

            let twitterComposeTweetButton = <puppeteer.ElementHandle>((await this.page.waitFor('button#global-new-tweet-button')).asElement());
            await twitterComposeTweetButton.click();
            let twitterTweetInput = <puppeteer.ElementHandle>((await this.page.waitForSelector("div#Tweetstorm-tweet-box-0", {visible: true})).asElement());
            await twitterTweetInput.click();
            await twitterTweetInput.type(text);
            if  (file) {
                let twitterFileInput = <puppeteer.ElementHandle>(await this.page.$('div#Tweetstorm-dialog-dialog input[type=file]'));
                await twitterFileInput.uploadFile(file);
            }
            await this.page.waitFor(1000);
            let twitterSubmitTweetButton = <puppeteer.ElementHandle>(await this.page.$('button.SendTweetsButton'));
            await twitterSubmitTweetButton.click();
            // TODO: find a better solution for this
            await this.page.waitFor(1000);
            this.log(`Posted random post: ${text}`);
        } catch (error) {
            this.logError(`Error making random post: ${error}`);
            throw error;
        }
    }

    public async postRandomOnAltAccountWithHandle() {
        if (!this.page) {
            throw new Error("Page is not yet loaded.");
        }
        let randomPost;

        try {
            await this.bringToFront();
            await this.logout();

            await this.signIn(this.config.twitter.user2, this.config.twitter.password2);
            randomPost = this.config.twitter.handle + ' ' + randomWords(10).join(" ");
            await this.post(randomPost);
            await this.logout();

            await this.signIn(this.config.twitter.user, this.config.twitter.password);
        } catch (error) {
            this.logError(`Error making random post: ${error}`);
            throw error;
        }

        return randomPost;
    }
}
