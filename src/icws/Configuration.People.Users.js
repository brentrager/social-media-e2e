/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration_People = require('./Configuration.People');
var Configuration = require('./Configuration');
var Common = require('./Common');

var $client = (function(){
    function updateClientConfigurationProperties(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateClientConfigurationProperties.params)) {
            try {
                params = new updateClientConfigurationProperties.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateClientConfigurationProperties.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateClientConfigurationProperties.method, updateClientConfigurationProperties.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateClientConfigurationProperties, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/users/{id}/client', enumerable: true }
    });

    updateClientConfigurationProperties.params = (function(){
        _util.inherits(updateClientConfigurationProperties_params, _util.RequestParams);

        function updateClientConfigurationProperties_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration_People.UserClientConfigurationProperties)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.UserClientConfigurationProperties');
            }

            updateClientConfigurationProperties_params._super.constructor.apply(this, arguments);
        }

        return updateClientConfigurationProperties_params;
    })();

    return Object.create(null, {
        updateClientConfigurationProperties: { value: updateClientConfigurationProperties, enumerable: true }
    });
})();

var $password = (function(){
    function password(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof password.params)) {
            try {
                params = new password.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: password.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(password.method, password.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(password, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/users/{id}/password', enumerable: true }
    });

    password.params = (function(){
        _util.inherits(password_params, _util.RequestParams);

        function password_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration_People.UserPassword)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.UserPassword');
            }

            password_params._super.constructor.apply(this, arguments);
        }

        return password_params;
    })();

    return Object.create(null, {
        password: { value: password, enumerable: true }
    });
})();

exports.$client = $client;
exports.$password = $password;
