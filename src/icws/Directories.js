/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');
var Status = require('./Status');
var Queues = require('./Queues');

var DefaultPhoneNumberType = (function(){
    var instanceCache = {};
    function DefaultPhoneNumberType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:defaultPhoneNumberType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DefaultPhoneNumberType, _util.EnumValue);

    Object.defineProperties(DefaultPhoneNumberType, {
        'None': { value: new DefaultPhoneNumberType(-1, 'None'), enumerable: true },
        'Extension': { value: new DefaultPhoneNumberType(0, 'Extension'), enumerable: true },
        'BusinessPhone': { value: new DefaultPhoneNumberType(1, 'BusinessPhone'), enumerable: true },
        'BusinessPhone2': { value: new DefaultPhoneNumberType(2, 'BusinessPhone2'), enumerable: true },
        'HomePhone': { value: new DefaultPhoneNumberType(3, 'HomePhone'), enumerable: true },
        'HomePhone2': { value: new DefaultPhoneNumberType(4, 'HomePhone2'), enumerable: true },
        'MobilePhone': { value: new DefaultPhoneNumberType(5, 'MobilePhone'), enumerable: true },
        'FaxPhone': { value: new DefaultPhoneNumberType(6, 'FaxPhone'), enumerable: true },
        'PagerPhone': { value: new DefaultPhoneNumberType(7, 'PagerPhone'), enumerable: true },
        'AssistantPhone': { value: new DefaultPhoneNumberType(8, 'AssistantPhone'), enumerable: true }
    });

    Object.defineProperty(DefaultPhoneNumberType, '__type', { value: 'urn:inin.com:directories:defaultPhoneNumberType' });

    _typemap['urn:inin.com:directories:defaultPhoneNumberType'] = DefaultPhoneNumberType;

    return DefaultPhoneNumberType;
}());

var ContactSource = (function(){
    var instanceCache = {};
    function ContactSource(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:contactSource' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ContactSource, _util.EnumValue);

    Object.defineProperties(ContactSource, {
        'Unknown': { value: new ContactSource(0, 'Unknown'), enumerable: true },
        'InteractionCenter': { value: new ContactSource(1, 'InteractionCenter'), enumerable: true },
        'Lync': { value: new ContactSource(2, 'Lync'), enumerable: true },
        'SameTime': { value: new ContactSource(4, 'SameTime'), enumerable: true }
    });

    Object.defineProperty(ContactSource, '__type', { value: 'urn:inin.com:directories:contactSource' });

    _typemap['urn:inin.com:directories:contactSource'] = ContactSource;

    return ContactSource;
}());

var DirectoryCategory = (function(){
    var instanceCache = {};
    function DirectoryCategory(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directoryCategory' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DirectoryCategory, _util.EnumValue);

    Object.defineProperties(DirectoryCategory, {
        'Company': { value: new DirectoryCategory(0, 'Company'), enumerable: true },
        'Workgroup': { value: new DirectoryCategory(1, 'Workgroup'), enumerable: true },
        'General': { value: new DirectoryCategory(2, 'General'), enumerable: true },
        'StationGroup': { value: new DirectoryCategory(3, 'StationGroup'), enumerable: true },
        'SpeedDial': { value: new DirectoryCategory(4, 'SpeedDial'), enumerable: true },
        'GroupAndProfile': { value: new DirectoryCategory(5, 'GroupAndProfile'), enumerable: true },
        'Tracker': { value: new DirectoryCategory(6, 'Tracker'), enumerable: true }
    });

    Object.defineProperty(DirectoryCategory, '__type', { value: 'urn:inin.com:directories:directoryCategory' });

    _typemap['urn:inin.com:directories:directoryCategory'] = DirectoryCategory;

    return DirectoryCategory;
}());

var DirectoryDisplayType = (function(){
    var instanceCache = {};
    function DirectoryDisplayType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directoryDisplayType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DirectoryDisplayType, _util.EnumValue);

    Object.defineProperties(DirectoryDisplayType, {
        'List': { value: new DirectoryDisplayType(0, 'List'), enumerable: true },
        'Filter': { value: new DirectoryDisplayType(1, 'Filter'), enumerable: true },
        'SpeedDial': { value: new DirectoryDisplayType(2, 'SpeedDial'), enumerable: true },
        'Tracker': { value: new DirectoryDisplayType(3, 'Tracker'), enumerable: true }
    });

    Object.defineProperty(DirectoryDisplayType, '__type', { value: 'urn:inin.com:directories:directoryDisplayType' });

    _typemap['urn:inin.com:directories:directoryDisplayType'] = DirectoryDisplayType;

    return DirectoryDisplayType;
}());

var ContactProperty = (function(){
    var instanceCache = {};
    function ContactProperty(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:contactProperty' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ContactProperty, _util.EnumValue);

    Object.defineProperties(ContactProperty, {
        'EntryID': { value: new ContactProperty(0, 'EntryID'), enumerable: true },
        'FirstName': { value: new ContactProperty(1, 'FirstName'), enumerable: true },
        'LastName': { value: new ContactProperty(2, 'LastName'), enumerable: true },
        'Extension': { value: new ContactProperty(3, 'Extension'), enumerable: true },
        'UserID': { value: new ContactProperty(4, 'UserID'), enumerable: true },
        'Department': { value: new ContactProperty(5, 'Department'), enumerable: true },
        'Company': { value: new ContactProperty(6, 'Company'), enumerable: true },
        'Title': { value: new ContactProperty(7, 'Title'), enumerable: true },
        'BusinessAddress': { value: new ContactProperty(8, 'BusinessAddress'), enumerable: true },
        'BusinessCity': { value: new ContactProperty(9, 'BusinessCity'), enumerable: true },
        'BusinessState': { value: new ContactProperty(10, 'BusinessState'), enumerable: true },
        'BusinessZipCode': { value: new ContactProperty(11, 'BusinessZipCode'), enumerable: true },
        'BusinessCountry': { value: new ContactProperty(12, 'BusinessCountry'), enumerable: true },
        'BusinessEmail': { value: new ContactProperty(13, 'BusinessEmail'), enumerable: true },
        'Assistant': { value: new ContactProperty(14, 'Assistant'), enumerable: true },
        'HomeCountry': { value: new ContactProperty(15, 'HomeCountry'), enumerable: true },
        'HomeEmail': { value: new ContactProperty(16, 'HomeEmail'), enumerable: true },
        'BusinessPhone': { value: new ContactProperty(17, 'BusinessPhone'), enumerable: true },
        'BusinessPhone2': { value: new ContactProperty(18, 'BusinessPhone2'), enumerable: true },
        'HomePhone2': { value: new ContactProperty(19, 'HomePhone2'), enumerable: true },
        'MobilePhone': { value: new ContactProperty(20, 'MobilePhone'), enumerable: true },
        'Fax': { value: new ContactProperty(21, 'Fax'), enumerable: true },
        'Pager': { value: new ContactProperty(22, 'Pager'), enumerable: true },
        'AssistantPhone': { value: new ContactProperty(23, 'AssistantPhone'), enumerable: true },
        'PrimaryNumberDesignation': { value: new ContactProperty(24, 'PrimaryNumberDesignation'), enumerable: true },
        'Notes': { value: new ContactProperty(25, 'Notes'), enumerable: true },
        'DisplayName': { value: new ContactProperty(26, 'DisplayName'), enumerable: true },
        'HomeAddress': { value: new ContactProperty(27, 'HomeAddress'), enumerable: true },
        'HomeCity': { value: new ContactProperty(28, 'HomeCity'), enumerable: true },
        'HomeState': { value: new ContactProperty(29, 'HomeState'), enumerable: true },
        'HomeZipCode': { value: new ContactProperty(30, 'HomeZipCode'), enumerable: true },
        'HomePhone': { value: new ContactProperty(31, 'HomePhone'), enumerable: true },
        'VoicemailLocation': { value: new ContactProperty(32, 'VoicemailLocation'), enumerable: true },
        'Workgroups': { value: new ContactProperty(33, 'Workgroups'), enumerable: true },
        'OwnerID': { value: new ContactProperty(34, 'OwnerID'), enumerable: true },
        'Alias': { value: new ContactProperty(35, 'Alias'), enumerable: true },
        'AccessRights': { value: new ContactProperty(36, 'AccessRights'), enumerable: true },
        'TrackerData': { value: new ContactProperty(37, 'TrackerData'), enumerable: true },
        'StatusURI': { value: new ContactProperty(38, 'StatusURI'), enumerable: true },
        'ExternalPresenceProviders': { value: new ContactProperty(39, 'ExternalPresenceProviders'), enumerable: true },
        'ContactSources': { value: new ContactProperty(40, 'ContactSources'), enumerable: true },
        'ExternalContactEntries': { value: new ContactProperty(41, 'ExternalContactEntries'), enumerable: true },
        'Skills': { value: new ContactProperty(42, 'Skills'), enumerable: true }
    });

    Object.defineProperty(ContactProperty, '__type', { value: 'urn:inin.com:directories:contactProperty' });

    _typemap['urn:inin.com:directories:contactProperty'] = ContactProperty;

    return ContactProperty;
}());

var ContactFilterType = (function(){
    var instanceCache = {};
    function ContactFilterType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:contactFilterType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ContactFilterType, _util.EnumValue);

    Object.defineProperties(ContactFilterType, {
        'Exact': { value: new ContactFilterType(0, 'Exact'), enumerable: true },
        'Prefix': { value: new ContactFilterType(1, 'Prefix'), enumerable: true },
        'Exists': { value: new ContactFilterType(2, 'Exists'), enumerable: true },
        'Empty': { value: new ContactFilterType(3, 'Empty'), enumerable: true },
        'Wildcards': { value: new ContactFilterType(4, 'Wildcards'), enumerable: true }
    });

    Object.defineProperty(ContactFilterType, '__type', { value: 'urn:inin.com:directories:contactFilterType' });

    _typemap['urn:inin.com:directories:contactFilterType'] = ContactFilterType;

    return ContactFilterType;
}());

var SortDirection = (function(){
    var instanceCache = {};
    function SortDirection(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:sortDirection' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(SortDirection, _util.EnumValue);

    Object.defineProperties(SortDirection, {
        'Ascending': { value: new SortDirection(0, 'Ascending'), enumerable: true },
        'Descending': { value: new SortDirection(1, 'Descending'), enumerable: true }
    });

    Object.defineProperty(SortDirection, '__type', { value: 'urn:inin.com:directories:sortDirection' });

    _typemap['urn:inin.com:directories:sortDirection'] = SortDirection;

    return SortDirection;
}());

var LookupEntryType = (function(){
    var instanceCache = {};
    function LookupEntryType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:lookupEntryType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LookupEntryType, _util.EnumValue);

    Object.defineProperties(LookupEntryType, {
        'None': { value: new LookupEntryType(0, 'None'), enumerable: true },
        'User': { value: new LookupEntryType(1, 'User'), enumerable: true },
        'StandalonePhone': { value: new LookupEntryType(2, 'StandalonePhone'), enumerable: true },
        'Station': { value: new LookupEntryType(3, 'Station'), enumerable: true },
        'StationGroup': { value: new LookupEntryType(4, 'StationGroup'), enumerable: true },
        'AttendantProfile': { value: new LookupEntryType(5, 'AttendantProfile'), enumerable: true },
        'Workgroup': { value: new LookupEntryType(6, 'Workgroup'), enumerable: true }
    });

    Object.defineProperty(LookupEntryType, '__type', { value: 'urn:inin.com:directories:lookupEntryType' });

    _typemap['urn:inin.com:directories:lookupEntryType'] = LookupEntryType;

    return LookupEntryType;
}());

var LookupEntryProperty = (function(){
    var instanceCache = {};
    function LookupEntryProperty(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:lookupEntryProperty' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LookupEntryProperty, _util.EnumValue);

    Object.defineProperties(LookupEntryProperty, {
        'None': { value: new LookupEntryProperty(0, 'None'), enumerable: true },
        'FirstName': { value: new LookupEntryProperty(1, 'FirstName'), enumerable: true },
        'LastName': { value: new LookupEntryProperty(2, 'LastName'), enumerable: true },
        'DisplayName': { value: new LookupEntryProperty(3, 'DisplayName'), enumerable: true },
        'Department': { value: new LookupEntryProperty(4, 'Department'), enumerable: true },
        'EntryID': { value: new LookupEntryProperty(5, 'EntryID'), enumerable: true },
        'Extension': { value: new LookupEntryProperty(6, 'Extension'), enumerable: true },
        'MobilePhone': { value: new LookupEntryProperty(7, 'MobilePhone'), enumerable: true },
        'HomePhone': { value: new LookupEntryProperty(8, 'HomePhone'), enumerable: true },
        'HomePhone2': { value: new LookupEntryProperty(9, 'HomePhone2'), enumerable: true },
        'HomeEmail': { value: new LookupEntryProperty(10, 'HomeEmail'), enumerable: true },
        'BusinessPhone': { value: new LookupEntryProperty(11, 'BusinessPhone'), enumerable: true },
        'BusinessPhone2': { value: new LookupEntryProperty(12, 'BusinessPhone2'), enumerable: true },
        'BusinessEmail': { value: new LookupEntryProperty(13, 'BusinessEmail'), enumerable: true },
        'IsActive': { value: new LookupEntryProperty(14, 'IsActive'), enumerable: true }
    });

    Object.defineProperty(LookupEntryProperty, '__type', { value: 'urn:inin.com:directories:lookupEntryProperty' });

    _typemap['urn:inin.com:directories:lookupEntryProperty'] = LookupEntryProperty;

    return LookupEntryProperty;
}());

var LookupComparisonType = (function(){
    var instanceCache = {};
    function LookupComparisonType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:lookupComparisonType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LookupComparisonType, _util.EnumValue);

    Object.defineProperties(LookupComparisonType, {
        'None': { value: new LookupComparisonType(0, 'None'), enumerable: true },
        'Exact': { value: new LookupComparisonType(1, 'Exact'), enumerable: true },
        'StartsWith': { value: new LookupComparisonType(2, 'StartsWith'), enumerable: true },
        'Contains': { value: new LookupComparisonType(3, 'Contains'), enumerable: true },
        'Wildcards': { value: new LookupComparisonType(4, 'Wildcards'), enumerable: true }
    });

    Object.defineProperty(LookupComparisonType, '__type', { value: 'urn:inin.com:directories:lookupComparisonType' });

    _typemap['urn:inin.com:directories:lookupComparisonType'] = LookupComparisonType;

    return LookupComparisonType;
}());

var ContactEntryBase = (function(){
    var hasProps = false;

    function ContactEntryBase() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:contactEntryBase' });
        }

        ContactEntryBase._super.constructor.apply(this, arguments);
    }
    _util.inherits(ContactEntryBase, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ContactEntryBase.prototype, 'accessRights', {
            get: function() { return this.__prop_accessRights; },
            set: function(value) {
                if (!(value instanceof ContactAccessRights || value === void 0)) {
                    try {
                        value = new ContactAccessRights(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntryBase.accessRights: ' + e.message);
                    }
                }

                this.__prop_accessRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'assistant', {
            get: function() { return this.__prop_assistant; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.assistant, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_assistant = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'businessAddress', {
            get: function() { return this.__prop_businessAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.businessAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_businessAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'businessCity', {
            get: function() { return this.__prop_businessCity; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.businessCity, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_businessCity = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'businessCountry', {
            get: function() { return this.__prop_businessCountry; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.businessCountry, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_businessCountry = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'businessEmail', {
            get: function() { return this.__prop_businessEmail; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.businessEmail, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_businessEmail = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'businessState', {
            get: function() { return this.__prop_businessState; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.businessState, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_businessState = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'businessZipCode', {
            get: function() { return this.__prop_businessZipCode; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.businessZipCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_businessZipCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'company', {
            get: function() { return this.__prop_company; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.company, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_company = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'department', {
            get: function() { return this.__prop_department; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.department, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_department = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'firstName', {
            get: function() { return this.__prop_firstName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.firstName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_firstName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'homeAddress', {
            get: function() { return this.__prop_homeAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.homeAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_homeAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'homeCity', {
            get: function() { return this.__prop_homeCity; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.homeCity, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_homeCity = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'homeCountry', {
            get: function() { return this.__prop_homeCountry; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.homeCountry, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_homeCountry = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'homeEmail', {
            get: function() { return this.__prop_homeEmail; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.homeEmail, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_homeEmail = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'homeState', {
            get: function() { return this.__prop_homeState; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.homeState, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_homeState = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'homeZipCode', {
            get: function() { return this.__prop_homeZipCode; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.homeZipCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_homeZipCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'lastName', {
            get: function() { return this.__prop_lastName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.lastName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'primaryNumberDesignation', {
            get: function() { return this.__prop_primaryNumberDesignation; },
            set: function(value) {
                if (!(value instanceof DefaultPhoneNumberType || value === void 0)) {
                    try {
                        value = new DefaultPhoneNumberType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntryBase.primaryNumberDesignation: ' + e.message);
                    }
                }

                this.__prop_primaryNumberDesignation = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'statusURI', {
            get: function() { return this.__prop_statusURI; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.statusURI, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusURI = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntryBase.prototype, 'title', {
            get: function() { return this.__prop_title; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntryBase.title, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_title = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ContactEntryBase, '__type', { value: 'urn:inin.com:directories:contactEntryBase' });

    Object.defineProperty(ContactEntryBase, '__propInfo', {
        get: function() {
            var pi = {
                'accessRights': { required: false, nullable: false },
                'assistant': { required: false, nullable: false },
                'businessAddress': { required: false, nullable: false },
                'businessCity': { required: false, nullable: false },
                'businessCountry': { required: false, nullable: false },
                'businessEmail': { required: false, nullable: false },
                'businessState': { required: false, nullable: false },
                'businessZipCode': { required: false, nullable: false },
                'company': { required: false, nullable: false },
                'department': { required: false, nullable: false },
                'displayName': { required: false, nullable: false },
                'firstName': { required: false, nullable: false },
                'homeAddress': { required: false, nullable: false },
                'homeCity': { required: false, nullable: false },
                'homeCountry': { required: false, nullable: false },
                'homeEmail': { required: false, nullable: false },
                'homeState': { required: false, nullable: false },
                'homeZipCode': { required: false, nullable: false },
                'lastName': { required: false, nullable: false },
                'notes': { required: false, nullable: false },
                'primaryNumberDesignation': { required: false, nullable: false },
                'statusURI': { required: false, nullable: false },
                'title': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:contactEntryBase'] = ContactEntryBase;

    return ContactEntryBase;
}());

var ContactAccessRights = (function(){
    var hasProps = false;

    function ContactAccessRights() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:contactAccessRights' });
        }

        ContactAccessRights._super.constructor.apply(this, arguments);
    }
    _util.inherits(ContactAccessRights, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ContactAccessRights.prototype, 'read', {
            get: function() { return this.__prop_read; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ContactAccessRights.read, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_read = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactAccessRights.prototype, 'create', {
            get: function() { return this.__prop_create; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ContactAccessRights.create, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_create = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactAccessRights.prototype, 'update', {
            get: function() { return this.__prop_update; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ContactAccessRights.update, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_update = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactAccessRights.prototype, 'delete', {
            get: function() { return this.__prop_delete; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ContactAccessRights.delete, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_delete = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ContactAccessRights, '__type', { value: 'urn:inin.com:directories:contactAccessRights' });

    Object.defineProperty(ContactAccessRights, '__propInfo', {
        get: function() {
            var pi = {
                'read': { required: false, nullable: false },
                'create': { required: false, nullable: false },
                'update': { required: false, nullable: false },
                'delete': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:contactAccessRights'] = ContactAccessRights;

    return ContactAccessRights;
}());

var ContactLinkInfo = (function(){
    var hasProps = false;

    function ContactLinkInfo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:contactLinkInfo' });
        }

        ContactLinkInfo._super.constructor.apply(this, arguments);
    }
    _util.inherits(ContactLinkInfo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ContactLinkInfo.prototype, 'readOnlyContactEntryId', {
            get: function() { return this.__prop_readOnlyContactEntryId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ContactLinkInfo.readOnlyContactEntryId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_readOnlyContactEntryId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactLinkInfo.prototype, 'readOnlyDirectoryId', {
            get: function() { return this.__prop_readOnlyDirectoryId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ContactLinkInfo.readOnlyDirectoryId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_readOnlyDirectoryId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactLinkInfo.prototype, 'defaultPhoneNumberType', {
            get: function() { return this.__prop_defaultPhoneNumberType; },
            set: function(value) {
                if (!(value instanceof DefaultPhoneNumberType)) {
                    try {
                        value = new DefaultPhoneNumberType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactLinkInfo.defaultPhoneNumberType: ' + e.message);
                    }
                }

                this.__prop_defaultPhoneNumberType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ContactLinkInfo, '__type', { value: 'urn:inin.com:directories:contactLinkInfo' });

    Object.defineProperty(ContactLinkInfo, '__propInfo', {
        get: function() {
            var pi = {
                'readOnlyContactEntryId': { required: true, nullable: false },
                'readOnlyDirectoryId': { required: true, nullable: false },
                'defaultPhoneNumberType': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:contactLinkInfo'] = ContactLinkInfo;

    return ContactLinkInfo;
}());

var StatusSummary = (function(){
    var hasProps = false;

    function StatusSummary() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:statusSummary' });
        }

        StatusSummary._super.constructor.apply(this, arguments);
    }
    _util.inherits(StatusSummary, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StatusSummary.prototype, 'statusID', {
            get: function() { return this.__prop_statusID; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StatusSummary.statusID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusID = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusSummary.prototype, 'loggedIn', {
            get: function() { return this.__prop_loggedIn; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for StatusSummary.loggedIn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_loggedIn = value;
            },
            enumerable: true
        });

        Object.defineProperty(StatusSummary.prototype, 'onPhone', {
            get: function() { return this.__prop_onPhone; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for StatusSummary.onPhone, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_onPhone = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StatusSummary, '__type', { value: 'urn:inin.com:directories:statusSummary' });

    Object.defineProperty(StatusSummary, '__propInfo', {
        get: function() {
            var pi = {
                'statusID': { required: true, nullable: false },
                'loggedIn': { required: true, nullable: false },
                'onPhone': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:statusSummary'] = StatusSummary;

    return StatusSummary;
}());

var DirectoryMetadata = (function(){
    var hasProps = false;

    function DirectoryMetadata() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directoryMetadata' });
        }

        DirectoryMetadata._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectoryMetadata, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DirectoryMetadata.prototype, 'accessRights', {
            get: function() { return this.__prop_accessRights; },
            set: function(value) {
                if (!(value instanceof DirectoryAccessRights || value === void 0)) {
                    try {
                        value = new DirectoryAccessRights(value);
                    } catch (e) {
                        throw new TypeError('Error setting DirectoryMetadata.accessRights: ' + e.message);
                    }
                }

                this.__prop_accessRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMetadata.prototype, 'count', {
            get: function() { return this.__prop_count; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DirectoryMetadata.count, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_count = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMetadata.prototype, 'canRefresh', {
            get: function() { return this.__prop_canRefresh; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DirectoryMetadata.canRefresh, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_canRefresh = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMetadata.prototype, 'category', {
            get: function() { return this.__prop_category; },
            set: function(value) {
                if (!(value instanceof DirectoryCategory || value === void 0)) {
                    try {
                        value = new DirectoryCategory(value);
                    } catch (e) {
                        throw new TypeError('Error setting DirectoryMetadata.category: ' + e.message);
                    }
                }

                this.__prop_category = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMetadata.prototype, 'directoryID', {
            get: function() { return this.__prop_directoryID; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectoryMetadata.directoryID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_directoryID = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMetadata.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectoryMetadata.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMetadata.prototype, 'displayType', {
            get: function() { return this.__prop_displayType; },
            set: function(value) {
                if (!(value instanceof DirectoryDisplayType || value === void 0)) {
                    try {
                        value = new DirectoryDisplayType(value);
                    } catch (e) {
                        throw new TypeError('Error setting DirectoryMetadata.displayType: ' + e.message);
                    }
                }

                this.__prop_displayType = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMetadata.prototype, 'hasActivation', {
            get: function() { return this.__prop_hasActivation; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DirectoryMetadata.hasActivation, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasActivation = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMetadata.prototype, 'hasDynamicFields', {
            get: function() { return this.__prop_hasDynamicFields; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DirectoryMetadata.hasDynamicFields, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasDynamicFields = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMetadata.prototype, 'hasStatus', {
            get: function() { return this.__prop_hasStatus; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DirectoryMetadata.hasStatus, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMetadata.prototype, 'isPrivate', {
            get: function() { return this.__prop_isPrivate; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DirectoryMetadata.isPrivate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isPrivate = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMetadata.prototype, 'ownerID', {
            get: function() { return this.__prop_ownerID; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for DirectoryMetadata.ownerID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ownerID = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMetadata.prototype, 'schemaID', {
            get: function() { return this.__prop_schemaID; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectoryMetadata.schemaID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_schemaID = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DirectoryMetadata, '__type', { value: 'urn:inin.com:directories:directoryMetadata' });

    Object.defineProperty(DirectoryMetadata, '__propInfo', {
        get: function() {
            var pi = {
                'accessRights': { required: false, nullable: false },
                'count': { required: false, nullable: false },
                'canRefresh': { required: false, nullable: false },
                'category': { required: false, nullable: false },
                'directoryID': { required: true, nullable: false },
                'displayName': { required: true, nullable: false },
                'displayType': { required: false, nullable: false },
                'hasActivation': { required: false, nullable: false },
                'hasDynamicFields': { required: false, nullable: false },
                'hasStatus': { required: false, nullable: false },
                'isPrivate': { required: false, nullable: false },
                'ownerID': { required: false, nullable: false },
                'schemaID': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:directoryMetadata'] = DirectoryMetadata;

    return DirectoryMetadata;
}());

var DirectoryAccessRights = (function(){
    var hasProps = false;

    function DirectoryAccessRights() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directoryAccessRights' });
        }

        DirectoryAccessRights._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectoryAccessRights, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DirectoryAccessRights.prototype, 'read', {
            get: function() { return this.__prop_read; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DirectoryAccessRights.read, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_read = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryAccessRights.prototype, 'create', {
            get: function() { return this.__prop_create; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DirectoryAccessRights.create, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_create = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryAccessRights.prototype, 'update', {
            get: function() { return this.__prop_update; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DirectoryAccessRights.update, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_update = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryAccessRights.prototype, 'delete', {
            get: function() { return this.__prop_delete; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DirectoryAccessRights.delete, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_delete = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryAccessRights.prototype, 'rename', {
            get: function() { return this.__prop_rename; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DirectoryAccessRights.rename, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_rename = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryAccessRights.prototype, 'primaryNumber', {
            get: function() { return this.__prop_primaryNumber; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DirectoryAccessRights.primaryNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_primaryNumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryAccessRights.prototype, 'admin', {
            get: function() { return this.__prop_admin; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for DirectoryAccessRights.admin, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_admin = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DirectoryAccessRights, '__type', { value: 'urn:inin.com:directories:directoryAccessRights' });

    Object.defineProperty(DirectoryAccessRights, '__propInfo', {
        get: function() {
            var pi = {
                'read': { required: false, nullable: false },
                'create': { required: false, nullable: false },
                'update': { required: false, nullable: false },
                'delete': { required: false, nullable: false },
                'rename': { required: false, nullable: false },
                'primaryNumber': { required: false, nullable: false },
                'admin': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:directoryAccessRights'] = DirectoryAccessRights;

    return DirectoryAccessRights;
}());

var PendingCategories = (function(){
    var hasProps = false;

    function PendingCategories() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:pendingCategories' });
        }

        PendingCategories._super.constructor.apply(this, arguments);
    }
    _util.inherits(PendingCategories, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PendingCategories.prototype, 'company', {
            get: function() { return this.__prop_company; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PendingCategories.company, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_company = value;
            },
            enumerable: true
        });

        Object.defineProperty(PendingCategories.prototype, 'workgroup', {
            get: function() { return this.__prop_workgroup; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PendingCategories.workgroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroup = value;
            },
            enumerable: true
        });

        Object.defineProperty(PendingCategories.prototype, 'general', {
            get: function() { return this.__prop_general; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PendingCategories.general, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_general = value;
            },
            enumerable: true
        });

        Object.defineProperty(PendingCategories.prototype, 'stationGroup', {
            get: function() { return this.__prop_stationGroup; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PendingCategories.stationGroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_stationGroup = value;
            },
            enumerable: true
        });

        Object.defineProperty(PendingCategories.prototype, 'speedDial', {
            get: function() { return this.__prop_speedDial; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PendingCategories.speedDial, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_speedDial = value;
            },
            enumerable: true
        });

        Object.defineProperty(PendingCategories.prototype, 'groupAndProfile', {
            get: function() { return this.__prop_groupAndProfile; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PendingCategories.groupAndProfile, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_groupAndProfile = value;
            },
            enumerable: true
        });

        Object.defineProperty(PendingCategories.prototype, 'tracker', {
            get: function() { return this.__prop_tracker; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PendingCategories.tracker, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_tracker = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PendingCategories, '__type', { value: 'urn:inin.com:directories:pendingCategories' });

    Object.defineProperty(PendingCategories, '__propInfo', {
        get: function() {
            var pi = {
                'company': { required: false, nullable: false },
                'workgroup': { required: false, nullable: false },
                'general': { required: false, nullable: false },
                'stationGroup': { required: false, nullable: false },
                'speedDial': { required: false, nullable: false },
                'groupAndProfile': { required: false, nullable: false },
                'tracker': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:pendingCategories'] = PendingCategories;

    return PendingCategories;
}());

var DirectorySubscriptionParametersBase = (function(){
    var hasProps = false;

    function DirectorySubscriptionParametersBase() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directorySubscriptionParametersBase' });
        }

        DirectorySubscriptionParametersBase._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectorySubscriptionParametersBase, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DirectorySubscriptionParametersBase.prototype, 'count', {
            get: function() { return this.__prop_count; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DirectorySubscriptionParametersBase.count, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_count = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectorySubscriptionParametersBase.prototype, 'filterItems', {
            get: function() { return this.__prop_filterItems; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ContactFilterItem); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ContactFilterItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DirectorySubscriptionParametersBase.filterItems: ' + e.message);
                    }
                }

                this.__prop_filterItems = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectorySubscriptionParametersBase.prototype, 'index', {
            get: function() { return this.__prop_index; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DirectorySubscriptionParametersBase.index, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_index = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectorySubscriptionParametersBase.prototype, 'sortItems', {
            get: function() { return this.__prop_sortItems; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ContactSortItem); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ContactSortItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DirectorySubscriptionParametersBase.sortItems: ' + e.message);
                    }
                }

                this.__prop_sortItems = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DirectorySubscriptionParametersBase, '__type', { value: 'urn:inin.com:directories:directorySubscriptionParametersBase' });

    Object.defineProperty(DirectorySubscriptionParametersBase, '__propInfo', {
        get: function() {
            var pi = {
                'count': { required: false, nullable: false },
                'filterItems': { required: false, nullable: false },
                'index': { required: false, nullable: false },
                'sortItems': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:directorySubscriptionParametersBase'] = DirectorySubscriptionParametersBase;

    return DirectorySubscriptionParametersBase;
}());

var ContactFilterItem = (function(){
    var hasProps = false;

    function ContactFilterItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:contactFilterItem' });
        }

        ContactFilterItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(ContactFilterItem, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ContactFilterItem.prototype, 'contactProperty', {
            get: function() { return this.__prop_contactProperty; },
            set: function(value) {
                if (!(value instanceof ContactProperty)) {
                    try {
                        value = new ContactProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactFilterItem.contactProperty: ' + e.message);
                    }
                }

                this.__prop_contactProperty = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactFilterItem.prototype, 'filterType', {
            get: function() { return this.__prop_filterType; },
            set: function(value) {
                if (!(value instanceof ContactFilterType)) {
                    try {
                        value = new ContactFilterType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactFilterItem.filterType: ' + e.message);
                    }
                }

                this.__prop_filterType = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactFilterItem.prototype, 'filterExpressions', {
            get: function() { return this.__prop_filterExpressions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for ContactFilterItem.filterExpressions, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_filterExpressions = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ContactFilterItem, '__type', { value: 'urn:inin.com:directories:contactFilterItem' });

    Object.defineProperty(ContactFilterItem, '__propInfo', {
        get: function() {
            var pi = {
                'contactProperty': { required: true, nullable: false },
                'filterType': { required: true, nullable: false },
                'filterExpressions': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:contactFilterItem'] = ContactFilterItem;

    return ContactFilterItem;
}());

var ContactSortItem = (function(){
    var hasProps = false;

    function ContactSortItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:contactSortItem' });
        }

        ContactSortItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(ContactSortItem, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ContactSortItem.prototype, 'contactProperty', {
            get: function() { return this.__prop_contactProperty; },
            set: function(value) {
                if (!(value instanceof ContactProperty)) {
                    try {
                        value = new ContactProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactSortItem.contactProperty: ' + e.message);
                    }
                }

                this.__prop_contactProperty = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactSortItem.prototype, 'sortDirection', {
            get: function() { return this.__prop_sortDirection; },
            set: function(value) {
                if (!(value instanceof SortDirection)) {
                    try {
                        value = new SortDirection(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactSortItem.sortDirection: ' + e.message);
                    }
                }

                this.__prop_sortDirection = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ContactSortItem, '__type', { value: 'urn:inin.com:directories:contactSortItem' });

    Object.defineProperty(ContactSortItem, '__propInfo', {
        get: function() {
            var pi = {
                'contactProperty': { required: true, nullable: false },
                'sortDirection': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:contactSortItem'] = ContactSortItem;

    return ContactSortItem;
}());

var DirectoriesMetadata = (function(){
    var hasProps = false;

    function DirectoriesMetadata() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directoriesMetadata' });
        }

        DirectoriesMetadata._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectoriesMetadata, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DirectoriesMetadata.prototype, 'directoriesList', {
            get: function() { return this.__prop_directoriesList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DirectoryMetadata); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new DirectoryMetadata(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DirectoriesMetadata.directoriesList: ' + e.message);
                    }
                }

                this.__prop_directoriesList = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoriesMetadata.prototype, 'publicPendingCategories', {
            get: function() { return this.__prop_publicPendingCategories; },
            set: function(value) {
                if (!(value instanceof PendingCategories || value === void 0)) {
                    try {
                        value = new PendingCategories(value);
                    } catch (e) {
                        throw new TypeError('Error setting DirectoriesMetadata.publicPendingCategories: ' + e.message);
                    }
                }

                this.__prop_publicPendingCategories = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoriesMetadata.prototype, 'privatePendingCategories', {
            get: function() { return this.__prop_privatePendingCategories; },
            set: function(value) {
                if (!(value instanceof PendingCategories || value === void 0)) {
                    try {
                        value = new PendingCategories(value);
                    } catch (e) {
                        throw new TypeError('Error setting DirectoriesMetadata.privatePendingCategories: ' + e.message);
                    }
                }

                this.__prop_privatePendingCategories = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DirectoriesMetadata, '__type', { value: 'urn:inin.com:directories:directoriesMetadata' });

    Object.defineProperty(DirectoriesMetadata, '__propInfo', {
        get: function() {
            var pi = {
                'directoriesList': { required: false, nullable: false },
                'publicPendingCategories': { required: false, nullable: false },
                'privatePendingCategories': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:directoriesMetadata'] = DirectoriesMetadata;

    return DirectoriesMetadata;
}());

var LookupEntriesQuery = (function(){
    var hasProps = false;

    function LookupEntriesQuery() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:lookupEntriesQuery' });
        }

        LookupEntriesQuery._super.constructor.apply(this, arguments);
    }
    _util.inherits(LookupEntriesQuery, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LookupEntriesQuery.prototype, 'lookupEntryTypes', {
            get: function() { return this.__prop_lookupEntryTypes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LookupEntryType); }))) {
                    try {
                        value = value.map(function(item){ return new LookupEntryType(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LookupEntriesQuery.lookupEntryTypes: ' + e.message);
                    }
                }

                this.__prop_lookupEntryTypes = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntriesQuery.prototype, 'lookupEntryProperties', {
            get: function() { return this.__prop_lookupEntryProperties; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LookupEntryProperty); }))) {
                    try {
                        value = value.map(function(item){ return new LookupEntryProperty(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LookupEntriesQuery.lookupEntryProperties: ' + e.message);
                    }
                }

                this.__prop_lookupEntryProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntriesQuery.prototype, 'lookupComparisonType', {
            get: function() { return this.__prop_lookupComparisonType; },
            set: function(value) {
                if (!(value instanceof LookupComparisonType)) {
                    try {
                        value = new LookupComparisonType(value);
                    } catch (e) {
                        throw new TypeError('Error setting LookupEntriesQuery.lookupComparisonType: ' + e.message);
                    }
                }

                this.__prop_lookupComparisonType = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntriesQuery.prototype, 'lookupString', {
            get: function() { return this.__prop_lookupString; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for LookupEntriesQuery.lookupString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lookupString = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntriesQuery.prototype, 'maxEntries', {
            get: function() { return this.__prop_maxEntries; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for LookupEntriesQuery.maxEntries, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxEntries = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LookupEntriesQuery, '__type', { value: 'urn:inin.com:directories:lookupEntriesQuery' });

    Object.defineProperty(LookupEntriesQuery, '__propInfo', {
        get: function() {
            var pi = {
                'lookupEntryTypes': { required: true, nullable: false },
                'lookupEntryProperties': { required: true, nullable: false },
                'lookupComparisonType': { required: true, nullable: false },
                'lookupString': { required: true, nullable: false },
                'maxEntries': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:lookupEntriesQuery'] = LookupEntriesQuery;

    return LookupEntriesQuery;
}());

var LookupEntries = (function(){
    var hasProps = false;

    function LookupEntries() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:lookupEntries' });
        }

        LookupEntries._super.constructor.apply(this, arguments);
    }
    _util.inherits(LookupEntries, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LookupEntries.prototype, 'lookupEntriesList', {
            get: function() { return this.__prop_lookupEntriesList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LookupEntry); }))) {
                    try {
                        value = value.map(function(item){ return new LookupEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LookupEntries.lookupEntriesList: ' + e.message);
                    }
                }

                this.__prop_lookupEntriesList = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntries.prototype, 'moreEntriesMatched', {
            get: function() { return this.__prop_moreEntriesMatched; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for LookupEntries.moreEntriesMatched, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_moreEntriesMatched = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntries.prototype, 'phoneNumber', {
            get: function() { return this.__prop_phoneNumber; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting LookupEntries.phoneNumber: ' + e.message);
                    }
                }

                this.__prop_phoneNumber = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LookupEntries, '__type', { value: 'urn:inin.com:directories:lookupEntries' });

    Object.defineProperty(LookupEntries, '__propInfo', {
        get: function() {
            var pi = {
                'lookupEntriesList': { required: true, nullable: false },
                'moreEntriesMatched': { required: true, nullable: false },
                'phoneNumber': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:lookupEntries'] = LookupEntries;

    return LookupEntries;
}());

var LookupEntry = (function(){
    var hasProps = false;

    function LookupEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:lookupEntry' });
        }

        LookupEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(LookupEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LookupEntry.prototype, 'businessEmail', {
            get: function() { return this.__prop_businessEmail; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for LookupEntry.businessEmail, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_businessEmail = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'businessPhone', {
            get: function() { return this.__prop_businessPhone; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting LookupEntry.businessPhone: ' + e.message);
                    }
                }

                this.__prop_businessPhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'businessPhone2', {
            get: function() { return this.__prop_businessPhone2; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting LookupEntry.businessPhone2: ' + e.message);
                    }
                }

                this.__prop_businessPhone2 = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'department', {
            get: function() { return this.__prop_department; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for LookupEntry.department, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_department = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for LookupEntry.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'entryID', {
            get: function() { return this.__prop_entryID; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for LookupEntry.entryID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_entryID = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'extension', {
            get: function() { return this.__prop_extension; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for LookupEntry.extension, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_extension = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'firstName', {
            get: function() { return this.__prop_firstName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for LookupEntry.firstName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_firstName = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'homeEmail', {
            get: function() { return this.__prop_homeEmail; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for LookupEntry.homeEmail, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_homeEmail = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'homePhone', {
            get: function() { return this.__prop_homePhone; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting LookupEntry.homePhone: ' + e.message);
                    }
                }

                this.__prop_homePhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'homePhone2', {
            get: function() { return this.__prop_homePhone2; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting LookupEntry.homePhone2: ' + e.message);
                    }
                }

                this.__prop_homePhone2 = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'isActive', {
            get: function() { return this.__prop_isActive; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for LookupEntry.isActive, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isActive = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'lastName', {
            get: function() { return this.__prop_lastName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for LookupEntry.lastName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastName = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'lookupEntryType', {
            get: function() { return this.__prop_lookupEntryType; },
            set: function(value) {
                if (!(value instanceof LookupEntryType)) {
                    try {
                        value = new LookupEntryType(value);
                    } catch (e) {
                        throw new TypeError('Error setting LookupEntry.lookupEntryType: ' + e.message);
                    }
                }

                this.__prop_lookupEntryType = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'mobilePhone', {
            get: function() { return this.__prop_mobilePhone; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting LookupEntry.mobilePhone: ' + e.message);
                    }
                }

                this.__prop_mobilePhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'statusURI', {
            get: function() { return this.__prop_statusURI; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for LookupEntry.statusURI, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusURI = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'queueID', {
            get: function() { return this.__prop_queueID; },
            set: function(value) {
                if (!(value instanceof Queues.QueueId || value === void 0)) {
                    try {
                        value = new Queues.QueueId(value);
                    } catch (e) {
                        throw new TypeError('Error setting LookupEntry.queueID: ' + e.message);
                    }
                }

                this.__prop_queueID = value;
            },
            enumerable: true
        });

        Object.defineProperty(LookupEntry.prototype, 'voicemailCapable', {
            get: function() { return this.__prop_voicemailCapable; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for LookupEntry.voicemailCapable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_voicemailCapable = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LookupEntry, '__type', { value: 'urn:inin.com:directories:lookupEntry' });

    Object.defineProperty(LookupEntry, '__propInfo', {
        get: function() {
            var pi = {
                'businessEmail': { required: false, nullable: false },
                'businessPhone': { required: false, nullable: false },
                'businessPhone2': { required: false, nullable: false },
                'department': { required: false, nullable: false },
                'displayName': { required: false, nullable: false },
                'entryID': { required: false, nullable: false },
                'extension': { required: false, nullable: false },
                'firstName': { required: false, nullable: false },
                'homeEmail': { required: false, nullable: false },
                'homePhone': { required: false, nullable: false },
                'homePhone2': { required: false, nullable: false },
                'isActive': { required: false, nullable: false },
                'lastName': { required: false, nullable: false },
                'lookupEntryType': { required: true, nullable: false },
                'mobilePhone': { required: false, nullable: false },
                'statusURI': { required: false, nullable: false },
                'queueID': { required: false, nullable: false },
                'voicemailCapable': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:lookupEntry'] = LookupEntry;

    return LookupEntry;
}());

var ContactEntryId = (function(){
    var hasProps = false;

    function ContactEntryId() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:contactEntryId' });
        }

        ContactEntryId._super.constructor.apply(this, arguments);
    }
    _util.inherits(ContactEntryId, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ContactEntryId.prototype, 'entryId', {
            get: function() { return this.__prop_entryId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ContactEntryId.entryId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_entryId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ContactEntryId, '__type', { value: 'urn:inin.com:directories:contactEntryId' });

    Object.defineProperty(ContactEntryId, '__propInfo', {
        get: function() {
            var pi = {
                'entryId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:contactEntryId'] = ContactEntryId;

    return ContactEntryId;
}());

var DirectoryParameters = (function(){
    var hasProps = false;

    function DirectoryParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directoryParameters' });
        }

        DirectoryParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectoryParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DirectoryParameters.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectoryParameters.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryParameters.prototype, 'accessRights', {
            get: function() { return this.__prop_accessRights; },
            set: function(value) {
                if (!(value instanceof DirectoryAccessRights || value === void 0)) {
                    try {
                        value = new DirectoryAccessRights(value);
                    } catch (e) {
                        throw new TypeError('Error setting DirectoryParameters.accessRights: ' + e.message);
                    }
                }

                this.__prop_accessRights = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DirectoryParameters, '__type', { value: 'urn:inin.com:directories:directoryParameters' });

    Object.defineProperty(DirectoryParameters, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'accessRights': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:directoryParameters'] = DirectoryParameters;

    return DirectoryParameters;
}());

var DirectoryCreated = (function(){
    var hasProps = false;

    function DirectoryCreated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directoryCreated' });
        }

        DirectoryCreated._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectoryCreated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DirectoryCreated.prototype, 'directoryId', {
            get: function() { return this.__prop_directoryId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectoryCreated.directoryId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_directoryId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DirectoryCreated, '__type', { value: 'urn:inin.com:directories:directoryCreated' });

    Object.defineProperty(DirectoryCreated, '__propInfo', {
        get: function() {
            var pi = {
                'directoryId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:directoryCreated'] = DirectoryCreated;

    return DirectoryCreated;
}());

var CreateSpeedDialContactLink = (function(){
    var hasProps = false;

    function CreateSpeedDialContactLink() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:createSpeedDialContactLink' });
        }

        CreateSpeedDialContactLink._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateSpeedDialContactLink, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreateSpeedDialContactLink.prototype, 'sourceDirectoryID', {
            get: function() { return this.__prop_sourceDirectoryID; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreateSpeedDialContactLink.sourceDirectoryID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sourceDirectoryID = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateSpeedDialContactLink.prototype, 'sourceContactEntryID', {
            get: function() { return this.__prop_sourceContactEntryID; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreateSpeedDialContactLink.sourceContactEntryID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sourceContactEntryID = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateSpeedDialContactLink.prototype, 'contactPrimaryNumberDesignation', {
            get: function() { return this.__prop_contactPrimaryNumberDesignation; },
            set: function(value) {
                if (!(value instanceof DefaultPhoneNumberType)) {
                    try {
                        value = new DefaultPhoneNumberType(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateSpeedDialContactLink.contactPrimaryNumberDesignation: ' + e.message);
                    }
                }

                this.__prop_contactPrimaryNumberDesignation = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateSpeedDialContactLink, '__type', { value: 'urn:inin.com:directories:createSpeedDialContactLink' });

    Object.defineProperty(CreateSpeedDialContactLink, '__propInfo', {
        get: function() {
            var pi = {
                'sourceDirectoryID': { required: true, nullable: false },
                'sourceContactEntryID': { required: true, nullable: false },
                'contactPrimaryNumberDesignation': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:createSpeedDialContactLink'] = CreateSpeedDialContactLink;

    return CreateSpeedDialContactLink;
}());

var SpeedDialContactLinkCreated = (function(){
    var hasProps = false;

    function SpeedDialContactLinkCreated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:speedDialContactLinkCreated' });
        }

        SpeedDialContactLinkCreated._super.constructor.apply(this, arguments);
    }
    _util.inherits(SpeedDialContactLinkCreated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SpeedDialContactLinkCreated.prototype, 'speedDialContactLinkId', {
            get: function() { return this.__prop_speedDialContactLinkId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SpeedDialContactLinkCreated.speedDialContactLinkId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_speedDialContactLinkId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SpeedDialContactLinkCreated, '__type', { value: 'urn:inin.com:directories:speedDialContactLinkCreated' });

    Object.defineProperty(SpeedDialContactLinkCreated, '__propInfo', {
        get: function() {
            var pi = {
                'speedDialContactLinkId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:speedDialContactLinkCreated'] = SpeedDialContactLinkCreated;

    return SpeedDialContactLinkCreated;
}());

var SpeedDialContactLink = (function(){
    var hasProps = false;

    function SpeedDialContactLink() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:speedDialContactLink' });
        }

        SpeedDialContactLink._super.constructor.apply(this, arguments);
    }
    _util.inherits(SpeedDialContactLink, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SpeedDialContactLink.prototype, 'contactPrimaryNumberDesignation', {
            get: function() { return this.__prop_contactPrimaryNumberDesignation; },
            set: function(value) {
                if (!(value instanceof DefaultPhoneNumberType)) {
                    try {
                        value = new DefaultPhoneNumberType(value);
                    } catch (e) {
                        throw new TypeError('Error setting SpeedDialContactLink.contactPrimaryNumberDesignation: ' + e.message);
                    }
                }

                this.__prop_contactPrimaryNumberDesignation = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SpeedDialContactLink, '__type', { value: 'urn:inin.com:directories:speedDialContactLink' });

    Object.defineProperty(SpeedDialContactLink, '__propInfo', {
        get: function() {
            var pi = {
                'contactPrimaryNumberDesignation': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:speedDialContactLink'] = SpeedDialContactLink;

    return SpeedDialContactLink;
}());

var DirectoryMessageBase = (function(){
    var hasProps = false;

    function DirectoryMessageBase() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directoryMessageBase', enumerable: true });
        }

        DirectoryMessageBase._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectoryMessageBase, Messaging.Message);

    function defineProps() {
        Object.defineProperty(DirectoryMessageBase.prototype, 'totalCount', {
            get: function() { return this.__prop_totalCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DirectoryMessageBase.totalCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_totalCount = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMessageBase.prototype, 'filteredCount', {
            get: function() { return this.__prop_filteredCount; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for DirectoryMessageBase.filteredCount, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_filteredCount = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMessageBase.prototype, 'contactsAdded', {
            get: function() { return this.__prop_contactsAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ContactEntry); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ContactEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DirectoryMessageBase.contactsAdded: ' + e.message);
                    }
                }

                this.__prop_contactsAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMessageBase.prototype, 'contactsChanged', {
            get: function() { return this.__prop_contactsChanged; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ContactEntry); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ContactEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DirectoryMessageBase.contactsChanged: ' + e.message);
                    }
                }

                this.__prop_contactsChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoryMessageBase.prototype, 'contactsRemoved', {
            get: function() { return this.__prop_contactsRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for DirectoryMessageBase.contactsRemoved, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_contactsRemoved = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DirectoryMessageBase, '__type', { value: 'urn:inin.com:directories:directoryMessageBase' });

    Object.defineProperty(DirectoryMessageBase, '__propInfo', {
        get: function() {
            var pi = {
                'totalCount': { required: false, nullable: false },
                'filteredCount': { required: false, nullable: false },
                'contactsAdded': { required: false, nullable: false },
                'contactsChanged': { required: false, nullable: false },
                'contactsRemoved': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:directoryMessageBase'] = DirectoryMessageBase;

    return DirectoryMessageBase;
}());

var ContactEntry = (function(){
    var hasProps = false;

    function ContactEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:contactEntry', enumerable: true });
        }

        ContactEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(ContactEntry, ContactEntryBase);

    function defineProps() {
        Object.defineProperty(ContactEntry.prototype, 'alias', {
            get: function() { return this.__prop_alias; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntry.alias, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alias = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'assistantPhone', {
            get: function() { return this.__prop_assistantPhone; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntry.assistantPhone: ' + e.message);
                    }
                }

                this.__prop_assistantPhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'businessPhone', {
            get: function() { return this.__prop_businessPhone; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntry.businessPhone: ' + e.message);
                    }
                }

                this.__prop_businessPhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'businessPhone2', {
            get: function() { return this.__prop_businessPhone2; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntry.businessPhone2: ' + e.message);
                    }
                }

                this.__prop_businessPhone2 = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'contactSource', {
            get: function() { return this.__prop_contactSource; },
            set: function(value) {
                if (!(value instanceof ContactSource || value === void 0)) {
                    try {
                        value = new ContactSource(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntry.contactSource: ' + e.message);
                    }
                }

                this.__prop_contactSource = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'entryID', {
            get: function() { return this.__prop_entryID; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ContactEntry.entryID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_entryID = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'extension', {
            get: function() { return this.__prop_extension; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntry.extension, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_extension = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'fax', {
            get: function() { return this.__prop_fax; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntry.fax: ' + e.message);
                    }
                }

                this.__prop_fax = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'homePhone', {
            get: function() { return this.__prop_homePhone; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntry.homePhone: ' + e.message);
                    }
                }

                this.__prop_homePhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'homePhone2', {
            get: function() { return this.__prop_homePhone2; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntry.homePhone2: ' + e.message);
                    }
                }

                this.__prop_homePhone2 = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'index', {
            get: function() { return this.__prop_index; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for ContactEntry.index, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_index = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'mobilePhone', {
            get: function() { return this.__prop_mobilePhone; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntry.mobilePhone: ' + e.message);
                    }
                }

                this.__prop_mobilePhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'ownerID', {
            get: function() { return this.__prop_ownerID; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntry.ownerID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ownerID = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'pager', {
            get: function() { return this.__prop_pager; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntry.pager: ' + e.message);
                    }
                }

                this.__prop_pager = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'skills', {
            get: function() { return this.__prop_skills; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for ContactEntry.skills, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_skills = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'trackerData', {
            get: function() { return this.__prop_trackerData; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntry.trackerData, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_trackerData = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'userID', {
            get: function() { return this.__prop_userID; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntry.userID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userID = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'voicemailLocation', {
            get: function() { return this.__prop_voicemailLocation; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ContactEntry.voicemailLocation, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_voicemailLocation = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'workgroups', {
            get: function() { return this.__prop_workgroups; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for ContactEntry.workgroups, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'activated', {
            get: function() { return this.__prop_activated; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for ContactEntry.activated, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activated = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'statusID', {
            get: function() { return this.__prop_statusID; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ContactEntry.statusID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusID = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'statusSummary', {
            get: function() { return this.__prop_statusSummary; },
            set: function(value) {
                if (!(value instanceof StatusSummary || value === void 0 || value === null)) {
                    try {
                        value = new StatusSummary(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntry.statusSummary: ' + e.message);
                    }
                }

                this.__prop_statusSummary = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'statusNotes', {
            get: function() { return this.__prop_statusNotes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ContactEntry.statusNotes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusNotes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'forwardNumber', {
            get: function() { return this.__prop_forwardNumber; },
            set: function(value) {
                if (!(value instanceof Common.PhoneNumber || value === void 0 || value === null)) {
                    try {
                        value = new Common.PhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntry.forwardNumber: ' + e.message);
                    }
                }

                this.__prop_forwardNumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'until', {
            get: function() { return this.__prop_until; },
            set: function(value) {
                if (!(value instanceof Status.UserStatusUntil || value === void 0 || value === null)) {
                    try {
                        value = new Status.UserStatusUntil(value);
                    } catch (e) {
                        throw new TypeError('Error setting ContactEntry.until: ' + e.message);
                    }
                }

                this.__prop_until = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'onPhone', {
            get: function() { return this.__prop_onPhone; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ContactEntry.onPhone, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_onPhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'onPhoneChanged', {
            get: function() { return this.__prop_onPhoneChanged; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ContactEntry.onPhoneChanged, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_onPhoneChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'statusChanged', {
            get: function() { return this.__prop_statusChanged; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ContactEntry.statusChanged, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_statusChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'loggedIn', {
            get: function() { return this.__prop_loggedIn; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ContactEntry.loggedIn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_loggedIn = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'stations', {
            get: function() { return this.__prop_stations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for ContactEntry.stations, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_stations = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContactEntry.prototype, 'icServers', {
            get: function() { return this.__prop_icServers; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for ContactEntry.icServers, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_icServers = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ContactEntry, '__type', { value: 'urn:inin.com:directories:contactEntry' });

    Object.defineProperty(ContactEntry, '__propInfo', {
        get: function() {
            var pi = {
                'alias': { required: false, nullable: false },
                'assistantPhone': { required: false, nullable: false },
                'businessPhone': { required: false, nullable: false },
                'businessPhone2': { required: false, nullable: false },
                'contactSource': { required: false, nullable: false },
                'entryID': { required: true, nullable: false },
                'extension': { required: false, nullable: false },
                'fax': { required: false, nullable: false },
                'homePhone': { required: false, nullable: false },
                'homePhone2': { required: false, nullable: false },
                'index': { required: true, nullable: false },
                'mobilePhone': { required: false, nullable: false },
                'ownerID': { required: false, nullable: false },
                'pager': { required: false, nullable: false },
                'skills': { required: false, nullable: false },
                'trackerData': { required: false, nullable: false },
                'userID': { required: false, nullable: false },
                'voicemailLocation': { required: false, nullable: false },
                'workgroups': { required: false, nullable: false },
                'activated': { required: false, nullable: false },
                'statusID': { required: false, nullable: true },
                'statusSummary': { required: false, nullable: true },
                'statusNotes': { required: false, nullable: true },
                'forwardNumber': { required: false, nullable: true },
                'until': { required: false, nullable: true },
                'onPhone': { required: false, nullable: true },
                'onPhoneChanged': { required: false, nullable: true },
                'statusChanged': { required: false, nullable: true },
                'loggedIn': { required: false, nullable: true },
                'stations': { required: false, nullable: true },
                'icServers': { required: false, nullable: true }
            };
            if (ContactEntryBase.__propInfo) { _util.extend(pi, ContactEntryBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:contactEntry'] = ContactEntry;

    return ContactEntry;
}());

var EditableContactEntry = (function(){
    var hasProps = false;

    function EditableContactEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:editableContactEntry', enumerable: true });
        }

        EditableContactEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(EditableContactEntry, ContactEntryBase);

    function defineProps() {
        Object.defineProperty(EditableContactEntry.prototype, 'assistantPhone', {
            get: function() { return this.__prop_assistantPhone; },
            set: function(value) {
                if (!(value instanceof Common.EditablePhoneNumber || value === void 0)) {
                    try {
                        value = new Common.EditablePhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting EditableContactEntry.assistantPhone: ' + e.message);
                    }
                }

                this.__prop_assistantPhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(EditableContactEntry.prototype, 'businessPhone', {
            get: function() { return this.__prop_businessPhone; },
            set: function(value) {
                if (!(value instanceof Common.EditablePhoneNumber || value === void 0)) {
                    try {
                        value = new Common.EditablePhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting EditableContactEntry.businessPhone: ' + e.message);
                    }
                }

                this.__prop_businessPhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(EditableContactEntry.prototype, 'businessPhone2', {
            get: function() { return this.__prop_businessPhone2; },
            set: function(value) {
                if (!(value instanceof Common.EditablePhoneNumber || value === void 0)) {
                    try {
                        value = new Common.EditablePhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting EditableContactEntry.businessPhone2: ' + e.message);
                    }
                }

                this.__prop_businessPhone2 = value;
            },
            enumerable: true
        });

        Object.defineProperty(EditableContactEntry.prototype, 'fax', {
            get: function() { return this.__prop_fax; },
            set: function(value) {
                if (!(value instanceof Common.EditablePhoneNumber || value === void 0)) {
                    try {
                        value = new Common.EditablePhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting EditableContactEntry.fax: ' + e.message);
                    }
                }

                this.__prop_fax = value;
            },
            enumerable: true
        });

        Object.defineProperty(EditableContactEntry.prototype, 'homePhone', {
            get: function() { return this.__prop_homePhone; },
            set: function(value) {
                if (!(value instanceof Common.EditablePhoneNumber || value === void 0)) {
                    try {
                        value = new Common.EditablePhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting EditableContactEntry.homePhone: ' + e.message);
                    }
                }

                this.__prop_homePhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(EditableContactEntry.prototype, 'homePhone2', {
            get: function() { return this.__prop_homePhone2; },
            set: function(value) {
                if (!(value instanceof Common.EditablePhoneNumber || value === void 0)) {
                    try {
                        value = new Common.EditablePhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting EditableContactEntry.homePhone2: ' + e.message);
                    }
                }

                this.__prop_homePhone2 = value;
            },
            enumerable: true
        });

        Object.defineProperty(EditableContactEntry.prototype, 'mobilePhone', {
            get: function() { return this.__prop_mobilePhone; },
            set: function(value) {
                if (!(value instanceof Common.EditablePhoneNumber || value === void 0)) {
                    try {
                        value = new Common.EditablePhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting EditableContactEntry.mobilePhone: ' + e.message);
                    }
                }

                this.__prop_mobilePhone = value;
            },
            enumerable: true
        });

        Object.defineProperty(EditableContactEntry.prototype, 'pager', {
            get: function() { return this.__prop_pager; },
            set: function(value) {
                if (!(value instanceof Common.EditablePhoneNumber || value === void 0)) {
                    try {
                        value = new Common.EditablePhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting EditableContactEntry.pager: ' + e.message);
                    }
                }

                this.__prop_pager = value;
            },
            enumerable: true
        });

        Object.defineProperty(EditableContactEntry.prototype, 'contactLinkInfo', {
            get: function() { return this.__prop_contactLinkInfo; },
            set: function(value) {
                if (!(value instanceof ContactLinkInfo || value === void 0)) {
                    try {
                        value = new ContactLinkInfo(value);
                    } catch (e) {
                        throw new TypeError('Error setting EditableContactEntry.contactLinkInfo: ' + e.message);
                    }
                }

                this.__prop_contactLinkInfo = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EditableContactEntry, '__type', { value: 'urn:inin.com:directories:editableContactEntry' });

    Object.defineProperty(EditableContactEntry, '__propInfo', {
        get: function() {
            var pi = {
                'assistantPhone': { required: false, nullable: false },
                'businessPhone': { required: false, nullable: false },
                'businessPhone2': { required: false, nullable: false },
                'fax': { required: false, nullable: false },
                'homePhone': { required: false, nullable: false },
                'homePhone2': { required: false, nullable: false },
                'mobilePhone': { required: false, nullable: false },
                'pager': { required: false, nullable: false },
                'contactLinkInfo': { required: false, nullable: false }
            };
            if (ContactEntryBase.__propInfo) { _util.extend(pi, ContactEntryBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:editableContactEntry'] = EditableContactEntry;

    return EditableContactEntry;
}());

var DirectoriesMessage = (function(){
    var hasProps = false;

    function DirectoriesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directoriesMessage', enumerable: true });
        }

        DirectoriesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectoriesMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(DirectoriesMessage.prototype, 'directoriesAdded', {
            get: function() { return this.__prop_directoriesAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DirectoryMetadata); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new DirectoryMetadata(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DirectoriesMessage.directoriesAdded: ' + e.message);
                    }
                }

                this.__prop_directoriesAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoriesMessage.prototype, 'directoriesChanged', {
            get: function() { return this.__prop_directoriesChanged; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DirectoryMetadata); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new DirectoryMetadata(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DirectoriesMessage.directoriesChanged: ' + e.message);
                    }
                }

                this.__prop_directoriesChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoriesMessage.prototype, 'directoriesRemoved', {
            get: function() { return this.__prop_directoriesRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for DirectoriesMessage.directoriesRemoved, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_directoriesRemoved = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoriesMessage.prototype, 'publicPendingCategoriesAdded', {
            get: function() { return this.__prop_publicPendingCategoriesAdded; },
            set: function(value) {
                if (!(value instanceof PendingCategories || value === void 0)) {
                    try {
                        value = new PendingCategories(value);
                    } catch (e) {
                        throw new TypeError('Error setting DirectoriesMessage.publicPendingCategoriesAdded: ' + e.message);
                    }
                }

                this.__prop_publicPendingCategoriesAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoriesMessage.prototype, 'publicPendingCategoriesRemoved', {
            get: function() { return this.__prop_publicPendingCategoriesRemoved; },
            set: function(value) {
                if (!(value instanceof PendingCategories || value === void 0)) {
                    try {
                        value = new PendingCategories(value);
                    } catch (e) {
                        throw new TypeError('Error setting DirectoriesMessage.publicPendingCategoriesRemoved: ' + e.message);
                    }
                }

                this.__prop_publicPendingCategoriesRemoved = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoriesMessage.prototype, 'privatePendingCategoriesAdded', {
            get: function() { return this.__prop_privatePendingCategoriesAdded; },
            set: function(value) {
                if (!(value instanceof PendingCategories || value === void 0)) {
                    try {
                        value = new PendingCategories(value);
                    } catch (e) {
                        throw new TypeError('Error setting DirectoriesMessage.privatePendingCategoriesAdded: ' + e.message);
                    }
                }

                this.__prop_privatePendingCategoriesAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(DirectoriesMessage.prototype, 'privatePendingCategoriesRemoved', {
            get: function() { return this.__prop_privatePendingCategoriesRemoved; },
            set: function(value) {
                if (!(value instanceof PendingCategories || value === void 0)) {
                    try {
                        value = new PendingCategories(value);
                    } catch (e) {
                        throw new TypeError('Error setting DirectoriesMessage.privatePendingCategoriesRemoved: ' + e.message);
                    }
                }

                this.__prop_privatePendingCategoriesRemoved = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DirectoriesMessage, '__type', { value: 'urn:inin.com:directories:directoriesMessage' });

    Object.defineProperty(DirectoriesMessage, '__propInfo', {
        get: function() {
            var pi = {
                'directoriesAdded': { required: false, nullable: false },
                'directoriesChanged': { required: false, nullable: false },
                'directoriesRemoved': { required: false, nullable: false },
                'publicPendingCategoriesAdded': { required: false, nullable: false },
                'publicPendingCategoriesRemoved': { required: false, nullable: false },
                'privatePendingCategoriesAdded': { required: false, nullable: false },
                'privatePendingCategoriesRemoved': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:directoriesMessage'] = DirectoriesMessage;

    return DirectoriesMessage;
}());

var DirectorySubscriptionSettings = (function(){
    var hasProps = false;

    function DirectorySubscriptionSettings() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directorySubscriptionSettings', enumerable: true });
        }

        DirectorySubscriptionSettings._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectorySubscriptionSettings, DirectorySubscriptionParametersBase);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(DirectorySubscriptionSettings, '__type', { value: 'urn:inin.com:directories:directorySubscriptionSettings' });

    Object.defineProperty(DirectorySubscriptionSettings, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (DirectorySubscriptionParametersBase.__propInfo) { _util.extend(pi, DirectorySubscriptionParametersBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:directorySubscriptionSettings'] = DirectorySubscriptionSettings;

    return DirectorySubscriptionSettings;
}());

var DirectorySubscriptionParameters = (function(){
    var hasProps = false;

    function DirectorySubscriptionParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directorySubscriptionParameters', enumerable: true });
        }

        DirectorySubscriptionParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectorySubscriptionParameters, DirectorySubscriptionParametersBase);

    function defineProps() {
        Object.defineProperty(DirectorySubscriptionParameters.prototype, 'directoryID', {
            get: function() { return this.__prop_directoryID; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectorySubscriptionParameters.directoryID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_directoryID = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DirectorySubscriptionParameters, '__type', { value: 'urn:inin.com:directories:directorySubscriptionParameters' });

    Object.defineProperty(DirectorySubscriptionParameters, '__propInfo', {
        get: function() {
            var pi = {
                'directoryID': { required: true, nullable: false }
            };
            if (DirectorySubscriptionParametersBase.__propInfo) { _util.extend(pi, DirectorySubscriptionParametersBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:directorySubscriptionParameters'] = DirectorySubscriptionParameters;

    return DirectorySubscriptionParameters;
}());

var DirectoryMessage = (function(){
    var hasProps = false;

    function DirectoryMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directoryMessage', enumerable: true });
        }

        DirectoryMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectoryMessage, DirectoryMessageBase);

    function defineProps() {
        Object.defineProperty(DirectoryMessage.prototype, 'subscriptionId', {
            get: function() { return this.__prop_subscriptionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectoryMessage.subscriptionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subscriptionId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DirectoryMessage, '__type', { value: 'urn:inin.com:directories:directoryMessage' });

    Object.defineProperty(DirectoryMessage, '__propInfo', {
        get: function() {
            var pi = {
                'subscriptionId': { required: true, nullable: false }
            };
            if (DirectoryMessageBase.__propInfo) { _util.extend(pi, DirectoryMessageBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:directoryMessage'] = DirectoryMessage;

    return DirectoryMessage;
}());

var DirectoryContactsMessage = (function(){
    var hasProps = false;

    function DirectoryContactsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:directories:directoryContactsMessage', enumerable: true });
        }

        DirectoryContactsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(DirectoryContactsMessage, DirectoryMessageBase);

    function defineProps() {
        Object.defineProperty(DirectoryContactsMessage.prototype, 'directoryID', {
            get: function() { return this.__prop_directoryID; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DirectoryContactsMessage.directoryID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_directoryID = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DirectoryContactsMessage, '__type', { value: 'urn:inin.com:directories:directoryContactsMessage' });

    Object.defineProperty(DirectoryContactsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'directoryID': { required: true, nullable: false }
            };
            if (DirectoryMessageBase.__propInfo) { _util.extend(pi, DirectoryMessageBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:directories:directoryContactsMessage'] = DirectoryContactsMessage;

    return DirectoryContactsMessage;
}());

var $directories = (function(){
    function getDirectories(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDirectories.params)) {
            try {
                params = new getDirectories.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDirectories.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof DirectoriesMetadata) ? o : new DirectoriesMetadata(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDirectories.method, getDirectories.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDirectories, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/directories', enumerable: true }
    });

    getDirectories.params = (function(){
        _util.inherits(getDirectories_params, _util.RequestParams);

        function getDirectories_params(properties) {
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

            getDirectories_params._super.constructor.apply(this, arguments);
        }

        return getDirectories_params;
    })();

    return Object.create(null, {
        getDirectories: { value: getDirectories, enumerable: true }
    });
})();

var $lookupEntries = (function(){
    function queryLookupEntries(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof queryLookupEntries.params)) {
            try {
                params = new queryLookupEntries.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: queryLookupEntries.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LookupEntries) ? o : new LookupEntries(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(queryLookupEntries.method, queryLookupEntries.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(queryLookupEntries, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/directories/lookup-entries', enumerable: true }
    });

    queryLookupEntries.params = (function(){
        _util.inherits(queryLookupEntries_params, _util.RequestParams);

        function queryLookupEntries_params(properties) {
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
            if (!(properties.content instanceof LookupEntriesQuery)) {
                throw new TypeError('`properties.content` value does not match the expected type: Directories.LookupEntriesQuery');
            }

            queryLookupEntries_params._super.constructor.apply(this, arguments);
        }

        return queryLookupEntries_params;
    })();

    return Object.create(null, {
        queryLookupEntries: { value: queryLookupEntries, enumerable: true }
    });
})();

var $contacts = (function(){
    function createContact(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createContact.params)) {
            try {
                params = new createContact.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createContact.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof ContactEntryId) ? o : new ContactEntryId(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createContact.method, createContact.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createContact, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/directories/contacts/{directoryID}', enumerable: true }
    });

    createContact.params = (function(){
        _util.inherits(createContact_params, _util.RequestParams);

        function createContact_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, directoryID');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'directoryID')) {
                throw new Error('`properties.template` is missing required property: `directoryID`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof EditableContactEntry)) {
                throw new TypeError('`properties.content` value does not match the expected type: Directories.EditableContactEntry');
            }

            createContact_params._super.constructor.apply(this, arguments);
        }

        return createContact_params;
    })();

    function updateContact(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateContact.params)) {
            try {
                params = new updateContact.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateContact.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateContact.method, updateContact.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateContact, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/directories/contacts/{directoryID}/{entryID}', enumerable: true }
    });

    updateContact.params = (function(){
        _util.inherits(updateContact_params, _util.RequestParams);

        function updateContact_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, directoryID, entryID');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'directoryID')) {
                throw new Error('`properties.template` is missing required property: `directoryID`');
            }
            if (!_util.hasProp(properties.template, 'entryID')) {
                throw new Error('`properties.template` is missing required property: `entryID`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof EditableContactEntry)) {
                throw new TypeError('`properties.content` value does not match the expected type: Directories.EditableContactEntry');
            }

            updateContact_params._super.constructor.apply(this, arguments);
        }

        return updateContact_params;
    })();

    function deleteContact(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteContact.params)) {
            try {
                params = new deleteContact.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteContact.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteContact.method, deleteContact.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteContact, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/directories/contacts/{directoryID}/{entryID}', enumerable: true }
    });

    deleteContact.params = (function(){
        _util.inherits(deleteContact_params, _util.RequestParams);

        function deleteContact_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, directoryID, entryID');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'directoryID')) {
                throw new Error('`properties.template` is missing required property: `directoryID`');
            }
            if (!_util.hasProp(properties.template, 'entryID')) {
                throw new Error('`properties.template` is missing required property: `entryID`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteContact_params._super.constructor.apply(this, arguments);
        }

        return deleteContact_params;
    })();

    return Object.create(null, {
        createContact: { value: createContact, enumerable: true },
        updateContact: { value: updateContact, enumerable: true },
        deleteContact: { value: deleteContact, enumerable: true }
    });
})();

var $speedDial = (function(){
    function createSpeedDialDirectory(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSpeedDialDirectory.params)) {
            try {
                params = new createSpeedDialDirectory.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSpeedDialDirectory.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof DirectoryCreated) ? o : new DirectoryCreated(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSpeedDialDirectory.method, createSpeedDialDirectory.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSpeedDialDirectory, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/directories/speed-dial', enumerable: true }
    });

    createSpeedDialDirectory.params = (function(){
        _util.inherits(createSpeedDialDirectory_params, _util.RequestParams);

        function createSpeedDialDirectory_params(properties) {
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
            if (!(properties.content instanceof DirectoryParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Directories.DirectoryParameters');
            }

            createSpeedDialDirectory_params._super.constructor.apply(this, arguments);
        }

        return createSpeedDialDirectory_params;
    })();

    function updateSpeedDialDirectory(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSpeedDialDirectory.params)) {
            try {
                params = new updateSpeedDialDirectory.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSpeedDialDirectory.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSpeedDialDirectory.method, updateSpeedDialDirectory.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSpeedDialDirectory, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/directories/speed-dial/{speedDialDirectoryId}', enumerable: true }
    });

    updateSpeedDialDirectory.params = (function(){
        _util.inherits(updateSpeedDialDirectory_params, _util.RequestParams);

        function updateSpeedDialDirectory_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, speedDialDirectoryId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'speedDialDirectoryId')) {
                throw new Error('`properties.template` is missing required property: `speedDialDirectoryId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof DirectoryParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Directories.DirectoryParameters');
            }

            updateSpeedDialDirectory_params._super.constructor.apply(this, arguments);
        }

        return updateSpeedDialDirectory_params;
    })();

    function deleteSpeedDialDirectory(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSpeedDialDirectory.params)) {
            try {
                params = new deleteSpeedDialDirectory.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSpeedDialDirectory.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSpeedDialDirectory.method, deleteSpeedDialDirectory.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSpeedDialDirectory, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/directories/speed-dial/{speedDialDirectoryId}', enumerable: true }
    });

    deleteSpeedDialDirectory.params = (function(){
        _util.inherits(deleteSpeedDialDirectory_params, _util.RequestParams);

        function deleteSpeedDialDirectory_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, speedDialDirectoryId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'speedDialDirectoryId')) {
                throw new Error('`properties.template` is missing required property: `speedDialDirectoryId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSpeedDialDirectory_params._super.constructor.apply(this, arguments);
        }

        return deleteSpeedDialDirectory_params;
    })();

    return Object.create(null, {
        createSpeedDialDirectory: { value: createSpeedDialDirectory, enumerable: true },
        updateSpeedDialDirectory: { value: updateSpeedDialDirectory, enumerable: true },
        deleteSpeedDialDirectory: { value: deleteSpeedDialDirectory, enumerable: true }
    });
})();

exports.DefaultPhoneNumberType = DefaultPhoneNumberType;
exports.ContactSource = ContactSource;
exports.DirectoryCategory = DirectoryCategory;
exports.DirectoryDisplayType = DirectoryDisplayType;
exports.ContactProperty = ContactProperty;
exports.ContactFilterType = ContactFilterType;
exports.SortDirection = SortDirection;
exports.LookupEntryType = LookupEntryType;
exports.LookupEntryProperty = LookupEntryProperty;
exports.LookupComparisonType = LookupComparisonType;
exports.DirectoryMessageBase = DirectoryMessageBase;
exports.ContactEntry = ContactEntry;
exports.ContactEntryBase = ContactEntryBase;
exports.ContactAccessRights = ContactAccessRights;
exports.EditableContactEntry = EditableContactEntry;
exports.ContactLinkInfo = ContactLinkInfo;
exports.StatusSummary = StatusSummary;
exports.DirectoryMessage = DirectoryMessage;
exports.DirectoryContactsMessage = DirectoryContactsMessage;
exports.DirectoriesMessage = DirectoriesMessage;
exports.DirectoryMetadata = DirectoryMetadata;
exports.DirectoryAccessRights = DirectoryAccessRights;
exports.PendingCategories = PendingCategories;
exports.DirectorySubscriptionSettings = DirectorySubscriptionSettings;
exports.DirectorySubscriptionParametersBase = DirectorySubscriptionParametersBase;
exports.ContactFilterItem = ContactFilterItem;
exports.ContactSortItem = ContactSortItem;
exports.DirectorySubscriptionParameters = DirectorySubscriptionParameters;
exports.DirectoriesMetadata = DirectoriesMetadata;
exports.LookupEntriesQuery = LookupEntriesQuery;
exports.LookupEntries = LookupEntries;
exports.LookupEntry = LookupEntry;
exports.ContactEntryId = ContactEntryId;
exports.DirectoryParameters = DirectoryParameters;
exports.DirectoryCreated = DirectoryCreated;
exports.CreateSpeedDialContactLink = CreateSpeedDialContactLink;
exports.SpeedDialContactLinkCreated = SpeedDialContactLinkCreated;
exports.SpeedDialContactLink = SpeedDialContactLink;
exports.$directories = $directories;
exports.$lookupEntries = $lookupEntries;
exports.$contacts = $contacts;
exports.$speedDial = $speedDial;
