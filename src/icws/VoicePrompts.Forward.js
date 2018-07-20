/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $record = (function(){
    function recordForward(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof recordForward.params)) {
            try {
                params = new recordForward.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: recordForward.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(recordForward.method, recordForward.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(recordForward, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/forward/record', enumerable: true }
    });

    recordForward.params = (function(){
        _util.inherits(recordForward_params, _util.RequestParams);

        function recordForward_params(properties) {
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

            recordForward_params._super.constructor.apply(this, arguments);
        }

        return recordForward_params;
    })();

    return Object.create(null, {
        recordForward: { value: recordForward, enumerable: true }
    });
})();

var $commit = (function(){
    function commitForward(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof commitForward.params)) {
            try {
                params = new commitForward.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: commitForward.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(commitForward.method, commitForward.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(commitForward, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/forward/commit', enumerable: true }
    });

    commitForward.params = (function(){
        _util.inherits(commitForward_params, _util.RequestParams);

        function commitForward_params(properties) {
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

            commitForward_params._super.constructor.apply(this, arguments);
        }

        return commitForward_params;
    })();

    return Object.create(null, {
        commitForward: { value: commitForward, enumerable: true }
    });
})();

var $preview = (function(){
    function previewForward(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof previewForward.params)) {
            try {
                params = new previewForward.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: previewForward.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(previewForward.method, previewForward.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(previewForward, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/forward/preview', enumerable: true }
    });

    previewForward.params = (function(){
        _util.inherits(previewForward_params, _util.RequestParams);

        function previewForward_params(properties) {
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

            previewForward_params._super.constructor.apply(this, arguments);
        }

        return previewForward_params;
    })();

    return Object.create(null, {
        previewForward: { value: previewForward, enumerable: true }
    });
})();

var $clear = (function(){
    function clearForward(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof clearForward.params)) {
            try {
                params = new clearForward.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: clearForward.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(clearForward.method, clearForward.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(clearForward, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/forward/clear', enumerable: true }
    });

    clearForward.params = (function(){
        _util.inherits(clearForward_params, _util.RequestParams);

        function clearForward_params(properties) {
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

            clearForward_params._super.constructor.apply(this, arguments);
        }

        return clearForward_params;
    })();

    return Object.create(null, {
        clearForward: { value: clearForward, enumerable: true }
    });
})();

var $cancel = (function(){
    function cancelForward(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof cancelForward.params)) {
            try {
                params = new cancelForward.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: cancelForward.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(cancelForward.method, cancelForward.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(cancelForward, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/forward/cancel', enumerable: true }
    });

    cancelForward.params = (function(){
        _util.inherits(cancelForward_params, _util.RequestParams);

        function cancelForward_params(properties) {
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

            cancelForward_params._super.constructor.apply(this, arguments);
        }

        return cancelForward_params;
    })();

    return Object.create(null, {
        cancelForward: { value: cancelForward, enumerable: true }
    });
})();

exports.$record = $record;
exports.$commit = $commit;
exports.$preview = $preview;
exports.$clear = $clear;
exports.$cancel = $cancel;
