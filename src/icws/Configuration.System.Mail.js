/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration_System = require('./Configuration.System');
var Common = require('./Common');

var $imapSmtpMailboxAttributes = (function(){
    function imapSmtpMailboxAttributes(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof imapSmtpMailboxAttributes.params)) {
            try {
                params = new imapSmtpMailboxAttributes.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: imapSmtpMailboxAttributes.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_System.ImapSmtpMailboxAttributesResult) ? o : new Configuration_System.ImapSmtpMailboxAttributesResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(imapSmtpMailboxAttributes.method, imapSmtpMailboxAttributes.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(imapSmtpMailboxAttributes, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/mail/imap-smtp-mailbox-attributes', enumerable: true }
    });

    imapSmtpMailboxAttributes.params = (function(){
        _util.inherits(imapSmtpMailboxAttributes_params, _util.RequestParams);

        function imapSmtpMailboxAttributes_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            imapSmtpMailboxAttributes_params._super.constructor.apply(this, arguments);
        }

        return imapSmtpMailboxAttributes_params;
    })();

    return Object.create(null, {
        imapSmtpMailboxAttributes: { value: imapSmtpMailboxAttributes, enumerable: true }
    });
})();

var $interactionMessageStoreMailboxAttributes = (function(){
    function interactionMessageStoreMailboxAttributes(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof interactionMessageStoreMailboxAttributes.params)) {
            try {
                params = new interactionMessageStoreMailboxAttributes.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: interactionMessageStoreMailboxAttributes.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_System.InteractionMessageStoreMailboxAttributesResult) ? o : new Configuration_System.InteractionMessageStoreMailboxAttributesResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(interactionMessageStoreMailboxAttributes.method, interactionMessageStoreMailboxAttributes.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(interactionMessageStoreMailboxAttributes, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/mail/interaction-message-store-mailbox-attributes', enumerable: true }
    });

    interactionMessageStoreMailboxAttributes.params = (function(){
        _util.inherits(interactionMessageStoreMailboxAttributes_params, _util.RequestParams);

        function interactionMessageStoreMailboxAttributes_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (properties.query === void 0) {
                throw new Error('`properties.query` is undefined, which means the following required Query param(s) will be missing: userId');
            }
            if (!_util.hasProp(properties.query, 'userId')) {
                throw new Error('`properties.query` is missing required property: `userId`');
            }

            interactionMessageStoreMailboxAttributes_params._super.constructor.apply(this, arguments);
        }

        return interactionMessageStoreMailboxAttributes_params;
    })();

    return Object.create(null, {
        interactionMessageStoreMailboxAttributes: { value: interactionMessageStoreMailboxAttributes, enumerable: true }
    });
})();

var $noMailboxAttributes = (function(){
    function noMailboxAttributes(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof noMailboxAttributes.params)) {
            try {
                params = new noMailboxAttributes.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: noMailboxAttributes.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_System.NoMailboxAttributesResult) ? o : new Configuration_System.NoMailboxAttributesResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(noMailboxAttributes.method, noMailboxAttributes.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(noMailboxAttributes, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/mail/no-mailbox-attributes', enumerable: true }
    });

    noMailboxAttributes.params = (function(){
        _util.inherits(noMailboxAttributes_params, _util.RequestParams);

        function noMailboxAttributes_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            noMailboxAttributes_params._super.constructor.apply(this, arguments);
        }

        return noMailboxAttributes_params;
    })();

    return Object.create(null, {
        noMailboxAttributes: { value: noMailboxAttributes, enumerable: true }
    });
})();

var $enabledMailboxProviders = (function(){
    function enabledMailboxProviders(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof enabledMailboxProviders.params)) {
            try {
                params = new enabledMailboxProviders.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: enabledMailboxProviders.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_System.EnabledMailboxProvidersResult) ? o : new Configuration_System.EnabledMailboxProvidersResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(enabledMailboxProviders.method, enabledMailboxProviders.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(enabledMailboxProviders, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/mail/enabled-mailbox-providers', enumerable: true }
    });

    enabledMailboxProviders.params = (function(){
        _util.inherits(enabledMailboxProviders_params, _util.RequestParams);

        function enabledMailboxProviders_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            enabledMailboxProviders_params._super.constructor.apply(this, arguments);
        }

        return enabledMailboxProviders_params;
    })();

    return Object.create(null, {
        enabledMailboxProviders: { value: enabledMailboxProviders, enumerable: true }
    });
})();

var $imapServers = (function(){
    function imapServers(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof imapServers.params)) {
            try {
                params = new imapServers.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: imapServers.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_System.ImapServersResult) ? o : new Configuration_System.ImapServersResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(imapServers.method, imapServers.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(imapServers, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/mail/imap-servers', enumerable: true }
    });

    imapServers.params = (function(){
        _util.inherits(imapServers_params, _util.RequestParams);

        function imapServers_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            imapServers_params._super.constructor.apply(this, arguments);
        }

        return imapServers_params;
    })();

    return Object.create(null, {
        imapServers: { value: imapServers, enumerable: true }
    });
})();

var $searchableProviders = (function(){
    function searchableProviders(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof searchableProviders.params)) {
            try {
                params = new searchableProviders.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: searchableProviders.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_System.SearchableProvidersResult) ? o : new Configuration_System.SearchableProvidersResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(searchableProviders.method, searchableProviders.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(searchableProviders, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/mail/searchable-providers', enumerable: true }
    });

    searchableProviders.params = (function(){
        _util.inherits(searchableProviders_params, _util.RequestParams);

        function searchableProviders_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            searchableProviders_params._super.constructor.apply(this, arguments);
        }

        return searchableProviders_params;
    })();

    return Object.create(null, {
        searchableProviders: { value: searchableProviders, enumerable: true }
    });
})();

var $folders = (function(){
    function folders(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof folders.params)) {
            try {
                params = new folders.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: folders.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_System.FoldersResult) ? o : new Configuration_System.FoldersResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(folders.method, folders.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(folders, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/mail/folders', enumerable: true }
    });

    folders.params = (function(){
        _util.inherits(folders_params, _util.RequestParams);

        function folders_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (properties.query === void 0) {
                throw new Error('`properties.query` is undefined, which means the following required Query param(s) will be missing: moniker');
            }
            if (!_util.hasProp(properties.query, 'moniker')) {
                throw new Error('`properties.query` is missing required property: `moniker`');
            }

            folders_params._super.constructor.apply(this, arguments);
        }

        return folders_params;
    })();

    return Object.create(null, {
        folders: { value: folders, enumerable: true }
    });
})();

var $testMailbox = (function(){
    function testMailbox(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof testMailbox.params)) {
            try {
                params = new testMailbox.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: testMailbox.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(testMailbox.method, testMailbox.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(testMailbox, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/mail/test-mailbox', enumerable: true }
    });

    testMailbox.params = (function(){
        _util.inherits(testMailbox_params, _util.RequestParams);

        function testMailbox_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (properties.query === void 0) {
                throw new Error('`properties.query` is undefined, which means the following required Query param(s) will be missing: moniker');
            }
            if (!_util.hasProp(properties.query, 'moniker')) {
                throw new Error('`properties.query` is missing required property: `moniker`');
            }

            testMailbox_params._super.constructor.apply(this, arguments);
        }

        return testMailbox_params;
    })();

    return Object.create(null, {
        testMailbox: { value: testMailbox, enumerable: true }
    });
})();

var $directories = (function(){
    function directories(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof directories.params)) {
            try {
                params = new directories.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: directories.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_System.DirectoriesResult) ? o : new Configuration_System.DirectoriesResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(directories.method, directories.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(directories, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/mail/directories', enumerable: true }
    });

    directories.params = (function(){
        _util.inherits(directories_params, _util.RequestParams);

        function directories_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (properties.query === void 0) {
                throw new Error('`properties.query` is undefined, which means the following required Query param(s) will be missing: searchTerm, searchType, directory');
            }
            if (!_util.hasProp(properties.query, 'searchTerm')) {
                throw new Error('`properties.query` is missing required property: `searchTerm`');
            }
            if (!_util.hasProp(properties.query, 'searchType')) {
                throw new Error('`properties.query` is missing required property: `searchType`');
            }
            if (!_util.hasProp(properties.query, 'directory')) {
                throw new Error('`properties.query` is missing required property: `directory`');
            }

            directories_params._super.constructor.apply(this, arguments);
        }

        return directories_params;
    })();

    return Object.create(null, {
        directories: { value: directories, enumerable: true }
    });
})();

var $sendEmail = (function(){
    function sendEmail(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof sendEmail.params)) {
            try {
                params = new sendEmail.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: sendEmail.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(sendEmail.method, sendEmail.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(sendEmail, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/mail/send-email', enumerable: true }
    });

    sendEmail.params = (function(){
        _util.inherits(sendEmail_params, _util.RequestParams);

        function sendEmail_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration_System.SendEmailArgument)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.SendEmailArgument');
            }

            sendEmail_params._super.constructor.apply(this, arguments);
        }

        return sendEmail_params;
    })();

    return Object.create(null, {
        sendEmail: { value: sendEmail, enumerable: true }
    });
})();

var $testMoniker = (function(){
    function testMoniker(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof testMoniker.params)) {
            try {
                params = new testMoniker.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: testMoniker.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(testMoniker.method, testMoniker.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(testMoniker, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/mail/test-moniker', enumerable: true }
    });

    testMoniker.params = (function(){
        _util.inherits(testMoniker_params, _util.RequestParams);

        function testMoniker_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (properties.query === void 0) {
                throw new Error('`properties.query` is undefined, which means the following required Query param(s) will be missing: moniker');
            }
            if (!_util.hasProp(properties.query, 'moniker')) {
                throw new Error('`properties.query` is missing required property: `moniker`');
            }

            testMoniker_params._super.constructor.apply(this, arguments);
        }

        return testMoniker_params;
    })();

    return Object.create(null, {
        testMoniker: { value: testMoniker, enumerable: true }
    });
})();

exports.$imapSmtpMailboxAttributes = $imapSmtpMailboxAttributes;
exports.$interactionMessageStoreMailboxAttributes = $interactionMessageStoreMailboxAttributes;
exports.$noMailboxAttributes = $noMailboxAttributes;
exports.$enabledMailboxProviders = $enabledMailboxProviders;
exports.$imapServers = $imapServers;
exports.$searchableProviders = $searchableProviders;
exports.$folders = $folders;
exports.$testMailbox = $testMailbox;
exports.$directories = $directories;
exports.$sendEmail = $sendEmail;
exports.$testMoniker = $testMoniker;
