/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Configuration = require('./Configuration');
var Common = require('./Common');

var SalesforceCTIConfiguration = (function(){
    var hasProps = false;

    function SalesforceCTIConfiguration() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.integrations:salesforceCTIConfiguration' });
        }

        SalesforceCTIConfiguration._super.constructor.apply(this, arguments);
    }
    _util.inherits(SalesforceCTIConfiguration, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SalesforceCTIConfiguration.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SalesforceCTIConfiguration.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SalesforceCTIConfiguration.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SalesforceCTIConfiguration.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SalesforceCTIConfiguration.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'createCallLogForInternalCalls', {
            get: function() { return this.__prop_createCallLogForInternalCalls; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for SalesforceCTIConfiguration.createCallLogForInternalCalls, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createCallLogForInternalCalls = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'createCallLogOnInteractionsNotConnected', {
            get: function() { return this.__prop_createCallLogOnInteractionsNotConnected; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for SalesforceCTIConfiguration.createCallLogOnInteractionsNotConnected, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createCallLogOnInteractionsNotConnected = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'openAndEditCallLogOnDisconnect', {
            get: function() { return this.__prop_openAndEditCallLogOnDisconnect; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for SalesforceCTIConfiguration.openAndEditCallLogOnDisconnect, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_openAndEditCallLogOnDisconnect = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'popAccountCodeDialogOnDisconnect', {
            get: function() { return this.__prop_popAccountCodeDialogOnDisconnect; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for SalesforceCTIConfiguration.popAccountCodeDialogOnDisconnect, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_popAccountCodeDialogOnDisconnect = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'salesforceCtiAttributeMaps', {
            get: function() { return this.__prop_salesforceCtiAttributeMaps; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SalesforceCtiAttributeMap); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SalesforceCtiAttributeMap(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SalesforceCTIConfiguration.salesforceCtiAttributeMaps: ' + e.message);
                    }
                }

                this.__prop_salesforceCtiAttributeMaps = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'saveWrapTimeField', {
            get: function() { return this.__prop_saveWrapTimeField; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SalesforceCTIConfiguration.saveWrapTimeField, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_saveWrapTimeField = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'sendScreenPopOnAlerting', {
            get: function() { return this.__prop_sendScreenPopOnAlerting; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for SalesforceCTIConfiguration.sendScreenPopOnAlerting, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sendScreenPopOnAlerting = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'showAdvancedTransferButton', {
            get: function() { return this.__prop_showAdvancedTransferButton; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for SalesforceCTIConfiguration.showAdvancedTransferButton, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_showAdvancedTransferButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'showSpeedDial', {
            get: function() { return this.__prop_showSpeedDial; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for SalesforceCTIConfiguration.showSpeedDial, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_showSpeedDial = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'speedDialDirectory', {
            get: function() { return this.__prop_speedDialDirectory; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SalesforceCTIConfiguration.speedDialDirectory, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_speedDialDirectory = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'speedDialNumber', {
            get: function() { return this.__prop_speedDialNumber; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SalesforceCTIConfiguration.speedDialNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_speedDialNumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfiguration.prototype, 'useAdvancedDial', {
            get: function() { return this.__prop_useAdvancedDial; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for SalesforceCTIConfiguration.useAdvancedDial, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_useAdvancedDial = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SalesforceCTIConfiguration, '__type', { value: 'urn:inin.com:configuration.integrations:salesforceCTIConfiguration' });

    Object.defineProperty(SalesforceCTIConfiguration, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'createCallLogForInternalCalls': { required: false, nullable: true },
                'createCallLogOnInteractionsNotConnected': { required: false, nullable: true },
                'openAndEditCallLogOnDisconnect': { required: false, nullable: true },
                'popAccountCodeDialogOnDisconnect': { required: false, nullable: true },
                'salesforceCtiAttributeMaps': { required: false, nullable: true },
                'saveWrapTimeField': { required: false, nullable: true },
                'sendScreenPopOnAlerting': { required: false, nullable: true },
                'showAdvancedTransferButton': { required: false, nullable: true },
                'showSpeedDial': { required: false, nullable: true },
                'speedDialDirectory': { required: false, nullable: true },
                'speedDialNumber': { required: false, nullable: true },
                'useAdvancedDial': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.integrations:salesforceCTIConfiguration'] = SalesforceCTIConfiguration;

    return SalesforceCTIConfiguration;
}());

var SalesforceCtiAttributeMap = (function(){
    var hasProps = false;

    function SalesforceCtiAttributeMap() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.integrations:salesforceCtiAttributeMap' });
        }

        SalesforceCtiAttributeMap._super.constructor.apply(this, arguments);
    }
    _util.inherits(SalesforceCtiAttributeMap, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SalesforceCtiAttributeMap.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SalesforceCtiAttributeMap.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCtiAttributeMap.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SalesforceCtiAttributeMap.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCtiAttributeMap.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SalesforceCtiAttributeMap.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCtiAttributeMap.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SalesforceCtiAttributeMap.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCtiAttributeMap.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SalesforceCtiAttributeMap.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCtiAttributeMap.prototype, 'callAttribute', {
            get: function() { return this.__prop_callAttribute; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SalesforceCtiAttributeMap.callAttribute, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callAttribute = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCtiAttributeMap.prototype, 'isDateTimeAttribute', {
            get: function() { return this.__prop_isDateTimeAttribute; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for SalesforceCtiAttributeMap.isDateTimeAttribute, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isDateTimeAttribute = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCtiAttributeMap.prototype, 'salesforceField', {
            get: function() { return this.__prop_salesforceField; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SalesforceCtiAttributeMap.salesforceField, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_salesforceField = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCtiAttributeMap.prototype, 'syncOnInbound', {
            get: function() { return this.__prop_syncOnInbound; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for SalesforceCtiAttributeMap.syncOnInbound, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_syncOnInbound = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCtiAttributeMap.prototype, 'syncOnOutbound', {
            get: function() { return this.__prop_syncOnOutbound; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for SalesforceCtiAttributeMap.syncOnOutbound, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_syncOnOutbound = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SalesforceCtiAttributeMap, '__type', { value: 'urn:inin.com:configuration.integrations:salesforceCtiAttributeMap' });

    Object.defineProperty(SalesforceCtiAttributeMap, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'callAttribute': { required: false, nullable: true },
                'isDateTimeAttribute': { required: false, nullable: true },
                'salesforceField': { required: false, nullable: true },
                'syncOnInbound': { required: false, nullable: true },
                'syncOnOutbound': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.integrations:salesforceCtiAttributeMap'] = SalesforceCtiAttributeMap;

    return SalesforceCtiAttributeMap;
}());

var Purecloud = (function(){
    var hasProps = false;

    function Purecloud() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.integrations:purecloud' });
        }

        Purecloud._super.constructor.apply(this, arguments);
    }
    _util.inherits(Purecloud, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Purecloud.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Purecloud.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Purecloud.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Purecloud.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Purecloud.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Purecloud.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Purecloud.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Purecloud.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Purecloud.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Purecloud.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Purecloud.prototype, 'adminEmail', {
            get: function() { return this.__prop_adminEmail; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Purecloud.adminEmail, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_adminEmail = value;
            },
            enumerable: true
        });

        Object.defineProperty(Purecloud.prototype, 'enableCicWebPhone', {
            get: function() { return this.__prop_enableCicWebPhone; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Purecloud.enableCicWebPhone, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_enableCicWebPhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(Purecloud.prototype, 'enableIntegration', {
            get: function() { return this.__prop_enableIntegration; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Purecloud.enableIntegration, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_enableIntegration = value;
            },
            enumerable: true
        });

        Object.defineProperty(Purecloud.prototype, 'enableLocalBridge', {
            get: function() { return this.__prop_enableLocalBridge; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Purecloud.enableLocalBridge, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_enableLocalBridge = value;
            },
            enumerable: true
        });

        Object.defineProperty(Purecloud.prototype, 'orgDisplayName', {
            get: function() { return this.__prop_orgDisplayName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Purecloud.orgDisplayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_orgDisplayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(Purecloud.prototype, 'region', {
            get: function() { return this.__prop_region; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Purecloud.region, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_region = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Purecloud, '__type', { value: 'urn:inin.com:configuration.integrations:purecloud' });

    Object.defineProperty(Purecloud, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'adminEmail': { required: false, nullable: false },
                'enableCicWebPhone': { required: false, nullable: false },
                'enableIntegration': { required: false, nullable: false },
                'enableLocalBridge': { required: false, nullable: false },
                'orgDisplayName': { required: false, nullable: false },
                'region': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.integrations:purecloud'] = Purecloud;

    return Purecloud;
}());

var ConfigureConnectorForCicArgument = (function(){
    var hasProps = false;

    function ConfigureConnectorForCicArgument() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.integrations:configureConnectorForCicArgument' });
        }

        ConfigureConnectorForCicArgument._super.constructor.apply(this, arguments);
    }
    _util.inherits(ConfigureConnectorForCicArgument, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ConfigureConnectorForCicArgument.prototype, 'publisher', {
            get: function() { return this.__prop_publisher; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConfigureConnectorForCicArgument.publisher, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_publisher = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConfigureConnectorForCicArgument.prototype, 'pluginType', {
            get: function() { return this.__prop_pluginType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConfigureConnectorForCicArgument.pluginType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pluginType = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConfigureConnectorForCicArgument.prototype, 'pluginGroupName', {
            get: function() { return this.__prop_pluginGroupName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConfigureConnectorForCicArgument.pluginGroupName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pluginGroupName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConfigureConnectorForCicArgument.prototype, 'bridgeServerId', {
            get: function() { return this.__prop_bridgeServerId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConfigureConnectorForCicArgument.bridgeServerId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_bridgeServerId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ConfigureConnectorForCicArgument, '__type', { value: 'urn:inin.com:configuration.integrations:configureConnectorForCicArgument' });

    Object.defineProperty(ConfigureConnectorForCicArgument, '__propInfo', {
        get: function() {
            var pi = {
                'publisher': { required: true, nullable: false },
                'pluginType': { required: true, nullable: false },
                'pluginGroupName': { required: true, nullable: false },
                'bridgeServerId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.integrations:configureConnectorForCicArgument'] = ConfigureConnectorForCicArgument;

    return ConfigureConnectorForCicArgument;
}());

var ConfigureConnectorForCicResult = (function(){
    var hasProps = false;

    function ConfigureConnectorForCicResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.integrations:configureConnectorForCicResult' });
        }

        ConfigureConnectorForCicResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(ConfigureConnectorForCicResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ConfigureConnectorForCicResult.prototype, 'connectorId', {
            get: function() { return this.__prop_connectorId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConfigureConnectorForCicResult.connectorId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_connectorId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ConfigureConnectorForCicResult, '__type', { value: 'urn:inin.com:configuration.integrations:configureConnectorForCicResult' });

    Object.defineProperty(ConfigureConnectorForCicResult, '__propInfo', {
        get: function() {
            var pi = {
                'connectorId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.integrations:configureConnectorForCicResult'] = ConfigureConnectorForCicResult;

    return ConfigureConnectorForCicResult;
}());

var SalesforceCtiAttributeMapsBulkUpdate = (function(){
    var hasProps = false;

    function SalesforceCtiAttributeMapsBulkUpdate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.integrations:salesforceCtiAttributeMapsBulkUpdate' });
        }

        SalesforceCtiAttributeMapsBulkUpdate._super.constructor.apply(this, arguments);
    }
    _util.inherits(SalesforceCtiAttributeMapsBulkUpdate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SalesforceCtiAttributeMapsBulkUpdate.prototype, 'add', {
            get: function() { return this.__prop_add; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SalesforceCtiAttributeMap); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SalesforceCtiAttributeMap(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SalesforceCtiAttributeMapsBulkUpdate.add: ' + e.message);
                    }
                }

                this.__prop_add = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCtiAttributeMapsBulkUpdate.prototype, 'modify', {
            get: function() { return this.__prop_modify; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SalesforceCtiAttributeMap); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SalesforceCtiAttributeMap(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SalesforceCtiAttributeMapsBulkUpdate.modify: ' + e.message);
                    }
                }

                this.__prop_modify = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCtiAttributeMapsBulkUpdate.prototype, 'remove', {
            get: function() { return this.__prop_remove; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for SalesforceCtiAttributeMapsBulkUpdate.remove, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remove = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SalesforceCtiAttributeMapsBulkUpdate, '__type', { value: 'urn:inin.com:configuration.integrations:salesforceCtiAttributeMapsBulkUpdate' });

    Object.defineProperty(SalesforceCtiAttributeMapsBulkUpdate, '__propInfo', {
        get: function() {
            var pi = {
                'add': { required: false, nullable: true },
                'modify': { required: false, nullable: true },
                'remove': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.integrations:salesforceCtiAttributeMapsBulkUpdate'] = SalesforceCtiAttributeMapsBulkUpdate;

    return SalesforceCtiAttributeMapsBulkUpdate;
}());

var SalesforceCTIConfigurations = (function(){
    var hasProps = false;

    function SalesforceCTIConfigurations() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.integrations:salesforceCTIConfigurations' });
        }

        SalesforceCTIConfigurations._super.constructor.apply(this, arguments);
    }
    _util.inherits(SalesforceCTIConfigurations, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SalesforceCTIConfigurations.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SalesforceCTIConfiguration); }))) {
                    try {
                        value = value.map(function(item){ return new SalesforceCTIConfiguration(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SalesforceCTIConfigurations.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SalesforceCTIConfigurations, '__type', { value: 'urn:inin.com:configuration.integrations:salesforceCTIConfigurations' });

    Object.defineProperty(SalesforceCTIConfigurations, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.integrations:salesforceCTIConfigurations'] = SalesforceCTIConfigurations;

    return SalesforceCTIConfigurations;
}());

var Widgets = (function(){
    var hasProps = false;

    function Widgets() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.integrations:widgets' });
        }

        Widgets._super.constructor.apply(this, arguments);
    }
    _util.inherits(Widgets, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Widgets.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Widget); }))) {
                    try {
                        value = value.map(function(item){ return new Widget(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Widgets.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Widgets, '__type', { value: 'urn:inin.com:configuration.integrations:widgets' });

    Object.defineProperty(Widgets, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.integrations:widgets'] = Widgets;

    return Widgets;
}());

var Widget = (function(){
    var hasProps = false;

    function Widget() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.integrations:widget' });
        }

        Widget._super.constructor.apply(this, arguments);
    }
    _util.inherits(Widget, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Widget.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Widget.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Widget.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Widget.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Widget.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Widget.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Widget.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Widget.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Widget.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Widget.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Widget.prototype, 'supervisorRights', {
            get: function() { return this.__prop_supervisorRights; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for Widget.supervisorRights, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_supervisorRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(Widget.prototype, 'widgetConfiguration', {
            get: function() { return this.__prop_widgetConfiguration; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Widget.widgetConfiguration, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_widgetConfiguration = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Widget, '__type', { value: 'urn:inin.com:configuration.integrations:widget' });

    Object.defineProperty(Widget, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'supervisorRights': { required: false, nullable: true },
                'widgetConfiguration': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.integrations:widget'] = Widget;

    return Widget;
}());

var EnablePureCloudIntegrationParameters = (function(){
    var hasProps = false;

    function EnablePureCloudIntegrationParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.integrations:enablePureCloudIntegrationParameters' });
        }

        EnablePureCloudIntegrationParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(EnablePureCloudIntegrationParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EnablePureCloudIntegrationParameters.prototype, 'orgDisplayName', {
            get: function() { return this.__prop_orgDisplayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EnablePureCloudIntegrationParameters.orgDisplayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_orgDisplayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(EnablePureCloudIntegrationParameters.prototype, 'adminEmail', {
            get: function() { return this.__prop_adminEmail; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EnablePureCloudIntegrationParameters.adminEmail, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_adminEmail = value;
            },
            enumerable: true
        });

        Object.defineProperty(EnablePureCloudIntegrationParameters.prototype, 'adminPassword', {
            get: function() { return this.__prop_adminPassword; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EnablePureCloudIntegrationParameters.adminPassword, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_adminPassword = value;
            },
            enumerable: true
        });

        Object.defineProperty(EnablePureCloudIntegrationParameters.prototype, 'region', {
            get: function() { return this.__prop_region; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EnablePureCloudIntegrationParameters.region, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_region = value;
            },
            enumerable: true
        });

        Object.defineProperty(EnablePureCloudIntegrationParameters.prototype, 'enableLocalBridge', {
            get: function() { return this.__prop_enableLocalBridge; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for EnablePureCloudIntegrationParameters.enableLocalBridge, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_enableLocalBridge = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EnablePureCloudIntegrationParameters, '__type', { value: 'urn:inin.com:configuration.integrations:enablePureCloudIntegrationParameters' });

    Object.defineProperty(EnablePureCloudIntegrationParameters, '__propInfo', {
        get: function() {
            var pi = {
                'orgDisplayName': { required: true, nullable: false },
                'adminEmail': { required: true, nullable: false },
                'adminPassword': { required: true, nullable: false },
                'region': { required: true, nullable: false },
                'enableLocalBridge': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.integrations:enablePureCloudIntegrationParameters'] = EnablePureCloudIntegrationParameters;

    return EnablePureCloudIntegrationParameters;
}());

var SalesforceCTIConfigurationsMessage = (function(){
    var hasProps = false;

    function SalesforceCTIConfigurationsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.integrations:salesforceCTIConfigurationsMessage', enumerable: true });
        }

        SalesforceCTIConfigurationsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(SalesforceCTIConfigurationsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(SalesforceCTIConfigurationsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SalesforceCTIConfiguration); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SalesforceCTIConfiguration(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SalesforceCTIConfigurationsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfigurationsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SalesforceCTIConfiguration); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SalesforceCTIConfiguration(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SalesforceCTIConfigurationsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(SalesforceCTIConfigurationsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for SalesforceCTIConfigurationsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SalesforceCTIConfigurationsMessage, '__type', { value: 'urn:inin.com:configuration.integrations:salesforceCTIConfigurationsMessage' });

    Object.defineProperty(SalesforceCTIConfigurationsMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.integrations:salesforceCTIConfigurationsMessage'] = SalesforceCTIConfigurationsMessage;

    return SalesforceCTIConfigurationsMessage;
}());

var $purecloud = (function(){
    function getPurecloud(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getPurecloud.params)) {
            try {
                params = new getPurecloud.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getPurecloud.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Purecloud) ? o : new Purecloud(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getPurecloud.method, getPurecloud.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getPurecloud, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud', enumerable: true }
    });

    getPurecloud.params = (function(){
        _util.inherits(getPurecloud_params, _util.RequestParams);

        function getPurecloud_params(properties) {
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

            getPurecloud_params._super.constructor.apply(this, arguments);
        }

        return getPurecloud_params;
    })();

    return Object.create(null, {
        getPurecloud: { value: getPurecloud, enumerable: true }
    });
})();

var $salesforceCtiConfigurations = (function(){
    function getSalesforceCTIConfigurations(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSalesforceCTIConfigurations.params)) {
            try {
                params = new getSalesforceCTIConfigurations.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSalesforceCTIConfigurations.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SalesforceCTIConfigurations) ? o : new SalesforceCTIConfigurations(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSalesforceCTIConfigurations.method, getSalesforceCTIConfigurations.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSalesforceCTIConfigurations, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/salesforce-cti-configurations', enumerable: true }
    });

    getSalesforceCTIConfigurations.params = (function(){
        _util.inherits(getSalesforceCTIConfigurations_params, _util.RequestParams);

        function getSalesforceCTIConfigurations_params(properties) {
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

            getSalesforceCTIConfigurations_params._super.constructor.apply(this, arguments);
        }

        return getSalesforceCTIConfigurations_params;
    })();

    function createSalesforceCTIConfiguration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSalesforceCTIConfiguration.params)) {
            try {
                params = new createSalesforceCTIConfiguration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSalesforceCTIConfiguration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSalesforceCTIConfiguration.method, createSalesforceCTIConfiguration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSalesforceCTIConfiguration, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/salesforce-cti-configurations', enumerable: true }
    });

    createSalesforceCTIConfiguration.params = (function(){
        _util.inherits(createSalesforceCTIConfiguration_params, _util.RequestParams);

        function createSalesforceCTIConfiguration_params(properties) {
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
            if (!(properties.content instanceof SalesforceCTIConfiguration)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Integrations.SalesforceCTIConfiguration');
            }

            createSalesforceCTIConfiguration_params._super.constructor.apply(this, arguments);
        }

        return createSalesforceCTIConfiguration_params;
    })();

    function getSalesforceCTIConfiguration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSalesforceCTIConfiguration.params)) {
            try {
                params = new getSalesforceCTIConfiguration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSalesforceCTIConfiguration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SalesforceCTIConfiguration) ? o : new SalesforceCTIConfiguration(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSalesforceCTIConfiguration.method, getSalesforceCTIConfiguration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSalesforceCTIConfiguration, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/salesforce-cti-configurations/{id}', enumerable: true }
    });

    getSalesforceCTIConfiguration.params = (function(){
        _util.inherits(getSalesforceCTIConfiguration_params, _util.RequestParams);

        function getSalesforceCTIConfiguration_params(properties) {
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

            getSalesforceCTIConfiguration_params._super.constructor.apply(this, arguments);
        }

        return getSalesforceCTIConfiguration_params;
    })();

    function deleteSalesforceCTIConfiguration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSalesforceCTIConfiguration.params)) {
            try {
                params = new deleteSalesforceCTIConfiguration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSalesforceCTIConfiguration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSalesforceCTIConfiguration.method, deleteSalesforceCTIConfiguration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSalesforceCTIConfiguration, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/salesforce-cti-configurations/{id}', enumerable: true }
    });

    deleteSalesforceCTIConfiguration.params = (function(){
        _util.inherits(deleteSalesforceCTIConfiguration_params, _util.RequestParams);

        function deleteSalesforceCTIConfiguration_params(properties) {
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

            deleteSalesforceCTIConfiguration_params._super.constructor.apply(this, arguments);
        }

        return deleteSalesforceCTIConfiguration_params;
    })();

    function updateSalesforceCTIConfiguration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSalesforceCTIConfiguration.params)) {
            try {
                params = new updateSalesforceCTIConfiguration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSalesforceCTIConfiguration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSalesforceCTIConfiguration.method, updateSalesforceCTIConfiguration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSalesforceCTIConfiguration, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/salesforce-cti-configurations/{id}', enumerable: true }
    });

    updateSalesforceCTIConfiguration.params = (function(){
        _util.inherits(updateSalesforceCTIConfiguration_params, _util.RequestParams);

        function updateSalesforceCTIConfiguration_params(properties) {
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
            if (!(properties.content instanceof SalesforceCTIConfiguration)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Integrations.SalesforceCTIConfiguration');
            }

            updateSalesforceCTIConfiguration_params._super.constructor.apply(this, arguments);
        }

        return updateSalesforceCTIConfiguration_params;
    })();

    return Object.create(null, {
        getSalesforceCTIConfigurations: { value: getSalesforceCTIConfigurations, enumerable: true },
        createSalesforceCTIConfiguration: { value: createSalesforceCTIConfiguration, enumerable: true },
        getSalesforceCTIConfiguration: { value: getSalesforceCTIConfiguration, enumerable: true },
        deleteSalesforceCTIConfiguration: { value: deleteSalesforceCTIConfiguration, enumerable: true },
        updateSalesforceCTIConfiguration: { value: updateSalesforceCTIConfiguration, enumerable: true }
    });
})();

var $widgets = (function(){
    function getWidgets(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getWidgets.params)) {
            try {
                params = new getWidgets.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getWidgets.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Widgets) ? o : new Widgets(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getWidgets.method, getWidgets.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getWidgets, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/widgets', enumerable: true }
    });

    getWidgets.params = (function(){
        _util.inherits(getWidgets_params, _util.RequestParams);

        function getWidgets_params(properties) {
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

            getWidgets_params._super.constructor.apply(this, arguments);
        }

        return getWidgets_params;
    })();

    function createWidget(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createWidget.params)) {
            try {
                params = new createWidget.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createWidget.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createWidget.method, createWidget.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createWidget, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/widgets', enumerable: true }
    });

    createWidget.params = (function(){
        _util.inherits(createWidget_params, _util.RequestParams);

        function createWidget_params(properties) {
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
            if (!(properties.content instanceof Widget)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Integrations.Widget');
            }

            createWidget_params._super.constructor.apply(this, arguments);
        }

        return createWidget_params;
    })();

    function getWidget(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getWidget.params)) {
            try {
                params = new getWidget.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getWidget.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Widget) ? o : new Widget(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getWidget.method, getWidget.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getWidget, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/widgets/{id}', enumerable: true }
    });

    getWidget.params = (function(){
        _util.inherits(getWidget_params, _util.RequestParams);

        function getWidget_params(properties) {
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

            getWidget_params._super.constructor.apply(this, arguments);
        }

        return getWidget_params;
    })();

    function deleteWidget(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteWidget.params)) {
            try {
                params = new deleteWidget.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteWidget.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteWidget.method, deleteWidget.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteWidget, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/widgets/{id}', enumerable: true }
    });

    deleteWidget.params = (function(){
        _util.inherits(deleteWidget_params, _util.RequestParams);

        function deleteWidget_params(properties) {
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

            deleteWidget_params._super.constructor.apply(this, arguments);
        }

        return deleteWidget_params;
    })();

    function updateWidget(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateWidget.params)) {
            try {
                params = new updateWidget.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateWidget.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateWidget.method, updateWidget.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateWidget, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/widgets/{id}', enumerable: true }
    });

    updateWidget.params = (function(){
        _util.inherits(updateWidget_params, _util.RequestParams);

        function updateWidget_params(properties) {
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
            if (!(properties.content instanceof Widget)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Integrations.Widget');
            }

            updateWidget_params._super.constructor.apply(this, arguments);
        }

        return updateWidget_params;
    })();

    return Object.create(null, {
        getWidgets: { value: getWidgets, enumerable: true },
        createWidget: { value: createWidget, enumerable: true },
        getWidget: { value: getWidget, enumerable: true },
        deleteWidget: { value: deleteWidget, enumerable: true },
        updateWidget: { value: updateWidget, enumerable: true }
    });
})();

var $enablePurecloudIntegration = (function(){
    function enablePureCloudIntegration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof enablePureCloudIntegration.params)) {
            try {
                params = new enablePureCloudIntegration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: enablePureCloudIntegration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['202'] = function(o){ return (o instanceof Common.AsyncOperationAcceptedResponse) ? o : new Common.AsyncOperationAcceptedResponse(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(enablePureCloudIntegration.method, enablePureCloudIntegration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(enablePureCloudIntegration, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud/enable-purecloud-integration', enumerable: true }
    });

    enablePureCloudIntegration.params = (function(){
        _util.inherits(enablePureCloudIntegration_params, _util.RequestParams);

        function enablePureCloudIntegration_params(properties) {
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
            if (!(properties.content instanceof EnablePureCloudIntegrationParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Integrations.EnablePureCloudIntegrationParameters');
            }

            enablePureCloudIntegration_params._super.constructor.apply(this, arguments);
        }

        return enablePureCloudIntegration_params;
    })();

    return Object.create(null, {
        enablePureCloudIntegration: { value: enablePureCloudIntegration, enumerable: true }
    });
})();

var $removePurecloudIntegration = (function(){
    function removePureCloudIntegration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof removePureCloudIntegration.params)) {
            try {
                params = new removePureCloudIntegration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: removePureCloudIntegration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['202'] = function(o){ return (o instanceof Common.AsyncOperationAcceptedResponse) ? o : new Common.AsyncOperationAcceptedResponse(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(removePureCloudIntegration.method, removePureCloudIntegration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(removePureCloudIntegration, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud/remove-purecloud-integration', enumerable: true }
    });

    removePureCloudIntegration.params = (function(){
        _util.inherits(removePureCloudIntegration_params, _util.RequestParams);

        function removePureCloudIntegration_params(properties) {
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

            removePureCloudIntegration_params._super.constructor.apply(this, arguments);
        }

        return removePureCloudIntegration_params;
    })();

    return Object.create(null, {
        removePureCloudIntegration: { value: removePureCloudIntegration, enumerable: true }
    });
})();

exports.SalesforceCTIConfigurationsMessage = SalesforceCTIConfigurationsMessage;
exports.SalesforceCTIConfiguration = SalesforceCTIConfiguration;
exports.SalesforceCtiAttributeMap = SalesforceCtiAttributeMap;
exports.Purecloud = Purecloud;
exports.ConfigureConnectorForCicArgument = ConfigureConnectorForCicArgument;
exports.ConfigureConnectorForCicResult = ConfigureConnectorForCicResult;
exports.SalesforceCtiAttributeMapsBulkUpdate = SalesforceCtiAttributeMapsBulkUpdate;
exports.SalesforceCTIConfigurations = SalesforceCTIConfigurations;
exports.Widgets = Widgets;
exports.Widget = Widget;
exports.EnablePureCloudIntegrationParameters = EnablePureCloudIntegrationParameters;
exports.$purecloud = $purecloud;
exports.$salesforceCtiConfigurations = $salesforceCtiConfigurations;
exports.$widgets = $widgets;
exports.$enablePurecloudIntegration = $enablePurecloudIntegration;
exports.$removePurecloudIntegration = $removePurecloudIntegration;
