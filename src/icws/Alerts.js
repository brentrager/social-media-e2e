/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Statistics = require('./Statistics');
var Common = require('./Common');

var AlertSetAccessMode = (function(){
    var instanceCache = {};
    function AlertSetAccessMode(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertSetAccessMode' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(AlertSetAccessMode, _util.EnumValue);

    Object.defineProperties(AlertSetAccessMode, {
        'None': { value: new AlertSetAccessMode(0, 'None'), enumerable: true },
        'OwnerDefault': { value: new AlertSetAccessMode(1, 'OwnerDefault'), enumerable: true },
        'Owned': { value: new AlertSetAccessMode(2, 'Owned'), enumerable: true },
        'Shared': { value: new AlertSetAccessMode(3, 'Shared'), enumerable: true },
        'Subscribed': { value: new AlertSetAccessMode(4, 'Subscribed'), enumerable: true }
    });

    Object.defineProperty(AlertSetAccessMode, '__type', { value: 'urn:inin.com:alerts:alertSetAccessMode' });

    _typemap['urn:inin.com:alerts:alertSetAccessMode'] = AlertSetAccessMode;

    return AlertSetAccessMode;
}());

var AlertSeverity = (function(){
    var instanceCache = {};
    function AlertSeverity(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertSeverity' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(AlertSeverity, _util.EnumValue);

    Object.defineProperties(AlertSeverity, {
        'None': { value: new AlertSeverity(0, 'None'), enumerable: true },
        'Normal': { value: new AlertSeverity(1, 'Normal'), enumerable: true },
        'Minor': { value: new AlertSeverity(2, 'Minor'), enumerable: true },
        'Major': { value: new AlertSeverity(3, 'Major'), enumerable: true },
        'Warning': { value: new AlertSeverity(4, 'Warning'), enumerable: true },
        'Critical': { value: new AlertSeverity(5, 'Critical'), enumerable: true }
    });

    Object.defineProperty(AlertSeverity, '__type', { value: 'urn:inin.com:alerts:alertSeverity' });

    _typemap['urn:inin.com:alerts:alertSeverity'] = AlertSeverity;

    return AlertSeverity;
}());

var BooleanAlertConditionComparison = (function(){
    var instanceCache = {};
    function BooleanAlertConditionComparison(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:booleanAlertConditionComparison' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(BooleanAlertConditionComparison, _util.EnumValue);

    Object.defineProperties(BooleanAlertConditionComparison, {
        'Unknown': { value: new BooleanAlertConditionComparison(0, 'Unknown'), enumerable: true },
        'IsNotAvailable': { value: new BooleanAlertConditionComparison(1, 'IsNotAvailable'), enumerable: true },
        'IsAvailable': { value: new BooleanAlertConditionComparison(2, 'IsAvailable'), enumerable: true },
        'IsTrue': { value: new BooleanAlertConditionComparison(3, 'IsTrue'), enumerable: true },
        'IsFalse': { value: new BooleanAlertConditionComparison(4, 'IsFalse'), enumerable: true }
    });

    Object.defineProperty(BooleanAlertConditionComparison, '__type', { value: 'urn:inin.com:alerts:booleanAlertConditionComparison' });

    _typemap['urn:inin.com:alerts:booleanAlertConditionComparison'] = BooleanAlertConditionComparison;

    return BooleanAlertConditionComparison;
}());

var StringAlertConditionComparison = (function(){
    var instanceCache = {};
    function StringAlertConditionComparison(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:stringAlertConditionComparison' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(StringAlertConditionComparison, _util.EnumValue);

    Object.defineProperties(StringAlertConditionComparison, {
        'Unknown': { value: new StringAlertConditionComparison(0, 'Unknown'), enumerable: true },
        'IsNotAvailable': { value: new StringAlertConditionComparison(1, 'IsNotAvailable'), enumerable: true },
        'IsAvailable': { value: new StringAlertConditionComparison(2, 'IsAvailable'), enumerable: true },
        'EqualTo': { value: new StringAlertConditionComparison(3, 'EqualTo'), enumerable: true },
        'NotEqualTo': { value: new StringAlertConditionComparison(4, 'NotEqualTo'), enumerable: true },
        'Contains': { value: new StringAlertConditionComparison(5, 'Contains'), enumerable: true },
        'DoesNotContain': { value: new StringAlertConditionComparison(6, 'DoesNotContain'), enumerable: true },
        'MatchesPrefix': { value: new StringAlertConditionComparison(7, 'MatchesPrefix'), enumerable: true }
    });

    Object.defineProperty(StringAlertConditionComparison, '__type', { value: 'urn:inin.com:alerts:stringAlertConditionComparison' });

    _typemap['urn:inin.com:alerts:stringAlertConditionComparison'] = StringAlertConditionComparison;

    return StringAlertConditionComparison;
}());

var NumericAlertConditionComparison = (function(){
    var instanceCache = {};
    function NumericAlertConditionComparison(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:numericAlertConditionComparison' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(NumericAlertConditionComparison, _util.EnumValue);

    Object.defineProperties(NumericAlertConditionComparison, {
        'Unknown': { value: new NumericAlertConditionComparison(0, 'Unknown'), enumerable: true },
        'IsNotAvailable': { value: new NumericAlertConditionComparison(1, 'IsNotAvailable'), enumerable: true },
        'IsAvailable': { value: new NumericAlertConditionComparison(2, 'IsAvailable'), enumerable: true },
        'IsLessThan': { value: new NumericAlertConditionComparison(3, 'IsLessThan'), enumerable: true },
        'IsGreaterThan': { value: new NumericAlertConditionComparison(4, 'IsGreaterThan'), enumerable: true },
        'Range': { value: new NumericAlertConditionComparison(5, 'Range'), enumerable: true }
    });

    Object.defineProperty(NumericAlertConditionComparison, '__type', { value: 'urn:inin.com:alerts:numericAlertConditionComparison' });

    _typemap['urn:inin.com:alerts:numericAlertConditionComparison'] = NumericAlertConditionComparison;

    return NumericAlertConditionComparison;
}());

var AlertConditionComparison = (function(){
    var instanceCache = {};
    function AlertConditionComparison(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertConditionComparison' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(AlertConditionComparison, _util.EnumValue);

    Object.defineProperties(AlertConditionComparison, {
        'Unknown': { value: new AlertConditionComparison(0, 'Unknown'), enumerable: true },
        'IsNotAvailable': { value: new AlertConditionComparison(1, 'IsNotAvailable'), enumerable: true },
        'IsAvailable': { value: new AlertConditionComparison(2, 'IsAvailable'), enumerable: true },
        'IsTrue': { value: new AlertConditionComparison(3, 'IsTrue'), enumerable: true },
        'IsFalse': { value: new AlertConditionComparison(4, 'IsFalse'), enumerable: true },
        'IsLessThan': { value: new AlertConditionComparison(5, 'IsLessThan'), enumerable: true },
        'IsGreaterThan': { value: new AlertConditionComparison(6, 'IsGreaterThan'), enumerable: true },
        'Range': { value: new AlertConditionComparison(7, 'Range'), enumerable: true },
        'EqualTo': { value: new AlertConditionComparison(8, 'EqualTo'), enumerable: true },
        'NotEqualTo': { value: new AlertConditionComparison(9, 'NotEqualTo'), enumerable: true },
        'Contains': { value: new AlertConditionComparison(10, 'Contains'), enumerable: true },
        'DoesNotContain': { value: new AlertConditionComparison(11, 'DoesNotContain'), enumerable: true },
        'MatchesPrefix': { value: new AlertConditionComparison(12, 'MatchesPrefix'), enumerable: true }
    });

    Object.defineProperty(AlertConditionComparison, '__type', { value: 'urn:inin.com:alerts:alertConditionComparison' });

    _typemap['urn:inin.com:alerts:alertConditionComparison'] = AlertConditionComparison;

    return AlertConditionComparison;
}());

var DisplayType = (function(){
    var instanceCache = {};
    function DisplayType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:displayType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DisplayType, _util.EnumValue);

    Object.defineProperties(DisplayType, {
        'DesktopAlert': { value: new DisplayType(0, 'DesktopAlert'), enumerable: true },
        'NotificationArea': { value: new DisplayType(1, 'NotificationArea'), enumerable: true }
    });

    Object.defineProperty(DisplayType, '__type', { value: 'urn:inin.com:alerts:displayType' });

    _typemap['urn:inin.com:alerts:displayType'] = DisplayType;

    return DisplayType;
}());

var SoundType = (function(){
    var instanceCache = {};
    function SoundType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:soundType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(SoundType, _util.EnumValue);

    Object.defineProperties(SoundType, {
        'Information': { value: new SoundType(0, 'Information'), enumerable: true },
        'Warning': { value: new SoundType(1, 'Warning'), enumerable: true },
        'Error': { value: new SoundType(2, 'Error'), enumerable: true }
    });

    Object.defineProperty(SoundType, '__type', { value: 'urn:inin.com:alerts:soundType' });

    _typemap['urn:inin.com:alerts:soundType'] = SoundType;

    return SoundType;
}());

var AlertSetCategory = (function(){
    var instanceCache = {};
    function AlertSetCategory(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertSetCategory' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(AlertSetCategory, _util.EnumValue);

    Object.defineProperties(AlertSetCategory, {
        'Unknown': { value: new AlertSetCategory(0, 'Unknown'), enumerable: true },
        'Shared': { value: new AlertSetCategory(1, 'Shared'), enumerable: true },
        'Owned': { value: new AlertSetCategory(2, 'Owned'), enumerable: true },
        'Subscribed': { value: new AlertSetCategory(3, 'Subscribed'), enumerable: true },
        'OwnerDefault': { value: new AlertSetCategory(4, 'OwnerDefault'), enumerable: true },
        'AdminAccess': { value: new AlertSetCategory(5, 'AdminAccess'), enumerable: true },
        'All': { value: new AlertSetCategory(6, 'All'), enumerable: true }
    });

    Object.defineProperty(AlertSetCategory, '__type', { value: 'urn:inin.com:alerts:alertSetCategory' });

    _typemap['urn:inin.com:alerts:alertSetCategory'] = AlertSetCategory;

    return AlertSetCategory;
}());

var BaseAlertSet = (function(){
    var hasProps = false;

    function BaseAlertSet() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:baseAlertSet' });
        }

        BaseAlertSet._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseAlertSet, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BaseAlertSet.prototype, 'accessMode', {
            get: function() { return this.__prop_accessMode; },
            set: function(value) {
                if (!(value instanceof AlertSetAccessMode)) {
                    try {
                        value = new AlertSetAccessMode(value);
                    } catch (e) {
                        throw new TypeError('Error setting BaseAlertSet.accessMode: ' + e.message);
                    }
                }

                this.__prop_accessMode = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseAlertSet.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for BaseAlertSet.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseAlertSet.prototype, 'displayString', {
            get: function() { return this.__prop_displayString; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for BaseAlertSet.displayString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayString = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseAlertSet.prototype, 'owner', {
            get: function() { return this.__prop_owner; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseAlertSet.owner, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_owner = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BaseAlertSet, '__type', { value: 'urn:inin.com:alerts:baseAlertSet' });

    Object.defineProperty(BaseAlertSet, '__propInfo', {
        get: function() {
            var pi = {
                'accessMode': { required: true, nullable: false },
                'description': { required: false, nullable: false },
                'displayString': { required: false, nullable: false },
                'owner': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:baseAlertSet'] = BaseAlertSet;

    return BaseAlertSet;
}());

var BaseAlertDefinition = (function(){
    var hasProps = false;

    function BaseAlertDefinition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:baseAlertDefinition' });
        }

        BaseAlertDefinition._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseAlertDefinition, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BaseAlertDefinition.prototype, 'alertDefinitionId', {
            get: function() { return this.__prop_alertDefinitionId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for BaseAlertDefinition.alertDefinitionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alertDefinitionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseAlertDefinition.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for BaseAlertDefinition.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseAlertDefinition.prototype, 'displayString', {
            get: function() { return this.__prop_displayString; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for BaseAlertDefinition.displayString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayString = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseAlertDefinition.prototype, 'isEditable', {
            get: function() { return this.__prop_isEditable; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseAlertDefinition.isEditable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isEditable = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseAlertDefinition.prototype, 'statisticKey', {
            get: function() { return this.__prop_statisticKey; },
            set: function(value) {
                if (!(value instanceof Statistics.StatisticKey)) {
                    try {
                        value = new Statistics.StatisticKey(value);
                    } catch (e) {
                        throw new TypeError('Error setting BaseAlertDefinition.statisticKey: ' + e.message);
                    }
                }

                this.__prop_statisticKey = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BaseAlertDefinition, '__type', { value: 'urn:inin.com:alerts:baseAlertDefinition' });

    Object.defineProperty(BaseAlertDefinition, '__propInfo', {
        get: function() {
            var pi = {
                'alertDefinitionId': { required: false, nullable: false },
                'description': { required: false, nullable: false },
                'displayString': { required: false, nullable: false },
                'isEditable': { required: true, nullable: false },
                'statisticKey': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:baseAlertDefinition'] = BaseAlertDefinition;

    return BaseAlertDefinition;
}());

var BaseAlertRule = (function(){
    var hasProps = false;

    function BaseAlertRule() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:baseAlertRule' });
        }

        BaseAlertRule._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseAlertRule, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BaseAlertRule.prototype, 'alertActions', {
            get: function() { return this.__prop_alertActions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AlertAction); }))) {
                    try {
                        value = value.map(function(item){ return new AlertAction(item); });
                    } catch (e) {
                        throw new TypeError('Error setting BaseAlertRule.alertActions: ' + e.message);
                    }
                }

                this.__prop_alertActions = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseAlertRule.prototype, 'alertRuleId', {
            get: function() { return this.__prop_alertRuleId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for BaseAlertRule.alertRuleId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alertRuleId = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseAlertRule.prototype, 'alertSeverity', {
            get: function() { return this.__prop_alertSeverity; },
            set: function(value) {
                if (!(value instanceof AlertSeverity)) {
                    try {
                        value = new AlertSeverity(value);
                    } catch (e) {
                        throw new TypeError('Error setting BaseAlertRule.alertSeverity: ' + e.message);
                    }
                }

                this.__prop_alertSeverity = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseAlertRule.prototype, 'isEditable', {
            get: function() { return this.__prop_isEditable; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseAlertRule.isEditable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isEditable = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BaseAlertRule, '__type', { value: 'urn:inin.com:alerts:baseAlertRule' });

    Object.defineProperty(BaseAlertRule, '__propInfo', {
        get: function() {
            var pi = {
                'alertActions': { required: true, nullable: false },
                'alertRuleId': { required: false, nullable: false },
                'alertSeverity': { required: true, nullable: false },
                'isEditable': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:baseAlertRule'] = BaseAlertRule;

    return BaseAlertRule;
}());

var AlertAction = (function(){
    var hasProps = false;

    function AlertAction() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertAction' });
        }

        AlertAction._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertAction, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AlertAction.prototype, 'alertActionId', {
            get: function() { return this.__prop_alertActionId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for AlertAction.alertActionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alertActionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertAction.prototype, 'isEditable', {
            get: function() { return this.__prop_isEditable; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for AlertAction.isEditable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isEditable = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertAction.prototype, 'targetId', {
            get: function() { return this.__prop_targetId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AlertAction.targetId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_targetId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertAction.prototype, 'namedValues', {
            get: function() { return this.__prop_namedValues; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }))) {
                    throw new TypeError('Expected type String{} for AlertAction.namedValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_namedValues = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertAction, '__type', { value: 'urn:inin.com:alerts:alertAction' });

    Object.defineProperty(AlertAction, '__propInfo', {
        get: function() {
            var pi = {
                'alertActionId': { required: false, nullable: false },
                'isEditable': { required: true, nullable: false },
                'targetId': { required: true, nullable: false },
                'namedValues': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertAction'] = AlertAction;

    return AlertAction;
}());

var AlertConditionRequest = (function(){
    var hasProps = false;

    function AlertConditionRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertConditionRequest' });
        }

        AlertConditionRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertConditionRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AlertConditionRequest.prototype, 'alertConditionId', {
            get: function() { return this.__prop_alertConditionId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for AlertConditionRequest.alertConditionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alertConditionId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertConditionRequest, '__type', { value: 'urn:inin.com:alerts:alertConditionRequest' });

    Object.defineProperty(AlertConditionRequest, '__propInfo', {
        get: function() {
            var pi = {
                'alertConditionId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertConditionRequest'] = AlertConditionRequest;

    return AlertConditionRequest;
}());

var AlertCondition = (function(){
    var hasProps = false;

    function AlertCondition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertCondition' });
        }

        AlertCondition._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertCondition, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AlertCondition.prototype, 'alertConditionId', {
            get: function() { return this.__prop_alertConditionId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for AlertCondition.alertConditionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alertConditionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertCondition.prototype, 'alertConditionComparison', {
            get: function() { return this.__prop_alertConditionComparison; },
            set: function(value) {
                if (!(value instanceof AlertConditionComparison)) {
                    try {
                        value = new AlertConditionComparison(value);
                    } catch (e) {
                        throw new TypeError('Error setting AlertCondition.alertConditionComparison: ' + e.message);
                    }
                }

                this.__prop_alertConditionComparison = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertCondition, '__type', { value: 'urn:inin.com:alerts:alertCondition' });

    Object.defineProperty(AlertCondition, '__propInfo', {
        get: function() {
            var pi = {
                'alertConditionId': { required: false, nullable: false },
                'alertConditionComparison': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertCondition'] = AlertCondition;

    return AlertCondition;
}());

var AlertNotification = (function(){
    var hasProps = false;

    function AlertNotification() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertNotification' });
        }

        AlertNotification._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertNotification, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AlertNotification.prototype, 'alertDefinitionId', {
            get: function() { return this.__prop_alertDefinitionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AlertNotification.alertDefinitionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alertDefinitionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertNotification.prototype, 'alertRuleId', {
            get: function() { return this.__prop_alertRuleId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AlertNotification.alertRuleId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alertRuleId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertNotification.prototype, 'cleared', {
            get: function() { return this.__prop_cleared; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for AlertNotification.cleared, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_cleared = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertNotification.prototype, 'timeStamp', {
            get: function() { return this.__prop_timeStamp; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for AlertNotification.timeStamp, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeStamp = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertNotification.prototype, 'statisticKey', {
            get: function() { return this.__prop_statisticKey; },
            set: function(value) {
                if (!(value instanceof Statistics.StatisticKey || value === void 0)) {
                    try {
                        value = new Statistics.StatisticKey(value);
                    } catch (e) {
                        throw new TypeError('Error setting AlertNotification.statisticKey: ' + e.message);
                    }
                }

                this.__prop_statisticKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertNotification.prototype, 'statisticValue', {
            get: function() { return this.__prop_statisticValue; },
            set: function(value) {
                if (!(value instanceof Statistics.StatisticValue)) {
                    try {
                        value = new Statistics.StatisticValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting AlertNotification.statisticValue: ' + e.message);
                    }
                }

                this.__prop_statisticValue = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertNotification, '__type', { value: 'urn:inin.com:alerts:alertNotification' });

    Object.defineProperty(AlertNotification, '__propInfo', {
        get: function() {
            var pi = {
                'alertDefinitionId': { required: true, nullable: false },
                'alertRuleId': { required: true, nullable: false },
                'cleared': { required: true, nullable: false },
                'timeStamp': { required: true, nullable: false },
                'statisticKey': { required: false, nullable: false },
                'statisticValue': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertNotification'] = AlertNotification;

    return AlertNotification;
}());

var Memo = (function(){
    var hasProps = false;

    function Memo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:memo' });
        }

        Memo._super.constructor.apply(this, arguments);
    }
    _util.inherits(Memo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Memo.prototype, 'expiration', {
            get: function() { return this.__prop_expiration; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for Memo.expiration, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_expiration = value;
            },
            enumerable: true
        });

        Object.defineProperty(Memo.prototype, 'memoTitle', {
            get: function() { return this.__prop_memoTitle; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Memo.memoTitle, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_memoTitle = value;
            },
            enumerable: true
        });

        Object.defineProperty(Memo.prototype, 'memoBody', {
            get: function() { return this.__prop_memoBody; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Memo.memoBody, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_memoBody = value;
            },
            enumerable: true
        });

        Object.defineProperty(Memo.prototype, 'displayType', {
            get: function() { return this.__prop_displayType; },
            set: function(value) {
                if (!(value instanceof DisplayType || value === void 0)) {
                    try {
                        value = new DisplayType(value);
                    } catch (e) {
                        throw new TypeError('Error setting Memo.displayType: ' + e.message);
                    }
                }

                this.__prop_displayType = value;
            },
            enumerable: true
        });

        Object.defineProperty(Memo.prototype, 'sound', {
            get: function() { return this.__prop_sound; },
            set: function(value) {
                if (!(value instanceof SoundType || value === void 0)) {
                    try {
                        value = new SoundType(value);
                    } catch (e) {
                        throw new TypeError('Error setting Memo.sound: ' + e.message);
                    }
                }

                this.__prop_sound = value;
            },
            enumerable: true
        });

        Object.defineProperty(Memo.prototype, 'iconUri', {
            get: function() { return this.__prop_iconUri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Memo.iconUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_iconUri = value;
            },
            enumerable: true
        });

        Object.defineProperty(Memo.prototype, 'url', {
            get: function() { return this.__prop_url; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Memo.url, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_url = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Memo, '__type', { value: 'urn:inin.com:alerts:memo' });

    Object.defineProperty(Memo, '__propInfo', {
        get: function() {
            var pi = {
                'expiration': { required: false, nullable: false },
                'memoTitle': { required: false, nullable: false },
                'memoBody': { required: false, nullable: false },
                'displayType': { required: false, nullable: false },
                'sound': { required: false, nullable: false },
                'iconUri': { required: false, nullable: false },
                'url': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:memo'] = Memo;

    return Memo;
}());

var AlertSetCreated = (function(){
    var hasProps = false;

    function AlertSetCreated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertSetCreated' });
        }

        AlertSetCreated._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertSetCreated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AlertSetCreated.prototype, 'alertSetId', {
            get: function() { return this.__prop_alertSetId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AlertSetCreated.alertSetId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alertSetId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertSetCreated, '__type', { value: 'urn:inin.com:alerts:alertSetCreated' });

    Object.defineProperty(AlertSetCreated, '__propInfo', {
        get: function() {
            var pi = {
                'alertSetId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertSetCreated'] = AlertSetCreated;

    return AlertSetCreated;
}());

var CreateMemoRequest = (function(){
    var hasProps = false;

    function CreateMemoRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:createMemoRequest' });
        }

        CreateMemoRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateMemoRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreateMemoRequest.prototype, 'userIds', {
            get: function() { return this.__prop_userIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for CreateMemoRequest.userIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userIds = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateMemoRequest.prototype, 'workgroups', {
            get: function() { return this.__prop_workgroups; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for CreateMemoRequest.workgroups, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateMemoRequest.prototype, 'iconFileName', {
            get: function() { return this.__prop_iconFileName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateMemoRequest.iconFileName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_iconFileName = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateMemoRequest.prototype, 'memo', {
            get: function() { return this.__prop_memo; },
            set: function(value) {
                if (!(value instanceof Memo)) {
                    try {
                        value = new Memo(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateMemoRequest.memo: ' + e.message);
                    }
                }

                this.__prop_memo = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateMemoRequest, '__type', { value: 'urn:inin.com:alerts:createMemoRequest' });

    Object.defineProperty(CreateMemoRequest, '__propInfo', {
        get: function() {
            var pi = {
                'userIds': { required: false, nullable: false },
                'workgroups': { required: false, nullable: false },
                'iconFileName': { required: false, nullable: false },
                'memo': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:createMemoRequest'] = CreateMemoRequest;

    return CreateMemoRequest;
}());

var CreateMemoResponse = (function(){
    var hasProps = false;

    function CreateMemoResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:createMemoResponse' });
        }

        CreateMemoResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateMemoResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreateMemoResponse.prototype, 'memoId', {
            get: function() { return this.__prop_memoId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreateMemoResponse.memoId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_memoId = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateMemoResponse.prototype, 'iconUploadUri', {
            get: function() { return this.__prop_iconUploadUri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateMemoResponse.iconUploadUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_iconUploadUri = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateMemoResponse, '__type', { value: 'urn:inin.com:alerts:createMemoResponse' });

    Object.defineProperty(CreateMemoResponse, '__propInfo', {
        get: function() {
            var pi = {
                'memoId': { required: true, nullable: false },
                'iconUploadUri': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:createMemoResponse'] = CreateMemoResponse;

    return CreateMemoResponse;
}());

var AlertCatalogSubscription = (function(){
    var hasProps = false;

    function AlertCatalogSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertCatalogSubscription' });
        }

        AlertCatalogSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertCatalogSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AlertCatalogSubscription.prototype, 'alertSetCategories', {
            get: function() { return this.__prop_alertSetCategories; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AlertSetCategory); }))) {
                    try {
                        value = value.map(function(item){ return new AlertSetCategory(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AlertCatalogSubscription.alertSetCategories: ' + e.message);
                    }
                }

                this.__prop_alertSetCategories = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertCatalogSubscription, '__type', { value: 'urn:inin.com:alerts:alertCatalogSubscription' });

    Object.defineProperty(AlertCatalogSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'alertSetCategories': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertCatalogSubscription'] = AlertCatalogSubscription;

    return AlertCatalogSubscription;
}());

var AlertNotificationSubscription = (function(){
    var hasProps = false;

    function AlertNotificationSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertNotificationSubscription' });
        }

        AlertNotificationSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertNotificationSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AlertNotificationSubscription.prototype, 'alertSetsAdded', {
            get: function() { return this.__prop_alertSetsAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AlertSetKey); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AlertSetKey(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AlertNotificationSubscription.alertSetsAdded: ' + e.message);
                    }
                }

                this.__prop_alertSetsAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertNotificationSubscription.prototype, 'alertSetsRemoved', {
            get: function() { return this.__prop_alertSetsRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AlertSetKey); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AlertSetKey(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AlertNotificationSubscription.alertSetsRemoved: ' + e.message);
                    }
                }

                this.__prop_alertSetsRemoved = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertNotificationSubscription, '__type', { value: 'urn:inin.com:alerts:alertNotificationSubscription' });

    Object.defineProperty(AlertNotificationSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'alertSetsAdded': { required: false, nullable: false },
                'alertSetsRemoved': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertNotificationSubscription'] = AlertNotificationSubscription;

    return AlertNotificationSubscription;
}());

var AlertSetKey = (function(){
    var hasProps = false;

    function AlertSetKey() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertSetKey' });
        }

        AlertSetKey._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertSetKey, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AlertSetKey.prototype, 'alertSetId', {
            get: function() { return this.__prop_alertSetId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AlertSetKey.alertSetId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alertSetId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertSetKey, '__type', { value: 'urn:inin.com:alerts:alertSetKey' });

    Object.defineProperty(AlertSetKey, '__propInfo', {
        get: function() {
            var pi = {
                'alertSetId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertSetKey'] = AlertSetKey;

    return AlertSetKey;
}());

var AlertCatalogChangedMessage = (function(){
    var hasProps = false;

    function AlertCatalogChangedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertCatalogChangedMessage', enumerable: true });
        }

        AlertCatalogChangedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertCatalogChangedMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(AlertCatalogChangedMessage.prototype, 'alertSetsAdded', {
            get: function() { return this.__prop_alertSetsAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AlertSet); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AlertSet(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AlertCatalogChangedMessage.alertSetsAdded: ' + e.message);
                    }
                }

                this.__prop_alertSetsAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertCatalogChangedMessage.prototype, 'alertSetsRemoved', {
            get: function() { return this.__prop_alertSetsRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for AlertCatalogChangedMessage.alertSetsRemoved, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alertSetsRemoved = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertCatalogChangedMessage.prototype, 'alertSetsChanged', {
            get: function() { return this.__prop_alertSetsChanged; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AlertSet); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AlertSet(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AlertCatalogChangedMessage.alertSetsChanged: ' + e.message);
                    }
                }

                this.__prop_alertSetsChanged = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertCatalogChangedMessage, '__type', { value: 'urn:inin.com:alerts:alertCatalogChangedMessage' });

    Object.defineProperty(AlertCatalogChangedMessage, '__propInfo', {
        get: function() {
            var pi = {
                'alertSetsAdded': { required: false, nullable: false },
                'alertSetsRemoved': { required: false, nullable: false },
                'alertSetsChanged': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertCatalogChangedMessage'] = AlertCatalogChangedMessage;

    return AlertCatalogChangedMessage;
}());

var AlertSet = (function(){
    var hasProps = false;

    function AlertSet() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertSet', enumerable: true });
        }

        AlertSet._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertSet, BaseAlertSet);

    function defineProps() {
        Object.defineProperty(AlertSet.prototype, 'alertDefinitions', {
            get: function() { return this.__prop_alertDefinitions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AlertDefinition); }))) {
                    try {
                        value = value.map(function(item){ return new AlertDefinition(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AlertSet.alertDefinitions: ' + e.message);
                    }
                }

                this.__prop_alertDefinitions = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertSet.prototype, 'alertSetId', {
            get: function() { return this.__prop_alertSetId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AlertSet.alertSetId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alertSetId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertSet.prototype, 'created', {
            get: function() { return this.__prop_created; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for AlertSet.created, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_created = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertSet.prototype, 'ownerDisplayName', {
            get: function() { return this.__prop_ownerDisplayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AlertSet.ownerDisplayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ownerDisplayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertSet.prototype, 'modified', {
            get: function() { return this.__prop_modified; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for AlertSet.modified, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_modified = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertSet.prototype, 'modifiedBy', {
            get: function() { return this.__prop_modifiedBy; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AlertSet.modifiedBy, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_modifiedBy = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertSet.prototype, 'subscribedByOther', {
            get: function() { return this.__prop_subscribedByOther; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for AlertSet.subscribedByOther, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subscribedByOther = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertSet.prototype, 'subscribedByOwner', {
            get: function() { return this.__prop_subscribedByOwner; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for AlertSet.subscribedByOwner, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subscribedByOwner = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlertSet.prototype, 'subscribedByUser', {
            get: function() { return this.__prop_subscribedByUser; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for AlertSet.subscribedByUser, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subscribedByUser = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertSet, '__type', { value: 'urn:inin.com:alerts:alertSet' });

    Object.defineProperty(AlertSet, '__propInfo', {
        get: function() {
            var pi = {
                'alertDefinitions': { required: true, nullable: false },
                'alertSetId': { required: true, nullable: false },
                'created': { required: true, nullable: false },
                'ownerDisplayName': { required: true, nullable: false },
                'modified': { required: true, nullable: false },
                'modifiedBy': { required: true, nullable: false },
                'subscribedByOther': { required: false, nullable: false },
                'subscribedByOwner': { required: false, nullable: false },
                'subscribedByUser': { required: false, nullable: false }
            };
            if (BaseAlertSet.__propInfo) { _util.extend(pi, BaseAlertSet.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertSet'] = AlertSet;

    return AlertSet;
}());

var CreateAlertSetParameters = (function(){
    var hasProps = false;

    function CreateAlertSetParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:createAlertSetParameters', enumerable: true });
        }

        CreateAlertSetParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateAlertSetParameters, BaseAlertSet);

    function defineProps() {
        Object.defineProperty(CreateAlertSetParameters.prototype, 'alertDefinitions', {
            get: function() { return this.__prop_alertDefinitions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AlertDefinitionRequest); }))) {
                    try {
                        value = value.map(function(item){ return new AlertDefinitionRequest(item); });
                    } catch (e) {
                        throw new TypeError('Error setting CreateAlertSetParameters.alertDefinitions: ' + e.message);
                    }
                }

                this.__prop_alertDefinitions = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateAlertSetParameters, '__type', { value: 'urn:inin.com:alerts:createAlertSetParameters' });

    Object.defineProperty(CreateAlertSetParameters, '__propInfo', {
        get: function() {
            var pi = {
                'alertDefinitions': { required: true, nullable: false }
            };
            if (BaseAlertSet.__propInfo) { _util.extend(pi, BaseAlertSet.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:createAlertSetParameters'] = CreateAlertSetParameters;

    return CreateAlertSetParameters;
}());

var AlertDefinitionRequest = (function(){
    var hasProps = false;

    function AlertDefinitionRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertDefinitionRequest', enumerable: true });
        }

        AlertDefinitionRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertDefinitionRequest, BaseAlertDefinition);

    function defineProps() {
        Object.defineProperty(AlertDefinitionRequest.prototype, 'alertRules', {
            get: function() { return this.__prop_alertRules; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AlertRuleRequest); }))) {
                    try {
                        value = value.map(function(item){ return new AlertRuleRequest(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AlertDefinitionRequest.alertRules: ' + e.message);
                    }
                }

                this.__prop_alertRules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertDefinitionRequest, '__type', { value: 'urn:inin.com:alerts:alertDefinitionRequest' });

    Object.defineProperty(AlertDefinitionRequest, '__propInfo', {
        get: function() {
            var pi = {
                'alertRules': { required: true, nullable: false }
            };
            if (BaseAlertDefinition.__propInfo) { _util.extend(pi, BaseAlertDefinition.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertDefinitionRequest'] = AlertDefinitionRequest;

    return AlertDefinitionRequest;
}());

var AlertDefinition = (function(){
    var hasProps = false;

    function AlertDefinition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertDefinition', enumerable: true });
        }

        AlertDefinition._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertDefinition, BaseAlertDefinition);

    function defineProps() {
        Object.defineProperty(AlertDefinition.prototype, 'alertRules', {
            get: function() { return this.__prop_alertRules; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AlertRule); }))) {
                    try {
                        value = value.map(function(item){ return new AlertRule(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AlertDefinition.alertRules: ' + e.message);
                    }
                }

                this.__prop_alertRules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertDefinition, '__type', { value: 'urn:inin.com:alerts:alertDefinition' });

    Object.defineProperty(AlertDefinition, '__propInfo', {
        get: function() {
            var pi = {
                'alertRules': { required: true, nullable: false }
            };
            if (BaseAlertDefinition.__propInfo) { _util.extend(pi, BaseAlertDefinition.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertDefinition'] = AlertDefinition;

    return AlertDefinition;
}());

var AlertRule = (function(){
    var hasProps = false;

    function AlertRule() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertRule', enumerable: true });
        }

        AlertRule._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertRule, BaseAlertRule);

    function defineProps() {
        Object.defineProperty(AlertRule.prototype, 'alertCondition', {
            get: function() { return this.__prop_alertCondition; },
            set: function(value) {
                if (!(value instanceof AlertCondition || value === void 0)) {
                    try {
                        value = new AlertCondition(value);
                    } catch (e) {
                        throw new TypeError('Error setting AlertRule.alertCondition: ' + e.message);
                    }
                }

                this.__prop_alertCondition = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertRule, '__type', { value: 'urn:inin.com:alerts:alertRule' });

    Object.defineProperty(AlertRule, '__propInfo', {
        get: function() {
            var pi = {
                'alertCondition': { required: false, nullable: false }
            };
            if (BaseAlertRule.__propInfo) { _util.extend(pi, BaseAlertRule.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertRule'] = AlertRule;

    return AlertRule;
}());

var AlertRuleRequest = (function(){
    var hasProps = false;

    function AlertRuleRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertRuleRequest', enumerable: true });
        }

        AlertRuleRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertRuleRequest, BaseAlertRule);

    function defineProps() {
        Object.defineProperty(AlertRuleRequest.prototype, 'alertCondition', {
            get: function() { return this.__prop_alertCondition; },
            set: function(value) {
                if (!(value instanceof AlertConditionRequest || value === void 0)) {
                    try {
                        value = new AlertConditionRequest(value);
                    } catch (e) {
                        throw new TypeError('Error setting AlertRuleRequest.alertCondition: ' + e.message);
                    }
                }

                this.__prop_alertCondition = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertRuleRequest, '__type', { value: 'urn:inin.com:alerts:alertRuleRequest' });

    Object.defineProperty(AlertRuleRequest, '__propInfo', {
        get: function() {
            var pi = {
                'alertCondition': { required: false, nullable: false }
            };
            if (BaseAlertRule.__propInfo) { _util.extend(pi, BaseAlertRule.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertRuleRequest'] = AlertRuleRequest;

    return AlertRuleRequest;
}());

var BoolConditionRequest = (function(){
    var hasProps = false;

    function BoolConditionRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:boolConditionRequest', enumerable: true });
        }

        BoolConditionRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(BoolConditionRequest, AlertConditionRequest);

    function defineProps() {
        Object.defineProperty(BoolConditionRequest.prototype, 'alertConditionComparison', {
            get: function() { return this.__prop_alertConditionComparison; },
            set: function(value) {
                if (!(value instanceof BooleanAlertConditionComparison)) {
                    try {
                        value = new BooleanAlertConditionComparison(value);
                    } catch (e) {
                        throw new TypeError('Error setting BoolConditionRequest.alertConditionComparison: ' + e.message);
                    }
                }

                this.__prop_alertConditionComparison = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BoolConditionRequest, '__type', { value: 'urn:inin.com:alerts:boolConditionRequest' });

    Object.defineProperty(BoolConditionRequest, '__propInfo', {
        get: function() {
            var pi = {
                'alertConditionComparison': { required: true, nullable: false }
            };
            if (AlertConditionRequest.__propInfo) { _util.extend(pi, AlertConditionRequest.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:boolConditionRequest'] = BoolConditionRequest;

    return BoolConditionRequest;
}());

var StringConditionRequest = (function(){
    var hasProps = false;

    function StringConditionRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:stringConditionRequest', enumerable: true });
        }

        StringConditionRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(StringConditionRequest, AlertConditionRequest);

    function defineProps() {
        Object.defineProperty(StringConditionRequest.prototype, 'alertConditionComparison', {
            get: function() { return this.__prop_alertConditionComparison; },
            set: function(value) {
                if (!(value instanceof StringAlertConditionComparison)) {
                    try {
                        value = new StringAlertConditionComparison(value);
                    } catch (e) {
                        throw new TypeError('Error setting StringConditionRequest.alertConditionComparison: ' + e.message);
                    }
                }

                this.__prop_alertConditionComparison = value;
            },
            enumerable: true
        });

        Object.defineProperty(StringConditionRequest.prototype, 'text', {
            get: function() { return this.__prop_text; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for StringConditionRequest.text, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_text = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StringConditionRequest, '__type', { value: 'urn:inin.com:alerts:stringConditionRequest' });

    Object.defineProperty(StringConditionRequest, '__propInfo', {
        get: function() {
            var pi = {
                'alertConditionComparison': { required: true, nullable: false },
                'text': { required: false, nullable: false }
            };
            if (AlertConditionRequest.__propInfo) { _util.extend(pi, AlertConditionRequest.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:stringConditionRequest'] = StringConditionRequest;

    return StringConditionRequest;
}());

var NumericConditionRequest = (function(){
    var hasProps = false;

    function NumericConditionRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:numericConditionRequest', enumerable: true });
        }

        NumericConditionRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(NumericConditionRequest, AlertConditionRequest);

    function defineProps() {
        Object.defineProperty(NumericConditionRequest.prototype, 'alertConditionComparison', {
            get: function() { return this.__prop_alertConditionComparison; },
            set: function(value) {
                if (!(value instanceof NumericAlertConditionComparison)) {
                    try {
                        value = new NumericAlertConditionComparison(value);
                    } catch (e) {
                        throw new TypeError('Error setting NumericConditionRequest.alertConditionComparison: ' + e.message);
                    }
                }

                this.__prop_alertConditionComparison = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(NumericConditionRequest, '__type', { value: 'urn:inin.com:alerts:numericConditionRequest' });

    Object.defineProperty(NumericConditionRequest, '__propInfo', {
        get: function() {
            var pi = {
                'alertConditionComparison': { required: true, nullable: false }
            };
            if (AlertConditionRequest.__propInfo) { _util.extend(pi, AlertConditionRequest.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:numericConditionRequest'] = NumericConditionRequest;

    return NumericConditionRequest;
}());

var BoolCondition = (function(){
    var hasProps = false;

    function BoolCondition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:boolCondition', enumerable: true });
        }

        BoolCondition._super.constructor.apply(this, arguments);
    }
    _util.inherits(BoolCondition, AlertCondition);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(BoolCondition, '__type', { value: 'urn:inin.com:alerts:boolCondition' });

    Object.defineProperty(BoolCondition, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (AlertCondition.__propInfo) { _util.extend(pi, AlertCondition.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:boolCondition'] = BoolCondition;

    return BoolCondition;
}());

var StringCondition = (function(){
    var hasProps = false;

    function StringCondition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:stringCondition', enumerable: true });
        }

        StringCondition._super.constructor.apply(this, arguments);
    }
    _util.inherits(StringCondition, AlertCondition);

    function defineProps() {
        Object.defineProperty(StringCondition.prototype, 'text', {
            get: function() { return this.__prop_text; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StringCondition.text, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_text = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StringCondition, '__type', { value: 'urn:inin.com:alerts:stringCondition' });

    Object.defineProperty(StringCondition, '__propInfo', {
        get: function() {
            var pi = {
                'text': { required: true, nullable: false }
            };
            if (AlertCondition.__propInfo) { _util.extend(pi, AlertCondition.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:stringCondition'] = StringCondition;

    return StringCondition;
}());

var NumericCondition = (function(){
    var hasProps = false;

    function NumericCondition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:numericCondition', enumerable: true });
        }

        NumericCondition._super.constructor.apply(this, arguments);
    }
    _util.inherits(NumericCondition, AlertCondition);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(NumericCondition, '__type', { value: 'urn:inin.com:alerts:numericCondition' });

    Object.defineProperty(NumericCondition, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (AlertCondition.__propInfo) { _util.extend(pi, AlertCondition.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:numericCondition'] = NumericCondition;

    return NumericCondition;
}());

var UpdateAlertSetParameters = (function(){
    var hasProps = false;

    function UpdateAlertSetParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:updateAlertSetParameters', enumerable: true });
        }

        UpdateAlertSetParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(UpdateAlertSetParameters, BaseAlertSet);

    function defineProps() {
        Object.defineProperty(UpdateAlertSetParameters.prototype, 'alertDefinitions', {
            get: function() { return this.__prop_alertDefinitions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AlertDefinitionRequest); }))) {
                    try {
                        value = value.map(function(item){ return new AlertDefinitionRequest(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UpdateAlertSetParameters.alertDefinitions: ' + e.message);
                    }
                }

                this.__prop_alertDefinitions = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateAlertSetParameters.prototype, 'alertSetId', {
            get: function() { return this.__prop_alertSetId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UpdateAlertSetParameters.alertSetId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alertSetId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UpdateAlertSetParameters, '__type', { value: 'urn:inin.com:alerts:updateAlertSetParameters' });

    Object.defineProperty(UpdateAlertSetParameters, '__propInfo', {
        get: function() {
            var pi = {
                'alertDefinitions': { required: true, nullable: false },
                'alertSetId': { required: true, nullable: false }
            };
            if (BaseAlertSet.__propInfo) { _util.extend(pi, BaseAlertSet.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:updateAlertSetParameters'] = UpdateAlertSetParameters;

    return UpdateAlertSetParameters;
}());

var AlertNotificationMessage = (function(){
    var hasProps = false;

    function AlertNotificationMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:alertNotificationMessage', enumerable: true });
        }

        AlertNotificationMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlertNotificationMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(AlertNotificationMessage.prototype, 'alertNotificationList', {
            get: function() { return this.__prop_alertNotificationList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AlertNotification); }))) {
                    try {
                        value = value.map(function(item){ return new AlertNotification(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AlertNotificationMessage.alertNotificationList: ' + e.message);
                    }
                }

                this.__prop_alertNotificationList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlertNotificationMessage, '__type', { value: 'urn:inin.com:alerts:alertNotificationMessage' });

    Object.defineProperty(AlertNotificationMessage, '__propInfo', {
        get: function() {
            var pi = {
                'alertNotificationList': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:alertNotificationMessage'] = AlertNotificationMessage;

    return AlertNotificationMessage;
}());

var MemoListMessage = (function(){
    var hasProps = false;

    function MemoListMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:memoListMessage', enumerable: true });
        }

        MemoListMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(MemoListMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(MemoListMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (value[key] instanceof Memo); }) || value === void 0)) {
                    try {
                        value = Object.keys(value).reduce(function(o, key){ o[key] = new Memo(value[key]); return o; }, {});
                    } catch (e) {
                        throw new TypeError('Error setting MemoListMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(MemoListMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (value[key] instanceof Memo); }) || value === void 0)) {
                    try {
                        value = Object.keys(value).reduce(function(o, key){ o[key] = new Memo(value[key]); return o; }, {});
                    } catch (e) {
                        throw new TypeError('Error setting MemoListMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(MemoListMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for MemoListMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MemoListMessage, '__type', { value: 'urn:inin.com:alerts:memoListMessage' });

    Object.defineProperty(MemoListMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:memoListMessage'] = MemoListMessage;

    return MemoListMessage;
}());

var NumericDoubleConditionRequest = (function(){
    var hasProps = false;

    function NumericDoubleConditionRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:numericDoubleConditionRequest', enumerable: true });
        }

        NumericDoubleConditionRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(NumericDoubleConditionRequest, NumericConditionRequest);

    function defineProps() {
        Object.defineProperty(NumericDoubleConditionRequest.prototype, 'minimum', {
            get: function() { return this.__prop_minimum; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0)) {
                    throw new TypeError('Expected type Number (floating point) for NumericDoubleConditionRequest.minimum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimum = value;
            },
            enumerable: true
        });

        Object.defineProperty(NumericDoubleConditionRequest.prototype, 'maximum', {
            get: function() { return this.__prop_maximum; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0)) {
                    throw new TypeError('Expected type Number (floating point) for NumericDoubleConditionRequest.maximum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximum = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(NumericDoubleConditionRequest, '__type', { value: 'urn:inin.com:alerts:numericDoubleConditionRequest' });

    Object.defineProperty(NumericDoubleConditionRequest, '__propInfo', {
        get: function() {
            var pi = {
                'minimum': { required: false, nullable: false },
                'maximum': { required: false, nullable: false }
            };
            if (NumericConditionRequest.__propInfo) { _util.extend(pi, NumericConditionRequest.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:numericDoubleConditionRequest'] = NumericDoubleConditionRequest;

    return NumericDoubleConditionRequest;
}());

var NumericIntConditionRequest = (function(){
    var hasProps = false;

    function NumericIntConditionRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:numericIntConditionRequest', enumerable: true });
        }

        NumericIntConditionRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(NumericIntConditionRequest, NumericConditionRequest);

    function defineProps() {
        Object.defineProperty(NumericIntConditionRequest.prototype, 'minimum', {
            get: function() { return this.__prop_minimum; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for NumericIntConditionRequest.minimum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimum = value;
            },
            enumerable: true
        });

        Object.defineProperty(NumericIntConditionRequest.prototype, 'maximum', {
            get: function() { return this.__prop_maximum; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for NumericIntConditionRequest.maximum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximum = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(NumericIntConditionRequest, '__type', { value: 'urn:inin.com:alerts:numericIntConditionRequest' });

    Object.defineProperty(NumericIntConditionRequest, '__propInfo', {
        get: function() {
            var pi = {
                'minimum': { required: false, nullable: false },
                'maximum': { required: false, nullable: false }
            };
            if (NumericConditionRequest.__propInfo) { _util.extend(pi, NumericConditionRequest.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:numericIntConditionRequest'] = NumericIntConditionRequest;

    return NumericIntConditionRequest;
}());

var NumericTimeSpanConditionRequest = (function(){
    var hasProps = false;

    function NumericTimeSpanConditionRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:numericTimeSpanConditionRequest', enumerable: true });
        }

        NumericTimeSpanConditionRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(NumericTimeSpanConditionRequest, NumericConditionRequest);

    function defineProps() {
        Object.defineProperty(NumericTimeSpanConditionRequest.prototype, 'minimum', {
            get: function() { return this.__prop_minimum; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0)) {
                    throw new TypeError('Expected type _util.Duration for NumericTimeSpanConditionRequest.minimum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimum = value;
            },
            enumerable: true
        });

        Object.defineProperty(NumericTimeSpanConditionRequest.prototype, 'maximum', {
            get: function() { return this.__prop_maximum; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0)) {
                    throw new TypeError('Expected type _util.Duration for NumericTimeSpanConditionRequest.maximum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximum = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(NumericTimeSpanConditionRequest, '__type', { value: 'urn:inin.com:alerts:numericTimeSpanConditionRequest' });

    Object.defineProperty(NumericTimeSpanConditionRequest, '__propInfo', {
        get: function() {
            var pi = {
                'minimum': { required: false, nullable: false },
                'maximum': { required: false, nullable: false }
            };
            if (NumericConditionRequest.__propInfo) { _util.extend(pi, NumericConditionRequest.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:numericTimeSpanConditionRequest'] = NumericTimeSpanConditionRequest;

    return NumericTimeSpanConditionRequest;
}());

var NumericTimeStampConditionRequest = (function(){
    var hasProps = false;

    function NumericTimeStampConditionRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:numericTimeStampConditionRequest', enumerable: true });
        }

        NumericTimeStampConditionRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(NumericTimeStampConditionRequest, NumericConditionRequest);

    function defineProps() {
        Object.defineProperty(NumericTimeStampConditionRequest.prototype, 'minimum', {
            get: function() { return this.__prop_minimum; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for NumericTimeStampConditionRequest.minimum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimum = value;
            },
            enumerable: true
        });

        Object.defineProperty(NumericTimeStampConditionRequest.prototype, 'maximum', {
            get: function() { return this.__prop_maximum; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for NumericTimeStampConditionRequest.maximum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximum = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(NumericTimeStampConditionRequest, '__type', { value: 'urn:inin.com:alerts:numericTimeStampConditionRequest' });

    Object.defineProperty(NumericTimeStampConditionRequest, '__propInfo', {
        get: function() {
            var pi = {
                'minimum': { required: false, nullable: false },
                'maximum': { required: false, nullable: false }
            };
            if (NumericConditionRequest.__propInfo) { _util.extend(pi, NumericConditionRequest.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:numericTimeStampConditionRequest'] = NumericTimeStampConditionRequest;

    return NumericTimeStampConditionRequest;
}());

var NumericDoubleCondition = (function(){
    var hasProps = false;

    function NumericDoubleCondition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:numericDoubleCondition', enumerable: true });
        }

        NumericDoubleCondition._super.constructor.apply(this, arguments);
    }
    _util.inherits(NumericDoubleCondition, NumericCondition);

    function defineProps() {
        Object.defineProperty(NumericDoubleCondition.prototype, 'minimum', {
            get: function() { return this.__prop_minimum; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for NumericDoubleCondition.minimum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimum = value;
            },
            enumerable: true
        });

        Object.defineProperty(NumericDoubleCondition.prototype, 'maximum', {
            get: function() { return this.__prop_maximum; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for NumericDoubleCondition.maximum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximum = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(NumericDoubleCondition, '__type', { value: 'urn:inin.com:alerts:numericDoubleCondition' });

    Object.defineProperty(NumericDoubleCondition, '__propInfo', {
        get: function() {
            var pi = {
                'minimum': { required: true, nullable: false },
                'maximum': { required: true, nullable: false }
            };
            if (NumericCondition.__propInfo) { _util.extend(pi, NumericCondition.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:numericDoubleCondition'] = NumericDoubleCondition;

    return NumericDoubleCondition;
}());

var NumericIntCondition = (function(){
    var hasProps = false;

    function NumericIntCondition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:numericIntCondition', enumerable: true });
        }

        NumericIntCondition._super.constructor.apply(this, arguments);
    }
    _util.inherits(NumericIntCondition, NumericCondition);

    function defineProps() {
        Object.defineProperty(NumericIntCondition.prototype, 'minimum', {
            get: function() { return this.__prop_minimum; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for NumericIntCondition.minimum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimum = value;
            },
            enumerable: true
        });

        Object.defineProperty(NumericIntCondition.prototype, 'maximum', {
            get: function() { return this.__prop_maximum; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for NumericIntCondition.maximum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximum = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(NumericIntCondition, '__type', { value: 'urn:inin.com:alerts:numericIntCondition' });

    Object.defineProperty(NumericIntCondition, '__propInfo', {
        get: function() {
            var pi = {
                'minimum': { required: true, nullable: false },
                'maximum': { required: true, nullable: false }
            };
            if (NumericCondition.__propInfo) { _util.extend(pi, NumericCondition.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:numericIntCondition'] = NumericIntCondition;

    return NumericIntCondition;
}());

var NumericTimeSpanCondition = (function(){
    var hasProps = false;

    function NumericTimeSpanCondition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:numericTimeSpanCondition', enumerable: true });
        }

        NumericTimeSpanCondition._super.constructor.apply(this, arguments);
    }
    _util.inherits(NumericTimeSpanCondition, NumericCondition);

    function defineProps() {
        Object.defineProperty(NumericTimeSpanCondition.prototype, 'minimum', {
            get: function() { return this.__prop_minimum; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value))) {
                    throw new TypeError('Expected type _util.Duration for NumericTimeSpanCondition.minimum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimum = value;
            },
            enumerable: true
        });

        Object.defineProperty(NumericTimeSpanCondition.prototype, 'maximum', {
            get: function() { return this.__prop_maximum; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value))) {
                    throw new TypeError('Expected type _util.Duration for NumericTimeSpanCondition.maximum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximum = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(NumericTimeSpanCondition, '__type', { value: 'urn:inin.com:alerts:numericTimeSpanCondition' });

    Object.defineProperty(NumericTimeSpanCondition, '__propInfo', {
        get: function() {
            var pi = {
                'minimum': { required: true, nullable: false },
                'maximum': { required: true, nullable: false }
            };
            if (NumericCondition.__propInfo) { _util.extend(pi, NumericCondition.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:numericTimeSpanCondition'] = NumericTimeSpanCondition;

    return NumericTimeSpanCondition;
}());

var NumericTimeStampCondition = (function(){
    var hasProps = false;

    function NumericTimeStampCondition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:alerts:numericTimeStampCondition', enumerable: true });
        }

        NumericTimeStampCondition._super.constructor.apply(this, arguments);
    }
    _util.inherits(NumericTimeStampCondition, NumericCondition);

    function defineProps() {
        Object.defineProperty(NumericTimeStampCondition.prototype, 'minimum', {
            get: function() { return this.__prop_minimum; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for NumericTimeStampCondition.minimum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimum = value;
            },
            enumerable: true
        });

        Object.defineProperty(NumericTimeStampCondition.prototype, 'maximum', {
            get: function() { return this.__prop_maximum; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for NumericTimeStampCondition.maximum, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximum = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(NumericTimeStampCondition, '__type', { value: 'urn:inin.com:alerts:numericTimeStampCondition' });

    Object.defineProperty(NumericTimeStampCondition, '__propInfo', {
        get: function() {
            var pi = {
                'minimum': { required: true, nullable: false },
                'maximum': { required: true, nullable: false }
            };
            if (NumericCondition.__propInfo) { _util.extend(pi, NumericCondition.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:alerts:numericTimeStampCondition'] = NumericTimeStampCondition;

    return NumericTimeStampCondition;
}());

var $memos = (function(){
    function createMemo(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createMemo.params)) {
            try {
                params = new createMemo.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createMemo.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof CreateMemoResponse) ? o : new CreateMemoResponse(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createMemo.method, createMemo.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createMemo, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/alerts/memos', enumerable: true }
    });

    createMemo.params = (function(){
        _util.inherits(createMemo_params, _util.RequestParams);

        function createMemo_params(properties) {
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
            if (!(properties.content instanceof CreateMemoRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Alerts.CreateMemoRequest');
            }

            createMemo_params._super.constructor.apply(this, arguments);
        }

        return createMemo_params;
    })();

    function deleteMemo(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteMemo.params)) {
            try {
                params = new deleteMemo.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteMemo.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteMemo.method, deleteMemo.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteMemo, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/alerts/memos/{memoId}', enumerable: true }
    });

    deleteMemo.params = (function(){
        _util.inherits(deleteMemo_params, _util.RequestParams);

        function deleteMemo_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, memoId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'memoId')) {
                throw new Error('`properties.template` is missing required property: `memoId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteMemo_params._super.constructor.apply(this, arguments);
        }

        return deleteMemo_params;
    })();

    return Object.create(null, {
        createMemo: { value: createMemo, enumerable: true },
        deleteMemo: { value: deleteMemo, enumerable: true }
    });
})();

exports.AlertSetAccessMode = AlertSetAccessMode;
exports.AlertSeverity = AlertSeverity;
exports.BooleanAlertConditionComparison = BooleanAlertConditionComparison;
exports.StringAlertConditionComparison = StringAlertConditionComparison;
exports.NumericAlertConditionComparison = NumericAlertConditionComparison;
exports.AlertConditionComparison = AlertConditionComparison;
exports.DisplayType = DisplayType;
exports.SoundType = SoundType;
exports.AlertSetCategory = AlertSetCategory;
exports.AlertCatalogChangedMessage = AlertCatalogChangedMessage;
exports.AlertSet = AlertSet;
exports.BaseAlertSet = BaseAlertSet;
exports.CreateAlertSetParameters = CreateAlertSetParameters;
exports.AlertDefinitionRequest = AlertDefinitionRequest;
exports.BaseAlertDefinition = BaseAlertDefinition;
exports.AlertDefinition = AlertDefinition;
exports.AlertRule = AlertRule;
exports.BaseAlertRule = BaseAlertRule;
exports.AlertAction = AlertAction;
exports.AlertRuleRequest = AlertRuleRequest;
exports.AlertConditionRequest = AlertConditionRequest;
exports.BoolConditionRequest = BoolConditionRequest;
exports.StringConditionRequest = StringConditionRequest;
exports.NumericConditionRequest = NumericConditionRequest;
exports.NumericDoubleConditionRequest = NumericDoubleConditionRequest;
exports.NumericIntConditionRequest = NumericIntConditionRequest;
exports.NumericTimeSpanConditionRequest = NumericTimeSpanConditionRequest;
exports.NumericTimeStampConditionRequest = NumericTimeStampConditionRequest;
exports.AlertCondition = AlertCondition;
exports.BoolCondition = BoolCondition;
exports.StringCondition = StringCondition;
exports.NumericCondition = NumericCondition;
exports.NumericDoubleCondition = NumericDoubleCondition;
exports.NumericIntCondition = NumericIntCondition;
exports.NumericTimeSpanCondition = NumericTimeSpanCondition;
exports.NumericTimeStampCondition = NumericTimeStampCondition;
exports.UpdateAlertSetParameters = UpdateAlertSetParameters;
exports.AlertNotificationMessage = AlertNotificationMessage;
exports.AlertNotification = AlertNotification;
exports.MemoListMessage = MemoListMessage;
exports.Memo = Memo;
exports.AlertSetCreated = AlertSetCreated;
exports.CreateMemoRequest = CreateMemoRequest;
exports.CreateMemoResponse = CreateMemoResponse;
exports.AlertCatalogSubscription = AlertCatalogSubscription;
exports.AlertNotificationSubscription = AlertNotificationSubscription;
exports.AlertSetKey = AlertSetKey;
exports.$memos = $memos;
