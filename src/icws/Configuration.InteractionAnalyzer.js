/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Configuration = require('./Configuration');
var Common = require('./Common');

var KeywordSet = (function(){
    var hasProps = false;

    function KeywordSet() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionAnalyzer:keywordSet' });
        }

        KeywordSet._super.constructor.apply(this, arguments);
    }
    _util.inherits(KeywordSet, _util.DataContract);

    function defineProps() {
        Object.defineProperty(KeywordSet.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting KeywordSet.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(KeywordSet.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for KeywordSet.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(KeywordSet.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting KeywordSet.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(KeywordSet.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for KeywordSet.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(KeywordSet.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for KeywordSet.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(KeywordSet.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting KeywordSet.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(KeywordSet.prototype, 'category', {
            get: function() { return this.__prop_category; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for KeywordSet.category, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_category = value;
            },
            enumerable: true
        });

        Object.defineProperty(KeywordSet.prototype, 'keywords', {
            get: function() { return this.__prop_keywords; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Keyword); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Keyword(item); });
                    } catch (e) {
                        throw new TypeError('Error setting KeywordSet.keywords: ' + e.message);
                    }
                }

                this.__prop_keywords = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(KeywordSet, '__type', { value: 'urn:inin.com:configuration.interactionAnalyzer:keywordSet' });

    Object.defineProperty(KeywordSet, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'category': { required: false, nullable: true },
                'keywords': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionAnalyzer:keywordSet'] = KeywordSet;

    return KeywordSet;
}());

var Keyword = (function(){
    var hasProps = false;

    function Keyword() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionAnalyzer:keyword' });
        }

        Keyword._super.constructor.apply(this, arguments);
    }
    _util.inherits(Keyword, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Keyword.prototype, 'agentScore', {
            get: function() { return this.__prop_agentScore; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Keyword.agentScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_agentScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(Keyword.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Keyword.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Keyword.prototype, 'customerScore', {
            get: function() { return this.__prop_customerScore; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Keyword.customerScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_customerScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(Keyword.prototype, 'language', {
            get: function() { return this.__prop_language; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Keyword.language, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_language = value;
            },
            enumerable: true
        });

        Object.defineProperty(Keyword.prototype, 'minimumConfidenceThreshold', {
            get: function() { return this.__prop_minimumConfidenceThreshold; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Keyword.minimumConfidenceThreshold, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minimumConfidenceThreshold = value;
            },
            enumerable: true
        });

        Object.defineProperty(Keyword.prototype, 'userAntiPronunciations', {
            get: function() { return this.__prop_userAntiPronunciations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for Keyword.userAntiPronunciations, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userAntiPronunciations = value;
            },
            enumerable: true
        });

        Object.defineProperty(Keyword.prototype, 'userAntiWords', {
            get: function() { return this.__prop_userAntiWords; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for Keyword.userAntiWords, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userAntiWords = value;
            },
            enumerable: true
        });

        Object.defineProperty(Keyword.prototype, 'userPronunciations', {
            get: function() { return this.__prop_userPronunciations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for Keyword.userPronunciations, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userPronunciations = value;
            },
            enumerable: true
        });

        Object.defineProperty(Keyword.prototype, 'userWords', {
            get: function() { return this.__prop_userWords; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for Keyword.userWords, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userWords = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Keyword, '__type', { value: 'urn:inin.com:configuration.interactionAnalyzer:keyword' });

    Object.defineProperty(Keyword, '__propInfo', {
        get: function() {
            var pi = {
                'agentScore': { required: false, nullable: true },
                'configurationId': { required: false, nullable: true },
                'customerScore': { required: false, nullable: true },
                'language': { required: false, nullable: true },
                'minimumConfidenceThreshold': { required: false, nullable: true },
                'userAntiPronunciations': { required: false, nullable: true },
                'userAntiWords': { required: false, nullable: true },
                'userPronunciations': { required: false, nullable: true },
                'userWords': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionAnalyzer:keyword'] = Keyword;

    return Keyword;
}());

var KeywordsBulkUpdate = (function(){
    var hasProps = false;

    function KeywordsBulkUpdate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionAnalyzer:keywordsBulkUpdate' });
        }

        KeywordsBulkUpdate._super.constructor.apply(this, arguments);
    }
    _util.inherits(KeywordsBulkUpdate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(KeywordsBulkUpdate.prototype, 'add', {
            get: function() { return this.__prop_add; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Keyword); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Keyword(item); });
                    } catch (e) {
                        throw new TypeError('Error setting KeywordsBulkUpdate.add: ' + e.message);
                    }
                }

                this.__prop_add = value;
            },
            enumerable: true
        });

        Object.defineProperty(KeywordsBulkUpdate.prototype, 'modify', {
            get: function() { return this.__prop_modify; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Keyword); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Keyword(item); });
                    } catch (e) {
                        throw new TypeError('Error setting KeywordsBulkUpdate.modify: ' + e.message);
                    }
                }

                this.__prop_modify = value;
            },
            enumerable: true
        });

        Object.defineProperty(KeywordsBulkUpdate.prototype, 'remove', {
            get: function() { return this.__prop_remove; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for KeywordsBulkUpdate.remove, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remove = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(KeywordsBulkUpdate, '__type', { value: 'urn:inin.com:configuration.interactionAnalyzer:keywordsBulkUpdate' });

    Object.defineProperty(KeywordsBulkUpdate, '__propInfo', {
        get: function() {
            var pi = {
                'add': { required: false, nullable: true },
                'modify': { required: false, nullable: true },
                'remove': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionAnalyzer:keywordsBulkUpdate'] = KeywordsBulkUpdate;

    return KeywordsBulkUpdate;
}());

var KeywordSets = (function(){
    var hasProps = false;

    function KeywordSets() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionAnalyzer:keywordSets' });
        }

        KeywordSets._super.constructor.apply(this, arguments);
    }
    _util.inherits(KeywordSets, _util.DataContract);

    function defineProps() {
        Object.defineProperty(KeywordSets.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof KeywordSet); }))) {
                    try {
                        value = value.map(function(item){ return new KeywordSet(item); });
                    } catch (e) {
                        throw new TypeError('Error setting KeywordSets.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(KeywordSets, '__type', { value: 'urn:inin.com:configuration.interactionAnalyzer:keywordSets' });

    Object.defineProperty(KeywordSets, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionAnalyzer:keywordSets'] = KeywordSets;

    return KeywordSets;
}());

var PreviewKeywordRuntimeResult = (function(){
    var hasProps = false;

    function PreviewKeywordRuntimeResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionAnalyzer:previewKeywordRuntimeResult' });
        }

        PreviewKeywordRuntimeResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(PreviewKeywordRuntimeResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PreviewKeywordRuntimeResult.prototype, 'accuracyIndex', {
            get: function() { return this.__prop_accuracyIndex; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PreviewKeywordRuntimeResult.accuracyIndex, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accuracyIndex = value;
            },
            enumerable: true
        });

        Object.defineProperty(PreviewKeywordRuntimeResult.prototype, 'accuracyIndexStandardDeviation', {
            get: function() { return this.__prop_accuracyIndexStandardDeviation; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PreviewKeywordRuntimeResult.accuracyIndexStandardDeviation, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accuracyIndexStandardDeviation = value;
            },
            enumerable: true
        });

        Object.defineProperty(PreviewKeywordRuntimeResult.prototype, 'runtimePronunciations', {
            get: function() { return this.__prop_runtimePronunciations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for PreviewKeywordRuntimeResult.runtimePronunciations, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_runtimePronunciations = value;
            },
            enumerable: true
        });

        Object.defineProperty(PreviewKeywordRuntimeResult.prototype, 'runtimeAntiPronunciations', {
            get: function() { return this.__prop_runtimeAntiPronunciations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for PreviewKeywordRuntimeResult.runtimeAntiPronunciations, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_runtimeAntiPronunciations = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PreviewKeywordRuntimeResult, '__type', { value: 'urn:inin.com:configuration.interactionAnalyzer:previewKeywordRuntimeResult' });

    Object.defineProperty(PreviewKeywordRuntimeResult, '__propInfo', {
        get: function() {
            var pi = {
                'accuracyIndex': { required: true, nullable: false },
                'accuracyIndexStandardDeviation': { required: true, nullable: false },
                'runtimePronunciations': { required: true, nullable: false },
                'runtimeAntiPronunciations': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionAnalyzer:previewKeywordRuntimeResult'] = PreviewKeywordRuntimeResult;

    return PreviewKeywordRuntimeResult;
}());

var KeywordSetsMessage = (function(){
    var hasProps = false;

    function KeywordSetsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.interactionAnalyzer:keywordSetsMessage', enumerable: true });
        }

        KeywordSetsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(KeywordSetsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(KeywordSetsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof KeywordSet); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new KeywordSet(item); });
                    } catch (e) {
                        throw new TypeError('Error setting KeywordSetsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(KeywordSetsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof KeywordSet); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new KeywordSet(item); });
                    } catch (e) {
                        throw new TypeError('Error setting KeywordSetsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(KeywordSetsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for KeywordSetsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(KeywordSetsMessage, '__type', { value: 'urn:inin.com:configuration.interactionAnalyzer:keywordSetsMessage' });

    Object.defineProperty(KeywordSetsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.interactionAnalyzer:keywordSetsMessage'] = KeywordSetsMessage;

    return KeywordSetsMessage;
}());

var $licensedLanguages = (function(){
    function licensedLanguages(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof licensedLanguages.params)) {
            try {
                params = new licensedLanguages.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: licensedLanguages.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.LicensedLanguagesResult) ? o : new Configuration.LicensedLanguagesResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(licensedLanguages.method, licensedLanguages.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(licensedLanguages, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-analyzer/licensed-languages', enumerable: true }
    });

    licensedLanguages.params = (function(){
        _util.inherits(licensedLanguages_params, _util.RequestParams);

        function licensedLanguages_params(properties) {
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

            licensedLanguages_params._super.constructor.apply(this, arguments);
        }

        return licensedLanguages_params;
    })();

    return Object.create(null, {
        licensedLanguages: { value: licensedLanguages, enumerable: true }
    });
})();

var $supportedLanguages = (function(){
    function supportedLanguages(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof supportedLanguages.params)) {
            try {
                params = new supportedLanguages.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: supportedLanguages.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.SupportedLanguagesResult) ? o : new Configuration.SupportedLanguagesResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(supportedLanguages.method, supportedLanguages.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(supportedLanguages, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-analyzer/supported-languages', enumerable: true }
    });

    supportedLanguages.params = (function(){
        _util.inherits(supportedLanguages_params, _util.RequestParams);

        function supportedLanguages_params(properties) {
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

            supportedLanguages_params._super.constructor.apply(this, arguments);
        }

        return supportedLanguages_params;
    })();

    return Object.create(null, {
        supportedLanguages: { value: supportedLanguages, enumerable: true }
    });
})();

var $keywordSets = (function(){
    function getKeywordSets(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getKeywordSets.params)) {
            try {
                params = new getKeywordSets.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getKeywordSets.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof KeywordSets) ? o : new KeywordSets(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getKeywordSets.method, getKeywordSets.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getKeywordSets, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/keyword-sets', enumerable: true }
    });

    getKeywordSets.params = (function(){
        _util.inherits(getKeywordSets_params, _util.RequestParams);

        function getKeywordSets_params(properties) {
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

            getKeywordSets_params._super.constructor.apply(this, arguments);
        }

        return getKeywordSets_params;
    })();

    function createKeywordSet(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createKeywordSet.params)) {
            try {
                params = new createKeywordSet.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createKeywordSet.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createKeywordSet.method, createKeywordSet.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createKeywordSet, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/keyword-sets', enumerable: true }
    });

    createKeywordSet.params = (function(){
        _util.inherits(createKeywordSet_params, _util.RequestParams);

        function createKeywordSet_params(properties) {
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
            if (!(properties.content instanceof KeywordSet)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.InteractionAnalyzer.KeywordSet');
            }

            createKeywordSet_params._super.constructor.apply(this, arguments);
        }

        return createKeywordSet_params;
    })();

    function getKeywordSet(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getKeywordSet.params)) {
            try {
                params = new getKeywordSet.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getKeywordSet.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof KeywordSet) ? o : new KeywordSet(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getKeywordSet.method, getKeywordSet.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getKeywordSet, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/keyword-sets/{id}', enumerable: true }
    });

    getKeywordSet.params = (function(){
        _util.inherits(getKeywordSet_params, _util.RequestParams);

        function getKeywordSet_params(properties) {
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

            getKeywordSet_params._super.constructor.apply(this, arguments);
        }

        return getKeywordSet_params;
    })();

    function deleteKeywordSet(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteKeywordSet.params)) {
            try {
                params = new deleteKeywordSet.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteKeywordSet.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteKeywordSet.method, deleteKeywordSet.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteKeywordSet, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/keyword-sets/{id}', enumerable: true }
    });

    deleteKeywordSet.params = (function(){
        _util.inherits(deleteKeywordSet_params, _util.RequestParams);

        function deleteKeywordSet_params(properties) {
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

            deleteKeywordSet_params._super.constructor.apply(this, arguments);
        }

        return deleteKeywordSet_params;
    })();

    function updateKeywordSet(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateKeywordSet.params)) {
            try {
                params = new updateKeywordSet.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateKeywordSet.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateKeywordSet.method, updateKeywordSet.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateKeywordSet, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/keyword-sets/{id}', enumerable: true }
    });

    updateKeywordSet.params = (function(){
        _util.inherits(updateKeywordSet_params, _util.RequestParams);

        function updateKeywordSet_params(properties) {
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
            if (!(properties.content instanceof KeywordSet)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.InteractionAnalyzer.KeywordSet');
            }

            updateKeywordSet_params._super.constructor.apply(this, arguments);
        }

        return updateKeywordSet_params;
    })();

    return Object.create(null, {
        getKeywordSets: { value: getKeywordSets, enumerable: true },
        createKeywordSet: { value: createKeywordSet, enumerable: true },
        getKeywordSet: { value: getKeywordSet, enumerable: true },
        deleteKeywordSet: { value: deleteKeywordSet, enumerable: true },
        updateKeywordSet: { value: updateKeywordSet, enumerable: true }
    });
})();

exports.KeywordSetsMessage = KeywordSetsMessage;
exports.KeywordSet = KeywordSet;
exports.Keyword = Keyword;
exports.KeywordsBulkUpdate = KeywordsBulkUpdate;
exports.KeywordSets = KeywordSets;
exports.PreviewKeywordRuntimeResult = PreviewKeywordRuntimeResult;
exports.$licensedLanguages = $licensedLanguages;
exports.$supportedLanguages = $supportedLanguages;
exports.$keywordSets = $keywordSets;
