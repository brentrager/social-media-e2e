/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration_People = require('./Configuration.People');
var Common = require('./Common');

var $areInUse = (function(){
    function areInUse(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof areInUse.params)) {
            try {
                params = new areInUse.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: areInUse.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_People.AreInUseResult) ? o : new Configuration_People.AreInUseResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(areInUse.method, areInUse.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(areInUse, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/access-control-groups/are-in-use', enumerable: true }
    });

    areInUse.params = (function(){
        _util.inherits(areInUse_params, _util.RequestParams);

        function areInUse_params(properties) {
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

            areInUse_params._super.constructor.apply(this, arguments);
        }

        return areInUse_params;
    })();

    return Object.create(null, {
        areInUse: { value: areInUse, enumerable: true }
    });
})();

var $assignMembership = (function(){
    function assignMembership(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof assignMembership.params)) {
            try {
                params = new assignMembership.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: assignMembership.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_People.AssignMembershipResult) ? o : new Configuration_People.AssignMembershipResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(assignMembership.method, assignMembership.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(assignMembership, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/access-control-groups/{id}/{objectType}/assign-membership', enumerable: true }
    });

    assignMembership.params = (function(){
        _util.inherits(assignMembership_params, _util.RequestParams);

        function assignMembership_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id, objectType');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (!_util.hasProp(properties.template, 'objectType')) {
                throw new Error('`properties.template` is missing required property: `objectType`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Configuration_People.AssignMembershipArgument)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.AssignMembershipArgument');
            }

            assignMembership_params._super.constructor.apply(this, arguments);
        }

        return assignMembership_params;
    })();

    return Object.create(null, {
        assignMembership: { value: assignMembership, enumerable: true }
    });
})();

var $assignable = (function(){
    function assignable(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof assignable.params)) {
            try {
                params = new assignable.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: assignable.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_People.AssignableResult) ? o : new Configuration_People.AssignableResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(assignable.method, assignable.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(assignable, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/access-control-groups/assignable/{objectType}', enumerable: true }
    });

    assignable.params = (function(){
        _util.inherits(assignable_params, _util.RequestParams);

        function assignable_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, objectType');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'objectType')) {
                throw new Error('`properties.template` is missing required property: `objectType`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            assignable_params._super.constructor.apply(this, arguments);
        }

        return assignable_params;
    })();

    return Object.create(null, {
        assignable: { value: assignable, enumerable: true }
    });
})();

exports.$areInUse = $areInUse;
exports.$assignMembership = $assignMembership;
exports.$assignable = $assignable;
