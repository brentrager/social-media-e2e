/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');
var Status = require('./Status');

var $statusMessages = (function(){
    function updateStatusMessagesSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateStatusMessagesSubscription.params)) {
            try {
                params = new updateStatusMessagesSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateStatusMessagesSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateStatusMessagesSubscription.method, updateStatusMessagesSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateStatusMessagesSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/status/status-messages', enumerable: true }
    });

    updateStatusMessagesSubscription.params = (function(){
        _util.inherits(updateStatusMessagesSubscription_params, _util.RequestParams);

        function updateStatusMessagesSubscription_params(properties) {
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

            updateStatusMessagesSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateStatusMessagesSubscription_params;
    })();

    function deleteStatusMessagesSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteStatusMessagesSubscription.params)) {
            try {
                params = new deleteStatusMessagesSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteStatusMessagesSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteStatusMessagesSubscription.method, deleteStatusMessagesSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteStatusMessagesSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/status/status-messages', enumerable: true }
    });

    deleteStatusMessagesSubscription.params = (function(){
        _util.inherits(deleteStatusMessagesSubscription_params, _util.RequestParams);

        function deleteStatusMessagesSubscription_params(properties) {
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

            deleteStatusMessagesSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteStatusMessagesSubscription_params;
    })();

    return Object.create(null, {
        updateStatusMessagesSubscription: { value: updateStatusMessagesSubscription, enumerable: true },
        deleteStatusMessagesSubscription: { value: deleteStatusMessagesSubscription, enumerable: true }
    });
})();

var $statusMessagesUserAccess = (function(){
    function updateStatusMessagesUserAccessSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateStatusMessagesUserAccessSubscription.params)) {
            try {
                params = new updateStatusMessagesUserAccessSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateStatusMessagesUserAccessSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateStatusMessagesUserAccessSubscription.method, updateStatusMessagesUserAccessSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateStatusMessagesUserAccessSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/status/status-messages-user-access', enumerable: true }
    });

    updateStatusMessagesUserAccessSubscription.params = (function(){
        _util.inherits(updateStatusMessagesUserAccessSubscription_params, _util.RequestParams);

        function updateStatusMessagesUserAccessSubscription_params(properties) {
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
            if (!(properties.content instanceof Status.StatusMessagesUserAccessSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Status.StatusMessagesUserAccessSubscription');
            }

            updateStatusMessagesUserAccessSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateStatusMessagesUserAccessSubscription_params;
    })();

    function deleteStatusMessagesUserAccessSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteStatusMessagesUserAccessSubscription.params)) {
            try {
                params = new deleteStatusMessagesUserAccessSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteStatusMessagesUserAccessSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteStatusMessagesUserAccessSubscription.method, deleteStatusMessagesUserAccessSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteStatusMessagesUserAccessSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/status/status-messages-user-access', enumerable: true }
    });

    deleteStatusMessagesUserAccessSubscription.params = (function(){
        _util.inherits(deleteStatusMessagesUserAccessSubscription_params, _util.RequestParams);

        function deleteStatusMessagesUserAccessSubscription_params(properties) {
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

            deleteStatusMessagesUserAccessSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteStatusMessagesUserAccessSubscription_params;
    })();

    return Object.create(null, {
        updateStatusMessagesUserAccessSubscription: { value: updateStatusMessagesUserAccessSubscription, enumerable: true },
        deleteStatusMessagesUserAccessSubscription: { value: deleteStatusMessagesUserAccessSubscription, enumerable: true }
    });
})();

var $userStatuses = (function(){
    function updateUserStatusSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateUserStatusSubscription.params)) {
            try {
                params = new updateUserStatusSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateUserStatusSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateUserStatusSubscription.method, updateUserStatusSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateUserStatusSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/status/user-statuses', enumerable: true }
    });

    updateUserStatusSubscription.params = (function(){
        _util.inherits(updateUserStatusSubscription_params, _util.RequestParams);

        function updateUserStatusSubscription_params(properties) {
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
            if (!(properties.content instanceof Status.UserStatusSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: Status.UserStatusSubscription');
            }

            updateUserStatusSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateUserStatusSubscription_params;
    })();

    function deleteUserStatusSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteUserStatusSubscription.params)) {
            try {
                params = new deleteUserStatusSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteUserStatusSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteUserStatusSubscription.method, deleteUserStatusSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteUserStatusSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/status/user-statuses', enumerable: true }
    });

    deleteUserStatusSubscription.params = (function(){
        _util.inherits(deleteUserStatusSubscription_params, _util.RequestParams);

        function deleteUserStatusSubscription_params(properties) {
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

            deleteUserStatusSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteUserStatusSubscription_params;
    })();

    return Object.create(null, {
        updateUserStatusSubscription: { value: updateUserStatusSubscription, enumerable: true },
        deleteUserStatusSubscription: { value: deleteUserStatusSubscription, enumerable: true }
    });
})();

var $userStatusPreviousInfo = (function(){
    function updateUserStatusPreviousInfoSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateUserStatusPreviousInfoSubscription.params)) {
            try {
                params = new updateUserStatusPreviousInfoSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateUserStatusPreviousInfoSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateUserStatusPreviousInfoSubscription.method, updateUserStatusPreviousInfoSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateUserStatusPreviousInfoSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/status/user-status-previous-info', enumerable: true }
    });

    updateUserStatusPreviousInfoSubscription.params = (function(){
        _util.inherits(updateUserStatusPreviousInfoSubscription_params, _util.RequestParams);

        function updateUserStatusPreviousInfoSubscription_params(properties) {
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

            updateUserStatusPreviousInfoSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateUserStatusPreviousInfoSubscription_params;
    })();

    function deleteUserStatusPreviousInfoSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteUserStatusPreviousInfoSubscription.params)) {
            try {
                params = new deleteUserStatusPreviousInfoSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteUserStatusPreviousInfoSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteUserStatusPreviousInfoSubscription.method, deleteUserStatusPreviousInfoSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteUserStatusPreviousInfoSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/status/user-status-previous-info', enumerable: true }
    });

    deleteUserStatusPreviousInfoSubscription.params = (function(){
        _util.inherits(deleteUserStatusPreviousInfoSubscription_params, _util.RequestParams);

        function deleteUserStatusPreviousInfoSubscription_params(properties) {
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

            deleteUserStatusPreviousInfoSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteUserStatusPreviousInfoSubscription_params;
    })();

    return Object.create(null, {
        updateUserStatusPreviousInfoSubscription: { value: updateUserStatusPreviousInfoSubscription, enumerable: true },
        deleteUserStatusPreviousInfoSubscription: { value: deleteUserStatusPreviousInfoSubscription, enumerable: true }
    });
})();

exports.$statusMessages = $statusMessages;
exports.$statusMessagesUserAccess = $statusMessagesUserAccess;
exports.$userStatuses = $userStatuses;
exports.$userStatusPreviousInfo = $userStatusPreviousInfo;
