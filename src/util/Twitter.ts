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
            await this.page.goto("https://twitter.com");

            this.log(`Logging on as: ${this.config.twitter.user}, ${this.config.twitter.password}`);
            let twitterUsernameInput = <puppeteer.ElementHandle>((await this.page.waitFor('input[type="text"]')).asElement());
            await twitterUsernameInput.type(this.config.twitter.user);
            let twitterPasswordInput = <puppeteer.ElementHandle>(await this.page.$('input[type="password"]'));
            await twitterPasswordInput.type(this.config.twitter.password);
            let twitterSubmitButton = <puppeteer.ElementHandle>(await this.page.$('input[value="Log in"]'));
            await twitterSubmitButton.click();
            // The first easy thing I found to wait for after login was the search bar.
            await this.page.waitFor('input[placeholder="Search Twitter"]');
        } catch (error) {
            this.logError(`Error launching: ${error}`);
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
            await this.bringToFront();
            this.log(`Load page: ${this.config.twitter.pageUrl}`);
            await this.page.goto(this.config.twitter.pageUrl);

            let twitterComposeTweetButton = <puppeteer.ElementHandle>((await this.page.waitFor('button#global-new-tweet-button')).asElement());
            await twitterComposeTweetButton.click();
            let twitterTweetInput = <puppeteer.ElementHandle>((await this.page.waitForSelector("div#Tweetstorm-tweet-box-0", {visible: true})).asElement());
            randomPost = randomWords(10).join(" ");
            await twitterTweetInput.click();
            await twitterTweetInput.type(randomPost);
            await this.page.waitFor(1000);
            let twitterSubmitTweetButton = <puppeteer.ElementHandle>(await this.page.$('button.SendTweetsButton'));
            await twitterSubmitTweetButton.click();
            // The first easy thing I found to wait for after login was the search bar.
            await this.page.waitFor('input[placeholder="Search Twitter"]');
            this.log(`Posted random post: ${randomPost}`);
        } catch (error) {
            this.logError(`Error making random post: ${error}`);
            throw error;
        }

        return randomPost;
    }
}
