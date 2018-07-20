/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var UserStatusUntil = (function(){
    var hasProps = false;

    function UserStatusUntil() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:userStatusUntil' });
        }

        UserStatusUntil._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserStatusUntil, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserStatusUntil.prototype, 'untilDateTime', {
            get: function() { return this.__prop_untilDateTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for UserStatusUntil.untilDateTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_untilDateTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatusUntil.prototype, 'hasDate', {
            get: function() { return this.__prop_hasDate; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for UserStatusUntil.hasDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatusUntil.prototype, 'hasTime', {
            get: function() { return this.__prop_hasTime; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for UserStatusUntil.hasTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasTime = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserStatusUntil, '__type', { value: 'urn:inin.com:status:userStatusUntil' });

    Object.defineProperty(UserStatusUntil, '__propInfo', {
        get: function() {
            var pi = {
                'untilDateTime': { required: true, nullable: false },
                'hasDate': { required: true, nullable: false },
                'hasTime': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:userStatusUntil'] = UserStatusUntil;

    return UserStatusUntil;
}());

var StatusMessage = (function(){
    var hasProps = false;

    function StatusMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:statusMessage' });
        }

        StatusMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatusMessage, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatusMessage.prototype, 'statusId', {
            get: function() { return this.__prop_statusId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatusMessage.statusId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusId = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'messageText', {
            get: function() { return this.__prop_messageText; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatusMessage.messageText, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_messageText = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'iconUri', {
            get: function() { return this.__prop_iconUri; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatusMessage.iconUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_iconUri = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'groupTag', {
            get: function() { return this.__prop_groupTag; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatusMessage.groupTag, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_groupTag = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'canHaveDate', {
            get: function() { return this.__prop_canHaveDate; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for StatusMessage.canHaveDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_canHaveDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'canHaveTime', {
            get: function() { return this.__prop_canHaveTime; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for StatusMessage.canHaveTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_canHaveTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'isDoNotDisturbStatus', {
            get: function() { return this.__prop_isDoNotDisturbStatus; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for StatusMessage.isDoNotDisturbStatus, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isDoNotDisturbStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'isSelectableStatus', {
            get: function() { return this.__prop_isSelectableStatus; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for StatusMessage.isSelectableStatus, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSelectableStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'isPersistentStatus', {
            get: function() { return this.__prop_isPersistentStatus; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for StatusMessage.isPersistentStatus, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isPersistentStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'isForwardStatus', {
            get: function() { return this.__prop_isForwardStatus; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for StatusMessage.isForwardStatus, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isForwardStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'isAfterCallWorkStatus', {
            get: function() { return this.__prop_isAfterCallWorkStatus; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for StatusMessage.isAfterCallWorkStatus, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isAfterCallWorkStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'isAcdStatus', {
            get: function() { return this.__prop_isAcdStatus; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for StatusMessage.isAcdStatus, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isAcdStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'isAllowFollowUpStatus', {
            get: function() { return this.__prop_isAllowFollowUpStatus; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for StatusMessage.isAllowFollowUpStatus, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isAllowFollowUpStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'systemId', {
            get: function() { return this.__prop_systemId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatusMessage.systemId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_systemId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatusMessage, '__type', { value: 'urn:inin.com:status:statusMessage' });

    Object.defineProperty(StatusMessage, '__propInfo', {
        get: function() {
            var pi = {
                'statusId': { required: true, nullable: false },
                'messageText': { required: true, nullable: false },
                'iconUri': { required: true, nullable: false },
                'groupTag': { required: true, nullable: false },
                'canHaveDate': { required: true, nullable: false },
                'canHaveTime': { required: true, nullable: false },
                'isDoNotDisturbStatus': { required: true, nullable: false },
                'isSelectableStatus': { required: true, nullable: false },
                'isPersistentStatus': { required: true, nullable: false },
                'isForwardStatus': { required: true, nullable: false },
                'isAfterCallWorkStatus': { required: true, nullable: false },
                'isAcdStatus': { required: true, nullable: false },
                'isAllowFollowUpStatus': { required: true, nullable: false },
                'systemId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:statusMessage'] = StatusMessage;

    return StatusMessage;
}());

var StatusMessagesUserAccessChange = (function(){
    var hasProps = false;

    function StatusMessagesUserAccessChange() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:statusMessagesUserAccessChange' });
        }

        StatusMessagesUserAccessChange._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatusMessagesUserAccessChange, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatusMessagesUserAccessChange.prototype, 'userId', {
            get: function() { return this.__prop_userId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatusMessagesUserAccessChange.userId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userId = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessagesUserAccessChange.prototype, 'statusMessagesAdded', {
            get: function() { return this.__prop_statusMessagesAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for StatusMessagesUserAccessChange.statusMessagesAdded, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusMessagesAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessagesUserAccessChange.prototype, 'statusMessagesRemoved', {
            get: function() { return this.__prop_statusMessagesRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for StatusMessagesUserAccessChange.statusMessagesRemoved, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusMessagesRemoved = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatusMessagesUserAccessChange, '__type', { value: 'urn:inin.com:status:statusMessagesUserAccessChange' });

    Object.defineProperty(StatusMessagesUserAccessChange, '__propInfo', {
        get: function() {
            var pi = {
                'userId': { required: true, nullable: false },
                'statusMessagesAdded': { required: false, nullable: false },
                'statusMessagesRemoved': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:statusMessagesUserAccessChange'] = StatusMessagesUserAccessChange;

    return StatusMessagesUserAccessChange;
}());

var UserStatus = (function(){
    var hasProps = false;

    function UserStatus() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:userStatus' });
        }

        UserStatus._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserStatus, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserStatus.prototype, 'userId', {
            get: function() { return this.__prop_userId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UserStatus.userId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userId = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatus.prototype, 'statusId', {
            get: function() { return this.__prop_statusId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UserStatus.statusId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusId = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatus.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for UserStatus.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatus.prototype, 'forwardNumber', {
            get: function() { return this.__prop_forwardNumber; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for UserStatus.forwardNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_forwardNumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatus.prototype, 'until', {
            get: function() { return this.__prop_until; },
            set: function(value) {
                if (!(value instanceof UserStatusUntil || value === void 0 || value === null)) {
                    try {
                        value = new UserStatusUntil(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserStatus.until: ' + e.message);
                    }
                }

                this.__prop_until = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatus.prototype, 'onPhone', {
            get: function() { return this.__prop_onPhone; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for UserStatus.onPhone, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_onPhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatus.prototype, 'onPhoneChanged', {
            get: function() { return this.__prop_onPhoneChanged; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for UserStatus.onPhoneChanged, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_onPhoneChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatus.prototype, 'statusChanged', {
            get: function() { return this.__prop_statusChanged; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for UserStatus.statusChanged, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatus.prototype, 'stations', {
            get: function() { return this.__prop_stations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for UserStatus.stations, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_stations = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatus.prototype, 'icServers', {
            get: function() { return this.__prop_icServers; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for UserStatus.icServers, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_icServers = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatus.prototype, 'presenceServer', {
            get: function() { return this.__prop_presenceServer; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for UserStatus.presenceServer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_presenceServer = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatus.prototype, 'loggedIn', {
            get: function() { return this.__prop_loggedIn; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for UserStatus.loggedIn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_loggedIn = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserStatus, '__type', { value: 'urn:inin.com:status:userStatus' });

    Object.defineProperty(UserStatus, '__propInfo', {
        get: function() {
            var pi = {
                'userId': { required: true, nullable: false },
                'statusId': { required: true, nullable: false },
                'notes': { required: false, nullable: false },
                'forwardNumber': { required: false, nullable: false },
                'until': { required: false, nullable: true },
                'onPhone': { required: false, nullable: false },
                'onPhoneChanged': { required: false, nullable: false },
                'statusChanged': { required: false, nullable: false },
                'stations': { required: false, nullable: false },
                'icServers': { required: false, nullable: false },
                'presenceServer': { required: false, nullable: false },
                'loggedIn': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:userStatus'] = UserStatus;

    return UserStatus;
}());

var UserStatusPreviousInfo = (function(){
    var hasProps = false;

    function UserStatusPreviousInfo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:userStatusPreviousInfo' });
        }

        UserStatusPreviousInfo._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserStatusPreviousInfo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserStatusPreviousInfo.prototype, 'statusId', {
            get: function() { return this.__prop_statusId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UserStatusPreviousInfo.statusId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusId = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatusPreviousInfo.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UserStatusPreviousInfo.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatusPreviousInfo.prototype, 'forwardNumber', {
            get: function() { return this.__prop_forwardNumber; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for UserStatusPreviousInfo.forwardNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_forwardNumber = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserStatusPreviousInfo, '__type', { value: 'urn:inin.com:status:userStatusPreviousInfo' });

    Object.defineProperty(UserStatusPreviousInfo, '__propInfo', {
        get: function() {
            var pi = {
                'statusId': { required: true, nullable: false },
                'notes': { required: true, nullable: false },
                'forwardNumber': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:userStatusPreviousInfo'] = UserStatusPreviousInfo;

    return UserStatusPreviousInfo;
}());

var StatusMessages = (function(){
    var hasProps = false;

    function StatusMessages() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:statusMessages' });
        }

        StatusMessages._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatusMessages, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatusMessages.prototype, 'statusMessageList', {
            get: function() { return this.__prop_statusMessageList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatusMessage); }))) {
                    try {
                        value = value.map(function(item){ return new StatusMessage(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatusMessages.statusMessageList: ' + e.message);
                    }
                }

                this.__prop_statusMessageList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatusMessages, '__type', { value: 'urn:inin.com:status:statusMessages' });

    Object.defineProperty(StatusMessages, '__propInfo', {
        get: function() {
            var pi = {
                'statusMessageList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:statusMessages'] = StatusMessages;

    return StatusMessages;
}());

var StatusMessagesUserAccess = (function(){
    var hasProps = false;

    function StatusMessagesUserAccess() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:statusMessagesUserAccess' });
        }

        StatusMessagesUserAccess._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatusMessagesUserAccess, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatusMessagesUserAccess.prototype, 'userId', {
            get: function() { return this.__prop_userId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatusMessagesUserAccess.userId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userId = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessagesUserAccess.prototype, 'statusMessages', {
            get: function() { return this.__prop_statusMessages; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for StatusMessagesUserAccess.statusMessages, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusMessages = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatusMessagesUserAccess, '__type', { value: 'urn:inin.com:status:statusMessagesUserAccess' });

    Object.defineProperty(StatusMessagesUserAccess, '__propInfo', {
        get: function() {
            var pi = {
                'userId': { required: true, nullable: false },
                'statusMessages': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:statusMessagesUserAccess'] = StatusMessagesUserAccess;

    return StatusMessagesUserAccess;
}());

var UserStatusUpdate = (function(){
    var hasProps = false;

    function UserStatusUpdate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:userStatusUpdate' });
        }

        UserStatusUpdate._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserStatusUpdate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserStatusUpdate.prototype, 'statusId', {
            get: function() { return this.__prop_statusId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UserStatusUpdate.statusId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusId = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatusUpdate.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for UserStatusUpdate.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatusUpdate.prototype, 'forwardNumber', {
            get: function() { return this.__prop_forwardNumber; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for UserStatusUpdate.forwardNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_forwardNumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatusUpdate.prototype, 'until', {
            get: function() { return this.__prop_until; },
            set: function(value) {
                if (!(value instanceof UserStatusUntil || value === void 0 || value === null)) {
                    try {
                        value = new UserStatusUntil(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserStatusUpdate.until: ' + e.message);
                    }
                }

                this.__prop_until = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserStatusUpdate, '__type', { value: 'urn:inin.com:status:userStatusUpdate' });

    Object.defineProperty(UserStatusUpdate, '__propInfo', {
        get: function() {
            var pi = {
                'statusId': { required: true, nullable: false },
                'notes': { required: false, nullable: false },
                'forwardNumber': { required: false, nullable: false },
                'until': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:userStatusUpdate'] = UserStatusUpdate;

    return UserStatusUpdate;
}());

var UserStatusPreviousInfos = (function(){
    var hasProps = false;

    function UserStatusPreviousInfos() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:userStatusPreviousInfos' });
        }

        UserStatusPreviousInfos._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserStatusPreviousInfos, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserStatusPreviousInfos.prototype, 'userStatusPreviousInfoList', {
            get: function() { return this.__prop_userStatusPreviousInfoList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof UserStatusPreviousInfo); }))) {
                    try {
                        value = value.map(function(item){ return new UserStatusPreviousInfo(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UserStatusPreviousInfos.userStatusPreviousInfoList: ' + e.message);
                    }
                }

                this.__prop_userStatusPreviousInfoList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserStatusPreviousInfos, '__type', { value: 'urn:inin.com:status:userStatusPreviousInfos' });

    Object.defineProperty(UserStatusPreviousInfos, '__propInfo', {
        get: function() {
            var pi = {
                'userStatusPreviousInfoList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:userStatusPreviousInfos'] = UserStatusPreviousInfos;

    return UserStatusPreviousInfos;
}());

var StatusMessagesUserAccessSubscription = (function(){
    var hasProps = false;

    function StatusMessagesUserAccessSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:statusMessagesUserAccessSubscription' });
        }

        StatusMessagesUserAccessSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatusMessagesUserAccessSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatusMessagesUserAccessSubscription.prototype, 'userIds', {
            get: function() { return this.__prop_userIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for StatusMessagesUserAccessSubscription.userIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userIds = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatusMessagesUserAccessSubscription, '__type', { value: 'urn:inin.com:status:statusMessagesUserAccessSubscription' });

    Object.defineProperty(StatusMessagesUserAccessSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'userIds': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:statusMessagesUserAccessSubscription'] = StatusMessagesUserAccessSubscription;

    return StatusMessagesUserAccessSubscription;
}());

var UserStatusSubscription = (function(){
    var hasProps = false;

    function UserStatusSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:userStatusSubscription' });
        }

        UserStatusSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserStatusSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserStatusSubscription.prototype, 'userIds', {
            get: function() { return this.__prop_userIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for UserStatusSubscription.userIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userIds = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserStatusSubscription.prototype, 'userStatusProperties', {
            get: function() { return this.__prop_userStatusProperties; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for UserStatusSubscription.userStatusProperties, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userStatusProperties = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserStatusSubscription, '__type', { value: 'urn:inin.com:status:userStatusSubscription' });

    Object.defineProperty(UserStatusSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'userIds': { required: true, nullable: false },
                'userStatusProperties': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:userStatusSubscription'] = UserStatusSubscription;

    return UserStatusSubscription;
}());

var StatusMessagesMessage = (function(){
    var hasProps = false;

    function StatusMessagesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:statusMessagesMessage', enumerable: true });
        }

        StatusMessagesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatusMessagesMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(StatusMessagesMessage.prototype, 'statusMessagesAdded', {
            get: function() { return this.__prop_statusMessagesAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatusMessage); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new StatusMessage(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatusMessagesMessage.statusMessagesAdded: ' + e.message);
                    }
                }

                this.__prop_statusMessagesAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessagesMessage.prototype, 'statusMessagesRemoved', {
            get: function() { return this.__prop_statusMessagesRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for StatusMessagesMessage.statusMessagesRemoved, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusMessagesRemoved = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessagesMessage.prototype, 'statusMessagesChanged', {
            get: function() { return this.__prop_statusMessagesChanged; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatusMessage); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new StatusMessage(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatusMessagesMessage.statusMessagesChanged: ' + e.message);
                    }
                }

                this.__prop_statusMessagesChanged = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatusMessagesMessage, '__type', { value: 'urn:inin.com:status:statusMessagesMessage' });

    Object.defineProperty(StatusMessagesMessage, '__propInfo', {
        get: function() {
            var pi = {
                'statusMessagesAdded': { required: false, nullable: false },
                'statusMessagesRemoved': { required: false, nullable: false },
                'statusMessagesChanged': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:statusMessagesMessage'] = StatusMessagesMessage;

    return StatusMessagesMessage;
}());

var StatusMessagesUserAccessMessage = (function(){
    var hasProps = false;

    function StatusMessagesUserAccessMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:statusMessagesUserAccessMessage', enumerable: true });
        }

        StatusMessagesUserAccessMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatusMessagesUserAccessMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(StatusMessagesUserAccessMessage.prototype, 'statusMessagesUserAccessChanges', {
            get: function() { return this.__prop_statusMessagesUserAccessChanges; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatusMessagesUserAccessChange); }))) {
                    try {
                        value = value.map(function(item){ return new StatusMessagesUserAccessChange(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatusMessagesUserAccessMessage.statusMessagesUserAccessChanges: ' + e.message);
                    }
                }

                this.__prop_statusMessagesUserAccessChanges = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatusMessagesUserAccessMessage, '__type', { value: 'urn:inin.com:status:statusMessagesUserAccessMessage' });

    Object.defineProperty(StatusMessagesUserAccessMessage, '__propInfo', {
        get: function() {
            var pi = {
                'statusMessagesUserAccessChanges': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:statusMessagesUserAccessMessage'] = StatusMessagesUserAccessMessage;

    return StatusMessagesUserAccessMessage;
}());

var UserStatusMessage = (function(){
    var hasProps = false;

    function UserStatusMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:userStatusMessage', enumerable: true });
        }

        UserStatusMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserStatusMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(UserStatusMessage.prototype, 'userStatusList', {
            get: function() { return this.__prop_userStatusList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof UserStatus); }))) {
                    try {
                        value = value.map(function(item){ return new UserStatus(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UserStatusMessage.userStatusList: ' + e.message);
                    }
                }

                this.__prop_userStatusList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserStatusMessage, '__type', { value: 'urn:inin.com:status:userStatusMessage' });

    Object.defineProperty(UserStatusMessage, '__propInfo', {
        get: function() {
            var pi = {
                'userStatusList': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:userStatusMessage'] = UserStatusMessage;

    return UserStatusMessage;
}());

var UserStatusPreviousInfoMessage = (function(){
    var hasProps = false;

    function UserStatusPreviousInfoMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:status:userStatusPreviousInfoMessage', enumerable: true });
        }

        UserStatusPreviousInfoMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserStatusPreviousInfoMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(UserStatusPreviousInfoMessage.prototype, 'userStatusPreviousInfoList', {
            get: function() { return this.__prop_userStatusPreviousInfoList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof UserStatusPreviousInfo); }))) {
                    try {
                        value = value.map(function(item){ return new UserStatusPreviousInfo(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UserStatusPreviousInfoMessage.userStatusPreviousInfoList: ' + e.message);
                    }
                }

                this.__prop_userStatusPreviousInfoList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserStatusPreviousInfoMessage, '__type', { value: 'urn:inin.com:status:userStatusPreviousInfoMessage' });

    Object.defineProperty(UserStatusPreviousInfoMessage, '__propInfo', {
        get: function() {
            var pi = {
                'userStatusPreviousInfoList': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:status:userStatusPreviousInfoMessage'] = UserStatusPreviousInfoMessage;

    return UserStatusPreviousInfoMessage;
}());

var $statusMessages = (function(){
    function getStatusMessages(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStatusMessages.params)) {
            try {
                params = new getStatusMessages.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStatusMessages.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StatusMessages) ? o : new StatusMessages(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStatusMessages.method, getStatusMessages.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStatusMessages, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/status/status-messages', enumerable: true }
    });

    getStatusMessages.params = (function(){
        _util.inherits(getStatusMessages_params, _util.RequestParams);

        function getStatusMessages_params(properties) {
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

            getStatusMessages_params._super.constructor.apply(this, arguments);
        }

        return getStatusMessages_params;
    })();

    return Object.create(null, {
        getStatusMessages: { value: getStatusMessages, enumerable: true }
    });
})();

var $statusMessagesUserAccess = (function(){
    function getStatusMessagesUserAccessList(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStatusMessagesUserAccessList.params)) {
            try {
                params = new getStatusMessagesUserAccessList.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStatusMessagesUserAccessList.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StatusMessagesUserAccess) ? o : new StatusMessagesUserAccess(o); };
        dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStatusMessagesUserAccessList.method, getStatusMessagesUserAccessList.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStatusMessagesUserAccessList, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/status/status-messages-user-access/{userId}', enumerable: true }
    });

    getStatusMessagesUserAccessList.params = (function(){
        _util.inherits(getStatusMessagesUserAccessList_params, _util.RequestParams);

        function getStatusMessagesUserAccessList_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, userId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'userId')) {
                throw new Error('`properties.template` is missing required property: `userId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getStatusMessagesUserAccessList_params._super.constructor.apply(this, arguments);
        }

        return getStatusMessagesUserAccessList_params;
    })();

    return Object.create(null, {
        getStatusMessagesUserAccessList: { value: getStatusMessagesUserAccessList, enumerable: true }
    });
})();

var $userStatuses = (function(){
    function getUserStatus(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getUserStatus.params)) {
            try {
                params = new getUserStatus.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getUserStatus.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof UserStatus) ? o : new UserStatus(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getUserStatus.method, getUserStatus.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getUserStatus, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/status/user-statuses/{userId}', enumerable: true }
    });

    getUserStatus.params = (function(){
        _util.inherits(getUserStatus_params, _util.RequestParams);

        function getUserStatus_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, userId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'userId')) {
                throw new Error('`properties.template` is missing required property: `userId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getUserStatus_params._super.constructor.apply(this, arguments);
        }

        return getUserStatus_params;
    })();

    function putUserStatus(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof putUserStatus.params)) {
            try {
                params = new putUserStatus.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: putUserStatus.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['202'] = function(o){ return (o instanceof Common.AsyncOperationAcceptedResponse) ? o : new Common.AsyncOperationAcceptedResponse(o); };
        dc['400'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(putUserStatus.method, putUserStatus.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(putUserStatus, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/status/user-statuses/{userId}', enumerable: true }
    });

    putUserStatus.params = (function(){
        _util.inherits(putUserStatus_params, _util.RequestParams);

        function putUserStatus_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, userId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'userId')) {
                throw new Error('`properties.template` is missing required property: `userId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof UserStatusUpdate)) {
                throw new TypeError('`properties.content` value does not match the expected type: Status.UserStatusUpdate');
            }

            putUserStatus_params._super.constructor.apply(this, arguments);
        }

        return putUserStatus_params;
    })();

    return Object.create(null, {
        getUserStatus: { value: getUserStatus, enumerable: true },
        putUserStatus: { value: putUserStatus, enumerable: true }
    });
})();

var $userStatusPreviousInfo = (function(){
    function getUserStatusPreviousInfo(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getUserStatusPreviousInfo.params)) {
            try {
                params = new getUserStatusPreviousInfo.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getUserStatusPreviousInfo.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof UserStatusPreviousInfos) ? o : new UserStatusPreviousInfos(o); };
        dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getUserStatusPreviousInfo.method, getUserStatusPreviousInfo.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getUserStatusPreviousInfo, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/status/user-status-previous-info/{userId}', enumerable: true }
    });

    getUserStatusPreviousInfo.params = (function(){
        _util.inherits(getUserStatusPreviousInfo_params, _util.RequestParams);

        function getUserStatusPreviousInfo_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, userId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'userId')) {
                throw new Error('`properties.template` is missing required property: `userId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getUserStatusPreviousInfo_params._super.constructor.apply(this, arguments);
        }

        return getUserStatusPreviousInfo_params;
    })();

    return Object.create(null, {
        getUserStatusPreviousInfo: { value: getUserStatusPreviousInfo, enumerable: true }
    });
})();

exports.UserStatusUntil = UserStatusUntil;
exports.StatusMessagesMessage = StatusMessagesMessage;
exports.StatusMessage = StatusMessage;
exports.StatusMessagesUserAccessMessage = StatusMessagesUserAccessMessage;
exports.StatusMessagesUserAccessChange = StatusMessagesUserAccessChange;
exports.UserStatusMessage = UserStatusMessage;
exports.UserStatus = UserStatus;
exports.UserStatusPreviousInfoMessage = UserStatusPreviousInfoMessage;
exports.UserStatusPreviousInfo = UserStatusPreviousInfo;
exports.StatusMessages = StatusMessages;
exports.StatusMessagesUserAccess = StatusMessagesUserAccess;
exports.UserStatusUpdate = UserStatusUpdate;
exports.UserStatusPreviousInfos = UserStatusPreviousInfos;
exports.StatusMessagesUserAccessSubscription = StatusMessagesUserAccessSubscription;
exports.UserStatusSubscription = UserStatusSubscription;
exports.$statusMessages = $statusMessages;
exports.$statusMessagesUserAccess = $statusMessagesUserAccess;
exports.$userStatuses = $userStatuses;
exports.$userStatusPreviousInfo = $userStatusPreviousInfo;
