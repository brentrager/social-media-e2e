/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Interactions_Email = require('./Interactions.Email');
var Common = require('./Common');

var $insert = (function(){
    function emailInsertResponseManagement(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof emailInsertResponseManagement.params)) {
            try {
                params = new emailInsertResponseManagement.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: emailInsertResponseManagement.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Interactions_Email.EmailInsertResponseManagementResponse) ? o : new Interactions_Email.EmailInsertResponseManagementResponse(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(emailInsertResponseManagement.method, emailInsertResponseManagement.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(emailInsertResponseManagement, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/email/attachments/response-management/insert', enumerable: true }
    });

    emailInsertResponseManagement.params = (function(){
        _util.inherits(emailInsertResponseManagement_params, _util.RequestParams);

        function emailInsertResponseManagement_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Interactions_Email.EmailInsertResponseManagementRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Email.EmailInsertResponseManagementRequest');
            }

            emailInsertResponseManagement_params._super.constructor.apply(this, arguments);
        }

        return emailInsertResponseManagement_params;
    })();

    return Object.create(null, {
        emailInsertResponseManagement: { value: emailInsertResponseManagement, enumerable: true }
    });
})();

exports.$insert = $insert;
