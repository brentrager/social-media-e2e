/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration = require('./Configuration');
var Common = require('./Common');

var InteractionOptimizerSchedulingUnits = (function(){
    var hasProps = false;

    function InteractionOptimizerSchedulingUnits() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionOptimizer:interactionOptimizerSchedulingUnits' });
        }

        InteractionOptimizerSchedulingUnits._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionOptimizerSchedulingUnits, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionOptimizerSchedulingUnits.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionOptimizerSchedulingUnit); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionOptimizerSchedulingUnit(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionOptimizerSchedulingUnits.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionOptimizerSchedulingUnits, '__type', { value: 'urn:inin.com:configuration.interactionOptimizer:interactionOptimizerSchedulingUnits' });

    Object.defineProperty(InteractionOptimizerSchedulingUnits, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionOptimizer:interactionOptimizerSchedulingUnits'] = InteractionOptimizerSchedulingUnits;

    return InteractionOptimizerSchedulingUnits;
}());

var InteractionOptimizerSchedulingUnit = (function(){
    var hasProps = false;

    function InteractionOptimizerSchedulingUnit() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionOptimizer:interactionOptimizerSchedulingUnit' });
        }

        InteractionOptimizerSchedulingUnit._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionOptimizerSchedulingUnit, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionOptimizerSchedulingUnit.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionOptimizerSchedulingUnit.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionOptimizerSchedulingUnit, '__type', { value: 'urn:inin.com:configuration.interactionOptimizer:interactionOptimizerSchedulingUnit' });

    Object.defineProperty(InteractionOptimizerSchedulingUnit, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionOptimizer:interactionOptimizerSchedulingUnit'] = InteractionOptimizerSchedulingUnit;

    return InteractionOptimizerSchedulingUnit;
}());

var $interactionOptimizerSchedulingUnits = (function(){
    function getInteractionOptimizerSchedulingUnits(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionOptimizerSchedulingUnits.params)) {
            try {
                params = new getInteractionOptimizerSchedulingUnits.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionOptimizerSchedulingUnits.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionOptimizerSchedulingUnits) ? o : new InteractionOptimizerSchedulingUnits(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionOptimizerSchedulingUnits.method, getInteractionOptimizerSchedulingUnits.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionOptimizerSchedulingUnits, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-optimizer-scheduling-units', enumerable: true }
    });

    getInteractionOptimizerSchedulingUnits.params = (function(){
        _util.inherits(getInteractionOptimizerSchedulingUnits_params, _util.RequestParams);

        function getInteractionOptimizerSchedulingUnits_params(properties) {
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

            getInteractionOptimizerSchedulingUnits_params._super.constructor.apply(this, arguments);
        }

        return getInteractionOptimizerSchedulingUnits_params;
    })();

    function getInteractionOptimizerSchedulingUnit(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionOptimizerSchedulingUnit.params)) {
            try {
                params = new getInteractionOptimizerSchedulingUnit.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionOptimizerSchedulingUnit.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionOptimizerSchedulingUnit) ? o : new InteractionOptimizerSchedulingUnit(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionOptimizerSchedulingUnit.method, getInteractionOptimizerSchedulingUnit.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionOptimizerSchedulingUnit, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-optimizer-scheduling-units/{id}', enumerable: true }
    });

    getInteractionOptimizerSchedulingUnit.params = (function(){
        _util.inherits(getInteractionOptimizerSchedulingUnit_params, _util.RequestParams);

        function getInteractionOptimizerSchedulingUnit_params(properties) {
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

            getInteractionOptimizerSchedulingUnit_params._super.constructor.apply(this, arguments);
        }

        return getInteractionOptimizerSchedulingUnit_params;
    })();

    return Object.create(null, {
        getInteractionOptimizerSchedulingUnits: { value: getInteractionOptimizerSchedulingUnits, enumerable: true },
        getInteractionOptimizerSchedulingUnit: { value: getInteractionOptimizerSchedulingUnit, enumerable: true }
    });
})();

exports.InteractionOptimizerSchedulingUnits = InteractionOptimizerSchedulingUnits;
exports.InteractionOptimizerSchedulingUnit = InteractionOptimizerSchedulingUnit;
exports.$interactionOptimizerSchedulingUnits = $interactionOptimizerSchedulingUnits;
