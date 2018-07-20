/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $record = (function(){
    function recordFollowMe(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof recordFollowMe.params)) {
            try {
                params = new recordFollowMe.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: recordFollowMe.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(recordFollowMe.method, recordFollowMe.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(recordFollowMe, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/followme/record', enumerable: true }
    });

    recordFollowMe.params = (function(){
        _util.inherits(recordFollowMe_params, _util.RequestParams);

        function recordFollowMe_params(properties) {
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

            recordFollowMe_params._super.constructor.apply(this, arguments);
        }

        return recordFollowMe_params;
    })();

    return Object.create(null, {
        recordFollowMe: { value: recordFollowMe, enumerable: true }
    });
})();

var $commit = (function(){
    function commitFollowMe(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof commitFollowMe.params)) {
            try {
                params = new commitFollowMe.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: commitFollowMe.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(commitFollowMe.method, commitFollowMe.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(commitFollowMe, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/followme/commit', enumerable: true }
    });

    commitFollowMe.params = (function(){
        _util.inherits(commitFollowMe_params, _util.RequestParams);

        function commitFollowMe_params(properties) {
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

            commitFollowMe_params._super.constructor.apply(this, arguments);
        }

        return commitFollowMe_params;
    })();

    return Object.create(null, {
        commitFollowMe: { value: commitFollowMe, enumerable: true }
    });
})();

var $preview = (function(){
    function previewFollowMe(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof previewFollowMe.params)) {
            try {
                params = new previewFollowMe.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: previewFollowMe.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(previewFollowMe.method, previewFollowMe.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(previewFollowMe, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/followme/preview', enumerable: true }
    });

    previewFollowMe.params = (function(){
        _util.inherits(previewFollowMe_params, _util.RequestParams);

        function previewFollowMe_params(properties) {
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

            previewFollowMe_params._super.constructor.apply(this, arguments);
        }

        return previewFollowMe_params;
    })();

    return Object.create(null, {
        previewFollowMe: { value: previewFollowMe, enumerable: true }
    });
})();

var $clear = (function(){
    function clearFollowMe(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof clearFollowMe.params)) {
            try {
                params = new clearFollowMe.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: clearFollowMe.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(clearFollowMe.method, clearFollowMe.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(clearFollowMe, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/followme/clear', enumerable: true }
    });

    clearFollowMe.params = (function(){
        _util.inherits(clearFollowMe_params, _util.RequestParams);

        function clearFollowMe_params(properties) {
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

            clearFollowMe_params._super.constructor.apply(this, arguments);
        }

        return clearFollowMe_params;
    })();

    return Object.create(null, {
        clearFollowMe: { value: clearFollowMe, enumerable: true }
    });
})();

var $cancel = (function(){
    function cancelFollowMe(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof cancelFollowMe.params)) {
            try {
                params = new cancelFollowMe.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: cancelFollowMe.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(cancelFollowMe.method, cancelFollowMe.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(cancelFollowMe, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/followme/cancel', enumerable: true }
    });

    cancelFollowMe.params = (function(){
        _util.inherits(cancelFollowMe_params, _util.RequestParams);

        function cancelFollowMe_params(properties) {
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

            cancelFollowMe_params._super.constructor.apply(this, arguments);
        }

        return cancelFollowMe_params;
    })();

    return Object.create(null, {
        cancelFollowMe: { value: cancelFollowMe, enumerable: true }
    });
})();

exports.$record = $record;
exports.$commit = $commit;
exports.$preview = $preview;
exports.$clear = $clear;
exports.$cancel = $cancel;
