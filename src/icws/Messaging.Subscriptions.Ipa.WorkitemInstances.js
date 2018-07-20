/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $currentPage = (function(){
    function createCurrentPageSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createCurrentPageSubscription.params)) {
            try {
                params = new createCurrentPageSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createCurrentPageSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['401'] = dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createCurrentPageSubscription.method, createCurrentPageSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createCurrentPageSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/ipa/workitem-instances/{workItemInstanceId}/current-page', enumerable: true }
    });

    createCurrentPageSubscription.params = (function(){
        _util.inherits(createCurrentPageSubscription_params, _util.RequestParams);

        function createCurrentPageSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, workItemInstanceId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'workItemInstanceId')) {
                throw new Error('`properties.template` is missing required property: `workItemInstanceId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            createCurrentPageSubscription_params._super.constructor.apply(this, arguments);
        }

        return createCurrentPageSubscription_params;
    })();

    function deleteCurrentPageSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteCurrentPageSubscription.params)) {
            try {
                params = new deleteCurrentPageSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteCurrentPageSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteCurrentPageSubscription.method, deleteCurrentPageSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteCurrentPageSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/ipa/workitem-instances/{workItemInstanceId}/current-page', enumerable: true }
    });

    deleteCurrentPageSubscription.params = (function(){
        _util.inherits(deleteCurrentPageSubscription_params, _util.RequestParams);

        function deleteCurrentPageSubscription_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, workItemInstanceId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'workItemInstanceId')) {
                throw new Error('`properties.template` is missing required property: `workItemInstanceId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteCurrentPageSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteCurrentPageSubscription_params;
    })();

    return Object.create(null, {
        createCurrentPageSubscription: { value: createCurrentPageSubscription, enumerable: true },
        deleteCurrentPageSubscription: { value: deleteCurrentPageSubscription, enumerable: true }
    });
})();

exports.$currentPage = $currentPage;
