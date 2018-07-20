/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');
var Messaging = require('./Messaging');

var ValidationErrorType = (function(){
    var instanceCache = {};
    function ValidationErrorType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:validationErrorType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ValidationErrorType, _util.EnumValue);

    Object.defineProperties(ValidationErrorType, {
        'UnknownValidator': { value: new ValidationErrorType(0, 'UnknownValidator'), enumerable: true },
        'UniqueInstanceId': { value: new ValidationErrorType(1, 'UniqueInstanceId'), enumerable: true },
        'ExistingInstanceId': { value: new ValidationErrorType(2, 'ExistingInstanceId'), enumerable: true },
        'ExistingAttributeValue': { value: new ValidationErrorType(3, 'ExistingAttributeValue'), enumerable: true },
        'RequiredValue': { value: new ValidationErrorType(4, 'RequiredValue'), enumerable: true },
        'Range': { value: new ValidationErrorType(5, 'Range'), enumerable: true },
        'StringLength': { value: new ValidationErrorType(6, 'StringLength'), enumerable: true },
        'Regex': { value: new ValidationErrorType(7, 'Regex'), enumerable: true },
        'ValidValues': { value: new ValidationErrorType(9, 'ValidValues'), enumerable: true },
        'CollectionCount': { value: new ValidationErrorType(10, 'CollectionCount'), enumerable: true },
        'CollectionItemValidator': { value: new ValidationErrorType(11, 'CollectionItemValidator'), enumerable: true },
        'ValidatorGroup': { value: new ValidationErrorType(12, 'ValidatorGroup'), enumerable: true },
        'ValidFormat': { value: new ValidationErrorType(13, 'ValidFormat'), enumerable: true },
        'UniqueAttributeValue': { value: new ValidationErrorType(14, 'UniqueAttributeValue'), enumerable: true },
        'RequiredAttribute': { value: new ValidationErrorType(15, 'RequiredAttribute'), enumerable: true },
        'AcgTreeValidator': { value: new ValidationErrorType(16, 'AcgTreeValidator'), enumerable: true },
        'PronunciationValidator': { value: new ValidationErrorType(17, 'PronunciationValidator'), enumerable: true },
        'WordValidator': { value: new ValidationErrorType(18, 'WordValidator'), enumerable: true },
        'RangeFloat': { value: new ValidationErrorType(19, 'RangeFloat'), enumerable: true },
        'ExistingAttendantProfile': { value: new ValidationErrorType(20, 'ExistingAttendantProfile'), enumerable: true },
        'Extension': { value: new ValidationErrorType(21, 'Extension'), enumerable: true },
        'WorkstationsSharedAppearanceID': { value: new ValidationErrorType(22, 'WorkstationsSharedAppearanceID'), enumerable: true },
        'MultipleOf': { value: new ValidationErrorType(23, 'MultipleOf'), enumerable: true },
        'InvalidCharacters': { value: new ValidationErrorType(24, 'InvalidCharacters'), enumerable: true },
        'ExistingExtension': { value: new ValidationErrorType(25, 'ExistingExtension'), enumerable: true },
        'ExistingInstanceIdWithAttributeValue': { value: new ValidationErrorType(26, 'ExistingInstanceIdWithAttributeValue'), enumerable: true },
        'CharacterDelimitedValue': { value: new ValidationErrorType(27, 'CharacterDelimitedValue'), enumerable: true },
        'AnalyzerKeywordCount': { value: new ValidationErrorType(28, 'AnalyzerKeywordCount'), enumerable: true },
        'WorkgroupAnalyzerKeywordCount': { value: new ValidationErrorType(29, 'WorkgroupAnalyzerKeywordCount'), enumerable: true },
        'EndDateTimeValidator': { value: new ValidationErrorType(30, 'EndDateTimeValidator'), enumerable: true },
        'PropertyNotApplicable': { value: new ValidationErrorType(31, 'PropertyNotApplicable'), enumerable: true },
        'InvalidMailboxFolder': { value: new ValidationErrorType(32, 'InvalidMailboxFolder'), enumerable: true },
        'UnsupportedManufacturer': { value: new ValidationErrorType(33, 'UnsupportedManufacturer'), enumerable: true },
        'UnsupportedModel': { value: new ValidationErrorType(34, 'UnsupportedModel'), enumerable: true },
        'AudioProtocol': { value: new ValidationErrorType(35, 'AudioProtocol'), enumerable: true },
        'RecorderPolicyAnalyzerKeywordCount': { value: new ValidationErrorType(36, 'RecorderPolicyAnalyzerKeywordCount'), enumerable: true },
        'ReferenceCount': { value: new ValidationErrorType(37, 'ReferenceCount'), enumerable: true },
        'WrapUpStatusTimeout': { value: new ValidationErrorType(38, 'WrapUpStatusTimeout'), enumerable: true },
        'AttributeExistence': { value: new ValidationErrorType(39, 'AttributeExistence'), enumerable: true },
        'OtherAttributeValue': { value: new ValidationErrorType(40, 'OtherAttributeValue'), enumerable: true },
        'NetworkAdapter': { value: new ValidationErrorType(41, 'NetworkAdapter'), enumerable: true },
        'IntegerComparisonValidator': { value: new ValidationErrorType(42, 'IntegerComparisonValidator'), enumerable: true },
        'TimeZoneValidator': { value: new ValidationErrorType(43, 'TimeZoneValidator'), enumerable: true },
        'ExistingLanguageValues': { value: new ValidationErrorType(44, 'ExistingLanguageValues'), enumerable: true },
        'CharacterDelimitedKVPairs': { value: new ValidationErrorType(45, 'CharacterDelimitedKVPairs'), enumerable: true },
        'ObjectValidationErrorMutuallyExclusive': { value: new ValidationErrorType(46, 'ObjectValidationErrorMutuallyExclusive'), enumerable: true }
    });

    Object.defineProperty(ValidationErrorType, '__type', { value: 'urn:inin.com:configuration:validationErrorType' });

    _typemap['urn:inin.com:configuration:validationErrorType'] = ValidationErrorType;

    return ValidationErrorType;
}());

var LicenseErrorType = (function(){
    var instanceCache = {};
    function LicenseErrorType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:licenseErrorType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LicenseErrorType, _util.EnumValue);

    Object.defineProperties(LicenseErrorType, {
        'SetOK': { value: new LicenseErrorType(0, 'SetOK'), enumerable: true },
        'SetWarningExceedsThreshold': { value: new LicenseErrorType(1, 'SetWarningExceedsThreshold'), enumerable: true },
        'SetErrorExceedsThreshold': { value: new LicenseErrorType(2, 'SetErrorExceedsThreshold'), enumerable: true },
        'SetWarningMissingQualifiers': { value: new LicenseErrorType(3, 'SetWarningMissingQualifiers'), enumerable: true }
    });

    Object.defineProperty(LicenseErrorType, '__type', { value: 'urn:inin.com:configuration:licenseErrorType' });

    _typemap['urn:inin.com:configuration:licenseErrorType'] = LicenseErrorType;

    return LicenseErrorType;
}());

var ObjectType = (function(){
    var instanceCache = {};
    function ObjectType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:objectType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ObjectType, _util.EnumValue);

    Object.defineProperties(ObjectType, {
        'None': { value: new ObjectType(0, 'None'), enumerable: true },
        'Acg': { value: new ObjectType(1, 'Acg'), enumerable: true },
        'Workgroup': { value: new ObjectType(2, 'Workgroup'), enumerable: true },
        'LineGroup': { value: new ObjectType(3, 'LineGroup'), enumerable: true },
        'FeedbackSurveyGroup': { value: new ObjectType(4, 'FeedbackSurveyGroup'), enumerable: true }
    });

    Object.defineProperty(ObjectType, '__type', { value: 'urn:inin.com:configuration:objectType' });

    _typemap['urn:inin.com:configuration:objectType'] = ObjectType;

    return ObjectType;
}());

var ConfigurationIdGrouping = (function(){
    var instanceCache = {};
    function ConfigurationIdGrouping(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:configurationIdGrouping' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ConfigurationIdGrouping, _util.EnumValue);

    Object.defineProperties(ConfigurationIdGrouping, {
        'All': { value: new ConfigurationIdGrouping(0, 'All'), enumerable: true },
        'Single': { value: new ConfigurationIdGrouping(1, 'Single'), enumerable: true },
        'Group': { value: new ConfigurationIdGrouping(2, 'Group'), enumerable: true }
    });

    Object.defineProperty(ConfigurationIdGrouping, '__type', { value: 'urn:inin.com:configuration:configurationIdGrouping' });

    _typemap['urn:inin.com:configuration:configurationIdGrouping'] = ConfigurationIdGrouping;

    return ConfigurationIdGrouping;
}());

var InheritedFromType = (function(){
    var instanceCache = {};
    function InheritedFromType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritedFromType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(InheritedFromType, _util.EnumValue);

    Object.defineProperties(InheritedFromType, {
        'None': { value: new InheritedFromType(0, 'None'), enumerable: true },
        'Workgroup': { value: new InheritedFromType(1, 'Workgroup'), enumerable: true },
        'Role': { value: new InheritedFromType(2, 'Role'), enumerable: true },
        'DefaultUser': { value: new InheritedFromType(3, 'DefaultUser'), enumerable: true },
        'ClientConfigurationTemplate': { value: new InheritedFromType(4, 'ClientConfigurationTemplate'), enumerable: true }
    });

    Object.defineProperty(InheritedFromType, '__type', { value: 'urn:inin.com:configuration:inheritedFromType' });

    _typemap['urn:inin.com:configuration:inheritedFromType'] = InheritedFromType;

    return InheritedFromType;
}());

var SecurityLevel = (function(){
    var instanceCache = {};
    function SecurityLevel(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:securityLevel' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(SecurityLevel, _util.EnumValue);

    Object.defineProperties(SecurityLevel, {
        'Minimal': { value: new SecurityLevel(0, 'Minimal'), enumerable: true },
        'EndToEdge': { value: new SecurityLevel(1, 'EndToEdge'), enumerable: true }
    });

    Object.defineProperty(SecurityLevel, '__type', { value: 'urn:inin.com:configuration:securityLevel' });

    _typemap['urn:inin.com:configuration:securityLevel'] = SecurityLevel;

    return SecurityLevel;
}());

var InteractionProcessAutomationLicenseType = (function(){
    var instanceCache = {};
    function InteractionProcessAutomationLicenseType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:interactionProcessAutomationLicenseType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(InteractionProcessAutomationLicenseType, _util.EnumValue);

    Object.defineProperties(InteractionProcessAutomationLicenseType, {
        'None': { value: new InteractionProcessAutomationLicenseType(0, 'None'), enumerable: true },
        'DirectRoutedWorkItems': { value: new InteractionProcessAutomationLicenseType(1, 'DirectRoutedWorkItems'), enumerable: true },
        'GroupRoutedWorkItems': { value: new InteractionProcessAutomationLicenseType(2, 'GroupRoutedWorkItems'), enumerable: true },
        'ProcessMonitor': { value: new InteractionProcessAutomationLicenseType(3, 'ProcessMonitor'), enumerable: true },
        'ProcessDesigner': { value: new InteractionProcessAutomationLicenseType(4, 'ProcessDesigner'), enumerable: true }
    });

    Object.defineProperty(InteractionProcessAutomationLicenseType, '__type', { value: 'urn:inin.com:configuration:interactionProcessAutomationLicenseType' });

    _typemap['urn:inin.com:configuration:interactionProcessAutomationLicenseType'] = InteractionProcessAutomationLicenseType;

    return InteractionProcessAutomationLicenseType;
}());

var MediaLevel = (function(){
    var instanceCache = {};
    function MediaLevel(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:mediaLevel' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(MediaLevel, _util.EnumValue);

    Object.defineProperties(MediaLevel, {
        'None': { value: new MediaLevel(0, 'None'), enumerable: true },
        'Media1': { value: new MediaLevel(1, 'Media1'), enumerable: true },
        'Media2': { value: new MediaLevel(2, 'Media2'), enumerable: true },
        'Media3': { value: new MediaLevel(3, 'Media3'), enumerable: true }
    });

    Object.defineProperty(MediaLevel, '__type', { value: 'urn:inin.com:configuration:mediaLevel' });

    _typemap['urn:inin.com:configuration:mediaLevel'] = MediaLevel;

    return MediaLevel;
}());

var MediaType = (function(){
    var instanceCache = {};
    function MediaType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:mediaType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(MediaType, _util.EnumValue);

    Object.defineProperties(MediaType, {
        'Invalid': { value: new MediaType(0, 'Invalid'), enumerable: true },
        'Call': { value: new MediaType(1, 'Call'), enumerable: true },
        'Chat': { value: new MediaType(2, 'Chat'), enumerable: true },
        'Email': { value: new MediaType(3, 'Email'), enumerable: true },
        'Generic': { value: new MediaType(4, 'Generic'), enumerable: true },
        'Callback': { value: new MediaType(5, 'Callback'), enumerable: true },
        'WorkItem': { value: new MediaType(6, 'WorkItem'), enumerable: true },
        'SocialDirectMessage': { value: new MediaType(7, 'SocialDirectMessage'), enumerable: true },
        'SocialConversation': { value: new MediaType(8, 'SocialConversation'), enumerable: true }
    });

    Object.defineProperty(MediaType, '__type', { value: 'urn:inin.com:configuration:mediaType' });

    _typemap['urn:inin.com:configuration:mediaType'] = MediaType;

    return MediaType;
}());

var LicenseAllocationType = (function(){
    var instanceCache = {};
    function LicenseAllocationType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:licenseAllocationType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LicenseAllocationType, _util.EnumValue);

    Object.defineProperties(LicenseAllocationType, {
        'Assignable': { value: new LicenseAllocationType(0, 'Assignable'), enumerable: true },
        'Concurrent': { value: new LicenseAllocationType(1, 'Concurrent'), enumerable: true }
    });

    Object.defineProperty(LicenseAllocationType, '__type', { value: 'urn:inin.com:configuration:licenseAllocationType' });

    _typemap['urn:inin.com:configuration:licenseAllocationType'] = LicenseAllocationType;

    return LicenseAllocationType;
}());

var MailboxType = (function(){
    var instanceCache = {};
    function MailboxType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:mailboxType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(MailboxType, _util.EnumValue);

    Object.defineProperties(MailboxType, {
        'None': { value: new MailboxType(0, 'None'), enumerable: true },
        'InteractionMessageStore': { value: new MailboxType(1, 'InteractionMessageStore'), enumerable: true },
        'ImapSmtp': { value: new MailboxType(2, 'ImapSmtp'), enumerable: true },
        'GenericProvider': { value: new MailboxType(3, 'GenericProvider'), enumerable: true }
    });

    Object.defineProperty(MailboxType, '__type', { value: 'urn:inin.com:configuration:mailboxType' });

    _typemap['urn:inin.com:configuration:mailboxType'] = MailboxType;

    return MailboxType;
}());

var AudioProtocol = (function(){
    var instanceCache = {};
    function AudioProtocol(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:audioProtocol' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(AudioProtocol, _util.EnumValue);

    Object.defineProperties(AudioProtocol, {
        'Rtp': { value: new AudioProtocol(0, 'Rtp'), enumerable: true },
        'Srtp': { value: new AudioProtocol(1, 'Srtp'), enumerable: true }
    });

    Object.defineProperty(AudioProtocol, '__type', { value: 'urn:inin.com:configuration:audioProtocol' });

    _typemap['urn:inin.com:configuration:audioProtocol'] = AudioProtocol;

    return AudioProtocol;
}());

var AudioPath = (function(){
    var instanceCache = {};
    function AudioPath(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:audioPath' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(AudioPath, _util.EnumValue);

    Object.defineProperties(AudioPath, {
        'Dynamic': { value: new AudioPath(0, 'Dynamic'), enumerable: true },
        'AlwaysIn': { value: new AudioPath(1, 'AlwaysIn'), enumerable: true }
    });

    Object.defineProperty(AudioPath, '__type', { value: 'urn:inin.com:configuration:audioPath' });

    _typemap['urn:inin.com:configuration:audioPath'] = AudioPath;

    return AudioPath;
}());

var DtmfType = (function(){
    var instanceCache = {};
    function DtmfType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:dtmfType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DtmfType, _util.EnumValue);

    Object.defineProperties(DtmfType, {
        'Rfc2833': { value: new DtmfType(0, 'Rfc2833'), enumerable: true },
        'Rfc2833Only': { value: new DtmfType(1, 'Rfc2833Only'), enumerable: true },
        'Inband': { value: new DtmfType(2, 'Inband'), enumerable: true }
    });

    Object.defineProperty(DtmfType, '__type', { value: 'urn:inin.com:configuration:dtmfType' });

    _typemap['urn:inin.com:configuration:dtmfType'] = DtmfType;

    return DtmfType;
}());

var ValidationError = (function(){
    var hasProps = false;

    function ValidationError() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:validationError' });
        }

        ValidationError._super.constructor.apply(this, arguments);
    }
    _util.inherits(ValidationError, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ValidationError.prototype, 'validationErrorType', {
            get: function() { return this.__prop_validationErrorType; },
            set: function(value) {
                if (!(value instanceof ValidationErrorType)) {
                    try {
                        value = new ValidationErrorType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ValidationError.validationErrorType: ' + e.message);
                    }
                }

                this.__prop_validationErrorType = value;
            },
            enumerable: true
        });

        Object.defineProperty(ValidationError.prototype, 'propertyName', {
            get: function() { return this.__prop_propertyName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ValidationError.propertyName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_propertyName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ValidationError.prototype, 'propertyValue', {
            get: function() { return this.__prop_propertyValue; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ValidationError.propertyValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_propertyValue = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ValidationError, '__type', { value: 'urn:inin.com:configuration:validationError' });

    Object.defineProperty(ValidationError, '__propInfo', {
        get: function() {
            var pi = {
                'validationErrorType': { required: true, nullable: false },
                'propertyName': { required: true, nullable: false },
                'propertyValue': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:validationError'] = ValidationError;

    return ValidationError;
}());

var LicenseError = (function(){
    var hasProps = false;

    function LicenseError() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:licenseError' });
        }

        LicenseError._super.constructor.apply(this, arguments);
    }
    _util.inherits(LicenseError, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LicenseError.prototype, 'licenseErrorType', {
            get: function() { return this.__prop_licenseErrorType; },
            set: function(value) {
                if (!(value instanceof LicenseErrorType)) {
                    try {
                        value = new LicenseErrorType(value);
                    } catch (e) {
                        throw new TypeError('Error setting LicenseError.licenseErrorType: ' + e.message);
                    }
                }

                this.__prop_licenseErrorType = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseError.prototype, 'license', {
            get: function() { return this.__prop_license; },
            set: function(value) {
                if (!(value instanceof ConfigurationId)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting LicenseError.license: ' + e.message);
                    }
                }

                this.__prop_license = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LicenseError, '__type', { value: 'urn:inin.com:configuration:licenseError' });

    Object.defineProperty(LicenseError, '__propInfo', {
        get: function() {
            var pi = {
                'licenseErrorType': { required: true, nullable: false },
                'license': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:licenseError'] = LicenseError;

    return LicenseError;
}());

var ConfigurationId = (function(){
    var hasProps = false;

    function ConfigurationId() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:configurationId' });
        }

        ConfigurationId._super.constructor.apply(this, arguments);
    }
    _util.inherits(ConfigurationId, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ConfigurationId.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConfigurationId.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConfigurationId.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ConfigurationId.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConfigurationId.prototype, 'uri', {
            get: function() { return this.__prop_uri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ConfigurationId.uri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_uri = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ConfigurationId, '__type', { value: 'urn:inin.com:configuration:configurationId' });

    Object.defineProperty(ConfigurationId, '__propInfo', {
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

    _typemap['urn:inin.com:configuration:configurationId'] = ConfigurationId;

    return ConfigurationId;
}());

var ExplicitReference = (function(){
    var hasProps = false;

    function ExplicitReference() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:explicitReference' });
        }

        ExplicitReference._super.constructor.apply(this, arguments);
    }
    _util.inherits(ExplicitReference, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ExplicitReference.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ExplicitReference.type, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        Object.defineProperty(ExplicitReference.prototype, 'references', {
            get: function() { return this.__prop_references; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ConfigurationId); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ExplicitReference.references: ' + e.message);
                    }
                }

                this.__prop_references = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ExplicitReference, '__type', { value: 'urn:inin.com:configuration:explicitReference' });

    Object.defineProperty(ExplicitReference, '__propInfo', {
        get: function() {
            var pi = {
                'type': { required: false, nullable: false },
                'references': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:explicitReference'] = ExplicitReference;

    return ExplicitReference;
}());

var CustomAttribute = (function(){
    var hasProps = false;

    function CustomAttribute() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:customAttribute' });
        }

        CustomAttribute._super.constructor.apply(this, arguments);
    }
    _util.inherits(CustomAttribute, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CustomAttribute.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CustomAttribute.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(CustomAttribute.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isString(value) || value === null)) {
                    throw new TypeError('Expected type String for CustomAttribute.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CustomAttribute, '__type', { value: 'urn:inin.com:configuration:customAttribute' });

    Object.defineProperty(CustomAttribute, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'value': { required: true, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:customAttribute'] = CustomAttribute;

    return CustomAttribute;
}());

var MultiLanguageString = (function(){
    var hasProps = false;

    function MultiLanguageString() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:multiLanguageString' });
        }

        MultiLanguageString._super.constructor.apply(this, arguments);
    }
    _util.inherits(MultiLanguageString, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MultiLanguageString.prototype, 'defaultValue', {
            get: function() { return this.__prop_defaultValue; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for MultiLanguageString.defaultValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_defaultValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(MultiLanguageString.prototype, 'multiLanguageValues', {
            get: function() { return this.__prop_multiLanguageValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MultiLanguageValue); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new MultiLanguageValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MultiLanguageString.multiLanguageValues: ' + e.message);
                    }
                }

                this.__prop_multiLanguageValues = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MultiLanguageString, '__type', { value: 'urn:inin.com:configuration:multiLanguageString' });

    Object.defineProperty(MultiLanguageString, '__propInfo', {
        get: function() {
            var pi = {
                'defaultValue': { required: false, nullable: false },
                'multiLanguageValues': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:multiLanguageString'] = MultiLanguageString;

    return MultiLanguageString;
}());

var MultiLanguageValue = (function(){
    var hasProps = false;

    function MultiLanguageValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:multiLanguageValue' });
        }

        MultiLanguageValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(MultiLanguageValue, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MultiLanguageValue.prototype, 'language', {
            get: function() { return this.__prop_language; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for MultiLanguageValue.language, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_language = value;
            },
            enumerable: true
        });

        Object.defineProperty(MultiLanguageValue.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for MultiLanguageValue.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MultiLanguageValue, '__type', { value: 'urn:inin.com:configuration:multiLanguageValue' });

    Object.defineProperty(MultiLanguageValue, '__propInfo', {
        get: function() {
            var pi = {
                'language': { required: true, nullable: false },
                'value': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:multiLanguageValue'] = MultiLanguageValue;

    return MultiLanguageValue;
}());

var InheritableGroupedConfigurationIdCollection = (function(){
    var hasProps = false;

    function InheritableGroupedConfigurationIdCollection() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritableGroupedConfigurationIdCollection' });
        }

        InheritableGroupedConfigurationIdCollection._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritableGroupedConfigurationIdCollection, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritableGroupedConfigurationIdCollection.prototype, 'actualValue', {
            get: function() { return this.__prop_actualValue; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof GroupedConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new GroupedConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritableGroupedConfigurationIdCollection.actualValue: ' + e.message);
                    }
                }

                this.__prop_actualValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableGroupedConfigurationIdCollection.prototype, 'effectiveValue', {
            get: function() { return this.__prop_effectiveValue; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof GroupedConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new GroupedConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritableGroupedConfigurationIdCollection.effectiveValue: ' + e.message);
                    }
                }

                this.__prop_effectiveValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableGroupedConfigurationIdCollection.prototype, 'inheritedValue', {
            get: function() { return this.__prop_inheritedValue; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof GroupedConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new GroupedConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritableGroupedConfigurationIdCollection.inheritedValue: ' + e.message);
                    }
                }

                this.__prop_inheritedValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableGroupedConfigurationIdCollection.prototype, 'inheritedFrom', {
            get: function() { return this.__prop_inheritedFrom; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InheritedGroupedConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new InheritedGroupedConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritableGroupedConfigurationIdCollection.inheritedFrom: ' + e.message);
                    }
                }

                this.__prop_inheritedFrom = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritableGroupedConfigurationIdCollection, '__type', { value: 'urn:inin.com:configuration:inheritableGroupedConfigurationIdCollection' });

    Object.defineProperty(InheritableGroupedConfigurationIdCollection, '__propInfo', {
        get: function() {
            var pi = {
                'actualValue': { required: false, nullable: true },
                'effectiveValue': { required: false, nullable: true },
                'inheritedValue': { required: false, nullable: true },
                'inheritedFrom': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritableGroupedConfigurationIdCollection'] = InheritableGroupedConfigurationIdCollection;

    return InheritableGroupedConfigurationIdCollection;
}());

var GroupedConfigurationId = (function(){
    var hasProps = false;

    function GroupedConfigurationId() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:groupedConfigurationId' });
        }

        GroupedConfigurationId._super.constructor.apply(this, arguments);
    }
    _util.inherits(GroupedConfigurationId, _util.DataContract);

    function defineProps() {
        Object.defineProperty(GroupedConfigurationId.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for GroupedConfigurationId.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(GroupedConfigurationId.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for GroupedConfigurationId.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(GroupedConfigurationId.prototype, 'uri', {
            get: function() { return this.__prop_uri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for GroupedConfigurationId.uri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_uri = value;
            },
            enumerable: true
        });

        Object.defineProperty(GroupedConfigurationId.prototype, 'objectType', {
            get: function() { return this.__prop_objectType; },
            set: function(value) {
                if (!(value instanceof ObjectType)) {
                    try {
                        value = new ObjectType(value);
                    } catch (e) {
                        throw new TypeError('Error setting GroupedConfigurationId.objectType: ' + e.message);
                    }
                }

                this.__prop_objectType = value;
            },
            enumerable: true
        });

        Object.defineProperty(GroupedConfigurationId.prototype, 'grouping', {
            get: function() { return this.__prop_grouping; },
            set: function(value) {
                if (!(value instanceof ConfigurationIdGrouping)) {
                    try {
                        value = new ConfigurationIdGrouping(value);
                    } catch (e) {
                        throw new TypeError('Error setting GroupedConfigurationId.grouping: ' + e.message);
                    }
                }

                this.__prop_grouping = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(GroupedConfigurationId, '__type', { value: 'urn:inin.com:configuration:groupedConfigurationId' });

    Object.defineProperty(GroupedConfigurationId, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: false, nullable: true },
                'displayName': { required: false, nullable: true },
                'uri': { required: false, nullable: true },
                'objectType': { required: true, nullable: false },
                'grouping': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:groupedConfigurationId'] = GroupedConfigurationId;

    return GroupedConfigurationId;
}());

var InheritedGroupedConfigurationId = (function(){
    var hasProps = false;

    function InheritedGroupedConfigurationId() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritedGroupedConfigurationId' });
        }

        InheritedGroupedConfigurationId._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritedGroupedConfigurationId, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritedGroupedConfigurationId.prototype, 'from', {
            get: function() { return this.__prop_from; },
            set: function(value) {
                if (!(value instanceof ConfigurationId)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedGroupedConfigurationId.from: ' + e.message);
                    }
                }

                this.__prop_from = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedGroupedConfigurationId.prototype, 'objectType', {
            get: function() { return this.__prop_objectType; },
            set: function(value) {
                if (!(value instanceof InheritedFromType)) {
                    try {
                        value = new InheritedFromType(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedGroupedConfigurationId.objectType: ' + e.message);
                    }
                }

                this.__prop_objectType = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedGroupedConfigurationId.prototype, 'values', {
            get: function() { return this.__prop_values; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof GroupedConfigurationId); }))) {
                    try {
                        value = value.map(function(item){ return new GroupedConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritedGroupedConfigurationId.values: ' + e.message);
                    }
                }

                this.__prop_values = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritedGroupedConfigurationId, '__type', { value: 'urn:inin.com:configuration:inheritedGroupedConfigurationId' });

    Object.defineProperty(InheritedGroupedConfigurationId, '__propInfo', {
        get: function() {
            var pi = {
                'from': { required: true, nullable: false },
                'objectType': { required: true, nullable: false },
                'values': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritedGroupedConfigurationId'] = InheritedGroupedConfigurationId;

    return InheritedGroupedConfigurationId;
}());

var InheritableBooleanProperty = (function(){
    var hasProps = false;

    function InheritableBooleanProperty() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritableBooleanProperty' });
        }

        InheritableBooleanProperty._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritableBooleanProperty, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritableBooleanProperty.prototype, 'actualValue', {
            get: function() { return this.__prop_actualValue; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for InheritableBooleanProperty.actualValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_actualValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableBooleanProperty.prototype, 'effectiveValue', {
            get: function() { return this.__prop_effectiveValue; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for InheritableBooleanProperty.effectiveValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_effectiveValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableBooleanProperty.prototype, 'inheritedValue', {
            get: function() { return this.__prop_inheritedValue; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for InheritableBooleanProperty.inheritedValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_inheritedValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableBooleanProperty.prototype, 'inheritedFrom', {
            get: function() { return this.__prop_inheritedFrom; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InheritedBooleanValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new InheritedBooleanValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritableBooleanProperty.inheritedFrom: ' + e.message);
                    }
                }

                this.__prop_inheritedFrom = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritableBooleanProperty, '__type', { value: 'urn:inin.com:configuration:inheritableBooleanProperty' });

    Object.defineProperty(InheritableBooleanProperty, '__propInfo', {
        get: function() {
            var pi = {
                'actualValue': { required: false, nullable: true },
                'effectiveValue': { required: false, nullable: true },
                'inheritedValue': { required: false, nullable: true },
                'inheritedFrom': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritableBooleanProperty'] = InheritableBooleanProperty;

    return InheritableBooleanProperty;
}());

var InheritedBooleanValue = (function(){
    var hasProps = false;

    function InheritedBooleanValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritedBooleanValue' });
        }

        InheritedBooleanValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritedBooleanValue, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritedBooleanValue.prototype, 'from', {
            get: function() { return this.__prop_from; },
            set: function(value) {
                if (!(value instanceof ConfigurationId)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedBooleanValue.from: ' + e.message);
                    }
                }

                this.__prop_from = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedBooleanValue.prototype, 'objectType', {
            get: function() { return this.__prop_objectType; },
            set: function(value) {
                if (!(value instanceof InheritedFromType)) {
                    try {
                        value = new InheritedFromType(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedBooleanValue.objectType: ' + e.message);
                    }
                }

                this.__prop_objectType = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedBooleanValue.prototype, 'values', {
            get: function() { return this.__prop_values; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for InheritedBooleanValue.values, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_values = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritedBooleanValue, '__type', { value: 'urn:inin.com:configuration:inheritedBooleanValue' });

    Object.defineProperty(InheritedBooleanValue, '__propInfo', {
        get: function() {
            var pi = {
                'from': { required: true, nullable: false },
                'objectType': { required: true, nullable: false },
                'values': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritedBooleanValue'] = InheritedBooleanValue;

    return InheritedBooleanValue;
}());

var SkillSetting = (function(){
    var hasProps = false;

    function SkillSetting() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:skillSetting' });
        }

        SkillSetting._super.constructor.apply(this, arguments);
    }
    _util.inherits(SkillSetting, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SkillSetting.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(value instanceof ConfigurationId)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SkillSetting.id: ' + e.message);
                    }
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillSetting.prototype, 'proficiency', {
            get: function() { return this.__prop_proficiency; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for SkillSetting.proficiency, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_proficiency = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillSetting.prototype, 'desireToUse', {
            get: function() { return this.__prop_desireToUse; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for SkillSetting.desireToUse, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_desireToUse = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SkillSetting, '__type', { value: 'urn:inin.com:configuration:skillSetting' });

    Object.defineProperty(SkillSetting, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'proficiency': { required: true, nullable: false },
                'desireToUse': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:skillSetting'] = SkillSetting;

    return SkillSetting;
}());

var InheritableConfigurationId = (function(){
    var hasProps = false;

    function InheritableConfigurationId() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritableConfigurationId' });
        }

        InheritableConfigurationId._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritableConfigurationId, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritableConfigurationId.prototype, 'actualValue', {
            get: function() { return this.__prop_actualValue; },
            set: function(value) {
                if (!(value instanceof ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritableConfigurationId.actualValue: ' + e.message);
                    }
                }

                this.__prop_actualValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableConfigurationId.prototype, 'effectiveValue', {
            get: function() { return this.__prop_effectiveValue; },
            set: function(value) {
                if (!(value instanceof ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritableConfigurationId.effectiveValue: ' + e.message);
                    }
                }

                this.__prop_effectiveValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableConfigurationId.prototype, 'inheritedValue', {
            get: function() { return this.__prop_inheritedValue; },
            set: function(value) {
                if (!(value instanceof ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritableConfigurationId.inheritedValue: ' + e.message);
                    }
                }

                this.__prop_inheritedValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableConfigurationId.prototype, 'inheritedFrom', {
            get: function() { return this.__prop_inheritedFrom; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InheritedConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new InheritedConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritableConfigurationId.inheritedFrom: ' + e.message);
                    }
                }

                this.__prop_inheritedFrom = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritableConfigurationId, '__type', { value: 'urn:inin.com:configuration:inheritableConfigurationId' });

    Object.defineProperty(InheritableConfigurationId, '__propInfo', {
        get: function() {
            var pi = {
                'actualValue': { required: false, nullable: true },
                'effectiveValue': { required: false, nullable: true },
                'inheritedValue': { required: false, nullable: true },
                'inheritedFrom': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritableConfigurationId'] = InheritableConfigurationId;

    return InheritableConfigurationId;
}());

var InheritedConfigurationId = (function(){
    var hasProps = false;

    function InheritedConfigurationId() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritedConfigurationId' });
        }

        InheritedConfigurationId._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritedConfigurationId, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritedConfigurationId.prototype, 'from', {
            get: function() { return this.__prop_from; },
            set: function(value) {
                if (!(value instanceof ConfigurationId)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedConfigurationId.from: ' + e.message);
                    }
                }

                this.__prop_from = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedConfigurationId.prototype, 'objectType', {
            get: function() { return this.__prop_objectType; },
            set: function(value) {
                if (!(value instanceof InheritedFromType)) {
                    try {
                        value = new InheritedFromType(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedConfigurationId.objectType: ' + e.message);
                    }
                }

                this.__prop_objectType = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedConfigurationId.prototype, 'values', {
            get: function() { return this.__prop_values; },
            set: function(value) {
                if (!(value instanceof ConfigurationId)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedConfigurationId.values: ' + e.message);
                    }
                }

                this.__prop_values = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritedConfigurationId, '__type', { value: 'urn:inin.com:configuration:inheritedConfigurationId' });

    Object.defineProperty(InheritedConfigurationId, '__propInfo', {
        get: function() {
            var pi = {
                'from': { required: true, nullable: false },
                'objectType': { required: true, nullable: false },
                'values': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritedConfigurationId'] = InheritedConfigurationId;

    return InheritedConfigurationId;
}());

var StationLicenseProperties = (function(){
    var hasProps = false;

    function StationLicenseProperties() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:stationLicenseProperties' });
        }

        StationLicenseProperties._super.constructor.apply(this, arguments);
    }
    _util.inherits(StationLicenseProperties, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StationLicenseProperties.prototype, 'acdSocialMedia', {
            get: function() { return this.__prop_acdSocialMedia; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StationLicenseProperties.acdSocialMedia, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_acdSocialMedia = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationLicenseProperties.prototype, 'additionalLicenses', {
            get: function() { return this.__prop_additionalLicenses; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StationLicenseProperties.additionalLicenses: ' + e.message);
                    }
                }

                this.__prop_additionalLicenses = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationLicenseProperties.prototype, 'hasBasicStationLicense', {
            get: function() { return this.__prop_hasBasicStationLicense; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StationLicenseProperties.hasBasicStationLicense, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasBasicStationLicense = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationLicenseProperties.prototype, 'hasClientAccess', {
            get: function() { return this.__prop_hasClientAccess; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StationLicenseProperties.hasClientAccess, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasClientAccess = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationLicenseProperties.prototype, 'hasRecorderAccess', {
            get: function() { return this.__prop_hasRecorderAccess; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StationLicenseProperties.hasRecorderAccess, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasRecorderAccess = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationLicenseProperties.prototype, 'interactionProcessAutomationType', {
            get: function() { return this.__prop_interactionProcessAutomationType; },
            set: function(value) {
                if (!(value instanceof InteractionProcessAutomationLicenseType || value === void 0 || value === null)) {
                    try {
                        value = new InteractionProcessAutomationLicenseType(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationLicenseProperties.interactionProcessAutomationType: ' + e.message);
                    }
                }

                this.__prop_interactionProcessAutomationType = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationLicenseProperties.prototype, 'licenseActive', {
            get: function() { return this.__prop_licenseActive; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StationLicenseProperties.licenseActive, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_licenseActive = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationLicenseProperties.prototype, 'mediaLevel', {
            get: function() { return this.__prop_mediaLevel; },
            set: function(value) {
                if (!(value instanceof MediaLevel || value === void 0 || value === null)) {
                    try {
                        value = new MediaLevel(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationLicenseProperties.mediaLevel: ' + e.message);
                    }
                }

                this.__prop_mediaLevel = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationLicenseProperties.prototype, 'mediaTypes', {
            get: function() { return this.__prop_mediaTypes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MediaType); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new MediaType(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StationLicenseProperties.mediaTypes: ' + e.message);
                    }
                }

                this.__prop_mediaTypes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StationLicenseProperties, '__type', { value: 'urn:inin.com:configuration:stationLicenseProperties' });

    Object.defineProperty(StationLicenseProperties, '__propInfo', {
        get: function() {
            var pi = {
                'acdSocialMedia': { required: false, nullable: true },
                'additionalLicenses': { required: false, nullable: true },
                'hasBasicStationLicense': { required: false, nullable: true },
                'hasClientAccess': { required: false, nullable: true },
                'hasRecorderAccess': { required: false, nullable: true },
                'interactionProcessAutomationType': { required: false, nullable: true },
                'licenseActive': { required: false, nullable: true },
                'mediaLevel': { required: false, nullable: true },
                'mediaTypes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:stationLicenseProperties'] = StationLicenseProperties;

    return StationLicenseProperties;
}());

var InheritableDurationProperty = (function(){
    var hasProps = false;

    function InheritableDurationProperty() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritableDurationProperty' });
        }

        InheritableDurationProperty._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritableDurationProperty, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritableDurationProperty.prototype, 'actualValue', {
            get: function() { return this.__prop_actualValue; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for InheritableDurationProperty.actualValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_actualValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableDurationProperty.prototype, 'effectiveValue', {
            get: function() { return this.__prop_effectiveValue; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for InheritableDurationProperty.effectiveValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_effectiveValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableDurationProperty.prototype, 'inheritedValue', {
            get: function() { return this.__prop_inheritedValue; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for InheritableDurationProperty.inheritedValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_inheritedValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableDurationProperty.prototype, 'inheritedFrom', {
            get: function() { return this.__prop_inheritedFrom; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InheritedDuration); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new InheritedDuration(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritableDurationProperty.inheritedFrom: ' + e.message);
                    }
                }

                this.__prop_inheritedFrom = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritableDurationProperty, '__type', { value: 'urn:inin.com:configuration:inheritableDurationProperty' });

    Object.defineProperty(InheritableDurationProperty, '__propInfo', {
        get: function() {
            var pi = {
                'actualValue': { required: false, nullable: true },
                'effectiveValue': { required: false, nullable: true },
                'inheritedValue': { required: false, nullable: true },
                'inheritedFrom': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritableDurationProperty'] = InheritableDurationProperty;

    return InheritableDurationProperty;
}());

var InheritedDuration = (function(){
    var hasProps = false;

    function InheritedDuration() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritedDuration' });
        }

        InheritedDuration._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritedDuration, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritedDuration.prototype, 'from', {
            get: function() { return this.__prop_from; },
            set: function(value) {
                if (!(value instanceof ConfigurationId)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedDuration.from: ' + e.message);
                    }
                }

                this.__prop_from = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedDuration.prototype, 'objectType', {
            get: function() { return this.__prop_objectType; },
            set: function(value) {
                if (!(value instanceof InheritedFromType)) {
                    try {
                        value = new InheritedFromType(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedDuration.objectType: ' + e.message);
                    }
                }

                this.__prop_objectType = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedDuration.prototype, 'values', {
            get: function() { return this.__prop_values; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value))) {
                    throw new TypeError('Expected type _util.Duration for InheritedDuration.values, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_values = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritedDuration, '__type', { value: 'urn:inin.com:configuration:inheritedDuration' });

    Object.defineProperty(InheritedDuration, '__propInfo', {
        get: function() {
            var pi = {
                'from': { required: true, nullable: false },
                'objectType': { required: true, nullable: false },
                'values': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritedDuration'] = InheritedDuration;

    return InheritedDuration;
}());

var LicenseProperties = (function(){
    var hasProps = false;

    function LicenseProperties() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:licenseProperties' });
        }

        LicenseProperties._super.constructor.apply(this, arguments);
    }
    _util.inherits(LicenseProperties, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LicenseProperties.prototype, 'acdSocialMedia', {
            get: function() { return this.__prop_acdSocialMedia; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for LicenseProperties.acdSocialMedia, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_acdSocialMedia = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseProperties.prototype, 'additionalLicenses', {
            get: function() { return this.__prop_additionalLicenses; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LicenseProperties.additionalLicenses: ' + e.message);
                    }
                }

                this.__prop_additionalLicenses = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseProperties.prototype, 'allocationType', {
            get: function() { return this.__prop_allocationType; },
            set: function(value) {
                if (!(value instanceof LicenseAllocationType || value === void 0 || value === null)) {
                    try {
                        value = new LicenseAllocationType(value);
                    } catch (e) {
                        throw new TypeError('Error setting LicenseProperties.allocationType: ' + e.message);
                    }
                }

                this.__prop_allocationType = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseProperties.prototype, 'hasClientAccess', {
            get: function() { return this.__prop_hasClientAccess; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for LicenseProperties.hasClientAccess, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasClientAccess = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseProperties.prototype, 'interactionProcessAutomationType', {
            get: function() { return this.__prop_interactionProcessAutomationType; },
            set: function(value) {
                if (!(value instanceof InteractionProcessAutomationLicenseType || value === void 0 || value === null)) {
                    try {
                        value = new InteractionProcessAutomationLicenseType(value);
                    } catch (e) {
                        throw new TypeError('Error setting LicenseProperties.interactionProcessAutomationType: ' + e.message);
                    }
                }

                this.__prop_interactionProcessAutomationType = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseProperties.prototype, 'licenseActive', {
            get: function() { return this.__prop_licenseActive; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for LicenseProperties.licenseActive, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_licenseActive = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseProperties.prototype, 'mediaLevel', {
            get: function() { return this.__prop_mediaLevel; },
            set: function(value) {
                if (!(value instanceof MediaLevel || value === void 0 || value === null)) {
                    try {
                        value = new MediaLevel(value);
                    } catch (e) {
                        throw new TypeError('Error setting LicenseProperties.mediaLevel: ' + e.message);
                    }
                }

                this.__prop_mediaLevel = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseProperties.prototype, 'mediaTypes', {
            get: function() { return this.__prop_mediaTypes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MediaType); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new MediaType(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LicenseProperties.mediaTypes: ' + e.message);
                    }
                }

                this.__prop_mediaTypes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LicenseProperties, '__type', { value: 'urn:inin.com:configuration:licenseProperties' });

    Object.defineProperty(LicenseProperties, '__propInfo', {
        get: function() {
            var pi = {
                'acdSocialMedia': { required: false, nullable: true },
                'additionalLicenses': { required: false, nullable: true },
                'allocationType': { required: false, nullable: true },
                'hasClientAccess': { required: false, nullable: true },
                'interactionProcessAutomationType': { required: false, nullable: true },
                'licenseActive': { required: false, nullable: true },
                'mediaLevel': { required: false, nullable: true },
                'mediaTypes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:licenseProperties'] = LicenseProperties;

    return LicenseProperties;
}());

var MailboxProperties = (function(){
    var hasProps = false;

    function MailboxProperties() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:mailboxProperties' });
        }

        MailboxProperties._super.constructor.apply(this, arguments);
    }
    _util.inherits(MailboxProperties, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MailboxProperties.prototype, 'directoryMoniker', {
            get: function() { return this.__prop_directoryMoniker; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for MailboxProperties.directoryMoniker, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_directoryMoniker = value;
            },
            enumerable: true
        });

        Object.defineProperty(MailboxProperties.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for MailboxProperties.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(MailboxProperties.prototype, 'emailAddress', {
            get: function() { return this.__prop_emailAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for MailboxProperties.emailAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(MailboxProperties.prototype, 'mailboxMoniker', {
            get: function() { return this.__prop_mailboxMoniker; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for MailboxProperties.mailboxMoniker, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mailboxMoniker = value;
            },
            enumerable: true
        });

        Object.defineProperty(MailboxProperties.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(value instanceof MailboxType || value === void 0 || value === null)) {
                    try {
                        value = new MailboxType(value);
                    } catch (e) {
                        throw new TypeError('Error setting MailboxProperties.type: ' + e.message);
                    }
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MailboxProperties, '__type', { value: 'urn:inin.com:configuration:mailboxProperties' });

    Object.defineProperty(MailboxProperties, '__propInfo', {
        get: function() {
            var pi = {
                'directoryMoniker': { required: false, nullable: true },
                'displayName': { required: false, nullable: true },
                'emailAddress': { required: false, nullable: true },
                'mailboxMoniker': { required: false, nullable: true },
                'type': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:mailboxProperties'] = MailboxProperties;

    return MailboxProperties;
}());

var InheritableStringProperty = (function(){
    var hasProps = false;

    function InheritableStringProperty() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritableStringProperty' });
        }

        InheritableStringProperty._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritableStringProperty, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritableStringProperty.prototype, 'actualValue', {
            get: function() { return this.__prop_actualValue; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for InheritableStringProperty.actualValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_actualValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableStringProperty.prototype, 'effectiveValue', {
            get: function() { return this.__prop_effectiveValue; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for InheritableStringProperty.effectiveValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_effectiveValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableStringProperty.prototype, 'inheritedValue', {
            get: function() { return this.__prop_inheritedValue; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for InheritableStringProperty.inheritedValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_inheritedValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableStringProperty.prototype, 'inheritedFrom', {
            get: function() { return this.__prop_inheritedFrom; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InheritedString); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new InheritedString(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritableStringProperty.inheritedFrom: ' + e.message);
                    }
                }

                this.__prop_inheritedFrom = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritableStringProperty, '__type', { value: 'urn:inin.com:configuration:inheritableStringProperty' });

    Object.defineProperty(InheritableStringProperty, '__propInfo', {
        get: function() {
            var pi = {
                'actualValue': { required: false, nullable: true },
                'effectiveValue': { required: false, nullable: true },
                'inheritedValue': { required: false, nullable: true },
                'inheritedFrom': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritableStringProperty'] = InheritableStringProperty;

    return InheritableStringProperty;
}());

var InheritedString = (function(){
    var hasProps = false;

    function InheritedString() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritedString' });
        }

        InheritedString._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritedString, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritedString.prototype, 'from', {
            get: function() { return this.__prop_from; },
            set: function(value) {
                if (!(value instanceof ConfigurationId)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedString.from: ' + e.message);
                    }
                }

                this.__prop_from = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedString.prototype, 'objectType', {
            get: function() { return this.__prop_objectType; },
            set: function(value) {
                if (!(value instanceof InheritedFromType)) {
                    try {
                        value = new InheritedFromType(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedString.objectType: ' + e.message);
                    }
                }

                this.__prop_objectType = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedString.prototype, 'values', {
            get: function() { return this.__prop_values; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InheritedString.values, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_values = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritedString, '__type', { value: 'urn:inin.com:configuration:inheritedString' });

    Object.defineProperty(InheritedString, '__propInfo', {
        get: function() {
            var pi = {
                'from': { required: true, nullable: false },
                'objectType': { required: true, nullable: false },
                'values': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritedString'] = InheritedString;

    return InheritedString;
}());

var InheritableConfigurationIdCollection = (function(){
    var hasProps = false;

    function InheritableConfigurationIdCollection() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritableConfigurationIdCollection' });
        }

        InheritableConfigurationIdCollection._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritableConfigurationIdCollection, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritableConfigurationIdCollection.prototype, 'actualValue', {
            get: function() { return this.__prop_actualValue; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritableConfigurationIdCollection.actualValue: ' + e.message);
                    }
                }

                this.__prop_actualValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableConfigurationIdCollection.prototype, 'effectiveValue', {
            get: function() { return this.__prop_effectiveValue; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritableConfigurationIdCollection.effectiveValue: ' + e.message);
                    }
                }

                this.__prop_effectiveValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableConfigurationIdCollection.prototype, 'inheritedValue', {
            get: function() { return this.__prop_inheritedValue; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritableConfigurationIdCollection.inheritedValue: ' + e.message);
                    }
                }

                this.__prop_inheritedValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableConfigurationIdCollection.prototype, 'inheritedFrom', {
            get: function() { return this.__prop_inheritedFrom; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InheritedConfigurationIdArrayEntry); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new InheritedConfigurationIdArrayEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritableConfigurationIdCollection.inheritedFrom: ' + e.message);
                    }
                }

                this.__prop_inheritedFrom = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritableConfigurationIdCollection, '__type', { value: 'urn:inin.com:configuration:inheritableConfigurationIdCollection' });

    Object.defineProperty(InheritableConfigurationIdCollection, '__propInfo', {
        get: function() {
            var pi = {
                'actualValue': { required: false, nullable: true },
                'effectiveValue': { required: false, nullable: true },
                'inheritedValue': { required: false, nullable: true },
                'inheritedFrom': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritableConfigurationIdCollection'] = InheritableConfigurationIdCollection;

    return InheritableConfigurationIdCollection;
}());

var InheritedConfigurationIdArrayEntry = (function(){
    var hasProps = false;

    function InheritedConfigurationIdArrayEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritedConfigurationIdArrayEntry' });
        }

        InheritedConfigurationIdArrayEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritedConfigurationIdArrayEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritedConfigurationIdArrayEntry.prototype, 'from', {
            get: function() { return this.__prop_from; },
            set: function(value) {
                if (!(value instanceof ConfigurationId)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedConfigurationIdArrayEntry.from: ' + e.message);
                    }
                }

                this.__prop_from = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedConfigurationIdArrayEntry.prototype, 'objectType', {
            get: function() { return this.__prop_objectType; },
            set: function(value) {
                if (!(value instanceof InheritedFromType)) {
                    try {
                        value = new InheritedFromType(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedConfigurationIdArrayEntry.objectType: ' + e.message);
                    }
                }

                this.__prop_objectType = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedConfigurationIdArrayEntry.prototype, 'values', {
            get: function() { return this.__prop_values; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ConfigurationId); }))) {
                    try {
                        value = value.map(function(item){ return new ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritedConfigurationIdArrayEntry.values: ' + e.message);
                    }
                }

                this.__prop_values = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritedConfigurationIdArrayEntry, '__type', { value: 'urn:inin.com:configuration:inheritedConfigurationIdArrayEntry' });

    Object.defineProperty(InheritedConfigurationIdArrayEntry, '__propInfo', {
        get: function() {
            var pi = {
                'from': { required: true, nullable: false },
                'objectType': { required: true, nullable: false },
                'values': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritedConfigurationIdArrayEntry'] = InheritedConfigurationIdArrayEntry;

    return InheritedConfigurationIdArrayEntry;
}());

var BasicPhoneNumber = (function(){
    var hasProps = false;

    function BasicPhoneNumber() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:basicPhoneNumber' });
        }

        BasicPhoneNumber._super.constructor.apply(this, arguments);
    }
    _util.inherits(BasicPhoneNumber, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BasicPhoneNumber.prototype, 'number', {
            get: function() { return this.__prop_number; },
            set: function(value) {
                if (!(_util.isString(value) || value === null)) {
                    throw new TypeError('Expected type String for BasicPhoneNumber.number, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_number = value;
            },
            enumerable: true
        });

        Object.defineProperty(BasicPhoneNumber.prototype, 'extension', {
            get: function() { return this.__prop_extension; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for BasicPhoneNumber.extension, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_extension = value;
            },
            enumerable: true
        });

        Object.defineProperty(BasicPhoneNumber.prototype, 'dialExtensionAutomatically', {
            get: function() { return this.__prop_dialExtensionAutomatically; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for BasicPhoneNumber.dialExtensionAutomatically, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dialExtensionAutomatically = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BasicPhoneNumber, '__type', { value: 'urn:inin.com:configuration:basicPhoneNumber' });

    Object.defineProperty(BasicPhoneNumber, '__propInfo', {
        get: function() {
            var pi = {
                'number': { required: true, nullable: true },
                'extension': { required: false, nullable: true },
                'dialExtensionAutomatically': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:basicPhoneNumber'] = BasicPhoneNumber;

    return BasicPhoneNumber;
}());

var IdDisplayName = (function(){
    var hasProps = false;

    function IdDisplayName() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:idDisplayName' });
        }

        IdDisplayName._super.constructor.apply(this, arguments);
    }
    _util.inherits(IdDisplayName, _util.DataContract);

    function defineProps() {
        Object.defineProperty(IdDisplayName.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for IdDisplayName.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(IdDisplayName.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for IdDisplayName.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(IdDisplayName, '__type', { value: 'urn:inin.com:configuration:idDisplayName' });

    Object.defineProperty(IdDisplayName, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'displayName': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:idDisplayName'] = IdDisplayName;

    return IdDisplayName;
}());

var SkillSettingsProperties = (function(){
    var hasProps = false;

    function SkillSettingsProperties() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:skillSettingsProperties' });
        }

        SkillSettingsProperties._super.constructor.apply(this, arguments);
    }
    _util.inherits(SkillSettingsProperties, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SkillSettingsProperties.prototype, 'actualValue', {
            get: function() { return this.__prop_actualValue; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SkillSetting); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SkillSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SkillSettingsProperties.actualValue: ' + e.message);
                    }
                }

                this.__prop_actualValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillSettingsProperties.prototype, 'effectiveValue', {
            get: function() { return this.__prop_effectiveValue; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SkillSetting); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SkillSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SkillSettingsProperties.effectiveValue: ' + e.message);
                    }
                }

                this.__prop_effectiveValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillSettingsProperties.prototype, 'inheritedValue', {
            get: function() { return this.__prop_inheritedValue; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SkillSetting); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SkillSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SkillSettingsProperties.inheritedValue: ' + e.message);
                    }
                }

                this.__prop_inheritedValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillSettingsProperties.prototype, 'inheritedFrom', {
            get: function() { return this.__prop_inheritedFrom; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InheritedSkillSetting); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new InheritedSkillSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SkillSettingsProperties.inheritedFrom: ' + e.message);
                    }
                }

                this.__prop_inheritedFrom = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SkillSettingsProperties, '__type', { value: 'urn:inin.com:configuration:skillSettingsProperties' });

    Object.defineProperty(SkillSettingsProperties, '__propInfo', {
        get: function() {
            var pi = {
                'actualValue': { required: false, nullable: true },
                'effectiveValue': { required: false, nullable: true },
                'inheritedValue': { required: false, nullable: true },
                'inheritedFrom': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:skillSettingsProperties'] = SkillSettingsProperties;

    return SkillSettingsProperties;
}());

var InheritedSkillSetting = (function(){
    var hasProps = false;

    function InheritedSkillSetting() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritedSkillSetting' });
        }

        InheritedSkillSetting._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritedSkillSetting, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritedSkillSetting.prototype, 'from', {
            get: function() { return this.__prop_from; },
            set: function(value) {
                if (!(value instanceof ConfigurationId)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedSkillSetting.from: ' + e.message);
                    }
                }

                this.__prop_from = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedSkillSetting.prototype, 'objectType', {
            get: function() { return this.__prop_objectType; },
            set: function(value) {
                if (!(value instanceof InheritedFromType)) {
                    try {
                        value = new InheritedFromType(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedSkillSetting.objectType: ' + e.message);
                    }
                }

                this.__prop_objectType = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedSkillSetting.prototype, 'values', {
            get: function() { return this.__prop_values; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SkillSetting); }))) {
                    try {
                        value = value.map(function(item){ return new SkillSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritedSkillSetting.values: ' + e.message);
                    }
                }

                this.__prop_values = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritedSkillSetting, '__type', { value: 'urn:inin.com:configuration:inheritedSkillSetting' });

    Object.defineProperty(InheritedSkillSetting, '__propInfo', {
        get: function() {
            var pi = {
                'from': { required: true, nullable: false },
                'objectType': { required: true, nullable: false },
                'values': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritedSkillSetting'] = InheritedSkillSetting;

    return InheritedSkillSetting;
}());

var InheritableIntProperty = (function(){
    var hasProps = false;

    function InheritableIntProperty() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritableIntProperty' });
        }

        InheritableIntProperty._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritableIntProperty, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritableIntProperty.prototype, 'actualValue', {
            get: function() { return this.__prop_actualValue; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for InheritableIntProperty.actualValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_actualValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableIntProperty.prototype, 'effectiveValue', {
            get: function() { return this.__prop_effectiveValue; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for InheritableIntProperty.effectiveValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_effectiveValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableIntProperty.prototype, 'inheritedValue', {
            get: function() { return this.__prop_inheritedValue; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for InheritableIntProperty.inheritedValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_inheritedValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritableIntProperty.prototype, 'inheritedFrom', {
            get: function() { return this.__prop_inheritedFrom; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InheritedInt); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new InheritedInt(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritableIntProperty.inheritedFrom: ' + e.message);
                    }
                }

                this.__prop_inheritedFrom = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritableIntProperty, '__type', { value: 'urn:inin.com:configuration:inheritableIntProperty' });

    Object.defineProperty(InheritableIntProperty, '__propInfo', {
        get: function() {
            var pi = {
                'actualValue': { required: false, nullable: true },
                'effectiveValue': { required: false, nullable: true },
                'inheritedValue': { required: false, nullable: true },
                'inheritedFrom': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritableIntProperty'] = InheritableIntProperty;

    return InheritableIntProperty;
}());

var InheritedInt = (function(){
    var hasProps = false;

    function InheritedInt() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritedInt' });
        }

        InheritedInt._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritedInt, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritedInt.prototype, 'from', {
            get: function() { return this.__prop_from; },
            set: function(value) {
                if (!(value instanceof ConfigurationId)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedInt.from: ' + e.message);
                    }
                }

                this.__prop_from = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedInt.prototype, 'objectType', {
            get: function() { return this.__prop_objectType; },
            set: function(value) {
                if (!(value instanceof InheritedFromType)) {
                    try {
                        value = new InheritedFromType(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedInt.objectType: ' + e.message);
                    }
                }

                this.__prop_objectType = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedInt.prototype, 'values', {
            get: function() { return this.__prop_values; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for InheritedInt.values, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_values = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritedInt, '__type', { value: 'urn:inin.com:configuration:inheritedInt' });

    Object.defineProperty(InheritedInt, '__propInfo', {
        get: function() {
            var pi = {
                'from': { required: true, nullable: false },
                'objectType': { required: true, nullable: false },
                'values': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritedInt'] = InheritedInt;

    return InheritedInt;
}());

var UtilizationSettingsProperties = (function(){
    var hasProps = false;

    function UtilizationSettingsProperties() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:utilizationSettingsProperties' });
        }

        UtilizationSettingsProperties._super.constructor.apply(this, arguments);
    }
    _util.inherits(UtilizationSettingsProperties, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UtilizationSettingsProperties.prototype, 'actualValue', {
            get: function() { return this.__prop_actualValue; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof UtilizationSetting); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new UtilizationSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UtilizationSettingsProperties.actualValue: ' + e.message);
                    }
                }

                this.__prop_actualValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(UtilizationSettingsProperties.prototype, 'effectiveValue', {
            get: function() { return this.__prop_effectiveValue; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof UtilizationSetting); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new UtilizationSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UtilizationSettingsProperties.effectiveValue: ' + e.message);
                    }
                }

                this.__prop_effectiveValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(UtilizationSettingsProperties.prototype, 'inheritedValue', {
            get: function() { return this.__prop_inheritedValue; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof UtilizationSetting); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new UtilizationSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UtilizationSettingsProperties.inheritedValue: ' + e.message);
                    }
                }

                this.__prop_inheritedValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(UtilizationSettingsProperties.prototype, 'inheritedFrom', {
            get: function() { return this.__prop_inheritedFrom; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InheritedUtilizationSetting); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new InheritedUtilizationSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UtilizationSettingsProperties.inheritedFrom: ' + e.message);
                    }
                }

                this.__prop_inheritedFrom = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UtilizationSettingsProperties, '__type', { value: 'urn:inin.com:configuration:utilizationSettingsProperties' });

    Object.defineProperty(UtilizationSettingsProperties, '__propInfo', {
        get: function() {
            var pi = {
                'actualValue': { required: false, nullable: true },
                'effectiveValue': { required: false, nullable: true },
                'inheritedValue': { required: false, nullable: true },
                'inheritedFrom': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:utilizationSettingsProperties'] = UtilizationSettingsProperties;

    return UtilizationSettingsProperties;
}());

var UtilizationSetting = (function(){
    var hasProps = false;

    function UtilizationSetting() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:utilizationSetting' });
        }

        UtilizationSetting._super.constructor.apply(this, arguments);
    }
    _util.inherits(UtilizationSetting, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UtilizationSetting.prototype, 'mediaType', {
            get: function() { return this.__prop_mediaType; },
            set: function(value) {
                if (!(value instanceof MediaType)) {
                    try {
                        value = new MediaType(value);
                    } catch (e) {
                        throw new TypeError('Error setting UtilizationSetting.mediaType: ' + e.message);
                    }
                }

                this.__prop_mediaType = value;
            },
            enumerable: true
        });

        Object.defineProperty(UtilizationSetting.prototype, 'utilization', {
            get: function() { return this.__prop_utilization; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for UtilizationSetting.utilization, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_utilization = value;
            },
            enumerable: true
        });

        Object.defineProperty(UtilizationSetting.prototype, 'maxAssignable', {
            get: function() { return this.__prop_maxAssignable; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for UtilizationSetting.maxAssignable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxAssignable = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UtilizationSetting, '__type', { value: 'urn:inin.com:configuration:utilizationSetting' });

    Object.defineProperty(UtilizationSetting, '__propInfo', {
        get: function() {
            var pi = {
                'mediaType': { required: true, nullable: false },
                'utilization': { required: true, nullable: false },
                'maxAssignable': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:utilizationSetting'] = UtilizationSetting;

    return UtilizationSetting;
}());

var InheritedUtilizationSetting = (function(){
    var hasProps = false;

    function InheritedUtilizationSetting() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:inheritedUtilizationSetting' });
        }

        InheritedUtilizationSetting._super.constructor.apply(this, arguments);
    }
    _util.inherits(InheritedUtilizationSetting, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InheritedUtilizationSetting.prototype, 'from', {
            get: function() { return this.__prop_from; },
            set: function(value) {
                if (!(value instanceof ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedUtilizationSetting.from: ' + e.message);
                    }
                }

                this.__prop_from = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedUtilizationSetting.prototype, 'objectType', {
            get: function() { return this.__prop_objectType; },
            set: function(value) {
                if (!(value instanceof InheritedFromType || value === void 0 || value === null)) {
                    try {
                        value = new InheritedFromType(value);
                    } catch (e) {
                        throw new TypeError('Error setting InheritedUtilizationSetting.objectType: ' + e.message);
                    }
                }

                this.__prop_objectType = value;
            },
            enumerable: true
        });

        Object.defineProperty(InheritedUtilizationSetting.prototype, 'values', {
            get: function() { return this.__prop_values; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof UtilizationSetting); }) || value === null)) {
                    try {
                        value = value.map(function(item){ return new UtilizationSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InheritedUtilizationSetting.values: ' + e.message);
                    }
                }

                this.__prop_values = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InheritedUtilizationSetting, '__type', { value: 'urn:inin.com:configuration:inheritedUtilizationSetting' });

    Object.defineProperty(InheritedUtilizationSetting, '__propInfo', {
        get: function() {
            var pi = {
                'from': { required: false, nullable: true },
                'objectType': { required: false, nullable: true },
                'values': { required: true, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:inheritedUtilizationSetting'] = InheritedUtilizationSetting;

    return InheritedUtilizationSetting;
}());

var WorkgroupMailboxProperties = (function(){
    var hasProps = false;

    function WorkgroupMailboxProperties() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:workgroupMailboxProperties' });
        }

        WorkgroupMailboxProperties._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupMailboxProperties, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WorkgroupMailboxProperties.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for WorkgroupMailboxProperties.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(WorkgroupMailboxProperties.prototype, 'emailAddress', {
            get: function() { return this.__prop_emailAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for WorkgroupMailboxProperties.emailAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(WorkgroupMailboxProperties.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(value instanceof MailboxType || value === void 0 || value === null)) {
                    try {
                        value = new MailboxType(value);
                    } catch (e) {
                        throw new TypeError('Error setting WorkgroupMailboxProperties.type: ' + e.message);
                    }
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupMailboxProperties, '__type', { value: 'urn:inin.com:configuration:workgroupMailboxProperties' });

    Object.defineProperty(WorkgroupMailboxProperties, '__propInfo', {
        get: function() {
            var pi = {
                'displayName': { required: false, nullable: true },
                'emailAddress': { required: false, nullable: true },
                'type': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:workgroupMailboxProperties'] = WorkgroupMailboxProperties;

    return WorkgroupMailboxProperties;
}());

var System = (function(){
    var hasProps = false;

    function System() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:system' });
        }

        System._super.constructor.apply(this, arguments);
    }
    _util.inherits(System, _util.DataContract);

    function defineProps() {
        Object.defineProperty(System.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof ConfigurationId || value === void 0)) {
                    try {
                        value = new ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting System.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(System.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for System.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(System.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting System.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(System.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for System.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(System.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for System.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(System.prototype, 'defaultLanguage', {
            get: function() { return this.__prop_defaultLanguage; },
            set: function(value) {
                if (!(value instanceof IdDisplayName || value === void 0 || value === null)) {
                    try {
                        value = new IdDisplayName(value);
                    } catch (e) {
                        throw new TypeError('Error setting System.defaultLanguage: ' + e.message);
                    }
                }

                this.__prop_defaultLanguage = value;
            },
            enumerable: true
        });

        Object.defineProperty(System.prototype, 'installedLanguagePacks', {
            get: function() { return this.__prop_installedLanguagePacks; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof IdDisplayName); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new IdDisplayName(item); });
                    } catch (e) {
                        throw new TypeError('Error setting System.installedLanguagePacks: ' + e.message);
                    }
                }

                this.__prop_installedLanguagePacks = value;
            },
            enumerable: true
        });

        Object.defineProperty(System.prototype, 'languages', {
            get: function() { return this.__prop_languages; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof IdDisplayName); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new IdDisplayName(item); });
                    } catch (e) {
                        throw new TypeError('Error setting System.languages: ' + e.message);
                    }
                }

                this.__prop_languages = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(System, '__type', { value: 'urn:inin.com:configuration:system' });

    Object.defineProperty(System, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'defaultLanguage': { required: false, nullable: true },
                'installedLanguagePacks': { required: false, nullable: true },
                'languages': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:system'] = System;

    return System;
}());

var UpdateOperationResult = (function(){
    var hasProps = false;

    function UpdateOperationResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:updateOperationResult' });
        }

        UpdateOperationResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(UpdateOperationResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UpdateOperationResult.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UpdateOperationResult.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateOperationResult.prototype, 'uri', {
            get: function() { return this.__prop_uri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for UpdateOperationResult.uri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_uri = value;
            },
            enumerable: true
        });

        Object.defineProperty(UpdateOperationResult.prototype, 'licenseProblems', {
            get: function() { return this.__prop_licenseProblems; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LicenseError); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new LicenseError(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UpdateOperationResult.licenseProblems: ' + e.message);
                    }
                }

                this.__prop_licenseProblems = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UpdateOperationResult, '__type', { value: 'urn:inin.com:configuration:updateOperationResult' });

    Object.defineProperty(UpdateOperationResult, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'uri': { required: false, nullable: false },
                'licenseProblems': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:updateOperationResult'] = UpdateOperationResult;

    return UpdateOperationResult;
}());

var ConfigObjectSubscription = (function(){
    var hasProps = false;

    function ConfigObjectSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:configObjectSubscription' });
        }

        ConfigObjectSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(ConfigObjectSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ConfigObjectSubscription.prototype, 'configurationIds', {
            get: function() { return this.__prop_configurationIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for ConfigObjectSubscription.configurationIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_configurationIds = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConfigObjectSubscription.prototype, 'properties', {
            get: function() { return this.__prop_properties; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for ConfigObjectSubscription.properties, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_properties = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConfigObjectSubscription.prototype, 'rightsFilter', {
            get: function() { return this.__prop_rightsFilter; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConfigObjectSubscription.rightsFilter, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_rightsFilter = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ConfigObjectSubscription, '__type', { value: 'urn:inin.com:configuration:configObjectSubscription' });

    Object.defineProperty(ConfigObjectSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'configurationIds': { required: true, nullable: false },
                'properties': { required: true, nullable: false },
                'rightsFilter': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:configObjectSubscription'] = ConfigObjectSubscription;

    return ConfigObjectSubscription;
}());

var ConfigGlobalObjectSubscription = (function(){
    var hasProps = false;

    function ConfigGlobalObjectSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:configGlobalObjectSubscription' });
        }

        ConfigGlobalObjectSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(ConfigGlobalObjectSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ConfigGlobalObjectSubscription.prototype, 'properties', {
            get: function() { return this.__prop_properties; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for ConfigGlobalObjectSubscription.properties, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_properties = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConfigGlobalObjectSubscription.prototype, 'rightsFilter', {
            get: function() { return this.__prop_rightsFilter; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ConfigGlobalObjectSubscription.rightsFilter, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_rightsFilter = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ConfigGlobalObjectSubscription, '__type', { value: 'urn:inin.com:configuration:configGlobalObjectSubscription' });

    Object.defineProperty(ConfigGlobalObjectSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'properties': { required: false, nullable: false },
                'rightsFilter': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:configGlobalObjectSubscription'] = ConfigGlobalObjectSubscription;

    return ConfigGlobalObjectSubscription;
}());

var LicensedLanguagesResult = (function(){
    var hasProps = false;

    function LicensedLanguagesResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:licensedLanguagesResult' });
        }

        LicensedLanguagesResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(LicensedLanguagesResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LicensedLanguagesResult.prototype, 'languages', {
            get: function() { return this.__prop_languages; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for LicensedLanguagesResult.languages, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_languages = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LicensedLanguagesResult, '__type', { value: 'urn:inin.com:configuration:licensedLanguagesResult' });

    Object.defineProperty(LicensedLanguagesResult, '__propInfo', {
        get: function() {
            var pi = {
                'languages': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:licensedLanguagesResult'] = LicensedLanguagesResult;

    return LicensedLanguagesResult;
}());

var SupportedLanguagesResult = (function(){
    var hasProps = false;

    function SupportedLanguagesResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:supportedLanguagesResult' });
        }

        SupportedLanguagesResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(SupportedLanguagesResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SupportedLanguagesResult.prototype, 'languages', {
            get: function() { return this.__prop_languages; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for SupportedLanguagesResult.languages, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_languages = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SupportedLanguagesResult, '__type', { value: 'urn:inin.com:configuration:supportedLanguagesResult' });

    Object.defineProperty(SupportedLanguagesResult, '__propInfo', {
        get: function() {
            var pi = {
                'languages': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:supportedLanguagesResult'] = SupportedLanguagesResult;

    return SupportedLanguagesResult;
}());

var SubObjectSet = (function(){
    var hasProps = false;

    function SubObjectSet() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:subObjectSet' });
        }

        SubObjectSet._super.constructor.apply(this, arguments);
    }
    _util.inherits(SubObjectSet, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SubObjectSet.prototype, 'subObjects', {
            get: function() { return this.__prop_subObjects; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof UpdateOperationResult); }) || value === null)) {
                    try {
                        value = value.map(function(item){ return new UpdateOperationResult(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SubObjectSet.subObjects: ' + e.message);
                    }
                }

                this.__prop_subObjects = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SubObjectSet, '__type', { value: 'urn:inin.com:configuration:subObjectSet' });

    Object.defineProperty(SubObjectSet, '__propInfo', {
        get: function() {
            var pi = {
                'subObjects': { required: true, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:subObjectSet'] = SubObjectSet;

    return SubObjectSet;
}());

var ManagedSipProperties = (function(){
    var hasProps = false;

    function ManagedSipProperties() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:managedSipProperties' });
        }

        ManagedSipProperties._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedSipProperties, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedSipProperties.prototype, 'audioPath', {
            get: function() { return this.__prop_audioPath; },
            set: function(value) {
                if (!(value instanceof AudioPath || value === void 0 || value === null)) {
                    try {
                        value = new AudioPath(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedSipProperties.audioPath: ' + e.message);
                    }
                }

                this.__prop_audioPath = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'authentication', {
            get: function() { return this.__prop_authentication; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedSipProperties.authentication, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_authentication = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'connectionCallWarmDownTime', {
            get: function() { return this.__prop_connectionCallWarmDownTime; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for ManagedSipProperties.connectionCallWarmDownTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_connectionCallWarmDownTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'disableDelayedMedia', {
            get: function() { return this.__prop_disableDelayedMedia; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedSipProperties.disableDelayedMedia, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_disableDelayedMedia = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'disableDelayedMediareINVITE', {
            get: function() { return this.__prop_disableDelayedMediareINVITE; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedSipProperties.disableDelayedMediareINVITE, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_disableDelayedMediareINVITE = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'disableMediaServerPassthru', {
            get: function() { return this.__prop_disableMediaServerPassthru; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedSipProperties.disableMediaServerPassthru, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_disableMediaServerPassthru = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'disconnectOnBrokenRTP', {
            get: function() { return this.__prop_disconnectOnBrokenRTP; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedSipProperties.disconnectOnBrokenRTP, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_disconnectOnBrokenRTP = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'dtmfPayload', {
            get: function() { return this.__prop_dtmfPayload; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedSipProperties.dtmfPayload, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dtmfPayload = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'dtmfType', {
            get: function() { return this.__prop_dtmfType; },
            set: function(value) {
                if (!(value instanceof DtmfType || value === void 0 || value === null)) {
                    try {
                        value = new DtmfType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedSipProperties.dtmfType: ' + e.message);
                    }
                }

                this.__prop_dtmfType = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'echoCancellation', {
            get: function() { return this.__prop_echoCancellation; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedSipProperties.echoCancellation, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_echoCancellation = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'proxyStationConnections', {
            get: function() { return this.__prop_proxyStationConnections; },
            set: function(value) {
                if (!(value instanceof InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedSipProperties.proxyStationConnections: ' + e.message);
                    }
                }

                this.__prop_proxyStationConnections = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'rtpDSCP', {
            get: function() { return this.__prop_rtpDSCP; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedSipProperties.rtpDSCP, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_rtpDSCP = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'sipDSCP', {
            get: function() { return this.__prop_sipDSCP; },
            set: function(value) {
                if (!(value instanceof InheritableIntProperty || value === void 0 || value === null)) {
                    try {
                        value = new InheritableIntProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedSipProperties.sipDSCP: ' + e.message);
                    }
                }

                this.__prop_sipDSCP = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'sipRegisterInterval', {
            get: function() { return this.__prop_sipRegisterInterval; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for ManagedSipProperties.sipRegisterInterval, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sipRegisterInterval = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'sipSessionTimeout', {
            get: function() { return this.__prop_sipSessionTimeout; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for ManagedSipProperties.sipSessionTimeout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sipSessionTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'stationConnectionsArePersistent', {
            get: function() { return this.__prop_stationConnectionsArePersistent; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedSipProperties.stationConnectionsArePersistent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_stationConnectionsArePersistent = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'terminateAnalysisOnConnection', {
            get: function() { return this.__prop_terminateAnalysisOnConnection; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedSipProperties.terminateAnalysisOnConnection, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_terminateAnalysisOnConnection = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'useSipSessionTimer', {
            get: function() { return this.__prop_useSipSessionTimer; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedSipProperties.useSipSessionTimer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_useSipSessionTimer = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedSipProperties.prototype, 'voiceActivationDetection', {
            get: function() { return this.__prop_voiceActivationDetection; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedSipProperties.voiceActivationDetection, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_voiceActivationDetection = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedSipProperties, '__type', { value: 'urn:inin.com:configuration:managedSipProperties' });

    Object.defineProperty(ManagedSipProperties, '__propInfo', {
        get: function() {
            var pi = {
                'audioPath': { required: false, nullable: true },
                'authentication': { required: false, nullable: true },
                'connectionCallWarmDownTime': { required: false, nullable: true },
                'disableDelayedMedia': { required: false, nullable: true },
                'disableDelayedMediareINVITE': { required: false, nullable: true },
                'disableMediaServerPassthru': { required: false, nullable: true },
                'disconnectOnBrokenRTP': { required: false, nullable: true },
                'dtmfPayload': { required: false, nullable: true },
                'dtmfType': { required: false, nullable: true },
                'echoCancellation': { required: false, nullable: true },
                'proxyStationConnections': { required: false, nullable: true },
                'rtpDSCP': { required: false, nullable: true },
                'sipDSCP': { required: false, nullable: true },
                'sipRegisterInterval': { required: false, nullable: true },
                'sipSessionTimeout': { required: false, nullable: true },
                'stationConnectionsArePersistent': { required: false, nullable: true },
                'terminateAnalysisOnConnection': { required: false, nullable: true },
                'useSipSessionTimer': { required: false, nullable: true },
                'voiceActivationDetection': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:managedSipProperties'] = ManagedSipProperties;

    return ManagedSipProperties;
}());

var StationTemplateLicenseProperties = (function(){
    var hasProps = false;

    function StationTemplateLicenseProperties() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:stationTemplateLicenseProperties' });
        }

        StationTemplateLicenseProperties._super.constructor.apply(this, arguments);
    }
    _util.inherits(StationTemplateLicenseProperties, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StationTemplateLicenseProperties.prototype, 'acdSocialMedia', {
            get: function() { return this.__prop_acdSocialMedia; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StationTemplateLicenseProperties.acdSocialMedia, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_acdSocialMedia = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplateLicenseProperties.prototype, 'additionalLicenses', {
            get: function() { return this.__prop_additionalLicenses; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplateLicenseProperties.additionalLicenses: ' + e.message);
                    }
                }

                this.__prop_additionalLicenses = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplateLicenseProperties.prototype, 'hasBasicStationLicense', {
            get: function() { return this.__prop_hasBasicStationLicense; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StationTemplateLicenseProperties.hasBasicStationLicense, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasBasicStationLicense = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplateLicenseProperties.prototype, 'hasClientAccess', {
            get: function() { return this.__prop_hasClientAccess; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StationTemplateLicenseProperties.hasClientAccess, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasClientAccess = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplateLicenseProperties.prototype, 'hasRecorderAccess', {
            get: function() { return this.__prop_hasRecorderAccess; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StationTemplateLicenseProperties.hasRecorderAccess, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasRecorderAccess = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplateLicenseProperties.prototype, 'interactionProcessAutomationType', {
            get: function() { return this.__prop_interactionProcessAutomationType; },
            set: function(value) {
                if (!(value instanceof InteractionProcessAutomationLicenseType || value === void 0 || value === null)) {
                    try {
                        value = new InteractionProcessAutomationLicenseType(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplateLicenseProperties.interactionProcessAutomationType: ' + e.message);
                    }
                }

                this.__prop_interactionProcessAutomationType = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplateLicenseProperties.prototype, 'mediaLevel', {
            get: function() { return this.__prop_mediaLevel; },
            set: function(value) {
                if (!(value instanceof MediaLevel || value === void 0 || value === null)) {
                    try {
                        value = new MediaLevel(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplateLicenseProperties.mediaLevel: ' + e.message);
                    }
                }

                this.__prop_mediaLevel = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplateLicenseProperties.prototype, 'mediaTypes', {
            get: function() { return this.__prop_mediaTypes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MediaType); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new MediaType(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplateLicenseProperties.mediaTypes: ' + e.message);
                    }
                }

                this.__prop_mediaTypes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StationTemplateLicenseProperties, '__type', { value: 'urn:inin.com:configuration:stationTemplateLicenseProperties' });

    Object.defineProperty(StationTemplateLicenseProperties, '__propInfo', {
        get: function() {
            var pi = {
                'acdSocialMedia': { required: false, nullable: true },
                'additionalLicenses': { required: false, nullable: true },
                'hasBasicStationLicense': { required: false, nullable: true },
                'hasClientAccess': { required: false, nullable: true },
                'hasRecorderAccess': { required: false, nullable: true },
                'interactionProcessAutomationType': { required: false, nullable: true },
                'mediaLevel': { required: false, nullable: true },
                'mediaTypes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:stationTemplateLicenseProperties'] = StationTemplateLicenseProperties;

    return StationTemplateLicenseProperties;
}());

var LanguagesResult = (function(){
    var hasProps = false;

    function LanguagesResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:languagesResult' });
        }

        LanguagesResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(LanguagesResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LanguagesResult.prototype, 'languages', {
            get: function() { return this.__prop_languages; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LanguagesEntry); }))) {
                    try {
                        value = value.map(function(item){ return new LanguagesEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LanguagesResult.languages: ' + e.message);
                    }
                }

                this.__prop_languages = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LanguagesResult, '__type', { value: 'urn:inin.com:configuration:languagesResult' });

    Object.defineProperty(LanguagesResult, '__propInfo', {
        get: function() {
            var pi = {
                'languages': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:languagesResult'] = LanguagesResult;

    return LanguagesResult;
}());

var LanguagesEntry = (function(){
    var hasProps = false;

    function LanguagesEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:languagesEntry' });
        }

        LanguagesEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(LanguagesEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LanguagesEntry.prototype, 'language', {
            get: function() { return this.__prop_language; },
            set: function(value) {
                if (!(value instanceof IdDisplayName)) {
                    try {
                        value = new IdDisplayName(value);
                    } catch (e) {
                        throw new TypeError('Error setting LanguagesEntry.language: ' + e.message);
                    }
                }

                this.__prop_language = value;
            },
            enumerable: true
        });

        Object.defineProperty(LanguagesEntry.prototype, 'countries', {
            get: function() { return this.__prop_countries; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof IdDisplayName); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new IdDisplayName(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LanguagesEntry.countries: ' + e.message);
                    }
                }

                this.__prop_countries = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LanguagesEntry, '__type', { value: 'urn:inin.com:configuration:languagesEntry' });

    Object.defineProperty(LanguagesEntry, '__propInfo', {
        get: function() {
            var pi = {
                'language': { required: true, nullable: false },
                'countries': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:languagesEntry'] = LanguagesEntry;

    return LanguagesEntry;
}());

var IvrHandlersResult = (function(){
    var hasProps = false;

    function IvrHandlersResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:ivrHandlersResult' });
        }

        IvrHandlersResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(IvrHandlersResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(IvrHandlersResult.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for IvrHandlersResult.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(IvrHandlersResult, '__type', { value: 'urn:inin.com:configuration:ivrHandlersResult' });

    Object.defineProperty(IvrHandlersResult, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:ivrHandlersResult'] = IvrHandlersResult;

    return IvrHandlersResult;
}());

var TimeZonesResult = (function(){
    var hasProps = false;

    function TimeZonesResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:timeZonesResult' });
        }

        TimeZonesResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(TimeZonesResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TimeZonesResult.prototype, 'timeZones', {
            get: function() { return this.__prop_timeZones; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof TimeZonesEntry); }))) {
                    try {
                        value = value.map(function(item){ return new TimeZonesEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting TimeZonesResult.timeZones: ' + e.message);
                    }
                }

                this.__prop_timeZones = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TimeZonesResult, '__type', { value: 'urn:inin.com:configuration:timeZonesResult' });

    Object.defineProperty(TimeZonesResult, '__propInfo', {
        get: function() {
            var pi = {
                'timeZones': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:timeZonesResult'] = TimeZonesResult;

    return TimeZonesResult;
}());

var TimeZonesEntry = (function(){
    var hasProps = false;

    function TimeZonesEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:timeZonesEntry' });
        }

        TimeZonesEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(TimeZonesEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TimeZonesEntry.prototype, 'timeZone', {
            get: function() { return this.__prop_timeZone; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for TimeZonesEntry.timeZone, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeZone = value;
            },
            enumerable: true
        });

        Object.defineProperty(TimeZonesEntry.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for TimeZonesEntry.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TimeZonesEntry, '__type', { value: 'urn:inin.com:configuration:timeZonesEntry' });

    Object.defineProperty(TimeZonesEntry, '__propInfo', {
        get: function() {
            var pi = {
                'timeZone': { required: true, nullable: false },
                'displayName': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:timeZonesEntry'] = TimeZonesEntry;

    return TimeZonesEntry;
}());

var ConfigurationError = (function(){
    var hasProps = false;

    function ConfigurationError() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:configurationError', enumerable: true });
        }

        ConfigurationError._super.constructor.apply(this, arguments);
    }
    _util.inherits(ConfigurationError, Common.Error);

    function defineProps() {
        Object.defineProperty(ConfigurationError.prototype, 'validationErrors', {
            get: function() { return this.__prop_validationErrors; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ValidationError); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ValidationError(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ConfigurationError.validationErrors: ' + e.message);
                    }
                }

                this.__prop_validationErrors = value;
            },
            enumerable: true
        });

        Object.defineProperty(ConfigurationError.prototype, 'licenseErrors', {
            get: function() { return this.__prop_licenseErrors; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LicenseError); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new LicenseError(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ConfigurationError.licenseErrors: ' + e.message);
                    }
                }

                this.__prop_licenseErrors = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ConfigurationError, '__type', { value: 'urn:inin.com:configuration:configurationError' });

    Object.defineProperty(ConfigurationError, '__propInfo', {
        get: function() {
            var pi = {
                'validationErrors': { required: false, nullable: false },
                'licenseErrors': { required: false, nullable: false }
            };
            if (Common.Error.__propInfo) { _util.extend(pi, Common.Error.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:configurationError'] = ConfigurationError;

    return ConfigurationError;
}());

var GetObjectError = (function(){
    var hasProps = false;

    function GetObjectError() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:getObjectError', enumerable: true });
        }

        GetObjectError._super.constructor.apply(this, arguments);
    }
    _util.inherits(GetObjectError, Common.Error);

    function defineProps() {
        Object.defineProperty(GetObjectError.prototype, 'select', {
            get: function() { return this.__prop_select; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for GetObjectError.select, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_select = value;
            },
            enumerable: true
        });

        Object.defineProperty(GetObjectError.prototype, 'rightsFilter', {
            get: function() { return this.__prop_rightsFilter; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for GetObjectError.rightsFilter, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_rightsFilter = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(GetObjectError, '__type', { value: 'urn:inin.com:configuration:getObjectError' });

    Object.defineProperty(GetObjectError, '__propInfo', {
        get: function() {
            var pi = {
                'select': { required: false, nullable: false },
                'rightsFilter': { required: false, nullable: false }
            };
            if (Common.Error.__propInfo) { _util.extend(pi, Common.Error.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:getObjectError'] = GetObjectError;

    return GetObjectError;
}());

var ExplicitReferencesError = (function(){
    var hasProps = false;

    function ExplicitReferencesError() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:explicitReferencesError', enumerable: true });
        }

        ExplicitReferencesError._super.constructor.apply(this, arguments);
    }
    _util.inherits(ExplicitReferencesError, Common.Error);

    function defineProps() {
        Object.defineProperty(ExplicitReferencesError.prototype, 'explicitReferences', {
            get: function() { return this.__prop_explicitReferences; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ExplicitReference); }))) {
                    try {
                        value = value.map(function(item){ return new ExplicitReference(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ExplicitReferencesError.explicitReferences: ' + e.message);
                    }
                }

                this.__prop_explicitReferences = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ExplicitReferencesError, '__type', { value: 'urn:inin.com:configuration:explicitReferencesError' });

    Object.defineProperty(ExplicitReferencesError, '__propInfo', {
        get: function() {
            var pi = {
                'explicitReferences': { required: true, nullable: false }
            };
            if (Common.Error.__propInfo) { _util.extend(pi, Common.Error.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:explicitReferencesError'] = ExplicitReferencesError;

    return ExplicitReferencesError;
}());

var SystemMessage = (function(){
    var hasProps = false;

    function SystemMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:systemMessage', enumerable: true });
        }

        SystemMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(SystemMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(SystemMessage.prototype, 'system', {
            get: function() { return this.__prop_system; },
            set: function(value) {
                if (!(value instanceof System)) {
                    try {
                        value = new System(value);
                    } catch (e) {
                        throw new TypeError('Error setting SystemMessage.system: ' + e.message);
                    }
                }

                this.__prop_system = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SystemMessage, '__type', { value: 'urn:inin.com:configuration:systemMessage' });

    Object.defineProperty(SystemMessage, '__propInfo', {
        get: function() {
            var pi = {
                'system': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:systemMessage'] = SystemMessage;

    return SystemMessage;
}());

var GetObjectListError = (function(){
    var hasProps = false;

    function GetObjectListError() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration:getObjectListError', enumerable: true });
        }

        GetObjectListError._super.constructor.apply(this, arguments);
    }
    _util.inherits(GetObjectListError, GetObjectError);

    function defineProps() {
        Object.defineProperty(GetObjectListError.prototype, 'where', {
            get: function() { return this.__prop_where; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for GetObjectListError.where, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_where = value;
            },
            enumerable: true
        });

        Object.defineProperty(GetObjectListError.prototype, 'orderBy', {
            get: function() { return this.__prop_orderBy; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for GetObjectListError.orderBy, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_orderBy = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(GetObjectListError, '__type', { value: 'urn:inin.com:configuration:getObjectListError' });

    Object.defineProperty(GetObjectListError, '__propInfo', {
        get: function() {
            var pi = {
                'where': { required: false, nullable: false },
                'orderBy': { required: false, nullable: false }
            };
            if (GetObjectError.__propInfo) { _util.extend(pi, GetObjectError.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration:getObjectListError'] = GetObjectListError;

    return GetObjectListError;
}());

var $system = (function(){
    function getSystem(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSystem.params)) {
            try {
                params = new getSystem.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSystem.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof System) ? o : new System(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSystem.method, getSystem.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSystem, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/system', enumerable: true }
    });

    getSystem.params = (function(){
        _util.inherits(getSystem_params, _util.RequestParams);

        function getSystem_params(properties) {
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

            getSystem_params._super.constructor.apply(this, arguments);
        }

        return getSystem_params;
    })();

    function updateSystem(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSystem.params)) {
            try {
                params = new updateSystem.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSystem.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof UpdateOperationResult) ? o : new UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSystem.method, updateSystem.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSystem, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/system', enumerable: true }
    });

    updateSystem.params = (function(){
        _util.inherits(updateSystem_params, _util.RequestParams);

        function updateSystem_params(properties) {
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
            if (!(properties.content instanceof System)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System');
            }

            updateSystem_params._super.constructor.apply(this, arguments);
        }

        return updateSystem_params;
    })();

    return Object.create(null, {
        getSystem: { value: getSystem, enumerable: true },
        updateSystem: { value: updateSystem, enumerable: true }
    });
})();

exports.ValidationErrorType = ValidationErrorType;
exports.LicenseErrorType = LicenseErrorType;
exports.ObjectType = ObjectType;
exports.ConfigurationIdGrouping = ConfigurationIdGrouping;
exports.InheritedFromType = InheritedFromType;
exports.SecurityLevel = SecurityLevel;
exports.InteractionProcessAutomationLicenseType = InteractionProcessAutomationLicenseType;
exports.MediaLevel = MediaLevel;
exports.MediaType = MediaType;
exports.LicenseAllocationType = LicenseAllocationType;
exports.MailboxType = MailboxType;
exports.AudioProtocol = AudioProtocol;
exports.AudioPath = AudioPath;
exports.DtmfType = DtmfType;
exports.ConfigurationError = ConfigurationError;
exports.ValidationError = ValidationError;
exports.LicenseError = LicenseError;
exports.ConfigurationId = ConfigurationId;
exports.GetObjectError = GetObjectError;
exports.GetObjectListError = GetObjectListError;
exports.ExplicitReferencesError = ExplicitReferencesError;
exports.ExplicitReference = ExplicitReference;
exports.CustomAttribute = CustomAttribute;
exports.MultiLanguageString = MultiLanguageString;
exports.MultiLanguageValue = MultiLanguageValue;
exports.InheritableGroupedConfigurationIdCollection = InheritableGroupedConfigurationIdCollection;
exports.GroupedConfigurationId = GroupedConfigurationId;
exports.InheritedGroupedConfigurationId = InheritedGroupedConfigurationId;
exports.InheritableBooleanProperty = InheritableBooleanProperty;
exports.InheritedBooleanValue = InheritedBooleanValue;
exports.SkillSetting = SkillSetting;
exports.InheritableConfigurationId = InheritableConfigurationId;
exports.InheritedConfigurationId = InheritedConfigurationId;
exports.StationLicenseProperties = StationLicenseProperties;
exports.InheritableDurationProperty = InheritableDurationProperty;
exports.InheritedDuration = InheritedDuration;
exports.LicenseProperties = LicenseProperties;
exports.MailboxProperties = MailboxProperties;
exports.InheritableStringProperty = InheritableStringProperty;
exports.InheritedString = InheritedString;
exports.InheritableConfigurationIdCollection = InheritableConfigurationIdCollection;
exports.InheritedConfigurationIdArrayEntry = InheritedConfigurationIdArrayEntry;
exports.BasicPhoneNumber = BasicPhoneNumber;
exports.IdDisplayName = IdDisplayName;
exports.SkillSettingsProperties = SkillSettingsProperties;
exports.InheritedSkillSetting = InheritedSkillSetting;
exports.InheritableIntProperty = InheritableIntProperty;
exports.InheritedInt = InheritedInt;
exports.UtilizationSettingsProperties = UtilizationSettingsProperties;
exports.UtilizationSetting = UtilizationSetting;
exports.InheritedUtilizationSetting = InheritedUtilizationSetting;
exports.WorkgroupMailboxProperties = WorkgroupMailboxProperties;
exports.SystemMessage = SystemMessage;
exports.System = System;
exports.UpdateOperationResult = UpdateOperationResult;
exports.ConfigObjectSubscription = ConfigObjectSubscription;
exports.ConfigGlobalObjectSubscription = ConfigGlobalObjectSubscription;
exports.LicensedLanguagesResult = LicensedLanguagesResult;
exports.SupportedLanguagesResult = SupportedLanguagesResult;
exports.SubObjectSet = SubObjectSet;
exports.ManagedSipProperties = ManagedSipProperties;
exports.StationTemplateLicenseProperties = StationTemplateLicenseProperties;
exports.LanguagesResult = LanguagesResult;
exports.LanguagesEntry = LanguagesEntry;
exports.IvrHandlersResult = IvrHandlersResult;
exports.TimeZonesResult = TimeZonesResult;
exports.TimeZonesEntry = TimeZonesEntry;
exports.$system = $system;
