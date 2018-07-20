/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Interactions = require('./Interactions');
var Queues = require('./Queues');
var Common = require('./Common');

var CallbackDispositionType = (function(){
    var instanceCache = {};
    function CallbackDispositionType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.callback:callbackDispositionType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(CallbackDispositionType, _util.EnumValue);

    Object.defineProperties(CallbackDispositionType, {
        'Success': { value: new CallbackDispositionType(0, 'Success'), enumerable: true },
        'Failure': { value: new CallbackDispositionType(1, 'Failure'), enumerable: true },
        'Retry': { value: new CallbackDispositionType(2, 'Retry'), enumerable: true }
    });

    Object.defineProperty(CallbackDispositionType, '__type', { value: 'urn:inin.com:interactions.callback:callbackDispositionType' });

    _typemap['urn:inin.com:interactions.callback:callbackDispositionType'] = CallbackDispositionType;

    return CallbackDispositionType;
}());

var DispositionParameters = (function(){
    var hasProps = false;

    function DispositionParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.callback:dispositionParameters' });
        }

        DispositionParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(DispositionParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DispositionParameters.prototype, 'disposition', {
            get: function() { return this.__prop_disposition; },
            set: function(value) {
                if (!(value instanceof CallbackDispositionType)) {
                    try {
                        value = new CallbackDispositionType(value);
                    } catch (e) {
                        throw new TypeError('Error setting DispositionParameters.disposition: ' + e.message);
                    }
                }

                this.__prop_disposition = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DispositionParameters, '__type', { value: 'urn:inin.com:interactions.callback:dispositionParameters' });

    Object.defineProperty(DispositionParameters, '__propInfo', {
        get: function() {
            var pi = {
                'disposition': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.callback:dispositionParameters'] = DispositionParameters;

    return DispositionParameters;
}());

var CallbackMessage = (function(){
    var hasProps = false;

    function CallbackMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.callback:callbackMessage', enumerable: true });
        }

        CallbackMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(CallbackMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(CallbackMessage.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CallbackMessage.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(CallbackMessage.prototype, 'target', {
            get: function() { return this.__prop_target; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CallbackMessage.target, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_target = value;
            },
            enumerable: true
        });

        Object.defineProperty(CallbackMessage.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CallbackMessage.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(CallbackMessage.prototype, 'subject', {
            get: function() { return this.__prop_subject; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CallbackMessage.subject, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subject = value;
            },
            enumerable: true
        });

        Object.defineProperty(CallbackMessage.prototype, 'attempts', {
            get: function() { return this.__prop_attempts; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for CallbackMessage.attempts, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attempts = value;
            },
            enumerable: true
        });

        Object.defineProperty(CallbackMessage.prototype, 'maxAttempts', {
            get: function() { return this.__prop_maxAttempts; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for CallbackMessage.maxAttempts, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxAttempts = value;
            },
            enumerable: true
        });

        Object.defineProperty(CallbackMessage.prototype, 'associatedCallId', {
            get: function() { return this.__prop_associatedCallId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CallbackMessage.associatedCallId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_associatedCallId = value;
            },
            enumerable: true
        });

        Object.defineProperty(CallbackMessage.prototype, 'snoozed', {
            get: function() { return this.__prop_snoozed; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for CallbackMessage.snoozed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_snoozed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CallbackMessage, '__type', { value: 'urn:inin.com:interactions.callback:callbackMessage' });

    Object.defineProperty(CallbackMessage, '__propInfo', {
        get: function() {
            var pi = {
                'interactionId': { required: true, nullable: false },
                'target': { required: true, nullable: false },
                'name': { required: false, nullable: false },
                'subject': { required: true, nullable: false },
                'attempts': { required: false, nullable: false },
                'maxAttempts': { required: false, nullable: false },
                'associatedCallId': { required: false, nullable: false },
                'snoozed': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.callback:callbackMessage'] = CallbackMessage;

    return CallbackMessage;
}());

var CreateCallbackResponseCallParameters = (function(){
    var hasProps = false;

    function CreateCallbackResponseCallParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.callback:createCallbackResponseCallParameters', enumerable: true });
        }

        CreateCallbackResponseCallParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateCallbackResponseCallParameters, Interactions.CreateInteractionParameters);

    function defineProps() {
        Object.defineProperty(CreateCallbackResponseCallParameters.prototype, 'parentInteractionId', {
            get: function() { return this.__prop_parentInteractionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreateCallbackResponseCallParameters.parentInteractionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_parentInteractionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateCallbackResponseCallParameters.prototype, 'target', {
            get: function() { return this.__prop_target; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreateCallbackResponseCallParameters.target, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_target = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateCallbackResponseCallParameters.prototype, 'workgroup', {
            get: function() { return this.__prop_workgroup; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateCallbackResponseCallParameters.workgroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroup = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateCallbackResponseCallParameters.prototype, 'callMadeStage', {
            get: function() { return this.__prop_callMadeStage; },
            set: function(value) {
                if (!(value instanceof Interactions.CallMadeStorageTypes || value === void 0)) {
                    try {
                        value = new Interactions.CallMadeStorageTypes(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateCallbackResponseCallParameters.callMadeStage: ' + e.message);
                    }
                }

                this.__prop_callMadeStage = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateCallbackResponseCallParameters.prototype, 'accountCodeId', {
            get: function() { return this.__prop_accountCodeId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateCallbackResponseCallParameters.accountCodeId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accountCodeId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateCallbackResponseCallParameters, '__type', { value: 'urn:inin.com:interactions.callback:createCallbackResponseCallParameters' });

    Object.defineProperty(CreateCallbackResponseCallParameters, '__propInfo', {
        get: function() {
            var pi = {
                'parentInteractionId': { required: true, nullable: false },
                'target': { required: true, nullable: false },
                'workgroup': { required: false, nullable: false },
                'callMadeStage': { required: false, nullable: false },
                'accountCodeId': { required: false, nullable: false }
            };
            if (Interactions.CreateInteractionParameters.__propInfo) { _util.extend(pi, Interactions.CreateInteractionParameters.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.callback:createCallbackResponseCallParameters'] = CreateCallbackResponseCallParameters;

    return CreateCallbackResponseCallParameters;
}());

var CreateCallbackParameters = (function(){
    var hasProps = false;

    function CreateCallbackParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.callback:createCallbackParameters', enumerable: true });
        }

        CreateCallbackParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateCallbackParameters, Interactions.CreateInteractionParameters);

    function defineProps() {
        Object.defineProperty(CreateCallbackParameters.prototype, 'target', {
            get: function() { return this.__prop_target; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreateCallbackParameters.target, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_target = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateCallbackParameters.prototype, 'targetQueue', {
            get: function() { return this.__prop_targetQueue; },
            set: function(value) {
                if (!(value instanceof Queues.QueueId)) {
                    try {
                        value = new Queues.QueueId(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateCallbackParameters.targetQueue: ' + e.message);
                    }
                }

                this.__prop_targetQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateCallbackParameters.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateCallbackParameters.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateCallbackParameters.prototype, 'subject', {
            get: function() { return this.__prop_subject; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreateCallbackParameters.subject, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subject = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateCallbackParameters, '__type', { value: 'urn:inin.com:interactions.callback:createCallbackParameters' });

    Object.defineProperty(CreateCallbackParameters, '__propInfo', {
        get: function() {
            var pi = {
                'target': { required: true, nullable: false },
                'targetQueue': { required: true, nullable: false },
                'name': { required: false, nullable: false },
                'subject': { required: true, nullable: false }
            };
            if (Interactions.CreateInteractionParameters.__propInfo) { _util.extend(pi, Interactions.CreateInteractionParameters.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.callback:createCallbackParameters'] = CreateCallbackParameters;

    return CreateCallbackParameters;
}());

var $disposition = (function(){
    function callbackDisposition(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof callbackDisposition.params)) {
            try {
                params = new callbackDisposition.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: callbackDisposition.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(callbackDisposition.method, callbackDisposition.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(callbackDisposition, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/callback/disposition', enumerable: true }
    });

    callbackDisposition.params = (function(){
        _util.inherits(callbackDisposition_params, _util.RequestParams);

        function callbackDisposition_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof DispositionParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Callback.DispositionParameters');
            }

            callbackDisposition_params._super.constructor.apply(this, arguments);
        }

        return callbackDisposition_params;
    })();

    return Object.create(null, {
        callbackDisposition: { value: callbackDisposition, enumerable: true }
    });
})();

exports.CallbackDispositionType = CallbackDispositionType;
exports.CallbackMessage = CallbackMessage;
exports.CreateCallbackResponseCallParameters = CreateCallbackResponseCallParameters;
exports.CreateCallbackParameters = CreateCallbackParameters;
exports.DispositionParameters = DispositionParameters;
exports.$disposition = $disposition;
