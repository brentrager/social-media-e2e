/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var LicenseStatus = (function(){
    var instanceCache = {};
    function LicenseStatus(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:licenses:licenseStatus' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LicenseStatus, _util.EnumValue);

    Object.defineProperties(LicenseStatus, {
        'UnknownError': { value: new LicenseStatus(0, 'UnknownError'), enumerable: true },
        'None': { value: new LicenseStatus(1, 'None'), enumerable: true },
        'Available': { value: new LicenseStatus(2, 'Available'), enumerable: true },
        'NotAssigned': { value: new LicenseStatus(3, 'NotAssigned'), enumerable: true },
        'LicenseUnavailable': { value: new LicenseStatus(4, 'LicenseUnavailable'), enumerable: true },
        'UserOnAnotherStation': { value: new LicenseStatus(5, 'UserOnAnotherStation'), enumerable: true },
        'StationAlreadyInUseOnAnotherMachine': { value: new LicenseStatus(6, 'StationAlreadyInUseOnAnotherMachine'), enumerable: true },
        'StationAlreadyInUseByAnotherUser': { value: new LicenseStatus(7, 'StationAlreadyInUseByAnotherUser'), enumerable: true },
        'OtherApplicationUsingLicense': { value: new LicenseStatus(8, 'OtherApplicationUsingLicense'), enumerable: true },
        'LicenseUnknown': { value: new LicenseStatus(9, 'LicenseUnknown'), enumerable: true }
    });

    Object.defineProperty(LicenseStatus, '__type', { value: 'urn:inin.com:licenses:licenseStatus' });

    _typemap['urn:inin.com:licenses:licenseStatus'] = LicenseStatus;

    return LicenseStatus;
}());

var StageFailureAction = (function(){
    var instanceCache = {};
    function StageFailureAction(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:licenses:stageFailureAction' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(StageFailureAction, _util.EnumValue);

    Object.defineProperties(StageFailureAction, {
        'Continue': { value: new StageFailureAction(0, 'Continue'), enumerable: true },
        'Abort': { value: new StageFailureAction(1, 'Abort'), enumerable: true }
    });

    Object.defineProperty(StageFailureAction, '__type', { value: 'urn:inin.com:licenses:stageFailureAction' });

    _typemap['urn:inin.com:licenses:stageFailureAction'] = StageFailureAction;

    return StageFailureAction;
}());

var LicenseAssignedStatus = (function(){
    var hasProps = false;

    function LicenseAssignedStatus() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:licenses:licenseAssignedStatus' });
        }

        LicenseAssignedStatus._super.constructor.apply(this, arguments);
    }
    _util.inherits(LicenseAssignedStatus, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LicenseAssignedStatus.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for LicenseAssignedStatus.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseAssignedStatus.prototype, 'isAssigned', {
            get: function() { return this.__prop_isAssigned; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for LicenseAssignedStatus.isAssigned, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isAssigned = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LicenseAssignedStatus, '__type', { value: 'urn:inin.com:licenses:licenseAssignedStatus' });

    Object.defineProperty(LicenseAssignedStatus, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'isAssigned': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:licenses:licenseAssignedStatus'] = LicenseAssignedStatus;

    return LicenseAssignedStatus;
}());

var Licenses = (function(){
    var hasProps = false;

    function Licenses() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:licenses:licenses' });
        }

        Licenses._super.constructor.apply(this, arguments);
    }
    _util.inherits(Licenses, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Licenses.prototype, 'licenseList', {
            get: function() { return this.__prop_licenseList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for Licenses.licenseList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_licenseList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Licenses, '__type', { value: 'urn:inin.com:licenses:licenses' });

    Object.defineProperty(Licenses, '__propInfo', {
        get: function() {
            var pi = {
                'licenseList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:licenses:licenses'] = Licenses;

    return Licenses;
}());

var LicenseOperationResults = (function(){
    var hasProps = false;

    function LicenseOperationResults() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:licenses:licenseOperationResults' });
        }

        LicenseOperationResults._super.constructor.apply(this, arguments);
    }
    _util.inherits(LicenseOperationResults, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LicenseOperationResults.prototype, 'licenseOperationResultList', {
            get: function() { return this.__prop_licenseOperationResultList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LicenseOperationResult); }))) {
                    try {
                        value = value.map(function(item){ return new LicenseOperationResult(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LicenseOperationResults.licenseOperationResultList: ' + e.message);
                    }
                }

                this.__prop_licenseOperationResultList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LicenseOperationResults, '__type', { value: 'urn:inin.com:licenses:licenseOperationResults' });

    Object.defineProperty(LicenseOperationResults, '__propInfo', {
        get: function() {
            var pi = {
                'licenseOperationResultList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:licenses:licenseOperationResults'] = LicenseOperationResults;

    return LicenseOperationResults;
}());

var LicenseOperationResult = (function(){
    var hasProps = false;

    function LicenseOperationResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:licenses:licenseOperationResult' });
        }

        LicenseOperationResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(LicenseOperationResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LicenseOperationResult.prototype, 'errorDetails', {
            get: function() { return this.__prop_errorDetails; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for LicenseOperationResult.errorDetails, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_errorDetails = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseOperationResult.prototype, 'isAvailable', {
            get: function() { return this.__prop_isAvailable; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for LicenseOperationResult.isAvailable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isAvailable = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseOperationResult.prototype, 'licenseName', {
            get: function() { return this.__prop_licenseName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for LicenseOperationResult.licenseName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_licenseName = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseOperationResult.prototype, 'licenseStatus', {
            get: function() { return this.__prop_licenseStatus; },
            set: function(value) {
                if (!(value instanceof LicenseStatus)) {
                    try {
                        value = new LicenseStatus(value);
                    } catch (e) {
                        throw new TypeError('Error setting LicenseOperationResult.licenseStatus: ' + e.message);
                    }
                }

                this.__prop_licenseStatus = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LicenseOperationResult, '__type', { value: 'urn:inin.com:licenses:licenseOperationResult' });

    Object.defineProperty(LicenseOperationResult, '__propInfo', {
        get: function() {
            var pi = {
                'errorDetails': { required: true, nullable: false },
                'isAvailable': { required: true, nullable: false },
                'licenseName': { required: true, nullable: false },
                'licenseStatus': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:licenses:licenseOperationResult'] = LicenseOperationResult;

    return LicenseOperationResult;
}());

var LicenseStageOperations = (function(){
    var hasProps = false;

    function LicenseStageOperations() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:licenses:licenseStageOperations' });
        }

        LicenseStageOperations._super.constructor.apply(this, arguments);
    }
    _util.inherits(LicenseStageOperations, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LicenseStageOperations.prototype, 'licenseStageOperationList', {
            get: function() { return this.__prop_licenseStageOperationList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LicenseStageOperation); }))) {
                    try {
                        value = value.map(function(item){ return new LicenseStageOperation(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LicenseStageOperations.licenseStageOperationList: ' + e.message);
                    }
                }

                this.__prop_licenseStageOperationList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LicenseStageOperations, '__type', { value: 'urn:inin.com:licenses:licenseStageOperations' });

    Object.defineProperty(LicenseStageOperations, '__propInfo', {
        get: function() {
            var pi = {
                'licenseStageOperationList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:licenses:licenseStageOperations'] = LicenseStageOperations;

    return LicenseStageOperations;
}());

var LicenseStageOperation = (function(){
    var hasProps = false;

    function LicenseStageOperation() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:licenses:licenseStageOperation' });
        }

        LicenseStageOperation._super.constructor.apply(this, arguments);
    }
    _util.inherits(LicenseStageOperation, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LicenseStageOperation.prototype, 'stageName', {
            get: function() { return this.__prop_stageName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for LicenseStageOperation.stageName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_stageName = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseStageOperation.prototype, 'stageFailureAction', {
            get: function() { return this.__prop_stageFailureAction; },
            set: function(value) {
                if (!(value instanceof StageFailureAction)) {
                    try {
                        value = new StageFailureAction(value);
                    } catch (e) {
                        throw new TypeError('Error setting LicenseStageOperation.stageFailureAction: ' + e.message);
                    }
                }

                this.__prop_stageFailureAction = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseStageOperation.prototype, 'licenseList', {
            get: function() { return this.__prop_licenseList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for LicenseStageOperation.licenseList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_licenseList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LicenseStageOperation, '__type', { value: 'urn:inin.com:licenses:licenseStageOperation' });

    Object.defineProperty(LicenseStageOperation, '__propInfo', {
        get: function() {
            var pi = {
                'stageName': { required: true, nullable: false },
                'stageFailureAction': { required: true, nullable: false },
                'licenseList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:licenses:licenseStageOperation'] = LicenseStageOperation;

    return LicenseStageOperation;
}());

var LicenseStageOperationResults = (function(){
    var hasProps = false;

    function LicenseStageOperationResults() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:licenses:licenseStageOperationResults' });
        }

        LicenseStageOperationResults._super.constructor.apply(this, arguments);
    }
    _util.inherits(LicenseStageOperationResults, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LicenseStageOperationResults.prototype, 'licenseStageOperationResultList', {
            get: function() { return this.__prop_licenseStageOperationResultList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LicenseStageOperationResult); }))) {
                    try {
                        value = value.map(function(item){ return new LicenseStageOperationResult(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LicenseStageOperationResults.licenseStageOperationResultList: ' + e.message);
                    }
                }

                this.__prop_licenseStageOperationResultList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LicenseStageOperationResults, '__type', { value: 'urn:inin.com:licenses:licenseStageOperationResults' });

    Object.defineProperty(LicenseStageOperationResults, '__propInfo', {
        get: function() {
            var pi = {
                'licenseStageOperationResultList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:licenses:licenseStageOperationResults'] = LicenseStageOperationResults;

    return LicenseStageOperationResults;
}());

var LicenseStageOperationResult = (function(){
    var hasProps = false;

    function LicenseStageOperationResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:licenses:licenseStageOperationResult' });
        }

        LicenseStageOperationResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(LicenseStageOperationResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LicenseStageOperationResult.prototype, 'stageName', {
            get: function() { return this.__prop_stageName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for LicenseStageOperationResult.stageName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_stageName = value;
            },
            enumerable: true
        });

        Object.defineProperty(LicenseStageOperationResult.prototype, 'result', {
            get: function() { return this.__prop_result; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LicenseOperationResult); }))) {
                    try {
                        value = value.map(function(item){ return new LicenseOperationResult(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LicenseStageOperationResult.result: ' + e.message);
                    }
                }

                this.__prop_result = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LicenseStageOperationResult, '__type', { value: 'urn:inin.com:licenses:licenseStageOperationResult' });

    Object.defineProperty(LicenseStageOperationResult, '__propInfo', {
        get: function() {
            var pi = {
                'stageName': { required: true, nullable: false },
                'result': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:licenses:licenseStageOperationResult'] = LicenseStageOperationResult;

    return LicenseStageOperationResult;
}());

var LicenseMessage = (function(){
    var hasProps = false;

    function LicenseMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:licenses:licenseMessage', enumerable: true });
        }

        LicenseMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(LicenseMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(LicenseMessage.prototype, 'licenseAssignedStatusList', {
            get: function() { return this.__prop_licenseAssignedStatusList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LicenseAssignedStatus); }))) {
                    try {
                        value = value.map(function(item){ return new LicenseAssignedStatus(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LicenseMessage.licenseAssignedStatusList: ' + e.message);
                    }
                }

                this.__prop_licenseAssignedStatusList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LicenseMessage, '__type', { value: 'urn:inin.com:licenses:licenseMessage' });

    Object.defineProperty(LicenseMessage, '__propInfo', {
        get: function() {
            var pi = {
                'licenseAssignedStatusList': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:licenses:licenseMessage'] = LicenseMessage;

    return LicenseMessage;
}());

var $licenses = (function(){
    function acquireLicenses(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof acquireLicenses.params)) {
            try {
                params = new acquireLicenses.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: acquireLicenses.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LicenseOperationResults) ? o : new LicenseOperationResults(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(acquireLicenses.method, acquireLicenses.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(acquireLicenses, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/licenses', enumerable: true }
    });

    acquireLicenses.params = (function(){
        _util.inherits(acquireLicenses_params, _util.RequestParams);

        function acquireLicenses_params(properties) {
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
            if (!(properties.content instanceof Licenses)) {
                throw new TypeError('`properties.content` value does not match the expected type: Licenses.Licenses');
            }

            acquireLicenses_params._super.constructor.apply(this, arguments);
        }

        return acquireLicenses_params;
    })();

    function replaceLicenses(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof replaceLicenses.params)) {
            try {
                params = new replaceLicenses.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: replaceLicenses.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LicenseOperationResults) ? o : new LicenseOperationResults(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(replaceLicenses.method, replaceLicenses.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(replaceLicenses, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/licenses', enumerable: true }
    });

    replaceLicenses.params = (function(){
        _util.inherits(replaceLicenses_params, _util.RequestParams);

        function replaceLicenses_params(properties) {
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
            if (!(properties.content instanceof Licenses)) {
                throw new TypeError('`properties.content` value does not match the expected type: Licenses.Licenses');
            }

            replaceLicenses_params._super.constructor.apply(this, arguments);
        }

        return replaceLicenses_params;
    })();

    function releaseLicenses(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof releaseLicenses.params)) {
            try {
                params = new releaseLicenses.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: releaseLicenses.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(releaseLicenses.method, releaseLicenses.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(releaseLicenses, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/licenses', enumerable: true }
    });

    releaseLicenses.params = (function(){
        _util.inherits(releaseLicenses_params, _util.RequestParams);

        function releaseLicenses_params(properties) {
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

            releaseLicenses_params._super.constructor.apply(this, arguments);
        }

        return releaseLicenses_params;
    })();

    return Object.create(null, {
        acquireLicenses: { value: acquireLicenses, enumerable: true },
        replaceLicenses: { value: replaceLicenses, enumerable: true },
        releaseLicenses: { value: releaseLicenses, enumerable: true }
    });
})();

var $licenseStages = (function(){
    function acquireLicenseStageList(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof acquireLicenseStageList.params)) {
            try {
                params = new acquireLicenseStageList.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: acquireLicenseStageList.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LicenseStageOperationResults) ? o : new LicenseStageOperationResults(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(acquireLicenseStageList.method, acquireLicenseStageList.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(acquireLicenseStageList, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/licenses/license-stages', enumerable: true }
    });

    acquireLicenseStageList.params = (function(){
        _util.inherits(acquireLicenseStageList_params, _util.RequestParams);

        function acquireLicenseStageList_params(properties) {
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
            if (!(properties.content instanceof LicenseStageOperations)) {
                throw new TypeError('`properties.content` value does not match the expected type: Licenses.LicenseStageOperations');
            }

            acquireLicenseStageList_params._super.constructor.apply(this, arguments);
        }

        return acquireLicenseStageList_params;
    })();

    return Object.create(null, {
        acquireLicenseStageList: { value: acquireLicenseStageList, enumerable: true }
    });
})();

var $downgrade = (function(){
    function getLicensesDowngrades(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLicensesDowngrades.params)) {
            try {
                params = new getLicensesDowngrades.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLicensesDowngrades.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Licenses) ? o : new Licenses(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLicensesDowngrades.method, getLicensesDowngrades.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLicensesDowngrades, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/licenses/downgrade', enumerable: true }
    });

    getLicensesDowngrades.params = (function(){
        _util.inherits(getLicensesDowngrades_params, _util.RequestParams);

        function getLicensesDowngrades_params(properties) {
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

            getLicensesDowngrades_params._super.constructor.apply(this, arguments);
        }

        return getLicensesDowngrades_params;
    })();

    function setLicensesDowngrades(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof setLicensesDowngrades.params)) {
            try {
                params = new setLicensesDowngrades.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: setLicensesDowngrades.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(setLicensesDowngrades.method, setLicensesDowngrades.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(setLicensesDowngrades, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/licenses/downgrade', enumerable: true }
    });

    setLicensesDowngrades.params = (function(){
        _util.inherits(setLicensesDowngrades_params, _util.RequestParams);

        function setLicensesDowngrades_params(properties) {
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
            if (!(properties.content instanceof Licenses)) {
                throw new TypeError('`properties.content` value does not match the expected type: Licenses.Licenses');
            }

            setLicensesDowngrades_params._super.constructor.apply(this, arguments);
        }

        return setLicensesDowngrades_params;
    })();

    function clearLicensesDowngrades(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof clearLicensesDowngrades.params)) {
            try {
                params = new clearLicensesDowngrades.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: clearLicensesDowngrades.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(clearLicensesDowngrades.method, clearLicensesDowngrades.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(clearLicensesDowngrades, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/licenses/downgrade', enumerable: true }
    });

    clearLicensesDowngrades.params = (function(){
        _util.inherits(clearLicensesDowngrades_params, _util.RequestParams);

        function clearLicensesDowngrades_params(properties) {
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

            clearLicensesDowngrades_params._super.constructor.apply(this, arguments);
        }

        return clearLicensesDowngrades_params;
    })();

    return Object.create(null, {
        getLicensesDowngrades: { value: getLicensesDowngrades, enumerable: true },
        setLicensesDowngrades: { value: setLicensesDowngrades, enumerable: true },
        clearLicensesDowngrades: { value: clearLicensesDowngrades, enumerable: true }
    });
})();

exports.LicenseStatus = LicenseStatus;
exports.StageFailureAction = StageFailureAction;
exports.LicenseMessage = LicenseMessage;
exports.LicenseAssignedStatus = LicenseAssignedStatus;
exports.Licenses = Licenses;
exports.LicenseOperationResults = LicenseOperationResults;
exports.LicenseOperationResult = LicenseOperationResult;
exports.LicenseStageOperations = LicenseStageOperations;
exports.LicenseStageOperation = LicenseStageOperation;
exports.LicenseStageOperationResults = LicenseStageOperationResults;
exports.LicenseStageOperationResult = LicenseStageOperationResult;
exports.$licenses = $licenses;
exports.$licenseStages = $licenseStages;
exports.$downgrade = $downgrade;
