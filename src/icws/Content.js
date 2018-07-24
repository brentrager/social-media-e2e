/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');

var Bucket = (function(){
    var hasProps = false;

    function Bucket() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:content:bucket' });
        }

        Bucket._super.constructor.apply(this, arguments);
    }
    _util.inherits(Bucket, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Bucket.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Bucket.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Bucket, '__type', { value: 'urn:inin.com:content:bucket' });

    Object.defineProperty(Bucket, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:content:bucket'] = Bucket;

    return Bucket;
}());

var AsyncRequests = (function(){
    var hasProps = false;

    function AsyncRequests() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:content:asyncRequests' });
        }

        AsyncRequests._super.constructor.apply(this, arguments);
    }
    _util.inherits(AsyncRequests, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AsyncRequests.prototype, 'asyncContentRequestList', {
            get: function() { return this.__prop_asyncContentRequestList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ContentAsyncRequestId); }))) {
                    try {
                        value = value.map(function(item){ return new ContentAsyncRequestId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AsyncRequests.asyncContentRequestList: ' + e.message);
                    }
                }

                this.__prop_asyncContentRequestList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AsyncRequests, '__type', { value: 'urn:inin.com:content:asyncRequests' });

    Object.defineProperty(AsyncRequests, '__propInfo', {
        get: function() {
            var pi = {
                'asyncContentRequestList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:content:asyncRequests'] = AsyncRequests;

    return AsyncRequests;
}());

var Buckets = (function(){
    var hasProps = false;

    function Buckets() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:content:buckets' });
        }

        Buckets._super.constructor.apply(this, arguments);
    }
    _util.inherits(Buckets, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Buckets.prototype, 'bucketList', {
            get: function() { return this.__prop_bucketList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StringMapBucket); }))) {
                    try {
                        value = value.map(function(item){ return new StringMapBucket(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Buckets.bucketList: ' + e.message);
                    }
                }

                this.__prop_bucketList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Buckets, '__type', { value: 'urn:inin.com:content:buckets' });

    Object.defineProperty(Buckets, '__propInfo', {
        get: function() {
            var pi = {
                'bucketList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:content:buckets'] = Buckets;

    return Buckets;
}());

var BucketMapResponse = (function(){
    var hasProps = false;

    function BucketMapResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:content:bucketMapResponse' });
        }

        BucketMapResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(BucketMapResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BucketMapResponse.prototype, 'content', {
            get: function() { return this.__prop_content; },
            set: function(value) {
                if (!(value instanceof StringMapBucket || value === void 0)) {
                    try {
                        value = new StringMapBucket(value);
                    } catch (e) {
                        throw new TypeError('Error setting BucketMapResponse.content: ' + e.message);
                    }
                }

                this.__prop_content = value;
            },
            enumerable: true
        });

        Object.defineProperty(BucketMapResponse.prototype, 'cacheTag', {
            get: function() { return this.__prop_cacheTag; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BucketMapResponse.cacheTag, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_cacheTag = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BucketMapResponse, '__type', { value: 'urn:inin.com:content:bucketMapResponse' });

    Object.defineProperty(BucketMapResponse, '__propInfo', {
        get: function() {
            var pi = {
                'content': { required: false, nullable: false },
                'cacheTag': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:content:bucketMapResponse'] = BucketMapResponse;

    return BucketMapResponse;
}());

var ContentCacheTag = (function(){
    var hasProps = false;

    function ContentCacheTag() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:content:contentCacheTag' });
        }

        ContentCacheTag._super.constructor.apply(this, arguments);
    }
    _util.inherits(ContentCacheTag, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ContentCacheTag.prototype, 'cacheTag', {
            get: function() { return this.__prop_cacheTag; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ContentCacheTag.cacheTag, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_cacheTag = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ContentCacheTag, '__type', { value: 'urn:inin.com:content:contentCacheTag' });

    Object.defineProperty(ContentCacheTag, '__propInfo', {
        get: function() {
            var pi = {
                'cacheTag': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:content:contentCacheTag'] = ContentCacheTag;

    return ContentCacheTag;
}());

var StringMapBucket = (function(){
    var hasProps = false;

    function StringMapBucket() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:content:stringMapBucket', enumerable: true });
        }

        StringMapBucket._super.constructor.apply(this, arguments);
    }
    _util.inherits(StringMapBucket, Bucket);

    function defineProps() {
        Object.defineProperty(StringMapBucket.prototype, 'content', {
            get: function() { return this.__prop_content; },
            set: function(value) {
                if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }))) {
                    throw new TypeError('Expected type String{} for StringMapBucket.content, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_content = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StringMapBucket, '__type', { value: 'urn:inin.com:content:stringMapBucket' });

    Object.defineProperty(StringMapBucket, '__propInfo', {
        get: function() {
            var pi = {
                'content': { required: true, nullable: false }
            };
            if (Bucket.__propInfo) { _util.extend(pi, Bucket.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:content:stringMapBucket'] = StringMapBucket;

    return StringMapBucket;
}());

var FileBucket = (function(){
    var hasProps = false;

    function FileBucket() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:content:fileBucket', enumerable: true });
        }

        FileBucket._super.constructor.apply(this, arguments);
    }
    _util.inherits(FileBucket, Bucket);

    function defineProps() {
        Object.defineProperty(FileBucket.prototype, 'content', {
            get: function() { return this.__prop_content; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for FileBucket.content, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_content = value;
            },
            enumerable: true
        });

        Object.defineProperty(FileBucket.prototype, 'mimeType', {
            get: function() { return this.__prop_mimeType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for FileBucket.mimeType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mimeType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FileBucket, '__type', { value: 'urn:inin.com:content:fileBucket' });

    Object.defineProperty(FileBucket, '__propInfo', {
        get: function() {
            var pi = {
                'content': { required: true, nullable: false },
                'mimeType': { required: true, nullable: false }
            };
            if (Bucket.__propInfo) { _util.extend(pi, Bucket.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:content:fileBucket'] = FileBucket;

    return FileBucket;
}());

var ContentAsyncRequestId = (function(){
    var hasProps = false;

    function ContentAsyncRequestId() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:content:contentAsyncRequestId', enumerable: true });
        }

        ContentAsyncRequestId._super.constructor.apply(this, arguments);
    }
    _util.inherits(ContentAsyncRequestId, Common.AsyncOperationAcceptedResponse);

    function defineProps() {
        Object.defineProperty(ContentAsyncRequestId.prototype, 'bucketName', {
            get: function() { return this.__prop_bucketName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ContentAsyncRequestId.bucketName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_bucketName = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ContentAsyncRequestId, '__type', { value: 'urn:inin.com:content:contentAsyncRequestId' });

    Object.defineProperty(ContentAsyncRequestId, '__propInfo', {
        get: function() {
            var pi = {
                'bucketName': { required: true, nullable: false }
            };
            if (Common.AsyncOperationAcceptedResponse.__propInfo) { _util.extend(pi, Common.AsyncOperationAcceptedResponse.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:content:contentAsyncRequestId'] = ContentAsyncRequestId;

    return ContentAsyncRequestId;
}());

var AsyncContentResultMessage = (function(){
    var hasProps = false;

    function AsyncContentResultMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:content:asyncContentResultMessage', enumerable: true });
        }

        AsyncContentResultMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AsyncContentResultMessage, Messaging.AsyncOperationCompletedMessage);

    function defineProps() {
        Object.defineProperty(AsyncContentResultMessage.prototype, 'content', {
            get: function() { return this.__prop_content; },
            set: function(value) {
                if (!(value instanceof Bucket || value === void 0)) {
                    try {
                        value = new Bucket(value);
                    } catch (e) {
                        throw new TypeError('Error setting AsyncContentResultMessage.content: ' + e.message);
                    }
                }

                this.__prop_content = value;
            },
            enumerable: true
        });

        Object.defineProperty(AsyncContentResultMessage.prototype, 'clientStateIsFresh', {
            get: function() { return this.__prop_clientStateIsFresh; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for AsyncContentResultMessage.clientStateIsFresh, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_clientStateIsFresh = value;
            },
            enumerable: true
        });

        Object.defineProperty(AsyncContentResultMessage.prototype, 'cacheTag', {
            get: function() { return this.__prop_cacheTag; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AsyncContentResultMessage.cacheTag, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_cacheTag = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AsyncContentResultMessage, '__type', { value: 'urn:inin.com:content:asyncContentResultMessage' });

    Object.defineProperty(AsyncContentResultMessage, '__propInfo', {
        get: function() {
            var pi = {
                'content': { required: false, nullable: false },
                'clientStateIsFresh': { required: false, nullable: false },
                'cacheTag': { required: true, nullable: false }
            };
            if (Messaging.AsyncOperationCompletedMessage.__propInfo) { _util.extend(pi, Messaging.AsyncOperationCompletedMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:content:asyncContentResultMessage'] = AsyncContentResultMessage;

    return AsyncContentResultMessage;
}());

var AsyncStatusResultMessage = (function(){
    var hasProps = false;

    function AsyncStatusResultMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:content:asyncStatusResultMessage', enumerable: true });
        }

        AsyncStatusResultMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AsyncStatusResultMessage, Messaging.AsyncOperationCompletedMessage);

    function defineProps() {
        Object.defineProperty(AsyncStatusResultMessage.prototype, 'status', {
            get: function() { return this.__prop_status; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for AsyncStatusResultMessage.status, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_status = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AsyncStatusResultMessage, '__type', { value: 'urn:inin.com:content:asyncStatusResultMessage' });

    Object.defineProperty(AsyncStatusResultMessage, '__propInfo', {
        get: function() {
            var pi = {
                'status': { required: true, nullable: false }
            };
            if (Messaging.AsyncOperationCompletedMessage.__propInfo) { _util.extend(pi, Messaging.AsyncOperationCompletedMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:content:asyncStatusResultMessage'] = AsyncStatusResultMessage;

    return AsyncStatusResultMessage;
}());

var $buckets = (function(){
    function getBuckets(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getBuckets.params)) {
            try {
                params = new getBuckets.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getBuckets.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['202'] = function(o){ return (o instanceof AsyncRequests) ? o : new AsyncRequests(o); };
        dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getBuckets.method, getBuckets.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getBuckets, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/content/buckets', enumerable: true }
    });

    getBuckets.params = (function(){
        _util.inherits(getBuckets_params, _util.RequestParams);

        function getBuckets_params(properties) {
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

            getBuckets_params._super.constructor.apply(this, arguments);
        }

        return getBuckets_params;
    })();

    function postBuckets(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof postBuckets.params)) {
            try {
                params = new postBuckets.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: postBuckets.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['202'] = function(o){ return (o instanceof AsyncRequests) ? o : new AsyncRequests(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(postBuckets.method, postBuckets.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(postBuckets, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/content/buckets', enumerable: true }
    });

    postBuckets.params = (function(){
        _util.inherits(postBuckets_params, _util.RequestParams);

        function postBuckets_params(properties) {
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
            if (!(properties.content instanceof Buckets)) {
                throw new TypeError('`properties.content` value does not match the expected type: Content.Buckets');
            }

            postBuckets_params._super.constructor.apply(this, arguments);
        }

        return postBuckets_params;
    })();

    function getBucket(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getBucket.params)) {
            try {
                params = new getBucket.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getBucket.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof BucketMapResponse) ? o : new BucketMapResponse(o); };
        dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getBucket.method, getBucket.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getBucket, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/content/buckets/{bucketId}', enumerable: true }
    });

    getBucket.params = (function(){
        _util.inherits(getBucket_params, _util.RequestParams);

        function getBucket_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, bucketId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'bucketId')) {
                throw new Error('`properties.template` is missing required property: `bucketId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getBucket_params._super.constructor.apply(this, arguments);
        }

        return getBucket_params;
    })();

    function putBucket(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof putBucket.params)) {
            try {
                params = new putBucket.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: putBucket.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ContentCacheTag) ? o : new ContentCacheTag(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(putBucket.method, putBucket.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(putBucket, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/content/buckets/{bucketId}', enumerable: true }
    });

    putBucket.params = (function(){
        _util.inherits(putBucket_params, _util.RequestParams);

        function putBucket_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, bucketId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'bucketId')) {
                throw new Error('`properties.template` is missing required property: `bucketId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof StringMapBucket)) {
                throw new TypeError('`properties.content` value does not match the expected type: Content.StringMapBucket');
            }

            putBucket_params._super.constructor.apply(this, arguments);
        }

        return putBucket_params;
    })();

    function deleteBucket(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteBucket.params)) {
            try {
                params = new deleteBucket.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteBucket.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteBucket.method, deleteBucket.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteBucket, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/content/buckets/{bucketId}', enumerable: true }
    });

    deleteBucket.params = (function(){
        _util.inherits(deleteBucket_params, _util.RequestParams);

        function deleteBucket_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, bucketId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'bucketId')) {
                throw new Error('`properties.template` is missing required property: `bucketId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteBucket_params._super.constructor.apply(this, arguments);
        }

        return deleteBucket_params;
    })();

    return Object.create(null, {
        getBuckets: { value: getBuckets, enumerable: true },
        postBuckets: { value: postBuckets, enumerable: true },
        getBucket: { value: getBucket, enumerable: true },
        putBucket: { value: putBucket, enumerable: true },
        deleteBucket: { value: deleteBucket, enumerable: true }
    });
})();

exports.AsyncContentResultMessage = AsyncContentResultMessage;
exports.Bucket = Bucket;
exports.StringMapBucket = StringMapBucket;
exports.FileBucket = FileBucket;
exports.AsyncStatusResultMessage = AsyncStatusResultMessage;
exports.ContentAsyncRequestId = ContentAsyncRequestId;
exports.AsyncRequests = AsyncRequests;
exports.Buckets = Buckets;
exports.BucketMapResponse = BucketMapResponse;
exports.ContentCacheTag = ContentCacheTag;
exports.$buckets = $buckets;
