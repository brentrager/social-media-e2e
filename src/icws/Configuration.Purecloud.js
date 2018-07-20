/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration = require('./Configuration');
var Common = require('./Common');

var PurecloudBridgeConnectors = (function(){
    var hasProps = false;

    function PurecloudBridgeConnectors() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.purecloud:purecloudBridgeConnectors' });
        }

        PurecloudBridgeConnectors._super.constructor.apply(this, arguments);
    }
    _util.inherits(PurecloudBridgeConnectors, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PurecloudBridgeConnectors.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PurecloudBridgeConnector); }))) {
                    try {
                        value = value.map(function(item){ return new PurecloudBridgeConnector(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PurecloudBridgeConnectors.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PurecloudBridgeConnectors, '__type', { value: 'urn:inin.com:configuration.purecloud:purecloudBridgeConnectors' });

    Object.defineProperty(PurecloudBridgeConnectors, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.purecloud:purecloudBridgeConnectors'] = PurecloudBridgeConnectors;

    return PurecloudBridgeConnectors;
}());

var PurecloudBridgeConnector = (function(){
    var hasProps = false;

    function PurecloudBridgeConnector() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.purecloud:purecloudBridgeConnector' });
        }

        PurecloudBridgeConnector._super.constructor.apply(this, arguments);
    }
    _util.inherits(PurecloudBridgeConnector, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PurecloudBridgeConnector.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting PurecloudBridgeConnector.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridgeConnector.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for PurecloudBridgeConnector.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridgeConnector.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PurecloudBridgeConnector.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridgeConnector.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for PurecloudBridgeConnector.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridgeConnector.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PurecloudBridgeConnector.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridgeConnector.prototype, 'pureCloudBridgeId', {
            get: function() { return this.__prop_pureCloudBridgeId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting PurecloudBridgeConnector.pureCloudBridgeId: ' + e.message);
                    }
                }

                this.__prop_pureCloudBridgeId = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridgeConnector.prototype, 'pureCloudConnectorGroupName', {
            get: function() { return this.__prop_pureCloudConnectorGroupName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PurecloudBridgeConnector.pureCloudConnectorGroupName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pureCloudConnectorGroupName = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridgeConnector.prototype, 'pureCloudConnectorType', {
            get: function() { return this.__prop_pureCloudConnectorType; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PurecloudBridgeConnector.pureCloudConnectorType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pureCloudConnectorType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PurecloudBridgeConnector, '__type', { value: 'urn:inin.com:configuration.purecloud:purecloudBridgeConnector' });

    Object.defineProperty(PurecloudBridgeConnector, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'pureCloudBridgeId': { required: false, nullable: false },
                'pureCloudConnectorGroupName': { required: false, nullable: true },
                'pureCloudConnectorType': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.purecloud:purecloudBridgeConnector'] = PurecloudBridgeConnector;

    return PurecloudBridgeConnector;
}());

var PurecloudBridges = (function(){
    var hasProps = false;

    function PurecloudBridges() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.purecloud:purecloudBridges' });
        }

        PurecloudBridges._super.constructor.apply(this, arguments);
    }
    _util.inherits(PurecloudBridges, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PurecloudBridges.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PurecloudBridge); }))) {
                    try {
                        value = value.map(function(item){ return new PurecloudBridge(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PurecloudBridges.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PurecloudBridges, '__type', { value: 'urn:inin.com:configuration.purecloud:purecloudBridges' });

    Object.defineProperty(PurecloudBridges, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.purecloud:purecloudBridges'] = PurecloudBridges;

    return PurecloudBridges;
}());

var PurecloudBridge = (function(){
    var hasProps = false;

    function PurecloudBridge() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.purecloud:purecloudBridge' });
        }

        PurecloudBridge._super.constructor.apply(this, arguments);
    }
    _util.inherits(PurecloudBridge, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PurecloudBridge.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting PurecloudBridge.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridge.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for PurecloudBridge.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridge.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PurecloudBridge.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridge.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for PurecloudBridge.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridge.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PurecloudBridge.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridge.prototype, 'fqdn', {
            get: function() { return this.__prop_fqdn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PurecloudBridge.fqdn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fqdn = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridge.prototype, 'local', {
            get: function() { return this.__prop_local; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PurecloudBridge.local, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_local = value;
            },
            enumerable: true
        });

        Object.defineProperty(PurecloudBridge.prototype, 'pureCloudBridgeName', {
            get: function() { return this.__prop_pureCloudBridgeName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for PurecloudBridge.pureCloudBridgeName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pureCloudBridgeName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PurecloudBridge, '__type', { value: 'urn:inin.com:configuration.purecloud:purecloudBridge' });

    Object.defineProperty(PurecloudBridge, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'fqdn': { required: false, nullable: false },
                'local': { required: false, nullable: false },
                'pureCloudBridgeName': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.purecloud:purecloudBridge'] = PurecloudBridge;

    return PurecloudBridge;
}());

var $purecloudBridgeConnectors = (function(){
    function getPurecloudBridgeConnectors(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getPurecloudBridgeConnectors.params)) {
            try {
                params = new getPurecloudBridgeConnectors.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getPurecloudBridgeConnectors.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof PurecloudBridgeConnectors) ? o : new PurecloudBridgeConnectors(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getPurecloudBridgeConnectors.method, getPurecloudBridgeConnectors.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getPurecloudBridgeConnectors, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud-bridge-connectors', enumerable: true }
    });

    getPurecloudBridgeConnectors.params = (function(){
        _util.inherits(getPurecloudBridgeConnectors_params, _util.RequestParams);

        function getPurecloudBridgeConnectors_params(properties) {
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

            getPurecloudBridgeConnectors_params._super.constructor.apply(this, arguments);
        }

        return getPurecloudBridgeConnectors_params;
    })();

    function createPurecloudBridgeConnector(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createPurecloudBridgeConnector.params)) {
            try {
                params = new createPurecloudBridgeConnector.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createPurecloudBridgeConnector.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createPurecloudBridgeConnector.method, createPurecloudBridgeConnector.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createPurecloudBridgeConnector, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud-bridge-connectors', enumerable: true }
    });

    createPurecloudBridgeConnector.params = (function(){
        _util.inherits(createPurecloudBridgeConnector_params, _util.RequestParams);

        function createPurecloudBridgeConnector_params(properties) {
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
            if (!(properties.content instanceof PurecloudBridgeConnector)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Purecloud.PurecloudBridgeConnector');
            }

            createPurecloudBridgeConnector_params._super.constructor.apply(this, arguments);
        }

        return createPurecloudBridgeConnector_params;
    })();

    function getPurecloudBridgeConnector(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getPurecloudBridgeConnector.params)) {
            try {
                params = new getPurecloudBridgeConnector.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getPurecloudBridgeConnector.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof PurecloudBridgeConnector) ? o : new PurecloudBridgeConnector(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getPurecloudBridgeConnector.method, getPurecloudBridgeConnector.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getPurecloudBridgeConnector, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud-bridge-connectors/{id}', enumerable: true }
    });

    getPurecloudBridgeConnector.params = (function(){
        _util.inherits(getPurecloudBridgeConnector_params, _util.RequestParams);

        function getPurecloudBridgeConnector_params(properties) {
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

            getPurecloudBridgeConnector_params._super.constructor.apply(this, arguments);
        }

        return getPurecloudBridgeConnector_params;
    })();

    function deletePurecloudBridgeConnector(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deletePurecloudBridgeConnector.params)) {
            try {
                params = new deletePurecloudBridgeConnector.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deletePurecloudBridgeConnector.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deletePurecloudBridgeConnector.method, deletePurecloudBridgeConnector.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deletePurecloudBridgeConnector, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud-bridge-connectors/{id}', enumerable: true }
    });

    deletePurecloudBridgeConnector.params = (function(){
        _util.inherits(deletePurecloudBridgeConnector_params, _util.RequestParams);

        function deletePurecloudBridgeConnector_params(properties) {
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

            deletePurecloudBridgeConnector_params._super.constructor.apply(this, arguments);
        }

        return deletePurecloudBridgeConnector_params;
    })();

    function updatePurecloudBridgeConnector(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updatePurecloudBridgeConnector.params)) {
            try {
                params = new updatePurecloudBridgeConnector.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updatePurecloudBridgeConnector.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updatePurecloudBridgeConnector.method, updatePurecloudBridgeConnector.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updatePurecloudBridgeConnector, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud-bridge-connectors/{id}', enumerable: true }
    });

    updatePurecloudBridgeConnector.params = (function(){
        _util.inherits(updatePurecloudBridgeConnector_params, _util.RequestParams);

        function updatePurecloudBridgeConnector_params(properties) {
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
            if (!(properties.content instanceof PurecloudBridgeConnector)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Purecloud.PurecloudBridgeConnector');
            }

            updatePurecloudBridgeConnector_params._super.constructor.apply(this, arguments);
        }

        return updatePurecloudBridgeConnector_params;
    })();

    return Object.create(null, {
        getPurecloudBridgeConnectors: { value: getPurecloudBridgeConnectors, enumerable: true },
        createPurecloudBridgeConnector: { value: createPurecloudBridgeConnector, enumerable: true },
        getPurecloudBridgeConnector: { value: getPurecloudBridgeConnector, enumerable: true },
        deletePurecloudBridgeConnector: { value: deletePurecloudBridgeConnector, enumerable: true },
        updatePurecloudBridgeConnector: { value: updatePurecloudBridgeConnector, enumerable: true }
    });
})();

var $purecloudBridges = (function(){
    function getPurecloudBridges(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getPurecloudBridges.params)) {
            try {
                params = new getPurecloudBridges.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getPurecloudBridges.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof PurecloudBridges) ? o : new PurecloudBridges(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getPurecloudBridges.method, getPurecloudBridges.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getPurecloudBridges, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud-bridges', enumerable: true }
    });

    getPurecloudBridges.params = (function(){
        _util.inherits(getPurecloudBridges_params, _util.RequestParams);

        function getPurecloudBridges_params(properties) {
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

            getPurecloudBridges_params._super.constructor.apply(this, arguments);
        }

        return getPurecloudBridges_params;
    })();

    function createPurecloudBridge(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createPurecloudBridge.params)) {
            try {
                params = new createPurecloudBridge.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createPurecloudBridge.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createPurecloudBridge.method, createPurecloudBridge.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createPurecloudBridge, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud-bridges', enumerable: true }
    });

    createPurecloudBridge.params = (function(){
        _util.inherits(createPurecloudBridge_params, _util.RequestParams);

        function createPurecloudBridge_params(properties) {
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
            if (!(properties.content instanceof PurecloudBridge)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Purecloud.PurecloudBridge');
            }

            createPurecloudBridge_params._super.constructor.apply(this, arguments);
        }

        return createPurecloudBridge_params;
    })();

    function getPurecloudBridge(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getPurecloudBridge.params)) {
            try {
                params = new getPurecloudBridge.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getPurecloudBridge.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof PurecloudBridge) ? o : new PurecloudBridge(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getPurecloudBridge.method, getPurecloudBridge.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getPurecloudBridge, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud-bridges/{id}', enumerable: true }
    });

    getPurecloudBridge.params = (function(){
        _util.inherits(getPurecloudBridge_params, _util.RequestParams);

        function getPurecloudBridge_params(properties) {
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

            getPurecloudBridge_params._super.constructor.apply(this, arguments);
        }

        return getPurecloudBridge_params;
    })();

    function deletePurecloudBridge(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deletePurecloudBridge.params)) {
            try {
                params = new deletePurecloudBridge.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deletePurecloudBridge.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deletePurecloudBridge.method, deletePurecloudBridge.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deletePurecloudBridge, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud-bridges/{id}', enumerable: true }
    });

    deletePurecloudBridge.params = (function(){
        _util.inherits(deletePurecloudBridge_params, _util.RequestParams);

        function deletePurecloudBridge_params(properties) {
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

            deletePurecloudBridge_params._super.constructor.apply(this, arguments);
        }

        return deletePurecloudBridge_params;
    })();

    function updatePurecloudBridge(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updatePurecloudBridge.params)) {
            try {
                params = new updatePurecloudBridge.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updatePurecloudBridge.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updatePurecloudBridge.method, updatePurecloudBridge.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updatePurecloudBridge, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/purecloud-bridges/{id}', enumerable: true }
    });

    updatePurecloudBridge.params = (function(){
        _util.inherits(updatePurecloudBridge_params, _util.RequestParams);

        function updatePurecloudBridge_params(properties) {
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
            if (!(properties.content instanceof PurecloudBridge)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Purecloud.PurecloudBridge');
            }

            updatePurecloudBridge_params._super.constructor.apply(this, arguments);
        }

        return updatePurecloudBridge_params;
    })();

    return Object.create(null, {
        getPurecloudBridges: { value: getPurecloudBridges, enumerable: true },
        createPurecloudBridge: { value: createPurecloudBridge, enumerable: true },
        getPurecloudBridge: { value: getPurecloudBridge, enumerable: true },
        deletePurecloudBridge: { value: deletePurecloudBridge, enumerable: true },
        updatePurecloudBridge: { value: updatePurecloudBridge, enumerable: true }
    });
})();

exports.PurecloudBridgeConnectors = PurecloudBridgeConnectors;
exports.PurecloudBridgeConnector = PurecloudBridgeConnector;
exports.PurecloudBridges = PurecloudBridges;
exports.PurecloudBridge = PurecloudBridge;
exports.$purecloudBridgeConnectors = $purecloudBridgeConnectors;
exports.$purecloudBridges = $purecloudBridges;
