/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var $countRefresh = (function(){
    function mwiCountRefresh(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof mwiCountRefresh.params)) {
            try {
                params = new mwiCountRefresh.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: mwiCountRefresh.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(mwiCountRefresh.method, mwiCountRefresh.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(mwiCountRefresh, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/unified-messaging/messages-waiting-indicator/count-refresh', enumerable: true }
    });

    mwiCountRefresh.params = (function(){
        _util.inherits(mwiCountRefresh_params, _util.RequestParams);

        function mwiCountRefresh_params(properties) {
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

            mwiCountRefresh_params._super.constructor.apply(this, arguments);
        }

        return mwiCountRefresh_params;
    })();

    return Object.create(null, {
        mwiCountRefresh: { value: mwiCountRefresh, enumerable: true }
    });
})();

exports.$countRefresh = $countRefresh;
