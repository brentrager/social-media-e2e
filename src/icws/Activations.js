/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var UserActivationSets = (function(){
    var hasProps = false;

    function UserActivationSets() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:activations:userActivationSets' });
        }

        UserActivationSets._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserActivationSets, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserActivationSets.prototype, 'userActivationSetList', {
            get: function() { return this.__prop_userActivationSetList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof UserActivationSet); }))) {
                    try {
                        value = value.map(function(item){ return new UserActivationSet(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UserActivationSets.userActivationSetList: ' + e.message);
                    }
                }

                this.__prop_userActivationSetList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserActivationSets, '__type', { value: 'urn:inin.com:activations:userActivationSets' });

    Object.defineProperty(UserActivationSets, '__propInfo', {
        get: function() {
            var pi = {
                'userActivationSetList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:activations:userActivationSets'] = UserActivationSets;

    return UserActivationSets;
}());

var UserActivationSet = (function(){
    var hasProps = false;

    function UserActivationSet() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:activations:userActivationSet' });
        }

        UserActivationSet._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserActivationSet, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserActivationSet.prototype, 'userId', {
            get: function() { return this.__prop_userId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UserActivationSet.userId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userId = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserActivationSet.prototype, 'activations', {
            get: function() { return this.__prop_activations; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isBoolean(value[key])); }))) {
                    throw new TypeError('Expected type Boolean{} for UserActivationSet.activations, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activations = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserActivationSet, '__type', { value: 'urn:inin.com:activations:userActivationSet' });

    Object.defineProperty(UserActivationSet, '__propInfo', {
        get: function() {
            var pi = {
                'userId': { required: true, nullable: false },
                'activations': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:activations:userActivationSet'] = UserActivationSet;

    return UserActivationSet;
}());

var UserActivationDelta = (function(){
    var hasProps = false;

    function UserActivationDelta() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:activations:userActivationDelta' });
        }

        UserActivationDelta._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserActivationDelta, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserActivationDelta.prototype, 'activations', {
            get: function() { return this.__prop_activations; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isBoolean(value[key])); }))) {
                    throw new TypeError('Expected type Boolean{} for UserActivationDelta.activations, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activations = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserActivationDelta, '__type', { value: 'urn:inin.com:activations:userActivationDelta' });

    Object.defineProperty(UserActivationDelta, '__propInfo', {
        get: function() {
            var pi = {
                'activations': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:activations:userActivationDelta'] = UserActivationDelta;

    return UserActivationDelta;
}());

var WorkgroupActivationSets = (function(){
    var hasProps = false;

    function WorkgroupActivationSets() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:activations:workgroupActivationSets' });
        }

        WorkgroupActivationSets._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupActivationSets, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WorkgroupActivationSets.prototype, 'workgroupActivationSetList', {
            get: function() { return this.__prop_workgroupActivationSetList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof WorkgroupActivationSet); }))) {
                    try {
                        value = value.map(function(item){ return new WorkgroupActivationSet(item); });
                    } catch (e) {
                        throw new TypeError('Error setting WorkgroupActivationSets.workgroupActivationSetList: ' + e.message);
                    }
                }

                this.__prop_workgroupActivationSetList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupActivationSets, '__type', { value: 'urn:inin.com:activations:workgroupActivationSets' });

    Object.defineProperty(WorkgroupActivationSets, '__propInfo', {
        get: function() {
            var pi = {
                'workgroupActivationSetList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:activations:workgroupActivationSets'] = WorkgroupActivationSets;

    return WorkgroupActivationSets;
}());

var WorkgroupActivationSet = (function(){
    var hasProps = false;

    function WorkgroupActivationSet() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:activations:workgroupActivationSet' });
        }

        WorkgroupActivationSet._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupActivationSet, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WorkgroupActivationSet.prototype, 'workgroupId', {
            get: function() { return this.__prop_workgroupId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for WorkgroupActivationSet.workgroupId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroupId = value;
            },
            enumerable: true
        });

        Object.defineProperty(WorkgroupActivationSet.prototype, 'activations', {
            get: function() { return this.__prop_activations; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isBoolean(value[key])); }))) {
                    throw new TypeError('Expected type Boolean{} for WorkgroupActivationSet.activations, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activations = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupActivationSet, '__type', { value: 'urn:inin.com:activations:workgroupActivationSet' });

    Object.defineProperty(WorkgroupActivationSet, '__propInfo', {
        get: function() {
            var pi = {
                'workgroupId': { required: true, nullable: false },
                'activations': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:activations:workgroupActivationSet'] = WorkgroupActivationSet;

    return WorkgroupActivationSet;
}());

var WorkgroupActivationDelta = (function(){
    var hasProps = false;

    function WorkgroupActivationDelta() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:activations:workgroupActivationDelta' });
        }

        WorkgroupActivationDelta._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupActivationDelta, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WorkgroupActivationDelta.prototype, 'activations', {
            get: function() { return this.__prop_activations; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isBoolean(value[key])); }))) {
                    throw new TypeError('Expected type Boolean{} for WorkgroupActivationDelta.activations, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activations = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupActivationDelta, '__type', { value: 'urn:inin.com:activations:workgroupActivationDelta' });

    Object.defineProperty(WorkgroupActivationDelta, '__propInfo', {
        get: function() {
            var pi = {
                'activations': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:activations:workgroupActivationDelta'] = WorkgroupActivationDelta;

    return WorkgroupActivationDelta;
}());

var UserActivationSubscription = (function(){
    var hasProps = false;

    function UserActivationSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:activations:userActivationSubscription' });
        }

        UserActivationSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserActivationSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UserActivationSubscription.prototype, 'userId', {
            get: function() { return this.__prop_userId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UserActivationSubscription.userId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userId = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserActivationSubscription.prototype, 'workgroupIds', {
            get: function() { return this.__prop_workgroupIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for UserActivationSubscription.workgroupIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroupIds = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserActivationSubscription, '__type', { value: 'urn:inin.com:activations:userActivationSubscription' });

    Object.defineProperty(UserActivationSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'userId': { required: true, nullable: false },
                'workgroupIds': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:activations:userActivationSubscription'] = UserActivationSubscription;

    return UserActivationSubscription;
}());

var WorkgroupActivationSubscription = (function(){
    var hasProps = false;

    function WorkgroupActivationSubscription() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:activations:workgroupActivationSubscription' });
        }

        WorkgroupActivationSubscription._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupActivationSubscription, _util.DataContract);

    function defineProps() {
        Object.defineProperty(WorkgroupActivationSubscription.prototype, 'workgroupId', {
            get: function() { return this.__prop_workgroupId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for WorkgroupActivationSubscription.workgroupId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroupId = value;
            },
            enumerable: true
        });

        Object.defineProperty(WorkgroupActivationSubscription.prototype, 'userIds', {
            get: function() { return this.__prop_userIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for WorkgroupActivationSubscription.userIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userIds = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupActivationSubscription, '__type', { value: 'urn:inin.com:activations:workgroupActivationSubscription' });

    Object.defineProperty(WorkgroupActivationSubscription, '__propInfo', {
        get: function() {
            var pi = {
                'workgroupId': { required: true, nullable: false },
                'userIds': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:activations:workgroupActivationSubscription'] = WorkgroupActivationSubscription;

    return WorkgroupActivationSubscription;
}());

var UserActivationMessage = (function(){
    var hasProps = false;

    function UserActivationMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:activations:userActivationMessage', enumerable: true });
        }

        UserActivationMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(UserActivationMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(UserActivationMessage.prototype, 'subscriptionId', {
            get: function() { return this.__prop_subscriptionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UserActivationMessage.subscriptionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subscriptionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserActivationMessage.prototype, 'userId', {
            get: function() { return this.__prop_userId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UserActivationMessage.userId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userId = value;
            },
            enumerable: true
        });

        Object.defineProperty(UserActivationMessage.prototype, 'activationsChanged', {
            get: function() { return this.__prop_activationsChanged; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isBoolean(value[key])); }))) {
                    throw new TypeError('Expected type Boolean{} for UserActivationMessage.activationsChanged, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activationsChanged = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UserActivationMessage, '__type', { value: 'urn:inin.com:activations:userActivationMessage' });

    Object.defineProperty(UserActivationMessage, '__propInfo', {
        get: function() {
            var pi = {
                'subscriptionId': { required: true, nullable: false },
                'userId': { required: true, nullable: false },
                'activationsChanged': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:activations:userActivationMessage'] = UserActivationMessage;

    return UserActivationMessage;
}());

var WorkgroupActivationMessage = (function(){
    var hasProps = false;

    function WorkgroupActivationMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:activations:workgroupActivationMessage', enumerable: true });
        }

        WorkgroupActivationMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(WorkgroupActivationMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(WorkgroupActivationMessage.prototype, 'subscriptionId', {
            get: function() { return this.__prop_subscriptionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for WorkgroupActivationMessage.subscriptionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subscriptionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(WorkgroupActivationMessage.prototype, 'workgroupId', {
            get: function() { return this.__prop_workgroupId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for WorkgroupActivationMessage.workgroupId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroupId = value;
            },
            enumerable: true
        });

        Object.defineProperty(WorkgroupActivationMessage.prototype, 'activationsChanged', {
            get: function() { return this.__prop_activationsChanged; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isBoolean(value[key])); }))) {
                    throw new TypeError('Expected type Boolean{} for WorkgroupActivationMessage.activationsChanged, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_activationsChanged = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(WorkgroupActivationMessage, '__type', { value: 'urn:inin.com:activations:workgroupActivationMessage' });

    Object.defineProperty(WorkgroupActivationMessage, '__propInfo', {
        get: function() {
            var pi = {
                'subscriptionId': { required: true, nullable: false },
                'workgroupId': { required: true, nullable: false },
                'activationsChanged': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:activations:workgroupActivationMessage'] = WorkgroupActivationMessage;

    return WorkgroupActivationMessage;
}());

var $users = (function(){
    function getMultipleUserActivations(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getMultipleUserActivations.params)) {
            try {
                params = new getMultipleUserActivations.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getMultipleUserActivations.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof UserActivationSets) ? o : new UserActivationSets(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getMultipleUserActivations.method, getMultipleUserActivations.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getMultipleUserActivations, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/activations/users', enumerable: true }
    });

    getMultipleUserActivations.params = (function(){
        _util.inherits(getMultipleUserActivations_params, _util.RequestParams);

        function getMultipleUserActivations_params(properties) {
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
            if (properties.query === void 0) {
                throw new Error('`properties.query` is undefined, which means the following required Query param(s) will be missing: select');
            }
            if (!_util.hasProp(properties.query, 'select')) {
                throw new Error('`properties.query` is missing required property: `select`');
            }

            getMultipleUserActivations_params._super.constructor.apply(this, arguments);
        }

        return getMultipleUserActivations_params;
    })();

    function getUserActivations(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getUserActivations.params)) {
            try {
                params = new getUserActivations.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getUserActivations.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof UserActivationSet) ? o : new UserActivationSet(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getUserActivations.method, getUserActivations.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getUserActivations, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/activations/users/{userId}', enumerable: true }
    });

    getUserActivations.params = (function(){
        _util.inherits(getUserActivations_params, _util.RequestParams);

        function getUserActivations_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, userId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'userId')) {
                throw new Error('`properties.template` is missing required property: `userId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getUserActivations_params._super.constructor.apply(this, arguments);
        }

        return getUserActivations_params;
    })();

    function setUserActivations(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof setUserActivations.params)) {
            try {
                params = new setUserActivations.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: setUserActivations.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof UserActivationSet) ? o : new UserActivationSet(o); };
        dc['400'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(setUserActivations.method, setUserActivations.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(setUserActivations, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/activations/users/{userId}', enumerable: true }
    });

    setUserActivations.params = (function(){
        _util.inherits(setUserActivations_params, _util.RequestParams);

        function setUserActivations_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, userId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'userId')) {
                throw new Error('`properties.template` is missing required property: `userId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof UserActivationDelta)) {
                throw new TypeError('`properties.content` value does not match the expected type: Activations.UserActivationDelta');
            }

            setUserActivations_params._super.constructor.apply(this, arguments);
        }

        return setUserActivations_params;
    })();

    return Object.create(null, {
        getMultipleUserActivations: { value: getMultipleUserActivations, enumerable: true },
        getUserActivations: { value: getUserActivations, enumerable: true },
        setUserActivations: { value: setUserActivations, enumerable: true }
    });
})();

var $workgroups = (function(){
    function getMultipleWorkgroupActivations(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getMultipleWorkgroupActivations.params)) {
            try {
                params = new getMultipleWorkgroupActivations.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getMultipleWorkgroupActivations.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof WorkgroupActivationSets) ? o : new WorkgroupActivationSets(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getMultipleWorkgroupActivations.method, getMultipleWorkgroupActivations.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getMultipleWorkgroupActivations, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/activations/workgroups', enumerable: true }
    });

    getMultipleWorkgroupActivations.params = (function(){
        _util.inherits(getMultipleWorkgroupActivations_params, _util.RequestParams);

        function getMultipleWorkgroupActivations_params(properties) {
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
            if (properties.query === void 0) {
                throw new Error('`properties.query` is undefined, which means the following required Query param(s) will be missing: select');
            }
            if (!_util.hasProp(properties.query, 'select')) {
                throw new Error('`properties.query` is missing required property: `select`');
            }

            getMultipleWorkgroupActivations_params._super.constructor.apply(this, arguments);
        }

        return getMultipleWorkgroupActivations_params;
    })();

    function getWorkgroupActivations(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getWorkgroupActivations.params)) {
            try {
                params = new getWorkgroupActivations.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getWorkgroupActivations.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof WorkgroupActivationSet) ? o : new WorkgroupActivationSet(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getWorkgroupActivations.method, getWorkgroupActivations.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getWorkgroupActivations, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/activations/workgroups/{workgroupId}', enumerable: true }
    });

    getWorkgroupActivations.params = (function(){
        _util.inherits(getWorkgroupActivations_params, _util.RequestParams);

        function getWorkgroupActivations_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, workgroupId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'workgroupId')) {
                throw new Error('`properties.template` is missing required property: `workgroupId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getWorkgroupActivations_params._super.constructor.apply(this, arguments);
        }

        return getWorkgroupActivations_params;
    })();

    function setWorkgroupActivations(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof setWorkgroupActivations.params)) {
            try {
                params = new setWorkgroupActivations.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: setWorkgroupActivations.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof WorkgroupActivationSet) ? o : new WorkgroupActivationSet(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(setWorkgroupActivations.method, setWorkgroupActivations.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(setWorkgroupActivations, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/activations/workgroups/{workgroupId}', enumerable: true }
    });

    setWorkgroupActivations.params = (function(){
        _util.inherits(setWorkgroupActivations_params, _util.RequestParams);

        function setWorkgroupActivations_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, workgroupId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'workgroupId')) {
                throw new Error('`properties.template` is missing required property: `workgroupId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof WorkgroupActivationDelta)) {
                throw new TypeError('`properties.content` value does not match the expected type: Activations.WorkgroupActivationDelta');
            }

            setWorkgroupActivations_params._super.constructor.apply(this, arguments);
        }

        return setWorkgroupActivations_params;
    })();

    return Object.create(null, {
        getMultipleWorkgroupActivations: { value: getMultipleWorkgroupActivations, enumerable: true },
        getWorkgroupActivations: { value: getWorkgroupActivations, enumerable: true },
        setWorkgroupActivations: { value: setWorkgroupActivations, enumerable: true }
    });
})();

exports.UserActivationSets = UserActivationSets;
exports.UserActivationSet = UserActivationSet;
exports.UserActivationDelta = UserActivationDelta;
exports.WorkgroupActivationSets = WorkgroupActivationSets;
exports.WorkgroupActivationSet = WorkgroupActivationSet;
exports.WorkgroupActivationDelta = WorkgroupActivationDelta;
exports.UserActivationSubscription = UserActivationSubscription;
exports.UserActivationMessage = UserActivationMessage;
exports.WorkgroupActivationMessage = WorkgroupActivationMessage;
exports.WorkgroupActivationSubscription = WorkgroupActivationSubscription;
exports.$users = $users;
exports.$workgroups = $workgroups;
