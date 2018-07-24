/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $voicemailMessages = (function(){
    function updateVoicemailMessageSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateVoicemailMessageSubscription.params)) {
            try {
                params = new updateVoicemailMessageSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateVoicemailMessageSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateVoicemailMessageSubscription.method, updateVoicemailMessageSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateVoicemailMessageSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/unified-messaging/voicemail-messages', enumerable: true }
    });

    updateVoicemailMessageSubscription.params = (function(){
        _util.inherits(updateVoicemailMessageSubscription_params, _util.RequestParams);

        function updateVoicemailMessageSubscription_params(properties) {
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

            updateVoicemailMessageSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateVoicemailMessageSubscription_params;
    })();

    function deleteVoicemailMessageSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteVoicemailMessageSubscription.params)) {
            try {
                params = new deleteVoicemailMessageSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteVoicemailMessageSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteVoicemailMessageSubscription.method, deleteVoicemailMessageSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteVoicemailMessageSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/unified-messaging/voicemail-messages', enumerable: true }
    });

    deleteVoicemailMessageSubscription.params = (function(){
        _util.inherits(deleteVoicemailMessageSubscription_params, _util.RequestParams);

        function deleteVoicemailMessageSubscription_params(properties) {
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

            deleteVoicemailMessageSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteVoicemailMessageSubscription_params;
    })();

    return Object.create(null, {
        updateVoicemailMessageSubscription: { value: updateVoicemailMessageSubscription, enumerable: true },
        deleteVoicemailMessageSubscription: { value: deleteVoicemailMessageSubscription, enumerable: true }
    });
})();

var $faxMessages = (function(){
    function updateFaxMessageSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateFaxMessageSubscription.params)) {
            try {
                params = new updateFaxMessageSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateFaxMessageSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateFaxMessageSubscription.method, updateFaxMessageSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateFaxMessageSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/unified-messaging/fax-messages', enumerable: true }
    });

    updateFaxMessageSubscription.params = (function(){
        _util.inherits(updateFaxMessageSubscription_params, _util.RequestParams);

        function updateFaxMessageSubscription_params(properties) {
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

            updateFaxMessageSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateFaxMessageSubscription_params;
    })();

    function deleteFaxMessageSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteFaxMessageSubscription.params)) {
            try {
                params = new deleteFaxMessageSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteFaxMessageSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteFaxMessageSubscription.method, deleteFaxMessageSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteFaxMessageSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/unified-messaging/fax-messages', enumerable: true }
    });

    deleteFaxMessageSubscription.params = (function(){
        _util.inherits(deleteFaxMessageSubscription_params, _util.RequestParams);

        function deleteFaxMessageSubscription_params(properties) {
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

            deleteFaxMessageSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteFaxMessageSubscription_params;
    })();

    return Object.create(null, {
        updateFaxMessageSubscription: { value: updateFaxMessageSubscription, enumerable: true },
        deleteFaxMessageSubscription: { value: deleteFaxMessageSubscription, enumerable: true }
    });
})();

var $messagesWaitingIndicator = (function(){
    function updateMWISubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateMWISubscription.params)) {
            try {
                params = new updateMWISubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateMWISubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateMWISubscription.method, updateMWISubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateMWISubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/unified-messaging/messages-waiting-indicator', enumerable: true }
    });

    updateMWISubscription.params = (function(){
        _util.inherits(updateMWISubscription_params, _util.RequestParams);

        function updateMWISubscription_params(properties) {
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

            updateMWISubscription_params._super.constructor.apply(this, arguments);
        }

        return updateMWISubscription_params;
    })();

    function deleteMWISubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteMWISubscription.params)) {
            try {
                params = new deleteMWISubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteMWISubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteMWISubscription.method, deleteMWISubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteMWISubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/unified-messaging/messages-waiting-indicator', enumerable: true }
    });

    deleteMWISubscription.params = (function(){
        _util.inherits(deleteMWISubscription_params, _util.RequestParams);

        function deleteMWISubscription_params(properties) {
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

            deleteMWISubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteMWISubscription_params;
    })();

    return Object.create(null, {
        updateMWISubscription: { value: updateMWISubscription, enumerable: true },
        deleteMWISubscription: { value: deleteMWISubscription, enumerable: true }
    });
})();

exports.$voicemailMessages = $voicemailMessages;
exports.$faxMessages = $faxMessages;
exports.$messagesWaitingIndicator = $messagesWaitingIndicator;
