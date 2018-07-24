/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');
var Directories = require('./Directories');
var Interactions = require('./Interactions');
var Licenses = require('./Licenses');
var Queues = require('./Queues');

var $directories = (function(){
    function updateDirectoriesSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateDirectoriesSubscription.params)) {
            try {
                params = new updateDirectoriesSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateDirectoriesSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateDirectoriesSubscription.method, updateDirectoriesSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateDirectoriesSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/directories', enumerable: true }
    });

    updateDirectoriesSubscription.params = (function(){
        _util.inherits(updateDirectoriesSubscription_params, _util.RequestParams);

        function updateDirectoriesSubscription_params(properties) {
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

            updateDirectoriesSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateDirectoriesSubscription_params;
    })();

    function deleteDirectoriesSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteDirectoriesSubscription.params)) {
            try {
                params = new deleteDirectoriesSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteDirectoriesSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteDirectoriesSubscription.method, deleteDirectoriesSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteDirectoriesSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/directories', enumerable: true }
    });

    deleteDirectoriesSubscription.params = (function(){
        _util.inherits(deleteDirectoriesSubscription_params, _util.RequestParams);

        function deleteDirectoriesSubscription_params(properties) {
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

            deleteDirectoriesSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteDirectoriesSubscription_params;
    })();

    function createDirectorySubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createDirectorySubscription.params)) {
            try {
                params = new createDirectorySubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createDirectorySubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['405'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createDirectorySubscription.method, createDirectorySubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createDirectorySubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/directories/{subscriptionId}', enumerable: true }
    });

    createDirectorySubscription.params = (function(){
        _util.inherits(createDirectorySubscription_params, _util.RequestParams);

        function createDirectorySubscription_params(properties) {
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
            if (!(properties.content instanceof Directories.DirectorySubscriptionParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Directories.DirectorySubscriptionParameters');
            }

            createDirectorySubscription_params._super.constructor.apply(this, arguments);
        }

        return createDirectorySubscription_params;
    })();

    function removeDirectorySubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof removeDirectorySubscription.params)) {
            try {
                params = new removeDirectorySubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: removeDirectorySubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(removeDirectorySubscription.method, removeDirectorySubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(removeDirectorySubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/directories/{subscriptionId}', enumerable: true }
    });

    removeDirectorySubscription.params = (function(){
        _util.inherits(removeDirectorySubscription_params, _util.RequestParams);

        function removeDirectorySubscription_params(properties) {
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

            removeDirectorySubscription_params._super.constructor.apply(this, arguments);
        }

        return removeDirectorySubscription_params;
    })();

    return Object.create(null, {
        updateDirectoriesSubscription: { value: updateDirectoriesSubscription, enumerable: true },
        deleteDirectoriesSubscription: { value: deleteDirectoriesSubscription, enumerable: true },
        createDirectorySubscription: { value: createDirectorySubscription, enumerable: true },
        removeDirectorySubscription: { value: removeDirectorySubscription, enumerable: true }
    });
})();

var $directoriesLegacy = (function(){
    function updateDirectorySubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateDirectorySubscription.params)) {
            try {
                params = new updateDirectorySubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateDirectorySubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['405'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateDirectorySubscription.method, updateDirectorySubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateDirectorySubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/directories-legacy/{directoryID}', enumerable: true }
    });

    updateDirectorySubscription.params = (function(){
        _util.inherits(updateDirectorySubscription_params, _util.RequestParams);

        function updateDirectorySubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, directoryID');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'directoryID')) {
                throw new Error('`properties.template` is missing required property: `directoryID`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Directories.DirectorySubscriptionSettings)) {
                throw new TypeError('`properties.content` value does not match the expected type: Directories.DirectorySubscriptionSettings');
            }

            updateDirectorySubscription_params._super.constructor.apply(this, arguments);
        }

        return updateDirectorySubscription_params;
    })();

    function deleteDirectorySubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteDirectorySubscription.params)) {
            try {
                params = new deleteDirectorySubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteDirectorySubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteDirectorySubscription.method, deleteDirectorySubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteDirectorySubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/directories-legacy/{directoryID}', enumerable: true }
    });

    deleteDirectorySubscription.params = (function(){
        _util.inherits(deleteDirectorySubscription_params, _util.RequestParams);

        function deleteDirectorySubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, directoryID');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'directoryID')) {
                throw new Error('`properties.template` is missing required property: `directoryID`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteDirectorySubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteDirectorySubscription_params;
    })();

    return Object.create(null, {
        updateDirectorySubscription: { value: updateDirectorySubscription, enumerable: true },
        deleteDirectorySubscription: { value: deleteDirectorySubscription, enumerable: true }
    });
})();

var $interactions = (function(){
    function updateInteractionSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateInteractionSubscription.params)) {
            try {
                params = new updateInteractionSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateInteractionSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateInteractionSubscription.method, updateInteractionSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateInteractionSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}', enumerable: true }
    });

    updateInteractionSubscription.params = (function(){
        _util.inherits(updateInteractionSubscription_params, _util.RequestParams);

        function updateInteractionSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Interactions.InteractionSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.InteractionSubscription');
            }

            updateInteractionSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateInteractionSubscription_params;
    })();

    function deleteInteractionSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteInteractionSubscription.params)) {
            try {
                params = new deleteInteractionSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteInteractionSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteInteractionSubscription.method, deleteInteractionSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteInteractionSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}', enumerable: true }
    });

    deleteInteractionSubscription.params = (function(){
        _util.inherits(deleteInteractionSubscription_params, _util.RequestParams);

        function deleteInteractionSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteInteractionSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteInteractionSubscription_params;
    })();

    return Object.create(null, {
        updateInteractionSubscription: { value: updateInteractionSubscription, enumerable: true },
        deleteInteractionSubscription: { value: deleteInteractionSubscription, enumerable: true }
    });
})();

var $interactionAlerting = (function(){
    function createInteractionAlertingSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createInteractionAlertingSubscription.params)) {
            try {
                params = new createInteractionAlertingSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createInteractionAlertingSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createInteractionAlertingSubscription.method, createInteractionAlertingSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createInteractionAlertingSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interaction-alerting', enumerable: true }
    });

    createInteractionAlertingSubscription.params = (function(){
        _util.inherits(createInteractionAlertingSubscription_params, _util.RequestParams);

        function createInteractionAlertingSubscription_params(properties) {
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
            if (!(properties.content instanceof Interactions.AlertSubscriptionParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.AlertSubscriptionParameters');
            }

            createInteractionAlertingSubscription_params._super.constructor.apply(this, arguments);
        }

        return createInteractionAlertingSubscription_params;
    })();

    function deleteInteractionAlertingSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteInteractionAlertingSubscription.params)) {
            try {
                params = new deleteInteractionAlertingSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteInteractionAlertingSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteInteractionAlertingSubscription.method, deleteInteractionAlertingSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteInteractionAlertingSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interaction-alerting', enumerable: true }
    });

    deleteInteractionAlertingSubscription.params = (function(){
        _util.inherits(deleteInteractionAlertingSubscription_params, _util.RequestParams);

        function deleteInteractionAlertingSubscription_params(properties) {
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

            deleteInteractionAlertingSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteInteractionAlertingSubscription_params;
    })();

    return Object.create(null, {
        createInteractionAlertingSubscription: { value: createInteractionAlertingSubscription, enumerable: true },
        deleteInteractionAlertingSubscription: { value: deleteInteractionAlertingSubscription, enumerable: true }
    });
})();

var $interactionHistory = (function(){
    function createInteractionHistorySubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createInteractionHistorySubscription.params)) {
            try {
                params = new createInteractionHistorySubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createInteractionHistorySubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createInteractionHistorySubscription.method, createInteractionHistorySubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createInteractionHistorySubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interaction-history', enumerable: true }
    });

    createInteractionHistorySubscription.params = (function(){
        _util.inherits(createInteractionHistorySubscription_params, _util.RequestParams);

        function createInteractionHistorySubscription_params(properties) {
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
            if (!(properties.content instanceof Interactions.HistorySubscriptionParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.HistorySubscriptionParameters');
            }

            createInteractionHistorySubscription_params._super.constructor.apply(this, arguments);
        }

        return createInteractionHistorySubscription_params;
    })();

    function deleteInteractionHistorySubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteInteractionHistorySubscription.params)) {
            try {
                params = new deleteInteractionHistorySubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteInteractionHistorySubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteInteractionHistorySubscription.method, deleteInteractionHistorySubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteInteractionHistorySubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interaction-history', enumerable: true }
    });

    deleteInteractionHistorySubscription.params = (function(){
        _util.inherits(deleteInteractionHistorySubscription_params, _util.RequestParams);

        function deleteInteractionHistorySubscription_params(properties) {
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

            deleteInteractionHistorySubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteInteractionHistorySubscription_params;
    })();

    return Object.create(null, {
        createInteractionHistorySubscription: { value: createInteractionHistorySubscription, enumerable: true },
        deleteInteractionHistorySubscription: { value: deleteInteractionHistorySubscription, enumerable: true }
    });
})();

var $licenses = (function(){
    function replaceSubscriptions(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof replaceSubscriptions.params)) {
            try {
                params = new replaceSubscriptions.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: replaceSubscriptions.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(replaceSubscriptions.method, replaceSubscriptions.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(replaceSubscriptions, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/licenses', enumerable: true }
    });

    replaceSubscriptions.params = (function(){
        _util.inherits(replaceSubscriptions_params, _util.RequestParams);

        function replaceSubscriptions_params(properties) {
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
            if (!(properties.content instanceof Licenses.Licenses)) {
                throw new TypeError('`properties.content` value does not match the expected type: Licenses.Licenses');
            }

            replaceSubscriptions_params._super.constructor.apply(this, arguments);
        }

        return replaceSubscriptions_params;
    })();

    function removeSubscriptions(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof removeSubscriptions.params)) {
            try {
                params = new removeSubscriptions.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: removeSubscriptions.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(removeSubscriptions.method, removeSubscriptions.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(removeSubscriptions, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/licenses', enumerable: true }
    });

    removeSubscriptions.params = (function(){
        _util.inherits(removeSubscriptions_params, _util.RequestParams);

        function removeSubscriptions_params(properties) {
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

            removeSubscriptions_params._super.constructor.apply(this, arguments);
        }

        return removeSubscriptions_params;
    })();

    return Object.create(null, {
        replaceSubscriptions: { value: replaceSubscriptions, enumerable: true },
        removeSubscriptions: { value: removeSubscriptions, enumerable: true }
    });
})();

var $queues = (function(){
    function updateQueueSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateQueueSubscription.params)) {
            try {
                params = new updateQueueSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateQueueSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateQueueSubscription.method, updateQueueSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateQueueSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/queues/{subscriptionId}', enumerable: true }
    });

    updateQueueSubscription.params = (function(){
        _util.inherits(updateQueueSubscription_params, _util.RequestParams);

        function updateQueueSubscription_params(properties) {
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
            if (!(properties.content instanceof Queues.QueueSubscriptionParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Queues.QueueSubscriptionParameters');
            }

            updateQueueSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateQueueSubscription_params;
    })();

    function deleteQueueSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteQueueSubscription.params)) {
            try {
                params = new deleteQueueSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteQueueSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteQueueSubscription.method, deleteQueueSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteQueueSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/queues/{subscriptionId}', enumerable: true }
    });

    deleteQueueSubscription.params = (function(){
        _util.inherits(deleteQueueSubscription_params, _util.RequestParams);

        function deleteQueueSubscription_params(properties) {
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

            deleteQueueSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteQueueSubscription_params;
    })();

    return Object.create(null, {
        updateQueueSubscription: { value: updateQueueSubscription, enumerable: true },
        deleteQueueSubscription: { value: deleteQueueSubscription, enumerable: true }
    });
})();

var $responseManagement = (function(){
    function subscribeRespMgmt(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof subscribeRespMgmt.params)) {
            try {
                params = new subscribeRespMgmt.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: subscribeRespMgmt.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(subscribeRespMgmt.method, subscribeRespMgmt.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(subscribeRespMgmt, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/response-management', enumerable: true }
    });

    subscribeRespMgmt.params = (function(){
        _util.inherits(subscribeRespMgmt_params, _util.RequestParams);

        function subscribeRespMgmt_params(properties) {
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

            subscribeRespMgmt_params._super.constructor.apply(this, arguments);
        }

        return subscribeRespMgmt_params;
    })();

    function unsubscribeRespMgmt(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof unsubscribeRespMgmt.params)) {
            try {
                params = new unsubscribeRespMgmt.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: unsubscribeRespMgmt.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(unsubscribeRespMgmt.method, unsubscribeRespMgmt.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(unsubscribeRespMgmt, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/response-management', enumerable: true }
    });

    unsubscribeRespMgmt.params = (function(){
        _util.inherits(unsubscribeRespMgmt_params, _util.RequestParams);

        function unsubscribeRespMgmt_params(properties) {
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

            unsubscribeRespMgmt_params._super.constructor.apply(this, arguments);
        }

        return unsubscribeRespMgmt_params;
    })();

    return Object.create(null, {
        subscribeRespMgmt: { value: subscribeRespMgmt, enumerable: true },
        unsubscribeRespMgmt: { value: unsubscribeRespMgmt, enumerable: true }
    });
})();

exports.$directories = $directories;
exports.$directoriesLegacy = $directoriesLegacy;
exports.$interactions = $interactions;
exports.$interactionAlerting = $interactionAlerting;
exports.$interactionHistory = $interactionHistory;
exports.$licenses = $licenses;
exports.$queues = $queues;
exports.$responseManagement = $responseManagement;
