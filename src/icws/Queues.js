/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var QueueType = (function(){
    var instanceCache = {};
    function QueueType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(QueueType, _util.EnumValue);

    Object.defineProperties(QueueType, {
        'System': { value: new QueueType(0, 'System'), enumerable: true },
        'User': { value: new QueueType(1, 'User'), enumerable: true },
        'Workgroup': { value: new QueueType(2, 'Workgroup'), enumerable: true },
        'Station': { value: new QueueType(3, 'Station'), enumerable: true }
    });

    Object.defineProperty(QueueType, '__type', { value: 'urn:inin.com:queues:queueType' });

    _typemap['urn:inin.com:queues:queueType'] = QueueType;

    return QueueType;
}());

var QueueAlertMode = (function(){
    var instanceCache = {};
    function QueueAlertMode(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueAlertMode' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(QueueAlertMode, _util.EnumValue);

    Object.defineProperties(QueueAlertMode, {
        'AlertSilently': { value: new QueueAlertMode(0, 'AlertSilently'), enumerable: true },
        'RingPhone': { value: new QueueAlertMode(1, 'RingPhone'), enumerable: true }
    });

    Object.defineProperty(QueueAlertMode, '__type', { value: 'urn:inin.com:queues:queueAlertMode' });

    _typemap['urn:inin.com:queues:queueAlertMode'] = QueueAlertMode;

    return QueueAlertMode;
}());

var FilterGroupType = (function(){
    var instanceCache = {};
    function FilterGroupType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:filterGroupType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(FilterGroupType, _util.EnumValue);

    Object.defineProperties(FilterGroupType, {
        'None': { value: new FilterGroupType(0, 'None'), enumerable: true },
        'All': { value: new FilterGroupType(1, 'All'), enumerable: true },
        'Any': { value: new FilterGroupType(2, 'Any'), enumerable: true }
    });

    Object.defineProperty(FilterGroupType, '__type', { value: 'urn:inin.com:queues:filterGroupType' });

    _typemap['urn:inin.com:queues:filterGroupType'] = FilterGroupType;

    return FilterGroupType;
}());

var ComparisonType = (function(){
    var instanceCache = {};
    function ComparisonType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:comparisonType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ComparisonType, _util.EnumValue);

    Object.defineProperties(ComparisonType, {
        'NotEquals': { value: new ComparisonType(0, 'NotEquals'), enumerable: true },
        'Equals': { value: new ComparisonType(1, 'Equals'), enumerable: true }
    });

    Object.defineProperty(ComparisonType, '__type', { value: 'urn:inin.com:queues:comparisonType' });

    _typemap['urn:inin.com:queues:comparisonType'] = ComparisonType;

    return ComparisonType;
}());

var QueueInteraction = (function(){
    var hasProps = false;

    function QueueInteraction() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueInteraction' });
        }

        QueueInteraction._super.constructor.apply(this, arguments);
    }
    _util.inherits(QueueInteraction, _util.DataContract);

    function defineProps() {
        Object.defineProperty(QueueInteraction.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for QueueInteraction.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueInteraction.prototype, 'attributes', {
            get: function() { return this.__prop_attributes; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }))) {
                    throw new TypeError('Expected type String{} for QueueInteraction.attributes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueInteraction.prototype, 'conferenceParentId', {
            get: function() { return this.__prop_conferenceParentId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for QueueInteraction.conferenceParentId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_conferenceParentId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QueueInteraction, '__type', { value: 'urn:inin.com:queues:queueInteraction' });

    Object.defineProperty(QueueInteraction, '__propInfo', {
        get: function() {
            var pi = {
                'interactionId': { required: true, nullable: false },
                'attributes': { required: true, nullable: false },
                'conferenceParentId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:queues:queueInteraction'] = QueueInteraction;

    return QueueInteraction;
}());

var Interaction = (function(){
    var hasProps = false;

    function Interaction() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:interaction' });
        }

        Interaction._super.constructor.apply(this, arguments);
    }
    _util.inherits(Interaction, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Interaction.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Interaction.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Interaction.prototype, 'attributes', {
            get: function() { return this.__prop_attributes; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }))) {
                    throw new TypeError('Expected type String{} for Interaction.attributes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attributes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Interaction, '__type', { value: 'urn:inin.com:queues:interaction' });

    Object.defineProperty(Interaction, '__propInfo', {
        get: function() {
            var pi = {
                'interactionId': { required: true, nullable: false },
                'attributes': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:queues:interaction'] = Interaction;

    return Interaction;
}());

var QueueId = (function(){
    var hasProps = false;

    function QueueId() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueId' });
        }

        QueueId._super.constructor.apply(this, arguments);
    }
    _util.inherits(QueueId, _util.DataContract);

    function defineProps() {
        Object.defineProperty(QueueId.prototype, 'queueType', {
            get: function() { return this.__prop_queueType; },
            set: function(value) {
                if (!(value instanceof QueueType)) {
                    try {
                        value = new QueueType(value);
                    } catch (e) {
                        throw new TypeError('Error setting QueueId.queueType: ' + e.message);
                    }
                }

                this.__prop_queueType = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueId.prototype, 'queueName', {
            get: function() { return this.__prop_queueName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for QueueId.queueName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_queueName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QueueId, '__type', { value: 'urn:inin.com:queues:queueId' });

    Object.defineProperty(QueueId, '__propInfo', {
        get: function() {
            var pi = {
                'queueType': { required: true, nullable: false },
                'queueName': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:queues:queueId'] = QueueId;

    return QueueId;
}());

var QueueSubscriptionParameters = (function(){
    var hasProps = false;

    function QueueSubscriptionParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueSubscriptionParameters' });
        }

        QueueSubscriptionParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(QueueSubscriptionParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(QueueSubscriptionParameters.prototype, 'queueIds', {
            get: function() { return this.__prop_queueIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof QueueId); }))) {
                    try {
                        value = value.map(function(item){ return new QueueId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting QueueSubscriptionParameters.queueIds: ' + e.message);
                    }
                }

                this.__prop_queueIds = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueSubscriptionParameters.prototype, 'attributeNames', {
            get: function() { return this.__prop_attributeNames; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for QueueSubscriptionParameters.attributeNames, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attributeNames = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueSubscriptionParameters.prototype, 'queueResultLimit', {
            get: function() { return this.__prop_queueResultLimit; },
            set: function(value) {
                if (!(value instanceof QueueResultLimit || value === void 0)) {
                    try {
                        value = new QueueResultLimit(value);
                    } catch (e) {
                        throw new TypeError('Error setting QueueSubscriptionParameters.queueResultLimit: ' + e.message);
                    }
                }

                this.__prop_queueResultLimit = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueSubscriptionParameters.prototype, 'attributeFilter', {
            get: function() { return this.__prop_attributeFilter; },
            set: function(value) {
                if (!(value instanceof FilterItem || value === void 0)) {
                    try {
                        value = new FilterItem(value);
                    } catch (e) {
                        throw new TypeError('Error setting QueueSubscriptionParameters.attributeFilter: ' + e.message);
                    }
                }

                this.__prop_attributeFilter = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QueueSubscriptionParameters, '__type', { value: 'urn:inin.com:queues:queueSubscriptionParameters' });

    Object.defineProperty(QueueSubscriptionParameters, '__propInfo', {
        get: function() {
            var pi = {
                'queueIds': { required: true, nullable: false },
                'attributeNames': { required: true, nullable: false },
                'queueResultLimit': { required: false, nullable: false },
                'attributeFilter': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:queues:queueSubscriptionParameters'] = QueueSubscriptionParameters;

    return QueueSubscriptionParameters;
}());

var QueueResultLimit = (function(){
    var hasProps = false;

    function QueueResultLimit() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueResultLimit' });
        }

        QueueResultLimit._super.constructor.apply(this, arguments);
    }
    _util.inherits(QueueResultLimit, _util.DataContract);

    function defineProps() {
        Object.defineProperty(QueueResultLimit.prototype, 'limitCount', {
            get: function() { return this.__prop_limitCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for QueueResultLimit.limitCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_limitCount = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueResultLimit.prototype, 'resultOrder', {
            get: function() { return this.__prop_resultOrder; },
            set: function(value) {
                if (!(value instanceof ResultOrder || value === void 0)) {
                    try {
                        value = new ResultOrder(value);
                    } catch (e) {
                        throw new TypeError('Error setting QueueResultLimit.resultOrder: ' + e.message);
                    }
                }

                this.__prop_resultOrder = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QueueResultLimit, '__type', { value: 'urn:inin.com:queues:queueResultLimit' });

    Object.defineProperty(QueueResultLimit, '__propInfo', {
        get: function() {
            var pi = {
                'limitCount': { required: false, nullable: false },
                'resultOrder': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:queues:queueResultLimit'] = QueueResultLimit;

    return QueueResultLimit;
}());

var ResultOrder = (function(){
    var hasProps = false;

    function ResultOrder() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:resultOrder' });
        }

        ResultOrder._super.constructor.apply(this, arguments);
    }
    _util.inherits(ResultOrder, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ResultOrder.prototype, 'orderAttribute', {
            get: function() { return this.__prop_orderAttribute; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ResultOrder.orderAttribute, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_orderAttribute = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResultOrder.prototype, 'orderDirection', {
            get: function() { return this.__prop_orderDirection; },
            set: function(value) {
                if (!(value instanceof Common.SortDirection)) {
                    try {
                        value = new Common.SortDirection(value);
                    } catch (e) {
                        throw new TypeError('Error setting ResultOrder.orderDirection: ' + e.message);
                    }
                }

                this.__prop_orderDirection = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ResultOrder, '__type', { value: 'urn:inin.com:queues:resultOrder' });

    Object.defineProperty(ResultOrder, '__propInfo', {
        get: function() {
            var pi = {
                'orderAttribute': { required: true, nullable: false },
                'orderDirection': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:queues:resultOrder'] = ResultOrder;

    return ResultOrder;
}());

var FilterItem = (function(){
    var hasProps = false;

    function FilterItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:filterItem' });
        }

        FilterItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(FilterItem, _util.DataContract);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(FilterItem, '__type', { value: 'urn:inin.com:queues:filterItem' });

    Object.defineProperty(FilterItem, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:queues:filterItem'] = FilterItem;

    return FilterItem;
}());

var QueueContentsMessage = (function(){
    var hasProps = false;

    function QueueContentsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueContentsMessage', enumerable: true });
        }

        QueueContentsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(QueueContentsMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(QueueContentsMessage.prototype, 'subscriptionId', {
            get: function() { return this.__prop_subscriptionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for QueueContentsMessage.subscriptionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subscriptionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueContentsMessage.prototype, 'queueResultLimitExceeded', {
            get: function() { return this.__prop_queueResultLimitExceeded; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for QueueContentsMessage.queueResultLimitExceeded, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_queueResultLimitExceeded = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueContentsMessage.prototype, 'interactionsAdded', {
            get: function() { return this.__prop_interactionsAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof QueueInteraction); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new QueueInteraction(item); });
                    } catch (e) {
                        throw new TypeError('Error setting QueueContentsMessage.interactionsAdded: ' + e.message);
                    }
                }

                this.__prop_interactionsAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueContentsMessage.prototype, 'interactionsChanged', {
            get: function() { return this.__prop_interactionsChanged; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Interaction); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Interaction(item); });
                    } catch (e) {
                        throw new TypeError('Error setting QueueContentsMessage.interactionsChanged: ' + e.message);
                    }
                }

                this.__prop_interactionsChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueContentsMessage.prototype, 'interactionsRemoved', {
            get: function() { return this.__prop_interactionsRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for QueueContentsMessage.interactionsRemoved, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionsRemoved = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QueueContentsMessage, '__type', { value: 'urn:inin.com:queues:queueContentsMessage' });

    Object.defineProperty(QueueContentsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'subscriptionId': { required: true, nullable: false },
                'queueResultLimitExceeded': { required: false, nullable: false },
                'interactionsAdded': { required: false, nullable: false },
                'interactionsChanged': { required: false, nullable: false },
                'interactionsRemoved': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:queues:queueContentsMessage'] = QueueContentsMessage;

    return QueueContentsMessage;
}());

var FilterGroup = (function(){
    var hasProps = false;

    function FilterGroup() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:filterGroup', enumerable: true });
        }

        FilterGroup._super.constructor.apply(this, arguments);
    }
    _util.inherits(FilterGroup, FilterItem);

    function defineProps() {
        Object.defineProperty(FilterGroup.prototype, 'filterGroupType', {
            get: function() { return this.__prop_filterGroupType; },
            set: function(value) {
                if (!(value instanceof FilterGroupType)) {
                    try {
                        value = new FilterGroupType(value);
                    } catch (e) {
                        throw new TypeError('Error setting FilterGroup.filterGroupType: ' + e.message);
                    }
                }

                this.__prop_filterGroupType = value;
            },
            enumerable: true
        });

        Object.defineProperty(FilterGroup.prototype, 'filterItemsList', {
            get: function() { return this.__prop_filterItemsList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FilterItem); }))) {
                    try {
                        value = value.map(function(item){ return new FilterItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FilterGroup.filterItemsList: ' + e.message);
                    }
                }

                this.__prop_filterItemsList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FilterGroup, '__type', { value: 'urn:inin.com:queues:filterGroup' });

    Object.defineProperty(FilterGroup, '__propInfo', {
        get: function() {
            var pi = {
                'filterGroupType': { required: true, nullable: false },
                'filterItemsList': { required: true, nullable: false }
            };
            if (FilterItem.__propInfo) { _util.extend(pi, FilterItem.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:queues:filterGroup'] = FilterGroup;

    return FilterGroup;
}());

var FilterValue = (function(){
    var hasProps = false;

    function FilterValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:filterValue', enumerable: true });
        }

        FilterValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(FilterValue, FilterItem);

    function defineProps() {
        Object.defineProperty(FilterValue.prototype, 'attribute', {
            get: function() { return this.__prop_attribute; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for FilterValue.attribute, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attribute = value;
            },
            enumerable: true
        });

        Object.defineProperty(FilterValue.prototype, 'comparisonType', {
            get: function() { return this.__prop_comparisonType; },
            set: function(value) {
                if (!(value instanceof ComparisonType)) {
                    try {
                        value = new ComparisonType(value);
                    } catch (e) {
                        throw new TypeError('Error setting FilterValue.comparisonType: ' + e.message);
                    }
                }

                this.__prop_comparisonType = value;
            },
            enumerable: true
        });

        Object.defineProperty(FilterValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for FilterValue.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FilterValue, '__type', { value: 'urn:inin.com:queues:filterValue' });

    Object.defineProperty(FilterValue, '__propInfo', {
        get: function() {
            var pi = {
                'attribute': { required: true, nullable: false },
                'comparisonType': { required: true, nullable: false },
                'value': { required: true, nullable: false }
            };
            if (FilterItem.__propInfo) { _util.extend(pi, FilterItem.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:queues:filterValue'] = FilterValue;

    return FilterValue;
}());

var QueueSubscriptionStateMessage = (function(){
    var hasProps = false;

    function QueueSubscriptionStateMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueSubscriptionStateMessage', enumerable: true });
        }

        QueueSubscriptionStateMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(QueueSubscriptionStateMessage, Messaging.SubscriptionStateMessage);

    function defineProps() {
        Object.defineProperty(QueueSubscriptionStateMessage.prototype, 'subscriptionId', {
            get: function() { return this.__prop_subscriptionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for QueueSubscriptionStateMessage.subscriptionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subscriptionId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QueueSubscriptionStateMessage, '__type', { value: 'urn:inin.com:queues:queueSubscriptionStateMessage' });

    Object.defineProperty(QueueSubscriptionStateMessage, '__propInfo', {
        get: function() {
            var pi = {
                'subscriptionId': { required: true, nullable: false }
            };
            if (Messaging.SubscriptionStateMessage.__propInfo) { _util.extend(pi, Messaging.SubscriptionStateMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:queues:queueSubscriptionStateMessage'] = QueueSubscriptionStateMessage;

    return QueueSubscriptionStateMessage;
}());

exports.QueueType = QueueType;
exports.QueueAlertMode = QueueAlertMode;
exports.FilterGroupType = FilterGroupType;
exports.ComparisonType = ComparisonType;
exports.QueueSubscriptionStateMessage = QueueSubscriptionStateMessage;
exports.QueueContentsMessage = QueueContentsMessage;
exports.QueueInteraction = QueueInteraction;
exports.Interaction = Interaction;
exports.QueueId = QueueId;
exports.QueueSubscriptionParameters = QueueSubscriptionParameters;
exports.QueueResultLimit = QueueResultLimit;
exports.ResultOrder = ResultOrder;
exports.FilterItem = FilterItem;
exports.FilterGroup = FilterGroup;
exports.FilterValue = FilterValue;
