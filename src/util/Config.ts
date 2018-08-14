import * as fs from 'fs';

export interface ConfigIc {
    server: string;
    user: string;
    password: string;
    station: string;
    workgroup: string;
    adminUser: string;
    adminPassword: string;
}

export interface ConfigInteractionConnect {
    url: string;
}

export interface ConfigICWS {
    applicationName: string;
    hash: string;
}

export interface ConfigSocialMedia {
    hub: string;
    socialMediaProcessor: string;
    socialMediaProcessor2?: string;
    socialMediaProcessorSecret: string;
}

export interface ConfigGenesysHub {
    email: string;
    password: string;
}

export interface ConfigFacebook {
    user: string;
    password: string;
    pageUrl: string;
    socialConversationWorkgroup: string;
    displayName: string;
    pageName: string;
}

export interface ConfigTwitter {
    user: string;
    password: string;
    socialConversationWorkgroup: string;
    handle: string;
    user2: string;
    password2: string;
    pageUrl: string;
}

export interface ConfigTwitter {
    user: string;
    password: string;
    pageUrl: string;
}

export interface ConfigTcdb {
    baseUrl: string;
    build: string;
    email?: string;
}

export interface ConfigHubless {
    server: string;
    facebookChannelId: string;
    facebookPageId: string;
    twitterChannelId: string;
}

export interface Config {
    ic: ConfigIc;
    interactionConnect: ConfigInteractionConnect;
    icws: ConfigICWS;
    socialMedia: ConfigSocialMedia;
    genesysHub: ConfigGenesysHub;
    facebook: ConfigFacebook;
    twitter: ConfigTwitter;
    tcdb?: ConfigTcdb;
    hubless?: ConfigHubless;
}

class ConfigReader {
    config: Config;
    constructor() {
        try {
            this.config = (
                JSON.parse(fs.readFileSync('config.json').toString())
            ) as Config;
        } catch (error) {
            console.error(`Error reading config.json: ${error}`);
            console.error(error);
            process.exit(0);
        }
    }
}

export const config = new ConfigReader().config;
