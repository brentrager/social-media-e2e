/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $brokerAccountAssociations = (function(){
    function createSmsBrokerAccountAssociationsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSmsBrokerAccountAssociationsSubscription.params)) {
            try {
                params = new createSmsBrokerAccountAssociationsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSmsBrokerAccountAssociationsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSmsBrokerAccountAssociationsSubscription.method, createSmsBrokerAccountAssociationsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSmsBrokerAccountAssociationsSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/sms/broker-account-associations', enumerable: true }
    });

    createSmsBrokerAccountAssociationsSubscription.params = (function(){
        _util.inherits(createSmsBrokerAccountAssociationsSubscription_params, _util.RequestParams);

        function createSmsBrokerAccountAssociationsSubscription_params(properties) {
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

            createSmsBrokerAccountAssociationsSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSmsBrokerAccountAssociationsSubscription_params;
    })();

    function deleteSmsBrokerAccountAssociationsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSmsBrokerAccountAssociationsSubscription.params)) {
            try {
                params = new deleteSmsBrokerAccountAssociationsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSmsBrokerAccountAssociationsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSmsBrokerAccountAssociationsSubscription.method, deleteSmsBrokerAccountAssociationsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSmsBrokerAccountAssociationsSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/sms/broker-account-associations', enumerable: true }
    });

    deleteSmsBrokerAccountAssociationsSubscription.params = (function(){
        _util.inherits(deleteSmsBrokerAccountAssociationsSubscription_params, _util.RequestParams);

        function deleteSmsBrokerAccountAssociationsSubscription_params(properties) {
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

            deleteSmsBrokerAccountAssociationsSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSmsBrokerAccountAssociationsSubscription_params;
    })();

    return Object.create(null, {
        createSmsBrokerAccountAssociationsSubscription: { value: createSmsBrokerAccountAssociationsSubscription, enumerable: true },
        deleteSmsBrokerAccountAssociationsSubscription: { value: deleteSmsBrokerAccountAssociationsSubscription, enumerable: true }
    });
})();

var $errorInformation = (function(){
    function createSmsErrorInformationSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSmsErrorInformationSubscription.params)) {
            try {
                params = new createSmsErrorInformationSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSmsErrorInformationSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSmsErrorInformationSubscription.method, createSmsErrorInformationSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSmsErrorInformationSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/sms/error-information', enumerable: true }
    });

    createSmsErrorInformationSubscription.params = (function(){
        _util.inherits(createSmsErrorInformationSubscription_params, _util.RequestParams);

        function createSmsErrorInformationSubscription_params(properties) {
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

            createSmsErrorInformationSubscription_params._super.constructor.apply(this, arguments);
        }

        return createSmsErrorInformationSubscription_params;
    })();

    function deleteSmsErrorInformationSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSmsErrorInformationSubscription.params)) {
            try {
                params = new deleteSmsErrorInformationSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSmsErrorInformationSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSmsErrorInformationSubscription.method, deleteSmsErrorInformationSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSmsErrorInformationSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/sms/error-information', enumerable: true }
    });

    deleteSmsErrorInformationSubscription.params = (function(){
        _util.inherits(deleteSmsErrorInformationSubscription_params, _util.RequestParams);

        function deleteSmsErrorInformationSubscription_params(properties) {
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

            deleteSmsErrorInformationSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSmsErrorInformationSubscription_params;
    })();

    return Object.create(null, {
        createSmsErrorInformationSubscription: { value: createSmsErrorInformationSubscription, enumerable: true },
        deleteSmsErrorInformationSubscription: { value: deleteSmsErrorInformationSubscription, enumerable: true }
    });
})();

exports.$brokerAccountAssociations = $brokerAccountAssociations;
exports.$errorInformation = $errorInformation;
