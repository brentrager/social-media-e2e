/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var ClientButtonHandlerRequest = (function(){
    var hasProps = false;

    function ClientButtonHandlerRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:clientButtons:clientButtonHandlerRequest' });
        }

        ClientButtonHandlerRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(ClientButtonHandlerRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ClientButtonHandlerRequest.prototype, 'buttonId', {
            get: function() { return this.__prop_buttonId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ClientButtonHandlerRequest.buttonId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_buttonId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ClientButtonHandlerRequest.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ClientButtonHandlerRequest.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ClientButtonHandlerRequest, '__type', { value: 'urn:inin.com:clientButtons:clientButtonHandlerRequest' });

    Object.defineProperty(ClientButtonHandlerRequest, '__propInfo', {
        get: function() {
            var pi = {
                'buttonId': { required: true, nullable: false },
                'interactionId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:clientButtons:clientButtonHandlerRequest'] = ClientButtonHandlerRequest;

    return ClientButtonHandlerRequest;
}());

var $handlerAction = (function(){
    function putClientButtonHandlerAction(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof putClientButtonHandlerAction.params)) {
            try {
                params = new putClientButtonHandlerAction.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: putClientButtonHandlerAction.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(putClientButtonHandlerAction.method, putClientButtonHandlerAction.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(putClientButtonHandlerAction, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/client-buttons/handler-action', enumerable: true }
    });

    putClientButtonHandlerAction.params = (function(){
        _util.inherits(putClientButtonHandlerAction_params, _util.RequestParams);

        function putClientButtonHandlerAction_params(properties) {
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
            if (!(properties.content instanceof ClientButtonHandlerRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: ClientButtons.ClientButtonHandlerRequest');
            }

            putClientButtonHandlerAction_params._super.constructor.apply(this, arguments);
        }

        return putClientButtonHandlerAction_params;
    })();

    return Object.create(null, {
        putClientButtonHandlerAction: { value: putClientButtonHandlerAction, enumerable: true }
    });
})();

exports.ClientButtonHandlerRequest = ClientButtonHandlerRequest;
exports.$handlerAction = $handlerAction;
