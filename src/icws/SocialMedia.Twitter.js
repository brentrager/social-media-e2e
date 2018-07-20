/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var SocialMedia = require('./SocialMedia');
var Common = require('./Common');

var $account = (function(){
    function authorizeTwitterAccount(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof authorizeTwitterAccount.params)) {
            try {
                params = new authorizeTwitterAccount.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: authorizeTwitterAccount.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof SocialMedia.TwitterAccountResponse) ? o : new SocialMedia.TwitterAccountResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(authorizeTwitterAccount.method, authorizeTwitterAccount.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(authorizeTwitterAccount, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/twitter/account', enumerable: true }
    });

    authorizeTwitterAccount.params = (function(){
        _util.inherits(authorizeTwitterAccount_params, _util.RequestParams);

        function authorizeTwitterAccount_params(properties) {
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
            if (!(properties.content instanceof SocialMedia.TwitterAccountRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: SocialMedia.TwitterAccountRequest');
            }

            authorizeTwitterAccount_params._super.constructor.apply(this, arguments);
        }

        return authorizeTwitterAccount_params;
    })();

    function getTwitterAccount(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getTwitterAccount.params)) {
            try {
                params = new getTwitterAccount.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getTwitterAccount.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMedia.TwitterAccountResponse) ? o : new SocialMedia.TwitterAccountResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getTwitterAccount.method, getTwitterAccount.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getTwitterAccount, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/twitter/account/{accountId}', enumerable: true }
    });

    getTwitterAccount.params = (function(){
        _util.inherits(getTwitterAccount_params, _util.RequestParams);

        function getTwitterAccount_params(properties) {
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

            getTwitterAccount_params._super.constructor.apply(this, arguments);
        }

        return getTwitterAccount_params;
    })();

    function updateTwitterAccount(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateTwitterAccount.params)) {
            try {
                params = new updateTwitterAccount.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateTwitterAccount.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMedia.TwitterAccountResponse) ? o : new SocialMedia.TwitterAccountResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateTwitterAccount.method, updateTwitterAccount.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateTwitterAccount, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/twitter/account/{accountId}', enumerable: true }
    });

    updateTwitterAccount.params = (function(){
        _util.inherits(updateTwitterAccount_params, _util.RequestParams);

        function updateTwitterAccount_params(properties) {
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
            if (!(properties.content instanceof SocialMedia.TwitterAccountRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: SocialMedia.TwitterAccountRequest');
            }

            updateTwitterAccount_params._super.constructor.apply(this, arguments);
        }

        return updateTwitterAccount_params;
    })();

    function deleteTwitterAccount(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteTwitterAccount.params)) {
            try {
                params = new deleteTwitterAccount.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteTwitterAccount.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteTwitterAccount.method, deleteTwitterAccount.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteTwitterAccount, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/twitter/account/{accountId}', enumerable: true }
    });

    deleteTwitterAccount.params = (function(){
        _util.inherits(deleteTwitterAccount_params, _util.RequestParams);

        function deleteTwitterAccount_params(properties) {
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

            deleteTwitterAccount_params._super.constructor.apply(this, arguments);
        }

        return deleteTwitterAccount_params;
    })();

    return Object.create(null, {
        authorizeTwitterAccount: { value: authorizeTwitterAccount, enumerable: true },
        getTwitterAccount: { value: getTwitterAccount, enumerable: true },
        updateTwitterAccount: { value: updateTwitterAccount, enumerable: true },
        deleteTwitterAccount: { value: deleteTwitterAccount, enumerable: true }
    });
})();

var $accounts = (function(){
    function getTwitterAccounts(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getTwitterAccounts.params)) {
            try {
                params = new getTwitterAccounts.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getTwitterAccounts.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMedia.TwitterAccountsResponse) ? o : new SocialMedia.TwitterAccountsResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getTwitterAccounts.method, getTwitterAccounts.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getTwitterAccounts, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/twitter/accounts', enumerable: true }
    });

    getTwitterAccounts.params = (function(){
        _util.inherits(getTwitterAccounts_params, _util.RequestParams);

        function getTwitterAccounts_params(properties) {
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

            getTwitterAccounts_params._super.constructor.apply(this, arguments);
        }

        return getTwitterAccounts_params;
    })();

    return Object.create(null, {
        getTwitterAccounts: { value: getTwitterAccounts, enumerable: true }
    });
})();

exports.$account = $account;
exports.$accounts = $accounts;
