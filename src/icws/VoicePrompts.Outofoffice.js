/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var VoicePrompts = require('./VoicePrompts');
var Common = require('./Common');

var $activation = (function(){
    function setOutOfOfficeActivation(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof setOutOfOfficeActivation.params)) {
            try {
                params = new setOutOfOfficeActivation.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: setOutOfOfficeActivation.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(setOutOfOfficeActivation.method, setOutOfOfficeActivation.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(setOutOfOfficeActivation, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/outofoffice/activation', enumerable: true }
    });

    setOutOfOfficeActivation.params = (function(){
        _util.inherits(setOutOfOfficeActivation_params, _util.RequestParams);

        function setOutOfOfficeActivation_params(properties) {
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
            if (!(properties.content instanceof VoicePrompts.VoicePromptActivation)) {
                throw new TypeError('`properties.content` value does not match the expected type: VoicePrompts.VoicePromptActivation');
            }

            setOutOfOfficeActivation_params._super.constructor.apply(this, arguments);
        }

        return setOutOfOfficeActivation_params;
    })();

    function getOutOfOfficeActivation(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getOutOfOfficeActivation.params)) {
            try {
                params = new getOutOfOfficeActivation.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getOutOfOfficeActivation.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof VoicePrompts.VoicePromptActivation) ? o : new VoicePrompts.VoicePromptActivation(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getOutOfOfficeActivation.method, getOutOfOfficeActivation.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getOutOfOfficeActivation, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/outofoffice/activation', enumerable: true }
    });

    getOutOfOfficeActivation.params = (function(){
        _util.inherits(getOutOfOfficeActivation_params, _util.RequestParams);

        function getOutOfOfficeActivation_params(properties) {
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

            getOutOfOfficeActivation_params._super.constructor.apply(this, arguments);
        }

        return getOutOfOfficeActivation_params;
    })();

    return Object.create(null, {
        setOutOfOfficeActivation: { value: setOutOfOfficeActivation, enumerable: true },
        getOutOfOfficeActivation: { value: getOutOfOfficeActivation, enumerable: true }
    });
})();

var $record = (function(){
    function recordOutOfOffice(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof recordOutOfOffice.params)) {
            try {
                params = new recordOutOfOffice.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: recordOutOfOffice.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(recordOutOfOffice.method, recordOutOfOffice.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(recordOutOfOffice, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/outofoffice/record', enumerable: true }
    });

    recordOutOfOffice.params = (function(){
        _util.inherits(recordOutOfOffice_params, _util.RequestParams);

        function recordOutOfOffice_params(properties) {
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

            recordOutOfOffice_params._super.constructor.apply(this, arguments);
        }

        return recordOutOfOffice_params;
    })();

    return Object.create(null, {
        recordOutOfOffice: { value: recordOutOfOffice, enumerable: true }
    });
})();

var $commit = (function(){
    function commitOutOfOffice(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof commitOutOfOffice.params)) {
            try {
                params = new commitOutOfOffice.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: commitOutOfOffice.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(commitOutOfOffice.method, commitOutOfOffice.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(commitOutOfOffice, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/outofoffice/commit', enumerable: true }
    });

    commitOutOfOffice.params = (function(){
        _util.inherits(commitOutOfOffice_params, _util.RequestParams);

        function commitOutOfOffice_params(properties) {
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

            commitOutOfOffice_params._super.constructor.apply(this, arguments);
        }

        return commitOutOfOffice_params;
    })();

    return Object.create(null, {
        commitOutOfOffice: { value: commitOutOfOffice, enumerable: true }
    });
})();

var $preview = (function(){
    function previewOutOfOffice(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof previewOutOfOffice.params)) {
            try {
                params = new previewOutOfOffice.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: previewOutOfOffice.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(previewOutOfOffice.method, previewOutOfOffice.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(previewOutOfOffice, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/outofoffice/preview', enumerable: true }
    });

    previewOutOfOffice.params = (function(){
        _util.inherits(previewOutOfOffice_params, _util.RequestParams);

        function previewOutOfOffice_params(properties) {
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

            previewOutOfOffice_params._super.constructor.apply(this, arguments);
        }

        return previewOutOfOffice_params;
    })();

    return Object.create(null, {
        previewOutOfOffice: { value: previewOutOfOffice, enumerable: true }
    });
})();

var $clear = (function(){
    function clearOutOfOffice(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof clearOutOfOffice.params)) {
            try {
                params = new clearOutOfOffice.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: clearOutOfOffice.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(clearOutOfOffice.method, clearOutOfOffice.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(clearOutOfOffice, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/outofoffice/clear', enumerable: true }
    });

    clearOutOfOffice.params = (function(){
        _util.inherits(clearOutOfOffice_params, _util.RequestParams);

        function clearOutOfOffice_params(properties) {
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

            clearOutOfOffice_params._super.constructor.apply(this, arguments);
        }

        return clearOutOfOffice_params;
    })();

    return Object.create(null, {
        clearOutOfOffice: { value: clearOutOfOffice, enumerable: true }
    });
})();

var $cancel = (function(){
    function cancelOutOfOffice(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof cancelOutOfOffice.params)) {
            try {
                params = new cancelOutOfOffice.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: cancelOutOfOffice.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(cancelOutOfOffice.method, cancelOutOfOffice.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(cancelOutOfOffice, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/outofoffice/cancel', enumerable: true }
    });

    cancelOutOfOffice.params = (function(){
        _util.inherits(cancelOutOfOffice_params, _util.RequestParams);

        function cancelOutOfOffice_params(properties) {
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

            cancelOutOfOffice_params._super.constructor.apply(this, arguments);
        }

        return cancelOutOfOffice_params;
    })();

    return Object.create(null, {
        cancelOutOfOffice: { value: cancelOutOfOffice, enumerable: true }
    });
})();

exports.$activation = $activation;
exports.$record = $record;
exports.$commit = $commit;
exports.$preview = $preview;
exports.$clear = $clear;
exports.$cancel = $cancel;
