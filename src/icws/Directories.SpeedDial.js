/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Directories = require('./Directories');
var Common = require('./Common');

var $links = (function(){
    function createSpeedDialLink(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSpeedDialLink.params)) {
            try {
                params = new createSpeedDialLink.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSpeedDialLink.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Directories.SpeedDialContactLinkCreated) ? o : new Directories.SpeedDialContactLinkCreated(o); };
        dc['403'] = dc['503'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSpeedDialLink.method, createSpeedDialLink.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSpeedDialLink, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/directories/speed-dial/{speedDialDirectoryId}/links', enumerable: true }
    });

    createSpeedDialLink.params = (function(){
        _util.inherits(createSpeedDialLink_params, _util.RequestParams);

        function createSpeedDialLink_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, speedDialDirectoryId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'speedDialDirectoryId')) {
                throw new Error('`properties.template` is missing required property: `speedDialDirectoryId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Directories.CreateSpeedDialContactLink)) {
                throw new TypeError('`properties.content` value does not match the expected type: Directories.CreateSpeedDialContactLink');
            }

            createSpeedDialLink_params._super.constructor.apply(this, arguments);
        }

        return createSpeedDialLink_params;
    })();

    function updateSpeedDialLink(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSpeedDialLink.params)) {
            try {
                params = new updateSpeedDialLink.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSpeedDialLink.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['503'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSpeedDialLink.method, updateSpeedDialLink.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSpeedDialLink, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/directories/speed-dial/{speedDialDirectoryId}/links/{speedDialLinkId}', enumerable: true }
    });

    updateSpeedDialLink.params = (function(){
        _util.inherits(updateSpeedDialLink_params, _util.RequestParams);

        function updateSpeedDialLink_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, speedDialDirectoryId, speedDialLinkId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'speedDialDirectoryId')) {
                throw new Error('`properties.template` is missing required property: `speedDialDirectoryId`');
            }
            if (!_util.hasProp(properties.template, 'speedDialLinkId')) {
                throw new Error('`properties.template` is missing required property: `speedDialLinkId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Directories.SpeedDialContactLink)) {
                throw new TypeError('`properties.content` value does not match the expected type: Directories.SpeedDialContactLink');
            }

            updateSpeedDialLink_params._super.constructor.apply(this, arguments);
        }

        return updateSpeedDialLink_params;
    })();

    function deleteSpeedDialLink(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSpeedDialLink.params)) {
            try {
                params = new deleteSpeedDialLink.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSpeedDialLink.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['503'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSpeedDialLink.method, deleteSpeedDialLink.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSpeedDialLink, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/directories/speed-dial/{speedDialDirectoryId}/links/{speedDialLinkId}', enumerable: true }
    });

    deleteSpeedDialLink.params = (function(){
        _util.inherits(deleteSpeedDialLink_params, _util.RequestParams);

        function deleteSpeedDialLink_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, speedDialDirectoryId, speedDialLinkId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'speedDialDirectoryId')) {
                throw new Error('`properties.template` is missing required property: `speedDialDirectoryId`');
            }
            if (!_util.hasProp(properties.template, 'speedDialLinkId')) {
                throw new Error('`properties.template` is missing required property: `speedDialLinkId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSpeedDialLink_params._super.constructor.apply(this, arguments);
        }

        return deleteSpeedDialLink_params;
    })();

    return Object.create(null, {
        createSpeedDialLink: { value: createSpeedDialLink, enumerable: true },
        updateSpeedDialLink: { value: updateSpeedDialLink, enumerable: true },
        deleteSpeedDialLink: { value: deleteSpeedDialLink, enumerable: true }
    });
})();

exports.$links = $links;
