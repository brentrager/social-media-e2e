/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var DataExtractor = require('./DataExtractor');
var Common = require('./Common');

var $jobsStatuses = (function(){
    function updateJobStatusSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateJobStatusSubscription.params)) {
            try {
                params = new updateJobStatusSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateJobStatusSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateJobStatusSubscription.method, updateJobStatusSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateJobStatusSubscription, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/data-extractor/jobs-statuses', enumerable: true }
    });

    updateJobStatusSubscription.params = (function(){
        _util.inherits(updateJobStatusSubscription_params, _util.RequestParams);

        function updateJobStatusSubscription_params(properties) {
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
            if (!(properties.content instanceof DataExtractor.JobStatusSubscription)) {
                throw new TypeError('`properties.content` value does not match the expected type: DataExtractor.JobStatusSubscription');
            }

            updateJobStatusSubscription_params._super.constructor.apply(this, arguments);
        }

        return updateJobStatusSubscription_params;
    })();

    function deleteJobStatusSubscription(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteJobStatusSubscription.params)) {
            try {
                params = new deleteJobStatusSubscription.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteJobStatusSubscription.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteJobStatusSubscription.method, deleteJobStatusSubscription.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteJobStatusSubscription, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/data-extractor/jobs-statuses', enumerable: true }
    });

    deleteJobStatusSubscription.params = (function(){
        _util.inherits(deleteJobStatusSubscription_params, _util.RequestParams);

        function deleteJobStatusSubscription_params(properties) {
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

            deleteJobStatusSubscription_params._super.constructor.apply(this, arguments);
        }

        return deleteJobStatusSubscription_params;
    })();

    return Object.create(null, {
        updateJobStatusSubscription: { value: updateJobStatusSubscription, enumerable: true },
        deleteJobStatusSubscription: { value: deleteJobStatusSubscription, enumerable: true }
    });
})();

exports.$jobsStatuses = $jobsStatuses;
