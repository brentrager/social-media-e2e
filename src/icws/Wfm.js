/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var TimeOffRequestType = (function(){
    var instanceCache = {};
    function TimeOffRequestType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:timeOffRequestType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(TimeOffRequestType, _util.EnumValue);

    Object.defineProperties(TimeOffRequestType, {
        'FullDay': { value: new TimeOffRequestType(3, 'FullDay'), enumerable: true },
        'PartialDay': { value: new TimeOffRequestType(5, 'PartialDay'), enumerable: true },
        'All': { value: new TimeOffRequestType(15, 'All'), enumerable: true }
    });

    Object.defineProperty(TimeOffRequestType, '__type', { value: 'urn:inin.com:wfm:timeOffRequestType' });

    _typemap['urn:inin.com:wfm:timeOffRequestType'] = TimeOffRequestType;

    return TimeOffRequestType;
}());

var TimeOffRequestState = (function(){
    var instanceCache = {};
    function TimeOffRequestState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:timeOffRequestState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(TimeOffRequestState, _util.EnumValue);

    Object.defineProperties(TimeOffRequestState, {
        'Pending': { value: new TimeOffRequestState(3, 'Pending'), enumerable: true },
        'Approved': { value: new TimeOffRequestState(5, 'Approved'), enumerable: true },
        'Denied': { value: new TimeOffRequestState(7, 'Denied'), enumerable: true },
        'Canceled': { value: new TimeOffRequestState(13, 'Canceled'), enumerable: true },
        'All': { value: new TimeOffRequestState(1365, 'All'), enumerable: true }
    });

    Object.defineProperty(TimeOffRequestState, '__type', { value: 'urn:inin.com:wfm:timeOffRequestState' });

    _typemap['urn:inin.com:wfm:timeOffRequestState'] = TimeOffRequestState;

    return TimeOffRequestState;
}());

var WaitlistReason = (function(){
    var instanceCache = {};
    function WaitlistReason(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:waitlistReason' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(WaitlistReason, _util.EnumValue);

    Object.defineProperties(WaitlistReason, {
        'NotWaitlisted': { value: new WaitlistReason(0, 'NotWaitlisted'), enumerable: true },
        'Unknown': { value: new WaitlistReason(1, 'Unknown'), enumerable: true },
        'ActivityCodeNotPartOfAccrualPlan': { value: new WaitlistReason(2, 'ActivityCodeNotPartOfAccrualPlan'), enumerable: true },
        'AutoApproveDisabled': { value: new WaitlistReason(3, 'AutoApproveDisabled'), enumerable: true },
        'NotEnoughAccruedHours': { value: new WaitlistReason(4, 'NotEnoughAccruedHours'), enumerable: true },
        'NotEnoughAvailableAllotments': { value: new WaitlistReason(5, 'NotEnoughAvailableAllotments'), enumerable: true },
        'UserDoesNotBelongToSchedulingUnit': { value: new WaitlistReason(6, 'UserDoesNotBelongToSchedulingUnit'), enumerable: true },
        'UserDoesNotBelongToCoverageGroup': { value: new WaitlistReason(7, 'UserDoesNotBelongToCoverageGroup'), enumerable: true },
        'NoAllotmentDataExists': { value: new WaitlistReason(8, 'NoAllotmentDataExists'), enumerable: true },
        'InvalidatesApprovedRequestsInFuture': { value: new WaitlistReason(9, 'InvalidatesApprovedRequestsInFuture'), enumerable: true }
    });

    Object.defineProperty(WaitlistReason, '__type', { value: 'urn:inin.com:wfm:waitlistReason' });

    _typemap['urn:inin.com:wfm:waitlistReason'] = WaitlistReason;

    return WaitlistReason;
}());

var DenyReason = (function(){
    var instanceCache = {};
    function DenyReason(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:denyReason' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DenyReason, _util.EnumValue);

    Object.defineProperties(DenyReason, {
        'NotDenied': { value: new DenyReason(0, 'NotDenied'), enumerable: true },
        'Unknown': { value: new DenyReason(1, 'Unknown'), enumerable: true },
        'RequestExceedsWaitlistCap': { value: new DenyReason(2, 'RequestExceedsWaitlistCap'), enumerable: true },
        'RequestOnBlackoutDay': { value: new DenyReason(3, 'RequestOnBlackoutDay'), enumerable: true },
        'RequestOutsideActiveTimeOffPlan': { value: new DenyReason(4, 'RequestOutsideActiveTimeOffPlan'), enumerable: true },
        'RequestOverlapsWithExistingTOR': { value: new DenyReason(5, 'RequestOverlapsWithExistingTOR'), enumerable: true }
    });

    Object.defineProperty(DenyReason, '__type', { value: 'urn:inin.com:wfm:denyReason' });

    _typemap['urn:inin.com:wfm:denyReason'] = DenyReason;

    return DenyReason;
}());

var TradeRequestState = (function(){
    var instanceCache = {};
    function TradeRequestState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:tradeRequestState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(TradeRequestState, _util.EnumValue);

    Object.defineProperties(TradeRequestState, {
        'UnMatched': { value: new TradeRequestState(3, 'UnMatched'), enumerable: true },
        'Matched': { value: new TradeRequestState(5, 'Matched'), enumerable: true },
        'Denied': { value: new TradeRequestState(7, 'Denied'), enumerable: true },
        'Canceled': { value: new TradeRequestState(11, 'Canceled'), enumerable: true },
        'Expired': { value: new TradeRequestState(13, 'Expired'), enumerable: true },
        'All': { value: new TradeRequestState(15015, 'All'), enumerable: true }
    });

    Object.defineProperty(TradeRequestState, '__type', { value: 'urn:inin.com:wfm:tradeRequestState' });

    _typemap['urn:inin.com:wfm:tradeRequestState'] = TradeRequestState;

    return TradeRequestState;
}());

var TradeMatchState = (function(){
    var instanceCache = {};
    function TradeMatchState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:tradeMatchState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(TradeMatchState, _util.EnumValue);

    Object.defineProperties(TradeMatchState, {
        'PendingForAdminReview': { value: new TradeMatchState(3, 'PendingForAdminReview'), enumerable: true },
        'Approved': { value: new TradeMatchState(5, 'Approved'), enumerable: true },
        'Denied': { value: new TradeMatchState(7, 'Denied'), enumerable: true },
        'Canceled': { value: new TradeMatchState(11, 'Canceled'), enumerable: true },
        'Expired': { value: new TradeMatchState(13, 'Expired'), enumerable: true },
        'All': { value: new TradeMatchState(15015, 'All'), enumerable: true }
    });

    Object.defineProperty(TradeMatchState, '__type', { value: 'urn:inin.com:wfm:tradeMatchState' });

    _typemap['urn:inin.com:wfm:tradeMatchState'] = TradeMatchState;

    return TradeMatchState;
}());

var ActivityType = (function(){
    var instanceCache = {};
    function ActivityType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:activityType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ActivityType, _util.EnumValue);

    Object.defineProperties(ActivityType, {
        'Break': { value: new ActivityType(1, 'Break'), enumerable: true },
        'Meal': { value: new ActivityType(2, 'Meal'), enumerable: true },
        'Meeting': { value: new ActivityType(3, 'Meeting'), enumerable: true },
        'ACD': { value: new ActivityType(4, 'ACD'), enumerable: true },
        'NonACD': { value: new ActivityType(5, 'NonACD'), enumerable: true },
        'TimeOff': { value: new ActivityType(6, 'TimeOff'), enumerable: true },
        'Training': { value: new ActivityType(7, 'Training'), enumerable: true },
        'Unavailable': { value: new ActivityType(8, 'Unavailable'), enumerable: true },
        'Unscheduled': { value: new ActivityType(9, 'Unscheduled'), enumerable: true },
        'Vacation': { value: new ActivityType(10, 'Vacation'), enumerable: true },
        'Unknown': { value: new ActivityType(11, 'Unknown'), enumerable: true }
    });

    Object.defineProperty(ActivityType, '__type', { value: 'urn:inin.com:wfm:activityType' });

    _typemap['urn:inin.com:wfm:activityType'] = ActivityType;

    return ActivityType;
}());

var DayOfWeek = (function(){
    var instanceCache = {};
    function DayOfWeek(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:dayOfWeek' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DayOfWeek, _util.EnumValue);

    Object.defineProperties(DayOfWeek, {
        'Sunday': { value: new DayOfWeek(0, 'Sunday'), enumerable: true },
        'Monday': { value: new DayOfWeek(1, 'Monday'), enumerable: true },
        'Tuesday': { value: new DayOfWeek(2, 'Tuesday'), enumerable: true },
        'Wednesday': { value: new DayOfWeek(3, 'Wednesday'), enumerable: true },
        'Thursday': { value: new DayOfWeek(4, 'Thursday'), enumerable: true },
        'Friday': { value: new DayOfWeek(5, 'Friday'), enumerable: true },
        'Saturday': { value: new DayOfWeek(6, 'Saturday'), enumerable: true }
    });

    Object.defineProperty(DayOfWeek, '__type', { value: 'urn:inin.com:wfm:dayOfWeek' });

    _typemap['urn:inin.com:wfm:dayOfWeek'] = DayOfWeek;

    return DayOfWeek;
}());

var PerformTradeStatus = (function(){
    var instanceCache = {};
    function PerformTradeStatus(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:performTradeStatus' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(PerformTradeStatus, _util.EnumValue);

    Object.defineProperties(PerformTradeStatus, {
        'Success': { value: new PerformTradeStatus(0, 'Success'), enumerable: true },
        'Failed': { value: new PerformTradeStatus(1, 'Failed'), enumerable: true },
        'PutInAdminReview': { value: new PerformTradeStatus(2, 'PutInAdminReview'), enumerable: true }
    });

    Object.defineProperty(PerformTradeStatus, '__type', { value: 'urn:inin.com:wfm:performTradeStatus' });

    _typemap['urn:inin.com:wfm:performTradeStatus'] = PerformTradeStatus;

    return PerformTradeStatus;
}());

var TimeOffRequest = (function(){
    var hasProps = false;

    function TimeOffRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:timeOffRequest' });
        }

        TimeOffRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(TimeOffRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TimeOffRequest.prototype, 'requestType', {
            get: function() { return this.__prop_requestType; },
            set: function(value) {
                if (!(value instanceof TimeOffRequestType || value === void 0)) {
                    try {
                        value = new TimeOffRequestType(value);
                    } catch (e) {
                        throw new TypeError('Error setting TimeOffRequest.requestType: ' + e.message);
                    }
                }

                this.__prop_requestType = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'requestState', {
            get: function() { return this.__prop_requestState; },
            set: function(value) {
                if (!(value instanceof TimeOffRequestState || value === void 0)) {
                    try {
                        value = new TimeOffRequestState(value);
                    } catch (e) {
                        throw new TypeError('Error setting TimeOffRequest.requestState: ' + e.message);
                    }
                }

                this.__prop_requestState = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'lengthInMinutes', {
            get: function() { return this.__prop_lengthInMinutes; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for TimeOffRequest.lengthInMinutes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lengthInMinutes = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for TimeOffRequest.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'startUtc', {
            get: function() { return this.__prop_startUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for TimeOffRequest.startUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_startUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'endUtc', {
            get: function() { return this.__prop_endUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for TimeOffRequest.endUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_endUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'activityCodeId', {
            get: function() { return this.__prop_activityCodeId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for TimeOffRequest.activityCodeId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activityCodeId = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'timeOffRequestId', {
            get: function() { return this.__prop_timeOffRequestId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for TimeOffRequest.timeOffRequestId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeOffRequestId = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'cicUserName', {
            get: function() { return this.__prop_cicUserName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for TimeOffRequest.cicUserName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_cicUserName = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'isPaidTime', {
            get: function() { return this.__prop_isPaidTime; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for TimeOffRequest.isPaidTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isPaidTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'submittedUserId', {
            get: function() { return this.__prop_submittedUserId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for TimeOffRequest.submittedUserId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_submittedUserId = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'submittedDateTimeUtc', {
            get: function() { return this.__prop_submittedDateTimeUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for TimeOffRequest.submittedDateTimeUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_submittedDateTimeUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'reviewerUserId', {
            get: function() { return this.__prop_reviewerUserId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for TimeOffRequest.reviewerUserId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_reviewerUserId = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'reviewedDateTimeUtc', {
            get: function() { return this.__prop_reviewedDateTimeUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for TimeOffRequest.reviewedDateTimeUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_reviewedDateTimeUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'waitlistReason', {
            get: function() { return this.__prop_waitlistReason; },
            set: function(value) {
                if (!(value instanceof WaitlistReason || value === void 0)) {
                    try {
                        value = new WaitlistReason(value);
                    } catch (e) {
                        throw new TypeError('Error setting TimeOffRequest.waitlistReason: ' + e.message);
                    }
                }

                this.__prop_waitlistReason = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffRequest.prototype, 'denyReason', {
            get: function() { return this.__prop_denyReason; },
            set: function(value) {
                if (!(value instanceof DenyReason || value === void 0)) {
                    try {
                        value = new DenyReason(value);
                    } catch (e) {
                        throw new TypeError('Error setting TimeOffRequest.denyReason: ' + e.message);
                    }
                }

                this.__prop_denyReason = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TimeOffRequest, '__type', { value: 'urn:inin.com:wfm:timeOffRequest' });

    Object.defineProperty(TimeOffRequest, '__propInfo', {
        get: function() {
            var pi = {
                'requestType': { required: false, nullable: false },
                'requestState': { required: false, nullable: false },
                'lengthInMinutes': { required: false, nullable: false },
                'description': { required: false, nullable: true },
                'startUtc': { required: false, nullable: false },
                'endUtc': { required: false, nullable: false },
                'activityCodeId': { required: false, nullable: false },
                'timeOffRequestId': { required: false, nullable: false },
                'cicUserName': { required: false, nullable: false },
                'isPaidTime': { required: false, nullable: false },
                'submittedUserId': { required: false, nullable: false },
                'submittedDateTimeUtc': { required: false, nullable: false },
                'reviewerUserId': { required: false, nullable: false },
                'reviewedDateTimeUtc': { required: false, nullable: false },
                'waitlistReason': { required: false, nullable: false },
                'denyReason': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:timeOffRequest'] = TimeOffRequest;

    return TimeOffRequest;
}());

var ShiftTradeRequest = (function(){
    var hasProps = false;

    function ShiftTradeRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:shiftTradeRequest' });
        }

        ShiftTradeRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(ShiftTradeRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ShiftTradeRequest.prototype, 'requestState', {
            get: function() { return this.__prop_requestState; },
            set: function(value) {
                if (!(value instanceof TradeRequestState || value === void 0)) {
                    try {
                        value = new TradeRequestState(value);
                    } catch (e) {
                        throw new TypeError('Error setting ShiftTradeRequest.requestState: ' + e.message);
                    }
                }

                this.__prop_requestState = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'minStartTimeGivenUtc', {
            get: function() { return this.__prop_minStartTimeGivenUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ShiftTradeRequest.minStartTimeGivenUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minStartTimeGivenUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'minEndTimeGivenUtc', {
            get: function() { return this.__prop_minEndTimeGivenUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ShiftTradeRequest.minEndTimeGivenUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minEndTimeGivenUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'maxStartTimeGivenUtc', {
            get: function() { return this.__prop_maxStartTimeGivenUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ShiftTradeRequest.maxStartTimeGivenUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxStartTimeGivenUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'maxEndTimeGivenUtc', {
            get: function() { return this.__prop_maxEndTimeGivenUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ShiftTradeRequest.maxEndTimeGivenUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxEndTimeGivenUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'startTimeAcceptedUtc', {
            get: function() { return this.__prop_startTimeAcceptedUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ShiftTradeRequest.startTimeAcceptedUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_startTimeAcceptedUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'endTimeAcceptedUtc', {
            get: function() { return this.__prop_endTimeAcceptedUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ShiftTradeRequest.endTimeAcceptedUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_endTimeAcceptedUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'startTimeOfferedUtc', {
            get: function() { return this.__prop_startTimeOfferedUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ShiftTradeRequest.startTimeOfferedUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_startTimeOfferedUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'endTimeOfferedUtc', {
            get: function() { return this.__prop_endTimeOfferedUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ShiftTradeRequest.endTimeOfferedUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_endTimeOfferedUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'acceptableTimesToTake', {
            get: function() { return this.__prop_acceptableTimesToTake; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AcceptableStartTime); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AcceptableStartTime(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ShiftTradeRequest.acceptableTimesToTake: ' + e.message);
                    }
                }

                this.__prop_acceptableTimesToTake = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'shiftTradeRequestId', {
            get: function() { return this.__prop_shiftTradeRequestId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ShiftTradeRequest.shiftTradeRequestId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shiftTradeRequestId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'requestExpirationUtc', {
            get: function() { return this.__prop_requestExpirationUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ShiftTradeRequest.requestExpirationUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_requestExpirationUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'canEditTradeRequest', {
            get: function() { return this.__prop_canEditTradeRequest; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ShiftTradeRequest.canEditTradeRequest, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_canEditTradeRequest = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'canCancelTradeRequest', {
            get: function() { return this.__prop_canCancelTradeRequest; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ShiftTradeRequest.canCancelTradeRequest, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_canCancelTradeRequest = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeRequest.prototype, 'matchState', {
            get: function() { return this.__prop_matchState; },
            set: function(value) {
                if (!(value instanceof TradeMatchState || value === void 0)) {
                    try {
                        value = new TradeMatchState(value);
                    } catch (e) {
                        throw new TypeError('Error setting ShiftTradeRequest.matchState: ' + e.message);
                    }
                }

                this.__prop_matchState = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ShiftTradeRequest, '__type', { value: 'urn:inin.com:wfm:shiftTradeRequest' });

    Object.defineProperty(ShiftTradeRequest, '__propInfo', {
        get: function() {
            var pi = {
                'requestState': { required: false, nullable: false },
                'minStartTimeGivenUtc': { required: false, nullable: false },
                'minEndTimeGivenUtc': { required: false, nullable: false },
                'maxStartTimeGivenUtc': { required: false, nullable: false },
                'maxEndTimeGivenUtc': { required: false, nullable: false },
                'startTimeAcceptedUtc': { required: false, nullable: false },
                'endTimeAcceptedUtc': { required: false, nullable: false },
                'startTimeOfferedUtc': { required: false, nullable: false },
                'endTimeOfferedUtc': { required: false, nullable: false },
                'acceptableTimesToTake': { required: false, nullable: false },
                'shiftTradeRequestId': { required: false, nullable: false },
                'requestExpirationUtc': { required: false, nullable: false },
                'canEditTradeRequest': { required: false, nullable: false },
                'canCancelTradeRequest': { required: false, nullable: false },
                'matchState': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:shiftTradeRequest'] = ShiftTradeRequest;

    return ShiftTradeRequest;
}());

var AcceptableStartTime = (function(){
    var hasProps = false;

    function AcceptableStartTime() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:acceptableStartTime' });
        }

        AcceptableStartTime._super.constructor.apply(this, arguments);
    }
    _util.inherits(AcceptableStartTime, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AcceptableStartTime.prototype, 'earliestStartUtc', {
            get: function() { return this.__prop_earliestStartUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for AcceptableStartTime.earliestStartUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_earliestStartUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(AcceptableStartTime.prototype, 'latestStartUtc', {
            get: function() { return this.__prop_latestStartUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for AcceptableStartTime.latestStartUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_latestStartUtc = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AcceptableStartTime, '__type', { value: 'urn:inin.com:wfm:acceptableStartTime' });

    Object.defineProperty(AcceptableStartTime, '__propInfo', {
        get: function() {
            var pi = {
                'earliestStartUtc': { required: false, nullable: false },
                'latestStartUtc': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:acceptableStartTime'] = AcceptableStartTime;

    return AcceptableStartTime;
}());

var ShiftTradeMatch = (function(){
    var hasProps = false;

    function ShiftTradeMatch() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:shiftTradeMatch' });
        }

        ShiftTradeMatch._super.constructor.apply(this, arguments);
    }
    _util.inherits(ShiftTradeMatch, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ShiftTradeMatch.prototype, 'shiftTradeMatchId', {
            get: function() { return this.__prop_shiftTradeMatchId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ShiftTradeMatch.shiftTradeMatchId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shiftTradeMatchId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeMatch.prototype, 'matchState', {
            get: function() { return this.__prop_matchState; },
            set: function(value) {
                if (!(value instanceof TradeMatchState || value === void 0)) {
                    try {
                        value = new TradeMatchState(value);
                    } catch (e) {
                        throw new TypeError('Error setting ShiftTradeMatch.matchState: ' + e.message);
                    }
                }

                this.__prop_matchState = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeMatch.prototype, 'startTimeAcceptedUtc', {
            get: function() { return this.__prop_startTimeAcceptedUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ShiftTradeMatch.startTimeAcceptedUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_startTimeAcceptedUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeMatch.prototype, 'endTimeAcceptedUtc', {
            get: function() { return this.__prop_endTimeAcceptedUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ShiftTradeMatch.endTimeAcceptedUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_endTimeAcceptedUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeMatch.prototype, 'startTimeOfferedUtc', {
            get: function() { return this.__prop_startTimeOfferedUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ShiftTradeMatch.startTimeOfferedUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_startTimeOfferedUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeMatch.prototype, 'endTimeOfferedUtc', {
            get: function() { return this.__prop_endTimeOfferedUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ShiftTradeMatch.endTimeOfferedUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_endTimeOfferedUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ShiftTradeMatch.prototype, 'canCancelTradeMatch', {
            get: function() { return this.__prop_canCancelTradeMatch; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ShiftTradeMatch.canCancelTradeMatch, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_canCancelTradeMatch = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ShiftTradeMatch, '__type', { value: 'urn:inin.com:wfm:shiftTradeMatch' });

    Object.defineProperty(ShiftTradeMatch, '__propInfo', {
        get: function() {
            var pi = {
                'shiftTradeMatchId': { required: false, nullable: false },
                'matchState': { required: false, nullable: false },
                'startTimeAcceptedUtc': { required: false, nullable: false },
                'endTimeAcceptedUtc': { required: false, nullable: false },
                'startTimeOfferedUtc': { required: false, nullable: false },
                'endTimeOfferedUtc': { required: false, nullable: false },
                'canCancelTradeMatch': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:shiftTradeMatch'] = ShiftTradeMatch;

    return ShiftTradeMatch;
}());

var WfmData = (function(){
    var hasProps = false;

    function WfmData() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:wfmData' });
        }

        WfmData._super.constructor.apply(this, arguments);
    }
    _util.inherits(WfmData, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WfmData.prototype, 'schedule', {
            get: function() { return this.__prop_schedule; },
            set: function(value) {
                if (!(value instanceof VersionedScheduleIntervalCollection)) {
                    try {
                        value = new VersionedScheduleIntervalCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting WfmData.schedule: ' + e.message);
                    }
                }

                this.__prop_schedule = value;
            },
            enumerable: true
        });

        Object.defineProperty(WfmData.prototype, 'timeOff', {
            get: function() { return this.__prop_timeOff; },
            set: function(value) {
                if (!(value instanceof VersionedTimeOffRequestCollection)) {
                    try {
                        value = new VersionedTimeOffRequestCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting WfmData.timeOff: ' + e.message);
                    }
                }

                this.__prop_timeOff = value;
            },
            enumerable: true
        });

        Object.defineProperty(WfmData.prototype, 'availability', {
            get: function() { return this.__prop_availability; },
            set: function(value) {
                if (!(value instanceof VersionedTimeOffAvailabilityCollection)) {
                    try {
                        value = new VersionedTimeOffAvailabilityCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting WfmData.availability: ' + e.message);
                    }
                }

                this.__prop_availability = value;
            },
            enumerable: true
        });

        Object.defineProperty(WfmData.prototype, 'accrual', {
            get: function() { return this.__prop_accrual; },
            set: function(value) {
                if (!(value instanceof VersionedTimeOffAccrualCollection)) {
                    try {
                        value = new VersionedTimeOffAccrualCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting WfmData.accrual: ' + e.message);
                    }
                }

                this.__prop_accrual = value;
            },
            enumerable: true
        });

        Object.defineProperty(WfmData.prototype, 'activityCodes', {
            get: function() { return this.__prop_activityCodes; },
            set: function(value) {
                if (!(value instanceof VersionedActivityCodeMap)) {
                    try {
                        value = new VersionedActivityCodeMap(value);
                    } catch (e) {
                        throw new TypeError('Error setting WfmData.activityCodes: ' + e.message);
                    }
                }

                this.__prop_activityCodes = value;
            },
            enumerable: true
        });

        Object.defineProperty(WfmData.prototype, 'statusMappings', {
            get: function() { return this.__prop_statusMappings; },
            set: function(value) {
                if (!(value instanceof VersionedStatusMap)) {
                    try {
                        value = new VersionedStatusMap(value);
                    } catch (e) {
                        throw new TypeError('Error setting WfmData.statusMappings: ' + e.message);
                    }
                }

                this.__prop_statusMappings = value;
            },
            enumerable: true
        });

        Object.defineProperty(WfmData.prototype, 'configuration', {
            get: function() { return this.__prop_configuration; },
            set: function(value) {
                if (!(value instanceof AgentConfiguration || value === null)) {
                    try {
                        value = new AgentConfiguration(value);
                    } catch (e) {
                        throw new TypeError('Error setting WfmData.configuration: ' + e.message);
                    }
                }

                this.__prop_configuration = value;
            },
            enumerable: true
        });

        Object.defineProperty(WfmData.prototype, 'notifications', {
            get: function() { return this.__prop_notifications; },
            set: function(value) {
                if (!(value instanceof VersionedNotificationCollection)) {
                    try {
                        value = new VersionedNotificationCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting WfmData.notifications: ' + e.message);
                    }
                }

                this.__prop_notifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(WfmData.prototype, 'tradeRequests', {
            get: function() { return this.__prop_tradeRequests; },
            set: function(value) {
                if (!(value instanceof VersionedShiftTradeRequestCollection || value === void 0)) {
                    try {
                        value = new VersionedShiftTradeRequestCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting WfmData.tradeRequests: ' + e.message);
                    }
                }

                this.__prop_tradeRequests = value;
            },
            enumerable: true
        });

        Object.defineProperty(WfmData.prototype, 'tradeMatches', {
            get: function() { return this.__prop_tradeMatches; },
            set: function(value) {
                if (!(value instanceof VersionedShiftTradeMatchCollection || value === void 0)) {
                    try {
                        value = new VersionedShiftTradeMatchCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting WfmData.tradeMatches: ' + e.message);
                    }
                }

                this.__prop_tradeMatches = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WfmData, '__type', { value: 'urn:inin.com:wfm:wfmData' });

    Object.defineProperty(WfmData, '__propInfo', {
        get: function() {
            var pi = {
                'schedule': { required: true, nullable: false },
                'timeOff': { required: true, nullable: false },
                'availability': { required: true, nullable: false },
                'accrual': { required: true, nullable: false },
                'activityCodes': { required: true, nullable: false },
                'statusMappings': { required: true, nullable: false },
                'configuration': { required: true, nullable: true },
                'notifications': { required: true, nullable: false },
                'tradeRequests': { required: false, nullable: false },
                'tradeMatches': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:wfmData'] = WfmData;

    return WfmData;
}());

var VersionedObject = (function(){
    var hasProps = false;

    function VersionedObject() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:versionedObject' });
        }

        VersionedObject._super.constructor.apply(this, arguments);
    }
    _util.inherits(VersionedObject, _util.DataContract);

    function defineProps() {
        Object.defineProperty(VersionedObject.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for VersionedObject.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VersionedObject, '__type', { value: 'urn:inin.com:wfm:versionedObject' });

    Object.defineProperty(VersionedObject, '__propInfo', {
        get: function() {
            var pi = {
                'version': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:versionedObject'] = VersionedObject;

    return VersionedObject;
}());

var TimeOffAvailability = (function(){
    var hasProps = false;

    function TimeOffAvailability() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:timeOffAvailability' });
        }

        TimeOffAvailability._super.constructor.apply(this, arguments);
    }
    _util.inherits(TimeOffAvailability, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TimeOffAvailability.prototype, 'date', {
            get: function() { return this.__prop_date; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for TimeOffAvailability.date, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_date = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffAvailability.prototype, 'availableMinutes', {
            get: function() { return this.__prop_availableMinutes; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for TimeOffAvailability.availableMinutes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_availableMinutes = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffAvailability.prototype, 'waitlistMinutes', {
            get: function() { return this.__prop_waitlistMinutes; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for TimeOffAvailability.waitlistMinutes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_waitlistMinutes = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffAvailability.prototype, 'isBlackout', {
            get: function() { return this.__prop_isBlackout; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for TimeOffAvailability.isBlackout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isBlackout = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TimeOffAvailability, '__type', { value: 'urn:inin.com:wfm:timeOffAvailability' });

    Object.defineProperty(TimeOffAvailability, '__propInfo', {
        get: function() {
            var pi = {
                'date': { required: false, nullable: false },
                'availableMinutes': { required: false, nullable: false },
                'waitlistMinutes': { required: false, nullable: false },
                'isBlackout': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:timeOffAvailability'] = TimeOffAvailability;

    return TimeOffAvailability;
}());

var TimeOffAccrual = (function(){
    var hasProps = false;

    function TimeOffAccrual() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:timeOffAccrual' });
        }

        TimeOffAccrual._super.constructor.apply(this, arguments);
    }
    _util.inherits(TimeOffAccrual, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TimeOffAccrual.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for TimeOffAccrual.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffAccrual.prototype, 'codes', {
            get: function() { return this.__prop_codes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for TimeOffAccrual.codes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_codes = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffAccrual.prototype, 'agentCanSubmitTimeOff', {
            get: function() { return this.__prop_agentCanSubmitTimeOff; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for TimeOffAccrual.agentCanSubmitTimeOff, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_agentCanSubmitTimeOff = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffAccrual.prototype, 'agentCanSeeAccrualBalance', {
            get: function() { return this.__prop_agentCanSeeAccrualBalance; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for TimeOffAccrual.agentCanSeeAccrualBalance, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_agentCanSeeAccrualBalance = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffAccrual.prototype, 'minutesAccrued', {
            get: function() { return this.__prop_minutesAccrued; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for TimeOffAccrual.minutesAccrued, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minutesAccrued = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffAccrual.prototype, 'minutesToBeAccruedByEndDate', {
            get: function() { return this.__prop_minutesToBeAccruedByEndDate; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for TimeOffAccrual.minutesToBeAccruedByEndDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minutesToBeAccruedByEndDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeOffAccrual.prototype, 'minutesToBeAccruedByEndOfYear', {
            get: function() { return this.__prop_minutesToBeAccruedByEndOfYear; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for TimeOffAccrual.minutesToBeAccruedByEndOfYear, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minutesToBeAccruedByEndOfYear = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TimeOffAccrual, '__type', { value: 'urn:inin.com:wfm:timeOffAccrual' });

    Object.defineProperty(TimeOffAccrual, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: false, nullable: false },
                'codes': { required: false, nullable: false },
                'agentCanSubmitTimeOff': { required: false, nullable: false },
                'agentCanSeeAccrualBalance': { required: false, nullable: false },
                'minutesAccrued': { required: false, nullable: false },
                'minutesToBeAccruedByEndDate': { required: false, nullable: false },
                'minutesToBeAccruedByEndOfYear': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:timeOffAccrual'] = TimeOffAccrual;

    return TimeOffAccrual;
}());

var ActivityCodeInfo = (function(){
    var hasProps = false;

    function ActivityCodeInfo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:activityCodeInfo' });
        }

        ActivityCodeInfo._super.constructor.apply(this, arguments);
    }
    _util.inherits(ActivityCodeInfo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ActivityCodeInfo.prototype, 'activityCodeId', {
            get: function() { return this.__prop_activityCodeId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ActivityCodeInfo.activityCodeId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activityCodeId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ActivityCodeInfo.prototype, 'activityType', {
            get: function() { return this.__prop_activityType; },
            set: function(value) {
                if (!(value instanceof ActivityType || value === void 0)) {
                    try {
                        value = new ActivityType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ActivityCodeInfo.activityType: ' + e.message);
                    }
                }

                this.__prop_activityType = value;
            },
            enumerable: true
        });

        Object.defineProperty(ActivityCodeInfo.prototype, 'activityCodeName', {
            get: function() { return this.__prop_activityCodeName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ActivityCodeInfo.activityCodeName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activityCodeName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ActivityCodeInfo.prototype, 'shortName', {
            get: function() { return this.__prop_shortName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ActivityCodeInfo.shortName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shortName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ActivityCodeInfo.prototype, 'isPaidTime', {
            get: function() { return this.__prop_isPaidTime; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ActivityCodeInfo.isPaidTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isPaidTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(ActivityCodeInfo.prototype, 'isActive', {
            get: function() { return this.__prop_isActive; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ActivityCodeInfo.isActive, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isActive = value;
            },
            enumerable: true
        });

        Object.defineProperty(ActivityCodeInfo.prototype, 'lengthInMinutes', {
            get: function() { return this.__prop_lengthInMinutes; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for ActivityCodeInfo.lengthInMinutes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lengthInMinutes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ActivityCodeInfo, '__type', { value: 'urn:inin.com:wfm:activityCodeInfo' });

    Object.defineProperty(ActivityCodeInfo, '__propInfo', {
        get: function() {
            var pi = {
                'activityCodeId': { required: false, nullable: false },
                'activityType': { required: false, nullable: false },
                'activityCodeName': { required: false, nullable: false },
                'shortName': { required: false, nullable: false },
                'isPaidTime': { required: false, nullable: false },
                'isActive': { required: false, nullable: false },
                'lengthInMinutes': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:activityCodeInfo'] = ActivityCodeInfo;

    return ActivityCodeInfo;
}());

var ActivityTypeWarningsForShiftTrade = (function(){
    var hasProps = false;

    function ActivityTypeWarningsForShiftTrade() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:activityTypeWarningsForShiftTrade' });
        }

        ActivityTypeWarningsForShiftTrade._super.constructor.apply(this, arguments);
    }
    _util.inherits(ActivityTypeWarningsForShiftTrade, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ActivityTypeWarningsForShiftTrade.prototype, 'activityTypeID', {
            get: function() { return this.__prop_activityTypeID; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ActivityTypeWarningsForShiftTrade.activityTypeID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activityTypeID = value;
            },
            enumerable: true
        });

        Object.defineProperty(ActivityTypeWarningsForShiftTrade.prototype, 'warningMessage', {
            get: function() { return this.__prop_warningMessage; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ActivityTypeWarningsForShiftTrade.warningMessage, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_warningMessage = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ActivityTypeWarningsForShiftTrade, '__type', { value: 'urn:inin.com:wfm:activityTypeWarningsForShiftTrade' });

    Object.defineProperty(ActivityTypeWarningsForShiftTrade, '__propInfo', {
        get: function() {
            var pi = {
                'activityTypeID': { required: true, nullable: false },
                'warningMessage': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:activityTypeWarningsForShiftTrade'] = ActivityTypeWarningsForShiftTrade;

    return ActivityTypeWarningsForShiftTrade;
}());

var Notification = (function(){
    var hasProps = false;

    function Notification() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:notification' });
        }

        Notification._super.constructor.apply(this, arguments);
    }
    _util.inherits(Notification, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Notification.prototype, 'notificationId', {
            get: function() { return this.__prop_notificationId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Notification.notificationId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notificationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Notification.prototype, 'itemType', {
            get: function() { return this.__prop_itemType; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Notification.itemType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_itemType = value;
            },
            enumerable: true
        });

        Object.defineProperty(Notification.prototype, 'notificationType', {
            get: function() { return this.__prop_notificationType; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Notification.notificationType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notificationType = value;
            },
            enumerable: true
        });

        Object.defineProperty(Notification.prototype, 'itemId', {
            get: function() { return this.__prop_itemId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Notification.itemId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_itemId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Notification, '__type', { value: 'urn:inin.com:wfm:notification' });

    Object.defineProperty(Notification, '__propInfo', {
        get: function() {
            var pi = {
                'notificationId': { required: false, nullable: false },
                'itemType': { required: false, nullable: false },
                'notificationType': { required: false, nullable: false },
                'itemId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:notification'] = Notification;

    return Notification;
}());

var ScheduleInterval = (function(){
    var hasProps = false;

    function ScheduleInterval() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:scheduleInterval' });
        }

        ScheduleInterval._super.constructor.apply(this, arguments);
    }
    _util.inherits(ScheduleInterval, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ScheduleInterval.prototype, 'activityType', {
            get: function() { return this.__prop_activityType; },
            set: function(value) {
                if (!(value instanceof ActivityType || value === void 0)) {
                    try {
                        value = new ActivityType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ScheduleInterval.activityType: ' + e.message);
                    }
                }

                this.__prop_activityType = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleInterval.prototype, 'startTimeUtc', {
            get: function() { return this.__prop_startTimeUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ScheduleInterval.startTimeUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_startTimeUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleInterval.prototype, 'endTimeUtc', {
            get: function() { return this.__prop_endTimeUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ScheduleInterval.endTimeUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_endTimeUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleInterval.prototype, 'isPaidTime', {
            get: function() { return this.__prop_isPaidTime; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ScheduleInterval.isPaidTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isPaidTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleInterval.prototype, 'isContiguousTime', {
            get: function() { return this.__prop_isContiguousTime; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ScheduleInterval.isContiguousTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isContiguousTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleInterval.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ScheduleInterval.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleInterval.prototype, 'activityCodeId', {
            get: function() { return this.__prop_activityCodeId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ScheduleInterval.activityCodeId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activityCodeId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleInterval.prototype, 'isPlanned', {
            get: function() { return this.__prop_isPlanned; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ScheduleInterval.isPlanned, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isPlanned = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleInterval.prototype, 'isExcused', {
            get: function() { return this.__prop_isExcused; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ScheduleInterval.isExcused, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isExcused = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleInterval.prototype, 'scheduleIntervalId', {
            get: function() { return this.__prop_scheduleIntervalId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ScheduleInterval.scheduleIntervalId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scheduleIntervalId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleInterval.prototype, 'scheduleId', {
            get: function() { return this.__prop_scheduleId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ScheduleInterval.scheduleId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scheduleId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleInterval.prototype, 'namedScheduleId', {
            get: function() { return this.__prop_namedScheduleId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ScheduleInterval.namedScheduleId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_namedScheduleId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ScheduleInterval, '__type', { value: 'urn:inin.com:wfm:scheduleInterval' });

    Object.defineProperty(ScheduleInterval, '__propInfo', {
        get: function() {
            var pi = {
                'activityType': { required: false, nullable: false },
                'startTimeUtc': { required: false, nullable: false },
                'endTimeUtc': { required: false, nullable: false },
                'isPaidTime': { required: false, nullable: false },
                'isContiguousTime': { required: false, nullable: false },
                'description': { required: false, nullable: true },
                'activityCodeId': { required: false, nullable: false },
                'isPlanned': { required: false, nullable: false },
                'isExcused': { required: false, nullable: false },
                'scheduleIntervalId': { required: false, nullable: false },
                'scheduleId': { required: false, nullable: false },
                'namedScheduleId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:scheduleInterval'] = ScheduleInterval;

    return ScheduleInterval;
}());

var MatchingShiftTradeCountsCollectionContainer = (function(){
    var hasProps = false;

    function MatchingShiftTradeCountsCollectionContainer() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:matchingShiftTradeCountsCollectionContainer' });
        }

        MatchingShiftTradeCountsCollectionContainer._super.constructor.apply(this, arguments);
    }
    _util.inherits(MatchingShiftTradeCountsCollectionContainer, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MatchingShiftTradeCountsCollectionContainer.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MatchingShiftTradeCounts); }))) {
                    try {
                        value = value.map(function(item){ return new MatchingShiftTradeCounts(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MatchingShiftTradeCountsCollectionContainer.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MatchingShiftTradeCountsCollectionContainer, '__type', { value: 'urn:inin.com:wfm:matchingShiftTradeCountsCollectionContainer' });

    Object.defineProperty(MatchingShiftTradeCountsCollectionContainer, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:matchingShiftTradeCountsCollectionContainer'] = MatchingShiftTradeCountsCollectionContainer;

    return MatchingShiftTradeCountsCollectionContainer;
}());

var MatchingShiftTradeCounts = (function(){
    var hasProps = false;

    function MatchingShiftTradeCounts() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:matchingShiftTradeCounts' });
        }

        MatchingShiftTradeCounts._super.constructor.apply(this, arguments);
    }
    _util.inherits(MatchingShiftTradeCounts, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MatchingShiftTradeCounts.prototype, 'matchDateUTC', {
            get: function() { return this.__prop_matchDateUTC; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for MatchingShiftTradeCounts.matchDateUTC, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_matchDateUTC = value;
            },
            enumerable: true
        });

        Object.defineProperty(MatchingShiftTradeCounts.prototype, 'exactMatchesCount', {
            get: function() { return this.__prop_exactMatchesCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for MatchingShiftTradeCounts.exactMatchesCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_exactMatchesCount = value;
            },
            enumerable: true
        });

        Object.defineProperty(MatchingShiftTradeCounts.prototype, 'otherMatchesCount', {
            get: function() { return this.__prop_otherMatchesCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for MatchingShiftTradeCounts.otherMatchesCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_otherMatchesCount = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MatchingShiftTradeCounts, '__type', { value: 'urn:inin.com:wfm:matchingShiftTradeCounts' });

    Object.defineProperty(MatchingShiftTradeCounts, '__propInfo', {
        get: function() {
            var pi = {
                'matchDateUTC': { required: false, nullable: false },
                'exactMatchesCount': { required: false, nullable: false },
                'otherMatchesCount': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:matchingShiftTradeCounts'] = MatchingShiftTradeCounts;

    return MatchingShiftTradeCounts;
}());

var MatchingShiftTradeInfoCollectionContainer = (function(){
    var hasProps = false;

    function MatchingShiftTradeInfoCollectionContainer() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:matchingShiftTradeInfoCollectionContainer' });
        }

        MatchingShiftTradeInfoCollectionContainer._super.constructor.apply(this, arguments);
    }
    _util.inherits(MatchingShiftTradeInfoCollectionContainer, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MatchingShiftTradeInfoCollectionContainer.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MatchingShiftTradeInfo); }))) {
                    try {
                        value = value.map(function(item){ return new MatchingShiftTradeInfo(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MatchingShiftTradeInfoCollectionContainer.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MatchingShiftTradeInfoCollectionContainer, '__type', { value: 'urn:inin.com:wfm:matchingShiftTradeInfoCollectionContainer' });

    Object.defineProperty(MatchingShiftTradeInfoCollectionContainer, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:matchingShiftTradeInfoCollectionContainer'] = MatchingShiftTradeInfoCollectionContainer;

    return MatchingShiftTradeInfoCollectionContainer;
}());

var MatchingShiftTradeInfo = (function(){
    var hasProps = false;

    function MatchingShiftTradeInfo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:matchingShiftTradeInfo' });
        }

        MatchingShiftTradeInfo._super.constructor.apply(this, arguments);
    }
    _util.inherits(MatchingShiftTradeInfo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MatchingShiftTradeInfo.prototype, 'timeTradedAwayStartUtc', {
            get: function() { return this.__prop_timeTradedAwayStartUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for MatchingShiftTradeInfo.timeTradedAwayStartUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeTradedAwayStartUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(MatchingShiftTradeInfo.prototype, 'timeTradedAwayEndUtc', {
            get: function() { return this.__prop_timeTradedAwayEndUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for MatchingShiftTradeInfo.timeTradedAwayEndUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeTradedAwayEndUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(MatchingShiftTradeInfo.prototype, 'timeGainedStartUtc', {
            get: function() { return this.__prop_timeGainedStartUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for MatchingShiftTradeInfo.timeGainedStartUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeGainedStartUtc = value;
            },
            enumerable: true
        });

        Object.defineProperty(MatchingShiftTradeInfo.prototype, 'timeGainedEndUtc', {
            get: function() { return this.__prop_timeGainedEndUtc; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for MatchingShiftTradeInfo.timeGainedEndUtc, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeGainedEndUtc = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MatchingShiftTradeInfo, '__type', { value: 'urn:inin.com:wfm:matchingShiftTradeInfo' });

    Object.defineProperty(MatchingShiftTradeInfo, '__propInfo', {
        get: function() {
            var pi = {
                'timeTradedAwayStartUtc': { required: false, nullable: false },
                'timeTradedAwayEndUtc': { required: false, nullable: false },
                'timeGainedStartUtc': { required: false, nullable: false },
                'timeGainedEndUtc': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:matchingShiftTradeInfo'] = MatchingShiftTradeInfo;

    return MatchingShiftTradeInfo;
}());

var PerformTradeRequest = (function(){
    var hasProps = false;

    function PerformTradeRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:performTradeRequest' });
        }

        PerformTradeRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(PerformTradeRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PerformTradeRequest.prototype, 'timeTradedAwayStartUTC', {
            get: function() { return this.__prop_timeTradedAwayStartUTC; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for PerformTradeRequest.timeTradedAwayStartUTC, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeTradedAwayStartUTC = value;
            },
            enumerable: true
        });

        Object.defineProperty(PerformTradeRequest.prototype, 'timeTradedAwayEndUTC', {
            get: function() { return this.__prop_timeTradedAwayEndUTC; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for PerformTradeRequest.timeTradedAwayEndUTC, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeTradedAwayEndUTC = value;
            },
            enumerable: true
        });

        Object.defineProperty(PerformTradeRequest.prototype, 'timeGainedStartUTC', {
            get: function() { return this.__prop_timeGainedStartUTC; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for PerformTradeRequest.timeGainedStartUTC, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeGainedStartUTC = value;
            },
            enumerable: true
        });

        Object.defineProperty(PerformTradeRequest.prototype, 'timeGainedEndUTC', {
            get: function() { return this.__prop_timeGainedEndUTC; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for PerformTradeRequest.timeGainedEndUTC, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeGainedEndUTC = value;
            },
            enumerable: true
        });

        Object.defineProperty(PerformTradeRequest.prototype, 'namedScheduleID', {
            get: function() { return this.__prop_namedScheduleID; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PerformTradeRequest.namedScheduleID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_namedScheduleID = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PerformTradeRequest, '__type', { value: 'urn:inin.com:wfm:performTradeRequest' });

    Object.defineProperty(PerformTradeRequest, '__propInfo', {
        get: function() {
            var pi = {
                'timeTradedAwayStartUTC': { required: false, nullable: false },
                'timeTradedAwayEndUTC': { required: false, nullable: false },
                'timeGainedStartUTC': { required: false, nullable: false },
                'timeGainedEndUTC': { required: false, nullable: false },
                'namedScheduleID': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:performTradeRequest'] = PerformTradeRequest;

    return PerformTradeRequest;
}());

var PerformTradeResponse = (function(){
    var hasProps = false;

    function PerformTradeResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:performTradeResponse' });
        }

        PerformTradeResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(PerformTradeResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PerformTradeResponse.prototype, 'performTradeStatus', {
            get: function() { return this.__prop_performTradeStatus; },
            set: function(value) {
                if (!(value instanceof PerformTradeStatus || value === void 0)) {
                    try {
                        value = new PerformTradeStatus(value);
                    } catch (e) {
                        throw new TypeError('Error setting PerformTradeResponse.performTradeStatus: ' + e.message);
                    }
                }

                this.__prop_performTradeStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(PerformTradeResponse.prototype, 'failureReason', {
            get: function() { return this.__prop_failureReason; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PerformTradeResponse.failureReason, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_failureReason = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PerformTradeResponse, '__type', { value: 'urn:inin.com:wfm:performTradeResponse' });

    Object.defineProperty(PerformTradeResponse, '__propInfo', {
        get: function() {
            var pi = {
                'performTradeStatus': { required: false, nullable: false },
                'failureReason': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:performTradeResponse'] = PerformTradeResponse;

    return PerformTradeResponse;
}());

var ScheduleDatesRange = (function(){
    var hasProps = false;

    function ScheduleDatesRange() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:scheduleDatesRange' });
        }

        ScheduleDatesRange._super.constructor.apply(this, arguments);
    }
    _util.inherits(ScheduleDatesRange, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ScheduleDatesRange.prototype, 'scheduleStartTimeUTC', {
            get: function() { return this.__prop_scheduleStartTimeUTC; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ScheduleDatesRange.scheduleStartTimeUTC, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scheduleStartTimeUTC = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleDatesRange.prototype, 'scheduleEndTimeUTC', {
            get: function() { return this.__prop_scheduleEndTimeUTC; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ScheduleDatesRange.scheduleEndTimeUTC, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scheduleEndTimeUTC = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ScheduleDatesRange, '__type', { value: 'urn:inin.com:wfm:scheduleDatesRange' });

    Object.defineProperty(ScheduleDatesRange, '__propInfo', {
        get: function() {
            var pi = {
                'scheduleStartTimeUTC': { required: false, nullable: false },
                'scheduleEndTimeUTC': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:scheduleDatesRange'] = ScheduleDatesRange;

    return ScheduleDatesRange;
}());

var DataVersionsMessage = (function(){
    var hasProps = false;

    function DataVersionsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:dataVersionsMessage', enumerable: true });
        }

        DataVersionsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(DataVersionsMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(DataVersionsMessage.prototype, 'scheduleVersion', {
            get: function() { return this.__prop_scheduleVersion; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DataVersionsMessage.scheduleVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scheduleVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(DataVersionsMessage.prototype, 'timeOffRequestVersion', {
            get: function() { return this.__prop_timeOffRequestVersion; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DataVersionsMessage.timeOffRequestVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeOffRequestVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(DataVersionsMessage.prototype, 'notificationVersion', {
            get: function() { return this.__prop_notificationVersion; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DataVersionsMessage.notificationVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notificationVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(DataVersionsMessage.prototype, 'accrualVersion', {
            get: function() { return this.__prop_accrualVersion; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DataVersionsMessage.accrualVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accrualVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(DataVersionsMessage.prototype, 'availabilityVersion', {
            get: function() { return this.__prop_availabilityVersion; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DataVersionsMessage.availabilityVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_availabilityVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(DataVersionsMessage.prototype, 'activityCodesVersion', {
            get: function() { return this.__prop_activityCodesVersion; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DataVersionsMessage.activityCodesVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activityCodesVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(DataVersionsMessage.prototype, 'tradeRequestVersion', {
            get: function() { return this.__prop_tradeRequestVersion; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DataVersionsMessage.tradeRequestVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_tradeRequestVersion = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DataVersionsMessage, '__type', { value: 'urn:inin.com:wfm:dataVersionsMessage' });

    Object.defineProperty(DataVersionsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'scheduleVersion': { required: false, nullable: false },
                'timeOffRequestVersion': { required: false, nullable: false },
                'notificationVersion': { required: false, nullable: false },
                'accrualVersion': { required: false, nullable: false },
                'availabilityVersion': { required: false, nullable: false },
                'activityCodesVersion': { required: false, nullable: false },
                'tradeRequestVersion': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:dataVersionsMessage'] = DataVersionsMessage;

    return DataVersionsMessage;
}());

var VersionedScheduleIntervalCollection = (function(){
    var hasProps = false;

    function VersionedScheduleIntervalCollection() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:versionedScheduleIntervalCollection', enumerable: true });
        }

        VersionedScheduleIntervalCollection._super.constructor.apply(this, arguments);
    }
    _util.inherits(VersionedScheduleIntervalCollection, VersionedObject);

    function defineProps() {
        Object.defineProperty(VersionedScheduleIntervalCollection.prototype, 'scheduleIntervals', {
            get: function() { return this.__prop_scheduleIntervals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ScheduleInterval); }))) {
                    try {
                        value = value.map(function(item){ return new ScheduleInterval(item); });
                    } catch (e) {
                        throw new TypeError('Error setting VersionedScheduleIntervalCollection.scheduleIntervals: ' + e.message);
                    }
                }

                this.__prop_scheduleIntervals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VersionedScheduleIntervalCollection, '__type', { value: 'urn:inin.com:wfm:versionedScheduleIntervalCollection' });

    Object.defineProperty(VersionedScheduleIntervalCollection, '__propInfo', {
        get: function() {
            var pi = {
                'scheduleIntervals': { required: true, nullable: false }
            };
            if (VersionedObject.__propInfo) { _util.extend(pi, VersionedObject.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:versionedScheduleIntervalCollection'] = VersionedScheduleIntervalCollection;

    return VersionedScheduleIntervalCollection;
}());

var VersionedTimeOffRequestCollection = (function(){
    var hasProps = false;

    function VersionedTimeOffRequestCollection() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:versionedTimeOffRequestCollection', enumerable: true });
        }

        VersionedTimeOffRequestCollection._super.constructor.apply(this, arguments);
    }
    _util.inherits(VersionedTimeOffRequestCollection, VersionedObject);

    function defineProps() {
        Object.defineProperty(VersionedTimeOffRequestCollection.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof TimeOffRequest); }))) {
                    try {
                        value = value.map(function(item){ return new TimeOffRequest(item); });
                    } catch (e) {
                        throw new TypeError('Error setting VersionedTimeOffRequestCollection.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VersionedTimeOffRequestCollection, '__type', { value: 'urn:inin.com:wfm:versionedTimeOffRequestCollection' });

    Object.defineProperty(VersionedTimeOffRequestCollection, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (VersionedObject.__propInfo) { _util.extend(pi, VersionedObject.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:versionedTimeOffRequestCollection'] = VersionedTimeOffRequestCollection;

    return VersionedTimeOffRequestCollection;
}());

var VersionedTimeOffAvailabilityCollection = (function(){
    var hasProps = false;

    function VersionedTimeOffAvailabilityCollection() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:versionedTimeOffAvailabilityCollection', enumerable: true });
        }

        VersionedTimeOffAvailabilityCollection._super.constructor.apply(this, arguments);
    }
    _util.inherits(VersionedTimeOffAvailabilityCollection, VersionedObject);

    function defineProps() {
        Object.defineProperty(VersionedTimeOffAvailabilityCollection.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof TimeOffAvailability); }))) {
                    try {
                        value = value.map(function(item){ return new TimeOffAvailability(item); });
                    } catch (e) {
                        throw new TypeError('Error setting VersionedTimeOffAvailabilityCollection.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VersionedTimeOffAvailabilityCollection, '__type', { value: 'urn:inin.com:wfm:versionedTimeOffAvailabilityCollection' });

    Object.defineProperty(VersionedTimeOffAvailabilityCollection, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (VersionedObject.__propInfo) { _util.extend(pi, VersionedObject.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:versionedTimeOffAvailabilityCollection'] = VersionedTimeOffAvailabilityCollection;

    return VersionedTimeOffAvailabilityCollection;
}());

var VersionedTimeOffAccrualCollection = (function(){
    var hasProps = false;

    function VersionedTimeOffAccrualCollection() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:versionedTimeOffAccrualCollection', enumerable: true });
        }

        VersionedTimeOffAccrualCollection._super.constructor.apply(this, arguments);
    }
    _util.inherits(VersionedTimeOffAccrualCollection, VersionedObject);

    function defineProps() {
        Object.defineProperty(VersionedTimeOffAccrualCollection.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof TimeOffAccrual); }))) {
                    try {
                        value = value.map(function(item){ return new TimeOffAccrual(item); });
                    } catch (e) {
                        throw new TypeError('Error setting VersionedTimeOffAccrualCollection.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VersionedTimeOffAccrualCollection, '__type', { value: 'urn:inin.com:wfm:versionedTimeOffAccrualCollection' });

    Object.defineProperty(VersionedTimeOffAccrualCollection, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (VersionedObject.__propInfo) { _util.extend(pi, VersionedObject.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:versionedTimeOffAccrualCollection'] = VersionedTimeOffAccrualCollection;

    return VersionedTimeOffAccrualCollection;
}());

var VersionedActivityCodeMap = (function(){
    var hasProps = false;

    function VersionedActivityCodeMap() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:versionedActivityCodeMap', enumerable: true });
        }

        VersionedActivityCodeMap._super.constructor.apply(this, arguments);
    }
    _util.inherits(VersionedActivityCodeMap, VersionedObject);

    function defineProps() {
        Object.defineProperty(VersionedActivityCodeMap.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (value[key] instanceof ActivityCodeInfo); }))) {
                    try {
                        value = Object.keys(value).reduce(function(o, key){ o[key] = new ActivityCodeInfo(value[key]); return o; }, {});
                    } catch (e) {
                        throw new TypeError('Error setting VersionedActivityCodeMap.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VersionedActivityCodeMap, '__type', { value: 'urn:inin.com:wfm:versionedActivityCodeMap' });

    Object.defineProperty(VersionedActivityCodeMap, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (VersionedObject.__propInfo) { _util.extend(pi, VersionedObject.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:versionedActivityCodeMap'] = VersionedActivityCodeMap;

    return VersionedActivityCodeMap;
}());

var VersionedStatusMap = (function(){
    var hasProps = false;

    function VersionedStatusMap() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:versionedStatusMap', enumerable: true });
        }

        VersionedStatusMap._super.constructor.apply(this, arguments);
    }
    _util.inherits(VersionedStatusMap, VersionedObject);

    function defineProps() {
        Object.defineProperty(VersionedStatusMap.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (value[key] instanceof ActivityType); }))) {
                    try {
                        value = Object.keys(value).reduce(function(o, key){ o[key] = new ActivityType(value[key]); return o; }, {});
                    } catch (e) {
                        throw new TypeError('Error setting VersionedStatusMap.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VersionedStatusMap, '__type', { value: 'urn:inin.com:wfm:versionedStatusMap' });

    Object.defineProperty(VersionedStatusMap, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (VersionedObject.__propInfo) { _util.extend(pi, VersionedObject.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:versionedStatusMap'] = VersionedStatusMap;

    return VersionedStatusMap;
}());

var AgentConfiguration = (function(){
    var hasProps = false;

    function AgentConfiguration() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:agentConfiguration', enumerable: true });
        }

        AgentConfiguration._super.constructor.apply(this, arguments);
    }
    _util.inherits(AgentConfiguration, VersionedObject);

    function defineProps() {
        Object.defineProperty(AgentConfiguration.prototype, 'startDayOfWeek', {
            get: function() { return this.__prop_startDayOfWeek; },
            set: function(value) {
                if (!(value instanceof DayOfWeek || value === void 0)) {
                    try {
                        value = new DayOfWeek(value);
                    } catch (e) {
                        throw new TypeError('Error setting AgentConfiguration.startDayOfWeek: ' + e.message);
                    }
                }

                this.__prop_startDayOfWeek = value;
            },
            enumerable: true
        });

        Object.defineProperty(AgentConfiguration.prototype, 'fullTimeEquivalentDayMinutes', {
            get: function() { return this.__prop_fullTimeEquivalentDayMinutes; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for AgentConfiguration.fullTimeEquivalentDayMinutes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fullTimeEquivalentDayMinutes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AgentConfiguration.prototype, 'fullTimeEquivalentWeekMinutes', {
            get: function() { return this.__prop_fullTimeEquivalentWeekMinutes; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for AgentConfiguration.fullTimeEquivalentWeekMinutes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fullTimeEquivalentWeekMinutes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AgentConfiguration.prototype, 'minPartialDayTimeOffMinutes', {
            get: function() { return this.__prop_minPartialDayTimeOffMinutes; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for AgentConfiguration.minPartialDayTimeOffMinutes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minPartialDayTimeOffMinutes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AgentConfiguration.prototype, 'maxPartialDayTimeOffMinutes', {
            get: function() { return this.__prop_maxPartialDayTimeOffMinutes; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for AgentConfiguration.maxPartialDayTimeOffMinutes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxPartialDayTimeOffMinutes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AgentConfiguration.prototype, 'minFullDayTimeOffMinutes', {
            get: function() { return this.__prop_minFullDayTimeOffMinutes; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for AgentConfiguration.minFullDayTimeOffMinutes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minFullDayTimeOffMinutes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AgentConfiguration.prototype, 'maxFullDayTimeOffMinutes', {
            get: function() { return this.__prop_maxFullDayTimeOffMinutes; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for AgentConfiguration.maxFullDayTimeOffMinutes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxFullDayTimeOffMinutes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AgentConfiguration.prototype, 'enableShiftTrading', {
            get: function() { return this.__prop_enableShiftTrading; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for AgentConfiguration.enableShiftTrading, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_enableShiftTrading = value;
            },
            enumerable: true
        });

        Object.defineProperty(AgentConfiguration.prototype, 'minHoursForTradesToBeEffective', {
            get: function() { return this.__prop_minHoursForTradesToBeEffective; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for AgentConfiguration.minHoursForTradesToBeEffective, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minHoursForTradesToBeEffective = value;
            },
            enumerable: true
        });

        Object.defineProperty(AgentConfiguration.prototype, 'minTradedLengthHours', {
            get: function() { return this.__prop_minTradedLengthHours; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for AgentConfiguration.minTradedLengthHours, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minTradedLengthHours = value;
            },
            enumerable: true
        });

        Object.defineProperty(AgentConfiguration.prototype, 'minContiguousHoursInScheduleAfterTrade', {
            get: function() { return this.__prop_minContiguousHoursInScheduleAfterTrade; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for AgentConfiguration.minContiguousHoursInScheduleAfterTrade, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minContiguousHoursInScheduleAfterTrade = value;
            },
            enumerable: true
        });

        Object.defineProperty(AgentConfiguration.prototype, 'activityTypeTradeWarnings', {
            get: function() { return this.__prop_activityTypeTradeWarnings; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ActivityTypeWarningsForShiftTrade); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ActivityTypeWarningsForShiftTrade(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AgentConfiguration.activityTypeTradeWarnings: ' + e.message);
                    }
                }

                this.__prop_activityTypeTradeWarnings = value;
            },
            enumerable: true
        });

        Object.defineProperty(AgentConfiguration.prototype, 'activityTypeIDsThatCannotBeTraded', {
            get: function() { return this.__prop_activityTypeIDsThatCannotBeTraded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for AgentConfiguration.activityTypeIDsThatCannotBeTraded, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activityTypeIDsThatCannotBeTraded = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AgentConfiguration, '__type', { value: 'urn:inin.com:wfm:agentConfiguration' });

    Object.defineProperty(AgentConfiguration, '__propInfo', {
        get: function() {
            var pi = {
                'startDayOfWeek': { required: false, nullable: false },
                'fullTimeEquivalentDayMinutes': { required: false, nullable: false },
                'fullTimeEquivalentWeekMinutes': { required: false, nullable: false },
                'minPartialDayTimeOffMinutes': { required: false, nullable: true },
                'maxPartialDayTimeOffMinutes': { required: false, nullable: true },
                'minFullDayTimeOffMinutes': { required: false, nullable: true },
                'maxFullDayTimeOffMinutes': { required: false, nullable: true },
                'enableShiftTrading': { required: false, nullable: true },
                'minHoursForTradesToBeEffective': { required: false, nullable: true },
                'minTradedLengthHours': { required: false, nullable: true },
                'minContiguousHoursInScheduleAfterTrade': { required: false, nullable: true },
                'activityTypeTradeWarnings': { required: false, nullable: true },
                'activityTypeIDsThatCannotBeTraded': { required: false, nullable: false }
            };
            if (VersionedObject.__propInfo) { _util.extend(pi, VersionedObject.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:agentConfiguration'] = AgentConfiguration;

    return AgentConfiguration;
}());

var VersionedNotificationCollection = (function(){
    var hasProps = false;

    function VersionedNotificationCollection() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:versionedNotificationCollection', enumerable: true });
        }

        VersionedNotificationCollection._super.constructor.apply(this, arguments);
    }
    _util.inherits(VersionedNotificationCollection, VersionedObject);

    function defineProps() {
        Object.defineProperty(VersionedNotificationCollection.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Notification); }))) {
                    try {
                        value = value.map(function(item){ return new Notification(item); });
                    } catch (e) {
                        throw new TypeError('Error setting VersionedNotificationCollection.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VersionedNotificationCollection, '__type', { value: 'urn:inin.com:wfm:versionedNotificationCollection' });

    Object.defineProperty(VersionedNotificationCollection, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (VersionedObject.__propInfo) { _util.extend(pi, VersionedObject.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:versionedNotificationCollection'] = VersionedNotificationCollection;

    return VersionedNotificationCollection;
}());

var VersionedShiftTradeRequestCollection = (function(){
    var hasProps = false;

    function VersionedShiftTradeRequestCollection() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:versionedShiftTradeRequestCollection', enumerable: true });
        }

        VersionedShiftTradeRequestCollection._super.constructor.apply(this, arguments);
    }
    _util.inherits(VersionedShiftTradeRequestCollection, VersionedObject);

    function defineProps() {
        Object.defineProperty(VersionedShiftTradeRequestCollection.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ShiftTradeRequest); }))) {
                    try {
                        value = value.map(function(item){ return new ShiftTradeRequest(item); });
                    } catch (e) {
                        throw new TypeError('Error setting VersionedShiftTradeRequestCollection.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VersionedShiftTradeRequestCollection, '__type', { value: 'urn:inin.com:wfm:versionedShiftTradeRequestCollection' });

    Object.defineProperty(VersionedShiftTradeRequestCollection, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (VersionedObject.__propInfo) { _util.extend(pi, VersionedObject.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:versionedShiftTradeRequestCollection'] = VersionedShiftTradeRequestCollection;

    return VersionedShiftTradeRequestCollection;
}());

var VersionedShiftTradeMatchCollection = (function(){
    var hasProps = false;

    function VersionedShiftTradeMatchCollection() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:wfm:versionedShiftTradeMatchCollection', enumerable: true });
        }

        VersionedShiftTradeMatchCollection._super.constructor.apply(this, arguments);
    }
    _util.inherits(VersionedShiftTradeMatchCollection, VersionedObject);

    function defineProps() {
        Object.defineProperty(VersionedShiftTradeMatchCollection.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ShiftTradeMatch); }))) {
                    try {
                        value = value.map(function(item){ return new ShiftTradeMatch(item); });
                    } catch (e) {
                        throw new TypeError('Error setting VersionedShiftTradeMatchCollection.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VersionedShiftTradeMatchCollection, '__type', { value: 'urn:inin.com:wfm:versionedShiftTradeMatchCollection' });

    Object.defineProperty(VersionedShiftTradeMatchCollection, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (VersionedObject.__propInfo) { _util.extend(pi, VersionedObject.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:wfm:versionedShiftTradeMatchCollection'] = VersionedShiftTradeMatchCollection;

    return VersionedShiftTradeMatchCollection;
}());

var $timeOff = (function(){
    function addTimeOffRequest(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof addTimeOffRequest.params)) {
            try {
                params = new addTimeOffRequest.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: addTimeOffRequest.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof TimeOffRequest) ? o : new TimeOffRequest(o); };
        dc['400'] = dc['403'] = dc['409'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(addTimeOffRequest.method, addTimeOffRequest.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(addTimeOffRequest, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/wfm/time-off', enumerable: true }
    });

    addTimeOffRequest.params = (function(){
        _util.inherits(addTimeOffRequest_params, _util.RequestParams);

        function addTimeOffRequest_params(properties) {
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
            if (!(properties.content instanceof TimeOffRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Wfm.TimeOffRequest');
            }

            addTimeOffRequest_params._super.constructor.apply(this, arguments);
        }

        return addTimeOffRequest_params;
    })();

    function updateTimeOffRequestById(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateTimeOffRequestById.params)) {
            try {
                params = new updateTimeOffRequestById.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateTimeOffRequestById.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['403'] = dc['404'] = dc['409'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateTimeOffRequestById.method, updateTimeOffRequestById.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateTimeOffRequestById, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/wfm/time-off/{timeOffRequestId}', enumerable: true }
    });

    updateTimeOffRequestById.params = (function(){
        _util.inherits(updateTimeOffRequestById_params, _util.RequestParams);

        function updateTimeOffRequestById_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, timeOffRequestId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'timeOffRequestId')) {
                throw new Error('`properties.template` is missing required property: `timeOffRequestId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof TimeOffRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Wfm.TimeOffRequest');
            }

            updateTimeOffRequestById_params._super.constructor.apply(this, arguments);
        }

        return updateTimeOffRequestById_params;
    })();

    return Object.create(null, {
        addTimeOffRequest: { value: addTimeOffRequest, enumerable: true },
        updateTimeOffRequestById: { value: updateTimeOffRequestById, enumerable: true }
    });
})();

var $tradeRequests = (function(){
    function addShiftTrade(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof addShiftTrade.params)) {
            try {
                params = new addShiftTrade.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: addShiftTrade.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof ShiftTradeRequest) ? o : new ShiftTradeRequest(o); };
        dc['400'] = dc['403'] = dc['409'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(addShiftTrade.method, addShiftTrade.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(addShiftTrade, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/wfm/trade-requests', enumerable: true }
    });

    addShiftTrade.params = (function(){
        _util.inherits(addShiftTrade_params, _util.RequestParams);

        function addShiftTrade_params(properties) {
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
            if (!(properties.content instanceof ShiftTradeRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Wfm.ShiftTradeRequest');
            }

            addShiftTrade_params._super.constructor.apply(this, arguments);
        }

        return addShiftTrade_params;
    })();

    function updateShiftTradeRequestById(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateShiftTradeRequestById.params)) {
            try {
                params = new updateShiftTradeRequestById.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateShiftTradeRequestById.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['403'] = dc['404'] = dc['409'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateShiftTradeRequestById.method, updateShiftTradeRequestById.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateShiftTradeRequestById, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/wfm/trade-requests/{shiftTradeRequestId}', enumerable: true }
    });

    updateShiftTradeRequestById.params = (function(){
        _util.inherits(updateShiftTradeRequestById_params, _util.RequestParams);

        function updateShiftTradeRequestById_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, shiftTradeRequestId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'shiftTradeRequestId')) {
                throw new Error('`properties.template` is missing required property: `shiftTradeRequestId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof ShiftTradeRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Wfm.ShiftTradeRequest');
            }

            updateShiftTradeRequestById_params._super.constructor.apply(this, arguments);
        }

        return updateShiftTradeRequestById_params;
    })();

    return Object.create(null, {
        addShiftTrade: { value: addShiftTrade, enumerable: true },
        updateShiftTradeRequestById: { value: updateShiftTradeRequestById, enumerable: true }
    });
})();

var $tradeMatches = (function(){
    function cancelShiftTradeMatchById(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof cancelShiftTradeMatchById.params)) {
            try {
                params = new cancelShiftTradeMatchById.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: cancelShiftTradeMatchById.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['403'] = dc['404'] = dc['409'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(cancelShiftTradeMatchById.method, cancelShiftTradeMatchById.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(cancelShiftTradeMatchById, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/wfm/trade-matches/{shiftTradeMatchId}', enumerable: true }
    });

    cancelShiftTradeMatchById.params = (function(){
        _util.inherits(cancelShiftTradeMatchById_params, _util.RequestParams);

        function cancelShiftTradeMatchById_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, shiftTradeMatchId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'shiftTradeMatchId')) {
                throw new Error('`properties.template` is missing required property: `shiftTradeMatchId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof ShiftTradeMatch)) {
                throw new TypeError('`properties.content` value does not match the expected type: Wfm.ShiftTradeMatch');
            }

            cancelShiftTradeMatchById_params._super.constructor.apply(this, arguments);
        }

        return cancelShiftTradeMatchById_params;
    })();

    return Object.create(null, {
        cancelShiftTradeMatchById: { value: cancelShiftTradeMatchById, enumerable: true }
    });
})();

var $data = (function(){
    function getWfmData(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getWfmData.params)) {
            try {
                params = new getWfmData.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getWfmData.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof WfmData) ? o : new WfmData(o); };
        dc['403'] = dc['404'] = dc['416'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getWfmData.method, getWfmData.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getWfmData, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/wfm/data', enumerable: true }
    });

    getWfmData.params = (function(){
        _util.inherits(getWfmData_params, _util.RequestParams);

        function getWfmData_params(properties) {
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
            if (properties.query === void 0) {
                throw new Error('`properties.query` is undefined, which means the following required Query param(s) will be missing: select');
            }
            if (!_util.hasProp(properties.query, 'select')) {
                throw new Error('`properties.query` is missing required property: `select`');
            }

            getWfmData_params._super.constructor.apply(this, arguments);
        }

        return getWfmData_params;
    })();

    return Object.create(null, {
        getWfmData: { value: getWfmData, enumerable: true }
    });
})();

var $matchingTradecounts = (function(){
    function getMatchingTradeCounts(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getMatchingTradeCounts.params)) {
            try {
                params = new getMatchingTradeCounts.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getMatchingTradeCounts.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof MatchingShiftTradeCountsCollectionContainer) ? o : new MatchingShiftTradeCountsCollectionContainer(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getMatchingTradeCounts.method, getMatchingTradeCounts.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getMatchingTradeCounts, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/wfm/matching-tradecounts', enumerable: true }
    });

    getMatchingTradeCounts.params = (function(){
        _util.inherits(getMatchingTradeCounts_params, _util.RequestParams);

        function getMatchingTradeCounts_params(properties) {
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

            getMatchingTradeCounts_params._super.constructor.apply(this, arguments);
        }

        return getMatchingTradeCounts_params;
    })();

    return Object.create(null, {
        getMatchingTradeCounts: { value: getMatchingTradeCounts, enumerable: true }
    });
})();

var $matchingTradeinfo = (function(){
    function getMatchingTradeInfo(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getMatchingTradeInfo.params)) {
            try {
                params = new getMatchingTradeInfo.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getMatchingTradeInfo.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof MatchingShiftTradeInfoCollectionContainer) ? o : new MatchingShiftTradeInfoCollectionContainer(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getMatchingTradeInfo.method, getMatchingTradeInfo.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getMatchingTradeInfo, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/wfm/matching-tradeinfo', enumerable: true }
    });

    getMatchingTradeInfo.params = (function(){
        _util.inherits(getMatchingTradeInfo_params, _util.RequestParams);

        function getMatchingTradeInfo_params(properties) {
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

            getMatchingTradeInfo_params._super.constructor.apply(this, arguments);
        }

        return getMatchingTradeInfo_params;
    })();

    return Object.create(null, {
        getMatchingTradeInfo: { value: getMatchingTradeInfo, enumerable: true }
    });
})();

var $performTrade = (function(){
    function performTrade(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof performTrade.params)) {
            try {
                params = new performTrade.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: performTrade.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof PerformTradeResponse) ? o : new PerformTradeResponse(o); };
        dc['400'] = dc['403'] = dc['409'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(performTrade.method, performTrade.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(performTrade, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/wfm/perform-trade', enumerable: true }
    });

    performTrade.params = (function(){
        _util.inherits(performTrade_params, _util.RequestParams);

        function performTrade_params(properties) {
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
            if (!(properties.content instanceof PerformTradeRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Wfm.PerformTradeRequest');
            }

            performTrade_params._super.constructor.apply(this, arguments);
        }

        return performTrade_params;
    })();

    return Object.create(null, {
        performTrade: { value: performTrade, enumerable: true }
    });
})();

var $scheduledatesrange = (function(){
    function getScheduleDatesRange(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getScheduleDatesRange.params)) {
            try {
                params = new getScheduleDatesRange.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getScheduleDatesRange.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ScheduleDatesRange) ? o : new ScheduleDatesRange(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getScheduleDatesRange.method, getScheduleDatesRange.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getScheduleDatesRange, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/wfm/scheduledatesrange', enumerable: true }
    });

    getScheduleDatesRange.params = (function(){
        _util.inherits(getScheduleDatesRange_params, _util.RequestParams);

        function getScheduleDatesRange_params(properties) {
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

            getScheduleDatesRange_params._super.constructor.apply(this, arguments);
        }

        return getScheduleDatesRange_params;
    })();

    return Object.create(null, {
        getScheduleDatesRange: { value: getScheduleDatesRange, enumerable: true }
    });
})();

exports.TimeOffRequestType = TimeOffRequestType;
exports.TimeOffRequestState = TimeOffRequestState;
exports.WaitlistReason = WaitlistReason;
exports.DenyReason = DenyReason;
exports.TradeRequestState = TradeRequestState;
exports.TradeMatchState = TradeMatchState;
exports.ActivityType = ActivityType;
exports.DayOfWeek = DayOfWeek;
exports.PerformTradeStatus = PerformTradeStatus;
exports.DataVersionsMessage = DataVersionsMessage;
exports.TimeOffRequest = TimeOffRequest;
exports.ShiftTradeRequest = ShiftTradeRequest;
exports.AcceptableStartTime = AcceptableStartTime;
exports.ShiftTradeMatch = ShiftTradeMatch;
exports.WfmData = WfmData;
exports.VersionedScheduleIntervalCollection = VersionedScheduleIntervalCollection;
exports.VersionedObject = VersionedObject;
exports.VersionedTimeOffRequestCollection = VersionedTimeOffRequestCollection;
exports.VersionedTimeOffAvailabilityCollection = VersionedTimeOffAvailabilityCollection;
exports.TimeOffAvailability = TimeOffAvailability;
exports.VersionedTimeOffAccrualCollection = VersionedTimeOffAccrualCollection;
exports.TimeOffAccrual = TimeOffAccrual;
exports.VersionedActivityCodeMap = VersionedActivityCodeMap;
exports.ActivityCodeInfo = ActivityCodeInfo;
exports.VersionedStatusMap = VersionedStatusMap;
exports.AgentConfiguration = AgentConfiguration;
exports.ActivityTypeWarningsForShiftTrade = ActivityTypeWarningsForShiftTrade;
exports.VersionedNotificationCollection = VersionedNotificationCollection;
exports.Notification = Notification;
exports.VersionedShiftTradeRequestCollection = VersionedShiftTradeRequestCollection;
exports.VersionedShiftTradeMatchCollection = VersionedShiftTradeMatchCollection;
exports.ScheduleInterval = ScheduleInterval;
exports.MatchingShiftTradeCountsCollectionContainer = MatchingShiftTradeCountsCollectionContainer;
exports.MatchingShiftTradeCounts = MatchingShiftTradeCounts;
exports.MatchingShiftTradeInfoCollectionContainer = MatchingShiftTradeInfoCollectionContainer;
exports.MatchingShiftTradeInfo = MatchingShiftTradeInfo;
exports.PerformTradeRequest = PerformTradeRequest;
exports.PerformTradeResponse = PerformTradeResponse;
exports.ScheduleDatesRange = ScheduleDatesRange;
exports.$timeOff = $timeOff;
exports.$tradeRequests = $tradeRequests;
exports.$tradeMatches = $tradeMatches;
exports.$data = $data;
exports.$matchingTradecounts = $matchingTradecounts;
exports.$matchingTradeinfo = $matchingTradeinfo;
exports.$performTrade = $performTrade;
exports.$scheduledatesrange = $scheduledatesrange;
