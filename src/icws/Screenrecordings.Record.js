/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');
var Recordings = require('./Recordings');

var $start = (function(){
    function startScreenRecording(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof startScreenRecording.params)) {
            try {
                params = new startScreenRecording.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: startScreenRecording.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['202'] = function(o){ return (o instanceof Common.AsyncOperationAcceptedResponse) ? o : new Common.AsyncOperationAcceptedResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(startScreenRecording.method, startScreenRecording.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(startScreenRecording, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/screenrecordings/record/start/{recordedUserId}', enumerable: true }
    });

    startScreenRecording.params = (function(){
        _util.inherits(startScreenRecording_params, _util.RequestParams);

        function startScreenRecording_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordedUserId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordedUserId')) {
                throw new Error('`properties.template` is missing required property: `recordedUserId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            startScreenRecording_params._super.constructor.apply(this, arguments);
        }

        return startScreenRecording_params;
    })();

    return Object.create(null, {
        startScreenRecording: { value: startScreenRecording, enumerable: true }
    });
})();

var $stop = (function(){
    function stopScreenRecording(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof stopScreenRecording.params)) {
            try {
                params = new stopScreenRecording.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: stopScreenRecording.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['202'] = function(o){ return (o instanceof Common.AsyncOperationAcceptedResponse) ? o : new Common.AsyncOperationAcceptedResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(stopScreenRecording.method, stopScreenRecording.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(stopScreenRecording, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/screenrecordings/record/stop/{recordedUserId}', enumerable: true }
    });

    stopScreenRecording.params = (function(){
        _util.inherits(stopScreenRecording_params, _util.RequestParams);

        function stopScreenRecording_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordedUserId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordedUserId')) {
                throw new Error('`properties.template` is missing required property: `recordedUserId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Recordings.RecordingIdList)) {
                throw new TypeError('`properties.content` value does not match the expected type: Recordings.RecordingIdList');
            }

            stopScreenRecording_params._super.constructor.apply(this, arguments);
        }

        return stopScreenRecording_params;
    })();

    return Object.create(null, {
        stopScreenRecording: { value: stopScreenRecording, enumerable: true }
    });
})();

var $pause = (function(){
    function pauseScreenRecordings(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof pauseScreenRecordings.params)) {
            try {
                params = new pauseScreenRecordings.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: pauseScreenRecordings.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['202'] = function(o){ return (o instanceof Common.AsyncOperationAcceptedResponse) ? o : new Common.AsyncOperationAcceptedResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(pauseScreenRecordings.method, pauseScreenRecordings.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(pauseScreenRecordings, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/screenrecordings/record/pause/{recordedUserId}', enumerable: true }
    });

    pauseScreenRecordings.params = (function(){
        _util.inherits(pauseScreenRecordings_params, _util.RequestParams);

        function pauseScreenRecordings_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordedUserId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordedUserId')) {
                throw new Error('`properties.template` is missing required property: `recordedUserId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            pauseScreenRecordings_params._super.constructor.apply(this, arguments);
        }

        return pauseScreenRecordings_params;
    })();

    return Object.create(null, {
        pauseScreenRecordings: { value: pauseScreenRecordings, enumerable: true }
    });
})();

var $resume = (function(){
    function resumeScreenRecordings(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof resumeScreenRecordings.params)) {
            try {
                params = new resumeScreenRecordings.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: resumeScreenRecordings.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['202'] = function(o){ return (o instanceof Common.AsyncOperationAcceptedResponse) ? o : new Common.AsyncOperationAcceptedResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(resumeScreenRecordings.method, resumeScreenRecordings.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(resumeScreenRecordings, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/screenrecordings/record/resume/{recordedUserId}', enumerable: true }
    });

    resumeScreenRecordings.params = (function(){
        _util.inherits(resumeScreenRecordings_params, _util.RequestParams);

        function resumeScreenRecordings_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordedUserId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordedUserId')) {
                throw new Error('`properties.template` is missing required property: `recordedUserId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            resumeScreenRecordings_params._super.constructor.apply(this, arguments);
        }

        return resumeScreenRecordings_params;
    })();

    return Object.create(null, {
        resumeScreenRecordings: { value: resumeScreenRecordings, enumerable: true }
    });
})();

exports.$start = $start;
exports.$stop = $stop;
exports.$pause = $pause;
exports.$resume = $resume;
