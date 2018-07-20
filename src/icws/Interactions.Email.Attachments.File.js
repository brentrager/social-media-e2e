/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Interactions_Email = require('./Interactions.Email');
var Common = require('./Common');

var $upload = (function(){
    function emailUploadFileAttachment(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof emailUploadFileAttachment.params)) {
            try {
                params = new emailUploadFileAttachment.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: emailUploadFileAttachment.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['202'] = function(o){ return (o instanceof Interactions_Email.EmailUploadFileAttachmentResponse) ? o : new Interactions_Email.EmailUploadFileAttachmentResponse(o); };
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(emailUploadFileAttachment.method, emailUploadFileAttachment.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(emailUploadFileAttachment, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/email/attachments/file/upload', enumerable: true }
    });

    emailUploadFileAttachment.params = (function(){
        _util.inherits(emailUploadFileAttachment_params, _util.RequestParams);

        function emailUploadFileAttachment_params(properties) {
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
            if (!(properties.content instanceof Interactions_Email.EmailUploadFileAttachmentRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Email.EmailUploadFileAttachmentRequest');
            }

            emailUploadFileAttachment_params._super.constructor.apply(this, arguments);
        }

        return emailUploadFileAttachment_params;
    })();

    return Object.create(null, {
        emailUploadFileAttachment: { value: emailUploadFileAttachment, enumerable: true }
    });
})();

var $remove = (function(){
    function emailRemoveFileAttachment(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof emailRemoveFileAttachment.params)) {
            try {
                params = new emailRemoveFileAttachment.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: emailRemoveFileAttachment.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(emailRemoveFileAttachment.method, emailRemoveFileAttachment.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(emailRemoveFileAttachment, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/email/attachments/file/remove', enumerable: true }
    });

    emailRemoveFileAttachment.params = (function(){
        _util.inherits(emailRemoveFileAttachment_params, _util.RequestParams);

        function emailRemoveFileAttachment_params(properties) {
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
            if (!(properties.content instanceof Interactions_Email.EmailRemoveFileAttachmentRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Email.EmailRemoveFileAttachmentRequest');
            }

            emailRemoveFileAttachment_params._super.constructor.apply(this, arguments);
        }

        return emailRemoveFileAttachment_params;
    })();

    return Object.create(null, {
        emailRemoveFileAttachment: { value: emailRemoveFileAttachment, enumerable: true }
    });
})();

exports.$upload = $upload;
exports.$remove = $remove;
