/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $record = (function(){
    function recordNoAnswer(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof recordNoAnswer.params)) {
            try {
                params = new recordNoAnswer.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: recordNoAnswer.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(recordNoAnswer.method, recordNoAnswer.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(recordNoAnswer, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/noanswer/record', enumerable: true }
    });

    recordNoAnswer.params = (function(){
        _util.inherits(recordNoAnswer_params, _util.RequestParams);

        function recordNoAnswer_params(properties) {
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

            recordNoAnswer_params._super.constructor.apply(this, arguments);
        }

        return recordNoAnswer_params;
    })();

    return Object.create(null, {
        recordNoAnswer: { value: recordNoAnswer, enumerable: true }
    });
})();

var $commit = (function(){
    function commitNoAnswer(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof commitNoAnswer.params)) {
            try {
                params = new commitNoAnswer.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: commitNoAnswer.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(commitNoAnswer.method, commitNoAnswer.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(commitNoAnswer, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/noanswer/commit', enumerable: true }
    });

    commitNoAnswer.params = (function(){
        _util.inherits(commitNoAnswer_params, _util.RequestParams);

        function commitNoAnswer_params(properties) {
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

            commitNoAnswer_params._super.constructor.apply(this, arguments);
        }

        return commitNoAnswer_params;
    })();

    return Object.create(null, {
        commitNoAnswer: { value: commitNoAnswer, enumerable: true }
    });
})();

var $preview = (function(){
    function previewNoAnswer(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof previewNoAnswer.params)) {
            try {
                params = new previewNoAnswer.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: previewNoAnswer.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(previewNoAnswer.method, previewNoAnswer.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(previewNoAnswer, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/noanswer/preview', enumerable: true }
    });

    previewNoAnswer.params = (function(){
        _util.inherits(previewNoAnswer_params, _util.RequestParams);

        function previewNoAnswer_params(properties) {
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

            previewNoAnswer_params._super.constructor.apply(this, arguments);
        }

        return previewNoAnswer_params;
    })();

    return Object.create(null, {
        previewNoAnswer: { value: previewNoAnswer, enumerable: true }
    });
})();

var $clear = (function(){
    function clearNoAnswer(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof clearNoAnswer.params)) {
            try {
                params = new clearNoAnswer.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: clearNoAnswer.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(clearNoAnswer.method, clearNoAnswer.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(clearNoAnswer, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/noanswer/clear', enumerable: true }
    });

    clearNoAnswer.params = (function(){
        _util.inherits(clearNoAnswer_params, _util.RequestParams);

        function clearNoAnswer_params(properties) {
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

            clearNoAnswer_params._super.constructor.apply(this, arguments);
        }

        return clearNoAnswer_params;
    })();

    return Object.create(null, {
        clearNoAnswer: { value: clearNoAnswer, enumerable: true }
    });
})();

var $cancel = (function(){
    function cancelNoAnswer(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof cancelNoAnswer.params)) {
            try {
                params = new cancelNoAnswer.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: cancelNoAnswer.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(cancelNoAnswer.method, cancelNoAnswer.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(cancelNoAnswer, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/noanswer/cancel', enumerable: true }
    });

    cancelNoAnswer.params = (function(){
        _util.inherits(cancelNoAnswer_params, _util.RequestParams);

        function cancelNoAnswer_params(properties) {
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

            cancelNoAnswer_params._super.constructor.apply(this, arguments);
        }

        return cancelNoAnswer_params;
    })();

    return Object.create(null, {
        cancelNoAnswer: { value: cancelNoAnswer, enumerable: true }
    });
})();

exports.$record = $record;
exports.$commit = $commit;
exports.$preview = $preview;
exports.$clear = $clear;
exports.$cancel = $cancel;
