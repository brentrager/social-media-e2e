import Base from './Base';
import { Config } from './Config';
import * as puppeteer from 'puppeteer';

enum ResponseUrlSearchType {
    BeginsWith,
    EndsWith
};

export enum ChannelType {
    AppleService,
    FacebookAccount,
    FacebookService,
    TwitterAccount,
    TwitterService
}

export default class Hub extends Base {
    private DEFAULT_TIMEOUT: number = 10 * 1000;
    private page: puppeteer.Page;

    constructor(private config: Config, private browser: puppeteer.Browser) {
        super();
        this.logTopic = 'Hub';
    }

    private async waitForResponseOnPage(page: puppeteer.Page, responseUrlSearchType: ResponseUrlSearchType, responseUrl: string, timeout: number): Promise<boolean> {
        let promiseOfResponse: Promise<boolean> = new Promise((resolve: Function, reject: Function) => {
            page.on(
                'response', 
                (response: puppeteer.Response) => {
                    if (responseUrlSearchType === ResponseUrlSearchType.BeginsWith) {
                        if (response.url().startsWith(responseUrl)) {
                            resolve(true);
                        }
                    } else {
                        if (response.url().endsWith(responseUrl)) {
                            resolve(true);
                        }
                    }
                }
            );
        });
        let promiseOfTimeout: Promise<boolean> = new Promise((resolve: Function, reject: Function) => {
            let wait: NodeJS.Timer = setTimeout(
                () => {
                    clearTimeout(wait);
                    resolve(false);
                },
                timeout
            );
        });

        return Promise.race([
            promiseOfResponse,
            promiseOfTimeout
          ]);
    }

    public async login(): Promise<void> {
        this.page = await this.browser.newPage();
        await this.page.setViewport({width: 1000, height: 800});
        await this.page.goto(this.config.socialMedia.hub);
        let usernameInput: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await this.page.waitFor('#email')).asElement();
        await usernameInput.type(this.config.genesysHub.email);
        let passwordInput: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await this.page.waitFor('#password')).asElement();
        await passwordInput.type(this.config.genesysHub.password);
        let loginButton: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await this.page.waitFor('.btn')).asElement();
        await loginButton.click();
        await this.waitForResponseOnPage(this.page, ResponseUrlSearchType.EndsWith, '/error-messages/count', this.DEFAULT_TIMEOUT);
    }

    public async clickSettings(): Promise<void> {
        let settingsLink: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await this.page.waitFor(
            '.nav-side-tabs > li:nth-child(3)', 
            { timeout: this.DEFAULT_TIMEOUT }
        )).asElement();
        if (settingsLink) {
            await settingsLink.click();
            await this.page.waitFor('.nav-side-tabs > li:nth-child(4) > a:nth-child(1)');
        }
    }

    public async clickChannels(): Promise<void> {
        let channelsLink: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await this.page.waitFor(
            '.nav-side-tabs > li:nth-child(4) > a:nth-child(1)', 
            { timeout: this.DEFAULT_TIMEOUT }
        )).asElement();
        if (!channelsLink) {
            await this.clickSettings();
            await this.page.waitFor('.nav-side-tabs > li:nth-child(4) > a:nth-child(1)');
            channelsLink = <puppeteer.ElementHandle>(await this.page.waitFor(
                '.nav-side-tabs > li:nth-child(4) > a:nth-child(1)', 
                { timeout: this.DEFAULT_TIMEOUT }
            )).asElement();
        }
        await channelsLink.click();
        await this.page.waitFor('div.row:nth-child(3) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)');
    }

    public async addChannel(channelType: ChannelType, accountId: string): Promise<void> {
        let addChannelsLink: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await this.page.waitFor(
            'div.row:nth-child(3) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)', 
            { timeout: this.DEFAULT_TIMEOUT }
        )).asElement();
        if (!addChannelsLink) {
            await this.clickChannels();
            await this.page.waitFor('div.row:nth-child(3) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)');
            addChannelsLink = <puppeteer.ElementHandle>(await this.page.waitFor(
                'div.row:nth-child(3) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)', 
                { timeout: this.DEFAULT_TIMEOUT }
            )).asElement();
        }
        await addChannelsLink.click();
        await this.waitForResponseOnPage(this.page, ResponseUrlSearchType.EndsWith, '/accounts', this.DEFAULT_TIMEOUT);
        await this.page.waitFor('#channel_type');
        let channelName: string;
        switch (channelType) {
            case ChannelType.AppleService: {
                await this.page.select('#channel_type', '0');
                channelName = 'AppleService';
            }
            break;
            case ChannelType.FacebookAccount: {
                await this.page.select('#channel_type', '1');
                channelName = 'FacebookAccount';
            }
            break;
            case ChannelType.FacebookService: {
                await this.page.select('#channel_type', '2');
                channelName = 'FacebookService';
            }
            break;
            case ChannelType.TwitterAccount: {
                await this.page.select('#channel_type', '3');
                channelName = 'TwitterAccount';
            }
            break;
            case ChannelType.TwitterService: {
                await this.page.select('#channel_type', '4');
                channelName = 'TwitterService';
            }
            break;
        }
        let channelNameInput: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await this.page.waitFor('#input01')).asElement();
        await channelNameInput.type(channelName + accountId);
        let createButton: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await this.page.waitFor('div.col-sm-offset-2:nth-child(1) > button:nth-child(1)')).asElement();
        await createButton.click();
        await this.waitForResponseOnPage(this.page, ResponseUrlSearchType.EndsWith, '/channel_types/json', this.DEFAULT_TIMEOUT);
    }

    public async clickChannel(accountId: string): Promise<void> {
        let channelLinks: string[] = await this.page.$$eval(
            '.link.ng-binding', 
            (locatedLinks: NodeListOf<HTMLLinkElement>, accountId: string) => {
                return (Array.from(locatedLinks)).map((link: HTMLLinkElement) => {
                    if (!link.disabled) {
                        if (link.href.endsWith(accountId)) {
                            return link.href;
                        }
                    }
                    return null;
                });
            },
            accountId
        );
        let filteredChannelLinks: string[] = channelLinks.filter((channelLink: string) => {
            if (channelLink) {
                return true;
            }
            return false;
        });
        if (filteredChannelLinks.length > 0) {
            await this.page.goto(filteredChannelLinks[0]);
            await this.waitForResponseOnPage(this.page, ResponseUrlSearchType.EndsWith, '/' + accountId, this.DEFAULT_TIMEOUT);
        }
    }

    public async getFacebookAuthenticationToken(): Promise<void> {
        let pagePoppedUp: Promise<object> = new Promise((resolve) => { 
            return this.browser.on('targetcreated', resolve);
        });
        let loginButton: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await this.page.waitFor(
            'a.btn:nth-child(1)',
            { timeout: this.DEFAULT_TIMEOUT }
        )).asElement();
        await loginButton.click();
        await pagePoppedUp;
        let pages: puppeteer.Page[] = await this.browser.pages();
        let facebookLoginPage: puppeteer.Page = pages[pages.length - 1];
        await facebookLoginPage.setViewport({width: 1000, height: 800});        
        let facebookUsernameInput: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await facebookLoginPage.waitFor('#email')).asElement();
        await facebookUsernameInput.type(this.config.facebook.user);
        let facebookPasswordInput: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await facebookLoginPage.waitFor('#pass')).asElement();
        await facebookPasswordInput.type(this.config.facebook.password);
        let facebookLoginButton: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await facebookLoginPage.waitFor('#loginbutton')).asElement();
        await facebookLoginButton.click();
        await this.waitForResponseOnPage(facebookLoginPage, ResponseUrlSearchType.BeginsWith, 'https://socialanalytics.genesyscloud.com/facebook/callback', this.DEFAULT_TIMEOUT);
        await facebookLoginPage.close();
        //let updateButton: puppeteer.ElementHandle = <puppeteer.ElementHandle>(await this.page.waitForXPath('//*[@id="social.settings"]/div[4]/div[2]/div/div/div[2]/div[2]/form[2]/div/div/button')).asElement();
        //await updateButton.click();
        //await this.waitForResponseOnPage(this.page, ResponseUrlSearchType.EndsWith, '/channels/json', this.DEFAULT_TIMEOUT);
    }    
}