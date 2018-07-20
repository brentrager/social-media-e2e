/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Interactions_SocialMedia = require('./Interactions.SocialMedia');
var Common = require('./Common');

var MessageContent = (function(){
    var hasProps = false;

    function MessageContent() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.directMessage:messageContent' });
        }

        MessageContent._super.constructor.apply(this, arguments);
    }
    _util.inherits(MessageContent, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MessageContent.prototype, 'from', {
            get: function() { return this.__prop_from; },
            set: function(value) {
                if (!(value instanceof Interactions_SocialMedia.From)) {
                    try {
                        value = new Interactions_SocialMedia.From(value);
                    } catch (e) {
                        throw new TypeError('Error setting MessageContent.from: ' + e.message);
                    }
                }

                this.__prop_from = value;
            },
            enumerable: true
        });

        Object.defineProperty(MessageContent.prototype, 'content', {
            get: function() { return this.__prop_content; },
            set: function(value) {
                if (!(value instanceof Interactions_SocialMedia.Content)) {
                    try {
                        value = new Interactions_SocialMedia.Content(value);
                    } catch (e) {
                        throw new TypeError('Error setting MessageContent.content: ' + e.message);
                    }
                }

                this.__prop_content = value;
            },
            enumerable: true
        });

        Object.defineProperty(MessageContent.prototype, 'messageId', {
            get: function() { return this.__prop_messageId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for MessageContent.messageId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_messageId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MessageContent, '__type', { value: 'urn:inin.com:interactions.directMessage:messageContent' });

    Object.defineProperty(MessageContent, '__propInfo', {
        get: function() {
            var pi = {
                'from': { required: true, nullable: false },
                'content': { required: true, nullable: false },
                'messageId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.directMessage:messageContent'] = MessageContent;

    return MessageContent;
}());

var NillableMessagesContents = (function(){
    var hasProps = false;

    function NillableMessagesContents() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.directMessage:nillableMessagesContents' });
        }

        NillableMessagesContents._super.constructor.apply(this, arguments);
    }
    _util.inherits(NillableMessagesContents, _util.DataContract);

    function defineProps() {
        Object.defineProperty(NillableMessagesContents.prototype, 'messages', {
            get: function() { return this.__prop_messages; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MessageContent); }) || value === null)) {
                    try {
                        value = value.map(function(item){ return new MessageContent(item); });
                    } catch (e) {
                        throw new TypeError('Error setting NillableMessagesContents.messages: ' + e.message);
                    }
                }

                this.__prop_messages = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(NillableMessagesContents, '__type', { value: 'urn:inin.com:interactions.directMessage:nillableMessagesContents' });

    Object.defineProperty(NillableMessagesContents, '__propInfo', {
        get: function() {
            var pi = {
                'messages': { required: true, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.directMessage:nillableMessagesContents'] = NillableMessagesContents;

    return NillableMessagesContents;
}());

var MessagedId = (function(){
    var hasProps = false;

    function MessagedId() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.directMessage:messagedId' });
        }

        MessagedId._super.constructor.apply(this, arguments);
    }
    _util.inherits(MessagedId, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MessagedId.prototype, 'messageId', {
            get: function() { return this.__prop_messageId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for MessagedId.messageId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_messageId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MessagedId, '__type', { value: 'urn:inin.com:interactions.directMessage:messagedId' });

    Object.defineProperty(MessagedId, '__propInfo', {
        get: function() {
            var pi = {
                'messageId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.directMessage:messagedId'] = MessagedId;

    return MessagedId;
}());

var MessagesContents = (function(){
    var hasProps = false;

    function MessagesContents() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.directMessage:messagesContents', enumerable: true });
        }

        MessagesContents._super.constructor.apply(this, arguments);
    }
    _util.inherits(MessagesContents, Messaging.Message);

    function defineProps() {
        Object.defineProperty(MessagesContents.prototype, 'messages', {
            get: function() { return this.__prop_messages; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MessageContent); }))) {
                    try {
                        value = value.map(function(item){ return new MessageContent(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MessagesContents.messages: ' + e.message);
                    }
                }

                this.__prop_messages = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MessagesContents, '__type', { value: 'urn:inin.com:interactions.directMessage:messagesContents' });

    Object.defineProperty(MessagesContents, '__propInfo', {
        get: function() {
            var pi = {
                'messages': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.directMessage:messagesContents'] = MessagesContents;

    return MessagesContents;
}());

var $images = (function(){
    function directMessageGetImage(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof directMessageGetImage.params)) {
            try {
                params = new directMessageGetImage.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: directMessageGetImage.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Interactions_SocialMedia.SocialMediaImage) ? o : new Interactions_SocialMedia.SocialMediaImage(o); };
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(directMessageGetImage.method, directMessageGetImage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(directMessageGetImage, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/direct-message/images/{imageId}', enumerable: true }
    });

    directMessageGetImage.params = (function(){
        _util.inherits(directMessageGetImage_params, _util.RequestParams);

        function directMessageGetImage_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId, imageId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (!_util.hasProp(properties.template, 'imageId')) {
                throw new Error('`properties.template` is missing required property: `imageId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            directMessageGetImage_params._super.constructor.apply(this, arguments);
        }

        return directMessageGetImage_params;
    })();

    return Object.create(null, {
        directMessageGetImage: { value: directMessageGetImage, enumerable: true }
    });
})();

var $messages = (function(){
    function directMessageGetMessages(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof directMessageGetMessages.params)) {
            try {
                params = new directMessageGetMessages.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: directMessageGetMessages.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof NillableMessagesContents) ? o : new NillableMessagesContents(o); };
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(directMessageGetMessages.method, directMessageGetMessages.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(directMessageGetMessages, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/direct-message/messages', enumerable: true }
    });

    directMessageGetMessages.params = (function(){
        _util.inherits(directMessageGetMessages_params, _util.RequestParams);

        function directMessageGetMessages_params(properties) {
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

            directMessageGetMessages_params._super.constructor.apply(this, arguments);
        }

        return directMessageGetMessages_params;
    })();

    function directMessageSubmitMessage(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof directMessageSubmitMessage.params)) {
            try {
                params = new directMessageSubmitMessage.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: directMessageSubmitMessage.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof MessagedId) ? o : new MessagedId(o); };
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(directMessageSubmitMessage.method, directMessageSubmitMessage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(directMessageSubmitMessage, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/direct-message/messages', enumerable: true }
    });

    directMessageSubmitMessage.params = (function(){
        _util.inherits(directMessageSubmitMessage_params, _util.RequestParams);

        function directMessageSubmitMessage_params(properties) {
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
            if (!(properties.content instanceof Interactions_SocialMedia.SocialMediaText)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.SocialMedia.SocialMediaText');
            }

            directMessageSubmitMessage_params._super.constructor.apply(this, arguments);
        }

        return directMessageSubmitMessage_params;
    })();

    return Object.create(null, {
        directMessageGetMessages: { value: directMessageGetMessages, enumerable: true },
        directMessageSubmitMessage: { value: directMessageSubmitMessage, enumerable: true }
    });
})();

exports.MessagesContents = MessagesContents;
exports.MessageContent = MessageContent;
exports.NillableMessagesContents = NillableMessagesContents;
exports.MessagedId = MessagedId;
exports.$images = $images;
exports.$messages = $messages;
