/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Interactions = require('./Interactions');
var Common = require('./Common');

var ChatMemberType = (function(){
    var instanceCache = {};
    function ChatMemberType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.chat:chatMemberType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ChatMemberType, _util.EnumValue);

    Object.defineProperties(ChatMemberType, {
        'None': { value: new ChatMemberType(0, 'None'), enumerable: true },
        'SystemMember': { value: new ChatMemberType(1, 'SystemMember'), enumerable: true },
        'CurrentUser': { value: new ChatMemberType(2, 'CurrentUser'), enumerable: true },
        'Internal': { value: new ChatMemberType(3, 'Internal'), enumerable: true },
        'External': { value: new ChatMemberType(4, 'External'), enumerable: true }
    });

    Object.defineProperty(ChatMemberType, '__type', { value: 'urn:inin.com:interactions.chat:chatMemberType' });

    _typemap['urn:inin.com:interactions.chat:chatMemberType'] = ChatMemberType;

    return ChatMemberType;
}());

var ChatMessageType = (function(){
    var instanceCache = {};
    function ChatMessageType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.chat:chatMessageType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ChatMessageType, _util.EnumValue);

    Object.defineProperties(ChatMessageType, {
        'Text': { value: new ChatMessageType(0, 'Text'), enumerable: true },
        'File': { value: new ChatMessageType(1, 'File'), enumerable: true }
    });

    Object.defineProperty(ChatMessageType, '__type', { value: 'urn:inin.com:interactions.chat:chatMessageType' });

    _typemap['urn:inin.com:interactions.chat:chatMessageType'] = ChatMessageType;

    return ChatMessageType;
}());

var ChatMember = (function(){
    var hasProps = false;

    function ChatMember() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.chat:chatMember' });
        }

        ChatMember._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatMember, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChatMember.prototype, 'chatMemberType', {
            get: function() { return this.__prop_chatMemberType; },
            set: function(value) {
                if (!(value instanceof ChatMemberType)) {
                    try {
                        value = new ChatMemberType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ChatMember.chatMemberType: ' + e.message);
                    }
                }

                this.__prop_chatMemberType = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatMember.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatMember.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatMember.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatMember.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatMember.prototype, 'userId', {
            get: function() { return this.__prop_userId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatMember.userId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatMember, '__type', { value: 'urn:inin.com:interactions.chat:chatMember' });

    Object.defineProperty(ChatMember, '__propInfo', {
        get: function() {
            var pi = {
                'chatMemberType': { required: true, nullable: false },
                'displayName': { required: true, nullable: false },
                'interactionId': { required: true, nullable: false },
                'userId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.chat:chatMember'] = ChatMember;

    return ChatMember;
}());

var ChatText = (function(){
    var hasProps = false;

    function ChatText() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.chat:chatText' });
        }

        ChatText._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatText, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChatText.prototype, 'chatMember', {
            get: function() { return this.__prop_chatMember; },
            set: function(value) {
                if (!(value instanceof ChatMember)) {
                    try {
                        value = new ChatMember(value);
                    } catch (e) {
                        throw new TypeError('Error setting ChatText.chatMember: ' + e.message);
                    }
                }

                this.__prop_chatMember = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatText.prototype, 'text', {
            get: function() { return this.__prop_text; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatText.text, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_text = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatText.prototype, 'timestamp', {
            get: function() { return this.__prop_timestamp; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for ChatText.timestamp, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timestamp = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatText.prototype, 'messageType', {
            get: function() { return this.__prop_messageType; },
            set: function(value) {
                if (!(value instanceof ChatMessageType || value === void 0)) {
                    try {
                        value = new ChatMessageType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ChatText.messageType: ' + e.message);
                    }
                }

                this.__prop_messageType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatText, '__type', { value: 'urn:inin.com:interactions.chat:chatText' });

    Object.defineProperty(ChatText, '__propInfo', {
        get: function() {
            var pi = {
                'chatMember': { required: true, nullable: false },
                'text': { required: true, nullable: false },
                'timestamp': { required: true, nullable: false },
                'messageType': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.chat:chatText'] = ChatText;

    return ChatText;
}());

var ChatSendTextParameters = (function(){
    var hasProps = false;

    function ChatSendTextParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.chat:chatSendTextParameters' });
        }

        ChatSendTextParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatSendTextParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChatSendTextParameters.prototype, 'text', {
            get: function() { return this.__prop_text; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatSendTextParameters.text, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_text = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatSendTextParameters.prototype, 'clearTypingIndicator', {
            get: function() { return this.__prop_clearTypingIndicator; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ChatSendTextParameters.clearTypingIndicator, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_clearTypingIndicator = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatSendTextParameters, '__type', { value: 'urn:inin.com:interactions.chat:chatSendTextParameters' });

    Object.defineProperty(ChatSendTextParameters, '__propInfo', {
        get: function() {
            var pi = {
                'text': { required: true, nullable: false },
                'clearTypingIndicator': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.chat:chatSendTextParameters'] = ChatSendTextParameters;

    return ChatSendTextParameters;
}());

var ChatSendResponseManagementFileParameters = (function(){
    var hasProps = false;

    function ChatSendResponseManagementFileParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.chat:chatSendResponseManagementFileParameters' });
        }

        ChatSendResponseManagementFileParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatSendResponseManagementFileParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChatSendResponseManagementFileParameters.prototype, 'itemId', {
            get: function() { return this.__prop_itemId; },
            set: function(value) {
                if (_util.isString(value)) { value = new _util.Guid(value); }
                if (!(_util.isGuid(value))) {
                    throw new TypeError('Expected type Guid for ChatSendResponseManagementFileParameters.itemId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_itemId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatSendResponseManagementFileParameters, '__type', { value: 'urn:inin.com:interactions.chat:chatSendResponseManagementFileParameters' });

    Object.defineProperty(ChatSendResponseManagementFileParameters, '__propInfo', {
        get: function() {
            var pi = {
                'itemId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.chat:chatSendResponseManagementFileParameters'] = ChatSendResponseManagementFileParameters;

    return ChatSendResponseManagementFileParameters;
}());

var ChatSetTypingIndicatorParameters = (function(){
    var hasProps = false;

    function ChatSetTypingIndicatorParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.chat:chatSetTypingIndicatorParameters' });
        }

        ChatSetTypingIndicatorParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatSetTypingIndicatorParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChatSetTypingIndicatorParameters.prototype, 'on', {
            get: function() { return this.__prop_on; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ChatSetTypingIndicatorParameters.on, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_on = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatSetTypingIndicatorParameters, '__type', { value: 'urn:inin.com:interactions.chat:chatSetTypingIndicatorParameters' });

    Object.defineProperty(ChatSetTypingIndicatorParameters, '__propInfo', {
        get: function() {
            var pi = {
                'on': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.chat:chatSetTypingIndicatorParameters'] = ChatSetTypingIndicatorParameters;

    return ChatSetTypingIndicatorParameters;
}());

var ChatMembersMessage = (function(){
    var hasProps = false;

    function ChatMembersMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.chat:chatMembersMessage', enumerable: true });
        }

        ChatMembersMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatMembersMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(ChatMembersMessage.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatMembersMessage.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatMembersMessage.prototype, 'membersAdded', {
            get: function() { return this.__prop_membersAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FullChatMember); }))) {
                    try {
                        value = value.map(function(item){ return new FullChatMember(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ChatMembersMessage.membersAdded: ' + e.message);
                    }
                }

                this.__prop_membersAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatMembersMessage.prototype, 'membersChanged', {
            get: function() { return this.__prop_membersChanged; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FullChatMember); }))) {
                    try {
                        value = value.map(function(item){ return new FullChatMember(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ChatMembersMessage.membersChanged: ' + e.message);
                    }
                }

                this.__prop_membersChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatMembersMessage.prototype, 'membersRemoved', {
            get: function() { return this.__prop_membersRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FullChatMember); }))) {
                    try {
                        value = value.map(function(item){ return new FullChatMember(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ChatMembersMessage.membersRemoved: ' + e.message);
                    }
                }

                this.__prop_membersRemoved = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatMembersMessage, '__type', { value: 'urn:inin.com:interactions.chat:chatMembersMessage' });

    Object.defineProperty(ChatMembersMessage, '__propInfo', {
        get: function() {
            var pi = {
                'interactionId': { required: true, nullable: false },
                'membersAdded': { required: true, nullable: false },
                'membersChanged': { required: true, nullable: false },
                'membersRemoved': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.chat:chatMembersMessage'] = ChatMembersMessage;

    return ChatMembersMessage;
}());

var FullChatMember = (function(){
    var hasProps = false;

    function FullChatMember() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.chat:fullChatMember', enumerable: true });
        }

        FullChatMember._super.constructor.apply(this, arguments);
    }
    _util.inherits(FullChatMember, ChatMember);

    function defineProps() {
        Object.defineProperty(FullChatMember.prototype, 'isTyping', {
            get: function() { return this.__prop_isTyping; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for FullChatMember.isTyping, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isTyping = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FullChatMember, '__type', { value: 'urn:inin.com:interactions.chat:fullChatMember' });

    Object.defineProperty(FullChatMember, '__propInfo', {
        get: function() {
            var pi = {
                'isTyping': { required: true, nullable: false }
            };
            if (ChatMember.__propInfo) { _util.extend(pi, ChatMember.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.chat:fullChatMember'] = FullChatMember;

    return FullChatMember;
}());

var ChatContentsMessage = (function(){
    var hasProps = false;

    function ChatContentsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.chat:chatContentsMessage', enumerable: true });
        }

        ChatContentsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatContentsMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(ChatContentsMessage.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatContentsMessage.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatContentsMessage.prototype, 'messagesAdded', {
            get: function() { return this.__prop_messagesAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ChatText); }))) {
                    try {
                        value = value.map(function(item){ return new ChatText(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ChatContentsMessage.messagesAdded: ' + e.message);
                    }
                }

                this.__prop_messagesAdded = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatContentsMessage, '__type', { value: 'urn:inin.com:interactions.chat:chatContentsMessage' });

    Object.defineProperty(ChatContentsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'interactionId': { required: true, nullable: false },
                'messagesAdded': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.chat:chatContentsMessage'] = ChatContentsMessage;

    return ChatContentsMessage;
}());

var CreateChatParameters = (function(){
    var hasProps = false;

    function CreateChatParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.chat:createChatParameters', enumerable: true });
        }

        CreateChatParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateChatParameters, Interactions.CreateInteractionParameters);

    function defineProps() {
        Object.defineProperty(CreateChatParameters.prototype, 'target', {
            get: function() { return this.__prop_target; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreateChatParameters.target, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_target = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateChatParameters, '__type', { value: 'urn:inin.com:interactions.chat:createChatParameters' });

    Object.defineProperty(CreateChatParameters, '__propInfo', {
        get: function() {
            var pi = {
                'target': { required: true, nullable: false }
            };
            if (Interactions.CreateInteractionParameters.__propInfo) { _util.extend(pi, Interactions.CreateInteractionParameters.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.chat:createChatParameters'] = CreateChatParameters;

    return CreateChatParameters;
}());

var $messages = (function(){
    function chatSendMessage(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof chatSendMessage.params)) {
            try {
                params = new chatSendMessage.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: chatSendMessage.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(chatSendMessage.method, chatSendMessage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(chatSendMessage, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/chat/messages', enumerable: true }
    });

    chatSendMessage.params = (function(){
        _util.inherits(chatSendMessage_params, _util.RequestParams);

        function chatSendMessage_params(properties) {
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
            if (!(properties.content instanceof ChatSendTextParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Chat.ChatSendTextParameters');
            }

            chatSendMessage_params._super.constructor.apply(this, arguments);
        }

        return chatSendMessage_params;
    })();

    return Object.create(null, {
        chatSendMessage: { value: chatSendMessage, enumerable: true }
    });
})();

var $sendFile = (function(){
    function chatSendFile(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof chatSendFile.params)) {
            try {
                params = new chatSendFile.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: chatSendFile.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(chatSendFile.method, chatSendFile.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(chatSendFile, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/chat/send-file', enumerable: true }
    });

    chatSendFile.params = (function(){
        _util.inherits(chatSendFile_params, _util.RequestParams);

        function chatSendFile_params(properties) {
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

            chatSendFile_params._super.constructor.apply(this, arguments);
        }

        return chatSendFile_params;
    })();

    return Object.create(null, {
        chatSendFile: { value: chatSendFile, enumerable: true }
    });
})();

var $sendResponseManagementFile = (function(){
    function chatSendFileFromResponseManagement(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof chatSendFileFromResponseManagement.params)) {
            try {
                params = new chatSendFileFromResponseManagement.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: chatSendFileFromResponseManagement.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(chatSendFileFromResponseManagement.method, chatSendFileFromResponseManagement.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(chatSendFileFromResponseManagement, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/chat/send-response-management-file', enumerable: true }
    });

    chatSendFileFromResponseManagement.params = (function(){
        _util.inherits(chatSendFileFromResponseManagement_params, _util.RequestParams);

        function chatSendFileFromResponseManagement_params(properties) {
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
            if (!(properties.content instanceof ChatSendResponseManagementFileParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Chat.ChatSendResponseManagementFileParameters');
            }

            chatSendFileFromResponseManagement_params._super.constructor.apply(this, arguments);
        }

        return chatSendFileFromResponseManagement_params;
    })();

    return Object.create(null, {
        chatSendFileFromResponseManagement: { value: chatSendFileFromResponseManagement, enumerable: true }
    });
})();

var $typingIndicator = (function(){
    function chatSetTypingIndicator(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof chatSetTypingIndicator.params)) {
            try {
                params = new chatSetTypingIndicator.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: chatSetTypingIndicator.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(chatSetTypingIndicator.method, chatSetTypingIndicator.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(chatSetTypingIndicator, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/chat/typing-indicator', enumerable: true }
    });

    chatSetTypingIndicator.params = (function(){
        _util.inherits(chatSetTypingIndicator_params, _util.RequestParams);

        function chatSetTypingIndicator_params(properties) {
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
            if (!(properties.content instanceof ChatSetTypingIndicatorParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Chat.ChatSetTypingIndicatorParameters');
            }

            chatSetTypingIndicator_params._super.constructor.apply(this, arguments);
        }

        return chatSetTypingIndicator_params;
    })();

    return Object.create(null, {
        chatSetTypingIndicator: { value: chatSetTypingIndicator, enumerable: true }
    });
})();

exports.ChatMemberType = ChatMemberType;
exports.ChatMessageType = ChatMessageType;
exports.ChatMembersMessage = ChatMembersMessage;
exports.FullChatMember = FullChatMember;
exports.ChatMember = ChatMember;
exports.ChatContentsMessage = ChatContentsMessage;
exports.ChatText = ChatText;
exports.CreateChatParameters = CreateChatParameters;
exports.ChatSendTextParameters = ChatSendTextParameters;
exports.ChatSendResponseManagementFileParameters = ChatSendResponseManagementFileParameters;
exports.ChatSetTypingIndicatorParameters = ChatSetTypingIndicatorParameters;
exports.$messages = $messages;
exports.$sendFile = $sendFile;
exports.$sendResponseManagementFile = $sendResponseManagementFile;
exports.$typingIndicator = $typingIndicator;
