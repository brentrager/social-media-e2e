/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Configuration = require('./Configuration');
var Common = require('./Common');

var AnalyticsDashboard = (function(){
    var hasProps = false;

    function AnalyticsDashboard() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.analytics:analyticsDashboard' });
        }

        AnalyticsDashboard._super.constructor.apply(this, arguments);
    }
    _util.inherits(AnalyticsDashboard, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AnalyticsDashboard.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting AnalyticsDashboard.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AnalyticsDashboard.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for AnalyticsDashboard.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(AnalyticsDashboard.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AnalyticsDashboard.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AnalyticsDashboard.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for AnalyticsDashboard.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(AnalyticsDashboard.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for AnalyticsDashboard.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AnalyticsDashboard.prototype, 'dashboardName', {
            get: function() { return this.__prop_dashboardName; },
            set: function(value) {
                if (!(value instanceof Configuration.MultiLanguageString || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.MultiLanguageString(value);
                    } catch (e) {
                        throw new TypeError('Error setting AnalyticsDashboard.dashboardName: ' + e.message);
                    }
                }

                this.__prop_dashboardName = value;
            },
            enumerable: true
        });

        Object.defineProperty(AnalyticsDashboard.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(value instanceof Configuration.MultiLanguageString || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.MultiLanguageString(value);
                    } catch (e) {
                        throw new TypeError('Error setting AnalyticsDashboard.description: ' + e.message);
                    }
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AnalyticsDashboard, '__type', { value: 'urn:inin.com:configuration.analytics:analyticsDashboard' });

    Object.defineProperty(AnalyticsDashboard, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'dashboardName': { required: false, nullable: true },
                'description': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.analytics:analyticsDashboard'] = AnalyticsDashboard;

    return AnalyticsDashboard;
}());

var AnalyticsConfiguration = (function(){
    var hasProps = false;

    function AnalyticsConfiguration() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.analytics:analyticsConfiguration' });
        }

        AnalyticsConfiguration._super.constructor.apply(this, arguments);
    }
    _util.inherits(AnalyticsConfiguration, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AnalyticsConfiguration.prototype, 'configConnectorUri', {
            get: function() { return this.__prop_configConnectorUri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for AnalyticsConfiguration.configConnectorUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_configConnectorUri = value;
            },
            enumerable: true
        });

        Object.defineProperty(AnalyticsConfiguration.prototype, 'dataConnectorUri', {
            get: function() { return this.__prop_dataConnectorUri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for AnalyticsConfiguration.dataConnectorUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dataConnectorUri = value;
            },
            enumerable: true
        });

        Object.defineProperty(AnalyticsConfiguration.prototype, 'webProxyUri', {
            get: function() { return this.__prop_webProxyUri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for AnalyticsConfiguration.webProxyUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_webProxyUri = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AnalyticsConfiguration, '__type', { value: 'urn:inin.com:configuration.analytics:analyticsConfiguration' });

    Object.defineProperty(AnalyticsConfiguration, '__propInfo', {
        get: function() {
            var pi = {
                'configConnectorUri': { required: false, nullable: true },
                'dataConnectorUri': { required: false, nullable: true },
                'webProxyUri': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.analytics:analyticsConfiguration'] = AnalyticsConfiguration;

    return AnalyticsConfiguration;
}());

var AnalyticsDashboards = (function(){
    var hasProps = false;

    function AnalyticsDashboards() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.analytics:analyticsDashboards' });
        }

        AnalyticsDashboards._super.constructor.apply(this, arguments);
    }
    _util.inherits(AnalyticsDashboards, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AnalyticsDashboards.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AnalyticsDashboard); }))) {
                    try {
                        value = value.map(function(item){ return new AnalyticsDashboard(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AnalyticsDashboards.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AnalyticsDashboards, '__type', { value: 'urn:inin.com:configuration.analytics:analyticsDashboards' });

    Object.defineProperty(AnalyticsDashboards, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.analytics:analyticsDashboards'] = AnalyticsDashboards;

    return AnalyticsDashboards;
}());

var AnalyticsConfigurationMessage = (function(){
    var hasProps = false;

    function AnalyticsConfigurationMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.analytics:analyticsConfigurationMessage', enumerable: true });
        }

        AnalyticsConfigurationMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AnalyticsConfigurationMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(AnalyticsConfigurationMessage.prototype, 'analyticsConfiguration', {
            get: function() { return this.__prop_analyticsConfiguration; },
            set: function(value) {
                if (!(value instanceof AnalyticsConfiguration)) {
                    try {
                        value = new AnalyticsConfiguration(value);
                    } catch (e) {
                        throw new TypeError('Error setting AnalyticsConfigurationMessage.analyticsConfiguration: ' + e.message);
                    }
                }

                this.__prop_analyticsConfiguration = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AnalyticsConfigurationMessage, '__type', { value: 'urn:inin.com:configuration.analytics:analyticsConfigurationMessage' });

    Object.defineProperty(AnalyticsConfigurationMessage, '__propInfo', {
        get: function() {
            var pi = {
                'analyticsConfiguration': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.analytics:analyticsConfigurationMessage'] = AnalyticsConfigurationMessage;

    return AnalyticsConfigurationMessage;
}());

var AnalyticsDashboardsMessage = (function(){
    var hasProps = false;

    function AnalyticsDashboardsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.analytics:analyticsDashboardsMessage', enumerable: true });
        }

        AnalyticsDashboardsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AnalyticsDashboardsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(AnalyticsDashboardsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AnalyticsDashboard); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AnalyticsDashboard(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AnalyticsDashboardsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(AnalyticsDashboardsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AnalyticsDashboard); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AnalyticsDashboard(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AnalyticsDashboardsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(AnalyticsDashboardsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for AnalyticsDashboardsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AnalyticsDashboardsMessage, '__type', { value: 'urn:inin.com:configuration.analytics:analyticsDashboardsMessage' });

    Object.defineProperty(AnalyticsDashboardsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.analytics:analyticsDashboardsMessage'] = AnalyticsDashboardsMessage;

    return AnalyticsDashboardsMessage;
}());

var $analyticsConfiguration = (function(){
    function getAnalyticsConfiguration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAnalyticsConfiguration.params)) {
            try {
                params = new getAnalyticsConfiguration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAnalyticsConfiguration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AnalyticsConfiguration) ? o : new AnalyticsConfiguration(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAnalyticsConfiguration.method, getAnalyticsConfiguration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAnalyticsConfiguration, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/analytics-configuration', enumerable: true }
    });

    getAnalyticsConfiguration.params = (function(){
        _util.inherits(getAnalyticsConfiguration_params, _util.RequestParams);

        function getAnalyticsConfiguration_params(properties) {
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

            getAnalyticsConfiguration_params._super.constructor.apply(this, arguments);
        }

        return getAnalyticsConfiguration_params;
    })();

    function updateAnalyticsConfiguration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateAnalyticsConfiguration.params)) {
            try {
                params = new updateAnalyticsConfiguration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAnalyticsConfiguration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateAnalyticsConfiguration.method, updateAnalyticsConfiguration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateAnalyticsConfiguration, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/analytics-configuration', enumerable: true }
    });

    updateAnalyticsConfiguration.params = (function(){
        _util.inherits(updateAnalyticsConfiguration_params, _util.RequestParams);

        function updateAnalyticsConfiguration_params(properties) {
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
            if (!(properties.content instanceof AnalyticsConfiguration)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Analytics.AnalyticsConfiguration');
            }

            updateAnalyticsConfiguration_params._super.constructor.apply(this, arguments);
        }

        return updateAnalyticsConfiguration_params;
    })();

    return Object.create(null, {
        getAnalyticsConfiguration: { value: getAnalyticsConfiguration, enumerable: true },
        updateAnalyticsConfiguration: { value: updateAnalyticsConfiguration, enumerable: true }
    });
})();

var $analyticsDashboards = (function(){
    function getAnalyticsDashboards(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAnalyticsDashboards.params)) {
            try {
                params = new getAnalyticsDashboards.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAnalyticsDashboards.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AnalyticsDashboards) ? o : new AnalyticsDashboards(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAnalyticsDashboards.method, getAnalyticsDashboards.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAnalyticsDashboards, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/analytics-dashboards', enumerable: true }
    });

    getAnalyticsDashboards.params = (function(){
        _util.inherits(getAnalyticsDashboards_params, _util.RequestParams);

        function getAnalyticsDashboards_params(properties) {
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

            getAnalyticsDashboards_params._super.constructor.apply(this, arguments);
        }

        return getAnalyticsDashboards_params;
    })();

    function getAnalyticsDashboard(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAnalyticsDashboard.params)) {
            try {
                params = new getAnalyticsDashboard.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAnalyticsDashboard.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AnalyticsDashboard) ? o : new AnalyticsDashboard(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAnalyticsDashboard.method, getAnalyticsDashboard.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAnalyticsDashboard, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/analytics-dashboards/{id}', enumerable: true }
    });

    getAnalyticsDashboard.params = (function(){
        _util.inherits(getAnalyticsDashboard_params, _util.RequestParams);

        function getAnalyticsDashboard_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getAnalyticsDashboard_params._super.constructor.apply(this, arguments);
        }

        return getAnalyticsDashboard_params;
    })();

    return Object.create(null, {
        getAnalyticsDashboards: { value: getAnalyticsDashboards, enumerable: true },
        getAnalyticsDashboard: { value: getAnalyticsDashboard, enumerable: true }
    });
})();

exports.AnalyticsDashboardsMessage = AnalyticsDashboardsMessage;
exports.AnalyticsDashboard = AnalyticsDashboard;
exports.AnalyticsConfigurationMessage = AnalyticsConfigurationMessage;
exports.AnalyticsConfiguration = AnalyticsConfiguration;
exports.AnalyticsDashboards = AnalyticsDashboards;
exports.$analyticsConfiguration = $analyticsConfiguration;
exports.$analyticsDashboards = $analyticsDashboards;
