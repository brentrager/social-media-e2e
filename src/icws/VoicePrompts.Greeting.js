/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var VoicePrompts = require('./VoicePrompts');
var Common = require('./Common');

var $activation = (function(){
    function setGreetingActivation(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof setGreetingActivation.params)) {
            try {
                params = new setGreetingActivation.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: setGreetingActivation.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(setGreetingActivation.method, setGreetingActivation.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(setGreetingActivation, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/greeting/activation', enumerable: true }
    });

    setGreetingActivation.params = (function(){
        _util.inherits(setGreetingActivation_params, _util.RequestParams);

        function setGreetingActivation_params(properties) {
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

            setGreetingActivation_params._super.constructor.apply(this, arguments);
        }

        return setGreetingActivation_params;
    })();

    function getGreetingActivation(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getGreetingActivation.params)) {
            try {
                params = new getGreetingActivation.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getGreetingActivation.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof VoicePrompts.VoicePromptActivation) ? o : new VoicePrompts.VoicePromptActivation(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getGreetingActivation.method, getGreetingActivation.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getGreetingActivation, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/greeting/activation', enumerable: true }
    });

    getGreetingActivation.params = (function(){
        _util.inherits(getGreetingActivation_params, _util.RequestParams);

        function getGreetingActivation_params(properties) {
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

            getGreetingActivation_params._super.constructor.apply(this, arguments);
        }

        return getGreetingActivation_params;
    })();

    return Object.create(null, {
        setGreetingActivation: { value: setGreetingActivation, enumerable: true },
        getGreetingActivation: { value: getGreetingActivation, enumerable: true }
    });
})();

var $record = (function(){
    function recordGreeting(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof recordGreeting.params)) {
            try {
                params = new recordGreeting.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: recordGreeting.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(recordGreeting.method, recordGreeting.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(recordGreeting, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/greeting/record', enumerable: true }
    });

    recordGreeting.params = (function(){
        _util.inherits(recordGreeting_params, _util.RequestParams);

        function recordGreeting_params(properties) {
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

            recordGreeting_params._super.constructor.apply(this, arguments);
        }

        return recordGreeting_params;
    })();

    return Object.create(null, {
        recordGreeting: { value: recordGreeting, enumerable: true }
    });
})();

var $commit = (function(){
    function commitGreeting(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof commitGreeting.params)) {
            try {
                params = new commitGreeting.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: commitGreeting.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(commitGreeting.method, commitGreeting.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(commitGreeting, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/greeting/commit', enumerable: true }
    });

    commitGreeting.params = (function(){
        _util.inherits(commitGreeting_params, _util.RequestParams);

        function commitGreeting_params(properties) {
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

            commitGreeting_params._super.constructor.apply(this, arguments);
        }

        return commitGreeting_params;
    })();

    return Object.create(null, {
        commitGreeting: { value: commitGreeting, enumerable: true }
    });
})();

var $preview = (function(){
    function previewGreeting(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof previewGreeting.params)) {
            try {
                params = new previewGreeting.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: previewGreeting.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(previewGreeting.method, previewGreeting.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(previewGreeting, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/greeting/preview', enumerable: true }
    });

    previewGreeting.params = (function(){
        _util.inherits(previewGreeting_params, _util.RequestParams);

        function previewGreeting_params(properties) {
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

            previewGreeting_params._super.constructor.apply(this, arguments);
        }

        return previewGreeting_params;
    })();

    return Object.create(null, {
        previewGreeting: { value: previewGreeting, enumerable: true }
    });
})();

var $clear = (function(){
    function clearGreeting(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof clearGreeting.params)) {
            try {
                params = new clearGreeting.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: clearGreeting.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(clearGreeting.method, clearGreeting.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(clearGreeting, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/greeting/clear', enumerable: true }
    });

    clearGreeting.params = (function(){
        _util.inherits(clearGreeting_params, _util.RequestParams);

        function clearGreeting_params(properties) {
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

            clearGreeting_params._super.constructor.apply(this, arguments);
        }

        return clearGreeting_params;
    })();

    return Object.create(null, {
        clearGreeting: { value: clearGreeting, enumerable: true }
    });
})();

var $cancel = (function(){
    function cancelGreeting(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof cancelGreeting.params)) {
            try {
                params = new cancelGreeting.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: cancelGreeting.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(cancelGreeting.method, cancelGreeting.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(cancelGreeting, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/voice-prompts/greeting/cancel', enumerable: true }
    });

    cancelGreeting.params = (function(){
        _util.inherits(cancelGreeting_params, _util.RequestParams);

        function cancelGreeting_params(properties) {
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

            cancelGreeting_params._super.constructor.apply(this, arguments);
        }

        return cancelGreeting_params;
    })();

    return Object.create(null, {
        cancelGreeting: { value: cancelGreeting, enumerable: true }
    });
})();

exports.$activation = $activation;
exports.$record = $record;
exports.$commit = $commit;
exports.$preview = $preview;
exports.$clear = $clear;
exports.$cancel = $cancel;
