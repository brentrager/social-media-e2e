import * as fs from 'fs';

export interface ConfigIc {
    server: string,
    user: string,
    password: string
}

export interface ConfigInteractionConnect {
    url: string
}

export interface ConfigFacebook {
    user: string,
    password: string
    pageUrl: string
}

export interface ConfigTcdb {
    baseUrl: string,
    build: string,
    email?: string
}

export interface Config {
    ic: ConfigIc,
    interactionConnect: ConfigInteractionConnect,
    facebook: ConfigFacebook,
    tcdb?: ConfigTcdb
}

class ConfigReader {
    config: Config;
    constructor() {
        try {
            this.config = <Config>JSON.parse(fs.readFileSync('config.json').toString());
        } catch (error) {
            console.error(`Error reading config.json: ${error}`);
            console.error(error);
            process.exit(0);
        }
    }
}

export const config = new ConfigReader().config;