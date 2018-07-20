/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
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

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:phoneNumbers:queueType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(QueueType, _util.EnumValue);

    Object.defineProperties(QueueType, {
        'None': { value: new QueueType(0, 'None'), enumerable: true },
        'MyInteractions': { value: new QueueType(1, 'MyInteractions'), enumerable: true },
        'User': { value: new QueueType(2, 'User'), enumerable: true },
        'Station': { value: new QueueType(3, 'Station'), enumerable: true },
        'Workgroup': { value: new QueueType(4, 'Workgroup'), enumerable: true },
        'Orbit': { value: new QueueType(5, 'Orbit'), enumerable: true },
        'Line': { value: new QueueType(6, 'Line'), enumerable: true }
    });

    Object.defineProperty(QueueType, '__type', { value: 'urn:inin.com:phoneNumbers:queueType' });

    _typemap['urn:inin.com:phoneNumbers:queueType'] = QueueType;

    return QueueType;
}());

var PhoneNumberDetailsQuery = (function(){
    var hasProps = false;

    function PhoneNumberDetailsQuery() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:phoneNumbers:phoneNumberDetailsQuery' });
        }

        PhoneNumberDetailsQuery._super.constructor.apply(this, arguments);
    }
    _util.inherits(PhoneNumberDetailsQuery, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PhoneNumberDetailsQuery.prototype, 'phoneNumber', {
            get: function() { return this.__prop_phoneNumber; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PhoneNumberDetailsQuery.phoneNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phoneNumber = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PhoneNumberDetailsQuery, '__type', { value: 'urn:inin.com:phoneNumbers:phoneNumberDetailsQuery' });

    Object.defineProperty(PhoneNumberDetailsQuery, '__propInfo', {
        get: function() {
            var pi = {
                'phoneNumber': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:phoneNumbers:phoneNumberDetailsQuery'] = PhoneNumberDetailsQuery;

    return PhoneNumberDetailsQuery;
}());

var PhoneNumberDetails = (function(){
    var hasProps = false;

    function PhoneNumberDetails() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:phoneNumbers:phoneNumberDetails' });
        }

        PhoneNumberDetails._super.constructor.apply(this, arguments);
    }
    _util.inherits(PhoneNumberDetails, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PhoneNumberDetails.prototype, 'autoDialExtension', {
            get: function() { return this.__prop_autoDialExtension; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for PhoneNumberDetails.autoDialExtension, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_autoDialExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetails.prototype, 'classifications', {
            get: function() { return this.__prop_classifications; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for PhoneNumberDetails.classifications, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_classifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetails.prototype, 'defaultClassification', {
            get: function() { return this.__prop_defaultClassification; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PhoneNumberDetails.defaultClassification, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_defaultClassification = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetails.prototype, 'dialCapable', {
            get: function() { return this.__prop_dialCapable; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for PhoneNumberDetails.dialCapable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dialCapable = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetails.prototype, 'displayText', {
            get: function() { return this.__prop_displayText; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PhoneNumberDetails.displayText, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayText = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetails.prototype, 'editBase', {
            get: function() { return this.__prop_editBase; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PhoneNumberDetails.editBase, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_editBase = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetails.prototype, 'extension', {
            get: function() { return this.__prop_extension; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PhoneNumberDetails.extension, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_extension = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetails.prototype, 'internal', {
            get: function() { return this.__prop_internal; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for PhoneNumberDetails.internal, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_internal = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetails.prototype, 'normalizedText', {
            get: function() { return this.__prop_normalizedText; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PhoneNumberDetails.normalizedText, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_normalizedText = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetails.prototype, 'queueName', {
            get: function() { return this.__prop_queueName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PhoneNumberDetails.queueName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_queueName = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetails.prototype, 'queueType', {
            get: function() { return this.__prop_queueType; },
            set: function(value) {
                if (!(value instanceof QueueType)) {
                    try {
                        value = new QueueType(value);
                    } catch (e) {
                        throw new TypeError('Error setting PhoneNumberDetails.queueType: ' + e.message);
                    }
                }

                this.__prop_queueType = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetails.prototype, 'rawText', {
            get: function() { return this.__prop_rawText; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PhoneNumberDetails.rawText, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_rawText = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumberDetails.prototype, 'voicemailCapable', {
            get: function() { return this.__prop_voicemailCapable; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for PhoneNumberDetails.voicemailCapable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_voicemailCapable = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PhoneNumberDetails, '__type', { value: 'urn:inin.com:phoneNumbers:phoneNumberDetails' });

    Object.defineProperty(PhoneNumberDetails, '__propInfo', {
        get: function() {
            var pi = {
                'autoDialExtension': { required: true, nullable: false },
                'classifications': { required: false, nullable: false },
                'defaultClassification': { required: true, nullable: false },
                'dialCapable': { required: true, nullable: false },
                'displayText': { required: true, nullable: false },
                'editBase': { required: false, nullable: false },
                'extension': { required: false, nullable: false },
                'internal': { required: true, nullable: false },
                'normalizedText': { required: true, nullable: false },
                'queueName': { required: false, nullable: false },
                'queueType': { required: true, nullable: false },
                'rawText': { required: true, nullable: false },
                'voicemailCapable': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:phoneNumbers:phoneNumberDetails'] = PhoneNumberDetails;

    return PhoneNumberDetails;
}());

var PurecloudTieLineDialGroupNumberRequest = (function(){
    var hasProps = false;

    function PurecloudTieLineDialGroupNumberRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:phoneNumbers:purecloudTieLineDialGroupNumberRequest' });
        }

        PurecloudTieLineDialGroupNumberRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(PurecloudTieLineDialGroupNumberRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PurecloudTieLineDialGroupNumberRequest.prototype, 'phoneNumbers', {
            get: function() { return this.__prop_phoneNumbers; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for PurecloudTieLineDialGroupNumberRequest.phoneNumbers, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phoneNumbers = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PurecloudTieLineDialGroupNumberRequest, '__type', { value: 'urn:inin.com:phoneNumbers:purecloudTieLineDialGroupNumberRequest' });

    Object.defineProperty(PurecloudTieLineDialGroupNumberRequest, '__propInfo', {
        get: function() {
            var pi = {
                'phoneNumbers': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:phoneNumbers:purecloudTieLineDialGroupNumberRequest'] = PurecloudTieLineDialGroupNumberRequest;

    return PurecloudTieLineDialGroupNumberRequest;
}());

var PurecloudTieLineDialGroupNumberResponse = (function(){
    var hasProps = false;

    function PurecloudTieLineDialGroupNumberResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:phoneNumbers:purecloudTieLineDialGroupNumberResponse' });
        }

        PurecloudTieLineDialGroupNumberResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(PurecloudTieLineDialGroupNumberResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PurecloudTieLineDialGroupNumberResponse.prototype, 'phoneNumber', {
            get: function() { return this.__prop_phoneNumber; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PurecloudTieLineDialGroupNumberResponse.phoneNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phoneNumber = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PurecloudTieLineDialGroupNumberResponse, '__type', { value: 'urn:inin.com:phoneNumbers:purecloudTieLineDialGroupNumberResponse' });

    Object.defineProperty(PurecloudTieLineDialGroupNumberResponse, '__propInfo', {
        get: function() {
            var pi = {
                'phoneNumber': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:phoneNumbers:purecloudTieLineDialGroupNumberResponse'] = PurecloudTieLineDialGroupNumberResponse;

    return PurecloudTieLineDialGroupNumberResponse;
}());

var $queryDetails = (function(){
    function queryPhoneNumberDetails(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof queryPhoneNumberDetails.params)) {
            try {
                params = new queryPhoneNumberDetails.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: queryPhoneNumberDetails.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof PhoneNumberDetails) ? o : new PhoneNumberDetails(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(queryPhoneNumberDetails.method, queryPhoneNumberDetails.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(queryPhoneNumberDetails, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/phone-numbers/query-details', enumerable: true }
    });

    queryPhoneNumberDetails.params = (function(){
        _util.inherits(queryPhoneNumberDetails_params, _util.RequestParams);

        function queryPhoneNumberDetails_params(properties) {
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
            if (!(properties.content instanceof PhoneNumberDetailsQuery)) {
                throw new TypeError('`properties.content` value does not match the expected type: PhoneNumbers.PhoneNumberDetailsQuery');
            }

            queryPhoneNumberDetails_params._super.constructor.apply(this, arguments);
        }

        return queryPhoneNumberDetails_params;
    })();

    return Object.create(null, {
        queryPhoneNumberDetails: { value: queryPhoneNumberDetails, enumerable: true }
    });
})();

var $purecloudTielineDialgroupNumber = (function(){
    function findPurecloudTieLineDialGroupNumber(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof findPurecloudTieLineDialGroupNumber.params)) {
            try {
                params = new findPurecloudTieLineDialGroupNumber.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: findPurecloudTieLineDialGroupNumber.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof PurecloudTieLineDialGroupNumberResponse) ? o : new PurecloudTieLineDialGroupNumberResponse(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(findPurecloudTieLineDialGroupNumber.method, findPurecloudTieLineDialGroupNumber.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(findPurecloudTieLineDialGroupNumber, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/phone-numbers/purecloud-tieline-dialgroup-number', enumerable: true }
    });

    findPurecloudTieLineDialGroupNumber.params = (function(){
        _util.inherits(findPurecloudTieLineDialGroupNumber_params, _util.RequestParams);

        function findPurecloudTieLineDialGroupNumber_params(properties) {
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
            if (!(properties.content instanceof PurecloudTieLineDialGroupNumberRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: PhoneNumbers.PurecloudTieLineDialGroupNumberRequest');
            }

            findPurecloudTieLineDialGroupNumber_params._super.constructor.apply(this, arguments);
        }

        return findPurecloudTieLineDialGroupNumber_params;
    })();

    return Object.create(null, {
        findPurecloudTieLineDialGroupNumber: { value: findPurecloudTieLineDialGroupNumber, enumerable: true }
    });
})();

exports.QueueType = QueueType;
exports.PhoneNumberDetailsQuery = PhoneNumberDetailsQuery;
exports.PhoneNumberDetails = PhoneNumberDetails;
exports.PurecloudTieLineDialGroupNumberRequest = PurecloudTieLineDialGroupNumberRequest;
exports.PurecloudTieLineDialGroupNumberResponse = PurecloudTieLineDialGroupNumberResponse;
exports.$queryDetails = $queryDetails;
exports.$purecloudTielineDialgroupNumber = $purecloudTielineDialgroupNumber;
