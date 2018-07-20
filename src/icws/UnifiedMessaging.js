/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var MessageState = (function(){
    var instanceCache = {};
    function MessageState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:messageState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(MessageState, _util.EnumValue);

    Object.defineProperties(MessageState, {
        'Unread': { value: new MessageState(0, 'Unread'), enumerable: true },
        'Read': { value: new MessageState(1, 'Read'), enumerable: true }
    });

    Object.defineProperty(MessageState, '__type', { value: 'urn:inin.com:unifiedMessaging:messageState' });

    _typemap['urn:inin.com:unifiedMessaging:messageState'] = MessageState;

    return MessageState;
}());

var VoicemailPlayStatus = (function(){
    var instanceCache = {};
    function VoicemailPlayStatus(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailPlayStatus' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(VoicemailPlayStatus, _util.EnumValue);

    Object.defineProperties(VoicemailPlayStatus, {
        'Playing': { value: new VoicemailPlayStatus(0, 'Playing'), enumerable: true },
        'Stopped': { value: new VoicemailPlayStatus(1, 'Stopped'), enumerable: true }
    });

    Object.defineProperty(VoicemailPlayStatus, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailPlayStatus' });

    _typemap['urn:inin.com:unifiedMessaging:voicemailPlayStatus'] = VoicemailPlayStatus;

    return VoicemailPlayStatus;
}());

var UnifiedMessage = (function(){
    var hasProps = false;

    function UnifiedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:unifiedMessage' });
        }

        UnifiedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(UnifiedMessage, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UnifiedMessage.prototype, 'unifiedMessageId', {
            get: function() { return this.__prop_unifiedMessageId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UnifiedMessage.unifiedMessageId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_unifiedMessageId = value;
            },
            enumerable: true
        });

        Object.defineProperty(UnifiedMessage.prototype, 'state', {
            get: function() { return this.__prop_state; },
            set: function(value) {
                if (!(value instanceof MessageState)) {
                    try {
                        value = new MessageState(value);
                    } catch (e) {
                        throw new TypeError('Error setting UnifiedMessage.state: ' + e.message);
                    }
                }

                this.__prop_state = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UnifiedMessage, '__type', { value: 'urn:inin.com:unifiedMessaging:unifiedMessage' });

    Object.defineProperty(UnifiedMessage, '__propInfo', {
        get: function() {
            var pi = {
                'unifiedMessageId': { required: true, nullable: false },
                'state': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:unifiedMessage'] = UnifiedMessage;

    return UnifiedMessage;
}());

var Attachment = (function(){
    var hasProps = false;

    function Attachment() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:attachment' });
        }

        Attachment._super.constructor.apply(this, arguments);
    }
    _util.inherits(Attachment, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Attachment.prototype, 'fileUri', {
            get: function() { return this.__prop_fileUri; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Attachment.fileUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fileUri = value;
            },
            enumerable: true
        });

        Object.defineProperty(Attachment.prototype, 'fileName', {
            get: function() { return this.__prop_fileName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Attachment.fileName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fileName = value;
            },
            enumerable: true
        });

        Object.defineProperty(Attachment.prototype, 'mimeType', {
            get: function() { return this.__prop_mimeType; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Attachment.mimeType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mimeType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Attachment, '__type', { value: 'urn:inin.com:unifiedMessaging:attachment' });

    Object.defineProperty(Attachment, '__propInfo', {
        get: function() {
            var pi = {
                'fileUri': { required: true, nullable: false },
                'fileName': { required: true, nullable: false },
                'mimeType': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:attachment'] = Attachment;

    return Attachment;
}());

var UnifiedMessageUpdateRequest = (function(){
    var hasProps = false;

    function UnifiedMessageUpdateRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:unifiedMessageUpdateRequest' });
        }

        UnifiedMessageUpdateRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(UnifiedMessageUpdateRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UnifiedMessageUpdateRequest.prototype, 'state', {
            get: function() { return this.__prop_state; },
            set: function(value) {
                if (!(value instanceof MessageState)) {
                    try {
                        value = new MessageState(value);
                    } catch (e) {
                        throw new TypeError('Error setting UnifiedMessageUpdateRequest.state: ' + e.message);
                    }
                }

                this.__prop_state = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UnifiedMessageUpdateRequest, '__type', { value: 'urn:inin.com:unifiedMessaging:unifiedMessageUpdateRequest' });

    Object.defineProperty(UnifiedMessageUpdateRequest, '__propInfo', {
        get: function() {
            var pi = {
                'state': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:unifiedMessageUpdateRequest'] = UnifiedMessageUpdateRequest;

    return UnifiedMessageUpdateRequest;
}());

var UnifiedMessagePlayOperationRequest = (function(){
    var hasProps = false;

    function UnifiedMessagePlayOperationRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:unifiedMessagePlayOperationRequest' });
        }

        UnifiedMessagePlayOperationRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(UnifiedMessagePlayOperationRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UnifiedMessagePlayOperationRequest.prototype, 'state', {
            get: function() { return this.__prop_state; },
            set: function(value) {
                if (!(value instanceof MessageState)) {
                    try {
                        value = new MessageState(value);
                    } catch (e) {
                        throw new TypeError('Error setting UnifiedMessagePlayOperationRequest.state: ' + e.message);
                    }
                }

                this.__prop_state = value;
            },
            enumerable: true
        });

        Object.defineProperty(UnifiedMessagePlayOperationRequest.prototype, 'playTarget', {
            get: function() { return this.__prop_playTarget; },
            set: function(value) {
                if (!(value instanceof VoicemailPlayOperation || value === void 0)) {
                    try {
                        value = new VoicemailPlayOperation(value);
                    } catch (e) {
                        throw new TypeError('Error setting UnifiedMessagePlayOperationRequest.playTarget: ' + e.message);
                    }
                }

                this.__prop_playTarget = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UnifiedMessagePlayOperationRequest, '__type', { value: 'urn:inin.com:unifiedMessaging:unifiedMessagePlayOperationRequest' });

    Object.defineProperty(UnifiedMessagePlayOperationRequest, '__propInfo', {
        get: function() {
            var pi = {
                'state': { required: true, nullable: false },
                'playTarget': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:unifiedMessagePlayOperationRequest'] = UnifiedMessagePlayOperationRequest;

    return UnifiedMessagePlayOperationRequest;
}());

var VoicemailPlayOperation = (function(){
    var hasProps = false;

    function VoicemailPlayOperation() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailPlayOperation' });
        }

        VoicemailPlayOperation._super.constructor.apply(this, arguments);
    }
    _util.inherits(VoicemailPlayOperation, _util.DataContract);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(VoicemailPlayOperation, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailPlayOperation' });

    Object.defineProperty(VoicemailPlayOperation, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:voicemailPlayOperation'] = VoicemailPlayOperation;

    return VoicemailPlayOperation;
}());

var VoicemailMessagesMessage = (function(){
    var hasProps = false;

    function VoicemailMessagesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailMessagesMessage', enumerable: true });
        }

        VoicemailMessagesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(VoicemailMessagesMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(VoicemailMessagesMessage.prototype, 'voicemailMessagesAdded', {
            get: function() { return this.__prop_voicemailMessagesAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof VoicemailMessageAdded); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new VoicemailMessageAdded(item); });
                    } catch (e) {
                        throw new TypeError('Error setting VoicemailMessagesMessage.voicemailMessagesAdded: ' + e.message);
                    }
                }

                this.__prop_voicemailMessagesAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(VoicemailMessagesMessage.prototype, 'voicemailMessagesChanged', {
            get: function() { return this.__prop_voicemailMessagesChanged; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof VoicemailMessage); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new VoicemailMessage(item); });
                    } catch (e) {
                        throw new TypeError('Error setting VoicemailMessagesMessage.voicemailMessagesChanged: ' + e.message);
                    }
                }

                this.__prop_voicemailMessagesChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(VoicemailMessagesMessage.prototype, 'voicemailMessagesRemoved', {
            get: function() { return this.__prop_voicemailMessagesRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for VoicemailMessagesMessage.voicemailMessagesRemoved, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_voicemailMessagesRemoved = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VoicemailMessagesMessage, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailMessagesMessage' });

    Object.defineProperty(VoicemailMessagesMessage, '__propInfo', {
        get: function() {
            var pi = {
                'voicemailMessagesAdded': { required: false, nullable: false },
                'voicemailMessagesChanged': { required: false, nullable: false },
                'voicemailMessagesRemoved': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:voicemailMessagesMessage'] = VoicemailMessagesMessage;

    return VoicemailMessagesMessage;
}());

var UnifiedMessageAdded = (function(){
    var hasProps = false;

    function UnifiedMessageAdded() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:unifiedMessageAdded', enumerable: true });
        }

        UnifiedMessageAdded._super.constructor.apply(this, arguments);
    }
    _util.inherits(UnifiedMessageAdded, UnifiedMessage);

    function defineProps() {
        Object.defineProperty(UnifiedMessageAdded.prototype, 'dateReceived', {
            get: function() { return this.__prop_dateReceived; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for UnifiedMessageAdded.dateReceived, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dateReceived = value;
            },
            enumerable: true
        });

        Object.defineProperty(UnifiedMessageAdded.prototype, 'from', {
            get: function() { return this.__prop_from; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UnifiedMessageAdded.from, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_from = value;
            },
            enumerable: true
        });

        Object.defineProperty(UnifiedMessageAdded.prototype, 'subject', {
            get: function() { return this.__prop_subject; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UnifiedMessageAdded.subject, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subject = value;
            },
            enumerable: true
        });

        Object.defineProperty(UnifiedMessageAdded.prototype, 'attachments', {
            get: function() { return this.__prop_attachments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Attachment); }))) {
                    try {
                        value = value.map(function(item){ return new Attachment(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UnifiedMessageAdded.attachments: ' + e.message);
                    }
                }

                this.__prop_attachments = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UnifiedMessageAdded, '__type', { value: 'urn:inin.com:unifiedMessaging:unifiedMessageAdded' });

    Object.defineProperty(UnifiedMessageAdded, '__propInfo', {
        get: function() {
            var pi = {
                'dateReceived': { required: true, nullable: false },
                'from': { required: true, nullable: false },
                'subject': { required: true, nullable: false },
                'attachments': { required: true, nullable: false }
            };
            if (UnifiedMessage.__propInfo) { _util.extend(pi, UnifiedMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:unifiedMessageAdded'] = UnifiedMessageAdded;

    return UnifiedMessageAdded;
}());

var FaxMessage = (function(){
    var hasProps = false;

    function FaxMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:faxMessage', enumerable: true });
        }

        FaxMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(FaxMessage, UnifiedMessage);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(FaxMessage, '__type', { value: 'urn:inin.com:unifiedMessaging:faxMessage' });

    Object.defineProperty(FaxMessage, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (UnifiedMessage.__propInfo) { _util.extend(pi, UnifiedMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:faxMessage'] = FaxMessage;

    return FaxMessage;
}());

var VoicemailMessage = (function(){
    var hasProps = false;

    function VoicemailMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailMessage', enumerable: true });
        }

        VoicemailMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(VoicemailMessage, UnifiedMessage);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(VoicemailMessage, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailMessage' });

    Object.defineProperty(VoicemailMessage, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (UnifiedMessage.__propInfo) { _util.extend(pi, UnifiedMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:voicemailMessage'] = VoicemailMessage;

    return VoicemailMessage;
}());

var MwiMessage = (function(){
    var hasProps = false;

    function MwiMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:mwiMessage', enumerable: true });
        }

        MwiMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(MwiMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(MwiMessage.prototype, 'messagesWaiting', {
            get: function() { return this.__prop_messagesWaiting; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for MwiMessage.messagesWaiting, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_messagesWaiting = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MwiMessage, '__type', { value: 'urn:inin.com:unifiedMessaging:mwiMessage' });

    Object.defineProperty(MwiMessage, '__propInfo', {
        get: function() {
            var pi = {
                'messagesWaiting': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:mwiMessage'] = MwiMessage;

    return MwiMessage;
}());

var VoicemailPlayStatusMessage = (function(){
    var hasProps = false;

    function VoicemailPlayStatusMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailPlayStatusMessage', enumerable: true });
        }

        VoicemailPlayStatusMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(VoicemailPlayStatusMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(VoicemailPlayStatusMessage.prototype, 'unifiedMessageId', {
            get: function() { return this.__prop_unifiedMessageId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for VoicemailPlayStatusMessage.unifiedMessageId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_unifiedMessageId = value;
            },
            enumerable: true
        });

        Object.defineProperty(VoicemailPlayStatusMessage.prototype, 'playStatus', {
            get: function() { return this.__prop_playStatus; },
            set: function(value) {
                if (!(value instanceof VoicemailPlayStatus || value === void 0)) {
                    try {
                        value = new VoicemailPlayStatus(value);
                    } catch (e) {
                        throw new TypeError('Error setting VoicemailPlayStatusMessage.playStatus: ' + e.message);
                    }
                }

                this.__prop_playStatus = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VoicemailPlayStatusMessage, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailPlayStatusMessage' });

    Object.defineProperty(VoicemailPlayStatusMessage, '__propInfo', {
        get: function() {
            var pi = {
                'unifiedMessageId': { required: true, nullable: false },
                'playStatus': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:voicemailPlayStatusMessage'] = VoicemailPlayStatusMessage;

    return VoicemailPlayStatusMessage;
}());

var FaxMessagesMessage = (function(){
    var hasProps = false;

    function FaxMessagesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:faxMessagesMessage', enumerable: true });
        }

        FaxMessagesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(FaxMessagesMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(FaxMessagesMessage.prototype, 'faxMessagesAdded', {
            get: function() { return this.__prop_faxMessagesAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FaxMessageAdded); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new FaxMessageAdded(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FaxMessagesMessage.faxMessagesAdded: ' + e.message);
                    }
                }

                this.__prop_faxMessagesAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(FaxMessagesMessage.prototype, 'faxMessagesChanged', {
            get: function() { return this.__prop_faxMessagesChanged; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FaxMessage); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new FaxMessage(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FaxMessagesMessage.faxMessagesChanged: ' + e.message);
                    }
                }

                this.__prop_faxMessagesChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(FaxMessagesMessage.prototype, 'faxMessagesRemoved', {
            get: function() { return this.__prop_faxMessagesRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for FaxMessagesMessage.faxMessagesRemoved, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_faxMessagesRemoved = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FaxMessagesMessage, '__type', { value: 'urn:inin.com:unifiedMessaging:faxMessagesMessage' });

    Object.defineProperty(FaxMessagesMessage, '__propInfo', {
        get: function() {
            var pi = {
                'faxMessagesAdded': { required: false, nullable: false },
                'faxMessagesChanged': { required: false, nullable: false },
                'faxMessagesRemoved': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:faxMessagesMessage'] = FaxMessagesMessage;

    return FaxMessagesMessage;
}());

var VoicemailPlayTarget = (function(){
    var hasProps = false;

    function VoicemailPlayTarget() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailPlayTarget', enumerable: true });
        }

        VoicemailPlayTarget._super.constructor.apply(this, arguments);
    }
    _util.inherits(VoicemailPlayTarget, VoicemailPlayOperation);

    function defineProps() {
        Object.defineProperty(VoicemailPlayTarget.prototype, 'target', {
            get: function() { return this.__prop_target; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for VoicemailPlayTarget.target, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_target = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VoicemailPlayTarget, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailPlayTarget' });

    Object.defineProperty(VoicemailPlayTarget, '__propInfo', {
        get: function() {
            var pi = {
                'target': { required: true, nullable: false }
            };
            if (VoicemailPlayOperation.__propInfo) { _util.extend(pi, VoicemailPlayOperation.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:voicemailPlayTarget'] = VoicemailPlayTarget;

    return VoicemailPlayTarget;
}());

var CurrentStation = (function(){
    var hasProps = false;

    function CurrentStation() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:currentStation', enumerable: true });
        }

        CurrentStation._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrentStation, VoicemailPlayOperation);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(CurrentStation, '__type', { value: 'urn:inin.com:unifiedMessaging:currentStation' });

    Object.defineProperty(CurrentStation, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (VoicemailPlayOperation.__propInfo) { _util.extend(pi, VoicemailPlayOperation.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:currentStation'] = CurrentStation;

    return CurrentStation;
}());

var VoicemailMessageSubscriptionStateMessage = (function(){
    var hasProps = false;

    function VoicemailMessageSubscriptionStateMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailMessageSubscriptionStateMessage', enumerable: true });
        }

        VoicemailMessageSubscriptionStateMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(VoicemailMessageSubscriptionStateMessage, Messaging.SubscriptionStateMessage);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(VoicemailMessageSubscriptionStateMessage, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailMessageSubscriptionStateMessage' });

    Object.defineProperty(VoicemailMessageSubscriptionStateMessage, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (Messaging.SubscriptionStateMessage.__propInfo) { _util.extend(pi, Messaging.SubscriptionStateMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:voicemailMessageSubscriptionStateMessage'] = VoicemailMessageSubscriptionStateMessage;

    return VoicemailMessageSubscriptionStateMessage;
}());

var FaxMessageSubscriptionStateMessage = (function(){
    var hasProps = false;

    function FaxMessageSubscriptionStateMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:faxMessageSubscriptionStateMessage', enumerable: true });
        }

        FaxMessageSubscriptionStateMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(FaxMessageSubscriptionStateMessage, Messaging.SubscriptionStateMessage);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(FaxMessageSubscriptionStateMessage, '__type', { value: 'urn:inin.com:unifiedMessaging:faxMessageSubscriptionStateMessage' });

    Object.defineProperty(FaxMessageSubscriptionStateMessage, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (Messaging.SubscriptionStateMessage.__propInfo) { _util.extend(pi, Messaging.SubscriptionStateMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:faxMessageSubscriptionStateMessage'] = FaxMessageSubscriptionStateMessage;

    return FaxMessageSubscriptionStateMessage;
}());

var MwiSubscriptionStateMessage = (function(){
    var hasProps = false;

    function MwiSubscriptionStateMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:mwiSubscriptionStateMessage', enumerable: true });
        }

        MwiSubscriptionStateMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(MwiSubscriptionStateMessage, Messaging.SubscriptionStateMessage);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(MwiSubscriptionStateMessage, '__type', { value: 'urn:inin.com:unifiedMessaging:mwiSubscriptionStateMessage' });

    Object.defineProperty(MwiSubscriptionStateMessage, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (Messaging.SubscriptionStateMessage.__propInfo) { _util.extend(pi, Messaging.SubscriptionStateMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:mwiSubscriptionStateMessage'] = MwiSubscriptionStateMessage;

    return MwiSubscriptionStateMessage;
}());

var VoicemailMessageAdded = (function(){
    var hasProps = false;

    function VoicemailMessageAdded() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailMessageAdded', enumerable: true });
        }

        VoicemailMessageAdded._super.constructor.apply(this, arguments);
    }
    _util.inherits(VoicemailMessageAdded, UnifiedMessageAdded);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(VoicemailMessageAdded, '__type', { value: 'urn:inin.com:unifiedMessaging:voicemailMessageAdded' });

    Object.defineProperty(VoicemailMessageAdded, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (UnifiedMessageAdded.__propInfo) { _util.extend(pi, UnifiedMessageAdded.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:voicemailMessageAdded'] = VoicemailMessageAdded;

    return VoicemailMessageAdded;
}());

var FaxMessageAdded = (function(){
    var hasProps = false;

    function FaxMessageAdded() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:faxMessageAdded', enumerable: true });
        }

        FaxMessageAdded._super.constructor.apply(this, arguments);
    }
    _util.inherits(FaxMessageAdded, UnifiedMessageAdded);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(FaxMessageAdded, '__type', { value: 'urn:inin.com:unifiedMessaging:faxMessageAdded' });

    Object.defineProperty(FaxMessageAdded, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (UnifiedMessageAdded.__propInfo) { _util.extend(pi, UnifiedMessageAdded.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:faxMessageAdded'] = FaxMessageAdded;

    return FaxMessageAdded;
}());

var Station = (function(){
    var hasProps = false;

    function Station() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:station', enumerable: true });
        }

        Station._super.constructor.apply(this, arguments);
    }
    _util.inherits(Station, VoicemailPlayTarget);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(Station, '__type', { value: 'urn:inin.com:unifiedMessaging:station' });

    Object.defineProperty(Station, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (VoicemailPlayTarget.__propInfo) { _util.extend(pi, VoicemailPlayTarget.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:station'] = Station;

    return Station;
}());

var PhoneNumber = (function(){
    var hasProps = false;

    function PhoneNumber() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:unifiedMessaging:phoneNumber', enumerable: true });
        }

        PhoneNumber._super.constructor.apply(this, arguments);
    }
    _util.inherits(PhoneNumber, VoicemailPlayTarget);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(PhoneNumber, '__type', { value: 'urn:inin.com:unifiedMessaging:phoneNumber' });

    Object.defineProperty(PhoneNumber, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (VoicemailPlayTarget.__propInfo) { _util.extend(pi, VoicemailPlayTarget.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:unifiedMessaging:phoneNumber'] = PhoneNumber;

    return PhoneNumber;
}());

var $unifiedMessaging = (function(){
    function updateMessage(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateMessage.params)) {
            try {
                params = new updateMessage.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateMessage.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateMessage.method, updateMessage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateMessage, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/unified-messaging/{unifiedMessageId}', enumerable: true }
    });

    updateMessage.params = (function(){
        _util.inherits(updateMessage_params, _util.RequestParams);

        function updateMessage_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, unifiedMessageId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'unifiedMessageId')) {
                throw new Error('`properties.template` is missing required property: `unifiedMessageId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof UnifiedMessageUpdateRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: UnifiedMessaging.UnifiedMessageUpdateRequest');
            }

            updateMessage_params._super.constructor.apply(this, arguments);
        }

        return updateMessage_params;
    })();

    function deleteMessage(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteMessage.params)) {
            try {
                params = new deleteMessage.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteMessage.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteMessage.method, deleteMessage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteMessage, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/unified-messaging/{unifiedMessageId}', enumerable: true }
    });

    deleteMessage.params = (function(){
        _util.inherits(deleteMessage_params, _util.RequestParams);

        function deleteMessage_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, unifiedMessageId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'unifiedMessageId')) {
                throw new Error('`properties.template` is missing required property: `unifiedMessageId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteMessage_params._super.constructor.apply(this, arguments);
        }

        return deleteMessage_params;
    })();

    return Object.create(null, {
        updateMessage: { value: updateMessage, enumerable: true },
        deleteMessage: { value: deleteMessage, enumerable: true }
    });
})();

exports.MessageState = MessageState;
exports.VoicemailPlayStatus = VoicemailPlayStatus;
exports.VoicemailMessageSubscriptionStateMessage = VoicemailMessageSubscriptionStateMessage;
exports.FaxMessageSubscriptionStateMessage = FaxMessageSubscriptionStateMessage;
exports.MwiSubscriptionStateMessage = MwiSubscriptionStateMessage;
exports.VoicemailMessagesMessage = VoicemailMessagesMessage;
exports.VoicemailMessageAdded = VoicemailMessageAdded;
exports.UnifiedMessageAdded = UnifiedMessageAdded;
exports.UnifiedMessage = UnifiedMessage;
exports.FaxMessage = FaxMessage;
exports.VoicemailMessage = VoicemailMessage;
exports.Attachment = Attachment;
exports.FaxMessageAdded = FaxMessageAdded;
exports.MwiMessage = MwiMessage;
exports.VoicemailPlayStatusMessage = VoicemailPlayStatusMessage;
exports.FaxMessagesMessage = FaxMessagesMessage;
exports.UnifiedMessageUpdateRequest = UnifiedMessageUpdateRequest;
exports.UnifiedMessagePlayOperationRequest = UnifiedMessagePlayOperationRequest;
exports.VoicemailPlayOperation = VoicemailPlayOperation;
exports.VoicemailPlayTarget = VoicemailPlayTarget;
exports.Station = Station;
exports.PhoneNumber = PhoneNumber;
exports.CurrentStation = CurrentStation;
exports.$unifiedMessaging = $unifiedMessaging;
