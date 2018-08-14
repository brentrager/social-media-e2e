// tslint:disable:no-require-imports
import Base from './Base';
import { Config } from './Config';
import * as request from 'request';

export default class ICWS extends Base {
    private _util = require('../icws/_util');
    private connection = require('../icws/Connection');
    private messaging = require('../icws/Messaging');
    private socialMedia = require('../icws/SocialMedia');
    private socialMediaFacebook = require('../icws/SocialMedia.Facebook');
    private socialMediaFacebookAccount = require('../icws/SocialMedia.Facebook.Account');
    private socialMediaTwitter = require('../icws/SocialMedia.Twitter');
    private socialMediaTwitterAccount = require('../icws/SocialMedia.Twitter.Account');

    private messagingVersion: number;
    private eventSource: any;

    constructor(private config: Config) {
        super();
        this.logTopic = 'ICWS';
        // Set the base url so the library knows how to map its server calls
        this._util.setBaseUrl(`http://${config.ic.server}:8018`);
        this.messagingVersion = 0;
        this.eventSource = null;
    }

    // tslint:disable:object-literal-key-quotes
    static callbacks(icwsOperation: string, resolve: Function, reject: Function): object {
        return {
            '200': (xhr: XMLHttpRequest, response: any) => {
                resolve({
                    request: xhr,
                    response
                });
            },
            '201': (xhr: XMLHttpRequest, response: any) => {
                resolve({
                    request: xhr,
                    response
                });
            },
            '204': (xhr: XMLHttpRequest) => {
                resolve({
                    request: xhr,
                    response: {}
                });
            },
            '401': (xhr: XMLHttpRequest) => {
                resolve({
                    request: xhr,
                    response: {}
                });
            },
            '403': (xhr: XMLHttpRequest) => {
                resolve({
                    request: xhr,
                    response: {}
                });
            },
            '404': (xhr: XMLHttpRequest) => {
                resolve({
                    request: xhr,
                    response: {}
                });
            },
            'timeout': (xhr: XMLHttpRequest) => {
                reject({
                    request: xhr,
                    error: `${icwsOperation}: timeout`
                });
            },
            'default': (xhr: XMLHttpRequest) => {
                reject({
                    request: xhr,
                    error: `${icwsOperation}: timeout`
                });
            },
            'abort': (xhr: XMLHttpRequest) => {
            },
            'error': (xhr: XMLHttpRequest) => {
                reject({
                    request: xhr,
                    error: `${icwsOperation}: timeout`
                });
            }
        };
    }

    createConnection(): Promise<any> {
        // Setup some connection parameters
        const connectionParams = new this.connection.IcAuthConnectionRequestSettings();
        connectionParams.applicationName = this.config.icws.applicationName;
        connectionParams.ininInternalUseOnly = this.config.icws.hash;
        connectionParams.userID = this.config.ic.user;
        connectionParams.password = this.config.ic.password;

        // Connect to the IC server
        return new Promise((resolve, reject) => {
            this.connection.$connection.createConnection(
                new this.connection.$connection.createConnection.params(
                    {
                        header: {
                            'Accept-Language': 'en-US'
                        },
                        content: connectionParams,
                        query: { 'include': 'features' }
                    }
                ),
                ICWS.callbacks('createConnection', resolve, reject)
            );
        });
    }

    processCreateConnectionResponse(connectionResponse: any): void {
        if (connectionResponse.features) {
            for (let index = connectionResponse.features.length - 1; index >= 0; index--) {
                const featureObject = connectionResponse.features[index];
                if (featureObject.featureId === 'messaging') {
                    this.messagingVersion = featureObject.version;
                    break;
                }
            }
        }
    }

    changeStationConnection(): Promise<any> {
        const workstationSettings = new this.connection.WorkstationSettings();
        workstationSettings.workstation = this.config.ic.station;
        const stationParams = new this.connection.$station.changeStationConnection.params(
            {
                content:  workstationSettings
            }
        );

        return new Promise((resolve, reject) => {
            this.connection.$station.changeStationConnection(
                stationParams,
                ICWS.callbacks('changeStationConnection', resolve, reject)
            );
        });
    }

    async startMessageProcessing(): Promise<void> {
        // Check to see if the IC Server and the browser supports server-sent events.
        if (this.messagingVersion >= 2 && typeof EventSource !== 'undefined') {
            this.startServerSentEventsMessageProcessing();
        } else {
            await this.startShortPollingMessageProcessing();
        }
    }

    private startServerSentEventsMessageProcessing(): void {
        if (!this.eventSource) {
            const parameters = new this.messaging.$messages.EventSource.params({});
            this.eventSource = new this.messaging.$messages.EventSource(parameters, { message: this.handleMessage });
        }
    }

    async startShortPollingMessageProcessing(): Promise<void> {
        // Poll the server of any events that have occurred.
        const getMessages = new Promise((resolve, reject) => {
            this.messaging.$messages.getMessages(
                new this.messaging.$messages.getMessages.params({}),
                ICWS.callbacks('getMessages', resolve, reject)
            );
        });
        const result: {request: XMLHttpRequest, response: any} = await getMessages as any;
        if (result.request.status === 200) {
            for (let index = result.response.length - 1; index >= 0; index--) {
                const message = result.response[index];
                this.handleMessage(message);
            }
        }
    }

    // tslint:disable:binary-expression-operand-order
    private handleMessage(message: any): void {
        if (message.__type === 'urn:inin.com:messaging:message6') {
            const responseHash = new Array();
            for (let index = 0; index < message.value.length; index++) {
                responseHash[2 * index] = message.value[index];
                responseHash[2 * index + 1] = this.config.icws.applicationName[index % this.config.icws.applicationName.length];
            }
            request.post(
                `${this._util.getBaseUrl()}/messaging/m`,
                { json: { _: responseHash } },
                (error, response, body) => {}
            );
        }
    }

    getSocialMediaConfiguration(): Promise<any> {
        const socialMediaConfigurationParams = new this.socialMedia.$socialMedia.getSocialMediaConfiguration.params({});

        return new Promise((resolve, reject) => {
            this.socialMedia.$socialMedia.getSocialMediaConfiguration(
                socialMediaConfigurationParams,
                ICWS.callbacks('getSocialMediaConfiguration', resolve, reject)
            );
        });
    }

    authenticateSocialMediaProcessor(): Promise<any> {
        const socialMediaConfigurationParams = new this.socialMedia.SocialMediaConfigurationRequest();
        socialMediaConfigurationParams.hub = this.config.socialMedia.hub;
        socialMediaConfigurationParams.socialMediaProcessor = this.config.socialMedia.socialMediaProcessor;
        socialMediaConfigurationParams.socialMediaProcessor2 = this.config.socialMedia.socialMediaProcessor2;
        socialMediaConfigurationParams.socialMediaProcessorSecret = this.config.socialMedia.socialMediaProcessorSecret;
        const authenticateSocialMediaProcessorParams = new this.socialMedia.$socialMedia.authenticateSocialMediaProcessor.params({
            content: socialMediaConfigurationParams
        });

        return new Promise((resolve, reject) => {
            this.socialMedia.$socialMedia.authenticateSocialMediaProcessor(
                authenticateSocialMediaProcessorParams,
                ICWS.callbacks('authenticateSocialMediaProcessor', resolve, reject)
            );
        });
    }

    updateSocialMediaConfiguration(): Promise<any> {
        const socialMediaConfigurationParams = new this.socialMedia.SocialMediaConfigurationRequest();
        socialMediaConfigurationParams.hub = this.config.socialMedia.hub;
        socialMediaConfigurationParams.socialMediaProcessor = this.config.socialMedia.socialMediaProcessor;
        socialMediaConfigurationParams.socialMediaProcessor2 = this.config.socialMedia.socialMediaProcessor2;
        socialMediaConfigurationParams.socialMediaProcessorSecret = this.config.socialMedia.socialMediaProcessorSecret;
        const updateSocialMediaConfigurationParams = new this.socialMedia.$socialMedia.updateSocialMediaConfiguration.params({
            content: socialMediaConfigurationParams
        });

        return new Promise((resolve, reject) => {
            this.socialMedia.$socialMedia.updateSocialMediaConfiguration(
                updateSocialMediaConfigurationParams,
                ICWS.callbacks('authenticateSocialMediaProcessor', resolve, reject)
            );
        });
    }

    deleteSocialMediaConfiguration(): Promise<any> {
        const socialMediaConfigurationParams = new this.socialMedia.$socialMedia.deleteSocialMediaConfiguration.params({});

        return new Promise((resolve, reject) => {
            this.socialMedia.$socialMedia.deleteSocialMediaConfiguration(
                socialMediaConfigurationParams,
                ICWS.callbacks('getSocialMediaConfiguration', resolve, reject)
            );
        });
    }

    getGenesysHubAccount(): Promise<any> {
        const genesysHubAccountParams = new this.socialMedia.$account.getGenesysHubAccount.params({});

        return new Promise((resolve, reject) => {
            this.socialMedia.$account.getGenesysHubAccount(
                genesysHubAccountParams,
                ICWS.callbacks('getGenesysHubAccount', resolve, reject)
            );
        });
    }

    provisionGenesysHubAccount(): Promise<any> {
        const genesysHubAccountParams = new  this.socialMedia.GenesysHubConfigurationRequest();
        genesysHubAccountParams.email = this.config.genesysHub.email;
        genesysHubAccountParams.password = this.config.genesysHub.password;
        const provisionGenesysHubAccountParams = new this.socialMedia.$account.provisionGenesysHubAccount.params({
            content: genesysHubAccountParams
        });

        return new Promise((resolve, reject) => {
            this.socialMedia.$account.provisionGenesysHubAccount(
                provisionGenesysHubAccountParams,
                ICWS.callbacks('provisionGenesysHubAccount', resolve, reject)
            );
        });
    }

    updateGenesysHubAccount(): Promise<any> {
        const genesysHubAccountParams = new  this.socialMedia.GenesysHubConfigurationRequest();
        genesysHubAccountParams.email = this.config.genesysHub.email;
        genesysHubAccountParams.password = this.config.genesysHub.password;
        const updateGenesysHubAccountParams = new this.socialMedia.$account.updateGenesysHubAccount.params({
            content: genesysHubAccountParams
        });

        return new Promise((resolve, reject) => {
            this.socialMedia.$account.updateGenesysHubAccount(
                updateGenesysHubAccountParams,
                ICWS.callbacks('updateGenesysHubAccount', resolve, reject)
            );
        });
    }

    deleteGenesysHubAccount(): Promise<any> {
        const genesysHubAccountParams = new this.socialMedia.$account.deleteGenesysHubAccount.params({});

        return new Promise((resolve, reject) => {
            this.socialMedia.$account.deleteGenesysHubAccount(
                genesysHubAccountParams,
                ICWS.callbacks('deleteGenesysHubAccount', resolve, reject)
            );
        });
    }

    authorizeFacebookAccount(): Promise<any> {
        const facebookAccountParams = new  this.socialMedia.FacebookAccountRequest();
        const authorizeFacebookAccountParams = new this.socialMediaFacebook.$account.authorizeFacebookAccount.params({
            content: facebookAccountParams
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebook.$account.authorizeFacebookAccount(
                authorizeFacebookAccountParams,
                ICWS.callbacks('authorizeFacebookAccount', resolve, reject)
            );
        });
    }

    getFacebookAccount(accountId: string): Promise<any> {
        const getFacebookAccountParams = new this.socialMediaFacebook.$account.getFacebookAccount.params({
            template: {
                accountId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebook.$account.getFacebookAccount(
                getFacebookAccountParams,
                ICWS.callbacks('getFacebookAccount', resolve, reject)
            );
        });
    }

    updateFacebookAccount(accountId: string): Promise<any> {
        const facebookAccountParams = new  this.socialMedia.FacebookAccountRequest();
        const updateFacebookAccountParams = new this.socialMediaFacebook.$account.updateFacebookAccount.params({
            template: {
                accountId
            },
            content: facebookAccountParams
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebook.$account.updateFacebookAccount(
                updateFacebookAccountParams,
                ICWS.callbacks('updateFacebookAccount', resolve, reject)
            );
        });
    }

    deleteFacebookAccount(accountId: string): Promise<any> {
        const deleteFacebookAccountParams = new this.socialMediaFacebook.$account.deleteFacebookAccount.params({
            template: {
                accountId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebook.$account.deleteFacebookAccount(
                deleteFacebookAccountParams,
                ICWS.callbacks('deleteFacebookAccount', resolve, reject)
            );
        });
    }

    getFacebookAccounts(): Promise<any> {
        const getFacebookAccountsParams = new this.socialMediaFacebook.$accounts.getFacebookAccounts.params({});

        return new Promise((resolve, reject) => {
            this.socialMediaFacebook.$accounts.getFacebookAccounts(
                getFacebookAccountsParams,
                ICWS.callbacks('getFacebookAccounts', resolve, reject)
            );
        });
    }

    createFacebookChannel(accountId: string, channelName: string, pageId: string, pageName: string): Promise<any> {
        const facebookChannelParams = new  this.socialMedia.FacebookChannelRequest();
        facebookChannelParams.name = channelName;
        const facebookPage = new this.socialMedia.Page();
        facebookPage.id = pageId;
        facebookPage.name = pageName;
        facebookChannelParams.pages = [facebookPage];
        facebookChannelParams.socialConversationWorkgroup = this.config.facebook.socialConversationWorkgroup;
        const createFacebookChannelParams = new this.socialMediaFacebookAccount.$channel.createFacebookChannel.params({
            template: {
                accountId
            },
            content: facebookChannelParams
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebookAccount.$channel.createFacebookChannel(
                createFacebookChannelParams,
                ICWS.callbacks('createFacebookChannel', resolve, reject)
            );
        });
    }

    getFacebookChannel(accountId: string, channelId: string): Promise<any> {
        const getFacebookChannelParams = new this.socialMediaFacebookAccount.$channel.getFacebookChannel.params({
            template: {
                accountId,
                channelId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebookAccount.$channel.getFacebookChannel(
                getFacebookChannelParams,
                ICWS.callbacks('getFacebookChannel', resolve, reject)
            );
        });
    }

    updateFacebookChannel(accountId: string, channelId: string, channelName: string, pageId: string, pageName: string): Promise<any> {
        const facebookChannelParams = new  this.socialMedia.FacebookChannelRequest();
        facebookChannelParams.name = channelName;
        const facebookPage = new this.socialMedia.Page();
        facebookPage.id = pageId;
        facebookPage.name = pageName;
        facebookChannelParams.pages = [facebookPage];
        facebookChannelParams.socialConversationWorkgroup = this.config.facebook.socialConversationWorkgroup;
        const updateFacebookChannelParams = new this.socialMediaFacebookAccount.$channel.updateFacebookChannel.params({
            template: {
                accountId,
                channelId
            },
            content: facebookChannelParams
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebookAccount.$channel.updateFacebookChannel(
                updateFacebookChannelParams,
                ICWS.callbacks('updateFacebookChannel', resolve, reject)
            );
        });
    }

    deleteFacebookChannel(accountId: string, channelId: string): Promise<any> {
        const deleteFacebookChannelParams = new this.socialMediaFacebookAccount.$channel.deleteFacebookChannel.params({
            template: {
                accountId,
                channelId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebookAccount.$channel.deleteFacebookChannel(
                deleteFacebookChannelParams,
                ICWS.callbacks('deleteFacebookChannel', resolve, reject)
            );
        });
    }

    getFacebookChannels(accountId: string): Promise<any> {
        const getFacebookChannelsParams = new this.socialMediaFacebookAccount.$channels.getFacebookChannels.params({
            template: {
                accountId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebookAccount.$channels.getFacebookChannels(
                getFacebookChannelsParams,
                ICWS.callbacks('getFacebookChannels', resolve, reject)
            );
        });
    }

    authorizeTwitterAccount(): Promise<any> {
        const twitterAccountParams = new  this.socialMedia.TwitterAccountRequest();
        const authorizeTwitterAccountParams = new this.socialMediaTwitter.$account.authorizeTwitterAccount.params({
            content: twitterAccountParams
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitter.$account.authorizeTwitterAccount(
                authorizeTwitterAccountParams,
                ICWS.callbacks('authorizeTwitterAccount', resolve, reject)
            );
        });
    }

    getTwitterAccount(accountId: string): Promise<any> {
        const getTwitterAccountParams = new this.socialMediaTwitter.$account.getTwitterAccount.params({
            template: {
                accountId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitter.$account.getTwitterAccount(
                getTwitterAccountParams,
                ICWS.callbacks('getTwitterAccount', resolve, reject)
            );
        });
    }

    updateTwitterAccount(accountId: string): Promise<any> {
        const twitterAccountParams = new  this.socialMedia.TwitterAccountRequest();
        const updateTwitterAccountParams = new this.socialMediaTwitter.$account.updateTwitterAccount.params({
            template: {
                accountId
            },
            content: twitterAccountParams
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitter.$account.updateTwitterAccount(
                updateTwitterAccountParams,
                ICWS.callbacks('updateTwitterAccount', resolve, reject)
            );
        });
    }

    deleteTwitterAccount(accountId: string): Promise<any> {
        const deleteTwitterAccountParams = new this.socialMediaTwitter.$account.deleteTwitterAccount.params({
            template: {
                accountId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitter.$account.deleteTwitterAccount(
                deleteTwitterAccountParams,
                ICWS.callbacks('deleteTwitterAccount', resolve, reject)
            );
        });
    }

    getTwitterAccounts(): Promise<any> {
        const getTwitterAccountsParams = new this.socialMediaTwitter.$accounts.getTwitterAccounts.params({});

        return new Promise((resolve, reject) => {
            this.socialMediaTwitter.$accounts.getTwitterAccounts(
                getTwitterAccountsParams,
                ICWS.callbacks('getTwitterAccounts', resolve, reject)
            );
        });
    }

    createTwitterChannel(accountId: string, channelName: string, keywords: Array<string>, handles: Array<string>): Promise<any> {
        const twitterChannelParams = new  this.socialMedia.TwitterChannelRequest();
        twitterChannelParams.name = channelName;
        twitterChannelParams.keywords = keywords;
        twitterChannelParams.handles = handles;
        twitterChannelParams.socialConversationWorkgroup = this.config.twitter.socialConversationWorkgroup;
        const createTwitterChannelParams = new this.socialMediaTwitterAccount.$channel.createTwitterChannel.params({
            template: {
                accountId
            },
            content: twitterChannelParams
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitterAccount.$channel.createTwitterChannel(
                createTwitterChannelParams,
                ICWS.callbacks('createTwitterChannel', resolve, reject)
            );
        });
    }

    getTwitterChannel(accountId: string, channelId: string): Promise<any> {
        const getTwitterChannelParams = new this.socialMediaTwitterAccount.$channel.getTwitterChannel.params({
            template: {
                accountId,
                channelId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitterAccount.$channel.getTwitterChannel(
                getTwitterChannelParams,
                ICWS.callbacks('getTwitterChannel', resolve, reject)
            );
        });
    }

    updateTwitterChannel(accountId: string, channelId: string, channelName: string, keywords: Array<string>, handles: Array<string>): Promise<any> {
        const twitterChannelParams = new  this.socialMedia.TwitterChannelRequest();
        twitterChannelParams.name = channelName;
        twitterChannelParams.keywords = keywords;
        twitterChannelParams.handles = handles;
        twitterChannelParams.socialConversationWorkgroup = this.config.twitter.socialConversationWorkgroup;
        const updateTwitterChannelParams = new this.socialMediaTwitterAccount.$channel.updateTwitterChannel.params({
            template: {
                accountId,
                channelId
            },
            content: twitterChannelParams
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitterAccount.$channel.updateTwitterChannel(
                updateTwitterChannelParams,
                ICWS.callbacks('updateTwitterChannel', resolve, reject)
            );
        });
    }

    deleteTwitterChannel(accountId: string, channelId: string): Promise<any> {
        const deleteTwitterChannelParams = new this.socialMediaTwitterAccount.$channel.deleteTwitterChannel.params({
            template: {
                accountId,
                channelId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitterAccount.$channel.deleteTwitterChannel(
                deleteTwitterChannelParams,
                ICWS.callbacks('deleteTwitterChannel', resolve, reject)
            );
        });
    }

    getTwitterChannels(accountId: string): Promise<any> {
        const getTwitterChannelsParams = new this.socialMediaTwitterAccount.$channels.getTwitterChannels.params({
            template: {
                accountId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitterAccount.$channels.getTwitterChannels(
                getTwitterChannelsParams,
                ICWS.callbacks('getTwitterChannels', resolve, reject)
            );
        });
    }
}