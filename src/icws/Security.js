/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var PasswordPolicyErrorIdEnum = (function(){
    var instanceCache = {};
    function PasswordPolicyErrorIdEnum(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:security:passwordPolicyErrorIdEnum' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(PasswordPolicyErrorIdEnum, _util.EnumValue);

    Object.defineProperties(PasswordPolicyErrorIdEnum, {
        'Unknown': { value: new PasswordPolicyErrorIdEnum(0, 'Unknown'), enumerable: true },
        'RecentlyUsed': { value: new PasswordPolicyErrorIdEnum(1, 'RecentlyUsed'), enumerable: true },
        'TooYoung': { value: new PasswordPolicyErrorIdEnum(2, 'TooYoung'), enumerable: true },
        'TooShort': { value: new PasswordPolicyErrorIdEnum(3, 'TooShort'), enumerable: true },
        'TooFewUniqueDigits': { value: new PasswordPolicyErrorIdEnum(4, 'TooFewUniqueDigits'), enumerable: true },
        'AllSequentialDigits': { value: new PasswordPolicyErrorIdEnum(5, 'AllSequentialDigits'), enumerable: true },
        'AccountLockedOut': { value: new PasswordPolicyErrorIdEnum(6, 'AccountLockedOut'), enumerable: true },
        'DoesntMatch': { value: new PasswordPolicyErrorIdEnum(7, 'DoesntMatch'), enumerable: true },
        'AccessDenied': { value: new PasswordPolicyErrorIdEnum(8, 'AccessDenied'), enumerable: true },
        'TooFewUppercaseCharacters': { value: new PasswordPolicyErrorIdEnum(9, 'TooFewUppercaseCharacters'), enumerable: true },
        'TooFewLowercaseCharacters': { value: new PasswordPolicyErrorIdEnum(10, 'TooFewLowercaseCharacters'), enumerable: true },
        'TooFewNumericCharacters': { value: new PasswordPolicyErrorIdEnum(11, 'TooFewNumericCharacters'), enumerable: true },
        'TooFewSpecialCharacters': { value: new PasswordPolicyErrorIdEnum(12, 'TooFewSpecialCharacters'), enumerable: true }
    });

    Object.defineProperty(PasswordPolicyErrorIdEnum, '__type', { value: 'urn:inin.com:security:passwordPolicyErrorIdEnum' });

    _typemap['urn:inin.com:security:passwordPolicyErrorIdEnum'] = PasswordPolicyErrorIdEnum;

    return PasswordPolicyErrorIdEnum;
}());

var PasswordPolicyError = (function(){
    var hasProps = false;

    function PasswordPolicyError() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:security:passwordPolicyError' });
        }

        PasswordPolicyError._super.constructor.apply(this, arguments);
    }
    _util.inherits(PasswordPolicyError, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PasswordPolicyError.prototype, 'passwordPolicyErrorId', {
            get: function() { return this.__prop_passwordPolicyErrorId; },
            set: function(value) {
                if (!(value instanceof PasswordPolicyErrorIdEnum)) {
                    try {
                        value = new PasswordPolicyErrorIdEnum(value);
                    } catch (e) {
                        throw new TypeError('Error setting PasswordPolicyError.passwordPolicyErrorId: ' + e.message);
                    }
                }

                this.__prop_passwordPolicyErrorId = value;
            },
            enumerable: true
        });

        Object.defineProperty(PasswordPolicyError.prototype, 'passwordPolicyErrorMsg', {
            get: function() { return this.__prop_passwordPolicyErrorMsg; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PasswordPolicyError.passwordPolicyErrorMsg, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_passwordPolicyErrorMsg = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PasswordPolicyError, '__type', { value: 'urn:inin.com:security:passwordPolicyError' });

    Object.defineProperty(PasswordPolicyError, '__propInfo', {
        get: function() {
            var pi = {
                'passwordPolicyErrorId': { required: true, nullable: false },
                'passwordPolicyErrorMsg': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:security:passwordPolicyError'] = PasswordPolicyError;

    return PasswordPolicyError;
}());

var Password = (function(){
    var hasProps = false;

    function Password() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:security:password' });
        }

        Password._super.constructor.apply(this, arguments);
    }
    _util.inherits(Password, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Password.prototype, 'oldPassword', {
            get: function() { return this.__prop_oldPassword; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Password.oldPassword, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_oldPassword = value;
            },
            enumerable: true
        });

        Object.defineProperty(Password.prototype, 'newPassword', {
            get: function() { return this.__prop_newPassword; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Password.newPassword, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_newPassword = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Password, '__type', { value: 'urn:inin.com:security:password' });

    Object.defineProperty(Password, '__propInfo', {
        get: function() {
            var pi = {
                'oldPassword': { required: true, nullable: false },
                'newPassword': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:security:password'] = Password;

    return Password;
}());

var PasswordError = (function(){
    var hasProps = false;

    function PasswordError() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:security:passwordError', enumerable: true });
        }

        PasswordError._super.constructor.apply(this, arguments);
    }
    _util.inherits(PasswordError, Common.Error);

    function defineProps() {
        Object.defineProperty(PasswordError.prototype, 'passwordErrors', {
            get: function() { return this.__prop_passwordErrors; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PasswordPolicyError); }))) {
                    try {
                        value = value.map(function(item){ return new PasswordPolicyError(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PasswordError.passwordErrors: ' + e.message);
                    }
                }

                this.__prop_passwordErrors = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PasswordError, '__type', { value: 'urn:inin.com:security:passwordError' });

    Object.defineProperty(PasswordError, '__propInfo', {
        get: function() {
            var pi = {
                'passwordErrors': { required: true, nullable: false }
            };
            if (Common.Error.__propInfo) { _util.extend(pi, Common.Error.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:security:passwordError'] = PasswordError;

    return PasswordError;
}());

var $password = (function(){
    function setPassword(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof setPassword.params)) {
            try {
                params = new setPassword.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: setPassword.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(setPassword.method, setPassword.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(setPassword, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/security/password', enumerable: true }
    });

    setPassword.params = (function(){
        _util.inherits(setPassword_params, _util.RequestParams);

        function setPassword_params(properties) {
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
            if (!(properties.content instanceof Password)) {
                throw new TypeError('`properties.content` value does not match the expected type: Security.Password');
            }

            setPassword_params._super.constructor.apply(this, arguments);
        }

        return setPassword_params;
    })();

    return Object.create(null, {
        setPassword: { value: setPassword, enumerable: true }
    });
})();

exports.PasswordPolicyErrorIdEnum = PasswordPolicyErrorIdEnum;
exports.PasswordError = PasswordError;
exports.PasswordPolicyError = PasswordPolicyError;
exports.Password = Password;
exports.$password = $password;
