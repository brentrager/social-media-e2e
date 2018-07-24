/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Analytics = require('./Analytics');
var Common = require('./Common');

var $identityToken = (function(){
    function getIdentityToken(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getIdentityToken.params)) {
            try {
                params = new getIdentityToken.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getIdentityToken.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Analytics.IdentityToken) ? o : new Analytics.IdentityToken(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getIdentityToken.method, getIdentityToken.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getIdentityToken, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/analytics/platform/identity-token', enumerable: true }
    });

    getIdentityToken.params = (function(){
        _util.inherits(getIdentityToken_params, _util.RequestParams);

        function getIdentityToken_params(properties) {
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

            getIdentityToken_params._super.constructor.apply(this, arguments);
        }

        return getIdentityToken_params;
    })();

    return Object.create(null, {
        getIdentityToken: { value: getIdentityToken, enumerable: true }
    });
})();

var $projectId = (function(){
    function getProjectId(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getProjectId.params)) {
            try {
                params = new getProjectId.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getProjectId.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Analytics.ProjectId) ? o : new Analytics.ProjectId(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getProjectId.method, getProjectId.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getProjectId, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/analytics/platform/project-id', enumerable: true }
    });

    getProjectId.params = (function(){
        _util.inherits(getProjectId_params, _util.RequestParams);

        function getProjectId_params(properties) {
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

            getProjectId_params._super.constructor.apply(this, arguments);
        }

        return getProjectId_params;
    })();

    return Object.create(null, {
        getProjectId: { value: getProjectId, enumerable: true }
    });
})();

exports.$identityToken = $identityToken;
exports.$projectId = $projectId;
