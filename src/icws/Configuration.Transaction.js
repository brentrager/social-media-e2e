/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var TransactionResponse = (function(){
    var hasProps = false;

    function TransactionResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.transaction:transactionResponse' });
        }

        TransactionResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(TransactionResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TransactionResponse.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for TransactionResponse.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TransactionResponse, '__type', { value: 'urn:inin.com:configuration.transaction:transactionResponse' });

    Object.defineProperty(TransactionResponse, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.transaction:transactionResponse'] = TransactionResponse;

    return TransactionResponse;
}());

var $transaction = (function(){
    function beginTransaction(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof beginTransaction.params)) {
            try {
                params = new beginTransaction.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: beginTransaction.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof TransactionResponse) ? o : new TransactionResponse(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(beginTransaction.method, beginTransaction.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(beginTransaction, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/transaction', enumerable: true }
    });

    beginTransaction.params = (function(){
        _util.inherits(beginTransaction_params, _util.RequestParams);

        function beginTransaction_params(properties) {
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

            beginTransaction_params._super.constructor.apply(this, arguments);
        }

        return beginTransaction_params;
    })();

    return Object.create(null, {
        beginTransaction: { value: beginTransaction, enumerable: true }
    });
})();

exports.TransactionResponse = TransactionResponse;
exports.$transaction = $transaction;
