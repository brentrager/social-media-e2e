/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var State = (function(){
    var instanceCache = {};
    function State(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:state' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(State, _util.EnumValue);

    Object.defineProperties(State, {
        'Submitted': { value: new State(0, 'Submitted'), enumerable: true },
        'Queued': { value: new State(1, 'Queued'), enumerable: true },
        'Started': { value: new State(2, 'Started'), enumerable: true },
        'Failed': { value: new State(3, 'Failed'), enumerable: true },
        'Canceled': { value: new State(4, 'Canceled'), enumerable: true },
        'Finished': { value: new State(5, 'Finished'), enumerable: true }
    });

    Object.defineProperty(State, '__type', { value: 'urn:inin.com:dataExtractor:state' });

    _typemap['urn:inin.com:dataExtractor:state'] = State;

    return State;
}());

var JobStatus = (function(){
    var hasProps = false;

    function JobStatus() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:jobStatus' });
        }

        JobStatus._super.constructor.apply(this, arguments);
    }
    _util.inherits(JobStatus, _util.DataContract);

    function defineProps() {
        Object.defineProperty(JobStatus.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for JobStatus.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'submittedUserId', {
            get: function() { return this.__prop_submittedUserId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for JobStatus.submittedUserId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_submittedUserId = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for JobStatus.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'submittedUserSiteId', {
            get: function() { return this.__prop_submittedUserSiteId; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for JobStatus.submittedUserSiteId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_submittedUserSiteId = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'submitTime', {
            get: function() { return this.__prop_submitTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for JobStatus.submitTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_submitTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'queuedTime', {
            get: function() { return this.__prop_queuedTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for JobStatus.queuedTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_queuedTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'canceledTime', {
            get: function() { return this.__prop_canceledTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for JobStatus.canceledTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_canceledTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'finishedTime', {
            get: function() { return this.__prop_finishedTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for JobStatus.finishedTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_finishedTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'startedTime', {
            get: function() { return this.__prop_startedTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for JobStatus.startedTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_startedTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'failedTime', {
            get: function() { return this.__prop_failedTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for JobStatus.failedTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_failedTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'stateChangedTime', {
            get: function() { return this.__prop_stateChangedTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for JobStatus.stateChangedTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_stateChangedTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'cancelUserId', {
            get: function() { return this.__prop_cancelUserId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for JobStatus.cancelUserId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_cancelUserId = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'outputFolder', {
            get: function() { return this.__prop_outputFolder; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for JobStatus.outputFolder, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_outputFolder = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'errorInfo', {
            get: function() { return this.__prop_errorInfo; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for JobStatus.errorInfo, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_errorInfo = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobStatus.prototype, 'state', {
            get: function() { return this.__prop_state; },
            set: function(value) {
                if (!(value instanceof State || value === void 0)) {
                    try {
                        value = new State(value);
                    } catch (e) {
                        throw new TypeError('Error setting JobStatus.state: ' + e.message);
                    }
                }

                this.__prop_state = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(JobStatus, '__type', { value: 'urn:inin.com:dataExtractor:jobStatus' });

    Object.defineProperty(JobStatus, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'submittedUserId': { required: true, nullable: false },
                'id': { required: true, nullable: false },
                'submittedUserSiteId': { required: true, nullable: false },
                'submitTime': { required: false, nullable: false },
                'queuedTime': { required: false, nullable: false },
                'canceledTime': { required: false, nullable: false },
                'finishedTime': { required: false, nullable: false },
                'startedTime': { required: false, nullable: false },
                'failedTime': { required: false, nullable: false },
                'stateChangedTime': { required: false, nullable: false },
                'cancelUserId': { required: false, nullable: false },
                'outputFolder': { required: false, nullable: false },
                'errorInfo': { required: false, nullable: false },
                'state': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataExtractor:jobStatus'] = JobStatus;

    return JobStatus;
}());

var Jobs = (function(){
    var hasProps = false;

    function Jobs() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:jobs' });
        }

        Jobs._super.constructor.apply(this, arguments);
    }
    _util.inherits(Jobs, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Jobs.prototype, 'jobList', {
            get: function() { return this.__prop_jobList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Job); }))) {
                    try {
                        value = value.map(function(item){ return new Job(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Jobs.jobList: ' + e.message);
                    }
                }

                this.__prop_jobList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Jobs, '__type', { value: 'urn:inin.com:dataExtractor:jobs' });

    Object.defineProperty(Jobs, '__propInfo', {
        get: function() {
            var pi = {
                'jobList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataExtractor:jobs'] = Jobs;

    return Jobs;
}());

var Job = (function(){
    var hasProps = false;

    function Job() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:job' });
        }

        Job._super.constructor.apply(this, arguments);
    }
    _util.inherits(Job, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Job.prototype, 'jobStatus', {
            get: function() { return this.__prop_jobStatus; },
            set: function(value) {
                if (!(value instanceof JobStatus || value === void 0)) {
                    try {
                        value = new JobStatus(value);
                    } catch (e) {
                        throw new TypeError('Error setting Job.jobStatus: ' + e.message);
                    }
                }

                this.__prop_jobStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(Job.prototype, 'jobConfig', {
            get: function() { return this.__prop_jobConfig; },
            set: function(value) {
                if (!(value instanceof JobConfig || value === void 0)) {
                    try {
                        value = new JobConfig(value);
                    } catch (e) {
                        throw new TypeError('Error setting Job.jobConfig: ' + e.message);
                    }
                }

                this.__prop_jobConfig = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Job, '__type', { value: 'urn:inin.com:dataExtractor:job' });

    Object.defineProperty(Job, '__propInfo', {
        get: function() {
            var pi = {
                'jobStatus': { required: false, nullable: false },
                'jobConfig': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataExtractor:job'] = Job;

    return Job;
}());

var JobConfig = (function(){
    var hasProps = false;

    function JobConfig() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:jobConfig' });
        }

        JobConfig._super.constructor.apply(this, arguments);
    }
    _util.inherits(JobConfig, _util.DataContract);

    function defineProps() {
        Object.defineProperty(JobConfig.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for JobConfig.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobConfig.prototype, 'submittedUserId', {
            get: function() { return this.__prop_submittedUserId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for JobConfig.submittedUserId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_submittedUserId = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobConfig.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for JobConfig.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobConfig.prototype, 'tables', {
            get: function() { return this.__prop_tables; },
            set: function(value) {
                if (!(value instanceof Tables || value === void 0)) {
                    try {
                        value = new Tables(value);
                    } catch (e) {
                        throw new TypeError('Error setting JobConfig.tables: ' + e.message);
                    }
                }

                this.__prop_tables = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobConfig.prototype, 'views', {
            get: function() { return this.__prop_views; },
            set: function(value) {
                if (!(value instanceof Views || value === void 0)) {
                    try {
                        value = new Views(value);
                    } catch (e) {
                        throw new TypeError('Error setting JobConfig.views: ' + e.message);
                    }
                }

                this.__prop_views = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobConfig.prototype, 'startTimeFilter', {
            get: function() { return this.__prop_startTimeFilter; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for JobConfig.startTimeFilter, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_startTimeFilter = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobConfig.prototype, 'endTimeFilter', {
            get: function() { return this.__prop_endTimeFilter; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for JobConfig.endTimeFilter, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_endTimeFilter = value;
            },
            enumerable: true
        });

        Object.defineProperty(JobConfig.prototype, 'siteIdFilters', {
            get: function() { return this.__prop_siteIdFilters; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SiteIdFilter); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SiteIdFilter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting JobConfig.siteIdFilters: ' + e.message);
                    }
                }

                this.__prop_siteIdFilters = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(JobConfig, '__type', { value: 'urn:inin.com:dataExtractor:jobConfig' });

    Object.defineProperty(JobConfig, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'submittedUserId': { required: true, nullable: false },
                'id': { required: false, nullable: false },
                'tables': { required: false, nullable: false },
                'views': { required: false, nullable: false },
                'startTimeFilter': { required: false, nullable: false },
                'endTimeFilter': { required: false, nullable: false },
                'siteIdFilters': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataExtractor:jobConfig'] = JobConfig;

    return JobConfig;
}());

var Tables = (function(){
    var hasProps = false;

    function Tables() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:tables' });
        }

        Tables._super.constructor.apply(this, arguments);
    }
    _util.inherits(Tables, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Tables.prototype, 'tableList', {
            get: function() { return this.__prop_tableList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Table); }))) {
                    try {
                        value = value.map(function(item){ return new Table(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Tables.tableList: ' + e.message);
                    }
                }

                this.__prop_tableList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Tables, '__type', { value: 'urn:inin.com:dataExtractor:tables' });

    Object.defineProperty(Tables, '__propInfo', {
        get: function() {
            var pi = {
                'tableList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataExtractor:tables'] = Tables;

    return Tables;
}());

var Table = (function(){
    var hasProps = false;

    function Table() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:table' });
        }

        Table._super.constructor.apply(this, arguments);
    }
    _util.inherits(Table, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Table.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Table.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'dateTimeFilterColumn', {
            get: function() { return this.__prop_dateTimeFilterColumn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Table.dateTimeFilterColumn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dateTimeFilterColumn = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'siteIdFilterColumn', {
            get: function() { return this.__prop_siteIdFilterColumn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Table.siteIdFilterColumn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_siteIdFilterColumn = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'column', {
            get: function() { return this.__prop_column; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Column); }))) {
                    try {
                        value = value.map(function(item){ return new Column(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Table.column: ' + e.message);
                    }
                }

                this.__prop_column = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Table, '__type', { value: 'urn:inin.com:dataExtractor:table' });

    Object.defineProperty(Table, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'dateTimeFilterColumn': { required: false, nullable: false },
                'siteIdFilterColumn': { required: false, nullable: false },
                'column': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataExtractor:table'] = Table;

    return Table;
}());

var Column = (function(){
    var hasProps = false;

    function Column() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:column' });
        }

        Column._super.constructor.apply(this, arguments);
    }
    _util.inherits(Column, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Column.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Column.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Column, '__type', { value: 'urn:inin.com:dataExtractor:column' });

    Object.defineProperty(Column, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataExtractor:column'] = Column;

    return Column;
}());

var Views = (function(){
    var hasProps = false;

    function Views() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:views' });
        }

        Views._super.constructor.apply(this, arguments);
    }
    _util.inherits(Views, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Views.prototype, 'viewList', {
            get: function() { return this.__prop_viewList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof View); }))) {
                    try {
                        value = value.map(function(item){ return new View(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Views.viewList: ' + e.message);
                    }
                }

                this.__prop_viewList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Views, '__type', { value: 'urn:inin.com:dataExtractor:views' });

    Object.defineProperty(Views, '__propInfo', {
        get: function() {
            var pi = {
                'viewList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataExtractor:views'] = Views;

    return Views;
}());

var View = (function(){
    var hasProps = false;

    function View() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:view' });
        }

        View._super.constructor.apply(this, arguments);
    }
    _util.inherits(View, _util.DataContract);

    function defineProps() {
        Object.defineProperty(View.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for View.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(View.prototype, 'dateTimeFilterColumn', {
            get: function() { return this.__prop_dateTimeFilterColumn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for View.dateTimeFilterColumn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dateTimeFilterColumn = value;
            },
            enumerable: true
        });

        Object.defineProperty(View.prototype, 'siteIdFilterColumn', {
            get: function() { return this.__prop_siteIdFilterColumn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for View.siteIdFilterColumn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_siteIdFilterColumn = value;
            },
            enumerable: true
        });

        Object.defineProperty(View.prototype, 'column', {
            get: function() { return this.__prop_column; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Column); }))) {
                    try {
                        value = value.map(function(item){ return new Column(item); });
                    } catch (e) {
                        throw new TypeError('Error setting View.column: ' + e.message);
                    }
                }

                this.__prop_column = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(View, '__type', { value: 'urn:inin.com:dataExtractor:view' });

    Object.defineProperty(View, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'dateTimeFilterColumn': { required: false, nullable: false },
                'siteIdFilterColumn': { required: false, nullable: false },
                'column': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataExtractor:view'] = View;

    return View;
}());

var SiteIdFilter = (function(){
    var hasProps = false;

    function SiteIdFilter() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:siteIdFilter' });
        }

        SiteIdFilter._super.constructor.apply(this, arguments);
    }
    _util.inherits(SiteIdFilter, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SiteIdFilter.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for SiteIdFilter.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SiteIdFilter, '__type', { value: 'urn:inin.com:dataExtractor:siteIdFilter' });

    Object.defineProperty(SiteIdFilter, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataExtractor:siteIdFilter'] = SiteIdFilter;

    return SiteIdFilter;
}());

var JobReponse = (function(){
    var hasProps = false;

    function JobReponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:jobReponse' });
        }

        JobReponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(JobReponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(JobReponse.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for JobReponse.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(JobReponse, '__type', { value: 'urn:inin.com:dataExtractor:jobReponse' });

    Object.defineProperty(JobReponse, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataExtractor:jobReponse'] = JobReponse;

    return JobReponse;
}());

var JobStatusSubscription = (function(){
    var hasProps = false;

    function JobStatusSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:jobStatusSubscription' });
        }

        JobStatusSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(JobStatusSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(JobStatusSubscription.prototype, 'jobIds', {
            get: function() { return this.__prop_jobIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for JobStatusSubscription.jobIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_jobIds = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(JobStatusSubscription, '__type', { value: 'urn:inin.com:dataExtractor:jobStatusSubscription' });

    Object.defineProperty(JobStatusSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'jobIds': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataExtractor:jobStatusSubscription'] = JobStatusSubscription;

    return JobStatusSubscription;
}());

var JobStatusMessage = (function(){
    var hasProps = false;

    function JobStatusMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataExtractor:jobStatusMessage', enumerable: true });
        }

        JobStatusMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(JobStatusMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(JobStatusMessage.prototype, 'jobStatusList', {
            get: function() { return this.__prop_jobStatusList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof JobStatus); }))) {
                    try {
                        value = value.map(function(item){ return new JobStatus(item); });
                    } catch (e) {
                        throw new TypeError('Error setting JobStatusMessage.jobStatusList: ' + e.message);
                    }
                }

                this.__prop_jobStatusList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(JobStatusMessage, '__type', { value: 'urn:inin.com:dataExtractor:jobStatusMessage' });

    Object.defineProperty(JobStatusMessage, '__propInfo', {
        get: function() {
            var pi = {
                'jobStatusList': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataExtractor:jobStatusMessage'] = JobStatusMessage;

    return JobStatusMessage;
}());

var $jobs = (function(){
    function getJobs(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getJobs.params)) {
            try {
                params = new getJobs.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getJobs.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Jobs) ? o : new Jobs(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getJobs.method, getJobs.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getJobs, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/data-extractor/jobs', enumerable: true }
    });

    getJobs.params = (function(){
        _util.inherits(getJobs_params, _util.RequestParams);

        function getJobs_params(properties) {
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

            getJobs_params._super.constructor.apply(this, arguments);
        }

        return getJobs_params;
    })();

    function postJob(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof postJob.params)) {
            try {
                params = new postJob.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: postJob.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof JobReponse) ? o : new JobReponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(postJob.method, postJob.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(postJob, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/data-extractor/jobs', enumerable: true }
    });

    postJob.params = (function(){
        _util.inherits(postJob_params, _util.RequestParams);

        function postJob_params(properties) {
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
            if (!(properties.content instanceof JobConfig)) {
                throw new TypeError('`properties.content` value does not match the expected type: DataExtractor.JobConfig');
            }

            postJob_params._super.constructor.apply(this, arguments);
        }

        return postJob_params;
    })();

    function getJob(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getJob.params)) {
            try {
                params = new getJob.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getJob.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Job) ? o : new Job(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getJob.method, getJob.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getJob, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/data-extractor/jobs/{jobId}', enumerable: true }
    });

    getJob.params = (function(){
        _util.inherits(getJob_params, _util.RequestParams);

        function getJob_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, jobId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'jobId')) {
                throw new Error('`properties.template` is missing required property: `jobId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getJob_params._super.constructor.apply(this, arguments);
        }

        return getJob_params;
    })();

    function removeJob(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof removeJob.params)) {
            try {
                params = new removeJob.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: removeJob.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(removeJob.method, removeJob.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(removeJob, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/data-extractor/jobs/{jobId}', enumerable: true }
    });

    removeJob.params = (function(){
        _util.inherits(removeJob_params, _util.RequestParams);

        function removeJob_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, jobId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'jobId')) {
                throw new Error('`properties.template` is missing required property: `jobId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            removeJob_params._super.constructor.apply(this, arguments);
        }

        return removeJob_params;
    })();

    return Object.create(null, {
        getJobs: { value: getJobs, enumerable: true },
        postJob: { value: postJob, enumerable: true },
        getJob: { value: getJob, enumerable: true },
        removeJob: { value: removeJob, enumerable: true }
    });
})();

exports.State = State;
exports.JobStatusMessage = JobStatusMessage;
exports.JobStatus = JobStatus;
exports.Jobs = Jobs;
exports.Job = Job;
exports.JobConfig = JobConfig;
exports.Tables = Tables;
exports.Table = Table;
exports.Column = Column;
exports.Views = Views;
exports.View = View;
exports.SiteIdFilter = SiteIdFilter;
exports.JobReponse = JobReponse;
exports.JobStatusSubscription = JobStatusSubscription;
exports.$jobs = $jobs;
