import { config } from '../util/Config';
import InteractionConnect from '../util/InteractionConnect';
import Facebook from '../util/Facebook';
import { setupTCDBJasmineReporter, tcdbTest } from '../util/TCDB';

let interactionConnect: InteractionConnect;
let facebook: Facebook;

// Big timeout for long running Puppeteer Actions
jest.setTimeout(100000);

beforeAll(async () => {
    setupTCDBJasmineReporter();
});

describe('Social Media Interactions Test', () => {
    
    beforeAll(async () => {
        // Launch Interaction Connect
        // @ts-ignore: Browser is there.
        interactionConnect = new InteractionConnect(config, global.browser);
        await interactionConnect.launch();
        await interactionConnect.openTab('My Interactions');

        // Launch Facebook
        // @ts-ignore: Browser is there.
        facebook = new Facebook(config, global.browser);
        await facebook.launch();
    });

    tcdbTest('57556', '2', 'Adds 1 + 2 to equal 3', {}, (addStep) => {
        addStep();
        addStep();
        expect(1 + 2).toBe(3);
    });

    afterAll(async () => {
        await interactionConnect.openTab('My Interactions');
        await interactionConnect.disconnectInteractions();
        await interactionConnect.logout();
    });
})
