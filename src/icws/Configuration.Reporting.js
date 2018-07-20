/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration = require('./Configuration');
var Common = require('./Common');

var HistoricalReports = (function(){
    var hasProps = false;

    function HistoricalReports() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.reporting:historicalReports' });
        }

        HistoricalReports._super.constructor.apply(this, arguments);
    }
    _util.inherits(HistoricalReports, _util.DataContract);

    function defineProps() {
        Object.defineProperty(HistoricalReports.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof HistoricalReport); }))) {
                    try {
                        value = value.map(function(item){ return new HistoricalReport(item); });
                    } catch (e) {
                        throw new TypeError('Error setting HistoricalReports.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(HistoricalReports, '__type', { value: 'urn:inin.com:configuration.reporting:historicalReports' });

    Object.defineProperty(HistoricalReports, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.reporting:historicalReports'] = HistoricalReports;

    return HistoricalReports;
}());

var HistoricalReport = (function(){
    var hasProps = false;

    function HistoricalReport() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.reporting:historicalReport' });
        }

        HistoricalReport._super.constructor.apply(this, arguments);
    }
    _util.inherits(HistoricalReport, _util.DataContract);

    function defineProps() {
        Object.defineProperty(HistoricalReport.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting HistoricalReport.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(HistoricalReport, '__type', { value: 'urn:inin.com:configuration.reporting:historicalReport' });

    Object.defineProperty(HistoricalReport, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.reporting:historicalReport'] = HistoricalReport;

    return HistoricalReport;
}());

var LegacyHistoricalReports = (function(){
    var hasProps = false;

    function LegacyHistoricalReports() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.reporting:legacyHistoricalReports' });
        }

        LegacyHistoricalReports._super.constructor.apply(this, arguments);
    }
    _util.inherits(LegacyHistoricalReports, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LegacyHistoricalReports.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LegacyHistoricalReport); }))) {
                    try {
                        value = value.map(function(item){ return new LegacyHistoricalReport(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LegacyHistoricalReports.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LegacyHistoricalReports, '__type', { value: 'urn:inin.com:configuration.reporting:legacyHistoricalReports' });

    Object.defineProperty(LegacyHistoricalReports, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.reporting:legacyHistoricalReports'] = LegacyHistoricalReports;

    return LegacyHistoricalReports;
}());

var LegacyHistoricalReport = (function(){
    var hasProps = false;

    function LegacyHistoricalReport() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.reporting:legacyHistoricalReport' });
        }

        LegacyHistoricalReport._super.constructor.apply(this, arguments);
    }
    _util.inherits(LegacyHistoricalReport, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LegacyHistoricalReport.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting LegacyHistoricalReport.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(LegacyHistoricalReport.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for LegacyHistoricalReport.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(LegacyHistoricalReport.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LegacyHistoricalReport.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(LegacyHistoricalReport.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for LegacyHistoricalReport.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(LegacyHistoricalReport.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for LegacyHistoricalReport.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LegacyHistoricalReport, '__type', { value: 'urn:inin.com:configuration.reporting:legacyHistoricalReport' });

    Object.defineProperty(LegacyHistoricalReport, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.reporting:legacyHistoricalReport'] = LegacyHistoricalReport;

    return LegacyHistoricalReport;
}());

var ReportLogs = (function(){
    var hasProps = false;

    function ReportLogs() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.reporting:reportLogs' });
        }

        ReportLogs._super.constructor.apply(this, arguments);
    }
    _util.inherits(ReportLogs, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ReportLogs.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ReportLog); }))) {
                    try {
                        value = value.map(function(item){ return new ReportLog(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ReportLogs.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ReportLogs, '__type', { value: 'urn:inin.com:configuration.reporting:reportLogs' });

    Object.defineProperty(ReportLogs, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.reporting:reportLogs'] = ReportLogs;

    return ReportLogs;
}());

var ReportLog = (function(){
    var hasProps = false;

    function ReportLog() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.reporting:reportLog' });
        }

        ReportLog._super.constructor.apply(this, arguments);
    }
    _util.inherits(ReportLog, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ReportLog.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ReportLog.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ReportLog.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ReportLog.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ReportLog.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ReportLog.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ReportLog.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ReportLog.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ReportLog.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ReportLog.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ReportLog, '__type', { value: 'urn:inin.com:configuration.reporting:reportLog' });

    Object.defineProperty(ReportLog, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.reporting:reportLog'] = ReportLog;

    return ReportLog;
}());

var $historicalReports = (function(){
    function getHistoricalReports(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getHistoricalReports.params)) {
            try {
                params = new getHistoricalReports.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getHistoricalReports.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof HistoricalReports) ? o : new HistoricalReports(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getHistoricalReports.method, getHistoricalReports.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getHistoricalReports, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/historical-reports', enumerable: true }
    });

    getHistoricalReports.params = (function(){
        _util.inherits(getHistoricalReports_params, _util.RequestParams);

        function getHistoricalReports_params(properties) {
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

            getHistoricalReports_params._super.constructor.apply(this, arguments);
        }

        return getHistoricalReports_params;
    })();

    function getHistoricalReport(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getHistoricalReport.params)) {
            try {
                params = new getHistoricalReport.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getHistoricalReport.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof HistoricalReport) ? o : new HistoricalReport(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getHistoricalReport.method, getHistoricalReport.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getHistoricalReport, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/historical-reports/{id}', enumerable: true }
    });

    getHistoricalReport.params = (function(){
        _util.inherits(getHistoricalReport_params, _util.RequestParams);

        function getHistoricalReport_params(properties) {
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

            getHistoricalReport_params._super.constructor.apply(this, arguments);
        }

        return getHistoricalReport_params;
    })();

    return Object.create(null, {
        getHistoricalReports: { value: getHistoricalReports, enumerable: true },
        getHistoricalReport: { value: getHistoricalReport, enumerable: true }
    });
})();

var $legacyHistoricalReports = (function(){
    function getLegacyHistoricalReports(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLegacyHistoricalReports.params)) {
            try {
                params = new getLegacyHistoricalReports.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLegacyHistoricalReports.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LegacyHistoricalReports) ? o : new LegacyHistoricalReports(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLegacyHistoricalReports.method, getLegacyHistoricalReports.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLegacyHistoricalReports, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/legacy-historical-reports', enumerable: true }
    });

    getLegacyHistoricalReports.params = (function(){
        _util.inherits(getLegacyHistoricalReports_params, _util.RequestParams);

        function getLegacyHistoricalReports_params(properties) {
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

            getLegacyHistoricalReports_params._super.constructor.apply(this, arguments);
        }

        return getLegacyHistoricalReports_params;
    })();

    function getLegacyHistoricalReport(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLegacyHistoricalReport.params)) {
            try {
                params = new getLegacyHistoricalReport.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLegacyHistoricalReport.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LegacyHistoricalReport) ? o : new LegacyHistoricalReport(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLegacyHistoricalReport.method, getLegacyHistoricalReport.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLegacyHistoricalReport, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/legacy-historical-reports/{id}', enumerable: true }
    });

    getLegacyHistoricalReport.params = (function(){
        _util.inherits(getLegacyHistoricalReport_params, _util.RequestParams);

        function getLegacyHistoricalReport_params(properties) {
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

            getLegacyHistoricalReport_params._super.constructor.apply(this, arguments);
        }

        return getLegacyHistoricalReport_params;
    })();

    return Object.create(null, {
        getLegacyHistoricalReports: { value: getLegacyHistoricalReports, enumerable: true },
        getLegacyHistoricalReport: { value: getLegacyHistoricalReport, enumerable: true }
    });
})();

var $reportLogs = (function(){
    function getReportLogs(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getReportLogs.params)) {
            try {
                params = new getReportLogs.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getReportLogs.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ReportLogs) ? o : new ReportLogs(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getReportLogs.method, getReportLogs.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getReportLogs, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/report-logs', enumerable: true }
    });

    getReportLogs.params = (function(){
        _util.inherits(getReportLogs_params, _util.RequestParams);

        function getReportLogs_params(properties) {
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

            getReportLogs_params._super.constructor.apply(this, arguments);
        }

        return getReportLogs_params;
    })();

    function getReportLog(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getReportLog.params)) {
            try {
                params = new getReportLog.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getReportLog.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ReportLog) ? o : new ReportLog(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getReportLog.method, getReportLog.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getReportLog, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/report-logs/{id}', enumerable: true }
    });

    getReportLog.params = (function(){
        _util.inherits(getReportLog_params, _util.RequestParams);

        function getReportLog_params(properties) {
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

            getReportLog_params._super.constructor.apply(this, arguments);
        }

        return getReportLog_params;
    })();

    return Object.create(null, {
        getReportLogs: { value: getReportLogs, enumerable: true },
        getReportLog: { value: getReportLog, enumerable: true }
    });
})();

exports.HistoricalReports = HistoricalReports;
exports.HistoricalReport = HistoricalReport;
exports.LegacyHistoricalReports = LegacyHistoricalReports;
exports.LegacyHistoricalReport = LegacyHistoricalReport;
exports.ReportLogs = ReportLogs;
exports.ReportLog = ReportLog;
exports.$historicalReports = $historicalReports;
exports.$legacyHistoricalReports = $legacyHistoricalReports;
exports.$reportLogs = $reportLogs;
