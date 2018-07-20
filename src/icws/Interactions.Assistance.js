/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');

var AssistanceRequestState = (function(){
    var instanceCache = {};
    function AssistanceRequestState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(AssistanceRequestState, _util.EnumValue);

    Object.defineProperties(AssistanceRequestState, {
        'None': { value: new AssistanceRequestState(0, 'None'), enumerable: true },
        'Accepted': { value: new AssistanceRequestState(1, 'Accepted'), enumerable: true },
        'Completed': { value: new AssistanceRequestState(2, 'Completed'), enumerable: true }
    });

    Object.defineProperty(AssistanceRequestState, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestState' });

    _typemap['urn:inin.com:interactions.assistance:assistanceRequestState'] = AssistanceRequestState;

    return AssistanceRequestState;
}());

var AssistanceRequestParticipantAction = (function(){
    var instanceCache = {};
    function AssistanceRequestParticipantAction(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestParticipantAction' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(AssistanceRequestParticipantAction, _util.EnumValue);

    Object.defineProperties(AssistanceRequestParticipantAction, {
        'None': { value: new AssistanceRequestParticipantAction(0, 'None'), enumerable: true },
        'Initiated': { value: new AssistanceRequestParticipantAction(1, 'Initiated'), enumerable: true },
        'Ignored': { value: new AssistanceRequestParticipantAction(2, 'Ignored'), enumerable: true },
        'Accepted': { value: new AssistanceRequestParticipantAction(3, 'Accepted'), enumerable: true }
    });

    Object.defineProperty(AssistanceRequestParticipantAction, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestParticipantAction' });

    _typemap['urn:inin.com:interactions.assistance:assistanceRequestParticipantAction'] = AssistanceRequestParticipantAction;

    return AssistanceRequestParticipantAction;
}());

var AssistanceRequestMessage = (function(){
    var hasProps = false;

    function AssistanceRequestMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestMessage' });
        }

        AssistanceRequestMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AssistanceRequestMessage, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AssistanceRequestMessage.prototype, 'text', {
            get: function() { return this.__prop_text; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AssistanceRequestMessage.text, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_text = value;
            },
            enumerable: true
        });

        Object.defineProperty(AssistanceRequestMessage.prototype, 'participantId', {
            get: function() { return this.__prop_participantId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AssistanceRequestMessage.participantId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_participantId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AssistanceRequestMessage.prototype, 'timeAdded', {
            get: function() { return this.__prop_timeAdded; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for AssistanceRequestMessage.timeAdded, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timeAdded = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AssistanceRequestMessage, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestMessage' });

    Object.defineProperty(AssistanceRequestMessage, '__propInfo', {
        get: function() {
            var pi = {
                'text': { required: true, nullable: false },
                'participantId': { required: true, nullable: false },
                'timeAdded': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.assistance:assistanceRequestMessage'] = AssistanceRequestMessage;

    return AssistanceRequestMessage;
}());

var AssistanceRequestParticipant = (function(){
    var hasProps = false;

    function AssistanceRequestParticipant() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestParticipant' });
        }

        AssistanceRequestParticipant._super.constructor.apply(this, arguments);
    }
    _util.inherits(AssistanceRequestParticipant, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AssistanceRequestParticipant.prototype, 'userId', {
            get: function() { return this.__prop_userId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AssistanceRequestParticipant.userId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_userId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AssistanceRequestParticipant.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AssistanceRequestParticipant.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(AssistanceRequestParticipant.prototype, 'action', {
            get: function() { return this.__prop_action; },
            set: function(value) {
                if (!(value instanceof AssistanceRequestParticipantAction)) {
                    try {
                        value = new AssistanceRequestParticipantAction(value);
                    } catch (e) {
                        throw new TypeError('Error setting AssistanceRequestParticipant.action: ' + e.message);
                    }
                }

                this.__prop_action = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AssistanceRequestParticipant, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestParticipant' });

    Object.defineProperty(AssistanceRequestParticipant, '__propInfo', {
        get: function() {
            var pi = {
                'userId': { required: true, nullable: false },
                'displayName': { required: true, nullable: false },
                'action': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.assistance:assistanceRequestParticipant'] = AssistanceRequestParticipant;

    return AssistanceRequestParticipant;
}());

var SupervisorAssistanceRequestDetails = (function(){
    var hasProps = false;

    function SupervisorAssistanceRequestDetails() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:supervisorAssistanceRequestDetails' });
        }

        SupervisorAssistanceRequestDetails._super.constructor.apply(this, arguments);
    }
    _util.inherits(SupervisorAssistanceRequestDetails, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SupervisorAssistanceRequestDetails.prototype, 'assistanceId', {
            get: function() { return this.__prop_assistanceId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SupervisorAssistanceRequestDetails.assistanceId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_assistanceId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupervisorAssistanceRequestDetails.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SupervisorAssistanceRequestDetails.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupervisorAssistanceRequestDetails.prototype, 'problemDescription', {
            get: function() { return this.__prop_problemDescription; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SupervisorAssistanceRequestDetails.problemDescription, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_problemDescription = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupervisorAssistanceRequestDetails.prototype, 'workgroup', {
            get: function() { return this.__prop_workgroup; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SupervisorAssistanceRequestDetails.workgroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroup = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupervisorAssistanceRequestDetails.prototype, 'initiator', {
            get: function() { return this.__prop_initiator; },
            set: function(value) {
                if (!(value instanceof AssistanceRequestParticipant)) {
                    try {
                        value = new AssistanceRequestParticipant(value);
                    } catch (e) {
                        throw new TypeError('Error setting SupervisorAssistanceRequestDetails.initiator: ' + e.message);
                    }
                }

                this.__prop_initiator = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupervisorAssistanceRequestDetails.prototype, 'action', {
            get: function() { return this.__prop_action; },
            set: function(value) {
                if (!(value instanceof AssistanceRequestParticipantAction)) {
                    try {
                        value = new AssistanceRequestParticipantAction(value);
                    } catch (e) {
                        throw new TypeError('Error setting SupervisorAssistanceRequestDetails.action: ' + e.message);
                    }
                }

                this.__prop_action = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupervisorAssistanceRequestDetails.prototype, 'state', {
            get: function() { return this.__prop_state; },
            set: function(value) {
                if (!(value instanceof AssistanceRequestState)) {
                    try {
                        value = new AssistanceRequestState(value);
                    } catch (e) {
                        throw new TypeError('Error setting SupervisorAssistanceRequestDetails.state: ' + e.message);
                    }
                }

                this.__prop_state = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SupervisorAssistanceRequestDetails, '__type', { value: 'urn:inin.com:interactions.assistance:supervisorAssistanceRequestDetails' });

    Object.defineProperty(SupervisorAssistanceRequestDetails, '__propInfo', {
        get: function() {
            var pi = {
                'assistanceId': { required: true, nullable: false },
                'interactionId': { required: true, nullable: false },
                'problemDescription': { required: true, nullable: false },
                'workgroup': { required: true, nullable: false },
                'initiator': { required: true, nullable: false },
                'action': { required: true, nullable: false },
                'state': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.assistance:supervisorAssistanceRequestDetails'] = SupervisorAssistanceRequestDetails;

    return SupervisorAssistanceRequestDetails;
}());

var AssistanceRequestParameters = (function(){
    var hasProps = false;

    function AssistanceRequestParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestParameters' });
        }

        AssistanceRequestParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(AssistanceRequestParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AssistanceRequestParameters.prototype, 'text', {
            get: function() { return this.__prop_text; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AssistanceRequestParameters.text, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_text = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AssistanceRequestParameters, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestParameters' });

    Object.defineProperty(AssistanceRequestParameters, '__propInfo', {
        get: function() {
            var pi = {
                'text': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.assistance:assistanceRequestParameters'] = AssistanceRequestParameters;

    return AssistanceRequestParameters;
}());

var RequestAssistanceResponse = (function(){
    var hasProps = false;

    function RequestAssistanceResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:requestAssistanceResponse' });
        }

        RequestAssistanceResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(RequestAssistanceResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RequestAssistanceResponse.prototype, 'assistanceId', {
            get: function() { return this.__prop_assistanceId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RequestAssistanceResponse.assistanceId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_assistanceId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RequestAssistanceResponse, '__type', { value: 'urn:inin.com:interactions.assistance:requestAssistanceResponse' });

    Object.defineProperty(RequestAssistanceResponse, '__propInfo', {
        get: function() {
            var pi = {
                'assistanceId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.assistance:requestAssistanceResponse'] = RequestAssistanceResponse;

    return RequestAssistanceResponse;
}());

var SupervisorAssistanceRequestAction = (function(){
    var hasProps = false;

    function SupervisorAssistanceRequestAction() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:supervisorAssistanceRequestAction' });
        }

        SupervisorAssistanceRequestAction._super.constructor.apply(this, arguments);
    }
    _util.inherits(SupervisorAssistanceRequestAction, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SupervisorAssistanceRequestAction.prototype, 'text', {
            get: function() { return this.__prop_text; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for SupervisorAssistanceRequestAction.text, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_text = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupervisorAssistanceRequestAction.prototype, 'action', {
            get: function() { return this.__prop_action; },
            set: function(value) {
                if (!(value instanceof AssistanceRequestParticipantAction || value === void 0)) {
                    try {
                        value = new AssistanceRequestParticipantAction(value);
                    } catch (e) {
                        throw new TypeError('Error setting SupervisorAssistanceRequestAction.action: ' + e.message);
                    }
                }

                this.__prop_action = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SupervisorAssistanceRequestAction, '__type', { value: 'urn:inin.com:interactions.assistance:supervisorAssistanceRequestAction' });

    Object.defineProperty(SupervisorAssistanceRequestAction, '__propInfo', {
        get: function() {
            var pi = {
                'text': { required: false, nullable: false },
                'action': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.assistance:supervisorAssistanceRequestAction'] = SupervisorAssistanceRequestAction;

    return SupervisorAssistanceRequestAction;
}());

var AssistanceRequestListMessage = (function(){
    var hasProps = false;

    function AssistanceRequestListMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestListMessage', enumerable: true });
        }

        AssistanceRequestListMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AssistanceRequestListMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(AssistanceRequestListMessage.prototype, 'requestsAdded', {
            get: function() { return this.__prop_requestsAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for AssistanceRequestListMessage.requestsAdded, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_requestsAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(AssistanceRequestListMessage.prototype, 'requestsRemoved', {
            get: function() { return this.__prop_requestsRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for AssistanceRequestListMessage.requestsRemoved, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_requestsRemoved = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AssistanceRequestListMessage, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestListMessage' });

    Object.defineProperty(AssistanceRequestListMessage, '__propInfo', {
        get: function() {
            var pi = {
                'requestsAdded': { required: false, nullable: false },
                'requestsRemoved': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.assistance:assistanceRequestListMessage'] = AssistanceRequestListMessage;

    return AssistanceRequestListMessage;
}());

var AssistanceRequestDetailsMessage = (function(){
    var hasProps = false;

    function AssistanceRequestDetailsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestDetailsMessage', enumerable: true });
        }

        AssistanceRequestDetailsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AssistanceRequestDetailsMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(AssistanceRequestDetailsMessage.prototype, 'assistanceId', {
            get: function() { return this.__prop_assistanceId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AssistanceRequestDetailsMessage.assistanceId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_assistanceId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AssistanceRequestDetailsMessage.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for AssistanceRequestDetailsMessage.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AssistanceRequestDetailsMessage.prototype, 'state', {
            get: function() { return this.__prop_state; },
            set: function(value) {
                if (!(value instanceof AssistanceRequestState || value === void 0)) {
                    try {
                        value = new AssistanceRequestState(value);
                    } catch (e) {
                        throw new TypeError('Error setting AssistanceRequestDetailsMessage.state: ' + e.message);
                    }
                }

                this.__prop_state = value;
            },
            enumerable: true
        });

        Object.defineProperty(AssistanceRequestDetailsMessage.prototype, 'messagesAdded', {
            get: function() { return this.__prop_messagesAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AssistanceRequestMessage); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AssistanceRequestMessage(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AssistanceRequestDetailsMessage.messagesAdded: ' + e.message);
                    }
                }

                this.__prop_messagesAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(AssistanceRequestDetailsMessage.prototype, 'participantsAdded', {
            get: function() { return this.__prop_participantsAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AssistanceRequestParticipant); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AssistanceRequestParticipant(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AssistanceRequestDetailsMessage.participantsAdded: ' + e.message);
                    }
                }

                this.__prop_participantsAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(AssistanceRequestDetailsMessage.prototype, 'participantsChanged', {
            get: function() { return this.__prop_participantsChanged; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AssistanceRequestParticipant); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AssistanceRequestParticipant(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AssistanceRequestDetailsMessage.participantsChanged: ' + e.message);
                    }
                }

                this.__prop_participantsChanged = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AssistanceRequestDetailsMessage, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestDetailsMessage' });

    Object.defineProperty(AssistanceRequestDetailsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'assistanceId': { required: true, nullable: false },
                'interactionId': { required: false, nullable: false },
                'state': { required: false, nullable: false },
                'messagesAdded': { required: false, nullable: false },
                'participantsAdded': { required: false, nullable: false },
                'participantsChanged': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.assistance:assistanceRequestDetailsMessage'] = AssistanceRequestDetailsMessage;

    return AssistanceRequestDetailsMessage;
}());

var SupervisorAssistanceRequestMessage = (function(){
    var hasProps = false;

    function SupervisorAssistanceRequestMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:supervisorAssistanceRequestMessage', enumerable: true });
        }

        SupervisorAssistanceRequestMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(SupervisorAssistanceRequestMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(SupervisorAssistanceRequestMessage.prototype, 'requestsAdded', {
            get: function() { return this.__prop_requestsAdded; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SupervisorAssistanceRequestDetails); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SupervisorAssistanceRequestDetails(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SupervisorAssistanceRequestMessage.requestsAdded: ' + e.message);
                    }
                }

                this.__prop_requestsAdded = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupervisorAssistanceRequestMessage.prototype, 'requestsChanged', {
            get: function() { return this.__prop_requestsChanged; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SupervisorAssistanceRequestDetails); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new SupervisorAssistanceRequestDetails(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SupervisorAssistanceRequestMessage.requestsChanged: ' + e.message);
                    }
                }

                this.__prop_requestsChanged = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupervisorAssistanceRequestMessage.prototype, 'requestsRemoved', {
            get: function() { return this.__prop_requestsRemoved; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for SupervisorAssistanceRequestMessage.requestsRemoved, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_requestsRemoved = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SupervisorAssistanceRequestMessage, '__type', { value: 'urn:inin.com:interactions.assistance:supervisorAssistanceRequestMessage' });

    Object.defineProperty(SupervisorAssistanceRequestMessage, '__propInfo', {
        get: function() {
            var pi = {
                'requestsAdded': { required: false, nullable: false },
                'requestsChanged': { required: false, nullable: false },
                'requestsRemoved': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.assistance:supervisorAssistanceRequestMessage'] = SupervisorAssistanceRequestMessage;

    return SupervisorAssistanceRequestMessage;
}());

var AssistanceRequestSubscriptionStateMessage = (function(){
    var hasProps = false;

    function AssistanceRequestSubscriptionStateMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestSubscriptionStateMessage', enumerable: true });
        }

        AssistanceRequestSubscriptionStateMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AssistanceRequestSubscriptionStateMessage, Messaging.SubscriptionStateMessage);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(AssistanceRequestSubscriptionStateMessage, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestSubscriptionStateMessage' });

    Object.defineProperty(AssistanceRequestSubscriptionStateMessage, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (Messaging.SubscriptionStateMessage.__propInfo) { _util.extend(pi, Messaging.SubscriptionStateMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.assistance:assistanceRequestSubscriptionStateMessage'] = AssistanceRequestSubscriptionStateMessage;

    return AssistanceRequestSubscriptionStateMessage;
}());

exports.AssistanceRequestState = AssistanceRequestState;
exports.AssistanceRequestParticipantAction = AssistanceRequestParticipantAction;
exports.AssistanceRequestSubscriptionStateMessage = AssistanceRequestSubscriptionStateMessage;
exports.AssistanceRequestListMessage = AssistanceRequestListMessage;
exports.AssistanceRequestDetailsMessage = AssistanceRequestDetailsMessage;
exports.AssistanceRequestMessage = AssistanceRequestMessage;
exports.AssistanceRequestParticipant = AssistanceRequestParticipant;
exports.SupervisorAssistanceRequestMessage = SupervisorAssistanceRequestMessage;
exports.SupervisorAssistanceRequestDetails = SupervisorAssistanceRequestDetails;
exports.AssistanceRequestParameters = AssistanceRequestParameters;
exports.RequestAssistanceResponse = RequestAssistanceResponse;
exports.SupervisorAssistanceRequestAction = SupervisorAssistanceRequestAction;
