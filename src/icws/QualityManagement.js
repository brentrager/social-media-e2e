/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Recordings = require('./Recordings');

var ScorecardScoringState = (function(){
    var instanceCache = {};
    function ScorecardScoringState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:scorecardScoringState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ScorecardScoringState, _util.EnumValue);

    Object.defineProperties(ScorecardScoringState, {
        'Invalid': { value: new ScorecardScoringState(0, 'Invalid'), enumerable: true },
        'Assigned': { value: new ScorecardScoringState(1, 'Assigned'), enumerable: true },
        'InProgress': { value: new ScorecardScoringState(2, 'InProgress'), enumerable: true },
        'Complete': { value: new ScorecardScoringState(3, 'Complete'), enumerable: true }
    });

    Object.defineProperty(ScorecardScoringState, '__type', { value: 'urn:inin.com:qualityManagement:scorecardScoringState' });

    _typemap['urn:inin.com:qualityManagement:scorecardScoringState'] = ScorecardScoringState;

    return ScorecardScoringState;
}());

var ScorecardSignoffState = (function(){
    var instanceCache = {};
    function ScorecardSignoffState(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:scorecardSignoffState' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ScorecardSignoffState, _util.EnumValue);

    Object.defineProperties(ScorecardSignoffState, {
        'NotRequired': { value: new ScorecardSignoffState(0, 'NotRequired'), enumerable: true },
        'InProgress': { value: new ScorecardSignoffState(1, 'InProgress'), enumerable: true },
        'Complete': { value: new ScorecardSignoffState(2, 'Complete'), enumerable: true }
    });

    Object.defineProperty(ScorecardSignoffState, '__type', { value: 'urn:inin.com:qualityManagement:scorecardSignoffState' });

    _typemap['urn:inin.com:qualityManagement:scorecardSignoffState'] = ScorecardSignoffState;

    return ScorecardSignoffState;
}());

var ScorecardCalibration = (function(){
    var instanceCache = {};
    function ScorecardCalibration(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:scorecardCalibration' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ScorecardCalibration, _util.EnumValue);

    Object.defineProperties(ScorecardCalibration, {
        'None': { value: new ScorecardCalibration(0, 'None'), enumerable: true },
        'Marked': { value: new ScorecardCalibration(1, 'Marked'), enumerable: true },
        'Required': { value: new ScorecardCalibration(2, 'Required'), enumerable: true }
    });

    Object.defineProperty(ScorecardCalibration, '__type', { value: 'urn:inin.com:qualityManagement:scorecardCalibration' });

    _typemap['urn:inin.com:qualityManagement:scorecardCalibration'] = ScorecardCalibration;

    return ScorecardCalibration;
}());

var QuestionnaireResponseType = (function(){
    var instanceCache = {};
    function QuestionnaireResponseType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireResponseType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(QuestionnaireResponseType, _util.EnumValue);

    Object.defineProperties(QuestionnaireResponseType, {
        'Unknown': { value: new QuestionnaireResponseType(0, 'Unknown'), enumerable: true },
        'FreeText': { value: new QuestionnaireResponseType(1, 'FreeText'), enumerable: true },
        'Integer': { value: new QuestionnaireResponseType(2, 'Integer'), enumerable: true },
        'Numeric': { value: new QuestionnaireResponseType(3, 'Numeric'), enumerable: true },
        'Boolean': { value: new QuestionnaireResponseType(4, 'Boolean'), enumerable: true },
        'MultipleChoice': { value: new QuestionnaireResponseType(5, 'MultipleChoice'), enumerable: true }
    });

    Object.defineProperty(QuestionnaireResponseType, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireResponseType' });

    _typemap['urn:inin.com:qualityManagement:questionnaireResponseType'] = QuestionnaireResponseType;

    return QuestionnaireResponseType;
}());

var QuestionnaireQuestionLevel = (function(){
    var instanceCache = {};
    function QuestionnaireQuestionLevel(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireQuestionLevel' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(QuestionnaireQuestionLevel, _util.EnumValue);

    Object.defineProperties(QuestionnaireQuestionLevel, {
        'Unknown': { value: new QuestionnaireQuestionLevel(0, 'Unknown'), enumerable: true },
        'Optional': { value: new QuestionnaireQuestionLevel(1, 'Optional'), enumerable: true },
        'Required': { value: new QuestionnaireQuestionLevel(2, 'Required'), enumerable: true },
        'Critical': { value: new QuestionnaireQuestionLevel(3, 'Critical'), enumerable: true }
    });

    Object.defineProperty(QuestionnaireQuestionLevel, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireQuestionLevel' });

    _typemap['urn:inin.com:qualityManagement:questionnaireQuestionLevel'] = QuestionnaireQuestionLevel;

    return QuestionnaireQuestionLevel;
}());

var QualitySearchResult = (function(){
    var hasProps = false;

    function QualitySearchResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:qualitySearchResult' });
        }

        QualitySearchResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(QualitySearchResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(QualitySearchResult.prototype, 'recordingId', {
            get: function() { return this.__prop_recordingId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for QualitySearchResult.recordingId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordingId = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualitySearchResult.prototype, 'mediaType', {
            get: function() { return this.__prop_mediaType; },
            set: function(value) {
                if (!(value instanceof Recordings.MediaType || value === void 0)) {
                    try {
                        value = new Recordings.MediaType(value);
                    } catch (e) {
                        throw new TypeError('Error setting QualitySearchResult.mediaType: ' + e.message);
                    }
                }

                this.__prop_mediaType = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualitySearchResult.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for QualitySearchResult.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualitySearchResult.prototype, 'recordingDuration', {
            get: function() { return this.__prop_recordingDuration; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for QualitySearchResult.recordingDuration, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordingDuration = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualitySearchResult.prototype, 'recordingTime', {
            get: function() { return this.__prop_recordingTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for QualitySearchResult.recordingTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordingTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualitySearchResult.prototype, 'recordingInitiationPolicy', {
            get: function() { return this.__prop_recordingInitiationPolicy; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for QualitySearchResult.recordingInitiationPolicy, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordingInitiationPolicy = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualitySearchResult.prototype, 'recordingVersion', {
            get: function() { return this.__prop_recordingVersion; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for QualitySearchResult.recordingVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordingVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualitySearchResult.prototype, 'recordingFileSize', {
            get: function() { return this.__prop_recordingFileSize; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for QualitySearchResult.recordingFileSize, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordingFileSize = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualitySearchResult.prototype, 'workgroup', {
            get: function() { return this.__prop_workgroup; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for QualitySearchResult.workgroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroup = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualitySearchResult.prototype, 'recordingRights', {
            get: function() { return this.__prop_recordingRights; },
            set: function(value) {
                if (!(value instanceof Recordings.RecordingRights || value === void 0)) {
                    try {
                        value = new Recordings.RecordingRights(value);
                    } catch (e) {
                        throw new TypeError('Error setting QualitySearchResult.recordingRights: ' + e.message);
                    }
                }

                this.__prop_recordingRights = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualitySearchResult.prototype, 'recordingMediaStatus', {
            get: function() { return this.__prop_recordingMediaStatus; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for QualitySearchResult.recordingMediaStatus, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordingMediaStatus = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualitySearchResult.prototype, 'scorecard', {
            get: function() { return this.__prop_scorecard; },
            set: function(value) {
                if (!(value instanceof ScorecardSearchData)) {
                    try {
                        value = new ScorecardSearchData(value);
                    } catch (e) {
                        throw new TypeError('Error setting QualitySearchResult.scorecard: ' + e.message);
                    }
                }

                this.__prop_scorecard = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualitySearchResult.prototype, 'survey', {
            get: function() { return this.__prop_survey; },
            set: function(value) {
                if (!(value instanceof SurveySearchData || value === void 0 || value === null)) {
                    try {
                        value = new SurveySearchData(value);
                    } catch (e) {
                        throw new TypeError('Error setting QualitySearchResult.survey: ' + e.message);
                    }
                }

                this.__prop_survey = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QualitySearchResult, '__type', { value: 'urn:inin.com:qualityManagement:qualitySearchResult' });

    Object.defineProperty(QualitySearchResult, '__propInfo', {
        get: function() {
            var pi = {
                'recordingId': { required: true, nullable: false },
                'mediaType': { required: false, nullable: false },
                'interactionId': { required: true, nullable: false },
                'recordingDuration': { required: false, nullable: true },
                'recordingTime': { required: true, nullable: false },
                'recordingInitiationPolicy': { required: false, nullable: true },
                'recordingVersion': { required: true, nullable: false },
                'recordingFileSize': { required: false, nullable: true },
                'workgroup': { required: false, nullable: true },
                'recordingRights': { required: false, nullable: false },
                'recordingMediaStatus': { required: false, nullable: true },
                'scorecard': { required: true, nullable: false },
                'survey': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:qualitySearchResult'] = QualitySearchResult;

    return QualitySearchResult;
}());

var ScorecardSearchData = (function(){
    var hasProps = false;

    function ScorecardSearchData() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:scorecardSearchData' });
        }

        ScorecardSearchData._super.constructor.apply(this, arguments);
    }
    _util.inherits(ScorecardSearchData, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ScorecardSearchData.prototype, 'scorecardId', {
            get: function() { return this.__prop_scorecardId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ScorecardSearchData.scorecardId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scorecardId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardSearchData.prototype, 'questionnaireId', {
            get: function() { return this.__prop_questionnaireId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ScorecardSearchData.questionnaireId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_questionnaireId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardSearchData.prototype, 'scoredUser', {
            get: function() { return this.__prop_scoredUser; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ScorecardSearchData.scoredUser, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scoredUser = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardSearchData.prototype, 'scoringUser', {
            get: function() { return this.__prop_scoringUser; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ScorecardSearchData.scoringUser, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scoringUser = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardSearchData.prototype, 'isFailed', {
            get: function() { return this.__prop_isFailed; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ScorecardSearchData.isFailed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isFailed = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardSearchData.prototype, 'scoringTime', {
            get: function() { return this.__prop_scoringTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for ScorecardSearchData.scoringTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scoringTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardSearchData.prototype, 'scoringState', {
            get: function() { return this.__prop_scoringState; },
            set: function(value) {
                if (!(value instanceof ScorecardScoringState)) {
                    try {
                        value = new ScorecardScoringState(value);
                    } catch (e) {
                        throw new TypeError('Error setting ScorecardSearchData.scoringState: ' + e.message);
                    }
                }

                this.__prop_scoringState = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardSearchData.prototype, 'rank', {
            get: function() { return this.__prop_rank; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ScorecardSearchData.rank, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_rank = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardSearchData.prototype, 'scorePct', {
            get: function() { return this.__prop_scorePct; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for ScorecardSearchData.scorePct, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scorePct = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardSearchData.prototype, 'signoffState', {
            get: function() { return this.__prop_signoffState; },
            set: function(value) {
                if (!(value instanceof ScorecardSignoffState)) {
                    try {
                        value = new ScorecardSignoffState(value);
                    } catch (e) {
                        throw new TypeError('Error setting ScorecardSearchData.signoffState: ' + e.message);
                    }
                }

                this.__prop_signoffState = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardSearchData.prototype, 'calibration', {
            get: function() { return this.__prop_calibration; },
            set: function(value) {
                if (!(value instanceof ScorecardCalibration)) {
                    try {
                        value = new ScorecardCalibration(value);
                    } catch (e) {
                        throw new TypeError('Error setting ScorecardSearchData.calibration: ' + e.message);
                    }
                }

                this.__prop_calibration = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardSearchData.prototype, 'avgWorkgroupScorePct', {
            get: function() { return this.__prop_avgWorkgroupScorePct; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for ScorecardSearchData.avgWorkgroupScorePct, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_avgWorkgroupScorePct = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardSearchData.prototype, 'avgWorkgroupRank', {
            get: function() { return this.__prop_avgWorkgroupRank; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ScorecardSearchData.avgWorkgroupRank, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_avgWorkgroupRank = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ScorecardSearchData, '__type', { value: 'urn:inin.com:qualityManagement:scorecardSearchData' });

    Object.defineProperty(ScorecardSearchData, '__propInfo', {
        get: function() {
            var pi = {
                'scorecardId': { required: true, nullable: false },
                'questionnaireId': { required: true, nullable: false },
                'scoredUser': { required: false, nullable: true },
                'scoringUser': { required: false, nullable: true },
                'isFailed': { required: false, nullable: true },
                'scoringTime': { required: true, nullable: false },
                'scoringState': { required: true, nullable: false },
                'rank': { required: false, nullable: true },
                'scorePct': { required: true, nullable: false },
                'signoffState': { required: true, nullable: false },
                'calibration': { required: true, nullable: false },
                'avgWorkgroupScorePct': { required: false, nullable: true },
                'avgWorkgroupRank': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:scorecardSearchData'] = ScorecardSearchData;

    return ScorecardSearchData;
}());

var SurveySearchData = (function(){
    var hasProps = false;

    function SurveySearchData() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:surveySearchData' });
        }

        SurveySearchData._super.constructor.apply(this, arguments);
    }
    _util.inherits(SurveySearchData, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SurveySearchData.prototype, 'surveyFormId', {
            get: function() { return this.__prop_surveyFormId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SurveySearchData.surveyFormId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_surveyFormId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SurveySearchData.prototype, 'surveyId', {
            get: function() { return this.__prop_surveyId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SurveySearchData.surveyId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_surveyId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SurveySearchData.prototype, 'scorePct', {
            get: function() { return this.__prop_scorePct; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for SurveySearchData.scorePct, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scorePct = value;
            },
            enumerable: true
        });

        Object.defineProperty(SurveySearchData.prototype, 'rank', {
            get: function() { return this.__prop_rank; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SurveySearchData.rank, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_rank = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SurveySearchData, '__type', { value: 'urn:inin.com:qualityManagement:surveySearchData' });

    Object.defineProperty(SurveySearchData, '__propInfo', {
        get: function() {
            var pi = {
                'surveyFormId': { required: true, nullable: false },
                'surveyId': { required: true, nullable: false },
                'scorePct': { required: false, nullable: true },
                'rank': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:surveySearchData'] = SurveySearchData;

    return SurveySearchData;
}());

var CreateQuestionnaireRequest = (function(){
    var hasProps = false;

    function CreateQuestionnaireRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:createQuestionnaireRequest' });
        }

        CreateQuestionnaireRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateQuestionnaireRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreateQuestionnaireRequest.prototype, 'questionnaire', {
            get: function() { return this.__prop_questionnaire; },
            set: function(value) {
                if (!(value instanceof Questionnaire)) {
                    try {
                        value = new Questionnaire(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateQuestionnaireRequest.questionnaire: ' + e.message);
                    }
                }

                this.__prop_questionnaire = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateQuestionnaireRequest, '__type', { value: 'urn:inin.com:qualityManagement:createQuestionnaireRequest' });

    Object.defineProperty(CreateQuestionnaireRequest, '__propInfo', {
        get: function() {
            var pi = {
                'questionnaire': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:createQuestionnaireRequest'] = CreateQuestionnaireRequest;

    return CreateQuestionnaireRequest;
}());

var Questionnaire = (function(){
    var hasProps = false;

    function Questionnaire() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:questionnaire' });
        }

        Questionnaire._super.constructor.apply(this, arguments);
    }
    _util.inherits(Questionnaire, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Questionnaire.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Questionnaire.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Questionnaire.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'directoryId', {
            get: function() { return this.__prop_directoryId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Questionnaire.directoryId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_directoryId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'rankGroupId', {
            get: function() { return this.__prop_rankGroupId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Questionnaire.rankGroupId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_rankGroupId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'maxScore', {
            get: function() { return this.__prop_maxScore; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Questionnaire.maxScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'minScore', {
            get: function() { return this.__prop_minScore; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Questionnaire.minScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'minAcceptableScore', {
            get: function() { return this.__prop_minAcceptableScore; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Questionnaire.minAcceptableScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minAcceptableScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'note', {
            get: function() { return this.__prop_note; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Questionnaire.note, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_note = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'isTemplate', {
            get: function() { return this.__prop_isTemplate; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for Questionnaire.isTemplate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isTemplate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'isLocked', {
            get: function() { return this.__prop_isLocked; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for Questionnaire.isLocked, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isLocked = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'showRankWhileScoring', {
            get: function() { return this.__prop_showRankWhileScoring; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for Questionnaire.showRankWhileScoring, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_showRankWhileScoring = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'totalNumCriticalQuestions', {
            get: function() { return this.__prop_totalNumCriticalQuestions; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for Questionnaire.totalNumCriticalQuestions, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_totalNumCriticalQuestions = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'isActive', {
            get: function() { return this.__prop_isActive; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for Questionnaire.isActive, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isActive = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'showPassFailWhileScoring', {
            get: function() { return this.__prop_showPassFailWhileScoring; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for Questionnaire.showPassFailWhileScoring, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_showPassFailWhileScoring = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for Questionnaire.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        Object.defineProperty(Questionnaire.prototype, 'questionGroups', {
            get: function() { return this.__prop_questionGroups; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof QuestionnaireQuestionGroup); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new QuestionnaireQuestionGroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Questionnaire.questionGroups: ' + e.message);
                    }
                }

                this.__prop_questionGroups = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Questionnaire, '__type', { value: 'urn:inin.com:qualityManagement:questionnaire' });

    Object.defineProperty(Questionnaire, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: false, nullable: true },
                'name': { required: true, nullable: false },
                'directoryId': { required: true, nullable: false },
                'rankGroupId': { required: true, nullable: false },
                'maxScore': { required: false, nullable: true },
                'minScore': { required: false, nullable: true },
                'minAcceptableScore': { required: false, nullable: true },
                'note': { required: false, nullable: true },
                'isTemplate': { required: true, nullable: false },
                'isLocked': { required: true, nullable: false },
                'showRankWhileScoring': { required: true, nullable: false },
                'totalNumCriticalQuestions': { required: true, nullable: false },
                'isActive': { required: true, nullable: false },
                'showPassFailWhileScoring': { required: true, nullable: false },
                'version': { required: true, nullable: false },
                'questionGroups': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:questionnaire'] = Questionnaire;

    return Questionnaire;
}());

var QuestionnaireQuestionGroup = (function(){
    var hasProps = false;

    function QuestionnaireQuestionGroup() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireQuestionGroup' });
        }

        QuestionnaireQuestionGroup._super.constructor.apply(this, arguments);
    }
    _util.inherits(QuestionnaireQuestionGroup, _util.DataContract);

    function defineProps() {
        Object.defineProperty(QuestionnaireQuestionGroup.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for QuestionnaireQuestionGroup.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestionGroup.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for QuestionnaireQuestionGroup.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestionGroup.prototype, 'sequence', {
            get: function() { return this.__prop_sequence; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for QuestionnaireQuestionGroup.sequence, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sequence = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestionGroup.prototype, 'isTemplate', {
            get: function() { return this.__prop_isTemplate; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for QuestionnaireQuestionGroup.isTemplate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isTemplate = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestionGroup.prototype, 'isOptional', {
            get: function() { return this.__prop_isOptional; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for QuestionnaireQuestionGroup.isOptional, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isOptional = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestionGroup.prototype, 'note', {
            get: function() { return this.__prop_note; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for QuestionnaireQuestionGroup.note, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_note = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestionGroup.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for QuestionnaireQuestionGroup.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestionGroup.prototype, 'questions', {
            get: function() { return this.__prop_questions; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof QuestionnaireQuestion); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new QuestionnaireQuestion(item); });
                    } catch (e) {
                        throw new TypeError('Error setting QuestionnaireQuestionGroup.questions: ' + e.message);
                    }
                }

                this.__prop_questions = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QuestionnaireQuestionGroup, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireQuestionGroup' });

    Object.defineProperty(QuestionnaireQuestionGroup, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: false, nullable: true },
                'name': { required: true, nullable: false },
                'sequence': { required: true, nullable: false },
                'isTemplate': { required: true, nullable: false },
                'isOptional': { required: true, nullable: false },
                'note': { required: false, nullable: true },
                'version': { required: true, nullable: false },
                'questions': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:questionnaireQuestionGroup'] = QuestionnaireQuestionGroup;

    return QuestionnaireQuestionGroup;
}());

var QuestionnaireQuestion = (function(){
    var hasProps = false;

    function QuestionnaireQuestion() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireQuestion' });
        }

        QuestionnaireQuestion._super.constructor.apply(this, arguments);
    }
    _util.inherits(QuestionnaireQuestion, _util.DataContract);

    function defineProps() {
        Object.defineProperty(QuestionnaireQuestion.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for QuestionnaireQuestion.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'questionText', {
            get: function() { return this.__prop_questionText; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for QuestionnaireQuestion.questionText, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_questionText = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'sequence', {
            get: function() { return this.__prop_sequence; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for QuestionnaireQuestion.sequence, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sequence = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'responseType', {
            get: function() { return this.__prop_responseType; },
            set: function(value) {
                if (!(value instanceof QuestionnaireResponseType)) {
                    try {
                        value = new QuestionnaireResponseType(value);
                    } catch (e) {
                        throw new TypeError('Error setting QuestionnaireQuestion.responseType: ' + e.message);
                    }
                }

                this.__prop_responseType = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'questionLevel', {
            get: function() { return this.__prop_questionLevel; },
            set: function(value) {
                if (!(value instanceof QuestionnaireQuestionLevel)) {
                    try {
                        value = new QuestionnaireQuestionLevel(value);
                    } catch (e) {
                        throw new TypeError('Error setting QuestionnaireQuestion.questionLevel: ' + e.message);
                    }
                }

                this.__prop_questionLevel = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'weight', {
            get: function() { return this.__prop_weight; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for QuestionnaireQuestion.weight, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_weight = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'maxScore', {
            get: function() { return this.__prop_maxScore; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for QuestionnaireQuestion.maxScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'minScore', {
            get: function() { return this.__prop_minScore; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for QuestionnaireQuestion.minScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'minAcceptableScore', {
            get: function() { return this.__prop_minAcceptableScore; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for QuestionnaireQuestion.minAcceptableScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minAcceptableScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'helpText', {
            get: function() { return this.__prop_helpText; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for QuestionnaireQuestion.helpText, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_helpText = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'note', {
            get: function() { return this.__prop_note; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for QuestionnaireQuestion.note, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_note = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'isTemplate', {
            get: function() { return this.__prop_isTemplate; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for QuestionnaireQuestion.isTemplate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isTemplate = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'hasCommentField', {
            get: function() { return this.__prop_hasCommentField; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for QuestionnaireQuestion.hasCommentField, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasCommentField = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'canMarkNA', {
            get: function() { return this.__prop_canMarkNA; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for QuestionnaireQuestion.canMarkNA, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_canMarkNA = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for QuestionnaireQuestion.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestion.prototype, 'choices', {
            get: function() { return this.__prop_choices; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof QuestionnaireQuestionChoice); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new QuestionnaireQuestionChoice(item); });
                    } catch (e) {
                        throw new TypeError('Error setting QuestionnaireQuestion.choices: ' + e.message);
                    }
                }

                this.__prop_choices = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QuestionnaireQuestion, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireQuestion' });

    Object.defineProperty(QuestionnaireQuestion, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: false, nullable: true },
                'questionText': { required: true, nullable: false },
                'sequence': { required: true, nullable: false },
                'responseType': { required: true, nullable: false },
                'questionLevel': { required: true, nullable: false },
                'weight': { required: true, nullable: false },
                'maxScore': { required: true, nullable: false },
                'minScore': { required: true, nullable: false },
                'minAcceptableScore': { required: true, nullable: false },
                'helpText': { required: false, nullable: true },
                'note': { required: false, nullable: true },
                'isTemplate': { required: true, nullable: false },
                'hasCommentField': { required: true, nullable: false },
                'canMarkNA': { required: true, nullable: false },
                'version': { required: true, nullable: false },
                'choices': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:questionnaireQuestion'] = QuestionnaireQuestion;

    return QuestionnaireQuestion;
}());

var QuestionnaireQuestionChoice = (function(){
    var hasProps = false;

    function QuestionnaireQuestionChoice() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireQuestionChoice' });
        }

        QuestionnaireQuestionChoice._super.constructor.apply(this, arguments);
    }
    _util.inherits(QuestionnaireQuestionChoice, _util.DataContract);

    function defineProps() {
        Object.defineProperty(QuestionnaireQuestionChoice.prototype, 'choiceText', {
            get: function() { return this.__prop_choiceText; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for QuestionnaireQuestionChoice.choiceText, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_choiceText = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestionChoice.prototype, 'helpText', {
            get: function() { return this.__prop_helpText; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for QuestionnaireQuestionChoice.helpText, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_helpText = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestionChoice.prototype, 'score', {
            get: function() { return this.__prop_score; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for QuestionnaireQuestionChoice.score, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_score = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestionChoice.prototype, 'sequence', {
            get: function() { return this.__prop_sequence; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for QuestionnaireQuestionChoice.sequence, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sequence = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireQuestionChoice.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for QuestionnaireQuestionChoice.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QuestionnaireQuestionChoice, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireQuestionChoice' });

    Object.defineProperty(QuestionnaireQuestionChoice, '__propInfo', {
        get: function() {
            var pi = {
                'choiceText': { required: true, nullable: false },
                'helpText': { required: false, nullable: true },
                'score': { required: true, nullable: false },
                'sequence': { required: true, nullable: false },
                'version': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:questionnaireQuestionChoice'] = QuestionnaireQuestionChoice;

    return QuestionnaireQuestionChoice;
}());

var CreateQuestionnaireResponse = (function(){
    var hasProps = false;

    function CreateQuestionnaireResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:createQuestionnaireResponse' });
        }

        CreateQuestionnaireResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateQuestionnaireResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreateQuestionnaireResponse.prototype, 'questionnaireId', {
            get: function() { return this.__prop_questionnaireId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreateQuestionnaireResponse.questionnaireId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_questionnaireId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateQuestionnaireResponse, '__type', { value: 'urn:inin.com:qualityManagement:createQuestionnaireResponse' });

    Object.defineProperty(CreateQuestionnaireResponse, '__propInfo', {
        get: function() {
            var pi = {
                'questionnaireId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:createQuestionnaireResponse'] = CreateQuestionnaireResponse;

    return CreateQuestionnaireResponse;
}());

var CreateQuestionnaireDirRequest = (function(){
    var hasProps = false;

    function CreateQuestionnaireDirRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:createQuestionnaireDirRequest' });
        }

        CreateQuestionnaireDirRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateQuestionnaireDirRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreateQuestionnaireDirRequest.prototype, 'directory', {
            get: function() { return this.__prop_directory; },
            set: function(value) {
                if (!(value instanceof QuestionnaireDirectory)) {
                    try {
                        value = new QuestionnaireDirectory(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateQuestionnaireDirRequest.directory: ' + e.message);
                    }
                }

                this.__prop_directory = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateQuestionnaireDirRequest, '__type', { value: 'urn:inin.com:qualityManagement:createQuestionnaireDirRequest' });

    Object.defineProperty(CreateQuestionnaireDirRequest, '__propInfo', {
        get: function() {
            var pi = {
                'directory': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:createQuestionnaireDirRequest'] = CreateQuestionnaireDirRequest;

    return CreateQuestionnaireDirRequest;
}());

var QuestionnaireDirectory = (function(){
    var hasProps = false;

    function QuestionnaireDirectory() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireDirectory' });
        }

        QuestionnaireDirectory._super.constructor.apply(this, arguments);
    }
    _util.inherits(QuestionnaireDirectory, _util.DataContract);

    function defineProps() {
        Object.defineProperty(QuestionnaireDirectory.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for QuestionnaireDirectory.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireDirectory.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for QuestionnaireDirectory.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireDirectory.prototype, 'isTemplate', {
            get: function() { return this.__prop_isTemplate; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for QuestionnaireDirectory.isTemplate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isTemplate = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireDirectory.prototype, 'note', {
            get: function() { return this.__prop_note; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for QuestionnaireDirectory.note, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_note = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireDirectory.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for QuestionnaireDirectory.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QuestionnaireDirectory, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireDirectory' });

    Object.defineProperty(QuestionnaireDirectory, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: false, nullable: true },
                'name': { required: true, nullable: false },
                'isTemplate': { required: true, nullable: false },
                'note': { required: false, nullable: true },
                'version': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:questionnaireDirectory'] = QuestionnaireDirectory;

    return QuestionnaireDirectory;
}());

var ItemNameId = (function(){
    var hasProps = false;

    function ItemNameId() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:itemNameId' });
        }

        ItemNameId._super.constructor.apply(this, arguments);
    }
    _util.inherits(ItemNameId, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ItemNameId.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ItemNameId.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(ItemNameId.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ItemNameId.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ItemNameId, '__type', { value: 'urn:inin.com:qualityManagement:itemNameId' });

    Object.defineProperty(ItemNameId, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'id': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:itemNameId'] = ItemNameId;

    return ItemNameId;
}());

var CreateQuestionnaireDirResponse = (function(){
    var hasProps = false;

    function CreateQuestionnaireDirResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:createQuestionnaireDirResponse' });
        }

        CreateQuestionnaireDirResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateQuestionnaireDirResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreateQuestionnaireDirResponse.prototype, 'questionnaireDirId', {
            get: function() { return this.__prop_questionnaireDirId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreateQuestionnaireDirResponse.questionnaireDirId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_questionnaireDirId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateQuestionnaireDirResponse, '__type', { value: 'urn:inin.com:qualityManagement:createQuestionnaireDirResponse' });

    Object.defineProperty(CreateQuestionnaireDirResponse, '__propInfo', {
        get: function() {
            var pi = {
                'questionnaireDirId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:createQuestionnaireDirResponse'] = CreateQuestionnaireDirResponse;

    return CreateQuestionnaireDirResponse;
}());

var GetQuestionnaireDirsResponse = (function(){
    var hasProps = false;

    function GetQuestionnaireDirsResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:getQuestionnaireDirsResponse' });
        }

        GetQuestionnaireDirsResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(GetQuestionnaireDirsResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(GetQuestionnaireDirsResponse.prototype, 'directories', {
            get: function() { return this.__prop_directories; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof QuestionnaireDirContents); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new QuestionnaireDirContents(item); });
                    } catch (e) {
                        throw new TypeError('Error setting GetQuestionnaireDirsResponse.directories: ' + e.message);
                    }
                }

                this.__prop_directories = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(GetQuestionnaireDirsResponse, '__type', { value: 'urn:inin.com:qualityManagement:getQuestionnaireDirsResponse' });

    Object.defineProperty(GetQuestionnaireDirsResponse, '__propInfo', {
        get: function() {
            var pi = {
                'directories': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:getQuestionnaireDirsResponse'] = GetQuestionnaireDirsResponse;

    return GetQuestionnaireDirsResponse;
}());

var GetRankGroupsResponse = (function(){
    var hasProps = false;

    function GetRankGroupsResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:getRankGroupsResponse' });
        }

        GetRankGroupsResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(GetRankGroupsResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(GetRankGroupsResponse.prototype, 'rankGroups', {
            get: function() { return this.__prop_rankGroups; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RankGroup); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new RankGroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting GetRankGroupsResponse.rankGroups: ' + e.message);
                    }
                }

                this.__prop_rankGroups = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(GetRankGroupsResponse, '__type', { value: 'urn:inin.com:qualityManagement:getRankGroupsResponse' });

    Object.defineProperty(GetRankGroupsResponse, '__propInfo', {
        get: function() {
            var pi = {
                'rankGroups': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:getRankGroupsResponse'] = GetRankGroupsResponse;

    return GetRankGroupsResponse;
}());

var RankGroup = (function(){
    var hasProps = false;

    function RankGroup() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:rankGroup' });
        }

        RankGroup._super.constructor.apply(this, arguments);
    }
    _util.inherits(RankGroup, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RankGroup.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for RankGroup.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(RankGroup.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RankGroup.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(RankGroup.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for RankGroup.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        Object.defineProperty(RankGroup.prototype, 'ranks', {
            get: function() { return this.__prop_ranks; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RankDefinition); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new RankDefinition(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RankGroup.ranks: ' + e.message);
                    }
                }

                this.__prop_ranks = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RankGroup, '__type', { value: 'urn:inin.com:qualityManagement:rankGroup' });

    Object.defineProperty(RankGroup, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: false, nullable: true },
                'name': { required: true, nullable: false },
                'version': { required: true, nullable: false },
                'ranks': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:rankGroup'] = RankGroup;

    return RankGroup;
}());

var RankDefinition = (function(){
    var hasProps = false;

    function RankDefinition() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:rankDefinition' });
        }

        RankDefinition._super.constructor.apply(this, arguments);
    }
    _util.inherits(RankDefinition, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RankDefinition.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for RankDefinition.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(RankDefinition.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RankDefinition.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(RankDefinition.prototype, 'percent', {
            get: function() { return this.__prop_percent; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for RankDefinition.percent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_percent = value;
            },
            enumerable: true
        });

        Object.defineProperty(RankDefinition.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for RankDefinition.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RankDefinition, '__type', { value: 'urn:inin.com:qualityManagement:rankDefinition' });

    Object.defineProperty(RankDefinition, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: false, nullable: true },
                'name': { required: true, nullable: false },
                'percent': { required: true, nullable: false },
                'version': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:rankDefinition'] = RankDefinition;

    return RankDefinition;
}());

var Scorecard = (function(){
    var hasProps = false;

    function Scorecard() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:scorecard' });
        }

        Scorecard._super.constructor.apply(this, arguments);
    }
    _util.inherits(Scorecard, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Scorecard.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Scorecard.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'questionnaireId', {
            get: function() { return this.__prop_questionnaireId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Scorecard.questionnaireId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_questionnaireId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'recordingId', {
            get: function() { return this.__prop_recordingId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Scorecard.recordingId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordingId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'scoringUser', {
            get: function() { return this.__prop_scoringUser; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Scorecard.scoringUser, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scoringUser = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'scoredUser', {
            get: function() { return this.__prop_scoredUser; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Scorecard.scoredUser, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scoredUser = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'scoringState', {
            get: function() { return this.__prop_scoringState; },
            set: function(value) {
                if (!(value instanceof ScorecardScoringState)) {
                    try {
                        value = new ScorecardScoringState(value);
                    } catch (e) {
                        throw new TypeError('Error setting Scorecard.scoringState: ' + e.message);
                    }
                }

                this.__prop_scoringState = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'score', {
            get: function() { return this.__prop_score; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for Scorecard.score, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_score = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'scorePct', {
            get: function() { return this.__prop_scorePct; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for Scorecard.scorePct, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scorePct = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'rank', {
            get: function() { return this.__prop_rank; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Scorecard.rank, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_rank = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'maxScore', {
            get: function() { return this.__prop_maxScore; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Scorecard.maxScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'minScore', {
            get: function() { return this.__prop_minScore; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Scorecard.minScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_minScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'scoringDate', {
            get: function() { return this.__prop_scoringDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Scorecard.scoringDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scoringDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'assignedPolicy', {
            get: function() { return this.__prop_assignedPolicy; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Scorecard.assignedPolicy, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_assignedPolicy = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'nonCriticalMaxScore', {
            get: function() { return this.__prop_nonCriticalMaxScore; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Scorecard.nonCriticalMaxScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_nonCriticalMaxScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'nonCriticalMinScore', {
            get: function() { return this.__prop_nonCriticalMinScore; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Scorecard.nonCriticalMinScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_nonCriticalMinScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'nonCriticalScore', {
            get: function() { return this.__prop_nonCriticalScore; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Scorecard.nonCriticalScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_nonCriticalScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'criticalScore', {
            get: function() { return this.__prop_criticalScore; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for Scorecard.criticalScore, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_criticalScore = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'numAnsweredCritical', {
            get: function() { return this.__prop_numAnsweredCritical; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Scorecard.numAnsweredCritical, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_numAnsweredCritical = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'numPositiveAnsweredCritical', {
            get: function() { return this.__prop_numPositiveAnsweredCritical; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Scorecard.numPositiveAnsweredCritical, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_numPositiveAnsweredCritical = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'isFailed', {
            get: function() { return this.__prop_isFailed; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Scorecard.isFailed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isFailed = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'calibration', {
            get: function() { return this.__prop_calibration; },
            set: function(value) {
                if (!(value instanceof ScorecardCalibration)) {
                    try {
                        value = new ScorecardCalibration(value);
                    } catch (e) {
                        throw new TypeError('Error setting Scorecard.calibration: ' + e.message);
                    }
                }

                this.__prop_calibration = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'signoffState', {
            get: function() { return this.__prop_signoffState; },
            set: function(value) {
                if (!(value instanceof ScorecardSignoffState)) {
                    try {
                        value = new ScorecardSignoffState(value);
                    } catch (e) {
                        throw new TypeError('Error setting Scorecard.signoffState: ' + e.message);
                    }
                }

                this.__prop_signoffState = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'signatureComments', {
            get: function() { return this.__prop_signatureComments; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Scorecard.signatureComments, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_signatureComments = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for Scorecard.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'answers', {
            get: function() { return this.__prop_answers; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ScorecardAnswer); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ScorecardAnswer(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Scorecard.answers: ' + e.message);
                    }
                }

                this.__prop_answers = value;
            },
            enumerable: true
        });

        Object.defineProperty(Scorecard.prototype, 'groupScores', {
            get: function() { return this.__prop_groupScores; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ScorecardGroupScore); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ScorecardGroupScore(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Scorecard.groupScores: ' + e.message);
                    }
                }

                this.__prop_groupScores = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Scorecard, '__type', { value: 'urn:inin.com:qualityManagement:scorecard' });

    Object.defineProperty(Scorecard, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'questionnaireId': { required: true, nullable: false },
                'recordingId': { required: false, nullable: true },
                'scoringUser': { required: false, nullable: true },
                'scoredUser': { required: false, nullable: true },
                'scoringState': { required: true, nullable: false },
                'score': { required: true, nullable: false },
                'scorePct': { required: true, nullable: false },
                'rank': { required: false, nullable: true },
                'maxScore': { required: false, nullable: true },
                'minScore': { required: false, nullable: true },
                'scoringDate': { required: false, nullable: true },
                'assignedPolicy': { required: false, nullable: true },
                'nonCriticalMaxScore': { required: false, nullable: true },
                'nonCriticalMinScore': { required: false, nullable: true },
                'nonCriticalScore': { required: false, nullable: true },
                'criticalScore': { required: false, nullable: true },
                'numAnsweredCritical': { required: false, nullable: true },
                'numPositiveAnsweredCritical': { required: false, nullable: true },
                'isFailed': { required: false, nullable: true },
                'calibration': { required: true, nullable: false },
                'signoffState': { required: true, nullable: false },
                'signatureComments': { required: false, nullable: true },
                'version': { required: true, nullable: false },
                'answers': { required: false, nullable: true },
                'groupScores': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:scorecard'] = Scorecard;

    return Scorecard;
}());

var ScorecardAnswer = (function(){
    var hasProps = false;

    function ScorecardAnswer() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:scorecardAnswer' });
        }

        ScorecardAnswer._super.constructor.apply(this, arguments);
    }
    _util.inherits(ScorecardAnswer, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ScorecardAnswer.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ScorecardAnswer.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardAnswer.prototype, 'questionId', {
            get: function() { return this.__prop_questionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ScorecardAnswer.questionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_questionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardAnswer.prototype, 'choiceSequence', {
            get: function() { return this.__prop_choiceSequence; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for ScorecardAnswer.choiceSequence, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_choiceSequence = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardAnswer.prototype, 'score', {
            get: function() { return this.__prop_score; },
            set: function(value) {
                if (!(_util.isNumber(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (floating point) for ScorecardAnswer.score, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_score = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardAnswer.prototype, 'rawAnswer', {
            get: function() { return this.__prop_rawAnswer; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ScorecardAnswer.rawAnswer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_rawAnswer = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardAnswer.prototype, 'comments', {
            get: function() { return this.__prop_comments; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ScorecardAnswer.comments, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_comments = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardAnswer.prototype, 'isMarkedNA', {
            get: function() { return this.__prop_isMarkedNA; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for ScorecardAnswer.isMarkedNA, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isMarkedNA = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardAnswer.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for ScorecardAnswer.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ScorecardAnswer, '__type', { value: 'urn:inin.com:qualityManagement:scorecardAnswer' });

    Object.defineProperty(ScorecardAnswer, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'questionId': { required: true, nullable: false },
                'choiceSequence': { required: true, nullable: false },
                'score': { required: false, nullable: true },
                'rawAnswer': { required: false, nullable: true },
                'comments': { required: false, nullable: true },
                'isMarkedNA': { required: true, nullable: false },
                'version': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:scorecardAnswer'] = ScorecardAnswer;

    return ScorecardAnswer;
}());

var ScorecardGroupScore = (function(){
    var hasProps = false;

    function ScorecardGroupScore() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:scorecardGroupScore' });
        }

        ScorecardGroupScore._super.constructor.apply(this, arguments);
    }
    _util.inherits(ScorecardGroupScore, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ScorecardGroupScore.prototype, 'questionGroupId', {
            get: function() { return this.__prop_questionGroupId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ScorecardGroupScore.questionGroupId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_questionGroupId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardGroupScore.prototype, 'score', {
            get: function() { return this.__prop_score; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for ScorecardGroupScore.score, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_score = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardGroupScore.prototype, 'scorePct', {
            get: function() { return this.__prop_scorePct; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for ScorecardGroupScore.scorePct, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scorePct = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardGroupScore.prototype, 'scoreMin', {
            get: function() { return this.__prop_scoreMin; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for ScorecardGroupScore.scoreMin, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scoreMin = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardGroupScore.prototype, 'scoreMax', {
            get: function() { return this.__prop_scoreMax; },
            set: function(value) {
                if (!(_util.isNumber(value))) {
                    throw new TypeError('Expected type Number (floating point) for ScorecardGroupScore.scoreMax, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scoreMax = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScorecardGroupScore.prototype, 'rank', {
            get: function() { return this.__prop_rank; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ScorecardGroupScore.rank, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_rank = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ScorecardGroupScore, '__type', { value: 'urn:inin.com:qualityManagement:scorecardGroupScore' });

    Object.defineProperty(ScorecardGroupScore, '__propInfo', {
        get: function() {
            var pi = {
                'questionGroupId': { required: true, nullable: false },
                'score': { required: true, nullable: false },
                'scorePct': { required: true, nullable: false },
                'scoreMin': { required: true, nullable: false },
                'scoreMax': { required: true, nullable: false },
                'rank': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:scorecardGroupScore'] = ScorecardGroupScore;

    return ScorecardGroupScore;
}());

var AckScorecardRequest = (function(){
    var hasProps = false;

    function AckScorecardRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:ackScorecardRequest' });
        }

        AckScorecardRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(AckScorecardRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AckScorecardRequest.prototype, 'comments', {
            get: function() { return this.__prop_comments; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for AckScorecardRequest.comments, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_comments = value;
            },
            enumerable: true
        });

        Object.defineProperty(AckScorecardRequest.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for AckScorecardRequest.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AckScorecardRequest, '__type', { value: 'urn:inin.com:qualityManagement:ackScorecardRequest' });

    Object.defineProperty(AckScorecardRequest, '__propInfo', {
        get: function() {
            var pi = {
                'comments': { required: false, nullable: true },
                'version': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:ackScorecardRequest'] = AckScorecardRequest;

    return AckScorecardRequest;
}());

var CreateSearchRequest = (function(){
    var hasProps = false;

    function CreateSearchRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:createSearchRequest' });
        }

        CreateSearchRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateSearchRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CreateSearchRequest.prototype, 'filters', {
            get: function() { return this.__prop_filters; },
            set: function(value) {
                if (!(value instanceof QualityFilters)) {
                    try {
                        value = new QualityFilters(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateSearchRequest.filters: ' + e.message);
                    }
                }

                this.__prop_filters = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateSearchRequest.prototype, 'maxResults', {
            get: function() { return this.__prop_maxResults; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for CreateSearchRequest.maxResults, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxResults = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateSearchRequest, '__type', { value: 'urn:inin.com:qualityManagement:createSearchRequest' });

    Object.defineProperty(CreateSearchRequest, '__propInfo', {
        get: function() {
            var pi = {
                'filters': { required: true, nullable: false },
                'maxResults': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:createSearchRequest'] = CreateSearchRequest;

    return CreateSearchRequest;
}());

var QualityFilters = (function(){
    var hasProps = false;

    function QualityFilters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:qualityFilters' });
        }

        QualityFilters._super.constructor.apply(this, arguments);
    }
    _util.inherits(QualityFilters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(QualityFilters.prototype, 'scoredUsers', {
            get: function() { return this.__prop_scoredUsers; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for QualityFilters.scoredUsers, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scoredUsers = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualityFilters.prototype, 'questionnaireIds', {
            get: function() { return this.__prop_questionnaireIds; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for QualityFilters.questionnaireIds, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_questionnaireIds = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualityFilters.prototype, 'workgroups', {
            get: function() { return this.__prop_workgroups; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for QualityFilters.workgroups, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualityFilters.prototype, 'mediaTypes', {
            get: function() { return this.__prop_mediaTypes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Recordings.MediaType); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Recordings.MediaType(item); });
                    } catch (e) {
                        throw new TypeError('Error setting QualityFilters.mediaTypes: ' + e.message);
                    }
                }

                this.__prop_mediaTypes = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualityFilters.prototype, 'recordingTimeStart', {
            get: function() { return this.__prop_recordingTimeStart; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for QualityFilters.recordingTimeStart, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordingTimeStart = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualityFilters.prototype, 'recordingTimeEnd', {
            get: function() { return this.__prop_recordingTimeEnd; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for QualityFilters.recordingTimeEnd, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_recordingTimeEnd = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualityFilters.prototype, 'scoringTimeStart', {
            get: function() { return this.__prop_scoringTimeStart; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for QualityFilters.scoringTimeStart, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scoringTimeStart = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualityFilters.prototype, 'scoringTimeEnd', {
            get: function() { return this.__prop_scoringTimeEnd; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0)) {
                    throw new TypeError('Expected type Date for QualityFilters.scoringTimeEnd, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scoringTimeEnd = value;
            },
            enumerable: true
        });

        Object.defineProperty(QualityFilters.prototype, 'signoffStates', {
            get: function() { return this.__prop_signoffStates; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ScorecardSignoffState); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new ScorecardSignoffState(item); });
                    } catch (e) {
                        throw new TypeError('Error setting QualityFilters.signoffStates: ' + e.message);
                    }
                }

                this.__prop_signoffStates = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QualityFilters, '__type', { value: 'urn:inin.com:qualityManagement:qualityFilters' });

    Object.defineProperty(QualityFilters, '__propInfo', {
        get: function() {
            var pi = {
                'scoredUsers': { required: false, nullable: false },
                'questionnaireIds': { required: false, nullable: false },
                'workgroups': { required: false, nullable: false },
                'mediaTypes': { required: false, nullable: false },
                'recordingTimeStart': { required: false, nullable: false },
                'recordingTimeEnd': { required: false, nullable: false },
                'scoringTimeStart': { required: false, nullable: false },
                'scoringTimeEnd': { required: false, nullable: false },
                'signoffStates': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:qualityFilters'] = QualityFilters;

    return QualityFilters;
}());

var GetMoreSearchResultsResponse = (function(){
    var hasProps = false;

    function GetMoreSearchResultsResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:getMoreSearchResultsResponse' });
        }

        GetMoreSearchResultsResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(GetMoreSearchResultsResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(GetMoreSearchResultsResponse.prototype, 'numRemaining', {
            get: function() { return this.__prop_numRemaining; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for GetMoreSearchResultsResponse.numRemaining, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_numRemaining = value;
            },
            enumerable: true
        });

        Object.defineProperty(GetMoreSearchResultsResponse.prototype, 'results', {
            get: function() { return this.__prop_results; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof QualitySearchResult); }))) {
                    try {
                        value = value.map(function(item){ return new QualitySearchResult(item); });
                    } catch (e) {
                        throw new TypeError('Error setting GetMoreSearchResultsResponse.results: ' + e.message);
                    }
                }

                this.__prop_results = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(GetMoreSearchResultsResponse, '__type', { value: 'urn:inin.com:qualityManagement:getMoreSearchResultsResponse' });

    Object.defineProperty(GetMoreSearchResultsResponse, '__propInfo', {
        get: function() {
            var pi = {
                'numRemaining': { required: true, nullable: false },
                'results': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:getMoreSearchResultsResponse'] = GetMoreSearchResultsResponse;

    return GetMoreSearchResultsResponse;
}());

var QuestionnaireDirContents = (function(){
    var hasProps = false;

    function QuestionnaireDirContents() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireDirContents', enumerable: true });
        }

        QuestionnaireDirContents._super.constructor.apply(this, arguments);
    }
    _util.inherits(QuestionnaireDirContents, QuestionnaireDirectory);

    function defineProps() {
        Object.defineProperty(QuestionnaireDirContents.prototype, 'writable', {
            get: function() { return this.__prop_writable; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for QuestionnaireDirContents.writable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_writable = value;
            },
            enumerable: true
        });

        Object.defineProperty(QuestionnaireDirContents.prototype, 'questionnaires', {
            get: function() { return this.__prop_questionnaires; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ItemNameId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ItemNameId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting QuestionnaireDirContents.questionnaires: ' + e.message);
                    }
                }

                this.__prop_questionnaires = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(QuestionnaireDirContents, '__type', { value: 'urn:inin.com:qualityManagement:questionnaireDirContents' });

    Object.defineProperty(QuestionnaireDirContents, '__propInfo', {
        get: function() {
            var pi = {
                'writable': { required: true, nullable: false },
                'questionnaires': { required: false, nullable: true }
            };
            if (QuestionnaireDirectory.__propInfo) { _util.extend(pi, QuestionnaireDirectory.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:questionnaireDirContents'] = QuestionnaireDirContents;

    return QuestionnaireDirContents;
}());

var CreateSearchCompletedMessage = (function(){
    var hasProps = false;

    function CreateSearchCompletedMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:qualityManagement:createSearchCompletedMessage', enumerable: true });
        }

        CreateSearchCompletedMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateSearchCompletedMessage, Messaging.AsyncOperationCompletedMessage);

    function defineProps() {
        Object.defineProperty(CreateSearchCompletedMessage.prototype, 'moreResults', {
            get: function() { return this.__prop_moreResults; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for CreateSearchCompletedMessage.moreResults, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_moreResults = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateSearchCompletedMessage.prototype, 'results', {
            get: function() { return this.__prop_results; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof QualitySearchResult); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new QualitySearchResult(item); });
                    } catch (e) {
                        throw new TypeError('Error setting CreateSearchCompletedMessage.results: ' + e.message);
                    }
                }

                this.__prop_results = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateSearchCompletedMessage, '__type', { value: 'urn:inin.com:qualityManagement:createSearchCompletedMessage' });

    Object.defineProperty(CreateSearchCompletedMessage, '__propInfo', {
        get: function() {
            var pi = {
                'moreResults': { required: true, nullable: false },
                'results': { required: false, nullable: true }
            };
            if (Messaging.AsyncOperationCompletedMessage.__propInfo) { _util.extend(pi, Messaging.AsyncOperationCompletedMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:qualityManagement:createSearchCompletedMessage'] = CreateSearchCompletedMessage;

    return CreateSearchCompletedMessage;
}());

exports.ScorecardScoringState = ScorecardScoringState;
exports.ScorecardSignoffState = ScorecardSignoffState;
exports.ScorecardCalibration = ScorecardCalibration;
exports.QuestionnaireResponseType = QuestionnaireResponseType;
exports.QuestionnaireQuestionLevel = QuestionnaireQuestionLevel;
exports.CreateSearchCompletedMessage = CreateSearchCompletedMessage;
exports.QualitySearchResult = QualitySearchResult;
exports.ScorecardSearchData = ScorecardSearchData;
exports.SurveySearchData = SurveySearchData;
exports.CreateQuestionnaireRequest = CreateQuestionnaireRequest;
exports.Questionnaire = Questionnaire;
exports.QuestionnaireQuestionGroup = QuestionnaireQuestionGroup;
exports.QuestionnaireQuestion = QuestionnaireQuestion;
exports.QuestionnaireQuestionChoice = QuestionnaireQuestionChoice;
exports.CreateQuestionnaireResponse = CreateQuestionnaireResponse;
exports.CreateQuestionnaireDirRequest = CreateQuestionnaireDirRequest;
exports.QuestionnaireDirectory = QuestionnaireDirectory;
exports.QuestionnaireDirContents = QuestionnaireDirContents;
exports.ItemNameId = ItemNameId;
exports.CreateQuestionnaireDirResponse = CreateQuestionnaireDirResponse;
exports.GetQuestionnaireDirsResponse = GetQuestionnaireDirsResponse;
exports.GetRankGroupsResponse = GetRankGroupsResponse;
exports.RankGroup = RankGroup;
exports.RankDefinition = RankDefinition;
exports.Scorecard = Scorecard;
exports.ScorecardAnswer = ScorecardAnswer;
exports.ScorecardGroupScore = ScorecardGroupScore;
exports.AckScorecardRequest = AckScorecardRequest;
exports.CreateSearchRequest = CreateSearchRequest;
exports.QualityFilters = QualityFilters;
exports.GetMoreSearchResultsResponse = GetMoreSearchResultsResponse;
