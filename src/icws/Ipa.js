/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var ClosePageReason = (function(){
    var instanceCache = {};
    function ClosePageReason(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:closePageReason' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ClosePageReason, _util.EnumValue);

    Object.defineProperties(ClosePageReason, {
        'WorkItemCompleted': { value: new ClosePageReason(1, 'WorkItemCompleted'), enumerable: true },
        'WorkItemHeld': { value: new ClosePageReason(2, 'WorkItemHeld'), enumerable: true },
        'WorkItemDisconnected': { value: new ClosePageReason(3, 'WorkItemDisconnected'), enumerable: true },
        'WorkItemNoLongerAssignedToUser': { value: new ClosePageReason(4, 'WorkItemNoLongerAssignedToUser'), enumerable: true },
        'ProcessInError': { value: new ClosePageReason(5, 'ProcessInError'), enumerable: true },
        'UserNoLongerLicensedForIpa': { value: new ClosePageReason(6, 'UserNoLongerLicensedForIpa'), enumerable: true }
    });

    Object.defineProperty(ClosePageReason, '__type', { value: 'urn:inin.com:ipa:closePageReason' });

    _typemap['urn:inin.com:ipa:closePageReason'] = ClosePageReason;

    return ClosePageReason;
}());

var PasRunState = (function(){
    var instanceCache = {};
    function PasRunState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pasRunState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(PasRunState, _util.EnumValue);

    Object.defineProperties(PasRunState, {
        'None': { value: new PasRunState(0, 'None'), enumerable: true },
        'Running': { value: new PasRunState(1, 'Running'), enumerable: true },
        'ShuttingDown': { value: new PasRunState(2, 'ShuttingDown'), enumerable: true },
        'Down': { value: new PasRunState(3, 'Down'), enumerable: true }
    });

    Object.defineProperty(PasRunState, '__type', { value: 'urn:inin.com:ipa:pasRunState' });

    _typemap['urn:inin.com:ipa:pasRunState'] = PasRunState;

    return PasRunState;
}());

var PasOverloadedAtLaunchOption = (function(){
    var instanceCache = {};
    function PasOverloadedAtLaunchOption(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pasOverloadedAtLaunchOption' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(PasOverloadedAtLaunchOption, _util.EnumValue);

    Object.defineProperties(PasOverloadedAtLaunchOption, {
        'Fail': { value: new PasOverloadedAtLaunchOption(1, 'Fail'), enumerable: true },
        'Queue': { value: new PasOverloadedAtLaunchOption(2, 'Queue'), enumerable: true }
    });

    Object.defineProperty(PasOverloadedAtLaunchOption, '__type', { value: 'urn:inin.com:ipa:pasOverloadedAtLaunchOption' });

    _typemap['urn:inin.com:ipa:pasOverloadedAtLaunchOption'] = PasOverloadedAtLaunchOption;

    return PasOverloadedAtLaunchOption;
}());

var FlowStatus = (function(){
    var instanceCache = {};
    function FlowStatus(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:flowStatus' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(FlowStatus, _util.EnumValue);

    Object.defineProperties(FlowStatus, {
        'None': { value: new FlowStatus(0, 'None'), enumerable: true },
        'NotFound': { value: new FlowStatus(1, 'NotFound'), enumerable: true },
        'Invalid': { value: new FlowStatus(2, 'Invalid'), enumerable: true },
        'Running': { value: new FlowStatus(3, 'Running'), enumerable: true },
        'Error': { value: new FlowStatus(4, 'Error'), enumerable: true },
        'Completed': { value: new FlowStatus(5, 'Completed'), enumerable: true },
        'Canceled': { value: new FlowStatus(6, 'Canceled'), enumerable: true },
        'RestoredInError': { value: new FlowStatus(7, 'RestoredInError'), enumerable: true },
        'PropagatedError': { value: new FlowStatus(8, 'PropagatedError'), enumerable: true },
        'Queued': { value: new FlowStatus(9, 'Queued'), enumerable: true }
    });

    Object.defineProperty(FlowStatus, '__type', { value: 'urn:inin.com:ipa:flowStatus' });

    _typemap['urn:inin.com:ipa:flowStatus'] = FlowStatus;

    return FlowStatus;
}());

var LaunchMode = (function(){
    var instanceCache = {};
    function LaunchMode(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:launchMode' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LaunchMode, _util.EnumValue);

    Object.defineProperties(LaunchMode, {
        'Test': { value: new LaunchMode(1, 'Test'), enumerable: true },
        'Production': { value: new LaunchMode(2, 'Production'), enumerable: true }
    });

    Object.defineProperty(LaunchMode, '__type', { value: 'urn:inin.com:ipa:launchMode' });

    _typemap['urn:inin.com:ipa:launchMode'] = LaunchMode;

    return LaunchMode;
}());

var PageCommandType = (function(){
    var instanceCache = {};
    function PageCommandType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageCommandType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(PageCommandType, _util.EnumValue);

    Object.defineProperties(PageCommandType, {
        'Submit': { value: new PageCommandType(1, 'Submit'), enumerable: true },
        'Cancel': { value: new PageCommandType(2, 'Cancel'), enumerable: true },
        'Save': { value: new PageCommandType(3, 'Save'), enumerable: true },
        'Hold': { value: new PageCommandType(4, 'Hold'), enumerable: true }
    });

    Object.defineProperty(PageCommandType, '__type', { value: 'urn:inin.com:ipa:pageCommandType' });

    _typemap['urn:inin.com:ipa:pageCommandType'] = PageCommandType;

    return PageCommandType;
}());

var DataReference = (function(){
    var hasProps = false;

    function DataReference() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dataReference' });
        }

        DataReference._super.constructor.apply(this, arguments);
    }
    _util.inherits(DataReference, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DataReference.prototype, 'dataId', {
            get: function() { return this.__prop_dataId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for DataReference.dataId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dataId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DataReference, '__type', { value: 'urn:inin.com:ipa:dataReference' });

    Object.defineProperty(DataReference, '__propInfo', {
        get: function() {
            var pi = {
                'dataId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dataReference'] = DataReference;

    return DataReference;
}());

var RuntimeDataValuesList = (function(){
    var hasProps = false;

    function RuntimeDataValuesList() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:runtimeDataValuesList' });
        }

        RuntimeDataValuesList._super.constructor.apply(this, arguments);
    }
    _util.inherits(RuntimeDataValuesList, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RuntimeDataValuesList.prototype, 'meta', {
            get: function() { return this.__prop_meta; },
            set: function(value) {
                if (!(value instanceof RuntimeDataValuesListMeta)) {
                    try {
                        value = new RuntimeDataValuesListMeta(value);
                    } catch (e) {
                        throw new TypeError('Error setting RuntimeDataValuesList.meta: ' + e.message);
                    }
                }

                this.__prop_meta = value;
            },
            enumerable: true
        });

        Object.defineProperty(RuntimeDataValuesList.prototype, 'data', {
            get: function() { return this.__prop_data; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof BaseDataInst); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new BaseDataInst(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RuntimeDataValuesList.data: ' + e.message);
                    }
                }

                this.__prop_data = value;
            },
            enumerable: true
        });

        Object.defineProperty(RuntimeDataValuesList.prototype, 'selections', {
            get: function() { return this.__prop_selections; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RuntimeDataValuesListSelectionsListItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new RuntimeDataValuesListSelectionsListItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RuntimeDataValuesList.selections: ' + e.message);
                    }
                }

                this.__prop_selections = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RuntimeDataValuesList, '__type', { value: 'urn:inin.com:ipa:runtimeDataValuesList' });

    Object.defineProperty(RuntimeDataValuesList, '__propInfo', {
        get: function() {
            var pi = {
                'meta': { required: true, nullable: false },
                'data': { required: false, nullable: true },
                'selections': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:runtimeDataValuesList'] = RuntimeDataValuesList;

    return RuntimeDataValuesList;
}());

var BasePageAndDataMeta = (function(){
    var hasProps = false;

    function BasePageAndDataMeta() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:basePageAndDataMeta' });
        }

        BasePageAndDataMeta._super.constructor.apply(this, arguments);
    }
    _util.inherits(BasePageAndDataMeta, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BasePageAndDataMeta.prototype, 'payloadType', {
            get: function() { return this.__prop_payloadType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BasePageAndDataMeta.payloadType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_payloadType = value;
            },
            enumerable: true
        });

        Object.defineProperty(BasePageAndDataMeta.prototype, 'formatVersion', {
            get: function() { return this.__prop_formatVersion; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BasePageAndDataMeta.formatVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_formatVersion = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BasePageAndDataMeta, '__type', { value: 'urn:inin.com:ipa:basePageAndDataMeta' });

    Object.defineProperty(BasePageAndDataMeta, '__propInfo', {
        get: function() {
            var pi = {
                'payloadType': { required: true, nullable: false },
                'formatVersion': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:basePageAndDataMeta'] = BasePageAndDataMeta;

    return BasePageAndDataMeta;
}());

var BaseDataInst = (function(){
    var hasProps = false;

    function BaseDataInst() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:baseDataInst' });
        }

        BaseDataInst._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseDataInst, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BaseDataInst.prototype, 'defId', {
            get: function() { return this.__prop_defId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for BaseDataInst.defId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_defId = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseDataInst.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for BaseDataInst.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseDataInst.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for BaseDataInst.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseDataInst.prototype, 'security', {
            get: function() { return this.__prop_security; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for BaseDataInst.security, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_security = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BaseDataInst, '__type', { value: 'urn:inin.com:ipa:baseDataInst' });

    Object.defineProperty(BaseDataInst, '__propInfo', {
        get: function() {
            var pi = {
                'defId': { required: false, nullable: false },
                'id': { required: false, nullable: false },
                'name': { required: false, nullable: true },
                'security': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:baseDataInst'] = BaseDataInst;

    return BaseDataInst;
}());

var ComplexValue = (function(){
    var hasProps = false;

    function ComplexValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:complexValue' });
        }

        ComplexValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(ComplexValue, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ComplexValue.prototype, 'uniqueId', {
            get: function() { return this.__prop_uniqueId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ComplexValue.uniqueId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_uniqueId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ComplexValue.prototype, 'props', {
            get: function() { return this.__prop_props; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof BasePropVal); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new BasePropVal(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ComplexValue.props: ' + e.message);
                    }
                }

                this.__prop_props = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ComplexValue, '__type', { value: 'urn:inin.com:ipa:complexValue' });

    Object.defineProperty(ComplexValue, '__propInfo', {
        get: function() {
            var pi = {
                'uniqueId': { required: false, nullable: true },
                'props': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:complexValue'] = ComplexValue;

    return ComplexValue;
}());

var BasePropVal = (function(){
    var hasProps = false;

    function BasePropVal() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:basePropVal' });
        }

        BasePropVal._super.constructor.apply(this, arguments);
    }
    _util.inherits(BasePropVal, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BasePropVal.prototype, 'defId', {
            get: function() { return this.__prop_defId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for BasePropVal.defId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_defId = value;
            },
            enumerable: true
        });

        Object.defineProperty(BasePropVal.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for BasePropVal.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BasePropVal, '__type', { value: 'urn:inin.com:ipa:basePropVal' });

    Object.defineProperty(BasePropVal, '__propInfo', {
        get: function() {
            var pi = {
                'defId': { required: false, nullable: false },
                'name': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:basePropVal'] = BasePropVal;

    return BasePropVal;
}());

var CurrencyValue = (function(){
    var hasProps = false;

    function CurrencyValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:currencyValue' });
        }

        CurrencyValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrencyValue, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CurrencyValue.prototype, 'amount', {
            get: function() { return this.__prop_amount; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for CurrencyValue.amount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_amount = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrencyValue.prototype, 'code', {
            get: function() { return this.__prop_code; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for CurrencyValue.code, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_code = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CurrencyValue, '__type', { value: 'urn:inin.com:ipa:currencyValue' });

    Object.defineProperty(CurrencyValue, '__propInfo', {
        get: function() {
            var pi = {
                'amount': { required: false, nullable: true },
                'code': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:currencyValue'] = CurrencyValue;

    return CurrencyValue;
}());

var MailboxValue = (function(){
    var hasProps = false;

    function MailboxValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:mailboxValue' });
        }

        MailboxValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(MailboxValue, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MailboxValue.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for MailboxValue.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        Object.defineProperty(MailboxValue.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for MailboxValue.type, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MailboxValue, '__type', { value: 'urn:inin.com:ipa:mailboxValue' });

    Object.defineProperty(MailboxValue, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: true, nullable: false },
                'type': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:mailboxValue'] = MailboxValue;

    return MailboxValue;
}());

var UserQueueValue = (function(){
    var hasProps = false;

    function UserQueueValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:userQueueValue' });
        }

        UserQueueValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserQueueValue, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserQueueValue.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UserQueueValue.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserQueueValue.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for UserQueueValue.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserQueueValue, '__type', { value: 'urn:inin.com:ipa:userQueueValue' });

    Object.defineProperty(UserQueueValue, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: true, nullable: false },
                'displayName': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:userQueueValue'] = UserQueueValue;

    return UserQueueValue;
}());

var BaseDataInstCollItem = (function(){
    var hasProps = false;

    function BaseDataInstCollItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:baseDataInstCollItem' });
        }

        BaseDataInstCollItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseDataInstCollItem, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BaseDataInstCollItem.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseDataInstCollItem.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BaseDataInstCollItem, '__type', { value: 'urn:inin.com:ipa:baseDataInstCollItem' });

    Object.defineProperty(BaseDataInstCollItem, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:baseDataInstCollItem'] = BaseDataInstCollItem;

    return BaseDataInstCollItem;
}());

var RuntimeDataValuesListSelectionsListItem = (function(){
    var hasProps = false;

    function RuntimeDataValuesListSelectionsListItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:runtimeDataValuesListSelectionsListItem' });
        }

        RuntimeDataValuesListSelectionsListItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(RuntimeDataValuesListSelectionsListItem, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RuntimeDataValuesListSelectionsListItem.prototype, 'sourceId', {
            get: function() { return this.__prop_sourceId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RuntimeDataValuesListSelectionsListItem.sourceId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sourceId = value;
            },
            enumerable: true
        });

        Object.defineProperty(RuntimeDataValuesListSelectionsListItem.prototype, 'destinationId', {
            get: function() { return this.__prop_destinationId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RuntimeDataValuesListSelectionsListItem.destinationId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_destinationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(RuntimeDataValuesListSelectionsListItem.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for RuntimeDataValuesListSelectionsListItem.items, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RuntimeDataValuesListSelectionsListItem, '__type', { value: 'urn:inin.com:ipa:runtimeDataValuesListSelectionsListItem' });

    Object.defineProperty(RuntimeDataValuesListSelectionsListItem, '__propInfo', {
        get: function() {
            var pi = {
                'sourceId': { required: true, nullable: false },
                'destinationId': { required: true, nullable: false },
                'items': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:runtimeDataValuesListSelectionsListItem'] = RuntimeDataValuesListSelectionsListItem;

    return RuntimeDataValuesListSelectionsListItem;
}());

var ProcessDefinitionDescription = (function(){
    var hasProps = false;

    function ProcessDefinitionDescription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:processDefinitionDescription' });
        }

        ProcessDefinitionDescription._super.constructor.apply(this, arguments);
    }
    _util.inherits(ProcessDefinitionDescription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ProcessDefinitionDescription.prototype, 'processDefinitionId', {
            get: function() { return this.__prop_processDefinitionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ProcessDefinitionDescription.processDefinitionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_processDefinitionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProcessDefinitionDescription.prototype, 'revision', {
            get: function() { return this.__prop_revision; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ProcessDefinitionDescription.revision, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_revision = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProcessDefinitionDescription.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ProcessDefinitionDescription.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProcessDefinitionDescription.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ProcessDefinitionDescription.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ProcessDefinitionDescription, '__type', { value: 'urn:inin.com:ipa:processDefinitionDescription' });

    Object.defineProperty(ProcessDefinitionDescription, '__propInfo', {
        get: function() {
            var pi = {
                'processDefinitionId': { required: true, nullable: false },
                'revision': { required: true, nullable: false },
                'name': { required: true, nullable: false },
                'description': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:processDefinitionDescription'] = ProcessDefinitionDescription;

    return ProcessDefinitionDescription;
}());

var LaunchProcessParameters = (function(){
    var hasProps = false;

    function LaunchProcessParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:launchProcessParameters' });
        }

        LaunchProcessParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(LaunchProcessParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LaunchProcessParameters.prototype, 'processDefinitionId', {
            get: function() { return this.__prop_processDefinitionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for LaunchProcessParameters.processDefinitionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_processDefinitionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(LaunchProcessParameters.prototype, 'processRevision', {
            get: function() { return this.__prop_processRevision; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for LaunchProcessParameters.processRevision, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_processRevision = value;
            },
            enumerable: true
        });

        Object.defineProperty(LaunchProcessParameters.prototype, 'paramVals', {
            get: function() { return this.__prop_paramVals; },
            set: function(value) {
                if (!(value instanceof RuntimeDataValuesList || value === void 0 || value === null)) {
                    try {
                        value = new RuntimeDataValuesList(value);
                    } catch (e) {
                        throw new TypeError('Error setting LaunchProcessParameters.paramVals: ' + e.message);
                    }
                }

                this.__prop_paramVals = value;
            },
            enumerable: true
        });

        Object.defineProperty(LaunchProcessParameters.prototype, 'pasOverloadedOption', {
            get: function() { return this.__prop_pasOverloadedOption; },
            set: function(value) {
                if (!(value instanceof PasOverloadedAtLaunchOption || value === void 0)) {
                    try {
                        value = new PasOverloadedAtLaunchOption(value);
                    } catch (e) {
                        throw new TypeError('Error setting LaunchProcessParameters.pasOverloadedOption: ' + e.message);
                    }
                }

                this.__prop_pasOverloadedOption = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LaunchProcessParameters, '__type', { value: 'urn:inin.com:ipa:launchProcessParameters' });

    Object.defineProperty(LaunchProcessParameters, '__propInfo', {
        get: function() {
            var pi = {
                'processDefinitionId': { required: true, nullable: false },
                'processRevision': { required: false, nullable: false },
                'paramVals': { required: false, nullable: true },
                'pasOverloadedOption': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:launchProcessParameters'] = LaunchProcessParameters;

    return LaunchProcessParameters;
}());

var LaunchProcessResults = (function(){
    var hasProps = false;

    function LaunchProcessResults() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:launchProcessResults' });
        }

        LaunchProcessResults._super.constructor.apply(this, arguments);
    }
    _util.inherits(LaunchProcessResults, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LaunchProcessResults.prototype, 'processInstanceId', {
            get: function() { return this.__prop_processInstanceId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for LaunchProcessResults.processInstanceId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_processInstanceId = value;
            },
            enumerable: true
        });

        Object.defineProperty(LaunchProcessResults.prototype, 'processState', {
            get: function() { return this.__prop_processState; },
            set: function(value) {
                if (!(value instanceof FlowStatus)) {
                    try {
                        value = new FlowStatus(value);
                    } catch (e) {
                        throw new TypeError('Error setting LaunchProcessResults.processState: ' + e.message);
                    }
                }

                this.__prop_processState = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LaunchProcessResults, '__type', { value: 'urn:inin.com:ipa:launchProcessResults' });

    Object.defineProperty(LaunchProcessResults, '__propInfo', {
        get: function() {
            var pi = {
                'processInstanceId': { required: true, nullable: false },
                'processState': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:launchProcessResults'] = LaunchProcessResults;

    return LaunchProcessResults;
}());

var QueryProcessInstancesResults = (function(){
    var hasProps = false;

    function QueryProcessInstancesResults() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:queryProcessInstancesResults' });
        }

        QueryProcessInstancesResults._super.constructor.apply(this, arguments);
    }
    _util.inherits(QueryProcessInstancesResults, _util.DataContract);

    function defineProps() {
        Object.defineProperty(QueryProcessInstancesResults.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ProcessInstanceSearchResult); }))) {
                    try {
                        value = value.map(function(item){ return new ProcessInstanceSearchResult(item); });
                    } catch (e) {
                        throw new TypeError('Error setting QueryProcessInstancesResults.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QueryProcessInstancesResults, '__type', { value: 'urn:inin.com:ipa:queryProcessInstancesResults' });

    Object.defineProperty(QueryProcessInstancesResults, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:queryProcessInstancesResults'] = QueryProcessInstancesResults;

    return QueryProcessInstancesResults;
}());

var ProcessInstanceSearchResult = (function(){
    var hasProps = false;

    function ProcessInstanceSearchResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:processInstanceSearchResult' });
        }

        ProcessInstanceSearchResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(ProcessInstanceSearchResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ProcessInstanceSearchResult.prototype, 'instanceId', {
            get: function() { return this.__prop_instanceId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ProcessInstanceSearchResult.instanceId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_instanceId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProcessInstanceSearchResult.prototype, 'definitionId', {
            get: function() { return this.__prop_definitionId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ProcessInstanceSearchResult.definitionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_definitionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProcessInstanceSearchResult.prototype, 'details', {
            get: function() { return this.__prop_details; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ProcessInstanceSearchResult.details, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_details = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProcessInstanceSearchResult.prototype, 'endOfProcess', {
            get: function() { return this.__prop_endOfProcess; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ProcessInstanceSearchResult.endOfProcess, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_endOfProcess = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProcessInstanceSearchResult.prototype, 'initiatingUser', {
            get: function() { return this.__prop_initiatingUser; },
            set: function(value) {
                if (!(value instanceof UserInformation || value === void 0)) {
                    try {
                        value = new UserInformation(value);
                    } catch (e) {
                        throw new TypeError('Error setting ProcessInstanceSearchResult.initiatingUser: ' + e.message);
                    }
                }

                this.__prop_initiatingUser = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProcessInstanceSearchResult.prototype, 'launchMode', {
            get: function() { return this.__prop_launchMode; },
            set: function(value) {
                if (!(value instanceof LaunchMode || value === void 0)) {
                    try {
                        value = new LaunchMode(value);
                    } catch (e) {
                        throw new TypeError('Error setting ProcessInstanceSearchResult.launchMode: ' + e.message);
                    }
                }

                this.__prop_launchMode = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProcessInstanceSearchResult.prototype, 'numericId', {
            get: function() { return this.__prop_numericId; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for ProcessInstanceSearchResult.numericId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_numericId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProcessInstanceSearchResult.prototype, 'processName', {
            get: function() { return this.__prop_processName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ProcessInstanceSearchResult.processName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_processName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProcessInstanceSearchResult.prototype, 'revision', {
            get: function() { return this.__prop_revision; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ProcessInstanceSearchResult.revision, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_revision = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProcessInstanceSearchResult.prototype, 'startOfProcess', {
            get: function() { return this.__prop_startOfProcess; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ProcessInstanceSearchResult.startOfProcess, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_startOfProcess = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProcessInstanceSearchResult.prototype, 'status', {
            get: function() { return this.__prop_status; },
            set: function(value) {
                if (!(value instanceof FlowStatus || value === void 0)) {
                    try {
                        value = new FlowStatus(value);
                    } catch (e) {
                        throw new TypeError('Error setting ProcessInstanceSearchResult.status: ' + e.message);
                    }
                }

                this.__prop_status = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ProcessInstanceSearchResult, '__type', { value: 'urn:inin.com:ipa:processInstanceSearchResult' });

    Object.defineProperty(ProcessInstanceSearchResult, '__propInfo', {
        get: function() {
            var pi = {
                'instanceId': { required: true, nullable: false },
                'definitionId': { required: false, nullable: false },
                'details': { required: false, nullable: false },
                'endOfProcess': { required: false, nullable: true },
                'initiatingUser': { required: false, nullable: false },
                'launchMode': { required: false, nullable: false },
                'numericId': { required: false, nullable: false },
                'processName': { required: false, nullable: false },
                'revision': { required: false, nullable: false },
                'startOfProcess': { required: false, nullable: false },
                'status': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:processInstanceSearchResult'] = ProcessInstanceSearchResult;

    return ProcessInstanceSearchResult;
}());

var UserInformation = (function(){
    var hasProps = false;

    function UserInformation() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:userInformation' });
        }

        UserInformation._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserInformation, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserInformation.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UserInformation.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserInformation.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for UserInformation.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserInformation.prototype, 'uri', {
            get: function() { return this.__prop_uri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for UserInformation.uri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_uri = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserInformation, '__type', { value: 'urn:inin.com:ipa:userInformation' });

    Object.defineProperty(UserInformation, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'displayName': { required: false, nullable: true },
                'uri': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:userInformation'] = UserInformation;

    return UserInformation;
}());

var SendPageCommandParameters = (function(){
    var hasProps = false;

    function SendPageCommandParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:sendPageCommandParameters' });
        }

        SendPageCommandParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(SendPageCommandParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SendPageCommandParameters.prototype, 'pageInstanceId', {
            get: function() { return this.__prop_pageInstanceId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SendPageCommandParameters.pageInstanceId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pageInstanceId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SendPageCommandParameters.prototype, 'commandType', {
            get: function() { return this.__prop_commandType; },
            set: function(value) {
                if (!(value instanceof PageCommandType)) {
                    try {
                        value = new PageCommandType(value);
                    } catch (e) {
                        throw new TypeError('Error setting SendPageCommandParameters.commandType: ' + e.message);
                    }
                }

                this.__prop_commandType = value;
            },
            enumerable: true
        });

        Object.defineProperty(SendPageCommandParameters.prototype, 'commandId', {
            get: function() { return this.__prop_commandId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for SendPageCommandParameters.commandId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_commandId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SendPageCommandParameters.prototype, 'changedValues', {
            get: function() { return this.__prop_changedValues; },
            set: function(value) {
                if (!(value instanceof RuntimeDataValuesList || value === void 0)) {
                    try {
                        value = new RuntimeDataValuesList(value);
                    } catch (e) {
                        throw new TypeError('Error setting SendPageCommandParameters.changedValues: ' + e.message);
                    }
                }

                this.__prop_changedValues = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SendPageCommandParameters, '__type', { value: 'urn:inin.com:ipa:sendPageCommandParameters' });

    Object.defineProperty(SendPageCommandParameters, '__propInfo', {
        get: function() {
            var pi = {
                'pageInstanceId': { required: true, nullable: false },
                'commandType': { required: true, nullable: false },
                'commandId': { required: false, nullable: false },
                'changedValues': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:sendPageCommandParameters'] = SendPageCommandParameters;

    return SendPageCommandParameters;
}());

var SendPageCommandResults = (function(){
    var hasProps = false;

    function SendPageCommandResults() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:sendPageCommandResults' });
        }

        SendPageCommandResults._super.constructor.apply(this, arguments);
    }
    _util.inherits(SendPageCommandResults, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SendPageCommandResults.prototype, 'requestId', {
            get: function() { return this.__prop_requestId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SendPageCommandResults.requestId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_requestId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SendPageCommandResults, '__type', { value: 'urn:inin.com:ipa:sendPageCommandResults' });

    Object.defineProperty(SendPageCommandResults, '__propInfo', {
        get: function() {
            var pi = {
                'requestId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:sendPageCommandResults'] = SendPageCommandResults;

    return SendPageCommandResults;
}());

var PageAndDataDefinitionsFile = (function(){
    var hasProps = false;

    function PageAndDataDefinitionsFile() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageAndDataDefinitionsFile' });
        }

        PageAndDataDefinitionsFile._super.constructor.apply(this, arguments);
    }
    _util.inherits(PageAndDataDefinitionsFile, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PageAndDataDefinitionsFile.prototype, 'meta', {
            get: function() { return this.__prop_meta; },
            set: function(value) {
                if (!(value instanceof PageAndDataDefinitionsMeta)) {
                    try {
                        value = new PageAndDataDefinitionsMeta(value);
                    } catch (e) {
                        throw new TypeError('Error setting PageAndDataDefinitionsFile.meta: ' + e.message);
                    }
                }

                this.__prop_meta = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageAndDataDefinitionsFile.prototype, 'pageDef', {
            get: function() { return this.__prop_pageDef; },
            set: function(value) {
                if (!(value instanceof PageDefinition)) {
                    try {
                        value = new PageDefinition(value);
                    } catch (e) {
                        throw new TypeError('Error setting PageAndDataDefinitionsFile.pageDef: ' + e.message);
                    }
                }

                this.__prop_pageDef = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageAndDataDefinitionsFile.prototype, 'dataDefs', {
            get: function() { return this.__prop_dataDefs; },
            set: function(value) {
                if (!(value instanceof DataDefinitionsList || value === void 0 || value === null)) {
                    try {
                        value = new DataDefinitionsList(value);
                    } catch (e) {
                        throw new TypeError('Error setting PageAndDataDefinitionsFile.dataDefs: ' + e.message);
                    }
                }

                this.__prop_dataDefs = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageAndDataDefinitionsFile.prototype, 'dataManifest', {
            get: function() { return this.__prop_dataManifest; },
            set: function(value) {
                if (!(value instanceof DataManifestList || value === void 0 || value === null)) {
                    try {
                        value = new DataManifestList(value);
                    } catch (e) {
                        throw new TypeError('Error setting PageAndDataDefinitionsFile.dataManifest: ' + e.message);
                    }
                }

                this.__prop_dataManifest = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PageAndDataDefinitionsFile, '__type', { value: 'urn:inin.com:ipa:pageAndDataDefinitionsFile' });

    Object.defineProperty(PageAndDataDefinitionsFile, '__propInfo', {
        get: function() {
            var pi = {
                'meta': { required: true, nullable: false },
                'pageDef': { required: true, nullable: false },
                'dataDefs': { required: false, nullable: true },
                'dataManifest': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pageAndDataDefinitionsFile'] = PageAndDataDefinitionsFile;

    return PageAndDataDefinitionsFile;
}());

var PageAndDataDefinitionsMeta = (function(){
    var hasProps = false;

    function PageAndDataDefinitionsMeta() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageAndDataDefinitionsMeta' });
        }

        PageAndDataDefinitionsMeta._super.constructor.apply(this, arguments);
    }
    _util.inherits(PageAndDataDefinitionsMeta, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PageAndDataDefinitionsMeta.prototype, 'procDefId', {
            get: function() { return this.__prop_procDefId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageAndDataDefinitionsMeta.procDefId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_procDefId = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageAndDataDefinitionsMeta.prototype, 'procRev', {
            get: function() { return this.__prop_procRev; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageAndDataDefinitionsMeta.procRev, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_procRev = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageAndDataDefinitionsMeta.prototype, 'workItemDefId', {
            get: function() { return this.__prop_workItemDefId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageAndDataDefinitionsMeta.workItemDefId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workItemDefId = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageAndDataDefinitionsMeta.prototype, 'pageDefId', {
            get: function() { return this.__prop_pageDefId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageAndDataDefinitionsMeta.pageDefId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pageDefId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PageAndDataDefinitionsMeta, '__type', { value: 'urn:inin.com:ipa:pageAndDataDefinitionsMeta' });

    Object.defineProperty(PageAndDataDefinitionsMeta, '__propInfo', {
        get: function() {
            var pi = {
                'procDefId': { required: true, nullable: false },
                'procRev': { required: true, nullable: false },
                'workItemDefId': { required: true, nullable: false },
                'pageDefId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pageAndDataDefinitionsMeta'] = PageAndDataDefinitionsMeta;

    return PageAndDataDefinitionsMeta;
}());

var PageDefinition = (function(){
    var hasProps = false;

    function PageDefinition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageDefinition' });
        }

        PageDefinition._super.constructor.apply(this, arguments);
    }
    _util.inherits(PageDefinition, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PageDefinition.prototype, 'meta', {
            get: function() { return this.__prop_meta; },
            set: function(value) {
                if (!(value instanceof PageDefinitionMeta)) {
                    try {
                        value = new PageDefinitionMeta(value);
                    } catch (e) {
                        throw new TypeError('Error setting PageDefinition.meta: ' + e.message);
                    }
                }

                this.__prop_meta = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageDefinition.prototype, 'controls', {
            get: function() { return this.__prop_controls; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PageControl); }))) {
                    try {
                        value = value.map(function(item){ return new PageControl(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PageDefinition.controls: ' + e.message);
                    }
                }

                this.__prop_controls = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PageDefinition, '__type', { value: 'urn:inin.com:ipa:pageDefinition' });

    Object.defineProperty(PageDefinition, '__propInfo', {
        get: function() {
            var pi = {
                'meta': { required: true, nullable: false },
                'controls': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pageDefinition'] = PageDefinition;

    return PageDefinition;
}());

var PageControl = (function(){
    var hasProps = false;

    function PageControl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageControl' });
        }

        PageControl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PageControl, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PageControl.prototype, 'controlId', {
            get: function() { return this.__prop_controlId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageControl.controlId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_controlId = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageControl.prototype, 'controlType', {
            get: function() { return this.__prop_controlType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageControl.controlType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_controlType = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageControl.prototype, 'isReadOnly', {
            get: function() { return this.__prop_isReadOnly; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageControl.isReadOnly, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isReadOnly = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageControl.prototype, 'commands', {
            get: function() { return this.__prop_commands; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PageCommand); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new PageCommand(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PageControl.commands: ' + e.message);
                    }
                }

                this.__prop_commands = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageControl.prototype, 'bindings', {
            get: function() { return this.__prop_bindings; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PageBinding); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new PageBinding(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PageControl.bindings: ' + e.message);
                    }
                }

                this.__prop_bindings = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageControl.prototype, 'layout', {
            get: function() { return this.__prop_layout; },
            set: function(value) {
                if (!(value instanceof PageLayout)) {
                    try {
                        value = new PageLayout(value);
                    } catch (e) {
                        throw new TypeError('Error setting PageControl.layout: ' + e.message);
                    }
                }

                this.__prop_layout = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageControl.prototype, 'text', {
            get: function() { return this.__prop_text; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PageText); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new PageText(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PageControl.text: ' + e.message);
                    }
                }

                this.__prop_text = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageControl.prototype, 'style', {
            get: function() { return this.__prop_style; },
            set: function(value) {
                if (!(value instanceof PageStyle || value === void 0 || value === null)) {
                    try {
                        value = new PageStyle(value);
                    } catch (e) {
                        throw new TypeError('Error setting PageControl.style: ' + e.message);
                    }
                }

                this.__prop_style = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageControl.prototype, 'options', {
            get: function() { return this.__prop_options; },
            set: function(value) {
                if (!(value instanceof PageOptions || value === void 0 || value === null)) {
                    try {
                        value = new PageOptions(value);
                    } catch (e) {
                        throw new TypeError('Error setting PageControl.options: ' + e.message);
                    }
                }

                this.__prop_options = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageControl.prototype, 'columns', {
            get: function() { return this.__prop_columns; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PageColumn); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new PageColumn(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PageControl.columns: ' + e.message);
                    }
                }

                this.__prop_columns = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PageControl, '__type', { value: 'urn:inin.com:ipa:pageControl' });

    Object.defineProperty(PageControl, '__propInfo', {
        get: function() {
            var pi = {
                'controlId': { required: true, nullable: false },
                'controlType': { required: true, nullable: false },
                'isReadOnly': { required: false, nullable: true },
                'commands': { required: false, nullable: true },
                'bindings': { required: false, nullable: true },
                'layout': { required: true, nullable: false },
                'text': { required: false, nullable: true },
                'style': { required: false, nullable: true },
                'options': { required: false, nullable: true },
                'columns': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pageControl'] = PageControl;

    return PageControl;
}());

var PageCommand = (function(){
    var hasProps = false;

    function PageCommand() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageCommand' });
        }

        PageCommand._super.constructor.apply(this, arguments);
    }
    _util.inherits(PageCommand, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PageCommand.prototype, 'commandType', {
            get: function() { return this.__prop_commandType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageCommand.commandType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_commandType = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageCommand.prototype, 'commandName', {
            get: function() { return this.__prop_commandName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageCommand.commandName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_commandName = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageCommand.prototype, 'commandId', {
            get: function() { return this.__prop_commandId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PageCommand.commandId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_commandId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PageCommand, '__type', { value: 'urn:inin.com:ipa:pageCommand' });

    Object.defineProperty(PageCommand, '__propInfo', {
        get: function() {
            var pi = {
                'commandType': { required: true, nullable: false },
                'commandName': { required: true, nullable: false },
                'commandId': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pageCommand'] = PageCommand;

    return PageCommand;
}());

var PageBinding = (function(){
    var hasProps = false;

    function PageBinding() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageBinding' });
        }

        PageBinding._super.constructor.apply(this, arguments);
    }
    _util.inherits(PageBinding, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PageBinding.prototype, 'dataId', {
            get: function() { return this.__prop_dataId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageBinding.dataId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dataId = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageBinding.prototype, 'bindingDirection', {
            get: function() { return this.__prop_bindingDirection; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageBinding.bindingDirection, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_bindingDirection = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageBinding.prototype, 'bindingType', {
            get: function() { return this.__prop_bindingType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageBinding.bindingType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_bindingType = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageBinding.prototype, 'bindingName', {
            get: function() { return this.__prop_bindingName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PageBinding.bindingName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_bindingName = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageBinding.prototype, 'isRequired', {
            get: function() { return this.__prop_isRequired; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageBinding.isRequired, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isRequired = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PageBinding, '__type', { value: 'urn:inin.com:ipa:pageBinding' });

    Object.defineProperty(PageBinding, '__propInfo', {
        get: function() {
            var pi = {
                'dataId': { required: true, nullable: false },
                'bindingDirection': { required: true, nullable: false },
                'bindingType': { required: true, nullable: false },
                'bindingName': { required: false, nullable: true },
                'isRequired': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pageBinding'] = PageBinding;

    return PageBinding;
}());

var PageLayout = (function(){
    var hasProps = false;

    function PageLayout() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageLayout' });
        }

        PageLayout._super.constructor.apply(this, arguments);
    }
    _util.inherits(PageLayout, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PageLayout.prototype, 'parentControlIndex', {
            get: function() { return this.__prop_parentControlIndex; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for PageLayout.parentControlIndex, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_parentControlIndex = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageLayout.prototype, 'upperLeftX', {
            get: function() { return this.__prop_upperLeftX; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for PageLayout.upperLeftX, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_upperLeftX = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageLayout.prototype, 'upperLeftY', {
            get: function() { return this.__prop_upperLeftY; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for PageLayout.upperLeftY, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_upperLeftY = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageLayout.prototype, 'width', {
            get: function() { return this.__prop_width; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for PageLayout.width, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_width = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageLayout.prototype, 'height', {
            get: function() { return this.__prop_height; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for PageLayout.height, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_height = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageLayout.prototype, 'childOffsetX', {
            get: function() { return this.__prop_childOffsetX; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for PageLayout.childOffsetX, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_childOffsetX = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageLayout.prototype, 'childOffsetY', {
            get: function() { return this.__prop_childOffsetY; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for PageLayout.childOffsetY, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_childOffsetY = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageLayout.prototype, 'tabIndex', {
            get: function() { return this.__prop_tabIndex; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PageLayout.tabIndex, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_tabIndex = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PageLayout, '__type', { value: 'urn:inin.com:ipa:pageLayout' });

    Object.defineProperty(PageLayout, '__propInfo', {
        get: function() {
            var pi = {
                'parentControlIndex': { required: true, nullable: false },
                'upperLeftX': { required: true, nullable: false },
                'upperLeftY': { required: true, nullable: false },
                'width': { required: true, nullable: false },
                'height': { required: true, nullable: false },
                'childOffsetX': { required: false, nullable: true },
                'childOffsetY': { required: false, nullable: true },
                'tabIndex': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pageLayout'] = PageLayout;

    return PageLayout;
}());

var PageText = (function(){
    var hasProps = false;

    function PageText() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageText' });
        }

        PageText._super.constructor.apply(this, arguments);
    }
    _util.inherits(PageText, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PageText.prototype, 'textFieldName', {
            get: function() { return this.__prop_textFieldName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageText.textFieldName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_textFieldName = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageText.prototype, 'textFieldValue', {
            get: function() { return this.__prop_textFieldValue; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageText.textFieldValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_textFieldValue = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PageText, '__type', { value: 'urn:inin.com:ipa:pageText' });

    Object.defineProperty(PageText, '__propInfo', {
        get: function() {
            var pi = {
                'textFieldName': { required: true, nullable: false },
                'textFieldValue': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pageText'] = PageText;

    return PageText;
}());

var PageStyle = (function(){
    var hasProps = false;

    function PageStyle() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageStyle' });
        }

        PageStyle._super.constructor.apply(this, arguments);
    }
    _util.inherits(PageStyle, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PageStyle.prototype, 'backgroundBrush', {
            get: function() { return this.__prop_backgroundBrush; },
            set: function(value) {
                if (!(value instanceof PageBrush || value === void 0 || value === null)) {
                    try {
                        value = new PageBrush(value);
                    } catch (e) {
                        throw new TypeError('Error setting PageStyle.backgroundBrush: ' + e.message);
                    }
                }

                this.__prop_backgroundBrush = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageStyle.prototype, 'borderBrush', {
            get: function() { return this.__prop_borderBrush; },
            set: function(value) {
                if (!(value instanceof PageBrush || value === void 0 || value === null)) {
                    try {
                        value = new PageBrush(value);
                    } catch (e) {
                        throw new TypeError('Error setting PageStyle.borderBrush: ' + e.message);
                    }
                }

                this.__prop_borderBrush = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageStyle.prototype, 'borderThickness', {
            get: function() { return this.__prop_borderThickness; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for PageStyle.borderThickness, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_borderThickness = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageStyle.prototype, 'fontFamily', {
            get: function() { return this.__prop_fontFamily; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PageStyle.fontFamily, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fontFamily = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageStyle.prototype, 'fontSize', {
            get: function() { return this.__prop_fontSize; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for PageStyle.fontSize, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fontSize = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageStyle.prototype, 'foregroundBrush', {
            get: function() { return this.__prop_foregroundBrush; },
            set: function(value) {
                if (!(value instanceof PageBrush || value === void 0 || value === null)) {
                    try {
                        value = new PageBrush(value);
                    } catch (e) {
                        throw new TypeError('Error setting PageStyle.foregroundBrush: ' + e.message);
                    }
                }

                this.__prop_foregroundBrush = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageStyle.prototype, 'isBold', {
            get: function() { return this.__prop_isBold; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageStyle.isBold, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isBold = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageStyle.prototype, 'isItalic', {
            get: function() { return this.__prop_isItalic; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageStyle.isItalic, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isItalic = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageStyle.prototype, 'isUnderline', {
            get: function() { return this.__prop_isUnderline; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageStyle.isUnderline, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isUnderline = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageStyle.prototype, 'isStrikethrough', {
            get: function() { return this.__prop_isStrikethrough; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageStyle.isStrikethrough, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isStrikethrough = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageStyle.prototype, 'textAlignment', {
            get: function() { return this.__prop_textAlignment; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PageStyle.textAlignment, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_textAlignment = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PageStyle, '__type', { value: 'urn:inin.com:ipa:pageStyle' });

    Object.defineProperty(PageStyle, '__propInfo', {
        get: function() {
            var pi = {
                'backgroundBrush': { required: false, nullable: true },
                'borderBrush': { required: false, nullable: true },
                'borderThickness': { required: false, nullable: true },
                'fontFamily': { required: false, nullable: true },
                'fontSize': { required: false, nullable: true },
                'foregroundBrush': { required: false, nullable: true },
                'isBold': { required: false, nullable: true },
                'isItalic': { required: false, nullable: true },
                'isUnderline': { required: false, nullable: true },
                'isStrikethrough': { required: false, nullable: true },
                'textAlignment': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pageStyle'] = PageStyle;

    return PageStyle;
}());

var PageBrush = (function(){
    var hasProps = false;

    function PageBrush() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageBrush' });
        }

        PageBrush._super.constructor.apply(this, arguments);
    }
    _util.inherits(PageBrush, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PageBrush.prototype, 'brushType', {
            get: function() { return this.__prop_brushType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageBrush.brushType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_brushType = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageBrush.prototype, 'firstColor', {
            get: function() { return this.__prop_firstColor; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PageBrush.firstColor, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_firstColor = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageBrush.prototype, 'secondColor', {
            get: function() { return this.__prop_secondColor; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PageBrush.secondColor, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_secondColor = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PageBrush, '__type', { value: 'urn:inin.com:ipa:pageBrush' });

    Object.defineProperty(PageBrush, '__propInfo', {
        get: function() {
            var pi = {
                'brushType': { required: true, nullable: false },
                'firstColor': { required: false, nullable: true },
                'secondColor': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pageBrush'] = PageBrush;

    return PageBrush;
}());

var PageOptions = (function(){
    var hasProps = false;

    function PageOptions() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageOptions' });
        }

        PageOptions._super.constructor.apply(this, arguments);
    }
    _util.inherits(PageOptions, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PageOptions.prototype, 'fixedUri', {
            get: function() { return this.__prop_fixedUri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PageOptions.fixedUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fixedUri = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageOptions.prototype, 'isSorted', {
            get: function() { return this.__prop_isSorted; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageOptions.isSorted, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSorted = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageOptions.prototype, 'lineMode', {
            get: function() { return this.__prop_lineMode; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PageOptions.lineMode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lineMode = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageOptions.prototype, 'spellCheck', {
            get: function() { return this.__prop_spellCheck; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageOptions.spellCheck, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_spellCheck = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageOptions.prototype, 'scaleDownToFit', {
            get: function() { return this.__prop_scaleDownToFit; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageOptions.scaleDownToFit, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scaleDownToFit = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageOptions.prototype, 'scaleUpToFit', {
            get: function() { return this.__prop_scaleUpToFit; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageOptions.scaleUpToFit, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scaleUpToFit = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageOptions.prototype, 'stretchToFill', {
            get: function() { return this.__prop_stretchToFill; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageOptions.stretchToFill, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_stretchToFill = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageOptions.prototype, 'updateUriAsUserNavigates', {
            get: function() { return this.__prop_updateUriAsUserNavigates; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageOptions.updateUriAsUserNavigates, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_updateUriAsUserNavigates = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageOptions.prototype, 'selectionMode', {
            get: function() { return this.__prop_selectionMode; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PageOptions.selectionMode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_selectionMode = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageOptions.prototype, 'valueWhenSelected', {
            get: function() { return this.__prop_valueWhenSelected; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PageOptions.valueWhenSelected, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_valueWhenSelected = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PageOptions, '__type', { value: 'urn:inin.com:ipa:pageOptions' });

    Object.defineProperty(PageOptions, '__propInfo', {
        get: function() {
            var pi = {
                'fixedUri': { required: false, nullable: true },
                'isSorted': { required: false, nullable: true },
                'lineMode': { required: false, nullable: true },
                'spellCheck': { required: false, nullable: true },
                'scaleDownToFit': { required: false, nullable: true },
                'scaleUpToFit': { required: false, nullable: true },
                'stretchToFill': { required: false, nullable: true },
                'updateUriAsUserNavigates': { required: false, nullable: true },
                'selectionMode': { required: false, nullable: true },
                'valueWhenSelected': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pageOptions'] = PageOptions;

    return PageOptions;
}());

var PageColumn = (function(){
    var hasProps = false;

    function PageColumn() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageColumn' });
        }

        PageColumn._super.constructor.apply(this, arguments);
    }
    _util.inherits(PageColumn, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PageColumn.prototype, 'dataId', {
            get: function() { return this.__prop_dataId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageColumn.dataId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dataId = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageColumn.prototype, 'headerText', {
            get: function() { return this.__prop_headerText; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageColumn.headerText, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_headerText = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageColumn.prototype, 'isAutoHeaderText', {
            get: function() { return this.__prop_isAutoHeaderText; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageColumn.isAutoHeaderText, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isAutoHeaderText = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageColumn.prototype, 'headerTooltip', {
            get: function() { return this.__prop_headerTooltip; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PageColumn.headerTooltip, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_headerTooltip = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageColumn.prototype, 'isAutoHeaderTooltip', {
            get: function() { return this.__prop_isAutoHeaderTooltip; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PageColumn.isAutoHeaderTooltip, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isAutoHeaderTooltip = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageColumn.prototype, 'columnWidth', {
            get: function() { return this.__prop_columnWidth; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for PageColumn.columnWidth, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_columnWidth = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageColumn.prototype, 'defaultSortOrder', {
            get: function() { return this.__prop_defaultSortOrder; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PageColumn.defaultSortOrder, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_defaultSortOrder = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PageColumn, '__type', { value: 'urn:inin.com:ipa:pageColumn' });

    Object.defineProperty(PageColumn, '__propInfo', {
        get: function() {
            var pi = {
                'dataId': { required: true, nullable: false },
                'headerText': { required: true, nullable: false },
                'isAutoHeaderText': { required: false, nullable: true },
                'headerTooltip': { required: false, nullable: true },
                'isAutoHeaderTooltip': { required: false, nullable: true },
                'columnWidth': { required: false, nullable: true },
                'defaultSortOrder': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pageColumn'] = PageColumn;

    return PageColumn;
}());

var DataDefinitionsList = (function(){
    var hasProps = false;

    function DataDefinitionsList() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dataDefinitionsList' });
        }

        DataDefinitionsList._super.constructor.apply(this, arguments);
    }
    _util.inherits(DataDefinitionsList, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DataDefinitionsList.prototype, 'meta', {
            get: function() { return this.__prop_meta; },
            set: function(value) {
                if (!(value instanceof DataDefinitionsListMeta)) {
                    try {
                        value = new DataDefinitionsListMeta(value);
                    } catch (e) {
                        throw new TypeError('Error setting DataDefinitionsList.meta: ' + e.message);
                    }
                }

                this.__prop_meta = value;
            },
            enumerable: true
        });

        Object.defineProperty(DataDefinitionsList.prototype, 'definitions', {
            get: function() { return this.__prop_definitions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof BaseTypeDef); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new BaseTypeDef(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DataDefinitionsList.definitions: ' + e.message);
                    }
                }

                this.__prop_definitions = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DataDefinitionsList, '__type', { value: 'urn:inin.com:ipa:dataDefinitionsList' });

    Object.defineProperty(DataDefinitionsList, '__propInfo', {
        get: function() {
            var pi = {
                'meta': { required: true, nullable: false },
                'definitions': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dataDefinitionsList'] = DataDefinitionsList;

    return DataDefinitionsList;
}());

var BaseTypeDef = (function(){
    var hasProps = false;

    function BaseTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:baseTypeDef' });
        }

        BaseTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseTypeDef, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BaseTypeDef.prototype, 'defId', {
            get: function() { return this.__prop_defId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseTypeDef.defId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_defId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BaseTypeDef, '__type', { value: 'urn:inin.com:ipa:baseTypeDef' });

    Object.defineProperty(BaseTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'defId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:baseTypeDef'] = BaseTypeDef;

    return BaseTypeDef;
}());

var BaseDataValidationRules = (function(){
    var hasProps = false;

    function BaseDataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:baseDataValidationRules' });
        }

        BaseDataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseDataValidationRules, _util.DataContract);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(BaseDataValidationRules, '__type', { value: 'urn:inin.com:ipa:baseDataValidationRules' });

    Object.defineProperty(BaseDataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:baseDataValidationRules'] = BaseDataValidationRules;

    return BaseDataValidationRules;
}());

var BasePropDef = (function(){
    var hasProps = false;

    function BasePropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:basePropDef' });
        }

        BasePropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(BasePropDef, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BasePropDef.prototype, 'defId', {
            get: function() { return this.__prop_defId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BasePropDef.defId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_defId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BasePropDef, '__type', { value: 'urn:inin.com:ipa:basePropDef' });

    Object.defineProperty(BasePropDef, '__propInfo', {
        get: function() {
            var pi = {
                'defId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:basePropDef'] = BasePropDef;

    return BasePropDef;
}());

var ComplexPropDefInitialValuesItem = (function(){
    var hasProps = false;

    function ComplexPropDefInitialValuesItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:complexPropDefInitialValuesItem' });
        }

        ComplexPropDefInitialValuesItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(ComplexPropDefInitialValuesItem, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ComplexPropDefInitialValuesItem.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof ComplexValueForPropDefCollInitialItem || value === void 0 || value === null)) {
                    try {
                        value = new ComplexValueForPropDefCollInitialItem(value);
                    } catch (e) {
                        throw new TypeError('Error setting ComplexPropDefInitialValuesItem.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ComplexPropDefInitialValuesItem, '__type', { value: 'urn:inin.com:ipa:complexPropDefInitialValuesItem' });

    Object.defineProperty(ComplexPropDefInitialValuesItem, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:complexPropDefInitialValuesItem'] = ComplexPropDefInitialValuesItem;

    return ComplexPropDefInitialValuesItem;
}());

var ComplexValueForPropDefCollInitialItem = (function(){
    var hasProps = false;

    function ComplexValueForPropDefCollInitialItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:complexValueForPropDefCollInitialItem' });
        }

        ComplexValueForPropDefCollInitialItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(ComplexValueForPropDefCollInitialItem, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ComplexValueForPropDefCollInitialItem.prototype, 'uniqueId', {
            get: function() { return this.__prop_uniqueId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ComplexValueForPropDefCollInitialItem.uniqueId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_uniqueId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ComplexValueForPropDefCollInitialItem.prototype, 'props', {
            get: function() { return this.__prop_props; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof BasePropDefInitialValuesItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new BasePropDefInitialValuesItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ComplexValueForPropDefCollInitialItem.props: ' + e.message);
                    }
                }

                this.__prop_props = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ComplexValueForPropDefCollInitialItem, '__type', { value: 'urn:inin.com:ipa:complexValueForPropDefCollInitialItem' });

    Object.defineProperty(ComplexValueForPropDefCollInitialItem, '__propInfo', {
        get: function() {
            var pi = {
                'uniqueId': { required: false, nullable: true },
                'props': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:complexValueForPropDefCollInitialItem'] = ComplexValueForPropDefCollInitialItem;

    return ComplexValueForPropDefCollInitialItem;
}());

var BasePropDefInitialValuesItem = (function(){
    var hasProps = false;

    function BasePropDefInitialValuesItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:basePropDefInitialValuesItem' });
        }

        BasePropDefInitialValuesItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(BasePropDefInitialValuesItem, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BasePropDefInitialValuesItem.prototype, 'refId', {
            get: function() { return this.__prop_refId; },
            set: function(value) {
                if (!(_util.isString(value) || value === null)) {
                    throw new TypeError('Expected type String for BasePropDefInitialValuesItem.refId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_refId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BasePropDefInitialValuesItem, '__type', { value: 'urn:inin.com:ipa:basePropDefInitialValuesItem' });

    Object.defineProperty(BasePropDefInitialValuesItem, '__propInfo', {
        get: function() {
            var pi = {
                'refId': { required: true, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:basePropDefInitialValuesItem'] = BasePropDefInitialValuesItem;

    return BasePropDefInitialValuesItem;
}());

var DataManifestList = (function(){
    var hasProps = false;

    function DataManifestList() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dataManifestList' });
        }

        DataManifestList._super.constructor.apply(this, arguments);
    }
    _util.inherits(DataManifestList, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DataManifestList.prototype, 'meta', {
            get: function() { return this.__prop_meta; },
            set: function(value) {
                if (!(value instanceof DataManifestListMeta)) {
                    try {
                        value = new DataManifestListMeta(value);
                    } catch (e) {
                        throw new TypeError('Error setting DataManifestList.meta: ' + e.message);
                    }
                }

                this.__prop_meta = value;
            },
            enumerable: true
        });

        Object.defineProperty(DataManifestList.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DataManifestItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new DataManifestItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DataManifestList.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DataManifestList, '__type', { value: 'urn:inin.com:ipa:dataManifestList' });

    Object.defineProperty(DataManifestList, '__propInfo', {
        get: function() {
            var pi = {
                'meta': { required: true, nullable: false },
                'items': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dataManifestList'] = DataManifestList;

    return DataManifestList;
}());

var DataManifestItem = (function(){
    var hasProps = false;

    function DataManifestItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dataManifestItem' });
        }

        DataManifestItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(DataManifestItem, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DataManifestItem.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DataManifestItem.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(DataManifestItem.prototype, 'localAlias', {
            get: function() { return this.__prop_localAlias; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DataManifestItem.localAlias, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_localAlias = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DataManifestItem, '__type', { value: 'urn:inin.com:ipa:dataManifestItem' });

    Object.defineProperty(DataManifestItem, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'localAlias': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dataManifestItem'] = DataManifestItem;

    return DataManifestItem;
}());

var CurrentPageSubscriptionBaseEventArgs = (function(){
    var hasProps = false;

    function CurrentPageSubscriptionBaseEventArgs() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:currentPageSubscriptionBaseEventArgs', enumerable: true });
        }

        CurrentPageSubscriptionBaseEventArgs._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrentPageSubscriptionBaseEventArgs, Messaging.Message);

    function defineProps() {
        Object.defineProperty(CurrentPageSubscriptionBaseEventArgs.prototype, 'workItemInstanceId', {
            get: function() { return this.__prop_workItemInstanceId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CurrentPageSubscriptionBaseEventArgs.workItemInstanceId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workItemInstanceId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CurrentPageSubscriptionBaseEventArgs, '__type', { value: 'urn:inin.com:ipa:currentPageSubscriptionBaseEventArgs' });

    Object.defineProperty(CurrentPageSubscriptionBaseEventArgs, '__propInfo', {
        get: function() {
            var pi = {
                'workItemInstanceId': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:currentPageSubscriptionBaseEventArgs'] = CurrentPageSubscriptionBaseEventArgs;

    return CurrentPageSubscriptionBaseEventArgs;
}());

var RuntimeDataValuesListMeta = (function(){
    var hasProps = false;

    function RuntimeDataValuesListMeta() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:runtimeDataValuesListMeta', enumerable: true });
        }

        RuntimeDataValuesListMeta._super.constructor.apply(this, arguments);
    }
    _util.inherits(RuntimeDataValuesListMeta, BasePageAndDataMeta);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(RuntimeDataValuesListMeta, '__type', { value: 'urn:inin.com:ipa:runtimeDataValuesListMeta' });

    Object.defineProperty(RuntimeDataValuesListMeta, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (BasePageAndDataMeta.__propInfo) { _util.extend(pi, BasePageAndDataMeta.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:runtimeDataValuesListMeta'] = RuntimeDataValuesListMeta;

    return RuntimeDataValuesListMeta;
}());

var PageDefinitionMeta = (function(){
    var hasProps = false;

    function PageDefinitionMeta() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pageDefinitionMeta', enumerable: true });
        }

        PageDefinitionMeta._super.constructor.apply(this, arguments);
    }
    _util.inherits(PageDefinitionMeta, BasePageAndDataMeta);

    function defineProps() {
        Object.defineProperty(PageDefinitionMeta.prototype, 'dipsPerInch', {
            get: function() { return this.__prop_dipsPerInch; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for PageDefinitionMeta.dipsPerInch, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dipsPerInch = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageDefinitionMeta.prototype, 'defaultFontSize', {
            get: function() { return this.__prop_defaultFontSize; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for PageDefinitionMeta.defaultFontSize, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_defaultFontSize = value;
            },
            enumerable: true
        });

        Object.defineProperty(PageDefinitionMeta.prototype, 'defaultFontFamily', {
            get: function() { return this.__prop_defaultFontFamily; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PageDefinitionMeta.defaultFontFamily, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_defaultFontFamily = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PageDefinitionMeta, '__type', { value: 'urn:inin.com:ipa:pageDefinitionMeta' });

    Object.defineProperty(PageDefinitionMeta, '__propInfo', {
        get: function() {
            var pi = {
                'dipsPerInch': { required: true, nullable: false },
                'defaultFontSize': { required: true, nullable: false },
                'defaultFontFamily': { required: true, nullable: false }
            };
            if (BasePageAndDataMeta.__propInfo) { _util.extend(pi, BasePageAndDataMeta.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pageDefinitionMeta'] = PageDefinitionMeta;

    return PageDefinitionMeta;
}());

var DataDefinitionsListMeta = (function(){
    var hasProps = false;

    function DataDefinitionsListMeta() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dataDefinitionsListMeta', enumerable: true });
        }

        DataDefinitionsListMeta._super.constructor.apply(this, arguments);
    }
    _util.inherits(DataDefinitionsListMeta, BasePageAndDataMeta);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(DataDefinitionsListMeta, '__type', { value: 'urn:inin.com:ipa:dataDefinitionsListMeta' });

    Object.defineProperty(DataDefinitionsListMeta, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (BasePageAndDataMeta.__propInfo) { _util.extend(pi, BasePageAndDataMeta.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dataDefinitionsListMeta'] = DataDefinitionsListMeta;

    return DataDefinitionsListMeta;
}());

var DataManifestListMeta = (function(){
    var hasProps = false;

    function DataManifestListMeta() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dataManifestListMeta', enumerable: true });
        }

        DataManifestListMeta._super.constructor.apply(this, arguments);
    }
    _util.inherits(DataManifestListMeta, BasePageAndDataMeta);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(DataManifestListMeta, '__type', { value: 'urn:inin.com:ipa:dataManifestListMeta' });

    Object.defineProperty(DataManifestListMeta, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (BasePageAndDataMeta.__propInfo) { _util.extend(pi, BasePageAndDataMeta.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dataManifestListMeta'] = DataManifestListMeta;

    return DataManifestListMeta;
}());

var BaseDataInstSing = (function(){
    var hasProps = false;

    function BaseDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:baseDataInstSing', enumerable: true });
        }

        BaseDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseDataInstSing, BaseDataInst);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(BaseDataInstSing, '__type', { value: 'urn:inin.com:ipa:baseDataInstSing' });

    Object.defineProperty(BaseDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (BaseDataInst.__propInfo) { _util.extend(pi, BaseDataInst.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:baseDataInstSing'] = BaseDataInstSing;

    return BaseDataInstSing;
}());

var BasePropValSing = (function(){
    var hasProps = false;

    function BasePropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:basePropValSing', enumerable: true });
        }

        BasePropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(BasePropValSing, BasePropVal);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(BasePropValSing, '__type', { value: 'urn:inin.com:ipa:basePropValSing' });

    Object.defineProperty(BasePropValSing, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (BasePropVal.__propInfo) { _util.extend(pi, BasePropVal.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:basePropValSing'] = BasePropValSing;

    return BasePropValSing;
}());

var BasePropValColl = (function(){
    var hasProps = false;

    function BasePropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:basePropValColl', enumerable: true });
        }

        BasePropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(BasePropValColl, BasePropVal);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(BasePropValColl, '__type', { value: 'urn:inin.com:ipa:basePropValColl' });

    Object.defineProperty(BasePropValColl, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (BasePropVal.__propInfo) { _util.extend(pi, BasePropVal.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:basePropValColl'] = BasePropValColl;

    return BasePropValColl;
}());

var BooleanDataInstCollItem = (function(){
    var hasProps = false;

    function BooleanDataInstCollItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:booleanDataInstCollItem', enumerable: true });
        }

        BooleanDataInstCollItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(BooleanDataInstCollItem, BaseDataInstCollItem);

    function defineProps() {
        Object.defineProperty(BooleanDataInstCollItem.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for BooleanDataInstCollItem.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BooleanDataInstCollItem, '__type', { value: 'urn:inin.com:ipa:booleanDataInstCollItem' });

    Object.defineProperty(BooleanDataInstCollItem, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstCollItem.__propInfo) { _util.extend(pi, BaseDataInstCollItem.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:booleanDataInstCollItem'] = BooleanDataInstCollItem;

    return BooleanDataInstCollItem;
}());

var StringDataInstCollItem = (function(){
    var hasProps = false;

    function StringDataInstCollItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:stringDataInstCollItem', enumerable: true });
        }

        StringDataInstCollItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(StringDataInstCollItem, BaseDataInstCollItem);

    function defineProps() {
        Object.defineProperty(StringDataInstCollItem.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StringDataInstCollItem.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StringDataInstCollItem, '__type', { value: 'urn:inin.com:ipa:stringDataInstCollItem' });

    Object.defineProperty(StringDataInstCollItem, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstCollItem.__propInfo) { _util.extend(pi, BaseDataInstCollItem.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:stringDataInstCollItem'] = StringDataInstCollItem;

    return StringDataInstCollItem;
}());

var ComplexDataInstCollItem = (function(){
    var hasProps = false;

    function ComplexDataInstCollItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:complexDataInstCollItem', enumerable: true });
        }

        ComplexDataInstCollItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(ComplexDataInstCollItem, BaseDataInstCollItem);

    function defineProps() {
        Object.defineProperty(ComplexDataInstCollItem.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof ComplexValue || value === void 0 || value === null)) {
                    try {
                        value = new ComplexValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting ComplexDataInstCollItem.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ComplexDataInstCollItem, '__type', { value: 'urn:inin.com:ipa:complexDataInstCollItem' });

    Object.defineProperty(ComplexDataInstCollItem, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstCollItem.__propInfo) { _util.extend(pi, BaseDataInstCollItem.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:complexDataInstCollItem'] = ComplexDataInstCollItem;

    return ComplexDataInstCollItem;
}());

var CurrencyDataInstCollItem = (function(){
    var hasProps = false;

    function CurrencyDataInstCollItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:currencyDataInstCollItem', enumerable: true });
        }

        CurrencyDataInstCollItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrencyDataInstCollItem, BaseDataInstCollItem);

    function defineProps() {
        Object.defineProperty(CurrencyDataInstCollItem.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof CurrencyValue || value === void 0 || value === null)) {
                    try {
                        value = new CurrencyValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting CurrencyDataInstCollItem.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CurrencyDataInstCollItem, '__type', { value: 'urn:inin.com:ipa:currencyDataInstCollItem' });

    Object.defineProperty(CurrencyDataInstCollItem, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstCollItem.__propInfo) { _util.extend(pi, BaseDataInstCollItem.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:currencyDataInstCollItem'] = CurrencyDataInstCollItem;

    return CurrencyDataInstCollItem;
}());

var MailboxDataInstCollItem = (function(){
    var hasProps = false;

    function MailboxDataInstCollItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:mailboxDataInstCollItem', enumerable: true });
        }

        MailboxDataInstCollItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(MailboxDataInstCollItem, BaseDataInstCollItem);

    function defineProps() {
        Object.defineProperty(MailboxDataInstCollItem.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof MailboxValue || value === void 0 || value === null)) {
                    try {
                        value = new MailboxValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting MailboxDataInstCollItem.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MailboxDataInstCollItem, '__type', { value: 'urn:inin.com:ipa:mailboxDataInstCollItem' });

    Object.defineProperty(MailboxDataInstCollItem, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstCollItem.__propInfo) { _util.extend(pi, BaseDataInstCollItem.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:mailboxDataInstCollItem'] = MailboxDataInstCollItem;

    return MailboxDataInstCollItem;
}());

var UserQueueDataInstCollItem = (function(){
    var hasProps = false;

    function UserQueueDataInstCollItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:userQueueDataInstCollItem', enumerable: true });
        }

        UserQueueDataInstCollItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserQueueDataInstCollItem, BaseDataInstCollItem);

    function defineProps() {
        Object.defineProperty(UserQueueDataInstCollItem.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof UserQueueValue || value === void 0 || value === null)) {
                    try {
                        value = new UserQueueValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserQueueDataInstCollItem.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserQueueDataInstCollItem, '__type', { value: 'urn:inin.com:ipa:userQueueDataInstCollItem' });

    Object.defineProperty(UserQueueDataInstCollItem, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstCollItem.__propInfo) { _util.extend(pi, BaseDataInstCollItem.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:userQueueDataInstCollItem'] = UserQueueDataInstCollItem;

    return UserQueueDataInstCollItem;
}());

var BaseDataInstColl = (function(){
    var hasProps = false;

    function BaseDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:baseDataInstColl', enumerable: true });
        }

        BaseDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseDataInstColl, BaseDataInst);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(BaseDataInstColl, '__type', { value: 'urn:inin.com:ipa:baseDataInstColl' });

    Object.defineProperty(BaseDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (BaseDataInst.__propInfo) { _util.extend(pi, BaseDataInst.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:baseDataInstColl'] = BaseDataInstColl;

    return BaseDataInstColl;
}());

var PasSubscriptionEventArgs = (function(){
    var hasProps = false;

    function PasSubscriptionEventArgs() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:pasSubscriptionEventArgs', enumerable: true });
        }

        PasSubscriptionEventArgs._super.constructor.apply(this, arguments);
    }
    _util.inherits(PasSubscriptionEventArgs, Messaging.Message);

    function defineProps() {
        Object.defineProperty(PasSubscriptionEventArgs.prototype, 'runState', {
            get: function() { return this.__prop_runState; },
            set: function(value) {
                if (!(value instanceof PasRunState || value === void 0)) {
                    try {
                        value = new PasRunState(value);
                    } catch (e) {
                        throw new TypeError('Error setting PasSubscriptionEventArgs.runState: ' + e.message);
                    }
                }

                this.__prop_runState = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PasSubscriptionEventArgs, '__type', { value: 'urn:inin.com:ipa:pasSubscriptionEventArgs' });

    Object.defineProperty(PasSubscriptionEventArgs, '__propInfo', {
        get: function() {
            var pi = {
                'runState': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:pasSubscriptionEventArgs'] = PasSubscriptionEventArgs;

    return PasSubscriptionEventArgs;
}());

var LaunchableProcessesSubscriptionEventArgs = (function(){
    var hasProps = false;

    function LaunchableProcessesSubscriptionEventArgs() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:launchableProcessesSubscriptionEventArgs', enumerable: true });
        }

        LaunchableProcessesSubscriptionEventArgs._super.constructor.apply(this, arguments);
    }
    _util.inherits(LaunchableProcessesSubscriptionEventArgs, Messaging.Message);

    function defineProps() {
        Object.defineProperty(LaunchableProcessesSubscriptionEventArgs.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ProcessDefinitionDescription); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ProcessDefinitionDescription(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LaunchableProcessesSubscriptionEventArgs.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(LaunchableProcessesSubscriptionEventArgs.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ProcessDefinitionDescription); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ProcessDefinitionDescription(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LaunchableProcessesSubscriptionEventArgs.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(LaunchableProcessesSubscriptionEventArgs.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for LaunchableProcessesSubscriptionEventArgs.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LaunchableProcessesSubscriptionEventArgs, '__type', { value: 'urn:inin.com:ipa:launchableProcessesSubscriptionEventArgs' });

    Object.defineProperty(LaunchableProcessesSubscriptionEventArgs, '__propInfo', {
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

    _typemap['urn:inin.com:ipa:launchableProcessesSubscriptionEventArgs'] = LaunchableProcessesSubscriptionEventArgs;

    return LaunchableProcessesSubscriptionEventArgs;
}());

var BooleanTypeDef = (function(){
    var hasProps = false;

    function BooleanTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:booleanTypeDef', enumerable: true });
        }

        BooleanTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(BooleanTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(BooleanTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isBoolean(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean[] for BooleanTypeDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(BooleanTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof BooleanDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new BooleanDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting BooleanTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BooleanTypeDef, '__type', { value: 'urn:inin.com:ipa:booleanTypeDef' });

    Object.defineProperty(BooleanTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:booleanTypeDef'] = BooleanTypeDef;

    return BooleanTypeDef;
}());

var BooleanDataValidationRules = (function(){
    var hasProps = false;

    function BooleanDataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:booleanDataValidationRules', enumerable: true });
        }

        BooleanDataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(BooleanDataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(BooleanDataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for BooleanDataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(BooleanDataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for BooleanDataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BooleanDataValidationRules, '__type', { value: 'urn:inin.com:ipa:booleanDataValidationRules' });

    Object.defineProperty(BooleanDataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:booleanDataValidationRules'] = BooleanDataValidationRules;

    return BooleanDataValidationRules;
}());

var CurrencyDataValidationRules = (function(){
    var hasProps = false;

    function CurrencyDataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:currencyDataValidationRules', enumerable: true });
        }

        CurrencyDataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrencyDataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(CurrencyDataValidationRules.prototype, 'minVal', {
            get: function() { return this.__prop_minVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for CurrencyDataValidationRules.minVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrencyDataValidationRules.prototype, 'maxVal', {
            get: function() { return this.__prop_maxVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for CurrencyDataValidationRules.maxVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrencyDataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for CurrencyDataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrencyDataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for CurrencyDataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrencyDataValidationRules.prototype, 'limitToList', {
            get: function() { return this.__prop_limitToList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof CurrencyValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new CurrencyValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting CurrencyDataValidationRules.limitToList: ' + e.message);
                    }
                }

                this.__prop_limitToList = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrencyDataValidationRules.prototype, 'allowNotSet', {
            get: function() { return this.__prop_allowNotSet; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for CurrencyDataValidationRules.allowNotSet, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowNotSet = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrencyDataValidationRules.prototype, 'decPlaces', {
            get: function() { return this.__prop_decPlaces; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for CurrencyDataValidationRules.decPlaces, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_decPlaces = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CurrencyDataValidationRules, '__type', { value: 'urn:inin.com:ipa:currencyDataValidationRules' });

    Object.defineProperty(CurrencyDataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minVal': { required: false, nullable: true },
                'maxVal': { required: false, nullable: true },
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true },
                'limitToList': { required: false, nullable: true },
                'allowNotSet': { required: false, nullable: true },
                'decPlaces': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:currencyDataValidationRules'] = CurrencyDataValidationRules;

    return CurrencyDataValidationRules;
}());

var DateDataValidationRules = (function(){
    var hasProps = false;

    function DateDataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dateDataValidationRules', enumerable: true });
        }

        DateDataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(DateDataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(DateDataValidationRules.prototype, 'minVal', {
            get: function() { return this.__prop_minVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DateDataValidationRules.minVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(DateDataValidationRules.prototype, 'maxVal', {
            get: function() { return this.__prop_maxVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DateDataValidationRules.maxVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(DateDataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for DateDataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(DateDataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for DateDataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(DateDataValidationRules.prototype, 'limitToList', {
            get: function() { return this.__prop_limitToList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for DateDataValidationRules.limitToList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_limitToList = value;
            },
            enumerable: true
        });

        Object.defineProperty(DateDataValidationRules.prototype, 'allowNotSet', {
            get: function() { return this.__prop_allowNotSet; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for DateDataValidationRules.allowNotSet, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowNotSet = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DateDataValidationRules, '__type', { value: 'urn:inin.com:ipa:dateDataValidationRules' });

    Object.defineProperty(DateDataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minVal': { required: false, nullable: true },
                'maxVal': { required: false, nullable: true },
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true },
                'limitToList': { required: false, nullable: true },
                'allowNotSet': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dateDataValidationRules'] = DateDataValidationRules;

    return DateDataValidationRules;
}());

var DateTimeDataValidationRules = (function(){
    var hasProps = false;

    function DateTimeDataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dateTimeDataValidationRules', enumerable: true });
        }

        DateTimeDataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(DateTimeDataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(DateTimeDataValidationRules.prototype, 'minVal', {
            get: function() { return this.__prop_minVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DateTimeDataValidationRules.minVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(DateTimeDataValidationRules.prototype, 'maxVal', {
            get: function() { return this.__prop_maxVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DateTimeDataValidationRules.maxVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(DateTimeDataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for DateTimeDataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(DateTimeDataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for DateTimeDataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(DateTimeDataValidationRules.prototype, 'limitToList', {
            get: function() { return this.__prop_limitToList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for DateTimeDataValidationRules.limitToList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_limitToList = value;
            },
            enumerable: true
        });

        Object.defineProperty(DateTimeDataValidationRules.prototype, 'allowNotSet', {
            get: function() { return this.__prop_allowNotSet; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for DateTimeDataValidationRules.allowNotSet, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowNotSet = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DateTimeDataValidationRules, '__type', { value: 'urn:inin.com:ipa:dateTimeDataValidationRules' });

    Object.defineProperty(DateTimeDataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minVal': { required: false, nullable: true },
                'maxVal': { required: false, nullable: true },
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true },
                'limitToList': { required: false, nullable: true },
                'allowNotSet': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dateTimeDataValidationRules'] = DateTimeDataValidationRules;

    return DateTimeDataValidationRules;
}());

var DecimaldataValidationRules = (function(){
    var hasProps = false;

    function DecimaldataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:decimaldataValidationRules', enumerable: true });
        }

        DecimaldataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(DecimaldataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(DecimaldataValidationRules.prototype, 'minVal', {
            get: function() { return this.__prop_minVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DecimaldataValidationRules.minVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(DecimaldataValidationRules.prototype, 'maxVal', {
            get: function() { return this.__prop_maxVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DecimaldataValidationRules.maxVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(DecimaldataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for DecimaldataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(DecimaldataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for DecimaldataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(DecimaldataValidationRules.prototype, 'limitToList', {
            get: function() { return this.__prop_limitToList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for DecimaldataValidationRules.limitToList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_limitToList = value;
            },
            enumerable: true
        });

        Object.defineProperty(DecimaldataValidationRules.prototype, 'allowNotSet', {
            get: function() { return this.__prop_allowNotSet; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for DecimaldataValidationRules.allowNotSet, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowNotSet = value;
            },
            enumerable: true
        });

        Object.defineProperty(DecimaldataValidationRules.prototype, 'decPlaces', {
            get: function() { return this.__prop_decPlaces; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for DecimaldataValidationRules.decPlaces, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_decPlaces = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DecimaldataValidationRules, '__type', { value: 'urn:inin.com:ipa:decimaldataValidationRules' });

    Object.defineProperty(DecimaldataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minVal': { required: false, nullable: true },
                'maxVal': { required: false, nullable: true },
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true },
                'limitToList': { required: false, nullable: true },
                'allowNotSet': { required: false, nullable: true },
                'decPlaces': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:decimaldataValidationRules'] = DecimaldataValidationRules;

    return DecimaldataValidationRules;
}());

var DurationDataValidationRules = (function(){
    var hasProps = false;

    function DurationDataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:durationDataValidationRules', enumerable: true });
        }

        DurationDataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(DurationDataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(DurationDataValidationRules.prototype, 'minVal', {
            get: function() { return this.__prop_minVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DurationDataValidationRules.minVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(DurationDataValidationRules.prototype, 'maxVal', {
            get: function() { return this.__prop_maxVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DurationDataValidationRules.maxVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(DurationDataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for DurationDataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(DurationDataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for DurationDataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(DurationDataValidationRules.prototype, 'limitToList', {
            get: function() { return this.__prop_limitToList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for DurationDataValidationRules.limitToList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_limitToList = value;
            },
            enumerable: true
        });

        Object.defineProperty(DurationDataValidationRules.prototype, 'allowNotSet', {
            get: function() { return this.__prop_allowNotSet; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for DurationDataValidationRules.allowNotSet, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowNotSet = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DurationDataValidationRules, '__type', { value: 'urn:inin.com:ipa:durationDataValidationRules' });

    Object.defineProperty(DurationDataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minVal': { required: false, nullable: true },
                'maxVal': { required: false, nullable: true },
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true },
                'limitToList': { required: false, nullable: true },
                'allowNotSet': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:durationDataValidationRules'] = DurationDataValidationRules;

    return DurationDataValidationRules;
}());

var LongdataValidationRules = (function(){
    var hasProps = false;

    function LongdataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:longdataValidationRules', enumerable: true });
        }

        LongdataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(LongdataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(LongdataValidationRules.prototype, 'minVal', {
            get: function() { return this.__prop_minVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for LongdataValidationRules.minVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(LongdataValidationRules.prototype, 'maxVal', {
            get: function() { return this.__prop_maxVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for LongdataValidationRules.maxVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(LongdataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for LongdataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(LongdataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for LongdataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(LongdataValidationRules.prototype, 'limitToList', {
            get: function() { return this.__prop_limitToList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for LongdataValidationRules.limitToList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_limitToList = value;
            },
            enumerable: true
        });

        Object.defineProperty(LongdataValidationRules.prototype, 'allowNotSet', {
            get: function() { return this.__prop_allowNotSet; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for LongdataValidationRules.allowNotSet, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowNotSet = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LongdataValidationRules, '__type', { value: 'urn:inin.com:ipa:longdataValidationRules' });

    Object.defineProperty(LongdataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minVal': { required: false, nullable: true },
                'maxVal': { required: false, nullable: true },
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true },
                'limitToList': { required: false, nullable: true },
                'allowNotSet': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:longdataValidationRules'] = LongdataValidationRules;

    return LongdataValidationRules;
}());

var MailboxDataValidationRules = (function(){
    var hasProps = false;

    function MailboxDataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:mailboxDataValidationRules', enumerable: true });
        }

        MailboxDataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(MailboxDataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(MailboxDataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for MailboxDataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(MailboxDataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for MailboxDataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(MailboxDataValidationRules.prototype, 'limitToList', {
            get: function() { return this.__prop_limitToList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof MailboxValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new MailboxValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MailboxDataValidationRules.limitToList: ' + e.message);
                    }
                }

                this.__prop_limitToList = value;
            },
            enumerable: true
        });

        Object.defineProperty(MailboxDataValidationRules.prototype, 'allowNotSet', {
            get: function() { return this.__prop_allowNotSet; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for MailboxDataValidationRules.allowNotSet, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowNotSet = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MailboxDataValidationRules, '__type', { value: 'urn:inin.com:ipa:mailboxDataValidationRules' });

    Object.defineProperty(MailboxDataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true },
                'limitToList': { required: false, nullable: true },
                'allowNotSet': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:mailboxDataValidationRules'] = MailboxDataValidationRules;

    return MailboxDataValidationRules;
}());

var SkillDataValidationRules = (function(){
    var hasProps = false;

    function SkillDataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:skillDataValidationRules', enumerable: true });
        }

        SkillDataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(SkillDataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(SkillDataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for SkillDataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillDataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for SkillDataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillDataValidationRules.prototype, 'limitToList', {
            get: function() { return this.__prop_limitToList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for SkillDataValidationRules.limitToList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_limitToList = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillDataValidationRules.prototype, 'allowNotSet', {
            get: function() { return this.__prop_allowNotSet; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for SkillDataValidationRules.allowNotSet, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowNotSet = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SkillDataValidationRules, '__type', { value: 'urn:inin.com:ipa:skillDataValidationRules' });

    Object.defineProperty(SkillDataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true },
                'limitToList': { required: false, nullable: true },
                'allowNotSet': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:skillDataValidationRules'] = SkillDataValidationRules;

    return SkillDataValidationRules;
}());

var StringDataValidationRules = (function(){
    var hasProps = false;

    function StringDataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:stringDataValidationRules', enumerable: true });
        }

        StringDataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(StringDataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(StringDataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for StringDataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(StringDataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for StringDataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(StringDataValidationRules.prototype, 'limitToList', {
            get: function() { return this.__prop_limitToList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for StringDataValidationRules.limitToList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_limitToList = value;
            },
            enumerable: true
        });

        Object.defineProperty(StringDataValidationRules.prototype, 'allowNotSet', {
            get: function() { return this.__prop_allowNotSet; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StringDataValidationRules.allowNotSet, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowNotSet = value;
            },
            enumerable: true
        });

        Object.defineProperty(StringDataValidationRules.prototype, 'minLength', {
            get: function() { return this.__prop_minLength; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for StringDataValidationRules.minLength, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minLength = value;
            },
            enumerable: true
        });

        Object.defineProperty(StringDataValidationRules.prototype, 'maxLength', {
            get: function() { return this.__prop_maxLength; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for StringDataValidationRules.maxLength, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxLength = value;
            },
            enumerable: true
        });

        Object.defineProperty(StringDataValidationRules.prototype, 'trim', {
            get: function() { return this.__prop_trim; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StringDataValidationRules.trim, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_trim = value;
            },
            enumerable: true
        });

        Object.defineProperty(StringDataValidationRules.prototype, 'patternType', {
            get: function() { return this.__prop_patternType; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StringDataValidationRules.patternType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_patternType = value;
            },
            enumerable: true
        });

        Object.defineProperty(StringDataValidationRules.prototype, 'patternName', {
            get: function() { return this.__prop_patternName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StringDataValidationRules.patternName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_patternName = value;
            },
            enumerable: true
        });

        Object.defineProperty(StringDataValidationRules.prototype, 'customRegex', {
            get: function() { return this.__prop_customRegex; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StringDataValidationRules.customRegex, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_customRegex = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StringDataValidationRules, '__type', { value: 'urn:inin.com:ipa:stringDataValidationRules' });

    Object.defineProperty(StringDataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true },
                'limitToList': { required: false, nullable: true },
                'allowNotSet': { required: false, nullable: true },
                'minLength': { required: false, nullable: true },
                'maxLength': { required: false, nullable: true },
                'trim': { required: false, nullable: true },
                'patternType': { required: false, nullable: true },
                'patternName': { required: false, nullable: true },
                'customRegex': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:stringDataValidationRules'] = StringDataValidationRules;

    return StringDataValidationRules;
}());

var TimeDataValidationRules = (function(){
    var hasProps = false;

    function TimeDataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:timeDataValidationRules', enumerable: true });
        }

        TimeDataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(TimeDataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(TimeDataValidationRules.prototype, 'minVal', {
            get: function() { return this.__prop_minVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for TimeDataValidationRules.minVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeDataValidationRules.prototype, 'maxVal', {
            get: function() { return this.__prop_maxVal; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for TimeDataValidationRules.maxVal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxVal = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeDataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for TimeDataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeDataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for TimeDataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeDataValidationRules.prototype, 'limitToList', {
            get: function() { return this.__prop_limitToList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for TimeDataValidationRules.limitToList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_limitToList = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeDataValidationRules.prototype, 'allowNotSet', {
            get: function() { return this.__prop_allowNotSet; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for TimeDataValidationRules.allowNotSet, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowNotSet = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TimeDataValidationRules, '__type', { value: 'urn:inin.com:ipa:timeDataValidationRules' });

    Object.defineProperty(TimeDataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minVal': { required: false, nullable: true },
                'maxVal': { required: false, nullable: true },
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true },
                'limitToList': { required: false, nullable: true },
                'allowNotSet': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:timeDataValidationRules'] = TimeDataValidationRules;

    return TimeDataValidationRules;
}());

var UriDataValidationRules = (function(){
    var hasProps = false;

    function UriDataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:uriDataValidationRules', enumerable: true });
        }

        UriDataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(UriDataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(UriDataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for UriDataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(UriDataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for UriDataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UriDataValidationRules, '__type', { value: 'urn:inin.com:ipa:uriDataValidationRules' });

    Object.defineProperty(UriDataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:uriDataValidationRules'] = UriDataValidationRules;

    return UriDataValidationRules;
}());

var UserQueueDataValidationRules = (function(){
    var hasProps = false;

    function UserQueueDataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:userQueueDataValidationRules', enumerable: true });
        }

        UserQueueDataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserQueueDataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(UserQueueDataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for UserQueueDataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserQueueDataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for UserQueueDataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserQueueDataValidationRules.prototype, 'limitToList', {
            get: function() { return this.__prop_limitToList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof UserQueueValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new UserQueueValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UserQueueDataValidationRules.limitToList: ' + e.message);
                    }
                }

                this.__prop_limitToList = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserQueueDataValidationRules.prototype, 'allowNotSet', {
            get: function() { return this.__prop_allowNotSet; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for UserQueueDataValidationRules.allowNotSet, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowNotSet = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserQueueDataValidationRules, '__type', { value: 'urn:inin.com:ipa:userQueueDataValidationRules' });

    Object.defineProperty(UserQueueDataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true },
                'limitToList': { required: false, nullable: true },
                'allowNotSet': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:userQueueDataValidationRules'] = UserQueueDataValidationRules;

    return UserQueueDataValidationRules;
}());

var WorkgroupQueueDataValidationRules = (function(){
    var hasProps = false;

    function WorkgroupQueueDataValidationRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:workgroupQueueDataValidationRules', enumerable: true });
        }

        WorkgroupQueueDataValidationRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupQueueDataValidationRules, BaseDataValidationRules);

    function defineProps() {
        Object.defineProperty(WorkgroupQueueDataValidationRules.prototype, 'minItems', {
            get: function() { return this.__prop_minItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for WorkgroupQueueDataValidationRules.minItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(WorkgroupQueueDataValidationRules.prototype, 'maxItems', {
            get: function() { return this.__prop_maxItems; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for WorkgroupQueueDataValidationRules.maxItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(WorkgroupQueueDataValidationRules.prototype, 'limitToList', {
            get: function() { return this.__prop_limitToList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for WorkgroupQueueDataValidationRules.limitToList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_limitToList = value;
            },
            enumerable: true
        });

        Object.defineProperty(WorkgroupQueueDataValidationRules.prototype, 'allowNotSet', {
            get: function() { return this.__prop_allowNotSet; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for WorkgroupQueueDataValidationRules.allowNotSet, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowNotSet = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupQueueDataValidationRules, '__type', { value: 'urn:inin.com:ipa:workgroupQueueDataValidationRules' });

    Object.defineProperty(WorkgroupQueueDataValidationRules, '__propInfo', {
        get: function() {
            var pi = {
                'minItems': { required: false, nullable: true },
                'maxItems': { required: false, nullable: true },
                'limitToList': { required: false, nullable: true },
                'allowNotSet': { required: false, nullable: true }
            };
            if (BaseDataValidationRules.__propInfo) { _util.extend(pi, BaseDataValidationRules.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:workgroupQueueDataValidationRules'] = WorkgroupQueueDataValidationRules;

    return WorkgroupQueueDataValidationRules;
}());

var ComplexTypeDef = (function(){
    var hasProps = false;

    function ComplexTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:complexTypeDef', enumerable: true });
        }

        ComplexTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(ComplexTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(ComplexTypeDef.prototype, 'props', {
            get: function() { return this.__prop_props; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof BasePropDef); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new BasePropDef(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ComplexTypeDef.props: ' + e.message);
                    }
                }

                this.__prop_props = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ComplexTypeDef, '__type', { value: 'urn:inin.com:ipa:complexTypeDef' });

    Object.defineProperty(ComplexTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'props': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:complexTypeDef'] = ComplexTypeDef;

    return ComplexTypeDef;
}());

var BasePropDefBasicSimple = (function(){
    var hasProps = false;

    function BasePropDefBasicSimple() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:basePropDefBasicSimple', enumerable: true });
        }

        BasePropDefBasicSimple._super.constructor.apply(this, arguments);
    }
    _util.inherits(BasePropDefBasicSimple, BasePropDef);

    function defineProps() {
        Object.defineProperty(BasePropDefBasicSimple.prototype, 'refId', {
            get: function() { return this.__prop_refId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for BasePropDefBasicSimple.refId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_refId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BasePropDefBasicSimple, '__type', { value: 'urn:inin.com:ipa:basePropDefBasicSimple' });

    Object.defineProperty(BasePropDefBasicSimple, '__propInfo', {
        get: function() {
            var pi = {
                'refId': { required: false, nullable: true }
            };
            if (BasePropDef.__propInfo) { _util.extend(pi, BasePropDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:basePropDefBasicSimple'] = BasePropDefBasicSimple;

    return BasePropDefBasicSimple;
}());

var ComplexPropDef = (function(){
    var hasProps = false;

    function ComplexPropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:complexPropDef', enumerable: true });
        }

        ComplexPropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(ComplexPropDef, BasePropDef);

    function defineProps() {
        Object.defineProperty(ComplexPropDef.prototype, 'refId', {
            get: function() { return this.__prop_refId; },
            set: function(value) {
                if (!(_util.isString(value) || value === null)) {
                    throw new TypeError('Expected type String for ComplexPropDef.refId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_refId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ComplexPropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof ComplexPropDefInitialValuesItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new ComplexPropDefInitialValuesItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ComplexPropDef.initialValues: ' + e.message);
                    }
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ComplexPropDef, '__type', { value: 'urn:inin.com:ipa:complexPropDef' });

    Object.defineProperty(ComplexPropDef, '__propInfo', {
        get: function() {
            var pi = {
                'refId': { required: true, nullable: true },
                'initialValues': { required: false, nullable: true }
            };
            if (BasePropDef.__propInfo) { _util.extend(pi, BasePropDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:complexPropDef'] = ComplexPropDef;

    return ComplexPropDef;
}());

var BasePropDefInitialValuesItemSing = (function(){
    var hasProps = false;

    function BasePropDefInitialValuesItemSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:basePropDefInitialValuesItemSing', enumerable: true });
        }

        BasePropDefInitialValuesItemSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(BasePropDefInitialValuesItemSing, BasePropDefInitialValuesItem);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(BasePropDefInitialValuesItemSing, '__type', { value: 'urn:inin.com:ipa:basePropDefInitialValuesItemSing' });

    Object.defineProperty(BasePropDefInitialValuesItemSing, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (BasePropDefInitialValuesItem.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItem.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:basePropDefInitialValuesItemSing'] = BasePropDefInitialValuesItemSing;

    return BasePropDefInitialValuesItemSing;
}());

var BasePropDefInitialValuesItemColl = (function(){
    var hasProps = false;

    function BasePropDefInitialValuesItemColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:basePropDefInitialValuesItemColl', enumerable: true });
        }

        BasePropDefInitialValuesItemColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(BasePropDefInitialValuesItemColl, BasePropDefInitialValuesItem);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(BasePropDefInitialValuesItemColl, '__type', { value: 'urn:inin.com:ipa:basePropDefInitialValuesItemColl' });

    Object.defineProperty(BasePropDefInitialValuesItemColl, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (BasePropDefInitialValuesItem.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItem.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:basePropDefInitialValuesItemColl'] = BasePropDefInitialValuesItemColl;

    return BasePropDefInitialValuesItemColl;
}());

var CurrencyTypeDef = (function(){
    var hasProps = false;

    function CurrencyTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:currencyTypeDef', enumerable: true });
        }

        CurrencyTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrencyTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(CurrencyTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof CurrencyValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new CurrencyValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting CurrencyTypeDef.initialValues: ' + e.message);
                    }
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrencyTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof CurrencyDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new CurrencyDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting CurrencyTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CurrencyTypeDef, '__type', { value: 'urn:inin.com:ipa:currencyTypeDef' });

    Object.defineProperty(CurrencyTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:currencyTypeDef'] = CurrencyTypeDef;

    return CurrencyTypeDef;
}());

var DateTypeDef = (function(){
    var hasProps = false;

    function DateTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dateTypeDef', enumerable: true });
        }

        DateTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(DateTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(DateTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for DateTypeDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(DateTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof DateDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new DateDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting DateTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DateTypeDef, '__type', { value: 'urn:inin.com:ipa:dateTypeDef' });

    Object.defineProperty(DateTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dateTypeDef'] = DateTypeDef;

    return DateTypeDef;
}());

var DateTimeTypeDef = (function(){
    var hasProps = false;

    function DateTimeTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dateTimeTypeDef', enumerable: true });
        }

        DateTimeTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(DateTimeTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(DateTimeTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for DateTimeTypeDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(DateTimeTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof DateTimeDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new DateTimeDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting DateTimeTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DateTimeTypeDef, '__type', { value: 'urn:inin.com:ipa:dateTimeTypeDef' });

    Object.defineProperty(DateTimeTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dateTimeTypeDef'] = DateTimeTypeDef;

    return DateTimeTypeDef;
}());

var DecimalTypeDef = (function(){
    var hasProps = false;

    function DecimalTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:decimalTypeDef', enumerable: true });
        }

        DecimalTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(DecimalTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(DecimalTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for DecimalTypeDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(DecimalTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof DecimaldataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new DecimaldataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting DecimalTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DecimalTypeDef, '__type', { value: 'urn:inin.com:ipa:decimalTypeDef' });

    Object.defineProperty(DecimalTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:decimalTypeDef'] = DecimalTypeDef;

    return DecimalTypeDef;
}());

var DurationTypeDef = (function(){
    var hasProps = false;

    function DurationTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:durationTypeDef', enumerable: true });
        }

        DurationTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(DurationTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(DurationTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for DurationTypeDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(DurationTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof DurationDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new DurationDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting DurationTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DurationTypeDef, '__type', { value: 'urn:inin.com:ipa:durationTypeDef' });

    Object.defineProperty(DurationTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:durationTypeDef'] = DurationTypeDef;

    return DurationTypeDef;
}());

var LongTypeDef = (function(){
    var hasProps = false;

    function LongTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:longTypeDef', enumerable: true });
        }

        LongTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(LongTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(LongTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for LongTypeDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(LongTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof LongdataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new LongdataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting LongTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LongTypeDef, '__type', { value: 'urn:inin.com:ipa:longTypeDef' });

    Object.defineProperty(LongTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:longTypeDef'] = LongTypeDef;

    return LongTypeDef;
}());

var MailboxTypeDef = (function(){
    var hasProps = false;

    function MailboxTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:mailboxTypeDef', enumerable: true });
        }

        MailboxTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(MailboxTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(MailboxTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof MailboxValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new MailboxValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MailboxTypeDef.initialValues: ' + e.message);
                    }
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(MailboxTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof MailboxDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new MailboxDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting MailboxTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MailboxTypeDef, '__type', { value: 'urn:inin.com:ipa:mailboxTypeDef' });

    Object.defineProperty(MailboxTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:mailboxTypeDef'] = MailboxTypeDef;

    return MailboxTypeDef;
}());

var SkillTypeDef = (function(){
    var hasProps = false;

    function SkillTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:skillTypeDef', enumerable: true });
        }

        SkillTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(SkillTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(SkillTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for SkillTypeDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof SkillDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new SkillDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting SkillTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SkillTypeDef, '__type', { value: 'urn:inin.com:ipa:skillTypeDef' });

    Object.defineProperty(SkillTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:skillTypeDef'] = SkillTypeDef;

    return SkillTypeDef;
}());

var StringTypeDef = (function(){
    var hasProps = false;

    function StringTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:stringTypeDef', enumerable: true });
        }

        StringTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(StringTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(StringTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for StringTypeDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(StringTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof StringDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new StringDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting StringTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StringTypeDef, '__type', { value: 'urn:inin.com:ipa:stringTypeDef' });

    Object.defineProperty(StringTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:stringTypeDef'] = StringTypeDef;

    return StringTypeDef;
}());

var TimeTypeDef = (function(){
    var hasProps = false;

    function TimeTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:timeTypeDef', enumerable: true });
        }

        TimeTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(TimeTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(TimeTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for TimeTypeDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof TimeDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new TimeDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting TimeTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TimeTypeDef, '__type', { value: 'urn:inin.com:ipa:timeTypeDef' });

    Object.defineProperty(TimeTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:timeTypeDef'] = TimeTypeDef;

    return TimeTypeDef;
}());

var UriTypeDef = (function(){
    var hasProps = false;

    function UriTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:uriTypeDef', enumerable: true });
        }

        UriTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(UriTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(UriTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for UriTypeDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(UriTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof UriDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new UriDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting UriTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UriTypeDef, '__type', { value: 'urn:inin.com:ipa:uriTypeDef' });

    Object.defineProperty(UriTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:uriTypeDef'] = UriTypeDef;

    return UriTypeDef;
}());

var UserQueueTypeDef = (function(){
    var hasProps = false;

    function UserQueueTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:userQueueTypeDef', enumerable: true });
        }

        UserQueueTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserQueueTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(UserQueueTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof UserQueueValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new UserQueueValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UserQueueTypeDef.initialValues: ' + e.message);
                    }
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserQueueTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof UserQueueDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new UserQueueDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserQueueTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserQueueTypeDef, '__type', { value: 'urn:inin.com:ipa:userQueueTypeDef' });

    Object.defineProperty(UserQueueTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:userQueueTypeDef'] = UserQueueTypeDef;

    return UserQueueTypeDef;
}());

var WorkgroupQueueTypeDef = (function(){
    var hasProps = false;

    function WorkgroupQueueTypeDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:workgroupQueueTypeDef', enumerable: true });
        }

        WorkgroupQueueTypeDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupQueueTypeDef, BaseTypeDef);

    function defineProps() {
        Object.defineProperty(WorkgroupQueueTypeDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for WorkgroupQueueTypeDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(WorkgroupQueueTypeDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof WorkgroupQueueDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new WorkgroupQueueDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting WorkgroupQueueTypeDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupQueueTypeDef, '__type', { value: 'urn:inin.com:ipa:workgroupQueueTypeDef' });

    Object.defineProperty(WorkgroupQueueTypeDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BaseTypeDef.__propInfo) { _util.extend(pi, BaseTypeDef.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:workgroupQueueTypeDef'] = WorkgroupQueueTypeDef;

    return WorkgroupQueueTypeDef;
}());

var CurrentPageSubscriptionCommandCompleteEventArgs = (function(){
    var hasProps = false;

    function CurrentPageSubscriptionCommandCompleteEventArgs() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:currentPageSubscriptionCommandCompleteEventArgs', enumerable: true });
        }

        CurrentPageSubscriptionCommandCompleteEventArgs._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrentPageSubscriptionCommandCompleteEventArgs, CurrentPageSubscriptionBaseEventArgs);

    function defineProps() {
        Object.defineProperty(CurrentPageSubscriptionCommandCompleteEventArgs.prototype, 'requestId', {
            get: function() { return this.__prop_requestId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CurrentPageSubscriptionCommandCompleteEventArgs.requestId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_requestId = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrentPageSubscriptionCommandCompleteEventArgs.prototype, 'error', {
            get: function() { return this.__prop_error; },
            set: function(value) {
                if (!(value instanceof Common.Error || value === null)) {
                    try {
                        value = new Common.Error(value);
                    } catch (e) {
                        throw new TypeError('Error setting CurrentPageSubscriptionCommandCompleteEventArgs.error: ' + e.message);
                    }
                }

                this.__prop_error = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrentPageSubscriptionCommandCompleteEventArgs.prototype, 'invalidDataItems', {
            get: function() { return this.__prop_invalidDataItems; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DataReference); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new DataReference(item); });
                    } catch (e) {
                        throw new TypeError('Error setting CurrentPageSubscriptionCommandCompleteEventArgs.invalidDataItems: ' + e.message);
                    }
                }

                this.__prop_invalidDataItems = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CurrentPageSubscriptionCommandCompleteEventArgs, '__type', { value: 'urn:inin.com:ipa:currentPageSubscriptionCommandCompleteEventArgs' });

    Object.defineProperty(CurrentPageSubscriptionCommandCompleteEventArgs, '__propInfo', {
        get: function() {
            var pi = {
                'requestId': { required: true, nullable: false },
                'error': { required: true, nullable: true },
                'invalidDataItems': { required: false, nullable: false }
            };
            if (CurrentPageSubscriptionBaseEventArgs.__propInfo) { _util.extend(pi, CurrentPageSubscriptionBaseEventArgs.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:currentPageSubscriptionCommandCompleteEventArgs'] = CurrentPageSubscriptionCommandCompleteEventArgs;

    return CurrentPageSubscriptionCommandCompleteEventArgs;
}());

var CurrentPageSubscriptionShowPageEventArgs = (function(){
    var hasProps = false;

    function CurrentPageSubscriptionShowPageEventArgs() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:currentPageSubscriptionShowPageEventArgs', enumerable: true });
        }

        CurrentPageSubscriptionShowPageEventArgs._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrentPageSubscriptionShowPageEventArgs, CurrentPageSubscriptionBaseEventArgs);

    function defineProps() {
        Object.defineProperty(CurrentPageSubscriptionShowPageEventArgs.prototype, 'workItemDynamicDetails', {
            get: function() { return this.__prop_workItemDynamicDetails; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CurrentPageSubscriptionShowPageEventArgs.workItemDynamicDetails, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workItemDynamicDetails = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrentPageSubscriptionShowPageEventArgs.prototype, 'pageInstanceId', {
            get: function() { return this.__prop_pageInstanceId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CurrentPageSubscriptionShowPageEventArgs.pageInstanceId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pageInstanceId = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrentPageSubscriptionShowPageEventArgs.prototype, 'runtimeValues', {
            get: function() { return this.__prop_runtimeValues; },
            set: function(value) {
                if (!(value instanceof RuntimeDataValuesList || value === void 0)) {
                    try {
                        value = new RuntimeDataValuesList(value);
                    } catch (e) {
                        throw new TypeError('Error setting CurrentPageSubscriptionShowPageEventArgs.runtimeValues: ' + e.message);
                    }
                }

                this.__prop_runtimeValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrentPageSubscriptionShowPageEventArgs.prototype, 'pageAndDataDefinitions', {
            get: function() { return this.__prop_pageAndDataDefinitions; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CurrentPageSubscriptionShowPageEventArgs.pageAndDataDefinitions, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pageAndDataDefinitions = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CurrentPageSubscriptionShowPageEventArgs, '__type', { value: 'urn:inin.com:ipa:currentPageSubscriptionShowPageEventArgs' });

    Object.defineProperty(CurrentPageSubscriptionShowPageEventArgs, '__propInfo', {
        get: function() {
            var pi = {
                'workItemDynamicDetails': { required: true, nullable: false },
                'pageInstanceId': { required: true, nullable: false },
                'runtimeValues': { required: false, nullable: false },
                'pageAndDataDefinitions': { required: true, nullable: false }
            };
            if (CurrentPageSubscriptionBaseEventArgs.__propInfo) { _util.extend(pi, CurrentPageSubscriptionBaseEventArgs.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:currentPageSubscriptionShowPageEventArgs'] = CurrentPageSubscriptionShowPageEventArgs;

    return CurrentPageSubscriptionShowPageEventArgs;
}());

var BooleanDataInstSing = (function(){
    var hasProps = false;

    function BooleanDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:booleanDataInstSing', enumerable: true });
        }

        BooleanDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(BooleanDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(BooleanDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for BooleanDataInstSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BooleanDataInstSing, '__type', { value: 'urn:inin.com:ipa:booleanDataInstSing' });

    Object.defineProperty(BooleanDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:booleanDataInstSing'] = BooleanDataInstSing;

    return BooleanDataInstSing;
}());

var ComplexDataInstSing = (function(){
    var hasProps = false;

    function ComplexDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:complexDataInstSing', enumerable: true });
        }

        ComplexDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(ComplexDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(ComplexDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof ComplexValue || value === void 0 || value === null)) {
                    try {
                        value = new ComplexValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting ComplexDataInstSing.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ComplexDataInstSing, '__type', { value: 'urn:inin.com:ipa:complexDataInstSing' });

    Object.defineProperty(ComplexDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:complexDataInstSing'] = ComplexDataInstSing;

    return ComplexDataInstSing;
}());

var BooleanPropValSing = (function(){
    var hasProps = false;

    function BooleanPropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:booleanPropValSing', enumerable: true });
        }

        BooleanPropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(BooleanPropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(BooleanPropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for BooleanPropValSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BooleanPropValSing, '__type', { value: 'urn:inin.com:ipa:booleanPropValSing' });

    Object.defineProperty(BooleanPropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:booleanPropValSing'] = BooleanPropValSing;

    return BooleanPropValSing;
}());

var ComplexPropValSing = (function(){
    var hasProps = false;

    function ComplexPropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:complexPropValSing', enumerable: true });
        }

        ComplexPropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(ComplexPropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(ComplexPropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof ComplexValue || value === void 0 || value === null)) {
                    try {
                        value = new ComplexValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting ComplexPropValSing.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ComplexPropValSing, '__type', { value: 'urn:inin.com:ipa:complexPropValSing' });

    Object.defineProperty(ComplexPropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:complexPropValSing'] = ComplexPropValSing;

    return ComplexPropValSing;
}());

var CurrencyPropValSing = (function(){
    var hasProps = false;

    function CurrencyPropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:currencyPropValSing', enumerable: true });
        }

        CurrencyPropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrencyPropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(CurrencyPropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof CurrencyValue || value === void 0 || value === null)) {
                    try {
                        value = new CurrencyValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting CurrencyPropValSing.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CurrencyPropValSing, '__type', { value: 'urn:inin.com:ipa:currencyPropValSing' });

    Object.defineProperty(CurrencyPropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:currencyPropValSing'] = CurrencyPropValSing;

    return CurrencyPropValSing;
}());

var DatePropValSing = (function(){
    var hasProps = false;

    function DatePropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:datePropValSing', enumerable: true });
        }

        DatePropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(DatePropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(DatePropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DatePropValSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DatePropValSing, '__type', { value: 'urn:inin.com:ipa:datePropValSing' });

    Object.defineProperty(DatePropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:datePropValSing'] = DatePropValSing;

    return DatePropValSing;
}());

var DateTimePropValSing = (function(){
    var hasProps = false;

    function DateTimePropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dateTimePropValSing', enumerable: true });
        }

        DateTimePropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(DateTimePropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(DateTimePropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DateTimePropValSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DateTimePropValSing, '__type', { value: 'urn:inin.com:ipa:dateTimePropValSing' });

    Object.defineProperty(DateTimePropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dateTimePropValSing'] = DateTimePropValSing;

    return DateTimePropValSing;
}());

var DecimalPropValSing = (function(){
    var hasProps = false;

    function DecimalPropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:decimalPropValSing', enumerable: true });
        }

        DecimalPropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(DecimalPropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(DecimalPropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DecimalPropValSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DecimalPropValSing, '__type', { value: 'urn:inin.com:ipa:decimalPropValSing' });

    Object.defineProperty(DecimalPropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:decimalPropValSing'] = DecimalPropValSing;

    return DecimalPropValSing;
}());

var DurationPropValSing = (function(){
    var hasProps = false;

    function DurationPropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:durationPropValSing', enumerable: true });
        }

        DurationPropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(DurationPropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(DurationPropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DurationPropValSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DurationPropValSing, '__type', { value: 'urn:inin.com:ipa:durationPropValSing' });

    Object.defineProperty(DurationPropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:durationPropValSing'] = DurationPropValSing;

    return DurationPropValSing;
}());

var LongPropValSing = (function(){
    var hasProps = false;

    function LongPropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:longPropValSing', enumerable: true });
        }

        LongPropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(LongPropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(LongPropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for LongPropValSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LongPropValSing, '__type', { value: 'urn:inin.com:ipa:longPropValSing' });

    Object.defineProperty(LongPropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:longPropValSing'] = LongPropValSing;

    return LongPropValSing;
}());

var MailboxPropValSing = (function(){
    var hasProps = false;

    function MailboxPropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:mailboxPropValSing', enumerable: true });
        }

        MailboxPropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(MailboxPropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(MailboxPropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof MailboxValue || value === void 0 || value === null)) {
                    try {
                        value = new MailboxValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting MailboxPropValSing.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MailboxPropValSing, '__type', { value: 'urn:inin.com:ipa:mailboxPropValSing' });

    Object.defineProperty(MailboxPropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:mailboxPropValSing'] = MailboxPropValSing;

    return MailboxPropValSing;
}());

var SkillPropValSing = (function(){
    var hasProps = false;

    function SkillPropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:skillPropValSing', enumerable: true });
        }

        SkillPropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(SkillPropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(SkillPropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SkillPropValSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SkillPropValSing, '__type', { value: 'urn:inin.com:ipa:skillPropValSing' });

    Object.defineProperty(SkillPropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:skillPropValSing'] = SkillPropValSing;

    return SkillPropValSing;
}());

var StringPropValSing = (function(){
    var hasProps = false;

    function StringPropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:stringPropValSing', enumerable: true });
        }

        StringPropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(StringPropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(StringPropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StringPropValSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StringPropValSing, '__type', { value: 'urn:inin.com:ipa:stringPropValSing' });

    Object.defineProperty(StringPropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:stringPropValSing'] = StringPropValSing;

    return StringPropValSing;
}());

var TimePropValSing = (function(){
    var hasProps = false;

    function TimePropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:timePropValSing', enumerable: true });
        }

        TimePropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(TimePropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(TimePropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for TimePropValSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TimePropValSing, '__type', { value: 'urn:inin.com:ipa:timePropValSing' });

    Object.defineProperty(TimePropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:timePropValSing'] = TimePropValSing;

    return TimePropValSing;
}());

var UriPropValSing = (function(){
    var hasProps = false;

    function UriPropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:uriPropValSing', enumerable: true });
        }

        UriPropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(UriPropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(UriPropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for UriPropValSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UriPropValSing, '__type', { value: 'urn:inin.com:ipa:uriPropValSing' });

    Object.defineProperty(UriPropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:uriPropValSing'] = UriPropValSing;

    return UriPropValSing;
}());

var UserQueuePropValSing = (function(){
    var hasProps = false;

    function UserQueuePropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:userQueuePropValSing', enumerable: true });
        }

        UserQueuePropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserQueuePropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(UserQueuePropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof UserQueueValue || value === void 0 || value === null)) {
                    try {
                        value = new UserQueueValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserQueuePropValSing.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserQueuePropValSing, '__type', { value: 'urn:inin.com:ipa:userQueuePropValSing' });

    Object.defineProperty(UserQueuePropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:userQueuePropValSing'] = UserQueuePropValSing;

    return UserQueuePropValSing;
}());

var WorkgroupQueuePropValSing = (function(){
    var hasProps = false;

    function WorkgroupQueuePropValSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:workgroupQueuePropValSing', enumerable: true });
        }

        WorkgroupQueuePropValSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupQueuePropValSing, BasePropValSing);

    function defineProps() {
        Object.defineProperty(WorkgroupQueuePropValSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for WorkgroupQueuePropValSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupQueuePropValSing, '__type', { value: 'urn:inin.com:ipa:workgroupQueuePropValSing' });

    Object.defineProperty(WorkgroupQueuePropValSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropValSing.__propInfo) { _util.extend(pi, BasePropValSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:workgroupQueuePropValSing'] = WorkgroupQueuePropValSing;

    return WorkgroupQueuePropValSing;
}());

var BooleanPropValColl = (function(){
    var hasProps = false;

    function BooleanPropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:booleanPropValColl', enumerable: true });
        }

        BooleanPropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(BooleanPropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(BooleanPropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof BooleanDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new BooleanDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting BooleanPropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BooleanPropValColl, '__type', { value: 'urn:inin.com:ipa:booleanPropValColl' });

    Object.defineProperty(BooleanPropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:booleanPropValColl'] = BooleanPropValColl;

    return BooleanPropValColl;
}());

var ComplexPropValColl = (function(){
    var hasProps = false;

    function ComplexPropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:complexPropValColl', enumerable: true });
        }

        ComplexPropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(ComplexPropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(ComplexPropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof BasePropVal); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new BasePropVal(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ComplexPropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ComplexPropValColl, '__type', { value: 'urn:inin.com:ipa:complexPropValColl' });

    Object.defineProperty(ComplexPropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:complexPropValColl'] = ComplexPropValColl;

    return ComplexPropValColl;
}());

var CurrencyPropValColl = (function(){
    var hasProps = false;

    function CurrencyPropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:currencyPropValColl', enumerable: true });
        }

        CurrencyPropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrencyPropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(CurrencyPropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof CurrencyDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new CurrencyDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting CurrencyPropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CurrencyPropValColl, '__type', { value: 'urn:inin.com:ipa:currencyPropValColl' });

    Object.defineProperty(CurrencyPropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:currencyPropValColl'] = CurrencyPropValColl;

    return CurrencyPropValColl;
}());

var DatePropValColl = (function(){
    var hasProps = false;

    function DatePropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:datePropValColl', enumerable: true });
        }

        DatePropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(DatePropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(DatePropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DatePropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DatePropValColl, '__type', { value: 'urn:inin.com:ipa:datePropValColl' });

    Object.defineProperty(DatePropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:datePropValColl'] = DatePropValColl;

    return DatePropValColl;
}());

var DateTimePropValColl = (function(){
    var hasProps = false;

    function DateTimePropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dateTimePropValColl', enumerable: true });
        }

        DateTimePropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(DateTimePropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(DateTimePropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DateTimePropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DateTimePropValColl, '__type', { value: 'urn:inin.com:ipa:dateTimePropValColl' });

    Object.defineProperty(DateTimePropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dateTimePropValColl'] = DateTimePropValColl;

    return DateTimePropValColl;
}());

var DecimalPropValColl = (function(){
    var hasProps = false;

    function DecimalPropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:decimalPropValColl', enumerable: true });
        }

        DecimalPropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(DecimalPropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(DecimalPropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DecimalPropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DecimalPropValColl, '__type', { value: 'urn:inin.com:ipa:decimalPropValColl' });

    Object.defineProperty(DecimalPropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:decimalPropValColl'] = DecimalPropValColl;

    return DecimalPropValColl;
}());

var DurationPropValColl = (function(){
    var hasProps = false;

    function DurationPropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:durationPropValColl', enumerable: true });
        }

        DurationPropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(DurationPropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(DurationPropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DurationPropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DurationPropValColl, '__type', { value: 'urn:inin.com:ipa:durationPropValColl' });

    Object.defineProperty(DurationPropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:durationPropValColl'] = DurationPropValColl;

    return DurationPropValColl;
}());

var LongPropValColl = (function(){
    var hasProps = false;

    function LongPropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:longPropValColl', enumerable: true });
        }

        LongPropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(LongPropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(LongPropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LongPropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LongPropValColl, '__type', { value: 'urn:inin.com:ipa:longPropValColl' });

    Object.defineProperty(LongPropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:longPropValColl'] = LongPropValColl;

    return LongPropValColl;
}());

var MailboxPropValColl = (function(){
    var hasProps = false;

    function MailboxPropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:mailboxPropValColl', enumerable: true });
        }

        MailboxPropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(MailboxPropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(MailboxPropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof MailboxDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new MailboxDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MailboxPropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MailboxPropValColl, '__type', { value: 'urn:inin.com:ipa:mailboxPropValColl' });

    Object.defineProperty(MailboxPropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:mailboxPropValColl'] = MailboxPropValColl;

    return MailboxPropValColl;
}());

var SkillPropValColl = (function(){
    var hasProps = false;

    function SkillPropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:skillPropValColl', enumerable: true });
        }

        SkillPropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(SkillPropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(SkillPropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SkillPropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SkillPropValColl, '__type', { value: 'urn:inin.com:ipa:skillPropValColl' });

    Object.defineProperty(SkillPropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:skillPropValColl'] = SkillPropValColl;

    return SkillPropValColl;
}());

var StringPropValColl = (function(){
    var hasProps = false;

    function StringPropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:stringPropValColl', enumerable: true });
        }

        StringPropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(StringPropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(StringPropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StringPropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StringPropValColl, '__type', { value: 'urn:inin.com:ipa:stringPropValColl' });

    Object.defineProperty(StringPropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:stringPropValColl'] = StringPropValColl;

    return StringPropValColl;
}());

var TimePropValColl = (function(){
    var hasProps = false;

    function TimePropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:timePropValColl', enumerable: true });
        }

        TimePropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(TimePropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(TimePropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting TimePropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TimePropValColl, '__type', { value: 'urn:inin.com:ipa:timePropValColl' });

    Object.defineProperty(TimePropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:timePropValColl'] = TimePropValColl;

    return TimePropValColl;
}());

var UriPropValColl = (function(){
    var hasProps = false;

    function UriPropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:uriPropValColl', enumerable: true });
        }

        UriPropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(UriPropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(UriPropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UriPropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UriPropValColl, '__type', { value: 'urn:inin.com:ipa:uriPropValColl' });

    Object.defineProperty(UriPropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:uriPropValColl'] = UriPropValColl;

    return UriPropValColl;
}());

var UserQueuePropValColl = (function(){
    var hasProps = false;

    function UserQueuePropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:userQueuePropValColl', enumerable: true });
        }

        UserQueuePropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserQueuePropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(UserQueuePropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof UserQueueDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new UserQueueDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UserQueuePropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserQueuePropValColl, '__type', { value: 'urn:inin.com:ipa:userQueuePropValColl' });

    Object.defineProperty(UserQueuePropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:userQueuePropValColl'] = UserQueuePropValColl;

    return UserQueuePropValColl;
}());

var WorkgroupQueuePropValColl = (function(){
    var hasProps = false;

    function WorkgroupQueuePropValColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:workgroupQueuePropValColl', enumerable: true });
        }

        WorkgroupQueuePropValColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupQueuePropValColl, BasePropValColl);

    function defineProps() {
        Object.defineProperty(WorkgroupQueuePropValColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WorkgroupQueuePropValColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupQueuePropValColl, '__type', { value: 'urn:inin.com:ipa:workgroupQueuePropValColl' });

    Object.defineProperty(WorkgroupQueuePropValColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BasePropValColl.__propInfo) { _util.extend(pi, BasePropValColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:workgroupQueuePropValColl'] = WorkgroupQueuePropValColl;

    return WorkgroupQueuePropValColl;
}());

var CurrencyDataInstSing = (function(){
    var hasProps = false;

    function CurrencyDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:currencyDataInstSing', enumerable: true });
        }

        CurrencyDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrencyDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(CurrencyDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof CurrencyValue || value === void 0 || value === null)) {
                    try {
                        value = new CurrencyValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting CurrencyDataInstSing.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CurrencyDataInstSing, '__type', { value: 'urn:inin.com:ipa:currencyDataInstSing' });

    Object.defineProperty(CurrencyDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:currencyDataInstSing'] = CurrencyDataInstSing;

    return CurrencyDataInstSing;
}());

var DateDataInstSing = (function(){
    var hasProps = false;

    function DateDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dateDataInstSing', enumerable: true });
        }

        DateDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(DateDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(DateDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DateDataInstSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DateDataInstSing, '__type', { value: 'urn:inin.com:ipa:dateDataInstSing' });

    Object.defineProperty(DateDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dateDataInstSing'] = DateDataInstSing;

    return DateDataInstSing;
}());

var DateTimeDataInstSing = (function(){
    var hasProps = false;

    function DateTimeDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dateTimeDataInstSing', enumerable: true });
        }

        DateTimeDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(DateTimeDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(DateTimeDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DateTimeDataInstSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DateTimeDataInstSing, '__type', { value: 'urn:inin.com:ipa:dateTimeDataInstSing' });

    Object.defineProperty(DateTimeDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dateTimeDataInstSing'] = DateTimeDataInstSing;

    return DateTimeDataInstSing;
}());

var DecimalDataInstSing = (function(){
    var hasProps = false;

    function DecimalDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:decimalDataInstSing', enumerable: true });
        }

        DecimalDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(DecimalDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(DecimalDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DecimalDataInstSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DecimalDataInstSing, '__type', { value: 'urn:inin.com:ipa:decimalDataInstSing' });

    Object.defineProperty(DecimalDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:decimalDataInstSing'] = DecimalDataInstSing;

    return DecimalDataInstSing;
}());

var DurationDataInstSing = (function(){
    var hasProps = false;

    function DurationDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:durationDataInstSing', enumerable: true });
        }

        DurationDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(DurationDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(DurationDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DurationDataInstSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DurationDataInstSing, '__type', { value: 'urn:inin.com:ipa:durationDataInstSing' });

    Object.defineProperty(DurationDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:durationDataInstSing'] = DurationDataInstSing;

    return DurationDataInstSing;
}());

var LongDataInstSing = (function(){
    var hasProps = false;

    function LongDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:longDataInstSing', enumerable: true });
        }

        LongDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(LongDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(LongDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for LongDataInstSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LongDataInstSing, '__type', { value: 'urn:inin.com:ipa:longDataInstSing' });

    Object.defineProperty(LongDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:longDataInstSing'] = LongDataInstSing;

    return LongDataInstSing;
}());

var MailboxDataInstSing = (function(){
    var hasProps = false;

    function MailboxDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:mailboxDataInstSing', enumerable: true });
        }

        MailboxDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(MailboxDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(MailboxDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof MailboxValue || value === void 0 || value === null)) {
                    try {
                        value = new MailboxValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting MailboxDataInstSing.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MailboxDataInstSing, '__type', { value: 'urn:inin.com:ipa:mailboxDataInstSing' });

    Object.defineProperty(MailboxDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:mailboxDataInstSing'] = MailboxDataInstSing;

    return MailboxDataInstSing;
}());

var SkillDataInstSing = (function(){
    var hasProps = false;

    function SkillDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:skillDataInstSing', enumerable: true });
        }

        SkillDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(SkillDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(SkillDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SkillDataInstSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SkillDataInstSing, '__type', { value: 'urn:inin.com:ipa:skillDataInstSing' });

    Object.defineProperty(SkillDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:skillDataInstSing'] = SkillDataInstSing;

    return SkillDataInstSing;
}());

var StringDataInstSing = (function(){
    var hasProps = false;

    function StringDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:stringDataInstSing', enumerable: true });
        }

        StringDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(StringDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(StringDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StringDataInstSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StringDataInstSing, '__type', { value: 'urn:inin.com:ipa:stringDataInstSing' });

    Object.defineProperty(StringDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:stringDataInstSing'] = StringDataInstSing;

    return StringDataInstSing;
}());

var TimeDataInstSing = (function(){
    var hasProps = false;

    function TimeDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:timeDataInstSing', enumerable: true });
        }

        TimeDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(TimeDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(TimeDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for TimeDataInstSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TimeDataInstSing, '__type', { value: 'urn:inin.com:ipa:timeDataInstSing' });

    Object.defineProperty(TimeDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:timeDataInstSing'] = TimeDataInstSing;

    return TimeDataInstSing;
}());

var UriDataInstSing = (function(){
    var hasProps = false;

    function UriDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:uriDataInstSing', enumerable: true });
        }

        UriDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(UriDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(UriDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for UriDataInstSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UriDataInstSing, '__type', { value: 'urn:inin.com:ipa:uriDataInstSing' });

    Object.defineProperty(UriDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:uriDataInstSing'] = UriDataInstSing;

    return UriDataInstSing;
}());

var UserQueueDataInstSing = (function(){
    var hasProps = false;

    function UserQueueDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:userQueueDataInstSing', enumerable: true });
        }

        UserQueueDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserQueueDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(UserQueueDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof UserQueueValue || value === void 0 || value === null)) {
                    try {
                        value = new UserQueueValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserQueueDataInstSing.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserQueueDataInstSing, '__type', { value: 'urn:inin.com:ipa:userQueueDataInstSing' });

    Object.defineProperty(UserQueueDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:userQueueDataInstSing'] = UserQueueDataInstSing;

    return UserQueueDataInstSing;
}());

var WorkgroupQueueDataInstSing = (function(){
    var hasProps = false;

    function WorkgroupQueueDataInstSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:workgroupQueueDataInstSing', enumerable: true });
        }

        WorkgroupQueueDataInstSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupQueueDataInstSing, BaseDataInstSing);

    function defineProps() {
        Object.defineProperty(WorkgroupQueueDataInstSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for WorkgroupQueueDataInstSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupQueueDataInstSing, '__type', { value: 'urn:inin.com:ipa:workgroupQueueDataInstSing' });

    Object.defineProperty(WorkgroupQueueDataInstSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BaseDataInstSing.__propInfo) { _util.extend(pi, BaseDataInstSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:workgroupQueueDataInstSing'] = WorkgroupQueueDataInstSing;

    return WorkgroupQueueDataInstSing;
}());

var BooleanDataInstColl = (function(){
    var hasProps = false;

    function BooleanDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:booleanDataInstColl', enumerable: true });
        }

        BooleanDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(BooleanDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(BooleanDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof BooleanDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new BooleanDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting BooleanDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BooleanDataInstColl, '__type', { value: 'urn:inin.com:ipa:booleanDataInstColl' });

    Object.defineProperty(BooleanDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:booleanDataInstColl'] = BooleanDataInstColl;

    return BooleanDataInstColl;
}());

var ComplexDataInstColl = (function(){
    var hasProps = false;

    function ComplexDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:complexDataInstColl', enumerable: true });
        }

        ComplexDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(ComplexDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(ComplexDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof ComplexDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new ComplexDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ComplexDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ComplexDataInstColl, '__type', { value: 'urn:inin.com:ipa:complexDataInstColl' });

    Object.defineProperty(ComplexDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:complexDataInstColl'] = ComplexDataInstColl;

    return ComplexDataInstColl;
}());

var CurrencyDataInstColl = (function(){
    var hasProps = false;

    function CurrencyDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:currencyDataInstColl', enumerable: true });
        }

        CurrencyDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrencyDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(CurrencyDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof CurrencyDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new CurrencyDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting CurrencyDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CurrencyDataInstColl, '__type', { value: 'urn:inin.com:ipa:currencyDataInstColl' });

    Object.defineProperty(CurrencyDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:currencyDataInstColl'] = CurrencyDataInstColl;

    return CurrencyDataInstColl;
}());

var DateDataInstColl = (function(){
    var hasProps = false;

    function DateDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dateDataInstColl', enumerable: true });
        }

        DateDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(DateDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(DateDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DateDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DateDataInstColl, '__type', { value: 'urn:inin.com:ipa:dateDataInstColl' });

    Object.defineProperty(DateDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dateDataInstColl'] = DateDataInstColl;

    return DateDataInstColl;
}());

var DateTimeDataInstColl = (function(){
    var hasProps = false;

    function DateTimeDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dateTimeDataInstColl', enumerable: true });
        }

        DateTimeDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(DateTimeDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(DateTimeDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DateTimeDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DateTimeDataInstColl, '__type', { value: 'urn:inin.com:ipa:dateTimeDataInstColl' });

    Object.defineProperty(DateTimeDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dateTimeDataInstColl'] = DateTimeDataInstColl;

    return DateTimeDataInstColl;
}());

var DecimalDataInstColl = (function(){
    var hasProps = false;

    function DecimalDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:decimalDataInstColl', enumerable: true });
        }

        DecimalDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(DecimalDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(DecimalDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DecimalDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DecimalDataInstColl, '__type', { value: 'urn:inin.com:ipa:decimalDataInstColl' });

    Object.defineProperty(DecimalDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:decimalDataInstColl'] = DecimalDataInstColl;

    return DecimalDataInstColl;
}());

var DurationDataInstColl = (function(){
    var hasProps = false;

    function DurationDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:durationDataInstColl', enumerable: true });
        }

        DurationDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(DurationDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(DurationDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DurationDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DurationDataInstColl, '__type', { value: 'urn:inin.com:ipa:durationDataInstColl' });

    Object.defineProperty(DurationDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:durationDataInstColl'] = DurationDataInstColl;

    return DurationDataInstColl;
}());

var LongDataInstColl = (function(){
    var hasProps = false;

    function LongDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:longDataInstColl', enumerable: true });
        }

        LongDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(LongDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(LongDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LongDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LongDataInstColl, '__type', { value: 'urn:inin.com:ipa:longDataInstColl' });

    Object.defineProperty(LongDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:longDataInstColl'] = LongDataInstColl;

    return LongDataInstColl;
}());

var MailboxDataInstColl = (function(){
    var hasProps = false;

    function MailboxDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:mailboxDataInstColl', enumerable: true });
        }

        MailboxDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(MailboxDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(MailboxDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof MailboxDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new MailboxDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MailboxDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MailboxDataInstColl, '__type', { value: 'urn:inin.com:ipa:mailboxDataInstColl' });

    Object.defineProperty(MailboxDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:mailboxDataInstColl'] = MailboxDataInstColl;

    return MailboxDataInstColl;
}());

var SkillDataInstColl = (function(){
    var hasProps = false;

    function SkillDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:skillDataInstColl', enumerable: true });
        }

        SkillDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(SkillDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(SkillDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SkillDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SkillDataInstColl, '__type', { value: 'urn:inin.com:ipa:skillDataInstColl' });

    Object.defineProperty(SkillDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:skillDataInstColl'] = SkillDataInstColl;

    return SkillDataInstColl;
}());

var StringDataInstColl = (function(){
    var hasProps = false;

    function StringDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:stringDataInstColl', enumerable: true });
        }

        StringDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(StringDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(StringDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StringDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StringDataInstColl, '__type', { value: 'urn:inin.com:ipa:stringDataInstColl' });

    Object.defineProperty(StringDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:stringDataInstColl'] = StringDataInstColl;

    return StringDataInstColl;
}());

var TimeDataInstColl = (function(){
    var hasProps = false;

    function TimeDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:timeDataInstColl', enumerable: true });
        }

        TimeDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(TimeDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(TimeDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting TimeDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TimeDataInstColl, '__type', { value: 'urn:inin.com:ipa:timeDataInstColl' });

    Object.defineProperty(TimeDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:timeDataInstColl'] = TimeDataInstColl;

    return TimeDataInstColl;
}());

var UriDataInstColl = (function(){
    var hasProps = false;

    function UriDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:uriDataInstColl', enumerable: true });
        }

        UriDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(UriDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(UriDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UriDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UriDataInstColl, '__type', { value: 'urn:inin.com:ipa:uriDataInstColl' });

    Object.defineProperty(UriDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:uriDataInstColl'] = UriDataInstColl;

    return UriDataInstColl;
}());

var UserQueueDataInstColl = (function(){
    var hasProps = false;

    function UserQueueDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:userQueueDataInstColl', enumerable: true });
        }

        UserQueueDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserQueueDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(UserQueueDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof UserQueueDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new UserQueueDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UserQueueDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserQueueDataInstColl, '__type', { value: 'urn:inin.com:ipa:userQueueDataInstColl' });

    Object.defineProperty(UserQueueDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:userQueueDataInstColl'] = UserQueueDataInstColl;

    return UserQueueDataInstColl;
}());

var WorkgroupQueueDataInstColl = (function(){
    var hasProps = false;

    function WorkgroupQueueDataInstColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:workgroupQueueDataInstColl', enumerable: true });
        }

        WorkgroupQueueDataInstColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupQueueDataInstColl, BaseDataInstColl);

    function defineProps() {
        Object.defineProperty(WorkgroupQueueDataInstColl.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof StringDataInstCollItem); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new StringDataInstCollItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WorkgroupQueueDataInstColl.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupQueueDataInstColl, '__type', { value: 'urn:inin.com:ipa:workgroupQueueDataInstColl' });

    Object.defineProperty(WorkgroupQueueDataInstColl, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: false, nullable: true }
            };
            if (BaseDataInstColl.__propInfo) { _util.extend(pi, BaseDataInstColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:workgroupQueueDataInstColl'] = WorkgroupQueueDataInstColl;

    return WorkgroupQueueDataInstColl;
}());

var CurrentPageSubscriptionClosePageEventArgs = (function(){
    var hasProps = false;

    function CurrentPageSubscriptionClosePageEventArgs() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:currentPageSubscriptionClosePageEventArgs', enumerable: true });
        }

        CurrentPageSubscriptionClosePageEventArgs._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrentPageSubscriptionClosePageEventArgs, CurrentPageSubscriptionBaseEventArgs);

    function defineProps() {
        Object.defineProperty(CurrentPageSubscriptionClosePageEventArgs.prototype, 'closeReason', {
            get: function() { return this.__prop_closeReason; },
            set: function(value) {
                if (!(value instanceof ClosePageReason || value === void 0)) {
                    try {
                        value = new ClosePageReason(value);
                    } catch (e) {
                        throw new TypeError('Error setting CurrentPageSubscriptionClosePageEventArgs.closeReason: ' + e.message);
                    }
                }

                this.__prop_closeReason = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CurrentPageSubscriptionClosePageEventArgs, '__type', { value: 'urn:inin.com:ipa:currentPageSubscriptionClosePageEventArgs' });

    Object.defineProperty(CurrentPageSubscriptionClosePageEventArgs, '__propInfo', {
        get: function() {
            var pi = {
                'closeReason': { required: false, nullable: false }
            };
            if (CurrentPageSubscriptionBaseEventArgs.__propInfo) { _util.extend(pi, CurrentPageSubscriptionBaseEventArgs.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:currentPageSubscriptionClosePageEventArgs'] = CurrentPageSubscriptionClosePageEventArgs;

    return CurrentPageSubscriptionClosePageEventArgs;
}());

var BooleanPropDef = (function(){
    var hasProps = false;

    function BooleanPropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:booleanPropDef', enumerable: true });
        }

        BooleanPropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(BooleanPropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(BooleanPropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isBoolean(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean[] for BooleanPropDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(BooleanPropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof BooleanDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new BooleanDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting BooleanPropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BooleanPropDef, '__type', { value: 'urn:inin.com:ipa:booleanPropDef' });

    Object.defineProperty(BooleanPropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:booleanPropDef'] = BooleanPropDef;

    return BooleanPropDef;
}());

var CurrencyPropDef = (function(){
    var hasProps = false;

    function CurrencyPropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:currencyPropDef', enumerable: true });
        }

        CurrencyPropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(CurrencyPropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(CurrencyPropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof CurrencyValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new CurrencyValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting CurrencyPropDef.initialValues: ' + e.message);
                    }
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(CurrencyPropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof CurrencyDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new CurrencyDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting CurrencyPropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CurrencyPropDef, '__type', { value: 'urn:inin.com:ipa:currencyPropDef' });

    Object.defineProperty(CurrencyPropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:currencyPropDef'] = CurrencyPropDef;

    return CurrencyPropDef;
}());

var DatePropDef = (function(){
    var hasProps = false;

    function DatePropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:datePropDef', enumerable: true });
        }

        DatePropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(DatePropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(DatePropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for DatePropDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(DatePropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof DateDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new DateDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting DatePropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DatePropDef, '__type', { value: 'urn:inin.com:ipa:datePropDef' });

    Object.defineProperty(DatePropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:datePropDef'] = DatePropDef;

    return DatePropDef;
}());

var DateTimePropDef = (function(){
    var hasProps = false;

    function DateTimePropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:dateTimePropDef', enumerable: true });
        }

        DateTimePropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(DateTimePropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(DateTimePropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for DateTimePropDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(DateTimePropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof DateTimeDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new DateTimeDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting DateTimePropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DateTimePropDef, '__type', { value: 'urn:inin.com:ipa:dateTimePropDef' });

    Object.defineProperty(DateTimePropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:dateTimePropDef'] = DateTimePropDef;

    return DateTimePropDef;
}());

var DecimalPropDef = (function(){
    var hasProps = false;

    function DecimalPropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:decimalPropDef', enumerable: true });
        }

        DecimalPropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(DecimalPropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(DecimalPropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for DecimalPropDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(DecimalPropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof DecimaldataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new DecimaldataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting DecimalPropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DecimalPropDef, '__type', { value: 'urn:inin.com:ipa:decimalPropDef' });

    Object.defineProperty(DecimalPropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:decimalPropDef'] = DecimalPropDef;

    return DecimalPropDef;
}());

var DurationPropDef = (function(){
    var hasProps = false;

    function DurationPropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:durationPropDef', enumerable: true });
        }

        DurationPropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(DurationPropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(DurationPropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for DurationPropDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(DurationPropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof DurationDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new DurationDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting DurationPropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DurationPropDef, '__type', { value: 'urn:inin.com:ipa:durationPropDef' });

    Object.defineProperty(DurationPropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:durationPropDef'] = DurationPropDef;

    return DurationPropDef;
}());

var LongPropDef = (function(){
    var hasProps = false;

    function LongPropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:longPropDef', enumerable: true });
        }

        LongPropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(LongPropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(LongPropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for LongPropDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(LongPropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof LongdataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new LongdataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting LongPropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LongPropDef, '__type', { value: 'urn:inin.com:ipa:longPropDef' });

    Object.defineProperty(LongPropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:longPropDef'] = LongPropDef;

    return LongPropDef;
}());

var MailboxPropDef = (function(){
    var hasProps = false;

    function MailboxPropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:mailboxPropDef', enumerable: true });
        }

        MailboxPropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(MailboxPropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(MailboxPropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof MailboxValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new MailboxValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MailboxPropDef.initialValues: ' + e.message);
                    }
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(MailboxPropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof MailboxDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new MailboxDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting MailboxPropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MailboxPropDef, '__type', { value: 'urn:inin.com:ipa:mailboxPropDef' });

    Object.defineProperty(MailboxPropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:mailboxPropDef'] = MailboxPropDef;

    return MailboxPropDef;
}());

var SkillPropDef = (function(){
    var hasProps = false;

    function SkillPropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:skillPropDef', enumerable: true });
        }

        SkillPropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(SkillPropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(SkillPropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for SkillPropDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillPropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof SkillDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new SkillDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting SkillPropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SkillPropDef, '__type', { value: 'urn:inin.com:ipa:skillPropDef' });

    Object.defineProperty(SkillPropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:skillPropDef'] = SkillPropDef;

    return SkillPropDef;
}());

var StringPropDef = (function(){
    var hasProps = false;

    function StringPropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:stringPropDef', enumerable: true });
        }

        StringPropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(StringPropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(StringPropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for StringPropDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(StringPropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof StringDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new StringDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting StringPropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StringPropDef, '__type', { value: 'urn:inin.com:ipa:stringPropDef' });

    Object.defineProperty(StringPropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:stringPropDef'] = StringPropDef;

    return StringPropDef;
}());

var TimePropDef = (function(){
    var hasProps = false;

    function TimePropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:timePropDef', enumerable: true });
        }

        TimePropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(TimePropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(TimePropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for TimePropDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimePropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof TimeDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new TimeDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting TimePropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TimePropDef, '__type', { value: 'urn:inin.com:ipa:timePropDef' });

    Object.defineProperty(TimePropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:timePropDef'] = TimePropDef;

    return TimePropDef;
}());

var UriPropDef = (function(){
    var hasProps = false;

    function UriPropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:uriPropDef', enumerable: true });
        }

        UriPropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(UriPropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(UriPropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for UriPropDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(UriPropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof UriDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new UriDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting UriPropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UriPropDef, '__type', { value: 'urn:inin.com:ipa:uriPropDef' });

    Object.defineProperty(UriPropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:uriPropDef'] = UriPropDef;

    return UriPropDef;
}());

var UserQueuePropDef = (function(){
    var hasProps = false;

    function UserQueuePropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:userQueuePropDef', enumerable: true });
        }

        UserQueuePropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserQueuePropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(UserQueuePropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof UserQueueValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new UserQueueValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UserQueuePropDef.initialValues: ' + e.message);
                    }
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserQueuePropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof UserQueueDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new UserQueueDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserQueuePropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserQueuePropDef, '__type', { value: 'urn:inin.com:ipa:userQueuePropDef' });

    Object.defineProperty(UserQueuePropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:userQueuePropDef'] = UserQueuePropDef;

    return UserQueuePropDef;
}());

var WorkgroupQueuePropDef = (function(){
    var hasProps = false;

    function WorkgroupQueuePropDef() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:workgroupQueuePropDef', enumerable: true });
        }

        WorkgroupQueuePropDef._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupQueuePropDef, BasePropDefBasicSimple);

    function defineProps() {
        Object.defineProperty(WorkgroupQueuePropDef.prototype, 'initialValues', {
            get: function() { return this.__prop_initialValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for WorkgroupQueuePropDef.initialValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initialValues = value;
            },
            enumerable: true
        });

        Object.defineProperty(WorkgroupQueuePropDef.prototype, 'rules', {
            get: function() { return this.__prop_rules; },
            set: function(value) {
                if (!(value instanceof WorkgroupQueueDataValidationRules || value === void 0 || value === null)) {
                    try {
                        value = new WorkgroupQueueDataValidationRules(value);
                    } catch (e) {
                        throw new TypeError('Error setting WorkgroupQueuePropDef.rules: ' + e.message);
                    }
                }

                this.__prop_rules = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupQueuePropDef, '__type', { value: 'urn:inin.com:ipa:workgroupQueuePropDef' });

    Object.defineProperty(WorkgroupQueuePropDef, '__propInfo', {
        get: function() {
            var pi = {
                'initialValues': { required: false, nullable: true },
                'rules': { required: false, nullable: true }
            };
            if (BasePropDefBasicSimple.__propInfo) { _util.extend(pi, BasePropDefBasicSimple.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:workgroupQueuePropDef'] = WorkgroupQueuePropDef;

    return WorkgroupQueuePropDef;
}());

var PropDefInitialValuesItemBooleanSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemBooleanSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemBooleanSing', enumerable: true });
        }

        PropDefInitialValuesItemBooleanSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemBooleanSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemBooleanSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PropDefInitialValuesItemBooleanSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemBooleanSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemBooleanSing' });

    Object.defineProperty(PropDefInitialValuesItemBooleanSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemBooleanSing'] = PropDefInitialValuesItemBooleanSing;

    return PropDefInitialValuesItemBooleanSing;
}());

var PropDefInitialValuesItemComplexSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemComplexSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemComplexSing', enumerable: true });
        }

        PropDefInitialValuesItemComplexSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemComplexSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemComplexSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof ComplexValue || value === void 0 || value === null)) {
                    try {
                        value = new ComplexValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting PropDefInitialValuesItemComplexSing.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemComplexSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemComplexSing' });

    Object.defineProperty(PropDefInitialValuesItemComplexSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemComplexSing'] = PropDefInitialValuesItemComplexSing;

    return PropDefInitialValuesItemComplexSing;
}());

var PropDefInitialValuesItemCurrencySing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemCurrencySing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemCurrencySing', enumerable: true });
        }

        PropDefInitialValuesItemCurrencySing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemCurrencySing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemCurrencySing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof CurrencyValue || value === void 0 || value === null)) {
                    try {
                        value = new CurrencyValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting PropDefInitialValuesItemCurrencySing.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemCurrencySing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemCurrencySing' });

    Object.defineProperty(PropDefInitialValuesItemCurrencySing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemCurrencySing'] = PropDefInitialValuesItemCurrencySing;

    return PropDefInitialValuesItemCurrencySing;
}());

var PropDefInitialValuesItemDateSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemDateSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDateSing', enumerable: true });
        }

        PropDefInitialValuesItemDateSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemDateSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemDateSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PropDefInitialValuesItemDateSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemDateSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDateSing' });

    Object.defineProperty(PropDefInitialValuesItemDateSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemDateSing'] = PropDefInitialValuesItemDateSing;

    return PropDefInitialValuesItemDateSing;
}());

var PropDefInitialValuesItemDateTimeSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemDateTimeSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDateTimeSing', enumerable: true });
        }

        PropDefInitialValuesItemDateTimeSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemDateTimeSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemDateTimeSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PropDefInitialValuesItemDateTimeSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemDateTimeSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDateTimeSing' });

    Object.defineProperty(PropDefInitialValuesItemDateTimeSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemDateTimeSing'] = PropDefInitialValuesItemDateTimeSing;

    return PropDefInitialValuesItemDateTimeSing;
}());

var PropDefInitialValuesItemDecimalSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemDecimalSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDecimalSing', enumerable: true });
        }

        PropDefInitialValuesItemDecimalSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemDecimalSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemDecimalSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PropDefInitialValuesItemDecimalSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemDecimalSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDecimalSing' });

    Object.defineProperty(PropDefInitialValuesItemDecimalSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemDecimalSing'] = PropDefInitialValuesItemDecimalSing;

    return PropDefInitialValuesItemDecimalSing;
}());

var PropDefInitialValuesItemDurationSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemDurationSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDurationSing', enumerable: true });
        }

        PropDefInitialValuesItemDurationSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemDurationSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemDurationSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PropDefInitialValuesItemDurationSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemDurationSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDurationSing' });

    Object.defineProperty(PropDefInitialValuesItemDurationSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemDurationSing'] = PropDefInitialValuesItemDurationSing;

    return PropDefInitialValuesItemDurationSing;
}());

var PropDefInitialValuesItemLongSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemLongSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemLongSing', enumerable: true });
        }

        PropDefInitialValuesItemLongSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemLongSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemLongSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PropDefInitialValuesItemLongSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemLongSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemLongSing' });

    Object.defineProperty(PropDefInitialValuesItemLongSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemLongSing'] = PropDefInitialValuesItemLongSing;

    return PropDefInitialValuesItemLongSing;
}());

var PropDefInitialValuesItemMailboxSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemMailboxSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemMailboxSing', enumerable: true });
        }

        PropDefInitialValuesItemMailboxSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemMailboxSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemMailboxSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof MailboxValue || value === void 0 || value === null)) {
                    try {
                        value = new MailboxValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting PropDefInitialValuesItemMailboxSing.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemMailboxSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemMailboxSing' });

    Object.defineProperty(PropDefInitialValuesItemMailboxSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemMailboxSing'] = PropDefInitialValuesItemMailboxSing;

    return PropDefInitialValuesItemMailboxSing;
}());

var PropDefInitialValuesItemSkillSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemSkillSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemSkillSing', enumerable: true });
        }

        PropDefInitialValuesItemSkillSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemSkillSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemSkillSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PropDefInitialValuesItemSkillSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemSkillSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemSkillSing' });

    Object.defineProperty(PropDefInitialValuesItemSkillSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemSkillSing'] = PropDefInitialValuesItemSkillSing;

    return PropDefInitialValuesItemSkillSing;
}());

var PropDefInitialValuesItemStringSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemStringSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemStringSing', enumerable: true });
        }

        PropDefInitialValuesItemStringSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemStringSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemStringSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PropDefInitialValuesItemStringSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemStringSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemStringSing' });

    Object.defineProperty(PropDefInitialValuesItemStringSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemStringSing'] = PropDefInitialValuesItemStringSing;

    return PropDefInitialValuesItemStringSing;
}());

var PropDefInitialValuesItemTimeSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemTimeSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemTimeSing', enumerable: true });
        }

        PropDefInitialValuesItemTimeSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemTimeSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemTimeSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PropDefInitialValuesItemTimeSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemTimeSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemTimeSing' });

    Object.defineProperty(PropDefInitialValuesItemTimeSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemTimeSing'] = PropDefInitialValuesItemTimeSing;

    return PropDefInitialValuesItemTimeSing;
}());

var PropDefInitialValuesItemUriSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemUriSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemUriSing', enumerable: true });
        }

        PropDefInitialValuesItemUriSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemUriSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemUriSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PropDefInitialValuesItemUriSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemUriSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemUriSing' });

    Object.defineProperty(PropDefInitialValuesItemUriSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemUriSing'] = PropDefInitialValuesItemUriSing;

    return PropDefInitialValuesItemUriSing;
}());

var PropDefInitialValuesItemUserQueueSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemUserQueueSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemUserQueueSing', enumerable: true });
        }

        PropDefInitialValuesItemUserQueueSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemUserQueueSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemUserQueueSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(value instanceof UserQueueValue || value === void 0 || value === null)) {
                    try {
                        value = new UserQueueValue(value);
                    } catch (e) {
                        throw new TypeError('Error setting PropDefInitialValuesItemUserQueueSing.val: ' + e.message);
                    }
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemUserQueueSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemUserQueueSing' });

    Object.defineProperty(PropDefInitialValuesItemUserQueueSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemUserQueueSing'] = PropDefInitialValuesItemUserQueueSing;

    return PropDefInitialValuesItemUserQueueSing;
}());

var PropDefInitialValuesItemWorkgroupQueueSing = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemWorkgroupQueueSing() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemWorkgroupQueueSing', enumerable: true });
        }

        PropDefInitialValuesItemWorkgroupQueueSing._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemWorkgroupQueueSing, BasePropDefInitialValuesItemSing);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemWorkgroupQueueSing.prototype, 'val', {
            get: function() { return this.__prop_val; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PropDefInitialValuesItemWorkgroupQueueSing.val, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_val = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemWorkgroupQueueSing, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemWorkgroupQueueSing' });

    Object.defineProperty(PropDefInitialValuesItemWorkgroupQueueSing, '__propInfo', {
        get: function() {
            var pi = {
                'val': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemSing.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemSing.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemWorkgroupQueueSing'] = PropDefInitialValuesItemWorkgroupQueueSing;

    return PropDefInitialValuesItemWorkgroupQueueSing;
}());

var PropDefInitialValuesItemBooleanColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemBooleanColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemBooleanColl', enumerable: true });
        }

        PropDefInitialValuesItemBooleanColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemBooleanColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemBooleanColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isBoolean(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean[] for PropDefInitialValuesItemBooleanColl.vals, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemBooleanColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemBooleanColl' });

    Object.defineProperty(PropDefInitialValuesItemBooleanColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemBooleanColl'] = PropDefInitialValuesItemBooleanColl;

    return PropDefInitialValuesItemBooleanColl;
}());

var PropDefInitialValuesItemComplexColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemComplexColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemComplexColl', enumerable: true });
        }

        PropDefInitialValuesItemComplexColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemComplexColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemComplexColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof ComplexValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new ComplexValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PropDefInitialValuesItemComplexColl.vals: ' + e.message);
                    }
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemComplexColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemComplexColl' });

    Object.defineProperty(PropDefInitialValuesItemComplexColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemComplexColl'] = PropDefInitialValuesItemComplexColl;

    return PropDefInitialValuesItemComplexColl;
}());

var PropDefInitialValuesItemCurrencyColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemCurrencyColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemCurrencyColl', enumerable: true });
        }

        PropDefInitialValuesItemCurrencyColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemCurrencyColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemCurrencyColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof CurrencyValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new CurrencyValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PropDefInitialValuesItemCurrencyColl.vals: ' + e.message);
                    }
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemCurrencyColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemCurrencyColl' });

    Object.defineProperty(PropDefInitialValuesItemCurrencyColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemCurrencyColl'] = PropDefInitialValuesItemCurrencyColl;

    return PropDefInitialValuesItemCurrencyColl;
}());

var PropDefInitialValuesItemDateColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemDateColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDateColl', enumerable: true });
        }

        PropDefInitialValuesItemDateColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemDateColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemDateColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for PropDefInitialValuesItemDateColl.vals, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemDateColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDateColl' });

    Object.defineProperty(PropDefInitialValuesItemDateColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemDateColl'] = PropDefInitialValuesItemDateColl;

    return PropDefInitialValuesItemDateColl;
}());

var PropDefInitialValuesItemDateTimeColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemDateTimeColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDateTimeColl', enumerable: true });
        }

        PropDefInitialValuesItemDateTimeColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemDateTimeColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemDateTimeColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for PropDefInitialValuesItemDateTimeColl.vals, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemDateTimeColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDateTimeColl' });

    Object.defineProperty(PropDefInitialValuesItemDateTimeColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemDateTimeColl'] = PropDefInitialValuesItemDateTimeColl;

    return PropDefInitialValuesItemDateTimeColl;
}());

var PropDefInitialValuesItemDecimalColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemDecimalColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDecimalColl', enumerable: true });
        }

        PropDefInitialValuesItemDecimalColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemDecimalColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemDecimalColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for PropDefInitialValuesItemDecimalColl.vals, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemDecimalColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDecimalColl' });

    Object.defineProperty(PropDefInitialValuesItemDecimalColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemDecimalColl'] = PropDefInitialValuesItemDecimalColl;

    return PropDefInitialValuesItemDecimalColl;
}());

var PropDefInitialValuesItemDurationColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemDurationColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDurationColl', enumerable: true });
        }

        PropDefInitialValuesItemDurationColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemDurationColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemDurationColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for PropDefInitialValuesItemDurationColl.vals, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemDurationColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemDurationColl' });

    Object.defineProperty(PropDefInitialValuesItemDurationColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemDurationColl'] = PropDefInitialValuesItemDurationColl;

    return PropDefInitialValuesItemDurationColl;
}());

var PropDefInitialValuesItemLongColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemLongColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemLongColl', enumerable: true });
        }

        PropDefInitialValuesItemLongColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemLongColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemLongColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for PropDefInitialValuesItemLongColl.vals, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemLongColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemLongColl' });

    Object.defineProperty(PropDefInitialValuesItemLongColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemLongColl'] = PropDefInitialValuesItemLongColl;

    return PropDefInitialValuesItemLongColl;
}());

var PropDefInitialValuesItemMailboxColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemMailboxColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemMailboxColl', enumerable: true });
        }

        PropDefInitialValuesItemMailboxColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemMailboxColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemMailboxColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof MailboxValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new MailboxValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PropDefInitialValuesItemMailboxColl.vals: ' + e.message);
                    }
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemMailboxColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemMailboxColl' });

    Object.defineProperty(PropDefInitialValuesItemMailboxColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemMailboxColl'] = PropDefInitialValuesItemMailboxColl;

    return PropDefInitialValuesItemMailboxColl;
}());

var PropDefInitialValuesItemSkillColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemSkillColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemSkillColl', enumerable: true });
        }

        PropDefInitialValuesItemSkillColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemSkillColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemSkillColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for PropDefInitialValuesItemSkillColl.vals, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemSkillColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemSkillColl' });

    Object.defineProperty(PropDefInitialValuesItemSkillColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemSkillColl'] = PropDefInitialValuesItemSkillColl;

    return PropDefInitialValuesItemSkillColl;
}());

var PropDefInitialValuesItemStringColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemStringColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemStringColl', enumerable: true });
        }

        PropDefInitialValuesItemStringColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemStringColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemStringColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for PropDefInitialValuesItemStringColl.vals, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemStringColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemStringColl' });

    Object.defineProperty(PropDefInitialValuesItemStringColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemStringColl'] = PropDefInitialValuesItemStringColl;

    return PropDefInitialValuesItemStringColl;
}());

var PropDefInitialValuesItemTimeColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemTimeColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemTimeColl', enumerable: true });
        }

        PropDefInitialValuesItemTimeColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemTimeColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemTimeColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for PropDefInitialValuesItemTimeColl.vals, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemTimeColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemTimeColl' });

    Object.defineProperty(PropDefInitialValuesItemTimeColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemTimeColl'] = PropDefInitialValuesItemTimeColl;

    return PropDefInitialValuesItemTimeColl;
}());

var PropDefInitialValuesItemUriColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemUriColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemUriColl', enumerable: true });
        }

        PropDefInitialValuesItemUriColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemUriColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemUriColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for PropDefInitialValuesItemUriColl.vals, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemUriColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemUriColl' });

    Object.defineProperty(PropDefInitialValuesItemUriColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemUriColl'] = PropDefInitialValuesItemUriColl;

    return PropDefInitialValuesItemUriColl;
}());

var PropDefInitialValuesItemUserQueueColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemUserQueueColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemUserQueueColl', enumerable: true });
        }

        PropDefInitialValuesItemUserQueueColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemUserQueueColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemUserQueueColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (item instanceof UserQueueValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return item === null ? null : new UserQueueValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PropDefInitialValuesItemUserQueueColl.vals: ' + e.message);
                    }
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemUserQueueColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemUserQueueColl' });

    Object.defineProperty(PropDefInitialValuesItemUserQueueColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemUserQueueColl'] = PropDefInitialValuesItemUserQueueColl;

    return PropDefInitialValuesItemUserQueueColl;
}());

var PropDefInitialValuesItemWorkgroupQueueColl = (function(){
    var hasProps = false;

    function PropDefInitialValuesItemWorkgroupQueueColl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemWorkgroupQueueColl', enumerable: true });
        }

        PropDefInitialValuesItemWorkgroupQueueColl._super.constructor.apply(this, arguments);
    }
    _util.inherits(PropDefInitialValuesItemWorkgroupQueueColl, BasePropDefInitialValuesItemColl);

    function defineProps() {
        Object.defineProperty(PropDefInitialValuesItemWorkgroupQueueColl.prototype, 'vals', {
            get: function() { return this.__prop_vals; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item === null) || (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for PropDefInitialValuesItemWorkgroupQueueColl.vals, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_vals = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PropDefInitialValuesItemWorkgroupQueueColl, '__type', { value: 'urn:inin.com:ipa:propDefInitialValuesItemWorkgroupQueueColl' });

    Object.defineProperty(PropDefInitialValuesItemWorkgroupQueueColl, '__propInfo', {
        get: function() {
            var pi = {
                'vals': { required: false, nullable: true }
            };
            if (BasePropDefInitialValuesItemColl.__propInfo) { _util.extend(pi, BasePropDefInitialValuesItemColl.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:ipa:propDefInitialValuesItemWorkgroupQueueColl'] = PropDefInitialValuesItemWorkgroupQueueColl;

    return PropDefInitialValuesItemWorkgroupQueueColl;
}());

var $processInstances = (function(){
    function launchProcess(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof launchProcess.params)) {
            try {
                params = new launchProcess.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: launchProcess.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LaunchProcessResults) ? o : new LaunchProcessResults(o); };
        dc['400'] = dc['401'] = dc['403'] = dc['500'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(launchProcess.method, launchProcess.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(launchProcess, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/ipa/process-instances', enumerable: true }
    });

    launchProcess.params = (function(){
        _util.inherits(launchProcess_params, _util.RequestParams);

        function launchProcess_params(properties) {
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
            if (!(properties.content instanceof LaunchProcessParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Ipa.LaunchProcessParameters');
            }

            launchProcess_params._super.constructor.apply(this, arguments);
        }

        return launchProcess_params;
    })();

    function queryProcessInstances(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof queryProcessInstances.params)) {
            try {
                params = new queryProcessInstances.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: queryProcessInstances.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof QueryProcessInstancesResults) ? o : new QueryProcessInstancesResults(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(queryProcessInstances.method, queryProcessInstances.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(queryProcessInstances, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/ipa/process-instances', enumerable: true }
    });

    queryProcessInstances.params = (function(){
        _util.inherits(queryProcessInstances_params, _util.RequestParams);

        function queryProcessInstances_params(properties) {
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
                throw new Error('`properties.query` is undefined, which means the following required Query param(s) will be missing: beginSearchWindow, endSearchWindow');
            }
            if (!_util.hasProp(properties.query, 'beginSearchWindow')) {
                throw new Error('`properties.query` is missing required property: `beginSearchWindow`');
            }
            if (!_util.hasProp(properties.query, 'endSearchWindow')) {
                throw new Error('`properties.query` is missing required property: `endSearchWindow`');
            }

            queryProcessInstances_params._super.constructor.apply(this, arguments);
        }

        return queryProcessInstances_params;
    })();

    return Object.create(null, {
        launchProcess: { value: launchProcess, enumerable: true },
        queryProcessInstances: { value: queryProcessInstances, enumerable: true }
    });
})();

exports.ClosePageReason = ClosePageReason;
exports.PasRunState = PasRunState;
exports.PasOverloadedAtLaunchOption = PasOverloadedAtLaunchOption;
exports.FlowStatus = FlowStatus;
exports.LaunchMode = LaunchMode;
exports.PageCommandType = PageCommandType;
exports.CurrentPageSubscriptionBaseEventArgs = CurrentPageSubscriptionBaseEventArgs;
exports.CurrentPageSubscriptionCommandCompleteEventArgs = CurrentPageSubscriptionCommandCompleteEventArgs;
exports.DataReference = DataReference;
exports.CurrentPageSubscriptionShowPageEventArgs = CurrentPageSubscriptionShowPageEventArgs;
exports.RuntimeDataValuesList = RuntimeDataValuesList;
exports.RuntimeDataValuesListMeta = RuntimeDataValuesListMeta;
exports.BasePageAndDataMeta = BasePageAndDataMeta;
exports.PageDefinitionMeta = PageDefinitionMeta;
exports.DataDefinitionsListMeta = DataDefinitionsListMeta;
exports.DataManifestListMeta = DataManifestListMeta;
exports.BaseDataInst = BaseDataInst;
exports.BaseDataInstSing = BaseDataInstSing;
exports.BooleanDataInstSing = BooleanDataInstSing;
exports.ComplexDataInstSing = ComplexDataInstSing;
exports.ComplexValue = ComplexValue;
exports.BasePropVal = BasePropVal;
exports.BasePropValSing = BasePropValSing;
exports.BooleanPropValSing = BooleanPropValSing;
exports.ComplexPropValSing = ComplexPropValSing;
exports.CurrencyPropValSing = CurrencyPropValSing;
exports.CurrencyValue = CurrencyValue;
exports.DatePropValSing = DatePropValSing;
exports.DateTimePropValSing = DateTimePropValSing;
exports.DecimalPropValSing = DecimalPropValSing;
exports.DurationPropValSing = DurationPropValSing;
exports.LongPropValSing = LongPropValSing;
exports.MailboxPropValSing = MailboxPropValSing;
exports.MailboxValue = MailboxValue;
exports.SkillPropValSing = SkillPropValSing;
exports.StringPropValSing = StringPropValSing;
exports.TimePropValSing = TimePropValSing;
exports.UriPropValSing = UriPropValSing;
exports.UserQueuePropValSing = UserQueuePropValSing;
exports.UserQueueValue = UserQueueValue;
exports.WorkgroupQueuePropValSing = WorkgroupQueuePropValSing;
exports.BasePropValColl = BasePropValColl;
exports.BooleanPropValColl = BooleanPropValColl;
exports.BooleanDataInstCollItem = BooleanDataInstCollItem;
exports.BaseDataInstCollItem = BaseDataInstCollItem;
exports.StringDataInstCollItem = StringDataInstCollItem;
exports.ComplexDataInstCollItem = ComplexDataInstCollItem;
exports.CurrencyDataInstCollItem = CurrencyDataInstCollItem;
exports.MailboxDataInstCollItem = MailboxDataInstCollItem;
exports.UserQueueDataInstCollItem = UserQueueDataInstCollItem;
exports.ComplexPropValColl = ComplexPropValColl;
exports.CurrencyPropValColl = CurrencyPropValColl;
exports.DatePropValColl = DatePropValColl;
exports.DateTimePropValColl = DateTimePropValColl;
exports.DecimalPropValColl = DecimalPropValColl;
exports.DurationPropValColl = DurationPropValColl;
exports.LongPropValColl = LongPropValColl;
exports.MailboxPropValColl = MailboxPropValColl;
exports.SkillPropValColl = SkillPropValColl;
exports.StringPropValColl = StringPropValColl;
exports.TimePropValColl = TimePropValColl;
exports.UriPropValColl = UriPropValColl;
exports.UserQueuePropValColl = UserQueuePropValColl;
exports.WorkgroupQueuePropValColl = WorkgroupQueuePropValColl;
exports.CurrencyDataInstSing = CurrencyDataInstSing;
exports.DateDataInstSing = DateDataInstSing;
exports.DateTimeDataInstSing = DateTimeDataInstSing;
exports.DecimalDataInstSing = DecimalDataInstSing;
exports.DurationDataInstSing = DurationDataInstSing;
exports.LongDataInstSing = LongDataInstSing;
exports.MailboxDataInstSing = MailboxDataInstSing;
exports.SkillDataInstSing = SkillDataInstSing;
exports.StringDataInstSing = StringDataInstSing;
exports.TimeDataInstSing = TimeDataInstSing;
exports.UriDataInstSing = UriDataInstSing;
exports.UserQueueDataInstSing = UserQueueDataInstSing;
exports.WorkgroupQueueDataInstSing = WorkgroupQueueDataInstSing;
exports.BaseDataInstColl = BaseDataInstColl;
exports.BooleanDataInstColl = BooleanDataInstColl;
exports.ComplexDataInstColl = ComplexDataInstColl;
exports.CurrencyDataInstColl = CurrencyDataInstColl;
exports.DateDataInstColl = DateDataInstColl;
exports.DateTimeDataInstColl = DateTimeDataInstColl;
exports.DecimalDataInstColl = DecimalDataInstColl;
exports.DurationDataInstColl = DurationDataInstColl;
exports.LongDataInstColl = LongDataInstColl;
exports.MailboxDataInstColl = MailboxDataInstColl;
exports.SkillDataInstColl = SkillDataInstColl;
exports.StringDataInstColl = StringDataInstColl;
exports.TimeDataInstColl = TimeDataInstColl;
exports.UriDataInstColl = UriDataInstColl;
exports.UserQueueDataInstColl = UserQueueDataInstColl;
exports.WorkgroupQueueDataInstColl = WorkgroupQueueDataInstColl;
exports.RuntimeDataValuesListSelectionsListItem = RuntimeDataValuesListSelectionsListItem;
exports.CurrentPageSubscriptionClosePageEventArgs = CurrentPageSubscriptionClosePageEventArgs;
exports.PasSubscriptionEventArgs = PasSubscriptionEventArgs;
exports.LaunchableProcessesSubscriptionEventArgs = LaunchableProcessesSubscriptionEventArgs;
exports.ProcessDefinitionDescription = ProcessDefinitionDescription;
exports.LaunchProcessParameters = LaunchProcessParameters;
exports.LaunchProcessResults = LaunchProcessResults;
exports.QueryProcessInstancesResults = QueryProcessInstancesResults;
exports.ProcessInstanceSearchResult = ProcessInstanceSearchResult;
exports.UserInformation = UserInformation;
exports.SendPageCommandParameters = SendPageCommandParameters;
exports.SendPageCommandResults = SendPageCommandResults;
exports.PageAndDataDefinitionsFile = PageAndDataDefinitionsFile;
exports.PageAndDataDefinitionsMeta = PageAndDataDefinitionsMeta;
exports.PageDefinition = PageDefinition;
exports.PageControl = PageControl;
exports.PageCommand = PageCommand;
exports.PageBinding = PageBinding;
exports.PageLayout = PageLayout;
exports.PageText = PageText;
exports.PageStyle = PageStyle;
exports.PageBrush = PageBrush;
exports.PageOptions = PageOptions;
exports.PageColumn = PageColumn;
exports.DataDefinitionsList = DataDefinitionsList;
exports.BaseTypeDef = BaseTypeDef;
exports.BooleanTypeDef = BooleanTypeDef;
exports.BooleanDataValidationRules = BooleanDataValidationRules;
exports.BaseDataValidationRules = BaseDataValidationRules;
exports.CurrencyDataValidationRules = CurrencyDataValidationRules;
exports.DateDataValidationRules = DateDataValidationRules;
exports.DateTimeDataValidationRules = DateTimeDataValidationRules;
exports.DecimaldataValidationRules = DecimaldataValidationRules;
exports.DurationDataValidationRules = DurationDataValidationRules;
exports.LongdataValidationRules = LongdataValidationRules;
exports.MailboxDataValidationRules = MailboxDataValidationRules;
exports.SkillDataValidationRules = SkillDataValidationRules;
exports.StringDataValidationRules = StringDataValidationRules;
exports.TimeDataValidationRules = TimeDataValidationRules;
exports.UriDataValidationRules = UriDataValidationRules;
exports.UserQueueDataValidationRules = UserQueueDataValidationRules;
exports.WorkgroupQueueDataValidationRules = WorkgroupQueueDataValidationRules;
exports.ComplexTypeDef = ComplexTypeDef;
exports.BasePropDef = BasePropDef;
exports.BasePropDefBasicSimple = BasePropDefBasicSimple;
exports.BooleanPropDef = BooleanPropDef;
exports.CurrencyPropDef = CurrencyPropDef;
exports.DatePropDef = DatePropDef;
exports.DateTimePropDef = DateTimePropDef;
exports.DecimalPropDef = DecimalPropDef;
exports.DurationPropDef = DurationPropDef;
exports.LongPropDef = LongPropDef;
exports.MailboxPropDef = MailboxPropDef;
exports.SkillPropDef = SkillPropDef;
exports.StringPropDef = StringPropDef;
exports.TimePropDef = TimePropDef;
exports.UriPropDef = UriPropDef;
exports.UserQueuePropDef = UserQueuePropDef;
exports.WorkgroupQueuePropDef = WorkgroupQueuePropDef;
exports.ComplexPropDef = ComplexPropDef;
exports.ComplexPropDefInitialValuesItem = ComplexPropDefInitialValuesItem;
exports.ComplexValueForPropDefCollInitialItem = ComplexValueForPropDefCollInitialItem;
exports.BasePropDefInitialValuesItem = BasePropDefInitialValuesItem;
exports.BasePropDefInitialValuesItemSing = BasePropDefInitialValuesItemSing;
exports.PropDefInitialValuesItemBooleanSing = PropDefInitialValuesItemBooleanSing;
exports.PropDefInitialValuesItemComplexSing = PropDefInitialValuesItemComplexSing;
exports.PropDefInitialValuesItemCurrencySing = PropDefInitialValuesItemCurrencySing;
exports.PropDefInitialValuesItemDateSing = PropDefInitialValuesItemDateSing;
exports.PropDefInitialValuesItemDateTimeSing = PropDefInitialValuesItemDateTimeSing;
exports.PropDefInitialValuesItemDecimalSing = PropDefInitialValuesItemDecimalSing;
exports.PropDefInitialValuesItemDurationSing = PropDefInitialValuesItemDurationSing;
exports.PropDefInitialValuesItemLongSing = PropDefInitialValuesItemLongSing;
exports.PropDefInitialValuesItemMailboxSing = PropDefInitialValuesItemMailboxSing;
exports.PropDefInitialValuesItemSkillSing = PropDefInitialValuesItemSkillSing;
exports.PropDefInitialValuesItemStringSing = PropDefInitialValuesItemStringSing;
exports.PropDefInitialValuesItemTimeSing = PropDefInitialValuesItemTimeSing;
exports.PropDefInitialValuesItemUriSing = PropDefInitialValuesItemUriSing;
exports.PropDefInitialValuesItemUserQueueSing = PropDefInitialValuesItemUserQueueSing;
exports.PropDefInitialValuesItemWorkgroupQueueSing = PropDefInitialValuesItemWorkgroupQueueSing;
exports.BasePropDefInitialValuesItemColl = BasePropDefInitialValuesItemColl;
exports.PropDefInitialValuesItemBooleanColl = PropDefInitialValuesItemBooleanColl;
exports.PropDefInitialValuesItemComplexColl = PropDefInitialValuesItemComplexColl;
exports.PropDefInitialValuesItemCurrencyColl = PropDefInitialValuesItemCurrencyColl;
exports.PropDefInitialValuesItemDateColl = PropDefInitialValuesItemDateColl;
exports.PropDefInitialValuesItemDateTimeColl = PropDefInitialValuesItemDateTimeColl;
exports.PropDefInitialValuesItemDecimalColl = PropDefInitialValuesItemDecimalColl;
exports.PropDefInitialValuesItemDurationColl = PropDefInitialValuesItemDurationColl;
exports.PropDefInitialValuesItemLongColl = PropDefInitialValuesItemLongColl;
exports.PropDefInitialValuesItemMailboxColl = PropDefInitialValuesItemMailboxColl;
exports.PropDefInitialValuesItemSkillColl = PropDefInitialValuesItemSkillColl;
exports.PropDefInitialValuesItemStringColl = PropDefInitialValuesItemStringColl;
exports.PropDefInitialValuesItemTimeColl = PropDefInitialValuesItemTimeColl;
exports.PropDefInitialValuesItemUriColl = PropDefInitialValuesItemUriColl;
exports.PropDefInitialValuesItemUserQueueColl = PropDefInitialValuesItemUserQueueColl;
exports.PropDefInitialValuesItemWorkgroupQueueColl = PropDefInitialValuesItemWorkgroupQueueColl;
exports.CurrencyTypeDef = CurrencyTypeDef;
exports.DateTypeDef = DateTypeDef;
exports.DateTimeTypeDef = DateTimeTypeDef;
exports.DecimalTypeDef = DecimalTypeDef;
exports.DurationTypeDef = DurationTypeDef;
exports.LongTypeDef = LongTypeDef;
exports.MailboxTypeDef = MailboxTypeDef;
exports.SkillTypeDef = SkillTypeDef;
exports.StringTypeDef = StringTypeDef;
exports.TimeTypeDef = TimeTypeDef;
exports.UriTypeDef = UriTypeDef;
exports.UserQueueTypeDef = UserQueueTypeDef;
exports.WorkgroupQueueTypeDef = WorkgroupQueueTypeDef;
exports.DataManifestList = DataManifestList;
exports.DataManifestItem = DataManifestItem;
exports.$processInstances = $processInstances;
