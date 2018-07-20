/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Configuration = require('./Configuration');

var AccessRightsProperties = (function(){
    var hasProps = false;

    function AccessRightsProperties() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people.accessrights:accessRightsProperties' });
        }

        AccessRightsProperties._super.constructor.apply(this, arguments);
    }
    _util.inherits(AccessRightsProperties, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AccessRightsProperties.prototype, 'activateOthers', {
            get: function() { return this.__prop_activateOthers; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.activateOthers: ' + e.message);
                    }
                }

                this.__prop_activateOthers = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'activateSelf', {
            get: function() { return this.__prop_activateSelf; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.activateSelf: ' + e.message);
                    }
                }

                this.__prop_activateSelf = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'canEditAccessRights', {
            get: function() { return this.__prop_canEditAccessRights; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.canEditAccessRights: ' + e.message);
                    }
                }

                this.__prop_canEditAccessRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'changeUserStatus', {
            get: function() { return this.__prop_changeUserStatus; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.changeUserStatus: ' + e.message);
                    }
                }

                this.__prop_changeUserStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'clientButtons', {
            get: function() { return this.__prop_clientButtons; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.clientButtons: ' + e.message);
                    }
                }

                this.__prop_clientButtons = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'coachLineQueue', {
            get: function() { return this.__prop_coachLineQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.coachLineQueue: ' + e.message);
                    }
                }

                this.__prop_coachLineQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'coachStationQueue', {
            get: function() { return this.__prop_coachStationQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.coachStationQueue: ' + e.message);
                    }
                }

                this.__prop_coachStationQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'coachUserQueue', {
            get: function() { return this.__prop_coachUserQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.coachUserQueue: ' + e.message);
                    }
                }

                this.__prop_coachUserQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'coachWorkgroupQueue', {
            get: function() { return this.__prop_coachWorkgroupQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.coachWorkgroupQueue: ' + e.message);
                    }
                }

                this.__prop_coachWorkgroupQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'createOptimizerForecasts', {
            get: function() { return this.__prop_createOptimizerForecasts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.createOptimizerForecasts: ' + e.message);
                    }
                }

                this.__prop_createOptimizerForecasts = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'createSchedulingUnitAgentConstraints', {
            get: function() { return this.__prop_createSchedulingUnitAgentConstraints; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.createSchedulingUnitAgentConstraints: ' + e.message);
                    }
                }

                this.__prop_createSchedulingUnitAgentConstraints = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'createSchedulingUnitAgentGroups', {
            get: function() { return this.__prop_createSchedulingUnitAgentGroups; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.createSchedulingUnitAgentGroups: ' + e.message);
                    }
                }

                this.__prop_createSchedulingUnitAgentGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'createSchedulingUnitSchedules', {
            get: function() { return this.__prop_createSchedulingUnitSchedules; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.createSchedulingUnitSchedules: ' + e.message);
                    }
                }

                this.__prop_createSchedulingUnitSchedules = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'createSchedulingUnitShiftRotations', {
            get: function() { return this.__prop_createSchedulingUnitShiftRotations; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.createSchedulingUnitShiftRotations: ' + e.message);
                    }
                }

                this.__prop_createSchedulingUnitShiftRotations = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'createSchedulingUnitShifts', {
            get: function() { return this.__prop_createSchedulingUnitShifts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.createSchedulingUnitShifts: ' + e.message);
                    }
                }

                this.__prop_createSchedulingUnitShifts = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'createSchedulingUnitTimeoffRequests', {
            get: function() { return this.__prop_createSchedulingUnitTimeoffRequests; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.createSchedulingUnitTimeoffRequests: ' + e.message);
                    }
                }

                this.__prop_createSchedulingUnitTimeoffRequests = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'deleteOptimizerForecasts', {
            get: function() { return this.__prop_deleteOptimizerForecasts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.deleteOptimizerForecasts: ' + e.message);
                    }
                }

                this.__prop_deleteOptimizerForecasts = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'deleteSchedulingUnitAgentConstraints', {
            get: function() { return this.__prop_deleteSchedulingUnitAgentConstraints; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.deleteSchedulingUnitAgentConstraints: ' + e.message);
                    }
                }

                this.__prop_deleteSchedulingUnitAgentConstraints = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'deleteSchedulingUnitAgentGroups', {
            get: function() { return this.__prop_deleteSchedulingUnitAgentGroups; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.deleteSchedulingUnitAgentGroups: ' + e.message);
                    }
                }

                this.__prop_deleteSchedulingUnitAgentGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'deleteSchedulingUnitSchedules', {
            get: function() { return this.__prop_deleteSchedulingUnitSchedules; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.deleteSchedulingUnitSchedules: ' + e.message);
                    }
                }

                this.__prop_deleteSchedulingUnitSchedules = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'deleteSchedulingUnitShiftRotations', {
            get: function() { return this.__prop_deleteSchedulingUnitShiftRotations; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.deleteSchedulingUnitShiftRotations: ' + e.message);
                    }
                }

                this.__prop_deleteSchedulingUnitShiftRotations = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'deleteSchedulingUnitShifts', {
            get: function() { return this.__prop_deleteSchedulingUnitShifts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.deleteSchedulingUnitShifts: ' + e.message);
                    }
                }

                this.__prop_deleteSchedulingUnitShifts = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'deleteSchedulingUnitTimeoffRequests', {
            get: function() { return this.__prop_deleteSchedulingUnitTimeoffRequests; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.deleteSchedulingUnitTimeoffRequests: ' + e.message);
                    }
                }

                this.__prop_deleteSchedulingUnitTimeoffRequests = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'disconnectLineQueue', {
            get: function() { return this.__prop_disconnectLineQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.disconnectLineQueue: ' + e.message);
                    }
                }

                this.__prop_disconnectLineQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'disconnectStationQueue', {
            get: function() { return this.__prop_disconnectStationQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.disconnectStationQueue: ' + e.message);
                    }
                }

                this.__prop_disconnectStationQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'disconnectUserQueue', {
            get: function() { return this.__prop_disconnectUserQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.disconnectUserQueue: ' + e.message);
                    }
                }

                this.__prop_disconnectUserQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'disconnectWorkgroupQueue', {
            get: function() { return this.__prop_disconnectWorkgroupQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.disconnectWorkgroupQueue: ' + e.message);
                    }
                }

                this.__prop_disconnectWorkgroupQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'eFaqs', {
            get: function() { return this.__prop_eFaqs; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.eFaqs: ' + e.message);
                    }
                }

                this.__prop_eFaqs = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'followMePhoneNumberClassifications', {
            get: function() { return this.__prop_followMePhoneNumberClassifications; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.followMePhoneNumberClassifications: ' + e.message);
                    }
                }

                this.__prop_followMePhoneNumberClassifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'forwardPhoneNumberClassifications', {
            get: function() { return this.__prop_forwardPhoneNumberClassifications; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.forwardPhoneNumberClassifications: ' + e.message);
                    }
                }

                this.__prop_forwardPhoneNumberClassifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'holdStationQueue', {
            get: function() { return this.__prop_holdStationQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.holdStationQueue: ' + e.message);
                    }
                }

                this.__prop_holdStationQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'holdUserQueue', {
            get: function() { return this.__prop_holdUserQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.holdUserQueue: ' + e.message);
                    }
                }

                this.__prop_holdUserQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'interactionClientPlugins', {
            get: function() { return this.__prop_interactionClientPlugins; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.interactionClientPlugins: ' + e.message);
                    }
                }

                this.__prop_interactionClientPlugins = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'interactionConferenceRestrictRooms', {
            get: function() { return this.__prop_interactionConferenceRestrictRooms; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.interactionConferenceRestrictRooms: ' + e.message);
                    }
                }

                this.__prop_interactionConferenceRestrictRooms = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'joinLineQueue', {
            get: function() { return this.__prop_joinLineQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.joinLineQueue: ' + e.message);
                    }
                }

                this.__prop_joinLineQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'joinStationQueue', {
            get: function() { return this.__prop_joinStationQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.joinStationQueue: ' + e.message);
                    }
                }

                this.__prop_joinStationQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'joinUserQueue', {
            get: function() { return this.__prop_joinUserQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.joinUserQueue: ' + e.message);
                    }
                }

                this.__prop_joinUserQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'joinWorkgroupQueue', {
            get: function() { return this.__prop_joinWorkgroupQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.joinWorkgroupQueue: ' + e.message);
                    }
                }

                this.__prop_joinWorkgroupQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'launchableProcessList', {
            get: function() { return this.__prop_launchableProcessList; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.launchableProcessList: ' + e.message);
                    }
                }

                this.__prop_launchableProcessList = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'listAccountCodes', {
            get: function() { return this.__prop_listAccountCodes; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.listAccountCodes: ' + e.message);
                    }
                }

                this.__prop_listAccountCodes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'listenLineQueue', {
            get: function() { return this.__prop_listenLineQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.listenLineQueue: ' + e.message);
                    }
                }

                this.__prop_listenLineQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'listenStationQueue', {
            get: function() { return this.__prop_listenStationQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.listenStationQueue: ' + e.message);
                    }
                }

                this.__prop_listenStationQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'listenUserQueue', {
            get: function() { return this.__prop_listenUserQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.listenUserQueue: ' + e.message);
                    }
                }

                this.__prop_listenUserQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'listenWorkgroupQueue', {
            get: function() { return this.__prop_listenWorkgroupQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.listenWorkgroupQueue: ' + e.message);
                    }
                }

                this.__prop_listenWorkgroupQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'loginStation', {
            get: function() { return this.__prop_loginStation; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.loginStation: ' + e.message);
                    }
                }

                this.__prop_loginStation = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'manageProcessList', {
            get: function() { return this.__prop_manageProcessList; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.manageProcessList: ' + e.message);
                    }
                }

                this.__prop_manageProcessList = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'miscellaneous', {
            get: function() { return this.__prop_miscellaneous; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.miscellaneous: ' + e.message);
                    }
                }

                this.__prop_miscellaneous = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifyAttendantEmailProfiles', {
            get: function() { return this.__prop_modifyAttendantEmailProfiles; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifyAttendantEmailProfiles: ' + e.message);
                    }
                }

                this.__prop_modifyAttendantEmailProfiles = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifyAttendantInboundProfiles', {
            get: function() { return this.__prop_modifyAttendantInboundProfiles; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifyAttendantInboundProfiles: ' + e.message);
                    }
                }

                this.__prop_modifyAttendantInboundProfiles = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifyAttendantOperatorProfiles', {
            get: function() { return this.__prop_modifyAttendantOperatorProfiles; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifyAttendantOperatorProfiles: ' + e.message);
                    }
                }

                this.__prop_modifyAttendantOperatorProfiles = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifyAttendantOutboundProfiles', {
            get: function() { return this.__prop_modifyAttendantOutboundProfiles; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifyAttendantOutboundProfiles: ' + e.message);
                    }
                }

                this.__prop_modifyAttendantOutboundProfiles = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifyCampaignList', {
            get: function() { return this.__prop_modifyCampaignList; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifyCampaignList: ' + e.message);
                    }
                }

                this.__prop_modifyCampaignList = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifyFeedbackSurveys', {
            get: function() { return this.__prop_modifyFeedbackSurveys; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifyFeedbackSurveys: ' + e.message);
                    }
                }

                this.__prop_modifyFeedbackSurveys = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifyOptimizerForecasts', {
            get: function() { return this.__prop_modifyOptimizerForecasts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifyOptimizerForecasts: ' + e.message);
                    }
                }

                this.__prop_modifyOptimizerForecasts = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifyRecorderQuestionnaires', {
            get: function() { return this.__prop_modifyRecorderQuestionnaires; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifyRecorderQuestionnaires: ' + e.message);
                    }
                }

                this.__prop_modifyRecorderQuestionnaires = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifySchedulingUnitAgentConstraints', {
            get: function() { return this.__prop_modifySchedulingUnitAgentConstraints; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifySchedulingUnitAgentConstraints: ' + e.message);
                    }
                }

                this.__prop_modifySchedulingUnitAgentConstraints = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifySchedulingUnitAgentGroups', {
            get: function() { return this.__prop_modifySchedulingUnitAgentGroups; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifySchedulingUnitAgentGroups: ' + e.message);
                    }
                }

                this.__prop_modifySchedulingUnitAgentGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifySchedulingUnitConfiguration', {
            get: function() { return this.__prop_modifySchedulingUnitConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifySchedulingUnitConfiguration: ' + e.message);
                    }
                }

                this.__prop_modifySchedulingUnitConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifySchedulingUnitListRealTimeAdherence', {
            get: function() { return this.__prop_modifySchedulingUnitListRealTimeAdherence; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifySchedulingUnitListRealTimeAdherence: ' + e.message);
                    }
                }

                this.__prop_modifySchedulingUnitListRealTimeAdherence = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifySchedulingUnitSchedules', {
            get: function() { return this.__prop_modifySchedulingUnitSchedules; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifySchedulingUnitSchedules: ' + e.message);
                    }
                }

                this.__prop_modifySchedulingUnitSchedules = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifySchedulingUnitShiftRotations', {
            get: function() { return this.__prop_modifySchedulingUnitShiftRotations; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifySchedulingUnitShiftRotations: ' + e.message);
                    }
                }

                this.__prop_modifySchedulingUnitShiftRotations = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifySchedulingUnitShifts', {
            get: function() { return this.__prop_modifySchedulingUnitShifts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifySchedulingUnitShifts: ' + e.message);
                    }
                }

                this.__prop_modifySchedulingUnitShifts = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'modifySchedulingUnitTimeoffRequests', {
            get: function() { return this.__prop_modifySchedulingUnitTimeoffRequests; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.modifySchedulingUnitTimeoffRequests: ' + e.message);
                    }
                }

                this.__prop_modifySchedulingUnitTimeoffRequests = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'muteStationQueue', {
            get: function() { return this.__prop_muteStationQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.muteStationQueue: ' + e.message);
                    }
                }

                this.__prop_muteStationQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'muteUserQueue', {
            get: function() { return this.__prop_muteUserQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.muteUserQueue: ' + e.message);
                    }
                }

                this.__prop_muteUserQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'phoneNumberClassifications', {
            get: function() { return this.__prop_phoneNumberClassifications; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.phoneNumberClassifications: ' + e.message);
                    }
                }

                this.__prop_phoneNumberClassifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'pickupLineQueue', {
            get: function() { return this.__prop_pickupLineQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.pickupLineQueue: ' + e.message);
                    }
                }

                this.__prop_pickupLineQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'pickupStationQueue', {
            get: function() { return this.__prop_pickupStationQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.pickupStationQueue: ' + e.message);
                    }
                }

                this.__prop_pickupStationQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'pickupUserQueue', {
            get: function() { return this.__prop_pickupUserQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.pickupUserQueue: ' + e.message);
                    }
                }

                this.__prop_pickupUserQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'pickupWorkgroupQueue', {
            get: function() { return this.__prop_pickupWorkgroupQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.pickupWorkgroupQueue: ' + e.message);
                    }
                }

                this.__prop_pickupWorkgroupQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'previewEmailUserQueue', {
            get: function() { return this.__prop_previewEmailUserQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.previewEmailUserQueue: ' + e.message);
                    }
                }

                this.__prop_previewEmailUserQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'previewEmailWorkgroupQueue', {
            get: function() { return this.__prop_previewEmailWorkgroupQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.previewEmailWorkgroupQueue: ' + e.message);
                    }
                }

                this.__prop_previewEmailWorkgroupQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'recordLineQueue', {
            get: function() { return this.__prop_recordLineQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.recordLineQueue: ' + e.message);
                    }
                }

                this.__prop_recordLineQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'recordStationQueue', {
            get: function() { return this.__prop_recordStationQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.recordStationQueue: ' + e.message);
                    }
                }

                this.__prop_recordStationQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'recordUserQueue', {
            get: function() { return this.__prop_recordUserQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.recordUserQueue: ' + e.message);
                    }
                }

                this.__prop_recordUserQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'recordWorkgroupQueue', {
            get: function() { return this.__prop_recordWorkgroupQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.recordWorkgroupQueue: ' + e.message);
                    }
                }

                this.__prop_recordWorkgroupQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'responseManagementDocuments', {
            get: function() { return this.__prop_responseManagementDocuments; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.responseManagementDocuments: ' + e.message);
                    }
                }

                this.__prop_responseManagementDocuments = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'snipLineQueue', {
            get: function() { return this.__prop_snipLineQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.snipLineQueue: ' + e.message);
                    }
                }

                this.__prop_snipLineQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'snipStationQueue', {
            get: function() { return this.__prop_snipStationQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.snipStationQueue: ' + e.message);
                    }
                }

                this.__prop_snipStationQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'snipUserQueue', {
            get: function() { return this.__prop_snipUserQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.snipUserQueue: ' + e.message);
                    }
                }

                this.__prop_snipUserQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'snipWorkgroupQueue', {
            get: function() { return this.__prop_snipWorkgroupQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.snipWorkgroupQueue: ' + e.message);
                    }
                }

                this.__prop_snipWorkgroupQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'statusMessages', {
            get: function() { return this.__prop_statusMessages; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.statusMessages: ' + e.message);
                    }
                }

                this.__prop_statusMessages = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'substituteQueueControlColumns', {
            get: function() { return this.__prop_substituteQueueControlColumns; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.substituteQueueControlColumns: ' + e.message);
                    }
                }

                this.__prop_substituteQueueControlColumns = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'transferLineQueue', {
            get: function() { return this.__prop_transferLineQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.transferLineQueue: ' + e.message);
                    }
                }

                this.__prop_transferLineQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'transferStationQueue', {
            get: function() { return this.__prop_transferStationQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.transferStationQueue: ' + e.message);
                    }
                }

                this.__prop_transferStationQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'transferUserQueue', {
            get: function() { return this.__prop_transferUserQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.transferUserQueue: ' + e.message);
                    }
                }

                this.__prop_transferUserQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'transferWorkgroupQueue', {
            get: function() { return this.__prop_transferWorkgroupQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.transferWorkgroupQueue: ' + e.message);
                    }
                }

                this.__prop_transferWorkgroupQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'tuiPhoneNumberClassifications', {
            get: function() { return this.__prop_tuiPhoneNumberClassifications; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.tuiPhoneNumberClassifications: ' + e.message);
                    }
                }

                this.__prop_tuiPhoneNumberClassifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewAnalyticsDashboards', {
            get: function() { return this.__prop_viewAnalyticsDashboards; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewAnalyticsDashboards: ' + e.message);
                    }
                }

                this.__prop_viewAnalyticsDashboards = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewAttendantEmailProfileInSearch', {
            get: function() { return this.__prop_viewAttendantEmailProfileInSearch; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewAttendantEmailProfileInSearch: ' + e.message);
                    }
                }

                this.__prop_viewAttendantEmailProfileInSearch = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewAttendantEmailProfiles', {
            get: function() { return this.__prop_viewAttendantEmailProfiles; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewAttendantEmailProfiles: ' + e.message);
                    }
                }

                this.__prop_viewAttendantEmailProfiles = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewAttendantInboundProfileInSearch', {
            get: function() { return this.__prop_viewAttendantInboundProfileInSearch; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewAttendantInboundProfileInSearch: ' + e.message);
                    }
                }

                this.__prop_viewAttendantInboundProfileInSearch = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewAttendantInboundProfiles', {
            get: function() { return this.__prop_viewAttendantInboundProfiles; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewAttendantInboundProfiles: ' + e.message);
                    }
                }

                this.__prop_viewAttendantInboundProfiles = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewAttendantOperatorProfileInSearch', {
            get: function() { return this.__prop_viewAttendantOperatorProfileInSearch; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewAttendantOperatorProfileInSearch: ' + e.message);
                    }
                }

                this.__prop_viewAttendantOperatorProfileInSearch = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewAttendantOperatorProfiles', {
            get: function() { return this.__prop_viewAttendantOperatorProfiles; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewAttendantOperatorProfiles: ' + e.message);
                    }
                }

                this.__prop_viewAttendantOperatorProfiles = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewAttendantOutboundProfileInSearch', {
            get: function() { return this.__prop_viewAttendantOutboundProfileInSearch; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewAttendantOutboundProfileInSearch: ' + e.message);
                    }
                }

                this.__prop_viewAttendantOutboundProfileInSearch = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewAttendantOutboundProfiles', {
            get: function() { return this.__prop_viewAttendantOutboundProfiles; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewAttendantOutboundProfiles: ' + e.message);
                    }
                }

                this.__prop_viewAttendantOutboundProfiles = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewCampaignList', {
            get: function() { return this.__prop_viewCampaignList; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewCampaignList: ' + e.message);
                    }
                }

                this.__prop_viewCampaignList = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewDataSource', {
            get: function() { return this.__prop_viewDataSource; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewDataSource: ' + e.message);
                    }
                }

                this.__prop_viewDataSource = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewFeedbackSurveys', {
            get: function() { return this.__prop_viewFeedbackSurveys; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewFeedbackSurveys: ' + e.message);
                    }
                }

                this.__prop_viewFeedbackSurveys = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewGeneralDirectories', {
            get: function() { return this.__prop_viewGeneralDirectories; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewGeneralDirectories: ' + e.message);
                    }
                }

                this.__prop_viewGeneralDirectories = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewHistoricalReports', {
            get: function() { return this.__prop_viewHistoricalReports; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewHistoricalReports: ' + e.message);
                    }
                }

                this.__prop_viewHistoricalReports = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewIndividualStatistics', {
            get: function() { return this.__prop_viewIndividualStatistics; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewIndividualStatistics: ' + e.message);
                    }
                }

                this.__prop_viewIndividualStatistics = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewLayoutList', {
            get: function() { return this.__prop_viewLayoutList; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewLayoutList: ' + e.message);
                    }
                }

                this.__prop_viewLayoutList = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewLineQueue', {
            get: function() { return this.__prop_viewLineQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewLineQueue: ' + e.message);
                    }
                }

                this.__prop_viewLineQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewModifyOptimizerAll', {
            get: function() { return this.__prop_viewModifyOptimizerAll; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewModifyOptimizerAll: ' + e.message);
                    }
                }

                this.__prop_viewModifyOptimizerAll = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewOptimizerForecasts', {
            get: function() { return this.__prop_viewOptimizerForecasts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewOptimizerForecasts: ' + e.message);
                    }
                }

                this.__prop_viewOptimizerForecasts = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewOptimizerSchedulingUnits', {
            get: function() { return this.__prop_viewOptimizerSchedulingUnits; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewOptimizerSchedulingUnits: ' + e.message);
                    }
                }

                this.__prop_viewOptimizerSchedulingUnits = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewPositionsList', {
            get: function() { return this.__prop_viewPositionsList; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewPositionsList: ' + e.message);
                    }
                }

                this.__prop_viewPositionsList = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewProcessList', {
            get: function() { return this.__prop_viewProcessList; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewProcessList: ' + e.message);
                    }
                }

                this.__prop_viewProcessList = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewQueueControlColumns', {
            get: function() { return this.__prop_viewQueueControlColumns; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewQueueControlColumns: ' + e.message);
                    }
                }

                this.__prop_viewQueueControlColumns = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewRecorderQuestionnaires', {
            get: function() { return this.__prop_viewRecorderQuestionnaires; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewRecorderQuestionnaires: ' + e.message);
                    }
                }

                this.__prop_viewRecorderQuestionnaires = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewReport', {
            get: function() { return this.__prop_viewReport; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewReport: ' + e.message);
                    }
                }

                this.__prop_viewReport = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewSchedulingUnitAgentConstraints', {
            get: function() { return this.__prop_viewSchedulingUnitAgentConstraints; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewSchedulingUnitAgentConstraints: ' + e.message);
                    }
                }

                this.__prop_viewSchedulingUnitAgentConstraints = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewSchedulingUnitAgentGroups', {
            get: function() { return this.__prop_viewSchedulingUnitAgentGroups; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewSchedulingUnitAgentGroups: ' + e.message);
                    }
                }

                this.__prop_viewSchedulingUnitAgentGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewSchedulingUnitConfiguration', {
            get: function() { return this.__prop_viewSchedulingUnitConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewSchedulingUnitConfiguration: ' + e.message);
                    }
                }

                this.__prop_viewSchedulingUnitConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewSchedulingUnitIntradayMonitoring', {
            get: function() { return this.__prop_viewSchedulingUnitIntradayMonitoring; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewSchedulingUnitIntradayMonitoring: ' + e.message);
                    }
                }

                this.__prop_viewSchedulingUnitIntradayMonitoring = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewSchedulingUnitListRealTimeAdherence', {
            get: function() { return this.__prop_viewSchedulingUnitListRealTimeAdherence; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewSchedulingUnitListRealTimeAdherence: ' + e.message);
                    }
                }

                this.__prop_viewSchedulingUnitListRealTimeAdherence = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewSchedulingUnitSchedulePreferences', {
            get: function() { return this.__prop_viewSchedulingUnitSchedulePreferences; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewSchedulingUnitSchedulePreferences: ' + e.message);
                    }
                }

                this.__prop_viewSchedulingUnitSchedulePreferences = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewSchedulingUnitSchedules', {
            get: function() { return this.__prop_viewSchedulingUnitSchedules; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewSchedulingUnitSchedules: ' + e.message);
                    }
                }

                this.__prop_viewSchedulingUnitSchedules = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewSchedulingUnitShiftRotations', {
            get: function() { return this.__prop_viewSchedulingUnitShiftRotations; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewSchedulingUnitShiftRotations: ' + e.message);
                    }
                }

                this.__prop_viewSchedulingUnitShiftRotations = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewSchedulingUnitShifts', {
            get: function() { return this.__prop_viewSchedulingUnitShifts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewSchedulingUnitShifts: ' + e.message);
                    }
                }

                this.__prop_viewSchedulingUnitShifts = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewSchedulingUnitTimeoffRequests', {
            get: function() { return this.__prop_viewSchedulingUnitTimeoffRequests; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewSchedulingUnitTimeoffRequests: ' + e.message);
                    }
                }

                this.__prop_viewSchedulingUnitTimeoffRequests = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewSkillList', {
            get: function() { return this.__prop_viewSkillList; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewSkillList: ' + e.message);
                    }
                }

                this.__prop_viewSkillList = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewStationGroups', {
            get: function() { return this.__prop_viewStationGroups; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewStationGroups: ' + e.message);
                    }
                }

                this.__prop_viewStationGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewStationGroupsInSearch', {
            get: function() { return this.__prop_viewStationGroupsInSearch; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewStationGroupsInSearch: ' + e.message);
                    }
                }

                this.__prop_viewStationGroupsInSearch = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewStationQueue', {
            get: function() { return this.__prop_viewStationQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewStationQueue: ' + e.message);
                    }
                }

                this.__prop_viewStationQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewStationQueueInSearch', {
            get: function() { return this.__prop_viewStationQueueInSearch; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewStationQueueInSearch: ' + e.message);
                    }
                }

                this.__prop_viewStationQueueInSearch = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewStatusColumns', {
            get: function() { return this.__prop_viewStatusColumns; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewStatusColumns: ' + e.message);
                    }
                }

                this.__prop_viewStatusColumns = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewUserInteractionHistory', {
            get: function() { return this.__prop_viewUserInteractionHistory; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewUserInteractionHistory: ' + e.message);
                    }
                }

                this.__prop_viewUserInteractionHistory = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewUserQueue', {
            get: function() { return this.__prop_viewUserQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewUserQueue: ' + e.message);
                    }
                }

                this.__prop_viewUserQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewWorkgroup', {
            get: function() { return this.__prop_viewWorkgroup; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewWorkgroup: ' + e.message);
                    }
                }

                this.__prop_viewWorkgroup = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewWorkgroupQueue', {
            get: function() { return this.__prop_viewWorkgroupQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewWorkgroupQueue: ' + e.message);
                    }
                }

                this.__prop_viewWorkgroupQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewWorkgroupQueueInSearch', {
            get: function() { return this.__prop_viewWorkgroupQueueInSearch; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewWorkgroupQueueInSearch: ' + e.message);
                    }
                }

                this.__prop_viewWorkgroupQueueInSearch = value;
            },
            enumerable: true
        });

        Object.defineProperty(AccessRightsProperties.prototype, 'viewWorkgroupStatistics', {
            get: function() { return this.__prop_viewWorkgroupStatistics; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AccessRightsProperties.viewWorkgroupStatistics: ' + e.message);
                    }
                }

                this.__prop_viewWorkgroupStatistics = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AccessRightsProperties, '__type', { value: 'urn:inin.com:configuration.people.accessrights:accessRightsProperties' });

    Object.defineProperty(AccessRightsProperties, '__propInfo', {
        get: function() {
            var pi = {
                'activateOthers': { required: false, nullable: true },
                'activateSelf': { required: false, nullable: true },
                'canEditAccessRights': { required: false, nullable: true },
                'changeUserStatus': { required: false, nullable: true },
                'clientButtons': { required: false, nullable: true },
                'coachLineQueue': { required: false, nullable: true },
                'coachStationQueue': { required: false, nullable: true },
                'coachUserQueue': { required: false, nullable: true },
                'coachWorkgroupQueue': { required: false, nullable: true },
                'createOptimizerForecasts': { required: false, nullable: true },
                'createSchedulingUnitAgentConstraints': { required: false, nullable: true },
                'createSchedulingUnitAgentGroups': { required: false, nullable: true },
                'createSchedulingUnitSchedules': { required: false, nullable: true },
                'createSchedulingUnitShiftRotations': { required: false, nullable: true },
                'createSchedulingUnitShifts': { required: false, nullable: true },
                'createSchedulingUnitTimeoffRequests': { required: false, nullable: true },
                'deleteOptimizerForecasts': { required: false, nullable: true },
                'deleteSchedulingUnitAgentConstraints': { required: false, nullable: true },
                'deleteSchedulingUnitAgentGroups': { required: false, nullable: true },
                'deleteSchedulingUnitSchedules': { required: false, nullable: true },
                'deleteSchedulingUnitShiftRotations': { required: false, nullable: true },
                'deleteSchedulingUnitShifts': { required: false, nullable: true },
                'deleteSchedulingUnitTimeoffRequests': { required: false, nullable: true },
                'disconnectLineQueue': { required: false, nullable: true },
                'disconnectStationQueue': { required: false, nullable: true },
                'disconnectUserQueue': { required: false, nullable: true },
                'disconnectWorkgroupQueue': { required: false, nullable: true },
                'eFaqs': { required: false, nullable: true },
                'followMePhoneNumberClassifications': { required: false, nullable: true },
                'forwardPhoneNumberClassifications': { required: false, nullable: true },
                'holdStationQueue': { required: false, nullable: true },
                'holdUserQueue': { required: false, nullable: true },
                'interactionClientPlugins': { required: false, nullable: true },
                'interactionConferenceRestrictRooms': { required: false, nullable: true },
                'joinLineQueue': { required: false, nullable: true },
                'joinStationQueue': { required: false, nullable: true },
                'joinUserQueue': { required: false, nullable: true },
                'joinWorkgroupQueue': { required: false, nullable: true },
                'launchableProcessList': { required: false, nullable: true },
                'listAccountCodes': { required: false, nullable: true },
                'listenLineQueue': { required: false, nullable: true },
                'listenStationQueue': { required: false, nullable: true },
                'listenUserQueue': { required: false, nullable: true },
                'listenWorkgroupQueue': { required: false, nullable: true },
                'loginStation': { required: false, nullable: true },
                'manageProcessList': { required: false, nullable: true },
                'miscellaneous': { required: false, nullable: true },
                'modifyAttendantEmailProfiles': { required: false, nullable: true },
                'modifyAttendantInboundProfiles': { required: false, nullable: true },
                'modifyAttendantOperatorProfiles': { required: false, nullable: true },
                'modifyAttendantOutboundProfiles': { required: false, nullable: true },
                'modifyCampaignList': { required: false, nullable: true },
                'modifyFeedbackSurveys': { required: false, nullable: true },
                'modifyOptimizerForecasts': { required: false, nullable: true },
                'modifyRecorderQuestionnaires': { required: false, nullable: true },
                'modifySchedulingUnitAgentConstraints': { required: false, nullable: true },
                'modifySchedulingUnitAgentGroups': { required: false, nullable: true },
                'modifySchedulingUnitConfiguration': { required: false, nullable: true },
                'modifySchedulingUnitListRealTimeAdherence': { required: false, nullable: true },
                'modifySchedulingUnitSchedules': { required: false, nullable: true },
                'modifySchedulingUnitShiftRotations': { required: false, nullable: true },
                'modifySchedulingUnitShifts': { required: false, nullable: true },
                'modifySchedulingUnitTimeoffRequests': { required: false, nullable: true },
                'muteStationQueue': { required: false, nullable: true },
                'muteUserQueue': { required: false, nullable: true },
                'phoneNumberClassifications': { required: false, nullable: true },
                'pickupLineQueue': { required: false, nullable: true },
                'pickupStationQueue': { required: false, nullable: true },
                'pickupUserQueue': { required: false, nullable: true },
                'pickupWorkgroupQueue': { required: false, nullable: true },
                'previewEmailUserQueue': { required: false, nullable: true },
                'previewEmailWorkgroupQueue': { required: false, nullable: true },
                'recordLineQueue': { required: false, nullable: true },
                'recordStationQueue': { required: false, nullable: true },
                'recordUserQueue': { required: false, nullable: true },
                'recordWorkgroupQueue': { required: false, nullable: true },
                'responseManagementDocuments': { required: false, nullable: true },
                'snipLineQueue': { required: false, nullable: true },
                'snipStationQueue': { required: false, nullable: true },
                'snipUserQueue': { required: false, nullable: true },
                'snipWorkgroupQueue': { required: false, nullable: true },
                'statusMessages': { required: false, nullable: true },
                'substituteQueueControlColumns': { required: false, nullable: true },
                'transferLineQueue': { required: false, nullable: true },
                'transferStationQueue': { required: false, nullable: true },
                'transferUserQueue': { required: false, nullable: true },
                'transferWorkgroupQueue': { required: false, nullable: true },
                'tuiPhoneNumberClassifications': { required: false, nullable: true },
                'viewAnalyticsDashboards': { required: false, nullable: true },
                'viewAttendantEmailProfileInSearch': { required: false, nullable: true },
                'viewAttendantEmailProfiles': { required: false, nullable: true },
                'viewAttendantInboundProfileInSearch': { required: false, nullable: true },
                'viewAttendantInboundProfiles': { required: false, nullable: true },
                'viewAttendantOperatorProfileInSearch': { required: false, nullable: true },
                'viewAttendantOperatorProfiles': { required: false, nullable: true },
                'viewAttendantOutboundProfileInSearch': { required: false, nullable: true },
                'viewAttendantOutboundProfiles': { required: false, nullable: true },
                'viewCampaignList': { required: false, nullable: true },
                'viewDataSource': { required: false, nullable: true },
                'viewFeedbackSurveys': { required: false, nullable: true },
                'viewGeneralDirectories': { required: false, nullable: true },
                'viewHistoricalReports': { required: false, nullable: true },
                'viewIndividualStatistics': { required: false, nullable: true },
                'viewLayoutList': { required: false, nullable: true },
                'viewLineQueue': { required: false, nullable: true },
                'viewModifyOptimizerAll': { required: false, nullable: true },
                'viewOptimizerForecasts': { required: false, nullable: true },
                'viewOptimizerSchedulingUnits': { required: false, nullable: true },
                'viewPositionsList': { required: false, nullable: true },
                'viewProcessList': { required: false, nullable: true },
                'viewQueueControlColumns': { required: false, nullable: true },
                'viewRecorderQuestionnaires': { required: false, nullable: true },
                'viewReport': { required: false, nullable: true },
                'viewSchedulingUnitAgentConstraints': { required: false, nullable: true },
                'viewSchedulingUnitAgentGroups': { required: false, nullable: true },
                'viewSchedulingUnitConfiguration': { required: false, nullable: true },
                'viewSchedulingUnitIntradayMonitoring': { required: false, nullable: true },
                'viewSchedulingUnitListRealTimeAdherence': { required: false, nullable: true },
                'viewSchedulingUnitSchedulePreferences': { required: false, nullable: true },
                'viewSchedulingUnitSchedules': { required: false, nullable: true },
                'viewSchedulingUnitShiftRotations': { required: false, nullable: true },
                'viewSchedulingUnitShifts': { required: false, nullable: true },
                'viewSchedulingUnitTimeoffRequests': { required: false, nullable: true },
                'viewSkillList': { required: false, nullable: true },
                'viewStationGroups': { required: false, nullable: true },
                'viewStationGroupsInSearch': { required: false, nullable: true },
                'viewStationQueue': { required: false, nullable: true },
                'viewStationQueueInSearch': { required: false, nullable: true },
                'viewStatusColumns': { required: false, nullable: true },
                'viewUserInteractionHistory': { required: false, nullable: true },
                'viewUserQueue': { required: false, nullable: true },
                'viewWorkgroup': { required: false, nullable: true },
                'viewWorkgroupQueue': { required: false, nullable: true },
                'viewWorkgroupQueueInSearch': { required: false, nullable: true },
                'viewWorkgroupStatistics': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people.accessrights:accessRightsProperties'] = AccessRightsProperties;

    return AccessRightsProperties;
}());

var AdministrativeRightsProperties = (function(){
    var hasProps = false;

    function AdministrativeRightsProperties() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people.accessrights:administrativeRightsProperties' });
        }

        AdministrativeRightsProperties._super.constructor.apply(this, arguments);
    }
    _util.inherits(AdministrativeRightsProperties, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AdministrativeRightsProperties.prototype, 'accountCodeList', {
            get: function() { return this.__prop_accountCodeList; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.accountCodeList: ' + e.message);
                    }
                }

                this.__prop_accountCodeList = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'accumulatorList', {
            get: function() { return this.__prop_accumulatorList; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.accumulatorList: ' + e.message);
                    }
                }

                this.__prop_accumulatorList = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'actions', {
            get: function() { return this.__prop_actions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.actions: ' + e.message);
                    }
                }

                this.__prop_actions = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'analyticsConfiguration', {
            get: function() { return this.__prop_analyticsConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.analyticsConfiguration: ' + e.message);
                    }
                }

                this.__prop_analyticsConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'attendantDefaults', {
            get: function() { return this.__prop_attendantDefaults; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.attendantDefaults: ' + e.message);
                    }
                }

                this.__prop_attendantDefaults = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'audioSources', {
            get: function() { return this.__prop_audioSources; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.audioSources: ' + e.message);
                    }
                }

                this.__prop_audioSources = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'canEditAdministrativeRights', {
            get: function() { return this.__prop_canEditAdministrativeRights; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.canEditAdministrativeRights: ' + e.message);
                    }
                }

                this.__prop_canEditAdministrativeRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'canPublishClientTemplates', {
            get: function() { return this.__prop_canPublishClientTemplates; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.canPublishClientTemplates: ' + e.message);
                    }
                }

                this.__prop_canPublishClientTemplates = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'clientButtons', {
            get: function() { return this.__prop_clientButtons; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.clientButtons: ' + e.message);
                    }
                }

                this.__prop_clientButtons = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'clientConfigurationConfiguration', {
            get: function() { return this.__prop_clientConfigurationConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.clientConfigurationConfiguration: ' + e.message);
                    }
                }

                this.__prop_clientConfigurationConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'clientConfigurationTemplates', {
            get: function() { return this.__prop_clientConfigurationTemplates; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.clientConfigurationTemplates: ' + e.message);
                    }
                }

                this.__prop_clientConfigurationTemplates = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'collective', {
            get: function() { return this.__prop_collective; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.collective: ' + e.message);
                    }
                }

                this.__prop_collective = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'contactListSources', {
            get: function() { return this.__prop_contactListSources; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.contactListSources: ' + e.message);
                    }
                }

                this.__prop_contactListSources = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'dataManagerConfiguration', {
            get: function() { return this.__prop_dataManagerConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.dataManagerConfiguration: ' + e.message);
                    }
                }

                this.__prop_dataManagerConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'defaultIPPhoneConfiguration', {
            get: function() { return this.__prop_defaultIPPhoneConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.defaultIPPhoneConfiguration: ' + e.message);
                    }
                }

                this.__prop_defaultIPPhoneConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'defaultLocationConfiguration', {
            get: function() { return this.__prop_defaultLocationConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.defaultLocationConfiguration: ' + e.message);
                    }
                }

                this.__prop_defaultLocationConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'defaultStationConfiguration', {
            get: function() { return this.__prop_defaultStationConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.defaultStationConfiguration: ' + e.message);
                    }
                }

                this.__prop_defaultStationConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'defaultUserConfiguration', {
            get: function() { return this.__prop_defaultUserConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.defaultUserConfiguration: ' + e.message);
                    }
                }

                this.__prop_defaultUserConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'dnisMappingsConfiguration', {
            get: function() { return this.__prop_dnisMappingsConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.dnisMappingsConfiguration: ' + e.message);
                    }
                }

                this.__prop_dnisMappingsConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'eFaq', {
            get: function() { return this.__prop_eFaq; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.eFaq: ' + e.message);
                    }
                }

                this.__prop_eFaq = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'faxConfiguration', {
            get: function() { return this.__prop_faxConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.faxConfiguration: ' + e.message);
                    }
                }

                this.__prop_faxConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'faxGroups', {
            get: function() { return this.__prop_faxGroups; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.faxGroups: ' + e.message);
                    }
                }

                this.__prop_faxGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'handlers', {
            get: function() { return this.__prop_handlers; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.handlers: ' + e.message);
                    }
                }

                this.__prop_handlers = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'iCDataSources', {
            get: function() { return this.__prop_iCDataSources; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.iCDataSources: ' + e.message);
                    }
                }

                this.__prop_iCDataSources = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'imageResources', {
            get: function() { return this.__prop_imageResources; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.imageResources: ' + e.message);
                    }
                }

                this.__prop_imageResources = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'initializationFunctions', {
            get: function() { return this.__prop_initializationFunctions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.initializationFunctions: ' + e.message);
                    }
                }

                this.__prop_initializationFunctions = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionAnalyzerKeywordSets', {
            get: function() { return this.__prop_interactionAnalyzerKeywordSets; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionAnalyzerKeywordSets: ' + e.message);
                    }
                }

                this.__prop_interactionAnalyzerKeywordSets = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionConferenceConfiguration', {
            get: function() { return this.__prop_interactionConferenceConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionConferenceConfiguration: ' + e.message);
                    }
                }

                this.__prop_interactionConferenceConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionConferenceRooms', {
            get: function() { return this.__prop_interactionConferenceRooms; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionConferenceRooms: ' + e.message);
                    }
                }

                this.__prop_interactionConferenceRooms = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionDialerCallLists', {
            get: function() { return this.__prop_interactionDialerCallLists; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionDialerCallLists: ' + e.message);
                    }
                }

                this.__prop_interactionDialerCallLists = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionDialerCampaigns', {
            get: function() { return this.__prop_interactionDialerCampaigns; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionDialerCampaigns: ' + e.message);
                    }
                }

                this.__prop_interactionDialerCampaigns = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionDialerConfiguration', {
            get: function() { return this.__prop_interactionDialerConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionDialerConfiguration: ' + e.message);
                    }
                }

                this.__prop_interactionDialerConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionDialerPolicySets', {
            get: function() { return this.__prop_interactionDialerPolicySets; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionDialerPolicySets: ' + e.message);
                    }
                }

                this.__prop_interactionDialerPolicySets = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionDialerRuleSets', {
            get: function() { return this.__prop_interactionDialerRuleSets; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionDialerRuleSets: ' + e.message);
                    }
                }

                this.__prop_interactionDialerRuleSets = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionDialerSchedules', {
            get: function() { return this.__prop_interactionDialerSchedules; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionDialerSchedules: ' + e.message);
                    }
                }

                this.__prop_interactionDialerSchedules = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionDialerScripts', {
            get: function() { return this.__prop_interactionDialerScripts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionDialerScripts: ' + e.message);
                    }
                }

                this.__prop_interactionDialerScripts = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionDialerSkillSets', {
            get: function() { return this.__prop_interactionDialerSkillSets; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionDialerSkillSets: ' + e.message);
                    }
                }

                this.__prop_interactionDialerSkillSets = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionDialerStageSets', {
            get: function() { return this.__prop_interactionDialerStageSets; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionDialerStageSets: ' + e.message);
                    }
                }

                this.__prop_interactionDialerStageSets = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionDialerZoneSets', {
            get: function() { return this.__prop_interactionDialerZoneSets; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionDialerZoneSets: ' + e.message);
                    }
                }

                this.__prop_interactionDialerZoneSets = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionFeedbackConfiguration', {
            get: function() { return this.__prop_interactionFeedbackConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionFeedbackConfiguration: ' + e.message);
                    }
                }

                this.__prop_interactionFeedbackConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionOptimizerAdvancedConfiguration', {
            get: function() { return this.__prop_interactionOptimizerAdvancedConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionOptimizerAdvancedConfiguration: ' + e.message);
                    }
                }

                this.__prop_interactionOptimizerAdvancedConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionOptimizerAgentsConfiguration', {
            get: function() { return this.__prop_interactionOptimizerAgentsConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionOptimizerAgentsConfiguration: ' + e.message);
                    }
                }

                this.__prop_interactionOptimizerAgentsConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionProcessAutomation', {
            get: function() { return this.__prop_interactionProcessAutomation; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionProcessAutomation: ' + e.message);
                    }
                }

                this.__prop_interactionProcessAutomation = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionProcessorTables', {
            get: function() { return this.__prop_interactionProcessorTables; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionProcessorTables: ' + e.message);
                    }
                }

                this.__prop_interactionProcessorTables = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionRecorderConfiguration', {
            get: function() { return this.__prop_interactionRecorderConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionRecorderConfiguration: ' + e.message);
                    }
                }

                this.__prop_interactionRecorderConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'interactionTrackerConfiguration', {
            get: function() { return this.__prop_interactionTrackerConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.interactionTrackerConfiguration: ' + e.message);
                    }
                }

                this.__prop_interactionTrackerConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'iPPhoneRegistrationGroups', {
            get: function() { return this.__prop_iPPhoneRegistrationGroups; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.iPPhoneRegistrationGroups: ' + e.message);
                    }
                }

                this.__prop_iPPhoneRegistrationGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'iPPhoneRingSets', {
            get: function() { return this.__prop_iPPhoneRingSets; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.iPPhoneRingSets: ' + e.message);
                    }
                }

                this.__prop_iPPhoneRingSets = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'iPPhones', {
            get: function() { return this.__prop_iPPhones; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.iPPhones: ' + e.message);
                    }
                }

                this.__prop_iPPhones = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'iPPhoneTemplates', {
            get: function() { return this.__prop_iPPhoneTemplates; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.iPPhoneTemplates: ' + e.message);
                    }
                }

                this.__prop_iPPhoneTemplates = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'layouts', {
            get: function() { return this.__prop_layouts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.layouts: ' + e.message);
                    }
                }

                this.__prop_layouts = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'licensesAllocationConfiguration', {
            get: function() { return this.__prop_licensesAllocationConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.licensesAllocationConfiguration: ' + e.message);
                    }
                }

                this.__prop_licensesAllocationConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'lineGroups', {
            get: function() { return this.__prop_lineGroups; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.lineGroups: ' + e.message);
                    }
                }

                this.__prop_lineGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'lines', {
            get: function() { return this.__prop_lines; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.lines: ' + e.message);
                    }
                }

                this.__prop_lines = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'locations', {
            get: function() { return this.__prop_locations; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.locations: ' + e.message);
                    }
                }

                this.__prop_locations = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'logRetrievalAssistantConfiguration', {
            get: function() { return this.__prop_logRetrievalAssistantConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.logRetrievalAssistantConfiguration: ' + e.message);
                    }
                }

                this.__prop_logRetrievalAssistantConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'mailConfiguration', {
            get: function() { return this.__prop_mailConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.mailConfiguration: ' + e.message);
                    }
                }

                this.__prop_mailConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'masterAdministrator', {
            get: function() { return this.__prop_masterAdministrator; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.masterAdministrator: ' + e.message);
                    }
                }

                this.__prop_masterAdministrator = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'mediaServersConfiguration', {
            get: function() { return this.__prop_mediaServersConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.mediaServersConfiguration: ' + e.message);
                    }
                }

                this.__prop_mediaServersConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'mrcpConfiguration', {
            get: function() { return this.__prop_mrcpConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.mrcpConfiguration: ' + e.message);
                    }
                }

                this.__prop_mrcpConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'passwordPolicies', {
            get: function() { return this.__prop_passwordPolicies; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.passwordPolicies: ' + e.message);
                    }
                }

                this.__prop_passwordPolicies = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'passwordPoliciesConfiguration', {
            get: function() { return this.__prop_passwordPoliciesConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.passwordPoliciesConfiguration: ' + e.message);
                    }
                }

                this.__prop_passwordPoliciesConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'peerSitesConfiguration', {
            get: function() { return this.__prop_peerSitesConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.peerSitesConfiguration: ' + e.message);
                    }
                }

                this.__prop_peerSitesConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'phoneNumbersConfiguration', {
            get: function() { return this.__prop_phoneNumbersConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.phoneNumbersConfiguration: ' + e.message);
                    }
                }

                this.__prop_phoneNumbersConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'positions', {
            get: function() { return this.__prop_positions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.positions: ' + e.message);
                    }
                }

                this.__prop_positions = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'problemReporterConfiguration', {
            get: function() { return this.__prop_problemReporterConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.problemReporterConfiguration: ' + e.message);
                    }
                }

                this.__prop_problemReporterConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'queueControlColumns', {
            get: function() { return this.__prop_queueControlColumns; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.queueControlColumns: ' + e.message);
                    }
                }

                this.__prop_queueControlColumns = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'reportLogs', {
            get: function() { return this.__prop_reportLogs; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.reportLogs: ' + e.message);
                    }
                }

                this.__prop_reportLogs = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'reports', {
            get: function() { return this.__prop_reports; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.reports: ' + e.message);
                    }
                }

                this.__prop_reports = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'responseManagement', {
            get: function() { return this.__prop_responseManagement; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.responseManagement: ' + e.message);
                    }
                }

                this.__prop_responseManagement = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'roles', {
            get: function() { return this.__prop_roles; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.roles: ' + e.message);
                    }
                }

                this.__prop_roles = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'salesforceCtis', {
            get: function() { return this.__prop_salesforceCtis; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.salesforceCtis: ' + e.message);
                    }
                }

                this.__prop_salesforceCtis = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'sametimeConfiguration', {
            get: function() { return this.__prop_sametimeConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.sametimeConfiguration: ' + e.message);
                    }
                }

                this.__prop_sametimeConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'schedules', {
            get: function() { return this.__prop_schedules; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.schedules: ' + e.message);
                    }
                }

                this.__prop_schedules = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'secureInputForms', {
            get: function() { return this.__prop_secureInputForms; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.secureInputForms: ' + e.message);
                    }
                }

                this.__prop_secureInputForms = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'selectionRuleList', {
            get: function() { return this.__prop_selectionRuleList; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.selectionRuleList: ' + e.message);
                    }
                }

                this.__prop_selectionRuleList = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'serverParameter', {
            get: function() { return this.__prop_serverParameter; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.serverParameter: ' + e.message);
                    }
                }

                this.__prop_serverParameter = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'serversConfiguration', {
            get: function() { return this.__prop_serversConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.serversConfiguration: ' + e.message);
                    }
                }

                this.__prop_serversConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'sessionManagerServerConfiguration', {
            get: function() { return this.__prop_sessionManagerServerConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.sessionManagerServerConfiguration: ' + e.message);
                    }
                }

                this.__prop_sessionManagerServerConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'singleSignOnIdentityProviders', {
            get: function() { return this.__prop_singleSignOnIdentityProviders; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.singleSignOnIdentityProviders: ' + e.message);
                    }
                }

                this.__prop_singleSignOnIdentityProviders = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'singleSignOnSecureTokenServer', {
            get: function() { return this.__prop_singleSignOnSecureTokenServer; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.singleSignOnSecureTokenServer: ' + e.message);
                    }
                }

                this.__prop_singleSignOnSecureTokenServer = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'sipBridge', {
            get: function() { return this.__prop_sipBridge; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.sipBridge: ' + e.message);
                    }
                }

                this.__prop_sipBridge = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'sipProxyConfiguration', {
            get: function() { return this.__prop_sipProxyConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.sipProxyConfiguration: ' + e.message);
                    }
                }

                this.__prop_sipProxyConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'skillCategories', {
            get: function() { return this.__prop_skillCategories; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.skillCategories: ' + e.message);
                    }
                }

                this.__prop_skillCategories = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'skills', {
            get: function() { return this.__prop_skills; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.skills: ' + e.message);
                    }
                }

                this.__prop_skills = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'smsBroker', {
            get: function() { return this.__prop_smsBroker; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.smsBroker: ' + e.message);
                    }
                }

                this.__prop_smsBroker = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'smsConfiguration', {
            get: function() { return this.__prop_smsConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.smsConfiguration: ' + e.message);
                    }
                }

                this.__prop_smsConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'socialMedia', {
            get: function() { return this.__prop_socialMedia; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.socialMedia: ' + e.message);
                    }
                }

                this.__prop_socialMedia = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'speechRecognitionConfiguration', {
            get: function() { return this.__prop_speechRecognitionConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.speechRecognitionConfiguration: ' + e.message);
                    }
                }

                this.__prop_speechRecognitionConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'stationGroups', {
            get: function() { return this.__prop_stationGroups; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.stationGroups: ' + e.message);
                    }
                }

                this.__prop_stationGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'stations', {
            get: function() { return this.__prop_stations; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.stations: ' + e.message);
                    }
                }

                this.__prop_stations = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'stationTemplates', {
            get: function() { return this.__prop_stationTemplates; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.stationTemplates: ' + e.message);
                    }
                }

                this.__prop_stationTemplates = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'statisticGroups', {
            get: function() { return this.__prop_statisticGroups; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.statisticGroups: ' + e.message);
                    }
                }

                this.__prop_statisticGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'statusMessages', {
            get: function() { return this.__prop_statusMessages; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.statusMessages: ' + e.message);
                    }
                }

                this.__prop_statusMessages = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'structuredParameters', {
            get: function() { return this.__prop_structuredParameters; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.structuredParameters: ' + e.message);
                    }
                }

                this.__prop_structuredParameters = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'systemConfiguration', {
            get: function() { return this.__prop_systemConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.systemConfiguration: ' + e.message);
                    }
                }

                this.__prop_systemConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'systemParameters', {
            get: function() { return this.__prop_systemParameters; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.systemParameters: ' + e.message);
                    }
                }

                this.__prop_systemParameters = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'users', {
            get: function() { return this.__prop_users; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.users: ' + e.message);
                    }
                }

                this.__prop_users = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'webServicesParameters', {
            get: function() { return this.__prop_webServicesParameters; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.webServicesParameters: ' + e.message);
                    }
                }

                this.__prop_webServicesParameters = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'widgetsConfiguration', {
            get: function() { return this.__prop_widgetsConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.widgetsConfiguration: ' + e.message);
                    }
                }

                this.__prop_widgetsConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'workgroups', {
            get: function() { return this.__prop_workgroups; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.workgroups: ' + e.message);
                    }
                }

                this.__prop_workgroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'wrapUpCategories', {
            get: function() { return this.__prop_wrapUpCategories; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.wrapUpCategories: ' + e.message);
                    }
                }

                this.__prop_wrapUpCategories = value;
            },
            enumerable: true
        });

        Object.defineProperty(AdministrativeRightsProperties.prototype, 'wrapUpCodes', {
            get: function() { return this.__prop_wrapUpCodes; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableGroupedConfigurationIdCollection || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableGroupedConfigurationIdCollection(value);
                    } catch (e) {
                        throw new TypeError('Error setting AdministrativeRightsProperties.wrapUpCodes: ' + e.message);
                    }
                }

                this.__prop_wrapUpCodes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AdministrativeRightsProperties, '__type', { value: 'urn:inin.com:configuration.people.accessrights:administrativeRightsProperties' });

    Object.defineProperty(AdministrativeRightsProperties, '__propInfo', {
        get: function() {
            var pi = {
                'accountCodeList': { required: false, nullable: true },
                'accumulatorList': { required: false, nullable: true },
                'actions': { required: false, nullable: true },
                'analyticsConfiguration': { required: false, nullable: true },
                'attendantDefaults': { required: false, nullable: true },
                'audioSources': { required: false, nullable: true },
                'canEditAdministrativeRights': { required: false, nullable: true },
                'canPublishClientTemplates': { required: false, nullable: true },
                'clientButtons': { required: false, nullable: true },
                'clientConfigurationConfiguration': { required: false, nullable: true },
                'clientConfigurationTemplates': { required: false, nullable: true },
                'collective': { required: false, nullable: true },
                'contactListSources': { required: false, nullable: true },
                'dataManagerConfiguration': { required: false, nullable: true },
                'defaultIPPhoneConfiguration': { required: false, nullable: true },
                'defaultLocationConfiguration': { required: false, nullable: true },
                'defaultStationConfiguration': { required: false, nullable: true },
                'defaultUserConfiguration': { required: false, nullable: true },
                'dnisMappingsConfiguration': { required: false, nullable: true },
                'eFaq': { required: false, nullable: true },
                'faxConfiguration': { required: false, nullable: true },
                'faxGroups': { required: false, nullable: true },
                'handlers': { required: false, nullable: true },
                'iCDataSources': { required: false, nullable: true },
                'imageResources': { required: false, nullable: true },
                'initializationFunctions': { required: false, nullable: true },
                'interactionAnalyzerKeywordSets': { required: false, nullable: true },
                'interactionConferenceConfiguration': { required: false, nullable: true },
                'interactionConferenceRooms': { required: false, nullable: true },
                'interactionDialerCallLists': { required: false, nullable: true },
                'interactionDialerCampaigns': { required: false, nullable: true },
                'interactionDialerConfiguration': { required: false, nullable: true },
                'interactionDialerPolicySets': { required: false, nullable: true },
                'interactionDialerRuleSets': { required: false, nullable: true },
                'interactionDialerSchedules': { required: false, nullable: true },
                'interactionDialerScripts': { required: false, nullable: true },
                'interactionDialerSkillSets': { required: false, nullable: true },
                'interactionDialerStageSets': { required: false, nullable: true },
                'interactionDialerZoneSets': { required: false, nullable: true },
                'interactionFeedbackConfiguration': { required: false, nullable: true },
                'interactionOptimizerAdvancedConfiguration': { required: false, nullable: true },
                'interactionOptimizerAgentsConfiguration': { required: false, nullable: true },
                'interactionProcessAutomation': { required: false, nullable: true },
                'interactionProcessorTables': { required: false, nullable: true },
                'interactionRecorderConfiguration': { required: false, nullable: true },
                'interactionTrackerConfiguration': { required: false, nullable: true },
                'iPPhoneRegistrationGroups': { required: false, nullable: true },
                'iPPhoneRingSets': { required: false, nullable: true },
                'iPPhones': { required: false, nullable: true },
                'iPPhoneTemplates': { required: false, nullable: true },
                'layouts': { required: false, nullable: true },
                'licensesAllocationConfiguration': { required: false, nullable: true },
                'lineGroups': { required: false, nullable: true },
                'lines': { required: false, nullable: true },
                'locations': { required: false, nullable: true },
                'logRetrievalAssistantConfiguration': { required: false, nullable: true },
                'mailConfiguration': { required: false, nullable: true },
                'masterAdministrator': { required: false, nullable: true },
                'mediaServersConfiguration': { required: false, nullable: true },
                'mrcpConfiguration': { required: false, nullable: true },
                'passwordPolicies': { required: false, nullable: true },
                'passwordPoliciesConfiguration': { required: false, nullable: true },
                'peerSitesConfiguration': { required: false, nullable: true },
                'phoneNumbersConfiguration': { required: false, nullable: true },
                'positions': { required: false, nullable: true },
                'problemReporterConfiguration': { required: false, nullable: true },
                'queueControlColumns': { required: false, nullable: true },
                'reportLogs': { required: false, nullable: true },
                'reports': { required: false, nullable: true },
                'responseManagement': { required: false, nullable: true },
                'roles': { required: false, nullable: true },
                'salesforceCtis': { required: false, nullable: true },
                'sametimeConfiguration': { required: false, nullable: true },
                'schedules': { required: false, nullable: true },
                'secureInputForms': { required: false, nullable: true },
                'selectionRuleList': { required: false, nullable: true },
                'serverParameter': { required: false, nullable: true },
                'serversConfiguration': { required: false, nullable: true },
                'sessionManagerServerConfiguration': { required: false, nullable: true },
                'singleSignOnIdentityProviders': { required: false, nullable: true },
                'singleSignOnSecureTokenServer': { required: false, nullable: true },
                'sipBridge': { required: false, nullable: true },
                'sipProxyConfiguration': { required: false, nullable: true },
                'skillCategories': { required: false, nullable: true },
                'skills': { required: false, nullable: true },
                'smsBroker': { required: false, nullable: true },
                'smsConfiguration': { required: false, nullable: true },
                'socialMedia': { required: false, nullable: true },
                'speechRecognitionConfiguration': { required: false, nullable: true },
                'stationGroups': { required: false, nullable: true },
                'stations': { required: false, nullable: true },
                'stationTemplates': { required: false, nullable: true },
                'statisticGroups': { required: false, nullable: true },
                'statusMessages': { required: false, nullable: true },
                'structuredParameters': { required: false, nullable: true },
                'systemConfiguration': { required: false, nullable: true },
                'systemParameters': { required: false, nullable: true },
                'users': { required: false, nullable: true },
                'webServicesParameters': { required: false, nullable: true },
                'widgetsConfiguration': { required: false, nullable: true },
                'workgroups': { required: false, nullable: true },
                'wrapUpCategories': { required: false, nullable: true },
                'wrapUpCodes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people.accessrights:administrativeRightsProperties'] = AdministrativeRightsProperties;

    return AdministrativeRightsProperties;
}());

var SecurityRightsProperties = (function(){
    var hasProps = false;

    function SecurityRightsProperties() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.people.accessrights:securityRightsProperties' });
        }

        SecurityRightsProperties._super.constructor.apply(this, arguments);
    }
    _util.inherits(SecurityRightsProperties, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SecurityRightsProperties.prototype, 'accessAllInteractionConferences', {
            get: function() { return this.__prop_accessAllInteractionConferences; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.accessAllInteractionConferences: ' + e.message);
                    }
                }

                this.__prop_accessAllInteractionConferences = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'accessOwnedInteractionConferences', {
            get: function() { return this.__prop_accessOwnedInteractionConferences; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.accessOwnedInteractionConferences: ' + e.message);
                    }
                }

                this.__prop_accessOwnedInteractionConferences = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'accountCodeVerification', {
            get: function() { return this.__prop_accountCodeVerification; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.accountCodeVerification: ' + e.message);
                    }
                }

                this.__prop_accountCodeVerification = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'addIndividuals', {
            get: function() { return this.__prop_addIndividuals; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.addIndividuals: ' + e.message);
                    }
                }

                this.__prop_addIndividuals = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'addOrganizations', {
            get: function() { return this.__prop_addOrganizations; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.addOrganizations: ' + e.message);
                    }
                }

                this.__prop_addOrganizations = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'agentPreferences', {
            get: function() { return this.__prop_agentPreferences; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.agentPreferences: ' + e.message);
                    }
                }

                this.__prop_agentPreferences = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowAccessToProblemReporter', {
            get: function() { return this.__prop_allowAccessToProblemReporter; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowAccessToProblemReporter: ' + e.message);
                    }
                }

                this.__prop_allowAccessToProblemReporter = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowAgentRules', {
            get: function() { return this.__prop_allowAgentRules; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowAgentRules: ' + e.message);
                    }
                }

                this.__prop_allowAgentRules = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowAgentScheduleBidding', {
            get: function() { return this.__prop_allowAgentScheduleBidding; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowAgentScheduleBidding: ' + e.message);
                    }
                }

                this.__prop_allowAgentScheduleBidding = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowAgentSeeOwnRank', {
            get: function() { return this.__prop_allowAgentSeeOwnRank; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowAgentSeeOwnRank: ' + e.message);
                    }
                }

                this.__prop_allowAgentSeeOwnRank = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowAgentSeeRelativeRank', {
            get: function() { return this.__prop_allowAgentSeeRelativeRank; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowAgentSeeRelativeRank: ' + e.message);
                    }
                }

                this.__prop_allowAgentSeeRelativeRank = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowAlertProgramming', {
            get: function() { return this.__prop_allowAlertProgramming; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowAlertProgramming: ' + e.message);
                    }
                }

                this.__prop_allowAlertProgramming = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowEmailAccessViaTui', {
            get: function() { return this.__prop_allowEmailAccessViaTui; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowEmailAccessViaTui: ' + e.message);
                    }
                }

                this.__prop_allowEmailAccessViaTui = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowEmailAlerts', {
            get: function() { return this.__prop_allowEmailAlerts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowEmailAlerts: ' + e.message);
                    }
                }

                this.__prop_allowEmailAlerts = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowFaxAccessViaTui', {
            get: function() { return this.__prop_allowFaxAccessViaTui; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowFaxAccessViaTui: ' + e.message);
                    }
                }

                this.__prop_allowFaxAccessViaTui = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowHandlerAlerts', {
            get: function() { return this.__prop_allowHandlerAlerts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowHandlerAlerts: ' + e.message);
                    }
                }

                this.__prop_allowHandlerAlerts = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowIntercomChat', {
            get: function() { return this.__prop_allowIntercomChat; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowIntercomChat: ' + e.message);
                    }
                }

                this.__prop_allowIntercomChat = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowMemoAlerts', {
            get: function() { return this.__prop_allowMemoAlerts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowMemoAlerts: ' + e.message);
                    }
                }

                this.__prop_allowMemoAlerts = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowMiniMode', {
            get: function() { return this.__prop_allowMiniMode; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowMiniMode: ' + e.message);
                    }
                }

                this.__prop_allowMiniMode = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowMonitorColumns', {
            get: function() { return this.__prop_allowMonitorColumns; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowMonitorColumns: ' + e.message);
                    }
                }

                this.__prop_allowMonitorColumns = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowMultipleCalls', {
            get: function() { return this.__prop_allowMultipleCalls; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowMultipleCalls: ' + e.message);
                    }
                }

                this.__prop_allowMultipleCalls = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowPersistentConnections', {
            get: function() { return this.__prop_allowPersistentConnections; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowPersistentConnections: ' + e.message);
                    }
                }

                this.__prop_allowPersistentConnections = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowReceiveVoicemail', {
            get: function() { return this.__prop_allowReceiveVoicemail; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowReceiveVoicemail: ' + e.message);
                    }
                }

                this.__prop_allowReceiveVoicemail = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowRelatedInteractionsPage', {
            get: function() { return this.__prop_allowRelatedInteractionsPage; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowRelatedInteractionsPage: ' + e.message);
                    }
                }

                this.__prop_allowRelatedInteractionsPage = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowResponseManagement', {
            get: function() { return this.__prop_allowResponseManagement; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowResponseManagement: ' + e.message);
                    }
                }

                this.__prop_allowResponseManagement = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowSpeedDials', {
            get: function() { return this.__prop_allowSpeedDials; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowSpeedDials: ' + e.message);
                    }
                }

                this.__prop_allowSpeedDials = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowStatusNotes', {
            get: function() { return this.__prop_allowStatusNotes; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowStatusNotes: ' + e.message);
                    }
                }

                this.__prop_allowStatusNotes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowUserDefinedTelephoneNumberOnRemoteLogin', {
            get: function() { return this.__prop_allowUserDefinedTelephoneNumberOnRemoteLogin; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowUserDefinedTelephoneNumberOnRemoteLogin: ' + e.message);
                    }
                }

                this.__prop_allowUserDefinedTelephoneNumberOnRemoteLogin = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowVideo', {
            get: function() { return this.__prop_allowVideo; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowVideo: ' + e.message);
                    }
                }

                this.__prop_allowVideo = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowVoiceMaiAccessViaTui', {
            get: function() { return this.__prop_allowVoiceMaiAccessViaTui; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowVoiceMaiAccessViaTui: ' + e.message);
                    }
                }

                this.__prop_allowVoiceMaiAccessViaTui = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'allowWorkgroupStats', {
            get: function() { return this.__prop_allowWorkgroupStats; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.allowWorkgroupStats: ' + e.message);
                    }
                }

                this.__prop_allowWorkgroupStats = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canAccessOptimizerShiftTrading', {
            get: function() { return this.__prop_canAccessOptimizerShiftTrading; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canAccessOptimizerShiftTrading: ' + e.message);
                    }
                }

                this.__prop_canAccessOptimizerShiftTrading = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canCoachInteractions', {
            get: function() { return this.__prop_canCoachInteractions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canCoachInteractions: ' + e.message);
                    }
                }

                this.__prop_canCoachInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canConferenceCalls', {
            get: function() { return this.__prop_canConferenceCalls; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canConferenceCalls: ' + e.message);
                    }
                }

                this.__prop_canConferenceCalls = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canCreateEmailAttendantProfile', {
            get: function() { return this.__prop_canCreateEmailAttendantProfile; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canCreateEmailAttendantProfile: ' + e.message);
                    }
                }

                this.__prop_canCreateEmailAttendantProfile = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canCreateInboundAttendantProfile', {
            get: function() { return this.__prop_canCreateInboundAttendantProfile; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canCreateInboundAttendantProfile: ' + e.message);
                    }
                }

                this.__prop_canCreateInboundAttendantProfile = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canCreateOperatorAttendantProfile', {
            get: function() { return this.__prop_canCreateOperatorAttendantProfile; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canCreateOperatorAttendantProfile: ' + e.message);
                    }
                }

                this.__prop_canCreateOperatorAttendantProfile = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canCreateOptimizerActivityCodes', {
            get: function() { return this.__prop_canCreateOptimizerActivityCodes; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canCreateOptimizerActivityCodes: ' + e.message);
                    }
                }

                this.__prop_canCreateOptimizerActivityCodes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canCreateOptimizerDayClassifications', {
            get: function() { return this.__prop_canCreateOptimizerDayClassifications; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canCreateOptimizerDayClassifications: ' + e.message);
                    }
                }

                this.__prop_canCreateOptimizerDayClassifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canCreateOutboundAttendantProfile', {
            get: function() { return this.__prop_canCreateOutboundAttendantProfile; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canCreateOutboundAttendantProfile: ' + e.message);
                    }
                }

                this.__prop_canCreateOutboundAttendantProfile = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canCreateQuestionnaireDirectories', {
            get: function() { return this.__prop_canCreateQuestionnaireDirectories; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canCreateQuestionnaireDirectories: ' + e.message);
                    }
                }

                this.__prop_canCreateQuestionnaireDirectories = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canCreateSchedulingUnits', {
            get: function() { return this.__prop_canCreateSchedulingUnits; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canCreateSchedulingUnits: ' + e.message);
                    }
                }

                this.__prop_canCreateSchedulingUnits = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canDeleteOptimizerActivityCodes', {
            get: function() { return this.__prop_canDeleteOptimizerActivityCodes; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canDeleteOptimizerActivityCodes: ' + e.message);
                    }
                }

                this.__prop_canDeleteOptimizerActivityCodes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canDeleteOptimizerDayClassifications', {
            get: function() { return this.__prop_canDeleteOptimizerDayClassifications; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canDeleteOptimizerDayClassifications: ' + e.message);
                    }
                }

                this.__prop_canDeleteOptimizerDayClassifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canDeleteSchedulingUnits', {
            get: function() { return this.__prop_canDeleteSchedulingUnits; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canDeleteSchedulingUnits: ' + e.message);
                    }
                }

                this.__prop_canDeleteSchedulingUnits = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canDisconnectInteractions', {
            get: function() { return this.__prop_canDisconnectInteractions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canDisconnectInteractions: ' + e.message);
                    }
                }

                this.__prop_canDisconnectInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canInitiateRecordingSnippet', {
            get: function() { return this.__prop_canInitiateRecordingSnippet; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canInitiateRecordingSnippet: ' + e.message);
                    }
                }

                this.__prop_canInitiateRecordingSnippet = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canInitiateSecureInput', {
            get: function() { return this.__prop_canInitiateSecureInput; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canInitiateSecureInput: ' + e.message);
                    }
                }

                this.__prop_canInitiateSecureInput = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canJoinInteractions', {
            get: function() { return this.__prop_canJoinInteractions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canJoinInteractions: ' + e.message);
                    }
                }

                this.__prop_canJoinInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canListenInOnInteractions', {
            get: function() { return this.__prop_canListenInOnInteractions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canListenInOnInteractions: ' + e.message);
                    }
                }

                this.__prop_canListenInOnInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canManageClientTemplates', {
            get: function() { return this.__prop_canManageClientTemplates; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canManageClientTemplates: ' + e.message);
                    }
                }

                this.__prop_canManageClientTemplates = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canModifyOptimizerActivityCodes', {
            get: function() { return this.__prop_canModifyOptimizerActivityCodes; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canModifyOptimizerActivityCodes: ' + e.message);
                    }
                }

                this.__prop_canModifyOptimizerActivityCodes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canModifyOptimizerDayClassifications', {
            get: function() { return this.__prop_canModifyOptimizerDayClassifications; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canModifyOptimizerDayClassifications: ' + e.message);
                    }
                }

                this.__prop_canModifyOptimizerDayClassifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canModifyOptimizerStatusActivityTypeMapping', {
            get: function() { return this.__prop_canModifyOptimizerStatusActivityTypeMapping; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canModifyOptimizerStatusActivityTypeMapping: ' + e.message);
                    }
                }

                this.__prop_canModifyOptimizerStatusActivityTypeMapping = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canMuteInteractions', {
            get: function() { return this.__prop_canMuteInteractions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canMuteInteractions: ' + e.message);
                    }
                }

                this.__prop_canMuteInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canOrbitQueue', {
            get: function() { return this.__prop_canOrbitQueue; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canOrbitQueue: ' + e.message);
                    }
                }

                this.__prop_canOrbitQueue = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canOverrideFinishedScorecards', {
            get: function() { return this.__prop_canOverrideFinishedScorecards; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canOverrideFinishedScorecards: ' + e.message);
                    }
                }

                this.__prop_canOverrideFinishedScorecards = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canParkInteractions', {
            get: function() { return this.__prop_canParkInteractions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canParkInteractions: ' + e.message);
                    }
                }

                this.__prop_canParkInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canPauseInteractions', {
            get: function() { return this.__prop_canPauseInteractions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canPauseInteractions: ' + e.message);
                    }
                }

                this.__prop_canPauseInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canPickupInteractions', {
            get: function() { return this.__prop_canPickupInteractions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canPickupInteractions: ' + e.message);
                    }
                }

                this.__prop_canPickupInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canPublishProcess', {
            get: function() { return this.__prop_canPublishProcess; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canPublishProcess: ' + e.message);
                    }
                }

                this.__prop_canPublishProcess = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canPutInteractionsOnHold', {
            get: function() { return this.__prop_canPutInteractionsOnHold; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canPutInteractionsOnHold: ' + e.message);
                    }
                }

                this.__prop_canPutInteractionsOnHold = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canRecordInteractions', {
            get: function() { return this.__prop_canRecordInteractions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canRecordInteractions: ' + e.message);
                    }
                }

                this.__prop_canRecordInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canRequestAssistanceFromSupervisor', {
            get: function() { return this.__prop_canRequestAssistanceFromSupervisor; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canRequestAssistanceFromSupervisor: ' + e.message);
                    }
                }

                this.__prop_canRequestAssistanceFromSupervisor = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canSecureRecordingPauseInteractions', {
            get: function() { return this.__prop_canSecureRecordingPauseInteractions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canSecureRecordingPauseInteractions: ' + e.message);
                    }
                }

                this.__prop_canSecureRecordingPauseInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canSubmitTimeOff', {
            get: function() { return this.__prop_canSubmitTimeOff; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canSubmitTimeOff: ' + e.message);
                    }
                }

                this.__prop_canSubmitTimeOff = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canTransferInteractions', {
            get: function() { return this.__prop_canTransferInteractions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canTransferInteractions: ' + e.message);
                    }
                }

                this.__prop_canTransferInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canTransferInteractionsToVoicemail', {
            get: function() { return this.__prop_canTransferInteractionsToVoicemail; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canTransferInteractionsToVoicemail: ' + e.message);
                    }
                }

                this.__prop_canTransferInteractionsToVoicemail = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canUserInteractionRecorderSelector', {
            get: function() { return this.__prop_canUserInteractionRecorderSelector; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canUserInteractionRecorderSelector: ' + e.message);
                    }
                }

                this.__prop_canUserInteractionRecorderSelector = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canViewOptimizerActivityCodes', {
            get: function() { return this.__prop_canViewOptimizerActivityCodes; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canViewOptimizerActivityCodes: ' + e.message);
                    }
                }

                this.__prop_canViewOptimizerActivityCodes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canViewOptimizerDayClassifications', {
            get: function() { return this.__prop_canViewOptimizerDayClassifications; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canViewOptimizerDayClassifications: ' + e.message);
                    }
                }

                this.__prop_canViewOptimizerDayClassifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'canViewOptimizerStatusActivityTypeMapping', {
            get: function() { return this.__prop_canViewOptimizerStatusActivityTypeMapping; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.canViewOptimizerStatusActivityTypeMapping: ' + e.message);
                    }
                }

                this.__prop_canViewOptimizerStatusActivityTypeMapping = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'customizeClient', {
            get: function() { return this.__prop_customizeClient; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.customizeClient: ' + e.message);
                    }
                }

                this.__prop_customizeClient = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'dataExtractorJobAdmin', {
            get: function() { return this.__prop_dataExtractorJobAdmin; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.dataExtractorJobAdmin: ' + e.message);
                    }
                }

                this.__prop_dataExtractorJobAdmin = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'debugHandlers', {
            get: function() { return this.__prop_debugHandlers; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.debugHandlers: ' + e.message);
                    }
                }

                this.__prop_debugHandlers = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'deleteIndividuals', {
            get: function() { return this.__prop_deleteIndividuals; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.deleteIndividuals: ' + e.message);
                    }
                }

                this.__prop_deleteIndividuals = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'deleteOrganizations', {
            get: function() { return this.__prop_deleteOrganizations; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.deleteOrganizations: ' + e.message);
                    }
                }

                this.__prop_deleteOrganizations = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'directoryAdmin', {
            get: function() { return this.__prop_directoryAdmin; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.directoryAdmin: ' + e.message);
                    }
                }

                this.__prop_directoryAdmin = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'followMe', {
            get: function() { return this.__prop_followMe; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.followMe: ' + e.message);
                    }
                }

                this.__prop_followMe = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'havePrivateContacts', {
            get: function() { return this.__prop_havePrivateContacts; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.havePrivateContacts: ' + e.message);
                    }
                }

                this.__prop_havePrivateContacts = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'interactionRecorderMasterKeyPasswordAdministrator', {
            get: function() { return this.__prop_interactionRecorderMasterKeyPasswordAdministrator; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.interactionRecorderMasterKeyPasswordAdministrator: ' + e.message);
                    }
                }

                this.__prop_interactionRecorderMasterKeyPasswordAdministrator = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'iPPhoneProvisioningAdmin', {
            get: function() { return this.__prop_iPPhoneProvisioningAdmin; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.iPPhoneProvisioningAdmin: ' + e.message);
                    }
                }

                this.__prop_iPPhoneProvisioningAdmin = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'lockPolicySets', {
            get: function() { return this.__prop_lockPolicySets; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.lockPolicySets: ' + e.message);
                    }
                }

                this.__prop_lockPolicySets = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'loginCampaign', {
            get: function() { return this.__prop_loginCampaign; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.loginCampaign: ' + e.message);
                    }
                }

                this.__prop_loginCampaign = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'manageHandlers', {
            get: function() { return this.__prop_manageHandlers; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.manageHandlers: ' + e.message);
                    }
                }

                this.__prop_manageHandlers = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'mobileOfficeUser', {
            get: function() { return this.__prop_mobileOfficeUser; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.mobileOfficeUser: ' + e.message);
                    }
                }

                this.__prop_mobileOfficeUser = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'modifyConfigurationChangeAuditing', {
            get: function() { return this.__prop_modifyConfigurationChangeAuditing; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.modifyConfigurationChangeAuditing: ' + e.message);
                    }
                }

                this.__prop_modifyConfigurationChangeAuditing = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'modifyConfigurationGeneral', {
            get: function() { return this.__prop_modifyConfigurationGeneral; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.modifyConfigurationGeneral: ' + e.message);
                    }
                }

                this.__prop_modifyConfigurationGeneral = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'modifyConfigurationHTTPServer', {
            get: function() { return this.__prop_modifyConfigurationHTTPServer; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.modifyConfigurationHTTPServer: ' + e.message);
                    }
                }

                this.__prop_modifyConfigurationHTTPServer = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'modifyConfigurationOutboundServers', {
            get: function() { return this.__prop_modifyConfigurationOutboundServers; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.modifyConfigurationOutboundServers: ' + e.message);
                    }
                }

                this.__prop_modifyConfigurationOutboundServers = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'modifyConfigurationPhoneNumberTypes', {
            get: function() { return this.__prop_modifyConfigurationPhoneNumberTypes; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.modifyConfigurationPhoneNumberTypes: ' + e.message);
                    }
                }

                this.__prop_modifyConfigurationPhoneNumberTypes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'modifyConfigurationPreviewCallBehavior', {
            get: function() { return this.__prop_modifyConfigurationPreviewCallBehavior; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.modifyConfigurationPreviewCallBehavior: ' + e.message);
                    }
                }

                this.__prop_modifyConfigurationPreviewCallBehavior = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'modifyIndividuals', {
            get: function() { return this.__prop_modifyIndividuals; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.modifyIndividuals: ' + e.message);
                    }
                }

                this.__prop_modifyIndividuals = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'modifyInteractions', {
            get: function() { return this.__prop_modifyInteractions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.modifyInteractions: ' + e.message);
                    }
                }

                this.__prop_modifyInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'modifyOrganizations', {
            get: function() { return this.__prop_modifyOrganizations; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.modifyOrganizations: ' + e.message);
                    }
                }

                this.__prop_modifyOrganizations = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'outlookTuiUser', {
            get: function() { return this.__prop_outlookTuiUser; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.outlookTuiUser: ' + e.message);
                    }
                }

                this.__prop_outlookTuiUser = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'privateCalls', {
            get: function() { return this.__prop_privateCalls; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.privateCalls: ' + e.message);
                    }
                }

                this.__prop_privateCalls = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'publishHandlers', {
            get: function() { return this.__prop_publishHandlers; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.publishHandlers: ' + e.message);
                    }
                }

                this.__prop_publishHandlers = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'remoteControl', {
            get: function() { return this.__prop_remoteControl; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.remoteControl: ' + e.message);
                    }
                }

                this.__prop_remoteControl = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'reporterAdministrator', {
            get: function() { return this.__prop_reporterAdministrator; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.reporterAdministrator: ' + e.message);
                    }
                }

                this.__prop_reporterAdministrator = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'requireForcedAuthorizationCode', {
            get: function() { return this.__prop_requireForcedAuthorizationCode; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.requireForcedAuthorizationCode: ' + e.message);
                    }
                }

                this.__prop_requireForcedAuthorizationCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'runContactListPredefinedActions', {
            get: function() { return this.__prop_runContactListPredefinedActions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.runContactListPredefinedActions: ' + e.message);
                    }
                }

                this.__prop_runContactListPredefinedActions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showAssistanceButton', {
            get: function() { return this.__prop_showAssistanceButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showAssistanceButton: ' + e.message);
                    }
                }

                this.__prop_showAssistanceButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showCoachButton', {
            get: function() { return this.__prop_showCoachButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showCoachButton: ' + e.message);
                    }
                }

                this.__prop_showCoachButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showDisconnectButton', {
            get: function() { return this.__prop_showDisconnectButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showDisconnectButton: ' + e.message);
                    }
                }

                this.__prop_showDisconnectButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showHoldButton', {
            get: function() { return this.__prop_showHoldButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showHoldButton: ' + e.message);
                    }
                }

                this.__prop_showHoldButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showJoinButton', {
            get: function() { return this.__prop_showJoinButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showJoinButton: ' + e.message);
                    }
                }

                this.__prop_showJoinButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showListenButton', {
            get: function() { return this.__prop_showListenButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showListenButton: ' + e.message);
                    }
                }

                this.__prop_showListenButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showMuteButton', {
            get: function() { return this.__prop_showMuteButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showMuteButton: ' + e.message);
                    }
                }

                this.__prop_showMuteButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showParkButton', {
            get: function() { return this.__prop_showParkButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showParkButton: ' + e.message);
                    }
                }

                this.__prop_showParkButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showPauseButton', {
            get: function() { return this.__prop_showPauseButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showPauseButton: ' + e.message);
                    }
                }

                this.__prop_showPauseButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showPickupButton', {
            get: function() { return this.__prop_showPickupButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showPickupButton: ' + e.message);
                    }
                }

                this.__prop_showPickupButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showPrivateButton', {
            get: function() { return this.__prop_showPrivateButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showPrivateButton: ' + e.message);
                    }
                }

                this.__prop_showPrivateButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showRecordButton', {
            get: function() { return this.__prop_showRecordButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showRecordButton: ' + e.message);
                    }
                }

                this.__prop_showRecordButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showRecordingSnippetButton', {
            get: function() { return this.__prop_showRecordingSnippetButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showRecordingSnippetButton: ' + e.message);
                    }
                }

                this.__prop_showRecordingSnippetButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showSecureInputButton', {
            get: function() { return this.__prop_showSecureInputButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showSecureInputButton: ' + e.message);
                    }
                }

                this.__prop_showSecureInputButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showSecureRecordingPauseButton', {
            get: function() { return this.__prop_showSecureRecordingPauseButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showSecureRecordingPauseButton: ' + e.message);
                    }
                }

                this.__prop_showSecureRecordingPauseButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showTransferButton', {
            get: function() { return this.__prop_showTransferButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showTransferButton: ' + e.message);
                    }
                }

                this.__prop_showTransferButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showVoicemailButton', {
            get: function() { return this.__prop_showVoicemailButton; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showVoicemailButton: ' + e.message);
                    }
                }

                this.__prop_showVoicemailButton = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'showWorkgroupsProfilesTab', {
            get: function() { return this.__prop_showWorkgroupsProfilesTab; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.showWorkgroupsProfilesTab: ' + e.message);
                    }
                }

                this.__prop_showWorkgroupsProfilesTab = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'traceConfiguration', {
            get: function() { return this.__prop_traceConfiguration; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.traceConfiguration: ' + e.message);
                    }
                }

                this.__prop_traceConfiguration = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'trackerAdministrator', {
            get: function() { return this.__prop_trackerAdministrator; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.trackerAdministrator: ' + e.message);
                    }
                }

                this.__prop_trackerAdministrator = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'useTiffForFaxes', {
            get: function() { return this.__prop_useTiffForFaxes; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.useTiffForFaxes: ' + e.message);
                    }
                }

                this.__prop_useTiffForFaxes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewConfigurationChangeAuditing', {
            get: function() { return this.__prop_viewConfigurationChangeAuditing; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewConfigurationChangeAuditing: ' + e.message);
                    }
                }

                this.__prop_viewConfigurationChangeAuditing = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewConfigurationGeneral', {
            get: function() { return this.__prop_viewConfigurationGeneral; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewConfigurationGeneral: ' + e.message);
                    }
                }

                this.__prop_viewConfigurationGeneral = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewConfigurationHTTPServer', {
            get: function() { return this.__prop_viewConfigurationHTTPServer; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewConfigurationHTTPServer: ' + e.message);
                    }
                }

                this.__prop_viewConfigurationHTTPServer = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewConfigurationOutboundServers', {
            get: function() { return this.__prop_viewConfigurationOutboundServers; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewConfigurationOutboundServers: ' + e.message);
                    }
                }

                this.__prop_viewConfigurationOutboundServers = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewConfigurationPhoneNumberTypes', {
            get: function() { return this.__prop_viewConfigurationPhoneNumberTypes; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewConfigurationPhoneNumberTypes: ' + e.message);
                    }
                }

                this.__prop_viewConfigurationPhoneNumberTypes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewConfigurationPreviewCallBehavior', {
            get: function() { return this.__prop_viewConfigurationPreviewCallBehavior; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewConfigurationPreviewCallBehavior: ' + e.message);
                    }
                }

                this.__prop_viewConfigurationPreviewCallBehavior = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewInteractionDetails', {
            get: function() { return this.__prop_viewInteractionDetails; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewInteractionDetails: ' + e.message);
                    }
                }

                this.__prop_viewInteractionDetails = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewModifyCampaignAgentlessCallingType', {
            get: function() { return this.__prop_viewModifyCampaignAgentlessCallingType; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewModifyCampaignAgentlessCallingType: ' + e.message);
                    }
                }

                this.__prop_viewModifyCampaignAgentlessCallingType = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewModifyCampaignAutomaticTimeZoneMapping', {
            get: function() { return this.__prop_viewModifyCampaignAutomaticTimeZoneMapping; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewModifyCampaignAutomaticTimeZoneMapping: ' + e.message);
                    }
                }

                this.__prop_viewModifyCampaignAutomaticTimeZoneMapping = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewModifyCampaignLineSettings', {
            get: function() { return this.__prop_viewModifyCampaignLineSettings; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewModifyCampaignLineSettings: ' + e.message);
                    }
                }

                this.__prop_viewModifyCampaignLineSettings = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewModifyCampaignMaxLines', {
            get: function() { return this.__prop_viewModifyCampaignMaxLines; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewModifyCampaignMaxLines: ' + e.message);
                    }
                }

                this.__prop_viewModifyCampaignMaxLines = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewModifyCampaignStatus', {
            get: function() { return this.__prop_viewModifyCampaignStatus; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewModifyCampaignStatus: ' + e.message);
                    }
                }

                this.__prop_viewModifyCampaignStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewModifyContactListDataQuery', {
            get: function() { return this.__prop_viewModifyContactListDataQuery; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewModifyContactListDataQuery: ' + e.message);
                    }
                }

                this.__prop_viewModifyContactListDataQuery = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewModifyCustomHandlerActions', {
            get: function() { return this.__prop_viewModifyCustomHandlerActions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewModifyCustomHandlerActions: ' + e.message);
                    }
                }

                this.__prop_viewModifyCustomHandlerActions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewModifyDatabaseConnections', {
            get: function() { return this.__prop_viewModifyDatabaseConnections; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewModifyDatabaseConnections: ' + e.message);
                    }
                }

                this.__prop_viewModifyDatabaseConnections = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewModifyDncSources', {
            get: function() { return this.__prop_viewModifyDncSources; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewModifyDncSources: ' + e.message);
                    }
                }

                this.__prop_viewModifyDncSources = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewModifyEventLog', {
            get: function() { return this.__prop_viewModifyEventLog; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewModifyEventLog: ' + e.message);
                    }
                }

                this.__prop_viewModifyEventLog = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewModifyTimeZoneMapData', {
            get: function() { return this.__prop_viewModifyTimeZoneMapData; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewModifyTimeZoneMapData: ' + e.message);
                    }
                }

                this.__prop_viewModifyTimeZoneMapData = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'viewOtherPeoplesPrivateInteractions', {
            get: function() { return this.__prop_viewOtherPeoplesPrivateInteractions; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.viewOtherPeoplesPrivateInteractions: ' + e.message);
                    }
                }

                this.__prop_viewOtherPeoplesPrivateInteractions = value;
            },
            enumerable: true
        });

        Object.defineProperty(SecurityRightsProperties.prototype, 'widgetsConfigurationMaster', {
            get: function() { return this.__prop_widgetsConfigurationMaster; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableBooleanProperty || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableBooleanProperty(value);
                    } catch (e) {
                        throw new TypeError('Error setting SecurityRightsProperties.widgetsConfigurationMaster: ' + e.message);
                    }
                }

                this.__prop_widgetsConfigurationMaster = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SecurityRightsProperties, '__type', { value: 'urn:inin.com:configuration.people.accessrights:securityRightsProperties' });

    Object.defineProperty(SecurityRightsProperties, '__propInfo', {
        get: function() {
            var pi = {
                'accessAllInteractionConferences': { required: false, nullable: true },
                'accessOwnedInteractionConferences': { required: false, nullable: true },
                'accountCodeVerification': { required: false, nullable: true },
                'addIndividuals': { required: false, nullable: true },
                'addOrganizations': { required: false, nullable: true },
                'agentPreferences': { required: false, nullable: true },
                'allowAccessToProblemReporter': { required: false, nullable: true },
                'allowAgentRules': { required: false, nullable: true },
                'allowAgentScheduleBidding': { required: false, nullable: true },
                'allowAgentSeeOwnRank': { required: false, nullable: true },
                'allowAgentSeeRelativeRank': { required: false, nullable: true },
                'allowAlertProgramming': { required: false, nullable: true },
                'allowEmailAccessViaTui': { required: false, nullable: true },
                'allowEmailAlerts': { required: false, nullable: true },
                'allowFaxAccessViaTui': { required: false, nullable: true },
                'allowHandlerAlerts': { required: false, nullable: true },
                'allowIntercomChat': { required: false, nullable: true },
                'allowMemoAlerts': { required: false, nullable: true },
                'allowMiniMode': { required: false, nullable: true },
                'allowMonitorColumns': { required: false, nullable: true },
                'allowMultipleCalls': { required: false, nullable: true },
                'allowPersistentConnections': { required: false, nullable: true },
                'allowReceiveVoicemail': { required: false, nullable: true },
                'allowRelatedInteractionsPage': { required: false, nullable: true },
                'allowResponseManagement': { required: false, nullable: true },
                'allowSpeedDials': { required: false, nullable: true },
                'allowStatusNotes': { required: false, nullable: true },
                'allowUserDefinedTelephoneNumberOnRemoteLogin': { required: false, nullable: true },
                'allowVideo': { required: false, nullable: true },
                'allowVoiceMaiAccessViaTui': { required: false, nullable: true },
                'allowWorkgroupStats': { required: false, nullable: true },
                'canAccessOptimizerShiftTrading': { required: false, nullable: true },
                'canCoachInteractions': { required: false, nullable: true },
                'canConferenceCalls': { required: false, nullable: true },
                'canCreateEmailAttendantProfile': { required: false, nullable: true },
                'canCreateInboundAttendantProfile': { required: false, nullable: true },
                'canCreateOperatorAttendantProfile': { required: false, nullable: true },
                'canCreateOptimizerActivityCodes': { required: false, nullable: true },
                'canCreateOptimizerDayClassifications': { required: false, nullable: true },
                'canCreateOutboundAttendantProfile': { required: false, nullable: true },
                'canCreateQuestionnaireDirectories': { required: false, nullable: true },
                'canCreateSchedulingUnits': { required: false, nullable: true },
                'canDeleteOptimizerActivityCodes': { required: false, nullable: true },
                'canDeleteOptimizerDayClassifications': { required: false, nullable: true },
                'canDeleteSchedulingUnits': { required: false, nullable: true },
                'canDisconnectInteractions': { required: false, nullable: true },
                'canInitiateRecordingSnippet': { required: false, nullable: true },
                'canInitiateSecureInput': { required: false, nullable: true },
                'canJoinInteractions': { required: false, nullable: true },
                'canListenInOnInteractions': { required: false, nullable: true },
                'canManageClientTemplates': { required: false, nullable: true },
                'canModifyOptimizerActivityCodes': { required: false, nullable: true },
                'canModifyOptimizerDayClassifications': { required: false, nullable: true },
                'canModifyOptimizerStatusActivityTypeMapping': { required: false, nullable: true },
                'canMuteInteractions': { required: false, nullable: true },
                'canOrbitQueue': { required: false, nullable: true },
                'canOverrideFinishedScorecards': { required: false, nullable: true },
                'canParkInteractions': { required: false, nullable: true },
                'canPauseInteractions': { required: false, nullable: true },
                'canPickupInteractions': { required: false, nullable: true },
                'canPublishProcess': { required: false, nullable: true },
                'canPutInteractionsOnHold': { required: false, nullable: true },
                'canRecordInteractions': { required: false, nullable: true },
                'canRequestAssistanceFromSupervisor': { required: false, nullable: true },
                'canSecureRecordingPauseInteractions': { required: false, nullable: true },
                'canSubmitTimeOff': { required: false, nullable: true },
                'canTransferInteractions': { required: false, nullable: true },
                'canTransferInteractionsToVoicemail': { required: false, nullable: true },
                'canUserInteractionRecorderSelector': { required: false, nullable: true },
                'canViewOptimizerActivityCodes': { required: false, nullable: true },
                'canViewOptimizerDayClassifications': { required: false, nullable: true },
                'canViewOptimizerStatusActivityTypeMapping': { required: false, nullable: true },
                'customizeClient': { required: false, nullable: true },
                'dataExtractorJobAdmin': { required: false, nullable: true },
                'debugHandlers': { required: false, nullable: true },
                'deleteIndividuals': { required: false, nullable: true },
                'deleteOrganizations': { required: false, nullable: true },
                'directoryAdmin': { required: false, nullable: true },
                'followMe': { required: false, nullable: true },
                'havePrivateContacts': { required: false, nullable: true },
                'interactionRecorderMasterKeyPasswordAdministrator': { required: false, nullable: true },
                'iPPhoneProvisioningAdmin': { required: false, nullable: true },
                'lockPolicySets': { required: false, nullable: true },
                'loginCampaign': { required: false, nullable: true },
                'manageHandlers': { required: false, nullable: true },
                'mobileOfficeUser': { required: false, nullable: true },
                'modifyConfigurationChangeAuditing': { required: false, nullable: true },
                'modifyConfigurationGeneral': { required: false, nullable: true },
                'modifyConfigurationHTTPServer': { required: false, nullable: true },
                'modifyConfigurationOutboundServers': { required: false, nullable: true },
                'modifyConfigurationPhoneNumberTypes': { required: false, nullable: true },
                'modifyConfigurationPreviewCallBehavior': { required: false, nullable: true },
                'modifyIndividuals': { required: false, nullable: true },
                'modifyInteractions': { required: false, nullable: true },
                'modifyOrganizations': { required: false, nullable: true },
                'outlookTuiUser': { required: false, nullable: true },
                'privateCalls': { required: false, nullable: true },
                'publishHandlers': { required: false, nullable: true },
                'remoteControl': { required: false, nullable: true },
                'reporterAdministrator': { required: false, nullable: true },
                'requireForcedAuthorizationCode': { required: false, nullable: true },
                'runContactListPredefinedActions': { required: false, nullable: true },
                'showAssistanceButton': { required: false, nullable: true },
                'showCoachButton': { required: false, nullable: true },
                'showDisconnectButton': { required: false, nullable: true },
                'showHoldButton': { required: false, nullable: true },
                'showJoinButton': { required: false, nullable: true },
                'showListenButton': { required: false, nullable: true },
                'showMuteButton': { required: false, nullable: true },
                'showParkButton': { required: false, nullable: true },
                'showPauseButton': { required: false, nullable: true },
                'showPickupButton': { required: false, nullable: true },
                'showPrivateButton': { required: false, nullable: true },
                'showRecordButton': { required: false, nullable: true },
                'showRecordingSnippetButton': { required: false, nullable: true },
                'showSecureInputButton': { required: false, nullable: true },
                'showSecureRecordingPauseButton': { required: false, nullable: true },
                'showTransferButton': { required: false, nullable: true },
                'showVoicemailButton': { required: false, nullable: true },
                'showWorkgroupsProfilesTab': { required: false, nullable: true },
                'traceConfiguration': { required: false, nullable: true },
                'trackerAdministrator': { required: false, nullable: true },
                'useTiffForFaxes': { required: false, nullable: true },
                'viewConfigurationChangeAuditing': { required: false, nullable: true },
                'viewConfigurationGeneral': { required: false, nullable: true },
                'viewConfigurationHTTPServer': { required: false, nullable: true },
                'viewConfigurationOutboundServers': { required: false, nullable: true },
                'viewConfigurationPhoneNumberTypes': { required: false, nullable: true },
                'viewConfigurationPreviewCallBehavior': { required: false, nullable: true },
                'viewInteractionDetails': { required: false, nullable: true },
                'viewModifyCampaignAgentlessCallingType': { required: false, nullable: true },
                'viewModifyCampaignAutomaticTimeZoneMapping': { required: false, nullable: true },
                'viewModifyCampaignLineSettings': { required: false, nullable: true },
                'viewModifyCampaignMaxLines': { required: false, nullable: true },
                'viewModifyCampaignStatus': { required: false, nullable: true },
                'viewModifyContactListDataQuery': { required: false, nullable: true },
                'viewModifyCustomHandlerActions': { required: false, nullable: true },
                'viewModifyDatabaseConnections': { required: false, nullable: true },
                'viewModifyDncSources': { required: false, nullable: true },
                'viewModifyEventLog': { required: false, nullable: true },
                'viewModifyTimeZoneMapData': { required: false, nullable: true },
                'viewOtherPeoplesPrivateInteractions': { required: false, nullable: true },
                'widgetsConfigurationMaster': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.people.accessrights:securityRightsProperties'] = SecurityRightsProperties;

    return SecurityRightsProperties;
}());

exports.AccessRightsProperties = AccessRightsProperties;
exports.AdministrativeRightsProperties = AdministrativeRightsProperties;
exports.SecurityRightsProperties = SecurityRightsProperties;
