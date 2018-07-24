/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Configuration = require('./Configuration');

var SessionMessageReason = (function(){
    var instanceCache = {};
    function SessionMessageReason(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:session:sessionMessageReason' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(SessionMessageReason, _util.EnumValue);

    Object.defineProperties(SessionMessageReason, {
        'ConnectionChange': { value: new SessionMessageReason(0, 'ConnectionChange'), enumerable: true },
        'ConfigurationChange': { value: new SessionMessageReason(1, 'ConfigurationChange'), enumerable: true }
    });

    Object.defineProperty(SessionMessageReason, '__type', { value: 'urn:inin.com:session:sessionMessageReason' });

    _typemap['urn:inin.com:session:sessionMessageReason'] = SessionMessageReason;

    return SessionMessageReason;
}());

var SessionInformation = (function(){
    var hasProps = false;

    function SessionInformation() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:session:sessionInformation' });
        }

        SessionInformation._super.constructor.apply(this, arguments);
    }
    _util.inherits(SessionInformation, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SessionInformation.prototype, 'applicationName', {
            get: function() { return this.__prop_applicationName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SessionInformation.applicationName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_applicationName = value;
            },
            enumerable: true
        });

        Object.defineProperty(SessionInformation.prototype, 'machineName', {
            get: function() { return this.__prop_machineName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SessionInformation.machineName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_machineName = value;
            },
            enumerable: true
        });

        Object.defineProperty(SessionInformation.prototype, 'stationId', {
            get: function() { return this.__prop_stationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SessionInformation.stationId: ' + e.message);
                    }
                }

                this.__prop_stationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SessionInformation.prototype, 'userId', {
            get: function() { return this.__prop_userId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SessionInformation.userId: ' + e.message);
                    }
                }

                this.__prop_userId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SessionInformation.prototype, 'reason', {
            get: function() { return this.__prop_reason; },
            set: function(value) {
                if (!(value instanceof SessionMessageReason)) {
                    try {
                        value = new SessionMessageReason(value);
                    } catch (e) {
                        throw new TypeError('Error setting SessionInformation.reason: ' + e.message);
                    }
                }

                this.__prop_reason = value;
            },
            enumerable: true
        });

        Object.defineProperty(SessionInformation.prototype, 'layoutId', {
            get: function() { return this.__prop_layoutId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SessionInformation.layoutId: ' + e.message);
                    }
                }

                this.__prop_layoutId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SessionInformation, '__type', { value: 'urn:inin.com:session:sessionInformation' });

    Object.defineProperty(SessionInformation, '__propInfo', {
        get: function() {
            var pi = {
                'applicationName': { required: true, nullable: false },
                'machineName': { required: true, nullable: false },
                'stationId': { required: true, nullable: false },
                'userId': { required: true, nullable: false },
                'reason': { required: true, nullable: false },
                'layoutId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:session:sessionInformation'] = SessionInformation;

    return SessionInformation;
}());

var SessionsUsersSubscription = (function(){
    var hasProps = false;

    function SessionsUsersSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:session:sessionsUsersSubscription' });
        }

        SessionsUsersSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(SessionsUsersSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SessionsUsersSubscription.prototype, 'userIds', {
            get: function() { return this.__prop_userIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for SessionsUsersSubscription.userIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userIds = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SessionsUsersSubscription, '__type', { value: 'urn:inin.com:session:sessionsUsersSubscription' });

    Object.defineProperty(SessionsUsersSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'userIds': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:session:sessionsUsersSubscription'] = SessionsUsersSubscription;

    return SessionsUsersSubscription;
}());

var SessionsStationsSubscription = (function(){
    var hasProps = false;

    function SessionsStationsSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:session:sessionsStationsSubscription' });
        }

        SessionsStationsSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(SessionsStationsSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SessionsStationsSubscription.prototype, 'stationIds', {
            get: function() { return this.__prop_stationIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for SessionsStationsSubscription.stationIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_stationIds = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SessionsStationsSubscription, '__type', { value: 'urn:inin.com:session:sessionsStationsSubscription' });

    Object.defineProperty(SessionsStationsSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'stationIds': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:session:sessionsStationsSubscription'] = SessionsStationsSubscription;

    return SessionsStationsSubscription;
}());

var SessionsMachinesSubscription = (function(){
    var hasProps = false;

    function SessionsMachinesSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:session:sessionsMachinesSubscription' });
        }

        SessionsMachinesSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(SessionsMachinesSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SessionsMachinesSubscription.prototype, 'machineNames', {
            get: function() { return this.__prop_machineNames; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for SessionsMachinesSubscription.machineNames, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_machineNames = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SessionsMachinesSubscription, '__type', { value: 'urn:inin.com:session:sessionsMachinesSubscription' });

    Object.defineProperty(SessionsMachinesSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'machineNames': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:session:sessionsMachinesSubscription'] = SessionsMachinesSubscription;

    return SessionsMachinesSubscription;
}());

var SessionsLayoutsSubscription = (function(){
    var hasProps = false;

    function SessionsLayoutsSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:session:sessionsLayoutsSubscription' });
        }

        SessionsLayoutsSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(SessionsLayoutsSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SessionsLayoutsSubscription.prototype, 'layoutIds', {
            get: function() { return this.__prop_layoutIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for SessionsLayoutsSubscription.layoutIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_layoutIds = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SessionsLayoutsSubscription, '__type', { value: 'urn:inin.com:session:sessionsLayoutsSubscription' });

    Object.defineProperty(SessionsLayoutsSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'layoutIds': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:session:sessionsLayoutsSubscription'] = SessionsLayoutsSubscription;

    return SessionsLayoutsSubscription;
}());

var SessionsMessage = (function(){
    var hasProps = false;

    function SessionsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:session:sessionsMessage', enumerable: true });
        }

        SessionsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(SessionsMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(SessionsMessage.prototype, 'sessionsAdded', {
            get: function() { return this.__prop_sessionsAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SessionInformation); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SessionInformation(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SessionsMessage.sessionsAdded: ' + e.message);
                    }
                }

                this.__prop_sessionsAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(SessionsMessage.prototype, 'sessionsRemoved', {
            get: function() { return this.__prop_sessionsRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SessionInformation); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SessionInformation(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SessionsMessage.sessionsRemoved: ' + e.message);
                    }
                }

                this.__prop_sessionsRemoved = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SessionsMessage, '__type', { value: 'urn:inin.com:session:sessionsMessage' });

    Object.defineProperty(SessionsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'sessionsAdded': { required: false, nullable: false },
                'sessionsRemoved': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:session:sessionsMessage'] = SessionsMessage;

    return SessionsMessage;
}());

exports.SessionMessageReason = SessionMessageReason;
exports.SessionsMessage = SessionsMessage;
exports.SessionInformation = SessionInformation;
exports.SessionsUsersSubscription = SessionsUsersSubscription;
exports.SessionsStationsSubscription = SessionsStationsSubscription;
exports.SessionsMachinesSubscription = SessionsMachinesSubscription;
exports.SessionsLayoutsSubscription = SessionsLayoutsSubscription;
