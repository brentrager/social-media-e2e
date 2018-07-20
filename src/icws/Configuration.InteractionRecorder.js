/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Configuration = require('./Configuration');
var Common = require('./Common');

var InteractionRecorderConfiguration = (function(){
    var hasProps = false;

    function InteractionRecorderConfiguration() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionRecorder:interactionRecorderConfiguration' });
        }

        InteractionRecorderConfiguration._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionRecorderConfiguration, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionRecorderConfiguration.prototype, 'enableSnippetRecordings', {
            get: function() { return this.__prop_enableSnippetRecordings; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for InteractionRecorderConfiguration.enableSnippetRecordings, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_enableSnippetRecordings = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionRecorderConfiguration.prototype, 'forceHandsetPlayback', {
            get: function() { return this.__prop_forceHandsetPlayback; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for InteractionRecorderConfiguration.forceHandsetPlayback, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_forceHandsetPlayback = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionRecorderConfiguration, '__type', { value: 'urn:inin.com:configuration.interactionRecorder:interactionRecorderConfiguration' });

    Object.defineProperty(InteractionRecorderConfiguration, '__propInfo', {
        get: function() {
            var pi = {
                'enableSnippetRecordings': { required: false, nullable: true },
                'forceHandsetPlayback': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionRecorder:interactionRecorderConfiguration'] = InteractionRecorderConfiguration;

    return InteractionRecorderConfiguration;
}());

var InteractionRecorderQuestionnaires = (function(){
    var hasProps = false;

    function InteractionRecorderQuestionnaires() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionRecorder:interactionRecorderQuestionnaires' });
        }

        InteractionRecorderQuestionnaires._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionRecorderQuestionnaires, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionRecorderQuestionnaires.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof InteractionRecorderQuestionnaire); }))) {
                    try {
                        value = value.map(function(item){ return new InteractionRecorderQuestionnaire(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionRecorderQuestionnaires.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionRecorderQuestionnaires, '__type', { value: 'urn:inin.com:configuration.interactionRecorder:interactionRecorderQuestionnaires' });

    Object.defineProperty(InteractionRecorderQuestionnaires, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionRecorder:interactionRecorderQuestionnaires'] = InteractionRecorderQuestionnaires;

    return InteractionRecorderQuestionnaires;
}());

var InteractionRecorderQuestionnaire = (function(){
    var hasProps = false;

    function InteractionRecorderQuestionnaire() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionRecorder:interactionRecorderQuestionnaire' });
        }

        InteractionRecorderQuestionnaire._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionRecorderQuestionnaire, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionRecorderQuestionnaire.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionRecorderQuestionnaire.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionRecorderQuestionnaire, '__type', { value: 'urn:inin.com:configuration.interactionRecorder:interactionRecorderQuestionnaire' });

    Object.defineProperty(InteractionRecorderQuestionnaire, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionRecorder:interactionRecorderQuestionnaire'] = InteractionRecorderQuestionnaire;

    return InteractionRecorderQuestionnaire;
}());

var InteractionRecorderConfigurationMessage = (function(){
    var hasProps = false;

    function InteractionRecorderConfigurationMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionRecorder:interactionRecorderConfigurationMessage', enumerable: true });
        }

        InteractionRecorderConfigurationMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionRecorderConfigurationMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(InteractionRecorderConfigurationMessage.prototype, 'interactionRecorderConfiguration', {
            get: function() { return this.__prop_interactionRecorderConfiguration; },
            set: function(value) {
                if (!(value instanceof InteractionRecorderConfiguration)) {
                    try {
                        value = new InteractionRecorderConfiguration(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionRecorderConfigurationMessage.interactionRecorderConfiguration: ' + e.message);
                    }
                }

                this.__prop_interactionRecorderConfiguration = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionRecorderConfigurationMessage, '__type', { value: 'urn:inin.com:configuration.interactionRecorder:interactionRecorderConfigurationMessage' });

    Object.defineProperty(InteractionRecorderConfigurationMessage, '__propInfo', {
        get: function() {
            var pi = {
                'interactionRecorderConfiguration': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionRecorder:interactionRecorderConfigurationMessage'] = InteractionRecorderConfigurationMessage;

    return InteractionRecorderConfigurationMessage;
}());

var $interactionRecorderConfiguration = (function(){
    function getInteractionRecorderConfiguration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionRecorderConfiguration.params)) {
            try {
                params = new getInteractionRecorderConfiguration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionRecorderConfiguration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionRecorderConfiguration) ? o : new InteractionRecorderConfiguration(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionRecorderConfiguration.method, getInteractionRecorderConfiguration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionRecorderConfiguration, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-recorder-configuration', enumerable: true }
    });

    getInteractionRecorderConfiguration.params = (function(){
        _util.inherits(getInteractionRecorderConfiguration_params, _util.RequestParams);

        function getInteractionRecorderConfiguration_params(properties) {
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

            getInteractionRecorderConfiguration_params._super.constructor.apply(this, arguments);
        }

        return getInteractionRecorderConfiguration_params;
    })();

    function updateInteractionRecorderConfiguration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateInteractionRecorderConfiguration.params)) {
            try {
                params = new updateInteractionRecorderConfiguration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateInteractionRecorderConfiguration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateInteractionRecorderConfiguration.method, updateInteractionRecorderConfiguration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateInteractionRecorderConfiguration, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-recorder-configuration', enumerable: true }
    });

    updateInteractionRecorderConfiguration.params = (function(){
        _util.inherits(updateInteractionRecorderConfiguration_params, _util.RequestParams);

        function updateInteractionRecorderConfiguration_params(properties) {
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
            if (!(properties.content instanceof InteractionRecorderConfiguration)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.InteractionRecorder.InteractionRecorderConfiguration');
            }

            updateInteractionRecorderConfiguration_params._super.constructor.apply(this, arguments);
        }

        return updateInteractionRecorderConfiguration_params;
    })();

    return Object.create(null, {
        getInteractionRecorderConfiguration: { value: getInteractionRecorderConfiguration, enumerable: true },
        updateInteractionRecorderConfiguration: { value: updateInteractionRecorderConfiguration, enumerable: true }
    });
})();

var $interactionRecorderQuestionnaires = (function(){
    function getInteractionRecorderQuestionnaires(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionRecorderQuestionnaires.params)) {
            try {
                params = new getInteractionRecorderQuestionnaires.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionRecorderQuestionnaires.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionRecorderQuestionnaires) ? o : new InteractionRecorderQuestionnaires(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionRecorderQuestionnaires.method, getInteractionRecorderQuestionnaires.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionRecorderQuestionnaires, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-recorder-questionnaires', enumerable: true }
    });

    getInteractionRecorderQuestionnaires.params = (function(){
        _util.inherits(getInteractionRecorderQuestionnaires_params, _util.RequestParams);

        function getInteractionRecorderQuestionnaires_params(properties) {
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

            getInteractionRecorderQuestionnaires_params._super.constructor.apply(this, arguments);
        }

        return getInteractionRecorderQuestionnaires_params;
    })();

    function getInteractionRecorderQuestionnaire(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionRecorderQuestionnaire.params)) {
            try {
                params = new getInteractionRecorderQuestionnaire.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionRecorderQuestionnaire.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionRecorderQuestionnaire) ? o : new InteractionRecorderQuestionnaire(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionRecorderQuestionnaire.method, getInteractionRecorderQuestionnaire.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionRecorderQuestionnaire, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-recorder-questionnaires/{id}', enumerable: true }
    });

    getInteractionRecorderQuestionnaire.params = (function(){
        _util.inherits(getInteractionRecorderQuestionnaire_params, _util.RequestParams);

        function getInteractionRecorderQuestionnaire_params(properties) {
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

            getInteractionRecorderQuestionnaire_params._super.constructor.apply(this, arguments);
        }

        return getInteractionRecorderQuestionnaire_params;
    })();

    return Object.create(null, {
        getInteractionRecorderQuestionnaires: { value: getInteractionRecorderQuestionnaires, enumerable: true },
        getInteractionRecorderQuestionnaire: { value: getInteractionRecorderQuestionnaire, enumerable: true }
    });
})();

exports.InteractionRecorderConfigurationMessage = InteractionRecorderConfigurationMessage;
exports.InteractionRecorderConfiguration = InteractionRecorderConfiguration;
exports.InteractionRecorderQuestionnaires = InteractionRecorderQuestionnaires;
exports.InteractionRecorderQuestionnaire = InteractionRecorderQuestionnaire;
exports.$interactionRecorderConfiguration = $interactionRecorderConfiguration;
exports.$interactionRecorderQuestionnaires = $interactionRecorderQuestionnaires;
