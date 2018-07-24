/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration = require('./Configuration');
var Common = require('./Common');

var $accessControlGroups = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/access-control-groups/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/access-control-groups/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $accountCodes = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/account-codes/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/account-codes/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $accountCodesConfiguration = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/account-codes-configuration/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigGlobalObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigGlobalObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/account-codes-configuration/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $clientButtons = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/client-buttons/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/client-buttons/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $clientConfigurationTemplates = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/client-configuration-templates/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/client-configuration-templates/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $clientTemplates = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/client-templates/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/client-templates/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $defaultUser = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/default-user/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigGlobalObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigGlobalObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/default-user/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $passwordPolicies = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/password-policies/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/password-policies/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $queueColumns = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/queue-columns/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/queue-columns/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $responseManagementDocuments = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/response-management-documents/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/response-management-documents/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $roles = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/roles/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/roles/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $schedules = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/schedules/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/schedules/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $secureInputForms = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/secure-input-forms/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/secure-input-forms/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $skillCategories = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/skill-categories/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/skill-categories/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $skills = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/skills/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/skills/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $statisticParameterGroups = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/statistic-parameter-groups/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/statistic-parameter-groups/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $users = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/users/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/users/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $workgroups = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/workgroups/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/workgroups/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $wrapUpCategories = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/wrap-up-categories/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/wrap-up-categories/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

var $wrapUpCodes = (function(){
    function createSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSubscription.params)) {
            try {
                params = new createSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSubscription.method, createSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/wrap-up-codes/{subscriptionId}', enumerable: true }
    });

    createSubscription.params = (function(){
        _util.inherits(createSubscription_params, _util.RequestParams);

        function createSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration.ConfigObjectSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.ConfigObjectSubscription');
            }

            createSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSubscription_params;
    })();

    function deleteSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSubscription.params)) {
            try {
                params = new deleteSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSubscription.method, deleteSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/wrap-up-codes/{subscriptionId}', enumerable: true }
    });

    deleteSubscription.params = (function(){
        _util.inherits(deleteSubscription_params, _util.RequestParams);

        function deleteSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, subscriptionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'subscriptionId')) {
                throw new Error('`properties.template` is missing required property: `subscriptionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSubscription_params;
    })();

    return Object.create(null, {
        createSubscription: { value: createSubscription, enumerable: true },
        deleteSubscription: { value: deleteSubscription, enumerable: true }
    });
})();

exports.$accessControlGroups = $accessControlGroups;
exports.$accountCodes = $accountCodes;
exports.$accountCodesConfiguration = $accountCodesConfiguration;
exports.$clientButtons = $clientButtons;
exports.$clientConfigurationTemplates = $clientConfigurationTemplates;
exports.$clientTemplates = $clientTemplates;
exports.$defaultUser = $defaultUser;
exports.$passwordPolicies = $passwordPolicies;
exports.$queueColumns = $queueColumns;
exports.$responseManagementDocuments = $responseManagementDocuments;
exports.$roles = $roles;
exports.$schedules = $schedules;
exports.$secureInputForms = $secureInputForms;
exports.$skillCategories = $skillCategories;
exports.$skills = $skills;
exports.$statisticParameterGroups = $statisticParameterGroups;
exports.$users = $users;
exports.$workgroups = $workgroups;
exports.$wrapUpCategories = $wrapUpCategories;
exports.$wrapUpCodes = $wrapUpCodes;
