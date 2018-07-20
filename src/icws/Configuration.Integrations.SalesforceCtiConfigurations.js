/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration_Integrations = require('./Configuration.Integrations');
var Configuration = require('./Configuration');
var Common = require('./Common');

var $salesforceCtiAttributeMaps = (function(){
    function updateSalesforceCtiAttributeMap(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSalesforceCtiAttributeMap.params)) {
            try {
                params = new updateSalesforceCtiAttributeMap.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSalesforceCtiAttributeMap.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.SubObjectSet) ? o : new Configuration.SubObjectSet(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSalesforceCtiAttributeMap.method, updateSalesforceCtiAttributeMap.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSalesforceCtiAttributeMap, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/salesforce-cti-configurations/{id}/salesforce-cti-attribute-maps', enumerable: true }
    });

    updateSalesforceCtiAttributeMap.params = (function(){
        _util.inherits(updateSalesforceCtiAttributeMap_params, _util.RequestParams);

        function updateSalesforceCtiAttributeMap_params(properties) {
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
            if (!(properties.content instanceof Configuration_Integrations.SalesforceCtiAttributeMapsBulkUpdate)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Integrations.SalesforceCtiAttributeMapsBulkUpdate');
            }

            updateSalesforceCtiAttributeMap_params._super.constructor.apply(this, arguments);
        }

        return updateSalesforceCtiAttributeMap_params;
    })();

    return Object.create(null, {
        updateSalesforceCtiAttributeMap: { value: updateSalesforceCtiAttributeMap, enumerable: true }
    });
})();

exports.$salesforceCtiAttributeMaps = $salesforceCtiAttributeMaps;
