import * as puppeteer from "puppeteer";
import * as randomWords from "random-words";
import { Config } from "./Config";
import Base from "./Base";

export default class Facebook extends Base {
    private page: puppeteer.Page;

    constructor(private config: Config, private browser: puppeteer.Browser) {
        super();
        this.logTopic = "Facebook";
    }

    public async launch() {
        try {
            // Get the url
            this.log(`Launching Facebook`);

            // Load the page
            this.page = await this.browser.newPage();
            await this.page.setViewport({ width: 1000, height: 800 });
            await this.page.goto("https://facebook.com");

            this.log(`Logging on as: ${this.config.facebook.user}, ${this.config.facebook.password}`);
            let facebookUsernameInput = <puppeteer.ElementHandle>((await this.page.waitFor("input#email")).asElement());
            await facebookUsernameInput.type(this.config.facebook.user);
            let facebookPasswordInput = <puppeteer.ElementHandle>(await this.page.$("input#pass"));
            await facebookPasswordInput.type(this.config.facebook.password);
            let facebookSubmitButton = <puppeteer.ElementHandle>(await this.page.$('input[value="Log In"]'));
            await facebookSubmitButton.click();
            // The first easy thing I found to wait for after login was the search bar.
            await this.page.waitFor("input[placeholder=Search]");
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
            this.log(`Load page: ${this.config.facebook.pageUrl}`);
            await this.page.goto(this.config.facebook.pageUrl);

            // Facebook is all obfuscated. There's a textarea to focus on, then a div to type into.
            let facebookWriteSomethingTextArea: puppeteer.ElementHandle;
            // There seems to be sometimes some different options as far as to what to look for to click and type into here.
            // This is super hacky and Facebook may actively try to avoid this type of hting. This may need to use the API instead.
            try {
                facebookWriteSomethingTextArea = <puppeteer.ElementHandle>((await this.page.waitFor('div[role="textbox"]', { timeout: 5000 })).asElement());
            } catch (error) {
                try {
                    facebookWriteSomethingTextArea = <puppeteer.ElementHandle>((await this.page.waitFor('div[contenteditable="true"]', { timeout: 5000 })).asElement());
                } catch (error) {
                    facebookWriteSomethingTextArea = <puppeteer.ElementHandle>((await this.page.waitFor("textarea", { timeout: 5000 })).asElement());
                }
            }
            await facebookWriteSomethingTextArea.focus();
            await facebookWriteSomethingTextArea.click();
            let facebookPageWriteSomethingInput = <puppeteer.ElementHandle>((await this.page.waitFor("div[contenteditable=true]")).asElement());
            randomPost = randomWords(10).join(" ");
            await facebookPageWriteSomethingInput.type(randomPost);
            await this.page.click('button[data-testid="react-composer-post-button"]');
            await this.page.click('button[data-testid="react-composer-post-button"]');
            await this.page.click('button[data-testid="react-composer-post-button"]');
            // The first easy thing I found to wait for after login was the search bar.
            await this.page.waitFor("input[placeholder=Search]");
            this.log(`Posted random post: ${randomPost}`);
        } catch (error) {
            this.logError(`Error making random post: ${error}`);
            throw error;
        }

        return randomPost;
    }
}
