/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var SocialMedia = require('./SocialMedia');
var Common = require('./Common');

var $account = (function(){
    function authorizeFacebookAccount(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof authorizeFacebookAccount.params)) {
            try {
                params = new authorizeFacebookAccount.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: authorizeFacebookAccount.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof SocialMedia.FacebookAccountResponse) ? o : new SocialMedia.FacebookAccountResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(authorizeFacebookAccount.method, authorizeFacebookAccount.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(authorizeFacebookAccount, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/facebook/account', enumerable: true }
    });

    authorizeFacebookAccount.params = (function(){
        _util.inherits(authorizeFacebookAccount_params, _util.RequestParams);

        function authorizeFacebookAccount_params(properties) {
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
            if (!(properties.content instanceof SocialMedia.FacebookAccountRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: SocialMedia.FacebookAccountRequest');
            }

            authorizeFacebookAccount_params._super.constructor.apply(this, arguments);
        }

        return authorizeFacebookAccount_params;
    })();

    function getFacebookAccount(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFacebookAccount.params)) {
            try {
                params = new getFacebookAccount.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFacebookAccount.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMedia.FacebookAccountResponse) ? o : new SocialMedia.FacebookAccountResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFacebookAccount.method, getFacebookAccount.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFacebookAccount, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/facebook/account/{accountId}', enumerable: true }
    });

    getFacebookAccount.params = (function(){
        _util.inherits(getFacebookAccount_params, _util.RequestParams);

        function getFacebookAccount_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, accountId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'accountId')) {
                throw new Error('`properties.template` is missing required property: `accountId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getFacebookAccount_params._super.constructor.apply(this, arguments);
        }

        return getFacebookAccount_params;
    })();

    function updateFacebookAccount(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateFacebookAccount.params)) {
            try {
                params = new updateFacebookAccount.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateFacebookAccount.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMedia.FacebookAccountResponse) ? o : new SocialMedia.FacebookAccountResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateFacebookAccount.method, updateFacebookAccount.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateFacebookAccount, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/facebook/account/{accountId}', enumerable: true }
    });

    updateFacebookAccount.params = (function(){
        _util.inherits(updateFacebookAccount_params, _util.RequestParams);

        function updateFacebookAccount_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, accountId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'accountId')) {
                throw new Error('`properties.template` is missing required property: `accountId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof SocialMedia.FacebookAccountRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: SocialMedia.FacebookAccountRequest');
            }

            updateFacebookAccount_params._super.constructor.apply(this, arguments);
        }

        return updateFacebookAccount_params;
    })();

    function deleteFacebookAccount(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteFacebookAccount.params)) {
            try {
                params = new deleteFacebookAccount.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteFacebookAccount.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteFacebookAccount.method, deleteFacebookAccount.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteFacebookAccount, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/facebook/account/{accountId}', enumerable: true }
    });

    deleteFacebookAccount.params = (function(){
        _util.inherits(deleteFacebookAccount_params, _util.RequestParams);

        function deleteFacebookAccount_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, accountId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'accountId')) {
                throw new Error('`properties.template` is missing required property: `accountId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteFacebookAccount_params._super.constructor.apply(this, arguments);
        }

        return deleteFacebookAccount_params;
    })();

    return Object.create(null, {
        authorizeFacebookAccount: { value: authorizeFacebookAccount, enumerable: true },
        getFacebookAccount: { value: getFacebookAccount, enumerable: true },
        updateFacebookAccount: { value: updateFacebookAccount, enumerable: true },
        deleteFacebookAccount: { value: deleteFacebookAccount, enumerable: true }
    });
})();

var $accounts = (function(){
    function getFacebookAccounts(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFacebookAccounts.params)) {
            try {
                params = new getFacebookAccounts.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFacebookAccounts.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMedia.FacebookAccountsResponse) ? o : new SocialMedia.FacebookAccountsResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFacebookAccounts.method, getFacebookAccounts.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFacebookAccounts, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/facebook/accounts', enumerable: true }
    });

    getFacebookAccounts.params = (function(){
        _util.inherits(getFacebookAccounts_params, _util.RequestParams);

        function getFacebookAccounts_params(properties) {
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

            getFacebookAccounts_params._super.constructor.apply(this, arguments);
        }

        return getFacebookAccounts_params;
    })();

    return Object.create(null, {
        getFacebookAccounts: { value: getFacebookAccounts, enumerable: true }
    });
})();

exports.$account = $account;
exports.$accounts = $accounts;
