/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');
var Interactions_Conversation = require('./Interactions.Conversation');
var Interactions_SocialMedia = require('./Interactions.SocialMedia');

var $read = (function(){
    function conversationMarkPostRead(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof conversationMarkPostRead.params)) {
            try {
                params = new conversationMarkPostRead.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: conversationMarkPostRead.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(conversationMarkPostRead.method, conversationMarkPostRead.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(conversationMarkPostRead, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/conversation/posts/{conversationPostId}/read', enumerable: true }
    });

    conversationMarkPostRead.params = (function(){
        _util.inherits(conversationMarkPostRead_params, _util.RequestParams);

        function conversationMarkPostRead_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId, conversationPostId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (!_util.hasProp(properties.template, 'conversationPostId')) {
                throw new Error('`properties.template` is missing required property: `conversationPostId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            conversationMarkPostRead_params._super.constructor.apply(this, arguments);
        }

        return conversationMarkPostRead_params;
    })();

    return Object.create(null, {
        conversationMarkPostRead: { value: conversationMarkPostRead, enumerable: true }
    });
})();

var $children = (function(){
    function conversationGetPosts(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof conversationGetPosts.params)) {
            try {
                params = new conversationGetPosts.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: conversationGetPosts.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Interactions_Conversation.NillablePostsIds) ? o : new Interactions_Conversation.NillablePostsIds(o); };
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(conversationGetPosts.method, conversationGetPosts.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(conversationGetPosts, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/conversation/posts/{conversationPostId}/children', enumerable: true }
    });

    conversationGetPosts.params = (function(){
        _util.inherits(conversationGetPosts_params, _util.RequestParams);

        function conversationGetPosts_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId, conversationPostId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (!_util.hasProp(properties.template, 'conversationPostId')) {
                throw new Error('`properties.template` is missing required property: `conversationPostId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            conversationGetPosts_params._super.constructor.apply(this, arguments);
        }

        return conversationGetPosts_params;
    })();

    function conversationSubmitPost(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof conversationSubmitPost.params)) {
            try {
                params = new conversationSubmitPost.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: conversationSubmitPost.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Interactions_Conversation.PostedId) ? o : new Interactions_Conversation.PostedId(o); };
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(conversationSubmitPost.method, conversationSubmitPost.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(conversationSubmitPost, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/conversation/posts/{conversationPostId}/children', enumerable: true }
    });

    conversationSubmitPost.params = (function(){
        _util.inherits(conversationSubmitPost_params, _util.RequestParams);

        function conversationSubmitPost_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId, conversationPostId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (!_util.hasProp(properties.template, 'conversationPostId')) {
                throw new Error('`properties.template` is missing required property: `conversationPostId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Interactions_SocialMedia.SocialMediaText)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.SocialMedia.SocialMediaText');
            }

            conversationSubmitPost_params._super.constructor.apply(this, arguments);
        }

        return conversationSubmitPost_params;
    })();

    return Object.create(null, {
        conversationGetPosts: { value: conversationGetPosts, enumerable: true },
        conversationSubmitPost: { value: conversationSubmitPost, enumerable: true }
    });
})();

exports.$read = $read;
exports.$children = $children;
