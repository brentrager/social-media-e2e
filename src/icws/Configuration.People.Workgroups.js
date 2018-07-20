/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration_People = require('./Configuration.People');
var Configuration = require('./Configuration');
var Common = require('./Common');

var $monitoredMailboxes = (function(){
    function updateMonitoredMailbox(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateMonitoredMailbox.params)) {
            try {
                params = new updateMonitoredMailbox.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateMonitoredMailbox.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.SubObjectSet) ? o : new Configuration.SubObjectSet(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateMonitoredMailbox.method, updateMonitoredMailbox.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateMonitoredMailbox, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/workgroups/{id}/monitored-mailboxes', enumerable: true }
    });

    updateMonitoredMailbox.params = (function(){
        _util.inherits(updateMonitoredMailbox_params, _util.RequestParams);

        function updateMonitoredMailbox_params(properties) {
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
            if (!(properties.content instanceof Configuration_People.MonitoredMailboxesBulkUpdate)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.People.MonitoredMailboxesBulkUpdate');
            }

            updateMonitoredMailbox_params._super.constructor.apply(this, arguments);
        }

        return updateMonitoredMailbox_params;
    })();

    return Object.create(null, {
        updateMonitoredMailbox: { value: updateMonitoredMailbox, enumerable: true }
    });
})();

exports.$monitoredMailboxes = $monitoredMailboxes;
