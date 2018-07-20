/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var SubscriptionState = (function(){
    var instanceCache = {};
    function SubscriptionState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:messaging:subscriptionState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(SubscriptionState, _util.EnumValue);

    Object.defineProperties(SubscriptionState, {
        'None': { value: new SubscriptionState(0, 'None'), enumerable: true },
        'Normal': { value: new SubscriptionState(1, 'Normal'), enumerable: true },
        'Suspended': { value: new SubscriptionState(2, 'Suspended'), enumerable: true },
        'Faulted': { value: new SubscriptionState(3, 'Faulted'), enumerable: true }
    });

    Object.defineProperty(SubscriptionState, '__type', { value: 'urn:inin.com:messaging:subscriptionState' });

    _typemap['urn:inin.com:messaging:subscriptionState'] = SubscriptionState;

    return SubscriptionState;
}());

var Message = (function(){
    var hasProps = false;

    function Message() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:messaging:message' });
        }

        Message._super.constructor.apply(this, arguments);
    }
    _util.inherits(Message, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Message.prototype, 'isDelta', {
            get: function() { return this.__prop_isDelta; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for Message.isDelta, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isDelta = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Message, '__type', { value: 'urn:inin.com:messaging:message' });

    Object.defineProperty(Message, '__propInfo', {
        get: function() {
            var pi = {
                'isDelta': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:messaging:message'] = Message;

    return Message;
}());

var AsyncOperationCompletedMessage = (function(){
    var hasProps = false;

    function AsyncOperationCompletedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:messaging:asyncOperationCompletedMessage', enumerable: true });
        }

        AsyncOperationCompletedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AsyncOperationCompletedMessage, Message);

    function defineProps() {
        Object.defineProperty(AsyncOperationCompletedMessage.prototype, 'requestId', {
            get: function() { return this.__prop_requestId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AsyncOperationCompletedMessage.requestId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_requestId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AsyncOperationCompletedMessage.prototype, 'error', {
            get: function() { return this.__prop_error; },
            set: function(value) {
                if (!(value instanceof Common.Error || value === null)) {
                    try {
                        value = new Common.Error(value);
                    } catch (e) {
                        throw new TypeError('Error setting AsyncOperationCompletedMessage.error: ' + e.message);
                    }
                }

                this.__prop_error = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AsyncOperationCompletedMessage, '__type', { value: 'urn:inin.com:messaging:asyncOperationCompletedMessage' });

    Object.defineProperty(AsyncOperationCompletedMessage, '__propInfo', {
        get: function() {
            var pi = {
                'requestId': { required: true, nullable: false },
                'error': { required: true, nullable: true }
            };
            if (Message.__propInfo) { _util.extend(pi, Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:messaging:asyncOperationCompletedMessage'] = AsyncOperationCompletedMessage;

    return AsyncOperationCompletedMessage;
}());

var SubscriptionStateMessage = (function(){
    var hasProps = false;

    function SubscriptionStateMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:messaging:subscriptionStateMessage', enumerable: true });
        }

        SubscriptionStateMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(SubscriptionStateMessage, Message);

    function defineProps() {
        Object.defineProperty(SubscriptionStateMessage.prototype, 'state', {
            get: function() { return this.__prop_state; },
            set: function(value) {
                if (!(value instanceof SubscriptionState)) {
                    try {
                        value = new SubscriptionState(value);
                    } catch (e) {
                        throw new TypeError('Error setting SubscriptionStateMessage.state: ' + e.message);
                    }
                }

                this.__prop_state = value;
            },
            enumerable: true
        });

        Object.defineProperty(SubscriptionStateMessage.prototype, 'error', {
            get: function() { return this.__prop_error; },
            set: function(value) {
                if (!(value instanceof Common.Error || value === void 0)) {
                    try {
                        value = new Common.Error(value);
                    } catch (e) {
                        throw new TypeError('Error setting SubscriptionStateMessage.error: ' + e.message);
                    }
                }

                this.__prop_error = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SubscriptionStateMessage, '__type', { value: 'urn:inin.com:messaging:subscriptionStateMessage' });

    Object.defineProperty(SubscriptionStateMessage, '__propInfo', {
        get: function() {
            var pi = {
                'state': { required: true, nullable: false },
                'error': { required: false, nullable: false }
            };
            if (Message.__propInfo) { _util.extend(pi, Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:messaging:subscriptionStateMessage'] = SubscriptionStateMessage;

    return SubscriptionStateMessage;
}());

var MultipleSubscriptionMessage = (function(){
    var hasProps = false;

    function MultipleSubscriptionMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:messaging:multipleSubscriptionMessage', enumerable: true });
        }

        MultipleSubscriptionMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(MultipleSubscriptionMessage, Message);

    function defineProps() {
        Object.defineProperty(MultipleSubscriptionMessage.prototype, 'subscriptionId', {
            get: function() { return this.__prop_subscriptionId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for MultipleSubscriptionMessage.subscriptionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subscriptionId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MultipleSubscriptionMessage, '__type', { value: 'urn:inin.com:messaging:multipleSubscriptionMessage' });

    Object.defineProperty(MultipleSubscriptionMessage, '__propInfo', {
        get: function() {
            var pi = {
                'subscriptionId': { required: false, nullable: false }
            };
            if (Message.__propInfo) { _util.extend(pi, Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:messaging:multipleSubscriptionMessage'] = MultipleSubscriptionMessage;

    return MultipleSubscriptionMessage;
}());

var $messages = (function(){
    function getMessages(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getMessages.params)) {
            try {
                params = new getMessages.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getMessages.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return o.map(function(item){ return (item instanceof Message) ? item : new Message(item); }); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getMessages.method, getMessages.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getMessages, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/messages', enumerable: true }
    });

    getMessages.params = (function(){
        _util.inherits(getMessages_params, _util.RequestParams);

        function getMessages_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }

            getMessages_params._super.constructor.apply(this, arguments);
        }

        return getMessages_params;
    })();

    var EventSource = (function(){
        _util.inherits(EventSource, _util.IcwsEventSource);

        function EventSource(params, callbacks) {
            /*jshint validthis:true */
            if (!(params instanceof EventSource.params)) {
                try {
                    params = new EventSource.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: EventSource.params');
                }
            }
            if (!_util.isObject(callbacks)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "message": function(message){ ... })');
            }
            _util.IcwsEventSource.call(this, '/icws/{sessionId}/messaging/messages', params, callbacks, Message);
        }

        return EventSource;
    })();

    EventSource.params = (function(){
        _util.inherits(EventSource_params, _util.RequestParams);

        function EventSource_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }

            EventSource_params._super.constructor.apply(this, arguments);
        }

        return EventSource_params;
    })();

    return Object.create(null, {
        getMessages: { value: getMessages, enumerable: true },
        EventSource: { value: EventSource, enumerable: true }
    });
})();

var $heartbeat = (function(){
    function sendHeartbeat(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof sendHeartbeat.params)) {
            try {
                params = new sendHeartbeat.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: sendHeartbeat.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(sendHeartbeat.method, sendHeartbeat.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(sendHeartbeat, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/heartbeat', enumerable: true }
    });

    sendHeartbeat.params = (function(){
        _util.inherits(sendHeartbeat_params, _util.RequestParams);

        function sendHeartbeat_params(properties) {
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

            sendHeartbeat_params._super.constructor.apply(this, arguments);
        }

        return sendHeartbeat_params;
    })();

    return Object.create(null, {
        sendHeartbeat: { value: sendHeartbeat, enumerable: true }
    });
})();

exports.SubscriptionState = SubscriptionState;
exports.Message = Message;
exports.AsyncOperationCompletedMessage = AsyncOperationCompletedMessage;
exports.SubscriptionStateMessage = SubscriptionStateMessage;
exports.MultipleSubscriptionMessage = MultipleSubscriptionMessage;
exports.$messages = $messages;
exports.$heartbeat = $heartbeat;
