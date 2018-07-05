# Social Media e2e Tests

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
* **station**: IC user station
* **workgroup**: IC workgroup name used in this test

### Interaction Connect
* **url**: URL to Interaction Connect build to use

### ICWS
* **applicationName**: The applicationName MUST always be hard coded to: "Test Social Media Configuration"
* **hash**: The hash MUST always be hard coded to: "hCj6Iaa2Wu71WqsQNTPLPxGdGd36hp1Fz/kobNHPrjI="

### Social Media
* **hub**: Genesys Hub URL
* **socialMediaProcessor**: Social Media Processor URL
* **socialMediaProcessor2**: Social Media Processor 2 URL, if one exists
* **socialMediaProcessorSecret**: Social Media Processor password

### Genesys Hub
* **email**: Genesys Hub account
* **password**: Genesys Hub account password

### Facebook
* **user**: Facebook account email
* **password**: Facebook account password
* **pageUrl**: URL to Facebook Page associated with Facebook account
* **socialConversationWorkgroup**: Facebook social conversation workgroup

### Twitter
* **user**: Twitter account email
* **password**: Twitter account password
* **socialConversationWorkgroup**: Twitter social conversation workgroup

### TCDB (optional)
* **baseUrl**: Base URL for TCDB API
* **build**: Build string for the IC server build under test (e.g. "2018-04-18-CL1953827-84")
* **email**: Email of the user for which to submit successful results

The TCDB config is only needed if it's desirable to submit TCDB successful results for the tests being run.  If you don't want to submit to TCDB, remove this section from config.json.


## Running Headless
```
npm start
```

## Running with Browser Hidden
Set environmental variable HEADLESS to "true".

```
npm start
```

## Debugging
Use VSCode and use one of the available launch configurations.

## Files


### src/tests/*.test.ts

These are where the tests are written.

For example:

```
tcdbTest('57558', '2', `Disconnect a Social - Conversation Interaction`, { attributes: [{ attribute: global.tcdb.ATTRIBUTE_SOCIAL_CONVERSATION_INTERACTION_TYPE, value: 'Facebook' }] },
    async (addStep: Function, trace: Function) => {
        addStep(`Using TestAgent's web client, select the Social - Conversation interaction and click the disconnect button.`);
        expect(await interactionConnect.disconnectInteraction(pickedUpInteraction)).toBeTruthy();
    }
);
```

In the above the arguments to ```tcdbTest``` are TC Number, TC Version, TC Title. The 4th agument is a function that will be called that does the actual testing. The 5th (optional) argument is the timeout for the test.

### src/util/InteractionConnect.ts

This is where Interaction Connect is automated. This is the meat of the automation. Lots of clicking on DOM objects and waiting for others to load.  Also things like getting interactions in My Interaction.

### src/util/ICWS.ts

This is where the ICWS APIs are automated.

### src/util/Facebook.ts

This is where Facebook is automated.

### src/util/Twitter.ts

This is where Twitter is automated.

### src/TCDB.ts

This is where TCDB submissions are made. Changed need made here when attributes associated with the various tests change.