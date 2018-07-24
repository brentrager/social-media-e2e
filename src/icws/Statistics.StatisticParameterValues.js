/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Statistics = require('./Statistics');
var Common = require('./Common');

var $queries = (function(){
    function queryStatisticParameterValues(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof queryStatisticParameterValues.params)) {
            try {
                params = new queryStatisticParameterValues.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: queryStatisticParameterValues.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Statistics.ParameterValueQueryResults) ? o : new Statistics.ParameterValueQueryResults(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(queryStatisticParameterValues.method, queryStatisticParameterValues.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(queryStatisticParameterValues, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/statistics/statistic-parameter-values/queries', enumerable: true }
    });

    queryStatisticParameterValues.params = (function(){
        _util.inherits(queryStatisticParameterValues_params, _util.RequestParams);

        function queryStatisticParameterValues_params(properties) {
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
            if (!(properties.content instanceof Statistics.ParameterValueQuery)) {
                throw new TypeError('`properties.content` value does not match the expected type: Statistics.ParameterValueQuery');
            }

            queryStatisticParameterValues_params._super.constructor.apply(this, arguments);
        }

        return queryStatisticParameterValues_params;
    })();

    return Object.create(null, {
        queryStatisticParameterValues: { value: queryStatisticParameterValues, enumerable: true }
    });
})();

var $chainedParametersValidator = (function(){
    function validateChainedParameters(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof validateChainedParameters.params)) {
            try {
                params = new validateChainedParameters.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: validateChainedParameters.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Statistics.ValidatedParameterValueResults) ? o : new Statistics.ValidatedParameterValueResults(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(validateChainedParameters.method, validateChainedParameters.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(validateChainedParameters, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/statistics/statistic-parameter-values/chained-parameters-validator', enumerable: true }
    });

    validateChainedParameters.params = (function(){
        _util.inherits(validateChainedParameters_params, _util.RequestParams);

        function validateChainedParameters_params(properties) {
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
            if (!(properties.content instanceof Statistics.ChainedParameterValueQuery)) {
                throw new TypeError('`properties.content` value does not match the expected type: Statistics.ChainedParameterValueQuery');
            }

            validateChainedParameters_params._super.constructor.apply(this, arguments);
        }

        return validateChainedParameters_params;
    })();

    return Object.create(null, {
        validateChainedParameters: { value: validateChainedParameters, enumerable: true }
    });
})();

exports.$queries = $queries;
exports.$chainedParametersValidator = $chainedParametersValidator;
