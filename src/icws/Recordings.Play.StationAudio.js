/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $start = (function(){
    function startStationAudioPlayback(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof startStationAudioPlayback.params)) {
            try {
                params = new startStationAudioPlayback.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: startStationAudioPlayback.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['202'] = function(o){ return (o instanceof Common.AsyncOperationAcceptedResponse) ? o : new Common.AsyncOperationAcceptedResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(startStationAudioPlayback.method, startStationAudioPlayback.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(startStationAudioPlayback, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/recordings/play/station-audio/start/{recordingId}', enumerable: true }
    });

    startStationAudioPlayback.params = (function(){
        _util.inherits(startStationAudioPlayback_params, _util.RequestParams);

        function startStationAudioPlayback_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordingId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordingId')) {
                throw new Error('`properties.template` is missing required property: `recordingId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            startStationAudioPlayback_params._super.constructor.apply(this, arguments);
        }

        return startStationAudioPlayback_params;
    })();

    return Object.create(null, {
        startStationAudioPlayback: { value: startStationAudioPlayback, enumerable: true }
    });
})();

var $stop = (function(){
    function stopStationAudioPlayback(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof stopStationAudioPlayback.params)) {
            try {
                params = new stopStationAudioPlayback.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: stopStationAudioPlayback.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(stopStationAudioPlayback.method, stopStationAudioPlayback.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(stopStationAudioPlayback, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/recordings/play/station-audio/stop/{playbackInteractionId}', enumerable: true }
    });

    stopStationAudioPlayback.params = (function(){
        _util.inherits(stopStationAudioPlayback_params, _util.RequestParams);

        function stopStationAudioPlayback_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, playbackInteractionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'playbackInteractionId')) {
                throw new Error('`properties.template` is missing required property: `playbackInteractionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            stopStationAudioPlayback_params._super.constructor.apply(this, arguments);
        }

        return stopStationAudioPlayback_params;
    })();

    return Object.create(null, {
        stopStationAudioPlayback: { value: stopStationAudioPlayback, enumerable: true }
    });
})();

exports.$start = $start;
exports.$stop = $stop;
