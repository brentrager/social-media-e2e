/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var SmsBrokerAccount = (function(){
    var hasProps = false;

    function SmsBrokerAccount() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.sms:smsBrokerAccount' });
        }

        SmsBrokerAccount._super.constructor.apply(this, arguments);
    }
    _util.inherits(SmsBrokerAccount, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SmsBrokerAccount.prototype, 'broker', {
            get: function() { return this.__prop_broker; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SmsBrokerAccount.broker, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_broker = value;
            },
            enumerable: true
        });

        Object.defineProperty(SmsBrokerAccount.prototype, 'accountId', {
            get: function() { return this.__prop_accountId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SmsBrokerAccount.accountId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accountId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SmsBrokerAccount.prototype, 'localAddress', {
            get: function() { return this.__prop_localAddress; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SmsBrokerAccount.localAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_localAddress = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SmsBrokerAccount, '__type', { value: 'urn:inin.com:interactions.sms:smsBrokerAccount' });

    Object.defineProperty(SmsBrokerAccount, '__propInfo', {
        get: function() {
            var pi = {
                'broker': { required: true, nullable: false },
                'accountId': { required: true, nullable: false },
                'localAddress': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.sms:smsBrokerAccount'] = SmsBrokerAccount;

    return SmsBrokerAccount;
}());

var SmsBrokerAccountUserWorkgroupAssociation = (function(){
    var hasProps = false;

    function SmsBrokerAccountUserWorkgroupAssociation() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.sms:smsBrokerAccountUserWorkgroupAssociation' });
        }

        SmsBrokerAccountUserWorkgroupAssociation._super.constructor.apply(this, arguments);
    }
    _util.inherits(SmsBrokerAccountUserWorkgroupAssociation, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SmsBrokerAccountUserWorkgroupAssociation.prototype, 'workgroup', {
            get: function() { return this.__prop_workgroup; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SmsBrokerAccountUserWorkgroupAssociation.workgroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroup = value;
            },
            enumerable: true
        });

        Object.defineProperty(SmsBrokerAccountUserWorkgroupAssociation.prototype, 'broker', {
            get: function() { return this.__prop_broker; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SmsBrokerAccountUserWorkgroupAssociation.broker, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_broker = value;
            },
            enumerable: true
        });

        Object.defineProperty(SmsBrokerAccountUserWorkgroupAssociation.prototype, 'accountId', {
            get: function() { return this.__prop_accountId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SmsBrokerAccountUserWorkgroupAssociation.accountId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accountId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SmsBrokerAccountUserWorkgroupAssociation.prototype, 'localAddress', {
            get: function() { return this.__prop_localAddress; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SmsBrokerAccountUserWorkgroupAssociation.localAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_localAddress = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SmsBrokerAccountUserWorkgroupAssociation, '__type', { value: 'urn:inin.com:interactions.sms:smsBrokerAccountUserWorkgroupAssociation' });

    Object.defineProperty(SmsBrokerAccountUserWorkgroupAssociation, '__propInfo', {
        get: function() {
            var pi = {
                'workgroup': { required: true, nullable: false },
                'broker': { required: true, nullable: false },
                'accountId': { required: true, nullable: false },
                'localAddress': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.sms:smsBrokerAccountUserWorkgroupAssociation'] = SmsBrokerAccountUserWorkgroupAssociation;

    return SmsBrokerAccountUserWorkgroupAssociation;
}());

var SmsBrokerAccountAssociations = (function(){
    var hasProps = false;

    function SmsBrokerAccountAssociations() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.sms:smsBrokerAccountAssociations' });
        }

        SmsBrokerAccountAssociations._super.constructor.apply(this, arguments);
    }
    _util.inherits(SmsBrokerAccountAssociations, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SmsBrokerAccountAssociations.prototype, 'smsBrokerAccountUserAssociations', {
            get: function() { return this.__prop_smsBrokerAccountUserAssociations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SmsBrokerAccount); }))) {
                    try {
                        value = value.map(function(item){ return new SmsBrokerAccount(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SmsBrokerAccountAssociations.smsBrokerAccountUserAssociations: ' + e.message);
                    }
                }

                this.__prop_smsBrokerAccountUserAssociations = value;
            },
            enumerable: true
        });

        Object.defineProperty(SmsBrokerAccountAssociations.prototype, 'smsBrokerAccountUserWorkgroupAssociations', {
            get: function() { return this.__prop_smsBrokerAccountUserWorkgroupAssociations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SmsBrokerAccountUserWorkgroupAssociation); }))) {
                    try {
                        value = value.map(function(item){ return new SmsBrokerAccountUserWorkgroupAssociation(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SmsBrokerAccountAssociations.smsBrokerAccountUserWorkgroupAssociations: ' + e.message);
                    }
                }

                this.__prop_smsBrokerAccountUserWorkgroupAssociations = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SmsBrokerAccountAssociations, '__type', { value: 'urn:inin.com:interactions.sms:smsBrokerAccountAssociations' });

    Object.defineProperty(SmsBrokerAccountAssociations, '__propInfo', {
        get: function() {
            var pi = {
                'smsBrokerAccountUserAssociations': { required: true, nullable: false },
                'smsBrokerAccountUserWorkgroupAssociations': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.sms:smsBrokerAccountAssociations'] = SmsBrokerAccountAssociations;

    return SmsBrokerAccountAssociations;
}());

var SmsBrokerAccountAssociationsUpdated = (function(){
    var hasProps = false;

    function SmsBrokerAccountAssociationsUpdated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.sms:smsBrokerAccountAssociationsUpdated', enumerable: true });
        }

        SmsBrokerAccountAssociationsUpdated._super.constructor.apply(this, arguments);
    }
    _util.inherits(SmsBrokerAccountAssociationsUpdated, Messaging.Message);

    function defineProps() {
        Object.defineProperty(SmsBrokerAccountAssociationsUpdated.prototype, 'smsBrokerAccountUserAssociations', {
            get: function() { return this.__prop_smsBrokerAccountUserAssociations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SmsBrokerAccount); }))) {
                    try {
                        value = value.map(function(item){ return new SmsBrokerAccount(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SmsBrokerAccountAssociationsUpdated.smsBrokerAccountUserAssociations: ' + e.message);
                    }
                }

                this.__prop_smsBrokerAccountUserAssociations = value;
            },
            enumerable: true
        });

        Object.defineProperty(SmsBrokerAccountAssociationsUpdated.prototype, 'smsBrokerAccountUserWorkgroupAssociations', {
            get: function() { return this.__prop_smsBrokerAccountUserWorkgroupAssociations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SmsBrokerAccountUserWorkgroupAssociation); }))) {
                    try {
                        value = value.map(function(item){ return new SmsBrokerAccountUserWorkgroupAssociation(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SmsBrokerAccountAssociationsUpdated.smsBrokerAccountUserWorkgroupAssociations: ' + e.message);
                    }
                }

                this.__prop_smsBrokerAccountUserWorkgroupAssociations = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SmsBrokerAccountAssociationsUpdated, '__type', { value: 'urn:inin.com:interactions.sms:smsBrokerAccountAssociationsUpdated' });

    Object.defineProperty(SmsBrokerAccountAssociationsUpdated, '__propInfo', {
        get: function() {
            var pi = {
                'smsBrokerAccountUserAssociations': { required: true, nullable: false },
                'smsBrokerAccountUserWorkgroupAssociations': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.sms:smsBrokerAccountAssociationsUpdated'] = SmsBrokerAccountAssociationsUpdated;

    return SmsBrokerAccountAssociationsUpdated;
}());

var SmsErrorInformation = (function(){
    var hasProps = false;

    function SmsErrorInformation() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.sms:smsErrorInformation', enumerable: true });
        }

        SmsErrorInformation._super.constructor.apply(this, arguments);
    }
    _util.inherits(SmsErrorInformation, Messaging.Message);

    function defineProps() {
        Object.defineProperty(SmsErrorInformation.prototype, 'error', {
            get: function() { return this.__prop_error; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SmsErrorInformation.error, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_error = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SmsErrorInformation, '__type', { value: 'urn:inin.com:interactions.sms:smsErrorInformation' });

    Object.defineProperty(SmsErrorInformation, '__propInfo', {
        get: function() {
            var pi = {
                'error': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.sms:smsErrorInformation'] = SmsErrorInformation;

    return SmsErrorInformation;
}());

var $brokerAccountAssociations = (function(){
    function getSmsBrokerAccountAssociations(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSmsBrokerAccountAssociations.params)) {
            try {
                params = new getSmsBrokerAccountAssociations.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSmsBrokerAccountAssociations.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SmsBrokerAccountAssociations) ? o : new SmsBrokerAccountAssociations(o); };
        dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSmsBrokerAccountAssociations.method, getSmsBrokerAccountAssociations.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSmsBrokerAccountAssociations, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/sms/broker-account-associations', enumerable: true }
    });

    getSmsBrokerAccountAssociations.params = (function(){
        _util.inherits(getSmsBrokerAccountAssociations_params, _util.RequestParams);

        function getSmsBrokerAccountAssociations_params(properties) {
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

            getSmsBrokerAccountAssociations_params._super.constructor.apply(this, arguments);
        }

        return getSmsBrokerAccountAssociations_params;
    })();

    return Object.create(null, {
        getSmsBrokerAccountAssociations: { value: getSmsBrokerAccountAssociations, enumerable: true }
    });
})();

exports.SmsBrokerAccountAssociationsUpdated = SmsBrokerAccountAssociationsUpdated;
exports.SmsBrokerAccount = SmsBrokerAccount;
exports.SmsBrokerAccountUserWorkgroupAssociation = SmsBrokerAccountUserWorkgroupAssociation;
exports.SmsErrorInformation = SmsErrorInformation;
exports.SmsBrokerAccountAssociations = SmsBrokerAccountAssociations;
exports.$brokerAccountAssociations = $brokerAccountAssociations;
