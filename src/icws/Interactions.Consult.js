/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Interactions = require('./Interactions');
var Common = require('./Common');

var $changeAudience = (function(){
    function consultChangeAudience(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof consultChangeAudience.params)) {
            try {
                params = new consultChangeAudience.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: consultChangeAudience.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(consultChangeAudience.method, consultChangeAudience.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(consultChangeAudience, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/consult/{consultId}/change-audience', enumerable: true }
    });

    consultChangeAudience.params = (function(){
        _util.inherits(consultChangeAudience_params, _util.RequestParams);

        function consultChangeAudience_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId, consultId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (!_util.hasProp(properties.template, 'consultId')) {
                throw new Error('`properties.template` is missing required property: `consultId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Interactions.ChangeAudienceParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.ChangeAudienceParameters');
            }

            consultChangeAudience_params._super.constructor.apply(this, arguments);
        }

        return consultChangeAudience_params;
    })();

    return Object.create(null, {
        consultChangeAudience: { value: consultChangeAudience, enumerable: true }
    });
})();

var $conclude = (function(){
    function consultConclude(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof consultConclude.params)) {
            try {
                params = new consultConclude.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: consultConclude.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(consultConclude.method, consultConclude.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(consultConclude, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/consult/{consultId}/conclude', enumerable: true }
    });

    consultConclude.params = (function(){
        _util.inherits(consultConclude_params, _util.RequestParams);

        function consultConclude_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId, consultId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (!_util.hasProp(properties.template, 'consultId')) {
                throw new Error('`properties.template` is missing required property: `consultId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            consultConclude_params._super.constructor.apply(this, arguments);
        }

        return consultConclude_params;
    })();

    return Object.create(null, {
        consultConclude: { value: consultConclude, enumerable: true }
    });
})();

exports.$changeAudience = $changeAudience;
exports.$conclude = $conclude;
