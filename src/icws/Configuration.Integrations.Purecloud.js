/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration_Integrations = require('./Configuration.Integrations');
var Common = require('./Common');

var $configureConnectorForCic = (function(){
    function configureConnectorForCic(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof configureConnectorForCic.params)) {
            try {
                params = new configureConnectorForCic.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: configureConnectorForCic.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Integrations.ConfigureConnectorForCicResult) ? o : new Configuration_Integrations.ConfigureConnectorForCicResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(configureConnectorForCic.method, configureConnectorForCic.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(configureConnectorForCic, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud/configure-connector-for-cic', enumerable: true }
    });

    configureConnectorForCic.params = (function(){
        _util.inherits(configureConnectorForCic_params, _util.RequestParams);

        function configureConnectorForCic_params(properties) {
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
            if (!(properties.content instanceof Configuration_Integrations.ConfigureConnectorForCicArgument)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Integrations.ConfigureConnectorForCicArgument');
            }

            configureConnectorForCic_params._super.constructor.apply(this, arguments);
        }

        return configureConnectorForCic_params;
    })();

    return Object.create(null, {
        configureConnectorForCic: { value: configureConnectorForCic, enumerable: true }
    });
})();

exports.$configureConnectorForCic = $configureConnectorForCic;
