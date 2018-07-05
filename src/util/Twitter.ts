import * as puppeteer from "puppeteer";
import { Config } from "./Config";
import Base from "./Base";

export default class Twitter extends Base {
    constructor(private config: Config, private browser: puppeteer.Browser) {
        super();
        this.logTopic = "Twitter";
    }

    public async authorize(authUrl: string) {
        try {
            this.log(`Authorizing Twitter`);
            // Load the page
            let twitterLoginPage = await this.browser.newPage();
            await twitterLoginPage.setViewport({ width: 1000, height: 800 });
            await twitterLoginPage.goto(authUrl);
            let twitterUsernameInput: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await twitterLoginPage.waitFor('#username_or_email')).asElement();
            await twitterUsernameInput.type(this.config.twitter.user);
            let twitterPasswordInput: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await twitterLoginPage.waitFor('#password')).asElement();
            await twitterPasswordInput.type(this.config.twitter.password);
            let twitterLoginButton: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await twitterLoginPage.waitFor('#allow')).asElement();
            await twitterLoginButton.click();
            let closePopupLink: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await twitterLoginPage.waitFor('body > div > div > div.well > div > div > p:nth-child(3) > a')).asElement();
            await closePopupLink.click();
            twitterLoginPage.close();
        } catch (error) {
            this.logError(`Error launching: ${error}`);
            throw error;
        }
    }
}
