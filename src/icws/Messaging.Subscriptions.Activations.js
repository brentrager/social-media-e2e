/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Activations = require('./Activations');
var Common = require('./Common');

var $users = (function(){
    function updateUserSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateUserSubscription.params)) {
            try {
                params = new updateUserSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateUserSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateUserSubscription.method, updateUserSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateUserSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/activations/users/{subscriptionId}', enumerable: true }
    });

    updateUserSubscription.params = (function(){
        _util.inherits(updateUserSubscription_params, _util.RequestParams);

        function updateUserSubscription_params(properties) {
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
            if (!(properties.content instanceof Activations.UserActivationSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Activations.UserActivationSubscription');
            }

            updateUserSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateUserSubscription_params;
    })();

    function deleteUserSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteUserSubscription.params)) {
            try {
                params = new deleteUserSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteUserSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteUserSubscription.method, deleteUserSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteUserSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/activations/users/{subscriptionId}', enumerable: true }
    });

    deleteUserSubscription.params = (function(){
        _util.inherits(deleteUserSubscription_params, _util.RequestParams);

        function deleteUserSubscription_params(properties) {
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

            deleteUserSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteUserSubscription_params;
    })();

    return Object.create(null, {
        updateUserSubscription: { value: updateUserSubscription, enumerable: true },
        deleteUserSubscription: { value: deleteUserSubscription, enumerable: true }
    });
})();

var $workgroups = (function(){
    function updateWorkgroupSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateWorkgroupSubscription.params)) {
            try {
                params = new updateWorkgroupSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateWorkgroupSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateWorkgroupSubscription.method, updateWorkgroupSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateWorkgroupSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/activations/workgroups/{subscriptionId}', enumerable: true }
    });

    updateWorkgroupSubscription.params = (function(){
        _util.inherits(updateWorkgroupSubscription_params, _util.RequestParams);

        function updateWorkgroupSubscription_params(properties) {
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
            if (!(properties.content instanceof Activations.WorkgroupActivationSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Activations.WorkgroupActivationSubscription');
            }

            updateWorkgroupSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateWorkgroupSubscription_params;
    })();

    function deleteWorkgroupSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteWorkgroupSubscription.params)) {
            try {
                params = new deleteWorkgroupSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteWorkgroupSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteWorkgroupSubscription.method, deleteWorkgroupSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteWorkgroupSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/activations/workgroups/{subscriptionId}', enumerable: true }
    });

    deleteWorkgroupSubscription.params = (function(){
        _util.inherits(deleteWorkgroupSubscription_params, _util.RequestParams);

        function deleteWorkgroupSubscription_params(properties) {
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

            deleteWorkgroupSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteWorkgroupSubscription_params;
    })();

    return Object.create(null, {
        updateWorkgroupSubscription: { value: updateWorkgroupSubscription, enumerable: true },
        deleteWorkgroupSubscription: { value: deleteWorkgroupSubscription, enumerable: true }
    });
})();

exports.$users = $users;
exports.$workgroups = $workgroups;
