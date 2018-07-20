/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var SocialMediaConfigurationResponse = (function(){
    var hasProps = false;

    function SocialMediaConfigurationResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:socialMediaConfigurationResponse' });
        }

        SocialMediaConfigurationResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(SocialMediaConfigurationResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SocialMediaConfigurationResponse.prototype, 'hub', {
            get: function() { return this.__prop_hub; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SocialMediaConfigurationResponse.hub, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hub = value;
            },
            enumerable: true
        });

        Object.defineProperty(SocialMediaConfigurationResponse.prototype, 'socialMediaProcessor', {
            get: function() { return this.__prop_socialMediaProcessor; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SocialMediaConfigurationResponse.socialMediaProcessor, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialMediaProcessor = value;
            },
            enumerable: true
        });

        Object.defineProperty(SocialMediaConfigurationResponse.prototype, 'socialMediaProcessor2', {
            get: function() { return this.__prop_socialMediaProcessor2; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for SocialMediaConfigurationResponse.socialMediaProcessor2, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialMediaProcessor2 = value;
            },
            enumerable: true
        });

        Object.defineProperty(SocialMediaConfigurationResponse.prototype, 'socialMediaProcessorSecret', {
            get: function() { return this.__prop_socialMediaProcessorSecret; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SocialMediaConfigurationResponse.socialMediaProcessorSecret, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialMediaProcessorSecret = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SocialMediaConfigurationResponse, '__type', { value: 'urn:inin.com:socialMedia:socialMediaConfigurationResponse' });

    Object.defineProperty(SocialMediaConfigurationResponse, '__propInfo', {
        get: function() {
            var pi = {
                'hub': { required: true, nullable: false },
                'socialMediaProcessor': { required: true, nullable: false },
                'socialMediaProcessor2': { required: false, nullable: false },
                'socialMediaProcessorSecret': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:socialMediaConfigurationResponse'] = SocialMediaConfigurationResponse;

    return SocialMediaConfigurationResponse;
}());

var SocialMediaConfigurationRequest = (function(){
    var hasProps = false;

    function SocialMediaConfigurationRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:socialMediaConfigurationRequest' });
        }

        SocialMediaConfigurationRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(SocialMediaConfigurationRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SocialMediaConfigurationRequest.prototype, 'hub', {
            get: function() { return this.__prop_hub; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SocialMediaConfigurationRequest.hub, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hub = value;
            },
            enumerable: true
        });

        Object.defineProperty(SocialMediaConfigurationRequest.prototype, 'socialMediaProcessor', {
            get: function() { return this.__prop_socialMediaProcessor; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SocialMediaConfigurationRequest.socialMediaProcessor, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialMediaProcessor = value;
            },
            enumerable: true
        });

        Object.defineProperty(SocialMediaConfigurationRequest.prototype, 'socialMediaProcessor2', {
            get: function() { return this.__prop_socialMediaProcessor2; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for SocialMediaConfigurationRequest.socialMediaProcessor2, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialMediaProcessor2 = value;
            },
            enumerable: true
        });

        Object.defineProperty(SocialMediaConfigurationRequest.prototype, 'socialMediaProcessorSecret', {
            get: function() { return this.__prop_socialMediaProcessorSecret; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SocialMediaConfigurationRequest.socialMediaProcessorSecret, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialMediaProcessorSecret = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SocialMediaConfigurationRequest, '__type', { value: 'urn:inin.com:socialMedia:socialMediaConfigurationRequest' });

    Object.defineProperty(SocialMediaConfigurationRequest, '__propInfo', {
        get: function() {
            var pi = {
                'hub': { required: true, nullable: false },
                'socialMediaProcessor': { required: true, nullable: false },
                'socialMediaProcessor2': { required: false, nullable: false },
                'socialMediaProcessorSecret': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:socialMediaConfigurationRequest'] = SocialMediaConfigurationRequest;

    return SocialMediaConfigurationRequest;
}());

var GenesysHubConfigurationResponse = (function(){
    var hasProps = false;

    function GenesysHubConfigurationResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:genesysHubConfigurationResponse' });
        }

        GenesysHubConfigurationResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(GenesysHubConfigurationResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(GenesysHubConfigurationResponse.prototype, 'email', {
            get: function() { return this.__prop_email; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for GenesysHubConfigurationResponse.email, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_email = value;
            },
            enumerable: true
        });

        Object.defineProperty(GenesysHubConfigurationResponse.prototype, 'password', {
            get: function() { return this.__prop_password; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for GenesysHubConfigurationResponse.password, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_password = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(GenesysHubConfigurationResponse, '__type', { value: 'urn:inin.com:socialMedia:genesysHubConfigurationResponse' });

    Object.defineProperty(GenesysHubConfigurationResponse, '__propInfo', {
        get: function() {
            var pi = {
                'email': { required: true, nullable: false },
                'password': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:genesysHubConfigurationResponse'] = GenesysHubConfigurationResponse;

    return GenesysHubConfigurationResponse;
}());

var GenesysHubConfigurationRequest = (function(){
    var hasProps = false;

    function GenesysHubConfigurationRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:genesysHubConfigurationRequest' });
        }

        GenesysHubConfigurationRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(GenesysHubConfigurationRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(GenesysHubConfigurationRequest.prototype, 'email', {
            get: function() { return this.__prop_email; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for GenesysHubConfigurationRequest.email, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_email = value;
            },
            enumerable: true
        });

        Object.defineProperty(GenesysHubConfigurationRequest.prototype, 'password', {
            get: function() { return this.__prop_password; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for GenesysHubConfigurationRequest.password, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_password = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(GenesysHubConfigurationRequest, '__type', { value: 'urn:inin.com:socialMedia:genesysHubConfigurationRequest' });

    Object.defineProperty(GenesysHubConfigurationRequest, '__propInfo', {
        get: function() {
            var pi = {
                'email': { required: true, nullable: false },
                'password': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:genesysHubConfigurationRequest'] = GenesysHubConfigurationRequest;

    return GenesysHubConfigurationRequest;
}());

var FacebookAccountRequest = (function(){
    var hasProps = false;

    function FacebookAccountRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:facebookAccountRequest' });
        }

        FacebookAccountRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(FacebookAccountRequest, _util.DataContract);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(FacebookAccountRequest, '__type', { value: 'urn:inin.com:socialMedia:facebookAccountRequest' });

    Object.defineProperty(FacebookAccountRequest, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:facebookAccountRequest'] = FacebookAccountRequest;

    return FacebookAccountRequest;
}());

var FacebookAccountResponse = (function(){
    var hasProps = false;

    function FacebookAccountResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:facebookAccountResponse' });
        }

        FacebookAccountResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(FacebookAccountResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FacebookAccountResponse.prototype, 'accountId', {
            get: function() { return this.__prop_accountId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for FacebookAccountResponse.accountId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accountId = value;
            },
            enumerable: true
        });

        Object.defineProperty(FacebookAccountResponse.prototype, 'channelId', {
            get: function() { return this.__prop_channelId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for FacebookAccountResponse.channelId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_channelId = value;
            },
            enumerable: true
        });

        Object.defineProperty(FacebookAccountResponse.prototype, 'facebookName', {
            get: function() { return this.__prop_facebookName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for FacebookAccountResponse.facebookName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_facebookName = value;
            },
            enumerable: true
        });

        Object.defineProperty(FacebookAccountResponse.prototype, 'facebookId', {
            get: function() { return this.__prop_facebookId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for FacebookAccountResponse.facebookId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_facebookId = value;
            },
            enumerable: true
        });

        Object.defineProperty(FacebookAccountResponse.prototype, 'pages', {
            get: function() { return this.__prop_pages; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Page); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Page(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FacebookAccountResponse.pages: ' + e.message);
                    }
                }

                this.__prop_pages = value;
            },
            enumerable: true
        });

        Object.defineProperty(FacebookAccountResponse.prototype, 'facebookAuthUrl', {
            get: function() { return this.__prop_facebookAuthUrl; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for FacebookAccountResponse.facebookAuthUrl, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_facebookAuthUrl = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FacebookAccountResponse, '__type', { value: 'urn:inin.com:socialMedia:facebookAccountResponse' });

    Object.defineProperty(FacebookAccountResponse, '__propInfo', {
        get: function() {
            var pi = {
                'accountId': { required: true, nullable: false },
                'channelId': { required: false, nullable: false },
                'facebookName': { required: false, nullable: false },
                'facebookId': { required: false, nullable: false },
                'pages': { required: false, nullable: false },
                'facebookAuthUrl': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:facebookAccountResponse'] = FacebookAccountResponse;

    return FacebookAccountResponse;
}());

var Page = (function(){
    var hasProps = false;

    function Page() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:page' });
        }

        Page._super.constructor.apply(this, arguments);
    }
    _util.inherits(Page, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Page.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Page.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(Page.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Page.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Page, '__type', { value: 'urn:inin.com:socialMedia:page' });

    Object.defineProperty(Page, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'name': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:page'] = Page;

    return Page;
}());

var FacebookChannelRequest = (function(){
    var hasProps = false;

    function FacebookChannelRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:facebookChannelRequest' });
        }

        FacebookChannelRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(FacebookChannelRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FacebookChannelRequest.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for FacebookChannelRequest.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(FacebookChannelRequest.prototype, 'pages', {
            get: function() { return this.__prop_pages; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Page); }))) {
                    try {
                        value = value.map(function(item){ return new Page(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FacebookChannelRequest.pages: ' + e.message);
                    }
                }

                this.__prop_pages = value;
            },
            enumerable: true
        });

        Object.defineProperty(FacebookChannelRequest.prototype, 'socialConversationWorkgroup', {
            get: function() { return this.__prop_socialConversationWorkgroup; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for FacebookChannelRequest.socialConversationWorkgroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialConversationWorkgroup = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FacebookChannelRequest, '__type', { value: 'urn:inin.com:socialMedia:facebookChannelRequest' });

    Object.defineProperty(FacebookChannelRequest, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'pages': { required: true, nullable: false },
                'socialConversationWorkgroup': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:facebookChannelRequest'] = FacebookChannelRequest;

    return FacebookChannelRequest;
}());

var FacebookChannelResponse = (function(){
    var hasProps = false;

    function FacebookChannelResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:facebookChannelResponse' });
        }

        FacebookChannelResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(FacebookChannelResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FacebookChannelResponse.prototype, 'accountId', {
            get: function() { return this.__prop_accountId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for FacebookChannelResponse.accountId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accountId = value;
            },
            enumerable: true
        });

        Object.defineProperty(FacebookChannelResponse.prototype, 'channelId', {
            get: function() { return this.__prop_channelId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for FacebookChannelResponse.channelId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_channelId = value;
            },
            enumerable: true
        });

        Object.defineProperty(FacebookChannelResponse.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for FacebookChannelResponse.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(FacebookChannelResponse.prototype, 'pages', {
            get: function() { return this.__prop_pages; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Page); }))) {
                    try {
                        value = value.map(function(item){ return new Page(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FacebookChannelResponse.pages: ' + e.message);
                    }
                }

                this.__prop_pages = value;
            },
            enumerable: true
        });

        Object.defineProperty(FacebookChannelResponse.prototype, 'socialConversationWorkgroup', {
            get: function() { return this.__prop_socialConversationWorkgroup; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for FacebookChannelResponse.socialConversationWorkgroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialConversationWorkgroup = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FacebookChannelResponse, '__type', { value: 'urn:inin.com:socialMedia:facebookChannelResponse' });

    Object.defineProperty(FacebookChannelResponse, '__propInfo', {
        get: function() {
            var pi = {
                'accountId': { required: true, nullable: false },
                'channelId': { required: true, nullable: false },
                'name': { required: true, nullable: false },
                'pages': { required: true, nullable: false },
                'socialConversationWorkgroup': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:facebookChannelResponse'] = FacebookChannelResponse;

    return FacebookChannelResponse;
}());

var FacebookChannelsResponse = (function(){
    var hasProps = false;

    function FacebookChannelsResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:facebookChannelsResponse' });
        }

        FacebookChannelsResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(FacebookChannelsResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FacebookChannelsResponse.prototype, 'channels', {
            get: function() { return this.__prop_channels; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FacebookChannelResponse); }))) {
                    try {
                        value = value.map(function(item){ return new FacebookChannelResponse(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FacebookChannelsResponse.channels: ' + e.message);
                    }
                }

                this.__prop_channels = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FacebookChannelsResponse, '__type', { value: 'urn:inin.com:socialMedia:facebookChannelsResponse' });

    Object.defineProperty(FacebookChannelsResponse, '__propInfo', {
        get: function() {
            var pi = {
                'channels': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:facebookChannelsResponse'] = FacebookChannelsResponse;

    return FacebookChannelsResponse;
}());

var FacebookAccountsResponse = (function(){
    var hasProps = false;

    function FacebookAccountsResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:facebookAccountsResponse' });
        }

        FacebookAccountsResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(FacebookAccountsResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(FacebookAccountsResponse.prototype, 'accounts', {
            get: function() { return this.__prop_accounts; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof FacebookAccountResponse); }))) {
                    try {
                        value = value.map(function(item){ return new FacebookAccountResponse(item); });
                    } catch (e) {
                        throw new TypeError('Error setting FacebookAccountsResponse.accounts: ' + e.message);
                    }
                }

                this.__prop_accounts = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(FacebookAccountsResponse, '__type', { value: 'urn:inin.com:socialMedia:facebookAccountsResponse' });

    Object.defineProperty(FacebookAccountsResponse, '__propInfo', {
        get: function() {
            var pi = {
                'accounts': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:facebookAccountsResponse'] = FacebookAccountsResponse;

    return FacebookAccountsResponse;
}());

var TwitterAccountRequest = (function(){
    var hasProps = false;

    function TwitterAccountRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:twitterAccountRequest' });
        }

        TwitterAccountRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(TwitterAccountRequest, _util.DataContract);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(TwitterAccountRequest, '__type', { value: 'urn:inin.com:socialMedia:twitterAccountRequest' });

    Object.defineProperty(TwitterAccountRequest, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:twitterAccountRequest'] = TwitterAccountRequest;

    return TwitterAccountRequest;
}());

var TwitterAccountResponse = (function(){
    var hasProps = false;

    function TwitterAccountResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:twitterAccountResponse' });
        }

        TwitterAccountResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(TwitterAccountResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TwitterAccountResponse.prototype, 'accountId', {
            get: function() { return this.__prop_accountId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for TwitterAccountResponse.accountId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accountId = value;
            },
            enumerable: true
        });

        Object.defineProperty(TwitterAccountResponse.prototype, 'channelId', {
            get: function() { return this.__prop_channelId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for TwitterAccountResponse.channelId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_channelId = value;
            },
            enumerable: true
        });

        Object.defineProperty(TwitterAccountResponse.prototype, 'twitterHandle', {
            get: function() { return this.__prop_twitterHandle; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for TwitterAccountResponse.twitterHandle, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_twitterHandle = value;
            },
            enumerable: true
        });

        Object.defineProperty(TwitterAccountResponse.prototype, 'twitterProfileImageUrl', {
            get: function() { return this.__prop_twitterProfileImageUrl; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for TwitterAccountResponse.twitterProfileImageUrl, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_twitterProfileImageUrl = value;
            },
            enumerable: true
        });

        Object.defineProperty(TwitterAccountResponse.prototype, 'twitterAuthUrl', {
            get: function() { return this.__prop_twitterAuthUrl; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for TwitterAccountResponse.twitterAuthUrl, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_twitterAuthUrl = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TwitterAccountResponse, '__type', { value: 'urn:inin.com:socialMedia:twitterAccountResponse' });

    Object.defineProperty(TwitterAccountResponse, '__propInfo', {
        get: function() {
            var pi = {
                'accountId': { required: true, nullable: false },
                'channelId': { required: false, nullable: false },
                'twitterHandle': { required: false, nullable: false },
                'twitterProfileImageUrl': { required: false, nullable: false },
                'twitterAuthUrl': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:twitterAccountResponse'] = TwitterAccountResponse;

    return TwitterAccountResponse;
}());

var TwitterChannelRequest = (function(){
    var hasProps = false;

    function TwitterChannelRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:twitterChannelRequest' });
        }

        TwitterChannelRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(TwitterChannelRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TwitterChannelRequest.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for TwitterChannelRequest.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(TwitterChannelRequest.prototype, 'keywords', {
            get: function() { return this.__prop_keywords; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for TwitterChannelRequest.keywords, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_keywords = value;
            },
            enumerable: true
        });

        Object.defineProperty(TwitterChannelRequest.prototype, 'handles', {
            get: function() { return this.__prop_handles; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for TwitterChannelRequest.handles, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_handles = value;
            },
            enumerable: true
        });

        Object.defineProperty(TwitterChannelRequest.prototype, 'socialConversationWorkgroup', {
            get: function() { return this.__prop_socialConversationWorkgroup; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for TwitterChannelRequest.socialConversationWorkgroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialConversationWorkgroup = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TwitterChannelRequest, '__type', { value: 'urn:inin.com:socialMedia:twitterChannelRequest' });

    Object.defineProperty(TwitterChannelRequest, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'keywords': { required: true, nullable: false },
                'handles': { required: true, nullable: false },
                'socialConversationWorkgroup': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:twitterChannelRequest'] = TwitterChannelRequest;

    return TwitterChannelRequest;
}());

var TwitterChannelResponse = (function(){
    var hasProps = false;

    function TwitterChannelResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:twitterChannelResponse' });
        }

        TwitterChannelResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(TwitterChannelResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TwitterChannelResponse.prototype, 'accountId', {
            get: function() { return this.__prop_accountId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for TwitterChannelResponse.accountId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_accountId = value;
            },
            enumerable: true
        });

        Object.defineProperty(TwitterChannelResponse.prototype, 'channelId', {
            get: function() { return this.__prop_channelId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for TwitterChannelResponse.channelId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_channelId = value;
            },
            enumerable: true
        });

        Object.defineProperty(TwitterChannelResponse.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for TwitterChannelResponse.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(TwitterChannelResponse.prototype, 'keywords', {
            get: function() { return this.__prop_keywords; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for TwitterChannelResponse.keywords, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_keywords = value;
            },
            enumerable: true
        });

        Object.defineProperty(TwitterChannelResponse.prototype, 'handles', {
            get: function() { return this.__prop_handles; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for TwitterChannelResponse.handles, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_handles = value;
            },
            enumerable: true
        });

        Object.defineProperty(TwitterChannelResponse.prototype, 'socialConversationWorkgroup', {
            get: function() { return this.__prop_socialConversationWorkgroup; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for TwitterChannelResponse.socialConversationWorkgroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_socialConversationWorkgroup = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TwitterChannelResponse, '__type', { value: 'urn:inin.com:socialMedia:twitterChannelResponse' });

    Object.defineProperty(TwitterChannelResponse, '__propInfo', {
        get: function() {
            var pi = {
                'accountId': { required: true, nullable: false },
                'channelId': { required: true, nullable: false },
                'name': { required: true, nullable: false },
                'keywords': { required: true, nullable: false },
                'handles': { required: true, nullable: false },
                'socialConversationWorkgroup': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:twitterChannelResponse'] = TwitterChannelResponse;

    return TwitterChannelResponse;
}());

var TwitterChannelsResponse = (function(){
    var hasProps = false;

    function TwitterChannelsResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:twitterChannelsResponse' });
        }

        TwitterChannelsResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(TwitterChannelsResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TwitterChannelsResponse.prototype, 'channels', {
            get: function() { return this.__prop_channels; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof TwitterChannelResponse); }))) {
                    try {
                        value = value.map(function(item){ return new TwitterChannelResponse(item); });
                    } catch (e) {
                        throw new TypeError('Error setting TwitterChannelsResponse.channels: ' + e.message);
                    }
                }

                this.__prop_channels = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TwitterChannelsResponse, '__type', { value: 'urn:inin.com:socialMedia:twitterChannelsResponse' });

    Object.defineProperty(TwitterChannelsResponse, '__propInfo', {
        get: function() {
            var pi = {
                'channels': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:twitterChannelsResponse'] = TwitterChannelsResponse;

    return TwitterChannelsResponse;
}());

var TwitterAccountsResponse = (function(){
    var hasProps = false;

    function TwitterAccountsResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:socialMedia:twitterAccountsResponse' });
        }

        TwitterAccountsResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(TwitterAccountsResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(TwitterAccountsResponse.prototype, 'accounts', {
            get: function() { return this.__prop_accounts; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof TwitterAccountResponse); }))) {
                    try {
                        value = value.map(function(item){ return new TwitterAccountResponse(item); });
                    } catch (e) {
                        throw new TypeError('Error setting TwitterAccountsResponse.accounts: ' + e.message);
                    }
                }

                this.__prop_accounts = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(TwitterAccountsResponse, '__type', { value: 'urn:inin.com:socialMedia:twitterAccountsResponse' });

    Object.defineProperty(TwitterAccountsResponse, '__propInfo', {
        get: function() {
            var pi = {
                'accounts': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:socialMedia:twitterAccountsResponse'] = TwitterAccountsResponse;

    return TwitterAccountsResponse;
}());

var $socialMedia = (function(){
    function getSocialMediaConfiguration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSocialMediaConfiguration.params)) {
            try {
                params = new getSocialMediaConfiguration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSocialMediaConfiguration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMediaConfigurationResponse) ? o : new SocialMediaConfigurationResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSocialMediaConfiguration.method, getSocialMediaConfiguration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSocialMediaConfiguration, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media', enumerable: true }
    });

    getSocialMediaConfiguration.params = (function(){
        _util.inherits(getSocialMediaConfiguration_params, _util.RequestParams);

        function getSocialMediaConfiguration_params(properties) {
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

            getSocialMediaConfiguration_params._super.constructor.apply(this, arguments);
        }

        return getSocialMediaConfiguration_params;
    })();

    function authenticateSocialMediaProcessor(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof authenticateSocialMediaProcessor.params)) {
            try {
                params = new authenticateSocialMediaProcessor.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: authenticateSocialMediaProcessor.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof SocialMediaConfigurationResponse) ? o : new SocialMediaConfigurationResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(authenticateSocialMediaProcessor.method, authenticateSocialMediaProcessor.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(authenticateSocialMediaProcessor, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media', enumerable: true }
    });

    authenticateSocialMediaProcessor.params = (function(){
        _util.inherits(authenticateSocialMediaProcessor_params, _util.RequestParams);

        function authenticateSocialMediaProcessor_params(properties) {
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
            if (!(properties.content instanceof SocialMediaConfigurationRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: SocialMedia.SocialMediaConfigurationRequest');
            }

            authenticateSocialMediaProcessor_params._super.constructor.apply(this, arguments);
        }

        return authenticateSocialMediaProcessor_params;
    })();

    function updateSocialMediaConfiguration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateSocialMediaConfiguration.params)) {
            try {
                params = new updateSocialMediaConfiguration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateSocialMediaConfiguration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SocialMediaConfigurationResponse) ? o : new SocialMediaConfigurationResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateSocialMediaConfiguration.method, updateSocialMediaConfiguration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateSocialMediaConfiguration, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media', enumerable: true }
    });

    updateSocialMediaConfiguration.params = (function(){
        _util.inherits(updateSocialMediaConfiguration_params, _util.RequestParams);

        function updateSocialMediaConfiguration_params(properties) {
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
            if (!(properties.content instanceof SocialMediaConfigurationRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: SocialMedia.SocialMediaConfigurationRequest');
            }

            updateSocialMediaConfiguration_params._super.constructor.apply(this, arguments);
        }

        return updateSocialMediaConfiguration_params;
    })();

    function deleteSocialMediaConfiguration(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteSocialMediaConfiguration.params)) {
            try {
                params = new deleteSocialMediaConfiguration.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteSocialMediaConfiguration.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteSocialMediaConfiguration.method, deleteSocialMediaConfiguration.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteSocialMediaConfiguration, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media', enumerable: true }
    });

    deleteSocialMediaConfiguration.params = (function(){
        _util.inherits(deleteSocialMediaConfiguration_params, _util.RequestParams);

        function deleteSocialMediaConfiguration_params(properties) {
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

            deleteSocialMediaConfiguration_params._super.constructor.apply(this, arguments);
        }

        return deleteSocialMediaConfiguration_params;
    })();

    return Object.create(null, {
        getSocialMediaConfiguration: { value: getSocialMediaConfiguration, enumerable: true },
        authenticateSocialMediaProcessor: { value: authenticateSocialMediaProcessor, enumerable: true },
        updateSocialMediaConfiguration: { value: updateSocialMediaConfiguration, enumerable: true },
        deleteSocialMediaConfiguration: { value: deleteSocialMediaConfiguration, enumerable: true }
    });
})();

var $account = (function(){
    function getGenesysHubAccount(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getGenesysHubAccount.params)) {
            try {
                params = new getGenesysHubAccount.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getGenesysHubAccount.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof GenesysHubConfigurationResponse) ? o : new GenesysHubConfigurationResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getGenesysHubAccount.method, getGenesysHubAccount.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getGenesysHubAccount, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/account', enumerable: true }
    });

    getGenesysHubAccount.params = (function(){
        _util.inherits(getGenesysHubAccount_params, _util.RequestParams);

        function getGenesysHubAccount_params(properties) {
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

            getGenesysHubAccount_params._super.constructor.apply(this, arguments);
        }

        return getGenesysHubAccount_params;
    })();

    function provisionGenesysHubAccount(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof provisionGenesysHubAccount.params)) {
            try {
                params = new provisionGenesysHubAccount.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: provisionGenesysHubAccount.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof GenesysHubConfigurationResponse) ? o : new GenesysHubConfigurationResponse(o); };
        dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(provisionGenesysHubAccount.method, provisionGenesysHubAccount.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(provisionGenesysHubAccount, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/account', enumerable: true }
    });

    provisionGenesysHubAccount.params = (function(){
        _util.inherits(provisionGenesysHubAccount_params, _util.RequestParams);

        function provisionGenesysHubAccount_params(properties) {
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
            if (!(properties.content instanceof GenesysHubConfigurationRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: SocialMedia.GenesysHubConfigurationRequest');
            }

            provisionGenesysHubAccount_params._super.constructor.apply(this, arguments);
        }

        return provisionGenesysHubAccount_params;
    })();

    function updateGenesysHubAccount(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateGenesysHubAccount.params)) {
            try {
                params = new updateGenesysHubAccount.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateGenesysHubAccount.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof GenesysHubConfigurationResponse) ? o : new GenesysHubConfigurationResponse(o); };
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateGenesysHubAccount.method, updateGenesysHubAccount.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateGenesysHubAccount, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/account', enumerable: true }
    });

    updateGenesysHubAccount.params = (function(){
        _util.inherits(updateGenesysHubAccount_params, _util.RequestParams);

        function updateGenesysHubAccount_params(properties) {
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
            if (!(properties.content instanceof GenesysHubConfigurationRequest)) {
                throw new TypeError('`properties.content` value does not match the expected type: SocialMedia.GenesysHubConfigurationRequest');
            }

            updateGenesysHubAccount_params._super.constructor.apply(this, arguments);
        }

        return updateGenesysHubAccount_params;
    })();

    function deleteGenesysHubAccount(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteGenesysHubAccount.params)) {
            try {
                params = new deleteGenesysHubAccount.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteGenesysHubAccount.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteGenesysHubAccount.method, deleteGenesysHubAccount.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteGenesysHubAccount, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/social-media/account', enumerable: true }
    });

    deleteGenesysHubAccount.params = (function(){
        _util.inherits(deleteGenesysHubAccount_params, _util.RequestParams);

        function deleteGenesysHubAccount_params(properties) {
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

            deleteGenesysHubAccount_params._super.constructor.apply(this, arguments);
        }

        return deleteGenesysHubAccount_params;
    })();

    return Object.create(null, {
        getGenesysHubAccount: { value: getGenesysHubAccount, enumerable: true },
        provisionGenesysHubAccount: { value: provisionGenesysHubAccount, enumerable: true },
        updateGenesysHubAccount: { value: updateGenesysHubAccount, enumerable: true },
        deleteGenesysHubAccount: { value: deleteGenesysHubAccount, enumerable: true }
    });
})();

var $facebook = (function(){
    return Object.create(null, {
    });
})();

var $twitter = (function(){
    return Object.create(null, {
    });
})();

exports.SocialMediaConfigurationResponse = SocialMediaConfigurationResponse;
exports.SocialMediaConfigurationRequest = SocialMediaConfigurationRequest;
exports.GenesysHubConfigurationResponse = GenesysHubConfigurationResponse;
exports.GenesysHubConfigurationRequest = GenesysHubConfigurationRequest;
exports.FacebookAccountRequest = FacebookAccountRequest;
exports.FacebookAccountResponse = FacebookAccountResponse;
exports.Page = Page;
exports.FacebookChannelRequest = FacebookChannelRequest;
exports.FacebookChannelResponse = FacebookChannelResponse;
exports.FacebookChannelsResponse = FacebookChannelsResponse;
exports.FacebookAccountsResponse = FacebookAccountsResponse;
exports.TwitterAccountRequest = TwitterAccountRequest;
exports.TwitterAccountResponse = TwitterAccountResponse;
exports.TwitterChannelRequest = TwitterChannelRequest;
exports.TwitterChannelResponse = TwitterChannelResponse;
exports.TwitterChannelsResponse = TwitterChannelsResponse;
exports.TwitterAccountsResponse = TwitterAccountsResponse;
exports.$socialMedia = $socialMedia;
exports.$account = $account;
exports.$facebook = $facebook;
exports.$twitter = $twitter;
