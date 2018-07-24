/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var ResponseManagementItemType = (function(){
    var instanceCache = {};
    function ResponseManagementItemType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:responseManagement:responseManagementItemType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ResponseManagementItemType, _util.EnumValue);

    Object.defineProperties(ResponseManagementItemType, {
        'Text': { value: new ResponseManagementItemType(0, 'Text'), enumerable: true },
        'URL': { value: new ResponseManagementItemType(1, 'URL'), enumerable: true },
        'File': { value: new ResponseManagementItemType(2, 'File'), enumerable: true }
    });

    Object.defineProperty(ResponseManagementItemType, '__type', { value: 'urn:inin.com:responseManagement:responseManagementItemType' });

    _typemap['urn:inin.com:responseManagement:responseManagementItemType'] = ResponseManagementItemType;

    return ResponseManagementItemType;
}());

var ResponseManagementLibraryFile = (function(){
    var hasProps = false;

    function ResponseManagementLibraryFile() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:responseManagement:responseManagementLibraryFile' });
        }

        ResponseManagementLibraryFile._super.constructor.apply(this, arguments);
    }
    _util.inherits(ResponseManagementLibraryFile, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ResponseManagementLibraryFile.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (_util.isString(value)) { value = new _util.Guid(value); }
                if (!(_util.isGuid(value))) {
                    throw new TypeError('Expected type Guid for ResponseManagementLibraryFile.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementLibraryFile.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ResponseManagementLibraryFile.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementLibraryFile.prototype, 'url', {
            get: function() { return this.__prop_url; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ResponseManagementLibraryFile.url, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_url = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementLibraryFile.prototype, 'cacheTag', {
            get: function() { return this.__prop_cacheTag; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ResponseManagementLibraryFile.cacheTag, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_cacheTag = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ResponseManagementLibraryFile, '__type', { value: 'urn:inin.com:responseManagement:responseManagementLibraryFile' });

    Object.defineProperty(ResponseManagementLibraryFile, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'name': { required: true, nullable: false },
                'url': { required: true, nullable: false },
                'cacheTag': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:responseManagement:responseManagementLibraryFile'] = ResponseManagementLibraryFile;

    return ResponseManagementLibraryFile;
}());

var ResponseManagementLibrary = (function(){
    var hasProps = false;

    function ResponseManagementLibrary() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:responseManagement:responseManagementLibrary' });
        }

        ResponseManagementLibrary._super.constructor.apply(this, arguments);
    }
    _util.inherits(ResponseManagementLibrary, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ResponseManagementLibrary.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (_util.isString(value)) { value = new _util.Guid(value); }
                if (!(_util.isGuid(value))) {
                    throw new TypeError('Expected type Guid for ResponseManagementLibrary.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementLibrary.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ResponseManagementLibrary.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementLibrary.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ResponseManagementLibrary.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementLibrary.prototype, 'categories', {
            get: function() { return this.__prop_categories; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ResponseManagementCategory); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ResponseManagementCategory(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ResponseManagementLibrary.categories: ' + e.message);
                    }
                }

                this.__prop_categories = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementLibrary.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ResponseManagementItem); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ResponseManagementItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ResponseManagementLibrary.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ResponseManagementLibrary, '__type', { value: 'urn:inin.com:responseManagement:responseManagementLibrary' });

    Object.defineProperty(ResponseManagementLibrary, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'name': { required: true, nullable: false },
                'description': { required: false, nullable: false },
                'categories': { required: false, nullable: false },
                'items': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:responseManagement:responseManagementLibrary'] = ResponseManagementLibrary;

    return ResponseManagementLibrary;
}());

var ResponseManagementCategory = (function(){
    var hasProps = false;

    function ResponseManagementCategory() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:responseManagement:responseManagementCategory' });
        }

        ResponseManagementCategory._super.constructor.apply(this, arguments);
    }
    _util.inherits(ResponseManagementCategory, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ResponseManagementCategory.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (_util.isString(value)) { value = new _util.Guid(value); }
                if (!(_util.isGuid(value))) {
                    throw new TypeError('Expected type Guid for ResponseManagementCategory.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementCategory.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ResponseManagementCategory.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementCategory.prototype, 'categories', {
            get: function() { return this.__prop_categories; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ResponseManagementCategory); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ResponseManagementCategory(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ResponseManagementCategory.categories: ' + e.message);
                    }
                }

                this.__prop_categories = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementCategory.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ResponseManagementItem); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ResponseManagementItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ResponseManagementCategory.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ResponseManagementCategory, '__type', { value: 'urn:inin.com:responseManagement:responseManagementCategory' });

    Object.defineProperty(ResponseManagementCategory, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'name': { required: true, nullable: false },
                'categories': { required: false, nullable: false },
                'items': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:responseManagement:responseManagementCategory'] = ResponseManagementCategory;

    return ResponseManagementCategory;
}());

var ResponseManagementItem = (function(){
    var hasProps = false;

    function ResponseManagementItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:responseManagement:responseManagementItem' });
        }

        ResponseManagementItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(ResponseManagementItem, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ResponseManagementItem.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (_util.isString(value)) { value = new _util.Guid(value); }
                if (!(_util.isGuid(value))) {
                    throw new TypeError('Expected type Guid for ResponseManagementItem.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementItem.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ResponseManagementItem.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementItem.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(value instanceof ResponseManagementItemType)) {
                    try {
                        value = new ResponseManagementItemType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ResponseManagementItem.type: ' + e.message);
                    }
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementItem.prototype, 'shortcut', {
            get: function() { return this.__prop_shortcut; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ResponseManagementItem.shortcut, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shortcut = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementItem.prototype, 'keywords', {
            get: function() { return this.__prop_keywords; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for ResponseManagementItem.keywords, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_keywords = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementItem.prototype, 'value', {
            get: function() { return this.__prop_value; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ResponseManagementItem.value, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_value = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ResponseManagementItem, '__type', { value: 'urn:inin.com:responseManagement:responseManagementItem' });

    Object.defineProperty(ResponseManagementItem, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'name': { required: true, nullable: false },
                'type': { required: true, nullable: false },
                'shortcut': { required: false, nullable: false },
                'keywords': { required: false, nullable: false },
                'value': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:responseManagement:responseManagementItem'] = ResponseManagementItem;

    return ResponseManagementItem;
}());

var GenerateFileUrlRequest = (function(){
    var hasProps = false;

    function GenerateFileUrlRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:responseManagement:generateFileUrlRequest' });
        }

        GenerateFileUrlRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(GenerateFileUrlRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(GenerateFileUrlRequest.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for GenerateFileUrlRequest.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(GenerateFileUrlRequest, '__type', { value: 'urn:inin.com:responseManagement:generateFileUrlRequest' });

    Object.defineProperty(GenerateFileUrlRequest, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:responseManagement:generateFileUrlRequest'] = GenerateFileUrlRequest;

    return GenerateFileUrlRequest;
}());

var GenerateFileUrlResponse = (function(){
    var hasProps = false;

    function GenerateFileUrlResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:responseManagement:generateFileUrlResponse' });
        }

        GenerateFileUrlResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(GenerateFileUrlResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(GenerateFileUrlResponse.prototype, 'url', {
            get: function() { return this.__prop_url; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for GenerateFileUrlResponse.url, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_url = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(GenerateFileUrlResponse, '__type', { value: 'urn:inin.com:responseManagement:generateFileUrlResponse' });

    Object.defineProperty(GenerateFileUrlResponse, '__propInfo', {
        get: function() {
            var pi = {
                'url': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:responseManagement:generateFileUrlResponse'] = GenerateFileUrlResponse;

    return GenerateFileUrlResponse;
}());

var ResponseManagementMessage = (function(){
    var hasProps = false;

    function ResponseManagementMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:responseManagement:responseManagementMessage', enumerable: true });
        }

        ResponseManagementMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ResponseManagementMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(ResponseManagementMessage.prototype, 'librariesAdded', {
            get: function() { return this.__prop_librariesAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ResponseManagementLibraryFile); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ResponseManagementLibraryFile(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ResponseManagementMessage.librariesAdded: ' + e.message);
                    }
                }

                this.__prop_librariesAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementMessage.prototype, 'librariesChanged', {
            get: function() { return this.__prop_librariesChanged; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ResponseManagementLibraryFile); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ResponseManagementLibraryFile(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ResponseManagementMessage.librariesChanged: ' + e.message);
                    }
                }

                this.__prop_librariesChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(ResponseManagementMessage.prototype, 'librariesRemoved', {
            get: function() { return this.__prop_librariesRemoved; },
            set: function(value) {
                if (_util.isArray(value) && value.every(function(v){ return _util.isGuid(v) || _util.isString(v); })) {
                    value = value.map(function(v){ return new _util.Guid(v); });
                }
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isGuid(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type Guid[] for ResponseManagementMessage.librariesRemoved, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_librariesRemoved = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ResponseManagementMessage, '__type', { value: 'urn:inin.com:responseManagement:responseManagementMessage' });

    Object.defineProperty(ResponseManagementMessage, '__propInfo', {
        get: function() {
            var pi = {
                'librariesAdded': { required: false, nullable: false },
                'librariesChanged': { required: false, nullable: false },
                'librariesRemoved': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:responseManagement:responseManagementMessage'] = ResponseManagementMessage;

    return ResponseManagementMessage;
}());

var $responseManagement = (function(){
    function updateRespMgmt(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateRespMgmt.params)) {
            try {
                params = new updateRespMgmt.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateRespMgmt.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateRespMgmt.method, updateRespMgmt.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateRespMgmt, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/response-management', enumerable: true }
    });

    updateRespMgmt.params = (function(){
        _util.inherits(updateRespMgmt_params, _util.RequestParams);

        function updateRespMgmt_params(properties) {
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
            if (!(properties.content instanceof ResponseManagementLibrary)) {
                throw new TypeError('`properties.content` value does not match the expected type: ResponseManagement.ResponseManagementLibrary');
            }

            updateRespMgmt_params._super.constructor.apply(this, arguments);
        }

        return updateRespMgmt_params;
    })();

    return Object.create(null, {
        updateRespMgmt: { value: updateRespMgmt, enumerable: true }
    });
})();

var $file = (function(){
    function generateFileUrl(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof generateFileUrl.params)) {
            try {
                params = new generateFileUrl.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: generateFileUrl.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof GenerateFileUrlResponse) ? o : new GenerateFileUrlResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(generateFileUrl.method, generateFileUrl.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(generateFileUrl, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/response-management/file', enumerable: true }
    });

    generateFileUrl.params = (function(){
        _util.inherits(generateFileUrl_params, _util.RequestParams);

        function generateFileUrl_params(properties) {
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
            if (!(properties.content instanceof GenerateFileUrlRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: ResponseManagement.GenerateFileUrlRequest');
            }

            generateFileUrl_params._super.constructor.apply(this, arguments);
        }

        return generateFileUrl_params;
    })();

    return Object.create(null, {
        generateFileUrl: { value: generateFileUrl, enumerable: true }
    });
})();

exports.ResponseManagementItemType = ResponseManagementItemType;
exports.ResponseManagementMessage = ResponseManagementMessage;
exports.ResponseManagementLibraryFile = ResponseManagementLibraryFile;
exports.ResponseManagementLibrary = ResponseManagementLibrary;
exports.ResponseManagementCategory = ResponseManagementCategory;
exports.ResponseManagementItem = ResponseManagementItem;
exports.GenerateFileUrlRequest = GenerateFileUrlRequest;
exports.GenerateFileUrlResponse = GenerateFileUrlResponse;
exports.$responseManagement = $responseManagement;
exports.$file = $file;
