/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration = require('./Configuration');
var Common = require('./Common');

var $analyticsConfiguration = (function(){
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
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/analytics-configuration/{subscriptionId}', enumerable: true }
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
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/analytics-configuration/{subscriptionId}', enumerable: true }
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

var $analyticsDashboards = (function(){
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
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/analytics-dashboards/{subscriptionId}', enumerable: true }
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
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/configuration/analytics-dashboards/{subscriptionId}', enumerable: true }
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

exports.$analyticsConfiguration = $analyticsConfiguration;
exports.$analyticsDashboards = $analyticsDashboards;
