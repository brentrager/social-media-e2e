/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Interactions_SocialMedia = require('./Interactions.SocialMedia');
var Common = require('./Common');

var ModifiedPost = (function(){
    var hasProps = false;

    function ModifiedPost() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.conversation:modifiedPost' });
        }

        ModifiedPost._super.constructor.apply(this, arguments);
    }
    _util.inherits(ModifiedPost, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ModifiedPost.prototype, 'content', {
            get: function() { return this.__prop_content; },
            set: function(value) {
                if (!(value instanceof Interactions_SocialMedia.Content)) {
                    try {
                        value = new Interactions_SocialMedia.Content(value);
                    } catch (e) {
                        throw new TypeError('Error setting ModifiedPost.content: ' + e.message);
                    }
                }

                this.__prop_content = value;
            },
            enumerable: true
        });

        Object.defineProperty(ModifiedPost.prototype, 'postId', {
            get: function() { return this.__prop_postId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ModifiedPost.postId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_postId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ModifiedPost, '__type', { value: 'urn:inin.com:interactions.conversation:modifiedPost' });

    Object.defineProperty(ModifiedPost, '__propInfo', {
        get: function() {
            var pi = {
                'content': { required: true, nullable: false },
                'postId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.conversation:modifiedPost'] = ModifiedPost;

    return ModifiedPost;
}());

var PostsIds = (function(){
    var hasProps = false;

    function PostsIds() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.conversation:postsIds' });
        }

        PostsIds._super.constructor.apply(this, arguments);
    }
    _util.inherits(PostsIds, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PostsIds.prototype, 'posts', {
            get: function() { return this.__prop_posts; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for PostsIds.posts, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_posts = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PostsIds, '__type', { value: 'urn:inin.com:interactions.conversation:postsIds' });

    Object.defineProperty(PostsIds, '__propInfo', {
        get: function() {
            var pi = {
                'posts': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.conversation:postsIds'] = PostsIds;

    return PostsIds;
}());

var PostsLocations = (function(){
    var hasProps = false;

    function PostsLocations() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.conversation:postsLocations' });
        }

        PostsLocations._super.constructor.apply(this, arguments);
    }
    _util.inherits(PostsLocations, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PostsLocations.prototype, 'posts', {
            get: function() { return this.__prop_posts; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PostLocation); }) || value === null)) {
                    try {
                        value = value.map(function(item){ return new PostLocation(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PostsLocations.posts: ' + e.message);
                    }
                }

                this.__prop_posts = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PostsLocations, '__type', { value: 'urn:inin.com:interactions.conversation:postsLocations' });

    Object.defineProperty(PostsLocations, '__propInfo', {
        get: function() {
            var pi = {
                'posts': { required: true, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.conversation:postsLocations'] = PostsLocations;

    return PostsLocations;
}());

var PostLocation = (function(){
    var hasProps = false;

    function PostLocation() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.conversation:postLocation' });
        }

        PostLocation._super.constructor.apply(this, arguments);
    }
    _util.inherits(PostLocation, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PostLocation.prototype, 'postId', {
            get: function() { return this.__prop_postId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PostLocation.postId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_postId = value;
            },
            enumerable: true
        });

        Object.defineProperty(PostLocation.prototype, 'location', {
            get: function() { return this.__prop_location; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === null)) {
                    throw new TypeError('Expected type String[] for PostLocation.location, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_location = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PostLocation, '__type', { value: 'urn:inin.com:interactions.conversation:postLocation' });

    Object.defineProperty(PostLocation, '__propInfo', {
        get: function() {
            var pi = {
                'postId': { required: true, nullable: false },
                'location': { required: true, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.conversation:postLocation'] = PostLocation;

    return PostLocation;
}());

var PostUpdate = (function(){
    var hasProps = false;

    function PostUpdate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.conversation:postUpdate' });
        }

        PostUpdate._super.constructor.apply(this, arguments);
    }
    _util.inherits(PostUpdate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PostUpdate.prototype, 'hide', {
            get: function() { return this.__prop_hide; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PostUpdate.hide, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hide = value;
            },
            enumerable: true
        });

        Object.defineProperty(PostUpdate.prototype, 'text', {
            get: function() { return this.__prop_text; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PostUpdate.text, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_text = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PostUpdate, '__type', { value: 'urn:inin.com:interactions.conversation:postUpdate' });

    Object.defineProperty(PostUpdate, '__propInfo', {
        get: function() {
            var pi = {
                'hide': { required: false, nullable: false },
                'text': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.conversation:postUpdate'] = PostUpdate;

    return PostUpdate;
}());

var NillablePostsIds = (function(){
    var hasProps = false;

    function NillablePostsIds() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.conversation:nillablePostsIds' });
        }

        NillablePostsIds._super.constructor.apply(this, arguments);
    }
    _util.inherits(NillablePostsIds, _util.DataContract);

    function defineProps() {
        Object.defineProperty(NillablePostsIds.prototype, 'posts', {
            get: function() { return this.__prop_posts; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === null)) {
                    throw new TypeError('Expected type String[] for NillablePostsIds.posts, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_posts = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(NillablePostsIds, '__type', { value: 'urn:inin.com:interactions.conversation:nillablePostsIds' });

    Object.defineProperty(NillablePostsIds, '__propInfo', {
        get: function() {
            var pi = {
                'posts': { required: true, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.conversation:nillablePostsIds'] = NillablePostsIds;

    return NillablePostsIds;
}());

var PostedId = (function(){
    var hasProps = false;

    function PostedId() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.conversation:postedId' });
        }

        PostedId._super.constructor.apply(this, arguments);
    }
    _util.inherits(PostedId, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PostedId.prototype, 'postId', {
            get: function() { return this.__prop_postId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PostedId.postId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_postId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PostedId, '__type', { value: 'urn:inin.com:interactions.conversation:postedId' });

    Object.defineProperty(PostedId, '__propInfo', {
        get: function() {
            var pi = {
                'postId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.conversation:postedId'] = PostedId;

    return PostedId;
}());

var PostsContents = (function(){
    var hasProps = false;

    function PostsContents() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.conversation:postsContents' });
        }

        PostsContents._super.constructor.apply(this, arguments);
    }
    _util.inherits(PostsContents, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PostsContents.prototype, 'posts', {
            get: function() { return this.__prop_posts; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PostContent); }))) {
                    try {
                        value = value.map(function(item){ return new PostContent(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PostsContents.posts: ' + e.message);
                    }
                }

                this.__prop_posts = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PostsContents, '__type', { value: 'urn:inin.com:interactions.conversation:postsContents' });

    Object.defineProperty(PostsContents, '__propInfo', {
        get: function() {
            var pi = {
                'posts': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.conversation:postsContents'] = PostsContents;

    return PostsContents;
}());

var PostContent = (function(){
    var hasProps = false;

    function PostContent() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.conversation:postContent' });
        }

        PostContent._super.constructor.apply(this, arguments);
    }
    _util.inherits(PostContent, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PostContent.prototype, 'from', {
            get: function() { return this.__prop_from; },
            set: function(value) {
                if (!(value instanceof Interactions_SocialMedia.From)) {
                    try {
                        value = new Interactions_SocialMedia.From(value);
                    } catch (e) {
                        throw new TypeError('Error setting PostContent.from: ' + e.message);
                    }
                }

                this.__prop_from = value;
            },
            enumerable: true
        });

        Object.defineProperty(PostContent.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PostContent.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(PostContent.prototype, 'hidden', {
            get: function() { return this.__prop_hidden; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for PostContent.hidden, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hidden = value;
            },
            enumerable: true
        });

        Object.defineProperty(PostContent.prototype, 'contents', {
            get: function() { return this.__prop_contents; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ContentRevisions); }))) {
                    try {
                        value = value.map(function(item){ return new ContentRevisions(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PostContent.contents: ' + e.message);
                    }
                }

                this.__prop_contents = value;
            },
            enumerable: true
        });

        Object.defineProperty(PostContent.prototype, 'allowHide', {
            get: function() { return this.__prop_allowHide; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PostContent.allowHide, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowHide = value;
            },
            enumerable: true
        });

        Object.defineProperty(PostContent.prototype, 'allowEdit', {
            get: function() { return this.__prop_allowEdit; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PostContent.allowEdit, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowEdit = value;
            },
            enumerable: true
        });

        Object.defineProperty(PostContent.prototype, 'allowReply', {
            get: function() { return this.__prop_allowReply; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PostContent.allowReply, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowReply = value;
            },
            enumerable: true
        });

        Object.defineProperty(PostContent.prototype, 'allowLike', {
            get: function() { return this.__prop_allowLike; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for PostContent.allowLike, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowLike = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PostContent, '__type', { value: 'urn:inin.com:interactions.conversation:postContent' });

    Object.defineProperty(PostContent, '__propInfo', {
        get: function() {
            var pi = {
                'from': { required: true, nullable: false },
                'id': { required: true, nullable: false },
                'hidden': { required: true, nullable: false },
                'contents': { required: true, nullable: false },
                'allowHide': { required: false, nullable: false },
                'allowEdit': { required: false, nullable: false },
                'allowReply': { required: false, nullable: false },
                'allowLike': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.conversation:postContent'] = PostContent;

    return PostContent;
}());

var ContentRevisions = (function(){
    var hasProps = false;

    function ContentRevisions() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.conversation:contentRevisions' });
        }

        ContentRevisions._super.constructor.apply(this, arguments);
    }
    _util.inherits(ContentRevisions, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ContentRevisions.prototype, 'time', {
            get: function() { return this.__prop_time; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for ContentRevisions.time, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_time = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContentRevisions.prototype, 'text', {
            get: function() { return this.__prop_text; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ContentRevisions.text, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_text = value;
            },
            enumerable: true
        });

        Object.defineProperty(ContentRevisions.prototype, 'images', {
            get: function() { return this.__prop_images; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === null)) {
                    throw new TypeError('Expected type String[] for ContentRevisions.images, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_images = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ContentRevisions, '__type', { value: 'urn:inin.com:interactions.conversation:contentRevisions' });

    Object.defineProperty(ContentRevisions, '__propInfo', {
        get: function() {
            var pi = {
                'time': { required: true, nullable: false },
                'text': { required: true, nullable: false },
                'images': { required: true, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.conversation:contentRevisions'] = ContentRevisions;

    return ContentRevisions;
}());

var ModifiedPosts = (function(){
    var hasProps = false;

    function ModifiedPosts() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.conversation:modifiedPosts', enumerable: true });
        }

        ModifiedPosts._super.constructor.apply(this, arguments);
    }
    _util.inherits(ModifiedPosts, Messaging.Message);

    function defineProps() {
        Object.defineProperty(ModifiedPosts.prototype, 'changes', {
            get: function() { return this.__prop_changes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ModifiedPost); }))) {
                    try {
                        value = value.map(function(item){ return new ModifiedPost(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ModifiedPosts.changes: ' + e.message);
                    }
                }

                this.__prop_changes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ModifiedPosts, '__type', { value: 'urn:inin.com:interactions.conversation:modifiedPosts' });

    Object.defineProperty(ModifiedPosts, '__propInfo', {
        get: function() {
            var pi = {
                'changes': { required: true, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.conversation:modifiedPosts'] = ModifiedPosts;

    return ModifiedPosts;
}());

var $images = (function(){
    function conversationGetImage(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof conversationGetImage.params)) {
            try {
                params = new conversationGetImage.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: conversationGetImage.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Interactions_SocialMedia.SocialMediaImage) ? o : new Interactions_SocialMedia.SocialMediaImage(o); };
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(conversationGetImage.method, conversationGetImage.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(conversationGetImage, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/conversation/images/{imageId}', enumerable: true }
    });

    conversationGetImage.params = (function(){
        _util.inherits(conversationGetImage_params, _util.RequestParams);

        function conversationGetImage_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId, imageId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (!_util.hasProp(properties.template, 'imageId')) {
                throw new Error('`properties.template` is missing required property: `imageId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            conversationGetImage_params._super.constructor.apply(this, arguments);
        }

        return conversationGetImage_params;
    })();

    return Object.create(null, {
        conversationGetImage: { value: conversationGetImage, enumerable: true }
    });
})();

var $locatePosts = (function(){
    function conversationLocatePosts(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof conversationLocatePosts.params)) {
            try {
                params = new conversationLocatePosts.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: conversationLocatePosts.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof PostsLocations) ? o : new PostsLocations(o); };
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(conversationLocatePosts.method, conversationLocatePosts.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(conversationLocatePosts, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/conversation/locate-posts', enumerable: true }
    });

    conversationLocatePosts.params = (function(){
        _util.inherits(conversationLocatePosts_params, _util.RequestParams);

        function conversationLocatePosts_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof PostsIds)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Conversation.PostsIds');
            }

            conversationLocatePosts_params._super.constructor.apply(this, arguments);
        }

        return conversationLocatePosts_params;
    })();

    return Object.create(null, {
        conversationLocatePosts: { value: conversationLocatePosts, enumerable: true }
    });
})();

var $posts = (function(){
    function conversationUpdatePost(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof conversationUpdatePost.params)) {
            try {
                params = new conversationUpdatePost.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: conversationUpdatePost.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(conversationUpdatePost.method, conversationUpdatePost.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(conversationUpdatePost, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/conversation/posts/{conversationPostId}', enumerable: true }
    });

    conversationUpdatePost.params = (function(){
        _util.inherits(conversationUpdatePost_params, _util.RequestParams);

        function conversationUpdatePost_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId, conversationPostId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (!_util.hasProp(properties.template, 'conversationPostId')) {
                throw new Error('`properties.template` is missing required property: `conversationPostId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof PostUpdate)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Conversation.PostUpdate');
            }

            conversationUpdatePost_params._super.constructor.apply(this, arguments);
        }

        return conversationUpdatePost_params;
    })();

    return Object.create(null, {
        conversationUpdatePost: { value: conversationUpdatePost, enumerable: true }
    });
})();

var $queryPosts = (function(){
    function conversationQueryPosts(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof conversationQueryPosts.params)) {
            try {
                params = new conversationQueryPosts.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: conversationQueryPosts.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof PostsContents) ? o : new PostsContents(o); };
        dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(conversationQueryPosts.method, conversationQueryPosts.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(conversationQueryPosts, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/conversation/query-posts', enumerable: true }
    });

    conversationQueryPosts.params = (function(){
        _util.inherits(conversationQueryPosts_params, _util.RequestParams);

        function conversationQueryPosts_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'interactionId')) {
                throw new Error('`properties.template` is missing required property: `interactionId`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof PostsIds)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Conversation.PostsIds');
            }

            conversationQueryPosts_params._super.constructor.apply(this, arguments);
        }

        return conversationQueryPosts_params;
    })();

    return Object.create(null, {
        conversationQueryPosts: { value: conversationQueryPosts, enumerable: true }
    });
})();

exports.ModifiedPosts = ModifiedPosts;
exports.ModifiedPost = ModifiedPost;
exports.PostsIds = PostsIds;
exports.PostsLocations = PostsLocations;
exports.PostLocation = PostLocation;
exports.PostUpdate = PostUpdate;
exports.NillablePostsIds = NillablePostsIds;
exports.PostedId = PostedId;
exports.PostsContents = PostsContents;
exports.PostContent = PostContent;
exports.ContentRevisions = ContentRevisions;
exports.$images = $images;
exports.$locatePosts = $locatePosts;
exports.$posts = $posts;
exports.$queryPosts = $queryPosts;
