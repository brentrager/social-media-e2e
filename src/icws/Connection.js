/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Configuration = require('./Configuration');
var Common = require('./Common');

var ConnectionState = (function(){
    var instanceCache = {};
    function ConnectionState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:connectionState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ConnectionState, _util.EnumValue);

    Object.defineProperties(ConnectionState, {
        'None': { value: new ConnectionState(0, 'None'), enumerable: true },
        'Up': { value: new ConnectionState(1, 'Up'), enumerable: true },
        'Down': { value: new ConnectionState(2, 'Down'), enumerable: true }
    });

    Object.defineProperty(ConnectionState, '__type', { value: 'urn:inin.com:connection:connectionState' });

    _typemap['urn:inin.com:connection:connectionState'] = ConnectionState;

    return ConnectionState;
}());

var StationSettingsType = (function(){
    var instanceCache = {};
    function StationSettingsType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:stationSettingsType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(StationSettingsType, _util.EnumValue);

    Object.defineProperties(StationSettingsType, {
        'None': { value: new StationSettingsType(0, 'None'), enumerable: true },
        'Workstation': { value: new StationSettingsType(1, 'Workstation'), enumerable: true },
        'RemoteWorkstation': { value: new StationSettingsType(2, 'RemoteWorkstation'), enumerable: true },
        'RemoteNumber': { value: new StationSettingsType(3, 'RemoteNumber'), enumerable: true }
    });

    Object.defineProperty(StationSettingsType, '__type', { value: 'urn:inin.com:connection:stationSettingsType' });

    _typemap['urn:inin.com:connection:stationSettingsType'] = StationSettingsType;

    return StationSettingsType;
}());

var SupportedMediaType = (function(){
    var instanceCache = {};
    function SupportedMediaType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:supportedMediaType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(SupportedMediaType, _util.EnumValue);

    Object.defineProperties(SupportedMediaType, {
        'None': { value: new SupportedMediaType(0, 'None'), enumerable: true },
        'Call': { value: new SupportedMediaType(1, 'Call'), enumerable: true },
        'Chat': { value: new SupportedMediaType(2, 'Chat'), enumerable: true },
        'Email': { value: new SupportedMediaType(3, 'Email'), enumerable: true },
        'Generic': { value: new SupportedMediaType(4, 'Generic'), enumerable: true },
        'Callback': { value: new SupportedMediaType(5, 'Callback'), enumerable: true },
        'SmsMessage': { value: new SupportedMediaType(6, 'SmsMessage'), enumerable: true },
        'WorkItem': { value: new SupportedMediaType(7, 'WorkItem'), enumerable: true },
        'DirectMessage': { value: new SupportedMediaType(8, 'DirectMessage'), enumerable: true },
        'SocialConversation': { value: new SupportedMediaType(9, 'SocialConversation'), enumerable: true }
    });

    Object.defineProperty(SupportedMediaType, '__type', { value: 'urn:inin.com:connection:supportedMediaType' });

    _typemap['urn:inin.com:connection:supportedMediaType'] = SupportedMediaType;

    return SupportedMediaType;
}());

var BackupState = (function(){
    var instanceCache = {};
    function BackupState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:backupState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(BackupState, _util.EnumValue);

    Object.defineProperties(BackupState, {
        'Active': { value: new BackupState(0, 'Active'), enumerable: true },
        'UpgradeLower': { value: new BackupState(1, 'UpgradeLower'), enumerable: true },
        'UpgradeHigher': { value: new BackupState(2, 'UpgradeHigher'), enumerable: true },
        'UpgradeHigherManual': { value: new BackupState(3, 'UpgradeHigherManual'), enumerable: true }
    });

    Object.defineProperty(BackupState, '__type', { value: 'urn:inin.com:connection:backupState' });

    _typemap['urn:inin.com:connection:backupState'] = BackupState;

    return BackupState;
}());

var StationConnectionMode = (function(){
    var instanceCache = {};
    function StationConnectionMode(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:stationConnectionMode' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(StationConnectionMode, _util.EnumValue);

    Object.defineProperties(StationConnectionMode, {
        'Default': { value: new StationConnectionMode(0, 'Default'), enumerable: true },
        'IndependentofSession': { value: new StationConnectionMode(1, 'IndependentofSession'), enumerable: true },
        'IndependentConnectionsLogoutWithSession': { value: new StationConnectionMode(2, 'IndependentConnectionsLogoutWithSession'), enumerable: true }
    });

    Object.defineProperty(StationConnectionMode, '__type', { value: 'urn:inin.com:connection:stationConnectionMode' });

    _typemap['urn:inin.com:connection:stationConnectionMode'] = StationConnectionMode;

    return StationConnectionMode;
}());

var SamlType = (function(){
    var instanceCache = {};
    function SamlType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:samlType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(SamlType, _util.EnumValue);

    Object.defineProperties(SamlType, {
        'SamlAssertion': { value: new SamlType(0, 'SamlAssertion'), enumerable: true },
        'SamlResponse': { value: new SamlType(1, 'SamlResponse'), enumerable: true }
    });

    Object.defineProperty(SamlType, '__type', { value: 'urn:inin.com:connection:samlType' });

    _typemap['urn:inin.com:connection:samlType'] = SamlType;

    return SamlType;
}());

var StationInformation = (function(){
    var hasProps = false;

    function StationInformation() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:stationInformation' });
        }

        StationInformation._super.constructor.apply(this, arguments);
    }
    _util.inherits(StationInformation, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StationInformation.prototype, 'canBeDialed', {
            get: function() { return this.__prop_canBeDialed; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for StationInformation.canBeDialed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_canBeDialed = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationInformation.prototype, 'extension', {
            get: function() { return this.__prop_extension; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StationInformation.extension, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_extension = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationInformation.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StationInformation.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationInformation.prototype, 'ringAlways', {
            get: function() { return this.__prop_ringAlways; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for StationInformation.ringAlways, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ringAlways = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationInformation.prototype, 'sipAddress', {
            get: function() { return this.__prop_sipAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for StationInformation.sipAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sipAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationInformation.prototype, 'sipPassword', {
            get: function() { return this.__prop_sipPassword; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for StationInformation.sipPassword, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sipPassword = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationInformation.prototype, 'sipUser', {
            get: function() { return this.__prop_sipUser; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for StationInformation.sipUser, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sipUser = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationInformation.prototype, 'remoteNumber', {
            get: function() { return this.__prop_remoteNumber; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for StationInformation.remoteNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remoteNumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationInformation.prototype, 'stationSetting', {
            get: function() { return this.__prop_stationSetting; },
            set: function(value) {
                if (!(value instanceof StationSettingsType)) {
                    try {
                        value = new StationSettingsType(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationInformation.stationSetting: ' + e.message);
                    }
                }

                this.__prop_stationSetting = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationInformation.prototype, 'allowedMediaTypes', {
            get: function() { return this.__prop_allowedMediaTypes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SupportedMediaType); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SupportedMediaType(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StationInformation.allowedMediaTypes: ' + e.message);
                    }
                }

                this.__prop_allowedMediaTypes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StationInformation, '__type', { value: 'urn:inin.com:connection:stationInformation' });

    Object.defineProperty(StationInformation, '__propInfo', {
        get: function() {
            var pi = {
                'canBeDialed': { required: false, nullable: false },
                'extension': { required: true, nullable: false },
                'id': { required: true, nullable: false },
                'ringAlways': { required: false, nullable: false },
                'sipAddress': { required: false, nullable: false },
                'sipPassword': { required: false, nullable: false },
                'sipUser': { required: false, nullable: false },
                'remoteNumber': { required: false, nullable: false },
                'stationSetting': { required: true, nullable: false },
                'allowedMediaTypes': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:stationInformation'] = StationInformation;

    return StationInformation;
}());

var EffectiveStationInfo = (function(){
    var hasProps = false;

    function EffectiveStationInfo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:effectiveStationInfo' });
        }

        EffectiveStationInfo._super.constructor.apply(this, arguments);
    }
    _util.inherits(EffectiveStationInfo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EffectiveStationInfo.prototype, 'stationId', {
            get: function() { return this.__prop_stationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting EffectiveStationInfo.stationId: ' + e.message);
                    }
                }

                this.__prop_stationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EffectiveStationInfo, '__type', { value: 'urn:inin.com:connection:effectiveStationInfo' });

    Object.defineProperty(EffectiveStationInfo, '__propInfo', {
        get: function() {
            var pi = {
                'stationId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:effectiveStationInfo'] = EffectiveStationInfo;

    return EffectiveStationInfo;
}());

var BaseAuthConnectionRequestSettings = (function(){
    var hasProps = false;

    function BaseAuthConnectionRequestSettings() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:baseAuthConnectionRequestSettings' });
        }

        BaseAuthConnectionRequestSettings._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseAuthConnectionRequestSettings, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BaseAuthConnectionRequestSettings.prototype, 'applicationName', {
            get: function() { return this.__prop_applicationName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseAuthConnectionRequestSettings.applicationName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_applicationName = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseAuthConnectionRequestSettings.prototype, 'marketPlaceApplicationLicenseName', {
            get: function() { return this.__prop_marketPlaceApplicationLicenseName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for BaseAuthConnectionRequestSettings.marketPlaceApplicationLicenseName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_marketPlaceApplicationLicenseName = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseAuthConnectionRequestSettings.prototype, 'marketPlaceApplicationCode', {
            get: function() { return this.__prop_marketPlaceApplicationCode; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for BaseAuthConnectionRequestSettings.marketPlaceApplicationCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_marketPlaceApplicationCode = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BaseAuthConnectionRequestSettings, '__type', { value: 'urn:inin.com:connection:baseAuthConnectionRequestSettings' });

    Object.defineProperty(BaseAuthConnectionRequestSettings, '__propInfo', {
        get: function() {
            var pi = {
                'applicationName': { required: true, nullable: false },
                'marketPlaceApplicationLicenseName': { required: false, nullable: false },
                'marketPlaceApplicationCode': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:baseAuthConnectionRequestSettings'] = BaseAuthConnectionRequestSettings;

    return BaseAuthConnectionRequestSettings;
}());

var ConnectionResponse = (function(){
    var hasProps = false;

    function ConnectionResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:connectionResponse' });
        }

        ConnectionResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(ConnectionResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ConnectionResponse.prototype, 'csrfToken', {
            get: function() { return this.__prop_csrfToken; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConnectionResponse.csrfToken, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_csrfToken = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionResponse.prototype, 'sessionId', {
            get: function() { return this.__prop_sessionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConnectionResponse.sessionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sessionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionResponse.prototype, 'alternateHostList', {
            get: function() { return this.__prop_alternateHostList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for ConnectionResponse.alternateHostList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alternateHostList = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionResponse.prototype, 'userID', {
            get: function() { return this.__prop_userID; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ConnectionResponse.userID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userID = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionResponse.prototype, 'userDisplayName', {
            get: function() { return this.__prop_userDisplayName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ConnectionResponse.userDisplayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userDisplayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionResponse.prototype, 'icServer', {
            get: function() { return this.__prop_icServer; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ConnectionResponse.icServer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_icServer = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionResponse.prototype, 'daysUntilPasswordExpiration', {
            get: function() { return this.__prop_daysUntilPasswordExpiration; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for ConnectionResponse.daysUntilPasswordExpiration, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_daysUntilPasswordExpiration = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionResponse.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(value instanceof VersionInfo || value === void 0)) {
                    try {
                        value = new VersionInfo(value);
                    } catch (e) {
                        throw new TypeError('Error setting ConnectionResponse.version: ' + e.message);
                    }
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionResponse.prototype, 'features', {
            get: function() { return this.__prop_features; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Common.FeatureInfo); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Common.FeatureInfo(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ConnectionResponse.features: ' + e.message);
                    }
                }

                this.__prop_features = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionResponse.prototype, 'serverTimeInfo', {
            get: function() { return this.__prop_serverTimeInfo; },
            set: function(value) {
                if (!(value instanceof ServerTimeInfo || value === void 0)) {
                    try {
                        value = new ServerTimeInfo(value);
                    } catch (e) {
                        throw new TypeError('Error setting ConnectionResponse.serverTimeInfo: ' + e.message);
                    }
                }

                this.__prop_serverTimeInfo = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionResponse.prototype, 'defaultWorkstationId', {
            get: function() { return this.__prop_defaultWorkstationId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ConnectionResponse.defaultWorkstationId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_defaultWorkstationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionResponse.prototype, 'effectiveStation', {
            get: function() { return this.__prop_effectiveStation; },
            set: function(value) {
                if (!(value instanceof EffectiveStationInfo || value === void 0 || value === null)) {
                    try {
                        value = new EffectiveStationInfo(value);
                    } catch (e) {
                        throw new TypeError('Error setting ConnectionResponse.effectiveStation: ' + e.message);
                    }
                }

                this.__prop_effectiveStation = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionResponse.prototype, 'purecloudIntegration', {
            get: function() { return this.__prop_purecloudIntegration; },
            set: function(value) {
                if (!(value instanceof PurecloudIntegration || value === void 0)) {
                    try {
                        value = new PurecloudIntegration(value);
                    } catch (e) {
                        throw new TypeError('Error setting ConnectionResponse.purecloudIntegration: ' + e.message);
                    }
                }

                this.__prop_purecloudIntegration = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ConnectionResponse, '__type', { value: 'urn:inin.com:connection:connectionResponse' });

    Object.defineProperty(ConnectionResponse, '__propInfo', {
        get: function() {
            var pi = {
                'csrfToken': { required: true, nullable: false },
                'sessionId': { required: true, nullable: false },
                'alternateHostList': { required: false, nullable: false },
                'userID': { required: false, nullable: false },
                'userDisplayName': { required: false, nullable: false },
                'icServer': { required: false, nullable: false },
                'daysUntilPasswordExpiration': { required: false, nullable: false },
                'version': { required: false, nullable: false },
                'features': { required: false, nullable: false },
                'serverTimeInfo': { required: false, nullable: false },
                'defaultWorkstationId': { required: false, nullable: true },
                'effectiveStation': { required: false, nullable: true },
                'purecloudIntegration': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:connectionResponse'] = ConnectionResponse;

    return ConnectionResponse;
}());

var VersionInfo = (function(){
    var hasProps = false;

    function VersionInfo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:versionInfo' });
        }

        VersionInfo._super.constructor.apply(this, arguments);
    }
    _util.inherits(VersionInfo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(VersionInfo.prototype, 'majorVersion', {
            get: function() { return this.__prop_majorVersion; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for VersionInfo.majorVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_majorVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(VersionInfo.prototype, 'minorVersion', {
            get: function() { return this.__prop_minorVersion; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for VersionInfo.minorVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minorVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(VersionInfo.prototype, 'su', {
            get: function() { return this.__prop_su; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for VersionInfo.su, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_su = value;
            },
            enumerable: true
        });

        Object.defineProperty(VersionInfo.prototype, 'build', {
            get: function() { return this.__prop_build; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for VersionInfo.build, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_build = value;
            },
            enumerable: true
        });

        Object.defineProperty(VersionInfo.prototype, 'productId', {
            get: function() { return this.__prop_productId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for VersionInfo.productId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_productId = value;
            },
            enumerable: true
        });

        Object.defineProperty(VersionInfo.prototype, 'codebaseId', {
            get: function() { return this.__prop_codebaseId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for VersionInfo.codebaseId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_codebaseId = value;
            },
            enumerable: true
        });

        Object.defineProperty(VersionInfo.prototype, 'productReleaseDisplayString', {
            get: function() { return this.__prop_productReleaseDisplayString; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for VersionInfo.productReleaseDisplayString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_productReleaseDisplayString = value;
            },
            enumerable: true
        });

        Object.defineProperty(VersionInfo.prototype, 'productPatchDisplayString', {
            get: function() { return this.__prop_productPatchDisplayString; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for VersionInfo.productPatchDisplayString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_productPatchDisplayString = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VersionInfo, '__type', { value: 'urn:inin.com:connection:versionInfo' });

    Object.defineProperty(VersionInfo, '__propInfo', {
        get: function() {
            var pi = {
                'majorVersion': { required: true, nullable: false },
                'minorVersion': { required: true, nullable: false },
                'su': { required: true, nullable: false },
                'build': { required: true, nullable: false },
                'productId': { required: true, nullable: false },
                'codebaseId': { required: true, nullable: false },
                'productReleaseDisplayString': { required: false, nullable: false },
                'productPatchDisplayString': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:versionInfo'] = VersionInfo;

    return VersionInfo;
}());

var ServerTimeInfo = (function(){
    var hasProps = false;

    function ServerTimeInfo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:serverTimeInfo' });
        }

        ServerTimeInfo._super.constructor.apply(this, arguments);
    }
    _util.inherits(ServerTimeInfo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ServerTimeInfo.prototype, 'serverUtcTime', {
            get: function() { return this.__prop_serverUtcTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for ServerTimeInfo.serverUtcTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_serverUtcTime = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ServerTimeInfo, '__type', { value: 'urn:inin.com:connection:serverTimeInfo' });

    Object.defineProperty(ServerTimeInfo, '__propInfo', {
        get: function() {
            var pi = {
                'serverUtcTime': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:serverTimeInfo'] = ServerTimeInfo;

    return ServerTimeInfo;
}());

var PurecloudIntegration = (function(){
    var hasProps = false;

    function PurecloudIntegration() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:purecloudIntegration' });
        }

        PurecloudIntegration._super.constructor.apply(this, arguments);
    }
    _util.inherits(PurecloudIntegration, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PurecloudIntegration.prototype, 'integrationEnabled', {
            get: function() { return this.__prop_integrationEnabled; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for PurecloudIntegration.integrationEnabled, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_integrationEnabled = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudIntegration.prototype, 'webRTCIntegrationEnabled', {
            get: function() { return this.__prop_webRTCIntegrationEnabled; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PurecloudIntegration.webRTCIntegrationEnabled, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_webRTCIntegrationEnabled = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PurecloudIntegration, '__type', { value: 'urn:inin.com:connection:purecloudIntegration' });

    Object.defineProperty(PurecloudIntegration, '__propInfo', {
        get: function() {
            var pi = {
                'integrationEnabled': { required: true, nullable: false },
                'webRTCIntegrationEnabled': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:purecloudIntegration'] = PurecloudIntegration;

    return PurecloudIntegration;
}());

var AlternateHosts = (function(){
    var hasProps = false;

    function AlternateHosts() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:alternateHosts' });
        }

        AlternateHosts._super.constructor.apply(this, arguments);
    }
    _util.inherits(AlternateHosts, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AlternateHosts.prototype, 'errorId', {
            get: function() { return this.__prop_errorId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for AlternateHosts.errorId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_errorId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlternateHosts.prototype, 'message', {
            get: function() { return this.__prop_message; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for AlternateHosts.message, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_message = value;
            },
            enumerable: true
        });

        Object.defineProperty(AlternateHosts.prototype, 'alternateHostList', {
            get: function() { return this.__prop_alternateHostList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for AlternateHosts.alternateHostList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alternateHostList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AlternateHosts, '__type', { value: 'urn:inin.com:connection:alternateHosts' });

    Object.defineProperty(AlternateHosts, '__propInfo', {
        get: function() {
            var pi = {
                'errorId': { required: false, nullable: false },
                'message': { required: false, nullable: false },
                'alternateHostList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:alternateHosts'] = AlternateHosts;

    return AlternateHosts;
}());

var ServerInfo = (function(){
    var hasProps = false;

    function ServerInfo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:serverInfo' });
        }

        ServerInfo._super.constructor.apply(this, arguments);
    }
    _util.inherits(ServerInfo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ServerInfo.prototype, 'languages', {
            get: function() { return this.__prop_languages; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Language); }))) {
                    try {
                        value = value.map(function(item){ return new Language(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ServerInfo.languages: ' + e.message);
                    }
                }

                this.__prop_languages = value;
            },
            enumerable: true
        });

        Object.defineProperty(ServerInfo.prototype, 'acceptLanguage', {
            get: function() { return this.__prop_acceptLanguage; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ServerInfo.acceptLanguage, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_acceptLanguage = value;
            },
            enumerable: true
        });

        Object.defineProperty(ServerInfo.prototype, 'authentication', {
            get: function() { return this.__prop_authentication; },
            set: function(value) {
                if (!(value instanceof AuthenticationInfo || value === void 0)) {
                    try {
                        value = new AuthenticationInfo(value);
                    } catch (e) {
                        throw new TypeError('Error setting ServerInfo.authentication: ' + e.message);
                    }
                }

                this.__prop_authentication = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ServerInfo, '__type', { value: 'urn:inin.com:connection:serverInfo' });

    Object.defineProperty(ServerInfo, '__propInfo', {
        get: function() {
            var pi = {
                'languages': { required: true, nullable: false },
                'acceptLanguage': { required: true, nullable: false },
                'authentication': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:serverInfo'] = ServerInfo;

    return ServerInfo;
}());

var Language = (function(){
    var hasProps = false;

    function Language() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:language' });
        }

        Language._super.constructor.apply(this, arguments);
    }
    _util.inherits(Language, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Language.prototype, 'languageID', {
            get: function() { return this.__prop_languageID; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Language.languageID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_languageID = value;
            },
            enumerable: true
        });

        Object.defineProperty(Language.prototype, 'languageDisplayName', {
            get: function() { return this.__prop_languageDisplayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Language.languageDisplayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_languageDisplayName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Language, '__type', { value: 'urn:inin.com:connection:language' });

    Object.defineProperty(Language, '__propInfo', {
        get: function() {
            var pi = {
                'languageID': { required: true, nullable: false },
                'languageDisplayName': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:language'] = Language;

    return Language;
}());

var AuthenticationInfo = (function(){
    var hasProps = false;

    function AuthenticationInfo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:authenticationInfo' });
        }

        AuthenticationInfo._super.constructor.apply(this, arguments);
    }
    _util.inherits(AuthenticationInfo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AuthenticationInfo.prototype, 'allowIcAuth', {
            get: function() { return this.__prop_allowIcAuth; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for AuthenticationInfo.allowIcAuth, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowIcAuth = value;
            },
            enumerable: true
        });

        Object.defineProperty(AuthenticationInfo.prototype, 'identityProviders', {
            get: function() { return this.__prop_identityProviders; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof IdentityProvider); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new IdentityProvider(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AuthenticationInfo.identityProviders: ' + e.message);
                    }
                }

                this.__prop_identityProviders = value;
            },
            enumerable: true
        });

        Object.defineProperty(AuthenticationInfo.prototype, 'userAgreementText', {
            get: function() { return this.__prop_userAgreementText; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for AuthenticationInfo.userAgreementText, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userAgreementText = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AuthenticationInfo, '__type', { value: 'urn:inin.com:connection:authenticationInfo' });

    Object.defineProperty(AuthenticationInfo, '__propInfo', {
        get: function() {
            var pi = {
                'allowIcAuth': { required: true, nullable: false },
                'identityProviders': { required: false, nullable: false },
                'userAgreementText': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:authenticationInfo'] = AuthenticationInfo;

    return AuthenticationInfo;
}());

var IdentityProvider = (function(){
    var hasProps = false;

    function IdentityProvider() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:identityProvider' });
        }

        IdentityProvider._super.constructor.apply(this, arguments);
    }
    _util.inherits(IdentityProvider, _util.DataContract);

    function defineProps() {
        Object.defineProperty(IdentityProvider.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for IdentityProvider.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(IdentityProvider.prototype, 'identityProviderId', {
            get: function() { return this.__prop_identityProviderId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for IdentityProvider.identityProviderId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_identityProviderId = value;
            },
            enumerable: true
        });

        Object.defineProperty(IdentityProvider.prototype, 'builtInIdentityProvider', {
            get: function() { return this.__prop_builtInIdentityProvider; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for IdentityProvider.builtInIdentityProvider, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_builtInIdentityProvider = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(IdentityProvider, '__type', { value: 'urn:inin.com:connection:identityProvider' });

    Object.defineProperty(IdentityProvider, '__propInfo', {
        get: function() {
            var pi = {
                'displayName': { required: true, nullable: false },
                'identityProviderId': { required: true, nullable: false },
                'builtInIdentityProvider': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:identityProvider'] = IdentityProvider;

    return IdentityProvider;
}());

var SingleSignOnResponse = (function(){
    var hasProps = false;

    function SingleSignOnResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:singleSignOnResponse' });
        }

        SingleSignOnResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(SingleSignOnResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SingleSignOnResponse.prototype, 'singleSignOnToken', {
            get: function() { return this.__prop_singleSignOnToken; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SingleSignOnResponse.singleSignOnToken, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_singleSignOnToken = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SingleSignOnResponse, '__type', { value: 'urn:inin.com:connection:singleSignOnResponse' });

    Object.defineProperty(SingleSignOnResponse, '__propInfo', {
        get: function() {
            var pi = {
                'singleSignOnToken': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:singleSignOnResponse'] = SingleSignOnResponse;

    return SingleSignOnResponse;
}());

var ConnectionSettings = (function(){
    var hasProps = false;

    function ConnectionSettings() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:connectionSettings' });
        }

        ConnectionSettings._super.constructor.apply(this, arguments);
    }
    _util.inherits(ConnectionSettings, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ConnectionSettings.prototype, 'connectionState', {
            get: function() { return this.__prop_connectionState; },
            set: function(value) {
                if (!(value instanceof ConnectionState)) {
                    try {
                        value = new ConnectionState(value);
                    } catch (e) {
                        throw new TypeError('Error setting ConnectionSettings.connectionState: ' + e.message);
                    }
                }

                this.__prop_connectionState = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionSettings.prototype, 'reason', {
            get: function() { return this.__prop_reason; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ConnectionSettings.reason, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_reason = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionSettings.prototype, 'shouldReconnect', {
            get: function() { return this.__prop_shouldReconnect; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ConnectionSettings.shouldReconnect, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shouldReconnect = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ConnectionSettings, '__type', { value: 'urn:inin.com:connection:connectionSettings' });

    Object.defineProperty(ConnectionSettings, '__propInfo', {
        get: function() {
            var pi = {
                'connectionState': { required: true, nullable: false },
                'reason': { required: false, nullable: false },
                'shouldReconnect': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:connectionSettings'] = ConnectionSettings;

    return ConnectionSettings;
}());

var SwitchoverStatus = (function(){
    var hasProps = false;

    function SwitchoverStatus() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:switchoverStatus' });
        }

        SwitchoverStatus._super.constructor.apply(this, arguments);
    }
    _util.inherits(SwitchoverStatus, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SwitchoverStatus.prototype, 'isSwitchoverActive', {
            get: function() { return this.__prop_isSwitchoverActive; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for SwitchoverStatus.isSwitchoverActive, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSwitchoverActive = value;
            },
            enumerable: true
        });

        Object.defineProperty(SwitchoverStatus.prototype, 'primaryHost', {
            get: function() { return this.__prop_primaryHost; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SwitchoverStatus.primaryHost, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_primaryHost = value;
            },
            enumerable: true
        });

        Object.defineProperty(SwitchoverStatus.prototype, 'backupHost', {
            get: function() { return this.__prop_backupHost; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for SwitchoverStatus.backupHost, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_backupHost = value;
            },
            enumerable: true
        });

        Object.defineProperty(SwitchoverStatus.prototype, 'isBackupICStopping', {
            get: function() { return this.__prop_isBackupICStopping; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for SwitchoverStatus.isBackupICStopping, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isBackupICStopping = value;
            },
            enumerable: true
        });

        Object.defineProperty(SwitchoverStatus.prototype, 'isBackupICStarting', {
            get: function() { return this.__prop_isBackupICStarting; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for SwitchoverStatus.isBackupICStarting, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isBackupICStarting = value;
            },
            enumerable: true
        });

        Object.defineProperty(SwitchoverStatus.prototype, 'isManualSwitchOnly', {
            get: function() { return this.__prop_isManualSwitchOnly; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for SwitchoverStatus.isManualSwitchOnly, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isManualSwitchOnly = value;
            },
            enumerable: true
        });

        Object.defineProperty(SwitchoverStatus.prototype, 'backupState', {
            get: function() { return this.__prop_backupState; },
            set: function(value) {
                if (!(value instanceof BackupState || value === void 0)) {
                    try {
                        value = new BackupState(value);
                    } catch (e) {
                        throw new TypeError('Error setting SwitchoverStatus.backupState: ' + e.message);
                    }
                }

                this.__prop_backupState = value;
            },
            enumerable: true
        });

        Object.defineProperty(SwitchoverStatus.prototype, 'backupVersion', {
            get: function() { return this.__prop_backupVersion; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for SwitchoverStatus.backupVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_backupVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(SwitchoverStatus.prototype, 'subsystemsDown', {
            get: function() { return this.__prop_subsystemsDown; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for SwitchoverStatus.subsystemsDown, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subsystemsDown = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SwitchoverStatus, '__type', { value: 'urn:inin.com:connection:switchoverStatus' });

    Object.defineProperty(SwitchoverStatus, '__propInfo', {
        get: function() {
            var pi = {
                'isSwitchoverActive': { required: true, nullable: false },
                'primaryHost': { required: true, nullable: false },
                'backupHost': { required: false, nullable: false },
                'isBackupICStopping': { required: false, nullable: false },
                'isBackupICStarting': { required: false, nullable: false },
                'isManualSwitchOnly': { required: false, nullable: false },
                'backupState': { required: false, nullable: false },
                'backupVersion': { required: false, nullable: false },
                'subsystemsDown': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:switchoverStatus'] = SwitchoverStatus;

    return SwitchoverStatus;
}());

var StationSettings = (function(){
    var hasProps = false;

    function StationSettings() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:stationSettings' });
        }

        StationSettings._super.constructor.apply(this, arguments);
    }
    _util.inherits(StationSettings, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StationSettings.prototype, 'supportedMediaTypes', {
            get: function() { return this.__prop_supportedMediaTypes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SupportedMediaType); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SupportedMediaType(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StationSettings.supportedMediaTypes: ' + e.message);
                    }
                }

                this.__prop_supportedMediaTypes = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationSettings.prototype, 'stationConnectionMode', {
            get: function() { return this.__prop_stationConnectionMode; },
            set: function(value) {
                if (!(value instanceof StationConnectionMode || value === void 0)) {
                    try {
                        value = new StationConnectionMode(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationSettings.stationConnectionMode: ' + e.message);
                    }
                }

                this.__prop_stationConnectionMode = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationSettings.prototype, 'readyForInteractions', {
            get: function() { return this.__prop_readyForInteractions; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for StationSettings.readyForInteractions, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_readyForInteractions = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StationSettings, '__type', { value: 'urn:inin.com:connection:stationSettings' });

    Object.defineProperty(StationSettings, '__propInfo', {
        get: function() {
            var pi = {
                'supportedMediaTypes': { required: false, nullable: false },
                'stationConnectionMode': { required: false, nullable: false },
                'readyForInteractions': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:stationSettings'] = StationSettings;

    return StationSettings;
}());

var CreateUniqueAuthTokenRequest = (function(){
    var hasProps = false;

    function CreateUniqueAuthTokenRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:createUniqueAuthTokenRequest' });
        }

        CreateUniqueAuthTokenRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateUniqueAuthTokenRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreateUniqueAuthTokenRequest.prototype, 'authTokenSeed', {
            get: function() { return this.__prop_authTokenSeed; },
            set: function(value) {
                if (_util.isString(value)) { value = new _util.Guid(value); }
                if (!(_util.isGuid(value))) {
                    throw new TypeError('Expected type Guid for CreateUniqueAuthTokenRequest.authTokenSeed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_authTokenSeed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateUniqueAuthTokenRequest, '__type', { value: 'urn:inin.com:connection:createUniqueAuthTokenRequest' });

    Object.defineProperty(CreateUniqueAuthTokenRequest, '__propInfo', {
        get: function() {
            var pi = {
                'authTokenSeed': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:createUniqueAuthTokenRequest'] = CreateUniqueAuthTokenRequest;

    return CreateUniqueAuthTokenRequest;
}());

var CreateUniqueAuthTokenResponse = (function(){
    var hasProps = false;

    function CreateUniqueAuthTokenResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:createUniqueAuthTokenResponse' });
        }

        CreateUniqueAuthTokenResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateUniqueAuthTokenResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreateUniqueAuthTokenResponse.prototype, 'authToken', {
            get: function() { return this.__prop_authToken; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreateUniqueAuthTokenResponse.authToken, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_authToken = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateUniqueAuthTokenResponse, '__type', { value: 'urn:inin.com:connection:createUniqueAuthTokenResponse' });

    Object.defineProperty(CreateUniqueAuthTokenResponse, '__propInfo', {
        get: function() {
            var pi = {
                'authToken': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:createUniqueAuthTokenResponse'] = CreateUniqueAuthTokenResponse;

    return CreateUniqueAuthTokenResponse;
}());

var CreatePureCloudSamlAuthDataRequest = (function(){
    var hasProps = false;

    function CreatePureCloudSamlAuthDataRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:createPureCloudSamlAuthDataRequest' });
        }

        CreatePureCloudSamlAuthDataRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreatePureCloudSamlAuthDataRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreatePureCloudSamlAuthDataRequest.prototype, 'samlType', {
            get: function() { return this.__prop_samlType; },
            set: function(value) {
                if (!(value instanceof SamlType)) {
                    try {
                        value = new SamlType(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreatePureCloudSamlAuthDataRequest.samlType: ' + e.message);
                    }
                }

                this.__prop_samlType = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreatePureCloudSamlAuthDataRequest.prototype, 'serviceName', {
            get: function() { return this.__prop_serviceName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreatePureCloudSamlAuthDataRequest.serviceName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_serviceName = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreatePureCloudSamlAuthDataRequest.prototype, 'asPureCloudAdminUser', {
            get: function() { return this.__prop_asPureCloudAdminUser; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for CreatePureCloudSamlAuthDataRequest.asPureCloudAdminUser, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_asPureCloudAdminUser = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreatePureCloudSamlAuthDataRequest, '__type', { value: 'urn:inin.com:connection:createPureCloudSamlAuthDataRequest' });

    Object.defineProperty(CreatePureCloudSamlAuthDataRequest, '__propInfo', {
        get: function() {
            var pi = {
                'samlType': { required: true, nullable: false },
                'serviceName': { required: false, nullable: false },
                'asPureCloudAdminUser': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:createPureCloudSamlAuthDataRequest'] = CreatePureCloudSamlAuthDataRequest;

    return CreatePureCloudSamlAuthDataRequest;
}());

var CreatePureCloudSamlAuthDataResponse = (function(){
    var hasProps = false;

    function CreatePureCloudSamlAuthDataResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:createPureCloudSamlAuthDataResponse' });
        }

        CreatePureCloudSamlAuthDataResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreatePureCloudSamlAuthDataResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreatePureCloudSamlAuthDataResponse.prototype, 'samlData', {
            get: function() { return this.__prop_samlData; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreatePureCloudSamlAuthDataResponse.samlData, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_samlData = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreatePureCloudSamlAuthDataResponse.prototype, 'orgName', {
            get: function() { return this.__prop_orgName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreatePureCloudSamlAuthDataResponse.orgName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_orgName = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreatePureCloudSamlAuthDataResponse.prototype, 'clientId', {
            get: function() { return this.__prop_clientId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreatePureCloudSamlAuthDataResponse.clientId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_clientId = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreatePureCloudSamlAuthDataResponse.prototype, 'clientSecret', {
            get: function() { return this.__prop_clientSecret; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreatePureCloudSamlAuthDataResponse.clientSecret, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_clientSecret = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreatePureCloudSamlAuthDataResponse.prototype, 'baseUri', {
            get: function() { return this.__prop_baseUri; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreatePureCloudSamlAuthDataResponse.baseUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_baseUri = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreatePureCloudSamlAuthDataResponse, '__type', { value: 'urn:inin.com:connection:createPureCloudSamlAuthDataResponse' });

    Object.defineProperty(CreatePureCloudSamlAuthDataResponse, '__propInfo', {
        get: function() {
            var pi = {
                'samlData': { required: true, nullable: false },
                'orgName': { required: true, nullable: false },
                'clientId': { required: true, nullable: false },
                'clientSecret': { required: true, nullable: false },
                'baseUri': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:createPureCloudSamlAuthDataResponse'] = CreatePureCloudSamlAuthDataResponse;

    return CreatePureCloudSamlAuthDataResponse;
}());

var PurecloudAccessTokenRequest = (function(){
    var hasProps = false;

    function PurecloudAccessTokenRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:purecloudAccessTokenRequest' });
        }

        PurecloudAccessTokenRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(PurecloudAccessTokenRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PurecloudAccessTokenRequest.prototype, 'serviceName', {
            get: function() { return this.__prop_serviceName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PurecloudAccessTokenRequest.serviceName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_serviceName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PurecloudAccessTokenRequest, '__type', { value: 'urn:inin.com:connection:purecloudAccessTokenRequest' });

    Object.defineProperty(PurecloudAccessTokenRequest, '__propInfo', {
        get: function() {
            var pi = {
                'serviceName': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:purecloudAccessTokenRequest'] = PurecloudAccessTokenRequest;

    return PurecloudAccessTokenRequest;
}());

var PurecloudAccessTokenResponse = (function(){
    var hasProps = false;

    function PurecloudAccessTokenResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:purecloudAccessTokenResponse' });
        }

        PurecloudAccessTokenResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(PurecloudAccessTokenResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PurecloudAccessTokenResponse.prototype, 'accessToken', {
            get: function() { return this.__prop_accessToken; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PurecloudAccessTokenResponse.accessToken, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accessToken = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudAccessTokenResponse.prototype, 'orgName', {
            get: function() { return this.__prop_orgName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PurecloudAccessTokenResponse.orgName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_orgName = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudAccessTokenResponse.prototype, 'baseUri', {
            get: function() { return this.__prop_baseUri; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PurecloudAccessTokenResponse.baseUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_baseUri = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PurecloudAccessTokenResponse, '__type', { value: 'urn:inin.com:connection:purecloudAccessTokenResponse' });

    Object.defineProperty(PurecloudAccessTokenResponse, '__propInfo', {
        get: function() {
            var pi = {
                'accessToken': { required: true, nullable: false },
                'orgName': { required: true, nullable: false },
                'baseUri': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:purecloudAccessTokenResponse'] = PurecloudAccessTokenResponse;

    return PurecloudAccessTokenResponse;
}());

var ConnectionStateChangeMessage = (function(){
    var hasProps = false;

    function ConnectionStateChangeMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:connectionStateChangeMessage', enumerable: true });
        }

        ConnectionStateChangeMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ConnectionStateChangeMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(ConnectionStateChangeMessage.prototype, 'previousConnectionState', {
            get: function() { return this.__prop_previousConnectionState; },
            set: function(value) {
                if (!(value instanceof ConnectionState)) {
                    try {
                        value = new ConnectionState(value);
                    } catch (e) {
                        throw new TypeError('Error setting ConnectionStateChangeMessage.previousConnectionState: ' + e.message);
                    }
                }

                this.__prop_previousConnectionState = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionStateChangeMessage.prototype, 'newConnectionState', {
            get: function() { return this.__prop_newConnectionState; },
            set: function(value) {
                if (!(value instanceof ConnectionState)) {
                    try {
                        value = new ConnectionState(value);
                    } catch (e) {
                        throw new TypeError('Error setting ConnectionStateChangeMessage.newConnectionState: ' + e.message);
                    }
                }

                this.__prop_newConnectionState = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionStateChangeMessage.prototype, 'reason', {
            get: function() { return this.__prop_reason; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConnectionStateChangeMessage.reason, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_reason = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConnectionStateChangeMessage.prototype, 'shouldReconnect', {
            get: function() { return this.__prop_shouldReconnect; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ConnectionStateChangeMessage.shouldReconnect, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shouldReconnect = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ConnectionStateChangeMessage, '__type', { value: 'urn:inin.com:connection:connectionStateChangeMessage' });

    Object.defineProperty(ConnectionStateChangeMessage, '__propInfo', {
        get: function() {
            var pi = {
                'previousConnectionState': { required: true, nullable: false },
                'newConnectionState': { required: true, nullable: false },
                'reason': { required: true, nullable: false },
                'shouldReconnect': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:connectionStateChangeMessage'] = ConnectionStateChangeMessage;

    return ConnectionStateChangeMessage;
}());

var StationConnectionStateChangeMessage = (function(){
    var hasProps = false;

    function StationConnectionStateChangeMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:stationConnectionStateChangeMessage', enumerable: true });
        }

        StationConnectionStateChangeMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(StationConnectionStateChangeMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(StationConnectionStateChangeMessage.prototype, 'previousStationInfo', {
            get: function() { return this.__prop_previousStationInfo; },
            set: function(value) {
                if (!(value instanceof StationInformation || value === void 0)) {
                    try {
                        value = new StationInformation(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationConnectionStateChangeMessage.previousStationInfo: ' + e.message);
                    }
                }

                this.__prop_previousStationInfo = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationConnectionStateChangeMessage.prototype, 'newStationInfo', {
            get: function() { return this.__prop_newStationInfo; },
            set: function(value) {
                if (!(value instanceof StationInformation)) {
                    try {
                        value = new StationInformation(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationConnectionStateChangeMessage.newStationInfo: ' + e.message);
                    }
                }

                this.__prop_newStationInfo = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StationConnectionStateChangeMessage, '__type', { value: 'urn:inin.com:connection:stationConnectionStateChangeMessage' });

    Object.defineProperty(StationConnectionStateChangeMessage, '__propInfo', {
        get: function() {
            var pi = {
                'previousStationInfo': { required: false, nullable: false },
                'newStationInfo': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:stationConnectionStateChangeMessage'] = StationConnectionStateChangeMessage;

    return StationConnectionStateChangeMessage;
}());

var EffectiveStationChangeMessage = (function(){
    var hasProps = false;

    function EffectiveStationChangeMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:effectiveStationChangeMessage', enumerable: true });
        }

        EffectiveStationChangeMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(EffectiveStationChangeMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(EffectiveStationChangeMessage.prototype, 'effectiveStation', {
            get: function() { return this.__prop_effectiveStation; },
            set: function(value) {
                if (!(value instanceof EffectiveStationInfo || value === null)) {
                    try {
                        value = new EffectiveStationInfo(value);
                    } catch (e) {
                        throw new TypeError('Error setting EffectiveStationChangeMessage.effectiveStation: ' + e.message);
                    }
                }

                this.__prop_effectiveStation = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EffectiveStationChangeMessage, '__type', { value: 'urn:inin.com:connection:effectiveStationChangeMessage' });

    Object.defineProperty(EffectiveStationChangeMessage, '__propInfo', {
        get: function() {
            var pi = {
                'effectiveStation': { required: true, nullable: true }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:effectiveStationChangeMessage'] = EffectiveStationChangeMessage;

    return EffectiveStationChangeMessage;
}());

var AuthTokenConnectionRequestSettings = (function(){
    var hasProps = false;

    function AuthTokenConnectionRequestSettings() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:authTokenConnectionRequestSettings', enumerable: true });
        }

        AuthTokenConnectionRequestSettings._super.constructor.apply(this, arguments);
    }
    _util.inherits(AuthTokenConnectionRequestSettings, BaseAuthConnectionRequestSettings);

    function defineProps() {
        Object.defineProperty(AuthTokenConnectionRequestSettings.prototype, 'authTokenSeed', {
            get: function() { return this.__prop_authTokenSeed; },
            set: function(value) {
                if (_util.isString(value)) { value = new _util.Guid(value); }
                if (!(_util.isGuid(value))) {
                    throw new TypeError('Expected type Guid for AuthTokenConnectionRequestSettings.authTokenSeed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_authTokenSeed = value;
            },
            enumerable: true
        });

        Object.defineProperty(AuthTokenConnectionRequestSettings.prototype, 'authToken', {
            get: function() { return this.__prop_authToken; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AuthTokenConnectionRequestSettings.authToken, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_authToken = value;
            },
            enumerable: true
        });

        Object.defineProperty(AuthTokenConnectionRequestSettings.prototype, 'authTokenSourceSession', {
            get: function() { return this.__prop_authTokenSourceSession; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AuthTokenConnectionRequestSettings.authTokenSourceSession, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_authTokenSourceSession = value;
            },
            enumerable: true
        });

        Object.defineProperty(AuthTokenConnectionRequestSettings.prototype, 'disconnectSourceSession', {
            get: function() { return this.__prop_disconnectSourceSession; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for AuthTokenConnectionRequestSettings.disconnectSourceSession, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_disconnectSourceSession = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AuthTokenConnectionRequestSettings, '__type', { value: 'urn:inin.com:connection:authTokenConnectionRequestSettings' });

    Object.defineProperty(AuthTokenConnectionRequestSettings, '__propInfo', {
        get: function() {
            var pi = {
                'authTokenSeed': { required: true, nullable: false },
                'authToken': { required: true, nullable: false },
                'authTokenSourceSession': { required: true, nullable: false },
                'disconnectSourceSession': { required: false, nullable: false }
            };
            if (BaseAuthConnectionRequestSettings.__propInfo) { _util.extend(pi, BaseAuthConnectionRequestSettings.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:authTokenConnectionRequestSettings'] = AuthTokenConnectionRequestSettings;

    return AuthTokenConnectionRequestSettings;
}());

var AuthConnectionRequestSettings = (function(){
    var hasProps = false;

    function AuthConnectionRequestSettings() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:authConnectionRequestSettings', enumerable: true });
        }

        AuthConnectionRequestSettings._super.constructor.apply(this, arguments);
    }
    _util.inherits(AuthConnectionRequestSettings, BaseAuthConnectionRequestSettings);

    function defineProps() {
        Object.defineProperty(AuthConnectionRequestSettings.prototype, 'userID', {
            get: function() { return this.__prop_userID; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AuthConnectionRequestSettings.userID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userID = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AuthConnectionRequestSettings, '__type', { value: 'urn:inin.com:connection:authConnectionRequestSettings' });

    Object.defineProperty(AuthConnectionRequestSettings, '__propInfo', {
        get: function() {
            var pi = {
                'userID': { required: true, nullable: false }
            };
            if (BaseAuthConnectionRequestSettings.__propInfo) { _util.extend(pi, BaseAuthConnectionRequestSettings.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:authConnectionRequestSettings'] = AuthConnectionRequestSettings;

    return AuthConnectionRequestSettings;
}());

var SingleSignOnTokenConnectionRequestSettings = (function(){
    var hasProps = false;

    function SingleSignOnTokenConnectionRequestSettings() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:singleSignOnTokenConnectionRequestSettings', enumerable: true });
        }

        SingleSignOnTokenConnectionRequestSettings._super.constructor.apply(this, arguments);
    }
    _util.inherits(SingleSignOnTokenConnectionRequestSettings, BaseAuthConnectionRequestSettings);

    function defineProps() {
        Object.defineProperty(SingleSignOnTokenConnectionRequestSettings.prototype, 'singleSignOnToken', {
            get: function() { return this.__prop_singleSignOnToken; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SingleSignOnTokenConnectionRequestSettings.singleSignOnToken, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_singleSignOnToken = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SingleSignOnTokenConnectionRequestSettings, '__type', { value: 'urn:inin.com:connection:singleSignOnTokenConnectionRequestSettings' });

    Object.defineProperty(SingleSignOnTokenConnectionRequestSettings, '__propInfo', {
        get: function() {
            var pi = {
                'singleSignOnToken': { required: true, nullable: false }
            };
            if (BaseAuthConnectionRequestSettings.__propInfo) { _util.extend(pi, BaseAuthConnectionRequestSettings.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:singleSignOnTokenConnectionRequestSettings'] = SingleSignOnTokenConnectionRequestSettings;

    return SingleSignOnTokenConnectionRequestSettings;
}());

var WorkstationSettings = (function(){
    var hasProps = false;

    function WorkstationSettings() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:workstationSettings', enumerable: true });
        }

        WorkstationSettings._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkstationSettings, StationSettings);

    function defineProps() {
        Object.defineProperty(WorkstationSettings.prototype, 'workstation', {
            get: function() { return this.__prop_workstation; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for WorkstationSettings.workstation, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workstation = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkstationSettings, '__type', { value: 'urn:inin.com:connection:workstationSettings' });

    Object.defineProperty(WorkstationSettings, '__propInfo', {
        get: function() {
            var pi = {
                'workstation': { required: true, nullable: false }
            };
            if (StationSettings.__propInfo) { _util.extend(pi, StationSettings.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:workstationSettings'] = WorkstationSettings;

    return WorkstationSettings;
}());

var RemoteNumberSettings = (function(){
    var hasProps = false;

    function RemoteNumberSettings() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:remoteNumberSettings', enumerable: true });
        }

        RemoteNumberSettings._super.constructor.apply(this, arguments);
    }
    _util.inherits(RemoteNumberSettings, StationSettings);

    function defineProps() {
        Object.defineProperty(RemoteNumberSettings.prototype, 'persistentConnection', {
            get: function() { return this.__prop_persistentConnection; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for RemoteNumberSettings.persistentConnection, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_persistentConnection = value;
            },
            enumerable: true
        });

        Object.defineProperty(RemoteNumberSettings.prototype, 'remoteNumber', {
            get: function() { return this.__prop_remoteNumber; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RemoteNumberSettings.remoteNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remoteNumber = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RemoteNumberSettings, '__type', { value: 'urn:inin.com:connection:remoteNumberSettings' });

    Object.defineProperty(RemoteNumberSettings, '__propInfo', {
        get: function() {
            var pi = {
                'persistentConnection': { required: false, nullable: false },
                'remoteNumber': { required: true, nullable: false }
            };
            if (StationSettings.__propInfo) { _util.extend(pi, StationSettings.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:remoteNumberSettings'] = RemoteNumberSettings;

    return RemoteNumberSettings;
}());

var StationlessSettings = (function(){
    var hasProps = false;

    function StationlessSettings() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:stationlessSettings', enumerable: true });
        }

        StationlessSettings._super.constructor.apply(this, arguments);
    }
    _util.inherits(StationlessSettings, StationSettings);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(StationlessSettings, '__type', { value: 'urn:inin.com:connection:stationlessSettings' });

    Object.defineProperty(StationlessSettings, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (StationSettings.__propInfo) { _util.extend(pi, StationSettings.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:stationlessSettings'] = StationlessSettings;

    return StationlessSettings;
}());

var IcAuthConnectionRequestSettings = (function(){
    var hasProps = false;

    function IcAuthConnectionRequestSettings() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:icAuthConnectionRequestSettings', enumerable: true });
        }

        IcAuthConnectionRequestSettings._super.constructor.apply(this, arguments);
    }
    _util.inherits(IcAuthConnectionRequestSettings, AuthConnectionRequestSettings);

    function defineProps() {
        Object.defineProperty(IcAuthConnectionRequestSettings.prototype, 'password', {
            get: function() { return this.__prop_password; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for IcAuthConnectionRequestSettings.password, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_password = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(IcAuthConnectionRequestSettings, '__type', { value: 'urn:inin.com:connection:icAuthConnectionRequestSettings' });

    Object.defineProperty(IcAuthConnectionRequestSettings, '__propInfo', {
        get: function() {
            var pi = {
                'password': { required: true, nullable: false }
            };
            if (AuthConnectionRequestSettings.__propInfo) { _util.extend(pi, AuthConnectionRequestSettings.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:icAuthConnectionRequestSettings'] = IcAuthConnectionRequestSettings;

    return IcAuthConnectionRequestSettings;
}());

var RemoteWorkstationSettings = (function(){
    var hasProps = false;

    function RemoteWorkstationSettings() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:connection:remoteWorkstationSettings', enumerable: true });
        }

        RemoteWorkstationSettings._super.constructor.apply(this, arguments);
    }
    _util.inherits(RemoteWorkstationSettings, WorkstationSettings);

    function defineProps() {
        Object.defineProperty(RemoteWorkstationSettings.prototype, 'remoteNumber', {
            get: function() { return this.__prop_remoteNumber; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for RemoteWorkstationSettings.remoteNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remoteNumber = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RemoteWorkstationSettings, '__type', { value: 'urn:inin.com:connection:remoteWorkstationSettings' });

    Object.defineProperty(RemoteWorkstationSettings, '__propInfo', {
        get: function() {
            var pi = {
                'remoteNumber': { required: false, nullable: false }
            };
            if (WorkstationSettings.__propInfo) { _util.extend(pi, WorkstationSettings.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:connection:remoteWorkstationSettings'] = RemoteWorkstationSettings;

    return RemoteWorkstationSettings;
}());

var $connection = (function(){
    function createConnection(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createConnection.params)) {
            try {
                params = new createConnection.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createConnection.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof ConnectionResponse) ? o : new ConnectionResponse(o); };
        dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };
        dc['503'] = function(o){ return (o instanceof AlternateHosts) ? o : new AlternateHosts(o); };

        return _util.xhr(createConnection.method, createConnection.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createConnection, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/connection', enumerable: true }
    });

    createConnection.params = (function(){
        _util.inherits(createConnection_params, _util.RequestParams);

        function createConnection_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: Accept-Language');
            }
            if (!_util.hasProp(properties.header, 'Accept-Language')) {
                throw new Error('`properties.header` is missing required property: `Accept-Language`');
            }
            if (!(properties.content instanceof BaseAuthConnectionRequestSettings)) {
                throw new TypeError('`properties.content` value does not match the expected type: Connection.BaseAuthConnectionRequestSettings');
            }

            createConnection_params._super.constructor.apply(this, arguments);
        }

        return createConnection_params;
    })();

    function getConnection(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getConnection.params)) {
            try {
                params = new getConnection.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getConnection.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ConnectionSettings) ? o : new ConnectionSettings(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getConnection.method, getConnection.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getConnection, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/connection', enumerable: true }
    });

    getConnection.params = (function(){
        _util.inherits(getConnection_params, _util.RequestParams);

        function getConnection_params(properties) {
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

            getConnection_params._super.constructor.apply(this, arguments);
        }

        return getConnection_params;
    })();

    function deleteConnection(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteConnection.params)) {
            try {
                params = new deleteConnection.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteConnection.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteConnection.method, deleteConnection.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteConnection, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/connection', enumerable: true }
    });

    deleteConnection.params = (function(){
        _util.inherits(deleteConnection_params, _util.RequestParams);

        function deleteConnection_params(properties) {
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

            deleteConnection_params._super.constructor.apply(this, arguments);
        }

        return deleteConnection_params;
    })();

    return Object.create(null, {
        createConnection: { value: createConnection, enumerable: true },
        getConnection: { value: getConnection, enumerable: true },
        deleteConnection: { value: deleteConnection, enumerable: true }
    });
})();

var $version = (function(){
    function getVersion(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getVersion.params)) {
            try {
                params = new getVersion.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getVersion.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof VersionInfo) ? o : new VersionInfo(o); };
        dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getVersion.method, getVersion.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getVersion, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/connection/version', enumerable: true }
    });

    getVersion.params = (function(){
        _util.inherits(getVersion_params, _util.RequestParams);

        function getVersion_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }

            getVersion_params._super.constructor.apply(this, arguments);
        }

        return getVersion_params;
    })();

    return Object.create(null, {
        getVersion: { value: getVersion, enumerable: true }
    });
})();

var $features = (function(){
    function getFeatures(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFeatures.params)) {
            try {
                params = new getFeatures.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFeatures.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Common.FeatureInfos) ? o : new Common.FeatureInfos(o); };
        dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFeatures.method, getFeatures.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFeatures, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/connection/features', enumerable: true }
    });

    getFeatures.params = (function(){
        _util.inherits(getFeatures_params, _util.RequestParams);

        function getFeatures_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }

            getFeatures_params._super.constructor.apply(this, arguments);
        }

        return getFeatures_params;
    })();

    function getFeature(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getFeature.params)) {
            try {
                params = new getFeature.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getFeature.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Common.FeatureInfo) ? o : new Common.FeatureInfo(o); };
        dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getFeature.method, getFeature.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getFeature, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/connection/features/{featureId}', enumerable: true }
    });

    getFeature.params = (function(){
        _util.inherits(getFeature_params, _util.RequestParams);

        function getFeature_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: featureId');
            }
            if (!_util.hasProp(properties.template, 'featureId')) {
                throw new Error('`properties.template` is missing required property: `featureId`');
            }

            getFeature_params._super.constructor.apply(this, arguments);
        }

        return getFeature_params;
    })();

    return Object.create(null, {
        getFeatures: { value: getFeatures, enumerable: true },
        getFeature: { value: getFeature, enumerable: true }
    });
})();

var $serverInfo = (function(){
    function getServerInfo(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getServerInfo.params)) {
            try {
                params = new getServerInfo.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getServerInfo.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ServerInfo) ? o : new ServerInfo(o); };
        dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getServerInfo.method, getServerInfo.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getServerInfo, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/connection/server-info', enumerable: true }
    });

    getServerInfo.params = (function(){
        _util.inherits(getServerInfo_params, _util.RequestParams);

        function getServerInfo_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }

            getServerInfo_params._super.constructor.apply(this, arguments);
        }

        return getServerInfo_params;
    })();

    return Object.create(null, {
        getServerInfo: { value: getServerInfo, enumerable: true }
    });
})();

var $serverTime = (function(){
    function getServerTime(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getServerTime.params)) {
            try {
                params = new getServerTime.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getServerTime.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ServerTimeInfo) ? o : new ServerTimeInfo(o); };
        dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getServerTime.method, getServerTime.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getServerTime, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/connection/server-time', enumerable: true }
    });

    getServerTime.params = (function(){
        _util.inherits(getServerTime_params, _util.RequestParams);

        function getServerTime_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }

            getServerTime_params._super.constructor.apply(this, arguments);
        }

        return getServerTime_params;
    })();

    return Object.create(null, {
        getServerTime: { value: getServerTime, enumerable: true }
    });
})();

var $switchoverStatus = (function(){
    function getSwitchoverStatus(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSwitchoverStatus.params)) {
            try {
                params = new getSwitchoverStatus.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSwitchoverStatus.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SwitchoverStatus) ? o : new SwitchoverStatus(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSwitchoverStatus.method, getSwitchoverStatus.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSwitchoverStatus, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/connection/switchover-status', enumerable: true }
    });

    getSwitchoverStatus.params = (function(){
        _util.inherits(getSwitchoverStatus_params, _util.RequestParams);

        function getSwitchoverStatus_params(properties) {
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

            getSwitchoverStatus_params._super.constructor.apply(this, arguments);
        }

        return getSwitchoverStatus_params;
    })();

    return Object.create(null, {
        getSwitchoverStatus: { value: getSwitchoverStatus, enumerable: true }
    });
})();

var $station = (function(){
    function disconnectStationConnection(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof disconnectStationConnection.params)) {
            try {
                params = new disconnectStationConnection.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: disconnectStationConnection.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(disconnectStationConnection.method, disconnectStationConnection.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(disconnectStationConnection, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/connection/station', enumerable: true }
    });

    disconnectStationConnection.params = (function(){
        _util.inherits(disconnectStationConnection_params, _util.RequestParams);

        function disconnectStationConnection_params(properties) {
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

            disconnectStationConnection_params._super.constructor.apply(this, arguments);
        }

        return disconnectStationConnection_params;
    })();

    function changeStationConnection(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof changeStationConnection.params)) {
            try {
                params = new changeStationConnection.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: changeStationConnection.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(changeStationConnection.method, changeStationConnection.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(changeStationConnection, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/connection/station', enumerable: true }
    });

    changeStationConnection.params = (function(){
        _util.inherits(changeStationConnection_params, _util.RequestParams);

        function changeStationConnection_params(properties) {
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
            if (!(properties.content instanceof StationSettings)) {
                throw new TypeError('`properties.content` value does not match the expected type: Connection.StationSettings');
            }

            changeStationConnection_params._super.constructor.apply(this, arguments);
        }

        return changeStationConnection_params;
    })();

    function getStationInformation(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStationInformation.params)) {
            try {
                params = new getStationInformation.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStationInformation.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StationInformation) ? o : new StationInformation(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStationInformation.method, getStationInformation.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStationInformation, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/connection/station', enumerable: true }
    });

    getStationInformation.params = (function(){
        _util.inherits(getStationInformation_params, _util.RequestParams);

        function getStationInformation_params(properties) {
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

            getStationInformation_params._super.constructor.apply(this, arguments);
        }

        return getStationInformation_params;
    })();

    return Object.create(null, {
        disconnectStationConnection: { value: disconnectStationConnection, enumerable: true },
        changeStationConnection: { value: changeStationConnection, enumerable: true },
        getStationInformation: { value: getStationInformation, enumerable: true }
    });
})();

var $uniqueAuthToken = (function(){
    function createUniqueAuthToken(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createUniqueAuthToken.params)) {
            try {
                params = new createUniqueAuthToken.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createUniqueAuthToken.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof CreateUniqueAuthTokenResponse) ? o : new CreateUniqueAuthTokenResponse(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createUniqueAuthToken.method, createUniqueAuthToken.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createUniqueAuthToken, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/connection/unique-auth-token', enumerable: true }
    });

    createUniqueAuthToken.params = (function(){
        _util.inherits(createUniqueAuthToken_params, _util.RequestParams);

        function createUniqueAuthToken_params(properties) {
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
            if (!(properties.content instanceof CreateUniqueAuthTokenRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Connection.CreateUniqueAuthTokenRequest');
            }

            createUniqueAuthToken_params._super.constructor.apply(this, arguments);
        }

        return createUniqueAuthToken_params;
    })();

    return Object.create(null, {
        createUniqueAuthToken: { value: createUniqueAuthToken, enumerable: true }
    });
})();

var $purecloudSamlAuthData = (function(){
    function createPureCloudSamlAuthData(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createPureCloudSamlAuthData.params)) {
            try {
                params = new createPureCloudSamlAuthData.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createPureCloudSamlAuthData.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof CreatePureCloudSamlAuthDataResponse) ? o : new CreatePureCloudSamlAuthDataResponse(o); };
        dc['400'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createPureCloudSamlAuthData.method, createPureCloudSamlAuthData.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createPureCloudSamlAuthData, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/connection/purecloud-saml-auth-data', enumerable: true }
    });

    createPureCloudSamlAuthData.params = (function(){
        _util.inherits(createPureCloudSamlAuthData_params, _util.RequestParams);

        function createPureCloudSamlAuthData_params(properties) {
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
            if (!(properties.content instanceof CreatePureCloudSamlAuthDataRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Connection.CreatePureCloudSamlAuthDataRequest');
            }

            createPureCloudSamlAuthData_params._super.constructor.apply(this, arguments);
        }

        return createPureCloudSamlAuthData_params;
    })();

    return Object.create(null, {
        createPureCloudSamlAuthData: { value: createPureCloudSamlAuthData, enumerable: true }
    });
})();

var $purecloudAccessToken = (function(){
    function requestPureCloudAccessToken(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof requestPureCloudAccessToken.params)) {
            try {
                params = new requestPureCloudAccessToken.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: requestPureCloudAccessToken.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof PurecloudAccessTokenResponse) ? o : new PurecloudAccessTokenResponse(o); };
        dc['400'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(requestPureCloudAccessToken.method, requestPureCloudAccessToken.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(requestPureCloudAccessToken, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/connection/purecloud-access-token', enumerable: true }
    });

    requestPureCloudAccessToken.params = (function(){
        _util.inherits(requestPureCloudAccessToken_params, _util.RequestParams);

        function requestPureCloudAccessToken_params(properties) {
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
            if (!(properties.content instanceof PurecloudAccessTokenRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Connection.PurecloudAccessTokenRequest');
            }

            requestPureCloudAccessToken_params._super.constructor.apply(this, arguments);
        }

        return requestPureCloudAccessToken_params;
    })();

    return Object.create(null, {
        requestPureCloudAccessToken: { value: requestPureCloudAccessToken, enumerable: true }
    });
})();

exports.ConnectionState = ConnectionState;
exports.StationSettingsType = StationSettingsType;
exports.SupportedMediaType = SupportedMediaType;
exports.BackupState = BackupState;
exports.StationConnectionMode = StationConnectionMode;
exports.SamlType = SamlType;
exports.ConnectionStateChangeMessage = ConnectionStateChangeMessage;
exports.StationConnectionStateChangeMessage = StationConnectionStateChangeMessage;
exports.StationInformation = StationInformation;
exports.EffectiveStationChangeMessage = EffectiveStationChangeMessage;
exports.EffectiveStationInfo = EffectiveStationInfo;
exports.BaseAuthConnectionRequestSettings = BaseAuthConnectionRequestSettings;
exports.AuthTokenConnectionRequestSettings = AuthTokenConnectionRequestSettings;
exports.AuthConnectionRequestSettings = AuthConnectionRequestSettings;
exports.IcAuthConnectionRequestSettings = IcAuthConnectionRequestSettings;
exports.SingleSignOnTokenConnectionRequestSettings = SingleSignOnTokenConnectionRequestSettings;
exports.ConnectionResponse = ConnectionResponse;
exports.VersionInfo = VersionInfo;
exports.ServerTimeInfo = ServerTimeInfo;
exports.PurecloudIntegration = PurecloudIntegration;
exports.AlternateHosts = AlternateHosts;
exports.ServerInfo = ServerInfo;
exports.Language = Language;
exports.AuthenticationInfo = AuthenticationInfo;
exports.IdentityProvider = IdentityProvider;
exports.SingleSignOnResponse = SingleSignOnResponse;
exports.ConnectionSettings = ConnectionSettings;
exports.SwitchoverStatus = SwitchoverStatus;
exports.StationSettings = StationSettings;
exports.WorkstationSettings = WorkstationSettings;
exports.RemoteWorkstationSettings = RemoteWorkstationSettings;
exports.RemoteNumberSettings = RemoteNumberSettings;
exports.StationlessSettings = StationlessSettings;
exports.CreateUniqueAuthTokenRequest = CreateUniqueAuthTokenRequest;
exports.CreateUniqueAuthTokenResponse = CreateUniqueAuthTokenResponse;
exports.CreatePureCloudSamlAuthDataRequest = CreatePureCloudSamlAuthDataRequest;
exports.CreatePureCloudSamlAuthDataResponse = CreatePureCloudSamlAuthDataResponse;
exports.PurecloudAccessTokenRequest = PurecloudAccessTokenRequest;
exports.PurecloudAccessTokenResponse = PurecloudAccessTokenResponse;
exports.$connection = $connection;
exports.$version = $version;
exports.$features = $features;
exports.$serverInfo = $serverInfo;
exports.$serverTime = $serverTime;
exports.$switchoverStatus = $switchoverStatus;
exports.$station = $station;
exports.$uniqueAuthToken = $uniqueAuthToken;
exports.$purecloudSamlAuthData = $purecloudSamlAuthData;
exports.$purecloudAccessToken = $purecloudAccessToken;
