/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $commit = (function(){
    function commitAll(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof commitAll.params)) {
            try {
                params = new commitAll.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: commitAll.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(commitAll.method, commitAll.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(commitAll, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/all/commit', enumerable: true }
    });

    commitAll.params = (function(){
        _util.inherits(commitAll_params, _util.RequestParams);

        function commitAll_params(properties) {
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

            commitAll_params._super.constructor.apply(this, arguments);
        }

        return commitAll_params;
    })();

    return Object.create(null, {
        commitAll: { value: commitAll, enumerable: true }
    });
})();

var $clear = (function(){
    function clearAll(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof clearAll.params)) {
            try {
                params = new clearAll.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: clearAll.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(clearAll.method, clearAll.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(clearAll, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/all/clear', enumerable: true }
    });

    clearAll.params = (function(){
        _util.inherits(clearAll_params, _util.RequestParams);

        function clearAll_params(properties) {
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

            clearAll_params._super.constructor.apply(this, arguments);
        }

        return clearAll_params;
    })();

    return Object.create(null, {
        clearAll: { value: clearAll, enumerable: true }
    });
})();

var $cancel = (function(){
    function cancelAll(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof cancelAll.params)) {
            try {
                params = new cancelAll.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: cancelAll.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(cancelAll.method, cancelAll.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(cancelAll, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/all/cancel', enumerable: true }
    });

    cancelAll.params = (function(){
        _util.inherits(cancelAll_params, _util.RequestParams);

        function cancelAll_params(properties) {
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

            cancelAll_params._super.constructor.apply(this, arguments);
        }

        return cancelAll_params;
    })();

    return Object.create(null, {
        cancelAll: { value: cancelAll, enumerable: true }
    });
})();

exports.$commit = $commit;
exports.$clear = $clear;
exports.$cancel = $cancel;
