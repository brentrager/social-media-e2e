/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Configuration = require('./Configuration');
var Common = require('./Common');

var ActionType = (function(){
    var instanceCache = {};
    function ActionType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:actionType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ActionType, _util.EnumValue);

    Object.defineProperties(ActionType, {
        'Dde': { value: new ActionType(0, 'Dde'), enumerable: true },
        'CustomScreenPop': { value: new ActionType(1, 'CustomScreenPop'), enumerable: true },
        'WebBrowserScreenPop': { value: new ActionType(2, 'WebBrowserScreenPop'), enumerable: true }
    });

    Object.defineProperty(ActionType, '__type', { value: 'urn:inin.com:configuration.system:actionType' });

    _typemap['urn:inin.com:configuration.system:actionType'] = ActionType;

    return ActionType;
}());

var PopupType = (function(){
    var instanceCache = {};
    function PopupType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:popupType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(PopupType, _util.EnumValue);

    Object.defineProperties(PopupType, {
        'New': { value: new PopupType(0, 'New'), enumerable: true },
        'Tab': { value: new PopupType(1, 'Tab'), enumerable: true }
    });

    Object.defineProperty(PopupType, '__type', { value: 'urn:inin.com:configuration.system:popupType' });

    _typemap['urn:inin.com:configuration.system:popupType'] = PopupType;

    return PopupType;
}());

var AttendantOverrideType = (function(){
    var instanceCache = {};
    function AttendantOverrideType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:attendantOverrideType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(AttendantOverrideType, _util.EnumValue);

    Object.defineProperties(AttendantOverrideType, {
        'Allow': { value: new AttendantOverrideType(0, 'Allow'), enumerable: true },
        'Restrict': { value: new AttendantOverrideType(1, 'Restrict'), enumerable: true },
        'Disallow': { value: new AttendantOverrideType(2, 'Disallow'), enumerable: true }
    });

    Object.defineProperty(AttendantOverrideType, '__type', { value: 'urn:inin.com:configuration.system:attendantOverrideType' });

    _typemap['urn:inin.com:configuration.system:attendantOverrideType'] = AttendantOverrideType;

    return AttendantOverrideType;
}());

var ImageMimeType = (function(){
    var instanceCache = {};
    function ImageMimeType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:imageMimeType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ImageMimeType, _util.EnumValue);

    Object.defineProperties(ImageMimeType, {
        'None': { value: new ImageMimeType(0, 'None'), enumerable: true },
        'TIFF': { value: new ImageMimeType(1, 'TIFF'), enumerable: true },
        'JPEG': { value: new ImageMimeType(2, 'JPEG'), enumerable: true },
        'PNG': { value: new ImageMimeType(3, 'PNG'), enumerable: true }
    });

    Object.defineProperty(ImageMimeType, '__type', { value: 'urn:inin.com:configuration.system:imageMimeType' });

    _typemap['urn:inin.com:configuration.system:imageMimeType'] = ImageMimeType;

    return ImageMimeType;
}());

var DestinationType = (function(){
    var instanceCache = {};
    function DestinationType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:destinationType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DestinationType, _util.EnumValue);

    Object.defineProperties(DestinationType, {
        'User': { value: new DestinationType(0, 'User'), enumerable: true },
        'Workgroup': { value: new DestinationType(1, 'Workgroup'), enumerable: true },
        'Station': { value: new DestinationType(2, 'Station'), enumerable: true }
    });

    Object.defineProperty(DestinationType, '__type', { value: 'urn:inin.com:configuration.system:destinationType' });

    _typemap['urn:inin.com:configuration.system:destinationType'] = DestinationType;

    return DestinationType;
}());

var SubstitutionType = (function(){
    var instanceCache = {};
    function SubstitutionType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:substitutionType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(SubstitutionType, _util.EnumValue);

    Object.defineProperties(SubstitutionType, {
        'None': { value: new SubstitutionType(0, 'None'), enumerable: true },
        'Replace': { value: new SubstitutionType(1, 'Replace'), enumerable: true },
        'Prefix': { value: new SubstitutionType(2, 'Prefix'), enumerable: true }
    });

    Object.defineProperty(SubstitutionType, '__type', { value: 'urn:inin.com:configuration.system:substitutionType' });

    _typemap['urn:inin.com:configuration.system:substitutionType'] = SubstitutionType;

    return SubstitutionType;
}());

var DataSourceSubType = (function(){
    var instanceCache = {};
    function DataSourceSubType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:dataSourceSubType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DataSourceSubType, _util.EnumValue);

    Object.defineProperties(DataSourceSubType, {
        'Db2': { value: new DataSourceSubType(0, 'Db2'), enumerable: true },
        'Informix': { value: new DataSourceSubType(1, 'Informix'), enumerable: true },
        'Ingres': { value: new DataSourceSubType(2, 'Ingres'), enumerable: true },
        'Oracle': { value: new DataSourceSubType(3, 'Oracle'), enumerable: true },
        'MsAccess': { value: new DataSourceSubType(4, 'MsAccess'), enumerable: true },
        'MsSql': { value: new DataSourceSubType(5, 'MsSql'), enumerable: true },
        'Sybase': { value: new DataSourceSubType(6, 'Sybase'), enumerable: true },
        'Other': { value: new DataSourceSubType(7, 'Other'), enumerable: true },
        'IPlanet': { value: new DataSourceSubType(8, 'IPlanet'), enumerable: true },
        'OpenLdap': { value: new DataSourceSubType(9, 'OpenLdap'), enumerable: true },
        'ActiveDirectory': { value: new DataSourceSubType(10, 'ActiveDirectory'), enumerable: true },
        'MsOutlook': { value: new DataSourceSubType(11, 'MsOutlook'), enumerable: true },
        'MsExchange': { value: new DataSourceSubType(12, 'MsExchange'), enumerable: true },
        'IninTextFile': { value: new DataSourceSubType(13, 'IninTextFile'), enumerable: true },
        'ThinkDirectMarketing': { value: new DataSourceSubType(14, 'ThinkDirectMarketing'), enumerable: true },
        'RediConnect': { value: new DataSourceSubType(15, 'RediConnect'), enumerable: true }
    });

    Object.defineProperty(DataSourceSubType, '__type', { value: 'urn:inin.com:configuration.system:dataSourceSubType' });

    _typemap['urn:inin.com:configuration.system:dataSourceSubType'] = DataSourceSubType;

    return DataSourceSubType;
}());

var DataSourceType = (function(){
    var instanceCache = {};
    function DataSourceType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:dataSourceType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DataSourceType, _util.EnumValue);

    Object.defineProperties(DataSourceType, {
        'Jdbc': { value: new DataSourceType(0, 'Jdbc'), enumerable: true },
        'JdbcOdbc': { value: new DataSourceType(1, 'JdbcOdbc'), enumerable: true },
        'Ldap': { value: new DataSourceType(2, 'Ldap'), enumerable: true },
        'Mapi': { value: new DataSourceType(3, 'Mapi'), enumerable: true },
        'Odbc': { value: new DataSourceType(4, 'Odbc'), enumerable: true },
        'WhitePages': { value: new DataSourceType(5, 'WhitePages'), enumerable: true }
    });

    Object.defineProperty(DataSourceType, '__type', { value: 'urn:inin.com:configuration.system:dataSourceType' });

    _typemap['urn:inin.com:configuration.system:dataSourceType'] = DataSourceType;

    return DataSourceType;
}());

var SystemMailboxType = (function(){
    var instanceCache = {};
    function SystemMailboxType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:systemMailboxType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(SystemMailboxType, _util.EnumValue);

    Object.defineProperties(SystemMailboxType, {
        'None': { value: new SystemMailboxType(0, 'None'), enumerable: true },
        'Exchange': { value: new SystemMailboxType(1, 'Exchange'), enumerable: true },
        'Notes': { value: new SystemMailboxType(2, 'Notes'), enumerable: true },
        'InteractionMessageStore': { value: new SystemMailboxType(3, 'InteractionMessageStore'), enumerable: true },
        'GroupWise': { value: new SystemMailboxType(4, 'GroupWise'), enumerable: true },
        'Ldap': { value: new SystemMailboxType(5, 'Ldap'), enumerable: true },
        'Smtp': { value: new SystemMailboxType(6, 'Smtp'), enumerable: true },
        'Imap': { value: new SystemMailboxType(7, 'Imap'), enumerable: true }
    });

    Object.defineProperty(SystemMailboxType, '__type', { value: 'urn:inin.com:configuration.system:systemMailboxType' });

    _typemap['urn:inin.com:configuration.system:systemMailboxType'] = SystemMailboxType;

    return SystemMailboxType;
}());

var Action = (function(){
    var hasProps = false;

    function Action() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:action' });
        }

        Action._super.constructor.apply(this, arguments);
    }
    _util.inherits(Action, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Action.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Action.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Action.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Action.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Action.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Action.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Action.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Action.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Action.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Action.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Action.prototype, 'actionType', {
            get: function() { return this.__prop_actionType; },
            set: function(value) {
                if (!(value instanceof ActionType || value === void 0)) {
                    try {
                        value = new ActionType(value);
                    } catch (e) {
                        throw new TypeError('Error setting Action.actionType: ' + e.message);
                    }
                }

                this.__prop_actionType = value;
            },
            enumerable: true
        });

        Object.defineProperty(Action.prototype, 'urlAction', {
            get: function() { return this.__prop_urlAction; },
            set: function(value) {
                if (!(value instanceof UrlAction || value === void 0 || value === null)) {
                    try {
                        value = new UrlAction(value);
                    } catch (e) {
                        throw new TypeError('Error setting Action.urlAction: ' + e.message);
                    }
                }

                this.__prop_urlAction = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Action, '__type', { value: 'urn:inin.com:configuration.system:action' });

    Object.defineProperty(Action, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'actionType': { required: false, nullable: false },
                'urlAction': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:action'] = Action;

    return Action;
}());

var UrlAction = (function(){
    var hasProps = false;

    function UrlAction() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:urlAction' });
        }

        UrlAction._super.constructor.apply(this, arguments);
    }
    _util.inherits(UrlAction, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UrlAction.prototype, 'url', {
            get: function() { return this.__prop_url; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UrlAction.url, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_url = value;
            },
            enumerable: true
        });

        Object.defineProperty(UrlAction.prototype, 'popupType', {
            get: function() { return this.__prop_popupType; },
            set: function(value) {
                if (!(value instanceof PopupType)) {
                    try {
                        value = new PopupType(value);
                    } catch (e) {
                        throw new TypeError('Error setting UrlAction.popupType: ' + e.message);
                    }
                }

                this.__prop_popupType = value;
            },
            enumerable: true
        });

        Object.defineProperty(UrlAction.prototype, 'parameters', {
            get: function() { return this.__prop_parameters; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ActionParameter); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ActionParameter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UrlAction.parameters: ' + e.message);
                    }
                }

                this.__prop_parameters = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UrlAction, '__type', { value: 'urn:inin.com:configuration.system:urlAction' });

    Object.defineProperty(UrlAction, '__propInfo', {
        get: function() {
            var pi = {
                'url': { required: true, nullable: false },
                'popupType': { required: true, nullable: false },
                'parameters': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:urlAction'] = UrlAction;

    return UrlAction;
}());

var ActionParameter = (function(){
    var hasProps = false;

    function ActionParameter() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:actionParameter' });
        }

        ActionParameter._super.constructor.apply(this, arguments);
    }
    _util.inherits(ActionParameter, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ActionParameter.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ActionParameter.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(ActionParameter.prototype, 'friendlyName', {
            get: function() { return this.__prop_friendlyName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ActionParameter.friendlyName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_friendlyName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ActionParameter.prototype, 'override', {
            get: function() { return this.__prop_override; },
            set: function(value) {
                if (!(value instanceof AttendantOverrideType)) {
                    try {
                        value = new AttendantOverrideType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ActionParameter.override: ' + e.message);
                    }
                }

                this.__prop_override = value;
            },
            enumerable: true
        });

        Object.defineProperty(ActionParameter.prototype, 'defaultValue', {
            get: function() { return this.__prop_defaultValue; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ActionParameter.defaultValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_defaultValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(ActionParameter.prototype, 'restrictedValues', {
            get: function() { return this.__prop_restrictedValues; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String{} for ActionParameter.restrictedValues, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_restrictedValues = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ActionParameter, '__type', { value: 'urn:inin.com:configuration.system:actionParameter' });

    Object.defineProperty(ActionParameter, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'friendlyName': { required: true, nullable: false },
                'override': { required: true, nullable: false },
                'defaultValue': { required: false, nullable: true },
                'restrictedValues': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:actionParameter'] = ActionParameter;

    return ActionParameter;
}());

var DialPlanClassification = (function(){
    var hasProps = false;

    function DialPlanClassification() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:dialPlanClassification' });
        }

        DialPlanClassification._super.constructor.apply(this, arguments);
    }
    _util.inherits(DialPlanClassification, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DialPlanClassification.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting DialPlanClassification.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialPlanClassification.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for DialPlanClassification.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialPlanClassification.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DialPlanClassification.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialPlanClassification.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for DialPlanClassification.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialPlanClassification.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DialPlanClassification.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DialPlanClassification, '__type', { value: 'urn:inin.com:configuration.system:dialPlanClassification' });

    Object.defineProperty(DialPlanClassification, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:dialPlanClassification'] = DialPlanClassification;

    return DialPlanClassification;
}());

var ImageResource = (function(){
    var hasProps = false;

    function ImageResource() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:imageResource' });
        }

        ImageResource._super.constructor.apply(this, arguments);
    }
    _util.inherits(ImageResource, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ImageResource.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ImageResource.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResource.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ImageResource.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResource.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ImageResource.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResource.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ImageResource.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResource.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ImageResource.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResource.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ImageResource.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResource.prototype, 'category', {
            get: function() { return this.__prop_category; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ImageResource.category: ' + e.message);
                    }
                }

                this.__prop_category = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResource.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ImageResource.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResource.prototype, 'fileLastModifiedDate', {
            get: function() { return this.__prop_fileLastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ImageResource.fileLastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fileLastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResource.prototype, 'horizontalResolution', {
            get: function() { return this.__prop_horizontalResolution; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ImageResource.horizontalResolution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_horizontalResolution = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResource.prototype, 'imageUri', {
            get: function() { return this.__prop_imageUri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ImageResource.imageUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_imageUri = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResource.prototype, 'mimeType', {
            get: function() { return this.__prop_mimeType; },
            set: function(value) {
                if (!(value instanceof ImageMimeType || value === void 0 || value === null)) {
                    try {
                        value = new ImageMimeType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ImageResource.mimeType: ' + e.message);
                    }
                }

                this.__prop_mimeType = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResource.prototype, 'tags', {
            get: function() { return this.__prop_tags; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ImageResource.tags, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_tags = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResource.prototype, 'verticalResolution', {
            get: function() { return this.__prop_verticalResolution; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ImageResource.verticalResolution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_verticalResolution = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ImageResource, '__type', { value: 'urn:inin.com:configuration.system:imageResource' });

    Object.defineProperty(ImageResource, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'category': { required: false, nullable: true },
                'description': { required: false, nullable: true },
                'fileLastModifiedDate': { required: false, nullable: true },
                'horizontalResolution': { required: false, nullable: true },
                'imageUri': { required: false, nullable: true },
                'mimeType': { required: false, nullable: true },
                'tags': { required: false, nullable: true },
                'verticalResolution': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:imageResource'] = ImageResource;

    return ImageResource;
}());

var Layout = (function(){
    var hasProps = false;

    function Layout() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:layout' });
        }

        Layout._super.constructor.apply(this, arguments);
    }
    _util.inherits(Layout, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Layout.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Layout.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Layout.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Layout.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Layout.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Layout.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Layout.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Layout.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Layout.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Layout.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Layout.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Layout.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(Layout.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Layout.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(Layout.prototype, 'imageResource', {
            get: function() { return this.__prop_imageResource; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Layout.imageResource: ' + e.message);
                    }
                }

                this.__prop_imageResource = value;
            },
            enumerable: true
        });

        Object.defineProperty(Layout.prototype, 'location', {
            get: function() { return this.__prop_location; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Layout.location: ' + e.message);
                    }
                }

                this.__prop_location = value;
            },
            enumerable: true
        });

        Object.defineProperty(Layout.prototype, 'positionDefaultHeight', {
            get: function() { return this.__prop_positionDefaultHeight; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Layout.positionDefaultHeight, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_positionDefaultHeight = value;
            },
            enumerable: true
        });

        Object.defineProperty(Layout.prototype, 'positionDefaultWidth', {
            get: function() { return this.__prop_positionDefaultWidth; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Layout.positionDefaultWidth, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_positionDefaultWidth = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Layout, '__type', { value: 'urn:inin.com:configuration.system:layout' });

    Object.defineProperty(Layout, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'description': { required: false, nullable: true },
                'imageResource': { required: false, nullable: true },
                'location': { required: false, nullable: true },
                'positionDefaultHeight': { required: false, nullable: true },
                'positionDefaultWidth': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:layout'] = Layout;

    return Layout;
}());

var Position = (function(){
    var hasProps = false;

    function Position() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:position' });
        }

        Position._super.constructor.apply(this, arguments);
    }
    _util.inherits(Position, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Position.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Position.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Position.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Position.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Position.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Position.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Position.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Position.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Position.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Position.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Position.prototype, 'bottom', {
            get: function() { return this.__prop_bottom; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Position.bottom, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_bottom = value;
            },
            enumerable: true
        });

        Object.defineProperty(Position.prototype, 'layout', {
            get: function() { return this.__prop_layout; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Position.layout: ' + e.message);
                    }
                }

                this.__prop_layout = value;
            },
            enumerable: true
        });

        Object.defineProperty(Position.prototype, 'left', {
            get: function() { return this.__prop_left; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Position.left, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_left = value;
            },
            enumerable: true
        });

        Object.defineProperty(Position.prototype, 'right', {
            get: function() { return this.__prop_right; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Position.right, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_right = value;
            },
            enumerable: true
        });

        Object.defineProperty(Position.prototype, 'station', {
            get: function() { return this.__prop_station; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Position.station: ' + e.message);
                    }
                }

                this.__prop_station = value;
            },
            enumerable: true
        });

        Object.defineProperty(Position.prototype, 'top', {
            get: function() { return this.__prop_top; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Position.top, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_top = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Position, '__type', { value: 'urn:inin.com:configuration.system:position' });

    Object.defineProperty(Position, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'bottom': { required: false, nullable: true },
                'layout': { required: false, nullable: false },
                'left': { required: false, nullable: true },
                'right': { required: false, nullable: true },
                'station': { required: false, nullable: true },
                'top': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:position'] = Position;

    return Position;
}());

var ServerParameter = (function(){
    var hasProps = false;

    function ServerParameter() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:serverParameter' });
        }

        ServerParameter._super.constructor.apply(this, arguments);
    }
    _util.inherits(ServerParameter, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ServerParameter.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ServerParameter.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ServerParameter.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ServerParameter.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ServerParameter.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ServerParameter.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ServerParameter.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ServerParameter.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ServerParameter.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ServerParameter.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ServerParameter.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ServerParameter.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ServerParameter, '__type', { value: 'urn:inin.com:configuration.system:serverParameter' });

    Object.defineProperty(ServerParameter, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'value': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:serverParameter'] = ServerParameter;

    return ServerParameter;
}());

var SystemParameter = (function(){
    var hasProps = false;

    function SystemParameter() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:systemParameter' });
        }

        SystemParameter._super.constructor.apply(this, arguments);
    }
    _util.inherits(SystemParameter, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SystemParameter.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SystemParameter.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SystemParameter.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SystemParameter.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SystemParameter.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SystemParameter.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SystemParameter.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SystemParameter.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SystemParameter.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SystemParameter.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SystemParameter.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SystemParameter.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SystemParameter, '__type', { value: 'urn:inin.com:configuration.system:systemParameter' });

    Object.defineProperty(SystemParameter, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'value': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:systemParameter'] = SystemParameter;

    return SystemParameter;
}());

var LoginAuthentication = (function(){
    var hasProps = false;

    function LoginAuthentication() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:loginAuthentication' });
        }

        LoginAuthentication._super.constructor.apply(this, arguments);
    }
    _util.inherits(LoginAuthentication, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LoginAuthentication.prototype, 'disableAlternateWindowsAuth', {
            get: function() { return this.__prop_disableAlternateWindowsAuth; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for LoginAuthentication.disableAlternateWindowsAuth, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_disableAlternateWindowsAuth = value;
            },
            enumerable: true
        });

        Object.defineProperty(LoginAuthentication.prototype, 'disableCachedCredentials', {
            get: function() { return this.__prop_disableCachedCredentials; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for LoginAuthentication.disableCachedCredentials, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_disableCachedCredentials = value;
            },
            enumerable: true
        });

        Object.defineProperty(LoginAuthentication.prototype, 'disableIcAuth', {
            get: function() { return this.__prop_disableIcAuth; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for LoginAuthentication.disableIcAuth, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_disableIcAuth = value;
            },
            enumerable: true
        });

        Object.defineProperty(LoginAuthentication.prototype, 'disableSingleSignOn', {
            get: function() { return this.__prop_disableSingleSignOn; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for LoginAuthentication.disableSingleSignOn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_disableSingleSignOn = value;
            },
            enumerable: true
        });

        Object.defineProperty(LoginAuthentication.prototype, 'disableWindowsAuth', {
            get: function() { return this.__prop_disableWindowsAuth; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for LoginAuthentication.disableWindowsAuth, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_disableWindowsAuth = value;
            },
            enumerable: true
        });

        Object.defineProperty(LoginAuthentication.prototype, 'legalAgreement', {
            get: function() { return this.__prop_legalAgreement; },
            set: function(value) {
                if (!(value instanceof Configuration.MultiLanguageString || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.MultiLanguageString(value);
                    } catch (e) {
                        throw new TypeError('Error setting LoginAuthentication.legalAgreement: ' + e.message);
                    }
                }

                this.__prop_legalAgreement = value;
            },
            enumerable: true
        });

        Object.defineProperty(LoginAuthentication.prototype, 'showLegalAgreementUponLogin', {
            get: function() { return this.__prop_showLegalAgreementUponLogin; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for LoginAuthentication.showLegalAgreementUponLogin, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_showLegalAgreementUponLogin = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LoginAuthentication, '__type', { value: 'urn:inin.com:configuration.system:loginAuthentication' });

    Object.defineProperty(LoginAuthentication, '__propInfo', {
        get: function() {
            var pi = {
                'disableAlternateWindowsAuth': { required: false, nullable: true },
                'disableCachedCredentials': { required: false, nullable: true },
                'disableIcAuth': { required: false, nullable: true },
                'disableSingleSignOn': { required: false, nullable: true },
                'disableWindowsAuth': { required: false, nullable: true },
                'legalAgreement': { required: false, nullable: true },
                'showLegalAgreementUponLogin': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:loginAuthentication'] = LoginAuthentication;

    return LoginAuthentication;
}());

var Mail = (function(){
    var hasProps = false;

    function Mail() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:mail' });
        }

        Mail._super.constructor.apply(this, arguments);
    }
    _util.inherits(Mail, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Mail.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Mail.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Mail.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Mail.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Mail.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Mail.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Mail.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Mail.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Mail.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Mail.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Mail, '__type', { value: 'urn:inin.com:configuration.system:mail' });

    Object.defineProperty(Mail, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:mail'] = Mail;

    return Mail;
}());

var ProblemReporter = (function(){
    var hasProps = false;

    function ProblemReporter() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:problemReporter' });
        }

        ProblemReporter._super.constructor.apply(this, arguments);
    }
    _util.inherits(ProblemReporter, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ProblemReporter.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ProblemReporter.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProblemReporter.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ProblemReporter.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProblemReporter.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ProblemReporter.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProblemReporter.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ProblemReporter.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProblemReporter.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ProblemReporter.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ProblemReporter.prototype, 'emailAddresses', {
            get: function() { return this.__prop_emailAddresses; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for ProblemReporter.emailAddresses, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailAddresses = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ProblemReporter, '__type', { value: 'urn:inin.com:configuration.system:problemReporter' });

    Object.defineProperty(ProblemReporter, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'emailAddresses': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:problemReporter'] = ProblemReporter;

    return ProblemReporter;
}());

var Accumulators = (function(){
    var hasProps = false;

    function Accumulators() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:accumulators' });
        }

        Accumulators._super.constructor.apply(this, arguments);
    }
    _util.inherits(Accumulators, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Accumulators.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Accumulator); }))) {
                    try {
                        value = value.map(function(item){ return new Accumulator(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Accumulators.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Accumulators, '__type', { value: 'urn:inin.com:configuration.system:accumulators' });

    Object.defineProperty(Accumulators, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:accumulators'] = Accumulators;

    return Accumulators;
}());

var Accumulator = (function(){
    var hasProps = false;

    function Accumulator() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:accumulator' });
        }

        Accumulator._super.constructor.apply(this, arguments);
    }
    _util.inherits(Accumulator, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Accumulator.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Accumulator.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Accumulator.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Accumulator.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Accumulator.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Accumulator.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Accumulator.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Accumulator.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Accumulator.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Accumulator.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Accumulator, '__type', { value: 'urn:inin.com:configuration.system:accumulator' });

    Object.defineProperty(Accumulator, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:accumulator'] = Accumulator;

    return Accumulator;
}());

var Actions = (function(){
    var hasProps = false;

    function Actions() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:actions' });
        }

        Actions._super.constructor.apply(this, arguments);
    }
    _util.inherits(Actions, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Actions.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Action); }))) {
                    try {
                        value = value.map(function(item){ return new Action(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Actions.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Actions, '__type', { value: 'urn:inin.com:configuration.system:actions' });

    Object.defineProperty(Actions, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:actions'] = Actions;

    return Actions;
}());

var AttendantEmailProfiles = (function(){
    var hasProps = false;

    function AttendantEmailProfiles() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:attendantEmailProfiles' });
        }

        AttendantEmailProfiles._super.constructor.apply(this, arguments);
    }
    _util.inherits(AttendantEmailProfiles, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AttendantEmailProfiles.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AttendantEmailProfile); }))) {
                    try {
                        value = value.map(function(item){ return new AttendantEmailProfile(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AttendantEmailProfiles.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AttendantEmailProfiles, '__type', { value: 'urn:inin.com:configuration.system:attendantEmailProfiles' });

    Object.defineProperty(AttendantEmailProfiles, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:attendantEmailProfiles'] = AttendantEmailProfiles;

    return AttendantEmailProfiles;
}());

var AttendantEmailProfile = (function(){
    var hasProps = false;

    function AttendantEmailProfile() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:attendantEmailProfile' });
        }

        AttendantEmailProfile._super.constructor.apply(this, arguments);
    }
    _util.inherits(AttendantEmailProfile, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AttendantEmailProfile.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting AttendantEmailProfile.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AttendantEmailProfile, '__type', { value: 'urn:inin.com:configuration.system:attendantEmailProfile' });

    Object.defineProperty(AttendantEmailProfile, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:attendantEmailProfile'] = AttendantEmailProfile;

    return AttendantEmailProfile;
}());

var AttendantInboundProfiles = (function(){
    var hasProps = false;

    function AttendantInboundProfiles() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:attendantInboundProfiles' });
        }

        AttendantInboundProfiles._super.constructor.apply(this, arguments);
    }
    _util.inherits(AttendantInboundProfiles, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AttendantInboundProfiles.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AttendantInboundProfile); }))) {
                    try {
                        value = value.map(function(item){ return new AttendantInboundProfile(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AttendantInboundProfiles.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AttendantInboundProfiles, '__type', { value: 'urn:inin.com:configuration.system:attendantInboundProfiles' });

    Object.defineProperty(AttendantInboundProfiles, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:attendantInboundProfiles'] = AttendantInboundProfiles;

    return AttendantInboundProfiles;
}());

var AttendantInboundProfile = (function(){
    var hasProps = false;

    function AttendantInboundProfile() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:attendantInboundProfile' });
        }

        AttendantInboundProfile._super.constructor.apply(this, arguments);
    }
    _util.inherits(AttendantInboundProfile, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AttendantInboundProfile.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting AttendantInboundProfile.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AttendantInboundProfile, '__type', { value: 'urn:inin.com:configuration.system:attendantInboundProfile' });

    Object.defineProperty(AttendantInboundProfile, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:attendantInboundProfile'] = AttendantInboundProfile;

    return AttendantInboundProfile;
}());

var AttendantOperatorProfiles = (function(){
    var hasProps = false;

    function AttendantOperatorProfiles() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:attendantOperatorProfiles' });
        }

        AttendantOperatorProfiles._super.constructor.apply(this, arguments);
    }
    _util.inherits(AttendantOperatorProfiles, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AttendantOperatorProfiles.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AttendantOperatorProfile); }))) {
                    try {
                        value = value.map(function(item){ return new AttendantOperatorProfile(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AttendantOperatorProfiles.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AttendantOperatorProfiles, '__type', { value: 'urn:inin.com:configuration.system:attendantOperatorProfiles' });

    Object.defineProperty(AttendantOperatorProfiles, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:attendantOperatorProfiles'] = AttendantOperatorProfiles;

    return AttendantOperatorProfiles;
}());

var AttendantOperatorProfile = (function(){
    var hasProps = false;

    function AttendantOperatorProfile() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:attendantOperatorProfile' });
        }

        AttendantOperatorProfile._super.constructor.apply(this, arguments);
    }
    _util.inherits(AttendantOperatorProfile, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AttendantOperatorProfile.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting AttendantOperatorProfile.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AttendantOperatorProfile, '__type', { value: 'urn:inin.com:configuration.system:attendantOperatorProfile' });

    Object.defineProperty(AttendantOperatorProfile, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:attendantOperatorProfile'] = AttendantOperatorProfile;

    return AttendantOperatorProfile;
}());

var AttendantOutboundProfiles = (function(){
    var hasProps = false;

    function AttendantOutboundProfiles() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:attendantOutboundProfiles' });
        }

        AttendantOutboundProfiles._super.constructor.apply(this, arguments);
    }
    _util.inherits(AttendantOutboundProfiles, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AttendantOutboundProfiles.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AttendantOutboundProfile); }))) {
                    try {
                        value = value.map(function(item){ return new AttendantOutboundProfile(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AttendantOutboundProfiles.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AttendantOutboundProfiles, '__type', { value: 'urn:inin.com:configuration.system:attendantOutboundProfiles' });

    Object.defineProperty(AttendantOutboundProfiles, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:attendantOutboundProfiles'] = AttendantOutboundProfiles;

    return AttendantOutboundProfiles;
}());

var AttendantOutboundProfile = (function(){
    var hasProps = false;

    function AttendantOutboundProfile() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:attendantOutboundProfile' });
        }

        AttendantOutboundProfile._super.constructor.apply(this, arguments);
    }
    _util.inherits(AttendantOutboundProfile, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AttendantOutboundProfile.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting AttendantOutboundProfile.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AttendantOutboundProfile, '__type', { value: 'urn:inin.com:configuration.system:attendantOutboundProfile' });

    Object.defineProperty(AttendantOutboundProfile, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:attendantOutboundProfile'] = AttendantOutboundProfile;

    return AttendantOutboundProfile;
}());

var SubsystemCertificatesResult = (function(){
    var hasProps = false;

    function SubsystemCertificatesResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:subsystemCertificatesResult' });
        }

        SubsystemCertificatesResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(SubsystemCertificatesResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SubsystemCertificatesResult.prototype, 'subsystemCertificates', {
            get: function() { return this.__prop_subsystemCertificates; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SubsystemCertificatesEntry); }))) {
                    try {
                        value = value.map(function(item){ return new SubsystemCertificatesEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SubsystemCertificatesResult.subsystemCertificates: ' + e.message);
                    }
                }

                this.__prop_subsystemCertificates = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SubsystemCertificatesResult, '__type', { value: 'urn:inin.com:configuration.system:subsystemCertificatesResult' });

    Object.defineProperty(SubsystemCertificatesResult, '__propInfo', {
        get: function() {
            var pi = {
                'subsystemCertificates': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:subsystemCertificatesResult'] = SubsystemCertificatesResult;

    return SubsystemCertificatesResult;
}());

var SubsystemCertificatesEntry = (function(){
    var hasProps = false;

    function SubsystemCertificatesEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:subsystemCertificatesEntry' });
        }

        SubsystemCertificatesEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(SubsystemCertificatesEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SubsystemCertificatesEntry.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SubsystemCertificatesEntry.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(SubsystemCertificatesEntry.prototype, 'application', {
            get: function() { return this.__prop_application; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SubsystemCertificatesEntry.application, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_application = value;
            },
            enumerable: true
        });

        Object.defineProperty(SubsystemCertificatesEntry.prototype, 'dateCreated', {
            get: function() { return this.__prop_dateCreated; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SubsystemCertificatesEntry.dateCreated, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dateCreated = value;
            },
            enumerable: true
        });

        Object.defineProperty(SubsystemCertificatesEntry.prototype, 'status', {
            get: function() { return this.__prop_status; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SubsystemCertificatesEntry.status, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_status = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SubsystemCertificatesEntry, '__type', { value: 'urn:inin.com:configuration.system:subsystemCertificatesEntry' });

    Object.defineProperty(SubsystemCertificatesEntry, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'application': { required: true, nullable: false },
                'dateCreated': { required: true, nullable: false },
                'status': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:subsystemCertificatesEntry'] = SubsystemCertificatesEntry;

    return SubsystemCertificatesEntry;
}());

var TrustSubsystemCertificateArgument = (function(){
    var hasProps = false;

    function TrustSubsystemCertificateArgument() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:trustSubsystemCertificateArgument' });
        }

        TrustSubsystemCertificateArgument._super.constructor.apply(this, arguments);
    }
    _util.inherits(TrustSubsystemCertificateArgument, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TrustSubsystemCertificateArgument.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for TrustSubsystemCertificateArgument.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(TrustSubsystemCertificateArgument.prototype, 'trust', {
            get: function() { return this.__prop_trust; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for TrustSubsystemCertificateArgument.trust, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_trust = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TrustSubsystemCertificateArgument, '__type', { value: 'urn:inin.com:configuration.system:trustSubsystemCertificateArgument' });

    Object.defineProperty(TrustSubsystemCertificateArgument, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'trust': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:trustSubsystemCertificateArgument'] = TrustSubsystemCertificateArgument;

    return TrustSubsystemCertificateArgument;
}());

var ContactListSources = (function(){
    var hasProps = false;

    function ContactListSources() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:contactListSources' });
        }

        ContactListSources._super.constructor.apply(this, arguments);
    }
    _util.inherits(ContactListSources, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ContactListSources.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ContactListSource); }))) {
                    try {
                        value = value.map(function(item){ return new ContactListSource(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ContactListSources.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ContactListSources, '__type', { value: 'urn:inin.com:configuration.system:contactListSources' });

    Object.defineProperty(ContactListSources, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:contactListSources'] = ContactListSources;

    return ContactListSources;
}());

var ContactListSource = (function(){
    var hasProps = false;

    function ContactListSource() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:contactListSource' });
        }

        ContactListSource._super.constructor.apply(this, arguments);
    }
    _util.inherits(ContactListSource, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ContactListSource.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactListSource.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactListSource.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ContactListSource.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactListSource.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ContactListSource.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactListSource.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ContactListSource.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactListSource.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ContactListSource.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactListSource.prototype, 'label', {
            get: function() { return this.__prop_label; },
            set: function(value) {
                if (!(value instanceof Configuration.MultiLanguageString || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.MultiLanguageString(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactListSource.label: ' + e.message);
                    }
                }

                this.__prop_label = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ContactListSource, '__type', { value: 'urn:inin.com:configuration.system:contactListSource' });

    Object.defineProperty(ContactListSource, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'label': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:contactListSource'] = ContactListSource;

    return ContactListSource;
}());

var DialPlanClassifications = (function(){
    var hasProps = false;

    function DialPlanClassifications() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:dialPlanClassifications' });
        }

        DialPlanClassifications._super.constructor.apply(this, arguments);
    }
    _util.inherits(DialPlanClassifications, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DialPlanClassifications.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DialPlanClassification); }))) {
                    try {
                        value = value.map(function(item){ return new DialPlanClassification(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DialPlanClassifications.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DialPlanClassifications, '__type', { value: 'urn:inin.com:configuration.system:dialPlanClassifications' });

    Object.defineProperty(DialPlanClassifications, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:dialPlanClassifications'] = DialPlanClassifications;

    return DialPlanClassifications;
}());

var DnisMappings = (function(){
    var hasProps = false;

    function DnisMappings() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:dnisMappings' });
        }

        DnisMappings._super.constructor.apply(this, arguments);
    }
    _util.inherits(DnisMappings, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DnisMappings.prototype, 'routingTable', {
            get: function() { return this.__prop_routingTable; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RoutingTableEntrySetting); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new RoutingTableEntrySetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DnisMappings.routingTable: ' + e.message);
                    }
                }

                this.__prop_routingTable = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DnisMappings, '__type', { value: 'urn:inin.com:configuration.system:dnisMappings' });

    Object.defineProperty(DnisMappings, '__propInfo', {
        get: function() {
            var pi = {
                'routingTable': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:dnisMappings'] = DnisMappings;

    return DnisMappings;
}());

var RoutingTableEntrySetting = (function(){
    var hasProps = false;

    function RoutingTableEntrySetting() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:routingTableEntrySetting' });
        }

        RoutingTableEntrySetting._super.constructor.apply(this, arguments);
    }
    _util.inherits(RoutingTableEntrySetting, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RoutingTableEntrySetting.prototype, 'dnis', {
            get: function() { return this.__prop_dnis; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RoutingTableEntrySetting.dnis, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dnis = value;
            },
            enumerable: true
        });

        Object.defineProperty(RoutingTableEntrySetting.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting RoutingTableEntrySetting.id: ' + e.message);
                    }
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(RoutingTableEntrySetting.prototype, 'destinationType', {
            get: function() { return this.__prop_destinationType; },
            set: function(value) {
                if (!(value instanceof DestinationType)) {
                    try {
                        value = new DestinationType(value);
                    } catch (e) {
                        throw new TypeError('Error setting RoutingTableEntrySetting.destinationType: ' + e.message);
                    }
                }

                this.__prop_destinationType = value;
            },
            enumerable: true
        });

        Object.defineProperty(RoutingTableEntrySetting.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for RoutingTableEntrySetting.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(RoutingTableEntrySetting.prototype, 'substitutionType', {
            get: function() { return this.__prop_substitutionType; },
            set: function(value) {
                if (!(value instanceof SubstitutionType || value === void 0 || value === null)) {
                    try {
                        value = new SubstitutionType(value);
                    } catch (e) {
                        throw new TypeError('Error setting RoutingTableEntrySetting.substitutionType: ' + e.message);
                    }
                }

                this.__prop_substitutionType = value;
            },
            enumerable: true
        });

        Object.defineProperty(RoutingTableEntrySetting.prototype, 'extension', {
            get: function() { return this.__prop_extension; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for RoutingTableEntrySetting.extension, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_extension = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RoutingTableEntrySetting, '__type', { value: 'urn:inin.com:configuration.system:routingTableEntrySetting' });

    Object.defineProperty(RoutingTableEntrySetting, '__propInfo', {
        get: function() {
            var pi = {
                'dnis': { required: true, nullable: false },
                'id': { required: true, nullable: false },
                'destinationType': { required: true, nullable: false },
                'description': { required: false, nullable: true },
                'substitutionType': { required: false, nullable: true },
                'extension': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:routingTableEntrySetting'] = RoutingTableEntrySetting;

    return RoutingTableEntrySetting;
}());

var EFaqs = (function(){
    var hasProps = false;

    function EFaqs() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:eFaqs' });
        }

        EFaqs._super.constructor.apply(this, arguments);
    }
    _util.inherits(EFaqs, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EFaqs.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EFaq); }))) {
                    try {
                        value = value.map(function(item){ return new EFaq(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EFaqs.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EFaqs, '__type', { value: 'urn:inin.com:configuration.system:eFaqs' });

    Object.defineProperty(EFaqs, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:eFaqs'] = EFaqs;

    return EFaqs;
}());

var EFaq = (function(){
    var hasProps = false;

    function EFaq() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:eFaq' });
        }

        EFaq._super.constructor.apply(this, arguments);
    }
    _util.inherits(EFaq, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EFaq.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting EFaq.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EFaq, '__type', { value: 'urn:inin.com:configuration.system:eFaq' });

    Object.defineProperty(EFaq, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:eFaq'] = EFaq;

    return EFaq;
}());

var FaxGroups = (function(){
    var hasProps = false;

    function FaxGroups() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:faxGroups' });
        }

        FaxGroups._super.constructor.apply(this, arguments);
    }
    _util.inherits(FaxGroups, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FaxGroups.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FaxGroup); }))) {
                    try {
                        value = value.map(function(item){ return new FaxGroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FaxGroups.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FaxGroups, '__type', { value: 'urn:inin.com:configuration.system:faxGroups' });

    Object.defineProperty(FaxGroups, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:faxGroups'] = FaxGroups;

    return FaxGroups;
}());

var FaxGroup = (function(){
    var hasProps = false;

    function FaxGroup() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:faxGroup' });
        }

        FaxGroup._super.constructor.apply(this, arguments);
    }
    _util.inherits(FaxGroup, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FaxGroup.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting FaxGroup.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(FaxGroup.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for FaxGroup.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(FaxGroup.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FaxGroup.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(FaxGroup.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for FaxGroup.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(FaxGroup.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for FaxGroup.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FaxGroup, '__type', { value: 'urn:inin.com:configuration.system:faxGroup' });

    Object.defineProperty(FaxGroup, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:faxGroup'] = FaxGroup;

    return FaxGroup;
}());

var FeatureLicenses = (function(){
    var hasProps = false;

    function FeatureLicenses() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:featureLicenses' });
        }

        FeatureLicenses._super.constructor.apply(this, arguments);
    }
    _util.inherits(FeatureLicenses, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FeatureLicenses.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FeatureLicense); }))) {
                    try {
                        value = value.map(function(item){ return new FeatureLicense(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FeatureLicenses.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FeatureLicenses, '__type', { value: 'urn:inin.com:configuration.system:featureLicenses' });

    Object.defineProperty(FeatureLicenses, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:featureLicenses'] = FeatureLicenses;

    return FeatureLicenses;
}());

var FeatureLicense = (function(){
    var hasProps = false;

    function FeatureLicense() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:featureLicense' });
        }

        FeatureLicense._super.constructor.apply(this, arguments);
    }
    _util.inherits(FeatureLicense, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FeatureLicense.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting FeatureLicense.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FeatureLicense, '__type', { value: 'urn:inin.com:configuration.system:featureLicense' });

    Object.defineProperty(FeatureLicense, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:featureLicense'] = FeatureLicense;

    return FeatureLicense;
}());

var FeedbackSurveyGroups = (function(){
    var hasProps = false;

    function FeedbackSurveyGroups() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:feedbackSurveyGroups' });
        }

        FeedbackSurveyGroups._super.constructor.apply(this, arguments);
    }
    _util.inherits(FeedbackSurveyGroups, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FeedbackSurveyGroups.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FeedbackSurveyGroup); }))) {
                    try {
                        value = value.map(function(item){ return new FeedbackSurveyGroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FeedbackSurveyGroups.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FeedbackSurveyGroups, '__type', { value: 'urn:inin.com:configuration.system:feedbackSurveyGroups' });

    Object.defineProperty(FeedbackSurveyGroups, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:feedbackSurveyGroups'] = FeedbackSurveyGroups;

    return FeedbackSurveyGroups;
}());

var FeedbackSurveyGroup = (function(){
    var hasProps = false;

    function FeedbackSurveyGroup() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:feedbackSurveyGroup' });
        }

        FeedbackSurveyGroup._super.constructor.apply(this, arguments);
    }
    _util.inherits(FeedbackSurveyGroup, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FeedbackSurveyGroup.prototype, 'surveys', {
            get: function() { return this.__prop_surveys; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FeedbackSurveyGroup.surveys: ' + e.message);
                    }
                }

                this.__prop_surveys = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FeedbackSurveyGroup, '__type', { value: 'urn:inin.com:configuration.system:feedbackSurveyGroup' });

    Object.defineProperty(FeedbackSurveyGroup, '__propInfo', {
        get: function() {
            var pi = {
                'surveys': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:feedbackSurveyGroup'] = FeedbackSurveyGroup;

    return FeedbackSurveyGroup;
}());

var FeedbackSurveys = (function(){
    var hasProps = false;

    function FeedbackSurveys() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:feedbackSurveys' });
        }

        FeedbackSurveys._super.constructor.apply(this, arguments);
    }
    _util.inherits(FeedbackSurveys, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FeedbackSurveys.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FeedbackSurvey); }))) {
                    try {
                        value = value.map(function(item){ return new FeedbackSurvey(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FeedbackSurveys.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FeedbackSurveys, '__type', { value: 'urn:inin.com:configuration.system:feedbackSurveys' });

    Object.defineProperty(FeedbackSurveys, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:feedbackSurveys'] = FeedbackSurveys;

    return FeedbackSurveys;
}());

var FeedbackSurvey = (function(){
    var hasProps = false;

    function FeedbackSurvey() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:feedbackSurvey' });
        }

        FeedbackSurvey._super.constructor.apply(this, arguments);
    }
    _util.inherits(FeedbackSurvey, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FeedbackSurvey.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting FeedbackSurvey.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FeedbackSurvey, '__type', { value: 'urn:inin.com:configuration.system:feedbackSurvey' });

    Object.defineProperty(FeedbackSurvey, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:feedbackSurvey'] = FeedbackSurvey;

    return FeedbackSurvey;
}());

var Handlers = (function(){
    var hasProps = false;

    function Handlers() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:handlers' });
        }

        Handlers._super.constructor.apply(this, arguments);
    }
    _util.inherits(Handlers, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Handlers.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Handler); }))) {
                    try {
                        value = value.map(function(item){ return new Handler(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Handlers.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Handlers, '__type', { value: 'urn:inin.com:configuration.system:handlers' });

    Object.defineProperty(Handlers, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:handlers'] = Handlers;

    return Handlers;
}());

var Handler = (function(){
    var hasProps = false;

    function Handler() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:handler' });
        }

        Handler._super.constructor.apply(this, arguments);
    }
    _util.inherits(Handler, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Handler.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Handler.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Handler.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Handler.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Handler.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Handler.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Handler.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Handler.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Handler.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Handler.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Handler, '__type', { value: 'urn:inin.com:configuration.system:handler' });

    Object.defineProperty(Handler, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:handler'] = Handler;

    return Handler;
}());

var IcDataSources = (function(){
    var hasProps = false;

    function IcDataSources() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:icDataSources' });
        }

        IcDataSources._super.constructor.apply(this, arguments);
    }
    _util.inherits(IcDataSources, _util.DataContract);

    function defineProps() {
        Object.defineProperty(IcDataSources.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof IcDataSource); }))) {
                    try {
                        value = value.map(function(item){ return new IcDataSource(item); });
                    } catch (e) {
                        throw new TypeError('Error setting IcDataSources.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(IcDataSources, '__type', { value: 'urn:inin.com:configuration.system:icDataSources' });

    Object.defineProperty(IcDataSources, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:icDataSources'] = IcDataSources;

    return IcDataSources;
}());

var IcDataSource = (function(){
    var hasProps = false;

    function IcDataSource() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:icDataSource' });
        }

        IcDataSource._super.constructor.apply(this, arguments);
    }
    _util.inherits(IcDataSource, _util.DataContract);

    function defineProps() {
        Object.defineProperty(IcDataSource.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting IcDataSource.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for IcDataSource.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting IcDataSource.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for IcDataSource.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'additionalInformation', {
            get: function() { return this.__prop_additionalInformation; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.additionalInformation, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_additionalInformation = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'bindDn', {
            get: function() { return this.__prop_bindDn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.bindDn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_bindDn = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'connectionString', {
            get: function() { return this.__prop_connectionString; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.connectionString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_connectionString = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'dataSourceSubType', {
            get: function() { return this.__prop_dataSourceSubType; },
            set: function(value) {
                if (!(value instanceof DataSourceSubType || value === void 0 || value === null)) {
                    try {
                        value = new DataSourceSubType(value);
                    } catch (e) {
                        throw new TypeError('Error setting IcDataSource.dataSourceSubType: ' + e.message);
                    }
                }

                this.__prop_dataSourceSubType = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'dataSourceType', {
            get: function() { return this.__prop_dataSourceType; },
            set: function(value) {
                if (!(value instanceof DataSourceType || value === void 0)) {
                    try {
                        value = new DataSourceType(value);
                    } catch (e) {
                        throw new TypeError('Error setting IcDataSource.dataSourceType: ' + e.message);
                    }
                }

                this.__prop_dataSourceType = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'driver', {
            get: function() { return this.__prop_driver; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.driver, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_driver = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'folder', {
            get: function() { return this.__prop_folder; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.folder, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_folder = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'hasManualConnectionString', {
            get: function() { return this.__prop_hasManualConnectionString; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for IcDataSource.hasManualConnectionString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasManualConnectionString = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'hostName', {
            get: function() { return this.__prop_hostName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.hostName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hostName = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'isFileDsn', {
            get: function() { return this.__prop_isFileDsn; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for IcDataSource.isFileDsn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isFileDsn = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'isReadOnly', {
            get: function() { return this.__prop_isReadOnly; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for IcDataSource.isReadOnly, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isReadOnly = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'odbcDsn', {
            get: function() { return this.__prop_odbcDsn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.odbcDsn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_odbcDsn = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'password', {
            get: function() { return this.__prop_password; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.password, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_password = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'port', {
            get: function() { return this.__prop_port; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.port, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_port = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'qualifier', {
            get: function() { return this.__prop_qualifier; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.qualifier, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_qualifier = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'searchDn', {
            get: function() { return this.__prop_searchDn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.searchDn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_searchDn = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'url', {
            get: function() { return this.__prop_url; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.url, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_url = value;
            },
            enumerable: true
        });

        Object.defineProperty(IcDataSource.prototype, 'userId', {
            get: function() { return this.__prop_userId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IcDataSource.userId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(IcDataSource, '__type', { value: 'urn:inin.com:configuration.system:icDataSource' });

    Object.defineProperty(IcDataSource, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'additionalInformation': { required: false, nullable: true },
                'bindDn': { required: false, nullable: true },
                'connectionString': { required: false, nullable: true },
                'dataSourceSubType': { required: false, nullable: true },
                'dataSourceType': { required: false, nullable: false },
                'driver': { required: false, nullable: true },
                'folder': { required: false, nullable: true },
                'hasManualConnectionString': { required: false, nullable: true },
                'hostName': { required: false, nullable: true },
                'isFileDsn': { required: false, nullable: true },
                'isReadOnly': { required: false, nullable: true },
                'odbcDsn': { required: false, nullable: true },
                'password': { required: false, nullable: true },
                'port': { required: false, nullable: true },
                'qualifier': { required: false, nullable: true },
                'searchDn': { required: false, nullable: true },
                'url': { required: false, nullable: true },
                'userId': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:icDataSource'] = IcDataSource;

    return IcDataSource;
}());

var ImageResourceCategories = (function(){
    var hasProps = false;

    function ImageResourceCategories() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:imageResourceCategories' });
        }

        ImageResourceCategories._super.constructor.apply(this, arguments);
    }
    _util.inherits(ImageResourceCategories, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ImageResourceCategories.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ImageResourceCategory); }))) {
                    try {
                        value = value.map(function(item){ return new ImageResourceCategory(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ImageResourceCategories.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ImageResourceCategories, '__type', { value: 'urn:inin.com:configuration.system:imageResourceCategories' });

    Object.defineProperty(ImageResourceCategories, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:imageResourceCategories'] = ImageResourceCategories;

    return ImageResourceCategories;
}());

var ImageResourceCategory = (function(){
    var hasProps = false;

    function ImageResourceCategory() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:imageResourceCategory' });
        }

        ImageResourceCategory._super.constructor.apply(this, arguments);
    }
    _util.inherits(ImageResourceCategory, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ImageResourceCategory.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ImageResourceCategory.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResourceCategory.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ImageResourceCategory.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResourceCategory.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ImageResourceCategory.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResourceCategory.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ImageResourceCategory.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResourceCategory.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ImageResourceCategory.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResourceCategory.prototype, 'maximumFileSize', {
            get: function() { return this.__prop_maximumFileSize; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ImageResourceCategory.maximumFileSize, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximumFileSize = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResourceCategory.prototype, 'maximumHorizontalResolution', {
            get: function() { return this.__prop_maximumHorizontalResolution; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ImageResourceCategory.maximumHorizontalResolution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximumHorizontalResolution = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResourceCategory.prototype, 'maximumVerticalResolution', {
            get: function() { return this.__prop_maximumVerticalResolution; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ImageResourceCategory.maximumVerticalResolution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximumVerticalResolution = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResourceCategory.prototype, 'minimumHorizontalResolution', {
            get: function() { return this.__prop_minimumHorizontalResolution; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ImageResourceCategory.minimumHorizontalResolution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimumHorizontalResolution = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResourceCategory.prototype, 'minimumVerticalResolution', {
            get: function() { return this.__prop_minimumVerticalResolution; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ImageResourceCategory.minimumVerticalResolution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimumVerticalResolution = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResourceCategory.prototype, 'supportedTypes', {
            get: function() { return this.__prop_supportedTypes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ImageMimeType); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ImageMimeType(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ImageResourceCategory.supportedTypes: ' + e.message);
                    }
                }

                this.__prop_supportedTypes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ImageResourceCategory, '__type', { value: 'urn:inin.com:configuration.system:imageResourceCategory' });

    Object.defineProperty(ImageResourceCategory, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'maximumFileSize': { required: false, nullable: true },
                'maximumHorizontalResolution': { required: false, nullable: true },
                'maximumVerticalResolution': { required: false, nullable: true },
                'minimumHorizontalResolution': { required: false, nullable: true },
                'minimumVerticalResolution': { required: false, nullable: true },
                'supportedTypes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:imageResourceCategory'] = ImageResourceCategory;

    return ImageResourceCategory;
}());

var ImageResources = (function(){
    var hasProps = false;

    function ImageResources() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:imageResources' });
        }

        ImageResources._super.constructor.apply(this, arguments);
    }
    _util.inherits(ImageResources, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ImageResources.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ImageResource); }))) {
                    try {
                        value = value.map(function(item){ return new ImageResource(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ImageResources.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ImageResources, '__type', { value: 'urn:inin.com:configuration.system:imageResources' });

    Object.defineProperty(ImageResources, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:imageResources'] = ImageResources;

    return ImageResources;
}());

var InitializationFunctions = (function(){
    var hasProps = false;

    function InitializationFunctions() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:initializationFunctions' });
        }

        InitializationFunctions._super.constructor.apply(this, arguments);
    }
    _util.inherits(InitializationFunctions, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InitializationFunctions.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InitializationFunction); }))) {
                    try {
                        value = value.map(function(item){ return new InitializationFunction(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InitializationFunctions.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InitializationFunctions, '__type', { value: 'urn:inin.com:configuration.system:initializationFunctions' });

    Object.defineProperty(InitializationFunctions, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:initializationFunctions'] = InitializationFunctions;

    return InitializationFunctions;
}());

var InitializationFunction = (function(){
    var hasProps = false;

    function InitializationFunction() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:initializationFunction' });
        }

        InitializationFunction._super.constructor.apply(this, arguments);
    }
    _util.inherits(InitializationFunction, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InitializationFunction.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InitializationFunction.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitializationFunction.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for InitializationFunction.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitializationFunction.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InitializationFunction.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitializationFunction.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for InitializationFunction.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitializationFunction.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for InitializationFunction.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InitializationFunction, '__type', { value: 'urn:inin.com:configuration.system:initializationFunction' });

    Object.defineProperty(InitializationFunction, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:initializationFunction'] = InitializationFunction;

    return InitializationFunction;
}());

var InteractionClientPlugins = (function(){
    var hasProps = false;

    function InteractionClientPlugins() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:interactionClientPlugins' });
        }

        InteractionClientPlugins._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionClientPlugins, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionClientPlugins.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionClientPlugin); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionClientPlugin(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionClientPlugins.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionClientPlugins, '__type', { value: 'urn:inin.com:configuration.system:interactionClientPlugins' });

    Object.defineProperty(InteractionClientPlugins, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:interactionClientPlugins'] = InteractionClientPlugins;

    return InteractionClientPlugins;
}());

var InteractionClientPlugin = (function(){
    var hasProps = false;

    function InteractionClientPlugin() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:interactionClientPlugin' });
        }

        InteractionClientPlugin._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionClientPlugin, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionClientPlugin.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionClientPlugin.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionClientPlugin.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for InteractionClientPlugin.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionClientPlugin.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionClientPlugin.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionClientPlugin.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for InteractionClientPlugin.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionClientPlugin.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for InteractionClientPlugin.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionClientPlugin.prototype, 'required', {
            get: function() { return this.__prop_required; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for InteractionClientPlugin.required, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_required = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionClientPlugin.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for InteractionClientPlugin.type, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionClientPlugin, '__type', { value: 'urn:inin.com:configuration.system:interactionClientPlugin' });

    Object.defineProperty(InteractionClientPlugin, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'required': { required: false, nullable: true },
                'type': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:interactionClientPlugin'] = InteractionClientPlugin;

    return InteractionClientPlugin;
}());

var InteractionConferenceRooms = (function(){
    var hasProps = false;

    function InteractionConferenceRooms() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:interactionConferenceRooms' });
        }

        InteractionConferenceRooms._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionConferenceRooms, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionConferenceRooms.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionConferenceRoom); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionConferenceRoom(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionConferenceRooms.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionConferenceRooms, '__type', { value: 'urn:inin.com:configuration.system:interactionConferenceRooms' });

    Object.defineProperty(InteractionConferenceRooms, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:interactionConferenceRooms'] = InteractionConferenceRooms;

    return InteractionConferenceRooms;
}());

var InteractionConferenceRoom = (function(){
    var hasProps = false;

    function InteractionConferenceRoom() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:interactionConferenceRoom' });
        }

        InteractionConferenceRoom._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionConferenceRoom, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionConferenceRoom.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionConferenceRoom.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionConferenceRoom.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for InteractionConferenceRoom.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionConferenceRoom.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionConferenceRoom.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionConferenceRoom.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for InteractionConferenceRoom.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionConferenceRoom.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for InteractionConferenceRoom.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionConferenceRoom, '__type', { value: 'urn:inin.com:configuration.system:interactionConferenceRoom' });

    Object.defineProperty(InteractionConferenceRoom, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:interactionConferenceRoom'] = InteractionConferenceRoom;

    return InteractionConferenceRoom;
}());

var InteractionProcessAutomationProcesses = (function(){
    var hasProps = false;

    function InteractionProcessAutomationProcesses() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:interactionProcessAutomationProcesses' });
        }

        InteractionProcessAutomationProcesses._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionProcessAutomationProcesses, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionProcessAutomationProcesses.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionProcessAutomationProcess); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionProcessAutomationProcess(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionProcessAutomationProcesses.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionProcessAutomationProcesses, '__type', { value: 'urn:inin.com:configuration.system:interactionProcessAutomationProcesses' });

    Object.defineProperty(InteractionProcessAutomationProcesses, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:interactionProcessAutomationProcesses'] = InteractionProcessAutomationProcesses;

    return InteractionProcessAutomationProcesses;
}());

var InteractionProcessAutomationProcess = (function(){
    var hasProps = false;

    function InteractionProcessAutomationProcess() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:interactionProcessAutomationProcess' });
        }

        InteractionProcessAutomationProcess._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionProcessAutomationProcess, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionProcessAutomationProcess.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionProcessAutomationProcess.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionProcessAutomationProcess, '__type', { value: 'urn:inin.com:configuration.system:interactionProcessAutomationProcess' });

    Object.defineProperty(InteractionProcessAutomationProcess, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:interactionProcessAutomationProcess'] = InteractionProcessAutomationProcess;

    return InteractionProcessAutomationProcess;
}());

var InteractionProcessorTables = (function(){
    var hasProps = false;

    function InteractionProcessorTables() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:interactionProcessorTables' });
        }

        InteractionProcessorTables._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionProcessorTables, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionProcessorTables.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionProcessorTable); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionProcessorTable(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionProcessorTables.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionProcessorTables, '__type', { value: 'urn:inin.com:configuration.system:interactionProcessorTables' });

    Object.defineProperty(InteractionProcessorTables, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:interactionProcessorTables'] = InteractionProcessorTables;

    return InteractionProcessorTables;
}());

var InteractionProcessorTable = (function(){
    var hasProps = false;

    function InteractionProcessorTable() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:interactionProcessorTable' });
        }

        InteractionProcessorTable._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionProcessorTable, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionProcessorTable.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionProcessorTable.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionProcessorTable.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for InteractionProcessorTable.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionProcessorTable.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionProcessorTable.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionProcessorTable.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for InteractionProcessorTable.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionProcessorTable.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for InteractionProcessorTable.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionProcessorTable, '__type', { value: 'urn:inin.com:configuration.system:interactionProcessorTable' });

    Object.defineProperty(InteractionProcessorTable, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:interactionProcessorTable'] = InteractionProcessorTable;

    return InteractionProcessorTable;
}());

var Layouts = (function(){
    var hasProps = false;

    function Layouts() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:layouts' });
        }

        Layouts._super.constructor.apply(this, arguments);
    }
    _util.inherits(Layouts, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Layouts.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Layout); }))) {
                    try {
                        value = value.map(function(item){ return new Layout(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Layouts.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Layouts, '__type', { value: 'urn:inin.com:configuration.system:layouts' });

    Object.defineProperty(Layouts, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:layouts'] = Layouts;

    return Layouts;
}());

var LicenseAllocations = (function(){
    var hasProps = false;

    function LicenseAllocations() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:licenseAllocations' });
        }

        LicenseAllocations._super.constructor.apply(this, arguments);
    }
    _util.inherits(LicenseAllocations, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LicenseAllocations.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LicenseAllocation); }))) {
                    try {
                        value = value.map(function(item){ return new LicenseAllocation(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LicenseAllocations.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LicenseAllocations, '__type', { value: 'urn:inin.com:configuration.system:licenseAllocations' });

    Object.defineProperty(LicenseAllocations, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:licenseAllocations'] = LicenseAllocations;

    return LicenseAllocations;
}());

var LicenseAllocation = (function(){
    var hasProps = false;

    function LicenseAllocation() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:licenseAllocation' });
        }

        LicenseAllocation._super.constructor.apply(this, arguments);
    }
    _util.inherits(LicenseAllocation, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LicenseAllocation.prototype, 'appliedStationCount', {
            get: function() { return this.__prop_appliedStationCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for LicenseAllocation.appliedStationCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_appliedStationCount = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseAllocation.prototype, 'appliedUserCount', {
            get: function() { return this.__prop_appliedUserCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for LicenseAllocation.appliedUserCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_appliedUserCount = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseAllocation.prototype, 'assignableAllowedCount', {
            get: function() { return this.__prop_assignableAllowedCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for LicenseAllocation.assignableAllowedCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_assignableAllowedCount = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseAllocation.prototype, 'assignableConfiguredCount', {
            get: function() { return this.__prop_assignableConfiguredCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for LicenseAllocation.assignableConfiguredCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_assignableConfiguredCount = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseAllocation.prototype, 'concurrentAllowedCount', {
            get: function() { return this.__prop_concurrentAllowedCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for LicenseAllocation.concurrentAllowedCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_concurrentAllowedCount = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseAllocation.prototype, 'concurrentConfiguredCount', {
            get: function() { return this.__prop_concurrentConfiguredCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for LicenseAllocation.concurrentConfiguredCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_concurrentConfiguredCount = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseAllocation.prototype, 'concurrentInUseCount', {
            get: function() { return this.__prop_concurrentInUseCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for LicenseAllocation.concurrentInUseCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_concurrentInUseCount = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseAllocation.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting LicenseAllocation.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseAllocation.prototype, 'totalAppliedCount', {
            get: function() { return this.__prop_totalAppliedCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for LicenseAllocation.totalAppliedCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_totalAppliedCount = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseAllocation.prototype, 'totalCount', {
            get: function() { return this.__prop_totalCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for LicenseAllocation.totalCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_totalCount = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LicenseAllocation, '__type', { value: 'urn:inin.com:configuration.system:licenseAllocation' });

    Object.defineProperty(LicenseAllocation, '__propInfo', {
        get: function() {
            var pi = {
                'appliedStationCount': { required: false, nullable: true },
                'appliedUserCount': { required: false, nullable: true },
                'assignableAllowedCount': { required: false, nullable: true },
                'assignableConfiguredCount': { required: false, nullable: true },
                'concurrentAllowedCount': { required: false, nullable: true },
                'concurrentConfiguredCount': { required: false, nullable: true },
                'concurrentInUseCount': { required: false, nullable: true },
                'configurationId': { required: false, nullable: false },
                'totalAppliedCount': { required: false, nullable: true },
                'totalCount': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:licenseAllocation'] = LicenseAllocation;

    return LicenseAllocation;
}());

var LinesAuthorityCertificates = (function(){
    var hasProps = false;

    function LinesAuthorityCertificates() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:linesAuthorityCertificates' });
        }

        LinesAuthorityCertificates._super.constructor.apply(this, arguments);
    }
    _util.inherits(LinesAuthorityCertificates, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LinesAuthorityCertificates.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LinesAuthorityCertificate); }))) {
                    try {
                        value = value.map(function(item){ return new LinesAuthorityCertificate(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LinesAuthorityCertificates.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LinesAuthorityCertificates, '__type', { value: 'urn:inin.com:configuration.system:linesAuthorityCertificates' });

    Object.defineProperty(LinesAuthorityCertificates, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:linesAuthorityCertificates'] = LinesAuthorityCertificates;

    return LinesAuthorityCertificates;
}());

var LinesAuthorityCertificate = (function(){
    var hasProps = false;

    function LinesAuthorityCertificate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:linesAuthorityCertificate' });
        }

        LinesAuthorityCertificate._super.constructor.apply(this, arguments);
    }
    _util.inherits(LinesAuthorityCertificate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LinesAuthorityCertificate.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting LinesAuthorityCertificate.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(LinesAuthorityCertificate.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for LinesAuthorityCertificate.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(LinesAuthorityCertificate.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LinesAuthorityCertificate.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(LinesAuthorityCertificate.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for LinesAuthorityCertificate.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(LinesAuthorityCertificate.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for LinesAuthorityCertificate.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LinesAuthorityCertificate, '__type', { value: 'urn:inin.com:configuration.system:linesAuthorityCertificate' });

    Object.defineProperty(LinesAuthorityCertificate, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:linesAuthorityCertificate'] = LinesAuthorityCertificate;

    return LinesAuthorityCertificate;
}());

var ImapSmtpMailboxAttributesResult = (function(){
    var hasProps = false;

    function ImapSmtpMailboxAttributesResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:imapSmtpMailboxAttributesResult' });
        }

        ImapSmtpMailboxAttributesResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(ImapSmtpMailboxAttributesResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ImapSmtpMailboxAttributesResult.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ImapSmtpMailboxAttributesResult.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImapSmtpMailboxAttributesResult.prototype, 'emailAddress', {
            get: function() { return this.__prop_emailAddress; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ImapSmtpMailboxAttributesResult.emailAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImapSmtpMailboxAttributesResult.prototype, 'directoryEntry', {
            get: function() { return this.__prop_directoryEntry; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ImapSmtpMailboxAttributesResult.directoryEntry, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_directoryEntry = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImapSmtpMailboxAttributesResult.prototype, 'mailbox', {
            get: function() { return this.__prop_mailbox; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ImapSmtpMailboxAttributesResult.mailbox, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mailbox = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImapSmtpMailboxAttributesResult.prototype, 'mailboxOption', {
            get: function() { return this.__prop_mailboxOption; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ImapSmtpMailboxAttributesResult.mailboxOption, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mailboxOption = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ImapSmtpMailboxAttributesResult, '__type', { value: 'urn:inin.com:configuration.system:imapSmtpMailboxAttributesResult' });

    Object.defineProperty(ImapSmtpMailboxAttributesResult, '__propInfo', {
        get: function() {
            var pi = {
                'displayName': { required: true, nullable: false },
                'emailAddress': { required: true, nullable: false },
                'directoryEntry': { required: true, nullable: false },
                'mailbox': { required: true, nullable: false },
                'mailboxOption': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:imapSmtpMailboxAttributesResult'] = ImapSmtpMailboxAttributesResult;

    return ImapSmtpMailboxAttributesResult;
}());

var InteractionMessageStoreMailboxAttributesResult = (function(){
    var hasProps = false;

    function InteractionMessageStoreMailboxAttributesResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:interactionMessageStoreMailboxAttributesResult' });
        }

        InteractionMessageStoreMailboxAttributesResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionMessageStoreMailboxAttributesResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionMessageStoreMailboxAttributesResult.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionMessageStoreMailboxAttributesResult.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionMessageStoreMailboxAttributesResult.prototype, 'emailAddress', {
            get: function() { return this.__prop_emailAddress; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionMessageStoreMailboxAttributesResult.emailAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionMessageStoreMailboxAttributesResult.prototype, 'directoryEntry', {
            get: function() { return this.__prop_directoryEntry; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionMessageStoreMailboxAttributesResult.directoryEntry, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_directoryEntry = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionMessageStoreMailboxAttributesResult.prototype, 'mailbox', {
            get: function() { return this.__prop_mailbox; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionMessageStoreMailboxAttributesResult.mailbox, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mailbox = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionMessageStoreMailboxAttributesResult.prototype, 'mailboxOption', {
            get: function() { return this.__prop_mailboxOption; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractionMessageStoreMailboxAttributesResult.mailboxOption, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mailboxOption = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionMessageStoreMailboxAttributesResult, '__type', { value: 'urn:inin.com:configuration.system:interactionMessageStoreMailboxAttributesResult' });

    Object.defineProperty(InteractionMessageStoreMailboxAttributesResult, '__propInfo', {
        get: function() {
            var pi = {
                'displayName': { required: true, nullable: false },
                'emailAddress': { required: true, nullable: false },
                'directoryEntry': { required: true, nullable: false },
                'mailbox': { required: true, nullable: false },
                'mailboxOption': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:interactionMessageStoreMailboxAttributesResult'] = InteractionMessageStoreMailboxAttributesResult;

    return InteractionMessageStoreMailboxAttributesResult;
}());

var NoMailboxAttributesResult = (function(){
    var hasProps = false;

    function NoMailboxAttributesResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:noMailboxAttributesResult' });
        }

        NoMailboxAttributesResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(NoMailboxAttributesResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(NoMailboxAttributesResult.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for NoMailboxAttributesResult.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(NoMailboxAttributesResult.prototype, 'emailAddress', {
            get: function() { return this.__prop_emailAddress; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for NoMailboxAttributesResult.emailAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(NoMailboxAttributesResult.prototype, 'directoryEntry', {
            get: function() { return this.__prop_directoryEntry; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for NoMailboxAttributesResult.directoryEntry, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_directoryEntry = value;
            },
            enumerable: true
        });

        Object.defineProperty(NoMailboxAttributesResult.prototype, 'mailbox', {
            get: function() { return this.__prop_mailbox; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for NoMailboxAttributesResult.mailbox, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mailbox = value;
            },
            enumerable: true
        });

        Object.defineProperty(NoMailboxAttributesResult.prototype, 'mailboxOption', {
            get: function() { return this.__prop_mailboxOption; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for NoMailboxAttributesResult.mailboxOption, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mailboxOption = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(NoMailboxAttributesResult, '__type', { value: 'urn:inin.com:configuration.system:noMailboxAttributesResult' });

    Object.defineProperty(NoMailboxAttributesResult, '__propInfo', {
        get: function() {
            var pi = {
                'displayName': { required: true, nullable: false },
                'emailAddress': { required: true, nullable: false },
                'directoryEntry': { required: true, nullable: false },
                'mailbox': { required: true, nullable: false },
                'mailboxOption': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:noMailboxAttributesResult'] = NoMailboxAttributesResult;

    return NoMailboxAttributesResult;
}());

var EnabledMailboxProvidersResult = (function(){
    var hasProps = false;

    function EnabledMailboxProvidersResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:enabledMailboxProvidersResult' });
        }

        EnabledMailboxProvidersResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(EnabledMailboxProvidersResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EnabledMailboxProvidersResult.prototype, 'enabledMailboxTypes', {
            get: function() { return this.__prop_enabledMailboxTypes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SystemMailboxType); }))) {
                    try {
                        value = value.map(function(item){ return new SystemMailboxType(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EnabledMailboxProvidersResult.enabledMailboxTypes: ' + e.message);
                    }
                }

                this.__prop_enabledMailboxTypes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EnabledMailboxProvidersResult, '__type', { value: 'urn:inin.com:configuration.system:enabledMailboxProvidersResult' });

    Object.defineProperty(EnabledMailboxProvidersResult, '__propInfo', {
        get: function() {
            var pi = {
                'enabledMailboxTypes': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:enabledMailboxProvidersResult'] = EnabledMailboxProvidersResult;

    return EnabledMailboxProvidersResult;
}());

var ImapServersResult = (function(){
    var hasProps = false;

    function ImapServersResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:imapServersResult' });
        }

        ImapServersResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(ImapServersResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ImapServersResult.prototype, 'imapServers', {
            get: function() { return this.__prop_imapServers; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ImapServersEntry); }))) {
                    try {
                        value = value.map(function(item){ return new ImapServersEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ImapServersResult.imapServers: ' + e.message);
                    }
                }

                this.__prop_imapServers = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ImapServersResult, '__type', { value: 'urn:inin.com:configuration.system:imapServersResult' });

    Object.defineProperty(ImapServersResult, '__propInfo', {
        get: function() {
            var pi = {
                'imapServers': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:imapServersResult'] = ImapServersResult;

    return ImapServersResult;
}());

var ImapServersEntry = (function(){
    var hasProps = false;

    function ImapServersEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:imapServersEntry' });
        }

        ImapServersEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(ImapServersEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ImapServersEntry.prototype, 'serverName', {
            get: function() { return this.__prop_serverName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ImapServersEntry.serverName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_serverName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImapServersEntry.prototype, 'supportProxyAuthentication', {
            get: function() { return this.__prop_supportProxyAuthentication; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ImapServersEntry.supportProxyAuthentication, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_supportProxyAuthentication = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ImapServersEntry, '__type', { value: 'urn:inin.com:configuration.system:imapServersEntry' });

    Object.defineProperty(ImapServersEntry, '__propInfo', {
        get: function() {
            var pi = {
                'serverName': { required: true, nullable: false },
                'supportProxyAuthentication': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:imapServersEntry'] = ImapServersEntry;

    return ImapServersEntry;
}());

var SearchableProvidersResult = (function(){
    var hasProps = false;

    function SearchableProvidersResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:searchableProvidersResult' });
        }

        SearchableProvidersResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(SearchableProvidersResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SearchableProvidersResult.prototype, 'searchableProviders', {
            get: function() { return this.__prop_searchableProviders; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for SearchableProvidersResult.searchableProviders, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_searchableProviders = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SearchableProvidersResult, '__type', { value: 'urn:inin.com:configuration.system:searchableProvidersResult' });

    Object.defineProperty(SearchableProvidersResult, '__propInfo', {
        get: function() {
            var pi = {
                'searchableProviders': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:searchableProvidersResult'] = SearchableProvidersResult;

    return SearchableProvidersResult;
}());

var FoldersResult = (function(){
    var hasProps = false;

    function FoldersResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:foldersResult' });
        }

        FoldersResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(FoldersResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FoldersResult.prototype, 'folders', {
            get: function() { return this.__prop_folders; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for FoldersResult.folders, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_folders = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FoldersResult, '__type', { value: 'urn:inin.com:configuration.system:foldersResult' });

    Object.defineProperty(FoldersResult, '__propInfo', {
        get: function() {
            var pi = {
                'folders': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:foldersResult'] = FoldersResult;

    return FoldersResult;
}());

var DirectoriesResult = (function(){
    var hasProps = false;

    function DirectoriesResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:directoriesResult' });
        }

        DirectoriesResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectoriesResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DirectoriesResult.prototype, 'directories', {
            get: function() { return this.__prop_directories; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DirectoriesEntry); }))) {
                    try {
                        value = value.map(function(item){ return new DirectoriesEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DirectoriesResult.directories: ' + e.message);
                    }
                }

                this.__prop_directories = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DirectoriesResult, '__type', { value: 'urn:inin.com:configuration.system:directoriesResult' });

    Object.defineProperty(DirectoriesResult, '__propInfo', {
        get: function() {
            var pi = {
                'directories': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:directoriesResult'] = DirectoriesResult;

    return DirectoriesResult;
}());

var DirectoriesEntry = (function(){
    var hasProps = false;

    function DirectoriesEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:directoriesEntry' });
        }

        DirectoriesEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectoriesEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DirectoriesEntry.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectoriesEntry.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoriesEntry.prototype, 'emailAddress', {
            get: function() { return this.__prop_emailAddress; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectoriesEntry.emailAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoriesEntry.prototype, 'directoryEntry', {
            get: function() { return this.__prop_directoryEntry; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectoriesEntry.directoryEntry, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_directoryEntry = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoriesEntry.prototype, 'mailbox', {
            get: function() { return this.__prop_mailbox; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectoriesEntry.mailbox, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mailbox = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoriesEntry.prototype, 'mailboxOption', {
            get: function() { return this.__prop_mailboxOption; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectoriesEntry.mailboxOption, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mailboxOption = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoriesEntry.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectoriesEntry.type, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DirectoriesEntry, '__type', { value: 'urn:inin.com:configuration.system:directoriesEntry' });

    Object.defineProperty(DirectoriesEntry, '__propInfo', {
        get: function() {
            var pi = {
                'displayName': { required: true, nullable: false },
                'emailAddress': { required: true, nullable: false },
                'directoryEntry': { required: true, nullable: false },
                'mailbox': { required: true, nullable: false },
                'mailboxOption': { required: true, nullable: false },
                'type': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:directoriesEntry'] = DirectoriesEntry;

    return DirectoriesEntry;
}());

var SendEmailArgument = (function(){
    var hasProps = false;

    function SendEmailArgument() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:sendEmailArgument' });
        }

        SendEmailArgument._super.constructor.apply(this, arguments);
    }
    _util.inherits(SendEmailArgument, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SendEmailArgument.prototype, 'recipients', {
            get: function() { return this.__prop_recipients; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for SendEmailArgument.recipients, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recipients = value;
            },
            enumerable: true
        });

        Object.defineProperty(SendEmailArgument.prototype, 'subject', {
            get: function() { return this.__prop_subject; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for SendEmailArgument.subject, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subject = value;
            },
            enumerable: true
        });

        Object.defineProperty(SendEmailArgument.prototype, 'body', {
            get: function() { return this.__prop_body; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for SendEmailArgument.body, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_body = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SendEmailArgument, '__type', { value: 'urn:inin.com:configuration.system:sendEmailArgument' });

    Object.defineProperty(SendEmailArgument, '__propInfo', {
        get: function() {
            var pi = {
                'recipients': { required: true, nullable: false },
                'subject': { required: false, nullable: false },
                'body': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:sendEmailArgument'] = SendEmailArgument;

    return SendEmailArgument;
}());

var MiscellaneousItems = (function(){
    var hasProps = false;

    function MiscellaneousItems() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:miscellaneousItems' });
        }

        MiscellaneousItems._super.constructor.apply(this, arguments);
    }
    _util.inherits(MiscellaneousItems, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MiscellaneousItems.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MiscellaneousItem); }))) {
                    try {
                        value = value.map(function(item){ return new MiscellaneousItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MiscellaneousItems.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MiscellaneousItems, '__type', { value: 'urn:inin.com:configuration.system:miscellaneousItems' });

    Object.defineProperty(MiscellaneousItems, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:miscellaneousItems'] = MiscellaneousItems;

    return MiscellaneousItems;
}());

var MiscellaneousItem = (function(){
    var hasProps = false;

    function MiscellaneousItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:miscellaneousItem' });
        }

        MiscellaneousItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(MiscellaneousItem, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MiscellaneousItem.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting MiscellaneousItem.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MiscellaneousItem, '__type', { value: 'urn:inin.com:configuration.system:miscellaneousItem' });

    Object.defineProperty(MiscellaneousItem, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:miscellaneousItem'] = MiscellaneousItem;

    return MiscellaneousItem;
}());

var Positions = (function(){
    var hasProps = false;

    function Positions() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:positions' });
        }

        Positions._super.constructor.apply(this, arguments);
    }
    _util.inherits(Positions, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Positions.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Position); }))) {
                    try {
                        value = value.map(function(item){ return new Position(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Positions.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Positions, '__type', { value: 'urn:inin.com:configuration.system:positions' });

    Object.defineProperty(Positions, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:positions'] = Positions;

    return Positions;
}());

var ServerParameters = (function(){
    var hasProps = false;

    function ServerParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:serverParameters' });
        }

        ServerParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(ServerParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ServerParameters.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ServerParameter); }))) {
                    try {
                        value = value.map(function(item){ return new ServerParameter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ServerParameters.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ServerParameters, '__type', { value: 'urn:inin.com:configuration.system:serverParameters' });

    Object.defineProperty(ServerParameters, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:serverParameters'] = ServerParameters;

    return ServerParameters;
}());

var SingleSignOnIdentityProviders = (function(){
    var hasProps = false;

    function SingleSignOnIdentityProviders() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:singleSignOnIdentityProviders' });
        }

        SingleSignOnIdentityProviders._super.constructor.apply(this, arguments);
    }
    _util.inherits(SingleSignOnIdentityProviders, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SingleSignOnIdentityProviders.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SingleSignOnIdentityProvider); }))) {
                    try {
                        value = value.map(function(item){ return new SingleSignOnIdentityProvider(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SingleSignOnIdentityProviders.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SingleSignOnIdentityProviders, '__type', { value: 'urn:inin.com:configuration.system:singleSignOnIdentityProviders' });

    Object.defineProperty(SingleSignOnIdentityProviders, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:singleSignOnIdentityProviders'] = SingleSignOnIdentityProviders;

    return SingleSignOnIdentityProviders;
}());

var SingleSignOnIdentityProvider = (function(){
    var hasProps = false;

    function SingleSignOnIdentityProvider() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:singleSignOnIdentityProvider' });
        }

        SingleSignOnIdentityProvider._super.constructor.apply(this, arguments);
    }
    _util.inherits(SingleSignOnIdentityProvider, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SingleSignOnIdentityProvider.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SingleSignOnIdentityProvider.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SingleSignOnIdentityProvider.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SingleSignOnIdentityProvider.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SingleSignOnIdentityProvider.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SingleSignOnIdentityProvider.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SingleSignOnIdentityProvider.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SingleSignOnIdentityProvider.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SingleSignOnIdentityProvider.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SingleSignOnIdentityProvider.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SingleSignOnIdentityProvider, '__type', { value: 'urn:inin.com:configuration.system:singleSignOnIdentityProvider' });

    Object.defineProperty(SingleSignOnIdentityProvider, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:singleSignOnIdentityProvider'] = SingleSignOnIdentityProvider;

    return SingleSignOnIdentityProvider;
}());

var SmsBrokers = (function(){
    var hasProps = false;

    function SmsBrokers() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:smsBrokers' });
        }

        SmsBrokers._super.constructor.apply(this, arguments);
    }
    _util.inherits(SmsBrokers, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SmsBrokers.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SmsBroker); }))) {
                    try {
                        value = value.map(function(item){ return new SmsBroker(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SmsBrokers.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SmsBrokers, '__type', { value: 'urn:inin.com:configuration.system:smsBrokers' });

    Object.defineProperty(SmsBrokers, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:smsBrokers'] = SmsBrokers;

    return SmsBrokers;
}());

var SmsBroker = (function(){
    var hasProps = false;

    function SmsBroker() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:smsBroker' });
        }

        SmsBroker._super.constructor.apply(this, arguments);
    }
    _util.inherits(SmsBroker, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SmsBroker.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SmsBroker.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SmsBroker.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SmsBroker.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SmsBroker.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SmsBroker.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SmsBroker.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SmsBroker.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SmsBroker.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SmsBroker.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SmsBroker, '__type', { value: 'urn:inin.com:configuration.system:smsBroker' });

    Object.defineProperty(SmsBroker, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:smsBroker'] = SmsBroker;

    return SmsBroker;
}());

var StatusMessages = (function(){
    var hasProps = false;

    function StatusMessages() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:statusMessages' });
        }

        StatusMessages._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatusMessages, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatusMessages.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatusMessage); }))) {
                    try {
                        value = value.map(function(item){ return new StatusMessage(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatusMessages.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatusMessages, '__type', { value: 'urn:inin.com:configuration.system:statusMessages' });

    Object.defineProperty(StatusMessages, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:statusMessages'] = StatusMessages;

    return StatusMessages;
}());

var StatusMessage = (function(){
    var hasProps = false;

    function StatusMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:statusMessage' });
        }

        StatusMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatusMessage, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatusMessage.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting StatusMessage.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for StatusMessage.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatusMessage.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for StatusMessage.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StatusMessage.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'allowAcdCalls', {
            get: function() { return this.__prop_allowAcdCalls; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StatusMessage.allowAcdCalls, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowAcdCalls = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'allowFollowUp', {
            get: function() { return this.__prop_allowFollowUp; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StatusMessage.allowFollowUp, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowFollowUp = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'group', {
            get: function() { return this.__prop_group; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StatusMessage.group, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_group = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'hasDate', {
            get: function() { return this.__prop_hasDate; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StatusMessage.hasDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'hasTime', {
            get: function() { return this.__prop_hasTime; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StatusMessage.hasTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'isAfterCallWork', {
            get: function() { return this.__prop_isAfterCallWork; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StatusMessage.isAfterCallWork, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isAfterCallWork = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'isDoNotDisturb', {
            get: function() { return this.__prop_isDoNotDisturb; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StatusMessage.isDoNotDisturb, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isDoNotDisturb = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'isForward', {
            get: function() { return this.__prop_isForward; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StatusMessage.isForward, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isForward = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'isPersistent', {
            get: function() { return this.__prop_isPersistent; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StatusMessage.isPersistent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isPersistent = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'isUserSelectable', {
            get: function() { return this.__prop_isUserSelectable; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StatusMessage.isUserSelectable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isUserSelectable = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusMessage.prototype, 'messageText', {
            get: function() { return this.__prop_messageText; },
            set: function(value) {
                if (!(value instanceof Configuration.MultiLanguageString || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.MultiLanguageString(value);
                    } catch (e) {
                        throw new TypeError('Error setting StatusMessage.messageText: ' + e.message);
                    }
                }

                this.__prop_messageText = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatusMessage, '__type', { value: 'urn:inin.com:configuration.system:statusMessage' });

    Object.defineProperty(StatusMessage, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'allowAcdCalls': { required: false, nullable: true },
                'allowFollowUp': { required: false, nullable: true },
                'group': { required: false, nullable: true },
                'hasDate': { required: false, nullable: true },
                'hasTime': { required: false, nullable: true },
                'isAfterCallWork': { required: false, nullable: true },
                'isDoNotDisturb': { required: false, nullable: true },
                'isForward': { required: false, nullable: true },
                'isPersistent': { required: false, nullable: true },
                'isUserSelectable': { required: false, nullable: true },
                'messageText': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:statusMessage'] = StatusMessage;

    return StatusMessage;
}());

var SystemParameters = (function(){
    var hasProps = false;

    function SystemParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:systemParameters' });
        }

        SystemParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(SystemParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SystemParameters.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SystemParameter); }))) {
                    try {
                        value = value.map(function(item){ return new SystemParameter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SystemParameters.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SystemParameters, '__type', { value: 'urn:inin.com:configuration.system:systemParameters' });

    Object.defineProperty(SystemParameters, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:systemParameters'] = SystemParameters;

    return SystemParameters;
}());

var UpdateService = (function(){
    var hasProps = false;

    function UpdateService() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:updateService' });
        }

        UpdateService._super.constructor.apply(this, arguments);
    }
    _util.inherits(UpdateService, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UpdateService.prototype, 'updateProviderIsAvailable', {
            get: function() { return this.__prop_updateProviderIsAvailable; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for UpdateService.updateProviderIsAvailable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_updateProviderIsAvailable = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateService.prototype, 'updateProviderOverrideURI', {
            get: function() { return this.__prop_updateProviderOverrideURI; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for UpdateService.updateProviderOverrideURI, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_updateProviderOverrideURI = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UpdateService, '__type', { value: 'urn:inin.com:configuration.system:updateService' });

    Object.defineProperty(UpdateService, '__propInfo', {
        get: function() {
            var pi = {
                'updateProviderIsAvailable': { required: false, nullable: true },
                'updateProviderOverrideURI': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:updateService'] = UpdateService;

    return UpdateService;
}());

var WebServicesParameters = (function(){
    var hasProps = false;

    function WebServicesParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:webServicesParameters' });
        }

        WebServicesParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(WebServicesParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WebServicesParameters.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof WebServicesParameter); }))) {
                    try {
                        value = value.map(function(item){ return new WebServicesParameter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WebServicesParameters.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WebServicesParameters, '__type', { value: 'urn:inin.com:configuration.system:webServicesParameters' });

    Object.defineProperty(WebServicesParameters, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:webServicesParameters'] = WebServicesParameters;

    return WebServicesParameters;
}());

var WebServicesParameter = (function(){
    var hasProps = false;

    function WebServicesParameter() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:webServicesParameter' });
        }

        WebServicesParameter._super.constructor.apply(this, arguments);
    }
    _util.inherits(WebServicesParameter, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WebServicesParameter.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting WebServicesParameter.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(WebServicesParameter.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for WebServicesParameter.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(WebServicesParameter.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WebServicesParameter.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(WebServicesParameter.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for WebServicesParameter.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(WebServicesParameter.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for WebServicesParameter.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WebServicesParameter, '__type', { value: 'urn:inin.com:configuration.system:webServicesParameter' });

    Object.defineProperty(WebServicesParameter, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:webServicesParameter'] = WebServicesParameter;

    return WebServicesParameter;
}());

var LoginAuthenticationMessage = (function(){
    var hasProps = false;

    function LoginAuthenticationMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:loginAuthenticationMessage', enumerable: true });
        }

        LoginAuthenticationMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(LoginAuthenticationMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(LoginAuthenticationMessage.prototype, 'loginAuthentication', {
            get: function() { return this.__prop_loginAuthentication; },
            set: function(value) {
                if (!(value instanceof LoginAuthentication)) {
                    try {
                        value = new LoginAuthentication(value);
                    } catch (e) {
                        throw new TypeError('Error setting LoginAuthenticationMessage.loginAuthentication: ' + e.message);
                    }
                }

                this.__prop_loginAuthentication = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LoginAuthenticationMessage, '__type', { value: 'urn:inin.com:configuration.system:loginAuthenticationMessage' });

    Object.defineProperty(LoginAuthenticationMessage, '__propInfo', {
        get: function() {
            var pi = {
                'loginAuthentication': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:loginAuthenticationMessage'] = LoginAuthenticationMessage;

    return LoginAuthenticationMessage;
}());

var MailMessage = (function(){
    var hasProps = false;

    function MailMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:mailMessage', enumerable: true });
        }

        MailMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(MailMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(MailMessage.prototype, 'mail', {
            get: function() { return this.__prop_mail; },
            set: function(value) {
                if (!(value instanceof Mail)) {
                    try {
                        value = new Mail(value);
                    } catch (e) {
                        throw new TypeError('Error setting MailMessage.mail: ' + e.message);
                    }
                }

                this.__prop_mail = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MailMessage, '__type', { value: 'urn:inin.com:configuration.system:mailMessage' });

    Object.defineProperty(MailMessage, '__propInfo', {
        get: function() {
            var pi = {
                'mail': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:mailMessage'] = MailMessage;

    return MailMessage;
}());

var ProblemReporterMessage = (function(){
    var hasProps = false;

    function ProblemReporterMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:problemReporterMessage', enumerable: true });
        }

        ProblemReporterMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ProblemReporterMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(ProblemReporterMessage.prototype, 'problemReporter', {
            get: function() { return this.__prop_problemReporter; },
            set: function(value) {
                if (!(value instanceof ProblemReporter)) {
                    try {
                        value = new ProblemReporter(value);
                    } catch (e) {
                        throw new TypeError('Error setting ProblemReporterMessage.problemReporter: ' + e.message);
                    }
                }

                this.__prop_problemReporter = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ProblemReporterMessage, '__type', { value: 'urn:inin.com:configuration.system:problemReporterMessage' });

    Object.defineProperty(ProblemReporterMessage, '__propInfo', {
        get: function() {
            var pi = {
                'problemReporter': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:problemReporterMessage'] = ProblemReporterMessage;

    return ProblemReporterMessage;
}());

var ActionsMessage = (function(){
    var hasProps = false;

    function ActionsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:actionsMessage', enumerable: true });
        }

        ActionsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ActionsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(ActionsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Action); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Action(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ActionsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(ActionsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Action); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Action(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ActionsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(ActionsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for ActionsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ActionsMessage, '__type', { value: 'urn:inin.com:configuration.system:actionsMessage' });

    Object.defineProperty(ActionsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:actionsMessage'] = ActionsMessage;

    return ActionsMessage;
}());

var DialPlanClassificationsMessage = (function(){
    var hasProps = false;

    function DialPlanClassificationsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:dialPlanClassificationsMessage', enumerable: true });
        }

        DialPlanClassificationsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(DialPlanClassificationsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(DialPlanClassificationsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DialPlanClassification); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new DialPlanClassification(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DialPlanClassificationsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialPlanClassificationsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DialPlanClassification); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new DialPlanClassification(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DialPlanClassificationsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialPlanClassificationsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for DialPlanClassificationsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DialPlanClassificationsMessage, '__type', { value: 'urn:inin.com:configuration.system:dialPlanClassificationsMessage' });

    Object.defineProperty(DialPlanClassificationsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:dialPlanClassificationsMessage'] = DialPlanClassificationsMessage;

    return DialPlanClassificationsMessage;
}());

var ImageResourcesMessage = (function(){
    var hasProps = false;

    function ImageResourcesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:imageResourcesMessage', enumerable: true });
        }

        ImageResourcesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ImageResourcesMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(ImageResourcesMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ImageResource); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ImageResource(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ImageResourcesMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResourcesMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ImageResource); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ImageResource(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ImageResourcesMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(ImageResourcesMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for ImageResourcesMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ImageResourcesMessage, '__type', { value: 'urn:inin.com:configuration.system:imageResourcesMessage' });

    Object.defineProperty(ImageResourcesMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:imageResourcesMessage'] = ImageResourcesMessage;

    return ImageResourcesMessage;
}());

var LayoutsMessage = (function(){
    var hasProps = false;

    function LayoutsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:layoutsMessage', enumerable: true });
        }

        LayoutsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(LayoutsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(LayoutsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Layout); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Layout(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LayoutsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(LayoutsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Layout); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Layout(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LayoutsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(LayoutsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for LayoutsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LayoutsMessage, '__type', { value: 'urn:inin.com:configuration.system:layoutsMessage' });

    Object.defineProperty(LayoutsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:layoutsMessage'] = LayoutsMessage;

    return LayoutsMessage;
}());

var PositionsMessage = (function(){
    var hasProps = false;

    function PositionsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:positionsMessage', enumerable: true });
        }

        PositionsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(PositionsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(PositionsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Position); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Position(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PositionsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(PositionsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Position); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Position(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PositionsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(PositionsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for PositionsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PositionsMessage, '__type', { value: 'urn:inin.com:configuration.system:positionsMessage' });

    Object.defineProperty(PositionsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:positionsMessage'] = PositionsMessage;

    return PositionsMessage;
}());

var ServerParametersMessage = (function(){
    var hasProps = false;

    function ServerParametersMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:serverParametersMessage', enumerable: true });
        }

        ServerParametersMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ServerParametersMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(ServerParametersMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ServerParameter); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ServerParameter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ServerParametersMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(ServerParametersMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ServerParameter); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ServerParameter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ServerParametersMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(ServerParametersMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for ServerParametersMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ServerParametersMessage, '__type', { value: 'urn:inin.com:configuration.system:serverParametersMessage' });

    Object.defineProperty(ServerParametersMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:serverParametersMessage'] = ServerParametersMessage;

    return ServerParametersMessage;
}());

var SystemParametersMessage = (function(){
    var hasProps = false;

    function SystemParametersMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.system:systemParametersMessage', enumerable: true });
        }

        SystemParametersMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(SystemParametersMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(SystemParametersMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SystemParameter); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SystemParameter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SystemParametersMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(SystemParametersMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SystemParameter); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SystemParameter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SystemParametersMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(SystemParametersMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for SystemParametersMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SystemParametersMessage, '__type', { value: 'urn:inin.com:configuration.system:systemParametersMessage' });

    Object.defineProperty(SystemParametersMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.system:systemParametersMessage'] = SystemParametersMessage;

    return SystemParametersMessage;
}());

var $accumulators = (function(){
    function getAccumulators(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAccumulators.params)) {
            try {
                params = new getAccumulators.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAccumulators.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Accumulators) ? o : new Accumulators(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAccumulators.method, getAccumulators.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAccumulators, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/accumulators', enumerable: true }
    });

    getAccumulators.params = (function(){
        _util.inherits(getAccumulators_params, _util.RequestParams);

        function getAccumulators_params(properties) {
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

            getAccumulators_params._super.constructor.apply(this, arguments);
        }

        return getAccumulators_params;
    })();

    function getAccumulator(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAccumulator.params)) {
            try {
                params = new getAccumulator.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAccumulator.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Accumulator) ? o : new Accumulator(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAccumulator.method, getAccumulator.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAccumulator, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/accumulators/{id}', enumerable: true }
    });

    getAccumulator.params = (function(){
        _util.inherits(getAccumulator_params, _util.RequestParams);

        function getAccumulator_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getAccumulator_params._super.constructor.apply(this, arguments);
        }

        return getAccumulator_params;
    })();

    return Object.create(null, {
        getAccumulators: { value: getAccumulators, enumerable: true },
        getAccumulator: { value: getAccumulator, enumerable: true }
    });
})();

var $actions = (function(){
    function getActions(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getActions.params)) {
            try {
                params = new getActions.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getActions.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Actions) ? o : new Actions(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getActions.method, getActions.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getActions, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/actions', enumerable: true }
    });

    getActions.params = (function(){
        _util.inherits(getActions_params, _util.RequestParams);

        function getActions_params(properties) {
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

            getActions_params._super.constructor.apply(this, arguments);
        }

        return getActions_params;
    })();

    function createAction(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createAction.params)) {
            try {
                params = new createAction.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createAction.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createAction.method, createAction.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createAction, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/actions', enumerable: true }
    });

    createAction.params = (function(){
        _util.inherits(createAction_params, _util.RequestParams);

        function createAction_params(properties) {
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
            if (!(properties.content instanceof Action)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.Action');
            }

            createAction_params._super.constructor.apply(this, arguments);
        }

        return createAction_params;
    })();

    function getAction(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAction.params)) {
            try {
                params = new getAction.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAction.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Action) ? o : new Action(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAction.method, getAction.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAction, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/actions/{id}', enumerable: true }
    });

    getAction.params = (function(){
        _util.inherits(getAction_params, _util.RequestParams);

        function getAction_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getAction_params._super.constructor.apply(this, arguments);
        }

        return getAction_params;
    })();

    function deleteAction(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteAction.params)) {
            try {
                params = new deleteAction.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteAction.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteAction.method, deleteAction.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteAction, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/actions/{id}', enumerable: true }
    });

    deleteAction.params = (function(){
        _util.inherits(deleteAction_params, _util.RequestParams);

        function deleteAction_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteAction_params._super.constructor.apply(this, arguments);
        }

        return deleteAction_params;
    })();

    function updateAction(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateAction.params)) {
            try {
                params = new updateAction.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAction.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateAction.method, updateAction.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateAction, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/actions/{id}', enumerable: true }
    });

    updateAction.params = (function(){
        _util.inherits(updateAction_params, _util.RequestParams);

        function updateAction_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Action)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.Action');
            }

            updateAction_params._super.constructor.apply(this, arguments);
        }

        return updateAction_params;
    })();

    return Object.create(null, {
        getActions: { value: getActions, enumerable: true },
        createAction: { value: createAction, enumerable: true },
        getAction: { value: getAction, enumerable: true },
        deleteAction: { value: deleteAction, enumerable: true },
        updateAction: { value: updateAction, enumerable: true }
    });
})();

var $attendantEmailProfiles = (function(){
    function getAttendantEmailProfiles(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAttendantEmailProfiles.params)) {
            try {
                params = new getAttendantEmailProfiles.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAttendantEmailProfiles.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AttendantEmailProfiles) ? o : new AttendantEmailProfiles(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAttendantEmailProfiles.method, getAttendantEmailProfiles.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAttendantEmailProfiles, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/attendant-email-profiles', enumerable: true }
    });

    getAttendantEmailProfiles.params = (function(){
        _util.inherits(getAttendantEmailProfiles_params, _util.RequestParams);

        function getAttendantEmailProfiles_params(properties) {
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

            getAttendantEmailProfiles_params._super.constructor.apply(this, arguments);
        }

        return getAttendantEmailProfiles_params;
    })();

    function getAttendantEmailProfile(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAttendantEmailProfile.params)) {
            try {
                params = new getAttendantEmailProfile.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAttendantEmailProfile.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AttendantEmailProfile) ? o : new AttendantEmailProfile(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAttendantEmailProfile.method, getAttendantEmailProfile.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAttendantEmailProfile, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/attendant-email-profiles/{id}', enumerable: true }
    });

    getAttendantEmailProfile.params = (function(){
        _util.inherits(getAttendantEmailProfile_params, _util.RequestParams);

        function getAttendantEmailProfile_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getAttendantEmailProfile_params._super.constructor.apply(this, arguments);
        }

        return getAttendantEmailProfile_params;
    })();

    return Object.create(null, {
        getAttendantEmailProfiles: { value: getAttendantEmailProfiles, enumerable: true },
        getAttendantEmailProfile: { value: getAttendantEmailProfile, enumerable: true }
    });
})();

var $attendantInboundProfiles = (function(){
    function getAttendantInboundProfiles(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAttendantInboundProfiles.params)) {
            try {
                params = new getAttendantInboundProfiles.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAttendantInboundProfiles.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AttendantInboundProfiles) ? o : new AttendantInboundProfiles(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAttendantInboundProfiles.method, getAttendantInboundProfiles.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAttendantInboundProfiles, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/attendant-inbound-profiles', enumerable: true }
    });

    getAttendantInboundProfiles.params = (function(){
        _util.inherits(getAttendantInboundProfiles_params, _util.RequestParams);

        function getAttendantInboundProfiles_params(properties) {
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

            getAttendantInboundProfiles_params._super.constructor.apply(this, arguments);
        }

        return getAttendantInboundProfiles_params;
    })();

    function getAttendantInboundProfile(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAttendantInboundProfile.params)) {
            try {
                params = new getAttendantInboundProfile.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAttendantInboundProfile.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AttendantInboundProfile) ? o : new AttendantInboundProfile(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAttendantInboundProfile.method, getAttendantInboundProfile.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAttendantInboundProfile, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/attendant-inbound-profiles/{id}', enumerable: true }
    });

    getAttendantInboundProfile.params = (function(){
        _util.inherits(getAttendantInboundProfile_params, _util.RequestParams);

        function getAttendantInboundProfile_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getAttendantInboundProfile_params._super.constructor.apply(this, arguments);
        }

        return getAttendantInboundProfile_params;
    })();

    return Object.create(null, {
        getAttendantInboundProfiles: { value: getAttendantInboundProfiles, enumerable: true },
        getAttendantInboundProfile: { value: getAttendantInboundProfile, enumerable: true }
    });
})();

var $attendantOperatorProfiles = (function(){
    function getAttendantOperatorProfiles(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAttendantOperatorProfiles.params)) {
            try {
                params = new getAttendantOperatorProfiles.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAttendantOperatorProfiles.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AttendantOperatorProfiles) ? o : new AttendantOperatorProfiles(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAttendantOperatorProfiles.method, getAttendantOperatorProfiles.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAttendantOperatorProfiles, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/attendant-operator-profiles', enumerable: true }
    });

    getAttendantOperatorProfiles.params = (function(){
        _util.inherits(getAttendantOperatorProfiles_params, _util.RequestParams);

        function getAttendantOperatorProfiles_params(properties) {
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

            getAttendantOperatorProfiles_params._super.constructor.apply(this, arguments);
        }

        return getAttendantOperatorProfiles_params;
    })();

    function getAttendantOperatorProfile(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAttendantOperatorProfile.params)) {
            try {
                params = new getAttendantOperatorProfile.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAttendantOperatorProfile.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AttendantOperatorProfile) ? o : new AttendantOperatorProfile(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAttendantOperatorProfile.method, getAttendantOperatorProfile.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAttendantOperatorProfile, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/attendant-operator-profiles/{id}', enumerable: true }
    });

    getAttendantOperatorProfile.params = (function(){
        _util.inherits(getAttendantOperatorProfile_params, _util.RequestParams);

        function getAttendantOperatorProfile_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getAttendantOperatorProfile_params._super.constructor.apply(this, arguments);
        }

        return getAttendantOperatorProfile_params;
    })();

    return Object.create(null, {
        getAttendantOperatorProfiles: { value: getAttendantOperatorProfiles, enumerable: true },
        getAttendantOperatorProfile: { value: getAttendantOperatorProfile, enumerable: true }
    });
})();

var $attendantOutboundProfiles = (function(){
    function getAttendantOutboundProfiles(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAttendantOutboundProfiles.params)) {
            try {
                params = new getAttendantOutboundProfiles.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAttendantOutboundProfiles.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AttendantOutboundProfiles) ? o : new AttendantOutboundProfiles(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAttendantOutboundProfiles.method, getAttendantOutboundProfiles.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAttendantOutboundProfiles, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/attendant-outbound-profiles', enumerable: true }
    });

    getAttendantOutboundProfiles.params = (function(){
        _util.inherits(getAttendantOutboundProfiles_params, _util.RequestParams);

        function getAttendantOutboundProfiles_params(properties) {
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

            getAttendantOutboundProfiles_params._super.constructor.apply(this, arguments);
        }

        return getAttendantOutboundProfiles_params;
    })();

    function getAttendantOutboundProfile(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAttendantOutboundProfile.params)) {
            try {
                params = new getAttendantOutboundProfile.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAttendantOutboundProfile.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AttendantOutboundProfile) ? o : new AttendantOutboundProfile(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAttendantOutboundProfile.method, getAttendantOutboundProfile.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAttendantOutboundProfile, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/attendant-outbound-profiles/{id}', enumerable: true }
    });

    getAttendantOutboundProfile.params = (function(){
        _util.inherits(getAttendantOutboundProfile_params, _util.RequestParams);

        function getAttendantOutboundProfile_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getAttendantOutboundProfile_params._super.constructor.apply(this, arguments);
        }

        return getAttendantOutboundProfile_params;
    })();

    return Object.create(null, {
        getAttendantOutboundProfiles: { value: getAttendantOutboundProfiles, enumerable: true },
        getAttendantOutboundProfile: { value: getAttendantOutboundProfile, enumerable: true }
    });
})();

var $contactListSources = (function(){
    function getContactListSources(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getContactListSources.params)) {
            try {
                params = new getContactListSources.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getContactListSources.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ContactListSources) ? o : new ContactListSources(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getContactListSources.method, getContactListSources.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getContactListSources, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/contact-list-sources', enumerable: true }
    });

    getContactListSources.params = (function(){
        _util.inherits(getContactListSources_params, _util.RequestParams);

        function getContactListSources_params(properties) {
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

            getContactListSources_params._super.constructor.apply(this, arguments);
        }

        return getContactListSources_params;
    })();

    function getContactListSource(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getContactListSource.params)) {
            try {
                params = new getContactListSource.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getContactListSource.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ContactListSource) ? o : new ContactListSource(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getContactListSource.method, getContactListSource.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getContactListSource, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/contact-list-sources/{id}', enumerable: true }
    });

    getContactListSource.params = (function(){
        _util.inherits(getContactListSource_params, _util.RequestParams);

        function getContactListSource_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getContactListSource_params._super.constructor.apply(this, arguments);
        }

        return getContactListSource_params;
    })();

    return Object.create(null, {
        getContactListSources: { value: getContactListSources, enumerable: true },
        getContactListSource: { value: getContactListSource, enumerable: true }
    });
})();

var $dialPlanClassifications = (function(){
    function getDialPlanClassifications(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDialPlanClassifications.params)) {
            try {
                params = new getDialPlanClassifications.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDialPlanClassifications.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof DialPlanClassifications) ? o : new DialPlanClassifications(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDialPlanClassifications.method, getDialPlanClassifications.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDialPlanClassifications, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/dial-plan-classifications', enumerable: true }
    });

    getDialPlanClassifications.params = (function(){
        _util.inherits(getDialPlanClassifications_params, _util.RequestParams);

        function getDialPlanClassifications_params(properties) {
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

            getDialPlanClassifications_params._super.constructor.apply(this, arguments);
        }

        return getDialPlanClassifications_params;
    })();

    function getDialPlanClassification(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDialPlanClassification.params)) {
            try {
                params = new getDialPlanClassification.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDialPlanClassification.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof DialPlanClassification) ? o : new DialPlanClassification(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDialPlanClassification.method, getDialPlanClassification.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDialPlanClassification, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/dial-plan-classifications/{id}', enumerable: true }
    });

    getDialPlanClassification.params = (function(){
        _util.inherits(getDialPlanClassification_params, _util.RequestParams);

        function getDialPlanClassification_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getDialPlanClassification_params._super.constructor.apply(this, arguments);
        }

        return getDialPlanClassification_params;
    })();

    return Object.create(null, {
        getDialPlanClassifications: { value: getDialPlanClassifications, enumerable: true },
        getDialPlanClassification: { value: getDialPlanClassification, enumerable: true }
    });
})();

var $dnisMappings = (function(){
    function getDnisMappings(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDnisMappings.params)) {
            try {
                params = new getDnisMappings.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDnisMappings.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof DnisMappings) ? o : new DnisMappings(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDnisMappings.method, getDnisMappings.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDnisMappings, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/dnis-mappings', enumerable: true }
    });

    getDnisMappings.params = (function(){
        _util.inherits(getDnisMappings_params, _util.RequestParams);

        function getDnisMappings_params(properties) {
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

            getDnisMappings_params._super.constructor.apply(this, arguments);
        }

        return getDnisMappings_params;
    })();

    function updateDnisMappings(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateDnisMappings.params)) {
            try {
                params = new updateDnisMappings.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateDnisMappings.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateDnisMappings.method, updateDnisMappings.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateDnisMappings, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/dnis-mappings', enumerable: true }
    });

    updateDnisMappings.params = (function(){
        _util.inherits(updateDnisMappings_params, _util.RequestParams);

        function updateDnisMappings_params(properties) {
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
            if (!(properties.content instanceof DnisMappings)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.DnisMappings');
            }

            updateDnisMappings_params._super.constructor.apply(this, arguments);
        }

        return updateDnisMappings_params;
    })();

    return Object.create(null, {
        getDnisMappings: { value: getDnisMappings, enumerable: true },
        updateDnisMappings: { value: updateDnisMappings, enumerable: true }
    });
})();

var $eFaqs = (function(){
    function getEFaqs(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getEFaqs.params)) {
            try {
                params = new getEFaqs.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getEFaqs.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof EFaqs) ? o : new EFaqs(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getEFaqs.method, getEFaqs.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getEFaqs, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/e-faqs', enumerable: true }
    });

    getEFaqs.params = (function(){
        _util.inherits(getEFaqs_params, _util.RequestParams);

        function getEFaqs_params(properties) {
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

            getEFaqs_params._super.constructor.apply(this, arguments);
        }

        return getEFaqs_params;
    })();

    function getEFaq(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getEFaq.params)) {
            try {
                params = new getEFaq.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getEFaq.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof EFaq) ? o : new EFaq(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getEFaq.method, getEFaq.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getEFaq, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/e-faqs/{id}', enumerable: true }
    });

    getEFaq.params = (function(){
        _util.inherits(getEFaq_params, _util.RequestParams);

        function getEFaq_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getEFaq_params._super.constructor.apply(this, arguments);
        }

        return getEFaq_params;
    })();

    return Object.create(null, {
        getEFaqs: { value: getEFaqs, enumerable: true },
        getEFaq: { value: getEFaq, enumerable: true }
    });
})();

var $faxGroups = (function(){
    function getFaxGroups(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFaxGroups.params)) {
            try {
                params = new getFaxGroups.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFaxGroups.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof FaxGroups) ? o : new FaxGroups(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFaxGroups.method, getFaxGroups.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFaxGroups, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/fax-groups', enumerable: true }
    });

    getFaxGroups.params = (function(){
        _util.inherits(getFaxGroups_params, _util.RequestParams);

        function getFaxGroups_params(properties) {
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

            getFaxGroups_params._super.constructor.apply(this, arguments);
        }

        return getFaxGroups_params;
    })();

    function getFaxGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFaxGroup.params)) {
            try {
                params = new getFaxGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFaxGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof FaxGroup) ? o : new FaxGroup(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFaxGroup.method, getFaxGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFaxGroup, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/fax-groups/{id}', enumerable: true }
    });

    getFaxGroup.params = (function(){
        _util.inherits(getFaxGroup_params, _util.RequestParams);

        function getFaxGroup_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getFaxGroup_params._super.constructor.apply(this, arguments);
        }

        return getFaxGroup_params;
    })();

    return Object.create(null, {
        getFaxGroups: { value: getFaxGroups, enumerable: true },
        getFaxGroup: { value: getFaxGroup, enumerable: true }
    });
})();

var $featureLicenses = (function(){
    function getFeatureLicenses(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFeatureLicenses.params)) {
            try {
                params = new getFeatureLicenses.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFeatureLicenses.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof FeatureLicenses) ? o : new FeatureLicenses(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFeatureLicenses.method, getFeatureLicenses.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFeatureLicenses, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/feature-licenses', enumerable: true }
    });

    getFeatureLicenses.params = (function(){
        _util.inherits(getFeatureLicenses_params, _util.RequestParams);

        function getFeatureLicenses_params(properties) {
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

            getFeatureLicenses_params._super.constructor.apply(this, arguments);
        }

        return getFeatureLicenses_params;
    })();

    function getFeatureLicense(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFeatureLicense.params)) {
            try {
                params = new getFeatureLicense.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFeatureLicense.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof FeatureLicense) ? o : new FeatureLicense(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFeatureLicense.method, getFeatureLicense.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFeatureLicense, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/feature-licenses/{id}', enumerable: true }
    });

    getFeatureLicense.params = (function(){
        _util.inherits(getFeatureLicense_params, _util.RequestParams);

        function getFeatureLicense_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getFeatureLicense_params._super.constructor.apply(this, arguments);
        }

        return getFeatureLicense_params;
    })();

    return Object.create(null, {
        getFeatureLicenses: { value: getFeatureLicenses, enumerable: true },
        getFeatureLicense: { value: getFeatureLicense, enumerable: true }
    });
})();

var $feedbackSurveyGroups = (function(){
    function getFeedbackSurveyGroups(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFeedbackSurveyGroups.params)) {
            try {
                params = new getFeedbackSurveyGroups.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFeedbackSurveyGroups.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof FeedbackSurveyGroups) ? o : new FeedbackSurveyGroups(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFeedbackSurveyGroups.method, getFeedbackSurveyGroups.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFeedbackSurveyGroups, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/feedback-survey-groups', enumerable: true }
    });

    getFeedbackSurveyGroups.params = (function(){
        _util.inherits(getFeedbackSurveyGroups_params, _util.RequestParams);

        function getFeedbackSurveyGroups_params(properties) {
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

            getFeedbackSurveyGroups_params._super.constructor.apply(this, arguments);
        }

        return getFeedbackSurveyGroups_params;
    })();

    function getFeedbackSurveyGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFeedbackSurveyGroup.params)) {
            try {
                params = new getFeedbackSurveyGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFeedbackSurveyGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof FeedbackSurveyGroup) ? o : new FeedbackSurveyGroup(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFeedbackSurveyGroup.method, getFeedbackSurveyGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFeedbackSurveyGroup, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/feedback-survey-groups/{id}', enumerable: true }
    });

    getFeedbackSurveyGroup.params = (function(){
        _util.inherits(getFeedbackSurveyGroup_params, _util.RequestParams);

        function getFeedbackSurveyGroup_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getFeedbackSurveyGroup_params._super.constructor.apply(this, arguments);
        }

        return getFeedbackSurveyGroup_params;
    })();

    return Object.create(null, {
        getFeedbackSurveyGroups: { value: getFeedbackSurveyGroups, enumerable: true },
        getFeedbackSurveyGroup: { value: getFeedbackSurveyGroup, enumerable: true }
    });
})();

var $feedbackSurveys = (function(){
    function getFeedbackSurveys(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFeedbackSurveys.params)) {
            try {
                params = new getFeedbackSurveys.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFeedbackSurveys.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof FeedbackSurveys) ? o : new FeedbackSurveys(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFeedbackSurveys.method, getFeedbackSurveys.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFeedbackSurveys, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/feedback-surveys', enumerable: true }
    });

    getFeedbackSurveys.params = (function(){
        _util.inherits(getFeedbackSurveys_params, _util.RequestParams);

        function getFeedbackSurveys_params(properties) {
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

            getFeedbackSurveys_params._super.constructor.apply(this, arguments);
        }

        return getFeedbackSurveys_params;
    })();

    function getFeedbackSurvey(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFeedbackSurvey.params)) {
            try {
                params = new getFeedbackSurvey.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFeedbackSurvey.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof FeedbackSurvey) ? o : new FeedbackSurvey(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFeedbackSurvey.method, getFeedbackSurvey.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFeedbackSurvey, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/feedback-surveys/{id}', enumerable: true }
    });

    getFeedbackSurvey.params = (function(){
        _util.inherits(getFeedbackSurvey_params, _util.RequestParams);

        function getFeedbackSurvey_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getFeedbackSurvey_params._super.constructor.apply(this, arguments);
        }

        return getFeedbackSurvey_params;
    })();

    return Object.create(null, {
        getFeedbackSurveys: { value: getFeedbackSurveys, enumerable: true },
        getFeedbackSurvey: { value: getFeedbackSurvey, enumerable: true }
    });
})();

var $handlers = (function(){
    function getHandlers(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getHandlers.params)) {
            try {
                params = new getHandlers.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getHandlers.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Handlers) ? o : new Handlers(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getHandlers.method, getHandlers.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getHandlers, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/handlers', enumerable: true }
    });

    getHandlers.params = (function(){
        _util.inherits(getHandlers_params, _util.RequestParams);

        function getHandlers_params(properties) {
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

            getHandlers_params._super.constructor.apply(this, arguments);
        }

        return getHandlers_params;
    })();

    function getHandler(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getHandler.params)) {
            try {
                params = new getHandler.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getHandler.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Handler) ? o : new Handler(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getHandler.method, getHandler.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getHandler, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/handlers/{id}', enumerable: true }
    });

    getHandler.params = (function(){
        _util.inherits(getHandler_params, _util.RequestParams);

        function getHandler_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getHandler_params._super.constructor.apply(this, arguments);
        }

        return getHandler_params;
    })();

    return Object.create(null, {
        getHandlers: { value: getHandlers, enumerable: true },
        getHandler: { value: getHandler, enumerable: true }
    });
})();

var $icDataSources = (function(){
    function getIcDataSources(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getIcDataSources.params)) {
            try {
                params = new getIcDataSources.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getIcDataSources.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof IcDataSources) ? o : new IcDataSources(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getIcDataSources.method, getIcDataSources.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getIcDataSources, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/ic-data-sources', enumerable: true }
    });

    getIcDataSources.params = (function(){
        _util.inherits(getIcDataSources_params, _util.RequestParams);

        function getIcDataSources_params(properties) {
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

            getIcDataSources_params._super.constructor.apply(this, arguments);
        }

        return getIcDataSources_params;
    })();

    function createIcDataSource(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createIcDataSource.params)) {
            try {
                params = new createIcDataSource.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createIcDataSource.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createIcDataSource.method, createIcDataSource.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createIcDataSource, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/ic-data-sources', enumerable: true }
    });

    createIcDataSource.params = (function(){
        _util.inherits(createIcDataSource_params, _util.RequestParams);

        function createIcDataSource_params(properties) {
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
            if (!(properties.content instanceof IcDataSource)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.IcDataSource');
            }

            createIcDataSource_params._super.constructor.apply(this, arguments);
        }

        return createIcDataSource_params;
    })();

    function getIcDataSource(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getIcDataSource.params)) {
            try {
                params = new getIcDataSource.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getIcDataSource.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof IcDataSource) ? o : new IcDataSource(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getIcDataSource.method, getIcDataSource.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getIcDataSource, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/ic-data-sources/{id}', enumerable: true }
    });

    getIcDataSource.params = (function(){
        _util.inherits(getIcDataSource_params, _util.RequestParams);

        function getIcDataSource_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getIcDataSource_params._super.constructor.apply(this, arguments);
        }

        return getIcDataSource_params;
    })();

    function deleteIcDataSource(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteIcDataSource.params)) {
            try {
                params = new deleteIcDataSource.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteIcDataSource.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteIcDataSource.method, deleteIcDataSource.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteIcDataSource, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/ic-data-sources/{id}', enumerable: true }
    });

    deleteIcDataSource.params = (function(){
        _util.inherits(deleteIcDataSource_params, _util.RequestParams);

        function deleteIcDataSource_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteIcDataSource_params._super.constructor.apply(this, arguments);
        }

        return deleteIcDataSource_params;
    })();

    function updateIcDataSource(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateIcDataSource.params)) {
            try {
                params = new updateIcDataSource.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateIcDataSource.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateIcDataSource.method, updateIcDataSource.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateIcDataSource, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/ic-data-sources/{id}', enumerable: true }
    });

    updateIcDataSource.params = (function(){
        _util.inherits(updateIcDataSource_params, _util.RequestParams);

        function updateIcDataSource_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof IcDataSource)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.IcDataSource');
            }

            updateIcDataSource_params._super.constructor.apply(this, arguments);
        }

        return updateIcDataSource_params;
    })();

    return Object.create(null, {
        getIcDataSources: { value: getIcDataSources, enumerable: true },
        createIcDataSource: { value: createIcDataSource, enumerable: true },
        getIcDataSource: { value: getIcDataSource, enumerable: true },
        deleteIcDataSource: { value: deleteIcDataSource, enumerable: true },
        updateIcDataSource: { value: updateIcDataSource, enumerable: true }
    });
})();

var $imageResourceCategories = (function(){
    function getImageResourceCategories(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getImageResourceCategories.params)) {
            try {
                params = new getImageResourceCategories.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getImageResourceCategories.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ImageResourceCategories) ? o : new ImageResourceCategories(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getImageResourceCategories.method, getImageResourceCategories.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getImageResourceCategories, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/image-resource-categories', enumerable: true }
    });

    getImageResourceCategories.params = (function(){
        _util.inherits(getImageResourceCategories_params, _util.RequestParams);

        function getImageResourceCategories_params(properties) {
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

            getImageResourceCategories_params._super.constructor.apply(this, arguments);
        }

        return getImageResourceCategories_params;
    })();

    function getImageResourceCategory(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getImageResourceCategory.params)) {
            try {
                params = new getImageResourceCategory.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getImageResourceCategory.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ImageResourceCategory) ? o : new ImageResourceCategory(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getImageResourceCategory.method, getImageResourceCategory.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getImageResourceCategory, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/image-resource-categories/{id}', enumerable: true }
    });

    getImageResourceCategory.params = (function(){
        _util.inherits(getImageResourceCategory_params, _util.RequestParams);

        function getImageResourceCategory_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getImageResourceCategory_params._super.constructor.apply(this, arguments);
        }

        return getImageResourceCategory_params;
    })();

    return Object.create(null, {
        getImageResourceCategories: { value: getImageResourceCategories, enumerable: true },
        getImageResourceCategory: { value: getImageResourceCategory, enumerable: true }
    });
})();

var $imageResources = (function(){
    function getImageResources(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getImageResources.params)) {
            try {
                params = new getImageResources.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getImageResources.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ImageResources) ? o : new ImageResources(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getImageResources.method, getImageResources.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getImageResources, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/image-resources', enumerable: true }
    });

    getImageResources.params = (function(){
        _util.inherits(getImageResources_params, _util.RequestParams);

        function getImageResources_params(properties) {
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

            getImageResources_params._super.constructor.apply(this, arguments);
        }

        return getImageResources_params;
    })();

    function createImageResource(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createImageResource.params)) {
            try {
                params = new createImageResource.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createImageResource.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createImageResource.method, createImageResource.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createImageResource, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/image-resources', enumerable: true }
    });

    createImageResource.params = (function(){
        _util.inherits(createImageResource_params, _util.RequestParams);

        function createImageResource_params(properties) {
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
            if (!(properties.content instanceof ImageResource)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.ImageResource');
            }

            createImageResource_params._super.constructor.apply(this, arguments);
        }

        return createImageResource_params;
    })();

    function getImageResource(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getImageResource.params)) {
            try {
                params = new getImageResource.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getImageResource.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ImageResource) ? o : new ImageResource(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getImageResource.method, getImageResource.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getImageResource, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/image-resources/{id}', enumerable: true }
    });

    getImageResource.params = (function(){
        _util.inherits(getImageResource_params, _util.RequestParams);

        function getImageResource_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getImageResource_params._super.constructor.apply(this, arguments);
        }

        return getImageResource_params;
    })();

    function deleteImageResource(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteImageResource.params)) {
            try {
                params = new deleteImageResource.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteImageResource.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteImageResource.method, deleteImageResource.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteImageResource, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/image-resources/{id}', enumerable: true }
    });

    deleteImageResource.params = (function(){
        _util.inherits(deleteImageResource_params, _util.RequestParams);

        function deleteImageResource_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteImageResource_params._super.constructor.apply(this, arguments);
        }

        return deleteImageResource_params;
    })();

    function updateImageResource(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateImageResource.params)) {
            try {
                params = new updateImageResource.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateImageResource.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateImageResource.method, updateImageResource.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateImageResource, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/image-resources/{id}', enumerable: true }
    });

    updateImageResource.params = (function(){
        _util.inherits(updateImageResource_params, _util.RequestParams);

        function updateImageResource_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof ImageResource)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.ImageResource');
            }

            updateImageResource_params._super.constructor.apply(this, arguments);
        }

        return updateImageResource_params;
    })();

    return Object.create(null, {
        getImageResources: { value: getImageResources, enumerable: true },
        createImageResource: { value: createImageResource, enumerable: true },
        getImageResource: { value: getImageResource, enumerable: true },
        deleteImageResource: { value: deleteImageResource, enumerable: true },
        updateImageResource: { value: updateImageResource, enumerable: true }
    });
})();

var $initializationFunctions = (function(){
    function getInitializationFunctions(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInitializationFunctions.params)) {
            try {
                params = new getInitializationFunctions.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInitializationFunctions.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InitializationFunctions) ? o : new InitializationFunctions(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInitializationFunctions.method, getInitializationFunctions.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInitializationFunctions, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/initialization-functions', enumerable: true }
    });

    getInitializationFunctions.params = (function(){
        _util.inherits(getInitializationFunctions_params, _util.RequestParams);

        function getInitializationFunctions_params(properties) {
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

            getInitializationFunctions_params._super.constructor.apply(this, arguments);
        }

        return getInitializationFunctions_params;
    })();

    function getInitializationFunction(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInitializationFunction.params)) {
            try {
                params = new getInitializationFunction.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInitializationFunction.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InitializationFunction) ? o : new InitializationFunction(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInitializationFunction.method, getInitializationFunction.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInitializationFunction, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/initialization-functions/{id}', enumerable: true }
    });

    getInitializationFunction.params = (function(){
        _util.inherits(getInitializationFunction_params, _util.RequestParams);

        function getInitializationFunction_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getInitializationFunction_params._super.constructor.apply(this, arguments);
        }

        return getInitializationFunction_params;
    })();

    return Object.create(null, {
        getInitializationFunctions: { value: getInitializationFunctions, enumerable: true },
        getInitializationFunction: { value: getInitializationFunction, enumerable: true }
    });
})();

var $interactionClientPlugins = (function(){
    function getInteractionClientPlugins(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionClientPlugins.params)) {
            try {
                params = new getInteractionClientPlugins.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionClientPlugins.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionClientPlugins) ? o : new InteractionClientPlugins(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionClientPlugins.method, getInteractionClientPlugins.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionClientPlugins, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-client-plugins', enumerable: true }
    });

    getInteractionClientPlugins.params = (function(){
        _util.inherits(getInteractionClientPlugins_params, _util.RequestParams);

        function getInteractionClientPlugins_params(properties) {
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

            getInteractionClientPlugins_params._super.constructor.apply(this, arguments);
        }

        return getInteractionClientPlugins_params;
    })();

    function getInteractionClientPlugin(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionClientPlugin.params)) {
            try {
                params = new getInteractionClientPlugin.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionClientPlugin.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionClientPlugin) ? o : new InteractionClientPlugin(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionClientPlugin.method, getInteractionClientPlugin.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionClientPlugin, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-client-plugins/{id}', enumerable: true }
    });

    getInteractionClientPlugin.params = (function(){
        _util.inherits(getInteractionClientPlugin_params, _util.RequestParams);

        function getInteractionClientPlugin_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getInteractionClientPlugin_params._super.constructor.apply(this, arguments);
        }

        return getInteractionClientPlugin_params;
    })();

    return Object.create(null, {
        getInteractionClientPlugins: { value: getInteractionClientPlugins, enumerable: true },
        getInteractionClientPlugin: { value: getInteractionClientPlugin, enumerable: true }
    });
})();

var $interactionConferenceRooms = (function(){
    function getInteractionConferenceRooms(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionConferenceRooms.params)) {
            try {
                params = new getInteractionConferenceRooms.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionConferenceRooms.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionConferenceRooms) ? o : new InteractionConferenceRooms(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionConferenceRooms.method, getInteractionConferenceRooms.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionConferenceRooms, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-conference-rooms', enumerable: true }
    });

    getInteractionConferenceRooms.params = (function(){
        _util.inherits(getInteractionConferenceRooms_params, _util.RequestParams);

        function getInteractionConferenceRooms_params(properties) {
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

            getInteractionConferenceRooms_params._super.constructor.apply(this, arguments);
        }

        return getInteractionConferenceRooms_params;
    })();

    function getInteractionConferenceRoom(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionConferenceRoom.params)) {
            try {
                params = new getInteractionConferenceRoom.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionConferenceRoom.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionConferenceRoom) ? o : new InteractionConferenceRoom(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionConferenceRoom.method, getInteractionConferenceRoom.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionConferenceRoom, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-conference-rooms/{id}', enumerable: true }
    });

    getInteractionConferenceRoom.params = (function(){
        _util.inherits(getInteractionConferenceRoom_params, _util.RequestParams);

        function getInteractionConferenceRoom_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getInteractionConferenceRoom_params._super.constructor.apply(this, arguments);
        }

        return getInteractionConferenceRoom_params;
    })();

    return Object.create(null, {
        getInteractionConferenceRooms: { value: getInteractionConferenceRooms, enumerable: true },
        getInteractionConferenceRoom: { value: getInteractionConferenceRoom, enumerable: true }
    });
})();

var $interactionProcessAutomationProcesses = (function(){
    function getInteractionProcessAutomationProcesses(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionProcessAutomationProcesses.params)) {
            try {
                params = new getInteractionProcessAutomationProcesses.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionProcessAutomationProcesses.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionProcessAutomationProcesses) ? o : new InteractionProcessAutomationProcesses(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionProcessAutomationProcesses.method, getInteractionProcessAutomationProcesses.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionProcessAutomationProcesses, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-process-automation-processes', enumerable: true }
    });

    getInteractionProcessAutomationProcesses.params = (function(){
        _util.inherits(getInteractionProcessAutomationProcesses_params, _util.RequestParams);

        function getInteractionProcessAutomationProcesses_params(properties) {
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

            getInteractionProcessAutomationProcesses_params._super.constructor.apply(this, arguments);
        }

        return getInteractionProcessAutomationProcesses_params;
    })();

    function getInteractionProcessAutomationProcess(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionProcessAutomationProcess.params)) {
            try {
                params = new getInteractionProcessAutomationProcess.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionProcessAutomationProcess.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionProcessAutomationProcess) ? o : new InteractionProcessAutomationProcess(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionProcessAutomationProcess.method, getInteractionProcessAutomationProcess.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionProcessAutomationProcess, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-process-automation-processes/{id}', enumerable: true }
    });

    getInteractionProcessAutomationProcess.params = (function(){
        _util.inherits(getInteractionProcessAutomationProcess_params, _util.RequestParams);

        function getInteractionProcessAutomationProcess_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getInteractionProcessAutomationProcess_params._super.constructor.apply(this, arguments);
        }

        return getInteractionProcessAutomationProcess_params;
    })();

    return Object.create(null, {
        getInteractionProcessAutomationProcesses: { value: getInteractionProcessAutomationProcesses, enumerable: true },
        getInteractionProcessAutomationProcess: { value: getInteractionProcessAutomationProcess, enumerable: true }
    });
})();

var $interactionProcessorTables = (function(){
    function getInteractionProcessorTables(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionProcessorTables.params)) {
            try {
                params = new getInteractionProcessorTables.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionProcessorTables.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionProcessorTables) ? o : new InteractionProcessorTables(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionProcessorTables.method, getInteractionProcessorTables.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionProcessorTables, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-processor-tables', enumerable: true }
    });

    getInteractionProcessorTables.params = (function(){
        _util.inherits(getInteractionProcessorTables_params, _util.RequestParams);

        function getInteractionProcessorTables_params(properties) {
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

            getInteractionProcessorTables_params._super.constructor.apply(this, arguments);
        }

        return getInteractionProcessorTables_params;
    })();

    function getInteractionProcessorTable(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionProcessorTable.params)) {
            try {
                params = new getInteractionProcessorTable.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionProcessorTable.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionProcessorTable) ? o : new InteractionProcessorTable(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionProcessorTable.method, getInteractionProcessorTable.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionProcessorTable, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-processor-tables/{id}', enumerable: true }
    });

    getInteractionProcessorTable.params = (function(){
        _util.inherits(getInteractionProcessorTable_params, _util.RequestParams);

        function getInteractionProcessorTable_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getInteractionProcessorTable_params._super.constructor.apply(this, arguments);
        }

        return getInteractionProcessorTable_params;
    })();

    return Object.create(null, {
        getInteractionProcessorTables: { value: getInteractionProcessorTables, enumerable: true },
        getInteractionProcessorTable: { value: getInteractionProcessorTable, enumerable: true }
    });
})();

var $layouts = (function(){
    function getLayouts(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLayouts.params)) {
            try {
                params = new getLayouts.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLayouts.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Layouts) ? o : new Layouts(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLayouts.method, getLayouts.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLayouts, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/layouts', enumerable: true }
    });

    getLayouts.params = (function(){
        _util.inherits(getLayouts_params, _util.RequestParams);

        function getLayouts_params(properties) {
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

            getLayouts_params._super.constructor.apply(this, arguments);
        }

        return getLayouts_params;
    })();

    function createLayout(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createLayout.params)) {
            try {
                params = new createLayout.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createLayout.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createLayout.method, createLayout.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createLayout, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/layouts', enumerable: true }
    });

    createLayout.params = (function(){
        _util.inherits(createLayout_params, _util.RequestParams);

        function createLayout_params(properties) {
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
            if (!(properties.content instanceof Layout)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.Layout');
            }

            createLayout_params._super.constructor.apply(this, arguments);
        }

        return createLayout_params;
    })();

    function getLayout(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLayout.params)) {
            try {
                params = new getLayout.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLayout.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Layout) ? o : new Layout(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLayout.method, getLayout.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLayout, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/layouts/{id}', enumerable: true }
    });

    getLayout.params = (function(){
        _util.inherits(getLayout_params, _util.RequestParams);

        function getLayout_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getLayout_params._super.constructor.apply(this, arguments);
        }

        return getLayout_params;
    })();

    function deleteLayout(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteLayout.params)) {
            try {
                params = new deleteLayout.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteLayout.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteLayout.method, deleteLayout.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteLayout, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/layouts/{id}', enumerable: true }
    });

    deleteLayout.params = (function(){
        _util.inherits(deleteLayout_params, _util.RequestParams);

        function deleteLayout_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteLayout_params._super.constructor.apply(this, arguments);
        }

        return deleteLayout_params;
    })();

    function updateLayout(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateLayout.params)) {
            try {
                params = new updateLayout.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateLayout.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateLayout.method, updateLayout.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateLayout, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/layouts/{id}', enumerable: true }
    });

    updateLayout.params = (function(){
        _util.inherits(updateLayout_params, _util.RequestParams);

        function updateLayout_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Layout)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.Layout');
            }

            updateLayout_params._super.constructor.apply(this, arguments);
        }

        return updateLayout_params;
    })();

    return Object.create(null, {
        getLayouts: { value: getLayouts, enumerable: true },
        createLayout: { value: createLayout, enumerable: true },
        getLayout: { value: getLayout, enumerable: true },
        deleteLayout: { value: deleteLayout, enumerable: true },
        updateLayout: { value: updateLayout, enumerable: true }
    });
})();

var $licenseAllocations = (function(){
    function getLicenseAllocations(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLicenseAllocations.params)) {
            try {
                params = new getLicenseAllocations.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLicenseAllocations.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LicenseAllocations) ? o : new LicenseAllocations(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLicenseAllocations.method, getLicenseAllocations.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLicenseAllocations, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/license-allocations', enumerable: true }
    });

    getLicenseAllocations.params = (function(){
        _util.inherits(getLicenseAllocations_params, _util.RequestParams);

        function getLicenseAllocations_params(properties) {
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

            getLicenseAllocations_params._super.constructor.apply(this, arguments);
        }

        return getLicenseAllocations_params;
    })();

    function getLicenseAllocation(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLicenseAllocation.params)) {
            try {
                params = new getLicenseAllocation.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLicenseAllocation.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LicenseAllocation) ? o : new LicenseAllocation(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLicenseAllocation.method, getLicenseAllocation.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLicenseAllocation, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/license-allocations/{id}', enumerable: true }
    });

    getLicenseAllocation.params = (function(){
        _util.inherits(getLicenseAllocation_params, _util.RequestParams);

        function getLicenseAllocation_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getLicenseAllocation_params._super.constructor.apply(this, arguments);
        }

        return getLicenseAllocation_params;
    })();

    return Object.create(null, {
        getLicenseAllocations: { value: getLicenseAllocations, enumerable: true },
        getLicenseAllocation: { value: getLicenseAllocation, enumerable: true }
    });
})();

var $linesAuthorityCertificates = (function(){
    function getLinesAuthorityCertificates(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLinesAuthorityCertificates.params)) {
            try {
                params = new getLinesAuthorityCertificates.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLinesAuthorityCertificates.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LinesAuthorityCertificates) ? o : new LinesAuthorityCertificates(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLinesAuthorityCertificates.method, getLinesAuthorityCertificates.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLinesAuthorityCertificates, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/lines-authority-certificates', enumerable: true }
    });

    getLinesAuthorityCertificates.params = (function(){
        _util.inherits(getLinesAuthorityCertificates_params, _util.RequestParams);

        function getLinesAuthorityCertificates_params(properties) {
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

            getLinesAuthorityCertificates_params._super.constructor.apply(this, arguments);
        }

        return getLinesAuthorityCertificates_params;
    })();

    function getLinesAuthorityCertificate(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLinesAuthorityCertificate.params)) {
            try {
                params = new getLinesAuthorityCertificate.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLinesAuthorityCertificate.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LinesAuthorityCertificate) ? o : new LinesAuthorityCertificate(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLinesAuthorityCertificate.method, getLinesAuthorityCertificate.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLinesAuthorityCertificate, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/lines-authority-certificates/{id}', enumerable: true }
    });

    getLinesAuthorityCertificate.params = (function(){
        _util.inherits(getLinesAuthorityCertificate_params, _util.RequestParams);

        function getLinesAuthorityCertificate_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getLinesAuthorityCertificate_params._super.constructor.apply(this, arguments);
        }

        return getLinesAuthorityCertificate_params;
    })();

    return Object.create(null, {
        getLinesAuthorityCertificates: { value: getLinesAuthorityCertificates, enumerable: true },
        getLinesAuthorityCertificate: { value: getLinesAuthorityCertificate, enumerable: true }
    });
})();

var $loginAuthentication = (function(){
    function getLoginAuthentication(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLoginAuthentication.params)) {
            try {
                params = new getLoginAuthentication.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLoginAuthentication.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LoginAuthentication) ? o : new LoginAuthentication(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLoginAuthentication.method, getLoginAuthentication.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLoginAuthentication, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/login-authentication', enumerable: true }
    });

    getLoginAuthentication.params = (function(){
        _util.inherits(getLoginAuthentication_params, _util.RequestParams);

        function getLoginAuthentication_params(properties) {
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

            getLoginAuthentication_params._super.constructor.apply(this, arguments);
        }

        return getLoginAuthentication_params;
    })();

    function updateLoginAuthentication(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateLoginAuthentication.params)) {
            try {
                params = new updateLoginAuthentication.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateLoginAuthentication.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateLoginAuthentication.method, updateLoginAuthentication.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateLoginAuthentication, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/login-authentication', enumerable: true }
    });

    updateLoginAuthentication.params = (function(){
        _util.inherits(updateLoginAuthentication_params, _util.RequestParams);

        function updateLoginAuthentication_params(properties) {
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
            if (!(properties.content instanceof LoginAuthentication)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.LoginAuthentication');
            }

            updateLoginAuthentication_params._super.constructor.apply(this, arguments);
        }

        return updateLoginAuthentication_params;
    })();

    return Object.create(null, {
        getLoginAuthentication: { value: getLoginAuthentication, enumerable: true },
        updateLoginAuthentication: { value: updateLoginAuthentication, enumerable: true }
    });
})();

var $mail = (function(){
    function getMail(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getMail.params)) {
            try {
                params = new getMail.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getMail.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Mail) ? o : new Mail(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getMail.method, getMail.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getMail, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/mail', enumerable: true }
    });

    getMail.params = (function(){
        _util.inherits(getMail_params, _util.RequestParams);

        function getMail_params(properties) {
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

            getMail_params._super.constructor.apply(this, arguments);
        }

        return getMail_params;
    })();

    function updateMail(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateMail.params)) {
            try {
                params = new updateMail.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateMail.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateMail.method, updateMail.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateMail, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/mail', enumerable: true }
    });

    updateMail.params = (function(){
        _util.inherits(updateMail_params, _util.RequestParams);

        function updateMail_params(properties) {
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
            if (!(properties.content instanceof Mail)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.Mail');
            }

            updateMail_params._super.constructor.apply(this, arguments);
        }

        return updateMail_params;
    })();

    return Object.create(null, {
        getMail: { value: getMail, enumerable: true },
        updateMail: { value: updateMail, enumerable: true }
    });
})();

var $miscellaneousItems = (function(){
    function getMiscellaneousItems(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getMiscellaneousItems.params)) {
            try {
                params = new getMiscellaneousItems.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getMiscellaneousItems.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof MiscellaneousItems) ? o : new MiscellaneousItems(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getMiscellaneousItems.method, getMiscellaneousItems.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getMiscellaneousItems, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/miscellaneous-items', enumerable: true }
    });

    getMiscellaneousItems.params = (function(){
        _util.inherits(getMiscellaneousItems_params, _util.RequestParams);

        function getMiscellaneousItems_params(properties) {
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

            getMiscellaneousItems_params._super.constructor.apply(this, arguments);
        }

        return getMiscellaneousItems_params;
    })();

    function getMiscellaneousItem(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getMiscellaneousItem.params)) {
            try {
                params = new getMiscellaneousItem.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getMiscellaneousItem.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof MiscellaneousItem) ? o : new MiscellaneousItem(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getMiscellaneousItem.method, getMiscellaneousItem.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getMiscellaneousItem, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/miscellaneous-items/{id}', enumerable: true }
    });

    getMiscellaneousItem.params = (function(){
        _util.inherits(getMiscellaneousItem_params, _util.RequestParams);

        function getMiscellaneousItem_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getMiscellaneousItem_params._super.constructor.apply(this, arguments);
        }

        return getMiscellaneousItem_params;
    })();

    return Object.create(null, {
        getMiscellaneousItems: { value: getMiscellaneousItems, enumerable: true },
        getMiscellaneousItem: { value: getMiscellaneousItem, enumerable: true }
    });
})();

var $positions = (function(){
    function getPositions(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getPositions.params)) {
            try {
                params = new getPositions.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getPositions.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Positions) ? o : new Positions(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getPositions.method, getPositions.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getPositions, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/positions', enumerable: true }
    });

    getPositions.params = (function(){
        _util.inherits(getPositions_params, _util.RequestParams);

        function getPositions_params(properties) {
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

            getPositions_params._super.constructor.apply(this, arguments);
        }

        return getPositions_params;
    })();

    function createPosition(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createPosition.params)) {
            try {
                params = new createPosition.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createPosition.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createPosition.method, createPosition.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createPosition, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/positions', enumerable: true }
    });

    createPosition.params = (function(){
        _util.inherits(createPosition_params, _util.RequestParams);

        function createPosition_params(properties) {
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
            if (!(properties.content instanceof Position)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.Position');
            }

            createPosition_params._super.constructor.apply(this, arguments);
        }

        return createPosition_params;
    })();

    function getPosition(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getPosition.params)) {
            try {
                params = new getPosition.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getPosition.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Position) ? o : new Position(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getPosition.method, getPosition.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getPosition, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/positions/{id}', enumerable: true }
    });

    getPosition.params = (function(){
        _util.inherits(getPosition_params, _util.RequestParams);

        function getPosition_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getPosition_params._super.constructor.apply(this, arguments);
        }

        return getPosition_params;
    })();

    function deletePosition(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deletePosition.params)) {
            try {
                params = new deletePosition.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deletePosition.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deletePosition.method, deletePosition.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deletePosition, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/positions/{id}', enumerable: true }
    });

    deletePosition.params = (function(){
        _util.inherits(deletePosition_params, _util.RequestParams);

        function deletePosition_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deletePosition_params._super.constructor.apply(this, arguments);
        }

        return deletePosition_params;
    })();

    function updatePosition(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updatePosition.params)) {
            try {
                params = new updatePosition.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updatePosition.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updatePosition.method, updatePosition.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updatePosition, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/positions/{id}', enumerable: true }
    });

    updatePosition.params = (function(){
        _util.inherits(updatePosition_params, _util.RequestParams);

        function updatePosition_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Position)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.Position');
            }

            updatePosition_params._super.constructor.apply(this, arguments);
        }

        return updatePosition_params;
    })();

    return Object.create(null, {
        getPositions: { value: getPositions, enumerable: true },
        createPosition: { value: createPosition, enumerable: true },
        getPosition: { value: getPosition, enumerable: true },
        deletePosition: { value: deletePosition, enumerable: true },
        updatePosition: { value: updatePosition, enumerable: true }
    });
})();

var $problemReporter = (function(){
    function getProblemReporter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getProblemReporter.params)) {
            try {
                params = new getProblemReporter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getProblemReporter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ProblemReporter) ? o : new ProblemReporter(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getProblemReporter.method, getProblemReporter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getProblemReporter, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/problem-reporter', enumerable: true }
    });

    getProblemReporter.params = (function(){
        _util.inherits(getProblemReporter_params, _util.RequestParams);

        function getProblemReporter_params(properties) {
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

            getProblemReporter_params._super.constructor.apply(this, arguments);
        }

        return getProblemReporter_params;
    })();

    function updateProblemReporter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateProblemReporter.params)) {
            try {
                params = new updateProblemReporter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateProblemReporter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateProblemReporter.method, updateProblemReporter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateProblemReporter, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/problem-reporter', enumerable: true }
    });

    updateProblemReporter.params = (function(){
        _util.inherits(updateProblemReporter_params, _util.RequestParams);

        function updateProblemReporter_params(properties) {
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
            if (!(properties.content instanceof ProblemReporter)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.ProblemReporter');
            }

            updateProblemReporter_params._super.constructor.apply(this, arguments);
        }

        return updateProblemReporter_params;
    })();

    return Object.create(null, {
        getProblemReporter: { value: getProblemReporter, enumerable: true },
        updateProblemReporter: { value: updateProblemReporter, enumerable: true }
    });
})();

var $serverParameters = (function(){
    function getServerParameters(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getServerParameters.params)) {
            try {
                params = new getServerParameters.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getServerParameters.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ServerParameters) ? o : new ServerParameters(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getServerParameters.method, getServerParameters.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getServerParameters, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/server-parameters', enumerable: true }
    });

    getServerParameters.params = (function(){
        _util.inherits(getServerParameters_params, _util.RequestParams);

        function getServerParameters_params(properties) {
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

            getServerParameters_params._super.constructor.apply(this, arguments);
        }

        return getServerParameters_params;
    })();

    function createServerParameter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createServerParameter.params)) {
            try {
                params = new createServerParameter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createServerParameter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createServerParameter.method, createServerParameter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createServerParameter, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/server-parameters', enumerable: true }
    });

    createServerParameter.params = (function(){
        _util.inherits(createServerParameter_params, _util.RequestParams);

        function createServerParameter_params(properties) {
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
            if (!(properties.content instanceof ServerParameter)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.ServerParameter');
            }

            createServerParameter_params._super.constructor.apply(this, arguments);
        }

        return createServerParameter_params;
    })();

    function getServerParameter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getServerParameter.params)) {
            try {
                params = new getServerParameter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getServerParameter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ServerParameter) ? o : new ServerParameter(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getServerParameter.method, getServerParameter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getServerParameter, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/server-parameters/{id}', enumerable: true }
    });

    getServerParameter.params = (function(){
        _util.inherits(getServerParameter_params, _util.RequestParams);

        function getServerParameter_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getServerParameter_params._super.constructor.apply(this, arguments);
        }

        return getServerParameter_params;
    })();

    function deleteServerParameter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteServerParameter.params)) {
            try {
                params = new deleteServerParameter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteServerParameter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteServerParameter.method, deleteServerParameter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteServerParameter, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/server-parameters/{id}', enumerable: true }
    });

    deleteServerParameter.params = (function(){
        _util.inherits(deleteServerParameter_params, _util.RequestParams);

        function deleteServerParameter_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteServerParameter_params._super.constructor.apply(this, arguments);
        }

        return deleteServerParameter_params;
    })();

    function updateServerParameter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateServerParameter.params)) {
            try {
                params = new updateServerParameter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateServerParameter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateServerParameter.method, updateServerParameter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateServerParameter, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/server-parameters/{id}', enumerable: true }
    });

    updateServerParameter.params = (function(){
        _util.inherits(updateServerParameter_params, _util.RequestParams);

        function updateServerParameter_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof ServerParameter)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.ServerParameter');
            }

            updateServerParameter_params._super.constructor.apply(this, arguments);
        }

        return updateServerParameter_params;
    })();

    return Object.create(null, {
        getServerParameters: { value: getServerParameters, enumerable: true },
        createServerParameter: { value: createServerParameter, enumerable: true },
        getServerParameter: { value: getServerParameter, enumerable: true },
        deleteServerParameter: { value: deleteServerParameter, enumerable: true },
        updateServerParameter: { value: updateServerParameter, enumerable: true }
    });
})();

var $singleSignOnIdentityProviders = (function(){
    function getSingleSignOnIdentityProviders(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSingleSignOnIdentityProviders.params)) {
            try {
                params = new getSingleSignOnIdentityProviders.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSingleSignOnIdentityProviders.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SingleSignOnIdentityProviders) ? o : new SingleSignOnIdentityProviders(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSingleSignOnIdentityProviders.method, getSingleSignOnIdentityProviders.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSingleSignOnIdentityProviders, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/single-sign-on-identity-providers', enumerable: true }
    });

    getSingleSignOnIdentityProviders.params = (function(){
        _util.inherits(getSingleSignOnIdentityProviders_params, _util.RequestParams);

        function getSingleSignOnIdentityProviders_params(properties) {
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

            getSingleSignOnIdentityProviders_params._super.constructor.apply(this, arguments);
        }

        return getSingleSignOnIdentityProviders_params;
    })();

    function getSingleSignOnIdentityProvider(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSingleSignOnIdentityProvider.params)) {
            try {
                params = new getSingleSignOnIdentityProvider.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSingleSignOnIdentityProvider.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SingleSignOnIdentityProvider) ? o : new SingleSignOnIdentityProvider(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSingleSignOnIdentityProvider.method, getSingleSignOnIdentityProvider.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSingleSignOnIdentityProvider, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/single-sign-on-identity-providers/{id}', enumerable: true }
    });

    getSingleSignOnIdentityProvider.params = (function(){
        _util.inherits(getSingleSignOnIdentityProvider_params, _util.RequestParams);

        function getSingleSignOnIdentityProvider_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getSingleSignOnIdentityProvider_params._super.constructor.apply(this, arguments);
        }

        return getSingleSignOnIdentityProvider_params;
    })();

    return Object.create(null, {
        getSingleSignOnIdentityProviders: { value: getSingleSignOnIdentityProviders, enumerable: true },
        getSingleSignOnIdentityProvider: { value: getSingleSignOnIdentityProvider, enumerable: true }
    });
})();

var $smsBrokers = (function(){
    function getSmsBrokers(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSmsBrokers.params)) {
            try {
                params = new getSmsBrokers.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSmsBrokers.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SmsBrokers) ? o : new SmsBrokers(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSmsBrokers.method, getSmsBrokers.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSmsBrokers, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/sms-brokers', enumerable: true }
    });

    getSmsBrokers.params = (function(){
        _util.inherits(getSmsBrokers_params, _util.RequestParams);

        function getSmsBrokers_params(properties) {
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

            getSmsBrokers_params._super.constructor.apply(this, arguments);
        }

        return getSmsBrokers_params;
    })();

    function getSmsBroker(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSmsBroker.params)) {
            try {
                params = new getSmsBroker.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSmsBroker.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SmsBroker) ? o : new SmsBroker(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSmsBroker.method, getSmsBroker.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSmsBroker, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/sms-brokers/{id}', enumerable: true }
    });

    getSmsBroker.params = (function(){
        _util.inherits(getSmsBroker_params, _util.RequestParams);

        function getSmsBroker_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getSmsBroker_params._super.constructor.apply(this, arguments);
        }

        return getSmsBroker_params;
    })();

    return Object.create(null, {
        getSmsBrokers: { value: getSmsBrokers, enumerable: true },
        getSmsBroker: { value: getSmsBroker, enumerable: true }
    });
})();

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
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStatusMessages.method, getStatusMessages.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStatusMessages, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/status-messages', enumerable: true }
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

    function createStatusMessage(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createStatusMessage.params)) {
            try {
                params = new createStatusMessage.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createStatusMessage.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createStatusMessage.method, createStatusMessage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createStatusMessage, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/status-messages', enumerable: true }
    });

    createStatusMessage.params = (function(){
        _util.inherits(createStatusMessage_params, _util.RequestParams);

        function createStatusMessage_params(properties) {
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
            if (!(properties.content instanceof StatusMessage)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.StatusMessage');
            }

            createStatusMessage_params._super.constructor.apply(this, arguments);
        }

        return createStatusMessage_params;
    })();

    function getStatusMessage(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStatusMessage.params)) {
            try {
                params = new getStatusMessage.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStatusMessage.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StatusMessage) ? o : new StatusMessage(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStatusMessage.method, getStatusMessage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStatusMessage, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/status-messages/{id}', enumerable: true }
    });

    getStatusMessage.params = (function(){
        _util.inherits(getStatusMessage_params, _util.RequestParams);

        function getStatusMessage_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getStatusMessage_params._super.constructor.apply(this, arguments);
        }

        return getStatusMessage_params;
    })();

    function deleteStatusMessage(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteStatusMessage.params)) {
            try {
                params = new deleteStatusMessage.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteStatusMessage.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteStatusMessage.method, deleteStatusMessage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteStatusMessage, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/status-messages/{id}', enumerable: true }
    });

    deleteStatusMessage.params = (function(){
        _util.inherits(deleteStatusMessage_params, _util.RequestParams);

        function deleteStatusMessage_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteStatusMessage_params._super.constructor.apply(this, arguments);
        }

        return deleteStatusMessage_params;
    })();

    function updateStatusMessage(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateStatusMessage.params)) {
            try {
                params = new updateStatusMessage.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateStatusMessage.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateStatusMessage.method, updateStatusMessage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateStatusMessage, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/status-messages/{id}', enumerable: true }
    });

    updateStatusMessage.params = (function(){
        _util.inherits(updateStatusMessage_params, _util.RequestParams);

        function updateStatusMessage_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof StatusMessage)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.StatusMessage');
            }

            updateStatusMessage_params._super.constructor.apply(this, arguments);
        }

        return updateStatusMessage_params;
    })();

    return Object.create(null, {
        getStatusMessages: { value: getStatusMessages, enumerable: true },
        createStatusMessage: { value: createStatusMessage, enumerable: true },
        getStatusMessage: { value: getStatusMessage, enumerable: true },
        deleteStatusMessage: { value: deleteStatusMessage, enumerable: true },
        updateStatusMessage: { value: updateStatusMessage, enumerable: true }
    });
})();

var $languages = (function(){
    function languages(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof languages.params)) {
            try {
                params = new languages.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: languages.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.LanguagesResult) ? o : new Configuration.LanguagesResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(languages.method, languages.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(languages, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/system/languages', enumerable: true }
    });

    languages.params = (function(){
        _util.inherits(languages_params, _util.RequestParams);

        function languages_params(properties) {
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

            languages_params._super.constructor.apply(this, arguments);
        }

        return languages_params;
    })();

    return Object.create(null, {
        languages: { value: languages, enumerable: true }
    });
})();

var $ivrHandlers = (function(){
    function ivrHandlers(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof ivrHandlers.params)) {
            try {
                params = new ivrHandlers.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: ivrHandlers.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.IvrHandlersResult) ? o : new Configuration.IvrHandlersResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(ivrHandlers.method, ivrHandlers.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(ivrHandlers, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/system/ivr-handlers', enumerable: true }
    });

    ivrHandlers.params = (function(){
        _util.inherits(ivrHandlers_params, _util.RequestParams);

        function ivrHandlers_params(properties) {
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

            ivrHandlers_params._super.constructor.apply(this, arguments);
        }

        return ivrHandlers_params;
    })();

    return Object.create(null, {
        ivrHandlers: { value: ivrHandlers, enumerable: true }
    });
})();

var $timeZones = (function(){
    function timeZones(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof timeZones.params)) {
            try {
                params = new timeZones.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: timeZones.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.TimeZonesResult) ? o : new Configuration.TimeZonesResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(timeZones.method, timeZones.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(timeZones, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/system/time-zones', enumerable: true }
    });

    timeZones.params = (function(){
        _util.inherits(timeZones_params, _util.RequestParams);

        function timeZones_params(properties) {
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
                throw new Error('`properties.query` is undefined, which means the following required Query param(s) will be missing: type');
            }
            if (!_util.hasProp(properties.query, 'type')) {
                throw new Error('`properties.query` is missing required property: `type`');
            }

            timeZones_params._super.constructor.apply(this, arguments);
        }

        return timeZones_params;
    })();

    return Object.create(null, {
        timeZones: { value: timeZones, enumerable: true }
    });
})();

var $systemParameters = (function(){
    function getSystemParameters(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSystemParameters.params)) {
            try {
                params = new getSystemParameters.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSystemParameters.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SystemParameters) ? o : new SystemParameters(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSystemParameters.method, getSystemParameters.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSystemParameters, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/system-parameters', enumerable: true }
    });

    getSystemParameters.params = (function(){
        _util.inherits(getSystemParameters_params, _util.RequestParams);

        function getSystemParameters_params(properties) {
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

            getSystemParameters_params._super.constructor.apply(this, arguments);
        }

        return getSystemParameters_params;
    })();

    function createSystemParameter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSystemParameter.params)) {
            try {
                params = new createSystemParameter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSystemParameter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSystemParameter.method, createSystemParameter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSystemParameter, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/system-parameters', enumerable: true }
    });

    createSystemParameter.params = (function(){
        _util.inherits(createSystemParameter_params, _util.RequestParams);

        function createSystemParameter_params(properties) {
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
            if (!(properties.content instanceof SystemParameter)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.SystemParameter');
            }

            createSystemParameter_params._super.constructor.apply(this, arguments);
        }

        return createSystemParameter_params;
    })();

    function getSystemParameter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSystemParameter.params)) {
            try {
                params = new getSystemParameter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSystemParameter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SystemParameter) ? o : new SystemParameter(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSystemParameter.method, getSystemParameter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSystemParameter, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/system-parameters/{id}', enumerable: true }
    });

    getSystemParameter.params = (function(){
        _util.inherits(getSystemParameter_params, _util.RequestParams);

        function getSystemParameter_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getSystemParameter_params._super.constructor.apply(this, arguments);
        }

        return getSystemParameter_params;
    })();

    function deleteSystemParameter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSystemParameter.params)) {
            try {
                params = new deleteSystemParameter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSystemParameter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSystemParameter.method, deleteSystemParameter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSystemParameter, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/system-parameters/{id}', enumerable: true }
    });

    deleteSystemParameter.params = (function(){
        _util.inherits(deleteSystemParameter_params, _util.RequestParams);

        function deleteSystemParameter_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSystemParameter_params._super.constructor.apply(this, arguments);
        }

        return deleteSystemParameter_params;
    })();

    function updateSystemParameter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSystemParameter.params)) {
            try {
                params = new updateSystemParameter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSystemParameter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSystemParameter.method, updateSystemParameter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSystemParameter, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/system-parameters/{id}', enumerable: true }
    });

    updateSystemParameter.params = (function(){
        _util.inherits(updateSystemParameter_params, _util.RequestParams);

        function updateSystemParameter_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof SystemParameter)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.SystemParameter');
            }

            updateSystemParameter_params._super.constructor.apply(this, arguments);
        }

        return updateSystemParameter_params;
    })();

    return Object.create(null, {
        getSystemParameters: { value: getSystemParameters, enumerable: true },
        createSystemParameter: { value: createSystemParameter, enumerable: true },
        getSystemParameter: { value: getSystemParameter, enumerable: true },
        deleteSystemParameter: { value: deleteSystemParameter, enumerable: true },
        updateSystemParameter: { value: updateSystemParameter, enumerable: true }
    });
})();

var $updateService = (function(){
    function getUpdateService(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getUpdateService.params)) {
            try {
                params = new getUpdateService.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getUpdateService.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof UpdateService) ? o : new UpdateService(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getUpdateService.method, getUpdateService.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getUpdateService, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/update-service', enumerable: true }
    });

    getUpdateService.params = (function(){
        _util.inherits(getUpdateService_params, _util.RequestParams);

        function getUpdateService_params(properties) {
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

            getUpdateService_params._super.constructor.apply(this, arguments);
        }

        return getUpdateService_params;
    })();

    function updateUpdateService(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateUpdateService.params)) {
            try {
                params = new updateUpdateService.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateUpdateService.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateUpdateService.method, updateUpdateService.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateUpdateService, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/update-service', enumerable: true }
    });

    updateUpdateService.params = (function(){
        _util.inherits(updateUpdateService_params, _util.RequestParams);

        function updateUpdateService_params(properties) {
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
            if (!(properties.content instanceof UpdateService)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.UpdateService');
            }

            updateUpdateService_params._super.constructor.apply(this, arguments);
        }

        return updateUpdateService_params;
    })();

    return Object.create(null, {
        getUpdateService: { value: getUpdateService, enumerable: true },
        updateUpdateService: { value: updateUpdateService, enumerable: true }
    });
})();

var $webServicesParameters = (function(){
    function getWebServicesParameters(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getWebServicesParameters.params)) {
            try {
                params = new getWebServicesParameters.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getWebServicesParameters.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof WebServicesParameters) ? o : new WebServicesParameters(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getWebServicesParameters.method, getWebServicesParameters.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getWebServicesParameters, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/web-services-parameters', enumerable: true }
    });

    getWebServicesParameters.params = (function(){
        _util.inherits(getWebServicesParameters_params, _util.RequestParams);

        function getWebServicesParameters_params(properties) {
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

            getWebServicesParameters_params._super.constructor.apply(this, arguments);
        }

        return getWebServicesParameters_params;
    })();

    function getWebServicesParameter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getWebServicesParameter.params)) {
            try {
                params = new getWebServicesParameter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getWebServicesParameter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof WebServicesParameter) ? o : new WebServicesParameter(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getWebServicesParameter.method, getWebServicesParameter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getWebServicesParameter, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/web-services-parameters/{id}', enumerable: true }
    });

    getWebServicesParameter.params = (function(){
        _util.inherits(getWebServicesParameter_params, _util.RequestParams);

        function getWebServicesParameter_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getWebServicesParameter_params._super.constructor.apply(this, arguments);
        }

        return getWebServicesParameter_params;
    })();

    return Object.create(null, {
        getWebServicesParameters: { value: getWebServicesParameters, enumerable: true },
        getWebServicesParameter: { value: getWebServicesParameter, enumerable: true }
    });
})();

exports.ActionType = ActionType;
exports.PopupType = PopupType;
exports.AttendantOverrideType = AttendantOverrideType;
exports.ImageMimeType = ImageMimeType;
exports.DestinationType = DestinationType;
exports.SubstitutionType = SubstitutionType;
exports.DataSourceSubType = DataSourceSubType;
exports.DataSourceType = DataSourceType;
exports.SystemMailboxType = SystemMailboxType;
exports.ActionsMessage = ActionsMessage;
exports.Action = Action;
exports.UrlAction = UrlAction;
exports.ActionParameter = ActionParameter;
exports.DialPlanClassificationsMessage = DialPlanClassificationsMessage;
exports.DialPlanClassification = DialPlanClassification;
exports.ImageResourcesMessage = ImageResourcesMessage;
exports.ImageResource = ImageResource;
exports.LayoutsMessage = LayoutsMessage;
exports.Layout = Layout;
exports.PositionsMessage = PositionsMessage;
exports.Position = Position;
exports.ServerParametersMessage = ServerParametersMessage;
exports.ServerParameter = ServerParameter;
exports.SystemParametersMessage = SystemParametersMessage;
exports.SystemParameter = SystemParameter;
exports.LoginAuthenticationMessage = LoginAuthenticationMessage;
exports.LoginAuthentication = LoginAuthentication;
exports.MailMessage = MailMessage;
exports.Mail = Mail;
exports.ProblemReporterMessage = ProblemReporterMessage;
exports.ProblemReporter = ProblemReporter;
exports.Accumulators = Accumulators;
exports.Accumulator = Accumulator;
exports.Actions = Actions;
exports.AttendantEmailProfiles = AttendantEmailProfiles;
exports.AttendantEmailProfile = AttendantEmailProfile;
exports.AttendantInboundProfiles = AttendantInboundProfiles;
exports.AttendantInboundProfile = AttendantInboundProfile;
exports.AttendantOperatorProfiles = AttendantOperatorProfiles;
exports.AttendantOperatorProfile = AttendantOperatorProfile;
exports.AttendantOutboundProfiles = AttendantOutboundProfiles;
exports.AttendantOutboundProfile = AttendantOutboundProfile;
exports.SubsystemCertificatesResult = SubsystemCertificatesResult;
exports.SubsystemCertificatesEntry = SubsystemCertificatesEntry;
exports.TrustSubsystemCertificateArgument = TrustSubsystemCertificateArgument;
exports.ContactListSources = ContactListSources;
exports.ContactListSource = ContactListSource;
exports.DialPlanClassifications = DialPlanClassifications;
exports.DnisMappings = DnisMappings;
exports.RoutingTableEntrySetting = RoutingTableEntrySetting;
exports.EFaqs = EFaqs;
exports.EFaq = EFaq;
exports.FaxGroups = FaxGroups;
exports.FaxGroup = FaxGroup;
exports.FeatureLicenses = FeatureLicenses;
exports.FeatureLicense = FeatureLicense;
exports.FeedbackSurveyGroups = FeedbackSurveyGroups;
exports.FeedbackSurveyGroup = FeedbackSurveyGroup;
exports.FeedbackSurveys = FeedbackSurveys;
exports.FeedbackSurvey = FeedbackSurvey;
exports.Handlers = Handlers;
exports.Handler = Handler;
exports.IcDataSources = IcDataSources;
exports.IcDataSource = IcDataSource;
exports.ImageResourceCategories = ImageResourceCategories;
exports.ImageResourceCategory = ImageResourceCategory;
exports.ImageResources = ImageResources;
exports.InitializationFunctions = InitializationFunctions;
exports.InitializationFunction = InitializationFunction;
exports.InteractionClientPlugins = InteractionClientPlugins;
exports.InteractionClientPlugin = InteractionClientPlugin;
exports.InteractionConferenceRooms = InteractionConferenceRooms;
exports.InteractionConferenceRoom = InteractionConferenceRoom;
exports.InteractionProcessAutomationProcesses = InteractionProcessAutomationProcesses;
exports.InteractionProcessAutomationProcess = InteractionProcessAutomationProcess;
exports.InteractionProcessorTables = InteractionProcessorTables;
exports.InteractionProcessorTable = InteractionProcessorTable;
exports.Layouts = Layouts;
exports.LicenseAllocations = LicenseAllocations;
exports.LicenseAllocation = LicenseAllocation;
exports.LinesAuthorityCertificates = LinesAuthorityCertificates;
exports.LinesAuthorityCertificate = LinesAuthorityCertificate;
exports.ImapSmtpMailboxAttributesResult = ImapSmtpMailboxAttributesResult;
exports.InteractionMessageStoreMailboxAttributesResult = InteractionMessageStoreMailboxAttributesResult;
exports.NoMailboxAttributesResult = NoMailboxAttributesResult;
exports.EnabledMailboxProvidersResult = EnabledMailboxProvidersResult;
exports.ImapServersResult = ImapServersResult;
exports.ImapServersEntry = ImapServersEntry;
exports.SearchableProvidersResult = SearchableProvidersResult;
exports.FoldersResult = FoldersResult;
exports.DirectoriesResult = DirectoriesResult;
exports.DirectoriesEntry = DirectoriesEntry;
exports.SendEmailArgument = SendEmailArgument;
exports.MiscellaneousItems = MiscellaneousItems;
exports.MiscellaneousItem = MiscellaneousItem;
exports.Positions = Positions;
exports.ServerParameters = ServerParameters;
exports.SingleSignOnIdentityProviders = SingleSignOnIdentityProviders;
exports.SingleSignOnIdentityProvider = SingleSignOnIdentityProvider;
exports.SmsBrokers = SmsBrokers;
exports.SmsBroker = SmsBroker;
exports.StatusMessages = StatusMessages;
exports.StatusMessage = StatusMessage;
exports.SystemParameters = SystemParameters;
exports.UpdateService = UpdateService;
exports.WebServicesParameters = WebServicesParameters;
exports.WebServicesParameter = WebServicesParameter;
exports.$accumulators = $accumulators;
exports.$actions = $actions;
exports.$attendantEmailProfiles = $attendantEmailProfiles;
exports.$attendantInboundProfiles = $attendantInboundProfiles;
exports.$attendantOperatorProfiles = $attendantOperatorProfiles;
exports.$attendantOutboundProfiles = $attendantOutboundProfiles;
exports.$contactListSources = $contactListSources;
exports.$dialPlanClassifications = $dialPlanClassifications;
exports.$dnisMappings = $dnisMappings;
exports.$eFaqs = $eFaqs;
exports.$faxGroups = $faxGroups;
exports.$featureLicenses = $featureLicenses;
exports.$feedbackSurveyGroups = $feedbackSurveyGroups;
exports.$feedbackSurveys = $feedbackSurveys;
exports.$handlers = $handlers;
exports.$icDataSources = $icDataSources;
exports.$imageResourceCategories = $imageResourceCategories;
exports.$imageResources = $imageResources;
exports.$initializationFunctions = $initializationFunctions;
exports.$interactionClientPlugins = $interactionClientPlugins;
exports.$interactionConferenceRooms = $interactionConferenceRooms;
exports.$interactionProcessAutomationProcesses = $interactionProcessAutomationProcesses;
exports.$interactionProcessorTables = $interactionProcessorTables;
exports.$layouts = $layouts;
exports.$licenseAllocations = $licenseAllocations;
exports.$linesAuthorityCertificates = $linesAuthorityCertificates;
exports.$loginAuthentication = $loginAuthentication;
exports.$mail = $mail;
exports.$miscellaneousItems = $miscellaneousItems;
exports.$positions = $positions;
exports.$problemReporter = $problemReporter;
exports.$serverParameters = $serverParameters;
exports.$singleSignOnIdentityProviders = $singleSignOnIdentityProviders;
exports.$smsBrokers = $smsBrokers;
exports.$statusMessages = $statusMessages;
exports.$languages = $languages;
exports.$ivrHandlers = $ivrHandlers;
exports.$timeZones = $timeZones;
exports.$systemParameters = $systemParameters;
exports.$updateService = $updateService;
exports.$webServicesParameters = $webServicesParameters;
