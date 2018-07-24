/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $callback = (function(){
    function updateCallbackSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateCallbackSubscription.params)) {
            try {
                params = new updateCallbackSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateCallbackSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateCallbackSubscription.method, updateCallbackSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateCallbackSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/callback', enumerable: true }
    });

    updateCallbackSubscription.params = (function(){
        _util.inherits(updateCallbackSubscription_params, _util.RequestParams);

        function updateCallbackSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            updateCallbackSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateCallbackSubscription_params;
    })();

    function deleteCallbackSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteCallbackSubscription.params)) {
            try {
                params = new deleteCallbackSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteCallbackSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteCallbackSubscription.method, deleteCallbackSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteCallbackSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/callback', enumerable: true }
    });

    deleteCallbackSubscription.params = (function(){
        _util.inherits(deleteCallbackSubscription_params, _util.RequestParams);

        function deleteCallbackSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteCallbackSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteCallbackSubscription_params;
    })();

    return Object.create(null, {
        updateCallbackSubscription: { value: updateCallbackSubscription, enumerable: true },
        deleteCallbackSubscription: { value: deleteCallbackSubscription, enumerable: true }
    });
})();

var $chat = (function(){
    function updateChatSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateChatSubscription.params)) {
            try {
                params = new updateChatSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateChatSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateChatSubscription.method, updateChatSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateChatSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/chat', enumerable: true }
    });

    updateChatSubscription.params = (function(){
        _util.inherits(updateChatSubscription_params, _util.RequestParams);

        function updateChatSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            updateChatSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateChatSubscription_params;
    })();

    function deleteChatSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteChatSubscription.params)) {
            try {
                params = new deleteChatSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteChatSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteChatSubscription.method, deleteChatSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteChatSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/chat', enumerable: true }
    });

    deleteChatSubscription.params = (function(){
        _util.inherits(deleteChatSubscription_params, _util.RequestParams);

        function deleteChatSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteChatSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteChatSubscription_params;
    })();

    return Object.create(null, {
        updateChatSubscription: { value: updateChatSubscription, enumerable: true },
        deleteChatSubscription: { value: deleteChatSubscription, enumerable: true }
    });
})();

var $conversation = (function(){
    function updateConversationSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateConversationSubscription.params)) {
            try {
                params = new updateConversationSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateConversationSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateConversationSubscription.method, updateConversationSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateConversationSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/conversation', enumerable: true }
    });

    updateConversationSubscription.params = (function(){
        _util.inherits(updateConversationSubscription_params, _util.RequestParams);

        function updateConversationSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            updateConversationSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateConversationSubscription_params;
    })();

    function deleteConversationSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteConversationSubscription.params)) {
            try {
                params = new deleteConversationSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteConversationSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteConversationSubscription.method, deleteConversationSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteConversationSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/conversation', enumerable: true }
    });

    deleteConversationSubscription.params = (function(){
        _util.inherits(deleteConversationSubscription_params, _util.RequestParams);

        function deleteConversationSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteConversationSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteConversationSubscription_params;
    })();

    return Object.create(null, {
        updateConversationSubscription: { value: updateConversationSubscription, enumerable: true },
        deleteConversationSubscription: { value: deleteConversationSubscription, enumerable: true }
    });
})();

var $directMessage = (function(){
    function updateDirectMessageSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateDirectMessageSubscription.params)) {
            try {
                params = new updateDirectMessageSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateDirectMessageSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateDirectMessageSubscription.method, updateDirectMessageSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateDirectMessageSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/direct-message', enumerable: true }
    });

    updateDirectMessageSubscription.params = (function(){
        _util.inherits(updateDirectMessageSubscription_params, _util.RequestParams);

        function updateDirectMessageSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            updateDirectMessageSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateDirectMessageSubscription_params;
    })();

    function deleteDirectMessageSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteDirectMessageSubscription.params)) {
            try {
                params = new deleteDirectMessageSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteDirectMessageSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteDirectMessageSubscription.method, deleteDirectMessageSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteDirectMessageSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/direct-message', enumerable: true }
    });

    deleteDirectMessageSubscription.params = (function(){
        _util.inherits(deleteDirectMessageSubscription_params, _util.RequestParams);

        function deleteDirectMessageSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteDirectMessageSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteDirectMessageSubscription_params;
    })();

    return Object.create(null, {
        updateDirectMessageSubscription: { value: updateDirectMessageSubscription, enumerable: true },
        deleteDirectMessageSubscription: { value: deleteDirectMessageSubscription, enumerable: true }
    });
})();

var $email = (function(){
    function updateEmailSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateEmailSubscription.params)) {
            try {
                params = new updateEmailSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateEmailSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateEmailSubscription.method, updateEmailSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateEmailSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/email', enumerable: true }
    });

    updateEmailSubscription.params = (function(){
        _util.inherits(updateEmailSubscription_params, _util.RequestParams);

        function updateEmailSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            updateEmailSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateEmailSubscription_params;
    })();

    function deleteEmailSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteEmailSubscription.params)) {
            try {
                params = new deleteEmailSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteEmailSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteEmailSubscription.method, deleteEmailSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteEmailSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/email', enumerable: true }
    });

    deleteEmailSubscription.params = (function(){
        _util.inherits(deleteEmailSubscription_params, _util.RequestParams);

        function deleteEmailSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteEmailSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteEmailSubscription_params;
    })();

    return Object.create(null, {
        updateEmailSubscription: { value: updateEmailSubscription, enumerable: true },
        deleteEmailSubscription: { value: deleteEmailSubscription, enumerable: true }
    });
})();

var $agentAssistance = (function(){
    function updateAgentAssistanceRequestsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateAgentAssistanceRequestsSubscription.params)) {
            try {
                params = new updateAgentAssistanceRequestsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAgentAssistanceRequestsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateAgentAssistanceRequestsSubscription.method, updateAgentAssistanceRequestsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateAgentAssistanceRequestsSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/agent-assistance', enumerable: true }
    });

    updateAgentAssistanceRequestsSubscription.params = (function(){
        _util.inherits(updateAgentAssistanceRequestsSubscription_params, _util.RequestParams);

        function updateAgentAssistanceRequestsSubscription_params(properties) {
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

            updateAgentAssistanceRequestsSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateAgentAssistanceRequestsSubscription_params;
    })();

    function deleteAgentAssistanceRequestsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteAgentAssistanceRequestsSubscription.params)) {
            try {
                params = new deleteAgentAssistanceRequestsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteAgentAssistanceRequestsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteAgentAssistanceRequestsSubscription.method, deleteAgentAssistanceRequestsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteAgentAssistanceRequestsSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/agent-assistance', enumerable: true }
    });

    deleteAgentAssistanceRequestsSubscription.params = (function(){
        _util.inherits(deleteAgentAssistanceRequestsSubscription_params, _util.RequestParams);

        function deleteAgentAssistanceRequestsSubscription_params(properties) {
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

            deleteAgentAssistanceRequestsSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteAgentAssistanceRequestsSubscription_params;
    })();

    function updateAgentAssistanceRequestSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateAgentAssistanceRequestSubscription.params)) {
            try {
                params = new updateAgentAssistanceRequestSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAgentAssistanceRequestSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateAgentAssistanceRequestSubscription.method, updateAgentAssistanceRequestSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateAgentAssistanceRequestSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/agent-assistance/{assistanceId}', enumerable: true }
    });

    updateAgentAssistanceRequestSubscription.params = (function(){
        _util.inherits(updateAgentAssistanceRequestSubscription_params, _util.RequestParams);

        function updateAgentAssistanceRequestSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, assistanceId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'assistanceId')) {
                throw new Error('`properties.template` is missing required property: `assistanceId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            updateAgentAssistanceRequestSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateAgentAssistanceRequestSubscription_params;
    })();

    function deleteAgentAssistanceRequestSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteAgentAssistanceRequestSubscription.params)) {
            try {
                params = new deleteAgentAssistanceRequestSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteAgentAssistanceRequestSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteAgentAssistanceRequestSubscription.method, deleteAgentAssistanceRequestSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteAgentAssistanceRequestSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/agent-assistance/{assistanceId}', enumerable: true }
    });

    deleteAgentAssistanceRequestSubscription.params = (function(){
        _util.inherits(deleteAgentAssistanceRequestSubscription_params, _util.RequestParams);

        function deleteAgentAssistanceRequestSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, assistanceId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'assistanceId')) {
                throw new Error('`properties.template` is missing required property: `assistanceId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteAgentAssistanceRequestSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteAgentAssistanceRequestSubscription_params;
    })();

    return Object.create(null, {
        updateAgentAssistanceRequestsSubscription: { value: updateAgentAssistanceRequestsSubscription, enumerable: true },
        deleteAgentAssistanceRequestsSubscription: { value: deleteAgentAssistanceRequestsSubscription, enumerable: true },
        updateAgentAssistanceRequestSubscription: { value: updateAgentAssistanceRequestSubscription, enumerable: true },
        deleteAgentAssistanceRequestSubscription: { value: deleteAgentAssistanceRequestSubscription, enumerable: true }
    });
})();

var $supervisorAssistance = (function(){
    function updateSupervisorAssistanceRequestsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSupervisorAssistanceRequestsSubscription.params)) {
            try {
                params = new updateSupervisorAssistanceRequestsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSupervisorAssistanceRequestsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSupervisorAssistanceRequestsSubscription.method, updateSupervisorAssistanceRequestsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSupervisorAssistanceRequestsSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/supervisor-assistance', enumerable: true }
    });

    updateSupervisorAssistanceRequestsSubscription.params = (function(){
        _util.inherits(updateSupervisorAssistanceRequestsSubscription_params, _util.RequestParams);

        function updateSupervisorAssistanceRequestsSubscription_params(properties) {
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

            updateSupervisorAssistanceRequestsSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateSupervisorAssistanceRequestsSubscription_params;
    })();

    function deleteSupervisorAssistanceRequestsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSupervisorAssistanceRequestsSubscription.params)) {
            try {
                params = new deleteSupervisorAssistanceRequestsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSupervisorAssistanceRequestsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSupervisorAssistanceRequestsSubscription.method, deleteSupervisorAssistanceRequestsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSupervisorAssistanceRequestsSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/supervisor-assistance', enumerable: true }
    });

    deleteSupervisorAssistanceRequestsSubscription.params = (function(){
        _util.inherits(deleteSupervisorAssistanceRequestsSubscription_params, _util.RequestParams);

        function deleteSupervisorAssistanceRequestsSubscription_params(properties) {
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

            deleteSupervisorAssistanceRequestsSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSupervisorAssistanceRequestsSubscription_params;
    })();

    function updateSupervisorAssistanceRequestSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSupervisorAssistanceRequestSubscription.params)) {
            try {
                params = new updateSupervisorAssistanceRequestSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSupervisorAssistanceRequestSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSupervisorAssistanceRequestSubscription.method, updateSupervisorAssistanceRequestSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSupervisorAssistanceRequestSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/supervisor-assistance/{assistanceId}', enumerable: true }
    });

    updateSupervisorAssistanceRequestSubscription.params = (function(){
        _util.inherits(updateSupervisorAssistanceRequestSubscription_params, _util.RequestParams);

        function updateSupervisorAssistanceRequestSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, assistanceId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'assistanceId')) {
                throw new Error('`properties.template` is missing required property: `assistanceId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            updateSupervisorAssistanceRequestSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateSupervisorAssistanceRequestSubscription_params;
    })();

    function deleteSupervisorAssistanceRequestSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSupervisorAssistanceRequestSubscription.params)) {
            try {
                params = new deleteSupervisorAssistanceRequestSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSupervisorAssistanceRequestSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSupervisorAssistanceRequestSubscription.method, deleteSupervisorAssistanceRequestSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSupervisorAssistanceRequestSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/supervisor-assistance/{assistanceId}', enumerable: true }
    });

    deleteSupervisorAssistanceRequestSubscription.params = (function(){
        _util.inherits(deleteSupervisorAssistanceRequestSubscription_params, _util.RequestParams);

        function deleteSupervisorAssistanceRequestSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, assistanceId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'assistanceId')) {
                throw new Error('`properties.template` is missing required property: `assistanceId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSupervisorAssistanceRequestSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSupervisorAssistanceRequestSubscription_params;
    })();

    return Object.create(null, {
        updateSupervisorAssistanceRequestsSubscription: { value: updateSupervisorAssistanceRequestsSubscription, enumerable: true },
        deleteSupervisorAssistanceRequestsSubscription: { value: deleteSupervisorAssistanceRequestsSubscription, enumerable: true },
        updateSupervisorAssistanceRequestSubscription: { value: updateSupervisorAssistanceRequestSubscription, enumerable: true },
        deleteSupervisorAssistanceRequestSubscription: { value: deleteSupervisorAssistanceRequestSubscription, enumerable: true }
    });
})();

exports.$callback = $callback;
exports.$chat = $chat;
exports.$conversation = $conversation;
exports.$directMessage = $directMessage;
exports.$email = $email;
exports.$agentAssistance = $agentAssistance;
exports.$supervisorAssistance = $supervisorAssistance;
