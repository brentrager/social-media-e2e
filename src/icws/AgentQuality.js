/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var QualityManagement = require('./QualityManagement');
var Common = require('./Common');

var $questionnaires = (function(){
    function createQuestionnaire(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createQuestionnaire.params)) {
            try {
                params = new createQuestionnaire.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createQuestionnaire.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof QualityManagement.CreateQuestionnaireResponse) ? o : new QualityManagement.CreateQuestionnaireResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createQuestionnaire.method, createQuestionnaire.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createQuestionnaire, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/agent-quality/questionnaires', enumerable: true }
    });

    createQuestionnaire.params = (function(){
        _util.inherits(createQuestionnaire_params, _util.RequestParams);

        function createQuestionnaire_params(properties) {
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
            if (!(properties.content instanceof QualityManagement.CreateQuestionnaireRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: QualityManagement.CreateQuestionnaireRequest');
            }

            createQuestionnaire_params._super.constructor.apply(this, arguments);
        }

        return createQuestionnaire_params;
    })();

    function getQuestionnaire(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getQuestionnaire.params)) {
            try {
                params = new getQuestionnaire.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getQuestionnaire.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof QualityManagement.Questionnaire) ? o : new QualityManagement.Questionnaire(o); };
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getQuestionnaire.method, getQuestionnaire.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getQuestionnaire, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/agent-quality/questionnaires/{questionnaireId}', enumerable: true }
    });

    getQuestionnaire.params = (function(){
        _util.inherits(getQuestionnaire_params, _util.RequestParams);

        function getQuestionnaire_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, questionnaireId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'questionnaireId')) {
                throw new Error('`properties.template` is missing required property: `questionnaireId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getQuestionnaire_params._super.constructor.apply(this, arguments);
        }

        return getQuestionnaire_params;
    })();

    return Object.create(null, {
        createQuestionnaire: { value: createQuestionnaire, enumerable: true },
        getQuestionnaire: { value: getQuestionnaire, enumerable: true }
    });
})();

var $questionnaireDirectories = (function(){
    function createQuestionnaireDir(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createQuestionnaireDir.params)) {
            try {
                params = new createQuestionnaireDir.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createQuestionnaireDir.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof QualityManagement.CreateQuestionnaireDirResponse) ? o : new QualityManagement.CreateQuestionnaireDirResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createQuestionnaireDir.method, createQuestionnaireDir.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createQuestionnaireDir, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/agent-quality/questionnaire-directories', enumerable: true }
    });

    createQuestionnaireDir.params = (function(){
        _util.inherits(createQuestionnaireDir_params, _util.RequestParams);

        function createQuestionnaireDir_params(properties) {
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
            if (!(properties.content instanceof QualityManagement.CreateQuestionnaireDirRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: QualityManagement.CreateQuestionnaireDirRequest');
            }

            createQuestionnaireDir_params._super.constructor.apply(this, arguments);
        }

        return createQuestionnaireDir_params;
    })();

    function getQuestionnaireDirs(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getQuestionnaireDirs.params)) {
            try {
                params = new getQuestionnaireDirs.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getQuestionnaireDirs.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof QualityManagement.GetQuestionnaireDirsResponse) ? o : new QualityManagement.GetQuestionnaireDirsResponse(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getQuestionnaireDirs.method, getQuestionnaireDirs.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getQuestionnaireDirs, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/agent-quality/questionnaire-directories', enumerable: true }
    });

    getQuestionnaireDirs.params = (function(){
        _util.inherits(getQuestionnaireDirs_params, _util.RequestParams);

        function getQuestionnaireDirs_params(properties) {
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

            getQuestionnaireDirs_params._super.constructor.apply(this, arguments);
        }

        return getQuestionnaireDirs_params;
    })();

    function deleteQuestionnaireDir(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteQuestionnaireDir.params)) {
            try {
                params = new deleteQuestionnaireDir.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteQuestionnaireDir.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteQuestionnaireDir.method, deleteQuestionnaireDir.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteQuestionnaireDir, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/agent-quality/questionnaire-directories/{directoryId}', enumerable: true }
    });

    deleteQuestionnaireDir.params = (function(){
        _util.inherits(deleteQuestionnaireDir_params, _util.RequestParams);

        function deleteQuestionnaireDir_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, directoryId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'directoryId')) {
                throw new Error('`properties.template` is missing required property: `directoryId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteQuestionnaireDir_params._super.constructor.apply(this, arguments);
        }

        return deleteQuestionnaireDir_params;
    })();

    return Object.create(null, {
        createQuestionnaireDir: { value: createQuestionnaireDir, enumerable: true },
        getQuestionnaireDirs: { value: getQuestionnaireDirs, enumerable: true },
        deleteQuestionnaireDir: { value: deleteQuestionnaireDir, enumerable: true }
    });
})();

var $rankGroups = (function(){
    function getRankGroups(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getRankGroups.params)) {
            try {
                params = new getRankGroups.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getRankGroups.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof QualityManagement.GetRankGroupsResponse) ? o : new QualityManagement.GetRankGroupsResponse(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getRankGroups.method, getRankGroups.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getRankGroups, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/agent-quality/rank-groups', enumerable: true }
    });

    getRankGroups.params = (function(){
        _util.inherits(getRankGroups_params, _util.RequestParams);

        function getRankGroups_params(properties) {
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

            getRankGroups_params._super.constructor.apply(this, arguments);
        }

        return getRankGroups_params;
    })();

    return Object.create(null, {
        getRankGroups: { value: getRankGroups, enumerable: true }
    });
})();

var $scorecards = (function(){
    function getScorecard(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getScorecard.params)) {
            try {
                params = new getScorecard.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getScorecard.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof QualityManagement.Scorecard) ? o : new QualityManagement.Scorecard(o); };
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getScorecard.method, getScorecard.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getScorecard, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/agent-quality/scorecards/{scorecardId}', enumerable: true }
    });

    getScorecard.params = (function(){
        _util.inherits(getScorecard_params, _util.RequestParams);

        function getScorecard_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, scorecardId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'scorecardId')) {
                throw new Error('`properties.template` is missing required property: `scorecardId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getScorecard_params._super.constructor.apply(this, arguments);
        }

        return getScorecard_params;
    })();

    return Object.create(null, {
        getScorecard: { value: getScorecard, enumerable: true }
    });
})();

var $search = (function(){
    function createSearch(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createSearch.params)) {
            try {
                params = new createSearch.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createSearch.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['202'] = function(o){ return (o instanceof Common.AsyncOperationAcceptedResponse) ? o : new Common.AsyncOperationAcceptedResponse(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createSearch.method, createSearch.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createSearch, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/agent-quality/search', enumerable: true }
    });

    createSearch.params = (function(){
        _util.inherits(createSearch_params, _util.RequestParams);

        function createSearch_params(properties) {
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
            if (!(properties.content instanceof QualityManagement.CreateSearchRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: QualityManagement.CreateSearchRequest');
            }

            createSearch_params._super.constructor.apply(this, arguments);
        }

        return createSearch_params;
    })();

    function getSearchChunk(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSearchChunk.params)) {
            try {
                params = new getSearchChunk.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSearchChunk.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof QualityManagement.GetMoreSearchResultsResponse) ? o : new QualityManagement.GetMoreSearchResultsResponse(o); };
        dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSearchChunk.method, getSearchChunk.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSearchChunk, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/agent-quality/search/{searchId}', enumerable: true }
    });

    getSearchChunk.params = (function(){
        _util.inherits(getSearchChunk_params, _util.RequestParams);

        function getSearchChunk_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, searchId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'searchId')) {
                throw new Error('`properties.template` is missing required property: `searchId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getSearchChunk_params._super.constructor.apply(this, arguments);
        }

        return getSearchChunk_params;
    })();

    function deleteSearch(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSearch.params)) {
            try {
                params = new deleteSearch.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSearch.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSearch.method, deleteSearch.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSearch, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/agent-quality/search/{searchId}', enumerable: true }
    });

    deleteSearch.params = (function(){
        _util.inherits(deleteSearch_params, _util.RequestParams);

        function deleteSearch_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, searchId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'searchId')) {
                throw new Error('`properties.template` is missing required property: `searchId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteSearch_params._super.constructor.apply(this, arguments);
        }

        return deleteSearch_params;
    })();

    return Object.create(null, {
        createSearch: { value: createSearch, enumerable: true },
        getSearchChunk: { value: getSearchChunk, enumerable: true },
        deleteSearch: { value: deleteSearch, enumerable: true }
    });
})();

exports.$questionnaires = $questionnaires;
exports.$questionnaireDirectories = $questionnaireDirectories;
exports.$rankGroups = $rankGroups;
exports.$scorecards = $scorecards;
exports.$search = $search;
