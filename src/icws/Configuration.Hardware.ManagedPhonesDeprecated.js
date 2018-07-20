/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration_Hardware = require('./Configuration.Hardware');
var Configuration = require('./Configuration');
var Common = require('./Common');

var $managedExternalRegistrationsDeprecated = (function(){
    function updateManagedExternalRegistrationDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateManagedExternalRegistrationDeprecated.params)) {
            try {
                params = new updateManagedExternalRegistrationDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateManagedExternalRegistrationDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.SubObjectSet) ? o : new Configuration.SubObjectSet(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateManagedExternalRegistrationDeprecated.method, updateManagedExternalRegistrationDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateManagedExternalRegistrationDeprecated, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/{id}/managed-external-registrations-deprecated', enumerable: true }
    });

    updateManagedExternalRegistrationDeprecated.params = (function(){
        _util.inherits(updateManagedExternalRegistrationDeprecated_params, _util.RequestParams);

        function updateManagedExternalRegistrationDeprecated_params(properties) {
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
            if (!(properties.content instanceof Configuration_Hardware.ManagedExternalRegistrationsDeprecatedBulkUpdate)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.ManagedExternalRegistrationsDeprecatedBulkUpdate');
            }

            updateManagedExternalRegistrationDeprecated_params._super.constructor.apply(this, arguments);
        }

        return updateManagedExternalRegistrationDeprecated_params;
    })();

    return Object.create(null, {
        updateManagedExternalRegistrationDeprecated: { value: updateManagedExternalRegistrationDeprecated, enumerable: true }
    });
})();

var $applyTemplate = (function(){
    function applyTemplate(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof applyTemplate.params)) {
            try {
                params = new applyTemplate.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: applyTemplate.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.ApplyTemplateResult) ? o : new Configuration_Hardware.ApplyTemplateResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(applyTemplate.method, applyTemplate.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(applyTemplate, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/apply-template', enumerable: true }
    });

    applyTemplate.params = (function(){
        _util.inherits(applyTemplate_params, _util.RequestParams);

        function applyTemplate_params(properties) {
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
            if (!(properties.content instanceof Configuration_Hardware.ApplyTemplateArgument)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.ApplyTemplateArgument');
            }

            applyTemplate_params._super.constructor.apply(this, arguments);
        }

        return applyTemplate_params;
    })();

    return Object.create(null, {
        applyTemplate: { value: applyTemplate, enumerable: true }
    });
})();

var $cancelScheduledReloads = (function(){
    function cancelScheduledReloads(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof cancelScheduledReloads.params)) {
            try {
                params = new cancelScheduledReloads.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: cancelScheduledReloads.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.CancelScheduledReloadsResult) ? o : new Configuration_Hardware.CancelScheduledReloadsResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(cancelScheduledReloads.method, cancelScheduledReloads.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(cancelScheduledReloads, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/cancel-scheduled-reloads', enumerable: true }
    });

    cancelScheduledReloads.params = (function(){
        _util.inherits(cancelScheduledReloads_params, _util.RequestParams);

        function cancelScheduledReloads_params(properties) {
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
            if (!(properties.content instanceof Configuration_Hardware.CancelScheduledReloadsArgument)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.CancelScheduledReloadsArgument');
            }

            cancelScheduledReloads_params._super.constructor.apply(this, arguments);
        }

        return cancelScheduledReloads_params;
    })();

    return Object.create(null, {
        cancelScheduledReloads: { value: cancelScheduledReloads, enumerable: true }
    });
})();

var $supportedPhonesAttributes = (function(){
    function supportedPhonesAttributes(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof supportedPhonesAttributes.params)) {
            try {
                params = new supportedPhonesAttributes.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: supportedPhonesAttributes.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.SupportedPhonesAttributesResult) ? o : new Configuration_Hardware.SupportedPhonesAttributesResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(supportedPhonesAttributes.method, supportedPhonesAttributes.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(supportedPhonesAttributes, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/supported-phones-attributes/{manufacturer}/{model}', enumerable: true }
    });

    supportedPhonesAttributes.params = (function(){
        _util.inherits(supportedPhonesAttributes_params, _util.RequestParams);

        function supportedPhonesAttributes_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, manufacturer, model');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'manufacturer')) {
                throw new Error('`properties.template` is missing required property: `manufacturer`');
            }
            if (!_util.hasProp(properties.template, 'model')) {
                throw new Error('`properties.template` is missing required property: `model`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            supportedPhonesAttributes_params._super.constructor.apply(this, arguments);
        }

        return supportedPhonesAttributes_params;
    })();

    return Object.create(null, {
        supportedPhonesAttributes: { value: supportedPhonesAttributes, enumerable: true }
    });
})();

var $supportedPhones = (function(){
    function supportedPhones(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof supportedPhones.params)) {
            try {
                params = new supportedPhones.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: supportedPhones.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.SupportedPhonesResult) ? o : new Configuration_Hardware.SupportedPhonesResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(supportedPhones.method, supportedPhones.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(supportedPhones, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/supported-phones', enumerable: true }
    });

    supportedPhones.params = (function(){
        _util.inherits(supportedPhones_params, _util.RequestParams);

        function supportedPhones_params(properties) {
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

            supportedPhones_params._super.constructor.apply(this, arguments);
        }

        return supportedPhones_params;
    })();

    return Object.create(null, {
        supportedPhones: { value: supportedPhones, enumerable: true }
    });
})();

var $scheduledForReload = (function(){
    function scheduledForReload(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof scheduledForReload.params)) {
            try {
                params = new scheduledForReload.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: scheduledForReload.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.ScheduledForReloadResult) ? o : new Configuration_Hardware.ScheduledForReloadResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(scheduledForReload.method, scheduledForReload.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(scheduledForReload, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/scheduled-for-reload', enumerable: true }
    });

    scheduledForReload.params = (function(){
        _util.inherits(scheduledForReload_params, _util.RequestParams);

        function scheduledForReload_params(properties) {
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

            scheduledForReload_params._super.constructor.apply(this, arguments);
        }

        return scheduledForReload_params;
    })();

    return Object.create(null, {
        scheduledForReload: { value: scheduledForReload, enumerable: true }
    });
})();

var $reloadAllWithPendingChanges = (function(){
    function reloadAllWithPendingChanges(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof reloadAllWithPendingChanges.params)) {
            try {
                params = new reloadAllWithPendingChanges.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: reloadAllWithPendingChanges.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.ReloadAllWithPendingChangesResult) ? o : new Configuration_Hardware.ReloadAllWithPendingChangesResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(reloadAllWithPendingChanges.method, reloadAllWithPendingChanges.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(reloadAllWithPendingChanges, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/reload-all-with-pending-changes', enumerable: true }
    });

    reloadAllWithPendingChanges.params = (function(){
        _util.inherits(reloadAllWithPendingChanges_params, _util.RequestParams);

        function reloadAllWithPendingChanges_params(properties) {
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

            reloadAllWithPendingChanges_params._super.constructor.apply(this, arguments);
        }

        return reloadAllWithPendingChanges_params;
    })();

    return Object.create(null, {
        reloadAllWithPendingChanges: { value: reloadAllWithPendingChanges, enumerable: true }
    });
})();

var $reload = (function(){
    function reload(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof reload.params)) {
            try {
                params = new reload.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: reload.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.ReloadResult) ? o : new Configuration_Hardware.ReloadResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(reload.method, reload.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(reload, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/reload', enumerable: true }
    });

    reload.params = (function(){
        _util.inherits(reload_params, _util.RequestParams);

        function reload_params(properties) {
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
            if (!(properties.content instanceof Configuration_Hardware.ReloadArgument)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.ReloadArgument');
            }

            reload_params._super.constructor.apply(this, arguments);
        }

        return reload_params;
    })();

    return Object.create(null, {
        reload: { value: reload, enumerable: true }
    });
})();

var $scheduleReload = (function(){
    function scheduleReload(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof scheduleReload.params)) {
            try {
                params = new scheduleReload.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: scheduleReload.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.ScheduleReloadResult) ? o : new Configuration_Hardware.ScheduleReloadResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(scheduleReload.method, scheduleReload.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(scheduleReload, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/schedule-reload', enumerable: true }
    });

    scheduleReload.params = (function(){
        _util.inherits(scheduleReload_params, _util.RequestParams);

        function scheduleReload_params(properties) {
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
            if (!(properties.content instanceof Configuration_Hardware.ScheduleReloadArgument)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.ScheduleReloadArgument');
            }

            scheduleReload_params._super.constructor.apply(this, arguments);
        }

        return scheduleReload_params;
    })();

    return Object.create(null, {
        scheduleReload: { value: scheduleReload, enumerable: true }
    });
})();

var $unprovision = (function(){
    function unprovision(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof unprovision.params)) {
            try {
                params = new unprovision.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: unprovision.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration_Hardware.UnprovisionResult) ? o : new Configuration_Hardware.UnprovisionResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(unprovision.method, unprovision.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(unprovision, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/unprovision', enumerable: true }
    });

    unprovision.params = (function(){
        _util.inherits(unprovision_params, _util.RequestParams);

        function unprovision_params(properties) {
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
            if (!(properties.content instanceof Configuration_Hardware.UnprovisionArgument)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.UnprovisionArgument');
            }

            unprovision_params._super.constructor.apply(this, arguments);
        }

        return unprovision_params;
    })();

    return Object.create(null, {
        unprovision: { value: unprovision, enumerable: true }
    });
})();

var $managedStationsDeprecated = (function(){
    function updateManagedStationDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateManagedStationDeprecated.params)) {
            try {
                params = new updateManagedStationDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateManagedStationDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.SubObjectSet) ? o : new Configuration.SubObjectSet(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateManagedStationDeprecated.method, updateManagedStationDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateManagedStationDeprecated, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/{id}/managed-stations-deprecated', enumerable: true }
    });

    updateManagedStationDeprecated.params = (function(){
        _util.inherits(updateManagedStationDeprecated_params, _util.RequestParams);

        function updateManagedStationDeprecated_params(properties) {
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
            if (!(properties.content instanceof Configuration_Hardware.ManagedStationsDeprecatedBulkUpdate)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.ManagedStationsDeprecatedBulkUpdate');
            }

            updateManagedStationDeprecated_params._super.constructor.apply(this, arguments);
        }

        return updateManagedStationDeprecated_params;
    })();

    return Object.create(null, {
        updateManagedStationDeprecated: { value: updateManagedStationDeprecated, enumerable: true }
    });
})();

var $sharedStationsDeprecated = (function(){
    function updateSharedStationDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSharedStationDeprecated.params)) {
            try {
                params = new updateSharedStationDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSharedStationDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.SubObjectSet) ? o : new Configuration.SubObjectSet(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSharedStationDeprecated.method, updateSharedStationDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSharedStationDeprecated, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/{id}/shared-stations-deprecated', enumerable: true }
    });

    updateSharedStationDeprecated.params = (function(){
        _util.inherits(updateSharedStationDeprecated_params, _util.RequestParams);

        function updateSharedStationDeprecated_params(properties) {
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
            if (!(properties.content instanceof Configuration_Hardware.SharedStationsDeprecatedBulkUpdate)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.SharedStationsDeprecatedBulkUpdate');
            }

            updateSharedStationDeprecated_params._super.constructor.apply(this, arguments);
        }

        return updateSharedStationDeprecated_params;
    })();

    return Object.create(null, {
        updateSharedStationDeprecated: { value: updateSharedStationDeprecated, enumerable: true }
    });
})();

exports.$managedExternalRegistrationsDeprecated = $managedExternalRegistrationsDeprecated;
exports.$applyTemplate = $applyTemplate;
exports.$cancelScheduledReloads = $cancelScheduledReloads;
exports.$supportedPhonesAttributes = $supportedPhonesAttributes;
exports.$supportedPhones = $supportedPhones;
exports.$scheduledForReload = $scheduledForReload;
exports.$reloadAllWithPendingChanges = $reloadAllWithPendingChanges;
exports.$reload = $reload;
exports.$scheduleReload = $scheduleReload;
exports.$unprovision = $unprovision;
exports.$managedStationsDeprecated = $managedStationsDeprecated;
exports.$sharedStationsDeprecated = $sharedStationsDeprecated;
