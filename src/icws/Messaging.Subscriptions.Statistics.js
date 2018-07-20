/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Statistics = require('./Statistics');
var Common = require('./Common');

var $statisticCatalog = (function(){
    function updateStatisticCatalogSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateStatisticCatalogSubscription.params)) {
            try {
                params = new updateStatisticCatalogSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateStatisticCatalogSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Statistics.StatisticCatalogSubscriptionResponse) ? o : new Statistics.StatisticCatalogSubscriptionResponse(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateStatisticCatalogSubscription.method, updateStatisticCatalogSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateStatisticCatalogSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/statistics/statistic-catalog', enumerable: true }
    });

    updateStatisticCatalogSubscription.params = (function(){
        _util.inherits(updateStatisticCatalogSubscription_params, _util.RequestParams);

        function updateStatisticCatalogSubscription_params(properties) {
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
            if (!(properties.content instanceof Statistics.StatisticCatalogSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Statistics.StatisticCatalogSubscription');
            }

            updateStatisticCatalogSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateStatisticCatalogSubscription_params;
    })();

    function deleteStatisticCatalogSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteStatisticCatalogSubscription.params)) {
            try {
                params = new deleteStatisticCatalogSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteStatisticCatalogSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteStatisticCatalogSubscription.method, deleteStatisticCatalogSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteStatisticCatalogSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/statistics/statistic-catalog', enumerable: true }
    });

    deleteStatisticCatalogSubscription.params = (function(){
        _util.inherits(deleteStatisticCatalogSubscription_params, _util.RequestParams);

        function deleteStatisticCatalogSubscription_params(properties) {
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

            deleteStatisticCatalogSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteStatisticCatalogSubscription_params;
    })();

    return Object.create(null, {
        updateStatisticCatalogSubscription: { value: updateStatisticCatalogSubscription, enumerable: true },
        deleteStatisticCatalogSubscription: { value: deleteStatisticCatalogSubscription, enumerable: true }
    });
})();

var $statisticValues = (function(){
    function updateStatisticValueSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateStatisticValueSubscription.params)) {
            try {
                params = new updateStatisticValueSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateStatisticValueSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateStatisticValueSubscription.method, updateStatisticValueSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateStatisticValueSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/statistics/statistic-values', enumerable: true }
    });

    updateStatisticValueSubscription.params = (function(){
        _util.inherits(updateStatisticValueSubscription_params, _util.RequestParams);

        function updateStatisticValueSubscription_params(properties) {
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
            if (!(properties.content instanceof Statistics.StatisticValueSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Statistics.StatisticValueSubscription');
            }

            updateStatisticValueSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateStatisticValueSubscription_params;
    })();

    function deleteStatisticValueSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteStatisticValueSubscription.params)) {
            try {
                params = new deleteStatisticValueSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteStatisticValueSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteStatisticValueSubscription.method, deleteStatisticValueSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteStatisticValueSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/statistics/statistic-values', enumerable: true }
    });

    deleteStatisticValueSubscription.params = (function(){
        _util.inherits(deleteStatisticValueSubscription_params, _util.RequestParams);

        function deleteStatisticValueSubscription_params(properties) {
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

            deleteStatisticValueSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteStatisticValueSubscription_params;
    })();

    return Object.create(null, {
        updateStatisticValueSubscription: { value: updateStatisticValueSubscription, enumerable: true },
        deleteStatisticValueSubscription: { value: deleteStatisticValueSubscription, enumerable: true }
    });
})();

var $statisticParameterValues = (function(){
    function updateStatisticParameterValueSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateStatisticParameterValueSubscription.params)) {
            try {
                params = new updateStatisticParameterValueSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateStatisticParameterValueSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateStatisticParameterValueSubscription.method, updateStatisticParameterValueSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateStatisticParameterValueSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/statistics/statistic-parameter-values', enumerable: true }
    });

    updateStatisticParameterValueSubscription.params = (function(){
        _util.inherits(updateStatisticParameterValueSubscription_params, _util.RequestParams);

        function updateStatisticParameterValueSubscription_params(properties) {
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
            if (!(properties.content instanceof Statistics.ChainedParametersSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Statistics.ChainedParametersSubscription');
            }

            updateStatisticParameterValueSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateStatisticParameterValueSubscription_params;
    })();

    function deleteStatisticParameterValueSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteStatisticParameterValueSubscription.params)) {
            try {
                params = new deleteStatisticParameterValueSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteStatisticParameterValueSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteStatisticParameterValueSubscription.method, deleteStatisticParameterValueSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteStatisticParameterValueSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/statistics/statistic-parameter-values', enumerable: true }
    });

    deleteStatisticParameterValueSubscription.params = (function(){
        _util.inherits(deleteStatisticParameterValueSubscription_params, _util.RequestParams);

        function deleteStatisticParameterValueSubscription_params(properties) {
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

            deleteStatisticParameterValueSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteStatisticParameterValueSubscription_params;
    })();

    return Object.create(null, {
        updateStatisticParameterValueSubscription: { value: updateStatisticParameterValueSubscription, enumerable: true },
        deleteStatisticParameterValueSubscription: { value: deleteStatisticParameterValueSubscription, enumerable: true }
    });
})();

exports.$statisticCatalog = $statisticCatalog;
exports.$statisticValues = $statisticValues;
exports.$statisticParameterValues = $statisticParameterValues;
