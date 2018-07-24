/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Configuration = require('./Configuration');
var Common = require('./Common');

var InteractionMessageStoreMailbox = (function(){
    var hasProps = false;

    function InteractionMessageStoreMailbox() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.mail:interactionMessageStoreMailbox' });
        }

        InteractionMessageStoreMailbox._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionMessageStoreMailbox, _util.DataContract);

    function defineProps() {
        Object.defineProperty(InteractionMessageStoreMailbox.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionMessageStoreMailbox.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionMessageStoreMailbox.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for InteractionMessageStoreMailbox.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionMessageStoreMailbox.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting InteractionMessageStoreMailbox.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionMessageStoreMailbox.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for InteractionMessageStoreMailbox.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(InteractionMessageStoreMailbox.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for InteractionMessageStoreMailbox.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionMessageStoreMailbox, '__type', { value: 'urn:inin.com:configuration.mail:interactionMessageStoreMailbox' });

    Object.defineProperty(InteractionMessageStoreMailbox, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.mail:interactionMessageStoreMailbox'] = InteractionMessageStoreMailbox;

    return InteractionMessageStoreMailbox;
}());

var UsersResult = (function(){
    var hasProps = false;

    function UsersResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.mail:usersResult' });
        }

        UsersResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(UsersResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UsersResult.prototype, 'users', {
            get: function() { return this.__prop_users; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof UsersEntry); }))) {
                    try {
                        value = value.map(function(item){ return new UsersEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UsersResult.users: ' + e.message);
                    }
                }

                this.__prop_users = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UsersResult, '__type', { value: 'urn:inin.com:configuration.mail:usersResult' });

    Object.defineProperty(UsersResult, '__propInfo', {
        get: function() {
            var pi = {
                'users': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.mail:usersResult'] = UsersResult;

    return UsersResult;
}());

var UsersEntry = (function(){
    var hasProps = false;

    function UsersEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.mail:usersEntry' });
        }

        UsersEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(UsersEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UsersEntry.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting UsersEntry.id: ' + e.message);
                    }
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(UsersEntry.prototype, 'emailAddress', {
            get: function() { return this.__prop_emailAddress; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UsersEntry.emailAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(UsersEntry.prototype, 'mailbox', {
            get: function() { return this.__prop_mailbox; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UsersEntry.mailbox, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mailbox = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UsersEntry, '__type', { value: 'urn:inin.com:configuration.mail:usersEntry' });

    Object.defineProperty(UsersEntry, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'emailAddress': { required: true, nullable: false },
                'mailbox': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.mail:usersEntry'] = UsersEntry;

    return UsersEntry;
}());

var InteractionMessageStoreMailboxMessage = (function(){
    var hasProps = false;

    function InteractionMessageStoreMailboxMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.mail:interactionMessageStoreMailboxMessage', enumerable: true });
        }

        InteractionMessageStoreMailboxMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(InteractionMessageStoreMailboxMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(InteractionMessageStoreMailboxMessage.prototype, 'interactionMessageStoreMailbox', {
            get: function() { return this.__prop_interactionMessageStoreMailbox; },
            set: function(value) {
                if (!(value instanceof InteractionMessageStoreMailbox)) {
                    try {
                        value = new InteractionMessageStoreMailbox(value);
                    } catch (e) {
                        throw new TypeError('Error setting InteractionMessageStoreMailboxMessage.interactionMessageStoreMailbox: ' + e.message);
                    }
                }

                this.__prop_interactionMessageStoreMailbox = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(InteractionMessageStoreMailboxMessage, '__type', { value: 'urn:inin.com:configuration.mail:interactionMessageStoreMailboxMessage' });

    Object.defineProperty(InteractionMessageStoreMailboxMessage, '__propInfo', {
        get: function() {
            var pi = {
                'interactionMessageStoreMailbox': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.mail:interactionMessageStoreMailboxMessage'] = InteractionMessageStoreMailboxMessage;

    return InteractionMessageStoreMailboxMessage;
}());

var $interactionMessageStoreMailbox = (function(){
    function getInteractionMessageStoreMailbox(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getInteractionMessageStoreMailbox.params)) {
            try {
                params = new getInteractionMessageStoreMailbox.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getInteractionMessageStoreMailbox.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof InteractionMessageStoreMailbox) ? o : new InteractionMessageStoreMailbox(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getInteractionMessageStoreMailbox.method, getInteractionMessageStoreMailbox.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getInteractionMessageStoreMailbox, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-message-store-mailbox', enumerable: true }
    });

    getInteractionMessageStoreMailbox.params = (function(){
        _util.inherits(getInteractionMessageStoreMailbox_params, _util.RequestParams);

        function getInteractionMessageStoreMailbox_params(properties) {
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

            getInteractionMessageStoreMailbox_params._super.constructor.apply(this, arguments);
        }

        return getInteractionMessageStoreMailbox_params;
    })();

    function updateInteractionMessageStoreMailbox(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateInteractionMessageStoreMailbox.params)) {
            try {
                params = new updateInteractionMessageStoreMailbox.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateInteractionMessageStoreMailbox.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateInteractionMessageStoreMailbox.method, updateInteractionMessageStoreMailbox.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateInteractionMessageStoreMailbox, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/interaction-message-store-mailbox', enumerable: true }
    });

    updateInteractionMessageStoreMailbox.params = (function(){
        _util.inherits(updateInteractionMessageStoreMailbox_params, _util.RequestParams);

        function updateInteractionMessageStoreMailbox_params(properties) {
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
            if (!(properties.content instanceof InteractionMessageStoreMailbox)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Mail.InteractionMessageStoreMailbox');
            }

            updateInteractionMessageStoreMailbox_params._super.constructor.apply(this, arguments);
        }

        return updateInteractionMessageStoreMailbox_params;
    })();

    return Object.create(null, {
        getInteractionMessageStoreMailbox: { value: getInteractionMessageStoreMailbox, enumerable: true },
        updateInteractionMessageStoreMailbox: { value: updateInteractionMessageStoreMailbox, enumerable: true }
    });
})();

exports.InteractionMessageStoreMailboxMessage = InteractionMessageStoreMailboxMessage;
exports.InteractionMessageStoreMailbox = InteractionMessageStoreMailbox;
exports.UsersResult = UsersResult;
exports.UsersEntry = UsersEntry;
exports.$interactionMessageStoreMailbox = $interactionMessageStoreMailbox;
