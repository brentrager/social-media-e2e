/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $pas = (function(){
    function updatePasSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updatePasSubscription.params)) {
            try {
                params = new updatePasSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updatePasSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['401'] = dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updatePasSubscription.method, updatePasSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updatePasSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/ipa/pas', enumerable: true }
    });

    updatePasSubscription.params = (function(){
        _util.inherits(updatePasSubscription_params, _util.RequestParams);

        function updatePasSubscription_params(properties) {
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

            updatePasSubscription_params._super.constructor.apply(this, arguments);
        }

        return updatePasSubscription_params;
    })();

    function deletePasSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deletePasSubscription.params)) {
            try {
                params = new deletePasSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deletePasSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deletePasSubscription.method, deletePasSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deletePasSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/ipa/pas', enumerable: true }
    });

    deletePasSubscription.params = (function(){
        _util.inherits(deletePasSubscription_params, _util.RequestParams);

        function deletePasSubscription_params(properties) {
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

            deletePasSubscription_params._super.constructor.apply(this, arguments);
        }

        return deletePasSubscription_params;
    })();

    return Object.create(null, {
        updatePasSubscription: { value: updatePasSubscription, enumerable: true },
        deletePasSubscription: { value: deletePasSubscription, enumerable: true }
    });
})();

var $launchableProcesses = (function(){
    function createLaunchableProcessesSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createLaunchableProcessesSubscription.params)) {
            try {
                params = new createLaunchableProcessesSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createLaunchableProcessesSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['401'] = dc['400'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createLaunchableProcessesSubscription.method, createLaunchableProcessesSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createLaunchableProcessesSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/ipa/launchable-processes', enumerable: true }
    });

    createLaunchableProcessesSubscription.params = (function(){
        _util.inherits(createLaunchableProcessesSubscription_params, _util.RequestParams);

        function createLaunchableProcessesSubscription_params(properties) {
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

            createLaunchableProcessesSubscription_params._super.constructor.apply(this, arguments);
        }

        return createLaunchableProcessesSubscription_params;
    })();

    function deleteLaunchableProcessesSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteLaunchableProcessesSubscription.params)) {
            try {
                params = new deleteLaunchableProcessesSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteLaunchableProcessesSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteLaunchableProcessesSubscription.method, deleteLaunchableProcessesSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteLaunchableProcessesSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/ipa/launchable-processes', enumerable: true }
    });

    deleteLaunchableProcessesSubscription.params = (function(){
        _util.inherits(deleteLaunchableProcessesSubscription_params, _util.RequestParams);

        function deleteLaunchableProcessesSubscription_params(properties) {
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

            deleteLaunchableProcessesSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteLaunchableProcessesSubscription_params;
    })();

    return Object.create(null, {
        createLaunchableProcessesSubscription: { value: createLaunchableProcessesSubscription, enumerable: true },
        deleteLaunchableProcessesSubscription: { value: deleteLaunchableProcessesSubscription, enumerable: true }
    });
})();

exports.$pas = $pas;
exports.$launchableProcesses = $launchableProcesses;
