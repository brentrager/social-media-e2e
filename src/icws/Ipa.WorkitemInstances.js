/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Ipa = require('./Ipa');
var Common = require('./Common');

var $currentPage = (function(){
    function sendPageCommand(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof sendPageCommand.params)) {
            try {
                params = new sendPageCommand.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: sendPageCommand.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['202'] = function(o){ return (o instanceof Ipa.SendPageCommandResults) ? o : new Ipa.SendPageCommandResults(o); };
        dc['400'] = dc['401'] = dc['403'] = dc['404'] = dc['500'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(sendPageCommand.method, sendPageCommand.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(sendPageCommand, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/ipa/workitem-instances/{workItemInstanceId}/current-page', enumerable: true }
    });

    sendPageCommand.params = (function(){
        _util.inherits(sendPageCommand_params, _util.RequestParams);

        function sendPageCommand_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, workItemInstanceId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'workItemInstanceId')) {
                throw new Error('`properties.template` is missing required property: `workItemInstanceId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Ipa.SendPageCommandParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Ipa.SendPageCommandParameters');
            }

            sendPageCommand_params._super.constructor.apply(this, arguments);
        }

        return sendPageCommand_params;
    })();

    return Object.create(null, {
        sendPageCommand: { value: sendPageCommand, enumerable: true }
    });
})();

exports.$currentPage = $currentPage;
