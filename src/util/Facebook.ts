// tslint:disable:max-line-length
import * as puppeteer from 'puppeteer';
import * as randomWords from 'random-words';
import { Config } from './Config';
import Base from './Base';

export default class Facebook extends Base {
    private page: puppeteer.Page;

    constructor(private config: Config, private browser: puppeteer.Browser) {
        super();
        this.logTopic = 'Facebook';
    }

    async authorize(authUrl: string): Promise<void> {
        try {
            this.log('Authorizing Facebook');
            // Load the page
            const facebookLoginPage = await this.browser.newPage();
            await facebookLoginPage.setViewport({ width: 1000, height: 800 });
            await facebookLoginPage.goto(authUrl);
            const facebookUsernameInput: puppeteer.ElementHandle = (await facebookLoginPage.waitFor('#email')).asElement() as puppeteer.ElementHandle;
            await facebookUsernameInput.type(this.config.facebook.user);
            const facebookPasswordInput: puppeteer.ElementHandle = (await facebookLoginPage.waitFor('#pass')).asElement() as puppeteer.ElementHandle;
            await facebookPasswordInput.type(this.config.facebook.password);
            const facebookLoginButton: puppeteer.ElementHandle = (await facebookLoginPage.waitFor('#loginbutton')).asElement() as puppeteer.ElementHandle;
            await facebookLoginButton.click();
            const closePopupLink: puppeteer.ElementHandle = (await facebookLoginPage.waitFor('body > div > div > div.well > div > div > p:nth-child(3) > a')).asElement() as puppeteer.ElementHandle;
            await closePopupLink.click();
            await facebookLoginPage.close();
        } catch (error) {
            this.logError(`Error launching: ${error}`);
            throw error;
        }
    }

    async launch(): Promise<void> {
        try {
            // Get the url
            this.log('Launching Facebook');

            // Load the page
            this.page = await this.browser.newPage();
            await this.page.setViewport({ width: 1000, height: 800 });
            await this.page.goto('https://facebook.com');

            this.log(`Logging on as: ${this.config.facebook.user}, ${this.config.facebook.password}`);
            const facebookUsernameInput = ((await this.page.waitFor('input#email')).asElement()) as puppeteer.ElementHandle;
            await facebookUsernameInput.type(this.config.facebook.user);
            const facebookPasswordInput = (await this.page.$('input#pass')) as puppeteer.ElementHandle;
            await facebookPasswordInput.type(this.config.facebook.password);
            const facebookSubmitButton = (await this.page.$('input[value="Log In"]')) as puppeteer.ElementHandle;
            await facebookSubmitButton.click();
            // The first easy thing I found to wait for after login was the search bar.
            await this.page.waitFor('input[placeholder=Search]');
        } catch (error) {
            this.logError(`Error launching: ${error}`);
            throw error;
        }
    }

    async bringToFront(): Promise<void> {
        await this.page.bringToFront();
    }

    async postRandom(): Promise<string> {
        if (!this.page) {
            throw new Error('Page is not yet loaded.');
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
                facebookWriteSomethingTextArea = ((await this.page.waitFor('div[role="textbox"]', { timeout: 5000 })).asElement()) as puppeteer.ElementHandle;
            } catch (error) {
                try {
                    facebookWriteSomethingTextArea = ((await this.page.waitFor('div[contenteditable="true"]', { timeout: 5000 })).asElement()) as puppeteer.ElementHandle;
                } catch (error) {
                    facebookWriteSomethingTextArea = ((await this.page.waitFor('textarea', { timeout: 5000 })).asElement()) as puppeteer.ElementHandle;
                }
            }
            await facebookWriteSomethingTextArea.focus();
            await facebookWriteSomethingTextArea.click();
            const facebookPageWriteSomethingInput = ((await this.page.waitFor('div[contenteditable=true]')).asElement()) as puppeteer.ElementHandle;
            randomPost = randomWords(10).join(' ');
            await facebookPageWriteSomethingInput.type(randomPost);
            await this.page.click('button[data-testid="react-composer-post-button"]');
            await this.page.click('button[data-testid="react-composer-post-button"]');
            await this.page.click('button[data-testid="react-composer-post-button"]');
            // The first easy thing I found to wait for after login was the search bar.
            await this.page.waitFor('input[placeholder=Search]');
            this.log(`Posted random post: ${randomPost}`);
        } catch (error) {
            this.logError(`Error making random post: ${error}`);
            throw error;
        }

        return randomPost;
    }
}
