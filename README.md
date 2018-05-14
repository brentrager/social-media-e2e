# Social Media e2e Tests

**IMPORTANT**: These tests are currently written to run with Node v8+, and not as part of ininbuild.  That is to come later.

## Install
```
npm install
```

## Config
Copy config.example.json to config.json and fill in the required parts.

The parts of the config file are explained below.

### IC Server
* **server**: IC server to test against
* **user**: IC user to test as
* **password**: IC user password

### Interaction Connect
* **url**: URL to Interaction Connect build to use

### Facebook
* **user**: Facebook account email
* **password**: Facebook account password
* **pageUrl**: URL to Facebook Page associated with Facebook account

### TCDB (optional)
* **baseUrl**: Base URL for TCDB API
* **build**: Build string for the IC server build under test (e.g. "2018-04-18-CL1953827-84")
* **email**: Email of the user for which to submit successful results

The TCDB config is only needed if it's desirable to submit TCDB successful results for the tests being run.  If you don't want to submit to TCDB, remove this section from config.json.


## Running Headless
```
npm start
```

## Running with Browser Shown
```
npm start -- --showBrowser
```

## Debugging
```
npm run debug -- --showBrowser
```

## Building
```
npm build
```

By default, this test app is written in TypeScript and runs without being transpiled. You can, however, transpile to javascript with ```npm build``` and the transpiled javascript would end up in dist/.

## Files


### src/Test.ts

This is where the tests are written. Specifically under the execute method in calls to executeTest.

For example:

```
await this.executeTest('57558', '2', 1, 'Disconnect Social Conversation', async (assertOrThrow: Function) => {
    // Disconnect interaction
    assertOrThrow(await this.interactionConnect.disconnectInteraction(pickedUpInteraction), 'interaction disconnected');
});
```

In the above the arguments to ```executeTest``` are TC Number, TC Version, and the number of steps in the TC (this is required for the TCDB submission).  The fourth argument is a description of the test for tracing. The 5th agument is a function that will be called that does the actual testing.

### src/InteractionConnect.ts

This is where Interaction Connect is automated. This is the meat of the automation. Lots of clicking on DOM objects and waiting for others to load.  Also things like getting interactions in My Interaction.

### src/Facebook.ts

This is where Facebook is automated.

### src/TCDB.ts

This is where TCDB submissions are made. Probably no need to make changes here.

## Typical Problems

You can't currently run the project while CBed into corewebic. You also cannot debug using VS Code if you open VS Code from a CBed powershell or CMD prompt (since the paths will be different).

The default node for ininbuild which is on the path while CBed is too old. Node V8+ and corresponding NPM must be installed separately at this point. Eventually we will make Rake pick the right node (since it is available in corewebic through systemweb tier).