/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $dataVersions = (function(){
    function updateDataVersionsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateDataVersionsSubscription.params)) {
            try {
                params = new updateDataVersionsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateDataVersionsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateDataVersionsSubscription.method, updateDataVersionsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateDataVersionsSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/wfm-data/data-versions', enumerable: true }
    });

    updateDataVersionsSubscription.params = (function(){
        _util.inherits(updateDataVersionsSubscription_params, _util.RequestParams);

        function updateDataVersionsSubscription_params(properties) {
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

            updateDataVersionsSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateDataVersionsSubscription_params;
    })();

    function deleteDataVersionsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteDataVersionsSubscription.params)) {
            try {
                params = new deleteDataVersionsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteDataVersionsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteDataVersionsSubscription.method, deleteDataVersionsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteDataVersionsSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/wfm-data/data-versions', enumerable: true }
    });

    deleteDataVersionsSubscription.params = (function(){
        _util.inherits(deleteDataVersionsSubscription_params, _util.RequestParams);

        function deleteDataVersionsSubscription_params(properties) {
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

            deleteDataVersionsSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteDataVersionsSubscription_params;
    })();

    return Object.create(null, {
        updateDataVersionsSubscription: { value: updateDataVersionsSubscription, enumerable: true },
        deleteDataVersionsSubscription: { value: deleteDataVersionsSubscription, enumerable: true }
    });
})();

exports.$dataVersions = $dataVersions;
