/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Queues = require('./Queues');
var Common = require('./Common');
var Interactions_Assistance = require('./Interactions.Assistance');

var InteractionAlertTypes = (function(){
    var instanceCache = {};
    function InteractionAlertTypes(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionAlertTypes' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(InteractionAlertTypes, _util.EnumValue);

    Object.defineProperties(InteractionAlertTypes, {
        'None': { value: new InteractionAlertTypes(0, 'None'), enumerable: true },
        'User': { value: new InteractionAlertTypes(1, 'User'), enumerable: true },
        'Station': { value: new InteractionAlertTypes(2, 'Station'), enumerable: true },
        'Workgroup': { value: new InteractionAlertTypes(3, 'Workgroup'), enumerable: true },
        'StationGroup': { value: new InteractionAlertTypes(4, 'StationGroup'), enumerable: true },
        'AcdUser': { value: new InteractionAlertTypes(5, 'AcdUser'), enumerable: true },
        'AcdStation': { value: new InteractionAlertTypes(6, 'AcdStation'), enumerable: true }
    });

    Object.defineProperty(InteractionAlertTypes, '__type', { value: 'urn:inin.com:interactions:interactionAlertTypes' });

    _typemap['urn:inin.com:interactions:interactionAlertTypes'] = InteractionAlertTypes;

    return InteractionAlertTypes;
}());

var InteractionAlertActions = (function(){
    var instanceCache = {};
    function InteractionAlertActions(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionAlertActions' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(InteractionAlertActions, _util.EnumValue);

    Object.defineProperties(InteractionAlertActions, {
        'None': { value: new InteractionAlertActions(0, 'None'), enumerable: true },
        'StartAlerting': { value: new InteractionAlertActions(1, 'StartAlerting'), enumerable: true },
        'StopAlerting': { value: new InteractionAlertActions(2, 'StopAlerting'), enumerable: true }
    });

    Object.defineProperty(InteractionAlertActions, '__type', { value: 'urn:inin.com:interactions:interactionAlertActions' });

    _typemap['urn:inin.com:interactions:interactionAlertActions'] = InteractionAlertActions;

    return InteractionAlertActions;
}());

var InteractionDirection = (function(){
    var instanceCache = {};
    function InteractionDirection(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionDirection' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(InteractionDirection, _util.EnumValue);

    Object.defineProperties(InteractionDirection, {
        'None': { value: new InteractionDirection(0, 'None'), enumerable: true },
        'Incoming': { value: new InteractionDirection(1, 'Incoming'), enumerable: true },
        'Outgoing': { value: new InteractionDirection(2, 'Outgoing'), enumerable: true }
    });

    Object.defineProperty(InteractionDirection, '__type', { value: 'urn:inin.com:interactions:interactionDirection' });

    _typemap['urn:inin.com:interactions:interactionDirection'] = InteractionDirection;

    return InteractionDirection;
}());

var InteractionHistoryStatusType = (function(){
    var instanceCache = {};
    function InteractionHistoryStatusType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionHistoryStatusType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(InteractionHistoryStatusType, _util.EnumValue);

    Object.defineProperties(InteractionHistoryStatusType, {
        'None': { value: new InteractionHistoryStatusType(0, 'None'), enumerable: true },
        'Connected': { value: new InteractionHistoryStatusType(1, 'Connected'), enumerable: true },
        'Forwarded': { value: new InteractionHistoryStatusType(2, 'Forwarded'), enumerable: true }
    });

    Object.defineProperty(InteractionHistoryStatusType, '__type', { value: 'urn:inin.com:interactions:interactionHistoryStatusType' });

    _typemap['urn:inin.com:interactions:interactionHistoryStatusType'] = InteractionHistoryStatusType;

    return InteractionHistoryStatusType;
}());

var CallMadeStorageTypes = (function(){
    var instanceCache = {};
    function CallMadeStorageTypes(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:callMadeStorageTypes' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(CallMadeStorageTypes, _util.EnumValue);

    Object.defineProperties(CallMadeStorageTypes, {
        'None': { value: new CallMadeStorageTypes(0, 'None'), enumerable: true },
        'Allocated': { value: new CallMadeStorageTypes(1, 'Allocated'), enumerable: true },
        'Started': { value: new CallMadeStorageTypes(2, 'Started'), enumerable: true },
        'Completed': { value: new CallMadeStorageTypes(3, 'Completed'), enumerable: true }
    });

    Object.defineProperty(CallMadeStorageTypes, '__type', { value: 'urn:inin.com:interactions:callMadeStorageTypes' });

    _typemap['urn:inin.com:interactions:callMadeStorageTypes'] = CallMadeStorageTypes;

    return CallMadeStorageTypes;
}());

var InteractionState = (function(){
    var instanceCache = {};
    function InteractionState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(InteractionState, _util.EnumValue);

    Object.defineProperties(InteractionState, {
        'None': { value: new InteractionState(0, 'None'), enumerable: true },
        'Alerting': { value: new InteractionState(1, 'Alerting'), enumerable: true },
        'Connected': { value: new InteractionState(2, 'Connected'), enumerable: true },
        'Held': { value: new InteractionState(3, 'Held'), enumerable: true },
        'Messaging': { value: new InteractionState(4, 'Messaging'), enumerable: true },
        'Offering': { value: new InteractionState(5, 'Offering'), enumerable: true },
        'Parked': { value: new InteractionState(6, 'Parked'), enumerable: true },
        'Proceeding': { value: new InteractionState(7, 'Proceeding'), enumerable: true },
        'Suspended': { value: new InteractionState(8, 'Suspended'), enumerable: true },
        'System': { value: new InteractionState(9, 'System'), enumerable: true },
        'InternalDisconnect': { value: new InteractionState(10, 'InternalDisconnect'), enumerable: true },
        'ExternalDisconnect': { value: new InteractionState(11, 'ExternalDisconnect'), enumerable: true }
    });

    Object.defineProperty(InteractionState, '__type', { value: 'urn:inin.com:interactions:interactionState' });

    _typemap['urn:inin.com:interactions:interactionState'] = InteractionState;

    return InteractionState;
}());

var InteractionPartyType = (function(){
    var instanceCache = {};
    function InteractionPartyType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionPartyType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(InteractionPartyType, _util.EnumValue);

    Object.defineProperties(InteractionPartyType, {
        'None': { value: new InteractionPartyType(0, 'None'), enumerable: true },
        'Internal': { value: new InteractionPartyType(1, 'Internal'), enumerable: true },
        'External': { value: new InteractionPartyType(2, 'External'), enumerable: true }
    });

    Object.defineProperty(InteractionPartyType, '__type', { value: 'urn:inin.com:interactions:interactionPartyType' });

    _typemap['urn:inin.com:interactions:interactionPartyType'] = InteractionPartyType;

    return InteractionPartyType;
}());

var AppendMode = (function(){
    var instanceCache = {};
    function AppendMode(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:appendMode' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(AppendMode, _util.EnumValue);

    Object.defineProperties(AppendMode, {
        'Append': { value: new AppendMode(1, 'Append'), enumerable: true },
        'AppendWithSeperator': { value: new AppendMode(2, 'AppendWithSeperator'), enumerable: true }
    });

    Object.defineProperty(AppendMode, '__type', { value: 'urn:inin.com:interactions:appendMode' });

    _typemap['urn:inin.com:interactions:appendMode'] = AppendMode;

    return AppendMode;
}());

var SecurePauseType = (function(){
    var instanceCache = {};
    function SecurePauseType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:securePauseType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(SecurePauseType, _util.EnumValue);

    Object.defineProperties(SecurePauseType, {
        'PauseWithDefaultTimeout': { value: new SecurePauseType(1, 'PauseWithDefaultTimeout'), enumerable: true },
        'PauseWithInfiniteTimeout': { value: new SecurePauseType(2, 'PauseWithInfiniteTimeout'), enumerable: true },
        'PauseWithSpecifiedTimeout': { value: new SecurePauseType(3, 'PauseWithSpecifiedTimeout'), enumerable: true },
        'ResumeRecording': { value: new SecurePauseType(4, 'ResumeRecording'), enumerable: true }
    });

    Object.defineProperty(SecurePauseType, '__type', { value: 'urn:inin.com:interactions:securePauseType' });

    _typemap['urn:inin.com:interactions:securePauseType'] = SecurePauseType;

    return SecurePauseType;
}());

var InteractionAlertDetails = (function(){
    var hasProps = false;

    function InteractionAlertDetails() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionAlertDetails' });
        }

        InteractionAlertDetails._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionAlertDetails, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionAlertDetails.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionAlertDetails.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionAlertDetails.prototype, 'interactionType', {
            get: function() { return this.__prop_interactionType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionAlertDetails.interactionType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionType = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionAlertDetails.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionAlertDetails.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionAlertDetails.prototype, 'address', {
            get: function() { return this.__prop_address; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionAlertDetails.address, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_address = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionAlertDetails.prototype, 'alertType', {
            get: function() { return this.__prop_alertType; },
            set: function(value) {
                if (!(value instanceof InteractionAlertTypes)) {
                    try {
                        value = new InteractionAlertTypes(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionAlertDetails.alertType: ' + e.message);
                    }
                }

                this.__prop_alertType = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionAlertDetails.prototype, 'alertAction', {
            get: function() { return this.__prop_alertAction; },
            set: function(value) {
                if (!(value instanceof InteractionAlertActions)) {
                    try {
                        value = new InteractionAlertActions(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionAlertDetails.alertAction: ' + e.message);
                    }
                }

                this.__prop_alertAction = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionAlertDetails.prototype, 'autoAnswer', {
            get: function() { return this.__prop_autoAnswer; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for InteractionAlertDetails.autoAnswer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_autoAnswer = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionAlertDetails.prototype, 'monitoredQueue', {
            get: function() { return this.__prop_monitoredQueue; },
            set: function(value) {
                if (!(value instanceof Queues.QueueId || value === void 0)) {
                    try {
                        value = new Queues.QueueId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionAlertDetails.monitoredQueue: ' + e.message);
                    }
                }

                this.__prop_monitoredQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionAlertDetails.prototype, 'attributes', {
            get: function() { return this.__prop_attributes; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }) || value === void 0)) {
                    throw new TypeError('Expected type String{} for InteractionAlertDetails.attributes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attributes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionAlertDetails, '__type', { value: 'urn:inin.com:interactions:interactionAlertDetails' });

    Object.defineProperty(InteractionAlertDetails, '__propInfo', {
        get: function() {
            var pi = {
                'interactionId': { required: true, nullable: false },
                'interactionType': { required: true, nullable: false },
                'name': { required: true, nullable: false },
                'address': { required: true, nullable: false },
                'alertType': { required: true, nullable: false },
                'alertAction': { required: true, nullable: false },
                'autoAnswer': { required: true, nullable: false },
                'monitoredQueue': { required: false, nullable: false },
                'attributes': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:interactionAlertDetails'] = InteractionAlertDetails;

    return InteractionAlertDetails;
}());

var HistoryItem = (function(){
    var hasProps = false;

    function HistoryItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:historyItem' });
        }

        HistoryItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(HistoryItem, _util.DataContract);

    function defineProps() {
        Object.defineProperty(HistoryItem.prototype, 'initiationTime', {
            get: function() { return this.__prop_initiationTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for HistoryItem.initiationTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initiationTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(HistoryItem.prototype, 'direction', {
            get: function() { return this.__prop_direction; },
            set: function(value) {
                if (!(value instanceof InteractionDirection || value === void 0)) {
                    try {
                        value = new InteractionDirection(value);
                    } catch (e) {
                        throw new TypeError('Error setting HistoryItem.direction: ' + e.message);
                    }
                }

                this.__prop_direction = value;
            },
            enumerable: true
        });

        Object.defineProperty(HistoryItem.prototype, 'terminationTime', {
            get: function() { return this.__prop_terminationTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for HistoryItem.terminationTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_terminationTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(HistoryItem.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for HistoryItem.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(HistoryItem.prototype, 'log', {
            get: function() { return this.__prop_log; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for HistoryItem.log, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_log = value;
            },
            enumerable: true
        });

        Object.defineProperty(HistoryItem.prototype, 'interactionHistoryStatus', {
            get: function() { return this.__prop_interactionHistoryStatus; },
            set: function(value) {
                if (!(value instanceof InteractionHistoryStatusType || value === void 0)) {
                    try {
                        value = new InteractionHistoryStatusType(value);
                    } catch (e) {
                        throw new TypeError('Error setting HistoryItem.interactionHistoryStatus: ' + e.message);
                    }
                }

                this.__prop_interactionHistoryStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(HistoryItem.prototype, 'localAddress', {
            get: function() { return this.__prop_localAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for HistoryItem.localAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_localAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(HistoryItem.prototype, 'localId', {
            get: function() { return this.__prop_localId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for HistoryItem.localId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_localId = value;
            },
            enumerable: true
        });

        Object.defineProperty(HistoryItem.prototype, 'localName', {
            get: function() { return this.__prop_localName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for HistoryItem.localName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_localName = value;
            },
            enumerable: true
        });

        Object.defineProperty(HistoryItem.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for HistoryItem.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(HistoryItem.prototype, 'remoteAddress', {
            get: function() { return this.__prop_remoteAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for HistoryItem.remoteAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remoteAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(HistoryItem.prototype, 'remoteId', {
            get: function() { return this.__prop_remoteId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for HistoryItem.remoteId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remoteId = value;
            },
            enumerable: true
        });

        Object.defineProperty(HistoryItem.prototype, 'remoteName', {
            get: function() { return this.__prop_remoteName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for HistoryItem.remoteName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remoteName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(HistoryItem, '__type', { value: 'urn:inin.com:interactions:historyItem' });

    Object.defineProperty(HistoryItem, '__propInfo', {
        get: function() {
            var pi = {
                'initiationTime': { required: false, nullable: false },
                'direction': { required: false, nullable: false },
                'terminationTime': { required: false, nullable: false },
                'interactionId': { required: false, nullable: false },
                'log': { required: false, nullable: false },
                'interactionHistoryStatus': { required: false, nullable: false },
                'localAddress': { required: false, nullable: false },
                'localId': { required: false, nullable: false },
                'localName': { required: false, nullable: false },
                'notes': { required: false, nullable: false },
                'remoteAddress': { required: false, nullable: false },
                'remoteId': { required: false, nullable: false },
                'remoteName': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:historyItem'] = HistoryItem;

    return HistoryItem;
}());

var ConsultTransferAudience = (function(){
    var hasProps = false;

    function ConsultTransferAudience() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:consultTransferAudience' });
        }

        ConsultTransferAudience._super.constructor.apply(this, arguments);
    }
    _util.inherits(ConsultTransferAudience, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ConsultTransferAudience.prototype, 'originalParty', {
            get: function() { return this.__prop_originalParty; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ConsultTransferAudience.originalParty, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_originalParty = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConsultTransferAudience.prototype, 'consultedParty', {
            get: function() { return this.__prop_consultedParty; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ConsultTransferAudience.consultedParty, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_consultedParty = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ConsultTransferAudience, '__type', { value: 'urn:inin.com:interactions:consultTransferAudience' });

    Object.defineProperty(ConsultTransferAudience, '__propInfo', {
        get: function() {
            var pi = {
                'originalParty': { required: false, nullable: false },
                'consultedParty': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:consultTransferAudience'] = ConsultTransferAudience;

    return ConsultTransferAudience;
}());

var CreateInteractionParameters = (function(){
    var hasProps = false;

    function CreateInteractionParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:createInteractionParameters' });
        }

        CreateInteractionParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateInteractionParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreateInteractionParameters.prototype, 'additionalAttributes', {
            get: function() { return this.__prop_additionalAttributes; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }) || value === void 0)) {
                    throw new TypeError('Expected type String{} for CreateInteractionParameters.additionalAttributes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_additionalAttributes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateInteractionParameters, '__type', { value: 'urn:inin.com:interactions:createInteractionParameters' });

    Object.defineProperty(CreateInteractionParameters, '__propInfo', {
        get: function() {
            var pi = {
                'additionalAttributes': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:createInteractionParameters'] = CreateInteractionParameters;

    return CreateInteractionParameters;
}());

var InteractionCreated = (function(){
    var hasProps = false;

    function InteractionCreated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionCreated' });
        }

        InteractionCreated._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionCreated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionCreated.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionCreated.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionCreated, '__type', { value: 'urn:inin.com:interactions:interactionCreated' });

    Object.defineProperty(InteractionCreated, '__propInfo', {
        get: function() {
            var pi = {
                'interactionId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:interactionCreated'] = InteractionCreated;

    return InteractionCreated;
}());

var InteractionAttributes = (function(){
    var hasProps = false;

    function InteractionAttributes() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionAttributes' });
        }

        InteractionAttributes._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionAttributes, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionAttributes.prototype, 'attributes', {
            get: function() { return this.__prop_attributes; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }))) {
                    throw new TypeError('Expected type String{} for InteractionAttributes.attributes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attributes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionAttributes, '__type', { value: 'urn:inin.com:interactions:interactionAttributes' });

    Object.defineProperty(InteractionAttributes, '__propInfo', {
        get: function() {
            var pi = {
                'attributes': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:interactionAttributes'] = InteractionAttributes;

    return InteractionAttributes;
}());

var InteractionAttributesUpdate = (function(){
    var hasProps = false;

    function InteractionAttributesUpdate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionAttributesUpdate' });
        }

        InteractionAttributesUpdate._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionAttributesUpdate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionAttributesUpdate.prototype, 'attributes', {
            get: function() { return this.__prop_attributes; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }))) {
                    throw new TypeError('Expected type String{} for InteractionAttributesUpdate.attributes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionAttributesUpdate.prototype, 'appendMode', {
            get: function() { return this.__prop_appendMode; },
            set: function(value) {
                if (!(value instanceof AppendMode || value === void 0)) {
                    try {
                        value = new AppendMode(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionAttributesUpdate.appendMode: ' + e.message);
                    }
                }

                this.__prop_appendMode = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionAttributesUpdate, '__type', { value: 'urn:inin.com:interactions:interactionAttributesUpdate' });

    Object.defineProperty(InteractionAttributesUpdate, '__propInfo', {
        get: function() {
            var pi = {
                'attributes': { required: true, nullable: false },
                'appendMode': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:interactionAttributesUpdate'] = InteractionAttributesUpdate;

    return InteractionAttributesUpdate;
}());

var TransferParameters = (function(){
    var hasProps = false;

    function TransferParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:transferParameters' });
        }

        TransferParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(TransferParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TransferParameters.prototype, 'target', {
            get: function() { return this.__prop_target; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for TransferParameters.target, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_target = value;
            },
            enumerable: true
        });

        Object.defineProperty(TransferParameters.prototype, 'queueID', {
            get: function() { return this.__prop_queueID; },
            set: function(value) {
                if (!(value instanceof Queues.QueueId || value === void 0)) {
                    try {
                        value = new Queues.QueueId(value);
                    } catch (e) {
                        throw new TypeError('Error setting TransferParameters.queueID: ' + e.message);
                    }
                }

                this.__prop_queueID = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TransferParameters, '__type', { value: 'urn:inin.com:interactions:transferParameters' });

    Object.defineProperty(TransferParameters, '__propInfo', {
        get: function() {
            var pi = {
                'target': { required: false, nullable: false },
                'queueID': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:transferParameters'] = TransferParameters;

    return TransferParameters;
}());

var CoachParameters = (function(){
    var hasProps = false;

    function CoachParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:coachParameters' });
        }

        CoachParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(CoachParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CoachParameters.prototype, 'on', {
            get: function() { return this.__prop_on; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for CoachParameters.on, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_on = value;
            },
            enumerable: true
        });

        Object.defineProperty(CoachParameters.prototype, 'supervisor', {
            get: function() { return this.__prop_supervisor; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for CoachParameters.supervisor, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_supervisor = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CoachParameters, '__type', { value: 'urn:inin.com:interactions:coachParameters' });

    Object.defineProperty(CoachParameters, '__propInfo', {
        get: function() {
            var pi = {
                'on': { required: true, nullable: false },
                'supervisor': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:coachParameters'] = CoachParameters;

    return CoachParameters;
}());

var CreateConsultParameters = (function(){
    var hasProps = false;

    function CreateConsultParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:createConsultParameters' });
        }

        CreateConsultParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateConsultParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreateConsultParameters.prototype, 'target', {
            get: function() { return this.__prop_target; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateConsultParameters.target, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_target = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateConsultParameters.prototype, 'queueID', {
            get: function() { return this.__prop_queueID; },
            set: function(value) {
                if (!(value instanceof Queues.QueueId || value === void 0)) {
                    try {
                        value = new Queues.QueueId(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateConsultParameters.queueID: ' + e.message);
                    }
                }

                this.__prop_queueID = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateConsultParameters.prototype, 'callMadeStage', {
            get: function() { return this.__prop_callMadeStage; },
            set: function(value) {
                if (!(value instanceof CallMadeStorageTypes || value === void 0)) {
                    try {
                        value = new CallMadeStorageTypes(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateConsultParameters.callMadeStage: ' + e.message);
                    }
                }

                this.__prop_callMadeStage = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateConsultParameters.prototype, 'additionalAttributes', {
            get: function() { return this.__prop_additionalAttributes; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }) || value === void 0)) {
                    throw new TypeError('Expected type String{} for CreateConsultParameters.additionalAttributes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_additionalAttributes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateConsultParameters, '__type', { value: 'urn:inin.com:interactions:createConsultParameters' });

    Object.defineProperty(CreateConsultParameters, '__propInfo', {
        get: function() {
            var pi = {
                'target': { required: false, nullable: false },
                'queueID': { required: false, nullable: false },
                'callMadeStage': { required: false, nullable: false },
                'additionalAttributes': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:createConsultParameters'] = CreateConsultParameters;

    return CreateConsultParameters;
}());

var ConsultTransferResult = (function(){
    var hasProps = false;

    function ConsultTransferResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:consultTransferResult' });
        }

        ConsultTransferResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(ConsultTransferResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ConsultTransferResult.prototype, 'consultId', {
            get: function() { return this.__prop_consultId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConsultTransferResult.consultId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_consultId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConsultTransferResult.prototype, 'consultInteractionId', {
            get: function() { return this.__prop_consultInteractionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConsultTransferResult.consultInteractionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_consultInteractionId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ConsultTransferResult, '__type', { value: 'urn:inin.com:interactions:consultTransferResult' });

    Object.defineProperty(ConsultTransferResult, '__propInfo', {
        get: function() {
            var pi = {
                'consultId': { required: true, nullable: false },
                'consultInteractionId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:consultTransferResult'] = ConsultTransferResult;

    return ConsultTransferResult;
}());

var ChangeAudienceParameters = (function(){
    var hasProps = false;

    function ChangeAudienceParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:changeAudienceParameters' });
        }

        ChangeAudienceParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChangeAudienceParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChangeAudienceParameters.prototype, 'audience', {
            get: function() { return this.__prop_audience; },
            set: function(value) {
                if (!(value instanceof ConsultTransferAudience)) {
                    try {
                        value = new ConsultTransferAudience(value);
                    } catch (e) {
                        throw new TypeError('Error setting ChangeAudienceParameters.audience: ' + e.message);
                    }
                }

                this.__prop_audience = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChangeAudienceParameters, '__type', { value: 'urn:inin.com:interactions:changeAudienceParameters' });

    Object.defineProperty(ChangeAudienceParameters, '__propInfo', {
        get: function() {
            var pi = {
                'audience': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:changeAudienceParameters'] = ChangeAudienceParameters;

    return ChangeAudienceParameters;
}());

var HoldParameters = (function(){
    var hasProps = false;

    function HoldParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:holdParameters' });
        }

        HoldParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(HoldParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(HoldParameters.prototype, 'on', {
            get: function() { return this.__prop_on; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for HoldParameters.on, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_on = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(HoldParameters, '__type', { value: 'urn:inin.com:interactions:holdParameters' });

    Object.defineProperty(HoldParameters, '__propInfo', {
        get: function() {
            var pi = {
                'on': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:holdParameters'] = HoldParameters;

    return HoldParameters;
}());

var InvitePartyParameters = (function(){
    var hasProps = false;

    function InvitePartyParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:invitePartyParameters' });
        }

        InvitePartyParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(InvitePartyParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InvitePartyParameters.prototype, 'target', {
            get: function() { return this.__prop_target; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InvitePartyParameters.target, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_target = value;
            },
            enumerable: true
        });

        Object.defineProperty(InvitePartyParameters.prototype, 'callMadeStage', {
            get: function() { return this.__prop_callMadeStage; },
            set: function(value) {
                if (!(value instanceof CallMadeStorageTypes || value === void 0)) {
                    try {
                        value = new CallMadeStorageTypes(value);
                    } catch (e) {
                        throw new TypeError('Error setting InvitePartyParameters.callMadeStage: ' + e.message);
                    }
                }

                this.__prop_callMadeStage = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InvitePartyParameters, '__type', { value: 'urn:inin.com:interactions:invitePartyParameters' });

    Object.defineProperty(InvitePartyParameters, '__propInfo', {
        get: function() {
            var pi = {
                'target': { required: true, nullable: false },
                'callMadeStage': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:invitePartyParameters'] = InvitePartyParameters;

    return InvitePartyParameters;
}());

var ListenParameters = (function(){
    var hasProps = false;

    function ListenParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:listenParameters' });
        }

        ListenParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(ListenParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ListenParameters.prototype, 'on', {
            get: function() { return this.__prop_on; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ListenParameters.on, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_on = value;
            },
            enumerable: true
        });

        Object.defineProperty(ListenParameters.prototype, 'supervisor', {
            get: function() { return this.__prop_supervisor; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ListenParameters.supervisor, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_supervisor = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ListenParameters, '__type', { value: 'urn:inin.com:interactions:listenParameters' });

    Object.defineProperty(ListenParameters, '__propInfo', {
        get: function() {
            var pi = {
                'on': { required: true, nullable: false },
                'supervisor': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:listenParameters'] = ListenParameters;

    return ListenParameters;
}());

var MuteParameters = (function(){
    var hasProps = false;

    function MuteParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:muteParameters' });
        }

        MuteParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(MuteParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MuteParameters.prototype, 'on', {
            get: function() { return this.__prop_on; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for MuteParameters.on, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_on = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MuteParameters, '__type', { value: 'urn:inin.com:interactions:muteParameters' });

    Object.defineProperty(MuteParameters, '__propInfo', {
        get: function() {
            var pi = {
                'on': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:muteParameters'] = MuteParameters;

    return MuteParameters;
}());

var PauseParameters = (function(){
    var hasProps = false;

    function PauseParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:pauseParameters' });
        }

        PauseParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(PauseParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PauseParameters.prototype, 'on', {
            get: function() { return this.__prop_on; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for PauseParameters.on, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_on = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PauseParameters, '__type', { value: 'urn:inin.com:interactions:pauseParameters' });

    Object.defineProperty(PauseParameters, '__propInfo', {
        get: function() {
            var pi = {
                'on': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:pauseParameters'] = PauseParameters;

    return PauseParameters;
}());

var RecordSnippetParameters = (function(){
    var hasProps = false;

    function RecordSnippetParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:recordSnippetParameters' });
        }

        RecordSnippetParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(RecordSnippetParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RecordSnippetParameters.prototype, 'on', {
            get: function() { return this.__prop_on; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for RecordSnippetParameters.on, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_on = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordSnippetParameters.prototype, 'supervisor', {
            get: function() { return this.__prop_supervisor; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for RecordSnippetParameters.supervisor, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_supervisor = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RecordSnippetParameters, '__type', { value: 'urn:inin.com:interactions:recordSnippetParameters' });

    Object.defineProperty(RecordSnippetParameters, '__propInfo', {
        get: function() {
            var pi = {
                'on': { required: true, nullable: false },
                'supervisor': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:recordSnippetParameters'] = RecordSnippetParameters;

    return RecordSnippetParameters;
}());

var SecurePauseParameters = (function(){
    var hasProps = false;

    function SecurePauseParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:securePauseParameters' });
        }

        SecurePauseParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(SecurePauseParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SecurePauseParameters.prototype, 'securePauseType', {
            get: function() { return this.__prop_securePauseType; },
            set: function(value) {
                if (!(value instanceof SecurePauseType)) {
                    try {
                        value = new SecurePauseType(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurePauseParameters.securePauseType: ' + e.message);
                    }
                }

                this.__prop_securePauseType = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurePauseParameters.prototype, 'duration', {
            get: function() { return this.__prop_duration; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for SecurePauseParameters.duration, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_duration = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SecurePauseParameters, '__type', { value: 'urn:inin.com:interactions:securePauseParameters' });

    Object.defineProperty(SecurePauseParameters, '__propInfo', {
        get: function() {
            var pi = {
                'securePauseType': { required: true, nullable: false },
                'duration': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:securePauseParameters'] = SecurePauseParameters;

    return SecurePauseParameters;
}());

var PlayWavParameters = (function(){
    var hasProps = false;

    function PlayWavParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:playWavParameters' });
        }

        PlayWavParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(PlayWavParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PlayWavParameters.prototype, 'file', {
            get: function() { return this.__prop_file; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PlayWavParameters.file, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_file = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PlayWavParameters, '__type', { value: 'urn:inin.com:interactions:playWavParameters' });

    Object.defineProperty(PlayWavParameters, '__propInfo', {
        get: function() {
            var pi = {
                'file': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:playWavParameters'] = PlayWavParameters;

    return PlayWavParameters;
}());

var MakePrivateParameters = (function(){
    var hasProps = false;

    function MakePrivateParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:makePrivateParameters' });
        }

        MakePrivateParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(MakePrivateParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MakePrivateParameters.prototype, 'on', {
            get: function() { return this.__prop_on; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for MakePrivateParameters.on, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_on = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MakePrivateParameters, '__type', { value: 'urn:inin.com:interactions:makePrivateParameters' });

    Object.defineProperty(MakePrivateParameters, '__propInfo', {
        get: function() {
            var pi = {
                'on': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:makePrivateParameters'] = MakePrivateParameters;

    return MakePrivateParameters;
}());

var RecordParameters = (function(){
    var hasProps = false;

    function RecordParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:recordParameters' });
        }

        RecordParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(RecordParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RecordParameters.prototype, 'on', {
            get: function() { return this.__prop_on; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for RecordParameters.on, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_on = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordParameters.prototype, 'supervisor', {
            get: function() { return this.__prop_supervisor; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for RecordParameters.supervisor, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_supervisor = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RecordParameters, '__type', { value: 'urn:inin.com:interactions:recordParameters' });

    Object.defineProperty(RecordParameters, '__propInfo', {
        get: function() {
            var pi = {
                'on': { required: true, nullable: false },
                'supervisor': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:recordParameters'] = RecordParameters;

    return RecordParameters;
}());

var InteractionDtmfDigits = (function(){
    var hasProps = false;

    function InteractionDtmfDigits() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionDtmfDigits' });
        }

        InteractionDtmfDigits._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDtmfDigits, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDtmfDigits.prototype, 'dtmfDigits', {
            get: function() { return this.__prop_dtmfDigits; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionDtmfDigits.dtmfDigits, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dtmfDigits = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDtmfDigits, '__type', { value: 'urn:inin.com:interactions:interactionDtmfDigits' });

    Object.defineProperty(InteractionDtmfDigits, '__propInfo', {
        get: function() {
            var pi = {
                'dtmfDigits': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:interactionDtmfDigits'] = InteractionDtmfDigits;

    return InteractionDtmfDigits;
}());

var WrapupAssignment = (function(){
    var hasProps = false;

    function WrapupAssignment() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:wrapupAssignment' });
        }

        WrapupAssignment._super.constructor.apply(this, arguments);
    }
    _util.inherits(WrapupAssignment, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WrapupAssignment.prototype, 'code', {
            get: function() { return this.__prop_code; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for WrapupAssignment.code, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_code = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapupAssignment.prototype, 'segmentId', {
            get: function() { return this.__prop_segmentId; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for WrapupAssignment.segmentId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_segmentId = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapupAssignment.prototype, 'time', {
            get: function() { return this.__prop_time; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for WrapupAssignment.time, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_time = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapupAssignment.prototype, 'user', {
            get: function() { return this.__prop_user; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for WrapupAssignment.user, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_user = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapupAssignment.prototype, 'sourceInteractionId', {
            get: function() { return this.__prop_sourceInteractionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for WrapupAssignment.sourceInteractionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sourceInteractionId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WrapupAssignment, '__type', { value: 'urn:inin.com:interactions:wrapupAssignment' });

    Object.defineProperty(WrapupAssignment, '__propInfo', {
        get: function() {
            var pi = {
                'code': { required: true, nullable: false },
                'segmentId': { required: true, nullable: false },
                'time': { required: true, nullable: false },
                'user': { required: true, nullable: false },
                'sourceInteractionId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:wrapupAssignment'] = WrapupAssignment;

    return WrapupAssignment;
}());

var CreateConferenceParameters = (function(){
    var hasProps = false;

    function CreateConferenceParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:createConferenceParameters' });
        }

        CreateConferenceParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateConferenceParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreateConferenceParameters.prototype, 'interactions', {
            get: function() { return this.__prop_interactions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for CreateConferenceParameters.interactions, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactions = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateConferenceParameters, '__type', { value: 'urn:inin.com:interactions:createConferenceParameters' });

    Object.defineProperty(CreateConferenceParameters, '__propInfo', {
        get: function() {
            var pi = {
                'interactions': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:createConferenceParameters'] = CreateConferenceParameters;

    return CreateConferenceParameters;
}());

var ConferenceCreationResult = (function(){
    var hasProps = false;

    function ConferenceCreationResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:conferenceCreationResult' });
        }

        ConferenceCreationResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(ConferenceCreationResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ConferenceCreationResult.prototype, 'conferenceId', {
            get: function() { return this.__prop_conferenceId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConferenceCreationResult.conferenceId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_conferenceId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ConferenceCreationResult, '__type', { value: 'urn:inin.com:interactions:conferenceCreationResult' });

    Object.defineProperty(ConferenceCreationResult, '__propInfo', {
        get: function() {
            var pi = {
                'conferenceId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:conferenceCreationResult'] = ConferenceCreationResult;

    return ConferenceCreationResult;
}());

var AddPartiesParameters = (function(){
    var hasProps = false;

    function AddPartiesParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:addPartiesParameters' });
        }

        AddPartiesParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(AddPartiesParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AddPartiesParameters.prototype, 'interactions', {
            get: function() { return this.__prop_interactions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for AddPartiesParameters.interactions, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactions = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AddPartiesParameters, '__type', { value: 'urn:inin.com:interactions:addPartiesParameters' });

    Object.defineProperty(AddPartiesParameters, '__propInfo', {
        get: function() {
            var pi = {
                'interactions': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:addPartiesParameters'] = AddPartiesParameters;

    return AddPartiesParameters;
}());

var InteractionSubscription = (function(){
    var hasProps = false;

    function InteractionSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionSubscription' });
        }

        InteractionSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionSubscription.prototype, 'attributeNames', {
            get: function() { return this.__prop_attributeNames; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for InteractionSubscription.attributeNames, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attributeNames = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionSubscription, '__type', { value: 'urn:inin.com:interactions:interactionSubscription' });

    Object.defineProperty(InteractionSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'attributeNames': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:interactionSubscription'] = InteractionSubscription;

    return InteractionSubscription;
}());

var AlertSubscriptionParameters = (function(){
    var hasProps = false;

    function AlertSubscriptionParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:alertSubscriptionParameters' });
        }

        AlertSubscriptionParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertSubscriptionParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AlertSubscriptionParameters.prototype, 'attributeNames', {
            get: function() { return this.__prop_attributeNames; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for AlertSubscriptionParameters.attributeNames, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attributeNames = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertSubscriptionParameters.prototype, 'monitoredUserQueues', {
            get: function() { return this.__prop_monitoredUserQueues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof UserQueueAlertMonitor); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new UserQueueAlertMonitor(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AlertSubscriptionParameters.monitoredUserQueues: ' + e.message);
                    }
                }

                this.__prop_monitoredUserQueues = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertSubscriptionParameters, '__type', { value: 'urn:inin.com:interactions:alertSubscriptionParameters' });

    Object.defineProperty(AlertSubscriptionParameters, '__propInfo', {
        get: function() {
            var pi = {
                'attributeNames': { required: false, nullable: false },
                'monitoredUserQueues': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:alertSubscriptionParameters'] = AlertSubscriptionParameters;

    return AlertSubscriptionParameters;
}());

var UserQueueAlertMonitor = (function(){
    var hasProps = false;

    function UserQueueAlertMonitor() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:userQueueAlertMonitor' });
        }

        UserQueueAlertMonitor._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserQueueAlertMonitor, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserQueueAlertMonitor.prototype, 'userQueueName', {
            get: function() { return this.__prop_userQueueName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UserQueueAlertMonitor.userQueueName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userQueueName = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserQueueAlertMonitor.prototype, 'alertMode', {
            get: function() { return this.__prop_alertMode; },
            set: function(value) {
                if (!(value instanceof Queues.QueueAlertMode || value === void 0)) {
                    try {
                        value = new Queues.QueueAlertMode(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserQueueAlertMonitor.alertMode: ' + e.message);
                    }
                }

                this.__prop_alertMode = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserQueueAlertMonitor, '__type', { value: 'urn:inin.com:interactions:userQueueAlertMonitor' });

    Object.defineProperty(UserQueueAlertMonitor, '__propInfo', {
        get: function() {
            var pi = {
                'userQueueName': { required: true, nullable: false },
                'alertMode': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:userQueueAlertMonitor'] = UserQueueAlertMonitor;

    return UserQueueAlertMonitor;
}());

var HistorySubscriptionParameters = (function(){
    var hasProps = false;

    function HistorySubscriptionParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:historySubscriptionParameters' });
        }

        HistorySubscriptionParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(HistorySubscriptionParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(HistorySubscriptionParameters.prototype, 'numberOfHistoryMessages', {
            get: function() { return this.__prop_numberOfHistoryMessages; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for HistorySubscriptionParameters.numberOfHistoryMessages, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_numberOfHistoryMessages = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(HistorySubscriptionParameters, '__type', { value: 'urn:inin.com:interactions:historySubscriptionParameters' });

    Object.defineProperty(HistorySubscriptionParameters, '__propInfo', {
        get: function() {
            var pi = {
                'numberOfHistoryMessages': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:historySubscriptionParameters'] = HistorySubscriptionParameters;

    return HistorySubscriptionParameters;
}());

var InteractionMessageBase = (function(){
    var hasProps = false;

    function InteractionMessageBase() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionMessageBase', enumerable: true });
        }

        InteractionMessageBase._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionMessageBase, Messaging.Message);

    function defineProps() {
        Object.defineProperty(InteractionMessageBase.prototype, 'interactionID', {
            get: function() { return this.__prop_interactionID; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionMessageBase.interactionID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionID = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionMessageBase, '__type', { value: 'urn:inin.com:interactions:interactionMessageBase' });

    Object.defineProperty(InteractionMessageBase, '__propInfo', {
        get: function() {
            var pi = {
                'interactionID': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:interactionMessageBase'] = InteractionMessageBase;

    return InteractionMessageBase;
}());

var InteractionAlertingMessage = (function(){
    var hasProps = false;

    function InteractionAlertingMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionAlertingMessage', enumerable: true });
        }

        InteractionAlertingMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionAlertingMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(InteractionAlertingMessage.prototype, 'alertingInteractionDetails', {
            get: function() { return this.__prop_alertingInteractionDetails; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionAlertDetails); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionAlertDetails(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionAlertingMessage.alertingInteractionDetails: ' + e.message);
                    }
                }

                this.__prop_alertingInteractionDetails = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionAlertingMessage, '__type', { value: 'urn:inin.com:interactions:interactionAlertingMessage' });

    Object.defineProperty(InteractionAlertingMessage, '__propInfo', {
        get: function() {
            var pi = {
                'alertingInteractionDetails': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:interactionAlertingMessage'] = InteractionAlertingMessage;

    return InteractionAlertingMessage;
}());

var HistoryMessage = (function(){
    var hasProps = false;

    function HistoryMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:historyMessage', enumerable: true });
        }

        HistoryMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(HistoryMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(HistoryMessage.prototype, 'interactionHistory', {
            get: function() { return this.__prop_interactionHistory; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof HistoryItem); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new HistoryItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting HistoryMessage.interactionHistory: ' + e.message);
                    }
                }

                this.__prop_interactionHistory = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(HistoryMessage, '__type', { value: 'urn:inin.com:interactions:historyMessage' });

    Object.defineProperty(HistoryMessage, '__propInfo', {
        get: function() {
            var pi = {
                'interactionHistory': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:historyMessage'] = HistoryMessage;

    return HistoryMessage;
}());

var ConsultMessage = (function(){
    var hasProps = false;

    function ConsultMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:consultMessage', enumerable: true });
        }

        ConsultMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ConsultMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(ConsultMessage.prototype, 'audience', {
            get: function() { return this.__prop_audience; },
            set: function(value) {
                if (!(value instanceof ConsultTransferAudience)) {
                    try {
                        value = new ConsultTransferAudience(value);
                    } catch (e) {
                        throw new TypeError('Error setting ConsultMessage.audience: ' + e.message);
                    }
                }

                this.__prop_audience = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ConsultMessage, '__type', { value: 'urn:inin.com:interactions:consultMessage' });

    Object.defineProperty(ConsultMessage, '__propInfo', {
        get: function() {
            var pi = {
                'audience': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:consultMessage'] = ConsultMessage;

    return ConsultMessage;
}());

var CreateCallParameters = (function(){
    var hasProps = false;

    function CreateCallParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:createCallParameters', enumerable: true });
        }

        CreateCallParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateCallParameters, CreateInteractionParameters);

    function defineProps() {
        Object.defineProperty(CreateCallParameters.prototype, 'target', {
            get: function() { return this.__prop_target; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreateCallParameters.target, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_target = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateCallParameters.prototype, 'workgroup', {
            get: function() { return this.__prop_workgroup; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateCallParameters.workgroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroup = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateCallParameters.prototype, 'callMadeStage', {
            get: function() { return this.__prop_callMadeStage; },
            set: function(value) {
                if (!(value instanceof CallMadeStorageTypes || value === void 0)) {
                    try {
                        value = new CallMadeStorageTypes(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateCallParameters.callMadeStage: ' + e.message);
                    }
                }

                this.__prop_callMadeStage = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateCallParameters.prototype, 'accountCodeId', {
            get: function() { return this.__prop_accountCodeId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateCallParameters.accountCodeId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accountCodeId = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateCallParameters.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateCallParameters.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateCallParameters, '__type', { value: 'urn:inin.com:interactions:createCallParameters' });

    Object.defineProperty(CreateCallParameters, '__propInfo', {
        get: function() {
            var pi = {
                'target': { required: true, nullable: false },
                'workgroup': { required: false, nullable: false },
                'callMadeStage': { required: false, nullable: false },
                'accountCodeId': { required: false, nullable: false },
                'notes': { required: false, nullable: false }
            };
            if (CreateInteractionParameters.__propInfo) { _util.extend(pi, CreateInteractionParameters.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:createCallParameters'] = CreateCallParameters;

    return CreateCallParameters;
}());

var CreateGenericInteractionParameters = (function(){
    var hasProps = false;

    function CreateGenericInteractionParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:createGenericInteractionParameters', enumerable: true });
        }

        CreateGenericInteractionParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateGenericInteractionParameters, CreateInteractionParameters);

    function defineProps() {
        Object.defineProperty(CreateGenericInteractionParameters.prototype, 'queueId', {
            get: function() { return this.__prop_queueId; },
            set: function(value) {
                if (!(value instanceof Queues.QueueId)) {
                    try {
                        value = new Queues.QueueId(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateGenericInteractionParameters.queueId: ' + e.message);
                    }
                }

                this.__prop_queueId = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateGenericInteractionParameters.prototype, 'initialState', {
            get: function() { return this.__prop_initialState; },
            set: function(value) {
                if (!(value instanceof InteractionState || value === void 0)) {
                    try {
                        value = new InteractionState(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateGenericInteractionParameters.initialState: ' + e.message);
                    }
                }

                this.__prop_initialState = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateGenericInteractionParameters.prototype, 'interactionDirection', {
            get: function() { return this.__prop_interactionDirection; },
            set: function(value) {
                if (!(value instanceof InteractionDirection || value === void 0)) {
                    try {
                        value = new InteractionDirection(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateGenericInteractionParameters.interactionDirection: ' + e.message);
                    }
                }

                this.__prop_interactionDirection = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateGenericInteractionParameters.prototype, 'localPartyType', {
            get: function() { return this.__prop_localPartyType; },
            set: function(value) {
                if (!(value instanceof InteractionPartyType || value === void 0)) {
                    try {
                        value = new InteractionPartyType(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateGenericInteractionParameters.localPartyType: ' + e.message);
                    }
                }

                this.__prop_localPartyType = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateGenericInteractionParameters.prototype, 'localLocation', {
            get: function() { return this.__prop_localLocation; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateGenericInteractionParameters.localLocation, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_localLocation = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateGenericInteractionParameters.prototype, 'remotePartyType', {
            get: function() { return this.__prop_remotePartyType; },
            set: function(value) {
                if (!(value instanceof InteractionPartyType || value === void 0)) {
                    try {
                        value = new InteractionPartyType(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateGenericInteractionParameters.remotePartyType: ' + e.message);
                    }
                }

                this.__prop_remotePartyType = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateGenericInteractionParameters.prototype, 'remoteId', {
            get: function() { return this.__prop_remoteId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateGenericInteractionParameters.remoteId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remoteId = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateGenericInteractionParameters.prototype, 'remoteName', {
            get: function() { return this.__prop_remoteName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateGenericInteractionParameters.remoteName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remoteName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateGenericInteractionParameters, '__type', { value: 'urn:inin.com:interactions:createGenericInteractionParameters' });

    Object.defineProperty(CreateGenericInteractionParameters, '__propInfo', {
        get: function() {
            var pi = {
                'queueId': { required: true, nullable: false },
                'initialState': { required: false, nullable: false },
                'interactionDirection': { required: false, nullable: false },
                'localPartyType': { required: false, nullable: false },
                'localLocation': { required: false, nullable: false },
                'remotePartyType': { required: false, nullable: false },
                'remoteId': { required: false, nullable: false },
                'remoteName': { required: false, nullable: false }
            };
            if (CreateInteractionParameters.__propInfo) { _util.extend(pi, CreateInteractionParameters.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:createGenericInteractionParameters'] = CreateGenericInteractionParameters;

    return CreateGenericInteractionParameters;
}());

var InteractionChangedMessage = (function(){
    var hasProps = false;

    function InteractionChangedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionChangedMessage', enumerable: true });
        }

        InteractionChangedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionChangedMessage, InteractionMessageBase);

    function defineProps() {
        Object.defineProperty(InteractionChangedMessage.prototype, 'attributes', {
            get: function() { return this.__prop_attributes; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }))) {
                    throw new TypeError('Expected type String{} for InteractionChangedMessage.attributes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attributes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionChangedMessage, '__type', { value: 'urn:inin.com:interactions:interactionChangedMessage' });

    Object.defineProperty(InteractionChangedMessage, '__propInfo', {
        get: function() {
            var pi = {
                'attributes': { required: true, nullable: false }
            };
            if (InteractionMessageBase.__propInfo) { _util.extend(pi, InteractionMessageBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:interactionChangedMessage'] = InteractionChangedMessage;

    return InteractionChangedMessage;
}());

var InteractionDeallocatedMessage = (function(){
    var hasProps = false;

    function InteractionDeallocatedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionDeallocatedMessage', enumerable: true });
        }

        InteractionDeallocatedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDeallocatedMessage, InteractionMessageBase);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(InteractionDeallocatedMessage, '__type', { value: 'urn:inin.com:interactions:interactionDeallocatedMessage' });

    Object.defineProperty(InteractionDeallocatedMessage, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (InteractionMessageBase.__propInfo) { _util.extend(pi, InteractionMessageBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:interactionDeallocatedMessage'] = InteractionDeallocatedMessage;

    return InteractionDeallocatedMessage;
}());

var InteractionLostRightsMessage = (function(){
    var hasProps = false;

    function InteractionLostRightsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionLostRightsMessage', enumerable: true });
        }

        InteractionLostRightsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionLostRightsMessage, InteractionMessageBase);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(InteractionLostRightsMessage, '__type', { value: 'urn:inin.com:interactions:interactionLostRightsMessage' });

    Object.defineProperty(InteractionLostRightsMessage, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (InteractionMessageBase.__propInfo) { _util.extend(pi, InteractionMessageBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:interactionLostRightsMessage'] = InteractionLostRightsMessage;

    return InteractionLostRightsMessage;
}());

var InteractionRecordingSnippetCreatedMessage = (function(){
    var hasProps = false;

    function InteractionRecordingSnippetCreatedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionRecordingSnippetCreatedMessage', enumerable: true });
        }

        InteractionRecordingSnippetCreatedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionRecordingSnippetCreatedMessage, InteractionMessageBase);

    function defineProps() {
        Object.defineProperty(InteractionRecordingSnippetCreatedMessage.prototype, 'recordingSnippetId', {
            get: function() { return this.__prop_recordingSnippetId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionRecordingSnippetCreatedMessage.recordingSnippetId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordingSnippetId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionRecordingSnippetCreatedMessage, '__type', { value: 'urn:inin.com:interactions:interactionRecordingSnippetCreatedMessage' });

    Object.defineProperty(InteractionRecordingSnippetCreatedMessage, '__propInfo', {
        get: function() {
            var pi = {
                'recordingSnippetId': { required: true, nullable: false }
            };
            if (InteractionMessageBase.__propInfo) { _util.extend(pi, InteractionMessageBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:interactionRecordingSnippetCreatedMessage'] = InteractionRecordingSnippetCreatedMessage;

    return InteractionRecordingSnippetCreatedMessage;
}());

var InteractionMorphedMessage = (function(){
    var hasProps = false;

    function InteractionMorphedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions:interactionMorphedMessage', enumerable: true });
        }

        InteractionMorphedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionMorphedMessage, InteractionMessageBase);

    function defineProps() {
        Object.defineProperty(InteractionMorphedMessage.prototype, 'newInteractionID', {
            get: function() { return this.__prop_newInteractionID; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionMorphedMessage.newInteractionID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_newInteractionID = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionMorphedMessage, '__type', { value: 'urn:inin.com:interactions:interactionMorphedMessage' });

    Object.defineProperty(InteractionMorphedMessage, '__propInfo', {
        get: function() {
            var pi = {
                'newInteractionID': { required: true, nullable: false }
            };
            if (InteractionMessageBase.__propInfo) { _util.extend(pi, InteractionMessageBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions:interactionMorphedMessage'] = InteractionMorphedMessage;

    return InteractionMorphedMessage;
}());

var $interactions = (function(){
    function createInteraction(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createInteraction.params)) {
            try {
                params = new createInteraction.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createInteraction.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof InteractionCreated) ? o : new InteractionCreated(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createInteraction.method, createInteraction.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createInteraction, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions', enumerable: true }
    });

    createInteraction.params = (function(){
        _util.inherits(createInteraction_params, _util.RequestParams);

        function createInteraction_params(properties) {
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
            if (!(properties.content instanceof CreateInteractionParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.CreateInteractionParameters');
            }

            createInteraction_params._super.constructor.apply(this, arguments);
        }

        return createInteraction_params;
    })();

    function getInteractionAttributes(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionAttributes.params)) {
            try {
                params = new getInteractionAttributes.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionAttributes.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionAttributes) ? o : new InteractionAttributes(o); };
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionAttributes.method, getInteractionAttributes.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionAttributes, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}', enumerable: true }
    });

    getInteractionAttributes.params = (function(){
        _util.inherits(getInteractionAttributes_params, _util.RequestParams);

        function getInteractionAttributes_params(properties) {
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

            getInteractionAttributes_params._super.constructor.apply(this, arguments);
        }

        return getInteractionAttributes_params;
    })();

    function updateInteractionAttributes(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateInteractionAttributes.params)) {
            try {
                params = new updateInteractionAttributes.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateInteractionAttributes.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateInteractionAttributes.method, updateInteractionAttributes.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateInteractionAttributes, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}', enumerable: true }
    });

    updateInteractionAttributes.params = (function(){
        _util.inherits(updateInteractionAttributes_params, _util.RequestParams);

        function updateInteractionAttributes_params(properties) {
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
            if (!(properties.content instanceof InteractionAttributesUpdate)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.InteractionAttributesUpdate');
            }

            updateInteractionAttributes_params._super.constructor.apply(this, arguments);
        }

        return updateInteractionAttributes_params;
    })();

    return Object.create(null, {
        createInteraction: { value: createInteraction, enumerable: true },
        getInteractionAttributes: { value: getInteractionAttributes, enumerable: true },
        updateInteractionAttributes: { value: updateInteractionAttributes, enumerable: true }
    });
})();

var $agentAssistance = (function(){
    function requestAssistance(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof requestAssistance.params)) {
            try {
                params = new requestAssistance.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: requestAssistance.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Interactions_Assistance.RequestAssistanceResponse) ? o : new Interactions_Assistance.RequestAssistanceResponse(o); };
        dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(requestAssistance.method, requestAssistance.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(requestAssistance, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/agent-assistance', enumerable: true }
    });

    requestAssistance.params = (function(){
        _util.inherits(requestAssistance_params, _util.RequestParams);

        function requestAssistance_params(properties) {
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
            if (!(properties.content instanceof Interactions_Assistance.AssistanceRequestParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Assistance.AssistanceRequestParameters');
            }

            requestAssistance_params._super.constructor.apply(this, arguments);
        }

        return requestAssistance_params;
    })();

    function completeAssistanceRequest(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof completeAssistanceRequest.params)) {
            try {
                params = new completeAssistanceRequest.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: completeAssistanceRequest.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(completeAssistanceRequest.method, completeAssistanceRequest.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(completeAssistanceRequest, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/agent-assistance/{assistanceId}', enumerable: true }
    });

    completeAssistanceRequest.params = (function(){
        _util.inherits(completeAssistanceRequest_params, _util.RequestParams);

        function completeAssistanceRequest_params(properties) {
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

            completeAssistanceRequest_params._super.constructor.apply(this, arguments);
        }

        return completeAssistanceRequest_params;
    })();

    function sendAgentAssistanceRequestMessage(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof sendAgentAssistanceRequestMessage.params)) {
            try {
                params = new sendAgentAssistanceRequestMessage.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: sendAgentAssistanceRequestMessage.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(sendAgentAssistanceRequestMessage.method, sendAgentAssistanceRequestMessage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(sendAgentAssistanceRequestMessage, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/agent-assistance/{assistanceId}', enumerable: true }
    });

    sendAgentAssistanceRequestMessage.params = (function(){
        _util.inherits(sendAgentAssistanceRequestMessage_params, _util.RequestParams);

        function sendAgentAssistanceRequestMessage_params(properties) {
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
            if (!(properties.content instanceof Interactions_Assistance.AssistanceRequestParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Assistance.AssistanceRequestParameters');
            }

            sendAgentAssistanceRequestMessage_params._super.constructor.apply(this, arguments);
        }

        return sendAgentAssistanceRequestMessage_params;
    })();

    return Object.create(null, {
        requestAssistance: { value: requestAssistance, enumerable: true },
        completeAssistanceRequest: { value: completeAssistanceRequest, enumerable: true },
        sendAgentAssistanceRequestMessage: { value: sendAgentAssistanceRequestMessage, enumerable: true }
    });
})();

var $blindTransfer = (function(){
    function blindTransfer(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof blindTransfer.params)) {
            try {
                params = new blindTransfer.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: blindTransfer.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(blindTransfer.method, blindTransfer.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(blindTransfer, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/blind-transfer', enumerable: true }
    });

    blindTransfer.params = (function(){
        _util.inherits(blindTransfer_params, _util.RequestParams);

        function blindTransfer_params(properties) {
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
            if (!(properties.content instanceof TransferParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.TransferParameters');
            }

            blindTransfer_params._super.constructor.apply(this, arguments);
        }

        return blindTransfer_params;
    })();

    return Object.create(null, {
        blindTransfer: { value: blindTransfer, enumerable: true }
    });
})();

var $transferToVoicemail = (function(){
    function transferToVoicemail(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof transferToVoicemail.params)) {
            try {
                params = new transferToVoicemail.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: transferToVoicemail.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(transferToVoicemail.method, transferToVoicemail.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(transferToVoicemail, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/transfer-to-voicemail', enumerable: true }
    });

    transferToVoicemail.params = (function(){
        _util.inherits(transferToVoicemail_params, _util.RequestParams);

        function transferToVoicemail_params(properties) {
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
            if (!(properties.content instanceof TransferParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.TransferParameters');
            }

            transferToVoicemail_params._super.constructor.apply(this, arguments);
        }

        return transferToVoicemail_params;
    })();

    return Object.create(null, {
        transferToVoicemail: { value: transferToVoicemail, enumerable: true }
    });
})();

var $park = (function(){
    function park(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof park.params)) {
            try {
                params = new park.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: park.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(park.method, park.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(park, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/park', enumerable: true }
    });

    park.params = (function(){
        _util.inherits(park_params, _util.RequestParams);

        function park_params(properties) {
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
            if (!(properties.content instanceof TransferParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.TransferParameters');
            }

            park_params._super.constructor.apply(this, arguments);
        }

        return park_params;
    })();

    return Object.create(null, {
        park: { value: park, enumerable: true }
    });
})();

var $coach = (function(){
    function coach(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof coach.params)) {
            try {
                params = new coach.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: coach.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(coach.method, coach.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(coach, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/coach', enumerable: true }
    });

    coach.params = (function(){
        _util.inherits(coach_params, _util.RequestParams);

        function coach_params(properties) {
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
            if (!(properties.content instanceof CoachParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.CoachParameters');
            }

            coach_params._super.constructor.apply(this, arguments);
        }

        return coach_params;
    })();

    return Object.create(null, {
        coach: { value: coach, enumerable: true }
    });
})();

var $consult = (function(){
    function consult(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof consult.params)) {
            try {
                params = new consult.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: consult.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof ConsultTransferResult) ? o : new ConsultTransferResult(o); };
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(consult.method, consult.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(consult, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/consult', enumerable: true }
    });

    consult.params = (function(){
        _util.inherits(consult_params, _util.RequestParams);

        function consult_params(properties) {
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
            if (!(properties.content instanceof CreateConsultParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.CreateConsultParameters');
            }

            consult_params._super.constructor.apply(this, arguments);
        }

        return consult_params;
    })();

    function consultCancel(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof consultCancel.params)) {
            try {
                params = new consultCancel.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: consultCancel.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(consultCancel.method, consultCancel.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(consultCancel, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/consult/{consultId}', enumerable: true }
    });

    consultCancel.params = (function(){
        _util.inherits(consultCancel_params, _util.RequestParams);

        function consultCancel_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId, consultId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (!_util.hasProp(properties.template, 'consultId')) {
                throw new Error('`properties.template` is missing required property: `consultId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            consultCancel_params._super.constructor.apply(this, arguments);
        }

        return consultCancel_params;
    })();

    return Object.create(null, {
        consult: { value: consult, enumerable: true },
        consultCancel: { value: consultCancel, enumerable: true }
    });
})();

var $disconnect = (function(){
    function disconnect(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof disconnect.params)) {
            try {
                params = new disconnect.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: disconnect.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(disconnect.method, disconnect.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(disconnect, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/disconnect', enumerable: true }
    });

    disconnect.params = (function(){
        _util.inherits(disconnect_params, _util.RequestParams);

        function disconnect_params(properties) {
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

            disconnect_params._super.constructor.apply(this, arguments);
        }

        return disconnect_params;
    })();

    return Object.create(null, {
        disconnect: { value: disconnect, enumerable: true }
    });
})();

var $hold = (function(){
    function hold(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof hold.params)) {
            try {
                params = new hold.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: hold.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(hold.method, hold.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(hold, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/hold', enumerable: true }
    });

    hold.params = (function(){
        _util.inherits(hold_params, _util.RequestParams);

        function hold_params(properties) {
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
            if (!(properties.content instanceof HoldParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.HoldParameters');
            }

            hold_params._super.constructor.apply(this, arguments);
        }

        return hold_params;
    })();

    return Object.create(null, {
        hold: { value: hold, enumerable: true }
    });
})();

var $inviteParty = (function(){
    function inviteParty(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof inviteParty.params)) {
            try {
                params = new inviteParty.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: inviteParty.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(inviteParty.method, inviteParty.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(inviteParty, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/invite-party', enumerable: true }
    });

    inviteParty.params = (function(){
        _util.inherits(inviteParty_params, _util.RequestParams);

        function inviteParty_params(properties) {
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
            if (!(properties.content instanceof InvitePartyParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.InvitePartyParameters');
            }

            inviteParty_params._super.constructor.apply(this, arguments);
        }

        return inviteParty_params;
    })();

    return Object.create(null, {
        inviteParty: { value: inviteParty, enumerable: true }
    });
})();

var $join = (function(){
    function join(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof join.params)) {
            try {
                params = new join.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: join.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(join.method, join.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(join, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/join', enumerable: true }
    });

    join.params = (function(){
        _util.inherits(join_params, _util.RequestParams);

        function join_params(properties) {
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

            join_params._super.constructor.apply(this, arguments);
        }

        return join_params;
    })();

    return Object.create(null, {
        join: { value: join, enumerable: true }
    });
})();

var $listen = (function(){
    function listen(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof listen.params)) {
            try {
                params = new listen.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: listen.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(listen.method, listen.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(listen, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/listen', enumerable: true }
    });

    listen.params = (function(){
        _util.inherits(listen_params, _util.RequestParams);

        function listen_params(properties) {
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
            if (!(properties.content instanceof ListenParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.ListenParameters');
            }

            listen_params._super.constructor.apply(this, arguments);
        }

        return listen_params;
    })();

    return Object.create(null, {
        listen: { value: listen, enumerable: true }
    });
})();

var $mute = (function(){
    function mute(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof mute.params)) {
            try {
                params = new mute.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: mute.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(mute.method, mute.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(mute, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/mute', enumerable: true }
    });

    mute.params = (function(){
        _util.inherits(mute_params, _util.RequestParams);

        function mute_params(properties) {
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
            if (!(properties.content instanceof MuteParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.MuteParameters');
            }

            mute_params._super.constructor.apply(this, arguments);
        }

        return mute_params;
    })();

    return Object.create(null, {
        mute: { value: mute, enumerable: true }
    });
})();

var $pause = (function(){
    function pause(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof pause.params)) {
            try {
                params = new pause.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: pause.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(pause.method, pause.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(pause, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/pause', enumerable: true }
    });

    pause.params = (function(){
        _util.inherits(pause_params, _util.RequestParams);

        function pause_params(properties) {
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
            if (!(properties.content instanceof PauseParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.PauseParameters');
            }

            pause_params._super.constructor.apply(this, arguments);
        }

        return pause_params;
    })();

    return Object.create(null, {
        pause: { value: pause, enumerable: true }
    });
})();

var $recordSnippet = (function(){
    function recordSnippet(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof recordSnippet.params)) {
            try {
                params = new recordSnippet.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: recordSnippet.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(recordSnippet.method, recordSnippet.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(recordSnippet, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/record-snippet', enumerable: true }
    });

    recordSnippet.params = (function(){
        _util.inherits(recordSnippet_params, _util.RequestParams);

        function recordSnippet_params(properties) {
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
            if (!(properties.content instanceof RecordSnippetParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.RecordSnippetParameters');
            }

            recordSnippet_params._super.constructor.apply(this, arguments);
        }

        return recordSnippet_params;
    })();

    return Object.create(null, {
        recordSnippet: { value: recordSnippet, enumerable: true }
    });
})();

var $securePause = (function(){
    function securePause(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof securePause.params)) {
            try {
                params = new securePause.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: securePause.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(securePause.method, securePause.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(securePause, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/secure-pause', enumerable: true }
    });

    securePause.params = (function(){
        _util.inherits(securePause_params, _util.RequestParams);

        function securePause_params(properties) {
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
            if (!(properties.content instanceof SecurePauseParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.SecurePauseParameters');
            }

            securePause_params._super.constructor.apply(this, arguments);
        }

        return securePause_params;
    })();

    return Object.create(null, {
        securePause: { value: securePause, enumerable: true }
    });
})();

var $pickup = (function(){
    function pickup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof pickup.params)) {
            try {
                params = new pickup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: pickup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(pickup.method, pickup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(pickup, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/pickup', enumerable: true }
    });

    pickup.params = (function(){
        _util.inherits(pickup_params, _util.RequestParams);

        function pickup_params(properties) {
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

            pickup_params._super.constructor.apply(this, arguments);
        }

        return pickup_params;
    })();

    return Object.create(null, {
        pickup: { value: pickup, enumerable: true }
    });
})();

var $playWav = (function(){
    function playWav(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof playWav.params)) {
            try {
                params = new playWav.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: playWav.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(playWav.method, playWav.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(playWav, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/play-wav', enumerable: true }
    });

    playWav.params = (function(){
        _util.inherits(playWav_params, _util.RequestParams);

        function playWav_params(properties) {
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
            if (!(properties.content instanceof PlayWavParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.PlayWavParameters');
            }

            playWav_params._super.constructor.apply(this, arguments);
        }

        return playWav_params;
    })();

    return Object.create(null, {
        playWav: { value: playWav, enumerable: true }
    });
})();

var $makePrivate = (function(){
    function makePrivate(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof makePrivate.params)) {
            try {
                params = new makePrivate.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: makePrivate.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(makePrivate.method, makePrivate.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(makePrivate, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/make-private', enumerable: true }
    });

    makePrivate.params = (function(){
        _util.inherits(makePrivate_params, _util.RequestParams);

        function makePrivate_params(properties) {
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
            if (!(properties.content instanceof MakePrivateParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.MakePrivateParameters');
            }

            makePrivate_params._super.constructor.apply(this, arguments);
        }

        return makePrivate_params;
    })();

    return Object.create(null, {
        makePrivate: { value: makePrivate, enumerable: true }
    });
})();

var $record = (function(){
    function record(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof record.params)) {
            try {
                params = new record.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: record.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(record.method, record.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(record, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/record', enumerable: true }
    });

    record.params = (function(){
        _util.inherits(record_params, _util.RequestParams);

        function record_params(properties) {
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
            if (!(properties.content instanceof RecordParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.RecordParameters');
            }

            record_params._super.constructor.apply(this, arguments);
        }

        return record_params;
    })();

    return Object.create(null, {
        record: { value: record, enumerable: true }
    });
})();

var $sendToVoicemail = (function(){
    function sendToVoicemail(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof sendToVoicemail.params)) {
            try {
                params = new sendToVoicemail.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: sendToVoicemail.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(sendToVoicemail.method, sendToVoicemail.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(sendToVoicemail, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/send-to-voicemail', enumerable: true }
    });

    sendToVoicemail.params = (function(){
        _util.inherits(sendToVoicemail_params, _util.RequestParams);

        function sendToVoicemail_params(properties) {
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

            sendToVoicemail_params._super.constructor.apply(this, arguments);
        }

        return sendToVoicemail_params;
    })();

    return Object.create(null, {
        sendToVoicemail: { value: sendToVoicemail, enumerable: true }
    });
})();

var $sendDigits = (function(){
    function sendDigits(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof sendDigits.params)) {
            try {
                params = new sendDigits.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: sendDigits.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(sendDigits.method, sendDigits.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(sendDigits, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/send-digits', enumerable: true }
    });

    sendDigits.params = (function(){
        _util.inherits(sendDigits_params, _util.RequestParams);

        function sendDigits_params(properties) {
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
            if (!(properties.content instanceof InteractionDtmfDigits)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.InteractionDtmfDigits');
            }

            sendDigits_params._super.constructor.apply(this, arguments);
        }

        return sendDigits_params;
    })();

    return Object.create(null, {
        sendDigits: { value: sendDigits, enumerable: true }
    });
})();

var $wrapUpAssignments = (function(){
    function addWrapupAssignment(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof addWrapupAssignment.params)) {
            try {
                params = new addWrapupAssignment.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: addWrapupAssignment.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(addWrapupAssignment.method, addWrapupAssignment.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(addWrapupAssignment, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/wrap-up-assignments', enumerable: true }
    });

    addWrapupAssignment.params = (function(){
        _util.inherits(addWrapupAssignment_params, _util.RequestParams);

        function addWrapupAssignment_params(properties) {
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
            if (!(properties.content instanceof WrapupAssignment)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.WrapupAssignment');
            }

            addWrapupAssignment_params._super.constructor.apply(this, arguments);
        }

        return addWrapupAssignment_params;
    })();

    return Object.create(null, {
        addWrapupAssignment: { value: addWrapupAssignment, enumerable: true }
    });
})();

var $conferences = (function(){
    function createConference(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createConference.params)) {
            try {
                params = new createConference.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createConference.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof ConferenceCreationResult) ? o : new ConferenceCreationResult(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createConference.method, createConference.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createConference, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/conferences', enumerable: true }
    });

    createConference.params = (function(){
        _util.inherits(createConference_params, _util.RequestParams);

        function createConference_params(properties) {
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
            if (!(properties.content instanceof CreateConferenceParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.CreateConferenceParameters');
            }

            createConference_params._super.constructor.apply(this, arguments);
        }

        return createConference_params;
    })();

    function addInteractionToParty(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof addInteractionToParty.params)) {
            try {
                params = new addInteractionToParty.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: addInteractionToParty.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(addInteractionToParty.method, addInteractionToParty.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(addInteractionToParty, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/conferences/{conferenceId}', enumerable: true }
    });

    addInteractionToParty.params = (function(){
        _util.inherits(addInteractionToParty_params, _util.RequestParams);

        function addInteractionToParty_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, conferenceId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'conferenceId')) {
                throw new Error('`properties.template` is missing required property: `conferenceId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof AddPartiesParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.AddPartiesParameters');
            }

            addInteractionToParty_params._super.constructor.apply(this, arguments);
        }

        return addInteractionToParty_params;
    })();

    return Object.create(null, {
        createConference: { value: createConference, enumerable: true },
        addInteractionToParty: { value: addInteractionToParty, enumerable: true }
    });
})();

var $supervisorAssistance = (function(){
    function sendSupervisorAssistanceRequestAction(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof sendSupervisorAssistanceRequestAction.params)) {
            try {
                params = new sendSupervisorAssistanceRequestAction.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: sendSupervisorAssistanceRequestAction.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(sendSupervisorAssistanceRequestAction.method, sendSupervisorAssistanceRequestAction.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(sendSupervisorAssistanceRequestAction, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/supervisor-assistance/{assistanceId}', enumerable: true }
    });

    sendSupervisorAssistanceRequestAction.params = (function(){
        _util.inherits(sendSupervisorAssistanceRequestAction_params, _util.RequestParams);

        function sendSupervisorAssistanceRequestAction_params(properties) {
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
            if (!(properties.content instanceof Interactions_Assistance.SupervisorAssistanceRequestAction)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Assistance.SupervisorAssistanceRequestAction');
            }

            sendSupervisorAssistanceRequestAction_params._super.constructor.apply(this, arguments);
        }

        return sendSupervisorAssistanceRequestAction_params;
    })();

    return Object.create(null, {
        sendSupervisorAssistanceRequestAction: { value: sendSupervisorAssistanceRequestAction, enumerable: true }
    });
})();

exports.InteractionAlertTypes = InteractionAlertTypes;
exports.InteractionAlertActions = InteractionAlertActions;
exports.InteractionDirection = InteractionDirection;
exports.InteractionHistoryStatusType = InteractionHistoryStatusType;
exports.CallMadeStorageTypes = CallMadeStorageTypes;
exports.InteractionState = InteractionState;
exports.InteractionPartyType = InteractionPartyType;
exports.AppendMode = AppendMode;
exports.SecurePauseType = SecurePauseType;
exports.InteractionMessageBase = InteractionMessageBase;
exports.InteractionChangedMessage = InteractionChangedMessage;
exports.InteractionDeallocatedMessage = InteractionDeallocatedMessage;
exports.InteractionLostRightsMessage = InteractionLostRightsMessage;
exports.InteractionRecordingSnippetCreatedMessage = InteractionRecordingSnippetCreatedMessage;
exports.InteractionMorphedMessage = InteractionMorphedMessage;
exports.InteractionAlertingMessage = InteractionAlertingMessage;
exports.InteractionAlertDetails = InteractionAlertDetails;
exports.HistoryMessage = HistoryMessage;
exports.HistoryItem = HistoryItem;
exports.ConsultMessage = ConsultMessage;
exports.ConsultTransferAudience = ConsultTransferAudience;
exports.CreateInteractionParameters = CreateInteractionParameters;
exports.CreateCallParameters = CreateCallParameters;
exports.CreateGenericInteractionParameters = CreateGenericInteractionParameters;
exports.InteractionCreated = InteractionCreated;
exports.InteractionAttributes = InteractionAttributes;
exports.InteractionAttributesUpdate = InteractionAttributesUpdate;
exports.TransferParameters = TransferParameters;
exports.CoachParameters = CoachParameters;
exports.CreateConsultParameters = CreateConsultParameters;
exports.ConsultTransferResult = ConsultTransferResult;
exports.ChangeAudienceParameters = ChangeAudienceParameters;
exports.HoldParameters = HoldParameters;
exports.InvitePartyParameters = InvitePartyParameters;
exports.ListenParameters = ListenParameters;
exports.MuteParameters = MuteParameters;
exports.PauseParameters = PauseParameters;
exports.RecordSnippetParameters = RecordSnippetParameters;
exports.SecurePauseParameters = SecurePauseParameters;
exports.PlayWavParameters = PlayWavParameters;
exports.MakePrivateParameters = MakePrivateParameters;
exports.RecordParameters = RecordParameters;
exports.InteractionDtmfDigits = InteractionDtmfDigits;
exports.WrapupAssignment = WrapupAssignment;
exports.CreateConferenceParameters = CreateConferenceParameters;
exports.ConferenceCreationResult = ConferenceCreationResult;
exports.AddPartiesParameters = AddPartiesParameters;
exports.InteractionSubscription = InteractionSubscription;
exports.AlertSubscriptionParameters = AlertSubscriptionParameters;
exports.UserQueueAlertMonitor = UserQueueAlertMonitor;
exports.HistorySubscriptionParameters = HistorySubscriptionParameters;
exports.$interactions = $interactions;
exports.$agentAssistance = $agentAssistance;
exports.$blindTransfer = $blindTransfer;
exports.$transferToVoicemail = $transferToVoicemail;
exports.$park = $park;
exports.$coach = $coach;
exports.$consult = $consult;
exports.$disconnect = $disconnect;
exports.$hold = $hold;
exports.$inviteParty = $inviteParty;
exports.$join = $join;
exports.$listen = $listen;
exports.$mute = $mute;
exports.$pause = $pause;
exports.$recordSnippet = $recordSnippet;
exports.$securePause = $securePause;
exports.$pickup = $pickup;
exports.$playWav = $playWav;
exports.$makePrivate = $makePrivate;
exports.$record = $record;
exports.$sendToVoicemail = $sendToVoicemail;
exports.$sendDigits = $sendDigits;
exports.$wrapUpAssignments = $wrapUpAssignments;
exports.$conferences = $conferences;
exports.$supervisorAssistance = $supervisorAssistance;
