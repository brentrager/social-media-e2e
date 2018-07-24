/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');
var Messaging = require('./Messaging');

var CampaignLogonErrorCode = (function(){
    var instanceCache = {};
    function CampaignLogonErrorCode(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:campaignLogonErrorCode' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(CampaignLogonErrorCode, _util.EnumValue);

    Object.defineProperties(CampaignLogonErrorCode, {
        'UnknownError': { value: new CampaignLogonErrorCode(0, 'UnknownError'), enumerable: true },
        'WrongWorkgroup': { value: new CampaignLogonErrorCode(1, 'WrongWorkgroup'), enumerable: true },
        'CampaignNotFound': { value: new CampaignLogonErrorCode(2, 'CampaignNotFound'), enumerable: true },
        'CampaignStopping': { value: new CampaignLogonErrorCode(3, 'CampaignStopping'), enumerable: true }
    });

    Object.defineProperty(CampaignLogonErrorCode, '__type', { value: 'urn:inin.com:dialer:campaignLogonErrorCode' });

    _typemap['urn:inin.com:dialer:campaignLogonErrorCode'] = CampaignLogonErrorCode;

    return CampaignLogonErrorCode;
}());

var DialingMode = (function(){
    var instanceCache = {};
    function DialingMode(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dialingMode' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DialingMode, _util.EnumValue);

    Object.defineProperties(DialingMode, {
        'Preview': { value: new DialingMode(0, 'Preview'), enumerable: true },
        'OwnAgentCallback_Preview': { value: new DialingMode(1, 'OwnAgentCallback_Preview'), enumerable: true },
        'Regular': { value: new DialingMode(2, 'Regular'), enumerable: true },
        'OwnAgentCallback': { value: new DialingMode(3, 'OwnAgentCallback'), enumerable: true },
        'Agentless': { value: new DialingMode(4, 'Agentless'), enumerable: true },
        'Precise': { value: new DialingMode(5, 'Precise'), enumerable: true },
        'Manual': { value: new DialingMode(6, 'Manual'), enumerable: true }
    });

    Object.defineProperty(DialingMode, '__type', { value: 'urn:inin.com:dialer:dialingMode' });

    _typemap['urn:inin.com:dialer:dialingMode'] = DialingMode;

    return DialingMode;
}());

var PreviewDialingMode = (function(){
    var instanceCache = {};
    function PreviewDialingMode(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:previewDialingMode' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(PreviewDialingMode, _util.EnumValue);

    Object.defineProperties(PreviewDialingMode, {
        'Preview': { value: new PreviewDialingMode(0, 'Preview'), enumerable: true },
        'OwnAgentCallback_Preview': { value: new PreviewDialingMode(1, 'OwnAgentCallback_Preview'), enumerable: true }
    });

    Object.defineProperty(PreviewDialingMode, '__type', { value: 'urn:inin.com:dialer:previewDialingMode' });

    _typemap['urn:inin.com:dialer:previewDialingMode'] = PreviewDialingMode;

    return PreviewDialingMode;
}());

var BreakStatusType = (function(){
    var instanceCache = {};
    function BreakStatusType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:breakStatusType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(BreakStatusType, _util.EnumValue);

    Object.defineProperties(BreakStatusType, {
        'NotOnBreak': { value: new BreakStatusType(0, 'NotOnBreak'), enumerable: true },
        'BreakPending': { value: new BreakStatusType(1, 'BreakPending'), enumerable: true },
        'OnBreak': { value: new BreakStatusType(2, 'OnBreak'), enumerable: true }
    });

    Object.defineProperty(BreakStatusType, '__type', { value: 'urn:inin.com:dialer:breakStatusType' });

    _typemap['urn:inin.com:dialer:breakStatusType'] = BreakStatusType;

    return BreakStatusType;
}());

var BaseScriptPageControlType = (function(){
    var instanceCache = {};
    function BaseScriptPageControlType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:baseScriptPageControlType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(BaseScriptPageControlType, _util.EnumValue);

    Object.defineProperties(BaseScriptPageControlType, {
        'Text': { value: new BaseScriptPageControlType(0, 'Text'), enumerable: true },
        'Numeric': { value: new BaseScriptPageControlType(1, 'Numeric'), enumerable: true },
        'Radio': { value: new BaseScriptPageControlType(2, 'Radio'), enumerable: true },
        'Listbox': { value: new BaseScriptPageControlType(3, 'Listbox'), enumerable: true },
        'DateTime': { value: new BaseScriptPageControlType(4, 'DateTime'), enumerable: true }
    });

    Object.defineProperty(BaseScriptPageControlType, '__type', { value: 'urn:inin.com:dialer:baseScriptPageControlType' });

    _typemap['urn:inin.com:dialer:baseScriptPageControlType'] = BaseScriptPageControlType;

    return BaseScriptPageControlType;
}());

var BaseScriptDateTimeControlFormat = (function(){
    var instanceCache = {};
    function BaseScriptDateTimeControlFormat(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:baseScriptDateTimeControlFormat' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(BaseScriptDateTimeControlFormat, _util.EnumValue);

    Object.defineProperties(BaseScriptDateTimeControlFormat, {
        'ShortDate': { value: new BaseScriptDateTimeControlFormat(1, 'ShortDate'), enumerable: true },
        'LongDate': { value: new BaseScriptDateTimeControlFormat(2, 'LongDate'), enumerable: true },
        'Time': { value: new BaseScriptDateTimeControlFormat(4, 'Time'), enumerable: true },
        'ShortDateWithTime': { value: new BaseScriptDateTimeControlFormat(5, 'ShortDateWithTime'), enumerable: true },
        'LongDateWithTime': { value: new BaseScriptDateTimeControlFormat(6, 'LongDateWithTime'), enumerable: true }
    });

    Object.defineProperty(BaseScriptDateTimeControlFormat, '__type', { value: 'urn:inin.com:dialer:baseScriptDateTimeControlFormat' });

    _typemap['urn:inin.com:dialer:baseScriptDateTimeControlFormat'] = BaseScriptDateTimeControlFormat;

    return BaseScriptDateTimeControlFormat;
}());

var ConnectionState = (function(){
    var instanceCache = {};
    function ConnectionState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:connectionState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ConnectionState, _util.EnumValue);

    Object.defineProperties(ConnectionState, {
        'None': { value: new ConnectionState(0, 'None'), enumerable: true },
        'Up': { value: new ConnectionState(1, 'Up'), enumerable: true },
        'Down': { value: new ConnectionState(2, 'Down'), enumerable: true }
    });

    Object.defineProperty(ConnectionState, '__type', { value: 'urn:inin.com:dialer:connectionState' });

    _typemap['urn:inin.com:dialer:connectionState'] = ConnectionState;

    return ConnectionState;
}());

var CampaignStatusType = (function(){
    var instanceCache = {};
    function CampaignStatusType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:campaignStatusType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(CampaignStatusType, _util.EnumValue);

    Object.defineProperties(CampaignStatusType, {
        'Invalid': { value: new CampaignStatusType(0, 'Invalid'), enumerable: true },
        'On': { value: new CampaignStatusType(1, 'On'), enumerable: true },
        'Off': { value: new CampaignStatusType(2, 'Off'), enumerable: true },
        'ScheduleOnly': { value: new CampaignStatusType(4, 'ScheduleOnly'), enumerable: true },
        'Auto': { value: new CampaignStatusType(8, 'Auto'), enumerable: true },
        'Paused': { value: new CampaignStatusType(16, 'Paused'), enumerable: true },
        'Completed': { value: new CampaignStatusType(32, 'Completed'), enumerable: true }
    });

    Object.defineProperty(CampaignStatusType, '__type', { value: 'urn:inin.com:dialer:campaignStatusType' });

    _typemap['urn:inin.com:dialer:campaignStatusType'] = CampaignStatusType;

    return CampaignStatusType;
}());

var CampaignType = (function(){
    var instanceCache = {};
    function CampaignType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:campaignType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(CampaignType, _util.EnumValue);

    Object.defineProperties(CampaignType, {
        'Predictive': { value: new CampaignType(1, 'Predictive'), enumerable: true },
        'Power': { value: new CampaignType(2, 'Power'), enumerable: true },
        'Preview': { value: new CampaignType(3, 'Preview'), enumerable: true },
        'Agentless': { value: new CampaignType(8, 'Agentless'), enumerable: true }
    });

    Object.defineProperty(CampaignType, '__type', { value: 'urn:inin.com:dialer:campaignType' });

    _typemap['urn:inin.com:dialer:campaignType'] = CampaignType;

    return CampaignType;
}());

var ManualOutboundCallStatus = (function(){
    var instanceCache = {};
    function ManualOutboundCallStatus(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:manualOutboundCallStatus' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ManualOutboundCallStatus, _util.EnumValue);

    Object.defineProperties(ManualOutboundCallStatus, {
        'Unknown': { value: new ManualOutboundCallStatus(0, 'Unknown'), enumerable: true },
        'None': { value: new ManualOutboundCallStatus(1, 'None'), enumerable: true },
        'InvalidCampaign': { value: new ManualOutboundCallStatus(2, 'InvalidCampaign'), enumerable: true },
        'InvalidAgent': { value: new ManualOutboundCallStatus(3, 'InvalidAgent'), enumerable: true },
        'InternalError': { value: new ManualOutboundCallStatus(4, 'InternalError'), enumerable: true },
        'AgentNotIdle': { value: new ManualOutboundCallStatus(5, 'AgentNotIdle'), enumerable: true },
        'ContactNotFound': { value: new ManualOutboundCallStatus(6, 'ContactNotFound'), enumerable: true },
        'ContactUncallable': { value: new ManualOutboundCallStatus(7, 'ContactUncallable'), enumerable: true },
        'ContactBlocked': { value: new ManualOutboundCallStatus(8, 'ContactBlocked'), enumerable: true },
        'PlaceCallFailed': { value: new ManualOutboundCallStatus(9, 'PlaceCallFailed'), enumerable: true },
        'InvalidPhoneNumber': { value: new ManualOutboundCallStatus(10, 'InvalidPhoneNumber'), enumerable: true },
        'CallBlocked': { value: new ManualOutboundCallStatus(11, 'CallBlocked'), enumerable: true },
        'CallPlaced': { value: new ManualOutboundCallStatus(12, 'CallPlaced'), enumerable: true },
        'CallComplete': { value: new ManualOutboundCallStatus(13, 'CallComplete'), enumerable: true },
        'PolicyCompleted': { value: new ManualOutboundCallStatus(14, 'PolicyCompleted'), enumerable: true },
        'PreviouslyDialed': { value: new ManualOutboundCallStatus(15, 'PreviouslyDialed'), enumerable: true }
    });

    Object.defineProperty(ManualOutboundCallStatus, '__type', { value: 'urn:inin.com:dialer:manualOutboundCallStatus' });

    _typemap['urn:inin.com:dialer:manualOutboundCallStatus'] = ManualOutboundCallStatus;

    return ManualOutboundCallStatus;
}());

var RelativeTo = (function(){
    var instanceCache = {};
    function RelativeTo(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:relativeTo' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(RelativeTo, _util.EnumValue);

    Object.defineProperties(RelativeTo, {
        'UTC': { value: new RelativeTo(0, 'UTC'), enumerable: true },
        'Contact': { value: new RelativeTo(1, 'Contact'), enumerable: true }
    });

    Object.defineProperty(RelativeTo, '__type', { value: 'urn:inin.com:dialer:relativeTo' });

    _typemap['urn:inin.com:dialer:relativeTo'] = RelativeTo;

    return RelativeTo;
}());

var DialerConfigObjectType = (function(){
    var instanceCache = {};
    function DialerConfigObjectType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dialerConfigObjectType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DialerConfigObjectType, _util.EnumValue);

    Object.defineProperties(DialerConfigObjectType, {
        'None': { value: new DialerConfigObjectType(0, 'None'), enumerable: true },
        'Campaign': { value: new DialerConfigObjectType(1, 'Campaign'), enumerable: true },
        'RuleSet': { value: new DialerConfigObjectType(3, 'RuleSet'), enumerable: true },
        'StageSet': { value: new DialerConfigObjectType(4, 'StageSet'), enumerable: true },
        'Schedule': { value: new DialerConfigObjectType(5, 'Schedule'), enumerable: true },
        'ODS': { value: new DialerConfigObjectType(6, 'ODS'), enumerable: true },
        'ZoneSet': { value: new DialerConfigObjectType(7, 'ZoneSet'), enumerable: true },
        'PolicySet': { value: new DialerConfigObjectType(8, 'PolicySet'), enumerable: true },
        'Filter': { value: new DialerConfigObjectType(9, 'Filter'), enumerable: true },
        'Connection': { value: new DialerConfigObjectType(10, 'Connection'), enumerable: true },
        'Manager': { value: new DialerConfigObjectType(11, 'Manager'), enumerable: true },
        'SkillSet': { value: new DialerConfigObjectType(12, 'SkillSet'), enumerable: true },
        'PNT': { value: new DialerConfigObjectType(13, 'PNT'), enumerable: true },
        'ContactColumn': { value: new DialerConfigObjectType(14, 'ContactColumn'), enumerable: true },
        'TZMD': { value: new DialerConfigObjectType(15, 'TZMD'), enumerable: true },
        'DNCSource': { value: new DialerConfigObjectType(16, 'DNCSource'), enumerable: true },
        'Script': { value: new DialerConfigObjectType(17, 'Script'), enumerable: true },
        'ScriptPage': { value: new DialerConfigObjectType(18, 'ScriptPage'), enumerable: true },
        'ContactList': { value: new DialerConfigObjectType(19, 'ContactList'), enumerable: true }
    });

    Object.defineProperty(DialerConfigObjectType, '__type', { value: 'urn:inin.com:dialer:dialerConfigObjectType' });

    _typemap['urn:inin.com:dialer:dialerConfigObjectType'] = DialerConfigObjectType;

    return DialerConfigObjectType;
}());

var ManualCallNumberType = (function(){
    var instanceCache = {};
    function ManualCallNumberType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:manualCallNumberType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ManualCallNumberType, _util.EnumValue);

    Object.defineProperties(ManualCallNumberType, {
        'Unknown': { value: new ManualCallNumberType(0, 'Unknown'), enumerable: true },
        'ContactColumnName': { value: new ManualCallNumberType(1, 'ContactColumnName'), enumerable: true },
        'ContactColumnId': { value: new ManualCallNumberType(2, 'ContactColumnId'), enumerable: true },
        'PhoneNumber': { value: new ManualCallNumberType(3, 'PhoneNumber'), enumerable: true }
    });

    Object.defineProperty(ManualCallNumberType, '__type', { value: 'urn:inin.com:dialer:manualCallNumberType' });

    _typemap['urn:inin.com:dialer:manualCallNumberType'] = ManualCallNumberType;

    return ManualCallNumberType;
}());

var DbCommandType = (function(){
    var instanceCache = {};
    function DbCommandType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dbCommandType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DbCommandType, _util.EnumValue);

    Object.defineProperties(DbCommandType, {
        'EDBCommandType_Create': { value: new DbCommandType(0, 'EDBCommandType_Create'), enumerable: true },
        'EDBCommandType_Insert': { value: new DbCommandType(1, 'EDBCommandType_Insert'), enumerable: true },
        'EDBCommandType_Update': { value: new DbCommandType(2, 'EDBCommandType_Update'), enumerable: true },
        'EDBCommandType_Delete': { value: new DbCommandType(3, 'EDBCommandType_Delete'), enumerable: true },
        'EDBCommandType_Select': { value: new DbCommandType(4, 'EDBCommandType_Select'), enumerable: true },
        'EDBCommandType_Drop': { value: new DbCommandType(5, 'EDBCommandType_Drop'), enumerable: true }
    });

    Object.defineProperty(DbCommandType, '__type', { value: 'urn:inin.com:dialer:dbCommandType' });

    _typemap['urn:inin.com:dialer:dbCommandType'] = DbCommandType;

    return DbCommandType;
}());

var DbTableType = (function(){
    var instanceCache = {};
    function DbTableType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dbTableType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DbTableType, _util.EnumValue);

    Object.defineProperties(DbTableType, {
        'CallList': { value: new DbTableType(1, 'CallList'), enumerable: true },
        'CallHistory': { value: new DbTableType(2, 'CallHistory'), enumerable: true },
        'AgentStat': { value: new DbTableType(4, 'AgentStat'), enumerable: true },
        'CallSchedule': { value: new DbTableType(8, 'CallSchedule'), enumerable: true },
        'Audit': { value: new DbTableType(16, 'Audit'), enumerable: true },
        'Recycle': { value: new DbTableType(32, 'Recycle'), enumerable: true },
        'PhoneNumberDetail': { value: new DbTableType(64, 'PhoneNumberDetail'), enumerable: true },
        'Version': { value: new DbTableType(128, 'Version'), enumerable: true },
        'JIT': { value: new DbTableType(256, 'JIT'), enumerable: true },
        'CampaignStat': { value: new DbTableType(512, 'CampaignStat'), enumerable: true },
        'Upload': { value: new DbTableType(1024, 'Upload'), enumerable: true },
        'UploadIds': { value: new DbTableType(2048, 'UploadIds'), enumerable: true },
        'PenetrationRange': { value: new DbTableType(4096, 'PenetrationRange'), enumerable: true },
        'PenetrationData': { value: new DbTableType(8192, 'PenetrationData'), enumerable: true },
        'PenetrationCallsCompleted': { value: new DbTableType(16384, 'PenetrationCallsCompleted'), enumerable: true },
        'DNCMetaDataTable': { value: new DbTableType(32768, 'DNCMetaDataTable'), enumerable: true }
    });

    Object.defineProperty(DbTableType, '__type', { value: 'urn:inin.com:dialer:dbTableType' });

    _typemap['urn:inin.com:dialer:dbTableType'] = DbTableType;

    return DbTableType;
}());

var AgentType = (function(){
    var instanceCache = {};
    function AgentType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:agentType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(AgentType, _util.EnumValue);

    Object.defineProperties(AgentType, {
        'Regular': { value: new AgentType(1, 'Regular'), enumerable: true },
        'Finishing': { value: new AgentType(2, 'Finishing'), enumerable: true },
        'Composite': { value: new AgentType(3, 'Composite'), enumerable: true }
    });

    Object.defineProperty(AgentType, '__type', { value: 'urn:inin.com:dialer:agentType' });

    _typemap['urn:inin.com:dialer:agentType'] = AgentType;

    return AgentType;
}());

var CampaignInfo = (function(){
    var hasProps = false;

    function CampaignInfo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:campaignInfo' });
        }

        CampaignInfo._super.constructor.apply(this, arguments);
    }
    _util.inherits(CampaignInfo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CampaignInfo.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CampaignInfo.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(CampaignInfo.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CampaignInfo.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CampaignInfo, '__type', { value: 'urn:inin.com:dialer:campaignInfo' });

    Object.defineProperty(CampaignInfo, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: false, nullable: false },
                'id': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:campaignInfo'] = CampaignInfo;

    return CampaignInfo;
}());

var BaseDataPop = (function(){
    var hasProps = false;

    function BaseDataPop() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:baseDataPop' });
        }

        BaseDataPop._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseDataPop, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BaseDataPop.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseDataPop.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseDataPop.prototype, 'campaignId', {
            get: function() { return this.__prop_campaignId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseDataPop.campaignId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignId = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseDataPop.prototype, 'attributes', {
            get: function() { return this.__prop_attributes; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }))) {
                    throw new TypeError('Expected type String{} for BaseDataPop.attributes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseDataPop.prototype, 'autoDisconnectOnDisposition', {
            get: function() { return this.__prop_autoDisconnectOnDisposition; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseDataPop.autoDisconnectOnDisposition, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_autoDisconnectOnDisposition = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseDataPop.prototype, 'allowAgentCallbacks', {
            get: function() { return this.__prop_allowAgentCallbacks; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseDataPop.allowAgentCallbacks, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowAgentCallbacks = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseDataPop.prototype, 'dispositions', {
            get: function() { return this.__prop_dispositions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Disposition); }))) {
                    try {
                        value = value.map(function(item){ return new Disposition(item); });
                    } catch (e) {
                        throw new TypeError('Error setting BaseDataPop.dispositions: ' + e.message);
                    }
                }

                this.__prop_dispositions = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BaseDataPop, '__type', { value: 'urn:inin.com:dialer:baseDataPop' });

    Object.defineProperty(BaseDataPop, '__propInfo', {
        get: function() {
            var pi = {
                'interactionId': { required: true, nullable: false },
                'campaignId': { required: true, nullable: false },
                'attributes': { required: true, nullable: false },
                'autoDisconnectOnDisposition': { required: true, nullable: false },
                'allowAgentCallbacks': { required: true, nullable: false },
                'dispositions': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:baseDataPop'] = BaseDataPop;

    return BaseDataPop;
}());

var Disposition = (function(){
    var hasProps = false;

    function Disposition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:disposition' });
        }

        Disposition._super.constructor.apply(this, arguments);
    }
    _util.inherits(Disposition, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Disposition.prototype, 'label', {
            get: function() { return this.__prop_label; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Disposition.label, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_label = value;
            },
            enumerable: true
        });

        Object.defineProperty(Disposition.prototype, 'wrapUpCategory', {
            get: function() { return this.__prop_wrapUpCategory; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Disposition.wrapUpCategory, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_wrapUpCategory = value;
            },
            enumerable: true
        });

        Object.defineProperty(Disposition.prototype, 'wrapUpCode', {
            get: function() { return this.__prop_wrapUpCode; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Disposition.wrapUpCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_wrapUpCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(Disposition.prototype, 'abandon', {
            get: function() { return this.__prop_abandon; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for Disposition.abandon, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_abandon = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Disposition, '__type', { value: 'urn:inin.com:dialer:disposition' });

    Object.defineProperty(Disposition, '__propInfo', {
        get: function() {
            var pi = {
                'label': { required: true, nullable: false },
                'wrapUpCategory': { required: true, nullable: false },
                'wrapUpCode': { required: true, nullable: false },
                'abandon': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:disposition'] = Disposition;

    return Disposition;
}());

var FormDefinition = (function(){
    var hasProps = false;

    function FormDefinition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:formDefinition' });
        }

        FormDefinition._super.constructor.apply(this, arguments);
    }
    _util.inherits(FormDefinition, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FormDefinition.prototype, 'pages', {
            get: function() { return this.__prop_pages; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof BaseScriptPage); }))) {
                    try {
                        value = value.map(function(item){ return new BaseScriptPage(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FormDefinition.pages: ' + e.message);
                    }
                }

                this.__prop_pages = value;
            },
            enumerable: true
        });

        Object.defineProperty(FormDefinition.prototype, 'misc', {
            get: function() { return this.__prop_misc; },
            set: function(value) {
                if (!(value instanceof BaseScriptMisc)) {
                    try {
                        value = new BaseScriptMisc(value);
                    } catch (e) {
                        throw new TypeError('Error setting FormDefinition.misc: ' + e.message);
                    }
                }

                this.__prop_misc = value;
            },
            enumerable: true
        });

        Object.defineProperty(FormDefinition.prototype, 'extensions', {
            get: function() { return this.__prop_extensions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ExtensionDefinition); }))) {
                    try {
                        value = value.map(function(item){ return new ExtensionDefinition(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FormDefinition.extensions: ' + e.message);
                    }
                }

                this.__prop_extensions = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FormDefinition, '__type', { value: 'urn:inin.com:dialer:formDefinition' });

    Object.defineProperty(FormDefinition, '__propInfo', {
        get: function() {
            var pi = {
                'pages': { required: true, nullable: false },
                'misc': { required: true, nullable: false },
                'extensions': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:formDefinition'] = FormDefinition;

    return FormDefinition;
}());

var BaseScriptPage = (function(){
    var hasProps = false;

    function BaseScriptPage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:baseScriptPage' });
        }

        BaseScriptPage._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseScriptPage, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BaseScriptPage.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseScriptPage.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPage.prototype, 'controls', {
            get: function() { return this.__prop_controls; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof BaseScriptPageControl); }))) {
                    try {
                        value = value.map(function(item){ return new BaseScriptPageControl(item); });
                    } catch (e) {
                        throw new TypeError('Error setting BaseScriptPage.controls: ' + e.message);
                    }
                }

                this.__prop_controls = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPage.prototype, 'dispositions', {
            get: function() { return this.__prop_dispositions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof BaseScriptPageDisposition); }))) {
                    try {
                        value = value.map(function(item){ return new BaseScriptPageDisposition(item); });
                    } catch (e) {
                        throw new TypeError('Error setting BaseScriptPage.dispositions: ' + e.message);
                    }
                }

                this.__prop_dispositions = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPage.prototype, 'text', {
            get: function() { return this.__prop_text; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseScriptPage.text, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_text = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPage.prototype, 'stage', {
            get: function() { return this.__prop_stage; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for BaseScriptPage.stage, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_stage = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPage.prototype, 'foregroundColor', {
            get: function() { return this.__prop_foregroundColor; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseScriptPage.foregroundColor, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_foregroundColor = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPage.prototype, 'backgroundColor', {
            get: function() { return this.__prop_backgroundColor; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseScriptPage.backgroundColor, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_backgroundColor = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BaseScriptPage, '__type', { value: 'urn:inin.com:dialer:baseScriptPage' });

    Object.defineProperty(BaseScriptPage, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'controls': { required: true, nullable: false },
                'dispositions': { required: true, nullable: false },
                'text': { required: true, nullable: false },
                'stage': { required: false, nullable: false },
                'foregroundColor': { required: true, nullable: false },
                'backgroundColor': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:baseScriptPage'] = BaseScriptPage;

    return BaseScriptPage;
}());

var BaseScriptPageControl = (function(){
    var hasProps = false;

    function BaseScriptPageControl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:baseScriptPageControl' });
        }

        BaseScriptPageControl._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseScriptPageControl, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BaseScriptPageControl.prototype, 'column', {
            get: function() { return this.__prop_column; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseScriptPageControl.column, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_column = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPageControl.prototype, 'label', {
            get: function() { return this.__prop_label; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseScriptPageControl.label, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_label = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPageControl.prototype, 'readOnly', {
            get: function() { return this.__prop_readOnly; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptPageControl.readOnly, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_readOnly = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPageControl.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(value instanceof BaseScriptPageControlType)) {
                    try {
                        value = new BaseScriptPageControlType(value);
                    } catch (e) {
                        throw new TypeError('Error setting BaseScriptPageControl.type: ' + e.message);
                    }
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPageControl.prototype, 'maxLines', {
            get: function() { return this.__prop_maxLines; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for BaseScriptPageControl.maxLines, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxLines = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPageControl.prototype, 'maxChars', {
            get: function() { return this.__prop_maxChars; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for BaseScriptPageControl.maxChars, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxChars = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPageControl.prototype, 'dateFormat', {
            get: function() { return this.__prop_dateFormat; },
            set: function(value) {
                if (!(value instanceof BaseScriptDateTimeControlFormat || value === void 0)) {
                    try {
                        value = new BaseScriptDateTimeControlFormat(value);
                    } catch (e) {
                        throw new TypeError('Error setting BaseScriptPageControl.dateFormat: ' + e.message);
                    }
                }

                this.__prop_dateFormat = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPageControl.prototype, 'dataItems', {
            get: function() { return this.__prop_dataItems; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }) || value === void 0)) {
                    throw new TypeError('Expected type String{} for BaseScriptPageControl.dataItems, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dataItems = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BaseScriptPageControl, '__type', { value: 'urn:inin.com:dialer:baseScriptPageControl' });

    Object.defineProperty(BaseScriptPageControl, '__propInfo', {
        get: function() {
            var pi = {
                'column': { required: true, nullable: false },
                'label': { required: true, nullable: false },
                'readOnly': { required: true, nullable: false },
                'type': { required: true, nullable: false },
                'maxLines': { required: false, nullable: false },
                'maxChars': { required: false, nullable: false },
                'dateFormat': { required: false, nullable: false },
                'dataItems': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:baseScriptPageControl'] = BaseScriptPageControl;

    return BaseScriptPageControl;
}());

var BaseScriptPageDisposition = (function(){
    var hasProps = false;

    function BaseScriptPageDisposition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:baseScriptPageDisposition' });
        }

        BaseScriptPageDisposition._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseScriptPageDisposition, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BaseScriptPageDisposition.prototype, 'label', {
            get: function() { return this.__prop_label; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseScriptPageDisposition.label, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_label = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPageDisposition.prototype, 'wrapUpCategory', {
            get: function() { return this.__prop_wrapUpCategory; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseScriptPageDisposition.wrapUpCategory, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_wrapUpCategory = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPageDisposition.prototype, 'wrapUpCode', {
            get: function() { return this.__prop_wrapUpCode; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseScriptPageDisposition.wrapUpCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_wrapUpCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPageDisposition.prototype, 'abandon', {
            get: function() { return this.__prop_abandon; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptPageDisposition.abandon, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_abandon = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPageDisposition.prototype, 'recordStatus', {
            get: function() { return this.__prop_recordStatus; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseScriptPageDisposition.recordStatus, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptPageDisposition.prototype, 'isContact', {
            get: function() { return this.__prop_isContact; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptPageDisposition.isContact, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isContact = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BaseScriptPageDisposition, '__type', { value: 'urn:inin.com:dialer:baseScriptPageDisposition' });

    Object.defineProperty(BaseScriptPageDisposition, '__propInfo', {
        get: function() {
            var pi = {
                'label': { required: true, nullable: false },
                'wrapUpCategory': { required: true, nullable: false },
                'wrapUpCode': { required: true, nullable: false },
                'abandon': { required: true, nullable: false },
                'recordStatus': { required: true, nullable: false },
                'isContact': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:baseScriptPageDisposition'] = BaseScriptPageDisposition;

    return BaseScriptPageDisposition;
}());

var BaseScriptMisc = (function(){
    var hasProps = false;

    function BaseScriptMisc() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:baseScriptMisc' });
        }

        BaseScriptMisc._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseScriptMisc, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BaseScriptMisc.prototype, 'allowBreak', {
            get: function() { return this.__prop_allowBreak; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.allowBreak, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowBreak = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptMisc.prototype, 'allowSkip', {
            get: function() { return this.__prop_allowSkip; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.allowSkip, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowSkip = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptMisc.prototype, 'allowAgentOwned', {
            get: function() { return this.__prop_allowAgentOwned; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.allowAgentOwned, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowAgentOwned = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptMisc.prototype, 'militaryTime', {
            get: function() { return this.__prop_militaryTime; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.militaryTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_militaryTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptMisc.prototype, 'pickupCall', {
            get: function() { return this.__prop_pickupCall; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.pickupCall, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pickupCall = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptMisc.prototype, 'allowSchedulePhone', {
            get: function() { return this.__prop_allowSchedulePhone; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.allowSchedulePhone, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowSchedulePhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptMisc.prototype, 'autoDisconnect', {
            get: function() { return this.__prop_autoDisconnect; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.autoDisconnect, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_autoDisconnect = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptMisc.prototype, 'allowEditingOfNumberToDial', {
            get: function() { return this.__prop_allowEditingOfNumberToDial; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.allowEditingOfNumberToDial, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowEditingOfNumberToDial = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptMisc.prototype, 'allowAgentsAdditionalCalls', {
            get: function() { return this.__prop_allowAgentsAdditionalCalls; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.allowAgentsAdditionalCalls, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowAgentsAdditionalCalls = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptMisc.prototype, 'allowEditingAdditionalCallNumbers', {
            get: function() { return this.__prop_allowEditingAdditionalCallNumbers; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.allowEditingAdditionalCallNumbers, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowEditingAdditionalCallNumbers = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptMisc.prototype, 'overrideDncBlock', {
            get: function() { return this.__prop_overrideDncBlock; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.overrideDncBlock, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_overrideDncBlock = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptMisc.prototype, 'overrideZoneBlock', {
            get: function() { return this.__prop_overrideZoneBlock; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.overrideZoneBlock, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_overrideZoneBlock = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptMisc.prototype, 'overrideSkillsBlock', {
            get: function() { return this.__prop_overrideSkillsBlock; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.overrideSkillsBlock, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_overrideSkillsBlock = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseScriptMisc.prototype, 'overrideDailyLimitBlock', {
            get: function() { return this.__prop_overrideDailyLimitBlock; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for BaseScriptMisc.overrideDailyLimitBlock, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_overrideDailyLimitBlock = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BaseScriptMisc, '__type', { value: 'urn:inin.com:dialer:baseScriptMisc' });

    Object.defineProperty(BaseScriptMisc, '__propInfo', {
        get: function() {
            var pi = {
                'allowBreak': { required: true, nullable: false },
                'allowSkip': { required: true, nullable: false },
                'allowAgentOwned': { required: true, nullable: false },
                'militaryTime': { required: true, nullable: false },
                'pickupCall': { required: true, nullable: false },
                'allowSchedulePhone': { required: true, nullable: false },
                'autoDisconnect': { required: true, nullable: false },
                'allowEditingOfNumberToDial': { required: true, nullable: false },
                'allowAgentsAdditionalCalls': { required: true, nullable: false },
                'allowEditingAdditionalCallNumbers': { required: true, nullable: false },
                'overrideDncBlock': { required: true, nullable: false },
                'overrideZoneBlock': { required: true, nullable: false },
                'overrideSkillsBlock': { required: true, nullable: false },
                'overrideDailyLimitBlock': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:baseScriptMisc'] = BaseScriptMisc;

    return BaseScriptMisc;
}());

var ExtensionDefinition = (function(){
    var hasProps = false;

    function ExtensionDefinition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:extensionDefinition' });
        }

        ExtensionDefinition._super.constructor.apply(this, arguments);
    }
    _util.inherits(ExtensionDefinition, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ExtensionDefinition.prototype, 'objectName', {
            get: function() { return this.__prop_objectName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ExtensionDefinition.objectName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_objectName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ExtensionDefinition.prototype, 'extension', {
            get: function() { return this.__prop_extension; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ExtensionDefinition.extension, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_extension = value;
            },
            enumerable: true
        });

        Object.defineProperty(ExtensionDefinition.prototype, 'objectType', {
            get: function() { return this.__prop_objectType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ExtensionDefinition.objectType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_objectType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ExtensionDefinition, '__type', { value: 'urn:inin.com:dialer:extensionDefinition' });

    Object.defineProperty(ExtensionDefinition, '__propInfo', {
        get: function() {
            var pi = {
                'objectName': { required: true, nullable: false },
                'extension': { required: true, nullable: false },
                'objectType': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:extensionDefinition'] = ExtensionDefinition;

    return ExtensionDefinition;
}());

var CampaignInfoBase = (function(){
    var hasProps = false;

    function CampaignInfoBase() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:campaignInfoBase' });
        }

        CampaignInfoBase._super.constructor.apply(this, arguments);
    }
    _util.inherits(CampaignInfoBase, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CampaignInfoBase.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CampaignInfoBase.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(CampaignInfoBase.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CampaignInfoBase.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CampaignInfoBase, '__type', { value: 'urn:inin.com:dialer:campaignInfoBase' });

    Object.defineProperty(CampaignInfoBase, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'id': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:campaignInfoBase'] = CampaignInfoBase;

    return CampaignInfoBase;
}());

var RemovedCampaign = (function(){
    var hasProps = false;

    function RemovedCampaign() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:removedCampaign' });
        }

        RemovedCampaign._super.constructor.apply(this, arguments);
    }
    _util.inherits(RemovedCampaign, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RemovedCampaign.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RemovedCampaign.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RemovedCampaign, '__type', { value: 'urn:inin.com:dialer:removedCampaign' });

    Object.defineProperty(RemovedCampaign, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:removedCampaign'] = RemovedCampaign;

    return RemovedCampaign;
}());

var LogInParameters = (function(){
    var hasProps = false;

    function LogInParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:logInParameters' });
        }

        LogInParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(LogInParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LogInParameters.prototype, 'campaignId', {
            get: function() { return this.__prop_campaignId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for LogInParameters.campaignId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LogInParameters, '__type', { value: 'urn:inin.com:dialer:logInParameters' });

    Object.defineProperty(LogInParameters, '__propInfo', {
        get: function() {
            var pi = {
                'campaignId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:logInParameters'] = LogInParameters;

    return LogInParameters;
}());

var LogOffParameters = (function(){
    var hasProps = false;

    function LogOffParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:logOffParameters' });
        }

        LogOffParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(LogOffParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LogOffParameters.prototype, 'campaignIds', {
            get: function() { return this.__prop_campaignIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for LogOffParameters.campaignIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignIds = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LogOffParameters, '__type', { value: 'urn:inin.com:dialer:logOffParameters' });

    Object.defineProperty(LogOffParameters, '__propInfo', {
        get: function() {
            var pi = {
                'campaignIds': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:logOffParameters'] = LogOffParameters;

    return LogOffParameters;
}());

var StartReceivingParameters = (function(){
    var hasProps = false;

    function StartReceivingParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:startReceivingParameters' });
        }

        StartReceivingParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(StartReceivingParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StartReceivingParameters.prototype, 'campaignIds', {
            get: function() { return this.__prop_campaignIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for StartReceivingParameters.campaignIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignIds = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StartReceivingParameters, '__type', { value: 'urn:inin.com:dialer:startReceivingParameters' });

    Object.defineProperty(StartReceivingParameters, '__propInfo', {
        get: function() {
            var pi = {
                'campaignIds': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:startReceivingParameters'] = StartReceivingParameters;

    return StartReceivingParameters;
}());

var DispositionParameters = (function(){
    var hasProps = false;

    function DispositionParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dispositionParameters' });
        }

        DispositionParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(DispositionParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DispositionParameters.prototype, 'label', {
            get: function() { return this.__prop_label; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DispositionParameters.label, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_label = value;
            },
            enumerable: true
        });

        Object.defineProperty(DispositionParameters.prototype, 'scheduledTime', {
            get: function() { return this.__prop_scheduledTime; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DispositionParameters.scheduledTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scheduledTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(DispositionParameters.prototype, 'scheduledAgent', {
            get: function() { return this.__prop_scheduledAgent; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for DispositionParameters.scheduledAgent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scheduledAgent = value;
            },
            enumerable: true
        });

        Object.defineProperty(DispositionParameters.prototype, 'relativeTo', {
            get: function() { return this.__prop_relativeTo; },
            set: function(value) {
                if (!(value instanceof RelativeTo || value === void 0)) {
                    try {
                        value = new RelativeTo(value);
                    } catch (e) {
                        throw new TypeError('Error setting DispositionParameters.relativeTo: ' + e.message);
                    }
                }

                this.__prop_relativeTo = value;
            },
            enumerable: true
        });

        Object.defineProperty(DispositionParameters.prototype, 'placeAdditionalFollowUpCall', {
            get: function() { return this.__prop_placeAdditionalFollowUpCall; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DispositionParameters.placeAdditionalFollowUpCall, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_placeAdditionalFollowUpCall = value;
            },
            enumerable: true
        });

        Object.defineProperty(DispositionParameters.prototype, 'callAttributes', {
            get: function() { return this.__prop_callAttributes; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }) || value === void 0)) {
                    throw new TypeError('Expected type String{} for DispositionParameters.callAttributes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(DispositionParameters.prototype, 'isAbandon', {
            get: function() { return this.__prop_isAbandon; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DispositionParameters.isAbandon, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isAbandon = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DispositionParameters, '__type', { value: 'urn:inin.com:dialer:dispositionParameters' });

    Object.defineProperty(DispositionParameters, '__propInfo', {
        get: function() {
            var pi = {
                'label': { required: true, nullable: false },
                'scheduledTime': { required: false, nullable: false },
                'scheduledAgent': { required: false, nullable: false },
                'relativeTo': { required: false, nullable: false },
                'placeAdditionalFollowUpCall': { required: false, nullable: false },
                'callAttributes': { required: false, nullable: false },
                'isAbandon': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:dispositionParameters'] = DispositionParameters;

    return DispositionParameters;
}());

var PlacePreviewCallParameters = (function(){
    var hasProps = false;

    function PlacePreviewCallParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:placePreviewCallParameters' });
        }

        PlacePreviewCallParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(PlacePreviewCallParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PlacePreviewCallParameters.prototype, 'callInitiatedByTimer', {
            get: function() { return this.__prop_callInitiatedByTimer; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PlacePreviewCallParameters.callInitiatedByTimer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callInitiatedByTimer = value;
            },
            enumerable: true
        });

        Object.defineProperty(PlacePreviewCallParameters.prototype, 'callAttributes', {
            get: function() { return this.__prop_callAttributes; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }) || value === void 0)) {
                    throw new TypeError('Expected type String{} for PlacePreviewCallParameters.callAttributes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callAttributes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PlacePreviewCallParameters, '__type', { value: 'urn:inin.com:dialer:placePreviewCallParameters' });

    Object.defineProperty(PlacePreviewCallParameters, '__propInfo', {
        get: function() {
            var pi = {
                'callInitiatedByTimer': { required: false, nullable: false },
                'callAttributes': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:placePreviewCallParameters'] = PlacePreviewCallParameters;

    return PlacePreviewCallParameters;
}());

var FormDefinitionParameters = (function(){
    var hasProps = false;

    function FormDefinitionParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:formDefinitionParameters' });
        }

        FormDefinitionParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(FormDefinitionParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FormDefinitionParameters.prototype, 'campaignId', {
            get: function() { return this.__prop_campaignId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for FormDefinitionParameters.campaignId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FormDefinitionParameters, '__type', { value: 'urn:inin.com:dialer:formDefinitionParameters' });

    Object.defineProperty(FormDefinitionParameters, '__propInfo', {
        get: function() {
            var pi = {
                'campaignId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:formDefinitionParameters'] = FormDefinitionParameters;

    return FormDefinitionParameters;
}());

var UpdateCallDataParameters = (function(){
    var hasProps = false;

    function UpdateCallDataParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:updateCallDataParameters' });
        }

        UpdateCallDataParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(UpdateCallDataParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UpdateCallDataParameters.prototype, 'callId', {
            get: function() { return this.__prop_callId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UpdateCallDataParameters.callId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callId = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateCallDataParameters.prototype, 'callAttributes', {
            get: function() { return this.__prop_callAttributes; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }))) {
                    throw new TypeError('Expected type String{} for UpdateCallDataParameters.callAttributes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateCallDataParameters.prototype, 'campaignId', {
            get: function() { return this.__prop_campaignId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UpdateCallDataParameters.campaignId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UpdateCallDataParameters, '__type', { value: 'urn:inin.com:dialer:updateCallDataParameters' });

    Object.defineProperty(UpdateCallDataParameters, '__propInfo', {
        get: function() {
            var pi = {
                'callId': { required: true, nullable: false },
                'callAttributes': { required: true, nullable: false },
                'campaignId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:updateCallDataParameters'] = UpdateCallDataParameters;

    return UpdateCallDataParameters;
}());

var PutXMLParameters = (function(){
    var hasProps = false;

    function PutXMLParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:putXMLParameters' });
        }

        PutXMLParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(PutXMLParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PutXMLParameters.prototype, 'xml', {
            get: function() { return this.__prop_xml; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PutXMLParameters.xml, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_xml = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PutXMLParameters, '__type', { value: 'urn:inin.com:dialer:putXMLParameters' });

    Object.defineProperty(PutXMLParameters, '__propInfo', {
        get: function() {
            var pi = {
                'xml': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:putXMLParameters'] = PutXMLParameters;

    return PutXMLParameters;
}());

var DialerObjectParameters = (function(){
    var hasProps = false;

    function DialerObjectParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dialerObjectParameters' });
        }

        DialerObjectParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(DialerObjectParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DialerObjectParameters.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(value instanceof DialerConfigObjectType || value === void 0)) {
                    try {
                        value = new DialerConfigObjectType(value);
                    } catch (e) {
                        throw new TypeError('Error setting DialerObjectParameters.type: ' + e.message);
                    }
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DialerObjectParameters, '__type', { value: 'urn:inin.com:dialer:dialerObjectParameters' });

    Object.defineProperty(DialerObjectParameters, '__propInfo', {
        get: function() {
            var pi = {
                'type': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:dialerObjectParameters'] = DialerObjectParameters;

    return DialerObjectParameters;
}());

var DialerObjectInfoList = (function(){
    var hasProps = false;

    function DialerObjectInfoList() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dialerObjectInfoList' });
        }

        DialerObjectInfoList._super.constructor.apply(this, arguments);
    }
    _util.inherits(DialerObjectInfoList, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DialerObjectInfoList.prototype, 'dialerObjects', {
            get: function() { return this.__prop_dialerObjects; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DialerObjectInfo); }))) {
                    try {
                        value = value.map(function(item){ return new DialerObjectInfo(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DialerObjectInfoList.dialerObjects: ' + e.message);
                    }
                }

                this.__prop_dialerObjects = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DialerObjectInfoList, '__type', { value: 'urn:inin.com:dialer:dialerObjectInfoList' });

    Object.defineProperty(DialerObjectInfoList, '__propInfo', {
        get: function() {
            var pi = {
                'dialerObjects': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:dialerObjectInfoList'] = DialerObjectInfoList;

    return DialerObjectInfoList;
}());

var DialerObjectInfo = (function(){
    var hasProps = false;

    function DialerObjectInfo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dialerObjectInfo' });
        }

        DialerObjectInfo._super.constructor.apply(this, arguments);
    }
    _util.inherits(DialerObjectInfo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DialerObjectInfo.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for DialerObjectInfo.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialerObjectInfo.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DialerObjectInfo.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialerObjectInfo.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(value instanceof DialerConfigObjectType)) {
                    try {
                        value = new DialerConfigObjectType(value);
                    } catch (e) {
                        throw new TypeError('Error setting DialerObjectInfo.type: ' + e.message);
                    }
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialerObjectInfo.prototype, 'revision', {
            get: function() { return this.__prop_revision; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DialerObjectInfo.revision, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_revision = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DialerObjectInfo, '__type', { value: 'urn:inin.com:dialer:dialerObjectInfo' });

    Object.defineProperty(DialerObjectInfo, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: false, nullable: false },
                'id': { required: true, nullable: false },
                'type': { required: true, nullable: false },
                'revision': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:dialerObjectInfo'] = DialerObjectInfo;

    return DialerObjectInfo;
}());

var RemoveDialerObjectParameters = (function(){
    var hasProps = false;

    function RemoveDialerObjectParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:removeDialerObjectParameters' });
        }

        RemoveDialerObjectParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(RemoveDialerObjectParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RemoveDialerObjectParameters.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for RemoveDialerObjectParameters.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RemoveDialerObjectParameters, '__type', { value: 'urn:inin.com:dialer:removeDialerObjectParameters' });

    Object.defineProperty(RemoveDialerObjectParameters, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:removeDialerObjectParameters'] = RemoveDialerObjectParameters;

    return RemoveDialerObjectParameters;
}());

var UpdateDialerObjectParameters = (function(){
    var hasProps = false;

    function UpdateDialerObjectParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:updateDialerObjectParameters' });
        }

        UpdateDialerObjectParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(UpdateDialerObjectParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UpdateDialerObjectParameters.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for UpdateDialerObjectParameters.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateDialerObjectParameters.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UpdateDialerObjectParameters.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateDialerObjectParameters.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(value instanceof DialerConfigObjectType)) {
                    try {
                        value = new DialerConfigObjectType(value);
                    } catch (e) {
                        throw new TypeError('Error setting UpdateDialerObjectParameters.type: ' + e.message);
                    }
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateDialerObjectParameters.prototype, 'revision', {
            get: function() { return this.__prop_revision; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UpdateDialerObjectParameters.revision, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_revision = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateDialerObjectParameters.prototype, 'propertyname', {
            get: function() { return this.__prop_propertyname; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UpdateDialerObjectParameters.propertyname, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_propertyname = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateDialerObjectParameters.prototype, 'propertyinline', {
            get: function() { return this.__prop_propertyinline; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UpdateDialerObjectParameters.propertyinline, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_propertyinline = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateDialerObjectParameters.prototype, 'propertyvalue', {
            get: function() { return this.__prop_propertyvalue; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UpdateDialerObjectParameters.propertyvalue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_propertyvalue = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UpdateDialerObjectParameters, '__type', { value: 'urn:inin.com:dialer:updateDialerObjectParameters' });

    Object.defineProperty(UpdateDialerObjectParameters, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: false, nullable: false },
                'id': { required: true, nullable: false },
                'type': { required: true, nullable: false },
                'revision': { required: true, nullable: false },
                'propertyname': { required: true, nullable: false },
                'propertyinline': { required: true, nullable: false },
                'propertyvalue': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:updateDialerObjectParameters'] = UpdateDialerObjectParameters;

    return UpdateDialerObjectParameters;
}());

var ResetCampaignParameters = (function(){
    var hasProps = false;

    function ResetCampaignParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:resetCampaignParameters' });
        }

        ResetCampaignParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(ResetCampaignParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ResetCampaignParameters.prototype, 'campaignid', {
            get: function() { return this.__prop_campaignid; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ResetCampaignParameters.campaignid, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignid = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ResetCampaignParameters, '__type', { value: 'urn:inin.com:dialer:resetCampaignParameters' });

    Object.defineProperty(ResetCampaignParameters, '__propInfo', {
        get: function() {
            var pi = {
                'campaignid': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:resetCampaignParameters'] = ResetCampaignParameters;

    return ResetCampaignParameters;
}());

var RecycleCampaignParameters = (function(){
    var hasProps = false;

    function RecycleCampaignParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:recycleCampaignParameters' });
        }

        RecycleCampaignParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(RecycleCampaignParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RecycleCampaignParameters.prototype, 'campaignid', {
            get: function() { return this.__prop_campaignid; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for RecycleCampaignParameters.campaignid, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignid = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RecycleCampaignParameters, '__type', { value: 'urn:inin.com:dialer:recycleCampaignParameters' });

    Object.defineProperty(RecycleCampaignParameters, '__propInfo', {
        get: function() {
            var pi = {
                'campaignid': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:recycleCampaignParameters'] = RecycleCampaignParameters;

    return RecycleCampaignParameters;
}());

var TransitionCampaignParameters = (function(){
    var hasProps = false;

    function TransitionCampaignParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:transitionCampaignParameters' });
        }

        TransitionCampaignParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(TransitionCampaignParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TransitionCampaignParameters.prototype, 'campaignid', {
            get: function() { return this.__prop_campaignid; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for TransitionCampaignParameters.campaignid, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignid = value;
            },
            enumerable: true
        });

        Object.defineProperty(TransitionCampaignParameters.prototype, 'groupname', {
            get: function() { return this.__prop_groupname; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for TransitionCampaignParameters.groupname, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_groupname = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TransitionCampaignParameters, '__type', { value: 'urn:inin.com:dialer:transitionCampaignParameters' });

    Object.defineProperty(TransitionCampaignParameters, '__propInfo', {
        get: function() {
            var pi = {
                'campaignid': { required: false, nullable: false },
                'groupname': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:transitionCampaignParameters'] = TransitionCampaignParameters;

    return TransitionCampaignParameters;
}());

var InitiateManualOutboundCallParameters = (function(){
    var hasProps = false;

    function InitiateManualOutboundCallParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:initiateManualOutboundCallParameters' });
        }

        InitiateManualOutboundCallParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(InitiateManualOutboundCallParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InitiateManualOutboundCallParameters.prototype, 'campaignid', {
            get: function() { return this.__prop_campaignid; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InitiateManualOutboundCallParameters.campaignid, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignid = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitiateManualOutboundCallParameters.prototype, 'agentid', {
            get: function() { return this.__prop_agentid; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InitiateManualOutboundCallParameters.agentid, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_agentid = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitiateManualOutboundCallParameters.prototype, 'identity', {
            get: function() { return this.__prop_identity; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InitiateManualOutboundCallParameters.identity, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_identity = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitiateManualOutboundCallParameters.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(value instanceof ManualCallNumberType)) {
                    try {
                        value = new ManualCallNumberType(value);
                    } catch (e) {
                        throw new TypeError('Error setting InitiateManualOutboundCallParameters.type: ' + e.message);
                    }
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitiateManualOutboundCallParameters.prototype, 'numbervalue', {
            get: function() { return this.__prop_numbervalue; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for InitiateManualOutboundCallParameters.numbervalue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_numbervalue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitiateManualOutboundCallParameters.prototype, 'ignorefilter', {
            get: function() { return this.__prop_ignorefilter; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for InitiateManualOutboundCallParameters.ignorefilter, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ignorefilter = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitiateManualOutboundCallParameters.prototype, 'ignorequeryfilter', {
            get: function() { return this.__prop_ignorequeryfilter; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for InitiateManualOutboundCallParameters.ignorequeryfilter, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ignorequeryfilter = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitiateManualOutboundCallParameters.prototype, 'ignorezoneblocking', {
            get: function() { return this.__prop_ignorezoneblocking; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for InitiateManualOutboundCallParameters.ignorezoneblocking, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ignorezoneblocking = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitiateManualOutboundCallParameters.prototype, 'ignoreskills', {
            get: function() { return this.__prop_ignoreskills; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for InitiateManualOutboundCallParameters.ignoreskills, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ignoreskills = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitiateManualOutboundCallParameters.prototype, 'ignoredailylimit', {
            get: function() { return this.__prop_ignoredailylimit; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for InitiateManualOutboundCallParameters.ignoredailylimit, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ignoredailylimit = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitiateManualOutboundCallParameters.prototype, 'ignoreminimumspacing', {
            get: function() { return this.__prop_ignoreminimumspacing; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for InitiateManualOutboundCallParameters.ignoreminimumspacing, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ignoreminimumspacing = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitiateManualOutboundCallParameters.prototype, 'ignoredncscrub', {
            get: function() { return this.__prop_ignoredncscrub; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for InitiateManualOutboundCallParameters.ignoredncscrub, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ignoredncscrub = value;
            },
            enumerable: true
        });

        Object.defineProperty(InitiateManualOutboundCallParameters.prototype, 'ignorecampaignownership', {
            get: function() { return this.__prop_ignorecampaignownership; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for InitiateManualOutboundCallParameters.ignorecampaignownership, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ignorecampaignownership = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InitiateManualOutboundCallParameters, '__type', { value: 'urn:inin.com:dialer:initiateManualOutboundCallParameters' });

    Object.defineProperty(InitiateManualOutboundCallParameters, '__propInfo', {
        get: function() {
            var pi = {
                'campaignid': { required: true, nullable: false },
                'agentid': { required: true, nullable: false },
                'identity': { required: true, nullable: false },
                'type': { required: true, nullable: false },
                'numbervalue': { required: false, nullable: false },
                'ignorefilter': { required: false, nullable: false },
                'ignorequeryfilter': { required: false, nullable: false },
                'ignorezoneblocking': { required: false, nullable: false },
                'ignoreskills': { required: false, nullable: false },
                'ignoredailylimit': { required: false, nullable: false },
                'ignoreminimumspacing': { required: false, nullable: false },
                'ignoredncscrub': { required: false, nullable: false },
                'ignorecampaignownership': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:initiateManualOutboundCallParameters'] = InitiateManualOutboundCallParameters;

    return InitiateManualOutboundCallParameters;
}());

var InitiateManualOutboundCallResponse = (function(){
    var hasProps = false;

    function InitiateManualOutboundCallResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:initiateManualOutboundCallResponse' });
        }

        InitiateManualOutboundCallResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(InitiateManualOutboundCallResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InitiateManualOutboundCallResponse.prototype, 'response', {
            get: function() { return this.__prop_response; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for InitiateManualOutboundCallResponse.response, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_response = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InitiateManualOutboundCallResponse, '__type', { value: 'urn:inin.com:dialer:initiateManualOutboundCallResponse' });

    Object.defineProperty(InitiateManualOutboundCallResponse, '__propInfo', {
        get: function() {
            var pi = {
                'response': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:initiateManualOutboundCallResponse'] = InitiateManualOutboundCallResponse;

    return InitiateManualOutboundCallResponse;
}());

var PerformCallListQueryParameters = (function(){
    var hasProps = false;

    function PerformCallListQueryParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:performCallListQueryParameters' });
        }

        PerformCallListQueryParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(PerformCallListQueryParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PerformCallListQueryParameters.prototype, 'connectionid', {
            get: function() { return this.__prop_connectionid; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PerformCallListQueryParameters.connectionid, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_connectionid = value;
            },
            enumerable: true
        });

        Object.defineProperty(PerformCallListQueryParameters.prototype, 'command', {
            get: function() { return this.__prop_command; },
            set: function(value) {
                if (!(value instanceof DbCommandParameters)) {
                    try {
                        value = new DbCommandParameters(value);
                    } catch (e) {
                        throw new TypeError('Error setting PerformCallListQueryParameters.command: ' + e.message);
                    }
                }

                this.__prop_command = value;
            },
            enumerable: true
        });

        Object.defineProperty(PerformCallListQueryParameters.prototype, 'displayname', {
            get: function() { return this.__prop_displayname; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PerformCallListQueryParameters.displayname, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayname = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PerformCallListQueryParameters, '__type', { value: 'urn:inin.com:dialer:performCallListQueryParameters' });

    Object.defineProperty(PerformCallListQueryParameters, '__propInfo', {
        get: function() {
            var pi = {
                'connectionid': { required: true, nullable: false },
                'command': { required: true, nullable: false },
                'displayname': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:performCallListQueryParameters'] = PerformCallListQueryParameters;

    return PerformCallListQueryParameters;
}());

var DbCommandParameters = (function(){
    var hasProps = false;

    function DbCommandParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dbCommandParameters' });
        }

        DbCommandParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(DbCommandParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DbCommandParameters.prototype, 'contactlisttable', {
            get: function() { return this.__prop_contactlisttable; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DbCommandParameters.contactlisttable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_contactlisttable = value;
            },
            enumerable: true
        });

        Object.defineProperty(DbCommandParameters.prototype, 'statement', {
            get: function() { return this.__prop_statement; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DbCommandParameters.statement, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statement = value;
            },
            enumerable: true
        });

        Object.defineProperty(DbCommandParameters.prototype, 'commandtype', {
            get: function() { return this.__prop_commandtype; },
            set: function(value) {
                if (!(value instanceof DbCommandType)) {
                    try {
                        value = new DbCommandType(value);
                    } catch (e) {
                        throw new TypeError('Error setting DbCommandParameters.commandtype: ' + e.message);
                    }
                }

                this.__prop_commandtype = value;
            },
            enumerable: true
        });

        Object.defineProperty(DbCommandParameters.prototype, 'dbcommandparameterlist', {
            get: function() { return this.__prop_dbcommandparameterlist; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DbCommandQueryParameters); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new DbCommandQueryParameters(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DbCommandParameters.dbcommandparameterlist: ' + e.message);
                    }
                }

                this.__prop_dbcommandparameterlist = value;
            },
            enumerable: true
        });

        Object.defineProperty(DbCommandParameters.prototype, 'tabletype', {
            get: function() { return this.__prop_tabletype; },
            set: function(value) {
                if (!(value instanceof DbTableType)) {
                    try {
                        value = new DbTableType(value);
                    } catch (e) {
                        throw new TypeError('Error setting DbCommandParameters.tabletype: ' + e.message);
                    }
                }

                this.__prop_tabletype = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DbCommandParameters, '__type', { value: 'urn:inin.com:dialer:dbCommandParameters' });

    Object.defineProperty(DbCommandParameters, '__propInfo', {
        get: function() {
            var pi = {
                'contactlisttable': { required: true, nullable: false },
                'statement': { required: true, nullable: false },
                'commandtype': { required: true, nullable: false },
                'dbcommandparameterlist': { required: false, nullable: false },
                'tabletype': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:dbCommandParameters'] = DbCommandParameters;

    return DbCommandParameters;
}());

var DbCommandQueryParameters = (function(){
    var hasProps = false;

    function DbCommandQueryParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dbCommandQueryParameters' });
        }

        DbCommandQueryParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(DbCommandQueryParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DbCommandQueryParameters.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DbCommandQueryParameters.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        Object.defineProperty(DbCommandQueryParameters.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for DbCommandQueryParameters.type, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        Object.defineProperty(DbCommandQueryParameters.prototype, 'size', {
            get: function() { return this.__prop_size; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DbCommandQueryParameters.size, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_size = value;
            },
            enumerable: true
        });

        Object.defineProperty(DbCommandQueryParameters.prototype, 'scale', {
            get: function() { return this.__prop_scale; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DbCommandQueryParameters.scale, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scale = value;
            },
            enumerable: true
        });

        Object.defineProperty(DbCommandQueryParameters.prototype, 'precision', {
            get: function() { return this.__prop_precision; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DbCommandQueryParameters.precision, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_precision = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DbCommandQueryParameters, '__type', { value: 'urn:inin.com:dialer:dbCommandQueryParameters' });

    Object.defineProperty(DbCommandQueryParameters, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false },
                'type': { required: true, nullable: false },
                'size': { required: false, nullable: false },
                'scale': { required: false, nullable: false },
                'precision': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:dbCommandQueryParameters'] = DbCommandQueryParameters;

    return DbCommandQueryParameters;
}());

var CallListQueryResponse = (function(){
    var hasProps = false;

    function CallListQueryResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:callListQueryResponse' });
        }

        CallListQueryResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(CallListQueryResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CallListQueryResponse.prototype, 'recordsaffected', {
            get: function() { return this.__prop_recordsaffected; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for CallListQueryResponse.recordsaffected, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordsaffected = value;
            },
            enumerable: true
        });

        Object.defineProperty(CallListQueryResponse.prototype, 'errorMessage', {
            get: function() { return this.__prop_errorMessage; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CallListQueryResponse.errorMessage, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_errorMessage = value;
            },
            enumerable: true
        });

        Object.defineProperty(CallListQueryResponse.prototype, 'records', {
            get: function() { return this.__prop_records; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DialerContactData); }))) {
                    try {
                        value = value.map(function(item){ return new DialerContactData(item); });
                    } catch (e) {
                        throw new TypeError('Error setting CallListQueryResponse.records: ' + e.message);
                    }
                }

                this.__prop_records = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CallListQueryResponse, '__type', { value: 'urn:inin.com:dialer:callListQueryResponse' });

    Object.defineProperty(CallListQueryResponse, '__propInfo', {
        get: function() {
            var pi = {
                'recordsaffected': { required: true, nullable: false },
                'errorMessage': { required: true, nullable: false },
                'records': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:callListQueryResponse'] = CallListQueryResponse;

    return CallListQueryResponse;
}());

var DialerContactData = (function(){
    var hasProps = false;

    function DialerContactData() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dialerContactData' });
        }

        DialerContactData._super.constructor.apply(this, arguments);
    }
    _util.inherits(DialerContactData, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DialerContactData.prototype, 'status', {
            get: function() { return this.__prop_status; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DialerContactData.status, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_status = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialerContactData.prototype, 'identity', {
            get: function() { return this.__prop_identity; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for DialerContactData.identity, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_identity = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialerContactData.prototype, 'zone', {
            get: function() { return this.__prop_zone; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for DialerContactData.zone, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_zone = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialerContactData.prototype, 'values', {
            get: function() { return this.__prop_values; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }) || value === void 0)) {
                    throw new TypeError('Expected type String{} for DialerContactData.values, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_values = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DialerContactData, '__type', { value: 'urn:inin.com:dialer:dialerContactData' });

    Object.defineProperty(DialerContactData, '__propInfo', {
        get: function() {
            var pi = {
                'status': { required: true, nullable: false },
                'identity': { required: false, nullable: false },
                'zone': { required: false, nullable: false },
                'values': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:dialerContactData'] = DialerContactData;

    return DialerContactData;
}());

var PhoneNumberDetailParameters = (function(){
    var hasProps = false;

    function PhoneNumberDetailParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:phoneNumberDetailParameters' });
        }

        PhoneNumberDetailParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(PhoneNumberDetailParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PhoneNumberDetailParameters.prototype, 'campaignId', {
            get: function() { return this.__prop_campaignId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PhoneNumberDetailParameters.campaignId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignId = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetailParameters.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PhoneNumberDetailParameters.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PhoneNumberDetailParameters, '__type', { value: 'urn:inin.com:dialer:phoneNumberDetailParameters' });

    Object.defineProperty(PhoneNumberDetailParameters, '__propInfo', {
        get: function() {
            var pi = {
                'campaignId': { required: false, nullable: false },
                'interactionId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:phoneNumberDetailParameters'] = PhoneNumberDetailParameters;

    return PhoneNumberDetailParameters;
}());

var PhoneNumberDetails = (function(){
    var hasProps = false;

    function PhoneNumberDetails() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:phoneNumberDetails' });
        }

        PhoneNumberDetails._super.constructor.apply(this, arguments);
    }
    _util.inherits(PhoneNumberDetails, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PhoneNumberDetails.prototype, 'records', {
            get: function() { return this.__prop_records; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PhoneNumberDetail); }))) {
                    try {
                        value = value.map(function(item){ return new PhoneNumberDetail(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PhoneNumberDetails.records: ' + e.message);
                    }
                }

                this.__prop_records = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PhoneNumberDetails, '__type', { value: 'urn:inin.com:dialer:phoneNumberDetails' });

    Object.defineProperty(PhoneNumberDetails, '__propInfo', {
        get: function() {
            var pi = {
                'records': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:phoneNumberDetails'] = PhoneNumberDetails;

    return PhoneNumberDetails;
}());

var PhoneNumberDetail = (function(){
    var hasProps = false;

    function PhoneNumberDetail() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:phoneNumberDetail' });
        }

        PhoneNumberDetail._super.constructor.apply(this, arguments);
    }
    _util.inherits(PhoneNumberDetail, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PhoneNumberDetail.prototype, 'ccid', {
            get: function() { return this.__prop_ccid; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for PhoneNumberDetail.ccid, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ccid = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetail.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PhoneNumberDetail.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetail.prototype, 'phonenumbertype', {
            get: function() { return this.__prop_phonenumbertype; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PhoneNumberDetail.phonenumbertype, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phonenumbertype = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetail.prototype, 'phonenumber', {
            get: function() { return this.__prop_phonenumber; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PhoneNumberDetail.phonenumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phonenumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetail.prototype, 'attempts', {
            get: function() { return this.__prop_attempts; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for PhoneNumberDetail.attempts, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attempts = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetail.prototype, 'blockingresult', {
            get: function() { return this.__prop_blockingresult; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PhoneNumberDetail.blockingresult, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_blockingresult = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PhoneNumberDetail, '__type', { value: 'urn:inin.com:dialer:phoneNumberDetail' });

    Object.defineProperty(PhoneNumberDetail, '__propInfo', {
        get: function() {
            var pi = {
                'ccid': { required: true, nullable: false },
                'name': { required: true, nullable: false },
                'phonenumbertype': { required: true, nullable: false },
                'phonenumber': { required: true, nullable: false },
                'attempts': { required: true, nullable: false },
                'blockingresult': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:phoneNumberDetail'] = PhoneNumberDetail;

    return PhoneNumberDetail;
}());

var AgentTypeParameters = (function(){
    var hasProps = false;

    function AgentTypeParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:agentTypeParameters' });
        }

        AgentTypeParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(AgentTypeParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AgentTypeParameters.prototype, 'agentType', {
            get: function() { return this.__prop_agentType; },
            set: function(value) {
                if (!(value instanceof AgentType)) {
                    try {
                        value = new AgentType(value);
                    } catch (e) {
                        throw new TypeError('Error setting AgentTypeParameters.agentType: ' + e.message);
                    }
                }

                this.__prop_agentType = value;
            },
            enumerable: true
        });

        Object.defineProperty(AgentTypeParameters.prototype, 'campaignIds', {
            get: function() { return this.__prop_campaignIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for AgentTypeParameters.campaignIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignIds = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AgentTypeParameters, '__type', { value: 'urn:inin.com:dialer:agentTypeParameters' });

    Object.defineProperty(AgentTypeParameters, '__propInfo', {
        get: function() {
            var pi = {
                'agentType': { required: true, nullable: false },
                'campaignIds': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:agentTypeParameters'] = AgentTypeParameters;

    return AgentTypeParameters;
}());

var DialerEntityParameters = (function(){
    var hasProps = false;

    function DialerEntityParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dialerEntityParameters' });
        }

        DialerEntityParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(DialerEntityParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DialerEntityParameters.prototype, 'objectId', {
            get: function() { return this.__prop_objectId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DialerEntityParameters.objectId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_objectId = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialerEntityParameters.prototype, 'objectType', {
            get: function() { return this.__prop_objectType; },
            set: function(value) {
                if (!(value instanceof DialerConfigObjectType)) {
                    try {
                        value = new DialerConfigObjectType(value);
                    } catch (e) {
                        throw new TypeError('Error setting DialerEntityParameters.objectType: ' + e.message);
                    }
                }

                this.__prop_objectType = value;
            },
            enumerable: true
        });

        Object.defineProperty(DialerEntityParameters.prototype, 'propsToFetch', {
            get: function() { return this.__prop_propsToFetch; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for DialerEntityParameters.propsToFetch, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_propsToFetch = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DialerEntityParameters, '__type', { value: 'urn:inin.com:dialer:dialerEntityParameters' });

    Object.defineProperty(DialerEntityParameters, '__propInfo', {
        get: function() {
            var pi = {
                'objectId': { required: true, nullable: false },
                'objectType': { required: true, nullable: false },
                'propsToFetch': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:dialerEntityParameters'] = DialerEntityParameters;

    return DialerEntityParameters;
}());

var RequestDialerObjectResponse = (function(){
    var hasProps = false;

    function RequestDialerObjectResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:requestDialerObjectResponse' });
        }

        RequestDialerObjectResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(RequestDialerObjectResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RequestDialerObjectResponse.prototype, 'response', {
            get: function() { return this.__prop_response; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RequestDialerObjectResponse.response, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_response = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RequestDialerObjectResponse, '__type', { value: 'urn:inin.com:dialer:requestDialerObjectResponse' });

    Object.defineProperty(RequestDialerObjectResponse, '__propInfo', {
        get: function() {
            var pi = {
                'response': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:requestDialerObjectResponse'] = RequestDialerObjectResponse;

    return RequestDialerObjectResponse;
}());

var MarkCallForFinishingParameters = (function(){
    var hasProps = false;

    function MarkCallForFinishingParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:markCallForFinishingParameters' });
        }

        MarkCallForFinishingParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(MarkCallForFinishingParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MarkCallForFinishingParameters.prototype, 'callId', {
            get: function() { return this.__prop_callId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for MarkCallForFinishingParameters.callId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callId = value;
            },
            enumerable: true
        });

        Object.defineProperty(MarkCallForFinishingParameters.prototype, 'callAttributes', {
            get: function() { return this.__prop_callAttributes; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }) || value === void 0)) {
                    throw new TypeError('Expected type String{} for MarkCallForFinishingParameters.callAttributes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(MarkCallForFinishingParameters.prototype, 'campaignId', {
            get: function() { return this.__prop_campaignId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for MarkCallForFinishingParameters.campaignId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MarkCallForFinishingParameters, '__type', { value: 'urn:inin.com:dialer:markCallForFinishingParameters' });

    Object.defineProperty(MarkCallForFinishingParameters, '__propInfo', {
        get: function() {
            var pi = {
                'callId': { required: true, nullable: false },
                'callAttributes': { required: false, nullable: false },
                'campaignId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:markCallForFinishingParameters'] = MarkCallForFinishingParameters;

    return MarkCallForFinishingParameters;
}());

var RequestContactDataParameters = (function(){
    var hasProps = false;

    function RequestContactDataParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:requestContactDataParameters' });
        }

        RequestContactDataParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(RequestContactDataParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RequestContactDataParameters.prototype, 'callId', {
            get: function() { return this.__prop_callId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RequestContactDataParameters.callId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callId = value;
            },
            enumerable: true
        });

        Object.defineProperty(RequestContactDataParameters.prototype, 'campaignId', {
            get: function() { return this.__prop_campaignId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RequestContactDataParameters.campaignId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RequestContactDataParameters, '__type', { value: 'urn:inin.com:dialer:requestContactDataParameters' });

    Object.defineProperty(RequestContactDataParameters, '__propInfo', {
        get: function() {
            var pi = {
                'callId': { required: true, nullable: false },
                'campaignId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:requestContactDataParameters'] = RequestContactDataParameters;

    return RequestContactDataParameters;
}());

var RequestContactDataResponse = (function(){
    var hasProps = false;

    function RequestContactDataResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:requestContactDataResponse' });
        }

        RequestContactDataResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(RequestContactDataResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RequestContactDataResponse.prototype, 'contacts', {
            get: function() { return this.__prop_contacts; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Contact); }))) {
                    try {
                        value = value.map(function(item){ return new Contact(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RequestContactDataResponse.contacts: ' + e.message);
                    }
                }

                this.__prop_contacts = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RequestContactDataResponse, '__type', { value: 'urn:inin.com:dialer:requestContactDataResponse' });

    Object.defineProperty(RequestContactDataResponse, '__propInfo', {
        get: function() {
            var pi = {
                'contacts': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:requestContactDataResponse'] = RequestContactDataResponse;

    return RequestContactDataResponse;
}());

var Contact = (function(){
    var hasProps = false;

    function Contact() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:contact' });
        }

        Contact._super.constructor.apply(this, arguments);
    }
    _util.inherits(Contact, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Contact.prototype, 'contactdata', {
            get: function() { return this.__prop_contactdata; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }))) {
                    throw new TypeError('Expected type String{} for Contact.contactdata, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_contactdata = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Contact, '__type', { value: 'urn:inin.com:dialer:contact' });

    Object.defineProperty(Contact, '__propInfo', {
        get: function() {
            var pi = {
                'contactdata': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:contact'] = Contact;

    return Contact;
}());

var UpdateStageParameters = (function(){
    var hasProps = false;

    function UpdateStageParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:updateStageParameters' });
        }

        UpdateStageParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(UpdateStageParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UpdateStageParameters.prototype, 'agentId', {
            get: function() { return this.__prop_agentId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for UpdateStageParameters.agentId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_agentId = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateStageParameters.prototype, 'newStageId', {
            get: function() { return this.__prop_newStageId; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for UpdateStageParameters.newStageId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_newStageId = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateStageParameters.prototype, 'campaignId', {
            get: function() { return this.__prop_campaignId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UpdateStageParameters.campaignId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UpdateStageParameters, '__type', { value: 'urn:inin.com:dialer:updateStageParameters' });

    Object.defineProperty(UpdateStageParameters, '__propInfo', {
        get: function() {
            var pi = {
                'agentId': { required: false, nullable: false },
                'newStageId': { required: true, nullable: false },
                'campaignId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:updateStageParameters'] = UpdateStageParameters;

    return UpdateStageParameters;
}());

var AllocateAgentsParameters = (function(){
    var hasProps = false;

    function AllocateAgentsParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:allocateAgentsParameters' });
        }

        AllocateAgentsParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(AllocateAgentsParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AllocateAgentsParameters.prototype, 'agentIds', {
            get: function() { return this.__prop_agentIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for AllocateAgentsParameters.agentIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_agentIds = value;
            },
            enumerable: true
        });

        Object.defineProperty(AllocateAgentsParameters.prototype, 'campaignIdsOut', {
            get: function() { return this.__prop_campaignIdsOut; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for AllocateAgentsParameters.campaignIdsOut, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignIdsOut = value;
            },
            enumerable: true
        });

        Object.defineProperty(AllocateAgentsParameters.prototype, 'campaignIdsIn', {
            get: function() { return this.__prop_campaignIdsIn; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for AllocateAgentsParameters.campaignIdsIn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignIdsIn = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AllocateAgentsParameters, '__type', { value: 'urn:inin.com:dialer:allocateAgentsParameters' });

    Object.defineProperty(AllocateAgentsParameters, '__propInfo', {
        get: function() {
            var pi = {
                'agentIds': { required: true, nullable: false },
                'campaignIdsOut': { required: false, nullable: false },
                'campaignIdsIn': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:allocateAgentsParameters'] = AllocateAgentsParameters;

    return AllocateAgentsParameters;
}());

var CampaignLogonError = (function(){
    var hasProps = false;

    function CampaignLogonError() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:campaignLogonError', enumerable: true });
        }

        CampaignLogonError._super.constructor.apply(this, arguments);
    }
    _util.inherits(CampaignLogonError, Common.Error);

    function defineProps() {
        Object.defineProperty(CampaignLogonError.prototype, 'logonError', {
            get: function() { return this.__prop_logonError; },
            set: function(value) {
                if (!(value instanceof CampaignLogonErrorCode || value === void 0)) {
                    try {
                        value = new CampaignLogonErrorCode(value);
                    } catch (e) {
                        throw new TypeError('Error setting CampaignLogonError.logonError: ' + e.message);
                    }
                }

                this.__prop_logonError = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CampaignLogonError, '__type', { value: 'urn:inin.com:dialer:campaignLogonError' });

    Object.defineProperty(CampaignLogonError, '__propInfo', {
        get: function() {
            var pi = {
                'logonError': { required: false, nullable: false }
            };
            if (Common.Error.__propInfo) { _util.extend(pi, Common.Error.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:campaignLogonError'] = CampaignLogonError;

    return CampaignLogonError;
}());

var AutoLoginMessage = (function(){
    var hasProps = false;

    function AutoLoginMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:autoLoginMessage', enumerable: true });
        }

        AutoLoginMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AutoLoginMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(AutoLoginMessage.prototype, 'campaignId', {
            get: function() { return this.__prop_campaignId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AutoLoginMessage.campaignId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AutoLoginMessage.prototype, 'initiatorName', {
            get: function() { return this.__prop_initiatorName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AutoLoginMessage.initiatorName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initiatorName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AutoLoginMessage, '__type', { value: 'urn:inin.com:dialer:autoLoginMessage' });

    Object.defineProperty(AutoLoginMessage, '__propInfo', {
        get: function() {
            var pi = {
                'campaignId': { required: true, nullable: false },
                'initiatorName': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:autoLoginMessage'] = AutoLoginMessage;

    return AutoLoginMessage;
}());

var AutoLogoutMessage = (function(){
    var hasProps = false;

    function AutoLogoutMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:autoLogoutMessage', enumerable: true });
        }

        AutoLogoutMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AutoLogoutMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(AutoLogoutMessage.prototype, 'campaignIds', {
            get: function() { return this.__prop_campaignIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for AutoLogoutMessage.campaignIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignIds = value;
            },
            enumerable: true
        });

        Object.defineProperty(AutoLogoutMessage.prototype, 'initiatorName', {
            get: function() { return this.__prop_initiatorName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AutoLogoutMessage.initiatorName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initiatorName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AutoLogoutMessage, '__type', { value: 'urn:inin.com:dialer:autoLogoutMessage' });

    Object.defineProperty(AutoLogoutMessage, '__propInfo', {
        get: function() {
            var pi = {
                'campaignIds': { required: true, nullable: false },
                'initiatorName': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:autoLogoutMessage'] = AutoLogoutMessage;

    return AutoLogoutMessage;
}());

var LogoutGrantedMessage = (function(){
    var hasProps = false;

    function LogoutGrantedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:logoutGrantedMessage', enumerable: true });
        }

        LogoutGrantedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(LogoutGrantedMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(LogoutGrantedMessage.prototype, 'campaigns', {
            get: function() { return this.__prop_campaigns; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof CampaignInfo); }))) {
                    try {
                        value = value.map(function(item){ return new CampaignInfo(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LogoutGrantedMessage.campaigns: ' + e.message);
                    }
                }

                this.__prop_campaigns = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LogoutGrantedMessage, '__type', { value: 'urn:inin.com:dialer:logoutGrantedMessage' });

    Object.defineProperty(LogoutGrantedMessage, '__propInfo', {
        get: function() {
            var pi = {
                'campaigns': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:logoutGrantedMessage'] = LogoutGrantedMessage;

    return LogoutGrantedMessage;
}());

var DataPopMessage = (function(){
    var hasProps = false;

    function DataPopMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dataPopMessage', enumerable: true });
        }

        DataPopMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(DataPopMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(DataPopMessage.prototype, 'call', {
            get: function() { return this.__prop_call; },
            set: function(value) {
                if (!(value instanceof BaseDataPop)) {
                    try {
                        value = new BaseDataPop(value);
                    } catch (e) {
                        throw new TypeError('Error setting DataPopMessage.call: ' + e.message);
                    }
                }

                this.__prop_call = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DataPopMessage, '__type', { value: 'urn:inin.com:dialer:dataPopMessage' });

    Object.defineProperty(DataPopMessage, '__propInfo', {
        get: function() {
            var pi = {
                'call': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:dataPopMessage'] = DataPopMessage;

    return DataPopMessage;
}());

var DataPop = (function(){
    var hasProps = false;

    function DataPop() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:dataPop', enumerable: true });
        }

        DataPop._super.constructor.apply(this, arguments);
    }
    _util.inherits(DataPop, BaseDataPop);

    function defineProps() {
        Object.defineProperty(DataPop.prototype, 'dialingMode', {
            get: function() { return this.__prop_dialingMode; },
            set: function(value) {
                if (!(value instanceof DialingMode)) {
                    try {
                        value = new DialingMode(value);
                    } catch (e) {
                        throw new TypeError('Error setting DataPop.dialingMode: ' + e.message);
                    }
                }

                this.__prop_dialingMode = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DataPop, '__type', { value: 'urn:inin.com:dialer:dataPop' });

    Object.defineProperty(DataPop, '__propInfo', {
        get: function() {
            var pi = {
                'dialingMode': { required: true, nullable: false }
            };
            if (BaseDataPop.__propInfo) { _util.extend(pi, BaseDataPop.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:dataPop'] = DataPop;

    return DataPop;
}());

var PreviewPop = (function(){
    var hasProps = false;

    function PreviewPop() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:previewPop', enumerable: true });
        }

        PreviewPop._super.constructor.apply(this, arguments);
    }
    _util.inherits(PreviewPop, BaseDataPop);

    function defineProps() {
        Object.defineProperty(PreviewPop.prototype, 'dialingMode', {
            get: function() { return this.__prop_dialingMode; },
            set: function(value) {
                if (!(value instanceof PreviewDialingMode)) {
                    try {
                        value = new PreviewDialingMode(value);
                    } catch (e) {
                        throw new TypeError('Error setting PreviewPop.dialingMode: ' + e.message);
                    }
                }

                this.__prop_dialingMode = value;
            },
            enumerable: true
        });

        Object.defineProperty(PreviewPop.prototype, 'callPlaced', {
            get: function() { return this.__prop_callPlaced; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for PreviewPop.callPlaced, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callPlaced = value;
            },
            enumerable: true
        });

        Object.defineProperty(PreviewPop.prototype, 'previewTimeout', {
            get: function() { return this.__prop_previewTimeout; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for PreviewPop.previewTimeout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_previewTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(PreviewPop.prototype, 'allowSkip', {
            get: function() { return this.__prop_allowSkip; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for PreviewPop.allowSkip, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowSkip = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PreviewPop, '__type', { value: 'urn:inin.com:dialer:previewPop' });

    Object.defineProperty(PreviewPop, '__propInfo', {
        get: function() {
            var pi = {
                'dialingMode': { required: true, nullable: false },
                'callPlaced': { required: true, nullable: false },
                'previewTimeout': { required: false, nullable: false },
                'allowSkip': { required: true, nullable: false }
            };
            if (BaseDataPop.__propInfo) { _util.extend(pi, BaseDataPop.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:previewPop'] = PreviewPop;

    return PreviewPop;
}());

var BreakStatusMessage = (function(){
    var hasProps = false;

    function BreakStatusMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:breakStatusMessage', enumerable: true });
        }

        BreakStatusMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(BreakStatusMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(BreakStatusMessage.prototype, 'breakStatus', {
            get: function() { return this.__prop_breakStatus; },
            set: function(value) {
                if (!(value instanceof BreakStatusType)) {
                    try {
                        value = new BreakStatusType(value);
                    } catch (e) {
                        throw new TypeError('Error setting BreakStatusMessage.breakStatus: ' + e.message);
                    }
                }

                this.__prop_breakStatus = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BreakStatusMessage, '__type', { value: 'urn:inin.com:dialer:breakStatusMessage' });

    Object.defineProperty(BreakStatusMessage, '__propInfo', {
        get: function() {
            var pi = {
                'breakStatus': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:breakStatusMessage'] = BreakStatusMessage;

    return BreakStatusMessage;
}());

var SetFormDefinitionMessage = (function(){
    var hasProps = false;

    function SetFormDefinitionMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:setFormDefinitionMessage', enumerable: true });
        }

        SetFormDefinitionMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(SetFormDefinitionMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(SetFormDefinitionMessage.prototype, 'campaignId', {
            get: function() { return this.__prop_campaignId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SetFormDefinitionMessage.campaignId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SetFormDefinitionMessage.prototype, 'formDefinition', {
            get: function() { return this.__prop_formDefinition; },
            set: function(value) {
                if (!(value instanceof FormDefinition)) {
                    try {
                        value = new FormDefinition(value);
                    } catch (e) {
                        throw new TypeError('Error setting SetFormDefinitionMessage.formDefinition: ' + e.message);
                    }
                }

                this.__prop_formDefinition = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SetFormDefinitionMessage, '__type', { value: 'urn:inin.com:dialer:setFormDefinitionMessage' });

    Object.defineProperty(SetFormDefinitionMessage, '__propInfo', {
        get: function() {
            var pi = {
                'campaignId': { required: true, nullable: false },
                'formDefinition': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:setFormDefinitionMessage'] = SetFormDefinitionMessage;

    return SetFormDefinitionMessage;
}());

var OutboundServerConnectionStateChangeMessage = (function(){
    var hasProps = false;

    function OutboundServerConnectionStateChangeMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:outboundServerConnectionStateChangeMessage', enumerable: true });
        }

        OutboundServerConnectionStateChangeMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(OutboundServerConnectionStateChangeMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(OutboundServerConnectionStateChangeMessage.prototype, 'previousConnectionState', {
            get: function() { return this.__prop_previousConnectionState; },
            set: function(value) {
                if (!(value instanceof ConnectionState)) {
                    try {
                        value = new ConnectionState(value);
                    } catch (e) {
                        throw new TypeError('Error setting OutboundServerConnectionStateChangeMessage.previousConnectionState: ' + e.message);
                    }
                }

                this.__prop_previousConnectionState = value;
            },
            enumerable: true
        });

        Object.defineProperty(OutboundServerConnectionStateChangeMessage.prototype, 'newConnectionState', {
            get: function() { return this.__prop_newConnectionState; },
            set: function(value) {
                if (!(value instanceof ConnectionState)) {
                    try {
                        value = new ConnectionState(value);
                    } catch (e) {
                        throw new TypeError('Error setting OutboundServerConnectionStateChangeMessage.newConnectionState: ' + e.message);
                    }
                }

                this.__prop_newConnectionState = value;
            },
            enumerable: true
        });

        Object.defineProperty(OutboundServerConnectionStateChangeMessage.prototype, 'reason', {
            get: function() { return this.__prop_reason; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for OutboundServerConnectionStateChangeMessage.reason, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_reason = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(OutboundServerConnectionStateChangeMessage, '__type', { value: 'urn:inin.com:dialer:outboundServerConnectionStateChangeMessage' });

    Object.defineProperty(OutboundServerConnectionStateChangeMessage, '__propInfo', {
        get: function() {
            var pi = {
                'previousConnectionState': { required: true, nullable: false },
                'newConnectionState': { required: true, nullable: false },
                'reason': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:outboundServerConnectionStateChangeMessage'] = OutboundServerConnectionStateChangeMessage;

    return OutboundServerConnectionStateChangeMessage;
}());

var AvailableCampaignsMessage = (function(){
    var hasProps = false;

    function AvailableCampaignsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:availableCampaignsMessage', enumerable: true });
        }

        AvailableCampaignsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AvailableCampaignsMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(AvailableCampaignsMessage.prototype, 'campaignsAdded', {
            get: function() { return this.__prop_campaignsAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AvailableCampaign); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AvailableCampaign(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AvailableCampaignsMessage.campaignsAdded: ' + e.message);
                    }
                }

                this.__prop_campaignsAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(AvailableCampaignsMessage.prototype, 'campaignsChanged', {
            get: function() { return this.__prop_campaignsChanged; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ChangedCampaign); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ChangedCampaign(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AvailableCampaignsMessage.campaignsChanged: ' + e.message);
                    }
                }

                this.__prop_campaignsChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(AvailableCampaignsMessage.prototype, 'campaignsRemoved', {
            get: function() { return this.__prop_campaignsRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RemovedCampaign); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new RemovedCampaign(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AvailableCampaignsMessage.campaignsRemoved: ' + e.message);
                    }
                }

                this.__prop_campaignsRemoved = value;
            },
            enumerable: true
        });

        Object.defineProperty(AvailableCampaignsMessage.prototype, 'agentHasLogonCampaignRight', {
            get: function() { return this.__prop_agentHasLogonCampaignRight; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for AvailableCampaignsMessage.agentHasLogonCampaignRight, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_agentHasLogonCampaignRight = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AvailableCampaignsMessage, '__type', { value: 'urn:inin.com:dialer:availableCampaignsMessage' });

    Object.defineProperty(AvailableCampaignsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'campaignsAdded': { required: false, nullable: false },
                'campaignsChanged': { required: false, nullable: false },
                'campaignsRemoved': { required: false, nullable: false },
                'agentHasLogonCampaignRight': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:availableCampaignsMessage'] = AvailableCampaignsMessage;

    return AvailableCampaignsMessage;
}());

var AvailableCampaign = (function(){
    var hasProps = false;

    function AvailableCampaign() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:availableCampaign', enumerable: true });
        }

        AvailableCampaign._super.constructor.apply(this, arguments);
    }
    _util.inherits(AvailableCampaign, CampaignInfoBase);

    function defineProps() {
        Object.defineProperty(AvailableCampaign.prototype, 'workgroup', {
            get: function() { return this.__prop_workgroup; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AvailableCampaign.workgroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroup = value;
            },
            enumerable: true
        });

        Object.defineProperty(AvailableCampaign.prototype, 'status', {
            get: function() { return this.__prop_status; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof CampaignStatusType); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new CampaignStatusType(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AvailableCampaign.status: ' + e.message);
                    }
                }

                this.__prop_status = value;
            },
            enumerable: true
        });

        Object.defineProperty(AvailableCampaign.prototype, 'hasBaseScript', {
            get: function() { return this.__prop_hasBaseScript; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for AvailableCampaign.hasBaseScript, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasBaseScript = value;
            },
            enumerable: true
        });

        Object.defineProperty(AvailableCampaign.prototype, 'customScriptUrl', {
            get: function() { return this.__prop_customScriptUrl; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for AvailableCampaign.customScriptUrl, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_customScriptUrl = value;
            },
            enumerable: true
        });

        Object.defineProperty(AvailableCampaign.prototype, 'isLoggedIn', {
            get: function() { return this.__prop_isLoggedIn; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for AvailableCampaign.isLoggedIn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isLoggedIn = value;
            },
            enumerable: true
        });

        Object.defineProperty(AvailableCampaign.prototype, 'campaignType', {
            get: function() { return this.__prop_campaignType; },
            set: function(value) {
                if (!(value instanceof CampaignType || value === void 0)) {
                    try {
                        value = new CampaignType(value);
                    } catch (e) {
                        throw new TypeError('Error setting AvailableCampaign.campaignType: ' + e.message);
                    }
                }

                this.__prop_campaignType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AvailableCampaign, '__type', { value: 'urn:inin.com:dialer:availableCampaign' });

    Object.defineProperty(AvailableCampaign, '__propInfo', {
        get: function() {
            var pi = {
                'workgroup': { required: true, nullable: false },
                'status': { required: false, nullable: false },
                'hasBaseScript': { required: false, nullable: false },
                'customScriptUrl': { required: false, nullable: false },
                'isLoggedIn': { required: false, nullable: false },
                'campaignType': { required: false, nullable: false }
            };
            if (CampaignInfoBase.__propInfo) { _util.extend(pi, CampaignInfoBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:availableCampaign'] = AvailableCampaign;

    return AvailableCampaign;
}());

var ChangedCampaign = (function(){
    var hasProps = false;

    function ChangedCampaign() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:changedCampaign', enumerable: true });
        }

        ChangedCampaign._super.constructor.apply(this, arguments);
    }
    _util.inherits(ChangedCampaign, CampaignInfoBase);

    function defineProps() {
        Object.defineProperty(ChangedCampaign.prototype, 'status', {
            get: function() { return this.__prop_status; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof CampaignStatusType); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new CampaignStatusType(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ChangedCampaign.status: ' + e.message);
                    }
                }

                this.__prop_status = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ChangedCampaign, '__type', { value: 'urn:inin.com:dialer:changedCampaign' });

    Object.defineProperty(ChangedCampaign, '__propInfo', {
        get: function() {
            var pi = {
                'status': { required: false, nullable: false }
            };
            if (CampaignInfoBase.__propInfo) { _util.extend(pi, CampaignInfoBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:changedCampaign'] = ChangedCampaign;

    return ChangedCampaign;
}());

var ManualOutboundCallStatusMessage = (function(){
    var hasProps = false;

    function ManualOutboundCallStatusMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dialer:manualOutboundCallStatusMessage', enumerable: true });
        }

        ManualOutboundCallStatusMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManualOutboundCallStatusMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'campaignId', {
            get: function() { return this.__prop_campaignId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ManualOutboundCallStatusMessage.campaignId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'agentId', {
            get: function() { return this.__prop_agentId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ManualOutboundCallStatusMessage.agentId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_agentId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'identity', {
            get: function() { return this.__prop_identity; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ManualOutboundCallStatusMessage.identity, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_identity = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'status', {
            get: function() { return this.__prop_status; },
            set: function(value) {
                if (!(value instanceof ManualOutboundCallStatus)) {
                    try {
                        value = new ManualOutboundCallStatus(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManualOutboundCallStatusMessage.status: ' + e.message);
                    }
                }

                this.__prop_status = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'filterblocked', {
            get: function() { return this.__prop_filterblocked; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ManualOutboundCallStatusMessage.filterblocked, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_filterblocked = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'zoneblocked', {
            get: function() { return this.__prop_zoneblocked; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ManualOutboundCallStatusMessage.zoneblocked, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_zoneblocked = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'skillblocked', {
            get: function() { return this.__prop_skillblocked; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ManualOutboundCallStatusMessage.skillblocked, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_skillblocked = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'dailylimitblocked', {
            get: function() { return this.__prop_dailylimitblocked; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ManualOutboundCallStatusMessage.dailylimitblocked, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dailylimitblocked = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'minimumspacingblocked', {
            get: function() { return this.__prop_minimumspacingblocked; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ManualOutboundCallStatusMessage.minimumspacingblocked, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimumspacingblocked = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'campaignownershipblocked', {
            get: function() { return this.__prop_campaignownershipblocked; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ManualOutboundCallStatusMessage.campaignownershipblocked, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_campaignownershipblocked = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'donotcallblocked', {
            get: function() { return this.__prop_donotcallblocked; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ManualOutboundCallStatusMessage.donotcallblocked, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_donotcallblocked = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'querytimefilterblocked', {
            get: function() { return this.__prop_querytimefilterblocked; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ManualOutboundCallStatusMessage.querytimefilterblocked, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_querytimefilterblocked = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'previouslydialed', {
            get: function() { return this.__prop_previouslydialed; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ManualOutboundCallStatusMessage.previouslydialed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_previouslydialed = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManualOutboundCallStatusMessage.prototype, 'uncallablestatus', {
            get: function() { return this.__prop_uncallablestatus; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ManualOutboundCallStatusMessage.uncallablestatus, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_uncallablestatus = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManualOutboundCallStatusMessage, '__type', { value: 'urn:inin.com:dialer:manualOutboundCallStatusMessage' });

    Object.defineProperty(ManualOutboundCallStatusMessage, '__propInfo', {
        get: function() {
            var pi = {
                'campaignId': { required: true, nullable: false },
                'agentId': { required: true, nullable: false },
                'identity': { required: true, nullable: false },
                'status': { required: true, nullable: false },
                'filterblocked': { required: true, nullable: false },
                'zoneblocked': { required: true, nullable: false },
                'skillblocked': { required: true, nullable: false },
                'dailylimitblocked': { required: true, nullable: false },
                'minimumspacingblocked': { required: true, nullable: false },
                'campaignownershipblocked': { required: true, nullable: false },
                'donotcallblocked': { required: true, nullable: false },
                'querytimefilterblocked': { required: true, nullable: false },
                'previouslydialed': { required: true, nullable: false },
                'uncallablestatus': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dialer:manualOutboundCallStatusMessage'] = ManualOutboundCallStatusMessage;

    return ManualOutboundCallStatusMessage;
}());

exports.CampaignLogonErrorCode = CampaignLogonErrorCode;
exports.DialingMode = DialingMode;
exports.PreviewDialingMode = PreviewDialingMode;
exports.BreakStatusType = BreakStatusType;
exports.BaseScriptPageControlType = BaseScriptPageControlType;
exports.BaseScriptDateTimeControlFormat = BaseScriptDateTimeControlFormat;
exports.ConnectionState = ConnectionState;
exports.CampaignStatusType = CampaignStatusType;
exports.CampaignType = CampaignType;
exports.ManualOutboundCallStatus = ManualOutboundCallStatus;
exports.RelativeTo = RelativeTo;
exports.DialerConfigObjectType = DialerConfigObjectType;
exports.ManualCallNumberType = ManualCallNumberType;
exports.DbCommandType = DbCommandType;
exports.DbTableType = DbTableType;
exports.AgentType = AgentType;
exports.CampaignLogonError = CampaignLogonError;
exports.AutoLoginMessage = AutoLoginMessage;
exports.AutoLogoutMessage = AutoLogoutMessage;
exports.LogoutGrantedMessage = LogoutGrantedMessage;
exports.CampaignInfo = CampaignInfo;
exports.DataPopMessage = DataPopMessage;
exports.BaseDataPop = BaseDataPop;
exports.Disposition = Disposition;
exports.DataPop = DataPop;
exports.PreviewPop = PreviewPop;
exports.BreakStatusMessage = BreakStatusMessage;
exports.SetFormDefinitionMessage = SetFormDefinitionMessage;
exports.FormDefinition = FormDefinition;
exports.BaseScriptPage = BaseScriptPage;
exports.BaseScriptPageControl = BaseScriptPageControl;
exports.BaseScriptPageDisposition = BaseScriptPageDisposition;
exports.BaseScriptMisc = BaseScriptMisc;
exports.ExtensionDefinition = ExtensionDefinition;
exports.OutboundServerConnectionStateChangeMessage = OutboundServerConnectionStateChangeMessage;
exports.AvailableCampaignsMessage = AvailableCampaignsMessage;
exports.AvailableCampaign = AvailableCampaign;
exports.CampaignInfoBase = CampaignInfoBase;
exports.ChangedCampaign = ChangedCampaign;
exports.RemovedCampaign = RemovedCampaign;
exports.ManualOutboundCallStatusMessage = ManualOutboundCallStatusMessage;
exports.LogInParameters = LogInParameters;
exports.LogOffParameters = LogOffParameters;
exports.StartReceivingParameters = StartReceivingParameters;
exports.DispositionParameters = DispositionParameters;
exports.PlacePreviewCallParameters = PlacePreviewCallParameters;
exports.FormDefinitionParameters = FormDefinitionParameters;
exports.UpdateCallDataParameters = UpdateCallDataParameters;
exports.PutXMLParameters = PutXMLParameters;
exports.DialerObjectParameters = DialerObjectParameters;
exports.DialerObjectInfoList = DialerObjectInfoList;
exports.DialerObjectInfo = DialerObjectInfo;
exports.RemoveDialerObjectParameters = RemoveDialerObjectParameters;
exports.UpdateDialerObjectParameters = UpdateDialerObjectParameters;
exports.ResetCampaignParameters = ResetCampaignParameters;
exports.RecycleCampaignParameters = RecycleCampaignParameters;
exports.TransitionCampaignParameters = TransitionCampaignParameters;
exports.InitiateManualOutboundCallParameters = InitiateManualOutboundCallParameters;
exports.InitiateManualOutboundCallResponse = InitiateManualOutboundCallResponse;
exports.PerformCallListQueryParameters = PerformCallListQueryParameters;
exports.DbCommandParameters = DbCommandParameters;
exports.DbCommandQueryParameters = DbCommandQueryParameters;
exports.CallListQueryResponse = CallListQueryResponse;
exports.DialerContactData = DialerContactData;
exports.PhoneNumberDetailParameters = PhoneNumberDetailParameters;
exports.PhoneNumberDetails = PhoneNumberDetails;
exports.PhoneNumberDetail = PhoneNumberDetail;
exports.AgentTypeParameters = AgentTypeParameters;
exports.DialerEntityParameters = DialerEntityParameters;
exports.RequestDialerObjectResponse = RequestDialerObjectResponse;
exports.MarkCallForFinishingParameters = MarkCallForFinishingParameters;
exports.RequestContactDataParameters = RequestContactDataParameters;
exports.RequestContactDataResponse = RequestContactDataResponse;
exports.Contact = Contact;
exports.UpdateStageParameters = UpdateStageParameters;
exports.AllocateAgentsParameters = AllocateAgentsParameters;
