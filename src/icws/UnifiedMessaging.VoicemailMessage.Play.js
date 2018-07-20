/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var UnifiedMessaging = require('./UnifiedMessaging');
var Common = require('./Common');

var $start = (function(){
    function startPlayOperationMessage(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof startPlayOperationMessage.params)) {
            try {
                params = new startPlayOperationMessage.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: startPlayOperationMessage.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(startPlayOperationMessage.method, startPlayOperationMessage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(startPlayOperationMessage, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/unified-messaging/{unifiedMessageId}/voicemail-message/play/start', enumerable: true }
    });

    startPlayOperationMessage.params = (function(){
        _util.inherits(startPlayOperationMessage_params, _util.RequestParams);

        function startPlayOperationMessage_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, unifiedMessageId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'unifiedMessageId')) {
                throw new Error('`properties.template` is missing required property: `unifiedMessageId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof UnifiedMessaging.UnifiedMessagePlayOperationRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: UnifiedMessaging.UnifiedMessagePlayOperationRequest');
            }

            startPlayOperationMessage_params._super.constructor.apply(this, arguments);
        }

        return startPlayOperationMessage_params;
    })();

    return Object.create(null, {
        startPlayOperationMessage: { value: startPlayOperationMessage, enumerable: true }
    });
})();

var $stop = (function(){
    function stopPlayOperationMessage(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof stopPlayOperationMessage.params)) {
            try {
                params = new stopPlayOperationMessage.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: stopPlayOperationMessage.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(stopPlayOperationMessage.method, stopPlayOperationMessage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(stopPlayOperationMessage, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/unified-messaging/{unifiedMessageId}/voicemail-message/play/stop', enumerable: true }
    });

    stopPlayOperationMessage.params = (function(){
        _util.inherits(stopPlayOperationMessage_params, _util.RequestParams);

        function stopPlayOperationMessage_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, unifiedMessageId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'unifiedMessageId')) {
                throw new Error('`properties.template` is missing required property: `unifiedMessageId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            stopPlayOperationMessage_params._super.constructor.apply(this, arguments);
        }

        return stopPlayOperationMessage_params;
    })();

    return Object.create(null, {
        stopPlayOperationMessage: { value: stopPlayOperationMessage, enumerable: true }
    });
})();

exports.$start = $start;
exports.$stop = $stop;
