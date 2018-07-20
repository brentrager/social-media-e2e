/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var SocialMedia = require('./SocialMedia');
var Common = require('./Common');

var $channel = (function(){
    function createTwitterChannel(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createTwitterChannel.params)) {
            try {
                params = new createTwitterChannel.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createTwitterChannel.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof SocialMedia.TwitterChannelResponse) ? o : new SocialMedia.TwitterChannelResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createTwitterChannel.method, createTwitterChannel.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createTwitterChannel, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/twitter/account/{accountId}/channel', enumerable: true }
    });

    createTwitterChannel.params = (function(){
        _util.inherits(createTwitterChannel_params, _util.RequestParams);

        function createTwitterChannel_params(properties) {
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
            if (!(properties.content instanceof SocialMedia.TwitterChannelRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: SocialMedia.TwitterChannelRequest');
            }

            createTwitterChannel_params._super.constructor.apply(this, arguments);
        }

        return createTwitterChannel_params;
    })();

    function getTwitterChannel(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getTwitterChannel.params)) {
            try {
                params = new getTwitterChannel.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getTwitterChannel.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMedia.TwitterChannelResponse) ? o : new SocialMedia.TwitterChannelResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getTwitterChannel.method, getTwitterChannel.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getTwitterChannel, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/twitter/account/{accountId}/channel/{channelId}', enumerable: true }
    });

    getTwitterChannel.params = (function(){
        _util.inherits(getTwitterChannel_params, _util.RequestParams);

        function getTwitterChannel_params(properties) {
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

            getTwitterChannel_params._super.constructor.apply(this, arguments);
        }

        return getTwitterChannel_params;
    })();

    function updateTwitterChannel(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateTwitterChannel.params)) {
            try {
                params = new updateTwitterChannel.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateTwitterChannel.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMedia.TwitterChannelResponse) ? o : new SocialMedia.TwitterChannelResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateTwitterChannel.method, updateTwitterChannel.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateTwitterChannel, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/twitter/account/{accountId}/channel/{channelId}', enumerable: true }
    });

    updateTwitterChannel.params = (function(){
        _util.inherits(updateTwitterChannel_params, _util.RequestParams);

        function updateTwitterChannel_params(properties) {
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
            if (!(properties.content instanceof SocialMedia.TwitterChannelRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: SocialMedia.TwitterChannelRequest');
            }

            updateTwitterChannel_params._super.constructor.apply(this, arguments);
        }

        return updateTwitterChannel_params;
    })();

    function deleteTwitterChannel(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteTwitterChannel.params)) {
            try {
                params = new deleteTwitterChannel.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteTwitterChannel.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteTwitterChannel.method, deleteTwitterChannel.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteTwitterChannel, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/twitter/account/{accountId}/channel/{channelId}', enumerable: true }
    });

    deleteTwitterChannel.params = (function(){
        _util.inherits(deleteTwitterChannel_params, _util.RequestParams);

        function deleteTwitterChannel_params(properties) {
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

            deleteTwitterChannel_params._super.constructor.apply(this, arguments);
        }

        return deleteTwitterChannel_params;
    })();

    return Object.create(null, {
        createTwitterChannel: { value: createTwitterChannel, enumerable: true },
        getTwitterChannel: { value: getTwitterChannel, enumerable: true },
        updateTwitterChannel: { value: updateTwitterChannel, enumerable: true },
        deleteTwitterChannel: { value: deleteTwitterChannel, enumerable: true }
    });
})();

var $channels = (function(){
    function getTwitterChannels(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getTwitterChannels.params)) {
            try {
                params = new getTwitterChannels.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getTwitterChannels.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMedia.TwitterChannelsResponse) ? o : new SocialMedia.TwitterChannelsResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getTwitterChannels.method, getTwitterChannels.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getTwitterChannels, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/twitter/account/{accountId}/channels', enumerable: true }
    });

    getTwitterChannels.params = (function(){
        _util.inherits(getTwitterChannels_params, _util.RequestParams);

        function getTwitterChannels_params(properties) {
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

            getTwitterChannels_params._super.constructor.apply(this, arguments);
        }

        return getTwitterChannels_params;
    })();

    return Object.create(null, {
        getTwitterChannels: { value: getTwitterChannels, enumerable: true }
    });
})();

exports.$channel = $channel;
exports.$channels = $channels;
