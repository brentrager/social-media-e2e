import * as fs from 'fs';

export interface ConfigIc {
    server: string;
    user: string;
    password: string;
    workgroup: string;
}

export interface ConfigInteractionConnect {
    url: string;
}

export interface ConfigFacebook {
    user: string;
    password: string;
    pageUrl: string;
}

export interface ConfigTwitter {
    user: string;
    password: string;
    handle: string;
    user2: string;
    password2: string;
    pageUrl: string;
}

export interface ConfigTcdb {
    baseUrl: string;
    build: string;
    email?: string;
}

export interface Config {
    ic: ConfigIc;
    interactionConnect: ConfigInteractionConnect;
    facebook: ConfigFacebook;
    twitter: ConfigTwitter;
    tcdb?: ConfigTcdb;
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
