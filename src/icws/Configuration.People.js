/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Configuration = require('./Configuration');
var Configuration_People_Accessrights = require('./Configuration.People.Accessrights');
var Common = require('./Common');

var Action = (function(){
    var instanceCache = {};
    function Action(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:action' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(Action, _util.EnumValue);

    Object.defineProperties(Action, {
        'Addin': { value: new Action(0, 'Addin'), enumerable: true },
        'CustomNotification': { value: new Action(1, 'CustomNotification'), enumerable: true },
        'LaunchApplication': { value: new Action(2, 'LaunchApplication'), enumerable: true }
    });

    Object.defineProperty(Action, '__type', { value: 'urn:inin.com:configuration.people:action' });

    _typemap['urn:inin.com:configuration.people:action'] = Action;

    return Action;
}());

var Availability = (function(){
    var instanceCache = {};
    function Availability(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:availability' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(Availability, _util.EnumValue);

    Object.defineProperties(Availability, {
        'Always': { value: new Availability(0, 'Always'), enumerable: true },
        'WithActiveInteractionSelected': { value: new Availability(1, 'WithActiveInteractionSelected'), enumerable: true },
        'WithInteractionSelected': { value: new Availability(2, 'WithInteractionSelected'), enumerable: true }
    });

    Object.defineProperty(Availability, '__type', { value: 'urn:inin.com:configuration.people:availability' });

    _typemap['urn:inin.com:configuration.people:availability'] = Availability;

    return Availability;
}());

var InteractionType = (function(){
    var instanceCache = {};
    function InteractionType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:interactionType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(InteractionType, _util.EnumValue);

    Object.defineProperties(InteractionType, {
        'All': { value: new InteractionType(0, 'All'), enumerable: true },
        'Call': { value: new InteractionType(1, 'Call'), enumerable: true },
        'Iwebcallback': { value: new InteractionType(2, 'Iwebcallback'), enumerable: true },
        'Chat': { value: new InteractionType(3, 'Chat'), enumerable: true },
        'Email': { value: new InteractionType(4, 'Email'), enumerable: true },
        'Generic': { value: new InteractionType(5, 'Generic'), enumerable: true },
        'Workitem': { value: new InteractionType(6, 'Workitem'), enumerable: true },
        'Directmessage': { value: new InteractionType(7, 'Directmessage'), enumerable: true },
        'Socialconversation': { value: new InteractionType(8, 'Socialconversation'), enumerable: true }
    });

    Object.defineProperty(InteractionType, '__type', { value: 'urn:inin.com:configuration.people:interactionType' });

    _typemap['urn:inin.com:configuration.people:interactionType'] = InteractionType;

    return InteractionType;
}());

var Location = (function(){
    var instanceCache = {};
    function Location(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:location' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(Location, _util.EnumValue);

    Object.defineProperties(Location, {
        'Queue': { value: new Location(0, 'Queue'), enumerable: true },
        'Interaction': { value: new Location(1, 'Interaction'), enumerable: true }
    });

    Object.defineProperty(Location, '__type', { value: 'urn:inin.com:configuration.people:location' });

    _typemap['urn:inin.com:configuration.people:location'] = Location;

    return Location;
}());

var QueueColumnAttributeType = (function(){
    var instanceCache = {};
    function QueueColumnAttributeType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:queueColumnAttributeType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(QueueColumnAttributeType, _util.EnumValue);

    Object.defineProperties(QueueColumnAttributeType, {
        'Boolean': { value: new QueueColumnAttributeType(0, 'Boolean'), enumerable: true },
        'Duration': { value: new QueueColumnAttributeType(1, 'Duration'), enumerable: true },
        'InteractionId': { value: new QueueColumnAttributeType(2, 'InteractionId'), enumerable: true },
        'MultiValueInteractionId': { value: new QueueColumnAttributeType(3, 'MultiValueInteractionId'), enumerable: true },
        'MultiValueNumber': { value: new QueueColumnAttributeType(4, 'MultiValueNumber'), enumerable: true },
        'MultiValueString': { value: new QueueColumnAttributeType(5, 'MultiValueString'), enumerable: true },
        'Number': { value: new QueueColumnAttributeType(6, 'Number'), enumerable: true },
        'String': { value: new QueueColumnAttributeType(7, 'String'), enumerable: true },
        'TimeStamp': { value: new QueueColumnAttributeType(8, 'TimeStamp'), enumerable: true }
    });

    Object.defineProperty(QueueColumnAttributeType, '__type', { value: 'urn:inin.com:configuration.people:queueColumnAttributeType' });

    _typemap['urn:inin.com:configuration.people:queueColumnAttributeType'] = QueueColumnAttributeType;

    return QueueColumnAttributeType;
}());

var PatternType = (function(){
    var instanceCache = {};
    function PatternType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:patternType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(PatternType, _util.EnumValue);

    Object.defineProperties(PatternType, {
        'OneTime': { value: new PatternType(0, 'OneTime'), enumerable: true },
        'RepeatDaily': { value: new PatternType(1, 'RepeatDaily'), enumerable: true },
        'RepeatWeekly': { value: new PatternType(2, 'RepeatWeekly'), enumerable: true },
        'RepeatMonthly': { value: new PatternType(3, 'RepeatMonthly'), enumerable: true },
        'RepeatYearly': { value: new PatternType(4, 'RepeatYearly'), enumerable: true }
    });

    Object.defineProperty(PatternType, '__type', { value: 'urn:inin.com:configuration.people:patternType' });

    _typemap['urn:inin.com:configuration.people:patternType'] = PatternType;

    return PatternType;
}());

var RelativeDayType = (function(){
    var instanceCache = {};
    function RelativeDayType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:relativeDayType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(RelativeDayType, _util.EnumValue);

    Object.defineProperties(RelativeDayType, {
        'Day': { value: new RelativeDayType(0, 'Day'), enumerable: true },
        'Sunday': { value: new RelativeDayType(1, 'Sunday'), enumerable: true },
        'Monday': { value: new RelativeDayType(2, 'Monday'), enumerable: true },
        'Tuesday': { value: new RelativeDayType(3, 'Tuesday'), enumerable: true },
        'Wednesday': { value: new RelativeDayType(4, 'Wednesday'), enumerable: true },
        'Thursday': { value: new RelativeDayType(5, 'Thursday'), enumerable: true },
        'Friday': { value: new RelativeDayType(6, 'Friday'), enumerable: true },
        'Saturday': { value: new RelativeDayType(7, 'Saturday'), enumerable: true }
    });

    Object.defineProperty(RelativeDayType, '__type', { value: 'urn:inin.com:configuration.people:relativeDayType' });

    _typemap['urn:inin.com:configuration.people:relativeDayType'] = RelativeDayType;

    return RelativeDayType;
}());

var RelativeMonthlyInstanceType = (function(){
    var instanceCache = {};
    function RelativeMonthlyInstanceType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:relativeMonthlyInstanceType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(RelativeMonthlyInstanceType, _util.EnumValue);

    Object.defineProperties(RelativeMonthlyInstanceType, {
        'First': { value: new RelativeMonthlyInstanceType(0, 'First'), enumerable: true },
        'Second': { value: new RelativeMonthlyInstanceType(1, 'Second'), enumerable: true },
        'Third': { value: new RelativeMonthlyInstanceType(2, 'Third'), enumerable: true },
        'Fourth': { value: new RelativeMonthlyInstanceType(3, 'Fourth'), enumerable: true },
        'Last': { value: new RelativeMonthlyInstanceType(4, 'Last'), enumerable: true }
    });

    Object.defineProperty(RelativeMonthlyInstanceType, '__type', { value: 'urn:inin.com:configuration.people:relativeMonthlyInstanceType' });

    _typemap['urn:inin.com:configuration.people:relativeMonthlyInstanceType'] = RelativeMonthlyInstanceType;

    return RelativeMonthlyInstanceType;
}());

var SecureInputFormType = (function(){
    var instanceCache = {};
    function SecureInputFormType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:secureInputFormType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(SecureInputFormType, _util.EnumValue);

    Object.defineProperties(SecureInputFormType, {
        'None': { value: new SecureInputFormType(0, 'None'), enumerable: true },
        'Custom': { value: new SecureInputFormType(1, 'Custom'), enumerable: true },
        'Simple': { value: new SecureInputFormType(2, 'Simple'), enumerable: true }
    });

    Object.defineProperty(SecureInputFormType, '__type', { value: 'urn:inin.com:configuration.people:secureInputFormType' });

    _typemap['urn:inin.com:configuration.people:secureInputFormType'] = SecureInputFormType;

    return SecureInputFormType;
}());

var LyncOption = (function(){
    var instanceCache = {};
    function LyncOption(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:lyncOption' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LyncOption, _util.EnumValue);

    Object.defineProperties(LyncOption, {
        'None': { value: new LyncOption(0, 'None'), enumerable: true },
        'PublicConnectivity': { value: new LyncOption(1, 'PublicConnectivity'), enumerable: true },
        'RemoteCallControl': { value: new LyncOption(2, 'RemoteCallControl'), enumerable: true },
        'OrganizeMeetingWithAnonymousParticipants': { value: new LyncOption(3, 'OrganizeMeetingWithAnonymousParticipants'), enumerable: true },
        'UnifiedCommunications': { value: new LyncOption(4, 'UnifiedCommunications'), enumerable: true },
        'EnhancedPresence': { value: new LyncOption(5, 'EnhancedPresence'), enumerable: true },
        'RemoteCallControlDualMode': { value: new LyncOption(6, 'RemoteCallControlDualMode'), enumerable: true },
        'AutoAttendantEnabled': { value: new LyncOption(7, 'AutoAttendantEnabled'), enumerable: true }
    });

    Object.defineProperty(LyncOption, '__type', { value: 'urn:inin.com:configuration.people:lyncOption' });

    _typemap['urn:inin.com:configuration.people:lyncOption'] = LyncOption;

    return LyncOption;
}());

var MwiMode = (function(){
    var instanceCache = {};
    function MwiMode(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:mwiMode' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(MwiMode, _util.EnumValue);

    Object.defineProperties(MwiMode, {
        'Default': { value: new MwiMode(0, 'Default'), enumerable: true },
        'Address': { value: new MwiMode(1, 'Address'), enumerable: true }
    });

    Object.defineProperty(MwiMode, '__type', { value: 'urn:inin.com:configuration.people:mwiMode' });

    _typemap['urn:inin.com:configuration.people:mwiMode'] = MwiMode;

    return MwiMode;
}());

var EFaqSearchOptions = (function(){
    var instanceCache = {};
    function EFaqSearchOptions(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:eFaqSearchOptions' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(EFaqSearchOptions, _util.EnumValue);

    Object.defineProperties(EFaqSearchOptions, {
        'All': { value: new EFaqSearchOptions(0, 'All'), enumerable: true },
        'Generous': { value: new EFaqSearchOptions(1, 'Generous'), enumerable: true },
        'Best': { value: new EFaqSearchOptions(2, 'Best'), enumerable: true },
        'Strict': { value: new EFaqSearchOptions(3, 'Strict'), enumerable: true }
    });

    Object.defineProperty(EFaqSearchOptions, '__type', { value: 'urn:inin.com:configuration.people:eFaqSearchOptions' });

    _typemap['urn:inin.com:configuration.people:eFaqSearchOptions'] = EFaqSearchOptions;

    return EFaqSearchOptions;
}());

var MonitoredMailboxType = (function(){
    var instanceCache = {};
    function MonitoredMailboxType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:monitoredMailboxType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(MonitoredMailboxType, _util.EnumValue);

    Object.defineProperties(MonitoredMailboxType, {
        'Inbound': { value: new MonitoredMailboxType(0, 'Inbound'), enumerable: true },
        'Outbound': { value: new MonitoredMailboxType(1, 'Outbound'), enumerable: true },
        'OutboundAndInbound': { value: new MonitoredMailboxType(2, 'OutboundAndInbound'), enumerable: true }
    });

    Object.defineProperty(MonitoredMailboxType, '__type', { value: 'urn:inin.com:configuration.people:monitoredMailboxType' });

    _typemap['urn:inin.com:configuration.people:monitoredMailboxType'] = MonitoredMailboxType;

    return MonitoredMailboxType;
}());

var WorkgroupQueueType = (function(){
    var instanceCache = {};
    function WorkgroupQueueType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:workgroupQueueType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(WorkgroupQueueType, _util.EnumValue);

    Object.defineProperties(WorkgroupQueueType, {
        'None': { value: new WorkgroupQueueType(0, 'None'), enumerable: true },
        'Custom': { value: new WorkgroupQueueType(1, 'Custom'), enumerable: true },
        'GroupRing': { value: new WorkgroupQueueType(2, 'GroupRing'), enumerable: true },
        'Sequential': { value: new WorkgroupQueueType(3, 'Sequential'), enumerable: true },
        'RoundRobin': { value: new WorkgroupQueueType(4, 'RoundRobin'), enumerable: true },
        'ACD': { value: new WorkgroupQueueType(5, 'ACD'), enumerable: true }
    });

    Object.defineProperty(WorkgroupQueueType, '__type', { value: 'urn:inin.com:configuration.people:workgroupQueueType' });

    _typemap['urn:inin.com:configuration.people:workgroupQueueType'] = WorkgroupQueueType;

    return WorkgroupQueueType;
}());

var WebClientFaxFormat = (function(){
    var instanceCache = {};
    function WebClientFaxFormat(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:webClientFaxFormat' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(WebClientFaxFormat, _util.EnumValue);

    Object.defineProperties(WebClientFaxFormat, {
        'None': { value: new WebClientFaxFormat(0, 'None'), enumerable: true },
        'PDF': { value: new WebClientFaxFormat(1, 'PDF'), enumerable: true },
        'PNG': { value: new WebClientFaxFormat(2, 'PNG'), enumerable: true }
    });

    Object.defineProperty(WebClientFaxFormat, '__type', { value: 'urn:inin.com:configuration.people:webClientFaxFormat' });

    _typemap['urn:inin.com:configuration.people:webClientFaxFormat'] = WebClientFaxFormat;

    return WebClientFaxFormat;
}());

var AccessControlGroup = (function(){
    var hasProps = false;

    function AccessControlGroup() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:accessControlGroup' });
        }

        AccessControlGroup._super.constructor.apply(this, arguments);
    }
    _util.inherits(AccessControlGroup, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AccessControlGroup.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for AccessControlGroup.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for AccessControlGroup.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for AccessControlGroup.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'accountCodes', {
            get: function() { return this.__prop_accountCodes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.accountCodes: ' + e.message);
                    }
                }

                this.__prop_accountCodes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'children', {
            get: function() { return this.__prop_children; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.children: ' + e.message);
                    }
                }

                this.__prop_children = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'clientConfigurationTemplates', {
            get: function() { return this.__prop_clientConfigurationTemplates; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.clientConfigurationTemplates: ' + e.message);
                    }
                }

                this.__prop_clientConfigurationTemplates = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'imageResources', {
            get: function() { return this.__prop_imageResources; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.imageResources: ' + e.message);
                    }
                }

                this.__prop_imageResources = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'interactionProcessorTables', {
            get: function() { return this.__prop_interactionProcessorTables; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.interactionProcessorTables: ' + e.message);
                    }
                }

                this.__prop_interactionProcessorTables = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'ipPhoneProxyGroups', {
            get: function() { return this.__prop_ipPhoneProxyGroups; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.ipPhoneProxyGroups: ' + e.message);
                    }
                }

                this.__prop_ipPhoneProxyGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'ipPhoneRingSets', {
            get: function() { return this.__prop_ipPhoneRingSets; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.ipPhoneRingSets: ' + e.message);
                    }
                }

                this.__prop_ipPhoneRingSets = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'ipPhones', {
            get: function() { return this.__prop_ipPhones; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.ipPhones: ' + e.message);
                    }
                }

                this.__prop_ipPhones = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'ipPhoneTemplates', {
            get: function() { return this.__prop_ipPhoneTemplates; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.ipPhoneTemplates: ' + e.message);
                    }
                }

                this.__prop_ipPhoneTemplates = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'isPermanent', {
            get: function() { return this.__prop_isPermanent; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for AccessControlGroup.isPermanent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isPermanent = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'keywordSets', {
            get: function() { return this.__prop_keywordSets; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.keywordSets: ' + e.message);
                    }
                }

                this.__prop_keywordSets = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'layouts', {
            get: function() { return this.__prop_layouts; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.layouts: ' + e.message);
                    }
                }

                this.__prop_layouts = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'locations', {
            get: function() { return this.__prop_locations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.locations: ' + e.message);
                    }
                }

                this.__prop_locations = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'parent', {
            get: function() { return this.__prop_parent; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.parent: ' + e.message);
                    }
                }

                this.__prop_parent = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'passwordPolicies', {
            get: function() { return this.__prop_passwordPolicies; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.passwordPolicies: ' + e.message);
                    }
                }

                this.__prop_passwordPolicies = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'roles', {
            get: function() { return this.__prop_roles; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.roles: ' + e.message);
                    }
                }

                this.__prop_roles = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'schedules', {
            get: function() { return this.__prop_schedules; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.schedules: ' + e.message);
                    }
                }

                this.__prop_schedules = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'skillCategories', {
            get: function() { return this.__prop_skillCategories; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.skillCategories: ' + e.message);
                    }
                }

                this.__prop_skillCategories = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'skills', {
            get: function() { return this.__prop_skills; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.skills: ' + e.message);
                    }
                }

                this.__prop_skills = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'stationGroups', {
            get: function() { return this.__prop_stationGroups; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.stationGroups: ' + e.message);
                    }
                }

                this.__prop_stationGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'stations', {
            get: function() { return this.__prop_stations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.stations: ' + e.message);
                    }
                }

                this.__prop_stations = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'stationTemplates', {
            get: function() { return this.__prop_stationTemplates; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.stationTemplates: ' + e.message);
                    }
                }

                this.__prop_stationTemplates = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'statisticGroups', {
            get: function() { return this.__prop_statisticGroups; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.statisticGroups: ' + e.message);
                    }
                }

                this.__prop_statisticGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'users', {
            get: function() { return this.__prop_users; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.users: ' + e.message);
                    }
                }

                this.__prop_users = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'workgroups', {
            get: function() { return this.__prop_workgroups; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.workgroups: ' + e.message);
                    }
                }

                this.__prop_workgroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'wrapUpCategories', {
            get: function() { return this.__prop_wrapUpCategories; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.wrapUpCategories: ' + e.message);
                    }
                }

                this.__prop_wrapUpCategories = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroup.prototype, 'wrapUpCodes', {
            get: function() { return this.__prop_wrapUpCodes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroup.wrapUpCodes: ' + e.message);
                    }
                }

                this.__prop_wrapUpCodes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AccessControlGroup, '__type', { value: 'urn:inin.com:configuration.people:accessControlGroup' });

    Object.defineProperty(AccessControlGroup, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accountCodes': { required: false, nullable: true },
                'children': { required: false, nullable: true },
                'clientConfigurationTemplates': { required: false, nullable: true },
                'imageResources': { required: false, nullable: true },
                'interactionProcessorTables': { required: false, nullable: true },
                'ipPhoneProxyGroups': { required: false, nullable: true },
                'ipPhoneRingSets': { required: false, nullable: true },
                'ipPhones': { required: false, nullable: true },
                'ipPhoneTemplates': { required: false, nullable: true },
                'isPermanent': { required: false, nullable: true },
                'keywordSets': { required: false, nullable: true },
                'layouts': { required: false, nullable: true },
                'locations': { required: false, nullable: true },
                'parent': { required: false, nullable: true },
                'passwordPolicies': { required: false, nullable: true },
                'roles': { required: false, nullable: true },
                'schedules': { required: false, nullable: true },
                'skillCategories': { required: false, nullable: true },
                'skills': { required: false, nullable: true },
                'stationGroups': { required: false, nullable: true },
                'stations': { required: false, nullable: true },
                'stationTemplates': { required: false, nullable: true },
                'statisticGroups': { required: false, nullable: true },
                'users': { required: false, nullable: true },
                'workgroups': { required: false, nullable: true },
                'wrapUpCategories': { required: false, nullable: true },
                'wrapUpCodes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:accessControlGroup'] = AccessControlGroup;

    return AccessControlGroup;
}());

var AccountCode = (function(){
    var hasProps = false;

    function AccountCode() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:accountCode' });
        }

        AccountCode._super.constructor.apply(this, arguments);
    }
    _util.inherits(AccountCode, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AccountCode.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccountCode.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccountCode.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccountCode.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccountCode.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for AccountCode.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccountCode.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccountCode.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccountCode.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for AccountCode.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccountCode.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for AccountCode.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccountCode.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for AccountCode.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AccountCode, '__type', { value: 'urn:inin.com:configuration.people:accountCode' });

    Object.defineProperty(AccountCode, '__propInfo', {
        get: function() {
            var pi = {
                'accessControlGroupAssignment': { required: false, nullable: false },
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'description': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:accountCode'] = AccountCode;

    return AccountCode;
}());

var ClientButton = (function(){
    var hasProps = false;

    function ClientButton() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:clientButton' });
        }

        ClientButton._super.constructor.apply(this, arguments);
    }
    _util.inherits(ClientButton, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ClientButton.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ClientButton.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ClientButton.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientButton.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ClientButton.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ClientButton.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'action', {
            get: function() { return this.__prop_action; },
            set: function(value) {
                if (!(value instanceof Action || value === void 0)) {
                    try {
                        value = new Action(value);
                    } catch (e) {
                        throw new TypeError('Error setting ClientButton.action: ' + e.message);
                    }
                }

                this.__prop_action = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'availability', {
            get: function() { return this.__prop_availability; },
            set: function(value) {
                if (!(value instanceof Availability || value === void 0)) {
                    try {
                        value = new Availability(value);
                    } catch (e) {
                        throw new TypeError('Error setting ClientButton.availability: ' + e.message);
                    }
                }

                this.__prop_availability = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'buttonText', {
            get: function() { return this.__prop_buttonText; },
            set: function(value) {
                if (!(value instanceof Configuration.MultiLanguageString || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.MultiLanguageString(value);
                    } catch (e) {
                        throw new TypeError('Error setting ClientButton.buttonText: ' + e.message);
                    }
                }

                this.__prop_buttonText = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'deactivateAfterUse', {
            get: function() { return this.__prop_deactivateAfterUse; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ClientButton.deactivateAfterUse, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_deactivateAfterUse = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(value instanceof Configuration.MultiLanguageString || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.MultiLanguageString(value);
                    } catch (e) {
                        throw new TypeError('Error setting ClientButton.description: ' + e.message);
                    }
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'displayNotification', {
            get: function() { return this.__prop_displayNotification; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ClientButton.displayNotification, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayNotification = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'enabled', {
            get: function() { return this.__prop_enabled; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ClientButton.enabled, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_enabled = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'iconUri', {
            get: function() { return this.__prop_iconUri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ClientButton.iconUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_iconUri = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'interactionTypes', {
            get: function() { return this.__prop_interactionTypes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionType); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new InteractionType(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientButton.interactionTypes: ' + e.message);
                    }
                }

                this.__prop_interactionTypes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'localApplication', {
            get: function() { return this.__prop_localApplication; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ClientButton.localApplication, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_localApplication = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButton.prototype, 'locations', {
            get: function() { return this.__prop_locations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Location); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Location(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientButton.locations: ' + e.message);
                    }
                }

                this.__prop_locations = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ClientButton, '__type', { value: 'urn:inin.com:configuration.people:clientButton' });

    Object.defineProperty(ClientButton, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'action': { required: false, nullable: false },
                'availability': { required: false, nullable: false },
                'buttonText': { required: false, nullable: true },
                'deactivateAfterUse': { required: false, nullable: true },
                'description': { required: false, nullable: true },
                'displayNotification': { required: false, nullable: true },
                'enabled': { required: false, nullable: true },
                'iconUri': { required: false, nullable: true },
                'interactionTypes': { required: false, nullable: true },
                'localApplication': { required: false, nullable: true },
                'locations': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:clientButton'] = ClientButton;

    return ClientButton;
}());

var ClientConfigurationTemplate = (function(){
    var hasProps = false;

    function ClientConfigurationTemplate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:clientConfigurationTemplate' });
        }

        ClientConfigurationTemplate._super.constructor.apply(this, arguments);
    }
    _util.inherits(ClientConfigurationTemplate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ClientConfigurationTemplate.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ClientConfigurationTemplate.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientConfigurationTemplate.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ClientConfigurationTemplate.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientConfigurationTemplate.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientConfigurationTemplate.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientConfigurationTemplate.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ClientConfigurationTemplate.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientConfigurationTemplate.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ClientConfigurationTemplate.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientConfigurationTemplate.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ClientConfigurationTemplate.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ClientConfigurationTemplate, '__type', { value: 'urn:inin.com:configuration.people:clientConfigurationTemplate' });

    Object.defineProperty(ClientConfigurationTemplate, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:clientConfigurationTemplate'] = ClientConfigurationTemplate;

    return ClientConfigurationTemplate;
}());

var ClientTemplate = (function(){
    var hasProps = false;

    function ClientTemplate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:clientTemplate' });
        }

        ClientTemplate._super.constructor.apply(this, arguments);
    }
    _util.inherits(ClientTemplate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ClientTemplate.prototype, 'applicationId', {
            get: function() { return this.__prop_applicationId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ClientTemplate.applicationId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_applicationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientTemplate.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ClientTemplate.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientTemplate.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ClientTemplate.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientTemplate.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientTemplate.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientTemplate.prototype, 'fileDateLastModified', {
            get: function() { return this.__prop_fileDateLastModified; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ClientTemplate.fileDateLastModified, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fileDateLastModified = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientTemplate.prototype, 'isPermanent', {
            get: function() { return this.__prop_isPermanent; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ClientTemplate.isPermanent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isPermanent = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientTemplate.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ClientTemplate.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientTemplate.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ClientTemplate.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ClientTemplate, '__type', { value: 'urn:inin.com:configuration.people:clientTemplate' });

    Object.defineProperty(ClientTemplate, '__propInfo', {
        get: function() {
            var pi = {
                'applicationId': { required: false, nullable: true },
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'fileDateLastModified': { required: false, nullable: true },
                'isPermanent': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:clientTemplate'] = ClientTemplate;

    return ClientTemplate;
}());

var PasswordPolicy = (function(){
    var hasProps = false;

    function PasswordPolicy() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:passwordPolicy' });
        }

        PasswordPolicy._super.constructor.apply(this, arguments);
    }
    _util.inherits(PasswordPolicy, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PasswordPolicy.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting PasswordPolicy.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for PasswordPolicy.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PasswordPolicy.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for PasswordPolicy.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PasswordPolicy.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting PasswordPolicy.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'accountLockoutDuration', {
            get: function() { return this.__prop_accountLockoutDuration; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PasswordPolicy.accountLockoutDuration, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accountLockoutDuration = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'allSequentialDigitsAllowed', {
            get: function() { return this.__prop_allSequentialDigitsAllowed; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PasswordPolicy.allSequentialDigitsAllowed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allSequentialDigitsAllowed = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PasswordPolicy.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'failedLoginCountResetTime', {
            get: function() { return this.__prop_failedLoginCountResetTime; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PasswordPolicy.failedLoginCountResetTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_failedLoginCountResetTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'maximumFailedLoginAttempts', {
            get: function() { return this.__prop_maximumFailedLoginAttempts; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PasswordPolicy.maximumFailedLoginAttempts, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximumFailedLoginAttempts = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'maximumPasswordAge', {
            get: function() { return this.__prop_maximumPasswordAge; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PasswordPolicy.maximumPasswordAge, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximumPasswordAge = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'maximumPasswordAgeWarningPeriod', {
            get: function() { return this.__prop_maximumPasswordAgeWarningPeriod; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PasswordPolicy.maximumPasswordAgeWarningPeriod, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximumPasswordAgeWarningPeriod = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'minimumLowercaseCharacters', {
            get: function() { return this.__prop_minimumLowercaseCharacters; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PasswordPolicy.minimumLowercaseCharacters, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimumLowercaseCharacters = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'minimumNumericCharacters', {
            get: function() { return this.__prop_minimumNumericCharacters; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PasswordPolicy.minimumNumericCharacters, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimumNumericCharacters = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'minimumPasswordAge', {
            get: function() { return this.__prop_minimumPasswordAge; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PasswordPolicy.minimumPasswordAge, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimumPasswordAge = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'minimumPasswordHistory', {
            get: function() { return this.__prop_minimumPasswordHistory; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PasswordPolicy.minimumPasswordHistory, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimumPasswordHistory = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'minimumPasswordLength', {
            get: function() { return this.__prop_minimumPasswordLength; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PasswordPolicy.minimumPasswordLength, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimumPasswordLength = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'minimumSpecialCharacters', {
            get: function() { return this.__prop_minimumSpecialCharacters; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PasswordPolicy.minimumSpecialCharacters, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimumSpecialCharacters = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'minimumUniqueDtmfDigits', {
            get: function() { return this.__prop_minimumUniqueDtmfDigits; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PasswordPolicy.minimumUniqueDtmfDigits, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimumUniqueDtmfDigits = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'minimumUppercaseCharacters', {
            get: function() { return this.__prop_minimumUppercaseCharacters; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for PasswordPolicy.minimumUppercaseCharacters, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimumUppercaseCharacters = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'roleAssignments', {
            get: function() { return this.__prop_roleAssignments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PasswordPolicy.roleAssignments: ' + e.message);
                    }
                }

                this.__prop_roleAssignments = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'specialCharacters', {
            get: function() { return this.__prop_specialCharacters; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PasswordPolicy.specialCharacters, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_specialCharacters = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'userAssignments', {
            get: function() { return this.__prop_userAssignments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PasswordPolicy.userAssignments: ' + e.message);
                    }
                }

                this.__prop_userAssignments = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicy.prototype, 'userMustChangePassword', {
            get: function() { return this.__prop_userMustChangePassword; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for PasswordPolicy.userMustChangePassword, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userMustChangePassword = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PasswordPolicy, '__type', { value: 'urn:inin.com:configuration.people:passwordPolicy' });

    Object.defineProperty(PasswordPolicy, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'accountLockoutDuration': { required: false, nullable: true },
                'allSequentialDigitsAllowed': { required: false, nullable: true },
                'description': { required: false, nullable: true },
                'failedLoginCountResetTime': { required: false, nullable: true },
                'maximumFailedLoginAttempts': { required: false, nullable: true },
                'maximumPasswordAge': { required: false, nullable: true },
                'maximumPasswordAgeWarningPeriod': { required: false, nullable: true },
                'minimumLowercaseCharacters': { required: false, nullable: true },
                'minimumNumericCharacters': { required: false, nullable: true },
                'minimumPasswordAge': { required: false, nullable: true },
                'minimumPasswordHistory': { required: false, nullable: true },
                'minimumPasswordLength': { required: false, nullable: true },
                'minimumSpecialCharacters': { required: false, nullable: true },
                'minimumUniqueDtmfDigits': { required: false, nullable: true },
                'minimumUppercaseCharacters': { required: false, nullable: true },
                'roleAssignments': { required: false, nullable: true },
                'specialCharacters': { required: false, nullable: true },
                'userAssignments': { required: false, nullable: true },
                'userMustChangePassword': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:passwordPolicy'] = PasswordPolicy;

    return PasswordPolicy;
}());

var QueueColumn = (function(){
    var hasProps = false;

    function QueueColumn() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:queueColumn' });
        }

        QueueColumn._super.constructor.apply(this, arguments);
    }
    _util.inherits(QueueColumn, _util.DataContract);

    function defineProps() {
        Object.defineProperty(QueueColumn.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting QueueColumn.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueColumn.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for QueueColumn.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueColumn.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting QueueColumn.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueColumn.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for QueueColumn.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueColumn.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for QueueColumn.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueColumn.prototype, 'attribute', {
            get: function() { return this.__prop_attribute; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for QueueColumn.attribute, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attribute = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueColumn.prototype, 'attributeType', {
            get: function() { return this.__prop_attributeType; },
            set: function(value) {
                if (!(value instanceof QueueColumnAttributeType || value === void 0 || value === null)) {
                    try {
                        value = new QueueColumnAttributeType(value);
                    } catch (e) {
                        throw new TypeError('Error setting QueueColumn.attributeType: ' + e.message);
                    }
                }

                this.__prop_attributeType = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueColumn.prototype, 'columnName', {
            get: function() { return this.__prop_columnName; },
            set: function(value) {
                if (!(value instanceof Configuration.MultiLanguageString || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.MultiLanguageString(value);
                    } catch (e) {
                        throw new TypeError('Error setting QueueColumn.columnName: ' + e.message);
                    }
                }

                this.__prop_columnName = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueColumn.prototype, 'isPermanent', {
            get: function() { return this.__prop_isPermanent; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for QueueColumn.isPermanent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isPermanent = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QueueColumn, '__type', { value: 'urn:inin.com:configuration.people:queueColumn' });

    Object.defineProperty(QueueColumn, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'attribute': { required: false, nullable: true },
                'attributeType': { required: false, nullable: true },
                'columnName': { required: false, nullable: true },
                'isPermanent': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:queueColumn'] = QueueColumn;

    return QueueColumn;
}());

var ResponseManagementDocument = (function(){
    var hasProps = false;

    function ResponseManagementDocument() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:responseManagementDocument' });
        }

        ResponseManagementDocument._super.constructor.apply(this, arguments);
    }
    _util.inherits(ResponseManagementDocument, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ResponseManagementDocument.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ResponseManagementDocument.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementDocument.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ResponseManagementDocument.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementDocument.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ResponseManagementDocument.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementDocument.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ResponseManagementDocument.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementDocument.prototype, 'documentDateLastModified', {
            get: function() { return this.__prop_documentDateLastModified; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ResponseManagementDocument.documentDateLastModified, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_documentDateLastModified = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementDocument.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ResponseManagementDocument.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementDocument.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ResponseManagementDocument.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ResponseManagementDocument, '__type', { value: 'urn:inin.com:configuration.people:responseManagementDocument' });

    Object.defineProperty(ResponseManagementDocument, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'description': { required: false, nullable: true },
                'documentDateLastModified': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:responseManagementDocument'] = ResponseManagementDocument;

    return ResponseManagementDocument;
}());

var Role = (function(){
    var hasProps = false;

    function Role() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:role' });
        }

        Role._super.constructor.apply(this, arguments);
    }
    _util.inherits(Role, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Role.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Role.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Role.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Role.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Role.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Role.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Role.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Role.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Role.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Role.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Role.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Role.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(Role.prototype, 'accessRights', {
            get: function() { return this.__prop_accessRights; },
            set: function(value) {
                if (!(value instanceof Configuration_People_Accessrights.AccessRightsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration_People_Accessrights.AccessRightsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting Role.accessRights: ' + e.message);
                    }
                }

                this.__prop_accessRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(Role.prototype, 'administrativeRights', {
            get: function() { return this.__prop_administrativeRights; },
            set: function(value) {
                if (!(value instanceof Configuration_People_Accessrights.AdministrativeRightsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration_People_Accessrights.AdministrativeRightsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting Role.administrativeRights: ' + e.message);
                    }
                }

                this.__prop_administrativeRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(Role.prototype, 'clientConfigurationTemplate', {
            get: function() { return this.__prop_clientConfigurationTemplate; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Role.clientConfigurationTemplate: ' + e.message);
                    }
                }

                this.__prop_clientConfigurationTemplate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Role.prototype, 'passwordPolicies', {
            get: function() { return this.__prop_passwordPolicies; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Role.passwordPolicies: ' + e.message);
                    }
                }

                this.__prop_passwordPolicies = value;
            },
            enumerable: true
        });

        Object.defineProperty(Role.prototype, 'securityRights', {
            get: function() { return this.__prop_securityRights; },
            set: function(value) {
                if (!(value instanceof Configuration_People_Accessrights.SecurityRightsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration_People_Accessrights.SecurityRightsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting Role.securityRights: ' + e.message);
                    }
                }

                this.__prop_securityRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(Role.prototype, 'users', {
            get: function() { return this.__prop_users; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Role.users: ' + e.message);
                    }
                }

                this.__prop_users = value;
            },
            enumerable: true
        });

        Object.defineProperty(Role.prototype, 'workgroups', {
            get: function() { return this.__prop_workgroups; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Role.workgroups: ' + e.message);
                    }
                }

                this.__prop_workgroups = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Role, '__type', { value: 'urn:inin.com:configuration.people:role' });

    Object.defineProperty(Role, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'accessRights': { required: false, nullable: true },
                'administrativeRights': { required: false, nullable: true },
                'clientConfigurationTemplate': { required: false, nullable: true },
                'passwordPolicies': { required: false, nullable: true },
                'securityRights': { required: false, nullable: true },
                'users': { required: false, nullable: true },
                'workgroups': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:role'] = Role;

    return Role;
}());

var Schedule = (function(){
    var hasProps = false;

    function Schedule() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:schedule' });
        }

        Schedule._super.constructor.apply(this, arguments);
    }
    _util.inherits(Schedule, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Schedule.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Schedule.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Schedule.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Schedule.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Schedule.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Schedule.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Schedule.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Schedule.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Schedule.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Schedule.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Schedule.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Schedule.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(Schedule.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Schedule.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(Schedule.prototype, 'isActive', {
            get: function() { return this.__prop_isActive; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Schedule.isActive, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isActive = value;
            },
            enumerable: true
        });

        Object.defineProperty(Schedule.prototype, 'keywords', {
            get: function() { return this.__prop_keywords; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for Schedule.keywords, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_keywords = value;
            },
            enumerable: true
        });

        Object.defineProperty(Schedule.prototype, 'scheduleRecurrences', {
            get: function() { return this.__prop_scheduleRecurrences; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ScheduleRecurrence); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ScheduleRecurrence(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Schedule.scheduleRecurrences: ' + e.message);
                    }
                }

                this.__prop_scheduleRecurrences = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Schedule, '__type', { value: 'urn:inin.com:configuration.people:schedule' });

    Object.defineProperty(Schedule, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'description': { required: false, nullable: true },
                'isActive': { required: false, nullable: true },
                'keywords': { required: false, nullable: true },
                'scheduleRecurrences': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:schedule'] = Schedule;

    return Schedule;
}());

var ScheduleRecurrence = (function(){
    var hasProps = false;

    function ScheduleRecurrence() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:scheduleRecurrence' });
        }

        ScheduleRecurrence._super.constructor.apply(this, arguments);
    }
    _util.inherits(ScheduleRecurrence, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ScheduleRecurrence.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ScheduleRecurrence.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'dates', {
            get: function() { return this.__prop_dates; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isNumber(item) && item|0 === item); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer)[] for ScheduleRecurrence.dates, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dates = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'days', {
            get: function() { return this.__prop_days; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isNumber(item) && item|0 === item); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer)[] for ScheduleRecurrence.days, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_days = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'endDate', {
            get: function() { return this.__prop_endDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ScheduleRecurrence.endDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_endDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'endTime', {
            get: function() { return this.__prop_endTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ScheduleRecurrence.endTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_endTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'isAllDay', {
            get: function() { return this.__prop_isAllDay; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ScheduleRecurrence.isAllDay, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isAllDay = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'isDaySpan', {
            get: function() { return this.__prop_isDaySpan; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ScheduleRecurrence.isDaySpan, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isDaySpan = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'isRelative', {
            get: function() { return this.__prop_isRelative; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ScheduleRecurrence.isRelative, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isRelative = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'month', {
            get: function() { return this.__prop_month; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ScheduleRecurrence.month, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_month = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'patternType', {
            get: function() { return this.__prop_patternType; },
            set: function(value) {
                if (!(value instanceof PatternType || value === void 0)) {
                    try {
                        value = new PatternType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ScheduleRecurrence.patternType: ' + e.message);
                    }
                }

                this.__prop_patternType = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'relativeDay', {
            get: function() { return this.__prop_relativeDay; },
            set: function(value) {
                if (!(value instanceof RelativeDayType || value === void 0 || value === null)) {
                    try {
                        value = new RelativeDayType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ScheduleRecurrence.relativeDay: ' + e.message);
                    }
                }

                this.__prop_relativeDay = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'relativeMonthlyInstance', {
            get: function() { return this.__prop_relativeMonthlyInstance; },
            set: function(value) {
                if (!(value instanceof RelativeMonthlyInstanceType || value === void 0 || value === null)) {
                    try {
                        value = new RelativeMonthlyInstanceType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ScheduleRecurrence.relativeMonthlyInstance: ' + e.message);
                    }
                }

                this.__prop_relativeMonthlyInstance = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'startDate', {
            get: function() { return this.__prop_startDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ScheduleRecurrence.startDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_startDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'startTime', {
            get: function() { return this.__prop_startTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for ScheduleRecurrence.startTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_startTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'weeklyEndTime', {
            get: function() { return this.__prop_weeklyEndTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ScheduleRecurrence.weeklyEndTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_weeklyEndTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleRecurrence.prototype, 'weeklyStartTime', {
            get: function() { return this.__prop_weeklyStartTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ScheduleRecurrence.weeklyStartTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_weeklyStartTime = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ScheduleRecurrence, '__type', { value: 'urn:inin.com:configuration.people:scheduleRecurrence' });

    Object.defineProperty(ScheduleRecurrence, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'dates': { required: false, nullable: true },
                'days': { required: false, nullable: true },
                'endDate': { required: false, nullable: false },
                'endTime': { required: false, nullable: false },
                'isAllDay': { required: false, nullable: true },
                'isDaySpan': { required: false, nullable: true },
                'isRelative': { required: false, nullable: true },
                'month': { required: false, nullable: true },
                'patternType': { required: false, nullable: false },
                'relativeDay': { required: false, nullable: true },
                'relativeMonthlyInstance': { required: false, nullable: true },
                'startDate': { required: false, nullable: false },
                'startTime': { required: false, nullable: false },
                'weeklyEndTime': { required: false, nullable: true },
                'weeklyStartTime': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:scheduleRecurrence'] = ScheduleRecurrence;

    return ScheduleRecurrence;
}());

var SecureInputForm = (function(){
    var hasProps = false;

    function SecureInputForm() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:secureInputForm' });
        }

        SecureInputForm._super.constructor.apply(this, arguments);
    }
    _util.inherits(SecureInputForm, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SecureInputForm.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecureInputForm.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputForm.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SecureInputForm.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputForm.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SecureInputForm.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputForm.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SecureInputForm.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputForm.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SecureInputForm.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputForm.prototype, 'customParameters', {
            get: function() { return this.__prop_customParameters; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SecureInputFormCustomParameter); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SecureInputFormCustomParameter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SecureInputForm.customParameters: ' + e.message);
                    }
                }

                this.__prop_customParameters = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputForm.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SecureInputForm.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputForm.prototype, 'formFields', {
            get: function() { return this.__prop_formFields; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SecureInputFormFieldDefinition); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SecureInputFormFieldDefinition(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SecureInputForm.formFields: ' + e.message);
                    }
                }

                this.__prop_formFields = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputForm.prototype, 'formName', {
            get: function() { return this.__prop_formName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SecureInputForm.formName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_formName = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputForm.prototype, 'formType', {
            get: function() { return this.__prop_formType; },
            set: function(value) {
                if (!(value instanceof SecureInputFormType || value === void 0 || value === null)) {
                    try {
                        value = new SecureInputFormType(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecureInputForm.formType: ' + e.message);
                    }
                }

                this.__prop_formType = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputForm.prototype, 'ivrHandlerName', {
            get: function() { return this.__prop_ivrHandlerName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SecureInputForm.ivrHandlerName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ivrHandlerName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SecureInputForm, '__type', { value: 'urn:inin.com:configuration.people:secureInputForm' });

    Object.defineProperty(SecureInputForm, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'customParameters': { required: false, nullable: true },
                'description': { required: false, nullable: true },
                'formFields': { required: false, nullable: true },
                'formName': { required: false, nullable: true },
                'formType': { required: false, nullable: true },
                'ivrHandlerName': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:secureInputForm'] = SecureInputForm;

    return SecureInputForm;
}());

var SecureInputFormCustomParameter = (function(){
    var hasProps = false;

    function SecureInputFormCustomParameter() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:secureInputFormCustomParameter' });
        }

        SecureInputFormCustomParameter._super.constructor.apply(this, arguments);
    }
    _util.inherits(SecureInputFormCustomParameter, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SecureInputFormCustomParameter.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SecureInputFormCustomParameter.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputFormCustomParameter.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SecureInputFormCustomParameter.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SecureInputFormCustomParameter, '__type', { value: 'urn:inin.com:configuration.people:secureInputFormCustomParameter' });

    Object.defineProperty(SecureInputFormCustomParameter, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'value': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:secureInputFormCustomParameter'] = SecureInputFormCustomParameter;

    return SecureInputFormCustomParameter;
}());

var SecureInputFormFieldDefinition = (function(){
    var hasProps = false;

    function SecureInputFormFieldDefinition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:secureInputFormFieldDefinition' });
        }

        SecureInputFormFieldDefinition._super.constructor.apply(this, arguments);
    }
    _util.inherits(SecureInputFormFieldDefinition, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SecureInputFormFieldDefinition.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SecureInputFormFieldDefinition.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputFormFieldDefinition.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SecureInputFormFieldDefinition.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SecureInputFormFieldDefinition, '__type', { value: 'urn:inin.com:configuration.people:secureInputFormFieldDefinition' });

    Object.defineProperty(SecureInputFormFieldDefinition, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'displayName': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:secureInputFormFieldDefinition'] = SecureInputFormFieldDefinition;

    return SecureInputFormFieldDefinition;
}());

var SkillCategory = (function(){
    var hasProps = false;

    function SkillCategory() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:skillCategory' });
        }

        SkillCategory._super.constructor.apply(this, arguments);
    }
    _util.inherits(SkillCategory, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SkillCategory.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SkillCategory.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillCategory.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SkillCategory.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillCategory.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SkillCategory.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillCategory.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SkillCategory.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillCategory.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SkillCategory.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillCategory.prototype, 'skills', {
            get: function() { return this.__prop_skills; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SkillCategory.skills: ' + e.message);
                    }
                }

                this.__prop_skills = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SkillCategory, '__type', { value: 'urn:inin.com:configuration.people:skillCategory' });

    Object.defineProperty(SkillCategory, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'skills': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:skillCategory'] = SkillCategory;

    return SkillCategory;
}());

var Skill = (function(){
    var hasProps = false;

    function Skill() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:skill' });
        }

        Skill._super.constructor.apply(this, arguments);
    }
    _util.inherits(Skill, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Skill.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Skill.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Skill.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Skill.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Skill.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Skill.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Skill.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Skill.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Skill.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Skill.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Skill.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Skill.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(Skill.prototype, 'userAssignments', {
            get: function() { return this.__prop_userAssignments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.SkillSetting); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.SkillSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Skill.userAssignments: ' + e.message);
                    }
                }

                this.__prop_userAssignments = value;
            },
            enumerable: true
        });

        Object.defineProperty(Skill.prototype, 'workgroupAssignments', {
            get: function() { return this.__prop_workgroupAssignments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.SkillSetting); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.SkillSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Skill.workgroupAssignments: ' + e.message);
                    }
                }

                this.__prop_workgroupAssignments = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Skill, '__type', { value: 'urn:inin.com:configuration.people:skill' });

    Object.defineProperty(Skill, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'userAssignments': { required: false, nullable: true },
                'workgroupAssignments': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:skill'] = Skill;

    return Skill;
}());

var StatisticParameterGroup = (function(){
    var hasProps = false;

    function StatisticParameterGroup() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:statisticParameterGroup' });
        }

        StatisticParameterGroup._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticParameterGroup, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatisticParameterGroup.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting StatisticParameterGroup.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticParameterGroup.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for StatisticParameterGroup.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticParameterGroup.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticParameterGroup.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticParameterGroup.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for StatisticParameterGroup.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticParameterGroup.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StatisticParameterGroup.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticParameterGroup.prototype, 'skillCategories', {
            get: function() { return this.__prop_skillCategories; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticParameterGroup.skillCategories: ' + e.message);
                    }
                }

                this.__prop_skillCategories = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticParameterGroup, '__type', { value: 'urn:inin.com:configuration.people:statisticParameterGroup' });

    Object.defineProperty(StatisticParameterGroup, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'skillCategories': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:statisticParameterGroup'] = StatisticParameterGroup;

    return StatisticParameterGroup;
}());

var User = (function(){
    var hasProps = false;

    function User() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:user' });
        }

        User._super.constructor.apply(this, arguments);
    }
    _util.inherits(User, _util.DataContract);

    function defineProps() {
        Object.defineProperty(User.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for User.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting User.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for User.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'accessRights', {
            get: function() { return this.__prop_accessRights; },
            set: function(value) {
                if (!(value instanceof Configuration_People_Accessrights.AccessRightsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration_People_Accessrights.AccessRightsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.accessRights: ' + e.message);
                    }
                }

                this.__prop_accessRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'acdAgentGreeting', {
            get: function() { return this.__prop_acdAgentGreeting; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for User.acdAgentGreeting, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_acdAgentGreeting = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'acdAgentGreetingFile', {
            get: function() { return this.__prop_acdAgentGreetingFile; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.acdAgentGreetingFile, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_acdAgentGreetingFile = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'administrativeRights', {
            get: function() { return this.__prop_administrativeRights; },
            set: function(value) {
                if (!(value instanceof Configuration_People_Accessrights.AdministrativeRightsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration_People_Accessrights.AdministrativeRightsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.administrativeRights: ' + e.message);
                    }
                }

                this.__prop_administrativeRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'alias', {
            get: function() { return this.__prop_alias; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.alias, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alias = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'autoAnswerAcdInteractions', {
            get: function() { return this.__prop_autoAnswerAcdInteractions; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for User.autoAnswerAcdInteractions, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_autoAnswerAcdInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'autoAnswerNonAcdInteractions', {
            get: function() { return this.__prop_autoAnswerNonAcdInteractions; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for User.autoAnswerNonAcdInteractions, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_autoAnswerNonAcdInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'callbackEnabledWorkgroups', {
            get: function() { return this.__prop_callbackEnabledWorkgroups; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting User.callbackEnabledWorkgroups: ' + e.message);
                    }
                }

                this.__prop_callbackEnabledWorkgroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'clientConfigDateLastModified', {
            get: function() { return this.__prop_clientConfigDateLastModified; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for User.clientConfigDateLastModified, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_clientConfigDateLastModified = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'clientConfigurationTemplate', {
            get: function() { return this.__prop_clientConfigurationTemplate; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.clientConfigurationTemplate: ' + e.message);
                    }
                }

                this.__prop_clientConfigurationTemplate = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'clientTemplate', {
            get: function() { return this.__prop_clientTemplate; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ClientTemplateInfo); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ClientTemplateInfo(item); });
                    } catch (e) {
                        throw new TypeError('Error setting User.clientTemplate: ' + e.message);
                    }
                }

                this.__prop_clientTemplate = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'cost', {
            get: function() { return this.__prop_cost; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for User.cost, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_cost = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'defaultWorkstation', {
            get: function() { return this.__prop_defaultWorkstation; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.defaultWorkstation: ' + e.message);
                    }
                }

                this.__prop_defaultWorkstation = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'excludeFromDirectory', {
            get: function() { return this.__prop_excludeFromDirectory; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for User.excludeFromDirectory, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_excludeFromDirectory = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'extension', {
            get: function() { return this.__prop_extension; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.extension, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_extension = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'faxCapability', {
            get: function() { return this.__prop_faxCapability; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for User.faxCapability, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_faxCapability = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'homeSite', {
            get: function() { return this.__prop_homeSite; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for User.homeSite, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_homeSite = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'interactionDisconnectedAction', {
            get: function() { return this.__prop_interactionDisconnectedAction; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.interactionDisconnectedAction: ' + e.message);
                    }
                }

                this.__prop_interactionDisconnectedAction = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'interactionOfferingAction', {
            get: function() { return this.__prop_interactionOfferingAction; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.interactionOfferingAction: ' + e.message);
                    }
                }

                this.__prop_interactionOfferingAction = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'interactionOfferingTimeout', {
            get: function() { return this.__prop_interactionOfferingTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.interactionOfferingTimeout: ' + e.message);
                    }
                }

                this.__prop_interactionOfferingTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'licenseProperties', {
            get: function() { return this.__prop_licenseProperties; },
            set: function(value) {
                if (!(value instanceof Configuration.LicenseProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.LicenseProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.licenseProperties: ' + e.message);
                    }
                }

                this.__prop_licenseProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'location', {
            get: function() { return this.__prop_location; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.location: ' + e.message);
                    }
                }

                this.__prop_location = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'lyncIntegrationEnabled', {
            get: function() { return this.__prop_lyncIntegrationEnabled; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for User.lyncIntegrationEnabled, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lyncIntegrationEnabled = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'lyncLineUri', {
            get: function() { return this.__prop_lyncLineUri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.lyncLineUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lyncLineUri = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'lyncOption', {
            get: function() { return this.__prop_lyncOption; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LyncOption); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new LyncOption(item); });
                    } catch (e) {
                        throw new TypeError('Error setting User.lyncOption: ' + e.message);
                    }
                }

                this.__prop_lyncOption = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'lyncSipAddress', {
            get: function() { return this.__prop_lyncSipAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.lyncSipAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lyncSipAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'mailboxProperties', {
            get: function() { return this.__prop_mailboxProperties; },
            set: function(value) {
                if (!(value instanceof Configuration.MailboxProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.MailboxProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.mailboxProperties: ' + e.message);
                    }
                }

                this.__prop_mailboxProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'mwiAddress', {
            get: function() { return this.__prop_mwiAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.mwiAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mwiAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'mwiEnabled', {
            get: function() { return this.__prop_mwiEnabled; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for User.mwiEnabled, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mwiEnabled = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'mwiMode', {
            get: function() { return this.__prop_mwiMode; },
            set: function(value) {
                if (!(value instanceof MwiMode || value === void 0 || value === null)) {
                    try {
                        value = new MwiMode(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.mwiMode: ' + e.message);
                    }
                }

                this.__prop_mwiMode = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'nameSpellingsAsr', {
            get: function() { return this.__prop_nameSpellingsAsr; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for User.nameSpellingsAsr, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_nameSpellingsAsr = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'nameSpellingTts', {
            get: function() { return this.__prop_nameSpellingTts; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.nameSpellingTts, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_nameSpellingTts = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'ntDomainUser', {
            get: function() { return this.__prop_ntDomainUser; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.ntDomainUser, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ntDomainUser = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'outboundAni', {
            get: function() { return this.__prop_outboundAni; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.outboundAni, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_outboundAni = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'outlookIntegrationEnabled', {
            get: function() { return this.__prop_outlookIntegrationEnabled; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for User.outlookIntegrationEnabled, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_outlookIntegrationEnabled = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'pagerActive', {
            get: function() { return this.__prop_pagerActive; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for User.pagerActive, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pagerActive = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'parkedCallExtension', {
            get: function() { return this.__prop_parkedCallExtension; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableStringProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableStringProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.parkedCallExtension: ' + e.message);
                    }
                }

                this.__prop_parkedCallExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'parkedCallTimeout', {
            get: function() { return this.__prop_parkedCallTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.parkedCallTimeout: ' + e.message);
                    }
                }

                this.__prop_parkedCallTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'parkedChatExtension', {
            get: function() { return this.__prop_parkedChatExtension; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableStringProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableStringProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.parkedChatExtension: ' + e.message);
                    }
                }

                this.__prop_parkedChatExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'parkedChatTimeout', {
            get: function() { return this.__prop_parkedChatTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.parkedChatTimeout: ' + e.message);
                    }
                }

                this.__prop_parkedChatTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'parkedEmailExtension', {
            get: function() { return this.__prop_parkedEmailExtension; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableStringProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableStringProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.parkedEmailExtension: ' + e.message);
                    }
                }

                this.__prop_parkedEmailExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'parkedEmailTimeout', {
            get: function() { return this.__prop_parkedEmailTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.parkedEmailTimeout: ' + e.message);
                    }
                }

                this.__prop_parkedEmailTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'parkedGenericObjectExtension', {
            get: function() { return this.__prop_parkedGenericObjectExtension; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableStringProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableStringProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.parkedGenericObjectExtension: ' + e.message);
                    }
                }

                this.__prop_parkedGenericObjectExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'parkedGenericObjectTimeout', {
            get: function() { return this.__prop_parkedGenericObjectTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.parkedGenericObjectTimeout: ' + e.message);
                    }
                }

                this.__prop_parkedGenericObjectTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'passwordPolicies', {
            get: function() { return this.__prop_passwordPolicies; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.passwordPolicies: ' + e.message);
                    }
                }

                this.__prop_passwordPolicies = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'personalInformationProperties', {
            get: function() { return this.__prop_personalInformationProperties; },
            set: function(value) {
                if (!(value instanceof PersonalInformationProperties || value === void 0 || value === null)) {
                    try {
                        value = new PersonalInformationProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.personalInformationProperties: ' + e.message);
                    }
                }

                this.__prop_personalInformationProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'preferredLanguage', {
            get: function() { return this.__prop_preferredLanguage; },
            set: function(value) {
                if (!(value instanceof Configuration.IdDisplayName || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.IdDisplayName(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.preferredLanguage: ' + e.message);
                    }
                }

                this.__prop_preferredLanguage = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'roles', {
            get: function() { return this.__prop_roles; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.roles: ' + e.message);
                    }
                }

                this.__prop_roles = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'securityRights', {
            get: function() { return this.__prop_securityRights; },
            set: function(value) {
                if (!(value instanceof Configuration_People_Accessrights.SecurityRightsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration_People_Accessrights.SecurityRightsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.securityRights: ' + e.message);
                    }
                }

                this.__prop_securityRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'skills', {
            get: function() { return this.__prop_skills; },
            set: function(value) {
                if (!(value instanceof Configuration.SkillSettingsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.SkillSettingsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.skills: ' + e.message);
                    }
                }

                this.__prop_skills = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'statisticsShiftStarts', {
            get: function() { return this.__prop_statisticsShiftStarts; },
            set: function(value) {
                if (_util.isArray(value) && value.every(function(v){ return _util.isNumber(v); })) {
                    value = value.map(function(v){ return new _util.Duration(v); });
                }
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isDuration(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration[] for User.statisticsShiftStarts, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statisticsShiftStarts = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'statusText', {
            get: function() { return this.__prop_statusText; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.statusText, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusText = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'umDestination', {
            get: function() { return this.__prop_umDestination; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.umDestination, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_umDestination = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'umRemoteOverride', {
            get: function() { return this.__prop_umRemoteOverride; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.umRemoteOverride, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_umRemoteOverride = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'clientConfigurationProperties', {
            get: function() { return this.__prop_clientConfigurationProperties; },
            set: function(value) {
                if (!(value instanceof UserClientConfigurationProperties || value === void 0 || value === null)) {
                    try {
                        value = new UserClientConfigurationProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.clientConfigurationProperties: ' + e.message);
                    }
                }

                this.__prop_clientConfigurationProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'utilizations', {
            get: function() { return this.__prop_utilizations; },
            set: function(value) {
                if (!(value instanceof Configuration.UtilizationSettingsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.UtilizationSettingsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting User.utilizations: ' + e.message);
                    }
                }

                this.__prop_utilizations = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'vniStation', {
            get: function() { return this.__prop_vniStation; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for User.vniStation, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_vniStation = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'whisperToneLevel', {
            get: function() { return this.__prop_whisperToneLevel; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for User.whisperToneLevel, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_whisperToneLevel = value;
            },
            enumerable: true
        });

        Object.defineProperty(User.prototype, 'workgroups', {
            get: function() { return this.__prop_workgroups; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting User.workgroups: ' + e.message);
                    }
                }

                this.__prop_workgroups = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(User, '__type', { value: 'urn:inin.com:configuration.people:user' });

    Object.defineProperty(User, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'accessRights': { required: false, nullable: true },
                'acdAgentGreeting': { required: false, nullable: true },
                'acdAgentGreetingFile': { required: false, nullable: true },
                'administrativeRights': { required: false, nullable: true },
                'alias': { required: false, nullable: true },
                'autoAnswerAcdInteractions': { required: false, nullable: true },
                'autoAnswerNonAcdInteractions': { required: false, nullable: true },
                'callbackEnabledWorkgroups': { required: false, nullable: true },
                'clientConfigDateLastModified': { required: false, nullable: true },
                'clientConfigurationTemplate': { required: false, nullable: true },
                'clientTemplate': { required: false, nullable: true },
                'cost': { required: false, nullable: true },
                'defaultWorkstation': { required: false, nullable: true },
                'excludeFromDirectory': { required: false, nullable: true },
                'extension': { required: false, nullable: true },
                'faxCapability': { required: false, nullable: true },
                'homeSite': { required: false, nullable: true },
                'interactionDisconnectedAction': { required: false, nullable: true },
                'interactionOfferingAction': { required: false, nullable: true },
                'interactionOfferingTimeout': { required: false, nullable: true },
                'licenseProperties': { required: false, nullable: true },
                'location': { required: false, nullable: true },
                'lyncIntegrationEnabled': { required: false, nullable: true },
                'lyncLineUri': { required: false, nullable: true },
                'lyncOption': { required: false, nullable: true },
                'lyncSipAddress': { required: false, nullable: true },
                'mailboxProperties': { required: false, nullable: true },
                'mwiAddress': { required: false, nullable: true },
                'mwiEnabled': { required: false, nullable: true },
                'mwiMode': { required: false, nullable: true },
                'nameSpellingsAsr': { required: false, nullable: true },
                'nameSpellingTts': { required: false, nullable: true },
                'ntDomainUser': { required: false, nullable: true },
                'outboundAni': { required: false, nullable: true },
                'outlookIntegrationEnabled': { required: false, nullable: true },
                'pagerActive': { required: false, nullable: true },
                'parkedCallExtension': { required: false, nullable: true },
                'parkedCallTimeout': { required: false, nullable: true },
                'parkedChatExtension': { required: false, nullable: true },
                'parkedChatTimeout': { required: false, nullable: true },
                'parkedEmailExtension': { required: false, nullable: true },
                'parkedEmailTimeout': { required: false, nullable: true },
                'parkedGenericObjectExtension': { required: false, nullable: true },
                'parkedGenericObjectTimeout': { required: false, nullable: true },
                'passwordPolicies': { required: false, nullable: true },
                'personalInformationProperties': { required: false, nullable: true },
                'preferredLanguage': { required: false, nullable: true },
                'roles': { required: false, nullable: true },
                'securityRights': { required: false, nullable: true },
                'skills': { required: false, nullable: true },
                'statisticsShiftStarts': { required: false, nullable: true },
                'statusText': { required: false, nullable: true },
                'umDestination': { required: false, nullable: true },
                'umRemoteOverride': { required: false, nullable: true },
                'clientConfigurationProperties': { required: false, nullable: true },
                'utilizations': { required: false, nullable: true },
                'vniStation': { required: false, nullable: true },
                'whisperToneLevel': { required: false, nullable: true },
                'workgroups': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:user'] = User;

    return User;
}());

var ClientTemplateInfo = (function(){
    var hasProps = false;

    function ClientTemplateInfo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:clientTemplateInfo' });
        }

        ClientTemplateInfo._super.constructor.apply(this, arguments);
    }
    _util.inherits(ClientTemplateInfo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ClientTemplateInfo.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ClientTemplateInfo.id: ' + e.message);
                    }
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientTemplateInfo.prototype, 'applicationId', {
            get: function() { return this.__prop_applicationId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ClientTemplateInfo.applicationId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_applicationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientTemplateInfo.prototype, 'publishedDate', {
            get: function() { return this.__prop_publishedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for ClientTemplateInfo.publishedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_publishedDate = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ClientTemplateInfo, '__type', { value: 'urn:inin.com:configuration.people:clientTemplateInfo' });

    Object.defineProperty(ClientTemplateInfo, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'applicationId': { required: true, nullable: false },
                'publishedDate': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:clientTemplateInfo'] = ClientTemplateInfo;

    return ClientTemplateInfo;
}());

var PersonalInformationProperties = (function(){
    var hasProps = false;

    function PersonalInformationProperties() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:personalInformationProperties' });
        }

        PersonalInformationProperties._super.constructor.apply(this, arguments);
    }
    _util.inherits(PersonalInformationProperties, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PersonalInformationProperties.prototype, 'assistantName', {
            get: function() { return this.__prop_assistantName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.assistantName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_assistantName = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'city', {
            get: function() { return this.__prop_city; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.city, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_city = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'companyName', {
            get: function() { return this.__prop_companyName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.companyName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_companyName = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'country', {
            get: function() { return this.__prop_country; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.country, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_country = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'departmentName', {
            get: function() { return this.__prop_departmentName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.departmentName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_departmentName = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'emailAddress', {
            get: function() { return this.__prop_emailAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.emailAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'emailAlias', {
            get: function() { return this.__prop_emailAlias; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.emailAlias, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailAlias = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'givenName', {
            get: function() { return this.__prop_givenName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.givenName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_givenName = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'officeLocation', {
            get: function() { return this.__prop_officeLocation; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.officeLocation, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_officeLocation = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'phoneNumberOfAssistant', {
            get: function() { return this.__prop_phoneNumberOfAssistant; },
            set: function(value) {
                if (!(value instanceof Configuration.BasicPhoneNumber || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.BasicPhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting PersonalInformationProperties.phoneNumberOfAssistant: ' + e.message);
                    }
                }

                this.__prop_phoneNumberOfAssistant = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'phoneNumberOfBusiness1', {
            get: function() { return this.__prop_phoneNumberOfBusiness1; },
            set: function(value) {
                if (!(value instanceof Configuration.BasicPhoneNumber || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.BasicPhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting PersonalInformationProperties.phoneNumberOfBusiness1: ' + e.message);
                    }
                }

                this.__prop_phoneNumberOfBusiness1 = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'phoneNumberOfBusiness2', {
            get: function() { return this.__prop_phoneNumberOfBusiness2; },
            set: function(value) {
                if (!(value instanceof Configuration.BasicPhoneNumber || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.BasicPhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting PersonalInformationProperties.phoneNumberOfBusiness2: ' + e.message);
                    }
                }

                this.__prop_phoneNumberOfBusiness2 = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'phoneNumberOfFax', {
            get: function() { return this.__prop_phoneNumberOfFax; },
            set: function(value) {
                if (!(value instanceof Configuration.BasicPhoneNumber || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.BasicPhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting PersonalInformationProperties.phoneNumberOfFax: ' + e.message);
                    }
                }

                this.__prop_phoneNumberOfFax = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'phoneNumberOfHome1', {
            get: function() { return this.__prop_phoneNumberOfHome1; },
            set: function(value) {
                if (!(value instanceof Configuration.BasicPhoneNumber || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.BasicPhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting PersonalInformationProperties.phoneNumberOfHome1: ' + e.message);
                    }
                }

                this.__prop_phoneNumberOfHome1 = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'phoneNumberOfHome2', {
            get: function() { return this.__prop_phoneNumberOfHome2; },
            set: function(value) {
                if (!(value instanceof Configuration.BasicPhoneNumber || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.BasicPhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting PersonalInformationProperties.phoneNumberOfHome2: ' + e.message);
                    }
                }

                this.__prop_phoneNumberOfHome2 = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'phoneNumberOfMobile', {
            get: function() { return this.__prop_phoneNumberOfMobile; },
            set: function(value) {
                if (!(value instanceof Configuration.BasicPhoneNumber || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.BasicPhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting PersonalInformationProperties.phoneNumberOfMobile: ' + e.message);
                    }
                }

                this.__prop_phoneNumberOfMobile = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'phoneNumberOfPager', {
            get: function() { return this.__prop_phoneNumberOfPager; },
            set: function(value) {
                if (!(value instanceof Configuration.BasicPhoneNumber || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.BasicPhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting PersonalInformationProperties.phoneNumberOfPager: ' + e.message);
                    }
                }

                this.__prop_phoneNumberOfPager = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'postalCode', {
            get: function() { return this.__prop_postalCode; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.postalCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_postalCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'stateOrProvince', {
            get: function() { return this.__prop_stateOrProvince; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.stateOrProvince, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_stateOrProvince = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'streetAddress', {
            get: function() { return this.__prop_streetAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.streetAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_streetAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'surname', {
            get: function() { return this.__prop_surname; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.surname, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_surname = value;
            },
            enumerable: true
        });

        Object.defineProperty(PersonalInformationProperties.prototype, 'title', {
            get: function() { return this.__prop_title; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PersonalInformationProperties.title, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_title = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PersonalInformationProperties, '__type', { value: 'urn:inin.com:configuration.people:personalInformationProperties' });

    Object.defineProperty(PersonalInformationProperties, '__propInfo', {
        get: function() {
            var pi = {
                'assistantName': { required: false, nullable: true },
                'city': { required: false, nullable: true },
                'companyName': { required: false, nullable: true },
                'country': { required: false, nullable: true },
                'departmentName': { required: false, nullable: true },
                'emailAddress': { required: false, nullable: true },
                'emailAlias': { required: false, nullable: true },
                'givenName': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'officeLocation': { required: false, nullable: true },
                'phoneNumberOfAssistant': { required: false, nullable: true },
                'phoneNumberOfBusiness1': { required: false, nullable: true },
                'phoneNumberOfBusiness2': { required: false, nullable: true },
                'phoneNumberOfFax': { required: false, nullable: true },
                'phoneNumberOfHome1': { required: false, nullable: true },
                'phoneNumberOfHome2': { required: false, nullable: true },
                'phoneNumberOfMobile': { required: false, nullable: true },
                'phoneNumberOfPager': { required: false, nullable: true },
                'postalCode': { required: false, nullable: true },
                'stateOrProvince': { required: false, nullable: true },
                'streetAddress': { required: false, nullable: true },
                'surname': { required: false, nullable: true },
                'title': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:personalInformationProperties'] = PersonalInformationProperties;

    return PersonalInformationProperties;
}());

var UserClientConfigurationProperties = (function(){
    var hasProps = false;

    function UserClientConfigurationProperties() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:userClientConfigurationProperties' });
        }

        UserClientConfigurationProperties._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserClientConfigurationProperties, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserClientConfigurationProperties.prototype, 'accountCodeSortByNumber', {
            get: function() { return this.__prop_accountCodeSortByNumber; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.accountCodeSortByNumber: ' + e.message);
                    }
                }

                this.__prop_accountCodeSortByNumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'activateOutOfOfficeMessage', {
            get: function() { return this.__prop_activateOutOfOfficeMessage; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.activateOutOfOfficeMessage: ' + e.message);
                    }
                }

                this.__prop_activateOutOfOfficeMessage = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'alertOnSecurityBelowRequestedLevel', {
            get: function() { return this.__prop_alertOnSecurityBelowRequestedLevel; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.alertOnSecurityBelowRequestedLevel: ' + e.message);
                    }
                }

                this.__prop_alertOnSecurityBelowRequestedLevel = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'analyzeOutgoingExternalCalls', {
            get: function() { return this.__prop_analyzeOutgoingExternalCalls; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.analyzeOutgoingExternalCalls: ' + e.message);
                    }
                }

                this.__prop_analyzeOutgoingExternalCalls = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'autoPlayVoicemail', {
            get: function() { return this.__prop_autoPlayVoicemail; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.autoPlayVoicemail: ' + e.message);
                    }
                }

                this.__prop_autoPlayVoicemail = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'autoSelectInteractionOnDisconnect', {
            get: function() { return this.__prop_autoSelectInteractionOnDisconnect; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.autoSelectInteractionOnDisconnect: ' + e.message);
                    }
                }

                this.__prop_autoSelectInteractionOnDisconnect = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'callForwardAll', {
            get: function() { return this.__prop_callForwardAll; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.callForwardAll: ' + e.message);
                    }
                }

                this.__prop_callForwardAll = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'callForwardAllMode', {
            get: function() { return this.__prop_callForwardAllMode; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableStringProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableStringProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.callForwardAllMode: ' + e.message);
                    }
                }

                this.__prop_callForwardAllMode = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'callForwardAllowChange', {
            get: function() { return this.__prop_callForwardAllowChange; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.callForwardAllowChange: ' + e.message);
                    }
                }

                this.__prop_callForwardAllowChange = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'changeAlertingProperties', {
            get: function() { return this.__prop_changeAlertingProperties; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.changeAlertingProperties: ' + e.message);
                    }
                }

                this.__prop_changeAlertingProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'changeEfaqProperties', {
            get: function() { return this.__prop_changeEfaqProperties; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.changeEfaqProperties: ' + e.message);
                    }
                }

                this.__prop_changeEfaqProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'changeFollowMeProperties', {
            get: function() { return this.__prop_changeFollowMeProperties; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.changeFollowMeProperties: ' + e.message);
                    }
                }

                this.__prop_changeFollowMeProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'changeQueueProperties', {
            get: function() { return this.__prop_changeQueueProperties; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.changeQueueProperties: ' + e.message);
                    }
                }

                this.__prop_changeQueueProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'confirmDragAndDrop', {
            get: function() { return this.__prop_confirmDragAndDrop; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.confirmDragAndDrop: ' + e.message);
                    }
                }

                this.__prop_confirmDragAndDrop = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'confirmSingleClickDialing', {
            get: function() { return this.__prop_confirmSingleClickDialing; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.confirmSingleClickDialing: ' + e.message);
                    }
                }

                this.__prop_confirmSingleClickDialing = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'eFaqSearchOption', {
            get: function() { return this.__prop_eFaqSearchOption; },
            set: function(value) {
                if (!(value instanceof EFaqSearchOptions || value === void 0 || value === null)) {
                    try {
                        value = new EFaqSearchOptions(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.eFaqSearchOption: ' + e.message);
                    }
                }

                this.__prop_eFaqSearchOption = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'emailDownloadHTMLPictures', {
            get: function() { return this.__prop_emailDownloadHTMLPictures; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.emailDownloadHTMLPictures: ' + e.message);
                    }
                }

                this.__prop_emailDownloadHTMLPictures = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'enableAdvancedDialing', {
            get: function() { return this.__prop_enableAdvancedDialing; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.enableAdvancedDialing: ' + e.message);
                    }
                }

                this.__prop_enableAdvancedDialing = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'externalCallTimeout', {
            get: function() { return this.__prop_externalCallTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableIntProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableIntProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.externalCallTimeout: ' + e.message);
                    }
                }

                this.__prop_externalCallTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'followMe', {
            get: function() { return this.__prop_followMe; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FollowMe); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new FollowMe(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.followMe: ' + e.message);
                    }
                }

                this.__prop_followMe = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'muteOnTransfer', {
            get: function() { return this.__prop_muteOnTransfer; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.muteOnTransfer: ' + e.message);
                    }
                }

                this.__prop_muteOnTransfer = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'openNewCallWindowForIncomingCalls', {
            get: function() { return this.__prop_openNewCallWindowForIncomingCalls; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.openNewCallWindowForIncomingCalls: ' + e.message);
                    }
                }

                this.__prop_openNewCallWindowForIncomingCalls = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'ringWhenOnPhone', {
            get: function() { return this.__prop_ringWhenOnPhone; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.ringWhenOnPhone: ' + e.message);
                    }
                }

                this.__prop_ringWhenOnPhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'screenCalls', {
            get: function() { return this.__prop_screenCalls; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.screenCalls: ' + e.message);
                    }
                }

                this.__prop_screenCalls = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserClientConfigurationProperties.prototype, 'showStatusInSystemTray', {
            get: function() { return this.__prop_showStatusInSystemTray; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting UserClientConfigurationProperties.showStatusInSystemTray: ' + e.message);
                    }
                }

                this.__prop_showStatusInSystemTray = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserClientConfigurationProperties, '__type', { value: 'urn:inin.com:configuration.people:userClientConfigurationProperties' });

    Object.defineProperty(UserClientConfigurationProperties, '__propInfo', {
        get: function() {
            var pi = {
                'accountCodeSortByNumber': { required: false, nullable: true },
                'activateOutOfOfficeMessage': { required: false, nullable: true },
                'alertOnSecurityBelowRequestedLevel': { required: false, nullable: true },
                'analyzeOutgoingExternalCalls': { required: false, nullable: true },
                'autoPlayVoicemail': { required: false, nullable: true },
                'autoSelectInteractionOnDisconnect': { required: false, nullable: true },
                'callForwardAll': { required: false, nullable: true },
                'callForwardAllMode': { required: false, nullable: true },
                'callForwardAllowChange': { required: false, nullable: true },
                'changeAlertingProperties': { required: false, nullable: true },
                'changeEfaqProperties': { required: false, nullable: true },
                'changeFollowMeProperties': { required: false, nullable: true },
                'changeQueueProperties': { required: false, nullable: true },
                'confirmDragAndDrop': { required: false, nullable: true },
                'confirmSingleClickDialing': { required: false, nullable: true },
                'eFaqSearchOption': { required: false, nullable: true },
                'emailDownloadHTMLPictures': { required: false, nullable: true },
                'enableAdvancedDialing': { required: false, nullable: true },
                'externalCallTimeout': { required: false, nullable: true },
                'followMe': { required: false, nullable: true },
                'muteOnTransfer': { required: false, nullable: true },
                'openNewCallWindowForIncomingCalls': { required: false, nullable: true },
                'ringWhenOnPhone': { required: false, nullable: true },
                'screenCalls': { required: false, nullable: true },
                'showStatusInSystemTray': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:userClientConfigurationProperties'] = UserClientConfigurationProperties;

    return UserClientConfigurationProperties;
}());

var FollowMe = (function(){
    var hasProps = false;

    function FollowMe() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:followMe' });
        }

        FollowMe._super.constructor.apply(this, arguments);
    }
    _util.inherits(FollowMe, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FollowMe.prototype, 'phoneNumber', {
            get: function() { return this.__prop_phoneNumber; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for FollowMe.phoneNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phoneNumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(FollowMe.prototype, 'timeout', {
            get: function() { return this.__prop_timeout; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for FollowMe.timeout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(FollowMe.prototype, 'usePin', {
            get: function() { return this.__prop_usePin; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for FollowMe.usePin, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_usePin = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FollowMe, '__type', { value: 'urn:inin.com:configuration.people:followMe' });

    Object.defineProperty(FollowMe, '__propInfo', {
        get: function() {
            var pi = {
                'phoneNumber': { required: true, nullable: false },
                'timeout': { required: true, nullable: false },
                'usePin': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:followMe'] = FollowMe;

    return FollowMe;
}());

var Workgroup = (function(){
    var hasProps = false;

    function Workgroup() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:workgroup' });
        }

        Workgroup._super.constructor.apply(this, arguments);
    }
    _util.inherits(Workgroup, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Workgroup.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Workgroup.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Workgroup.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Workgroup.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'accessRights', {
            get: function() { return this.__prop_accessRights; },
            set: function(value) {
                if (!(value instanceof Configuration_People_Accessrights.AccessRightsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration_People_Accessrights.AccessRightsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.accessRights: ' + e.message);
                    }
                }

                this.__prop_accessRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'acdDisconnectedAction', {
            get: function() { return this.__prop_acdDisconnectedAction; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.acdDisconnectedAction: ' + e.message);
                    }
                }

                this.__prop_acdDisconnectedAction = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'acdIncomingAction', {
            get: function() { return this.__prop_acdIncomingAction; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.acdIncomingAction: ' + e.message);
                    }
                }

                this.__prop_acdIncomingAction = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'acdOfferingAction', {
            get: function() { return this.__prop_acdOfferingAction; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.acdOfferingAction: ' + e.message);
                    }
                }

                this.__prop_acdOfferingAction = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'acdSaveRepliesToSentItemsFolder', {
            get: function() { return this.__prop_acdSaveRepliesToSentItemsFolder; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.acdSaveRepliesToSentItemsFolder, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_acdSaveRepliesToSentItemsFolder = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'acdTransferAction', {
            get: function() { return this.__prop_acdTransferAction; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.acdTransferAction: ' + e.message);
                    }
                }

                this.__prop_acdTransferAction = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'acdUseAvailablityTime', {
            get: function() { return this.__prop_acdUseAvailablityTime; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.acdUseAvailablityTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_acdUseAvailablityTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'administrativeRights', {
            get: function() { return this.__prop_administrativeRights; },
            set: function(value) {
                if (!(value instanceof Configuration_People_Accessrights.AdministrativeRightsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration_People_Accessrights.AdministrativeRightsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.administrativeRights: ' + e.message);
                    }
                }

                this.__prop_administrativeRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'agentScoreChange', {
            get: function() { return this.__prop_agentScoreChange; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Workgroup.agentScoreChange, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_agentScoreChange = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'callbackMaxRetry', {
            get: function() { return this.__prop_callbackMaxRetry; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Workgroup.callbackMaxRetry, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callbackMaxRetry = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'callbackServiceLevelDistribution', {
            get: function() { return this.__prop_callbackServiceLevelDistribution; },
            set: function(value) {
                if (_util.isArray(value) && value.every(function(v){ return _util.isNumber(v); })) {
                    value = value.map(function(v){ return new _util.Duration(v); });
                }
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isDuration(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration[] for Workgroup.callbackServiceLevelDistribution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callbackServiceLevelDistribution = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'callbackServiceLevelTarget', {
            get: function() { return this.__prop_callbackServiceLevelTarget; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for Workgroup.callbackServiceLevelTarget, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callbackServiceLevelTarget = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'callbackSnoozeDuration', {
            get: function() { return this.__prop_callbackSnoozeDuration; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Workgroup.callbackSnoozeDuration, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callbackSnoozeDuration = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'callServiceLevelDistribution', {
            get: function() { return this.__prop_callServiceLevelDistribution; },
            set: function(value) {
                if (_util.isArray(value) && value.every(function(v){ return _util.isNumber(v); })) {
                    value = value.map(function(v){ return new _util.Duration(v); });
                }
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isDuration(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration[] for Workgroup.callServiceLevelDistribution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callServiceLevelDistribution = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'callServiceLevelTarget', {
            get: function() { return this.__prop_callServiceLevelTarget; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for Workgroup.callServiceLevelTarget, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callServiceLevelTarget = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'callStatisticsPeriod', {
            get: function() { return this.__prop_callStatisticsPeriod; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Workgroup.callStatisticsPeriod, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callStatisticsPeriod = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'captureInRecordings', {
            get: function() { return this.__prop_captureInRecordings; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.captureInRecordings, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_captureInRecordings = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'chatServiceLevelDistribution', {
            get: function() { return this.__prop_chatServiceLevelDistribution; },
            set: function(value) {
                if (_util.isArray(value) && value.every(function(v){ return _util.isNumber(v); })) {
                    value = value.map(function(v){ return new _util.Duration(v); });
                }
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isDuration(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration[] for Workgroup.chatServiceLevelDistribution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_chatServiceLevelDistribution = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'chatServiceLevelTarget', {
            get: function() { return this.__prop_chatServiceLevelTarget; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for Workgroup.chatServiceLevelTarget, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_chatServiceLevelTarget = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'clientWaitTimeout', {
            get: function() { return this.__prop_clientWaitTimeout; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Workgroup.clientWaitTimeout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_clientWaitTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'emailServiceLevelDistribution', {
            get: function() { return this.__prop_emailServiceLevelDistribution; },
            set: function(value) {
                if (_util.isArray(value) && value.every(function(v){ return _util.isNumber(v); })) {
                    value = value.map(function(v){ return new _util.Duration(v); });
                }
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isDuration(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration[] for Workgroup.emailServiceLevelDistribution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailServiceLevelDistribution = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'emailServiceLevelTarget', {
            get: function() { return this.__prop_emailServiceLevelTarget; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for Workgroup.emailServiceLevelTarget, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailServiceLevelTarget = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'estimatedCallTimeInterval', {
            get: function() { return this.__prop_estimatedCallTimeInterval; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Workgroup.estimatedCallTimeInterval, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_estimatedCallTimeInterval = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'executeTransferActionOnUserTransfer', {
            get: function() { return this.__prop_executeTransferActionOnUserTransfer; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.executeTransferActionOnUserTransfer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_executeTransferActionOnUserTransfer = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'extension', {
            get: function() { return this.__prop_extension; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Workgroup.extension, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_extension = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'faxCapability', {
            get: function() { return this.__prop_faxCapability; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.faxCapability, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_faxCapability = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'genericServiceLevelDistribution', {
            get: function() { return this.__prop_genericServiceLevelDistribution; },
            set: function(value) {
                if (_util.isArray(value) && value.every(function(v){ return _util.isNumber(v); })) {
                    value = value.map(function(v){ return new _util.Duration(v); });
                }
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isDuration(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration[] for Workgroup.genericServiceLevelDistribution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_genericServiceLevelDistribution = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'genericServiceLevelTarget', {
            get: function() { return this.__prop_genericServiceLevelTarget; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for Workgroup.genericServiceLevelTarget, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_genericServiceLevelTarget = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'gracePeriodBeforeNew', {
            get: function() { return this.__prop_gracePeriodBeforeNew; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Workgroup.gracePeriodBeforeNew, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_gracePeriodBeforeNew = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'hasQueue', {
            get: function() { return this.__prop_hasQueue; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.hasQueue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'interactionDisconnectedAction', {
            get: function() { return this.__prop_interactionDisconnectedAction; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.interactionDisconnectedAction: ' + e.message);
                    }
                }

                this.__prop_interactionDisconnectedAction = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'interactionOfferingAction', {
            get: function() { return this.__prop_interactionOfferingAction; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.interactionOfferingAction: ' + e.message);
                    }
                }

                this.__prop_interactionOfferingAction = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'interactionOfferingTimeout', {
            get: function() { return this.__prop_interactionOfferingTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.interactionOfferingTimeout: ' + e.message);
                    }
                }

                this.__prop_interactionOfferingTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'isAcdEmailRoutingActive', {
            get: function() { return this.__prop_isAcdEmailRoutingActive; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.isAcdEmailRoutingActive, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isAcdEmailRoutingActive = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'isActive', {
            get: function() { return this.__prop_isActive; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.isActive, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isActive = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'isCallbackEnabled', {
            get: function() { return this.__prop_isCallbackEnabled; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.isCallbackEnabled, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isCallbackEnabled = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'isExemptHeldInteractionsEnabled', {
            get: function() { return this.__prop_isExemptHeldInteractionsEnabled; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.isExemptHeldInteractionsEnabled, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isExemptHeldInteractionsEnabled = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'isWrapUpActive', {
            get: function() { return this.__prop_isWrapUpActive; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.isWrapUpActive, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isWrapUpActive = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'keypadWaitTimeout', {
            get: function() { return this.__prop_keypadWaitTimeout; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Workgroup.keypadWaitTimeout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_keypadWaitTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'maximumChatReponseTime', {
            get: function() { return this.__prop_maximumChatReponseTime; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Workgroup.maximumChatReponseTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximumChatReponseTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'maxNumberOfExempt', {
            get: function() { return this.__prop_maxNumberOfExempt; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Workgroup.maxNumberOfExempt, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxNumberOfExempt = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'members', {
            get: function() { return this.__prop_members; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.members: ' + e.message);
                    }
                }

                this.__prop_members = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'membersSpanSites', {
            get: function() { return this.__prop_membersSpanSites; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.membersSpanSites, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_membersSpanSites = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'monitoredMailboxes', {
            get: function() { return this.__prop_monitoredMailboxes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MonitoredMailbox); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new MonitoredMailbox(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.monitoredMailboxes: ' + e.message);
                    }
                }

                this.__prop_monitoredMailboxes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'nameSpellingsAsr', {
            get: function() { return this.__prop_nameSpellingsAsr; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for Workgroup.nameSpellingsAsr, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_nameSpellingsAsr = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'nameSpellingTts', {
            get: function() { return this.__prop_nameSpellingTts; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Workgroup.nameSpellingTts, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_nameSpellingTts = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'noAnswerStatus', {
            get: function() { return this.__prop_noAnswerStatus; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.noAnswerStatus: ' + e.message);
                    }
                }

                this.__prop_noAnswerStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'onCallStatus', {
            get: function() { return this.__prop_onCallStatus; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.onCallStatus: ' + e.message);
                    }
                }

                this.__prop_onCallStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'onHoldMessage', {
            get: function() { return this.__prop_onHoldMessage; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Workgroup.onHoldMessage, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_onHoldMessage = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'onHoldMusic', {
            get: function() { return this.__prop_onHoldMusic; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Workgroup.onHoldMusic, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_onHoldMusic = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'operatorTarget', {
            get: function() { return this.__prop_operatorTarget; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Workgroup.operatorTarget, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_operatorTarget = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'parkedCallExtension', {
            get: function() { return this.__prop_parkedCallExtension; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableStringProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableStringProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.parkedCallExtension: ' + e.message);
                    }
                }

                this.__prop_parkedCallExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'parkedCallTimeout', {
            get: function() { return this.__prop_parkedCallTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.parkedCallTimeout: ' + e.message);
                    }
                }

                this.__prop_parkedCallTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'parkedChatExtension', {
            get: function() { return this.__prop_parkedChatExtension; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableStringProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableStringProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.parkedChatExtension: ' + e.message);
                    }
                }

                this.__prop_parkedChatExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'parkedChatTimeout', {
            get: function() { return this.__prop_parkedChatTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.parkedChatTimeout: ' + e.message);
                    }
                }

                this.__prop_parkedChatTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'parkedEmailExtension', {
            get: function() { return this.__prop_parkedEmailExtension; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableStringProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableStringProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.parkedEmailExtension: ' + e.message);
                    }
                }

                this.__prop_parkedEmailExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'parkedEmailTimeout', {
            get: function() { return this.__prop_parkedEmailTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.parkedEmailTimeout: ' + e.message);
                    }
                }

                this.__prop_parkedEmailTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'parkedGenericObjectExtension', {
            get: function() { return this.__prop_parkedGenericObjectExtension; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableStringProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableStringProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.parkedGenericObjectExtension: ' + e.message);
                    }
                }

                this.__prop_parkedGenericObjectExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'parkedGenericObjectTimeout', {
            get: function() { return this.__prop_parkedGenericObjectTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.parkedGenericObjectTimeout: ' + e.message);
                    }
                }

                this.__prop_parkedGenericObjectTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'playToExternalPartiesOnly', {
            get: function() { return this.__prop_playToExternalPartiesOnly; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.playToExternalPartiesOnly, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_playToExternalPartiesOnly = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'preferredLanguage', {
            get: function() { return this.__prop_preferredLanguage; },
            set: function(value) {
                if (!(value instanceof Configuration.IdDisplayName || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.IdDisplayName(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.preferredLanguage: ' + e.message);
                    }
                }

                this.__prop_preferredLanguage = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'queueType', {
            get: function() { return this.__prop_queueType; },
            set: function(value) {
                if (!(value instanceof WorkgroupQueueType || value === void 0 || value === null)) {
                    try {
                        value = new WorkgroupQueueType(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.queueType: ' + e.message);
                    }
                }

                this.__prop_queueType = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'recordAll', {
            get: function() { return this.__prop_recordAll; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.recordAll, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordAll = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'revertToAvailableTimeout', {
            get: function() { return this.__prop_revertToAvailableTimeout; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Workgroup.revertToAvailableTimeout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_revertToAvailableTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'roles', {
            get: function() { return this.__prop_roles; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.roles: ' + e.message);
                    }
                }

                this.__prop_roles = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'secureInputForms', {
            get: function() { return this.__prop_secureInputForms; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.secureInputForms: ' + e.message);
                    }
                }

                this.__prop_secureInputForms = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'securityRights', {
            get: function() { return this.__prop_securityRights; },
            set: function(value) {
                if (!(value instanceof Configuration_People_Accessrights.SecurityRightsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration_People_Accessrights.SecurityRightsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.securityRights: ' + e.message);
                    }
                }

                this.__prop_securityRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'selectedTone', {
            get: function() { return this.__prop_selectedTone; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.selectedTone: ' + e.message);
                    }
                }

                this.__prop_selectedTone = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'skills', {
            get: function() { return this.__prop_skills; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.SkillSetting); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.SkillSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.skills: ' + e.message);
                    }
                }

                this.__prop_skills = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'socialConversationServiceLevelDistribution', {
            get: function() { return this.__prop_socialConversationServiceLevelDistribution; },
            set: function(value) {
                if (_util.isArray(value) && value.every(function(v){ return _util.isNumber(v); })) {
                    value = value.map(function(v){ return new _util.Duration(v); });
                }
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isDuration(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration[] for Workgroup.socialConversationServiceLevelDistribution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialConversationServiceLevelDistribution = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'socialConversationServiceLevelTarget', {
            get: function() { return this.__prop_socialConversationServiceLevelTarget; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for Workgroup.socialConversationServiceLevelTarget, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialConversationServiceLevelTarget = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'socialDirectMessageServiceLevelDistribution', {
            get: function() { return this.__prop_socialDirectMessageServiceLevelDistribution; },
            set: function(value) {
                if (_util.isArray(value) && value.every(function(v){ return _util.isNumber(v); })) {
                    value = value.map(function(v){ return new _util.Duration(v); });
                }
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isDuration(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration[] for Workgroup.socialDirectMessageServiceLevelDistribution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialDirectMessageServiceLevelDistribution = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'socialDirectMessageServiceLevelTarget', {
            get: function() { return this.__prop_socialDirectMessageServiceLevelTarget; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for Workgroup.socialDirectMessageServiceLevelTarget, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialDirectMessageServiceLevelTarget = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'statisticParameterGroup', {
            get: function() { return this.__prop_statisticParameterGroup; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.statisticParameterGroup: ' + e.message);
                    }
                }

                this.__prop_statisticParameterGroup = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'statisticsShiftStarts', {
            get: function() { return this.__prop_statisticsShiftStarts; },
            set: function(value) {
                if (_util.isArray(value) && value.every(function(v){ return _util.isNumber(v); })) {
                    value = value.map(function(v){ return new _util.Duration(v); });
                }
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isDuration(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration[] for Workgroup.statisticsShiftStarts, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statisticsShiftStarts = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'supervisors', {
            get: function() { return this.__prop_supervisors; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.supervisors: ' + e.message);
                    }
                }

                this.__prop_supervisors = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'useRecordingTones', {
            get: function() { return this.__prop_useRecordingTones; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.useRecordingTones, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_useRecordingTones = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'useTiffForFaxes', {
            get: function() { return this.__prop_useTiffForFaxes; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Workgroup.useTiffForFaxes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_useTiffForFaxes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'utilizations', {
            get: function() { return this.__prop_utilizations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.UtilizationSetting); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.UtilizationSetting(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.utilizations: ' + e.message);
                    }
                }

                this.__prop_utilizations = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'voicemailMessage', {
            get: function() { return this.__prop_voicemailMessage; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Workgroup.voicemailMessage, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_voicemailMessage = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'workgroupMailboxProperties', {
            get: function() { return this.__prop_workgroupMailboxProperties; },
            set: function(value) {
                if (!(value instanceof Configuration.WorkgroupMailboxProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.WorkgroupMailboxProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.workgroupMailboxProperties: ' + e.message);
                    }
                }

                this.__prop_workgroupMailboxProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'workItemServiceLevelDistribution', {
            get: function() { return this.__prop_workItemServiceLevelDistribution; },
            set: function(value) {
                if (_util.isArray(value) && value.every(function(v){ return _util.isNumber(v); })) {
                    value = value.map(function(v){ return new _util.Duration(v); });
                }
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isDuration(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration[] for Workgroup.workItemServiceLevelDistribution, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workItemServiceLevelDistribution = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'workItemServiceLevelTarget', {
            get: function() { return this.__prop_workItemServiceLevelTarget; },
            set: function(value) {
                if (_util.isNumber(value)) { value = new _util.Duration(value); }
                if (!(_util.isDuration(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type _util.Duration for Workgroup.workItemServiceLevelTarget, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workItemServiceLevelTarget = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'wrapUpCodes', {
            get: function() { return this.__prop_wrapUpCodes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.wrapUpCodes: ' + e.message);
                    }
                }

                this.__prop_wrapUpCodes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'wrapUpPrompt', {
            get: function() { return this.__prop_wrapUpPrompt; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Workgroup.wrapUpPrompt, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_wrapUpPrompt = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'wrapUpStatus', {
            get: function() { return this.__prop_wrapUpStatus; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Workgroup.wrapUpStatus: ' + e.message);
                    }
                }

                this.__prop_wrapUpStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(Workgroup.prototype, 'wrapUpTimeout', {
            get: function() { return this.__prop_wrapUpTimeout; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Workgroup.wrapUpTimeout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_wrapUpTimeout = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Workgroup, '__type', { value: 'urn:inin.com:configuration.people:workgroup' });

    Object.defineProperty(Workgroup, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'accessRights': { required: false, nullable: true },
                'acdDisconnectedAction': { required: false, nullable: true },
                'acdIncomingAction': { required: false, nullable: true },
                'acdOfferingAction': { required: false, nullable: true },
                'acdSaveRepliesToSentItemsFolder': { required: false, nullable: true },
                'acdTransferAction': { required: false, nullable: true },
                'acdUseAvailablityTime': { required: false, nullable: true },
                'administrativeRights': { required: false, nullable: true },
                'agentScoreChange': { required: false, nullable: true },
                'callbackMaxRetry': { required: false, nullable: true },
                'callbackServiceLevelDistribution': { required: false, nullable: true },
                'callbackServiceLevelTarget': { required: false, nullable: true },
                'callbackSnoozeDuration': { required: false, nullable: true },
                'callServiceLevelDistribution': { required: false, nullable: true },
                'callServiceLevelTarget': { required: false, nullable: true },
                'callStatisticsPeriod': { required: false, nullable: true },
                'captureInRecordings': { required: false, nullable: true },
                'chatServiceLevelDistribution': { required: false, nullable: true },
                'chatServiceLevelTarget': { required: false, nullable: true },
                'clientWaitTimeout': { required: false, nullable: true },
                'emailServiceLevelDistribution': { required: false, nullable: true },
                'emailServiceLevelTarget': { required: false, nullable: true },
                'estimatedCallTimeInterval': { required: false, nullable: true },
                'executeTransferActionOnUserTransfer': { required: false, nullable: true },
                'extension': { required: false, nullable: true },
                'faxCapability': { required: false, nullable: true },
                'genericServiceLevelDistribution': { required: false, nullable: true },
                'genericServiceLevelTarget': { required: false, nullable: true },
                'gracePeriodBeforeNew': { required: false, nullable: true },
                'hasQueue': { required: false, nullable: true },
                'interactionDisconnectedAction': { required: false, nullable: true },
                'interactionOfferingAction': { required: false, nullable: true },
                'interactionOfferingTimeout': { required: false, nullable: true },
                'isAcdEmailRoutingActive': { required: false, nullable: true },
                'isActive': { required: false, nullable: true },
                'isCallbackEnabled': { required: false, nullable: true },
                'isExemptHeldInteractionsEnabled': { required: false, nullable: true },
                'isWrapUpActive': { required: false, nullable: true },
                'keypadWaitTimeout': { required: false, nullable: true },
                'maximumChatReponseTime': { required: false, nullable: true },
                'maxNumberOfExempt': { required: false, nullable: true },
                'members': { required: false, nullable: true },
                'membersSpanSites': { required: false, nullable: true },
                'monitoredMailboxes': { required: false, nullable: true },
                'nameSpellingsAsr': { required: false, nullable: true },
                'nameSpellingTts': { required: false, nullable: true },
                'noAnswerStatus': { required: false, nullable: true },
                'onCallStatus': { required: false, nullable: true },
                'onHoldMessage': { required: false, nullable: true },
                'onHoldMusic': { required: false, nullable: true },
                'operatorTarget': { required: false, nullable: true },
                'parkedCallExtension': { required: false, nullable: true },
                'parkedCallTimeout': { required: false, nullable: true },
                'parkedChatExtension': { required: false, nullable: true },
                'parkedChatTimeout': { required: false, nullable: true },
                'parkedEmailExtension': { required: false, nullable: true },
                'parkedEmailTimeout': { required: false, nullable: true },
                'parkedGenericObjectExtension': { required: false, nullable: true },
                'parkedGenericObjectTimeout': { required: false, nullable: true },
                'playToExternalPartiesOnly': { required: false, nullable: true },
                'preferredLanguage': { required: false, nullable: true },
                'queueType': { required: false, nullable: true },
                'recordAll': { required: false, nullable: true },
                'revertToAvailableTimeout': { required: false, nullable: true },
                'roles': { required: false, nullable: true },
                'secureInputForms': { required: false, nullable: true },
                'securityRights': { required: false, nullable: true },
                'selectedTone': { required: false, nullable: true },
                'skills': { required: false, nullable: true },
                'socialConversationServiceLevelDistribution': { required: false, nullable: true },
                'socialConversationServiceLevelTarget': { required: false, nullable: true },
                'socialDirectMessageServiceLevelDistribution': { required: false, nullable: true },
                'socialDirectMessageServiceLevelTarget': { required: false, nullable: true },
                'statisticParameterGroup': { required: false, nullable: true },
                'statisticsShiftStarts': { required: false, nullable: true },
                'supervisors': { required: false, nullable: true },
                'useRecordingTones': { required: false, nullable: true },
                'useTiffForFaxes': { required: false, nullable: true },
                'utilizations': { required: false, nullable: true },
                'voicemailMessage': { required: false, nullable: true },
                'workgroupMailboxProperties': { required: false, nullable: true },
                'workItemServiceLevelDistribution': { required: false, nullable: true },
                'workItemServiceLevelTarget': { required: false, nullable: true },
                'wrapUpCodes': { required: false, nullable: true },
                'wrapUpPrompt': { required: false, nullable: true },
                'wrapUpStatus': { required: false, nullable: true },
                'wrapUpTimeout': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:workgroup'] = Workgroup;

    return Workgroup;
}());

var MonitoredMailbox = (function(){
    var hasProps = false;

    function MonitoredMailbox() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:monitoredMailbox' });
        }

        MonitoredMailbox._super.constructor.apply(this, arguments);
    }
    _util.inherits(MonitoredMailbox, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MonitoredMailbox.prototype, 'canReceiveEncryptedEmail', {
            get: function() { return this.__prop_canReceiveEncryptedEmail; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for MonitoredMailbox.canReceiveEncryptedEmail, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_canReceiveEncryptedEmail = value;
            },
            enumerable: true
        });

        Object.defineProperty(MonitoredMailbox.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting MonitoredMailbox.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(MonitoredMailbox.prototype, 'emailAddress', {
            get: function() { return this.__prop_emailAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for MonitoredMailbox.emailAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(MonitoredMailbox.prototype, 'inboundFolder', {
            get: function() { return this.__prop_inboundFolder; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for MonitoredMailbox.inboundFolder, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_inboundFolder = value;
            },
            enumerable: true
        });

        Object.defineProperty(MonitoredMailbox.prototype, 'mailboxMoniker', {
            get: function() { return this.__prop_mailboxMoniker; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for MonitoredMailbox.mailboxMoniker, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mailboxMoniker = value;
            },
            enumerable: true
        });

        Object.defineProperty(MonitoredMailbox.prototype, 'mailboxType', {
            get: function() { return this.__prop_mailboxType; },
            set: function(value) {
                if (!(value instanceof MonitoredMailboxType || value === void 0)) {
                    try {
                        value = new MonitoredMailboxType(value);
                    } catch (e) {
                        throw new TypeError('Error setting MonitoredMailbox.mailboxType: ' + e.message);
                    }
                }

                this.__prop_mailboxType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MonitoredMailbox, '__type', { value: 'urn:inin.com:configuration.people:monitoredMailbox' });

    Object.defineProperty(MonitoredMailbox, '__propInfo', {
        get: function() {
            var pi = {
                'canReceiveEncryptedEmail': { required: false, nullable: true },
                'configurationId': { required: false, nullable: false },
                'emailAddress': { required: false, nullable: false },
                'inboundFolder': { required: false, nullable: true },
                'mailboxMoniker': { required: false, nullable: false },
                'mailboxType': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:monitoredMailbox'] = MonitoredMailbox;

    return MonitoredMailbox;
}());

var WrapUpCategory = (function(){
    var hasProps = false;

    function WrapUpCategory() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:wrapUpCategory' });
        }

        WrapUpCategory._super.constructor.apply(this, arguments);
    }
    _util.inherits(WrapUpCategory, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WrapUpCategory.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCategory.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategory.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for WrapUpCategory.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategory.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCategory.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategory.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for WrapUpCategory.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategory.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for WrapUpCategory.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategory.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCategory.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategory.prototype, 'isActualContact', {
            get: function() { return this.__prop_isActualContact; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for WrapUpCategory.isActualContact, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isActualContact = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategory.prototype, 'isPermanent', {
            get: function() { return this.__prop_isPermanent; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for WrapUpCategory.isPermanent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isPermanent = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategory.prototype, 'isSuccessfulInteraction', {
            get: function() { return this.__prop_isSuccessfulInteraction; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for WrapUpCategory.isSuccessfulInteraction, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSuccessfulInteraction = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategory.prototype, 'label', {
            get: function() { return this.__prop_label; },
            set: function(value) {
                if (!(value instanceof Configuration.MultiLanguageString || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.MultiLanguageString(value);
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCategory.label: ' + e.message);
                    }
                }

                this.__prop_label = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategory.prototype, 'phoneNumberStatus', {
            get: function() { return this.__prop_phoneNumberStatus; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for WrapUpCategory.phoneNumberStatus, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phoneNumberStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategory.prototype, 'recordStatus', {
            get: function() { return this.__prop_recordStatus; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for WrapUpCategory.recordStatus, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategory.prototype, 'shouldIncrementAttempts', {
            get: function() { return this.__prop_shouldIncrementAttempts; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for WrapUpCategory.shouldIncrementAttempts, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shouldIncrementAttempts = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WrapUpCategory, '__type', { value: 'urn:inin.com:configuration.people:wrapUpCategory' });

    Object.defineProperty(WrapUpCategory, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'isActualContact': { required: false, nullable: true },
                'isPermanent': { required: false, nullable: true },
                'isSuccessfulInteraction': { required: false, nullable: true },
                'label': { required: false, nullable: true },
                'phoneNumberStatus': { required: false, nullable: true },
                'recordStatus': { required: false, nullable: true },
                'shouldIncrementAttempts': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:wrapUpCategory'] = WrapUpCategory;

    return WrapUpCategory;
}());

var WrapUpCode = (function(){
    var hasProps = false;

    function WrapUpCode() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:wrapUpCode' });
        }

        WrapUpCode._super.constructor.apply(this, arguments);
    }
    _util.inherits(WrapUpCode, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WrapUpCode.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCode.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCode.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for WrapUpCode.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCode.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCode.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCode.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for WrapUpCode.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCode.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for WrapUpCode.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCode.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCode.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCode.prototype, 'category', {
            get: function() { return this.__prop_category; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCode.category: ' + e.message);
                    }
                }

                this.__prop_category = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCode.prototype, 'digits', {
            get: function() { return this.__prop_digits; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for WrapUpCode.digits, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_digits = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCode.prototype, 'isPermanent', {
            get: function() { return this.__prop_isPermanent; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for WrapUpCode.isPermanent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isPermanent = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCode.prototype, 'isRightPartyContact', {
            get: function() { return this.__prop_isRightPartyContact; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for WrapUpCode.isRightPartyContact, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isRightPartyContact = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCode.prototype, 'label', {
            get: function() { return this.__prop_label; },
            set: function(value) {
                if (!(value instanceof Configuration.MultiLanguageString || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.MultiLanguageString(value);
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCode.label: ' + e.message);
                    }
                }

                this.__prop_label = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WrapUpCode, '__type', { value: 'urn:inin.com:configuration.people:wrapUpCode' });

    Object.defineProperty(WrapUpCode, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'category': { required: false, nullable: false },
                'digits': { required: false, nullable: true },
                'isPermanent': { required: false, nullable: true },
                'isRightPartyContact': { required: false, nullable: true },
                'label': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:wrapUpCode'] = WrapUpCode;

    return WrapUpCode;
}());

var AccountCodesConfiguration = (function(){
    var hasProps = false;

    function AccountCodesConfiguration() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:accountCodesConfiguration' });
        }

        AccountCodesConfiguration._super.constructor.apply(this, arguments);
    }
    _util.inherits(AccountCodesConfiguration, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AccountCodesConfiguration.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccountCodesConfiguration.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccountCodesConfiguration.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for AccountCodesConfiguration.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccountCodesConfiguration.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccountCodesConfiguration.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccountCodesConfiguration.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for AccountCodesConfiguration.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccountCodesConfiguration.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for AccountCodesConfiguration.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccountCodesConfiguration.prototype, 'accountCodesEnabled', {
            get: function() { return this.__prop_accountCodesEnabled; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for AccountCodesConfiguration.accountCodesEnabled, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accountCodesEnabled = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AccountCodesConfiguration, '__type', { value: 'urn:inin.com:configuration.people:accountCodesConfiguration' });

    Object.defineProperty(AccountCodesConfiguration, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accountCodesEnabled': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:accountCodesConfiguration'] = AccountCodesConfiguration;

    return AccountCodesConfiguration;
}());

var DefaultUser = (function(){
    var hasProps = false;

    function DefaultUser() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:defaultUser' });
        }

        DefaultUser._super.constructor.apply(this, arguments);
    }
    _util.inherits(DefaultUser, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DefaultUser.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for DefaultUser.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for DefaultUser.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DefaultUser.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'accessRights', {
            get: function() { return this.__prop_accessRights; },
            set: function(value) {
                if (!(value instanceof Configuration_People_Accessrights.AccessRightsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration_People_Accessrights.AccessRightsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.accessRights: ' + e.message);
                    }
                }

                this.__prop_accessRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'administrativeRights', {
            get: function() { return this.__prop_administrativeRights; },
            set: function(value) {
                if (!(value instanceof Configuration_People_Accessrights.AdministrativeRightsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration_People_Accessrights.AdministrativeRightsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.administrativeRights: ' + e.message);
                    }
                }

                this.__prop_administrativeRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'interactionDisconnectedAction', {
            get: function() { return this.__prop_interactionDisconnectedAction; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.interactionDisconnectedAction: ' + e.message);
                    }
                }

                this.__prop_interactionDisconnectedAction = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'interactionOfferingAction', {
            get: function() { return this.__prop_interactionOfferingAction; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.interactionOfferingAction: ' + e.message);
                    }
                }

                this.__prop_interactionOfferingAction = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'parkedCallExtension', {
            get: function() { return this.__prop_parkedCallExtension; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableStringProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableStringProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.parkedCallExtension: ' + e.message);
                    }
                }

                this.__prop_parkedCallExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'parkedCallTimeout', {
            get: function() { return this.__prop_parkedCallTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.parkedCallTimeout: ' + e.message);
                    }
                }

                this.__prop_parkedCallTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'parkedChatExtension', {
            get: function() { return this.__prop_parkedChatExtension; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableStringProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableStringProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.parkedChatExtension: ' + e.message);
                    }
                }

                this.__prop_parkedChatExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'parkedChatTimeout', {
            get: function() { return this.__prop_parkedChatTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.parkedChatTimeout: ' + e.message);
                    }
                }

                this.__prop_parkedChatTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'parkedEmailExtension', {
            get: function() { return this.__prop_parkedEmailExtension; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableStringProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableStringProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.parkedEmailExtension: ' + e.message);
                    }
                }

                this.__prop_parkedEmailExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'parkedEmailTimeout', {
            get: function() { return this.__prop_parkedEmailTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.parkedEmailTimeout: ' + e.message);
                    }
                }

                this.__prop_parkedEmailTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'parkedGenericObjectExtension', {
            get: function() { return this.__prop_parkedGenericObjectExtension; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableStringProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableStringProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.parkedGenericObjectExtension: ' + e.message);
                    }
                }

                this.__prop_parkedGenericObjectExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'parkedGenericObjectTimeout', {
            get: function() { return this.__prop_parkedGenericObjectTimeout; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableDurationProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableDurationProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.parkedGenericObjectTimeout: ' + e.message);
                    }
                }

                this.__prop_parkedGenericObjectTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'securityRights', {
            get: function() { return this.__prop_securityRights; },
            set: function(value) {
                if (!(value instanceof Configuration_People_Accessrights.SecurityRightsProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration_People_Accessrights.SecurityRightsProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.securityRights: ' + e.message);
                    }
                }

                this.__prop_securityRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'webClientFaxFormat', {
            get: function() { return this.__prop_webClientFaxFormat; },
            set: function(value) {
                if (!(value instanceof WebClientFaxFormat || value === void 0 || value === null)) {
                    try {
                        value = new WebClientFaxFormat(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUser.webClientFaxFormat: ' + e.message);
                    }
                }

                this.__prop_webClientFaxFormat = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultUser.prototype, 'whisperToneLevel', {
            get: function() { return this.__prop_whisperToneLevel; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for DefaultUser.whisperToneLevel, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_whisperToneLevel = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DefaultUser, '__type', { value: 'urn:inin.com:configuration.people:defaultUser' });

    Object.defineProperty(DefaultUser, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessRights': { required: false, nullable: true },
                'administrativeRights': { required: false, nullable: true },
                'interactionDisconnectedAction': { required: false, nullable: true },
                'interactionOfferingAction': { required: false, nullable: true },
                'parkedCallExtension': { required: false, nullable: true },
                'parkedCallTimeout': { required: false, nullable: true },
                'parkedChatExtension': { required: false, nullable: true },
                'parkedChatTimeout': { required: false, nullable: true },
                'parkedEmailExtension': { required: false, nullable: true },
                'parkedEmailTimeout': { required: false, nullable: true },
                'parkedGenericObjectExtension': { required: false, nullable: true },
                'parkedGenericObjectTimeout': { required: false, nullable: true },
                'securityRights': { required: false, nullable: true },
                'webClientFaxFormat': { required: false, nullable: true },
                'whisperToneLevel': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:defaultUser'] = DefaultUser;

    return DefaultUser;
}());

var AccessControlGroups = (function(){
    var hasProps = false;

    function AccessControlGroups() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:accessControlGroups' });
        }

        AccessControlGroups._super.constructor.apply(this, arguments);
    }
    _util.inherits(AccessControlGroups, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AccessControlGroups.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AccessControlGroup); }))) {
                    try {
                        value = value.map(function(item){ return new AccessControlGroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroups.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AccessControlGroups, '__type', { value: 'urn:inin.com:configuration.people:accessControlGroups' });

    Object.defineProperty(AccessControlGroups, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:accessControlGroups'] = AccessControlGroups;

    return AccessControlGroups;
}());

var AreInUseResult = (function(){
    var hasProps = false;

    function AreInUseResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:areInUseResult' });
        }

        AreInUseResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(AreInUseResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AreInUseResult.prototype, 'areACGsInUse', {
            get: function() { return this.__prop_areACGsInUse; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for AreInUseResult.areACGsInUse, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_areACGsInUse = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AreInUseResult, '__type', { value: 'urn:inin.com:configuration.people:areInUseResult' });

    Object.defineProperty(AreInUseResult, '__propInfo', {
        get: function() {
            var pi = {
                'areACGsInUse': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:areInUseResult'] = AreInUseResult;

    return AreInUseResult;
}());

var AssignMembershipArgument = (function(){
    var hasProps = false;

    function AssignMembershipArgument() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:assignMembershipArgument' });
        }

        AssignMembershipArgument._super.constructor.apply(this, arguments);
    }
    _util.inherits(AssignMembershipArgument, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AssignMembershipArgument.prototype, 'objects', {
            get: function() { return this.__prop_objects; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }))) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AssignMembershipArgument.objects: ' + e.message);
                    }
                }

                this.__prop_objects = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AssignMembershipArgument, '__type', { value: 'urn:inin.com:configuration.people:assignMembershipArgument' });

    Object.defineProperty(AssignMembershipArgument, '__propInfo', {
        get: function() {
            var pi = {
                'objects': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:assignMembershipArgument'] = AssignMembershipArgument;

    return AssignMembershipArgument;
}());

var AssignMembershipResult = (function(){
    var hasProps = false;

    function AssignMembershipResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:assignMembershipResult' });
        }

        AssignMembershipResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(AssignMembershipResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AssignMembershipResult.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AssignMembershipResult.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AssignMembershipResult, '__type', { value: 'urn:inin.com:configuration.people:assignMembershipResult' });

    Object.defineProperty(AssignMembershipResult, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:assignMembershipResult'] = AssignMembershipResult;

    return AssignMembershipResult;
}());

var AssignableResult = (function(){
    var hasProps = false;

    function AssignableResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:assignableResult' });
        }

        AssignableResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(AssignableResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AssignableResult.prototype, 'assignable', {
            get: function() { return this.__prop_assignable; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AssignableEntry); }))) {
                    try {
                        value = value.map(function(item){ return new AssignableEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AssignableResult.assignable: ' + e.message);
                    }
                }

                this.__prop_assignable = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AssignableResult, '__type', { value: 'urn:inin.com:configuration.people:assignableResult' });

    Object.defineProperty(AssignableResult, '__propInfo', {
        get: function() {
            var pi = {
                'assignable': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:assignableResult'] = AssignableResult;

    return AssignableResult;
}());

var AssignableEntry = (function(){
    var hasProps = false;

    function AssignableEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:assignableEntry' });
        }

        AssignableEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(AssignableEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AssignableEntry.prototype, 'acg', {
            get: function() { return this.__prop_acg; },
            set: function(value) {
                if (!(value instanceof AssignableAccessControlGroup)) {
                    try {
                        value = new AssignableAccessControlGroup(value);
                    } catch (e) {
                        throw new TypeError('Error setting AssignableEntry.acg: ' + e.message);
                    }
                }

                this.__prop_acg = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AssignableEntry, '__type', { value: 'urn:inin.com:configuration.people:assignableEntry' });

    Object.defineProperty(AssignableEntry, '__propInfo', {
        get: function() {
            var pi = {
                'acg': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:assignableEntry'] = AssignableEntry;

    return AssignableEntry;
}());

var AssignableAccessControlGroup = (function(){
    var hasProps = false;

    function AssignableAccessControlGroup() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:assignableAccessControlGroup' });
        }

        AssignableAccessControlGroup._super.constructor.apply(this, arguments);
    }
    _util.inherits(AssignableAccessControlGroup, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AssignableAccessControlGroup.prototype, 'accessControlGroupId', {
            get: function() { return this.__prop_accessControlGroupId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting AssignableAccessControlGroup.accessControlGroupId: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AssignableAccessControlGroup.prototype, 'children', {
            get: function() { return this.__prop_children; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AssignableAccessControlGroup); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new AssignableAccessControlGroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AssignableAccessControlGroup.children: ' + e.message);
                    }
                }

                this.__prop_children = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AssignableAccessControlGroup, '__type', { value: 'urn:inin.com:configuration.people:assignableAccessControlGroup' });

    Object.defineProperty(AssignableAccessControlGroup, '__propInfo', {
        get: function() {
            var pi = {
                'accessControlGroupId': { required: true, nullable: false },
                'children': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:assignableAccessControlGroup'] = AssignableAccessControlGroup;

    return AssignableAccessControlGroup;
}());

var AccountCodes = (function(){
    var hasProps = false;

    function AccountCodes() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:accountCodes' });
        }

        AccountCodes._super.constructor.apply(this, arguments);
    }
    _util.inherits(AccountCodes, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AccountCodes.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AccountCode); }))) {
                    try {
                        value = value.map(function(item){ return new AccountCode(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccountCodes.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AccountCodes, '__type', { value: 'urn:inin.com:configuration.people:accountCodes' });

    Object.defineProperty(AccountCodes, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:accountCodes'] = AccountCodes;

    return AccountCodes;
}());

var ClientButtons = (function(){
    var hasProps = false;

    function ClientButtons() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:clientButtons' });
        }

        ClientButtons._super.constructor.apply(this, arguments);
    }
    _util.inherits(ClientButtons, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ClientButtons.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ClientButton); }))) {
                    try {
                        value = value.map(function(item){ return new ClientButton(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientButtons.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ClientButtons, '__type', { value: 'urn:inin.com:configuration.people:clientButtons' });

    Object.defineProperty(ClientButtons, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:clientButtons'] = ClientButtons;

    return ClientButtons;
}());

var ClientConfigurationTemplates = (function(){
    var hasProps = false;

    function ClientConfigurationTemplates() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:clientConfigurationTemplates' });
        }

        ClientConfigurationTemplates._super.constructor.apply(this, arguments);
    }
    _util.inherits(ClientConfigurationTemplates, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ClientConfigurationTemplates.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ClientConfigurationTemplate); }))) {
                    try {
                        value = value.map(function(item){ return new ClientConfigurationTemplate(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientConfigurationTemplates.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ClientConfigurationTemplates, '__type', { value: 'urn:inin.com:configuration.people:clientConfigurationTemplates' });

    Object.defineProperty(ClientConfigurationTemplates, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:clientConfigurationTemplates'] = ClientConfigurationTemplates;

    return ClientConfigurationTemplates;
}());

var ClientTemplates = (function(){
    var hasProps = false;

    function ClientTemplates() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:clientTemplates' });
        }

        ClientTemplates._super.constructor.apply(this, arguments);
    }
    _util.inherits(ClientTemplates, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ClientTemplates.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ClientTemplate); }))) {
                    try {
                        value = value.map(function(item){ return new ClientTemplate(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientTemplates.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ClientTemplates, '__type', { value: 'urn:inin.com:configuration.people:clientTemplates' });

    Object.defineProperty(ClientTemplates, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:clientTemplates'] = ClientTemplates;

    return ClientTemplates;
}());

var MonitoredMailboxesBulkUpdate = (function(){
    var hasProps = false;

    function MonitoredMailboxesBulkUpdate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:monitoredMailboxesBulkUpdate' });
        }

        MonitoredMailboxesBulkUpdate._super.constructor.apply(this, arguments);
    }
    _util.inherits(MonitoredMailboxesBulkUpdate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MonitoredMailboxesBulkUpdate.prototype, 'add', {
            get: function() { return this.__prop_add; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MonitoredMailbox); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new MonitoredMailbox(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MonitoredMailboxesBulkUpdate.add: ' + e.message);
                    }
                }

                this.__prop_add = value;
            },
            enumerable: true
        });

        Object.defineProperty(MonitoredMailboxesBulkUpdate.prototype, 'modify', {
            get: function() { return this.__prop_modify; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MonitoredMailbox); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new MonitoredMailbox(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MonitoredMailboxesBulkUpdate.modify: ' + e.message);
                    }
                }

                this.__prop_modify = value;
            },
            enumerable: true
        });

        Object.defineProperty(MonitoredMailboxesBulkUpdate.prototype, 'remove', {
            get: function() { return this.__prop_remove; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for MonitoredMailboxesBulkUpdate.remove, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remove = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MonitoredMailboxesBulkUpdate, '__type', { value: 'urn:inin.com:configuration.people:monitoredMailboxesBulkUpdate' });

    Object.defineProperty(MonitoredMailboxesBulkUpdate, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:monitoredMailboxesBulkUpdate'] = MonitoredMailboxesBulkUpdate;

    return MonitoredMailboxesBulkUpdate;
}());

var PasswordPolicies = (function(){
    var hasProps = false;

    function PasswordPolicies() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:passwordPolicies' });
        }

        PasswordPolicies._super.constructor.apply(this, arguments);
    }
    _util.inherits(PasswordPolicies, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PasswordPolicies.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PasswordPolicy); }))) {
                    try {
                        value = value.map(function(item){ return new PasswordPolicy(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PasswordPolicies.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PasswordPolicies, '__type', { value: 'urn:inin.com:configuration.people:passwordPolicies' });

    Object.defineProperty(PasswordPolicies, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:passwordPolicies'] = PasswordPolicies;

    return PasswordPolicies;
}());

var QueueColumns = (function(){
    var hasProps = false;

    function QueueColumns() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:queueColumns' });
        }

        QueueColumns._super.constructor.apply(this, arguments);
    }
    _util.inherits(QueueColumns, _util.DataContract);

    function defineProps() {
        Object.defineProperty(QueueColumns.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof QueueColumn); }))) {
                    try {
                        value = value.map(function(item){ return new QueueColumn(item); });
                    } catch (e) {
                        throw new TypeError('Error setting QueueColumns.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QueueColumns, '__type', { value: 'urn:inin.com:configuration.people:queueColumns' });

    Object.defineProperty(QueueColumns, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:queueColumns'] = QueueColumns;

    return QueueColumns;
}());

var ResponseManagementDocuments = (function(){
    var hasProps = false;

    function ResponseManagementDocuments() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:responseManagementDocuments' });
        }

        ResponseManagementDocuments._super.constructor.apply(this, arguments);
    }
    _util.inherits(ResponseManagementDocuments, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ResponseManagementDocuments.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ResponseManagementDocument); }))) {
                    try {
                        value = value.map(function(item){ return new ResponseManagementDocument(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ResponseManagementDocuments.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ResponseManagementDocuments, '__type', { value: 'urn:inin.com:configuration.people:responseManagementDocuments' });

    Object.defineProperty(ResponseManagementDocuments, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:responseManagementDocuments'] = ResponseManagementDocuments;

    return ResponseManagementDocuments;
}());

var Roles = (function(){
    var hasProps = false;

    function Roles() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:roles' });
        }

        Roles._super.constructor.apply(this, arguments);
    }
    _util.inherits(Roles, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Roles.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Role); }))) {
                    try {
                        value = value.map(function(item){ return new Role(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Roles.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Roles, '__type', { value: 'urn:inin.com:configuration.people:roles' });

    Object.defineProperty(Roles, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:roles'] = Roles;

    return Roles;
}());

var Schedules = (function(){
    var hasProps = false;

    function Schedules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:schedules' });
        }

        Schedules._super.constructor.apply(this, arguments);
    }
    _util.inherits(Schedules, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Schedules.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Schedule); }))) {
                    try {
                        value = value.map(function(item){ return new Schedule(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Schedules.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Schedules, '__type', { value: 'urn:inin.com:configuration.people:schedules' });

    Object.defineProperty(Schedules, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:schedules'] = Schedules;

    return Schedules;
}());

var SecureInputForms = (function(){
    var hasProps = false;

    function SecureInputForms() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:secureInputForms' });
        }

        SecureInputForms._super.constructor.apply(this, arguments);
    }
    _util.inherits(SecureInputForms, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SecureInputForms.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SecureInputForm); }))) {
                    try {
                        value = value.map(function(item){ return new SecureInputForm(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SecureInputForms.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SecureInputForms, '__type', { value: 'urn:inin.com:configuration.people:secureInputForms' });

    Object.defineProperty(SecureInputForms, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:secureInputForms'] = SecureInputForms;

    return SecureInputForms;
}());

var SkillCategories = (function(){
    var hasProps = false;

    function SkillCategories() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:skillCategories' });
        }

        SkillCategories._super.constructor.apply(this, arguments);
    }
    _util.inherits(SkillCategories, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SkillCategories.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SkillCategory); }))) {
                    try {
                        value = value.map(function(item){ return new SkillCategory(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SkillCategories.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SkillCategories, '__type', { value: 'urn:inin.com:configuration.people:skillCategories' });

    Object.defineProperty(SkillCategories, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:skillCategories'] = SkillCategories;

    return SkillCategories;
}());

var Skills = (function(){
    var hasProps = false;

    function Skills() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:skills' });
        }

        Skills._super.constructor.apply(this, arguments);
    }
    _util.inherits(Skills, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Skills.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Skill); }))) {
                    try {
                        value = value.map(function(item){ return new Skill(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Skills.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Skills, '__type', { value: 'urn:inin.com:configuration.people:skills' });

    Object.defineProperty(Skills, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:skills'] = Skills;

    return Skills;
}());

var StatisticParameterGroups = (function(){
    var hasProps = false;

    function StatisticParameterGroups() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:statisticParameterGroups' });
        }

        StatisticParameterGroups._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticParameterGroups, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatisticParameterGroups.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatisticParameterGroup); }))) {
                    try {
                        value = value.map(function(item){ return new StatisticParameterGroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticParameterGroups.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticParameterGroups, '__type', { value: 'urn:inin.com:configuration.people:statisticParameterGroups' });

    Object.defineProperty(StatisticParameterGroups, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:statisticParameterGroups'] = StatisticParameterGroups;

    return StatisticParameterGroups;
}());

var StatusColumns = (function(){
    var hasProps = false;

    function StatusColumns() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:statusColumns' });
        }

        StatusColumns._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatusColumns, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatusColumns.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatusColumn); }))) {
                    try {
                        value = value.map(function(item){ return new StatusColumn(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatusColumns.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatusColumns, '__type', { value: 'urn:inin.com:configuration.people:statusColumns' });

    Object.defineProperty(StatusColumns, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:statusColumns'] = StatusColumns;

    return StatusColumns;
}());

var StatusColumn = (function(){
    var hasProps = false;

    function StatusColumn() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:statusColumn' });
        }

        StatusColumn._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatusColumn, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatusColumn.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting StatusColumn.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusColumn.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for StatusColumn.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusColumn.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatusColumn.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusColumn.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for StatusColumn.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusColumn.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StatusColumn.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatusColumn, '__type', { value: 'urn:inin.com:configuration.people:statusColumn' });

    Object.defineProperty(StatusColumn, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:statusColumn'] = StatusColumn;

    return StatusColumn;
}());

var Users = (function(){
    var hasProps = false;

    function Users() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:users' });
        }

        Users._super.constructor.apply(this, arguments);
    }
    _util.inherits(Users, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Users.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof User); }))) {
                    try {
                        value = value.map(function(item){ return new User(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Users.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Users, '__type', { value: 'urn:inin.com:configuration.people:users' });

    Object.defineProperty(Users, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:users'] = Users;

    return Users;
}());

var UserPassword = (function(){
    var hasProps = false;

    function UserPassword() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:userPassword' });
        }

        UserPassword._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserPassword, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserPassword.prototype, 'password', {
            get: function() { return this.__prop_password; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UserPassword.password, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_password = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserPassword.prototype, 'force', {
            get: function() { return this.__prop_force; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for UserPassword.force, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_force = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserPassword, '__type', { value: 'urn:inin.com:configuration.people:userPassword' });

    Object.defineProperty(UserPassword, '__propInfo', {
        get: function() {
            var pi = {
                'password': { required: true, nullable: false },
                'force': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:userPassword'] = UserPassword;

    return UserPassword;
}());

var Workgroups = (function(){
    var hasProps = false;

    function Workgroups() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:workgroups' });
        }

        Workgroups._super.constructor.apply(this, arguments);
    }
    _util.inherits(Workgroups, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Workgroups.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Workgroup); }))) {
                    try {
                        value = value.map(function(item){ return new Workgroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Workgroups.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Workgroups, '__type', { value: 'urn:inin.com:configuration.people:workgroups' });

    Object.defineProperty(Workgroups, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:workgroups'] = Workgroups;

    return Workgroups;
}());

var WrapUpCategories = (function(){
    var hasProps = false;

    function WrapUpCategories() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:wrapUpCategories' });
        }

        WrapUpCategories._super.constructor.apply(this, arguments);
    }
    _util.inherits(WrapUpCategories, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WrapUpCategories.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof WrapUpCategory); }))) {
                    try {
                        value = value.map(function(item){ return new WrapUpCategory(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCategories.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WrapUpCategories, '__type', { value: 'urn:inin.com:configuration.people:wrapUpCategories' });

    Object.defineProperty(WrapUpCategories, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:wrapUpCategories'] = WrapUpCategories;

    return WrapUpCategories;
}());

var WrapUpCodes = (function(){
    var hasProps = false;

    function WrapUpCodes() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:wrapUpCodes' });
        }

        WrapUpCodes._super.constructor.apply(this, arguments);
    }
    _util.inherits(WrapUpCodes, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WrapUpCodes.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof WrapUpCode); }))) {
                    try {
                        value = value.map(function(item){ return new WrapUpCode(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCodes.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WrapUpCodes, '__type', { value: 'urn:inin.com:configuration.people:wrapUpCodes' });

    Object.defineProperty(WrapUpCodes, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:wrapUpCodes'] = WrapUpCodes;

    return WrapUpCodes;
}());

var AccountCodesConfigurationMessage = (function(){
    var hasProps = false;

    function AccountCodesConfigurationMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:accountCodesConfigurationMessage', enumerable: true });
        }

        AccountCodesConfigurationMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AccountCodesConfigurationMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(AccountCodesConfigurationMessage.prototype, 'accountCodesConfiguration', {
            get: function() { return this.__prop_accountCodesConfiguration; },
            set: function(value) {
                if (!(value instanceof AccountCodesConfiguration)) {
                    try {
                        value = new AccountCodesConfiguration(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccountCodesConfigurationMessage.accountCodesConfiguration: ' + e.message);
                    }
                }

                this.__prop_accountCodesConfiguration = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AccountCodesConfigurationMessage, '__type', { value: 'urn:inin.com:configuration.people:accountCodesConfigurationMessage' });

    Object.defineProperty(AccountCodesConfigurationMessage, '__propInfo', {
        get: function() {
            var pi = {
                'accountCodesConfiguration': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:accountCodesConfigurationMessage'] = AccountCodesConfigurationMessage;

    return AccountCodesConfigurationMessage;
}());

var DefaultUserMessage = (function(){
    var hasProps = false;

    function DefaultUserMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:defaultUserMessage', enumerable: true });
        }

        DefaultUserMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(DefaultUserMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(DefaultUserMessage.prototype, 'defaultUser', {
            get: function() { return this.__prop_defaultUser; },
            set: function(value) {
                if (!(value instanceof DefaultUser)) {
                    try {
                        value = new DefaultUser(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultUserMessage.defaultUser: ' + e.message);
                    }
                }

                this.__prop_defaultUser = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DefaultUserMessage, '__type', { value: 'urn:inin.com:configuration.people:defaultUserMessage' });

    Object.defineProperty(DefaultUserMessage, '__propInfo', {
        get: function() {
            var pi = {
                'defaultUser': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people:defaultUserMessage'] = DefaultUserMessage;

    return DefaultUserMessage;
}());

var AccessControlGroupsMessage = (function(){
    var hasProps = false;

    function AccessControlGroupsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:accessControlGroupsMessage', enumerable: true });
        }

        AccessControlGroupsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AccessControlGroupsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(AccessControlGroupsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AccessControlGroup); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AccessControlGroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroupsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroupsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AccessControlGroup); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AccessControlGroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccessControlGroupsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessControlGroupsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for AccessControlGroupsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AccessControlGroupsMessage, '__type', { value: 'urn:inin.com:configuration.people:accessControlGroupsMessage' });

    Object.defineProperty(AccessControlGroupsMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:accessControlGroupsMessage'] = AccessControlGroupsMessage;

    return AccessControlGroupsMessage;
}());

var AccountCodesMessage = (function(){
    var hasProps = false;

    function AccountCodesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:accountCodesMessage', enumerable: true });
        }

        AccountCodesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AccountCodesMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(AccountCodesMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AccountCode); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AccountCode(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccountCodesMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccountCodesMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AccountCode); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AccountCode(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AccountCodesMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccountCodesMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for AccountCodesMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AccountCodesMessage, '__type', { value: 'urn:inin.com:configuration.people:accountCodesMessage' });

    Object.defineProperty(AccountCodesMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:accountCodesMessage'] = AccountCodesMessage;

    return AccountCodesMessage;
}());

var ClientButtonsMessage = (function(){
    var hasProps = false;

    function ClientButtonsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:clientButtonsMessage', enumerable: true });
        }

        ClientButtonsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ClientButtonsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(ClientButtonsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ClientButton); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ClientButton(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientButtonsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButtonsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ClientButton); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ClientButton(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientButtonsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButtonsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for ClientButtonsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ClientButtonsMessage, '__type', { value: 'urn:inin.com:configuration.people:clientButtonsMessage' });

    Object.defineProperty(ClientButtonsMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:clientButtonsMessage'] = ClientButtonsMessage;

    return ClientButtonsMessage;
}());

var ClientConfigurationTemplatesMessage = (function(){
    var hasProps = false;

    function ClientConfigurationTemplatesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:clientConfigurationTemplatesMessage', enumerable: true });
        }

        ClientConfigurationTemplatesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ClientConfigurationTemplatesMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(ClientConfigurationTemplatesMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ClientConfigurationTemplate); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ClientConfigurationTemplate(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientConfigurationTemplatesMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientConfigurationTemplatesMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ClientConfigurationTemplate); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ClientConfigurationTemplate(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientConfigurationTemplatesMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientConfigurationTemplatesMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for ClientConfigurationTemplatesMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ClientConfigurationTemplatesMessage, '__type', { value: 'urn:inin.com:configuration.people:clientConfigurationTemplatesMessage' });

    Object.defineProperty(ClientConfigurationTemplatesMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:clientConfigurationTemplatesMessage'] = ClientConfigurationTemplatesMessage;

    return ClientConfigurationTemplatesMessage;
}());

var ClientTemplatesMessage = (function(){
    var hasProps = false;

    function ClientTemplatesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:clientTemplatesMessage', enumerable: true });
        }

        ClientTemplatesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ClientTemplatesMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(ClientTemplatesMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ClientTemplate); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ClientTemplate(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientTemplatesMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientTemplatesMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ClientTemplate); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ClientTemplate(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ClientTemplatesMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientTemplatesMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for ClientTemplatesMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ClientTemplatesMessage, '__type', { value: 'urn:inin.com:configuration.people:clientTemplatesMessage' });

    Object.defineProperty(ClientTemplatesMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:clientTemplatesMessage'] = ClientTemplatesMessage;

    return ClientTemplatesMessage;
}());

var PasswordPoliciesMessage = (function(){
    var hasProps = false;

    function PasswordPoliciesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:passwordPoliciesMessage', enumerable: true });
        }

        PasswordPoliciesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(PasswordPoliciesMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(PasswordPoliciesMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PasswordPolicy); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new PasswordPolicy(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PasswordPoliciesMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPoliciesMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PasswordPolicy); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new PasswordPolicy(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PasswordPoliciesMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPoliciesMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for PasswordPoliciesMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PasswordPoliciesMessage, '__type', { value: 'urn:inin.com:configuration.people:passwordPoliciesMessage' });

    Object.defineProperty(PasswordPoliciesMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:passwordPoliciesMessage'] = PasswordPoliciesMessage;

    return PasswordPoliciesMessage;
}());

var QueueColumnsMessage = (function(){
    var hasProps = false;

    function QueueColumnsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:queueColumnsMessage', enumerable: true });
        }

        QueueColumnsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(QueueColumnsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(QueueColumnsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof QueueColumn); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new QueueColumn(item); });
                    } catch (e) {
                        throw new TypeError('Error setting QueueColumnsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueColumnsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof QueueColumn); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new QueueColumn(item); });
                    } catch (e) {
                        throw new TypeError('Error setting QueueColumnsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(QueueColumnsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for QueueColumnsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QueueColumnsMessage, '__type', { value: 'urn:inin.com:configuration.people:queueColumnsMessage' });

    Object.defineProperty(QueueColumnsMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:queueColumnsMessage'] = QueueColumnsMessage;

    return QueueColumnsMessage;
}());

var ResponseManagementDocumentsMessage = (function(){
    var hasProps = false;

    function ResponseManagementDocumentsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:responseManagementDocumentsMessage', enumerable: true });
        }

        ResponseManagementDocumentsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ResponseManagementDocumentsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(ResponseManagementDocumentsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ResponseManagementDocument); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ResponseManagementDocument(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ResponseManagementDocumentsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementDocumentsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ResponseManagementDocument); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ResponseManagementDocument(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ResponseManagementDocumentsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementDocumentsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for ResponseManagementDocumentsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ResponseManagementDocumentsMessage, '__type', { value: 'urn:inin.com:configuration.people:responseManagementDocumentsMessage' });

    Object.defineProperty(ResponseManagementDocumentsMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:responseManagementDocumentsMessage'] = ResponseManagementDocumentsMessage;

    return ResponseManagementDocumentsMessage;
}());

var RolesMessage = (function(){
    var hasProps = false;

    function RolesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:rolesMessage', enumerable: true });
        }

        RolesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(RolesMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(RolesMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Role); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Role(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RolesMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(RolesMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Role); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Role(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RolesMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(RolesMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for RolesMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RolesMessage, '__type', { value: 'urn:inin.com:configuration.people:rolesMessage' });

    Object.defineProperty(RolesMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:rolesMessage'] = RolesMessage;

    return RolesMessage;
}());

var SchedulesMessage = (function(){
    var hasProps = false;

    function SchedulesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:schedulesMessage', enumerable: true });
        }

        SchedulesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(SchedulesMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(SchedulesMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Schedule); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Schedule(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SchedulesMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(SchedulesMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Schedule); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Schedule(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SchedulesMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(SchedulesMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for SchedulesMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SchedulesMessage, '__type', { value: 'urn:inin.com:configuration.people:schedulesMessage' });

    Object.defineProperty(SchedulesMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:schedulesMessage'] = SchedulesMessage;

    return SchedulesMessage;
}());

var SecureInputFormsMessage = (function(){
    var hasProps = false;

    function SecureInputFormsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:secureInputFormsMessage', enumerable: true });
        }

        SecureInputFormsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(SecureInputFormsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(SecureInputFormsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SecureInputForm); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SecureInputForm(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SecureInputFormsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputFormsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SecureInputForm); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SecureInputForm(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SecureInputFormsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecureInputFormsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for SecureInputFormsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SecureInputFormsMessage, '__type', { value: 'urn:inin.com:configuration.people:secureInputFormsMessage' });

    Object.defineProperty(SecureInputFormsMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:secureInputFormsMessage'] = SecureInputFormsMessage;

    return SecureInputFormsMessage;
}());

var SkillCategoriesMessage = (function(){
    var hasProps = false;

    function SkillCategoriesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:skillCategoriesMessage', enumerable: true });
        }

        SkillCategoriesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(SkillCategoriesMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(SkillCategoriesMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SkillCategory); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SkillCategory(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SkillCategoriesMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillCategoriesMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SkillCategory); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SkillCategory(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SkillCategoriesMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillCategoriesMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for SkillCategoriesMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SkillCategoriesMessage, '__type', { value: 'urn:inin.com:configuration.people:skillCategoriesMessage' });

    Object.defineProperty(SkillCategoriesMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:skillCategoriesMessage'] = SkillCategoriesMessage;

    return SkillCategoriesMessage;
}());

var SkillsMessage = (function(){
    var hasProps = false;

    function SkillsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:skillsMessage', enumerable: true });
        }

        SkillsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(SkillsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(SkillsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Skill); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Skill(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SkillsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Skill); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Skill(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SkillsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(SkillsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for SkillsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SkillsMessage, '__type', { value: 'urn:inin.com:configuration.people:skillsMessage' });

    Object.defineProperty(SkillsMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:skillsMessage'] = SkillsMessage;

    return SkillsMessage;
}());

var StatisticParameterGroupsMessage = (function(){
    var hasProps = false;

    function StatisticParameterGroupsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:statisticParameterGroupsMessage', enumerable: true });
        }

        StatisticParameterGroupsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatisticParameterGroupsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(StatisticParameterGroupsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatisticParameterGroup); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new StatisticParameterGroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticParameterGroupsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticParameterGroupsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StatisticParameterGroup); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new StatisticParameterGroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StatisticParameterGroupsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatisticParameterGroupsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for StatisticParameterGroupsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatisticParameterGroupsMessage, '__type', { value: 'urn:inin.com:configuration.people:statisticParameterGroupsMessage' });

    Object.defineProperty(StatisticParameterGroupsMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:statisticParameterGroupsMessage'] = StatisticParameterGroupsMessage;

    return StatisticParameterGroupsMessage;
}());

var UsersMessage = (function(){
    var hasProps = false;

    function UsersMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:usersMessage', enumerable: true });
        }

        UsersMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(UsersMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(UsersMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof User); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new User(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UsersMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(UsersMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof User); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new User(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UsersMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(UsersMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for UsersMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UsersMessage, '__type', { value: 'urn:inin.com:configuration.people:usersMessage' });

    Object.defineProperty(UsersMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:usersMessage'] = UsersMessage;

    return UsersMessage;
}());

var WorkgroupsMessage = (function(){
    var hasProps = false;

    function WorkgroupsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:workgroupsMessage', enumerable: true });
        }

        WorkgroupsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(WorkgroupsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Workgroup); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Workgroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WorkgroupsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(WorkgroupsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Workgroup); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Workgroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WorkgroupsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(WorkgroupsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for WorkgroupsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupsMessage, '__type', { value: 'urn:inin.com:configuration.people:workgroupsMessage' });

    Object.defineProperty(WorkgroupsMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:workgroupsMessage'] = WorkgroupsMessage;

    return WorkgroupsMessage;
}());

var WrapUpCategoriesMessage = (function(){
    var hasProps = false;

    function WrapUpCategoriesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:wrapUpCategoriesMessage', enumerable: true });
        }

        WrapUpCategoriesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(WrapUpCategoriesMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(WrapUpCategoriesMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof WrapUpCategory); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new WrapUpCategory(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCategoriesMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategoriesMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof WrapUpCategory); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new WrapUpCategory(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCategoriesMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCategoriesMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for WrapUpCategoriesMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WrapUpCategoriesMessage, '__type', { value: 'urn:inin.com:configuration.people:wrapUpCategoriesMessage' });

    Object.defineProperty(WrapUpCategoriesMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:wrapUpCategoriesMessage'] = WrapUpCategoriesMessage;

    return WrapUpCategoriesMessage;
}());

var WrapUpCodesMessage = (function(){
    var hasProps = false;

    function WrapUpCodesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people:wrapUpCodesMessage', enumerable: true });
        }

        WrapUpCodesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(WrapUpCodesMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(WrapUpCodesMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof WrapUpCode); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new WrapUpCode(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCodesMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCodesMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof WrapUpCode); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new WrapUpCode(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WrapUpCodesMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(WrapUpCodesMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for WrapUpCodesMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WrapUpCodesMessage, '__type', { value: 'urn:inin.com:configuration.people:wrapUpCodesMessage' });

    Object.defineProperty(WrapUpCodesMessage, '__propInfo', {
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

    _typemap['urn:inin.com:configuration.people:wrapUpCodesMessage'] = WrapUpCodesMessage;

    return WrapUpCodesMessage;
}());

var $accessControlGroups = (function(){
    function getAccessControlGroups(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAccessControlGroups.params)) {
            try {
                params = new getAccessControlGroups.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAccessControlGroups.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AccessControlGroups) ? o : new AccessControlGroups(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAccessControlGroups.method, getAccessControlGroups.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAccessControlGroups, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/access-control-groups', enumerable: true }
    });

    getAccessControlGroups.params = (function(){
        _util.inherits(getAccessControlGroups_params, _util.RequestParams);

        function getAccessControlGroups_params(properties) {
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

            getAccessControlGroups_params._super.constructor.apply(this, arguments);
        }

        return getAccessControlGroups_params;
    })();

    function createAccessControlGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createAccessControlGroup.params)) {
            try {
                params = new createAccessControlGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createAccessControlGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createAccessControlGroup.method, createAccessControlGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createAccessControlGroup, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/access-control-groups', enumerable: true }
    });

    createAccessControlGroup.params = (function(){
        _util.inherits(createAccessControlGroup_params, _util.RequestParams);

        function createAccessControlGroup_params(properties) {
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
            if (!(properties.content instanceof AccessControlGroup)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.AccessControlGroup');
            }

            createAccessControlGroup_params._super.constructor.apply(this, arguments);
        }

        return createAccessControlGroup_params;
    })();

    function getAccessControlGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAccessControlGroup.params)) {
            try {
                params = new getAccessControlGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAccessControlGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AccessControlGroup) ? o : new AccessControlGroup(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAccessControlGroup.method, getAccessControlGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAccessControlGroup, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/access-control-groups/{id}', enumerable: true }
    });

    getAccessControlGroup.params = (function(){
        _util.inherits(getAccessControlGroup_params, _util.RequestParams);

        function getAccessControlGroup_params(properties) {
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

            getAccessControlGroup_params._super.constructor.apply(this, arguments);
        }

        return getAccessControlGroup_params;
    })();

    function deleteAccessControlGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteAccessControlGroup.params)) {
            try {
                params = new deleteAccessControlGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteAccessControlGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteAccessControlGroup.method, deleteAccessControlGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteAccessControlGroup, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/access-control-groups/{id}', enumerable: true }
    });

    deleteAccessControlGroup.params = (function(){
        _util.inherits(deleteAccessControlGroup_params, _util.RequestParams);

        function deleteAccessControlGroup_params(properties) {
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

            deleteAccessControlGroup_params._super.constructor.apply(this, arguments);
        }

        return deleteAccessControlGroup_params;
    })();

    function updateAccessControlGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateAccessControlGroup.params)) {
            try {
                params = new updateAccessControlGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAccessControlGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateAccessControlGroup.method, updateAccessControlGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateAccessControlGroup, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/access-control-groups/{id}', enumerable: true }
    });

    updateAccessControlGroup.params = (function(){
        _util.inherits(updateAccessControlGroup_params, _util.RequestParams);

        function updateAccessControlGroup_params(properties) {
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
            if (!(properties.content instanceof AccessControlGroup)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.AccessControlGroup');
            }

            updateAccessControlGroup_params._super.constructor.apply(this, arguments);
        }

        return updateAccessControlGroup_params;
    })();

    return Object.create(null, {
        getAccessControlGroups: { value: getAccessControlGroups, enumerable: true },
        createAccessControlGroup: { value: createAccessControlGroup, enumerable: true },
        getAccessControlGroup: { value: getAccessControlGroup, enumerable: true },
        deleteAccessControlGroup: { value: deleteAccessControlGroup, enumerable: true },
        updateAccessControlGroup: { value: updateAccessControlGroup, enumerable: true }
    });
})();

var $accountCodes = (function(){
    function getAccountCodes(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAccountCodes.params)) {
            try {
                params = new getAccountCodes.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAccountCodes.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AccountCodes) ? o : new AccountCodes(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAccountCodes.method, getAccountCodes.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAccountCodes, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/account-codes', enumerable: true }
    });

    getAccountCodes.params = (function(){
        _util.inherits(getAccountCodes_params, _util.RequestParams);

        function getAccountCodes_params(properties) {
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

            getAccountCodes_params._super.constructor.apply(this, arguments);
        }

        return getAccountCodes_params;
    })();

    function createAccountCode(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createAccountCode.params)) {
            try {
                params = new createAccountCode.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createAccountCode.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createAccountCode.method, createAccountCode.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createAccountCode, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/account-codes', enumerable: true }
    });

    createAccountCode.params = (function(){
        _util.inherits(createAccountCode_params, _util.RequestParams);

        function createAccountCode_params(properties) {
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
            if (!(properties.content instanceof AccountCode)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.AccountCode');
            }

            createAccountCode_params._super.constructor.apply(this, arguments);
        }

        return createAccountCode_params;
    })();

    function getAccountCode(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAccountCode.params)) {
            try {
                params = new getAccountCode.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAccountCode.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AccountCode) ? o : new AccountCode(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAccountCode.method, getAccountCode.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAccountCode, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/account-codes/{id}', enumerable: true }
    });

    getAccountCode.params = (function(){
        _util.inherits(getAccountCode_params, _util.RequestParams);

        function getAccountCode_params(properties) {
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

            getAccountCode_params._super.constructor.apply(this, arguments);
        }

        return getAccountCode_params;
    })();

    function deleteAccountCode(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteAccountCode.params)) {
            try {
                params = new deleteAccountCode.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteAccountCode.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteAccountCode.method, deleteAccountCode.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteAccountCode, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/account-codes/{id}', enumerable: true }
    });

    deleteAccountCode.params = (function(){
        _util.inherits(deleteAccountCode_params, _util.RequestParams);

        function deleteAccountCode_params(properties) {
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

            deleteAccountCode_params._super.constructor.apply(this, arguments);
        }

        return deleteAccountCode_params;
    })();

    function updateAccountCode(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateAccountCode.params)) {
            try {
                params = new updateAccountCode.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAccountCode.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateAccountCode.method, updateAccountCode.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateAccountCode, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/account-codes/{id}', enumerable: true }
    });

    updateAccountCode.params = (function(){
        _util.inherits(updateAccountCode_params, _util.RequestParams);

        function updateAccountCode_params(properties) {
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
            if (!(properties.content instanceof AccountCode)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.AccountCode');
            }

            updateAccountCode_params._super.constructor.apply(this, arguments);
        }

        return updateAccountCode_params;
    })();

    return Object.create(null, {
        getAccountCodes: { value: getAccountCodes, enumerable: true },
        createAccountCode: { value: createAccountCode, enumerable: true },
        getAccountCode: { value: getAccountCode, enumerable: true },
        deleteAccountCode: { value: deleteAccountCode, enumerable: true },
        updateAccountCode: { value: updateAccountCode, enumerable: true }
    });
})();

var $accountCodesConfiguration = (function(){
    function getAccountCodesConfiguration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAccountCodesConfiguration.params)) {
            try {
                params = new getAccountCodesConfiguration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAccountCodesConfiguration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AccountCodesConfiguration) ? o : new AccountCodesConfiguration(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAccountCodesConfiguration.method, getAccountCodesConfiguration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAccountCodesConfiguration, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/account-codes-configuration', enumerable: true }
    });

    getAccountCodesConfiguration.params = (function(){
        _util.inherits(getAccountCodesConfiguration_params, _util.RequestParams);

        function getAccountCodesConfiguration_params(properties) {
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

            getAccountCodesConfiguration_params._super.constructor.apply(this, arguments);
        }

        return getAccountCodesConfiguration_params;
    })();

    function updateAccountCodesConfiguration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateAccountCodesConfiguration.params)) {
            try {
                params = new updateAccountCodesConfiguration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAccountCodesConfiguration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateAccountCodesConfiguration.method, updateAccountCodesConfiguration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateAccountCodesConfiguration, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/account-codes-configuration', enumerable: true }
    });

    updateAccountCodesConfiguration.params = (function(){
        _util.inherits(updateAccountCodesConfiguration_params, _util.RequestParams);

        function updateAccountCodesConfiguration_params(properties) {
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
            if (!(properties.content instanceof AccountCodesConfiguration)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.AccountCodesConfiguration');
            }

            updateAccountCodesConfiguration_params._super.constructor.apply(this, arguments);
        }

        return updateAccountCodesConfiguration_params;
    })();

    return Object.create(null, {
        getAccountCodesConfiguration: { value: getAccountCodesConfiguration, enumerable: true },
        updateAccountCodesConfiguration: { value: updateAccountCodesConfiguration, enumerable: true }
    });
})();

var $clientButtons = (function(){
    function getClientButtons(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getClientButtons.params)) {
            try {
                params = new getClientButtons.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getClientButtons.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ClientButtons) ? o : new ClientButtons(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getClientButtons.method, getClientButtons.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getClientButtons, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-buttons', enumerable: true }
    });

    getClientButtons.params = (function(){
        _util.inherits(getClientButtons_params, _util.RequestParams);

        function getClientButtons_params(properties) {
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

            getClientButtons_params._super.constructor.apply(this, arguments);
        }

        return getClientButtons_params;
    })();

    function createClientButton(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createClientButton.params)) {
            try {
                params = new createClientButton.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createClientButton.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createClientButton.method, createClientButton.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createClientButton, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-buttons', enumerable: true }
    });

    createClientButton.params = (function(){
        _util.inherits(createClientButton_params, _util.RequestParams);

        function createClientButton_params(properties) {
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
            if (!(properties.content instanceof ClientButton)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.ClientButton');
            }

            createClientButton_params._super.constructor.apply(this, arguments);
        }

        return createClientButton_params;
    })();

    function getClientButton(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getClientButton.params)) {
            try {
                params = new getClientButton.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getClientButton.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ClientButton) ? o : new ClientButton(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getClientButton.method, getClientButton.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getClientButton, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-buttons/{id}', enumerable: true }
    });

    getClientButton.params = (function(){
        _util.inherits(getClientButton_params, _util.RequestParams);

        function getClientButton_params(properties) {
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

            getClientButton_params._super.constructor.apply(this, arguments);
        }

        return getClientButton_params;
    })();

    function deleteClientButton(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteClientButton.params)) {
            try {
                params = new deleteClientButton.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteClientButton.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteClientButton.method, deleteClientButton.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteClientButton, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-buttons/{id}', enumerable: true }
    });

    deleteClientButton.params = (function(){
        _util.inherits(deleteClientButton_params, _util.RequestParams);

        function deleteClientButton_params(properties) {
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

            deleteClientButton_params._super.constructor.apply(this, arguments);
        }

        return deleteClientButton_params;
    })();

    function updateClientButton(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateClientButton.params)) {
            try {
                params = new updateClientButton.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateClientButton.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateClientButton.method, updateClientButton.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateClientButton, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-buttons/{id}', enumerable: true }
    });

    updateClientButton.params = (function(){
        _util.inherits(updateClientButton_params, _util.RequestParams);

        function updateClientButton_params(properties) {
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
            if (!(properties.content instanceof ClientButton)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.ClientButton');
            }

            updateClientButton_params._super.constructor.apply(this, arguments);
        }

        return updateClientButton_params;
    })();

    return Object.create(null, {
        getClientButtons: { value: getClientButtons, enumerable: true },
        createClientButton: { value: createClientButton, enumerable: true },
        getClientButton: { value: getClientButton, enumerable: true },
        deleteClientButton: { value: deleteClientButton, enumerable: true },
        updateClientButton: { value: updateClientButton, enumerable: true }
    });
})();

var $clientConfigurationTemplates = (function(){
    function getClientConfigurationTemplates(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getClientConfigurationTemplates.params)) {
            try {
                params = new getClientConfigurationTemplates.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getClientConfigurationTemplates.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ClientConfigurationTemplates) ? o : new ClientConfigurationTemplates(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getClientConfigurationTemplates.method, getClientConfigurationTemplates.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getClientConfigurationTemplates, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-configuration-templates', enumerable: true }
    });

    getClientConfigurationTemplates.params = (function(){
        _util.inherits(getClientConfigurationTemplates_params, _util.RequestParams);

        function getClientConfigurationTemplates_params(properties) {
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

            getClientConfigurationTemplates_params._super.constructor.apply(this, arguments);
        }

        return getClientConfigurationTemplates_params;
    })();

    function createClientConfigurationTemplate(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createClientConfigurationTemplate.params)) {
            try {
                params = new createClientConfigurationTemplate.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createClientConfigurationTemplate.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createClientConfigurationTemplate.method, createClientConfigurationTemplate.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createClientConfigurationTemplate, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-configuration-templates', enumerable: true }
    });

    createClientConfigurationTemplate.params = (function(){
        _util.inherits(createClientConfigurationTemplate_params, _util.RequestParams);

        function createClientConfigurationTemplate_params(properties) {
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
            if (!(properties.content instanceof ClientConfigurationTemplate)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.ClientConfigurationTemplate');
            }

            createClientConfigurationTemplate_params._super.constructor.apply(this, arguments);
        }

        return createClientConfigurationTemplate_params;
    })();

    function getClientConfigurationTemplate(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getClientConfigurationTemplate.params)) {
            try {
                params = new getClientConfigurationTemplate.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getClientConfigurationTemplate.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ClientConfigurationTemplate) ? o : new ClientConfigurationTemplate(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getClientConfigurationTemplate.method, getClientConfigurationTemplate.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getClientConfigurationTemplate, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-configuration-templates/{id}', enumerable: true }
    });

    getClientConfigurationTemplate.params = (function(){
        _util.inherits(getClientConfigurationTemplate_params, _util.RequestParams);

        function getClientConfigurationTemplate_params(properties) {
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

            getClientConfigurationTemplate_params._super.constructor.apply(this, arguments);
        }

        return getClientConfigurationTemplate_params;
    })();

    function deleteClientConfigurationTemplate(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteClientConfigurationTemplate.params)) {
            try {
                params = new deleteClientConfigurationTemplate.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteClientConfigurationTemplate.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteClientConfigurationTemplate.method, deleteClientConfigurationTemplate.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteClientConfigurationTemplate, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-configuration-templates/{id}', enumerable: true }
    });

    deleteClientConfigurationTemplate.params = (function(){
        _util.inherits(deleteClientConfigurationTemplate_params, _util.RequestParams);

        function deleteClientConfigurationTemplate_params(properties) {
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

            deleteClientConfigurationTemplate_params._super.constructor.apply(this, arguments);
        }

        return deleteClientConfigurationTemplate_params;
    })();

    function updateClientConfigurationTemplate(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateClientConfigurationTemplate.params)) {
            try {
                params = new updateClientConfigurationTemplate.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateClientConfigurationTemplate.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateClientConfigurationTemplate.method, updateClientConfigurationTemplate.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateClientConfigurationTemplate, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-configuration-templates/{id}', enumerable: true }
    });

    updateClientConfigurationTemplate.params = (function(){
        _util.inherits(updateClientConfigurationTemplate_params, _util.RequestParams);

        function updateClientConfigurationTemplate_params(properties) {
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
            if (!(properties.content instanceof ClientConfigurationTemplate)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.ClientConfigurationTemplate');
            }

            updateClientConfigurationTemplate_params._super.constructor.apply(this, arguments);
        }

        return updateClientConfigurationTemplate_params;
    })();

    return Object.create(null, {
        getClientConfigurationTemplates: { value: getClientConfigurationTemplates, enumerable: true },
        createClientConfigurationTemplate: { value: createClientConfigurationTemplate, enumerable: true },
        getClientConfigurationTemplate: { value: getClientConfigurationTemplate, enumerable: true },
        deleteClientConfigurationTemplate: { value: deleteClientConfigurationTemplate, enumerable: true },
        updateClientConfigurationTemplate: { value: updateClientConfigurationTemplate, enumerable: true }
    });
})();

var $clientTemplates = (function(){
    function getClientTemplates(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getClientTemplates.params)) {
            try {
                params = new getClientTemplates.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getClientTemplates.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ClientTemplates) ? o : new ClientTemplates(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getClientTemplates.method, getClientTemplates.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getClientTemplates, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-templates', enumerable: true }
    });

    getClientTemplates.params = (function(){
        _util.inherits(getClientTemplates_params, _util.RequestParams);

        function getClientTemplates_params(properties) {
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

            getClientTemplates_params._super.constructor.apply(this, arguments);
        }

        return getClientTemplates_params;
    })();

    function createClientTemplate(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createClientTemplate.params)) {
            try {
                params = new createClientTemplate.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createClientTemplate.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createClientTemplate.method, createClientTemplate.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createClientTemplate, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-templates', enumerable: true }
    });

    createClientTemplate.params = (function(){
        _util.inherits(createClientTemplate_params, _util.RequestParams);

        function createClientTemplate_params(properties) {
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
            if (!(properties.content instanceof ClientTemplate)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.ClientTemplate');
            }

            createClientTemplate_params._super.constructor.apply(this, arguments);
        }

        return createClientTemplate_params;
    })();

    function getClientTemplate(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getClientTemplate.params)) {
            try {
                params = new getClientTemplate.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getClientTemplate.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ClientTemplate) ? o : new ClientTemplate(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getClientTemplate.method, getClientTemplate.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getClientTemplate, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-templates/{id}', enumerable: true }
    });

    getClientTemplate.params = (function(){
        _util.inherits(getClientTemplate_params, _util.RequestParams);

        function getClientTemplate_params(properties) {
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

            getClientTemplate_params._super.constructor.apply(this, arguments);
        }

        return getClientTemplate_params;
    })();

    function deleteClientTemplate(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteClientTemplate.params)) {
            try {
                params = new deleteClientTemplate.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteClientTemplate.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteClientTemplate.method, deleteClientTemplate.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteClientTemplate, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-templates/{id}', enumerable: true }
    });

    deleteClientTemplate.params = (function(){
        _util.inherits(deleteClientTemplate_params, _util.RequestParams);

        function deleteClientTemplate_params(properties) {
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

            deleteClientTemplate_params._super.constructor.apply(this, arguments);
        }

        return deleteClientTemplate_params;
    })();

    function updateClientTemplate(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateClientTemplate.params)) {
            try {
                params = new updateClientTemplate.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateClientTemplate.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateClientTemplate.method, updateClientTemplate.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateClientTemplate, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/client-templates/{id}', enumerable: true }
    });

    updateClientTemplate.params = (function(){
        _util.inherits(updateClientTemplate_params, _util.RequestParams);

        function updateClientTemplate_params(properties) {
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
            if (!(properties.content instanceof ClientTemplate)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.ClientTemplate');
            }

            updateClientTemplate_params._super.constructor.apply(this, arguments);
        }

        return updateClientTemplate_params;
    })();

    return Object.create(null, {
        getClientTemplates: { value: getClientTemplates, enumerable: true },
        createClientTemplate: { value: createClientTemplate, enumerable: true },
        getClientTemplate: { value: getClientTemplate, enumerable: true },
        deleteClientTemplate: { value: deleteClientTemplate, enumerable: true },
        updateClientTemplate: { value: updateClientTemplate, enumerable: true }
    });
})();

var $defaultUser = (function(){
    function getDefaultUser(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDefaultUser.params)) {
            try {
                params = new getDefaultUser.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaultUser.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof DefaultUser) ? o : new DefaultUser(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaultUser.method, getDefaultUser.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaultUser, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/default-user', enumerable: true }
    });

    getDefaultUser.params = (function(){
        _util.inherits(getDefaultUser_params, _util.RequestParams);

        function getDefaultUser_params(properties) {
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

            getDefaultUser_params._super.constructor.apply(this, arguments);
        }

        return getDefaultUser_params;
    })();

    function updateDefaultUser(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateDefaultUser.params)) {
            try {
                params = new updateDefaultUser.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateDefaultUser.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateDefaultUser.method, updateDefaultUser.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateDefaultUser, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/default-user', enumerable: true }
    });

    updateDefaultUser.params = (function(){
        _util.inherits(updateDefaultUser_params, _util.RequestParams);

        function updateDefaultUser_params(properties) {
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
            if (!(properties.content instanceof DefaultUser)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.DefaultUser');
            }

            updateDefaultUser_params._super.constructor.apply(this, arguments);
        }

        return updateDefaultUser_params;
    })();

    return Object.create(null, {
        getDefaultUser: { value: getDefaultUser, enumerable: true },
        updateDefaultUser: { value: updateDefaultUser, enumerable: true }
    });
})();

var $passwordPolicies = (function(){
    function getPasswordPolicies(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getPasswordPolicies.params)) {
            try {
                params = new getPasswordPolicies.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getPasswordPolicies.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof PasswordPolicies) ? o : new PasswordPolicies(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getPasswordPolicies.method, getPasswordPolicies.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getPasswordPolicies, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/password-policies', enumerable: true }
    });

    getPasswordPolicies.params = (function(){
        _util.inherits(getPasswordPolicies_params, _util.RequestParams);

        function getPasswordPolicies_params(properties) {
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

            getPasswordPolicies_params._super.constructor.apply(this, arguments);
        }

        return getPasswordPolicies_params;
    })();

    function createPasswordPolicy(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createPasswordPolicy.params)) {
            try {
                params = new createPasswordPolicy.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createPasswordPolicy.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createPasswordPolicy.method, createPasswordPolicy.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createPasswordPolicy, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/password-policies', enumerable: true }
    });

    createPasswordPolicy.params = (function(){
        _util.inherits(createPasswordPolicy_params, _util.RequestParams);

        function createPasswordPolicy_params(properties) {
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
            if (!(properties.content instanceof PasswordPolicy)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.PasswordPolicy');
            }

            createPasswordPolicy_params._super.constructor.apply(this, arguments);
        }

        return createPasswordPolicy_params;
    })();

    function getPasswordPolicy(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getPasswordPolicy.params)) {
            try {
                params = new getPasswordPolicy.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getPasswordPolicy.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof PasswordPolicy) ? o : new PasswordPolicy(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getPasswordPolicy.method, getPasswordPolicy.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getPasswordPolicy, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/password-policies/{id}', enumerable: true }
    });

    getPasswordPolicy.params = (function(){
        _util.inherits(getPasswordPolicy_params, _util.RequestParams);

        function getPasswordPolicy_params(properties) {
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

            getPasswordPolicy_params._super.constructor.apply(this, arguments);
        }

        return getPasswordPolicy_params;
    })();

    function deletePasswordPolicy(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deletePasswordPolicy.params)) {
            try {
                params = new deletePasswordPolicy.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deletePasswordPolicy.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deletePasswordPolicy.method, deletePasswordPolicy.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deletePasswordPolicy, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/password-policies/{id}', enumerable: true }
    });

    deletePasswordPolicy.params = (function(){
        _util.inherits(deletePasswordPolicy_params, _util.RequestParams);

        function deletePasswordPolicy_params(properties) {
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

            deletePasswordPolicy_params._super.constructor.apply(this, arguments);
        }

        return deletePasswordPolicy_params;
    })();

    function updatePasswordPolicy(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updatePasswordPolicy.params)) {
            try {
                params = new updatePasswordPolicy.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updatePasswordPolicy.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updatePasswordPolicy.method, updatePasswordPolicy.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updatePasswordPolicy, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/password-policies/{id}', enumerable: true }
    });

    updatePasswordPolicy.params = (function(){
        _util.inherits(updatePasswordPolicy_params, _util.RequestParams);

        function updatePasswordPolicy_params(properties) {
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
            if (!(properties.content instanceof PasswordPolicy)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.PasswordPolicy');
            }

            updatePasswordPolicy_params._super.constructor.apply(this, arguments);
        }

        return updatePasswordPolicy_params;
    })();

    return Object.create(null, {
        getPasswordPolicies: { value: getPasswordPolicies, enumerable: true },
        createPasswordPolicy: { value: createPasswordPolicy, enumerable: true },
        getPasswordPolicy: { value: getPasswordPolicy, enumerable: true },
        deletePasswordPolicy: { value: deletePasswordPolicy, enumerable: true },
        updatePasswordPolicy: { value: updatePasswordPolicy, enumerable: true }
    });
})();

var $queueColumns = (function(){
    function getQueueColumns(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getQueueColumns.params)) {
            try {
                params = new getQueueColumns.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getQueueColumns.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof QueueColumns) ? o : new QueueColumns(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getQueueColumns.method, getQueueColumns.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getQueueColumns, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/queue-columns', enumerable: true }
    });

    getQueueColumns.params = (function(){
        _util.inherits(getQueueColumns_params, _util.RequestParams);

        function getQueueColumns_params(properties) {
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

            getQueueColumns_params._super.constructor.apply(this, arguments);
        }

        return getQueueColumns_params;
    })();

    function createQueueColumn(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createQueueColumn.params)) {
            try {
                params = new createQueueColumn.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createQueueColumn.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createQueueColumn.method, createQueueColumn.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createQueueColumn, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/queue-columns', enumerable: true }
    });

    createQueueColumn.params = (function(){
        _util.inherits(createQueueColumn_params, _util.RequestParams);

        function createQueueColumn_params(properties) {
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
            if (!(properties.content instanceof QueueColumn)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.QueueColumn');
            }

            createQueueColumn_params._super.constructor.apply(this, arguments);
        }

        return createQueueColumn_params;
    })();

    function getQueueColumn(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getQueueColumn.params)) {
            try {
                params = new getQueueColumn.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getQueueColumn.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof QueueColumn) ? o : new QueueColumn(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getQueueColumn.method, getQueueColumn.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getQueueColumn, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/queue-columns/{id}', enumerable: true }
    });

    getQueueColumn.params = (function(){
        _util.inherits(getQueueColumn_params, _util.RequestParams);

        function getQueueColumn_params(properties) {
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

            getQueueColumn_params._super.constructor.apply(this, arguments);
        }

        return getQueueColumn_params;
    })();

    function deleteQueueColumn(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteQueueColumn.params)) {
            try {
                params = new deleteQueueColumn.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteQueueColumn.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteQueueColumn.method, deleteQueueColumn.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteQueueColumn, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/queue-columns/{id}', enumerable: true }
    });

    deleteQueueColumn.params = (function(){
        _util.inherits(deleteQueueColumn_params, _util.RequestParams);

        function deleteQueueColumn_params(properties) {
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

            deleteQueueColumn_params._super.constructor.apply(this, arguments);
        }

        return deleteQueueColumn_params;
    })();

    function updateQueueColumn(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateQueueColumn.params)) {
            try {
                params = new updateQueueColumn.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateQueueColumn.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateQueueColumn.method, updateQueueColumn.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateQueueColumn, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/queue-columns/{id}', enumerable: true }
    });

    updateQueueColumn.params = (function(){
        _util.inherits(updateQueueColumn_params, _util.RequestParams);

        function updateQueueColumn_params(properties) {
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
            if (!(properties.content instanceof QueueColumn)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.QueueColumn');
            }

            updateQueueColumn_params._super.constructor.apply(this, arguments);
        }

        return updateQueueColumn_params;
    })();

    return Object.create(null, {
        getQueueColumns: { value: getQueueColumns, enumerable: true },
        createQueueColumn: { value: createQueueColumn, enumerable: true },
        getQueueColumn: { value: getQueueColumn, enumerable: true },
        deleteQueueColumn: { value: deleteQueueColumn, enumerable: true },
        updateQueueColumn: { value: updateQueueColumn, enumerable: true }
    });
})();

var $responseManagementDocuments = (function(){
    function getResponseManagementDocuments(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getResponseManagementDocuments.params)) {
            try {
                params = new getResponseManagementDocuments.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getResponseManagementDocuments.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ResponseManagementDocuments) ? o : new ResponseManagementDocuments(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getResponseManagementDocuments.method, getResponseManagementDocuments.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getResponseManagementDocuments, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/response-management-documents', enumerable: true }
    });

    getResponseManagementDocuments.params = (function(){
        _util.inherits(getResponseManagementDocuments_params, _util.RequestParams);

        function getResponseManagementDocuments_params(properties) {
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

            getResponseManagementDocuments_params._super.constructor.apply(this, arguments);
        }

        return getResponseManagementDocuments_params;
    })();

    function createResponseManagementDocument(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createResponseManagementDocument.params)) {
            try {
                params = new createResponseManagementDocument.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createResponseManagementDocument.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createResponseManagementDocument.method, createResponseManagementDocument.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createResponseManagementDocument, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/response-management-documents', enumerable: true }
    });

    createResponseManagementDocument.params = (function(){
        _util.inherits(createResponseManagementDocument_params, _util.RequestParams);

        function createResponseManagementDocument_params(properties) {
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
            if (!(properties.content instanceof ResponseManagementDocument)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.ResponseManagementDocument');
            }

            createResponseManagementDocument_params._super.constructor.apply(this, arguments);
        }

        return createResponseManagementDocument_params;
    })();

    function getResponseManagementDocument(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getResponseManagementDocument.params)) {
            try {
                params = new getResponseManagementDocument.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getResponseManagementDocument.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ResponseManagementDocument) ? o : new ResponseManagementDocument(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getResponseManagementDocument.method, getResponseManagementDocument.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getResponseManagementDocument, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/response-management-documents/{id}', enumerable: true }
    });

    getResponseManagementDocument.params = (function(){
        _util.inherits(getResponseManagementDocument_params, _util.RequestParams);

        function getResponseManagementDocument_params(properties) {
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

            getResponseManagementDocument_params._super.constructor.apply(this, arguments);
        }

        return getResponseManagementDocument_params;
    })();

    function deleteResponseManagementDocument(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteResponseManagementDocument.params)) {
            try {
                params = new deleteResponseManagementDocument.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteResponseManagementDocument.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteResponseManagementDocument.method, deleteResponseManagementDocument.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteResponseManagementDocument, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/response-management-documents/{id}', enumerable: true }
    });

    deleteResponseManagementDocument.params = (function(){
        _util.inherits(deleteResponseManagementDocument_params, _util.RequestParams);

        function deleteResponseManagementDocument_params(properties) {
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

            deleteResponseManagementDocument_params._super.constructor.apply(this, arguments);
        }

        return deleteResponseManagementDocument_params;
    })();

    function updateResponseManagementDocument(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateResponseManagementDocument.params)) {
            try {
                params = new updateResponseManagementDocument.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateResponseManagementDocument.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateResponseManagementDocument.method, updateResponseManagementDocument.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateResponseManagementDocument, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/response-management-documents/{id}', enumerable: true }
    });

    updateResponseManagementDocument.params = (function(){
        _util.inherits(updateResponseManagementDocument_params, _util.RequestParams);

        function updateResponseManagementDocument_params(properties) {
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
            if (!(properties.content instanceof ResponseManagementDocument)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.ResponseManagementDocument');
            }

            updateResponseManagementDocument_params._super.constructor.apply(this, arguments);
        }

        return updateResponseManagementDocument_params;
    })();

    return Object.create(null, {
        getResponseManagementDocuments: { value: getResponseManagementDocuments, enumerable: true },
        createResponseManagementDocument: { value: createResponseManagementDocument, enumerable: true },
        getResponseManagementDocument: { value: getResponseManagementDocument, enumerable: true },
        deleteResponseManagementDocument: { value: deleteResponseManagementDocument, enumerable: true },
        updateResponseManagementDocument: { value: updateResponseManagementDocument, enumerable: true }
    });
})();

var $roles = (function(){
    function getRoles(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getRoles.params)) {
            try {
                params = new getRoles.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getRoles.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Roles) ? o : new Roles(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getRoles.method, getRoles.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getRoles, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/roles', enumerable: true }
    });

    getRoles.params = (function(){
        _util.inherits(getRoles_params, _util.RequestParams);

        function getRoles_params(properties) {
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

            getRoles_params._super.constructor.apply(this, arguments);
        }

        return getRoles_params;
    })();

    function createRole(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createRole.params)) {
            try {
                params = new createRole.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createRole.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createRole.method, createRole.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createRole, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/roles', enumerable: true }
    });

    createRole.params = (function(){
        _util.inherits(createRole_params, _util.RequestParams);

        function createRole_params(properties) {
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
            if (!(properties.content instanceof Role)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.Role');
            }

            createRole_params._super.constructor.apply(this, arguments);
        }

        return createRole_params;
    })();

    function getRole(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getRole.params)) {
            try {
                params = new getRole.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getRole.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Role) ? o : new Role(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getRole.method, getRole.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getRole, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/roles/{id}', enumerable: true }
    });

    getRole.params = (function(){
        _util.inherits(getRole_params, _util.RequestParams);

        function getRole_params(properties) {
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

            getRole_params._super.constructor.apply(this, arguments);
        }

        return getRole_params;
    })();

    function deleteRole(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteRole.params)) {
            try {
                params = new deleteRole.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteRole.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteRole.method, deleteRole.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteRole, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/roles/{id}', enumerable: true }
    });

    deleteRole.params = (function(){
        _util.inherits(deleteRole_params, _util.RequestParams);

        function deleteRole_params(properties) {
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

            deleteRole_params._super.constructor.apply(this, arguments);
        }

        return deleteRole_params;
    })();

    function updateRole(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateRole.params)) {
            try {
                params = new updateRole.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateRole.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateRole.method, updateRole.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateRole, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/roles/{id}', enumerable: true }
    });

    updateRole.params = (function(){
        _util.inherits(updateRole_params, _util.RequestParams);

        function updateRole_params(properties) {
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
            if (!(properties.content instanceof Role)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.Role');
            }

            updateRole_params._super.constructor.apply(this, arguments);
        }

        return updateRole_params;
    })();

    return Object.create(null, {
        getRoles: { value: getRoles, enumerable: true },
        createRole: { value: createRole, enumerable: true },
        getRole: { value: getRole, enumerable: true },
        deleteRole: { value: deleteRole, enumerable: true },
        updateRole: { value: updateRole, enumerable: true }
    });
})();

var $schedules = (function(){
    function getSchedules(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSchedules.params)) {
            try {
                params = new getSchedules.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSchedules.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Schedules) ? o : new Schedules(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSchedules.method, getSchedules.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSchedules, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/schedules', enumerable: true }
    });

    getSchedules.params = (function(){
        _util.inherits(getSchedules_params, _util.RequestParams);

        function getSchedules_params(properties) {
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

            getSchedules_params._super.constructor.apply(this, arguments);
        }

        return getSchedules_params;
    })();

    function createSchedule(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSchedule.params)) {
            try {
                params = new createSchedule.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSchedule.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSchedule.method, createSchedule.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSchedule, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/schedules', enumerable: true }
    });

    createSchedule.params = (function(){
        _util.inherits(createSchedule_params, _util.RequestParams);

        function createSchedule_params(properties) {
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
            if (!(properties.content instanceof Schedule)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.Schedule');
            }

            createSchedule_params._super.constructor.apply(this, arguments);
        }

        return createSchedule_params;
    })();

    function getSchedule(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSchedule.params)) {
            try {
                params = new getSchedule.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSchedule.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Schedule) ? o : new Schedule(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSchedule.method, getSchedule.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSchedule, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/schedules/{id}', enumerable: true }
    });

    getSchedule.params = (function(){
        _util.inherits(getSchedule_params, _util.RequestParams);

        function getSchedule_params(properties) {
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

            getSchedule_params._super.constructor.apply(this, arguments);
        }

        return getSchedule_params;
    })();

    function deleteSchedule(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSchedule.params)) {
            try {
                params = new deleteSchedule.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSchedule.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSchedule.method, deleteSchedule.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSchedule, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/schedules/{id}', enumerable: true }
    });

    deleteSchedule.params = (function(){
        _util.inherits(deleteSchedule_params, _util.RequestParams);

        function deleteSchedule_params(properties) {
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

            deleteSchedule_params._super.constructor.apply(this, arguments);
        }

        return deleteSchedule_params;
    })();

    function updateSchedule(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSchedule.params)) {
            try {
                params = new updateSchedule.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSchedule.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSchedule.method, updateSchedule.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSchedule, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/schedules/{id}', enumerable: true }
    });

    updateSchedule.params = (function(){
        _util.inherits(updateSchedule_params, _util.RequestParams);

        function updateSchedule_params(properties) {
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
            if (!(properties.content instanceof Schedule)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.Schedule');
            }

            updateSchedule_params._super.constructor.apply(this, arguments);
        }

        return updateSchedule_params;
    })();

    return Object.create(null, {
        getSchedules: { value: getSchedules, enumerable: true },
        createSchedule: { value: createSchedule, enumerable: true },
        getSchedule: { value: getSchedule, enumerable: true },
        deleteSchedule: { value: deleteSchedule, enumerable: true },
        updateSchedule: { value: updateSchedule, enumerable: true }
    });
})();

var $secureInputForms = (function(){
    function getSecureInputForms(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSecureInputForms.params)) {
            try {
                params = new getSecureInputForms.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSecureInputForms.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SecureInputForms) ? o : new SecureInputForms(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSecureInputForms.method, getSecureInputForms.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSecureInputForms, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/secure-input-forms', enumerable: true }
    });

    getSecureInputForms.params = (function(){
        _util.inherits(getSecureInputForms_params, _util.RequestParams);

        function getSecureInputForms_params(properties) {
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

            getSecureInputForms_params._super.constructor.apply(this, arguments);
        }

        return getSecureInputForms_params;
    })();

    function createSecureInputForm(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSecureInputForm.params)) {
            try {
                params = new createSecureInputForm.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSecureInputForm.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSecureInputForm.method, createSecureInputForm.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSecureInputForm, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/secure-input-forms', enumerable: true }
    });

    createSecureInputForm.params = (function(){
        _util.inherits(createSecureInputForm_params, _util.RequestParams);

        function createSecureInputForm_params(properties) {
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
            if (!(properties.content instanceof SecureInputForm)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.SecureInputForm');
            }

            createSecureInputForm_params._super.constructor.apply(this, arguments);
        }

        return createSecureInputForm_params;
    })();

    function getSecureInputForm(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSecureInputForm.params)) {
            try {
                params = new getSecureInputForm.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSecureInputForm.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SecureInputForm) ? o : new SecureInputForm(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSecureInputForm.method, getSecureInputForm.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSecureInputForm, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/secure-input-forms/{id}', enumerable: true }
    });

    getSecureInputForm.params = (function(){
        _util.inherits(getSecureInputForm_params, _util.RequestParams);

        function getSecureInputForm_params(properties) {
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

            getSecureInputForm_params._super.constructor.apply(this, arguments);
        }

        return getSecureInputForm_params;
    })();

    function deleteSecureInputForm(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSecureInputForm.params)) {
            try {
                params = new deleteSecureInputForm.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSecureInputForm.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSecureInputForm.method, deleteSecureInputForm.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSecureInputForm, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/secure-input-forms/{id}', enumerable: true }
    });

    deleteSecureInputForm.params = (function(){
        _util.inherits(deleteSecureInputForm_params, _util.RequestParams);

        function deleteSecureInputForm_params(properties) {
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

            deleteSecureInputForm_params._super.constructor.apply(this, arguments);
        }

        return deleteSecureInputForm_params;
    })();

    function updateSecureInputForm(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSecureInputForm.params)) {
            try {
                params = new updateSecureInputForm.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSecureInputForm.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSecureInputForm.method, updateSecureInputForm.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSecureInputForm, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/secure-input-forms/{id}', enumerable: true }
    });

    updateSecureInputForm.params = (function(){
        _util.inherits(updateSecureInputForm_params, _util.RequestParams);

        function updateSecureInputForm_params(properties) {
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
            if (!(properties.content instanceof SecureInputForm)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.SecureInputForm');
            }

            updateSecureInputForm_params._super.constructor.apply(this, arguments);
        }

        return updateSecureInputForm_params;
    })();

    return Object.create(null, {
        getSecureInputForms: { value: getSecureInputForms, enumerable: true },
        createSecureInputForm: { value: createSecureInputForm, enumerable: true },
        getSecureInputForm: { value: getSecureInputForm, enumerable: true },
        deleteSecureInputForm: { value: deleteSecureInputForm, enumerable: true },
        updateSecureInputForm: { value: updateSecureInputForm, enumerable: true }
    });
})();

var $skillCategories = (function(){
    function getSkillCategories(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSkillCategories.params)) {
            try {
                params = new getSkillCategories.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSkillCategories.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SkillCategories) ? o : new SkillCategories(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSkillCategories.method, getSkillCategories.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSkillCategories, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/skill-categories', enumerable: true }
    });

    getSkillCategories.params = (function(){
        _util.inherits(getSkillCategories_params, _util.RequestParams);

        function getSkillCategories_params(properties) {
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

            getSkillCategories_params._super.constructor.apply(this, arguments);
        }

        return getSkillCategories_params;
    })();

    function createSkillCategory(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSkillCategory.params)) {
            try {
                params = new createSkillCategory.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSkillCategory.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSkillCategory.method, createSkillCategory.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSkillCategory, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/skill-categories', enumerable: true }
    });

    createSkillCategory.params = (function(){
        _util.inherits(createSkillCategory_params, _util.RequestParams);

        function createSkillCategory_params(properties) {
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
            if (!(properties.content instanceof SkillCategory)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.SkillCategory');
            }

            createSkillCategory_params._super.constructor.apply(this, arguments);
        }

        return createSkillCategory_params;
    })();

    function getSkillCategory(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSkillCategory.params)) {
            try {
                params = new getSkillCategory.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSkillCategory.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SkillCategory) ? o : new SkillCategory(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSkillCategory.method, getSkillCategory.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSkillCategory, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/skill-categories/{id}', enumerable: true }
    });

    getSkillCategory.params = (function(){
        _util.inherits(getSkillCategory_params, _util.RequestParams);

        function getSkillCategory_params(properties) {
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

            getSkillCategory_params._super.constructor.apply(this, arguments);
        }

        return getSkillCategory_params;
    })();

    function deleteSkillCategory(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSkillCategory.params)) {
            try {
                params = new deleteSkillCategory.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSkillCategory.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSkillCategory.method, deleteSkillCategory.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSkillCategory, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/skill-categories/{id}', enumerable: true }
    });

    deleteSkillCategory.params = (function(){
        _util.inherits(deleteSkillCategory_params, _util.RequestParams);

        function deleteSkillCategory_params(properties) {
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

            deleteSkillCategory_params._super.constructor.apply(this, arguments);
        }

        return deleteSkillCategory_params;
    })();

    function updateSkillCategory(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSkillCategory.params)) {
            try {
                params = new updateSkillCategory.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSkillCategory.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSkillCategory.method, updateSkillCategory.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSkillCategory, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/skill-categories/{id}', enumerable: true }
    });

    updateSkillCategory.params = (function(){
        _util.inherits(updateSkillCategory_params, _util.RequestParams);

        function updateSkillCategory_params(properties) {
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
            if (!(properties.content instanceof SkillCategory)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.SkillCategory');
            }

            updateSkillCategory_params._super.constructor.apply(this, arguments);
        }

        return updateSkillCategory_params;
    })();

    return Object.create(null, {
        getSkillCategories: { value: getSkillCategories, enumerable: true },
        createSkillCategory: { value: createSkillCategory, enumerable: true },
        getSkillCategory: { value: getSkillCategory, enumerable: true },
        deleteSkillCategory: { value: deleteSkillCategory, enumerable: true },
        updateSkillCategory: { value: updateSkillCategory, enumerable: true }
    });
})();

var $skills = (function(){
    function getSkills(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSkills.params)) {
            try {
                params = new getSkills.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSkills.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Skills) ? o : new Skills(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSkills.method, getSkills.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSkills, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/skills', enumerable: true }
    });

    getSkills.params = (function(){
        _util.inherits(getSkills_params, _util.RequestParams);

        function getSkills_params(properties) {
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

            getSkills_params._super.constructor.apply(this, arguments);
        }

        return getSkills_params;
    })();

    function createSkill(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSkill.params)) {
            try {
                params = new createSkill.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSkill.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSkill.method, createSkill.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSkill, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/skills', enumerable: true }
    });

    createSkill.params = (function(){
        _util.inherits(createSkill_params, _util.RequestParams);

        function createSkill_params(properties) {
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
            if (!(properties.content instanceof Skill)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.Skill');
            }

            createSkill_params._super.constructor.apply(this, arguments);
        }

        return createSkill_params;
    })();

    function getSkill(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSkill.params)) {
            try {
                params = new getSkill.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSkill.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Skill) ? o : new Skill(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSkill.method, getSkill.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSkill, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/skills/{id}', enumerable: true }
    });

    getSkill.params = (function(){
        _util.inherits(getSkill_params, _util.RequestParams);

        function getSkill_params(properties) {
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

            getSkill_params._super.constructor.apply(this, arguments);
        }

        return getSkill_params;
    })();

    function deleteSkill(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSkill.params)) {
            try {
                params = new deleteSkill.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSkill.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSkill.method, deleteSkill.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSkill, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/skills/{id}', enumerable: true }
    });

    deleteSkill.params = (function(){
        _util.inherits(deleteSkill_params, _util.RequestParams);

        function deleteSkill_params(properties) {
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

            deleteSkill_params._super.constructor.apply(this, arguments);
        }

        return deleteSkill_params;
    })();

    function updateSkill(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSkill.params)) {
            try {
                params = new updateSkill.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSkill.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSkill.method, updateSkill.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSkill, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/skills/{id}', enumerable: true }
    });

    updateSkill.params = (function(){
        _util.inherits(updateSkill_params, _util.RequestParams);

        function updateSkill_params(properties) {
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
            if (!(properties.content instanceof Skill)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.Skill');
            }

            updateSkill_params._super.constructor.apply(this, arguments);
        }

        return updateSkill_params;
    })();

    return Object.create(null, {
        getSkills: { value: getSkills, enumerable: true },
        createSkill: { value: createSkill, enumerable: true },
        getSkill: { value: getSkill, enumerable: true },
        deleteSkill: { value: deleteSkill, enumerable: true },
        updateSkill: { value: updateSkill, enumerable: true }
    });
})();

var $statisticParameterGroups = (function(){
    function getStatisticParameterGroups(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStatisticParameterGroups.params)) {
            try {
                params = new getStatisticParameterGroups.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStatisticParameterGroups.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StatisticParameterGroups) ? o : new StatisticParameterGroups(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStatisticParameterGroups.method, getStatisticParameterGroups.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStatisticParameterGroups, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/statistic-parameter-groups', enumerable: true }
    });

    getStatisticParameterGroups.params = (function(){
        _util.inherits(getStatisticParameterGroups_params, _util.RequestParams);

        function getStatisticParameterGroups_params(properties) {
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

            getStatisticParameterGroups_params._super.constructor.apply(this, arguments);
        }

        return getStatisticParameterGroups_params;
    })();

    function createStatisticParameterGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createStatisticParameterGroup.params)) {
            try {
                params = new createStatisticParameterGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createStatisticParameterGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createStatisticParameterGroup.method, createStatisticParameterGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createStatisticParameterGroup, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/statistic-parameter-groups', enumerable: true }
    });

    createStatisticParameterGroup.params = (function(){
        _util.inherits(createStatisticParameterGroup_params, _util.RequestParams);

        function createStatisticParameterGroup_params(properties) {
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
            if (!(properties.content instanceof StatisticParameterGroup)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.StatisticParameterGroup');
            }

            createStatisticParameterGroup_params._super.constructor.apply(this, arguments);
        }

        return createStatisticParameterGroup_params;
    })();

    function getStatisticParameterGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStatisticParameterGroup.params)) {
            try {
                params = new getStatisticParameterGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStatisticParameterGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StatisticParameterGroup) ? o : new StatisticParameterGroup(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStatisticParameterGroup.method, getStatisticParameterGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStatisticParameterGroup, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/statistic-parameter-groups/{id}', enumerable: true }
    });

    getStatisticParameterGroup.params = (function(){
        _util.inherits(getStatisticParameterGroup_params, _util.RequestParams);

        function getStatisticParameterGroup_params(properties) {
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

            getStatisticParameterGroup_params._super.constructor.apply(this, arguments);
        }

        return getStatisticParameterGroup_params;
    })();

    function deleteStatisticParameterGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteStatisticParameterGroup.params)) {
            try {
                params = new deleteStatisticParameterGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteStatisticParameterGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteStatisticParameterGroup.method, deleteStatisticParameterGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteStatisticParameterGroup, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/statistic-parameter-groups/{id}', enumerable: true }
    });

    deleteStatisticParameterGroup.params = (function(){
        _util.inherits(deleteStatisticParameterGroup_params, _util.RequestParams);

        function deleteStatisticParameterGroup_params(properties) {
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

            deleteStatisticParameterGroup_params._super.constructor.apply(this, arguments);
        }

        return deleteStatisticParameterGroup_params;
    })();

    function updateStatisticParameterGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateStatisticParameterGroup.params)) {
            try {
                params = new updateStatisticParameterGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateStatisticParameterGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateStatisticParameterGroup.method, updateStatisticParameterGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateStatisticParameterGroup, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/statistic-parameter-groups/{id}', enumerable: true }
    });

    updateStatisticParameterGroup.params = (function(){
        _util.inherits(updateStatisticParameterGroup_params, _util.RequestParams);

        function updateStatisticParameterGroup_params(properties) {
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
            if (!(properties.content instanceof StatisticParameterGroup)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.StatisticParameterGroup');
            }

            updateStatisticParameterGroup_params._super.constructor.apply(this, arguments);
        }

        return updateStatisticParameterGroup_params;
    })();

    return Object.create(null, {
        getStatisticParameterGroups: { value: getStatisticParameterGroups, enumerable: true },
        createStatisticParameterGroup: { value: createStatisticParameterGroup, enumerable: true },
        getStatisticParameterGroup: { value: getStatisticParameterGroup, enumerable: true },
        deleteStatisticParameterGroup: { value: deleteStatisticParameterGroup, enumerable: true },
        updateStatisticParameterGroup: { value: updateStatisticParameterGroup, enumerable: true }
    });
})();

var $statusColumns = (function(){
    function getStatusColumns(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStatusColumns.params)) {
            try {
                params = new getStatusColumns.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStatusColumns.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StatusColumns) ? o : new StatusColumns(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStatusColumns.method, getStatusColumns.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStatusColumns, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/status-columns', enumerable: true }
    });

    getStatusColumns.params = (function(){
        _util.inherits(getStatusColumns_params, _util.RequestParams);

        function getStatusColumns_params(properties) {
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

            getStatusColumns_params._super.constructor.apply(this, arguments);
        }

        return getStatusColumns_params;
    })();

    function getStatusColumn(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStatusColumn.params)) {
            try {
                params = new getStatusColumn.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStatusColumn.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StatusColumn) ? o : new StatusColumn(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStatusColumn.method, getStatusColumn.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStatusColumn, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/status-columns/{id}', enumerable: true }
    });

    getStatusColumn.params = (function(){
        _util.inherits(getStatusColumn_params, _util.RequestParams);

        function getStatusColumn_params(properties) {
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

            getStatusColumn_params._super.constructor.apply(this, arguments);
        }

        return getStatusColumn_params;
    })();

    return Object.create(null, {
        getStatusColumns: { value: getStatusColumns, enumerable: true },
        getStatusColumn: { value: getStatusColumn, enumerable: true }
    });
})();

var $users = (function(){
    function getUsers(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getUsers.params)) {
            try {
                params = new getUsers.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getUsers.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Users) ? o : new Users(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getUsers.method, getUsers.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getUsers, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/users', enumerable: true }
    });

    getUsers.params = (function(){
        _util.inherits(getUsers_params, _util.RequestParams);

        function getUsers_params(properties) {
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

            getUsers_params._super.constructor.apply(this, arguments);
        }

        return getUsers_params;
    })();

    function createUser(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createUser.params)) {
            try {
                params = new createUser.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createUser.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createUser.method, createUser.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createUser, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/users', enumerable: true }
    });

    createUser.params = (function(){
        _util.inherits(createUser_params, _util.RequestParams);

        function createUser_params(properties) {
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
            if (!(properties.content instanceof User)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.User');
            }

            createUser_params._super.constructor.apply(this, arguments);
        }

        return createUser_params;
    })();

    function getUser(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getUser.params)) {
            try {
                params = new getUser.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getUser.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof User) ? o : new User(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getUser.method, getUser.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getUser, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/users/{id}', enumerable: true }
    });

    getUser.params = (function(){
        _util.inherits(getUser_params, _util.RequestParams);

        function getUser_params(properties) {
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

            getUser_params._super.constructor.apply(this, arguments);
        }

        return getUser_params;
    })();

    function deleteUser(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteUser.params)) {
            try {
                params = new deleteUser.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteUser.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteUser.method, deleteUser.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteUser, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/users/{id}', enumerable: true }
    });

    deleteUser.params = (function(){
        _util.inherits(deleteUser_params, _util.RequestParams);

        function deleteUser_params(properties) {
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

            deleteUser_params._super.constructor.apply(this, arguments);
        }

        return deleteUser_params;
    })();

    function updateUser(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateUser.params)) {
            try {
                params = new updateUser.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateUser.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateUser.method, updateUser.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateUser, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/users/{id}', enumerable: true }
    });

    updateUser.params = (function(){
        _util.inherits(updateUser_params, _util.RequestParams);

        function updateUser_params(properties) {
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
            if (!(properties.content instanceof User)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.User');
            }

            updateUser_params._super.constructor.apply(this, arguments);
        }

        return updateUser_params;
    })();

    return Object.create(null, {
        getUsers: { value: getUsers, enumerable: true },
        createUser: { value: createUser, enumerable: true },
        getUser: { value: getUser, enumerable: true },
        deleteUser: { value: deleteUser, enumerable: true },
        updateUser: { value: updateUser, enumerable: true }
    });
})();

var $workgroups = (function(){
    function getWorkgroups(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getWorkgroups.params)) {
            try {
                params = new getWorkgroups.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getWorkgroups.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Workgroups) ? o : new Workgroups(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getWorkgroups.method, getWorkgroups.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getWorkgroups, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/workgroups', enumerable: true }
    });

    getWorkgroups.params = (function(){
        _util.inherits(getWorkgroups_params, _util.RequestParams);

        function getWorkgroups_params(properties) {
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

            getWorkgroups_params._super.constructor.apply(this, arguments);
        }

        return getWorkgroups_params;
    })();

    function createWorkgroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createWorkgroup.params)) {
            try {
                params = new createWorkgroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createWorkgroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createWorkgroup.method, createWorkgroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createWorkgroup, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/workgroups', enumerable: true }
    });

    createWorkgroup.params = (function(){
        _util.inherits(createWorkgroup_params, _util.RequestParams);

        function createWorkgroup_params(properties) {
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
            if (!(properties.content instanceof Workgroup)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.Workgroup');
            }

            createWorkgroup_params._super.constructor.apply(this, arguments);
        }

        return createWorkgroup_params;
    })();

    function getWorkgroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getWorkgroup.params)) {
            try {
                params = new getWorkgroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getWorkgroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Workgroup) ? o : new Workgroup(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getWorkgroup.method, getWorkgroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getWorkgroup, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/workgroups/{id}', enumerable: true }
    });

    getWorkgroup.params = (function(){
        _util.inherits(getWorkgroup_params, _util.RequestParams);

        function getWorkgroup_params(properties) {
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

            getWorkgroup_params._super.constructor.apply(this, arguments);
        }

        return getWorkgroup_params;
    })();

    function deleteWorkgroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteWorkgroup.params)) {
            try {
                params = new deleteWorkgroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteWorkgroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteWorkgroup.method, deleteWorkgroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteWorkgroup, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/workgroups/{id}', enumerable: true }
    });

    deleteWorkgroup.params = (function(){
        _util.inherits(deleteWorkgroup_params, _util.RequestParams);

        function deleteWorkgroup_params(properties) {
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

            deleteWorkgroup_params._super.constructor.apply(this, arguments);
        }

        return deleteWorkgroup_params;
    })();

    function updateWorkgroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateWorkgroup.params)) {
            try {
                params = new updateWorkgroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateWorkgroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateWorkgroup.method, updateWorkgroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateWorkgroup, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/workgroups/{id}', enumerable: true }
    });

    updateWorkgroup.params = (function(){
        _util.inherits(updateWorkgroup_params, _util.RequestParams);

        function updateWorkgroup_params(properties) {
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
            if (!(properties.content instanceof Workgroup)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.Workgroup');
            }

            updateWorkgroup_params._super.constructor.apply(this, arguments);
        }

        return updateWorkgroup_params;
    })();

    return Object.create(null, {
        getWorkgroups: { value: getWorkgroups, enumerable: true },
        createWorkgroup: { value: createWorkgroup, enumerable: true },
        getWorkgroup: { value: getWorkgroup, enumerable: true },
        deleteWorkgroup: { value: deleteWorkgroup, enumerable: true },
        updateWorkgroup: { value: updateWorkgroup, enumerable: true }
    });
})();

var $wrapUpCategories = (function(){
    function getWrapUpCategories(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getWrapUpCategories.params)) {
            try {
                params = new getWrapUpCategories.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getWrapUpCategories.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof WrapUpCategories) ? o : new WrapUpCategories(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getWrapUpCategories.method, getWrapUpCategories.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getWrapUpCategories, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/wrap-up-categories', enumerable: true }
    });

    getWrapUpCategories.params = (function(){
        _util.inherits(getWrapUpCategories_params, _util.RequestParams);

        function getWrapUpCategories_params(properties) {
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

            getWrapUpCategories_params._super.constructor.apply(this, arguments);
        }

        return getWrapUpCategories_params;
    })();

    function createWrapUpCategory(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createWrapUpCategory.params)) {
            try {
                params = new createWrapUpCategory.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createWrapUpCategory.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createWrapUpCategory.method, createWrapUpCategory.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createWrapUpCategory, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/wrap-up-categories', enumerable: true }
    });

    createWrapUpCategory.params = (function(){
        _util.inherits(createWrapUpCategory_params, _util.RequestParams);

        function createWrapUpCategory_params(properties) {
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
            if (!(properties.content instanceof WrapUpCategory)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.WrapUpCategory');
            }

            createWrapUpCategory_params._super.constructor.apply(this, arguments);
        }

        return createWrapUpCategory_params;
    })();

    function getWrapUpCategory(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getWrapUpCategory.params)) {
            try {
                params = new getWrapUpCategory.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getWrapUpCategory.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof WrapUpCategory) ? o : new WrapUpCategory(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getWrapUpCategory.method, getWrapUpCategory.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getWrapUpCategory, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/wrap-up-categories/{id}', enumerable: true }
    });

    getWrapUpCategory.params = (function(){
        _util.inherits(getWrapUpCategory_params, _util.RequestParams);

        function getWrapUpCategory_params(properties) {
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

            getWrapUpCategory_params._super.constructor.apply(this, arguments);
        }

        return getWrapUpCategory_params;
    })();

    function deleteWrapUpCategory(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteWrapUpCategory.params)) {
            try {
                params = new deleteWrapUpCategory.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteWrapUpCategory.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteWrapUpCategory.method, deleteWrapUpCategory.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteWrapUpCategory, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/wrap-up-categories/{id}', enumerable: true }
    });

    deleteWrapUpCategory.params = (function(){
        _util.inherits(deleteWrapUpCategory_params, _util.RequestParams);

        function deleteWrapUpCategory_params(properties) {
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

            deleteWrapUpCategory_params._super.constructor.apply(this, arguments);
        }

        return deleteWrapUpCategory_params;
    })();

    function updateWrapUpCategory(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateWrapUpCategory.params)) {
            try {
                params = new updateWrapUpCategory.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateWrapUpCategory.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateWrapUpCategory.method, updateWrapUpCategory.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateWrapUpCategory, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/wrap-up-categories/{id}', enumerable: true }
    });

    updateWrapUpCategory.params = (function(){
        _util.inherits(updateWrapUpCategory_params, _util.RequestParams);

        function updateWrapUpCategory_params(properties) {
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
            if (!(properties.content instanceof WrapUpCategory)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.WrapUpCategory');
            }

            updateWrapUpCategory_params._super.constructor.apply(this, arguments);
        }

        return updateWrapUpCategory_params;
    })();

    return Object.create(null, {
        getWrapUpCategories: { value: getWrapUpCategories, enumerable: true },
        createWrapUpCategory: { value: createWrapUpCategory, enumerable: true },
        getWrapUpCategory: { value: getWrapUpCategory, enumerable: true },
        deleteWrapUpCategory: { value: deleteWrapUpCategory, enumerable: true },
        updateWrapUpCategory: { value: updateWrapUpCategory, enumerable: true }
    });
})();

var $wrapUpCodes = (function(){
    function getWrapUpCodes(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getWrapUpCodes.params)) {
            try {
                params = new getWrapUpCodes.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getWrapUpCodes.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof WrapUpCodes) ? o : new WrapUpCodes(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getWrapUpCodes.method, getWrapUpCodes.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getWrapUpCodes, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/wrap-up-codes', enumerable: true }
    });

    getWrapUpCodes.params = (function(){
        _util.inherits(getWrapUpCodes_params, _util.RequestParams);

        function getWrapUpCodes_params(properties) {
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

            getWrapUpCodes_params._super.constructor.apply(this, arguments);
        }

        return getWrapUpCodes_params;
    })();

    function createWrapUpCode(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createWrapUpCode.params)) {
            try {
                params = new createWrapUpCode.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createWrapUpCode.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createWrapUpCode.method, createWrapUpCode.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createWrapUpCode, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/wrap-up-codes', enumerable: true }
    });

    createWrapUpCode.params = (function(){
        _util.inherits(createWrapUpCode_params, _util.RequestParams);

        function createWrapUpCode_params(properties) {
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
            if (!(properties.content instanceof WrapUpCode)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.WrapUpCode');
            }

            createWrapUpCode_params._super.constructor.apply(this, arguments);
        }

        return createWrapUpCode_params;
    })();

    function getWrapUpCode(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getWrapUpCode.params)) {
            try {
                params = new getWrapUpCode.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getWrapUpCode.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof WrapUpCode) ? o : new WrapUpCode(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getWrapUpCode.method, getWrapUpCode.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getWrapUpCode, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/wrap-up-codes/{id}', enumerable: true }
    });

    getWrapUpCode.params = (function(){
        _util.inherits(getWrapUpCode_params, _util.RequestParams);

        function getWrapUpCode_params(properties) {
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

            getWrapUpCode_params._super.constructor.apply(this, arguments);
        }

        return getWrapUpCode_params;
    })();

    function deleteWrapUpCode(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteWrapUpCode.params)) {
            try {
                params = new deleteWrapUpCode.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteWrapUpCode.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteWrapUpCode.method, deleteWrapUpCode.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteWrapUpCode, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/wrap-up-codes/{id}', enumerable: true }
    });

    deleteWrapUpCode.params = (function(){
        _util.inherits(deleteWrapUpCode_params, _util.RequestParams);

        function deleteWrapUpCode_params(properties) {
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

            deleteWrapUpCode_params._super.constructor.apply(this, arguments);
        }

        return deleteWrapUpCode_params;
    })();

    function updateWrapUpCode(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateWrapUpCode.params)) {
            try {
                params = new updateWrapUpCode.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateWrapUpCode.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateWrapUpCode.method, updateWrapUpCode.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateWrapUpCode, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/wrap-up-codes/{id}', enumerable: true }
    });

    updateWrapUpCode.params = (function(){
        _util.inherits(updateWrapUpCode_params, _util.RequestParams);

        function updateWrapUpCode_params(properties) {
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
            if (!(properties.content instanceof WrapUpCode)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.WrapUpCode');
            }

            updateWrapUpCode_params._super.constructor.apply(this, arguments);
        }

        return updateWrapUpCode_params;
    })();

    return Object.create(null, {
        getWrapUpCodes: { value: getWrapUpCodes, enumerable: true },
        createWrapUpCode: { value: createWrapUpCode, enumerable: true },
        getWrapUpCode: { value: getWrapUpCode, enumerable: true },
        deleteWrapUpCode: { value: deleteWrapUpCode, enumerable: true },
        updateWrapUpCode: { value: updateWrapUpCode, enumerable: true }
    });
})();

exports.Action = Action;
exports.Availability = Availability;
exports.InteractionType = InteractionType;
exports.Location = Location;
exports.QueueColumnAttributeType = QueueColumnAttributeType;
exports.PatternType = PatternType;
exports.RelativeDayType = RelativeDayType;
exports.RelativeMonthlyInstanceType = RelativeMonthlyInstanceType;
exports.SecureInputFormType = SecureInputFormType;
exports.LyncOption = LyncOption;
exports.MwiMode = MwiMode;
exports.EFaqSearchOptions = EFaqSearchOptions;
exports.MonitoredMailboxType = MonitoredMailboxType;
exports.WorkgroupQueueType = WorkgroupQueueType;
exports.WebClientFaxFormat = WebClientFaxFormat;
exports.AccessControlGroupsMessage = AccessControlGroupsMessage;
exports.AccessControlGroup = AccessControlGroup;
exports.AccountCodesMessage = AccountCodesMessage;
exports.AccountCode = AccountCode;
exports.ClientButtonsMessage = ClientButtonsMessage;
exports.ClientButton = ClientButton;
exports.ClientConfigurationTemplatesMessage = ClientConfigurationTemplatesMessage;
exports.ClientConfigurationTemplate = ClientConfigurationTemplate;
exports.ClientTemplatesMessage = ClientTemplatesMessage;
exports.ClientTemplate = ClientTemplate;
exports.PasswordPoliciesMessage = PasswordPoliciesMessage;
exports.PasswordPolicy = PasswordPolicy;
exports.QueueColumnsMessage = QueueColumnsMessage;
exports.QueueColumn = QueueColumn;
exports.ResponseManagementDocumentsMessage = ResponseManagementDocumentsMessage;
exports.ResponseManagementDocument = ResponseManagementDocument;
exports.RolesMessage = RolesMessage;
exports.Role = Role;
exports.SchedulesMessage = SchedulesMessage;
exports.Schedule = Schedule;
exports.ScheduleRecurrence = ScheduleRecurrence;
exports.SecureInputFormsMessage = SecureInputFormsMessage;
exports.SecureInputForm = SecureInputForm;
exports.SecureInputFormCustomParameter = SecureInputFormCustomParameter;
exports.SecureInputFormFieldDefinition = SecureInputFormFieldDefinition;
exports.SkillCategoriesMessage = SkillCategoriesMessage;
exports.SkillCategory = SkillCategory;
exports.SkillsMessage = SkillsMessage;
exports.Skill = Skill;
exports.StatisticParameterGroupsMessage = StatisticParameterGroupsMessage;
exports.StatisticParameterGroup = StatisticParameterGroup;
exports.UsersMessage = UsersMessage;
exports.User = User;
exports.ClientTemplateInfo = ClientTemplateInfo;
exports.PersonalInformationProperties = PersonalInformationProperties;
exports.UserClientConfigurationProperties = UserClientConfigurationProperties;
exports.FollowMe = FollowMe;
exports.WorkgroupsMessage = WorkgroupsMessage;
exports.Workgroup = Workgroup;
exports.MonitoredMailbox = MonitoredMailbox;
exports.WrapUpCategoriesMessage = WrapUpCategoriesMessage;
exports.WrapUpCategory = WrapUpCategory;
exports.WrapUpCodesMessage = WrapUpCodesMessage;
exports.WrapUpCode = WrapUpCode;
exports.AccountCodesConfigurationMessage = AccountCodesConfigurationMessage;
exports.AccountCodesConfiguration = AccountCodesConfiguration;
exports.DefaultUserMessage = DefaultUserMessage;
exports.DefaultUser = DefaultUser;
exports.AccessControlGroups = AccessControlGroups;
exports.AreInUseResult = AreInUseResult;
exports.AssignMembershipArgument = AssignMembershipArgument;
exports.AssignMembershipResult = AssignMembershipResult;
exports.AssignableResult = AssignableResult;
exports.AssignableEntry = AssignableEntry;
exports.AssignableAccessControlGroup = AssignableAccessControlGroup;
exports.AccountCodes = AccountCodes;
exports.ClientButtons = ClientButtons;
exports.ClientConfigurationTemplates = ClientConfigurationTemplates;
exports.ClientTemplates = ClientTemplates;
exports.MonitoredMailboxesBulkUpdate = MonitoredMailboxesBulkUpdate;
exports.PasswordPolicies = PasswordPolicies;
exports.QueueColumns = QueueColumns;
exports.ResponseManagementDocuments = ResponseManagementDocuments;
exports.Roles = Roles;
exports.Schedules = Schedules;
exports.SecureInputForms = SecureInputForms;
exports.SkillCategories = SkillCategories;
exports.Skills = Skills;
exports.StatisticParameterGroups = StatisticParameterGroups;
exports.StatusColumns = StatusColumns;
exports.StatusColumn = StatusColumn;
exports.Users = Users;
exports.UserPassword = UserPassword;
exports.Workgroups = Workgroups;
exports.WrapUpCategories = WrapUpCategories;
exports.WrapUpCodes = WrapUpCodes;
exports.$accessControlGroups = $accessControlGroups;
exports.$accountCodes = $accountCodes;
exports.$accountCodesConfiguration = $accountCodesConfiguration;
exports.$clientButtons = $clientButtons;
exports.$clientConfigurationTemplates = $clientConfigurationTemplates;
exports.$clientTemplates = $clientTemplates;
exports.$defaultUser = $defaultUser;
exports.$passwordPolicies = $passwordPolicies;
exports.$queueColumns = $queueColumns;
exports.$responseManagementDocuments = $responseManagementDocuments;
exports.$roles = $roles;
exports.$schedules = $schedules;
exports.$secureInputForms = $secureInputForms;
exports.$skillCategories = $skillCategories;
exports.$skills = $skills;
exports.$statisticParameterGroups = $statisticParameterGroups;
exports.$statusColumns = $statusColumns;
exports.$users = $users;
exports.$workgroups = $workgroups;
exports.$wrapUpCategories = $wrapUpCategories;
exports.$wrapUpCodes = $wrapUpCodes;
