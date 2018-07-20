/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Alerts = require('./Alerts');
var Common = require('./Common');

var $alertCatalog = (function(){
    function updateAlertCatalogSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateAlertCatalogSubscription.params)) {
            try {
                params = new updateAlertCatalogSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAlertCatalogSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateAlertCatalogSubscription.method, updateAlertCatalogSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateAlertCatalogSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/alerts/alert-catalog', enumerable: true }
    });

    updateAlertCatalogSubscription.params = (function(){
        _util.inherits(updateAlertCatalogSubscription_params, _util.RequestParams);

        function updateAlertCatalogSubscription_params(properties) {
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
            if (!(properties.content instanceof Alerts.AlertCatalogSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Alerts.AlertCatalogSubscription');
            }

            updateAlertCatalogSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateAlertCatalogSubscription_params;
    })();

    function deleteAlertCatalogSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteAlertCatalogSubscription.params)) {
            try {
                params = new deleteAlertCatalogSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteAlertCatalogSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteAlertCatalogSubscription.method, deleteAlertCatalogSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteAlertCatalogSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/alerts/alert-catalog', enumerable: true }
    });

    deleteAlertCatalogSubscription.params = (function(){
        _util.inherits(deleteAlertCatalogSubscription_params, _util.RequestParams);

        function deleteAlertCatalogSubscription_params(properties) {
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

            deleteAlertCatalogSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteAlertCatalogSubscription_params;
    })();

    return Object.create(null, {
        updateAlertCatalogSubscription: { value: updateAlertCatalogSubscription, enumerable: true },
        deleteAlertCatalogSubscription: { value: deleteAlertCatalogSubscription, enumerable: true }
    });
})();

var $alertNotifications = (function(){
    function updateAlertNotificationSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateAlertNotificationSubscription.params)) {
            try {
                params = new updateAlertNotificationSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAlertNotificationSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateAlertNotificationSubscription.method, updateAlertNotificationSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateAlertNotificationSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/alerts/alert-notifications', enumerable: true }
    });

    updateAlertNotificationSubscription.params = (function(){
        _util.inherits(updateAlertNotificationSubscription_params, _util.RequestParams);

        function updateAlertNotificationSubscription_params(properties) {
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
            if (!(properties.content instanceof Alerts.AlertNotificationSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Alerts.AlertNotificationSubscription');
            }

            updateAlertNotificationSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateAlertNotificationSubscription_params;
    })();

    function deleteAlertNotificationSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteAlertNotificationSubscription.params)) {
            try {
                params = new deleteAlertNotificationSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteAlertNotificationSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteAlertNotificationSubscription.method, deleteAlertNotificationSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteAlertNotificationSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/alerts/alert-notifications', enumerable: true }
    });

    deleteAlertNotificationSubscription.params = (function(){
        _util.inherits(deleteAlertNotificationSubscription_params, _util.RequestParams);

        function deleteAlertNotificationSubscription_params(properties) {
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

            deleteAlertNotificationSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteAlertNotificationSubscription_params;
    })();

    return Object.create(null, {
        updateAlertNotificationSubscription: { value: updateAlertNotificationSubscription, enumerable: true },
        deleteAlertNotificationSubscription: { value: deleteAlertNotificationSubscription, enumerable: true }
    });
})();

var $userMemos = (function(){
    function updateUserMemoSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateUserMemoSubscription.params)) {
            try {
                params = new updateUserMemoSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateUserMemoSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateUserMemoSubscription.method, updateUserMemoSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateUserMemoSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/alerts/user-memos', enumerable: true }
    });

    updateUserMemoSubscription.params = (function(){
        _util.inherits(updateUserMemoSubscription_params, _util.RequestParams);

        function updateUserMemoSubscription_params(properties) {
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

            updateUserMemoSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateUserMemoSubscription_params;
    })();

    function deleteUserMemoSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteUserMemoSubscription.params)) {
            try {
                params = new deleteUserMemoSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteUserMemoSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteUserMemoSubscription.method, deleteUserMemoSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteUserMemoSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/alerts/user-memos', enumerable: true }
    });

    deleteUserMemoSubscription.params = (function(){
        _util.inherits(deleteUserMemoSubscription_params, _util.RequestParams);

        function deleteUserMemoSubscription_params(properties) {
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

            deleteUserMemoSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteUserMemoSubscription_params;
    })();

    return Object.create(null, {
        updateUserMemoSubscription: { value: updateUserMemoSubscription, enumerable: true },
        deleteUserMemoSubscription: { value: deleteUserMemoSubscription, enumerable: true }
    });
})();

exports.$alertCatalog = $alertCatalog;
exports.$alertNotifications = $alertNotifications;
exports.$userMemos = $userMemos;
