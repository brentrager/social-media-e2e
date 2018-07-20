/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var WidgetsRegistrationResponse = (function(){
    var hasProps = false;

    function WidgetsRegistrationResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:widgets:widgetsRegistrationResponse' });
        }

        WidgetsRegistrationResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(WidgetsRegistrationResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WidgetsRegistrationResponse.prototype, 'json', {
            get: function() { return this.__prop_json; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for WidgetsRegistrationResponse.json, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_json = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WidgetsRegistrationResponse, '__type', { value: 'urn:inin.com:widgets:widgetsRegistrationResponse' });

    Object.defineProperty(WidgetsRegistrationResponse, '__propInfo', {
        get: function() {
            var pi = {
                'json': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:widgets:widgetsRegistrationResponse'] = WidgetsRegistrationResponse;

    return WidgetsRegistrationResponse;
}());

var HandlerNotificationRequest = (function(){
    var hasProps = false;

    function HandlerNotificationRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:widgets:handlerNotificationRequest' });
        }

        HandlerNotificationRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(HandlerNotificationRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(HandlerNotificationRequest.prototype, 'eventId', {
            get: function() { return this.__prop_eventId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for HandlerNotificationRequest.eventId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_eventId = value;
            },
            enumerable: true
        });

        Object.defineProperty(HandlerNotificationRequest.prototype, 'response', {
            get: function() { return this.__prop_response; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for HandlerNotificationRequest.response, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_response = value;
            },
            enumerable: true
        });

        Object.defineProperty(HandlerNotificationRequest.prototype, 'data', {
            get: function() { return this.__prop_data; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for HandlerNotificationRequest.data, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_data = value;
            },
            enumerable: true
        });

        Object.defineProperty(HandlerNotificationRequest.prototype, 'timeout', {
            get: function() { return this.__prop_timeout; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for HandlerNotificationRequest.timeout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeout = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(HandlerNotificationRequest, '__type', { value: 'urn:inin.com:widgets:handlerNotificationRequest' });

    Object.defineProperty(HandlerNotificationRequest, '__propInfo', {
        get: function() {
            var pi = {
                'eventId': { required: true, nullable: false },
                'response': { required: false, nullable: false },
                'data': { required: false, nullable: false },
                'timeout': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:widgets:handlerNotificationRequest'] = HandlerNotificationRequest;

    return HandlerNotificationRequest;
}());

var HandlerNotificationResponse = (function(){
    var hasProps = false;

    function HandlerNotificationResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:widgets:handlerNotificationResponse' });
        }

        HandlerNotificationResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(HandlerNotificationResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(HandlerNotificationResponse.prototype, 'executeResult', {
            get: function() { return this.__prop_executeResult; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for HandlerNotificationResponse.executeResult, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_executeResult = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(HandlerNotificationResponse, '__type', { value: 'urn:inin.com:widgets:handlerNotificationResponse' });

    Object.defineProperty(HandlerNotificationResponse, '__propInfo', {
        get: function() {
            var pi = {
                'executeResult': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:widgets:handlerNotificationResponse'] = HandlerNotificationResponse;

    return HandlerNotificationResponse;
}());

var $registration = (function(){
    function registration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof registration.params)) {
            try {
                params = new registration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: registration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['403'] = dc['500'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(registration.method, registration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(registration, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/widgets/registration/{id}', enumerable: true }
    });

    registration.params = (function(){
        _util.inherits(registration_params, _util.RequestParams);

        function registration_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: id');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }

            registration_params._super.constructor.apply(this, arguments);
        }

        return registration_params;
    })();

    return Object.create(null, {
        registration: { value: registration, enumerable: true }
    });
})();

var $handlerNotification = (function(){
    function sendHandlerNotification(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof sendHandlerNotification.params)) {
            try {
                params = new sendHandlerNotification.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: sendHandlerNotification.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['403'] = dc['500'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(sendHandlerNotification.method, sendHandlerNotification.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(sendHandlerNotification, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/widgets/handler-notification', enumerable: true }
    });

    sendHandlerNotification.params = (function(){
        _util.inherits(sendHandlerNotification_params, _util.RequestParams);

        function sendHandlerNotification_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (!(properties.content instanceof HandlerNotificationRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Widgets.HandlerNotificationRequest');
            }

            sendHandlerNotification_params._super.constructor.apply(this, arguments);
        }

        return sendHandlerNotification_params;
    })();

    return Object.create(null, {
        sendHandlerNotification: { value: sendHandlerNotification, enumerable: true }
    });
})();

exports.WidgetsRegistrationResponse = WidgetsRegistrationResponse;
exports.HandlerNotificationRequest = HandlerNotificationRequest;
exports.HandlerNotificationResponse = HandlerNotificationResponse;
exports.$registration = $registration;
exports.$handlerNotification = $handlerNotification;
