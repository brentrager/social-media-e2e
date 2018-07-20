/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');
var Connection = require('./Connection');

var $identityProviders = (function(){
    function goToIdentityProvider(params) {
        if (!(params instanceof goToIdentityProvider.params)) {
            try {
                params = new goToIdentityProvider.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: goToIdentityProvider.params');
            }
        }

        return _util.resourceMethodUrl('/icws/connection/single-sign-on/identity-providers/{identityProviderId}', params);
    }

    Object.defineProperties(goToIdentityProvider, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/connection/single-sign-on/identity-providers/{identityProviderId}', enumerable: true }
    });

    goToIdentityProvider.params = (function(){
        _util.inherits(goToIdentityProvider_params, _util.RequestParams);

        function goToIdentityProvider_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: identityProviderId');
            }
            if (!_util.hasProp(properties.template, 'identityProviderId')) {
                throw new Error('`properties.template` is missing required property: `identityProviderId`');
            }
            if (properties.query === void 0) {
                throw new Error('`properties.query` is undefined, which means the following required Query param(s) will be missing: singleSignOnCapabilities');
            }
            if (!_util.hasProp(properties.query, 'singleSignOnCapabilities')) {
                throw new Error('`properties.query` is missing required property: `singleSignOnCapabilities`');
            }

            goToIdentityProvider_params._super.constructor.apply(this, arguments);
        }

        return goToIdentityProvider_params;
    })();

    return Object.create(null, {
        goToIdentityProvider: { value: goToIdentityProvider, enumerable: true }
    });
})();

var $return = (function(){
    return Object.create(null, {
    });
})();

var $samlEcp = (function(){
    function getSamlECPRequest(params) {
        if (!(params instanceof getSamlECPRequest.params)) {
            try {
                params = new getSamlECPRequest.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSamlECPRequest.params');
            }
        }

        return _util.resourceMethodUrl('/icws/connection/single-sign-on/saml-ecp/{identityProviderId}', params);
    }

    Object.defineProperties(getSamlECPRequest, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/connection/single-sign-on/saml-ecp/{identityProviderId}', enumerable: true }
    });

    getSamlECPRequest.params = (function(){
        _util.inherits(getSamlECPRequest_params, _util.RequestParams);

        function getSamlECPRequest_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: identityProviderId');
            }
            if (!_util.hasProp(properties.template, 'identityProviderId')) {
                throw new Error('`properties.template` is missing required property: `identityProviderId`');
            }

            getSamlECPRequest_params._super.constructor.apply(this, arguments);
        }

        return getSamlECPRequest_params;
    })();

    return Object.create(null, {
        getSamlECPRequest: { value: getSamlECPRequest, enumerable: true }
    });
})();

var $response = (function(){
    function getSingleSignOnResponse(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSingleSignOnResponse.params)) {
            try {
                params = new getSingleSignOnResponse.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSingleSignOnResponse.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Connection.SingleSignOnResponse) ? o : new Connection.SingleSignOnResponse(o); };
        dc['400'] = dc['500'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSingleSignOnResponse.method, getSingleSignOnResponse.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSingleSignOnResponse, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/connection/single-sign-on/response', enumerable: true }
    });

    getSingleSignOnResponse.params = (function(){
        _util.inherits(getSingleSignOnResponse_params, _util.RequestParams);

        function getSingleSignOnResponse_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }

            getSingleSignOnResponse_params._super.constructor.apply(this, arguments);
        }

        return getSingleSignOnResponse_params;
    })();

    return Object.create(null, {
        getSingleSignOnResponse: { value: getSingleSignOnResponse, enumerable: true }
    });
})();

exports.$identityProviders = $identityProviders;
exports.$return = $return;
exports.$samlEcp = $samlEcp;
exports.$response = $response;
