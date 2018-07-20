/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration = require('./Configuration');
var Common = require('./Common');

var InteractionDialerCallListAcls = (function(){
    var hasProps = false;

    function InteractionDialerCallListAcls() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerCallListAcls' });
        }

        InteractionDialerCallListAcls._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerCallListAcls, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerCallListAcls.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionDialerCallListAcl); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionDialerCallListAcl(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerCallListAcls.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerCallListAcls, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerCallListAcls' });

    Object.defineProperty(InteractionDialerCallListAcls, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerCallListAcls'] = InteractionDialerCallListAcls;

    return InteractionDialerCallListAcls;
}());

var InteractionDialerCallListAcl = (function(){
    var hasProps = false;

    function InteractionDialerCallListAcl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerCallListAcl' });
        }

        InteractionDialerCallListAcl._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerCallListAcl, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerCallListAcl.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerCallListAcl.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerCallListAcl, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerCallListAcl' });

    Object.defineProperty(InteractionDialerCallListAcl, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerCallListAcl'] = InteractionDialerCallListAcl;

    return InteractionDialerCallListAcl;
}());

var InteractionDialerCampaignAcls = (function(){
    var hasProps = false;

    function InteractionDialerCampaignAcls() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerCampaignAcls' });
        }

        InteractionDialerCampaignAcls._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerCampaignAcls, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerCampaignAcls.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionDialerCampaignAcl); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionDialerCampaignAcl(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerCampaignAcls.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerCampaignAcls, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerCampaignAcls' });

    Object.defineProperty(InteractionDialerCampaignAcls, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerCampaignAcls'] = InteractionDialerCampaignAcls;

    return InteractionDialerCampaignAcls;
}());

var InteractionDialerCampaignAcl = (function(){
    var hasProps = false;

    function InteractionDialerCampaignAcl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerCampaignAcl' });
        }

        InteractionDialerCampaignAcl._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerCampaignAcl, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerCampaignAcl.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerCampaignAcl.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerCampaignAcl, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerCampaignAcl' });

    Object.defineProperty(InteractionDialerCampaignAcl, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerCampaignAcl'] = InteractionDialerCampaignAcl;

    return InteractionDialerCampaignAcl;
}());

var InteractionDialerPolicySetAcls = (function(){
    var hasProps = false;

    function InteractionDialerPolicySetAcls() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerPolicySetAcls' });
        }

        InteractionDialerPolicySetAcls._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerPolicySetAcls, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerPolicySetAcls.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionDialerPolicySetAcl); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionDialerPolicySetAcl(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerPolicySetAcls.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerPolicySetAcls, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerPolicySetAcls' });

    Object.defineProperty(InteractionDialerPolicySetAcls, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerPolicySetAcls'] = InteractionDialerPolicySetAcls;

    return InteractionDialerPolicySetAcls;
}());

var InteractionDialerPolicySetAcl = (function(){
    var hasProps = false;

    function InteractionDialerPolicySetAcl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerPolicySetAcl' });
        }

        InteractionDialerPolicySetAcl._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerPolicySetAcl, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerPolicySetAcl.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerPolicySetAcl.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerPolicySetAcl, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerPolicySetAcl' });

    Object.defineProperty(InteractionDialerPolicySetAcl, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerPolicySetAcl'] = InteractionDialerPolicySetAcl;

    return InteractionDialerPolicySetAcl;
}());

var InteractionDialerRuleSetAcls = (function(){
    var hasProps = false;

    function InteractionDialerRuleSetAcls() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerRuleSetAcls' });
        }

        InteractionDialerRuleSetAcls._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerRuleSetAcls, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerRuleSetAcls.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionDialerRuleSetAcl); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionDialerRuleSetAcl(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerRuleSetAcls.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerRuleSetAcls, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerRuleSetAcls' });

    Object.defineProperty(InteractionDialerRuleSetAcls, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerRuleSetAcls'] = InteractionDialerRuleSetAcls;

    return InteractionDialerRuleSetAcls;
}());

var InteractionDialerRuleSetAcl = (function(){
    var hasProps = false;

    function InteractionDialerRuleSetAcl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerRuleSetAcl' });
        }

        InteractionDialerRuleSetAcl._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerRuleSetAcl, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerRuleSetAcl.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerRuleSetAcl.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerRuleSetAcl, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerRuleSetAcl' });

    Object.defineProperty(InteractionDialerRuleSetAcl, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerRuleSetAcl'] = InteractionDialerRuleSetAcl;

    return InteractionDialerRuleSetAcl;
}());

var InteractionDialerScheduleAcls = (function(){
    var hasProps = false;

    function InteractionDialerScheduleAcls() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerScheduleAcls' });
        }

        InteractionDialerScheduleAcls._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerScheduleAcls, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerScheduleAcls.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionDialerScheduleAcl); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionDialerScheduleAcl(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerScheduleAcls.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerScheduleAcls, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerScheduleAcls' });

    Object.defineProperty(InteractionDialerScheduleAcls, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerScheduleAcls'] = InteractionDialerScheduleAcls;

    return InteractionDialerScheduleAcls;
}());

var InteractionDialerScheduleAcl = (function(){
    var hasProps = false;

    function InteractionDialerScheduleAcl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerScheduleAcl' });
        }

        InteractionDialerScheduleAcl._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerScheduleAcl, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerScheduleAcl.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerScheduleAcl.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerScheduleAcl, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerScheduleAcl' });

    Object.defineProperty(InteractionDialerScheduleAcl, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerScheduleAcl'] = InteractionDialerScheduleAcl;

    return InteractionDialerScheduleAcl;
}());

var InteractionDialerScriptAcls = (function(){
    var hasProps = false;

    function InteractionDialerScriptAcls() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerScriptAcls' });
        }

        InteractionDialerScriptAcls._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerScriptAcls, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerScriptAcls.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionDialerScriptAcl); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionDialerScriptAcl(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerScriptAcls.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerScriptAcls, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerScriptAcls' });

    Object.defineProperty(InteractionDialerScriptAcls, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerScriptAcls'] = InteractionDialerScriptAcls;

    return InteractionDialerScriptAcls;
}());

var InteractionDialerScriptAcl = (function(){
    var hasProps = false;

    function InteractionDialerScriptAcl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerScriptAcl' });
        }

        InteractionDialerScriptAcl._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerScriptAcl, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerScriptAcl.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerScriptAcl.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerScriptAcl, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerScriptAcl' });

    Object.defineProperty(InteractionDialerScriptAcl, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerScriptAcl'] = InteractionDialerScriptAcl;

    return InteractionDialerScriptAcl;
}());

var InteractionDialerSkillSetAcls = (function(){
    var hasProps = false;

    function InteractionDialerSkillSetAcls() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerSkillSetAcls' });
        }

        InteractionDialerSkillSetAcls._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerSkillSetAcls, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerSkillSetAcls.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionDialerSkillSetAcl); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionDialerSkillSetAcl(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerSkillSetAcls.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerSkillSetAcls, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerSkillSetAcls' });

    Object.defineProperty(InteractionDialerSkillSetAcls, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerSkillSetAcls'] = InteractionDialerSkillSetAcls;

    return InteractionDialerSkillSetAcls;
}());

var InteractionDialerSkillSetAcl = (function(){
    var hasProps = false;

    function InteractionDialerSkillSetAcl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerSkillSetAcl' });
        }

        InteractionDialerSkillSetAcl._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerSkillSetAcl, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerSkillSetAcl.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerSkillSetAcl.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerSkillSetAcl, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerSkillSetAcl' });

    Object.defineProperty(InteractionDialerSkillSetAcl, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerSkillSetAcl'] = InteractionDialerSkillSetAcl;

    return InteractionDialerSkillSetAcl;
}());

var InteractionDialerStageSetAcls = (function(){
    var hasProps = false;

    function InteractionDialerStageSetAcls() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerStageSetAcls' });
        }

        InteractionDialerStageSetAcls._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerStageSetAcls, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerStageSetAcls.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionDialerStageSetAcl); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionDialerStageSetAcl(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerStageSetAcls.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerStageSetAcls, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerStageSetAcls' });

    Object.defineProperty(InteractionDialerStageSetAcls, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerStageSetAcls'] = InteractionDialerStageSetAcls;

    return InteractionDialerStageSetAcls;
}());

var InteractionDialerStageSetAcl = (function(){
    var hasProps = false;

    function InteractionDialerStageSetAcl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerStageSetAcl' });
        }

        InteractionDialerStageSetAcl._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerStageSetAcl, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerStageSetAcl.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerStageSetAcl.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerStageSetAcl, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerStageSetAcl' });

    Object.defineProperty(InteractionDialerStageSetAcl, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerStageSetAcl'] = InteractionDialerStageSetAcl;

    return InteractionDialerStageSetAcl;
}());

var InteractionDialerZoneSetAcls = (function(){
    var hasProps = false;

    function InteractionDialerZoneSetAcls() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerZoneSetAcls' });
        }

        InteractionDialerZoneSetAcls._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerZoneSetAcls, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerZoneSetAcls.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionDialerZoneSetAcl); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionDialerZoneSetAcl(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerZoneSetAcls.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerZoneSetAcls, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerZoneSetAcls' });

    Object.defineProperty(InteractionDialerZoneSetAcls, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerZoneSetAcls'] = InteractionDialerZoneSetAcls;

    return InteractionDialerZoneSetAcls;
}());

var InteractionDialerZoneSetAcl = (function(){
    var hasProps = false;

    function InteractionDialerZoneSetAcl() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerZoneSetAcl' });
        }

        InteractionDialerZoneSetAcl._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionDialerZoneSetAcl, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionDialerZoneSetAcl.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionDialerZoneSetAcl.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionDialerZoneSetAcl, '__type', { value: 'urn:inin.com:configuration.interactionDialer:interactionDialerZoneSetAcl' });

    Object.defineProperty(InteractionDialerZoneSetAcl, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionDialer:interactionDialerZoneSetAcl'] = InteractionDialerZoneSetAcl;

    return InteractionDialerZoneSetAcl;
}());

var $interactionDialerCallListAcls = (function(){
    function getInteractionDialerCallListAcls(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerCallListAcls.params)) {
            try {
                params = new getInteractionDialerCallListAcls.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerCallListAcls.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerCallListAcls) ? o : new InteractionDialerCallListAcls(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerCallListAcls.method, getInteractionDialerCallListAcls.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerCallListAcls, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-call-list-acls', enumerable: true }
    });

    getInteractionDialerCallListAcls.params = (function(){
        _util.inherits(getInteractionDialerCallListAcls_params, _util.RequestParams);

        function getInteractionDialerCallListAcls_params(properties) {
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

            getInteractionDialerCallListAcls_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerCallListAcls_params;
    })();

    function getInteractionDialerCallListAcl(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerCallListAcl.params)) {
            try {
                params = new getInteractionDialerCallListAcl.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerCallListAcl.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerCallListAcl) ? o : new InteractionDialerCallListAcl(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerCallListAcl.method, getInteractionDialerCallListAcl.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerCallListAcl, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-call-list-acls/{id}', enumerable: true }
    });

    getInteractionDialerCallListAcl.params = (function(){
        _util.inherits(getInteractionDialerCallListAcl_params, _util.RequestParams);

        function getInteractionDialerCallListAcl_params(properties) {
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

            getInteractionDialerCallListAcl_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerCallListAcl_params;
    })();

    return Object.create(null, {
        getInteractionDialerCallListAcls: { value: getInteractionDialerCallListAcls, enumerable: true },
        getInteractionDialerCallListAcl: { value: getInteractionDialerCallListAcl, enumerable: true }
    });
})();

var $interactionDialerCampaignAcls = (function(){
    function getInteractionDialerCampaignAcls(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerCampaignAcls.params)) {
            try {
                params = new getInteractionDialerCampaignAcls.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerCampaignAcls.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerCampaignAcls) ? o : new InteractionDialerCampaignAcls(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerCampaignAcls.method, getInteractionDialerCampaignAcls.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerCampaignAcls, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-campaign-acls', enumerable: true }
    });

    getInteractionDialerCampaignAcls.params = (function(){
        _util.inherits(getInteractionDialerCampaignAcls_params, _util.RequestParams);

        function getInteractionDialerCampaignAcls_params(properties) {
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

            getInteractionDialerCampaignAcls_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerCampaignAcls_params;
    })();

    function getInteractionDialerCampaignAcl(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerCampaignAcl.params)) {
            try {
                params = new getInteractionDialerCampaignAcl.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerCampaignAcl.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerCampaignAcl) ? o : new InteractionDialerCampaignAcl(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerCampaignAcl.method, getInteractionDialerCampaignAcl.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerCampaignAcl, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-campaign-acls/{id}', enumerable: true }
    });

    getInteractionDialerCampaignAcl.params = (function(){
        _util.inherits(getInteractionDialerCampaignAcl_params, _util.RequestParams);

        function getInteractionDialerCampaignAcl_params(properties) {
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

            getInteractionDialerCampaignAcl_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerCampaignAcl_params;
    })();

    return Object.create(null, {
        getInteractionDialerCampaignAcls: { value: getInteractionDialerCampaignAcls, enumerable: true },
        getInteractionDialerCampaignAcl: { value: getInteractionDialerCampaignAcl, enumerable: true }
    });
})();

var $interactionDialerPolicySetAcls = (function(){
    function getInteractionDialerPolicySetAcls(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerPolicySetAcls.params)) {
            try {
                params = new getInteractionDialerPolicySetAcls.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerPolicySetAcls.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerPolicySetAcls) ? o : new InteractionDialerPolicySetAcls(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerPolicySetAcls.method, getInteractionDialerPolicySetAcls.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerPolicySetAcls, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-policy-set-acls', enumerable: true }
    });

    getInteractionDialerPolicySetAcls.params = (function(){
        _util.inherits(getInteractionDialerPolicySetAcls_params, _util.RequestParams);

        function getInteractionDialerPolicySetAcls_params(properties) {
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

            getInteractionDialerPolicySetAcls_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerPolicySetAcls_params;
    })();

    function getInteractionDialerPolicySetAcl(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerPolicySetAcl.params)) {
            try {
                params = new getInteractionDialerPolicySetAcl.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerPolicySetAcl.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerPolicySetAcl) ? o : new InteractionDialerPolicySetAcl(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerPolicySetAcl.method, getInteractionDialerPolicySetAcl.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerPolicySetAcl, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-policy-set-acls/{id}', enumerable: true }
    });

    getInteractionDialerPolicySetAcl.params = (function(){
        _util.inherits(getInteractionDialerPolicySetAcl_params, _util.RequestParams);

        function getInteractionDialerPolicySetAcl_params(properties) {
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

            getInteractionDialerPolicySetAcl_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerPolicySetAcl_params;
    })();

    return Object.create(null, {
        getInteractionDialerPolicySetAcls: { value: getInteractionDialerPolicySetAcls, enumerable: true },
        getInteractionDialerPolicySetAcl: { value: getInteractionDialerPolicySetAcl, enumerable: true }
    });
})();

var $interactionDialerRuleSetAcls = (function(){
    function getInteractionDialerRuleSetAcls(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerRuleSetAcls.params)) {
            try {
                params = new getInteractionDialerRuleSetAcls.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerRuleSetAcls.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerRuleSetAcls) ? o : new InteractionDialerRuleSetAcls(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerRuleSetAcls.method, getInteractionDialerRuleSetAcls.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerRuleSetAcls, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-rule-set-acls', enumerable: true }
    });

    getInteractionDialerRuleSetAcls.params = (function(){
        _util.inherits(getInteractionDialerRuleSetAcls_params, _util.RequestParams);

        function getInteractionDialerRuleSetAcls_params(properties) {
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

            getInteractionDialerRuleSetAcls_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerRuleSetAcls_params;
    })();

    function getInteractionDialerRuleSetAcl(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerRuleSetAcl.params)) {
            try {
                params = new getInteractionDialerRuleSetAcl.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerRuleSetAcl.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerRuleSetAcl) ? o : new InteractionDialerRuleSetAcl(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerRuleSetAcl.method, getInteractionDialerRuleSetAcl.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerRuleSetAcl, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-rule-set-acls/{id}', enumerable: true }
    });

    getInteractionDialerRuleSetAcl.params = (function(){
        _util.inherits(getInteractionDialerRuleSetAcl_params, _util.RequestParams);

        function getInteractionDialerRuleSetAcl_params(properties) {
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

            getInteractionDialerRuleSetAcl_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerRuleSetAcl_params;
    })();

    return Object.create(null, {
        getInteractionDialerRuleSetAcls: { value: getInteractionDialerRuleSetAcls, enumerable: true },
        getInteractionDialerRuleSetAcl: { value: getInteractionDialerRuleSetAcl, enumerable: true }
    });
})();

var $interactionDialerScheduleAcls = (function(){
    function getInteractionDialerScheduleAcls(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerScheduleAcls.params)) {
            try {
                params = new getInteractionDialerScheduleAcls.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerScheduleAcls.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerScheduleAcls) ? o : new InteractionDialerScheduleAcls(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerScheduleAcls.method, getInteractionDialerScheduleAcls.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerScheduleAcls, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-schedule-acls', enumerable: true }
    });

    getInteractionDialerScheduleAcls.params = (function(){
        _util.inherits(getInteractionDialerScheduleAcls_params, _util.RequestParams);

        function getInteractionDialerScheduleAcls_params(properties) {
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

            getInteractionDialerScheduleAcls_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerScheduleAcls_params;
    })();

    function getInteractionDialerScheduleAcl(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerScheduleAcl.params)) {
            try {
                params = new getInteractionDialerScheduleAcl.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerScheduleAcl.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerScheduleAcl) ? o : new InteractionDialerScheduleAcl(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerScheduleAcl.method, getInteractionDialerScheduleAcl.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerScheduleAcl, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-schedule-acls/{id}', enumerable: true }
    });

    getInteractionDialerScheduleAcl.params = (function(){
        _util.inherits(getInteractionDialerScheduleAcl_params, _util.RequestParams);

        function getInteractionDialerScheduleAcl_params(properties) {
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

            getInteractionDialerScheduleAcl_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerScheduleAcl_params;
    })();

    return Object.create(null, {
        getInteractionDialerScheduleAcls: { value: getInteractionDialerScheduleAcls, enumerable: true },
        getInteractionDialerScheduleAcl: { value: getInteractionDialerScheduleAcl, enumerable: true }
    });
})();

var $interactionDialerScriptAcls = (function(){
    function getInteractionDialerScriptAcls(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerScriptAcls.params)) {
            try {
                params = new getInteractionDialerScriptAcls.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerScriptAcls.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerScriptAcls) ? o : new InteractionDialerScriptAcls(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerScriptAcls.method, getInteractionDialerScriptAcls.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerScriptAcls, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-script-acls', enumerable: true }
    });

    getInteractionDialerScriptAcls.params = (function(){
        _util.inherits(getInteractionDialerScriptAcls_params, _util.RequestParams);

        function getInteractionDialerScriptAcls_params(properties) {
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

            getInteractionDialerScriptAcls_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerScriptAcls_params;
    })();

    function getInteractionDialerScriptAcl(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerScriptAcl.params)) {
            try {
                params = new getInteractionDialerScriptAcl.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerScriptAcl.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerScriptAcl) ? o : new InteractionDialerScriptAcl(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerScriptAcl.method, getInteractionDialerScriptAcl.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerScriptAcl, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-script-acls/{id}', enumerable: true }
    });

    getInteractionDialerScriptAcl.params = (function(){
        _util.inherits(getInteractionDialerScriptAcl_params, _util.RequestParams);

        function getInteractionDialerScriptAcl_params(properties) {
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

            getInteractionDialerScriptAcl_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerScriptAcl_params;
    })();

    return Object.create(null, {
        getInteractionDialerScriptAcls: { value: getInteractionDialerScriptAcls, enumerable: true },
        getInteractionDialerScriptAcl: { value: getInteractionDialerScriptAcl, enumerable: true }
    });
})();

var $interactionDialerSkillSetAcls = (function(){
    function getInteractionDialerSkillSetAcls(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerSkillSetAcls.params)) {
            try {
                params = new getInteractionDialerSkillSetAcls.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerSkillSetAcls.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerSkillSetAcls) ? o : new InteractionDialerSkillSetAcls(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerSkillSetAcls.method, getInteractionDialerSkillSetAcls.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerSkillSetAcls, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-skill-set-acls', enumerable: true }
    });

    getInteractionDialerSkillSetAcls.params = (function(){
        _util.inherits(getInteractionDialerSkillSetAcls_params, _util.RequestParams);

        function getInteractionDialerSkillSetAcls_params(properties) {
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

            getInteractionDialerSkillSetAcls_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerSkillSetAcls_params;
    })();

    function getInteractionDialerSkillSetAcl(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerSkillSetAcl.params)) {
            try {
                params = new getInteractionDialerSkillSetAcl.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerSkillSetAcl.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerSkillSetAcl) ? o : new InteractionDialerSkillSetAcl(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerSkillSetAcl.method, getInteractionDialerSkillSetAcl.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerSkillSetAcl, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-skill-set-acls/{id}', enumerable: true }
    });

    getInteractionDialerSkillSetAcl.params = (function(){
        _util.inherits(getInteractionDialerSkillSetAcl_params, _util.RequestParams);

        function getInteractionDialerSkillSetAcl_params(properties) {
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

            getInteractionDialerSkillSetAcl_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerSkillSetAcl_params;
    })();

    return Object.create(null, {
        getInteractionDialerSkillSetAcls: { value: getInteractionDialerSkillSetAcls, enumerable: true },
        getInteractionDialerSkillSetAcl: { value: getInteractionDialerSkillSetAcl, enumerable: true }
    });
})();

var $interactionDialerStageSetAcls = (function(){
    function getInteractionDialerStageSetAcls(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerStageSetAcls.params)) {
            try {
                params = new getInteractionDialerStageSetAcls.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerStageSetAcls.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerStageSetAcls) ? o : new InteractionDialerStageSetAcls(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerStageSetAcls.method, getInteractionDialerStageSetAcls.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerStageSetAcls, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-stage-set-acls', enumerable: true }
    });

    getInteractionDialerStageSetAcls.params = (function(){
        _util.inherits(getInteractionDialerStageSetAcls_params, _util.RequestParams);

        function getInteractionDialerStageSetAcls_params(properties) {
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

            getInteractionDialerStageSetAcls_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerStageSetAcls_params;
    })();

    function getInteractionDialerStageSetAcl(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerStageSetAcl.params)) {
            try {
                params = new getInteractionDialerStageSetAcl.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerStageSetAcl.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerStageSetAcl) ? o : new InteractionDialerStageSetAcl(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerStageSetAcl.method, getInteractionDialerStageSetAcl.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerStageSetAcl, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-stage-set-acls/{id}', enumerable: true }
    });

    getInteractionDialerStageSetAcl.params = (function(){
        _util.inherits(getInteractionDialerStageSetAcl_params, _util.RequestParams);

        function getInteractionDialerStageSetAcl_params(properties) {
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

            getInteractionDialerStageSetAcl_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerStageSetAcl_params;
    })();

    return Object.create(null, {
        getInteractionDialerStageSetAcls: { value: getInteractionDialerStageSetAcls, enumerable: true },
        getInteractionDialerStageSetAcl: { value: getInteractionDialerStageSetAcl, enumerable: true }
    });
})();

var $interactionDialerZoneSetAcls = (function(){
    function getInteractionDialerZoneSetAcls(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerZoneSetAcls.params)) {
            try {
                params = new getInteractionDialerZoneSetAcls.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerZoneSetAcls.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerZoneSetAcls) ? o : new InteractionDialerZoneSetAcls(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerZoneSetAcls.method, getInteractionDialerZoneSetAcls.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerZoneSetAcls, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-zone-set-acls', enumerable: true }
    });

    getInteractionDialerZoneSetAcls.params = (function(){
        _util.inherits(getInteractionDialerZoneSetAcls_params, _util.RequestParams);

        function getInteractionDialerZoneSetAcls_params(properties) {
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

            getInteractionDialerZoneSetAcls_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerZoneSetAcls_params;
    })();

    function getInteractionDialerZoneSetAcl(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionDialerZoneSetAcl.params)) {
            try {
                params = new getInteractionDialerZoneSetAcl.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionDialerZoneSetAcl.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionDialerZoneSetAcl) ? o : new InteractionDialerZoneSetAcl(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionDialerZoneSetAcl.method, getInteractionDialerZoneSetAcl.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionDialerZoneSetAcl, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-dialer-zone-set-acls/{id}', enumerable: true }
    });

    getInteractionDialerZoneSetAcl.params = (function(){
        _util.inherits(getInteractionDialerZoneSetAcl_params, _util.RequestParams);

        function getInteractionDialerZoneSetAcl_params(properties) {
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

            getInteractionDialerZoneSetAcl_params._super.constructor.apply(this, arguments);
        }

        return getInteractionDialerZoneSetAcl_params;
    })();

    return Object.create(null, {
        getInteractionDialerZoneSetAcls: { value: getInteractionDialerZoneSetAcls, enumerable: true },
        getInteractionDialerZoneSetAcl: { value: getInteractionDialerZoneSetAcl, enumerable: true }
    });
})();

exports.InteractionDialerCallListAcls = InteractionDialerCallListAcls;
exports.InteractionDialerCallListAcl = InteractionDialerCallListAcl;
exports.InteractionDialerCampaignAcls = InteractionDialerCampaignAcls;
exports.InteractionDialerCampaignAcl = InteractionDialerCampaignAcl;
exports.InteractionDialerPolicySetAcls = InteractionDialerPolicySetAcls;
exports.InteractionDialerPolicySetAcl = InteractionDialerPolicySetAcl;
exports.InteractionDialerRuleSetAcls = InteractionDialerRuleSetAcls;
exports.InteractionDialerRuleSetAcl = InteractionDialerRuleSetAcl;
exports.InteractionDialerScheduleAcls = InteractionDialerScheduleAcls;
exports.InteractionDialerScheduleAcl = InteractionDialerScheduleAcl;
exports.InteractionDialerScriptAcls = InteractionDialerScriptAcls;
exports.InteractionDialerScriptAcl = InteractionDialerScriptAcl;
exports.InteractionDialerSkillSetAcls = InteractionDialerSkillSetAcls;
exports.InteractionDialerSkillSetAcl = InteractionDialerSkillSetAcl;
exports.InteractionDialerStageSetAcls = InteractionDialerStageSetAcls;
exports.InteractionDialerStageSetAcl = InteractionDialerStageSetAcl;
exports.InteractionDialerZoneSetAcls = InteractionDialerZoneSetAcls;
exports.InteractionDialerZoneSetAcl = InteractionDialerZoneSetAcl;
exports.$interactionDialerCallListAcls = $interactionDialerCallListAcls;
exports.$interactionDialerCampaignAcls = $interactionDialerCampaignAcls;
exports.$interactionDialerPolicySetAcls = $interactionDialerPolicySetAcls;
exports.$interactionDialerRuleSetAcls = $interactionDialerRuleSetAcls;
exports.$interactionDialerScheduleAcls = $interactionDialerScheduleAcls;
exports.$interactionDialerScriptAcls = $interactionDialerScriptAcls;
exports.$interactionDialerSkillSetAcls = $interactionDialerSkillSetAcls;
exports.$interactionDialerStageSetAcls = $interactionDialerStageSetAcls;
exports.$interactionDialerZoneSetAcls = $interactionDialerZoneSetAcls;
