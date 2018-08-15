import * as puppeteer from "puppeteer";
import { Config } from "./Config";
import Base from "./Base";

export default class Hubless extends Base {
    constructor(private config: Config, private browser: puppeteer.Browser) {
        super();
        this.logTopic = "Hubless";
    }

    public async facebookPost() {
        if (this.config.hubless === undefined) {
            this.log("Hubless is not configured");
            throw new Error("Hubless is not configured");
        }
        let request = new XMLHttpRequest();
        let url = `http://${this.config.hubless.server}:3000/facebook/post`;
        request.open("POST", url, false);
        request.timeout = 2500;
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        let postData = `{
                            "channelId": "${this.config.hubless.facebookChannelId}",
                            "pageId": "${this.config.hubless.facebookPageId}"
                        }`;
        request.send(postData);
        return request;
    }
    public async twitterPost() {
        if (this.config.hubless === undefined) {
            this.log("Hubless is not configured");
            throw new Error("Hubless is not configured");
        }
        let request = new XMLHttpRequest();
        let url = `http://${this.config.hubless.server}:3000/twitter/post`;
        request.open("POST", url, false);
        request.timeout = 2500;
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        let postData = `{
                            "channelId": "${this.config.hubless.twitterChannelId}",
                        }`;
        request.send(postData);
        return request;
    }
}
