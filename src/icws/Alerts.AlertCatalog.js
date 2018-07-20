/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Alerts = require('./Alerts');
var Common = require('./Common');

var $alertSets = (function(){
    function createAlertSet(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createAlertSet.params)) {
            try {
                params = new createAlertSet.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createAlertSet.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Alerts.AlertSetCreated) ? o : new Alerts.AlertSetCreated(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createAlertSet.method, createAlertSet.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createAlertSet, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/alerts/alert-catalog/alert-sets', enumerable: true }
    });

    createAlertSet.params = (function(){
        _util.inherits(createAlertSet_params, _util.RequestParams);

        function createAlertSet_params(properties) {
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
            if (!(properties.content instanceof Alerts.CreateAlertSetParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Alerts.CreateAlertSetParameters');
            }

            createAlertSet_params._super.constructor.apply(this, arguments);
        }

        return createAlertSet_params;
    })();

    function updateAlertSet(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateAlertSet.params)) {
            try {
                params = new updateAlertSet.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAlertSet.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateAlertSet.method, updateAlertSet.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateAlertSet, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/alerts/alert-catalog/alert-sets/{alertSetId}', enumerable: true }
    });

    updateAlertSet.params = (function(){
        _util.inherits(updateAlertSet_params, _util.RequestParams);

        function updateAlertSet_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, alertSetId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'alertSetId')) {
                throw new Error('`properties.template` is missing required property: `alertSetId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Alerts.UpdateAlertSetParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Alerts.UpdateAlertSetParameters');
            }

            updateAlertSet_params._super.constructor.apply(this, arguments);
        }

        return updateAlertSet_params;
    })();

    function deleteAlertSet(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteAlertSet.params)) {
            try {
                params = new deleteAlertSet.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteAlertSet.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteAlertSet.method, deleteAlertSet.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteAlertSet, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/alerts/alert-catalog/alert-sets/{alertSetId}', enumerable: true }
    });

    deleteAlertSet.params = (function(){
        _util.inherits(deleteAlertSet_params, _util.RequestParams);

        function deleteAlertSet_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, alertSetId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'alertSetId')) {
                throw new Error('`properties.template` is missing required property: `alertSetId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteAlertSet_params._super.constructor.apply(this, arguments);
        }

        return deleteAlertSet_params;
    })();

    return Object.create(null, {
        createAlertSet: { value: createAlertSet, enumerable: true },
        updateAlertSet: { value: updateAlertSet, enumerable: true },
        deleteAlertSet: { value: deleteAlertSet, enumerable: true }
    });
})();

exports.$alertSets = $alertSets;
