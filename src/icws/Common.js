/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');

var SortDirection = (function(){
    var instanceCache = {};
    function SortDirection(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:common:sortDirection' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(SortDirection, _util.EnumValue);

    Object.defineProperties(SortDirection, {
        'Ascending': { value: new SortDirection(0, 'Ascending'), enumerable: true },
        'Descending': { value: new SortDirection(1, 'Descending'), enumerable: true }
    });

    Object.defineProperty(SortDirection, '__type', { value: 'urn:inin.com:common:sortDirection' });

    _typemap['urn:inin.com:common:sortDirection'] = SortDirection;

    return SortDirection;
}());

var Error = (function(){
    var hasProps = false;

    function Error() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:common:error' });
        }

        Error._super.constructor.apply(this, arguments);
    }
    _util.inherits(Error, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Error.prototype, 'errorId', {
            get: function() { return this.__prop_errorId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Error.errorId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_errorId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Error.prototype, 'errorCode', {
            get: function() { return this.__prop_errorCode; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Error.errorCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_errorCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(Error.prototype, 'message', {
            get: function() { return this.__prop_message; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Error.message, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_message = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Error, '__type', { value: 'urn:inin.com:common:error' });

    Object.defineProperty(Error, '__propInfo', {
        get: function() {
            var pi = {
                'errorId': { required: false, nullable: false },
                'errorCode': { required: false, nullable: false },
                'message': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:common:error'] = Error;

    return Error;
}());

var EditablePhoneNumber = (function(){
    var hasProps = false;

    function EditablePhoneNumber() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:common:editablePhoneNumber' });
        }

        EditablePhoneNumber._super.constructor.apply(this, arguments);
    }
    _util.inherits(EditablePhoneNumber, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EditablePhoneNumber.prototype, 'baseNumber', {
            get: function() { return this.__prop_baseNumber; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for EditablePhoneNumber.baseNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_baseNumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(EditablePhoneNumber.prototype, 'extension', {
            get: function() { return this.__prop_extension; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for EditablePhoneNumber.extension, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_extension = value;
            },
            enumerable: true
        });

        Object.defineProperty(EditablePhoneNumber.prototype, 'autoDialable', {
            get: function() { return this.__prop_autoDialable; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for EditablePhoneNumber.autoDialable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_autoDialable = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EditablePhoneNumber, '__type', { value: 'urn:inin.com:common:editablePhoneNumber' });

    Object.defineProperty(EditablePhoneNumber, '__propInfo', {
        get: function() {
            var pi = {
                'baseNumber': { required: false, nullable: false },
                'extension': { required: false, nullable: false },
                'autoDialable': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:common:editablePhoneNumber'] = EditablePhoneNumber;

    return EditablePhoneNumber;
}());

var PhoneNumber = (function(){
    var hasProps = false;

    function PhoneNumber() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:common:phoneNumber' });
        }

        PhoneNumber._super.constructor.apply(this, arguments);
    }
    _util.inherits(PhoneNumber, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PhoneNumber.prototype, 'standardizedNumber', {
            get: function() { return this.__prop_standardizedNumber; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PhoneNumber.standardizedNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_standardizedNumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumber.prototype, 'displayString', {
            get: function() { return this.__prop_displayString; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PhoneNumber.displayString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayString = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumber.prototype, 'dialString', {
            get: function() { return this.__prop_dialString; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PhoneNumber.dialString, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dialString = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumber.prototype, 'numberInfo', {
            get: function() { return this.__prop_numberInfo; },
            set: function(value) {
                if (!(value instanceof EditablePhoneNumber || value === void 0)) {
                    try {
                        value = new EditablePhoneNumber(value);
                    } catch (e) {
                        throw new TypeError('Error setting PhoneNumber.numberInfo: ' + e.message);
                    }
                }

                this.__prop_numberInfo = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumber.prototype, 'editNumber', {
            get: function() { return this.__prop_editNumber; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PhoneNumber.editNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_editNumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(PhoneNumber.prototype, 'dialable', {
            get: function() { return this.__prop_dialable; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PhoneNumber.dialable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dialable = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PhoneNumber, '__type', { value: 'urn:inin.com:common:phoneNumber' });

    Object.defineProperty(PhoneNumber, '__propInfo', {
        get: function() {
            var pi = {
                'standardizedNumber': { required: true, nullable: false },
                'displayString': { required: true, nullable: false },
                'dialString': { required: false, nullable: false },
                'numberInfo': { required: false, nullable: false },
                'editNumber': { required: false, nullable: false },
                'dialable': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:common:phoneNumber'] = PhoneNumber;

    return PhoneNumber;
}());

var AsyncOperationAcceptedResponse = (function(){
    var hasProps = false;

    function AsyncOperationAcceptedResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:common:asyncOperationAcceptedResponse' });
        }

        AsyncOperationAcceptedResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(AsyncOperationAcceptedResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AsyncOperationAcceptedResponse.prototype, 'requestId', {
            get: function() { return this.__prop_requestId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AsyncOperationAcceptedResponse.requestId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_requestId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AsyncOperationAcceptedResponse, '__type', { value: 'urn:inin.com:common:asyncOperationAcceptedResponse' });

    Object.defineProperty(AsyncOperationAcceptedResponse, '__propInfo', {
        get: function() {
            var pi = {
                'requestId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:common:asyncOperationAcceptedResponse'] = AsyncOperationAcceptedResponse;

    return AsyncOperationAcceptedResponse;
}());

var FeatureInfo = (function(){
    var hasProps = false;

    function FeatureInfo() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:common:featureInfo' });
        }

        FeatureInfo._super.constructor.apply(this, arguments);
    }
    _util.inherits(FeatureInfo, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FeatureInfo.prototype, 'featureId', {
            get: function() { return this.__prop_featureId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for FeatureInfo.featureId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_featureId = value;
            },
            enumerable: true
        });

        Object.defineProperty(FeatureInfo.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for FeatureInfo.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FeatureInfo, '__type', { value: 'urn:inin.com:common:featureInfo' });

    Object.defineProperty(FeatureInfo, '__propInfo', {
        get: function() {
            var pi = {
                'featureId': { required: true, nullable: false },
                'version': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:common:featureInfo'] = FeatureInfo;

    return FeatureInfo;
}());

var FeatureInfos = (function(){
    var hasProps = false;

    function FeatureInfos() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:common:featureInfos' });
        }

        FeatureInfos._super.constructor.apply(this, arguments);
    }
    _util.inherits(FeatureInfos, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FeatureInfos.prototype, 'featureInfoList', {
            get: function() { return this.__prop_featureInfoList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FeatureInfo); }))) {
                    try {
                        value = value.map(function(item){ return new FeatureInfo(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FeatureInfos.featureInfoList: ' + e.message);
                    }
                }

                this.__prop_featureInfoList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FeatureInfos, '__type', { value: 'urn:inin.com:common:featureInfos' });

    Object.defineProperty(FeatureInfos, '__propInfo', {
        get: function() {
            var pi = {
                'featureInfoList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:common:featureInfos'] = FeatureInfos;

    return FeatureInfos;
}());

var MissingPropertyError = (function(){
    var hasProps = false;

    function MissingPropertyError() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:common:missingPropertyError', enumerable: true });
        }

        MissingPropertyError._super.constructor.apply(this, arguments);
    }
    _util.inherits(MissingPropertyError, Error);

    function defineProps() {
        Object.defineProperty(MissingPropertyError.prototype, 'propertyName', {
            get: function() { return this.__prop_propertyName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for MissingPropertyError.propertyName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_propertyName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MissingPropertyError, '__type', { value: 'urn:inin.com:common:missingPropertyError' });

    Object.defineProperty(MissingPropertyError, '__propInfo', {
        get: function() {
            var pi = {
                'propertyName': { required: false, nullable: false }
            };
            if (Error.__propInfo) { _util.extend(pi, Error.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:common:missingPropertyError'] = MissingPropertyError;

    return MissingPropertyError;
}());

var InvalidPropertyError = (function(){
    var hasProps = false;

    function InvalidPropertyError() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:common:invalidPropertyError', enumerable: true });
        }

        InvalidPropertyError._super.constructor.apply(this, arguments);
    }
    _util.inherits(InvalidPropertyError, Error);

    function defineProps() {
        Object.defineProperty(InvalidPropertyError.prototype, 'propertyName', {
            get: function() { return this.__prop_propertyName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for InvalidPropertyError.propertyName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_propertyName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InvalidPropertyError, '__type', { value: 'urn:inin.com:common:invalidPropertyError' });

    Object.defineProperty(InvalidPropertyError, '__propInfo', {
        get: function() {
            var pi = {
                'propertyName': { required: false, nullable: false }
            };
            if (Error.__propInfo) { _util.extend(pi, Error.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:common:invalidPropertyError'] = InvalidPropertyError;

    return InvalidPropertyError;
}());

exports.SortDirection = SortDirection;
exports.Error = Error;
exports.MissingPropertyError = MissingPropertyError;
exports.InvalidPropertyError = InvalidPropertyError;
exports.EditablePhoneNumber = EditablePhoneNumber;
exports.PhoneNumber = PhoneNumber;
exports.AsyncOperationAcceptedResponse = AsyncOperationAcceptedResponse;
exports.FeatureInfo = FeatureInfo;
exports.FeatureInfos = FeatureInfos;
