/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var System = require('./System');
var Common = require('./Common');

var $handlerSentNotifications = (function(){
    function updateHandlerSentNotificationsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateHandlerSentNotificationsSubscription.params)) {
            try {
                params = new updateHandlerSentNotificationsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateHandlerSentNotificationsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateHandlerSentNotificationsSubscription.method, updateHandlerSentNotificationsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateHandlerSentNotificationsSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/system/handler-sent-notifications', enumerable: true }
    });

    updateHandlerSentNotificationsSubscription.params = (function(){
        _util.inherits(updateHandlerSentNotificationsSubscription_params, _util.RequestParams);

        function updateHandlerSentNotificationsSubscription_params(properties) {
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
            if (!(properties.content instanceof System.HandlerSentNotificationsSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: System.HandlerSentNotificationsSubscription');
            }

            updateHandlerSentNotificationsSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateHandlerSentNotificationsSubscription_params;
    })();

    function deleteHandlerSentNotificationsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteHandlerSentNotificationsSubscription.params)) {
            try {
                params = new deleteHandlerSentNotificationsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteHandlerSentNotificationsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteHandlerSentNotificationsSubscription.method, deleteHandlerSentNotificationsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteHandlerSentNotificationsSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/system/handler-sent-notifications', enumerable: true }
    });

    deleteHandlerSentNotificationsSubscription.params = (function(){
        _util.inherits(deleteHandlerSentNotificationsSubscription_params, _util.RequestParams);

        function deleteHandlerSentNotificationsSubscription_params(properties) {
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

            deleteHandlerSentNotificationsSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteHandlerSentNotificationsSubscription_params;
    })();

    return Object.create(null, {
        updateHandlerSentNotificationsSubscription: { value: updateHandlerSentNotificationsSubscription, enumerable: true },
        deleteHandlerSentNotificationsSubscription: { value: deleteHandlerSentNotificationsSubscription, enumerable: true }
    });
})();

exports.$handlerSentNotifications = $handlerSentNotifications;
