import Base from './Base';
import { Config } from './Config';
import request = require('request');

let icwsSDKPath: string = 'D:/Builds/icws_main_systest/pub/gen/inc/icws/Internal/JavaScriptCommonJS';

export default class ICWS extends Base {
    private _util = require(icwsSDKPath + '/_util');
    private connection = require(icwsSDKPath + '/Connection');
    private messaging = require(icwsSDKPath + '/Messaging');
    private socialMedia = require(icwsSDKPath + '/SocialMedia');
    private socialMediaFacebook = require(icwsSDKPath + '/SocialMedia.Facebook');
    private socialMediaFacebookAccount = require(icwsSDKPath + '/SocialMedia.Facebook.Account');
    private socialMediaTwitter = require(icwsSDKPath + '/SocialMedia.Twitter');
    private socialMediaTwitterAccount = require(icwsSDKPath + '/SocialMedia.Twitter.Account');

    private messagingVersion: number;
    private eventSource: any;

    constructor(private config: Config) {
        super();
        this.logTopic = 'ICWS';
        // Set the base url so the library knows how to map its server calls
        this._util.setBaseUrl('http://' + config.ic.server + ':8018');
        this.messagingVersion = 0;
        this.eventSource = null;
    }

    private callbacks(icwsOperation: string, resolve: Function, reject: Function): object {
        return {
            '200': function(xhr: XMLHttpRequest, response: any) {
                resolve({
                    request: xhr,
                    response: response
                });
            },
            '201': function(xhr: XMLHttpRequest, response: any) {
                resolve({
                    request: xhr,
                    response: response
                });
            },
            '204': function(xhr: XMLHttpRequest) {
                resolve({
                    request: xhr,
                    response: {}
                });
            },
            '401': function (xhr: XMLHttpRequest) {
                resolve({
                    request: xhr,
                    response: {}
                });
            },
            '403': function (xhr: XMLHttpRequest) {
                resolve({
                    request: xhr,
                    response: {}
                });
            },
            '404': function (xhr: XMLHttpRequest) {
                resolve({
                    request: xhr,
                    response: {}
                });
            },
            'timeout': function (xhr: XMLHttpRequest) {
                reject({
                    request: xhr,
                    error: icwsOperation + ': timeout'
                });
            },
            'default': function (xhr: XMLHttpRequest) {
                reject({
                    request: xhr,
                    error: icwsOperation + ': default'
                });
            },
            'abort': function (xhr: XMLHttpRequest) {
            },
            'error': function (xhr: XMLHttpRequest) {
                reject({
                    request: xhr,
                    error: icwsOperation + ': error'
                });
            }        
        }
    }

    public createConnection(): Promise<any> {
        // Setup some connection parameters
        let connectionParams = new this.connection.IcAuthConnectionRequestSettings();        
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
                            'Accept-Language': "en-US"
                        },
                        content: connectionParams,
                        query: { 'include': 'features' },
                    }
                ),
                this.callbacks('createConnection', resolve, reject)
            );
        });
    }

    public processCreateConnectionResponse(connectionResponse: any) {
        if (connectionResponse.features) {
            for (let index = connectionResponse.features.length - 1; index >= 0; index--) {
                let featureObject = connectionResponse.features[index];                
                if (featureObject.featureId === 'messaging') {
                    this.messagingVersion = featureObject.version;
                    break;
                }
            }
        }
    }

    public changeStationConnection(): Promise<any> {
        let workstationSettings = new this.connection.WorkstationSettings();                    
        workstationSettings.workstation = this.config.ic.station;
        let stationParams = new this.connection.$station.changeStationConnection.params(
            {
                content:  workstationSettings
            }
        );

        return new Promise((resolve, reject) => {
            this.connection.$station.changeStationConnection(
                stationParams,
                this.callbacks('changeStationConnection', resolve, reject)
            );
        });
    }

    public startMessageProcessing() {
        // Check to see if the IC Server and the browser supports server-sent events.
        if (this.messagingVersion >= 2 && typeof EventSource !== 'undefined') {
            this.startServerSentEventsMessageProcessing();
        } else {
            this.startShortPollingMessageProcessing();
        }
    }
    
    private startServerSentEventsMessageProcessing() {
        if (!this.eventSource) {
            let parameters = new this.messaging.$messages.EventSource.params({});            
            this.eventSource = new this.messaging.$messages.EventSource(parameters, { message: this.handleMessage });
        }
    }   

    public startShortPollingMessageProcessing() {
        // Poll the server of any events that have occurred.
        let getMessages = new Promise((resolve, reject) => {
            this.messaging.$messages.getMessages(
                new this.messaging.$messages.getMessages.params({}),
                this.callbacks('getMessages', resolve, reject)
            );
        });
        getMessages.then((result: { request: XMLHttpRequest, response: any }) => {
            if (result.request.status == 200) {
                for (let index = result.response.length - 1; index >= 0; index--) {
                    let message = result.response[index];
                    this.handleMessage(message);
                };
            }
        });
    }
    
    private handleMessage(message: any) {
        if (message.__type == 'urn:inin.com:messaging:message6') {
            let responseHash = new Array();
            for (let index = 0; index < message.value.length; index++)
            {
                responseHash[2 * index] = message.value[index];
                responseHash[2 * index + 1] = this.config.icws.applicationName[index % this.config.icws.applicationName.length];
            }
            request.post(
                this._util.getBaseUrl() + '/messaging/m',
                { json: { _: responseHash } },
                function (error, response, body) {}
            );
        }
    }

    public getSocialMediaConfiguration(): Promise<any> {
        let socialMediaConfigurationParams = new this.socialMedia.$socialMedia.getSocialMediaConfiguration.params({});

        return new Promise((resolve, reject) => {
            this.socialMedia.$socialMedia.getSocialMediaConfiguration(
                socialMediaConfigurationParams,
                this.callbacks('getSocialMediaConfiguration', resolve, reject)
            );
        });
    }

    public authenticateSocialMediaProcessor(): Promise<any> {
        let socialMediaConfigurationParams = new this.socialMedia.SocialMediaConfigurationRequest();
        socialMediaConfigurationParams.hub = this.config.socialMedia.hub;
        socialMediaConfigurationParams.socialMediaProcessor = this.config.socialMedia.socialMediaProcessor;
        socialMediaConfigurationParams.socialMediaProcessor2 = this.config.socialMedia.socialMediaProcessor2;
        socialMediaConfigurationParams.socialMediaProcessorSecret = this.config.socialMedia.socialMediaProcessorSecret;
        let authenticateSocialMediaProcessorParams = new this.socialMedia.$socialMedia.authenticateSocialMediaProcessor.params({
            content: socialMediaConfigurationParams
        });

        return new Promise((resolve, reject) => {
            this.socialMedia.$socialMedia.authenticateSocialMediaProcessor(
                authenticateSocialMediaProcessorParams,
                this.callbacks('authenticateSocialMediaProcessor', resolve, reject)
            );
        });
    }

    public updateSocialMediaConfiguration(): Promise<any> {
        let socialMediaConfigurationParams = new this.socialMedia.SocialMediaConfigurationRequest();
        socialMediaConfigurationParams.hub = this.config.socialMedia.hub;
        socialMediaConfigurationParams.socialMediaProcessor = this.config.socialMedia.socialMediaProcessor;
        socialMediaConfigurationParams.socialMediaProcessor2 = this.config.socialMedia.socialMediaProcessor2;
        socialMediaConfigurationParams.socialMediaProcessorSecret = this.config.socialMedia.socialMediaProcessorSecret;
        let updateSocialMediaConfigurationParams = new this.socialMedia.$socialMedia.updateSocialMediaConfiguration.params({
            content: socialMediaConfigurationParams
        });

        return new Promise((resolve, reject) => {
            this.socialMedia.$socialMedia.updateSocialMediaConfiguration(
                updateSocialMediaConfigurationParams,
                this.callbacks('authenticateSocialMediaProcessor', resolve, reject)
            );
        });
    }

    public deleteSocialMediaConfiguration(): Promise<any> {
        let socialMediaConfigurationParams = new this.socialMedia.$socialMedia.deleteSocialMediaConfiguration.params({});

        return new Promise((resolve, reject) => {
            this.socialMedia.$socialMedia.deleteSocialMediaConfiguration(
                socialMediaConfigurationParams,
                this.callbacks('getSocialMediaConfiguration', resolve, reject)
            );
        });
    }

    public getGenesysHubAccount(): Promise<any> {
        let genesysHubAccountParams = new this.socialMedia.$account.getGenesysHubAccount.params({});

        return new Promise((resolve, reject) => {
            this.socialMedia.$account.getGenesysHubAccount(
                genesysHubAccountParams,
                this.callbacks('getGenesysHubAccount', resolve, reject)
            );
        });
    }

    public provisionGenesysHubAccount(): Promise<any> {
        let genesysHubAccountParams = new  this.socialMedia.GenesysHubConfigurationRequest();
        genesysHubAccountParams.email = this.config.genesysHub.email;
        genesysHubAccountParams.password = this.config.genesysHub.password;
        let provisionGenesysHubAccountParams = new this.socialMedia.$account.provisionGenesysHubAccount.params({
            content: genesysHubAccountParams
        }); 

        return new Promise((resolve, reject) => {
            this.socialMedia.$account.provisionGenesysHubAccount(
                provisionGenesysHubAccountParams,
                this.callbacks('provisionGenesysHubAccount', resolve, reject)
            );
        });
    }

    public updateGenesysHubAccount(): Promise<any> {
        let genesysHubAccountParams = new  this.socialMedia.GenesysHubConfigurationRequest();
        genesysHubAccountParams.email = this.config.genesysHub.email;
        genesysHubAccountParams.password = this.config.genesysHub.password;
        let updateGenesysHubAccountParams = new this.socialMedia.$account.updateGenesysHubAccount.params({
            content: genesysHubAccountParams
        }); 

        return new Promise((resolve, reject) => {
            this.socialMedia.$account.updateGenesysHubAccount(
                updateGenesysHubAccountParams,
                this.callbacks('updateGenesysHubAccount', resolve, reject)
            );
        });
    }

    public deleteGenesysHubAccount(): Promise<any> {
        let genesysHubAccountParams = new this.socialMedia.$account.deleteGenesysHubAccount.params({});

        return new Promise((resolve, reject) => {
            this.socialMedia.$account.deleteGenesysHubAccount(
                genesysHubAccountParams,
                this.callbacks('deleteGenesysHubAccount', resolve, reject)
            );
        });
    }

    public authorizeFacebookAccount(): Promise<any> {
        let facebookAccountParams = new  this.socialMedia.FacebookAccountRequest();
        let authorizeFacebookAccountParams = new this.socialMediaFacebook.$account.authorizeFacebookAccount.params({
            content: facebookAccountParams
        }); 

        return new Promise((resolve, reject) => {
            this.socialMediaFacebook.$account.authorizeFacebookAccount(
                authorizeFacebookAccountParams,
                this.callbacks('authorizeFacebookAccount', resolve, reject)
            );
        });
    }

    public getFacebookAccount(accountId: string): Promise<any> {
        let getFacebookAccountParams = new this.socialMediaFacebook.$account.getFacebookAccount.params({
            template: {
                accountId: accountId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebook.$account.getFacebookAccount(
                getFacebookAccountParams,
                this.callbacks('getFacebookAccount', resolve, reject)
            );
        });
    }

    public updateFacebookAccount(accountId: string): Promise<any> {
        let facebookAccountParams = new  this.socialMedia.FacebookAccountRequest();
        let updateFacebookAccountParams = new this.socialMediaFacebook.$account.updateFacebookAccount.params({
            template: {
                accountId: accountId
            },
            content: facebookAccountParams
        }); 

        return new Promise((resolve, reject) => {
            this.socialMediaFacebook.$account.updateFacebookAccount(
                updateFacebookAccountParams,
                this.callbacks('updateFacebookAccount', resolve, reject)
            );
        });
    }

    public deleteFacebookAccount(accountId: string): Promise<any> {
        let deleteFacebookAccountParams = new this.socialMediaFacebook.$account.deleteFacebookAccount.params({
            template: {
                accountId: accountId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebook.$account.deleteFacebookAccount(
                deleteFacebookAccountParams,
                this.callbacks('deleteFacebookAccount', resolve, reject)
            );
        });
    }

    public getFacebookAccounts(): Promise<any> {
        let getFacebookAccountsParams = new this.socialMediaFacebook.$accounts.getFacebookAccounts.params({});

        return new Promise((resolve, reject) => {
            this.socialMediaFacebook.$accounts.getFacebookAccounts(
                getFacebookAccountsParams,
                this.callbacks('getFacebookAccounts', resolve, reject)
            );
        });
    }

    public createFacebookChannel(accountId: string, channelName: string, pageId: string, pageName: string): Promise<any> {
        let facebookChannelParams = new  this.socialMedia.FacebookChannelRequest();
        facebookChannelParams.name = channelName;
        let facebookPage = new this.socialMedia.Page();
        facebookPage.id = pageId;
        facebookPage.name = pageName;
        facebookChannelParams.pages = [facebookPage];
        facebookChannelParams.socialConversationWorkgroup = this.config.facebook.socialConversationWorkgroup;
        let createFacebookChannelParams = new this.socialMediaFacebookAccount.$channel.createFacebookChannel.params({
            template: {
                accountId: accountId
            },
            content: facebookChannelParams
        }); 

        return new Promise((resolve, reject) => {
            this.socialMediaFacebookAccount.$channel.createFacebookChannel(
                createFacebookChannelParams,
                this.callbacks('createFacebookChannel', resolve, reject)
            );
        });
    }

    public getFacebookChannel(accountId: string, channelId: string): Promise<any> {
        let getFacebookChannelParams = new this.socialMediaFacebookAccount.$channel.getFacebookChannel.params({
            template: {
                accountId: accountId,
                channelId: channelId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebookAccount.$channel.getFacebookChannel(
                getFacebookChannelParams,
                this.callbacks('getFacebookChannel', resolve, reject)
            );
        });
    }

    public updateFacebookChannel(accountId: string, channelId: string, channelName: string, pageId: string, pageName: string): Promise<any> {
        let facebookChannelParams = new  this.socialMedia.FacebookChannelRequest();
        facebookChannelParams.name = channelName;
        let facebookPage = new this.socialMedia.Page();
        facebookPage.id = pageId;
        facebookPage.name = pageName;
        facebookChannelParams.pages = [facebookPage];
        facebookChannelParams.socialConversationWorkgroup = this.config.facebook.socialConversationWorkgroup;
        let updateFacebookChannelParams = new this.socialMediaFacebookAccount.$channel.updateFacebookChannel.params({
            template: {
                accountId: accountId,
                channelId: channelId
            },
            content: facebookChannelParams
        }); 

        return new Promise((resolve, reject) => {
            this.socialMediaFacebookAccount.$channel.updateFacebookChannel(
                updateFacebookChannelParams,
                this.callbacks('updateFacebookChannel', resolve, reject)
            );
        });
    }

    public deleteFacebookChannel(accountId: string, channelId: string): Promise<any> {
        let deleteFacebookChannelParams = new this.socialMediaFacebookAccount.$channel.deleteFacebookChannel.params({
            template: {
                accountId: accountId,
                channelId: channelId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebookAccount.$channel.deleteFacebookChannel(
                deleteFacebookChannelParams,
                this.callbacks('deleteFacebookChannel', resolve, reject)
            );
        });
    }

    public getFacebookChannels(accountId: string): Promise<any> {
        let getFacebookChannelsParams = new this.socialMediaFacebookAccount.$channels.getFacebookChannels.params({
            template: {
                accountId: accountId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaFacebookAccount.$channels.getFacebookChannels(
                getFacebookChannelsParams,
                this.callbacks('getFacebookChannels', resolve, reject)
            );
        });
    }

    public authorizeTwitterAccount(): Promise<any> {
        let twitterAccountParams = new  this.socialMedia.TwitterAccountRequest();
        let authorizeTwitterAccountParams = new this.socialMediaTwitter.$account.authorizeTwitterAccount.params({
            content: twitterAccountParams
        }); 

        return new Promise((resolve, reject) => {
            this.socialMediaTwitter.$account.authorizeTwitterAccount(
                authorizeTwitterAccountParams,
                this.callbacks('authorizeTwitterAccount', resolve, reject)
            );
        });
    }

    public getTwitterAccount(accountId: string): Promise<any> {
        let getTwitterAccountParams = new this.socialMediaTwitter.$account.getTwitterAccount.params({
            template: {
                accountId: accountId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitter.$account.getTwitterAccount(
                getTwitterAccountParams,
                this.callbacks('getTwitterAccount', resolve, reject)
            );
        });
    }

    public updateTwitterAccount(accountId: string): Promise<any> {
        let twitterAccountParams = new  this.socialMedia.TwitterAccountRequest();
        let updateTwitterAccountParams = new this.socialMediaTwitter.$account.updateTwitterAccount.params({
            template: {
                accountId: accountId
            },
            content: twitterAccountParams
        }); 

        return new Promise((resolve, reject) => {
            this.socialMediaTwitter.$account.updateTwitterAccount(
                updateTwitterAccountParams,
                this.callbacks('updateTwitterAccount', resolve, reject)
            );
        });
    }

    public deleteTwitterAccount(accountId: string): Promise<any> {
        let deleteTwitterAccountParams = new this.socialMediaTwitter.$account.deleteTwitterAccount.params({
            template: {
                accountId: accountId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitter.$account.deleteTwitterAccount(
                deleteTwitterAccountParams,
                this.callbacks('deleteTwitterAccount', resolve, reject)
            );
        });
    }

    public getTwitterAccounts(): Promise<any> {
        let getTwitterAccountsParams = new this.socialMediaTwitter.$accounts.getTwitterAccounts.params({});

        return new Promise((resolve, reject) => {
            this.socialMediaTwitter.$accounts.getTwitterAccounts(
                getTwitterAccountsParams,
                this.callbacks('getTwitterAccounts', resolve, reject)
            );
        });
    }

    public createTwitterChannel(accountId: string, channelName: string, keywords: string[], handles: string[]): Promise<any> {
        let twitterChannelParams = new  this.socialMedia.TwitterChannelRequest();
        twitterChannelParams.name = channelName;
        twitterChannelParams.keywords = keywords;
        twitterChannelParams.handles = handles;
        twitterChannelParams.socialConversationWorkgroup = this.config.twitter.socialConversationWorkgroup;
        let createTwitterChannelParams = new this.socialMediaTwitterAccount.$channel.createTwitterChannel.params({
            template: {
                accountId: accountId
            },
            content: twitterChannelParams
        }); 

        return new Promise((resolve, reject) => {
            this.socialMediaTwitterAccount.$channel.createTwitterChannel(
                createTwitterChannelParams,
                this.callbacks('createTwitterChannel', resolve, reject)
            );
        });
    }

    public getTwitterChannel(accountId: string, channelId: string): Promise<any> {
        let getTwitterChannelParams = new this.socialMediaTwitterAccount.$channel.getTwitterChannel.params({
            template: {
                accountId: accountId,
                channelId: channelId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitterAccount.$channel.getTwitterChannel(
                getTwitterChannelParams,
                this.callbacks('getTwitterChannel', resolve, reject)
            );
        });
    }

    public updateTwitterChannel(accountId: string, channelId: string, channelName: string, keywords: string[], handles: string[]): Promise<any> {
        let twitterChannelParams = new  this.socialMedia.TwitterChannelRequest();
        twitterChannelParams.name = channelName;
        twitterChannelParams.keywords = keywords;
        twitterChannelParams.handles = handles;
        twitterChannelParams.socialConversationWorkgroup = this.config.twitter.socialConversationWorkgroup;
        let updateTwitterChannelParams = new this.socialMediaTwitterAccount.$channel.updateTwitterChannel.params({
            template: {
                accountId: accountId,
                channelId: channelId
            },
            content: twitterChannelParams
        }); 

        return new Promise((resolve, reject) => {
            this.socialMediaTwitterAccount.$channel.updateTwitterChannel(
                updateTwitterChannelParams,
                this.callbacks('updateTwitterChannel', resolve, reject)
            );
        });
    }

    public deleteTwitterChannel(accountId: string, channelId: string): Promise<any> {
        let deleteTwitterChannelParams = new this.socialMediaTwitterAccount.$channel.deleteTwitterChannel.params({
            template: {
                accountId: accountId,
                channelId: channelId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitterAccount.$channel.deleteTwitterChannel(
                deleteTwitterChannelParams,
                this.callbacks('deleteTwitterChannel', resolve, reject)
            );
        });
    }

    public getTwitterChannels(accountId: string): Promise<any> {
        let getTwitterChannelsParams = new this.socialMediaTwitterAccount.$channels.getTwitterChannels.params({
            template: {
                accountId: accountId
            }
        });

        return new Promise((resolve, reject) => {
            this.socialMediaTwitterAccount.$channels.getTwitterChannels(
                getTwitterChannelsParams,
                this.callbacks('getTwitterChannels', resolve, reject)
            );
        });
    }
}