/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var QualityManagement = require('./QualityManagement');
var Common = require('./Common');

var $acknowledge = (function(){
    function ackScorecard(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof ackScorecard.params)) {
            try {
                params = new ackScorecard.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: ackScorecard.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(ackScorecard.method, ackScorecard.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(ackScorecard, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/agent-quality/scorecards/{scorecardId}/acknowledge', enumerable: true }
    });

    ackScorecard.params = (function(){
        _util.inherits(ackScorecard_params, _util.RequestParams);

        function ackScorecard_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, scorecardId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'scorecardId')) {
                throw new Error('`properties.template` is missing required property: `scorecardId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof QualityManagement.AckScorecardRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: QualityManagement.AckScorecardRequest');
            }

            ackScorecard_params._super.constructor.apply(this, arguments);
        }

        return ackScorecard_params;
    })();

    return Object.create(null, {
        ackScorecard: { value: ackScorecard, enumerable: true }
    });
})();

exports.$acknowledge = $acknowledge;
