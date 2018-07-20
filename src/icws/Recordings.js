/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var MediaType = (function(){
    var instanceCache = {};
    function MediaType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:mediaType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(MediaType, _util.EnumValue);

    Object.defineProperties(MediaType, {
        'Unknown': { value: new MediaType(0, 'Unknown'), enumerable: true },
        'Call': { value: new MediaType(1, 'Call'), enumerable: true },
        'Chat': { value: new MediaType(2, 'Chat'), enumerable: true },
        'ChatTranscript': { value: new MediaType(3, 'ChatTranscript'), enumerable: true },
        'Email': { value: new MediaType(4, 'Email'), enumerable: true },
        'Screen': { value: new MediaType(5, 'Screen'), enumerable: true },
        'SocialConversation': { value: new MediaType(6, 'SocialConversation'), enumerable: true }
    });

    Object.defineProperty(MediaType, '__type', { value: 'urn:inin.com:recordings:mediaType' });

    _typemap['urn:inin.com:recordings:mediaType'] = MediaType;

    return MediaType;
}());

var RecordingRights = (function(){
    var instanceCache = {};
    function RecordingRights(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }
        if (!_util.isString(name)) {
            var values = [1, 2, 4, 8, 16, 32, 64, 128, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 1073741824].reduce(function(values, current) {
                /*jshint bitwise:false */
                if (current === (current & value)) {
                    values.push(new RecordingRights(current));
                }
                return values;
            }, []);
            if (values.length > 0) {
                name = values.join(', ');
            }
            else {
                name = value.toString();
            }
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:recordingRights' });

        _util.BitFlagsEnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(RecordingRights, _util.BitFlagsEnumValue);

    RecordingRights.prototype.hasFlag = function(flag) {
        /*jshint bitwise:false */
        return (flag instanceof RecordingRights) && (flag.value === (flag.value & this.value));
    };

    RecordingRights.prototype.addFlag = function(flag) {
        /*jshint bitwise:false */

        if (!(flag instanceof RecordingRights)) {
            throw new TypeError('flag does not match the expected type: RecordingRights');
        }

        return new RecordingRights(this.value | flag.value);
    };

    RecordingRights.prototype.removeFlag = function(flag) {
        /*jshint bitwise:false */

        if (!(flag instanceof RecordingRights)) {
            throw new TypeError('flag does not match the expected type: RecordingRights');
        }

        return new RecordingRights(this.value & ~flag.value);
    };

    RecordingRights.prototype.setFlag = function(flag, state) {
        if (!(flag instanceof RecordingRights)) {
            throw new TypeError('flag does not match the expected type: RecordingRights');
        }
        if (!_util.isBoolean(state)) {
            throw new TypeError('state does not match the expected type: Boolean');
        }
        if (state) {
            return this.addFlag(flag);
        }
        else {
            return this.removeFlag(flag);
        }
    };

    Object.defineProperties(RecordingRights, {
        'NoRights': { value: new RecordingRights(0, 'NoRights'), enumerable: true },
        'ReadAccess': { value: new RecordingRights(1, 'ReadAccess'), enumerable: true },
        'WriteAccess': { value: new RecordingRights(2, 'WriteAccess'), enumerable: true },
        'CanPlay': { value: new RecordingRights(4, 'CanPlay'), enumerable: true },
        'CanExportOrArchive': { value: new RecordingRights(8, 'CanExportOrArchive'), enumerable: true },
        'CanEmail': { value: new RecordingRights(16, 'CanEmail'), enumerable: true },
        'CanScore': { value: new RecordingRights(32, 'CanScore'), enumerable: true },
        'CanViewParticipant': { value: new RecordingRights(64, 'CanViewParticipant'), enumerable: true },
        'CanDeleteRecording': { value: new RecordingRights(128, 'CanDeleteRecording'), enumerable: true },
        'CanViewAuditTrail': { value: new RecordingRights(4096, 'CanViewAuditTrail'), enumerable: true },
        'CanViewScorecards': { value: new RecordingRights(8192, 'CanViewScorecards'), enumerable: true },
        'CanViewCustomAttributes': { value: new RecordingRights(16384, 'CanViewCustomAttributes'), enumerable: true },
        'CanModifyCustomAttributes': { value: new RecordingRights(32768, 'CanModifyCustomAttributes'), enumerable: true },
        'CanViewTags': { value: new RecordingRights(65536, 'CanViewTags'), enumerable: true },
        'CanModifyTags': { value: new RecordingRights(131072, 'CanModifyTags'), enumerable: true },
        'CanAddBookmarks': { value: new RecordingRights(262144, 'CanAddBookmarks'), enumerable: true },
        'CanViewSignatureComments': { value: new RecordingRights(524288, 'CanViewSignatureComments'), enumerable: true },
        'CanDeleteScorecards': { value: new RecordingRights(1048576, 'CanDeleteScorecards'), enumerable: true },
        'CanAssignQuestionnaires': { value: new RecordingRights(2097152, 'CanAssignQuestionnaires'), enumerable: true },
        'EncumberedRecording': { value: new RecordingRights(1073741824, 'EncumberedRecording'), enumerable: true }
    });

    Object.defineProperty(RecordingRights, '__type', { value: 'urn:inin.com:recordings:recordingRights' });

    _typemap['urn:inin.com:recordings:recordingRights'] = RecordingRights;

    return RecordingRights;
}());

var CallType = (function(){
    var instanceCache = {};
    function CallType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:callType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(CallType, _util.EnumValue);

    Object.defineProperties(CallType, {
        'Unknown': { value: new CallType(0, 'Unknown'), enumerable: true },
        'External': { value: new CallType(1, 'External'), enumerable: true },
        'Intercom': { value: new CallType(2, 'Intercom'), enumerable: true },
        'Conference': { value: new CallType(3, 'Conference'), enumerable: true }
    });

    Object.defineProperty(CallType, '__type', { value: 'urn:inin.com:recordings:callType' });

    _typemap['urn:inin.com:recordings:callType'] = CallType;

    return CallType;
}());

var Direction = (function(){
    var instanceCache = {};
    function Direction(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:direction' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(Direction, _util.EnumValue);

    Object.defineProperties(Direction, {
        'Unknown': { value: new Direction(0, 'Unknown'), enumerable: true },
        'Inbound': { value: new Direction(1, 'Inbound'), enumerable: true },
        'Outbound': { value: new Direction(2, 'Outbound'), enumerable: true },
        'Intercom': { value: new Direction(3, 'Intercom'), enumerable: true }
    });

    Object.defineProperty(Direction, '__type', { value: 'urn:inin.com:recordings:direction' });

    _typemap['urn:inin.com:recordings:direction'] = Direction;

    return Direction;
}());

var RecordingType = (function(){
    var instanceCache = {};
    function RecordingType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:recordingType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(RecordingType, _util.EnumValue);

    Object.defineProperties(RecordingType, {
        'Unknown': { value: new RecordingType(0, 'Unknown'), enumerable: true },
        'PolicyRelated': { value: new RecordingType(1, 'PolicyRelated'), enumerable: true },
        'SnippetRecording': { value: new RecordingType(2, 'SnippetRecording'), enumerable: true }
    });

    Object.defineProperty(RecordingType, '__type', { value: 'urn:inin.com:recordings:recordingType' });

    _typemap['urn:inin.com:recordings:recordingType'] = RecordingType;

    return RecordingType;
}());

var RecordingIdList = (function(){
    var hasProps = false;

    function RecordingIdList() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:recordingIdList' });
        }

        RecordingIdList._super.constructor.apply(this, arguments);
    }
    _util.inherits(RecordingIdList, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RecordingIdList.prototype, 'recordingIds', {
            get: function() { return this.__prop_recordingIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for RecordingIdList.recordingIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordingIds = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RecordingIdList, '__type', { value: 'urn:inin.com:recordings:recordingIdList' });

    Object.defineProperty(RecordingIdList, '__propInfo', {
        get: function() {
            var pi = {
                'recordingIds': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:recordingIdList'] = RecordingIdList;

    return RecordingIdList;
}());

var TagList = (function(){
    var hasProps = false;

    function TagList() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:tagList' });
        }

        TagList._super.constructor.apply(this, arguments);
    }
    _util.inherits(TagList, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TagList.prototype, 'tags', {
            get: function() { return this.__prop_tags; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for TagList.tags, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_tags = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TagList, '__type', { value: 'urn:inin.com:recordings:tagList' });

    Object.defineProperty(TagList, '__propInfo', {
        get: function() {
            var pi = {
                'tags': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:tagList'] = TagList;

    return TagList;
}());

var AttributeMap = (function(){
    var hasProps = false;

    function AttributeMap() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:attributeMap' });
        }

        AttributeMap._super.constructor.apply(this, arguments);
    }
    _util.inherits(AttributeMap, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AttributeMap.prototype, 'attributesValues', {
            get: function() { return this.__prop_attributesValues; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AttributeItem); }))) {
                    try {
                        value = value.map(function(item){ return new AttributeItem(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AttributeMap.attributesValues: ' + e.message);
                    }
                }

                this.__prop_attributesValues = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AttributeMap, '__type', { value: 'urn:inin.com:recordings:attributeMap' });

    Object.defineProperty(AttributeMap, '__propInfo', {
        get: function() {
            var pi = {
                'attributesValues': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:attributeMap'] = AttributeMap;

    return AttributeMap;
}());

var AttributeItem = (function(){
    var hasProps = false;

    function AttributeItem() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:attributeItem' });
        }

        AttributeItem._super.constructor.apply(this, arguments);
    }
    _util.inherits(AttributeItem, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AttributeItem.prototype, 'attributeName', {
            get: function() { return this.__prop_attributeName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AttributeItem.attributeName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attributeName = value;
            },
            enumerable: true
        });

        Object.defineProperty(AttributeItem.prototype, 'attributeValue', {
            get: function() { return this.__prop_attributeValue; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AttributeItem.attributeValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attributeValue = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AttributeItem, '__type', { value: 'urn:inin.com:recordings:attributeItem' });

    Object.defineProperty(AttributeItem, '__propInfo', {
        get: function() {
            var pi = {
                'attributeName': { required: true, nullable: false },
                'attributeValue': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:attributeItem'] = AttributeItem;

    return AttributeItem;
}());

var GetExportUriResponse = (function(){
    var hasProps = false;

    function GetExportUriResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:getExportUriResponse' });
        }

        GetExportUriResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(GetExportUriResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(GetExportUriResponse.prototype, 'uri', {
            get: function() { return this.__prop_uri; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for GetExportUriResponse.uri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_uri = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(GetExportUriResponse, '__type', { value: 'urn:inin.com:recordings:getExportUriResponse' });

    Object.defineProperty(GetExportUriResponse, '__propInfo', {
        get: function() {
            var pi = {
                'uri': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:getExportUriResponse'] = GetExportUriResponse;

    return GetExportUriResponse;
}());

var GetPlaybackUriResponse = (function(){
    var hasProps = false;

    function GetPlaybackUriResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:getPlaybackUriResponse' });
        }

        GetPlaybackUriResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(GetPlaybackUriResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(GetPlaybackUriResponse.prototype, 'uri', {
            get: function() { return this.__prop_uri; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for GetPlaybackUriResponse.uri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_uri = value;
            },
            enumerable: true
        });

        Object.defineProperty(GetPlaybackUriResponse.prototype, 'timelineXml', {
            get: function() { return this.__prop_timelineXml; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for GetPlaybackUriResponse.timelineXml, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timelineXml = value;
            },
            enumerable: true
        });

        Object.defineProperty(GetPlaybackUriResponse.prototype, 'mediaDetails', {
            get: function() { return this.__prop_mediaDetails; },
            set: function(value) {
                if (!(value instanceof MediaDetails)) {
                    try {
                        value = new MediaDetails(value);
                    } catch (e) {
                        throw new TypeError('Error setting GetPlaybackUriResponse.mediaDetails: ' + e.message);
                    }
                }

                this.__prop_mediaDetails = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(GetPlaybackUriResponse, '__type', { value: 'urn:inin.com:recordings:getPlaybackUriResponse' });

    Object.defineProperty(GetPlaybackUriResponse, '__propInfo', {
        get: function() {
            var pi = {
                'uri': { required: true, nullable: false },
                'timelineXml': { required: true, nullable: false },
                'mediaDetails': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:getPlaybackUriResponse'] = GetPlaybackUriResponse;

    return GetPlaybackUriResponse;
}());

var MediaDetails = (function(){
    var hasProps = false;

    function MediaDetails() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:mediaDetails' });
        }

        MediaDetails._super.constructor.apply(this, arguments);
    }
    _util.inherits(MediaDetails, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MediaDetails.prototype, 'recordingDate', {
            get: function() { return this.__prop_recordingDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for MediaDetails.recordingDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordingDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaDetails.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for MediaDetails.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaDetails.prototype, 'initiationPolicyName', {
            get: function() { return this.__prop_initiationPolicyName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for MediaDetails.initiationPolicyName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_initiationPolicyName = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaDetails.prototype, 'lineName', {
            get: function() { return this.__prop_lineName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for MediaDetails.lineName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lineName = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaDetails.prototype, 'snippetInitiator', {
            get: function() { return this.__prop_snippetInitiator; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for MediaDetails.snippetInitiator, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_snippetInitiator = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaDetails.prototype, 'callType', {
            get: function() { return this.__prop_callType; },
            set: function(value) {
                if (!(value instanceof CallType)) {
                    try {
                        value = new CallType(value);
                    } catch (e) {
                        throw new TypeError('Error setting MediaDetails.callType: ' + e.message);
                    }
                }

                this.__prop_callType = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaDetails.prototype, 'isArchived', {
            get: function() { return this.__prop_isArchived; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for MediaDetails.isArchived, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isArchived = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaDetails.prototype, 'duration', {
            get: function() { return this.__prop_duration; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for MediaDetails.duration, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_duration = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaDetails.prototype, 'direction', {
            get: function() { return this.__prop_direction; },
            set: function(value) {
                if (!(value instanceof Direction)) {
                    try {
                        value = new Direction(value);
                    } catch (e) {
                        throw new TypeError('Error setting MediaDetails.direction: ' + e.message);
                    }
                }

                this.__prop_direction = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaDetails.prototype, 'recordingType', {
            get: function() { return this.__prop_recordingType; },
            set: function(value) {
                if (!(value instanceof RecordingType)) {
                    try {
                        value = new RecordingType(value);
                    } catch (e) {
                        throw new TypeError('Error setting MediaDetails.recordingType: ' + e.message);
                    }
                }

                this.__prop_recordingType = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaDetails.prototype, 'numAttachments', {
            get: function() { return this.__prop_numAttachments; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for MediaDetails.numAttachments, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_numAttachments = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaDetails.prototype, 'mediaType', {
            get: function() { return this.__prop_mediaType; },
            set: function(value) {
                if (!(value instanceof MediaType)) {
                    try {
                        value = new MediaType(value);
                    } catch (e) {
                        throw new TypeError('Error setting MediaDetails.mediaType: ' + e.message);
                    }
                }

                this.__prop_mediaType = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaDetails.prototype, 'isEncrypted', {
            get: function() { return this.__prop_isEncrypted; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for MediaDetails.isEncrypted, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isEncrypted = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MediaDetails, '__type', { value: 'urn:inin.com:recordings:mediaDetails' });

    Object.defineProperty(MediaDetails, '__propInfo', {
        get: function() {
            var pi = {
                'recordingDate': { required: true, nullable: false },
                'interactionId': { required: true, nullable: false },
                'initiationPolicyName': { required: false, nullable: true },
                'lineName': { required: false, nullable: true },
                'snippetInitiator': { required: false, nullable: true },
                'callType': { required: true, nullable: false },
                'isArchived': { required: false, nullable: true },
                'duration': { required: false, nullable: true },
                'direction': { required: true, nullable: false },
                'recordingType': { required: true, nullable: false },
                'numAttachments': { required: false, nullable: true },
                'mediaType': { required: true, nullable: false },
                'isEncrypted': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:mediaDetails'] = MediaDetails;

    return MediaDetails;
}());

var RecordingsEmailParameters = (function(){
    var hasProps = false;

    function RecordingsEmailParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:recordingsEmailParameters' });
        }

        RecordingsEmailParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(RecordingsEmailParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RecordingsEmailParameters.prototype, 'recordings', {
            get: function() { return this.__prop_recordings; },
            set: function(value) {
                if (!(value instanceof RecordingIdList)) {
                    try {
                        value = new RecordingIdList(value);
                    } catch (e) {
                        throw new TypeError('Error setting RecordingsEmailParameters.recordings: ' + e.message);
                    }
                }

                this.__prop_recordings = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordingsEmailParameters.prototype, 'parameters', {
            get: function() { return this.__prop_parameters; },
            set: function(value) {
                if (!(value instanceof EmailParameters)) {
                    try {
                        value = new EmailParameters(value);
                    } catch (e) {
                        throw new TypeError('Error setting RecordingsEmailParameters.parameters: ' + e.message);
                    }
                }

                this.__prop_parameters = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RecordingsEmailParameters, '__type', { value: 'urn:inin.com:recordings:recordingsEmailParameters' });

    Object.defineProperty(RecordingsEmailParameters, '__propInfo', {
        get: function() {
            var pi = {
                'recordings': { required: true, nullable: false },
                'parameters': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:recordingsEmailParameters'] = RecordingsEmailParameters;

    return RecordingsEmailParameters;
}());

var EmailParameters = (function(){
    var hasProps = false;

    function EmailParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:emailParameters' });
        }

        EmailParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailParameters.prototype, 'toParticipants', {
            get: function() { return this.__prop_toParticipants; },
            set: function(value) {
                if (!(value instanceof EmailAddressList)) {
                    try {
                        value = new EmailAddressList(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailParameters.toParticipants: ' + e.message);
                    }
                }

                this.__prop_toParticipants = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailParameters.prototype, 'ccParticipants', {
            get: function() { return this.__prop_ccParticipants; },
            set: function(value) {
                if (!(value instanceof EmailAddressList)) {
                    try {
                        value = new EmailAddressList(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailParameters.ccParticipants: ' + e.message);
                    }
                }

                this.__prop_ccParticipants = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailParameters.prototype, 'replyToAddress', {
            get: function() { return this.__prop_replyToAddress; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailParameters.replyToAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_replyToAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailParameters.prototype, 'emailSubject', {
            get: function() { return this.__prop_emailSubject; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailParameters.emailSubject, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailSubject = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailParameters.prototype, 'emailBody', {
            get: function() { return this.__prop_emailBody; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailParameters.emailBody, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_emailBody = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailParameters.prototype, 'priority', {
            get: function() { return this.__prop_priority; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for EmailParameters.priority, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_priority = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailParameters, '__type', { value: 'urn:inin.com:recordings:emailParameters' });

    Object.defineProperty(EmailParameters, '__propInfo', {
        get: function() {
            var pi = {
                'toParticipants': { required: true, nullable: false },
                'ccParticipants': { required: true, nullable: false },
                'replyToAddress': { required: true, nullable: false },
                'emailSubject': { required: true, nullable: false },
                'emailBody': { required: true, nullable: false },
                'priority': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:emailParameters'] = EmailParameters;

    return EmailParameters;
}());

var EmailAddressList = (function(){
    var hasProps = false;

    function EmailAddressList() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:emailAddressList' });
        }

        EmailAddressList._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailAddressList, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailAddressList.prototype, 'emailAddresses', {
            get: function() { return this.__prop_emailAddresses; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailAddress); }))) {
                    try {
                        value = value.map(function(item){ return new EmailAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailAddressList.emailAddresses: ' + e.message);
                    }
                }

                this.__prop_emailAddresses = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailAddressList, '__type', { value: 'urn:inin.com:recordings:emailAddressList' });

    Object.defineProperty(EmailAddressList, '__propInfo', {
        get: function() {
            var pi = {
                'emailAddresses': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:emailAddressList'] = EmailAddressList;

    return EmailAddressList;
}());

var EmailAddress = (function(){
    var hasProps = false;

    function EmailAddress() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:emailAddress' });
        }

        EmailAddress._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailAddress, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailAddress.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailAddress.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailAddress.prototype, 'address', {
            get: function() { return this.__prop_address; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailAddress.address, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_address = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailAddress, '__type', { value: 'urn:inin.com:recordings:emailAddress' });

    Object.defineProperty(EmailAddress, '__propInfo', {
        get: function() {
            var pi = {
                'displayName': { required: true, nullable: false },
                'address': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:emailAddress'] = EmailAddress;

    return EmailAddress;
}());

var StartStationAudioPlaybackCompletedMessage = (function(){
    var hasProps = false;

    function StartStationAudioPlaybackCompletedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:startStationAudioPlaybackCompletedMessage', enumerable: true });
        }

        StartStationAudioPlaybackCompletedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(StartStationAudioPlaybackCompletedMessage, Messaging.AsyncOperationCompletedMessage);

    function defineProps() {
        Object.defineProperty(StartStationAudioPlaybackCompletedMessage.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for StartStationAudioPlaybackCompletedMessage.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StartStationAudioPlaybackCompletedMessage, '__type', { value: 'urn:inin.com:recordings:startStationAudioPlaybackCompletedMessage' });

    Object.defineProperty(StartStationAudioPlaybackCompletedMessage, '__propInfo', {
        get: function() {
            var pi = {
                'interactionId': { required: false, nullable: false }
            };
            if (Messaging.AsyncOperationCompletedMessage.__propInfo) { _util.extend(pi, Messaging.AsyncOperationCompletedMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:startStationAudioPlaybackCompletedMessage'] = StartStationAudioPlaybackCompletedMessage;

    return StartStationAudioPlaybackCompletedMessage;
}());

var StartScreenRecordingCompletedMessage = (function(){
    var hasProps = false;

    function StartScreenRecordingCompletedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:startScreenRecordingCompletedMessage', enumerable: true });
        }

        StartScreenRecordingCompletedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(StartScreenRecordingCompletedMessage, Messaging.AsyncOperationCompletedMessage);

    function defineProps() {
        Object.defineProperty(StartScreenRecordingCompletedMessage.prototype, 'recordingIdList', {
            get: function() { return this.__prop_recordingIdList; },
            set: function(value) {
                if (!(value instanceof RecordingIdList || value === void 0)) {
                    try {
                        value = new RecordingIdList(value);
                    } catch (e) {
                        throw new TypeError('Error setting StartScreenRecordingCompletedMessage.recordingIdList: ' + e.message);
                    }
                }

                this.__prop_recordingIdList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StartScreenRecordingCompletedMessage, '__type', { value: 'urn:inin.com:recordings:startScreenRecordingCompletedMessage' });

    Object.defineProperty(StartScreenRecordingCompletedMessage, '__propInfo', {
        get: function() {
            var pi = {
                'recordingIdList': { required: false, nullable: false }
            };
            if (Messaging.AsyncOperationCompletedMessage.__propInfo) { _util.extend(pi, Messaging.AsyncOperationCompletedMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:startScreenRecordingCompletedMessage'] = StartScreenRecordingCompletedMessage;

    return StartScreenRecordingCompletedMessage;
}());

var PauseScreenRecordingCompletedMessage = (function(){
    var hasProps = false;

    function PauseScreenRecordingCompletedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:pauseScreenRecordingCompletedMessage', enumerable: true });
        }

        PauseScreenRecordingCompletedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(PauseScreenRecordingCompletedMessage, Messaging.AsyncOperationCompletedMessage);

    function defineProps() {
        Object.defineProperty(PauseScreenRecordingCompletedMessage.prototype, 'recordingIdList', {
            get: function() { return this.__prop_recordingIdList; },
            set: function(value) {
                if (!(value instanceof RecordingIdList || value === void 0)) {
                    try {
                        value = new RecordingIdList(value);
                    } catch (e) {
                        throw new TypeError('Error setting PauseScreenRecordingCompletedMessage.recordingIdList: ' + e.message);
                    }
                }

                this.__prop_recordingIdList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PauseScreenRecordingCompletedMessage, '__type', { value: 'urn:inin.com:recordings:pauseScreenRecordingCompletedMessage' });

    Object.defineProperty(PauseScreenRecordingCompletedMessage, '__propInfo', {
        get: function() {
            var pi = {
                'recordingIdList': { required: false, nullable: false }
            };
            if (Messaging.AsyncOperationCompletedMessage.__propInfo) { _util.extend(pi, Messaging.AsyncOperationCompletedMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:pauseScreenRecordingCompletedMessage'] = PauseScreenRecordingCompletedMessage;

    return PauseScreenRecordingCompletedMessage;
}());

var ResumeScreenRecordingCompletedMessage = (function(){
    var hasProps = false;

    function ResumeScreenRecordingCompletedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:recordings:resumeScreenRecordingCompletedMessage', enumerable: true });
        }

        ResumeScreenRecordingCompletedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(ResumeScreenRecordingCompletedMessage, Messaging.AsyncOperationCompletedMessage);

    function defineProps() {
        Object.defineProperty(ResumeScreenRecordingCompletedMessage.prototype, 'recordingIdList', {
            get: function() { return this.__prop_recordingIdList; },
            set: function(value) {
                if (!(value instanceof RecordingIdList || value === void 0)) {
                    try {
                        value = new RecordingIdList(value);
                    } catch (e) {
                        throw new TypeError('Error setting ResumeScreenRecordingCompletedMessage.recordingIdList: ' + e.message);
                    }
                }

                this.__prop_recordingIdList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ResumeScreenRecordingCompletedMessage, '__type', { value: 'urn:inin.com:recordings:resumeScreenRecordingCompletedMessage' });

    Object.defineProperty(ResumeScreenRecordingCompletedMessage, '__propInfo', {
        get: function() {
            var pi = {
                'recordingIdList': { required: false, nullable: false }
            };
            if (Messaging.AsyncOperationCompletedMessage.__propInfo) { _util.extend(pi, Messaging.AsyncOperationCompletedMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:recordings:resumeScreenRecordingCompletedMessage'] = ResumeScreenRecordingCompletedMessage;

    return ResumeScreenRecordingCompletedMessage;
}());

var $tags = (function(){
    function getTags(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getTags.params)) {
            try {
                params = new getTags.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getTags.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof TagList) ? o : new TagList(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getTags.method, getTags.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getTags, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/recordings/{recordingId}/tags', enumerable: true }
    });

    getTags.params = (function(){
        _util.inherits(getTags_params, _util.RequestParams);

        function getTags_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordingId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordingId')) {
                throw new Error('`properties.template` is missing required property: `recordingId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getTags_params._super.constructor.apply(this, arguments);
        }

        return getTags_params;
    })();

    function addTags(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof addTags.params)) {
            try {
                params = new addTags.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: addTags.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(addTags.method, addTags.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(addTags, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/recordings/{recordingId}/tags', enumerable: true }
    });

    addTags.params = (function(){
        _util.inherits(addTags_params, _util.RequestParams);

        function addTags_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordingId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordingId')) {
                throw new Error('`properties.template` is missing required property: `recordingId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof TagList)) {
                throw new TypeError('`properties.content` value does not match the expected type: Recordings.TagList');
            }

            addTags_params._super.constructor.apply(this, arguments);
        }

        return addTags_params;
    })();

    function deleteTags(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteTags.params)) {
            try {
                params = new deleteTags.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteTags.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteTags.method, deleteTags.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteTags, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/recordings/{recordingId}/tags', enumerable: true }
    });

    deleteTags.params = (function(){
        _util.inherits(deleteTags_params, _util.RequestParams);

        function deleteTags_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordingId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordingId')) {
                throw new Error('`properties.template` is missing required property: `recordingId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteTags_params._super.constructor.apply(this, arguments);
        }

        return deleteTags_params;
    })();

    return Object.create(null, {
        getTags: { value: getTags, enumerable: true },
        addTags: { value: addTags, enumerable: true },
        deleteTags: { value: deleteTags, enumerable: true }
    });
})();

var $attributes = (function(){
    function getattributes(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getattributes.params)) {
            try {
                params = new getattributes.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getattributes.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AttributeMap) ? o : new AttributeMap(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getattributes.method, getattributes.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getattributes, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/recordings/{recordingId}/attributes', enumerable: true }
    });

    getattributes.params = (function(){
        _util.inherits(getattributes_params, _util.RequestParams);

        function getattributes_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordingId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordingId')) {
                throw new Error('`properties.template` is missing required property: `recordingId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getattributes_params._super.constructor.apply(this, arguments);
        }

        return getattributes_params;
    })();

    function setattributes(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof setattributes.params)) {
            try {
                params = new setattributes.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: setattributes.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(setattributes.method, setattributes.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(setattributes, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/recordings/{recordingId}/attributes', enumerable: true }
    });

    setattributes.params = (function(){
        _util.inherits(setattributes_params, _util.RequestParams);

        function setattributes_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordingId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordingId')) {
                throw new Error('`properties.template` is missing required property: `recordingId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof AttributeMap)) {
                throw new TypeError('`properties.content` value does not match the expected type: Recordings.AttributeMap');
            }

            setattributes_params._super.constructor.apply(this, arguments);
        }

        return setattributes_params;
    })();

    function deleteattributes(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteattributes.params)) {
            try {
                params = new deleteattributes.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteattributes.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteattributes.method, deleteattributes.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteattributes, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/recordings/{recordingId}/attributes', enumerable: true }
    });

    deleteattributes.params = (function(){
        _util.inherits(deleteattributes_params, _util.RequestParams);

        function deleteattributes_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordingId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordingId')) {
                throw new Error('`properties.template` is missing required property: `recordingId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteattributes_params._super.constructor.apply(this, arguments);
        }

        return deleteattributes_params;
    })();

    return Object.create(null, {
        getattributes: { value: getattributes, enumerable: true },
        setattributes: { value: setattributes, enumerable: true },
        deleteattributes: { value: deleteattributes, enumerable: true }
    });
})();

var $exportUri = (function(){
    function getExportUri(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getExportUri.params)) {
            try {
                params = new getExportUri.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getExportUri.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof GetExportUriResponse) ? o : new GetExportUriResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getExportUri.method, getExportUri.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getExportUri, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/recordings/{recordingId}/export-uri', enumerable: true }
    });

    getExportUri.params = (function(){
        _util.inherits(getExportUri_params, _util.RequestParams);

        function getExportUri_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordingId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordingId')) {
                throw new Error('`properties.template` is missing required property: `recordingId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getExportUri_params._super.constructor.apply(this, arguments);
        }

        return getExportUri_params;
    })();

    return Object.create(null, {
        getExportUri: { value: getExportUri, enumerable: true }
    });
})();

var $playbackUri = (function(){
    function getPlaybackUri(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getPlaybackUri.params)) {
            try {
                params = new getPlaybackUri.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getPlaybackUri.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof GetPlaybackUriResponse) ? o : new GetPlaybackUriResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getPlaybackUri.method, getPlaybackUri.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getPlaybackUri, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/recordings/{recordingId}/playback-uri', enumerable: true }
    });

    getPlaybackUri.params = (function(){
        _util.inherits(getPlaybackUri_params, _util.RequestParams);

        function getPlaybackUri_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordingId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordingId')) {
                throw new Error('`properties.template` is missing required property: `recordingId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getPlaybackUri_params._super.constructor.apply(this, arguments);
        }

        return getPlaybackUri_params;
    })();

    return Object.create(null, {
        getPlaybackUri: { value: getPlaybackUri, enumerable: true }
    });
})();

var $sendAsEmail = (function(){
    function sendRecordingsAsEmail(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof sendRecordingsAsEmail.params)) {
            try {
                params = new sendRecordingsAsEmail.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: sendRecordingsAsEmail.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(sendRecordingsAsEmail.method, sendRecordingsAsEmail.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(sendRecordingsAsEmail, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/recordings/send-as-email', enumerable: true }
    });

    sendRecordingsAsEmail.params = (function(){
        _util.inherits(sendRecordingsAsEmail_params, _util.RequestParams);

        function sendRecordingsAsEmail_params(properties) {
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
            if (!(properties.content instanceof RecordingsEmailParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Recordings.RecordingsEmailParameters');
            }

            sendRecordingsAsEmail_params._super.constructor.apply(this, arguments);
        }

        return sendRecordingsAsEmail_params;
    })();

    function sendRecordingAsEmail(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof sendRecordingAsEmail.params)) {
            try {
                params = new sendRecordingAsEmail.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: sendRecordingAsEmail.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(sendRecordingAsEmail.method, sendRecordingAsEmail.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(sendRecordingAsEmail, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/recordings/{recordingId}/send-as-email', enumerable: true }
    });

    sendRecordingAsEmail.params = (function(){
        _util.inherits(sendRecordingAsEmail_params, _util.RequestParams);

        function sendRecordingAsEmail_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, recordingId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'recordingId')) {
                throw new Error('`properties.template` is missing required property: `recordingId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof EmailParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Recordings.EmailParameters');
            }

            sendRecordingAsEmail_params._super.constructor.apply(this, arguments);
        }

        return sendRecordingAsEmail_params;
    })();

    return Object.create(null, {
        sendRecordingsAsEmail: { value: sendRecordingsAsEmail, enumerable: true },
        sendRecordingAsEmail: { value: sendRecordingAsEmail, enumerable: true }
    });
})();

exports.MediaType = MediaType;
exports.RecordingRights = RecordingRights;
exports.CallType = CallType;
exports.Direction = Direction;
exports.RecordingType = RecordingType;
exports.StartStationAudioPlaybackCompletedMessage = StartStationAudioPlaybackCompletedMessage;
exports.StartScreenRecordingCompletedMessage = StartScreenRecordingCompletedMessage;
exports.RecordingIdList = RecordingIdList;
exports.PauseScreenRecordingCompletedMessage = PauseScreenRecordingCompletedMessage;
exports.ResumeScreenRecordingCompletedMessage = ResumeScreenRecordingCompletedMessage;
exports.TagList = TagList;
exports.AttributeMap = AttributeMap;
exports.AttributeItem = AttributeItem;
exports.GetExportUriResponse = GetExportUriResponse;
exports.GetPlaybackUriResponse = GetPlaybackUriResponse;
exports.MediaDetails = MediaDetails;
exports.RecordingsEmailParameters = RecordingsEmailParameters;
exports.EmailParameters = EmailParameters;
exports.EmailAddressList = EmailAddressList;
exports.EmailAddress = EmailAddress;
exports.$tags = $tags;
exports.$attributes = $attributes;
exports.$exportUri = $exportUri;
exports.$playbackUri = $playbackUri;
exports.$sendAsEmail = $sendAsEmail;
