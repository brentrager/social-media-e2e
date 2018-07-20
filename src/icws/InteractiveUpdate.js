/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var System = require('./System');
var Common = require('./Common');

var $provider = (function(){
    function setInteractiveUpdateProviderUri(params) {
        if (!(params instanceof setInteractiveUpdateProviderUri.params)) {
            try {
                params = new setInteractiveUpdateProviderUri.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: setInteractiveUpdateProviderUri.params');
            }
        }

        return _util.resourceMethodUrl('/icws/interactive-update/provider', params);
    }

    Object.defineProperties(setInteractiveUpdateProviderUri, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/interactive-update/provider', enumerable: true }
    });

    setInteractiveUpdateProviderUri.params = (function(){
        _util.inherits(setInteractiveUpdateProviderUri_params, _util.RequestParams);

        function setInteractiveUpdateProviderUri_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            if (!(properties.content instanceof System.InteractiveUpdateProviderRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: System.InteractiveUpdateProviderRequest');
            }

            setInteractiveUpdateProviderUri_params._super.constructor.apply(this, arguments);
        }

        return setInteractiveUpdateProviderUri_params;
    })();

    return Object.create(null, {
        setInteractiveUpdateProviderUri: { value: setInteractiveUpdateProviderUri, enumerable: true }
    });
})();

exports.$provider = $provider;
