/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $station = (function(){
    function createStationConnectionSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createStationConnectionSubscription.params)) {
            try {
                params = new createStationConnectionSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createStationConnectionSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createStationConnectionSubscription.method, createStationConnectionSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createStationConnectionSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/connection/station', enumerable: true }
    });

    createStationConnectionSubscription.params = (function(){
        _util.inherits(createStationConnectionSubscription_params, _util.RequestParams);

        function createStationConnectionSubscription_params(properties) {
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

            createStationConnectionSubscription_params._super.constructor.apply(this, arguments);
        }

        return createStationConnectionSubscription_params;
    })();

    function removeStationConnectionSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof removeStationConnectionSubscription.params)) {
            try {
                params = new removeStationConnectionSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: removeStationConnectionSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(removeStationConnectionSubscription.method, removeStationConnectionSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(removeStationConnectionSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/connection/station', enumerable: true }
    });

    removeStationConnectionSubscription.params = (function(){
        _util.inherits(removeStationConnectionSubscription_params, _util.RequestParams);

        function removeStationConnectionSubscription_params(properties) {
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

            removeStationConnectionSubscription_params._super.constructor.apply(this, arguments);
        }

        return removeStationConnectionSubscription_params;
    })();

    return Object.create(null, {
        createStationConnectionSubscription: { value: createStationConnectionSubscription, enumerable: true },
        removeStationConnectionSubscription: { value: removeStationConnectionSubscription, enumerable: true }
    });
})();

exports.$station = $station;
