/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var SocialMedia = require('./SocialMedia');
var Common = require('./Common');

var $channel = (function(){
    function createFacebookChannel(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createFacebookChannel.params)) {
            try {
                params = new createFacebookChannel.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createFacebookChannel.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof SocialMedia.FacebookChannelResponse) ? o : new SocialMedia.FacebookChannelResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createFacebookChannel.method, createFacebookChannel.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createFacebookChannel, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/facebook/account/{accountId}/channel', enumerable: true }
    });

    createFacebookChannel.params = (function(){
        _util.inherits(createFacebookChannel_params, _util.RequestParams);

        function createFacebookChannel_params(properties) {
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
            if (!(properties.content instanceof SocialMedia.FacebookChannelRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: SocialMedia.FacebookChannelRequest');
            }

            createFacebookChannel_params._super.constructor.apply(this, arguments);
        }

        return createFacebookChannel_params;
    })();

    function getFacebookChannel(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFacebookChannel.params)) {
            try {
                params = new getFacebookChannel.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFacebookChannel.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMedia.FacebookChannelResponse) ? o : new SocialMedia.FacebookChannelResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFacebookChannel.method, getFacebookChannel.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFacebookChannel, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/facebook/account/{accountId}/channel/{channelId}', enumerable: true }
    });

    getFacebookChannel.params = (function(){
        _util.inherits(getFacebookChannel_params, _util.RequestParams);

        function getFacebookChannel_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, accountId, channelId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'accountId')) {
                throw new Error('`properties.template` is missing required property: `accountId`');
            }
            if (!_util.hasProp(properties.template, 'channelId')) {
                throw new Error('`properties.template` is missing required property: `channelId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getFacebookChannel_params._super.constructor.apply(this, arguments);
        }

        return getFacebookChannel_params;
    })();

    function updateFacebookChannel(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateFacebookChannel.params)) {
            try {
                params = new updateFacebookChannel.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateFacebookChannel.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMedia.FacebookChannelResponse) ? o : new SocialMedia.FacebookChannelResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateFacebookChannel.method, updateFacebookChannel.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateFacebookChannel, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/facebook/account/{accountId}/channel/{channelId}', enumerable: true }
    });

    updateFacebookChannel.params = (function(){
        _util.inherits(updateFacebookChannel_params, _util.RequestParams);

        function updateFacebookChannel_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, accountId, channelId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'accountId')) {
                throw new Error('`properties.template` is missing required property: `accountId`');
            }
            if (!_util.hasProp(properties.template, 'channelId')) {
                throw new Error('`properties.template` is missing required property: `channelId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof SocialMedia.FacebookChannelRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: SocialMedia.FacebookChannelRequest');
            }

            updateFacebookChannel_params._super.constructor.apply(this, arguments);
        }

        return updateFacebookChannel_params;
    })();

    function deleteFacebookChannel(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteFacebookChannel.params)) {
            try {
                params = new deleteFacebookChannel.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteFacebookChannel.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteFacebookChannel.method, deleteFacebookChannel.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteFacebookChannel, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/facebook/account/{accountId}/channel/{channelId}', enumerable: true }
    });

    deleteFacebookChannel.params = (function(){
        _util.inherits(deleteFacebookChannel_params, _util.RequestParams);

        function deleteFacebookChannel_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, accountId, channelId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'accountId')) {
                throw new Error('`properties.template` is missing required property: `accountId`');
            }
            if (!_util.hasProp(properties.template, 'channelId')) {
                throw new Error('`properties.template` is missing required property: `channelId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteFacebookChannel_params._super.constructor.apply(this, arguments);
        }

        return deleteFacebookChannel_params;
    })();

    return Object.create(null, {
        createFacebookChannel: { value: createFacebookChannel, enumerable: true },
        getFacebookChannel: { value: getFacebookChannel, enumerable: true },
        updateFacebookChannel: { value: updateFacebookChannel, enumerable: true },
        deleteFacebookChannel: { value: deleteFacebookChannel, enumerable: true }
    });
})();

var $channels = (function(){
    function getFacebookChannels(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFacebookChannels.params)) {
            try {
                params = new getFacebookChannels.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFacebookChannels.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMedia.FacebookChannelsResponse) ? o : new SocialMedia.FacebookChannelsResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFacebookChannels.method, getFacebookChannels.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFacebookChannels, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/facebook/account/{accountId}/channels', enumerable: true }
    });

    getFacebookChannels.params = (function(){
        _util.inherits(getFacebookChannels_params, _util.RequestParams);

        function getFacebookChannels_params(properties) {
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

            getFacebookChannels_params._super.constructor.apply(this, arguments);
        }

        return getFacebookChannels_params;
    })();

    return Object.create(null, {
        getFacebookChannels: { value: getFacebookChannels, enumerable: true }
    });
})();

exports.$channel = $channel;
exports.$channels = $channels;
