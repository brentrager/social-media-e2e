/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var HandlerNotification = (function(){
    var hasProps = false;

    function HandlerNotification() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:system:handlerNotification' });
        }

        HandlerNotification._super.constructor.apply(this, arguments);
    }
    _util.inherits(HandlerNotification, _util.DataContract);

    function defineProps() {
        Object.defineProperty(HandlerNotification.prototype, 'objectId', {
            get: function() { return this.__prop_objectId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for HandlerNotification.objectId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_objectId = value;
            },
            enumerable: true
        });

        Object.defineProperty(HandlerNotification.prototype, 'eventId', {
            get: function() { return this.__prop_eventId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for HandlerNotification.eventId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_eventId = value;
            },
            enumerable: true
        });

        Object.defineProperty(HandlerNotification.prototype, 'data', {
            get: function() { return this.__prop_data; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for HandlerNotification.data, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_data = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(HandlerNotification, '__type', { value: 'urn:inin.com:system:handlerNotification' });

    Object.defineProperty(HandlerNotification, '__propInfo', {
        get: function() {
            var pi = {
                'objectId': { required: true, nullable: false },
                'eventId': { required: true, nullable: false },
                'data': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:system:handlerNotification'] = HandlerNotification;

    return HandlerNotification;
}());

var HandlerSentNotificationsSubscription = (function(){
    var hasProps = false;

    function HandlerSentNotificationsSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:system:handlerSentNotificationsSubscription' });
        }

        HandlerSentNotificationsSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(HandlerSentNotificationsSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(HandlerSentNotificationsSubscription.prototype, 'headers', {
            get: function() { return this.__prop_headers; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof HandlerSentNotificationHeaders); }))) {
                    try {
                        value = value.map(function(item){ return new HandlerSentNotificationHeaders(item); });
                    } catch (e) {
                        throw new TypeError('Error setting HandlerSentNotificationsSubscription.headers: ' + e.message);
                    }
                }

                this.__prop_headers = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(HandlerSentNotificationsSubscription, '__type', { value: 'urn:inin.com:system:handlerSentNotificationsSubscription' });

    Object.defineProperty(HandlerSentNotificationsSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'headers': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:system:handlerSentNotificationsSubscription'] = HandlerSentNotificationsSubscription;

    return HandlerSentNotificationsSubscription;
}());

var HandlerSentNotificationHeaders = (function(){
    var hasProps = false;

    function HandlerSentNotificationHeaders() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:system:handlerSentNotificationHeaders' });
        }

        HandlerSentNotificationHeaders._super.constructor.apply(this, arguments);
    }
    _util.inherits(HandlerSentNotificationHeaders, _util.DataContract);

    function defineProps() {
        Object.defineProperty(HandlerSentNotificationHeaders.prototype, 'objectId', {
            get: function() { return this.__prop_objectId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for HandlerSentNotificationHeaders.objectId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_objectId = value;
            },
            enumerable: true
        });

        Object.defineProperty(HandlerSentNotificationHeaders.prototype, 'eventIds', {
            get: function() { return this.__prop_eventIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for HandlerSentNotificationHeaders.eventIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_eventIds = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(HandlerSentNotificationHeaders, '__type', { value: 'urn:inin.com:system:handlerSentNotificationHeaders' });

    Object.defineProperty(HandlerSentNotificationHeaders, '__propInfo', {
        get: function() {
            var pi = {
                'objectId': { required: true, nullable: false },
                'eventIds': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:system:handlerSentNotificationHeaders'] = HandlerSentNotificationHeaders;

    return HandlerSentNotificationHeaders;
}());

var InteractiveUpdateProviderRequest = (function(){
    var hasProps = false;

    function InteractiveUpdateProviderRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:system:interactiveUpdateProviderRequest' });
        }

        InteractiveUpdateProviderRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractiveUpdateProviderRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractiveUpdateProviderRequest.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractiveUpdateProviderRequest.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractiveUpdateProviderRequest.prototype, 'mac', {
            get: function() { return this.__prop_mac; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for InteractiveUpdateProviderRequest.mac, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mac = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractiveUpdateProviderRequest, '__type', { value: 'urn:inin.com:system:interactiveUpdateProviderRequest' });

    Object.defineProperty(InteractiveUpdateProviderRequest, '__propInfo', {
        get: function() {
            var pi = {
                'value': { required: true, nullable: false },
                'mac': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:system:interactiveUpdateProviderRequest'] = InteractiveUpdateProviderRequest;

    return InteractiveUpdateProviderRequest;
}());

var HandlerSentNotificationMessage = (function(){
    var hasProps = false;

    function HandlerSentNotificationMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:system:handlerSentNotificationMessage', enumerable: true });
        }

        HandlerSentNotificationMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(HandlerSentNotificationMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(HandlerSentNotificationMessage.prototype, 'objectId', {
            get: function() { return this.__prop_objectId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for HandlerSentNotificationMessage.objectId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_objectId = value;
            },
            enumerable: true
        });

        Object.defineProperty(HandlerSentNotificationMessage.prototype, 'eventId', {
            get: function() { return this.__prop_eventId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for HandlerSentNotificationMessage.eventId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_eventId = value;
            },
            enumerable: true
        });

        Object.defineProperty(HandlerSentNotificationMessage.prototype, 'data', {
            get: function() { return this.__prop_data; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for HandlerSentNotificationMessage.data, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_data = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(HandlerSentNotificationMessage, '__type', { value: 'urn:inin.com:system:handlerSentNotificationMessage' });

    Object.defineProperty(HandlerSentNotificationMessage, '__propInfo', {
        get: function() {
            var pi = {
                'objectId': { required: true, nullable: false },
                'eventId': { required: true, nullable: false },
                'data': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:system:handlerSentNotificationMessage'] = HandlerSentNotificationMessage;

    return HandlerSentNotificationMessage;
}());

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
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(sendHandlerNotification.method, sendHandlerNotification.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(sendHandlerNotification, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/system/handler-notification', enumerable: true }
    });

    sendHandlerNotification.params = (function(){
        _util.inherits(sendHandlerNotification_params, _util.RequestParams);

        function sendHandlerNotification_params(properties) {
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
            if (!(properties.content instanceof HandlerNotification)) {
                throw new TypeError('`properties.content` value does not match the expected type: System.HandlerNotification');
            }

            sendHandlerNotification_params._super.constructor.apply(this, arguments);
        }

        return sendHandlerNotification_params;
    })();

    return Object.create(null, {
        sendHandlerNotification: { value: sendHandlerNotification, enumerable: true }
    });
})();

exports.HandlerSentNotificationMessage = HandlerSentNotificationMessage;
exports.HandlerNotification = HandlerNotification;
exports.HandlerSentNotificationsSubscription = HandlerSentNotificationsSubscription;
exports.HandlerSentNotificationHeaders = HandlerSentNotificationHeaders;
exports.InteractiveUpdateProviderRequest = InteractiveUpdateProviderRequest;
exports.$handlerNotification = $handlerNotification;
