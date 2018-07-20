/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration_People = require('./Configuration.People');
var Common = require('./Common');

var $clientTemplate = (function(){
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
        dc['200'] = function(o){ return (o instanceof Configuration_People.ClientTemplate) ? o : new Configuration_People.ClientTemplate(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/client-template', enumerable: true }
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

var $monitoredMailbox = (function(){
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
        dc['200'] = function(o){ return (o instanceof Configuration_People.MonitoredMailbox) ? o : new Configuration_People.MonitoredMailbox(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/monitored-mailbox', enumerable: true }
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

var $queueColumn = (function(){
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
        dc['200'] = function(o){ return (o instanceof Configuration_People.QueueColumn) ? o : new Configuration_People.QueueColumn(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/queue-column', enumerable: true }
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

var $role = (function(){
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
        dc['200'] = function(o){ return (o instanceof Configuration_People.Role) ? o : new Configuration_People.Role(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/role', enumerable: true }
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

var $schedule = (function(){
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
        dc['200'] = function(o){ return (o instanceof Configuration_People.Schedule) ? o : new Configuration_People.Schedule(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/schedule', enumerable: true }
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

var $user = (function(){
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
        dc['200'] = function(o){ return (o instanceof Configuration_People.User) ? o : new Configuration_People.User(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/user', enumerable: true }
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

var $workgroup = (function(){
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
        dc['200'] = function(o){ return (o instanceof Configuration_People.Workgroup) ? o : new Configuration_People.Workgroup(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/workgroup', enumerable: true }
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

var $wrapUpCategory = (function(){
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
        dc['200'] = function(o){ return (o instanceof Configuration_People.WrapUpCategory) ? o : new Configuration_People.WrapUpCategory(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/wrap-up-category', enumerable: true }
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

var $wrapUpCode = (function(){
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
        dc['200'] = function(o){ return (o instanceof Configuration_People.WrapUpCode) ? o : new Configuration_People.WrapUpCode(o); };
        dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaults, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/wrap-up-code', enumerable: true }
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

exports.$clientTemplate = $clientTemplate;
exports.$monitoredMailbox = $monitoredMailbox;
exports.$queueColumn = $queueColumn;
exports.$role = $role;
exports.$schedule = $schedule;
exports.$user = $user;
exports.$workgroup = $workgroup;
exports.$wrapUpCategory = $wrapUpCategory;
exports.$wrapUpCode = $wrapUpCode;
