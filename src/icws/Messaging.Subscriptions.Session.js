/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Session = require('./Session');
var Common = require('./Common');

var $sessionsUsers = (function(){
    function updateSessionsUsersSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSessionsUsersSubscription.params)) {
            try {
                params = new updateSessionsUsersSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSessionsUsersSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSessionsUsersSubscription.method, updateSessionsUsersSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSessionsUsersSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/session/sessions-users', enumerable: true }
    });

    updateSessionsUsersSubscription.params = (function(){
        _util.inherits(updateSessionsUsersSubscription_params, _util.RequestParams);

        function updateSessionsUsersSubscription_params(properties) {
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
            if (!(properties.content instanceof Session.SessionsUsersSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Session.SessionsUsersSubscription');
            }

            updateSessionsUsersSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateSessionsUsersSubscription_params;
    })();

    function deleteSessionsUsersSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSessionsUsersSubscription.params)) {
            try {
                params = new deleteSessionsUsersSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSessionsUsersSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSessionsUsersSubscription.method, deleteSessionsUsersSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSessionsUsersSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/session/sessions-users', enumerable: true }
    });

    deleteSessionsUsersSubscription.params = (function(){
        _util.inherits(deleteSessionsUsersSubscription_params, _util.RequestParams);

        function deleteSessionsUsersSubscription_params(properties) {
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

            deleteSessionsUsersSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSessionsUsersSubscription_params;
    })();

    return Object.create(null, {
        updateSessionsUsersSubscription: { value: updateSessionsUsersSubscription, enumerable: true },
        deleteSessionsUsersSubscription: { value: deleteSessionsUsersSubscription, enumerable: true }
    });
})();

var $sessionsStations = (function(){
    function updateSessionsStationsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSessionsStationsSubscription.params)) {
            try {
                params = new updateSessionsStationsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSessionsStationsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSessionsStationsSubscription.method, updateSessionsStationsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSessionsStationsSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/session/sessions-stations', enumerable: true }
    });

    updateSessionsStationsSubscription.params = (function(){
        _util.inherits(updateSessionsStationsSubscription_params, _util.RequestParams);

        function updateSessionsStationsSubscription_params(properties) {
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
            if (!(properties.content instanceof Session.SessionsStationsSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Session.SessionsStationsSubscription');
            }

            updateSessionsStationsSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateSessionsStationsSubscription_params;
    })();

    function deleteSessionsStationsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSessionsStationsSubscription.params)) {
            try {
                params = new deleteSessionsStationsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSessionsStationsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSessionsStationsSubscription.method, deleteSessionsStationsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSessionsStationsSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/session/sessions-stations', enumerable: true }
    });

    deleteSessionsStationsSubscription.params = (function(){
        _util.inherits(deleteSessionsStationsSubscription_params, _util.RequestParams);

        function deleteSessionsStationsSubscription_params(properties) {
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

            deleteSessionsStationsSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSessionsStationsSubscription_params;
    })();

    return Object.create(null, {
        updateSessionsStationsSubscription: { value: updateSessionsStationsSubscription, enumerable: true },
        deleteSessionsStationsSubscription: { value: deleteSessionsStationsSubscription, enumerable: true }
    });
})();

var $sessionsMachines = (function(){
    function updateSessionsMachinesSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSessionsMachinesSubscription.params)) {
            try {
                params = new updateSessionsMachinesSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSessionsMachinesSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSessionsMachinesSubscription.method, updateSessionsMachinesSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSessionsMachinesSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/session/sessions-machines', enumerable: true }
    });

    updateSessionsMachinesSubscription.params = (function(){
        _util.inherits(updateSessionsMachinesSubscription_params, _util.RequestParams);

        function updateSessionsMachinesSubscription_params(properties) {
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
            if (!(properties.content instanceof Session.SessionsMachinesSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Session.SessionsMachinesSubscription');
            }

            updateSessionsMachinesSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateSessionsMachinesSubscription_params;
    })();

    function deleteSessionsMachinesSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSessionsMachinesSubscription.params)) {
            try {
                params = new deleteSessionsMachinesSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSessionsMachinesSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSessionsMachinesSubscription.method, deleteSessionsMachinesSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSessionsMachinesSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/session/sessions-machines', enumerable: true }
    });

    deleteSessionsMachinesSubscription.params = (function(){
        _util.inherits(deleteSessionsMachinesSubscription_params, _util.RequestParams);

        function deleteSessionsMachinesSubscription_params(properties) {
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

            deleteSessionsMachinesSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSessionsMachinesSubscription_params;
    })();

    return Object.create(null, {
        updateSessionsMachinesSubscription: { value: updateSessionsMachinesSubscription, enumerable: true },
        deleteSessionsMachinesSubscription: { value: deleteSessionsMachinesSubscription, enumerable: true }
    });
})();

var $sessionsLayouts = (function(){
    function updateSessionsLayoutsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSessionsLayoutsSubscription.params)) {
            try {
                params = new updateSessionsLayoutsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSessionsLayoutsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSessionsLayoutsSubscription.method, updateSessionsLayoutsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSessionsLayoutsSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/session/sessions-layouts', enumerable: true }
    });

    updateSessionsLayoutsSubscription.params = (function(){
        _util.inherits(updateSessionsLayoutsSubscription_params, _util.RequestParams);

        function updateSessionsLayoutsSubscription_params(properties) {
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
            if (!(properties.content instanceof Session.SessionsLayoutsSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Session.SessionsLayoutsSubscription');
            }

            updateSessionsLayoutsSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateSessionsLayoutsSubscription_params;
    })();

    function deleteSessionsLayoutsSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSessionsLayoutsSubscription.params)) {
            try {
                params = new deleteSessionsLayoutsSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSessionsLayoutsSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSessionsLayoutsSubscription.method, deleteSessionsLayoutsSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSessionsLayoutsSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/session/sessions-layouts', enumerable: true }
    });

    deleteSessionsLayoutsSubscription.params = (function(){
        _util.inherits(deleteSessionsLayoutsSubscription_params, _util.RequestParams);

        function deleteSessionsLayoutsSubscription_params(properties) {
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

            deleteSessionsLayoutsSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteSessionsLayoutsSubscription_params;
    })();

    return Object.create(null, {
        updateSessionsLayoutsSubscription: { value: updateSessionsLayoutsSubscription, enumerable: true },
        deleteSessionsLayoutsSubscription: { value: deleteSessionsLayoutsSubscription, enumerable: true }
    });
})();

exports.$sessionsUsers = $sessionsUsers;
exports.$sessionsStations = $sessionsStations;
exports.$sessionsMachines = $sessionsMachines;
exports.$sessionsLayouts = $sessionsLayouts;
