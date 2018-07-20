/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration_System = require('./Configuration.System');
var Common = require('./Common');

var $subsystemCertificates = (function(){
    function subsystemCertificates(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof subsystemCertificates.params)) {
            try {
                params = new subsystemCertificates.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: subsystemCertificates.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_System.SubsystemCertificatesResult) ? o : new Configuration_System.SubsystemCertificatesResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(subsystemCertificates.method, subsystemCertificates.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(subsystemCertificates, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/certificates/subsystem-certificates', enumerable: true }
    });

    subsystemCertificates.params = (function(){
        _util.inherits(subsystemCertificates_params, _util.RequestParams);

        function subsystemCertificates_params(properties) {
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

            subsystemCertificates_params._super.constructor.apply(this, arguments);
        }

        return subsystemCertificates_params;
    })();

    return Object.create(null, {
        subsystemCertificates: { value: subsystemCertificates, enumerable: true }
    });
})();

var $trustSubsystemCertificate = (function(){
    function trustSubsystemCertificate(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof trustSubsystemCertificate.params)) {
            try {
                params = new trustSubsystemCertificate.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: trustSubsystemCertificate.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(trustSubsystemCertificate.method, trustSubsystemCertificate.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(trustSubsystemCertificate, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/certificates/trust-subsystem-certificate', enumerable: true }
    });

    trustSubsystemCertificate.params = (function(){
        _util.inherits(trustSubsystemCertificate_params, _util.RequestParams);

        function trustSubsystemCertificate_params(properties) {
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
            if (!(properties.content instanceof Configuration_System.TrustSubsystemCertificateArgument)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.System.TrustSubsystemCertificateArgument');
            }

            trustSubsystemCertificate_params._super.constructor.apply(this, arguments);
        }

        return trustSubsystemCertificate_params;
    })();

    return Object.create(null, {
        trustSubsystemCertificate: { value: trustSubsystemCertificate, enumerable: true }
    });
})();

exports.$subsystemCertificates = $subsystemCertificates;
exports.$trustSubsystemCertificate = $trustSubsystemCertificate;
