/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var StatisticValueType = (function(){
    var instanceCache = {};
    function StatisticValueType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticValueType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(StatisticValueType, _util.EnumValue);

    Object.defineProperties(StatisticValueType, {
        'Int': { value: new StatisticValueType(0, 'Int'), enumerable: true },
        'Double': { value: new StatisticValueType(1, 'Double'), enumerable: true },
        'String': { value: new StatisticValueType(2, 'String'), enumerable: true },
        'Bool': { value: new StatisticValueType(3, 'Bool'), enumerable: true },
        'TimeStamp': { value: new StatisticValueType(4, 'TimeStamp'), enumerable: true },
        'TimeDuration': { value: new StatisticValueType(5, 'TimeDuration'), enumerable: true },
        'Duration': { value: new StatisticValueType(6, 'Duration'), enumerable: true },
        'FutureDuration': { value: new StatisticValueType(7, 'FutureDuration'), enumerable: true },
        'FiniteDuration': { value: new StatisticValueType(8, 'FiniteDuration'), enumerable: true },
        'Percent': { value: new StatisticValueType(9, 'Percent'), enumerable: true },
        'StatusMessage': { value: new StatisticValueType(10, 'StatusMessage'), enumerable: true },
        'WeightedPercent': { value: new StatisticValueType(11, 'WeightedPercent'), enumerable: true },
        'Error': { value: new StatisticValueType(12, 'Error'), enumerable: true }
    });

    Object.defineProperty(StatisticValueType, '__type', { value: 'urn:inin.com:statistics:statisticValueType' });

    _typemap['urn:inin.com:statistics:statisticValueType'] = StatisticValueType;

    return StatisticValueType;
}());

var StatisticErrorValueType = (function(){
    var instanceCache = {};
    function StatisticErrorValueType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticErrorValueType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(StatisticErrorValueType, _util.EnumValue);

    Object.defineProperties(StatisticErrorValueType, {
        'MalformedStatisticKey': { value: new StatisticErrorValueType(1, 'MalformedStatisticKey'), enumerable: true },
        'UnknownStatisticKey': { value: new StatisticErrorValueType(2, 'UnknownStatisticKey'), enumerable: true },
        'StatisticProviderTooBusy': { value: new StatisticErrorValueType(3, 'StatisticProviderTooBusy'), enumerable: true },
        'Other': { value: new StatisticErrorValueType(99, 'Other'), enumerable: true }
    });

    Object.defineProperty(StatisticErrorValueType, '__type', { value: 'urn:inin.com:statistics:statisticErrorValueType' });

    _typemap['urn:inin.com:statistics:statisticErrorValueType'] = StatisticErrorValueType;

    return StatisticErrorValueType;
}());

var StatisticUnits = (function(){
    var instanceCache = {};
    function StatisticUnits(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticUnits' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(StatisticUnits, _util.EnumValue);

    Object.defineProperties(StatisticUnits, {
        'None': { value: new StatisticUnits(0, 'None'), enumerable: true },
        'Milliseconds': { value: new StatisticUnits(1, 'Milliseconds'), enumerable: true },
        'Seconds': { value: new StatisticUnits(2, 'Seconds'), enumerable: true },
        'Gigabytes': { value: new StatisticUnits(3, 'Gigabytes'), enumerable: true },
        'Kilobytes': { value: new StatisticUnits(4, 'Kilobytes'), enumerable: true },
        'Percent': { value: new StatisticUnits(5, 'Percent'), enumerable: true }
    });

    Object.defineProperty(StatisticUnits, '__type', { value: 'urn:inin.com:statistics:statisticUnits' });

    _typemap['urn:inin.com:statistics:statisticUnits'] = StatisticUnits;

    return StatisticUnits;
}());

var StatisticDefinitionFlag = (function(){
    var instanceCache = {};
    function StatisticDefinitionFlag(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticDefinitionFlag' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(StatisticDefinitionFlag, _util.EnumValue);

    Object.defineProperties(StatisticDefinitionFlag, {
        'SuppressInUI': { value: new StatisticDefinitionFlag(0, 'SuppressInUI'), enumerable: true },
        'SuppressInAlerts': { value: new StatisticDefinitionFlag(1, 'SuppressInAlerts'), enumerable: true }
    });

    Object.defineProperty(StatisticDefinitionFlag, '__type', { value: 'urn:inin.com:statistics:statisticDefinitionFlag' });

    _typemap['urn:inin.com:statistics:statisticDefinitionFlag'] = StatisticDefinitionFlag;

    return StatisticDefinitionFlag;
}());

var StatisticKey = (function(){
    var hasProps = false;

    function StatisticKey() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticKey' });
        }

        StatisticKey._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticKey, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatisticKey.prototype, 'statisticIdentifier', {
            get: function() { return this.__prop_statisticIdentifier; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatisticKey.statisticIdentifier, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statisticIdentifier = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticKey.prototype, 'parameterValueItems', {
            get: function() { return this.__prop_parameterValueItems; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ParameterValueItem); }))) {
                    try {
                        value = value.map(function(item){ return new ParameterValueItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticKey.parameterValueItems: ' + e.message);
                    }
                }

                this.__prop_parameterValueItems = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticKey, '__type', { value: 'urn:inin.com:statistics:statisticKey' });

    Object.defineProperty(StatisticKey, '__propInfo', {
        get: function() {
            var pi = {
                'statisticIdentifier': { required: true, nullable: false },
                'parameterValueItems': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticKey'] = StatisticKey;

    return StatisticKey;
}());

var ParameterValueItem = (function(){
    var hasProps = false;

    function ParameterValueItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:parameterValueItem' });
        }

        ParameterValueItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(ParameterValueItem, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ParameterValueItem.prototype, 'parameterTypeId', {
            get: function() { return this.__prop_parameterTypeId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ParameterValueItem.parameterTypeId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_parameterTypeId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ParameterValueItem.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ParameterValueItem.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ParameterValueItem, '__type', { value: 'urn:inin.com:statistics:parameterValueItem' });

    Object.defineProperty(ParameterValueItem, '__propInfo', {
        get: function() {
            var pi = {
                'parameterTypeId': { required: true, nullable: false },
                'value': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:parameterValueItem'] = ParameterValueItem;

    return ParameterValueItem;
}());

var StatisticValue = (function(){
    var hasProps = false;

    function StatisticValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticValue' });
        }

        StatisticValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticValue, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatisticValue.prototype, 'statisticValueType', {
            get: function() { return this.__prop_statisticValueType; },
            set: function(value) {
                if (!(value instanceof StatisticValueType)) {
                    try {
                        value = new StatisticValueType(value);
                    } catch (e) {
                        throw new TypeError('Error setting StatisticValue.statisticValueType: ' + e.message);
                    }
                }

                this.__prop_statisticValueType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticValue, '__type', { value: 'urn:inin.com:statistics:statisticValue' });

    Object.defineProperty(StatisticValue, '__propInfo', {
        get: function() {
            var pi = {
                'statisticValueType': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticValue'] = StatisticValue;

    return StatisticValue;
}());

var StatisticCategory = (function(){
    var hasProps = false;

    function StatisticCategory() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticCategory' });
        }

        StatisticCategory._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticCategory, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatisticCategory.prototype, 'statisticCategoryId', {
            get: function() { return this.__prop_statisticCategoryId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatisticCategory.statisticCategoryId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statisticCategoryId = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticCategory.prototype, 'displayString', {
            get: function() { return this.__prop_displayString; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatisticCategory.displayString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayString = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticCategory.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatisticCategory.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticCategory.prototype, 'statisticDefinitions', {
            get: function() { return this.__prop_statisticDefinitions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatisticDefinition); }))) {
                    try {
                        value = value.map(function(item){ return new StatisticDefinition(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticCategory.statisticDefinitions: ' + e.message);
                    }
                }

                this.__prop_statisticDefinitions = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticCategory.prototype, 'accessControlRights', {
            get: function() { return this.__prop_accessControlRights; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for StatisticCategory.accessControlRights, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accessControlRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticCategory.prototype, 'licenses', {
            get: function() { return this.__prop_licenses; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for StatisticCategory.licenses, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_licenses = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticCategory, '__type', { value: 'urn:inin.com:statistics:statisticCategory' });

    Object.defineProperty(StatisticCategory, '__propInfo', {
        get: function() {
            var pi = {
                'statisticCategoryId': { required: true, nullable: false },
                'displayString': { required: true, nullable: false },
                'description': { required: true, nullable: false },
                'statisticDefinitions': { required: true, nullable: false },
                'accessControlRights': { required: true, nullable: false },
                'licenses': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticCategory'] = StatisticCategory;

    return StatisticCategory;
}());

var StatisticDefinition = (function(){
    var hasProps = false;

    function StatisticDefinition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticDefinition' });
        }

        StatisticDefinition._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticDefinition, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatisticDefinition.prototype, 'statisticIdentifier', {
            get: function() { return this.__prop_statisticIdentifier; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatisticDefinition.statisticIdentifier, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statisticIdentifier = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticDefinition.prototype, 'displayString', {
            get: function() { return this.__prop_displayString; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatisticDefinition.displayString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayString = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticDefinition.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatisticDefinition.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticDefinition.prototype, 'unitsDisplayString', {
            get: function() { return this.__prop_unitsDisplayString; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatisticDefinition.unitsDisplayString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_unitsDisplayString = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticDefinition.prototype, 'requiredParametersDefinitions', {
            get: function() { return this.__prop_requiredParametersDefinitions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RequiredParametersDefinition); }))) {
                    try {
                        value = value.map(function(item){ return new RequiredParametersDefinition(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticDefinition.requiredParametersDefinitions: ' + e.message);
                    }
                }

                this.__prop_requiredParametersDefinitions = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticDefinition.prototype, 'statisticDefinitionData', {
            get: function() { return this.__prop_statisticDefinitionData; },
            set: function(value) {
                if (!(value instanceof StatisticDefinitionData)) {
                    try {
                        value = new StatisticDefinitionData(value);
                    } catch (e) {
                        throw new TypeError('Error setting StatisticDefinition.statisticDefinitionData: ' + e.message);
                    }
                }

                this.__prop_statisticDefinitionData = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticDefinition.prototype, 'statisticDefinitionFlags', {
            get: function() { return this.__prop_statisticDefinitionFlags; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatisticDefinitionFlag); }))) {
                    try {
                        value = value.map(function(item){ return new StatisticDefinitionFlag(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticDefinition.statisticDefinitionFlags: ' + e.message);
                    }
                }

                this.__prop_statisticDefinitionFlags = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticDefinition.prototype, 'sortIndex', {
            get: function() { return this.__prop_sortIndex; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for StatisticDefinition.sortIndex, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sortIndex = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticDefinition.prototype, 'expanded', {
            get: function() { return this.__prop_expanded; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for StatisticDefinition.expanded, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_expanded = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticDefinition.prototype, 'drillDowns', {
            get: function() { return this.__prop_drillDowns; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DrillDown); }))) {
                    try {
                        value = value.map(function(item){ return new DrillDown(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticDefinition.drillDowns: ' + e.message);
                    }
                }

                this.__prop_drillDowns = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticDefinition, '__type', { value: 'urn:inin.com:statistics:statisticDefinition' });

    Object.defineProperty(StatisticDefinition, '__propInfo', {
        get: function() {
            var pi = {
                'statisticIdentifier': { required: true, nullable: false },
                'displayString': { required: true, nullable: false },
                'description': { required: true, nullable: false },
                'unitsDisplayString': { required: true, nullable: false },
                'requiredParametersDefinitions': { required: true, nullable: false },
                'statisticDefinitionData': { required: true, nullable: false },
                'statisticDefinitionFlags': { required: true, nullable: false },
                'sortIndex': { required: false, nullable: false },
                'expanded': { required: false, nullable: false },
                'drillDowns': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticDefinition'] = StatisticDefinition;

    return StatisticDefinition;
}());

var RequiredParametersDefinition = (function(){
    var hasProps = false;

    function RequiredParametersDefinition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:requiredParametersDefinition' });
        }

        RequiredParametersDefinition._super.constructor.apply(this, arguments);
    }
    _util.inherits(RequiredParametersDefinition, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RequiredParametersDefinition.prototype, 'orderedParameterTypeList', {
            get: function() { return this.__prop_orderedParameterTypeList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for RequiredParametersDefinition.orderedParameterTypeList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_orderedParameterTypeList = value;
            },
            enumerable: true
        });

        Object.defineProperty(RequiredParametersDefinition.prototype, 'shouldBeSuppressed', {
            get: function() { return this.__prop_shouldBeSuppressed; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for RequiredParametersDefinition.shouldBeSuppressed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shouldBeSuppressed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RequiredParametersDefinition, '__type', { value: 'urn:inin.com:statistics:requiredParametersDefinition' });

    Object.defineProperty(RequiredParametersDefinition, '__propInfo', {
        get: function() {
            var pi = {
                'orderedParameterTypeList': { required: true, nullable: false },
                'shouldBeSuppressed': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:requiredParametersDefinition'] = RequiredParametersDefinition;

    return RequiredParametersDefinition;
}());

var StatisticDefinitionData = (function(){
    var hasProps = false;

    function StatisticDefinitionData() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticDefinitionData' });
        }

        StatisticDefinitionData._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticDefinitionData, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatisticDefinitionData.prototype, 'lowerBoundValue', {
            get: function() { return this.__prop_lowerBoundValue; },
            set: function(value) {
                if (!(value instanceof StatisticValue || value === void 0)) {
                    try {
                        value = new StatisticValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting StatisticDefinitionData.lowerBoundValue: ' + e.message);
                    }
                }

                this.__prop_lowerBoundValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticDefinitionData.prototype, 'upperBoundValue', {
            get: function() { return this.__prop_upperBoundValue; },
            set: function(value) {
                if (!(value instanceof StatisticValue || value === void 0)) {
                    try {
                        value = new StatisticValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting StatisticDefinitionData.upperBoundValue: ' + e.message);
                    }
                }

                this.__prop_upperBoundValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticDefinitionData.prototype, 'precision', {
            get: function() { return this.__prop_precision; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for StatisticDefinitionData.precision, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_precision = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticDefinitionData.prototype, 'units', {
            get: function() { return this.__prop_units; },
            set: function(value) {
                if (!(value instanceof StatisticUnits)) {
                    try {
                        value = new StatisticUnits(value);
                    } catch (e) {
                        throw new TypeError('Error setting StatisticDefinitionData.units: ' + e.message);
                    }
                }

                this.__prop_units = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticDefinitionData.prototype, 'valueType', {
            get: function() { return this.__prop_valueType; },
            set: function(value) {
                if (!(value instanceof StatisticValueType || value === void 0)) {
                    try {
                        value = new StatisticValueType(value);
                    } catch (e) {
                        throw new TypeError('Error setting StatisticDefinitionData.valueType: ' + e.message);
                    }
                }

                this.__prop_valueType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticDefinitionData, '__type', { value: 'urn:inin.com:statistics:statisticDefinitionData' });

    Object.defineProperty(StatisticDefinitionData, '__propInfo', {
        get: function() {
            var pi = {
                'lowerBoundValue': { required: false, nullable: false },
                'upperBoundValue': { required: false, nullable: false },
                'precision': { required: true, nullable: false },
                'units': { required: true, nullable: false },
                'valueType': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticDefinitionData'] = StatisticDefinitionData;

    return StatisticDefinitionData;
}());

var DrillDown = (function(){
    var hasProps = false;

    function DrillDown() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:drillDown' });
        }

        DrillDown._super.constructor.apply(this, arguments);
    }
    _util.inherits(DrillDown, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DrillDown.prototype, 'drillDownId', {
            get: function() { return this.__prop_drillDownId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DrillDown.drillDownId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_drillDownId = value;
            },
            enumerable: true
        });

        Object.defineProperty(DrillDown.prototype, 'typeHint', {
            get: function() { return this.__prop_typeHint; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DrillDown.typeHint, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_typeHint = value;
            },
            enumerable: true
        });

        Object.defineProperty(DrillDown.prototype, 'hintString', {
            get: function() { return this.__prop_hintString; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DrillDown.hintString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hintString = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DrillDown, '__type', { value: 'urn:inin.com:statistics:drillDown' });

    Object.defineProperty(DrillDown, '__propInfo', {
        get: function() {
            var pi = {
                'drillDownId': { required: true, nullable: false },
                'typeHint': { required: true, nullable: false },
                'hintString': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:drillDown'] = DrillDown;

    return DrillDown;
}());

var ParameterTypeDefinition = (function(){
    var hasProps = false;

    function ParameterTypeDefinition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:parameterTypeDefinition' });
        }

        ParameterTypeDefinition._super.constructor.apply(this, arguments);
    }
    _util.inherits(ParameterTypeDefinition, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ParameterTypeDefinition.prototype, 'parameterTypeId', {
            get: function() { return this.__prop_parameterTypeId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ParameterTypeDefinition.parameterTypeId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_parameterTypeId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ParameterTypeDefinition.prototype, 'displayString', {
            get: function() { return this.__prop_displayString; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ParameterTypeDefinition.displayString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayString = value;
            },
            enumerable: true
        });

        Object.defineProperty(ParameterTypeDefinition.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ParameterTypeDefinition.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(ParameterTypeDefinition.prototype, 'accessControlLists', {
            get: function() { return this.__prop_accessControlLists; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for ParameterTypeDefinition.accessControlLists, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accessControlLists = value;
            },
            enumerable: true
        });

        Object.defineProperty(ParameterTypeDefinition.prototype, 'preserveOrder', {
            get: function() { return this.__prop_preserveOrder; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ParameterTypeDefinition.preserveOrder, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_preserveOrder = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ParameterTypeDefinition, '__type', { value: 'urn:inin.com:statistics:parameterTypeDefinition' });

    Object.defineProperty(ParameterTypeDefinition, '__propInfo', {
        get: function() {
            var pi = {
                'parameterTypeId': { required: true, nullable: false },
                'displayString': { required: true, nullable: false },
                'description': { required: true, nullable: false },
                'accessControlLists': { required: true, nullable: false },
                'preserveOrder': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:parameterTypeDefinition'] = ParameterTypeDefinition;

    return ParameterTypeDefinition;
}());

var StatisticValueChange = (function(){
    var hasProps = false;

    function StatisticValueChange() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticValueChange' });
        }

        StatisticValueChange._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticValueChange, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatisticValueChange.prototype, 'statisticKey', {
            get: function() { return this.__prop_statisticKey; },
            set: function(value) {
                if (!(value instanceof StatisticKey)) {
                    try {
                        value = new StatisticKey(value);
                    } catch (e) {
                        throw new TypeError('Error setting StatisticValueChange.statisticKey: ' + e.message);
                    }
                }

                this.__prop_statisticKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticValueChange.prototype, 'statisticValue', {
            get: function() { return this.__prop_statisticValue; },
            set: function(value) {
                if (!(value instanceof StatisticValue || value === null)) {
                    try {
                        value = new StatisticValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting StatisticValueChange.statisticValue: ' + e.message);
                    }
                }

                this.__prop_statisticValue = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticValueChange, '__type', { value: 'urn:inin.com:statistics:statisticValueChange' });

    Object.defineProperty(StatisticValueChange, '__propInfo', {
        get: function() {
            var pi = {
                'statisticKey': { required: true, nullable: false },
                'statisticValue': { required: true, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticValueChange'] = StatisticValueChange;

    return StatisticValueChange;
}());

var ChainedParametersChange = (function(){
    var hasProps = false;

    function ChainedParametersChange() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:chainedParametersChange' });
        }

        ChainedParametersChange._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChainedParametersChange, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChainedParametersChange.prototype, 'chainedParameterValueQuery', {
            get: function() { return this.__prop_chainedParameterValueQuery; },
            set: function(value) {
                if (!(value instanceof ChainedParameterValueQuery)) {
                    try {
                        value = new ChainedParameterValueQuery(value);
                    } catch (e) {
                        throw new TypeError('Error setting ChainedParametersChange.chainedParameterValueQuery: ' + e.message);
                    }
                }

                this.__prop_chainedParameterValueQuery = value;
            },
            enumerable: true
        });

        Object.defineProperty(ChainedParametersChange.prototype, 'parameterValueChangesMap', {
            get: function() { return this.__prop_parameterValueChangesMap; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (value[key] instanceof ParameterValueChanges); }))) {
                    try {
                        value = Object.keys(value).reduce(function(o, key){ o[key] = new ParameterValueChanges(value[key]); return o; }, {});
                    } catch (e) {
                        throw new TypeError('Error setting ChainedParametersChange.parameterValueChangesMap: ' + e.message);
                    }
                }

                this.__prop_parameterValueChangesMap = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChainedParametersChange, '__type', { value: 'urn:inin.com:statistics:chainedParametersChange' });

    Object.defineProperty(ChainedParametersChange, '__propInfo', {
        get: function() {
            var pi = {
                'chainedParameterValueQuery': { required: true, nullable: false },
                'parameterValueChangesMap': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:chainedParametersChange'] = ChainedParametersChange;

    return ChainedParametersChange;
}());

var ChainedParameterValueQuery = (function(){
    var hasProps = false;

    function ChainedParameterValueQuery() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:chainedParameterValueQuery' });
        }

        ChainedParameterValueQuery._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChainedParameterValueQuery, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChainedParameterValueQuery.prototype, 'parameterValueItems', {
            get: function() { return this.__prop_parameterValueItems; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ParameterValueItem); }))) {
                    try {
                        value = value.map(function(item){ return new ParameterValueItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ChainedParameterValueQuery.parameterValueItems: ' + e.message);
                    }
                }

                this.__prop_parameterValueItems = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChainedParameterValueQuery, '__type', { value: 'urn:inin.com:statistics:chainedParameterValueQuery' });

    Object.defineProperty(ChainedParameterValueQuery, '__propInfo', {
        get: function() {
            var pi = {
                'parameterValueItems': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:chainedParameterValueQuery'] = ChainedParameterValueQuery;

    return ChainedParameterValueQuery;
}());

var ParameterValueChanges = (function(){
    var hasProps = false;

    function ParameterValueChanges() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:parameterValueChanges' });
        }

        ParameterValueChanges._super.constructor.apply(this, arguments);
    }
    _util.inherits(ParameterValueChanges, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ParameterValueChanges.prototype, 'parameterValuesAdded', {
            get: function() { return this.__prop_parameterValuesAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ParameterValue); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ParameterValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ParameterValueChanges.parameterValuesAdded: ' + e.message);
                    }
                }

                this.__prop_parameterValuesAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(ParameterValueChanges.prototype, 'parameterValuesChanged', {
            get: function() { return this.__prop_parameterValuesChanged; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ParameterValue); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ParameterValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ParameterValueChanges.parameterValuesChanged: ' + e.message);
                    }
                }

                this.__prop_parameterValuesChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(ParameterValueChanges.prototype, 'parameterValuesRemoved', {
            get: function() { return this.__prop_parameterValuesRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for ParameterValueChanges.parameterValuesRemoved, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_parameterValuesRemoved = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ParameterValueChanges, '__type', { value: 'urn:inin.com:statistics:parameterValueChanges' });

    Object.defineProperty(ParameterValueChanges, '__propInfo', {
        get: function() {
            var pi = {
                'parameterValuesAdded': { required: false, nullable: false },
                'parameterValuesChanged': { required: false, nullable: false },
                'parameterValuesRemoved': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:parameterValueChanges'] = ParameterValueChanges;

    return ParameterValueChanges;
}());

var ParameterValue = (function(){
    var hasProps = false;

    function ParameterValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:parameterValue' });
        }

        ParameterValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(ParameterValue, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ParameterValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ParameterValue.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        Object.defineProperty(ParameterValue.prototype, 'displayString', {
            get: function() { return this.__prop_displayString; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ParameterValue.displayString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayString = value;
            },
            enumerable: true
        });

        Object.defineProperty(ParameterValue.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ParameterValue.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ParameterValue, '__type', { value: 'urn:inin.com:statistics:parameterValue' });

    Object.defineProperty(ParameterValue, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false },
                'displayString': { required: true, nullable: false },
                'description': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:parameterValue'] = ParameterValue;

    return ParameterValue;
}());

var ParameterValuesRequest = (function(){
    var hasProps = false;

    function ParameterValuesRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:parameterValuesRequest' });
        }

        ParameterValuesRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(ParameterValuesRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ParameterValuesRequest.prototype, 'parameterValueItems', {
            get: function() { return this.__prop_parameterValueItems; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ParameterValueItem); }))) {
                    try {
                        value = value.map(function(item){ return new ParameterValueItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ParameterValuesRequest.parameterValueItems: ' + e.message);
                    }
                }

                this.__prop_parameterValueItems = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ParameterValuesRequest, '__type', { value: 'urn:inin.com:statistics:parameterValuesRequest' });

    Object.defineProperty(ParameterValuesRequest, '__propInfo', {
        get: function() {
            var pi = {
                'parameterValueItems': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:parameterValuesRequest'] = ParameterValuesRequest;

    return ParameterValuesRequest;
}());

var ParameterValuesResponse = (function(){
    var hasProps = false;

    function ParameterValuesResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:parameterValuesResponse' });
        }

        ParameterValuesResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(ParameterValuesResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ParameterValuesResponse.prototype, 'parameterValuesMap', {
            get: function() { return this.__prop_parameterValuesMap; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (value[key] instanceof ParameterValueResults); }))) {
                    try {
                        value = Object.keys(value).reduce(function(o, key){ o[key] = new ParameterValueResults(value[key]); return o; }, {});
                    } catch (e) {
                        throw new TypeError('Error setting ParameterValuesResponse.parameterValuesMap: ' + e.message);
                    }
                }

                this.__prop_parameterValuesMap = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ParameterValuesResponse, '__type', { value: 'urn:inin.com:statistics:parameterValuesResponse' });

    Object.defineProperty(ParameterValuesResponse, '__propInfo', {
        get: function() {
            var pi = {
                'parameterValuesMap': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:parameterValuesResponse'] = ParameterValuesResponse;

    return ParameterValuesResponse;
}());

var ParameterValueResults = (function(){
    var hasProps = false;

    function ParameterValueResults() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:parameterValueResults' });
        }

        ParameterValueResults._super.constructor.apply(this, arguments);
    }
    _util.inherits(ParameterValueResults, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ParameterValueResults.prototype, 'parameterValues', {
            get: function() { return this.__prop_parameterValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ParameterValue); }))) {
                    try {
                        value = value.map(function(item){ return new ParameterValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ParameterValueResults.parameterValues: ' + e.message);
                    }
                }

                this.__prop_parameterValues = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ParameterValueResults, '__type', { value: 'urn:inin.com:statistics:parameterValueResults' });

    Object.defineProperty(ParameterValueResults, '__propInfo', {
        get: function() {
            var pi = {
                'parameterValues': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:parameterValueResults'] = ParameterValueResults;

    return ParameterValueResults;
}());

var ParameterValueQuery = (function(){
    var hasProps = false;

    function ParameterValueQuery() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:parameterValueQuery' });
        }

        ParameterValueQuery._super.constructor.apply(this, arguments);
    }
    _util.inherits(ParameterValueQuery, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ParameterValueQuery.prototype, 'parameterTypeId', {
            get: function() { return this.__prop_parameterTypeId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ParameterValueQuery.parameterTypeId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_parameterTypeId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ParameterValueQuery.prototype, 'filter', {
            get: function() { return this.__prop_filter; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ParameterValueQuery.filter, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_filter = value;
            },
            enumerable: true
        });

        Object.defineProperty(ParameterValueQuery.prototype, 'maxToReturn', {
            get: function() { return this.__prop_maxToReturn; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for ParameterValueQuery.maxToReturn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxToReturn = value;
            },
            enumerable: true
        });

        Object.defineProperty(ParameterValueQuery.prototype, 'associatedParameterValues', {
            get: function() { return this.__prop_associatedParameterValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ParameterValueItem); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ParameterValueItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ParameterValueQuery.associatedParameterValues: ' + e.message);
                    }
                }

                this.__prop_associatedParameterValues = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ParameterValueQuery, '__type', { value: 'urn:inin.com:statistics:parameterValueQuery' });

    Object.defineProperty(ParameterValueQuery, '__propInfo', {
        get: function() {
            var pi = {
                'parameterTypeId': { required: true, nullable: false },
                'filter': { required: false, nullable: false },
                'maxToReturn': { required: false, nullable: false },
                'associatedParameterValues': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:parameterValueQuery'] = ParameterValueQuery;

    return ParameterValueQuery;
}());

var ParameterValueQueryResults = (function(){
    var hasProps = false;

    function ParameterValueQueryResults() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:parameterValueQueryResults' });
        }

        ParameterValueQueryResults._super.constructor.apply(this, arguments);
    }
    _util.inherits(ParameterValueQueryResults, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ParameterValueQueryResults.prototype, 'totalResultsAvailable', {
            get: function() { return this.__prop_totalResultsAvailable; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for ParameterValueQueryResults.totalResultsAvailable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_totalResultsAvailable = value;
            },
            enumerable: true
        });

        Object.defineProperty(ParameterValueQueryResults.prototype, 'parameterValues', {
            get: function() { return this.__prop_parameterValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ParameterValue); }))) {
                    try {
                        value = value.map(function(item){ return new ParameterValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ParameterValueQueryResults.parameterValues: ' + e.message);
                    }
                }

                this.__prop_parameterValues = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ParameterValueQueryResults, '__type', { value: 'urn:inin.com:statistics:parameterValueQueryResults' });

    Object.defineProperty(ParameterValueQueryResults, '__propInfo', {
        get: function() {
            var pi = {
                'totalResultsAvailable': { required: false, nullable: false },
                'parameterValues': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:parameterValueQueryResults'] = ParameterValueQueryResults;

    return ParameterValueQueryResults;
}());

var ValidatedParameterValueResults = (function(){
    var hasProps = false;

    function ValidatedParameterValueResults() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:validatedParameterValueResults' });
        }

        ValidatedParameterValueResults._super.constructor.apply(this, arguments);
    }
    _util.inherits(ValidatedParameterValueResults, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ValidatedParameterValueResults.prototype, 'validatedParameterValueList', {
            get: function() { return this.__prop_validatedParameterValueList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ValidatedParameterValue); }))) {
                    try {
                        value = value.map(function(item){ return new ValidatedParameterValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ValidatedParameterValueResults.validatedParameterValueList: ' + e.message);
                    }
                }

                this.__prop_validatedParameterValueList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ValidatedParameterValueResults, '__type', { value: 'urn:inin.com:statistics:validatedParameterValueResults' });

    Object.defineProperty(ValidatedParameterValueResults, '__propInfo', {
        get: function() {
            var pi = {
                'validatedParameterValueList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:validatedParameterValueResults'] = ValidatedParameterValueResults;

    return ValidatedParameterValueResults;
}());

var ValidatedParameterValue = (function(){
    var hasProps = false;

    function ValidatedParameterValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:validatedParameterValue' });
        }

        ValidatedParameterValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(ValidatedParameterValue, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ValidatedParameterValue.prototype, 'isValid', {
            get: function() { return this.__prop_isValid; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ValidatedParameterValue.isValid, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isValid = value;
            },
            enumerable: true
        });

        Object.defineProperty(ValidatedParameterValue.prototype, 'matchCount', {
            get: function() { return this.__prop_matchCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for ValidatedParameterValue.matchCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_matchCount = value;
            },
            enumerable: true
        });

        Object.defineProperty(ValidatedParameterValue.prototype, 'qualifiedParameterValue', {
            get: function() { return this.__prop_qualifiedParameterValue; },
            set: function(value) {
                if (!(value instanceof QualifiedParameterValue)) {
                    try {
                        value = new QualifiedParameterValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting ValidatedParameterValue.qualifiedParameterValue: ' + e.message);
                    }
                }

                this.__prop_qualifiedParameterValue = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ValidatedParameterValue, '__type', { value: 'urn:inin.com:statistics:validatedParameterValue' });

    Object.defineProperty(ValidatedParameterValue, '__propInfo', {
        get: function() {
            var pi = {
                'isValid': { required: true, nullable: false },
                'matchCount': { required: true, nullable: false },
                'qualifiedParameterValue': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:validatedParameterValue'] = ValidatedParameterValue;

    return ValidatedParameterValue;
}());

var StatisticCatalogSubscription = (function(){
    var hasProps = false;

    function StatisticCatalogSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticCatalogSubscription' });
        }

        StatisticCatalogSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticCatalogSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatisticCatalogSubscription.prototype, 'statisticCatalogCacheTag', {
            get: function() { return this.__prop_statisticCatalogCacheTag; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for StatisticCatalogSubscription.statisticCatalogCacheTag, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statisticCatalogCacheTag = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticCatalogSubscription, '__type', { value: 'urn:inin.com:statistics:statisticCatalogSubscription' });

    Object.defineProperty(StatisticCatalogSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'statisticCatalogCacheTag': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticCatalogSubscription'] = StatisticCatalogSubscription;

    return StatisticCatalogSubscription;
}());

var StatisticCatalogSubscriptionResponse = (function(){
    var hasProps = false;

    function StatisticCatalogSubscriptionResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticCatalogSubscriptionResponse' });
        }

        StatisticCatalogSubscriptionResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticCatalogSubscriptionResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatisticCatalogSubscriptionResponse.prototype, 'clientStateIsFresh', {
            get: function() { return this.__prop_clientStateIsFresh; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for StatisticCatalogSubscriptionResponse.clientStateIsFresh, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_clientStateIsFresh = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticCatalogSubscriptionResponse, '__type', { value: 'urn:inin.com:statistics:statisticCatalogSubscriptionResponse' });

    Object.defineProperty(StatisticCatalogSubscriptionResponse, '__propInfo', {
        get: function() {
            var pi = {
                'clientStateIsFresh': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticCatalogSubscriptionResponse'] = StatisticCatalogSubscriptionResponse;

    return StatisticCatalogSubscriptionResponse;
}());

var StatisticValueSubscription = (function(){
    var hasProps = false;

    function StatisticValueSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticValueSubscription' });
        }

        StatisticValueSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticValueSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatisticValueSubscription.prototype, 'statisticKeys', {
            get: function() { return this.__prop_statisticKeys; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatisticKey); }))) {
                    try {
                        value = value.map(function(item){ return new StatisticKey(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticValueSubscription.statisticKeys: ' + e.message);
                    }
                }

                this.__prop_statisticKeys = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticValueSubscription, '__type', { value: 'urn:inin.com:statistics:statisticValueSubscription' });

    Object.defineProperty(StatisticValueSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'statisticKeys': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticValueSubscription'] = StatisticValueSubscription;

    return StatisticValueSubscription;
}());

var ChainedParametersSubscription = (function(){
    var hasProps = false;

    function ChainedParametersSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:chainedParametersSubscription' });
        }

        ChainedParametersSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChainedParametersSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ChainedParametersSubscription.prototype, 'chainedParameterValueQueries', {
            get: function() { return this.__prop_chainedParameterValueQueries; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ChainedParameterValueQuery); }))) {
                    try {
                        value = value.map(function(item){ return new ChainedParameterValueQuery(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ChainedParametersSubscription.chainedParameterValueQueries: ' + e.message);
                    }
                }

                this.__prop_chainedParameterValueQueries = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChainedParametersSubscription, '__type', { value: 'urn:inin.com:statistics:chainedParametersSubscription' });

    Object.defineProperty(ChainedParametersSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'chainedParameterValueQueries': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:chainedParametersSubscription'] = ChainedParametersSubscription;

    return ChainedParametersSubscription;
}());

var StatisticBoolValue = (function(){
    var hasProps = false;

    function StatisticBoolValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticBoolValue', enumerable: true });
        }

        StatisticBoolValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticBoolValue, StatisticValue);

    function defineProps() {
        Object.defineProperty(StatisticBoolValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for StatisticBoolValue.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticBoolValue, '__type', { value: 'urn:inin.com:statistics:statisticBoolValue' });

    Object.defineProperty(StatisticBoolValue, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false }
            };
            if (StatisticValue.__propInfo) { _util.extend(pi, StatisticValue.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticBoolValue'] = StatisticBoolValue;

    return StatisticBoolValue;
}());

var StatisticIntValue = (function(){
    var hasProps = false;

    function StatisticIntValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticIntValue', enumerable: true });
        }

        StatisticIntValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticIntValue, StatisticValue);

    function defineProps() {
        Object.defineProperty(StatisticIntValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for StatisticIntValue.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticIntValue, '__type', { value: 'urn:inin.com:statistics:statisticIntValue' });

    Object.defineProperty(StatisticIntValue, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false }
            };
            if (StatisticValue.__propInfo) { _util.extend(pi, StatisticValue.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticIntValue'] = StatisticIntValue;

    return StatisticIntValue;
}());

var StatisticDoubleValue = (function(){
    var hasProps = false;

    function StatisticDoubleValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticDoubleValue', enumerable: true });
        }

        StatisticDoubleValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticDoubleValue, StatisticValue);

    function defineProps() {
        Object.defineProperty(StatisticDoubleValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for StatisticDoubleValue.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticDoubleValue, '__type', { value: 'urn:inin.com:statistics:statisticDoubleValue' });

    Object.defineProperty(StatisticDoubleValue, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false }
            };
            if (StatisticValue.__propInfo) { _util.extend(pi, StatisticValue.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticDoubleValue'] = StatisticDoubleValue;

    return StatisticDoubleValue;
}());

var StatisticPercentValue = (function(){
    var hasProps = false;

    function StatisticPercentValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticPercentValue', enumerable: true });
        }

        StatisticPercentValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticPercentValue, StatisticValue);

    function defineProps() {
        Object.defineProperty(StatisticPercentValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for StatisticPercentValue.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticPercentValue, '__type', { value: 'urn:inin.com:statistics:statisticPercentValue' });

    Object.defineProperty(StatisticPercentValue, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false }
            };
            if (StatisticValue.__propInfo) { _util.extend(pi, StatisticValue.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticPercentValue'] = StatisticPercentValue;

    return StatisticPercentValue;
}());

var StatisticStringValue = (function(){
    var hasProps = false;

    function StatisticStringValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticStringValue', enumerable: true });
        }

        StatisticStringValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticStringValue, StatisticValue);

    function defineProps() {
        Object.defineProperty(StatisticStringValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatisticStringValue.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticStringValue, '__type', { value: 'urn:inin.com:statistics:statisticStringValue' });

    Object.defineProperty(StatisticStringValue, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false }
            };
            if (StatisticValue.__propInfo) { _util.extend(pi, StatisticValue.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticStringValue'] = StatisticStringValue;

    return StatisticStringValue;
}());

var StatisticTimeStampValue = (function(){
    var hasProps = false;

    function StatisticTimeStampValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticTimeStampValue', enumerable: true });
        }

        StatisticTimeStampValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticTimeStampValue, StatisticValue);

    function defineProps() {
        Object.defineProperty(StatisticTimeStampValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for StatisticTimeStampValue.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticTimeStampValue, '__type', { value: 'urn:inin.com:statistics:statisticTimeStampValue' });

    Object.defineProperty(StatisticTimeStampValue, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false }
            };
            if (StatisticValue.__propInfo) { _util.extend(pi, StatisticValue.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticTimeStampValue'] = StatisticTimeStampValue;

    return StatisticTimeStampValue;
}());

var StatisticDurationValue = (function(){
    var hasProps = false;

    function StatisticDurationValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticDurationValue', enumerable: true });
        }

        StatisticDurationValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticDurationValue, StatisticValue);

    function defineProps() {
        Object.defineProperty(StatisticDurationValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value))) {
                    throw new TypeError('Expected type _util.Duration for StatisticDurationValue.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticDurationValue, '__type', { value: 'urn:inin.com:statistics:statisticDurationValue' });

    Object.defineProperty(StatisticDurationValue, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false }
            };
            if (StatisticValue.__propInfo) { _util.extend(pi, StatisticValue.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticDurationValue'] = StatisticDurationValue;

    return StatisticDurationValue;
}());

var StatisticFiniteDurationValue = (function(){
    var hasProps = false;

    function StatisticFiniteDurationValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticFiniteDurationValue', enumerable: true });
        }

        StatisticFiniteDurationValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticFiniteDurationValue, StatisticValue);

    function defineProps() {
        Object.defineProperty(StatisticFiniteDurationValue.prototype, 'stoppedTimeSpan', {
            get: function() { return this.__prop_stoppedTimeSpan; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0)) {
                    throw new TypeError('Expected type _util.Duration for StatisticFiniteDurationValue.stoppedTimeSpan, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_stoppedTimeSpan = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticFiniteDurationValue.prototype, 'startTickingTime', {
            get: function() { return this.__prop_startTickingTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for StatisticFiniteDurationValue.startTickingTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_startTickingTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticFiniteDurationValue.prototype, 'ticking', {
            get: function() { return this.__prop_ticking; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for StatisticFiniteDurationValue.ticking, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ticking = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticFiniteDurationValue, '__type', { value: 'urn:inin.com:statistics:statisticFiniteDurationValue' });

    Object.defineProperty(StatisticFiniteDurationValue, '__propInfo', {
        get: function() {
            var pi = {
                'stoppedTimeSpan': { required: false, nullable: false },
                'startTickingTime': { required: false, nullable: false },
                'ticking': { required: true, nullable: false }
            };
            if (StatisticValue.__propInfo) { _util.extend(pi, StatisticValue.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticFiniteDurationValue'] = StatisticFiniteDurationValue;

    return StatisticFiniteDurationValue;
}());

var StatisticFutureDurationValue = (function(){
    var hasProps = false;

    function StatisticFutureDurationValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticFutureDurationValue', enumerable: true });
        }

        StatisticFutureDurationValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticFutureDurationValue, StatisticValue);

    function defineProps() {
        Object.defineProperty(StatisticFutureDurationValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value))) {
                    throw new TypeError('Expected type _util.Duration for StatisticFutureDurationValue.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticFutureDurationValue, '__type', { value: 'urn:inin.com:statistics:statisticFutureDurationValue' });

    Object.defineProperty(StatisticFutureDurationValue, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false }
            };
            if (StatisticValue.__propInfo) { _util.extend(pi, StatisticValue.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticFutureDurationValue'] = StatisticFutureDurationValue;

    return StatisticFutureDurationValue;
}());

var StatisticTimeDurationValue = (function(){
    var hasProps = false;

    function StatisticTimeDurationValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticTimeDurationValue', enumerable: true });
        }

        StatisticTimeDurationValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticTimeDurationValue, StatisticValue);

    function defineProps() {
        Object.defineProperty(StatisticTimeDurationValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for StatisticTimeDurationValue.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticTimeDurationValue, '__type', { value: 'urn:inin.com:statistics:statisticTimeDurationValue' });

    Object.defineProperty(StatisticTimeDurationValue, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false }
            };
            if (StatisticValue.__propInfo) { _util.extend(pi, StatisticValue.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticTimeDurationValue'] = StatisticTimeDurationValue;

    return StatisticTimeDurationValue;
}());

var StatisticStatusMessageKeyValue = (function(){
    var hasProps = false;

    function StatisticStatusMessageKeyValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticStatusMessageKeyValue', enumerable: true });
        }

        StatisticStatusMessageKeyValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticStatusMessageKeyValue, StatisticValue);

    function defineProps() {
        Object.defineProperty(StatisticStatusMessageKeyValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for StatisticStatusMessageKeyValue.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticStatusMessageKeyValue, '__type', { value: 'urn:inin.com:statistics:statisticStatusMessageKeyValue' });

    Object.defineProperty(StatisticStatusMessageKeyValue, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false }
            };
            if (StatisticValue.__propInfo) { _util.extend(pi, StatisticValue.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticStatusMessageKeyValue'] = StatisticStatusMessageKeyValue;

    return StatisticStatusMessageKeyValue;
}());

var StatisticErrorValue = (function(){
    var hasProps = false;

    function StatisticErrorValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticErrorValue', enumerable: true });
        }

        StatisticErrorValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticErrorValue, StatisticValue);

    function defineProps() {
        Object.defineProperty(StatisticErrorValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(value instanceof StatisticErrorValueType)) {
                    try {
                        value = new StatisticErrorValueType(value);
                    } catch (e) {
                        throw new TypeError('Error setting StatisticErrorValue.value: ' + e.message);
                    }
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticErrorValue, '__type', { value: 'urn:inin.com:statistics:statisticErrorValue' });

    Object.defineProperty(StatisticErrorValue, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false }
            };
            if (StatisticValue.__propInfo) { _util.extend(pi, StatisticValue.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticErrorValue'] = StatisticErrorValue;

    return StatisticErrorValue;
}());

var StatisticCatalogMessage = (function(){
    var hasProps = false;

    function StatisticCatalogMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticCatalogMessage', enumerable: true });
        }

        StatisticCatalogMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticCatalogMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(StatisticCatalogMessage.prototype, 'statisticCatalogCacheTag', {
            get: function() { return this.__prop_statisticCatalogCacheTag; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for StatisticCatalogMessage.statisticCatalogCacheTag, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statisticCatalogCacheTag = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticCatalogMessage.prototype, 'statisticCategoryList', {
            get: function() { return this.__prop_statisticCategoryList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatisticCategory); }))) {
                    try {
                        value = value.map(function(item){ return new StatisticCategory(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticCatalogMessage.statisticCategoryList: ' + e.message);
                    }
                }

                this.__prop_statisticCategoryList = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticCatalogMessage.prototype, 'parameterTypeDefinitions', {
            get: function() { return this.__prop_parameterTypeDefinitions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ParameterTypeDefinition); }))) {
                    try {
                        value = value.map(function(item){ return new ParameterTypeDefinition(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticCatalogMessage.parameterTypeDefinitions: ' + e.message);
                    }
                }

                this.__prop_parameterTypeDefinitions = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticCatalogMessage, '__type', { value: 'urn:inin.com:statistics:statisticCatalogMessage' });

    Object.defineProperty(StatisticCatalogMessage, '__propInfo', {
        get: function() {
            var pi = {
                'statisticCatalogCacheTag': { required: false, nullable: false },
                'statisticCategoryList': { required: true, nullable: false },
                'parameterTypeDefinitions': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticCatalogMessage'] = StatisticCatalogMessage;

    return StatisticCatalogMessage;
}());

var StatisticValueMessage = (function(){
    var hasProps = false;

    function StatisticValueMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:statisticValueMessage', enumerable: true });
        }

        StatisticValueMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticValueMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(StatisticValueMessage.prototype, 'statisticValueChanges', {
            get: function() { return this.__prop_statisticValueChanges; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatisticValueChange); }))) {
                    try {
                        value = value.map(function(item){ return new StatisticValueChange(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticValueMessage.statisticValueChanges: ' + e.message);
                    }
                }

                this.__prop_statisticValueChanges = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticValueMessage, '__type', { value: 'urn:inin.com:statistics:statisticValueMessage' });

    Object.defineProperty(StatisticValueMessage, '__propInfo', {
        get: function() {
            var pi = {
                'statisticValueChanges': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:statisticValueMessage'] = StatisticValueMessage;

    return StatisticValueMessage;
}());

var ChainedParametersChangeMessage = (function(){
    var hasProps = false;

    function ChainedParametersChangeMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:chainedParametersChangeMessage', enumerable: true });
        }

        ChainedParametersChangeMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChainedParametersChangeMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(ChainedParametersChangeMessage.prototype, 'queryResultChanges', {
            get: function() { return this.__prop_queryResultChanges; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ChainedParametersChange); }))) {
                    try {
                        value = value.map(function(item){ return new ChainedParametersChange(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ChainedParametersChangeMessage.queryResultChanges: ' + e.message);
                    }
                }

                this.__prop_queryResultChanges = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChainedParametersChangeMessage, '__type', { value: 'urn:inin.com:statistics:chainedParametersChangeMessage' });

    Object.defineProperty(ChainedParametersChangeMessage, '__propInfo', {
        get: function() {
            var pi = {
                'queryResultChanges': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:chainedParametersChangeMessage'] = ChainedParametersChangeMessage;

    return ChainedParametersChangeMessage;
}());

var QualifiedParameterValue = (function(){
    var hasProps = false;

    function QualifiedParameterValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:statistics:qualifiedParameterValue', enumerable: true });
        }

        QualifiedParameterValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(QualifiedParameterValue, ParameterValue);

    function defineProps() {
        Object.defineProperty(QualifiedParameterValue.prototype, 'parameterTypeId', {
            get: function() { return this.__prop_parameterTypeId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for QualifiedParameterValue.parameterTypeId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_parameterTypeId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QualifiedParameterValue, '__type', { value: 'urn:inin.com:statistics:qualifiedParameterValue' });

    Object.defineProperty(QualifiedParameterValue, '__propInfo', {
        get: function() {
            var pi = {
                'parameterTypeId': { required: true, nullable: false }
            };
            if (ParameterValue.__propInfo) { _util.extend(pi, ParameterValue.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:statistics:qualifiedParameterValue'] = QualifiedParameterValue;

    return QualifiedParameterValue;
}());

var $statisticParameterValues = (function(){
    function retrieveStatisticParameterValues(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof retrieveStatisticParameterValues.params)) {
            try {
                params = new retrieveStatisticParameterValues.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: retrieveStatisticParameterValues.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ParameterValuesResponse) ? o : new ParameterValuesResponse(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(retrieveStatisticParameterValues.method, retrieveStatisticParameterValues.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(retrieveStatisticParameterValues, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/statistics/statistic-parameter-values', enumerable: true }
    });

    retrieveStatisticParameterValues.params = (function(){
        _util.inherits(retrieveStatisticParameterValues_params, _util.RequestParams);

        function retrieveStatisticParameterValues_params(properties) {
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
            if (!(properties.content instanceof ParameterValuesRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Statistics.ParameterValuesRequest');
            }

            retrieveStatisticParameterValues_params._super.constructor.apply(this, arguments);
        }

        return retrieveStatisticParameterValues_params;
    })();

    return Object.create(null, {
        retrieveStatisticParameterValues: { value: retrieveStatisticParameterValues, enumerable: true }
    });
})();

exports.StatisticValueType = StatisticValueType;
exports.StatisticErrorValueType = StatisticErrorValueType;
exports.StatisticUnits = StatisticUnits;
exports.StatisticDefinitionFlag = StatisticDefinitionFlag;
exports.StatisticKey = StatisticKey;
exports.ParameterValueItem = ParameterValueItem;
exports.StatisticValue = StatisticValue;
exports.StatisticBoolValue = StatisticBoolValue;
exports.StatisticIntValue = StatisticIntValue;
exports.StatisticDoubleValue = StatisticDoubleValue;
exports.StatisticPercentValue = StatisticPercentValue;
exports.StatisticStringValue = StatisticStringValue;
exports.StatisticTimeStampValue = StatisticTimeStampValue;
exports.StatisticDurationValue = StatisticDurationValue;
exports.StatisticFiniteDurationValue = StatisticFiniteDurationValue;
exports.StatisticFutureDurationValue = StatisticFutureDurationValue;
exports.StatisticTimeDurationValue = StatisticTimeDurationValue;
exports.StatisticStatusMessageKeyValue = StatisticStatusMessageKeyValue;
exports.StatisticErrorValue = StatisticErrorValue;
exports.StatisticCatalogMessage = StatisticCatalogMessage;
exports.StatisticCategory = StatisticCategory;
exports.StatisticDefinition = StatisticDefinition;
exports.RequiredParametersDefinition = RequiredParametersDefinition;
exports.StatisticDefinitionData = StatisticDefinitionData;
exports.DrillDown = DrillDown;
exports.ParameterTypeDefinition = ParameterTypeDefinition;
exports.StatisticValueMessage = StatisticValueMessage;
exports.StatisticValueChange = StatisticValueChange;
exports.ChainedParametersChangeMessage = ChainedParametersChangeMessage;
exports.ChainedParametersChange = ChainedParametersChange;
exports.ChainedParameterValueQuery = ChainedParameterValueQuery;
exports.ParameterValueChanges = ParameterValueChanges;
exports.ParameterValue = ParameterValue;
exports.QualifiedParameterValue = QualifiedParameterValue;
exports.ParameterValuesRequest = ParameterValuesRequest;
exports.ParameterValuesResponse = ParameterValuesResponse;
exports.ParameterValueResults = ParameterValueResults;
exports.ParameterValueQuery = ParameterValueQuery;
exports.ParameterValueQueryResults = ParameterValueQueryResults;
exports.ValidatedParameterValueResults = ValidatedParameterValueResults;
exports.ValidatedParameterValue = ValidatedParameterValue;
exports.StatisticCatalogSubscription = StatisticCatalogSubscription;
exports.StatisticCatalogSubscriptionResponse = StatisticCatalogSubscriptionResponse;
exports.StatisticValueSubscription = StatisticValueSubscription;
exports.ChainedParametersSubscription = ChainedParametersSubscription;
exports.$statisticParameterValues = $statisticParameterValues;
