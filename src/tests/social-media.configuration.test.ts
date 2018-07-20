import { config } from '../util/Config';
import ICWS from '../util/ICWS';
import Facebook from '../util/Facebook';
import Twitter from '../util/Twitter';

let icws: ICWS;
let facebook: Facebook;
let twitter: Twitter;

jest.setTimeout(5 * 60 * 1000); // Big timeout for long running Puppeteer Actions

describe('Social Media - Configuration', () => {
    beforeAll(async () => {
        icws = new ICWS(config);
        facebook = new Facebook(config, global.browser);
        twitter = new Twitter(config, global.browser);
        await icws.createConnection().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(201);
            icws.processCreateConnectionResponse(result.response);
        });
        await icws.changeStationConnection().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            icws.startMessageProcessing();
        });
        await icws.deleteSocialMediaConfiguration().then((result: { request: XMLHttpRequest, response: any }) => {});
        await icws.getSocialMediaConfiguration().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(404);
        });
    });

    test('Running Tests', async () => {
        // Test the Social Media configuration.
        await icws.authenticateSocialMediaProcessor().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(201);
            expect(result.response.hub).toBe(config.socialMedia.hub);
            expect(result.response.socialMediaProcessor).toBe(config.socialMedia.socialMediaProcessor);
            expect(result.response.socialMediaProcessorSecret).toBe('SUPPRESSED');
        });
        await icws.getSocialMediaConfiguration().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.hub).toBe(config.socialMedia.hub);
            expect(result.response.socialMediaProcessor).toBe(config.socialMedia.socialMediaProcessor);
            expect(result.response.socialMediaProcessorSecret).toBe('SUPPRESSED');
        });
        await icws.updateSocialMediaConfiguration().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.hub).toBe(config.socialMedia.hub);
            expect(result.response.socialMediaProcessor).toBe(config.socialMedia.socialMediaProcessor);
            expect(result.response.socialMediaProcessorSecret).toBe('SUPPRESSED');
        });
        await icws.getSocialMediaConfiguration().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.hub).toBe(config.socialMedia.hub);
            expect(result.response.socialMediaProcessor).toBe(config.socialMedia.socialMediaProcessor);
            expect(result.response.socialMediaProcessorSecret).toBe('SUPPRESSED');
        });
        // Test the Genesys Hub configuration.
        await icws.provisionGenesysHubAccount().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(201);
            expect(result.response.email).toBe(config.genesysHub.email);
            expect(result.response.password).toBe('SUPPRESSED');
        });
        await icws.getGenesysHubAccount().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.email).toBe(config.genesysHub.email);
            expect(result.response.password).toBe('SUPPRESSED');
        });
        await icws.updateGenesysHubAccount().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.email).toBe(config.genesysHub.email);
            expect(result.response.password).toBe('SUPPRESSED');
        });
        await icws.getGenesysHubAccount().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.email).toBe(config.genesysHub.email);
            expect(result.response.password).toBe('SUPPRESSED');
        });
        // Test the Facebook Account configuration.
        let facebookAccountId: string;
        let facebookAuthUrl: string;
        await icws.authorizeFacebookAccount().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(201);
            expect(result.response.accountId).toBeDefined();
            facebookAccountId = result.response.accountId;
            facebookAuthUrl = result.response.facebookAuthUrl;
        });
        await facebook.authorize(facebookAuthUrl);
        let facebookChannelId: string;
        let facebookName: string;
        let facebookId: string;
        let facebookPageId: string;
        let facebookPageName: string;
        await icws.updateFacebookAccount(facebookAccountId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.accountId).toBe(facebookAccountId);
            expect(result.response.channelId).toBeDefined();
            facebookChannelId = result.response.channelId;
            expect(result.response.facebookName).toBeDefined();
            facebookName = result.response.facebookName;
            expect(result.response.facebookId).toBeDefined();
            facebookId = result.response.facebookId;
            expect(result.response.pages).toBeDefined();
            expect(result.response.pages.length).toBeGreaterThan(0);
            facebookPageId = result.response.pages[0].id;
            facebookPageName = result.response.pages[0].name;
        });
        await icws.getFacebookAccount(facebookAccountId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.accountId).toBe(facebookAccountId);
            expect(result.response.channelId).toBe(facebookChannelId);
            expect(result.response.facebookName).toBe(facebookName);
            expect(result.response.facebookId).toBe(facebookId);
            expect(result.response.pages[0].id).toBe(facebookPageId);
            expect(result.response.pages[0].name).toBe(facebookPageName);
        });
        await icws.getFacebookAccounts().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.accounts.length).toBe(1);
            expect(result.response.accounts[0].accountId).toBe(facebookAccountId);
            expect(result.response.accounts[0].channelId).toBe(facebookChannelId);
            expect(result.response.accounts[0].facebookName).toBe(facebookName);
            expect(result.response.accounts[0].facebookId).toBe(facebookId);
            expect(result.response.accounts[0].pages[0].id).toBe(facebookPageId);
            expect(result.response.accounts[0].pages[0].name).toBe(facebookPageName);
        });
        let newFacebookChannelName: string = 'FACEBOOK-ADECE2F4-CAA5-4197-BA71-43FD82190A6E';
        let newFacebookChannelId: string;
        await icws.createFacebookChannel(facebookAccountId, newFacebookChannelName, facebookPageId, facebookPageName).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(201);
            expect(result.response.accountId).toBe(facebookAccountId);
            expect(result.response.channelId).toBeDefined();
            newFacebookChannelId = result.response.channelId;
            expect(result.response.name).toBe(newFacebookChannelName);
        });
        await icws.updateFacebookChannel(facebookAccountId, newFacebookChannelId, newFacebookChannelName, facebookPageId, facebookPageName).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.accountId).toBe(facebookAccountId);
            expect(result.response.channelId).toBe(newFacebookChannelId);
            expect(result.response.name).toBe(newFacebookChannelName);
            expect(result.response.pages[0].id).toBe(facebookPageId);
            expect(result.response.pages[0].name).toBe(facebookPageName);
            expect(result.response.socialConversationWorkgroup).toBe(config.facebook.socialConversationWorkgroup);
        });
        await icws.getFacebookChannel(facebookAccountId, newFacebookChannelId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.accountId).toBe(facebookAccountId);
            expect(result.response.channelId).toBe(newFacebookChannelId);
            expect(result.response.name).toBe(newFacebookChannelName);
            expect(result.response.pages[0].id).toBe(facebookPageId);
            expect(result.response.pages[0].name).toBe(facebookPageName);
            expect(result.response.socialConversationWorkgroup).toBe(config.facebook.socialConversationWorkgroup);
        });
        await icws.getFacebookChannels(facebookAccountId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.channels.length).toBe(1);
            expect(result.response.channels[0].accountId).toBe(facebookAccountId);
            expect(result.response.channels[0].channelId).toBe(newFacebookChannelId);
            expect(result.response.channels[0].name).toBe(newFacebookChannelName);
            expect(result.response.channels[0].pages[0].id).toBe(facebookPageId);
            expect(result.response.channels[0].pages[0].name).toBe(facebookPageName);
            expect(result.response.channels[0].socialConversationWorkgroup).toBe(config.facebook.socialConversationWorkgroup);
        });
        await icws.deleteFacebookChannel(facebookAccountId, newFacebookChannelId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(204);
        });
        await icws.getFacebookChannels(facebookAccountId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(404);
        });
        await icws.deleteFacebookAccount(facebookAccountId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(404);
        });
        await icws.getFacebookAccounts().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(404);
        });
        // Test the Twitter Account configuration.
        let twitterAccountId: string;
        let twitterAuthUrl: string;
        await icws.authorizeTwitterAccount().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(201);
            expect(result.response.accountId).toBeDefined();
            twitterAccountId = result.response.accountId;
            twitterAuthUrl = result.response.twitterAuthUrl;
        });
        await twitter.authorize(twitterAuthUrl);
        let twitterChannelId: string;
        let twitterHandle: string;
        let twitterProfileImageUrl: string;
        await icws.updateTwitterAccount(twitterAccountId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.accountId).toBe(twitterAccountId);
            expect(result.response.channelId).toBeDefined();
            twitterChannelId = result.response.channelId;
            expect(result.response.twitterHandle).toBeDefined();
            twitterHandle = result.response.twitterHandle;
            expect(result.response.twitterProfileImageUrl).toBeDefined();
            twitterProfileImageUrl = result.response.twitterProfileImageUrl;
        });
        await icws.getTwitterAccount(twitterAccountId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.accountId).toBe(twitterAccountId);
            expect(result.response.channelId).toBe(twitterChannelId);
            expect(result.response.twitterHandle).toBe(twitterHandle);
            expect(result.response.twitterProfileImageUrl).toBe(twitterProfileImageUrl);
        });
        await icws.getTwitterAccounts().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.accounts.length).toBe(1);
            expect(result.response.accounts[0].accountId).toBe(twitterAccountId);
            expect(result.response.accounts[0].channelId).toBe(twitterChannelId);
            expect(result.response.accounts[0].twitterHandle).toBe(twitterHandle);
            expect(result.response.accounts[0].twitterProfileImageUrl).toBe(twitterProfileImageUrl);
        });
        let newTwitterChannelName: string = 'TWITTER-0C44D6DF-743C-4CE6-89F6-2EAB2652AD44';
        let newTwitterChannelId: string;
        let keywords:string[] = ['keyword1', 'keyword2'];
        let handles:string[] = [twitterHandle];
        await icws.createTwitterChannel(twitterAccountId, newTwitterChannelName, keywords, handles).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(201);
            expect(result.response.accountId).toBe(twitterAccountId);
            expect(result.response.channelId).toBeDefined();
            newTwitterChannelId = result.response.channelId;
            expect(result.response.name).toBe(newTwitterChannelName);
        });
        await icws.updateTwitterChannel(twitterAccountId, newTwitterChannelId, newTwitterChannelName, keywords, handles).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.accountId).toBe(twitterAccountId);
            expect(result.response.channelId).toBe(newTwitterChannelId);
            expect(result.response.name).toBe(newTwitterChannelName);
            expect(result.response.keywords.length).toBe(keywords.length);
            expect(result.response.keywords[0]).toBe(keywords[0]);
            expect(result.response.keywords[1]).toBe(keywords[1]);
            expect(result.response.handles.length).toBe(handles.length);
            expect(result.response.handles[0]).toBe(handles[0]);
            expect(result.response.socialConversationWorkgroup).toBe(config.twitter.socialConversationWorkgroup);
        });
        await icws.getTwitterChannel(twitterAccountId, newTwitterChannelId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.accountId).toBe(twitterAccountId);
            expect(result.response.channelId).toBe(newTwitterChannelId);
            expect(result.response.name).toBe(newTwitterChannelName);
            expect(result.response.keywords.length).toBe(keywords.length);
            expect(result.response.keywords[0]).toBe(keywords[0]);
            expect(result.response.keywords[1]).toBe(keywords[1]);
            expect(result.response.handles.length).toBe(handles.length);
            expect(result.response.handles[0]).toBe(handles[0]);
            expect(result.response.socialConversationWorkgroup).toBe(config.twitter.socialConversationWorkgroup);
        });
        await icws.getTwitterChannels(twitterAccountId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(200);
            expect(result.response.channels.length).toBe(1);
            expect(result.response.channels[0].accountId).toBe(twitterAccountId);
            expect(result.response.channels[0].channelId).toBe(newTwitterChannelId);
            expect(result.response.channels[0].name).toBe(newTwitterChannelName);
            expect(result.response.channels[0].keywords.length).toBe(keywords.length);
            expect(result.response.channels[0].keywords[0]).toBe(keywords[0]);
            expect(result.response.channels[0].keywords[1]).toBe(keywords[1]);
            expect(result.response.channels[0].handles.length).toBe(handles.length);
            expect(result.response.channels[0].handles[0]).toBe(handles[0]);
            expect(result.response.channels[0].socialConversationWorkgroup).toBe(config.twitter.socialConversationWorkgroup);
        });
        await icws.deleteTwitterChannel(twitterAccountId, newTwitterChannelId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(204);
        });
        await icws.getTwitterChannels(twitterAccountId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(404);
        });
        await icws.deleteTwitterAccount(twitterAccountId).then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(404);
        });
        await icws.getTwitterAccounts().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(404);
        });
        await icws.deleteGenesysHubAccount().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(204)
        });
        await icws.getGenesysHubAccount().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(404);
        });
        await icws.deleteSocialMediaConfiguration().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(204)
        });
        await icws.getSocialMediaConfiguration().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(404);
        });
    });

    afterAll(async () => {
        await icws.deleteSocialMediaConfiguration().then((result: { request: XMLHttpRequest, response: any }) => {});
        await icws.getSocialMediaConfiguration().then((result: { request: XMLHttpRequest, response: any }) => {
            expect(result.request.status).toBe(404);
        });
    });
});