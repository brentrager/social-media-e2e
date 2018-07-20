/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var ChatParticipantState = (function(){
    var instanceCache = {};
    function ChatParticipantState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:webChat:chatParticipantState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ChatParticipantState, _util.EnumValue);

    Object.defineProperties(ChatParticipantState, {
        'Initializing': { value: new ChatParticipantState(0, 'Initializing'), enumerable: true },
        'Alerting': { value: new ChatParticipantState(1, 'Alerting'), enumerable: true },
        'Active': { value: new ChatParticipantState(2, 'Active'), enumerable: true },
        'Held': { value: new ChatParticipantState(3, 'Held'), enumerable: true },
        'Disconnected': { value: new ChatParticipantState(4, 'Disconnected'), enumerable: true }
    });

    Object.defineProperty(ChatParticipantState, '__type', { value: 'urn:inin.com:webChat:chatParticipantState' });

    _typemap['urn:inin.com:webChat:chatParticipantState'] = ChatParticipantState;

    return ChatParticipantState;
}());

var StartChatRequest = (function(){
    var hasProps = false;

    function StartChatRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:webChat:startChatRequest' });
        }

        StartChatRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(StartChatRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StartChatRequest.prototype, 'participantName', {
            get: function() { return this.__prop_participantName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StartChatRequest.participantName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_participantName = value;
            },
            enumerable: true
        });

        Object.defineProperty(StartChatRequest.prototype, 'transcriptEmailAddress', {
            get: function() { return this.__prop_transcriptEmailAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for StartChatRequest.transcriptEmailAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_transcriptEmailAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(StartChatRequest.prototype, 'targetName', {
            get: function() { return this.__prop_targetName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StartChatRequest.targetName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_targetName = value;
            },
            enumerable: true
        });

        Object.defineProperty(StartChatRequest.prototype, 'targetType', {
            get: function() { return this.__prop_targetType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StartChatRequest.targetType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_targetType = value;
            },
            enumerable: true
        });

        Object.defineProperty(StartChatRequest.prototype, 'language', {
            get: function() { return this.__prop_language; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for StartChatRequest.language, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_language = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StartChatRequest, '__type', { value: 'urn:inin.com:webChat:startChatRequest' });

    Object.defineProperty(StartChatRequest, '__propInfo', {
        get: function() {
            var pi = {
                'participantName': { required: true, nullable: false },
                'transcriptEmailAddress': { required: false, nullable: false },
                'targetName': { required: true, nullable: false },
                'targetType': { required: true, nullable: false },
                'language': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:webChat:startChatRequest'] = StartChatRequest;

    return StartChatRequest;
}());

var ChatConnectionMessage = (function(){
    var hasProps = false;

    function ChatConnectionMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:webChat:chatConnectionMessage' });
        }

        ChatConnectionMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatConnectionMessage, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChatConnectionMessage.prototype, 'pollWaitSuggestion', {
            get: function() { return this.__prop_pollWaitSuggestion; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatConnectionMessage.pollWaitSuggestion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pollWaitSuggestion = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatConnectionMessage.prototype, 'participantId', {
            get: function() { return this.__prop_participantId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatConnectionMessage.participantId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_participantId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatConnectionMessage, '__type', { value: 'urn:inin.com:webChat:chatConnectionMessage' });

    Object.defineProperty(ChatConnectionMessage, '__propInfo', {
        get: function() {
            var pi = {
                'pollWaitSuggestion': { required: true, nullable: false },
                'participantId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:webChat:chatConnectionMessage'] = ChatConnectionMessage;

    return ChatConnectionMessage;
}());

var ChatReconnectRequest = (function(){
    var hasProps = false;

    function ChatReconnectRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:webChat:chatReconnectRequest' });
        }

        ChatReconnectRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatReconnectRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChatReconnectRequest.prototype, 'chatId', {
            get: function() { return this.__prop_chatId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatReconnectRequest.chatId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_chatId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatReconnectRequest.prototype, 'participantId', {
            get: function() { return this.__prop_participantId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatReconnectRequest.participantId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_participantId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatReconnectRequest, '__type', { value: 'urn:inin.com:webChat:chatReconnectRequest' });

    Object.defineProperty(ChatReconnectRequest, '__propInfo', {
        get: function() {
            var pi = {
                'chatId': { required: true, nullable: false },
                'participantId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:webChat:chatReconnectRequest'] = ChatReconnectRequest;

    return ChatReconnectRequest;
}());

var ChatTypingStateRequest = (function(){
    var hasProps = false;

    function ChatTypingStateRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:webChat:chatTypingStateRequest' });
        }

        ChatTypingStateRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatTypingStateRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChatTypingStateRequest.prototype, 'typingIndicator', {
            get: function() { return this.__prop_typingIndicator; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ChatTypingStateRequest.typingIndicator, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_typingIndicator = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatTypingStateRequest, '__type', { value: 'urn:inin.com:webChat:chatTypingStateRequest' });

    Object.defineProperty(ChatTypingStateRequest, '__propInfo', {
        get: function() {
            var pi = {
                'typingIndicator': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:webChat:chatTypingStateRequest'] = ChatTypingStateRequest;

    return ChatTypingStateRequest;
}());

var ChatSendMessageRequest = (function(){
    var hasProps = false;

    function ChatSendMessageRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:webChat:chatSendMessageRequest' });
        }

        ChatSendMessageRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatSendMessageRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChatSendMessageRequest.prototype, 'message', {
            get: function() { return this.__prop_message; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatSendMessageRequest.message, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_message = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatSendMessageRequest.prototype, 'contentType', {
            get: function() { return this.__prop_contentType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatSendMessageRequest.contentType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_contentType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatSendMessageRequest, '__type', { value: 'urn:inin.com:webChat:chatSendMessageRequest' });

    Object.defineProperty(ChatSendMessageRequest, '__propInfo', {
        get: function() {
            var pi = {
                'message': { required: true, nullable: false },
                'contentType': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:webChat:chatSendMessageRequest'] = ChatSendMessageRequest;

    return ChatSendMessageRequest;
}());

var ChatGetMessagesResponse = (function(){
    var hasProps = false;

    function ChatGetMessagesResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:webChat:chatGetMessagesResponse' });
        }

        ChatGetMessagesResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatGetMessagesResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChatGetMessagesResponse.prototype, 'pollWaitSuggestion', {
            get: function() { return this.__prop_pollWaitSuggestion; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatGetMessagesResponse.pollWaitSuggestion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pollWaitSuggestion = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatGetMessagesResponse.prototype, 'messages', {
            get: function() { return this.__prop_messages; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ChatMessage); }))) {
                    try {
                        value = value.map(function(item){ return new ChatMessage(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ChatGetMessagesResponse.messages: ' + e.message);
                    }
                }

                this.__prop_messages = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatGetMessagesResponse, '__type', { value: 'urn:inin.com:webChat:chatGetMessagesResponse' });

    Object.defineProperty(ChatGetMessagesResponse, '__propInfo', {
        get: function() {
            var pi = {
                'pollWaitSuggestion': { required: true, nullable: false },
                'messages': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:webChat:chatGetMessagesResponse'] = ChatGetMessagesResponse;

    return ChatGetMessagesResponse;
}());

var ChatMessage = (function(){
    var hasProps = false;

    function ChatMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:webChat:chatMessage' });
        }

        ChatMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatMessage, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChatMessage.prototype, 'participantId', {
            get: function() { return this.__prop_participantId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatMessage.participantId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_participantId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatMessage.prototype, 'sequenceNumber', {
            get: function() { return this.__prop_sequenceNumber; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for ChatMessage.sequenceNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sequenceNumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatMessage.prototype, 'timestamp', {
            get: function() { return this.__prop_timestamp; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatMessage.timestamp, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timestamp = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatMessage, '__type', { value: 'urn:inin.com:webChat:chatMessage' });

    Object.defineProperty(ChatMessage, '__propInfo', {
        get: function() {
            var pi = {
                'participantId': { required: true, nullable: false },
                'sequenceNumber': { required: true, nullable: false },
                'timestamp': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:webChat:chatMessage'] = ChatMessage;

    return ChatMessage;
}());

var StartChatResponse = (function(){
    var hasProps = false;

    function StartChatResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:webChat:startChatResponse', enumerable: true });
        }

        StartChatResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(StartChatResponse, ChatConnectionMessage);

    function defineProps() {
        Object.defineProperty(StartChatResponse.prototype, 'chatId', {
            get: function() { return this.__prop_chatId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StartChatResponse.chatId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_chatId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StartChatResponse, '__type', { value: 'urn:inin.com:webChat:startChatResponse' });

    Object.defineProperty(StartChatResponse, '__propInfo', {
        get: function() {
            var pi = {
                'chatId': { required: true, nullable: false }
            };
            if (ChatConnectionMessage.__propInfo) { _util.extend(pi, ChatConnectionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:webChat:startChatResponse'] = StartChatResponse;

    return StartChatResponse;
}());

var ChatTextMessage = (function(){
    var hasProps = false;

    function ChatTextMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:webChat:chatTextMessage', enumerable: true });
        }

        ChatTextMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatTextMessage, ChatMessage);

    function defineProps() {
        Object.defineProperty(ChatTextMessage.prototype, 'contentType', {
            get: function() { return this.__prop_contentType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatTextMessage.contentType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_contentType = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatTextMessage.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatTextMessage.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatTextMessage, '__type', { value: 'urn:inin.com:webChat:chatTextMessage' });

    Object.defineProperty(ChatTextMessage, '__propInfo', {
        get: function() {
            var pi = {
                'contentType': { required: true, nullable: false },
                'value': { required: true, nullable: false }
            };
            if (ChatMessage.__propInfo) { _util.extend(pi, ChatMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:webChat:chatTextMessage'] = ChatTextMessage;

    return ChatTextMessage;
}());

var ChatTypingIndicatorMessage = (function(){
    var hasProps = false;

    function ChatTypingIndicatorMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:webChat:chatTypingIndicatorMessage', enumerable: true });
        }

        ChatTypingIndicatorMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatTypingIndicatorMessage, ChatMessage);

    function defineProps() {
        Object.defineProperty(ChatTypingIndicatorMessage.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ChatTypingIndicatorMessage.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatTypingIndicatorMessage, '__type', { value: 'urn:inin.com:webChat:chatTypingIndicatorMessage' });

    Object.defineProperty(ChatTypingIndicatorMessage, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false }
            };
            if (ChatMessage.__propInfo) { _util.extend(pi, ChatMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:webChat:chatTypingIndicatorMessage'] = ChatTypingIndicatorMessage;

    return ChatTypingIndicatorMessage;
}());

var ChatFileMessage = (function(){
    var hasProps = false;

    function ChatFileMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:webChat:chatFileMessage', enumerable: true });
        }

        ChatFileMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatFileMessage, ChatMessage);

    function defineProps() {
        Object.defineProperty(ChatFileMessage.prototype, 'fileGuid', {
            get: function() { return this.__prop_fileGuid; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatFileMessage.fileGuid, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fileGuid = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatFileMessage.prototype, 'fileName', {
            get: function() { return this.__prop_fileName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatFileMessage.fileName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fileName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatFileMessage.prototype, 'fileSize', {
            get: function() { return this.__prop_fileSize; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for ChatFileMessage.fileSize, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fileSize = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatFileMessage, '__type', { value: 'urn:inin.com:webChat:chatFileMessage' });

    Object.defineProperty(ChatFileMessage, '__propInfo', {
        get: function() {
            var pi = {
                'fileGuid': { required: true, nullable: false },
                'fileName': { required: true, nullable: false },
                'fileSize': { required: true, nullable: false }
            };
            if (ChatMessage.__propInfo) { _util.extend(pi, ChatMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:webChat:chatFileMessage'] = ChatFileMessage;

    return ChatFileMessage;
}());

var ChatParticipantStateChangedMessage = (function(){
    var hasProps = false;

    function ChatParticipantStateChangedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:webChat:chatParticipantStateChangedMessage', enumerable: true });
        }

        ChatParticipantStateChangedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChatParticipantStateChangedMessage, ChatMessage);

    function defineProps() {
        Object.defineProperty(ChatParticipantStateChangedMessage.prototype, 'state', {
            get: function() { return this.__prop_state; },
            set: function(value) {
                if (!(value instanceof ChatParticipantState)) {
                    try {
                        value = new ChatParticipantState(value);
                    } catch (e) {
                        throw new TypeError('Error setting ChatParticipantStateChangedMessage.state: ' + e.message);
                    }
                }

                this.__prop_state = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatParticipantStateChangedMessage.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatParticipantStateChangedMessage.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChatParticipantStateChangedMessage.prototype, 'participantType', {
            get: function() { return this.__prop_participantType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ChatParticipantStateChangedMessage.participantType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_participantType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChatParticipantStateChangedMessage, '__type', { value: 'urn:inin.com:webChat:chatParticipantStateChangedMessage' });

    Object.defineProperty(ChatParticipantStateChangedMessage, '__propInfo', {
        get: function() {
            var pi = {
                'state': { required: true, nullable: false },
                'displayName': { required: true, nullable: false },
                'participantType': { required: true, nullable: false }
            };
            if (ChatMessage.__propInfo) { _util.extend(pi, ChatMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:webChat:chatParticipantStateChangedMessage'] = ChatParticipantStateChangedMessage;

    return ChatParticipantStateChangedMessage;
}());

var $start = (function(){
    function chatStart(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof chatStart.params)) {
            try {
                params = new chatStart.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: chatStart.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(chatStart.method, chatStart.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(chatStart, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/web-chat/start', enumerable: true }
    });

    chatStart.params = (function(){
        _util.inherits(chatStart_params, _util.RequestParams);

        function chatStart_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (!(properties.content instanceof StartChatRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: WebChat.StartChatRequest');
            }

            chatStart_params._super.constructor.apply(this, arguments);
        }

        return chatStart_params;
    })();

    return Object.create(null, {
        chatStart: { value: chatStart, enumerable: true }
    });
})();

var $exit = (function(){
    function chatExit(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof chatExit.params)) {
            try {
                params = new chatExit.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: chatExit.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(chatExit.method, chatExit.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(chatExit, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/web-chat/exit/{participantId}', enumerable: true }
    });

    chatExit.params = (function(){
        _util.inherits(chatExit_params, _util.RequestParams);

        function chatExit_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: participantId');
            }
            if (!_util.hasProp(properties.template, 'participantId')) {
                throw new Error('`properties.template` is missing required property: `participantId`');
            }

            chatExit_params._super.constructor.apply(this, arguments);
        }

        return chatExit_params;
    })();

    return Object.create(null, {
        chatExit: { value: chatExit, enumerable: true }
    });
})();

var $reconnect = (function(){
    function chatReconnect(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof chatReconnect.params)) {
            try {
                params = new chatReconnect.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: chatReconnect.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(chatReconnect.method, chatReconnect.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(chatReconnect, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/web-chat/reconnect', enumerable: true }
    });

    chatReconnect.params = (function(){
        _util.inherits(chatReconnect_params, _util.RequestParams);

        function chatReconnect_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (!(properties.content instanceof ChatReconnectRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: WebChat.ChatReconnectRequest');
            }

            chatReconnect_params._super.constructor.apply(this, arguments);
        }

        return chatReconnect_params;
    })();

    return Object.create(null, {
        chatReconnect: { value: chatReconnect, enumerable: true }
    });
})();

var $typingState = (function(){
    function chatTypingState(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof chatTypingState.params)) {
            try {
                params = new chatTypingState.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: chatTypingState.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(chatTypingState.method, chatTypingState.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(chatTypingState, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/web-chat/typing-state/{participantId}', enumerable: true }
    });

    chatTypingState.params = (function(){
        _util.inherits(chatTypingState_params, _util.RequestParams);

        function chatTypingState_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: participantId');
            }
            if (!_util.hasProp(properties.template, 'participantId')) {
                throw new Error('`properties.template` is missing required property: `participantId`');
            }
            if (!(properties.content instanceof ChatTypingStateRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: WebChat.ChatTypingStateRequest');
            }

            chatTypingState_params._super.constructor.apply(this, arguments);
        }

        return chatTypingState_params;
    })();

    return Object.create(null, {
        chatTypingState: { value: chatTypingState, enumerable: true }
    });
})();

var $sendMessage = (function(){
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
        dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(chatSendMessage.method, chatSendMessage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(chatSendMessage, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/web-chat/send-message/{participantId}', enumerable: true }
    });

    chatSendMessage.params = (function(){
        _util.inherits(chatSendMessage_params, _util.RequestParams);

        function chatSendMessage_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: participantId');
            }
            if (!_util.hasProp(properties.template, 'participantId')) {
                throw new Error('`properties.template` is missing required property: `participantId`');
            }
            if (!(properties.content instanceof ChatSendMessageRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: WebChat.ChatSendMessageRequest');
            }

            chatSendMessage_params._super.constructor.apply(this, arguments);
        }

        return chatSendMessage_params;
    })();

    return Object.create(null, {
        chatSendMessage: { value: chatSendMessage, enumerable: true }
    });
})();

var $file = (function(){
    function chatGetFile(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof chatGetFile.params)) {
            try {
                params = new chatGetFile.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: chatGetFile.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(chatGetFile.method, chatGetFile.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(chatGetFile, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/web-chat/file/{participantId}/{fileGuid}/{fileName}', enumerable: true }
    });

    chatGetFile.params = (function(){
        _util.inherits(chatGetFile_params, _util.RequestParams);

        function chatGetFile_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: participantId, fileGuid, fileName');
            }
            if (!_util.hasProp(properties.template, 'participantId')) {
                throw new Error('`properties.template` is missing required property: `participantId`');
            }
            if (!_util.hasProp(properties.template, 'fileGuid')) {
                throw new Error('`properties.template` is missing required property: `fileGuid`');
            }
            if (!_util.hasProp(properties.template, 'fileName')) {
                throw new Error('`properties.template` is missing required property: `fileName`');
            }

            chatGetFile_params._super.constructor.apply(this, arguments);
        }

        return chatGetFile_params;
    })();

    return Object.create(null, {
        chatGetFile: { value: chatGetFile, enumerable: true }
    });
})();

var $messages = (function(){
    function chatGetMessages(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof chatGetMessages.params)) {
            try {
                params = new chatGetMessages.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: chatGetMessages.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ChatGetMessagesResponse) ? o : new ChatGetMessagesResponse(o); };
        dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(chatGetMessages.method, chatGetMessages.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(chatGetMessages, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/web-chat/messages/{participantId}', enumerable: true }
    });

    chatGetMessages.params = (function(){
        _util.inherits(chatGetMessages_params, _util.RequestParams);

        function chatGetMessages_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: participantId');
            }
            if (!_util.hasProp(properties.template, 'participantId')) {
                throw new Error('`properties.template` is missing required property: `participantId`');
            }

            chatGetMessages_params._super.constructor.apply(this, arguments);
        }

        return chatGetMessages_params;
    })();

    return Object.create(null, {
        chatGetMessages: { value: chatGetMessages, enumerable: true }
    });
})();

exports.ChatParticipantState = ChatParticipantState;
exports.StartChatRequest = StartChatRequest;
exports.StartChatResponse = StartChatResponse;
exports.ChatConnectionMessage = ChatConnectionMessage;
exports.ChatReconnectRequest = ChatReconnectRequest;
exports.ChatTypingStateRequest = ChatTypingStateRequest;
exports.ChatSendMessageRequest = ChatSendMessageRequest;
exports.ChatGetMessagesResponse = ChatGetMessagesResponse;
exports.ChatMessage = ChatMessage;
exports.ChatTextMessage = ChatTextMessage;
exports.ChatTypingIndicatorMessage = ChatTypingIndicatorMessage;
exports.ChatFileMessage = ChatFileMessage;
exports.ChatParticipantStateChangedMessage = ChatParticipantStateChangedMessage;
exports.$start = $start;
exports.$exit = $exit;
exports.$reconnect = $reconnect;
exports.$typingState = $typingState;
exports.$sendMessage = $sendMessage;
exports.$file = $file;
exports.$messages = $messages;
