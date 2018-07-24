/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $record = (function(){
    function recordName(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof recordName.params)) {
            try {
                params = new recordName.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: recordName.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(recordName.method, recordName.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(recordName, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/name/record', enumerable: true }
    });

    recordName.params = (function(){
        _util.inherits(recordName_params, _util.RequestParams);

        function recordName_params(properties) {
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

            recordName_params._super.constructor.apply(this, arguments);
        }

        return recordName_params;
    })();

    return Object.create(null, {
        recordName: { value: recordName, enumerable: true }
    });
})();

var $commit = (function(){
    function commitName(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof commitName.params)) {
            try {
                params = new commitName.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: commitName.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(commitName.method, commitName.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(commitName, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/name/commit', enumerable: true }
    });

    commitName.params = (function(){
        _util.inherits(commitName_params, _util.RequestParams);

        function commitName_params(properties) {
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

            commitName_params._super.constructor.apply(this, arguments);
        }

        return commitName_params;
    })();

    return Object.create(null, {
        commitName: { value: commitName, enumerable: true }
    });
})();

var $preview = (function(){
    function previewName(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof previewName.params)) {
            try {
                params = new previewName.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: previewName.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(previewName.method, previewName.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(previewName, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/name/preview', enumerable: true }
    });

    previewName.params = (function(){
        _util.inherits(previewName_params, _util.RequestParams);

        function previewName_params(properties) {
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

            previewName_params._super.constructor.apply(this, arguments);
        }

        return previewName_params;
    })();

    return Object.create(null, {
        previewName: { value: previewName, enumerable: true }
    });
})();

var $clear = (function(){
    function clearName(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof clearName.params)) {
            try {
                params = new clearName.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: clearName.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(clearName.method, clearName.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(clearName, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/name/clear', enumerable: true }
    });

    clearName.params = (function(){
        _util.inherits(clearName_params, _util.RequestParams);

        function clearName_params(properties) {
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

            clearName_params._super.constructor.apply(this, arguments);
        }

        return clearName_params;
    })();

    return Object.create(null, {
        clearName: { value: clearName, enumerable: true }
    });
})();

var $cancel = (function(){
    function cancelName(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof cancelName.params)) {
            try {
                params = new cancelName.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: cancelName.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(cancelName.method, cancelName.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(cancelName, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/name/cancel', enumerable: true }
    });

    cancelName.params = (function(){
        _util.inherits(cancelName_params, _util.RequestParams);

        function cancelName_params(properties) {
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

            cancelName_params._super.constructor.apply(this, arguments);
        }

        return cancelName_params;
    })();

    return Object.create(null, {
        cancelName: { value: cancelName, enumerable: true }
    });
})();

exports.$record = $record;
exports.$commit = $commit;
exports.$preview = $preview;
exports.$clear = $clear;
exports.$cancel = $cancel;
