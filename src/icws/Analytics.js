/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');

var IdentityToken = (function(){
    var hasProps = false;

    function IdentityToken() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:analytics:identityToken' });
        }

        IdentityToken._super.constructor.apply(this, arguments);
    }
    _util.inherits(IdentityToken, _util.DataContract);

    function defineProps() {
        Object.defineProperty(IdentityToken.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for IdentityToken.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(IdentityToken, '__type', { value: 'urn:inin.com:analytics:identityToken' });

    Object.defineProperty(IdentityToken, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:analytics:identityToken'] = IdentityToken;

    return IdentityToken;
}());

var ProjectId = (function(){
    var hasProps = false;

    function ProjectId() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:analytics:projectId' });
        }

        ProjectId._super.constructor.apply(this, arguments);
    }
    _util.inherits(ProjectId, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ProjectId.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ProjectId.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ProjectId, '__type', { value: 'urn:inin.com:analytics:projectId' });

    Object.defineProperty(ProjectId, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:analytics:projectId'] = ProjectId;

    return ProjectId;
}());

exports.IdentityToken = IdentityToken;
exports.ProjectId = ProjectId;
