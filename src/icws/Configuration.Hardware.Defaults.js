/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration_Hardware = require('./Configuration.Hardware');
var Common = require('./Common');

var $line = (function(){
    function getDefaults(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDefaults.params)) {
            try {
                params = new getDefaults.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaults.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.Line) ? o : new Configuration_Hardware.Line(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/line', enumerable: true }
    });

    getDefaults.params = (function(){
        _util.inherits(getDefaults_params, _util.RequestParams);

        function getDefaults_params(properties) {
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

            getDefaults_params._super.constructor.apply(this, arguments);
        }

        return getDefaults_params;
    })();

    return Object.create(null, {
        getDefaults: { value: getDefaults, enumerable: true }
    });
})();

var $managedExternalRegistrationDeprecated = (function(){
    function getDefaults(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDefaults.params)) {
            try {
                params = new getDefaults.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaults.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.ManagedExternalRegistrationDeprecated) ? o : new Configuration_Hardware.ManagedExternalRegistrationDeprecated(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/managed-external-registration-deprecated', enumerable: true }
    });

    getDefaults.params = (function(){
        _util.inherits(getDefaults_params, _util.RequestParams);

        function getDefaults_params(properties) {
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

            getDefaults_params._super.constructor.apply(this, arguments);
        }

        return getDefaults_params;
    })();

    return Object.create(null, {
        getDefaults: { value: getDefaults, enumerable: true }
    });
})();

var $managedPhoneDeprecated = (function(){
    function getDefaults(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDefaults.params)) {
            try {
                params = new getDefaults.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaults.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.ManagedPhoneDeprecated) ? o : new Configuration_Hardware.ManagedPhoneDeprecated(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/managed-phone-deprecated', enumerable: true }
    });

    getDefaults.params = (function(){
        _util.inherits(getDefaults_params, _util.RequestParams);

        function getDefaults_params(properties) {
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

            getDefaults_params._super.constructor.apply(this, arguments);
        }

        return getDefaults_params;
    })();

    return Object.create(null, {
        getDefaults: { value: getDefaults, enumerable: true }
    });
})();

var $managedStationDeprecated = (function(){
    function getDefaults(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDefaults.params)) {
            try {
                params = new getDefaults.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaults.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.ManagedStationDeprecated) ? o : new Configuration_Hardware.ManagedStationDeprecated(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/managed-station-deprecated', enumerable: true }
    });

    getDefaults.params = (function(){
        _util.inherits(getDefaults_params, _util.RequestParams);

        function getDefaults_params(properties) {
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

            getDefaults_params._super.constructor.apply(this, arguments);
        }

        return getDefaults_params;
    })();

    return Object.create(null, {
        getDefaults: { value: getDefaults, enumerable: true }
    });
})();

var $managedStationTemplateDeprecated = (function(){
    function getDefaults(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDefaults.params)) {
            try {
                params = new getDefaults.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaults.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.ManagedStationTemplateDeprecated) ? o : new Configuration_Hardware.ManagedStationTemplateDeprecated(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/managed-station-template-deprecated', enumerable: true }
    });

    getDefaults.params = (function(){
        _util.inherits(getDefaults_params, _util.RequestParams);

        function getDefaults_params(properties) {
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

            getDefaults_params._super.constructor.apply(this, arguments);
        }

        return getDefaults_params;
    })();

    return Object.create(null, {
        getDefaults: { value: getDefaults, enumerable: true }
    });
})();

var $recordingBeepTone = (function(){
    function getDefaults(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDefaults.params)) {
            try {
                params = new getDefaults.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaults.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.RecordingBeepTone) ? o : new Configuration_Hardware.RecordingBeepTone(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/recording-beep-tone', enumerable: true }
    });

    getDefaults.params = (function(){
        _util.inherits(getDefaults_params, _util.RequestParams);

        function getDefaults_params(properties) {
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

            getDefaults_params._super.constructor.apply(this, arguments);
        }

        return getDefaults_params;
    })();

    return Object.create(null, {
        getDefaults: { value: getDefaults, enumerable: true }
    });
})();

var $sharedStationDeprecated = (function(){
    function getDefaults(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDefaults.params)) {
            try {
                params = new getDefaults.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaults.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.SharedStationDeprecated) ? o : new Configuration_Hardware.SharedStationDeprecated(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/shared-station-deprecated', enumerable: true }
    });

    getDefaults.params = (function(){
        _util.inherits(getDefaults_params, _util.RequestParams);

        function getDefaults_params(properties) {
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

            getDefaults_params._super.constructor.apply(this, arguments);
        }

        return getDefaults_params;
    })();

    return Object.create(null, {
        getDefaults: { value: getDefaults, enumerable: true }
    });
})();

var $sharedStationTemplateDeprecated = (function(){
    function getDefaults(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDefaults.params)) {
            try {
                params = new getDefaults.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaults.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.SharedStationTemplateDeprecated) ? o : new Configuration_Hardware.SharedStationTemplateDeprecated(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/shared-station-template-deprecated', enumerable: true }
    });

    getDefaults.params = (function(){
        _util.inherits(getDefaults_params, _util.RequestParams);

        function getDefaults_params(properties) {
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

            getDefaults_params._super.constructor.apply(this, arguments);
        }

        return getDefaults_params;
    })();

    return Object.create(null, {
        getDefaults: { value: getDefaults, enumerable: true }
    });
})();

var $station = (function(){
    function getDefaults(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDefaults.params)) {
            try {
                params = new getDefaults.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaults.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.Station) ? o : new Configuration_Hardware.Station(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/station', enumerable: true }
    });

    getDefaults.params = (function(){
        _util.inherits(getDefaults_params, _util.RequestParams);

        function getDefaults_params(properties) {
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

            getDefaults_params._super.constructor.apply(this, arguments);
        }

        return getDefaults_params;
    })();

    return Object.create(null, {
        getDefaults: { value: getDefaults, enumerable: true }
    });
})();

exports.$line = $line;
exports.$managedExternalRegistrationDeprecated = $managedExternalRegistrationDeprecated;
exports.$managedPhoneDeprecated = $managedPhoneDeprecated;
exports.$managedStationDeprecated = $managedStationDeprecated;
exports.$managedStationTemplateDeprecated = $managedStationTemplateDeprecated;
exports.$recordingBeepTone = $recordingBeepTone;
exports.$sharedStationDeprecated = $sharedStationDeprecated;
exports.$sharedStationTemplateDeprecated = $sharedStationTemplateDeprecated;
exports.$station = $station;
