/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration_InteractionAnalyzer = require('./Configuration.InteractionAnalyzer');
var Configuration = require('./Configuration');
var Common = require('./Common');

var $keywords = (function(){
    function updateKeyword(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateKeyword.params)) {
            try {
                params = new updateKeyword.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateKeyword.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.SubObjectSet) ? o : new Configuration.SubObjectSet(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateKeyword.method, updateKeyword.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateKeyword, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/keyword-sets/{id}/keywords', enumerable: true }
    });

    updateKeyword.params = (function(){
        _util.inherits(updateKeyword_params, _util.RequestParams);

        function updateKeyword_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration_InteractionAnalyzer.KeywordsBulkUpdate)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.InteractionAnalyzer.KeywordsBulkUpdate');
            }

            updateKeyword_params._super.constructor.apply(this, arguments);
        }

        return updateKeyword_params;
    })();

    return Object.create(null, {
        updateKeyword: { value: updateKeyword, enumerable: true }
    });
})();

var $previewKeywordRuntime = (function(){
    function previewKeywordRuntime(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof previewKeywordRuntime.params)) {
            try {
                params = new previewKeywordRuntime.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: previewKeywordRuntime.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_InteractionAnalyzer.PreviewKeywordRuntimeResult) ? o : new Configuration_InteractionAnalyzer.PreviewKeywordRuntimeResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(previewKeywordRuntime.method, previewKeywordRuntime.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(previewKeywordRuntime, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/keyword-sets/preview-keyword-runtime', enumerable: true }
    });

    previewKeywordRuntime.params = (function(){
        _util.inherits(previewKeywordRuntime_params, _util.RequestParams);

        function previewKeywordRuntime_params(properties) {
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
            if (properties.query === void 0) {
                throw new Error('`properties.query` is undefined, which means the following required Query param(s) will be missing: keywordName, language, userPronunciations, antiPronunciations, userWords, userAntiWords');
            }
            if (!_util.hasProp(properties.query, 'keywordName')) {
                throw new Error('`properties.query` is missing required property: `keywordName`');
            }
            if (!_util.hasProp(properties.query, 'language')) {
                throw new Error('`properties.query` is missing required property: `language`');
            }
            if (!_util.hasProp(properties.query, 'userPronunciations')) {
                throw new Error('`properties.query` is missing required property: `userPronunciations`');
            }
            if (!_util.hasProp(properties.query, 'antiPronunciations')) {
                throw new Error('`properties.query` is missing required property: `antiPronunciations`');
            }
            if (!_util.hasProp(properties.query, 'userWords')) {
                throw new Error('`properties.query` is missing required property: `userWords`');
            }
            if (!_util.hasProp(properties.query, 'userAntiWords')) {
                throw new Error('`properties.query` is missing required property: `userAntiWords`');
            }

            previewKeywordRuntime_params._super.constructor.apply(this, arguments);
        }

        return previewKeywordRuntime_params;
    })();

    return Object.create(null, {
        previewKeywordRuntime: { value: previewKeywordRuntime, enumerable: true }
    });
})();

exports.$keywords = $keywords;
exports.$previewKeywordRuntime = $previewKeywordRuntime;
