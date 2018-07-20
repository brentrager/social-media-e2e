/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');

var VoicePromptActivationState = (function(){
    var instanceCache = {};
    function VoicePromptActivationState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:voicePrompts:voicePromptActivationState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(VoicePromptActivationState, _util.EnumValue);

    Object.defineProperties(VoicePromptActivationState, {
        'Enabled': { value: new VoicePromptActivationState(1, 'Enabled'), enumerable: true },
        'Disabled': { value: new VoicePromptActivationState(0, 'Disabled'), enumerable: true }
    });

    Object.defineProperty(VoicePromptActivationState, '__type', { value: 'urn:inin.com:voicePrompts:voicePromptActivationState' });

    _typemap['urn:inin.com:voicePrompts:voicePromptActivationState'] = VoicePromptActivationState;

    return VoicePromptActivationState;
}());

var VoicePromptActivation = (function(){
    var hasProps = false;

    function VoicePromptActivation() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:voicePrompts:voicePromptActivation' });
        }

        VoicePromptActivation._super.constructor.apply(this, arguments);
    }
    _util.inherits(VoicePromptActivation, _util.DataContract);

    function defineProps() {
        Object.defineProperty(VoicePromptActivation.prototype, 'state', {
            get: function() { return this.__prop_state; },
            set: function(value) {
                if (!(value instanceof VoicePromptActivationState)) {
                    try {
                        value = new VoicePromptActivationState(value);
                    } catch (e) {
                        throw new TypeError('Error setting VoicePromptActivation.state: ' + e.message);
                    }
                }

                this.__prop_state = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(VoicePromptActivation, '__type', { value: 'urn:inin.com:voicePrompts:voicePromptActivation' });

    Object.defineProperty(VoicePromptActivation, '__propInfo', {
        get: function() {
            var pi = {
                'state': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:voicePrompts:voicePromptActivation'] = VoicePromptActivation;

    return VoicePromptActivation;
}());

var $all = (function(){
    return Object.create(null, {
    });
})();

var $greeting = (function(){
    return Object.create(null, {
    });
})();

var $outofoffice = (function(){
    return Object.create(null, {
    });
})();

var $noanswer = (function(){
    return Object.create(null, {
    });
})();

var $followme = (function(){
    return Object.create(null, {
    });
})();

var $name = (function(){
    return Object.create(null, {
    });
})();

var $forward = (function(){
    return Object.create(null, {
    });
})();

exports.VoicePromptActivationState = VoicePromptActivationState;
exports.VoicePromptActivation = VoicePromptActivation;
exports.$all = $all;
exports.$greeting = $greeting;
exports.$outofoffice = $outofoffice;
exports.$noanswer = $noanswer;
exports.$followme = $followme;
exports.$name = $name;
exports.$forward = $forward;
