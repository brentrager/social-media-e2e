/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');

var Content = (function(){
    var hasProps = false;

    function Content() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.socialMedia:content' });
        }

        Content._super.constructor.apply(this, arguments);
    }
    _util.inherits(Content, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Content.prototype, 'time', {
            get: function() { return this.__prop_time; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for Content.time, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_time = value;
            },
            enumerable: true
        });

        Object.defineProperty(Content.prototype, 'text', {
            get: function() { return this.__prop_text; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Content.text, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_text = value;
            },
            enumerable: true
        });

        Object.defineProperty(Content.prototype, 'images', {
            get: function() { return this.__prop_images; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === null)) {
                    throw new TypeError('Expected type String[] for Content.images, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_images = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Content, '__type', { value: 'urn:inin.com:interactions.socialMedia:content' });

    Object.defineProperty(Content, '__propInfo', {
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

    _typemap['urn:inin.com:interactions.socialMedia:content'] = Content;

    return Content;
}());

var From = (function(){
    var hasProps = false;

    function From() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.socialMedia:from' });
        }

        From._super.constructor.apply(this, arguments);
    }
    _util.inherits(From, _util.DataContract);

    function defineProps() {
        Object.defineProperty(From.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for From.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(From.prototype, 'screenName', {
            get: function() { return this.__prop_screenName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for From.screenName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_screenName = value;
            },
            enumerable: true
        });

        Object.defineProperty(From.prototype, 'agent', {
            get: function() { return this.__prop_agent; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for From.agent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_agent = value;
            },
            enumerable: true
        });

        Object.defineProperty(From.prototype, 'pictureURL', {
            get: function() { return this.__prop_pictureURL; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for From.pictureURL, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_pictureURL = value;
            },
            enumerable: true
        });

        Object.defineProperty(From.prototype, 'followers', {
            get: function() { return this.__prop_followers; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for From.followers, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_followers = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(From, '__type', { value: 'urn:inin.com:interactions.socialMedia:from' });

    Object.defineProperty(From, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'screenName': { required: false, nullable: false },
                'agent': { required: false, nullable: false },
                'pictureURL': { required: false, nullable: false },
                'followers': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.socialMedia:from'] = From;

    return From;
}());

var SocialMediaImage = (function(){
    var hasProps = false;

    function SocialMediaImage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.socialMedia:socialMediaImage' });
        }

        SocialMediaImage._super.constructor.apply(this, arguments);
    }
    _util.inherits(SocialMediaImage, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SocialMediaImage.prototype, 'contentType', {
            get: function() { return this.__prop_contentType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SocialMediaImage.contentType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_contentType = value;
            },
            enumerable: true
        });

        Object.defineProperty(SocialMediaImage.prototype, 'image', {
            get: function() { return this.__prop_image; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SocialMediaImage.image, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_image = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SocialMediaImage, '__type', { value: 'urn:inin.com:interactions.socialMedia:socialMediaImage' });

    Object.defineProperty(SocialMediaImage, '__propInfo', {
        get: function() {
            var pi = {
                'contentType': { required: true, nullable: false },
                'image': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.socialMedia:socialMediaImage'] = SocialMediaImage;

    return SocialMediaImage;
}());

var SocialMediaText = (function(){
    var hasProps = false;

    function SocialMediaText() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.socialMedia:socialMediaText' });
        }

        SocialMediaText._super.constructor.apply(this, arguments);
    }
    _util.inherits(SocialMediaText, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SocialMediaText.prototype, 'text', {
            get: function() { return this.__prop_text; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SocialMediaText.text, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_text = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SocialMediaText, '__type', { value: 'urn:inin.com:interactions.socialMedia:socialMediaText' });

    Object.defineProperty(SocialMediaText, '__propInfo', {
        get: function() {
            var pi = {
                'text': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.socialMedia:socialMediaText'] = SocialMediaText;

    return SocialMediaText;
}());

exports.Content = Content;
exports.From = From;
exports.SocialMediaImage = SocialMediaImage;
exports.SocialMediaText = SocialMediaText;
