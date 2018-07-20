/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Common = require('./Common');
var Interactions = require('./Interactions');

var BodyType = (function(){
    var instanceCache = {};
    function BodyType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:bodyType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(BodyType, _util.EnumValue);

    Object.defineProperties(BodyType, {
        'Text': { value: new BodyType(0, 'Text'), enumerable: true },
        'Html': { value: new BodyType(1, 'Html'), enumerable: true }
    });

    Object.defineProperty(BodyType, '__type', { value: 'urn:inin.com:interactions.email:bodyType' });

    _typemap['urn:inin.com:interactions.email:bodyType'] = BodyType;

    return BodyType;
}());

var EmailSignatureStatus = (function(){
    var instanceCache = {};
    function EmailSignatureStatus(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }
        if (!_util.isString(name)) {
            var values = [1, 2, 4, 128].reduce(function(values, current) {
                /*jshint bitwise:false */
                if (current === (current & value)) {
                    values.push(new EmailSignatureStatus(current));
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

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailSignatureStatus' });

        _util.BitFlagsEnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(EmailSignatureStatus, _util.BitFlagsEnumValue);

    EmailSignatureStatus.prototype.hasFlag = function(flag) {
        /*jshint bitwise:false */
        return (flag instanceof EmailSignatureStatus) && (flag.value === (flag.value & this.value));
    };

    EmailSignatureStatus.prototype.addFlag = function(flag) {
        /*jshint bitwise:false */

        if (!(flag instanceof EmailSignatureStatus)) {
            throw new TypeError('flag does not match the expected type: EmailSignatureStatus');
        }

        return new EmailSignatureStatus(this.value | flag.value);
    };

    EmailSignatureStatus.prototype.removeFlag = function(flag) {
        /*jshint bitwise:false */

        if (!(flag instanceof EmailSignatureStatus)) {
            throw new TypeError('flag does not match the expected type: EmailSignatureStatus');
        }

        return new EmailSignatureStatus(this.value & ~flag.value);
    };

    EmailSignatureStatus.prototype.setFlag = function(flag, state) {
        if (!(flag instanceof EmailSignatureStatus)) {
            throw new TypeError('flag does not match the expected type: EmailSignatureStatus');
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

    Object.defineProperties(EmailSignatureStatus, {
        'OK': { value: new EmailSignatureStatus(0, 'OK'), enumerable: true },
        'MessageModified': { value: new EmailSignatureStatus(1, 'MessageModified'), enumerable: true },
        'CertificateNotTrusted': { value: new EmailSignatureStatus(2, 'CertificateNotTrusted'), enumerable: true },
        'EmailHeaderMismatch': { value: new EmailSignatureStatus(4, 'EmailHeaderMismatch'), enumerable: true },
        'Unknown': { value: new EmailSignatureStatus(128, 'Unknown'), enumerable: true }
    });

    Object.defineProperty(EmailSignatureStatus, '__type', { value: 'urn:inin.com:interactions.email:emailSignatureStatus' });

    _typemap['urn:inin.com:interactions.email:emailSignatureStatus'] = EmailSignatureStatus;

    return EmailSignatureStatus;
}());

var EmailType = (function(){
    var instanceCache = {};
    function EmailType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(EmailType, _util.EnumValue);

    Object.defineProperties(EmailType, {
        'None': { value: new EmailType(0, 'None'), enumerable: true },
        'New': { value: new EmailType(1, 'New'), enumerable: true },
        'Reply': { value: new EmailType(2, 'Reply'), enumerable: true },
        'ReplyAll': { value: new EmailType(3, 'ReplyAll'), enumerable: true },
        'Forward': { value: new EmailType(4, 'Forward'), enumerable: true }
    });

    Object.defineProperty(EmailType, '__type', { value: 'urn:inin.com:interactions.email:emailType' });

    _typemap['urn:inin.com:interactions.email:emailType'] = EmailType;

    return EmailType;
}());

var EmailResponseType = (function(){
    var instanceCache = {};
    function EmailResponseType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailResponseType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(EmailResponseType, _util.EnumValue);

    Object.defineProperties(EmailResponseType, {
        'Reply': { value: new EmailResponseType(0, 'Reply'), enumerable: true },
        'ReplyAll': { value: new EmailResponseType(1, 'ReplyAll'), enumerable: true },
        'Forward': { value: new EmailResponseType(2, 'Forward'), enumerable: true }
    });

    Object.defineProperty(EmailResponseType, '__type', { value: 'urn:inin.com:interactions.email:emailResponseType' });

    _typemap['urn:inin.com:interactions.email:emailResponseType'] = EmailResponseType;

    return EmailResponseType;
}());

var EmailResponseAttachments = (function(){
    var instanceCache = {};
    function EmailResponseAttachments(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailResponseAttachments' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(EmailResponseAttachments, _util.EnumValue);

    Object.defineProperties(EmailResponseAttachments, {
        'None': { value: new EmailResponseAttachments(0, 'None'), enumerable: true },
        'Inline': { value: new EmailResponseAttachments(1, 'Inline'), enumerable: true },
        'All': { value: new EmailResponseAttachments(2, 'All'), enumerable: true }
    });

    Object.defineProperty(EmailResponseAttachments, '__type', { value: 'urn:inin.com:interactions.email:emailResponseAttachments' });

    _typemap['urn:inin.com:interactions.email:emailResponseAttachments'] = EmailResponseAttachments;

    return EmailResponseAttachments;
}());

var EmailMessageContentsResponseBase = (function(){
    var hasProps = false;

    function EmailMessageContentsResponseBase() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailMessageContentsResponseBase' });
        }

        EmailMessageContentsResponseBase._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailMessageContentsResponseBase, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailMessageContentsResponseBase.prototype, 'subject', {
            get: function() { return this.__prop_subject; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailMessageContentsResponseBase.subject, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subject = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailMessageContentsResponseBase.prototype, 'sender', {
            get: function() { return this.__prop_sender; },
            set: function(value) {
                if (!(value instanceof EmailAddress)) {
                    try {
                        value = new EmailAddress(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailMessageContentsResponseBase.sender: ' + e.message);
                    }
                }

                this.__prop_sender = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailMessageContentsResponseBase.prototype, 'toRecipients', {
            get: function() { return this.__prop_toRecipients; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailAddress); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailMessageContentsResponseBase.toRecipients: ' + e.message);
                    }
                }

                this.__prop_toRecipients = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailMessageContentsResponseBase.prototype, 'ccRecipients', {
            get: function() { return this.__prop_ccRecipients; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailAddress); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailMessageContentsResponseBase.ccRecipients: ' + e.message);
                    }
                }

                this.__prop_ccRecipients = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailMessageContentsResponseBase.prototype, 'bccRecipients', {
            get: function() { return this.__prop_bccRecipients; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailAddress); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailMessageContentsResponseBase.bccRecipients: ' + e.message);
                    }
                }

                this.__prop_bccRecipients = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailMessageContentsResponseBase.prototype, 'replyToRecipients', {
            get: function() { return this.__prop_replyToRecipients; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailAddress); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailMessageContentsResponseBase.replyToRecipients: ' + e.message);
                    }
                }

                this.__prop_replyToRecipients = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailMessageContentsResponseBase.prototype, 'bodies', {
            get: function() { return this.__prop_bodies; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailBody); }))) {
                    try {
                        value = value.map(function(item){ return new EmailBody(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailMessageContentsResponseBase.bodies: ' + e.message);
                    }
                }

                this.__prop_bodies = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailMessageContentsResponseBase.prototype, 'receivedTimestamp', {
            get: function() { return this.__prop_receivedTimestamp; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for EmailMessageContentsResponseBase.receivedTimestamp, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_receivedTimestamp = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailMessageContentsResponseBase.prototype, 'signature', {
            get: function() { return this.__prop_signature; },
            set: function(value) {
                if (!(value instanceof EmailSignature || value === void 0)) {
                    try {
                        value = new EmailSignature(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailMessageContentsResponseBase.signature: ' + e.message);
                    }
                }

                this.__prop_signature = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailMessageContentsResponseBase, '__type', { value: 'urn:inin.com:interactions.email:emailMessageContentsResponseBase' });

    Object.defineProperty(EmailMessageContentsResponseBase, '__propInfo', {
        get: function() {
            var pi = {
                'subject': { required: true, nullable: false },
                'sender': { required: true, nullable: false },
                'toRecipients': { required: false, nullable: false },
                'ccRecipients': { required: false, nullable: false },
                'bccRecipients': { required: false, nullable: false },
                'replyToRecipients': { required: false, nullable: false },
                'bodies': { required: true, nullable: false },
                'receivedTimestamp': { required: true, nullable: false },
                'signature': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailMessageContentsResponseBase'] = EmailMessageContentsResponseBase;

    return EmailMessageContentsResponseBase;
}());

var EmailAddress = (function(){
    var hasProps = false;

    function EmailAddress() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailAddress' });
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
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for EmailAddress.address, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_address = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailAddress, '__type', { value: 'urn:inin.com:interactions.email:emailAddress' });

    Object.defineProperty(EmailAddress, '__propInfo', {
        get: function() {
            var pi = {
                'displayName': { required: true, nullable: false },
                'address': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailAddress'] = EmailAddress;

    return EmailAddress;
}());

var EmailBody = (function(){
    var hasProps = false;

    function EmailBody() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailBody' });
        }

        EmailBody._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailBody, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailBody.prototype, 'body', {
            get: function() { return this.__prop_body; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailBody.body, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_body = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailBody.prototype, 'bodyType', {
            get: function() { return this.__prop_bodyType; },
            set: function(value) {
                if (!(value instanceof BodyType)) {
                    try {
                        value = new BodyType(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailBody.bodyType: ' + e.message);
                    }
                }

                this.__prop_bodyType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailBody, '__type', { value: 'urn:inin.com:interactions.email:emailBody' });

    Object.defineProperty(EmailBody, '__propInfo', {
        get: function() {
            var pi = {
                'body': { required: true, nullable: false },
                'bodyType': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailBody'] = EmailBody;

    return EmailBody;
}());

var EmailSignature = (function(){
    var hasProps = false;

    function EmailSignature() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailSignature' });
        }

        EmailSignature._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailSignature, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailSignature.prototype, 'status', {
            get: function() { return this.__prop_status; },
            set: function(value) {
                if (!(value instanceof EmailSignatureStatus)) {
                    try {
                        value = new EmailSignatureStatus(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailSignature.status: ' + e.message);
                    }
                }

                this.__prop_status = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailSignature.prototype, 'certificate', {
            get: function() { return this.__prop_certificate; },
            set: function(value) {
                if (!(value instanceof EmailCertificate)) {
                    try {
                        value = new EmailCertificate(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailSignature.certificate: ' + e.message);
                    }
                }

                this.__prop_certificate = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailSignature, '__type', { value: 'urn:inin.com:interactions.email:emailSignature' });

    Object.defineProperty(EmailSignature, '__propInfo', {
        get: function() {
            var pi = {
                'status': { required: true, nullable: false },
                'certificate': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailSignature'] = EmailSignature;

    return EmailSignature;
}());

var EmailCertificate = (function(){
    var hasProps = false;

    function EmailCertificate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailCertificate' });
        }

        EmailCertificate._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailCertificate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailCertificate.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for EmailCertificate.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailCertificate.prototype, 'serialNumber', {
            get: function() { return this.__prop_serialNumber; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailCertificate.serialNumber, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_serialNumber = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailCertificate.prototype, 'signatureAlgorithm', {
            get: function() { return this.__prop_signatureAlgorithm; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailCertificate.signatureAlgorithm, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_signatureAlgorithm = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailCertificate.prototype, 'issuer', {
            get: function() { return this.__prop_issuer; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailCertificate.issuer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_issuer = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailCertificate.prototype, 'validFrom', {
            get: function() { return this.__prop_validFrom; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for EmailCertificate.validFrom, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_validFrom = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailCertificate.prototype, 'validTo', {
            get: function() { return this.__prop_validTo; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for EmailCertificate.validTo, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_validTo = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailCertificate.prototype, 'subject', {
            get: function() { return this.__prop_subject; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailCertificate.subject, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subject = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailCertificate, '__type', { value: 'urn:inin.com:interactions.email:emailCertificate' });

    Object.defineProperty(EmailCertificate, '__propInfo', {
        get: function() {
            var pi = {
                'version': { required: true, nullable: false },
                'serialNumber': { required: true, nullable: false },
                'signatureAlgorithm': { required: true, nullable: false },
                'issuer': { required: true, nullable: false },
                'validFrom': { required: true, nullable: false },
                'validTo': { required: true, nullable: false },
                'subject': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailCertificate'] = EmailCertificate;

    return EmailCertificate;
}());

var BaseEmailFileAttachment = (function(){
    var hasProps = false;

    function BaseEmailFileAttachment() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:baseEmailFileAttachment' });
        }

        BaseEmailFileAttachment._super.constructor.apply(this, arguments);
    }
    _util.inherits(BaseEmailFileAttachment, _util.DataContract);

    function defineProps() {
        Object.defineProperty(BaseEmailFileAttachment.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseEmailFileAttachment.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseEmailFileAttachment.prototype, 'contentId', {
            get: function() { return this.__prop_contentId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseEmailFileAttachment.contentId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_contentId = value;
            },
            enumerable: true
        });

        Object.defineProperty(BaseEmailFileAttachment.prototype, 'downloadUri', {
            get: function() { return this.__prop_downloadUri; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for BaseEmailFileAttachment.downloadUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_downloadUri = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(BaseEmailFileAttachment, '__type', { value: 'urn:inin.com:interactions.email:baseEmailFileAttachment' });

    Object.defineProperty(BaseEmailFileAttachment, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'contentId': { required: true, nullable: false },
                'downloadUri': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:baseEmailFileAttachment'] = BaseEmailFileAttachment;

    return BaseEmailFileAttachment;
}());

var EmailMessageAttachmentBase = (function(){
    var hasProps = false;

    function EmailMessageAttachmentBase() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailMessageAttachmentBase' });
        }

        EmailMessageAttachmentBase._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailMessageAttachmentBase, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailMessageAttachmentBase.prototype, 'subject', {
            get: function() { return this.__prop_subject; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailMessageAttachmentBase.subject, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subject = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailMessageAttachmentBase.prototype, 'messageId', {
            get: function() { return this.__prop_messageId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailMessageAttachmentBase.messageId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_messageId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailMessageAttachmentBase, '__type', { value: 'urn:inin.com:interactions.email:emailMessageAttachmentBase' });

    Object.defineProperty(EmailMessageAttachmentBase, '__propInfo', {
        get: function() {
            var pi = {
                'subject': { required: true, nullable: false },
                'messageId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailMessageAttachmentBase'] = EmailMessageAttachmentBase;

    return EmailMessageAttachmentBase;
}());

var EmailContentsResponseBase = (function(){
    var hasProps = false;

    function EmailContentsResponseBase() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailContentsResponseBase' });
        }

        EmailContentsResponseBase._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailContentsResponseBase, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailContentsResponseBase.prototype, 'subject', {
            get: function() { return this.__prop_subject; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for EmailContentsResponseBase.subject, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subject = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsResponseBase.prototype, 'sender', {
            get: function() { return this.__prop_sender; },
            set: function(value) {
                if (!(value instanceof EmailAddress)) {
                    try {
                        value = new EmailAddress(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentsResponseBase.sender: ' + e.message);
                    }
                }

                this.__prop_sender = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsResponseBase.prototype, 'toRecipients', {
            get: function() { return this.__prop_toRecipients; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailAddress); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentsResponseBase.toRecipients: ' + e.message);
                    }
                }

                this.__prop_toRecipients = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsResponseBase.prototype, 'ccRecipients', {
            get: function() { return this.__prop_ccRecipients; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailAddress); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentsResponseBase.ccRecipients: ' + e.message);
                    }
                }

                this.__prop_ccRecipients = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsResponseBase.prototype, 'bccRecipients', {
            get: function() { return this.__prop_bccRecipients; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailAddress); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentsResponseBase.bccRecipients: ' + e.message);
                    }
                }

                this.__prop_bccRecipients = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsResponseBase.prototype, 'replyToRecipients', {
            get: function() { return this.__prop_replyToRecipients; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailAddress); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentsResponseBase.replyToRecipients: ' + e.message);
                    }
                }

                this.__prop_replyToRecipients = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsResponseBase.prototype, 'bodies', {
            get: function() { return this.__prop_bodies; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailBody); }))) {
                    try {
                        value = value.map(function(item){ return new EmailBody(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentsResponseBase.bodies: ' + e.message);
                    }
                }

                this.__prop_bodies = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsResponseBase.prototype, 'receivedTimestamp', {
            get: function() { return this.__prop_receivedTimestamp; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for EmailContentsResponseBase.receivedTimestamp, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_receivedTimestamp = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsResponseBase.prototype, 'signature', {
            get: function() { return this.__prop_signature; },
            set: function(value) {
                if (!(value instanceof EmailSignature || value === void 0)) {
                    try {
                        value = new EmailSignature(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentsResponseBase.signature: ' + e.message);
                    }
                }

                this.__prop_signature = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailContentsResponseBase, '__type', { value: 'urn:inin.com:interactions.email:emailContentsResponseBase' });

    Object.defineProperty(EmailContentsResponseBase, '__propInfo', {
        get: function() {
            var pi = {
                'subject': { required: false, nullable: false },
                'sender': { required: true, nullable: false },
                'toRecipients': { required: false, nullable: false },
                'ccRecipients': { required: false, nullable: false },
                'bccRecipients': { required: false, nullable: false },
                'replyToRecipients': { required: false, nullable: false },
                'bodies': { required: true, nullable: false },
                'receivedTimestamp': { required: true, nullable: false },
                'signature': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailContentsResponseBase'] = EmailContentsResponseBase;

    return EmailContentsResponseBase;
}());

var EmailContentBase = (function(){
    var hasProps = false;

    function EmailContentBase() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailContentBase' });
        }

        EmailContentBase._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailContentBase, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailContentBase.prototype, 'subject', {
            get: function() { return this.__prop_subject; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for EmailContentBase.subject, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subject = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentBase.prototype, 'sender', {
            get: function() { return this.__prop_sender; },
            set: function(value) {
                if (!(value instanceof EmailAddress)) {
                    try {
                        value = new EmailAddress(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentBase.sender: ' + e.message);
                    }
                }

                this.__prop_sender = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentBase.prototype, 'toRecipients', {
            get: function() { return this.__prop_toRecipients; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailAddress); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentBase.toRecipients: ' + e.message);
                    }
                }

                this.__prop_toRecipients = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentBase.prototype, 'ccRecipients', {
            get: function() { return this.__prop_ccRecipients; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailAddress); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentBase.ccRecipients: ' + e.message);
                    }
                }

                this.__prop_ccRecipients = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentBase.prototype, 'bccRecipients', {
            get: function() { return this.__prop_bccRecipients; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailAddress); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentBase.bccRecipients: ' + e.message);
                    }
                }

                this.__prop_bccRecipients = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentBase.prototype, 'replyToRecipients', {
            get: function() { return this.__prop_replyToRecipients; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailAddress); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentBase.replyToRecipients: ' + e.message);
                    }
                }

                this.__prop_replyToRecipients = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentBase.prototype, 'bodies', {
            get: function() { return this.__prop_bodies; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailBody); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailBody(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentBase.bodies: ' + e.message);
                    }
                }

                this.__prop_bodies = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailContentBase, '__type', { value: 'urn:inin.com:interactions.email:emailContentBase' });

    Object.defineProperty(EmailContentBase, '__propInfo', {
        get: function() {
            var pi = {
                'subject': { required: false, nullable: false },
                'sender': { required: true, nullable: false },
                'toRecipients': { required: false, nullable: false },
                'ccRecipients': { required: false, nullable: false },
                'bccRecipients': { required: false, nullable: false },
                'replyToRecipients': { required: false, nullable: false },
                'bodies': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailContentBase'] = EmailContentBase;

    return EmailContentBase;
}());

var EmailGetMessageParameters = (function(){
    var hasProps = false;

    function EmailGetMessageParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailGetMessageParameters' });
        }

        EmailGetMessageParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailGetMessageParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailGetMessageParameters.prototype, 'messageId', {
            get: function() { return this.__prop_messageId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailGetMessageParameters.messageId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_messageId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailGetMessageParameters, '__type', { value: 'urn:inin.com:interactions.email:emailGetMessageParameters' });

    Object.defineProperty(EmailGetMessageParameters, '__propInfo', {
        get: function() {
            var pi = {
                'messageId': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailGetMessageParameters'] = EmailGetMessageParameters;

    return EmailGetMessageParameters;
}());

var EmailUploadFileAttachmentRequest = (function(){
    var hasProps = false;

    function EmailUploadFileAttachmentRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailUploadFileAttachmentRequest' });
        }

        EmailUploadFileAttachmentRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailUploadFileAttachmentRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailUploadFileAttachmentRequest.prototype, 'uploadFileName', {
            get: function() { return this.__prop_uploadFileName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailUploadFileAttachmentRequest.uploadFileName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_uploadFileName = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailUploadFileAttachmentRequest.prototype, 'isInlineAttachment', {
            get: function() { return this.__prop_isInlineAttachment; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for EmailUploadFileAttachmentRequest.isInlineAttachment, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isInlineAttachment = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailUploadFileAttachmentRequest, '__type', { value: 'urn:inin.com:interactions.email:emailUploadFileAttachmentRequest' });

    Object.defineProperty(EmailUploadFileAttachmentRequest, '__propInfo', {
        get: function() {
            var pi = {
                'uploadFileName': { required: true, nullable: false },
                'isInlineAttachment': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailUploadFileAttachmentRequest'] = EmailUploadFileAttachmentRequest;

    return EmailUploadFileAttachmentRequest;
}());

var EmailInsertResponseManagementRequest = (function(){
    var hasProps = false;

    function EmailInsertResponseManagementRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailInsertResponseManagementRequest' });
        }

        EmailInsertResponseManagementRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailInsertResponseManagementRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailInsertResponseManagementRequest.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (_util.isString(value)) { value = new _util.Guid(value); }
                if (!(_util.isGuid(value))) {
                    throw new TypeError('Expected type Guid for EmailInsertResponseManagementRequest.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailInsertResponseManagementRequest.prototype, 'isInlineAttachment', {
            get: function() { return this.__prop_isInlineAttachment; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for EmailInsertResponseManagementRequest.isInlineAttachment, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isInlineAttachment = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailInsertResponseManagementRequest, '__type', { value: 'urn:inin.com:interactions.email:emailInsertResponseManagementRequest' });

    Object.defineProperty(EmailInsertResponseManagementRequest, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'isInlineAttachment': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailInsertResponseManagementRequest'] = EmailInsertResponseManagementRequest;

    return EmailInsertResponseManagementRequest;
}());

var EmailInsertResponseManagementResponse = (function(){
    var hasProps = false;

    function EmailInsertResponseManagementResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailInsertResponseManagementResponse' });
        }

        EmailInsertResponseManagementResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailInsertResponseManagementResponse, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailInsertResponseManagementResponse.prototype, 'contentId', {
            get: function() { return this.__prop_contentId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for EmailInsertResponseManagementResponse.contentId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_contentId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailInsertResponseManagementResponse, '__type', { value: 'urn:inin.com:interactions.email:emailInsertResponseManagementResponse' });

    Object.defineProperty(EmailInsertResponseManagementResponse, '__propInfo', {
        get: function() {
            var pi = {
                'contentId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailInsertResponseManagementResponse'] = EmailInsertResponseManagementResponse;

    return EmailInsertResponseManagementResponse;
}());

var EmailRemoveFileAttachmentRequest = (function(){
    var hasProps = false;

    function EmailRemoveFileAttachmentRequest() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailRemoveFileAttachmentRequest' });
        }

        EmailRemoveFileAttachmentRequest._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailRemoveFileAttachmentRequest, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailRemoveFileAttachmentRequest.prototype, 'fileUri', {
            get: function() { return this.__prop_fileUri; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailRemoveFileAttachmentRequest.fileUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fileUri = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailRemoveFileAttachmentRequest, '__type', { value: 'urn:inin.com:interactions.email:emailRemoveFileAttachmentRequest' });

    Object.defineProperty(EmailRemoveFileAttachmentRequest, '__propInfo', {
        get: function() {
            var pi = {
                'fileUri': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailRemoveFileAttachmentRequest'] = EmailRemoveFileAttachmentRequest;

    return EmailRemoveFileAttachmentRequest;
}());

var EmailSaveParameters = (function(){
    var hasProps = false;

    function EmailSaveParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailSaveParameters' });
        }

        EmailSaveParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailSaveParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailSaveParameters.prototype, 'emailContent', {
            get: function() { return this.__prop_emailContent; },
            set: function(value) {
                if (!(value instanceof EmailContent)) {
                    try {
                        value = new EmailContent(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailSaveParameters.emailContent: ' + e.message);
                    }
                }

                this.__prop_emailContent = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailSaveParameters, '__type', { value: 'urn:inin.com:interactions.email:emailSaveParameters' });

    Object.defineProperty(EmailSaveParameters, '__propInfo', {
        get: function() {
            var pi = {
                'emailContent': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailSaveParameters'] = EmailSaveParameters;

    return EmailSaveParameters;
}());

var EmailResolveAddressParameters = (function(){
    var hasProps = false;

    function EmailResolveAddressParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailResolveAddressParameters' });
        }

        EmailResolveAddressParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailResolveAddressParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailResolveAddressParameters.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailResolveAddressParameters.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailResolveAddressParameters.prototype, 'maxResults', {
            get: function() { return this.__prop_maxResults; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for EmailResolveAddressParameters.maxResults, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxResults = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailResolveAddressParameters, '__type', { value: 'urn:inin.com:interactions.email:emailResolveAddressParameters' });

    Object.defineProperty(EmailResolveAddressParameters, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'maxResults': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailResolveAddressParameters'] = EmailResolveAddressParameters;

    return EmailResolveAddressParameters;
}());

var EmailResolvedAddresses = (function(){
    var hasProps = false;

    function EmailResolvedAddresses() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailResolvedAddresses' });
        }

        EmailResolvedAddresses._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailResolvedAddresses, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailResolvedAddresses.prototype, 'matchedAddresses', {
            get: function() { return this.__prop_matchedAddresses; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailContact); }))) {
                    try {
                        value = value.map(function(item){ return new EmailContact(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailResolvedAddresses.matchedAddresses: ' + e.message);
                    }
                }

                this.__prop_matchedAddresses = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailResolvedAddresses, '__type', { value: 'urn:inin.com:interactions.email:emailResolvedAddresses' });

    Object.defineProperty(EmailResolvedAddresses, '__propInfo', {
        get: function() {
            var pi = {
                'matchedAddresses': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailResolvedAddresses'] = EmailResolvedAddresses;

    return EmailResolvedAddresses;
}());

var EmailContact = (function(){
    var hasProps = false;

    function EmailContact() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailContact' });
        }

        EmailContact._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailContact, _util.DataContract);

    function defineProps() {
        Object.defineProperty(EmailContact.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for EmailContact.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContact.prototype, 'address', {
            get: function() { return this.__prop_address; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailContact.address, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_address = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailContact, '__type', { value: 'urn:inin.com:interactions.email:emailContact' });

    Object.defineProperty(EmailContact, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: false, nullable: false },
                'address': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailContact'] = EmailContact;

    return EmailContact;
}());

var EmailMessageContentsResponse = (function(){
    var hasProps = false;

    function EmailMessageContentsResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailMessageContentsResponse', enumerable: true });
        }

        EmailMessageContentsResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailMessageContentsResponse, EmailMessageContentsResponseBase);

    function defineProps() {
        Object.defineProperty(EmailMessageContentsResponse.prototype, 'fileAttachments', {
            get: function() { return this.__prop_fileAttachments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailFileAttachment); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailFileAttachment(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailMessageContentsResponse.fileAttachments: ' + e.message);
                    }
                }

                this.__prop_fileAttachments = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailMessageContentsResponse.prototype, 'messageAttachments', {
            get: function() { return this.__prop_messageAttachments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailMessageContentsResponse); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailMessageContentsResponse(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailMessageContentsResponse.messageAttachments: ' + e.message);
                    }
                }

                this.__prop_messageAttachments = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailMessageContentsResponse, '__type', { value: 'urn:inin.com:interactions.email:emailMessageContentsResponse' });

    Object.defineProperty(EmailMessageContentsResponse, '__propInfo', {
        get: function() {
            var pi = {
                'fileAttachments': { required: false, nullable: false },
                'messageAttachments': { required: false, nullable: false }
            };
            if (EmailMessageContentsResponseBase.__propInfo) { _util.extend(pi, EmailMessageContentsResponseBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailMessageContentsResponse'] = EmailMessageContentsResponse;

    return EmailMessageContentsResponse;
}());

var RecordedEmailMessageContentsResponse = (function(){
    var hasProps = false;

    function RecordedEmailMessageContentsResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:recordedEmailMessageContentsResponse', enumerable: true });
        }

        RecordedEmailMessageContentsResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(RecordedEmailMessageContentsResponse, EmailMessageContentsResponseBase);

    function defineProps() {
        Object.defineProperty(RecordedEmailMessageContentsResponse.prototype, 'fileAttachments', {
            get: function() { return this.__prop_fileAttachments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RecordedEmailFileAttachment); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new RecordedEmailFileAttachment(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RecordedEmailMessageContentsResponse.fileAttachments: ' + e.message);
                    }
                }

                this.__prop_fileAttachments = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordedEmailMessageContentsResponse.prototype, 'messageAttachments', {
            get: function() { return this.__prop_messageAttachments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RecordedEmailMessageAttachment); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new RecordedEmailMessageAttachment(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RecordedEmailMessageContentsResponse.messageAttachments: ' + e.message);
                    }
                }

                this.__prop_messageAttachments = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RecordedEmailMessageContentsResponse, '__type', { value: 'urn:inin.com:interactions.email:recordedEmailMessageContentsResponse' });

    Object.defineProperty(RecordedEmailMessageContentsResponse, '__propInfo', {
        get: function() {
            var pi = {
                'fileAttachments': { required: false, nullable: false },
                'messageAttachments': { required: false, nullable: false }
            };
            if (EmailMessageContentsResponseBase.__propInfo) { _util.extend(pi, EmailMessageContentsResponseBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:recordedEmailMessageContentsResponse'] = RecordedEmailMessageContentsResponse;

    return RecordedEmailMessageContentsResponse;
}());

var RecordedEmailFileAttachment = (function(){
    var hasProps = false;

    function RecordedEmailFileAttachment() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:recordedEmailFileAttachment', enumerable: true });
        }

        RecordedEmailFileAttachment._super.constructor.apply(this, arguments);
    }
    _util.inherits(RecordedEmailFileAttachment, BaseEmailFileAttachment);

    function defineProps() {
        Object.defineProperty(RecordedEmailFileAttachment.prototype, 'attachmentId', {
            get: function() { return this.__prop_attachmentId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RecordedEmailFileAttachment.attachmentId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attachmentId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RecordedEmailFileAttachment, '__type', { value: 'urn:inin.com:interactions.email:recordedEmailFileAttachment' });

    Object.defineProperty(RecordedEmailFileAttachment, '__propInfo', {
        get: function() {
            var pi = {
                'attachmentId': { required: true, nullable: false }
            };
            if (BaseEmailFileAttachment.__propInfo) { _util.extend(pi, BaseEmailFileAttachment.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:recordedEmailFileAttachment'] = RecordedEmailFileAttachment;

    return RecordedEmailFileAttachment;
}());

var EmailFileAttachment = (function(){
    var hasProps = false;

    function EmailFileAttachment() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailFileAttachment', enumerable: true });
        }

        EmailFileAttachment._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailFileAttachment, BaseEmailFileAttachment);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(EmailFileAttachment, '__type', { value: 'urn:inin.com:interactions.email:emailFileAttachment' });

    Object.defineProperty(EmailFileAttachment, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (BaseEmailFileAttachment.__propInfo) { _util.extend(pi, BaseEmailFileAttachment.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailFileAttachment'] = EmailFileAttachment;

    return EmailFileAttachment;
}());

var RecordedEmailMessageAttachment = (function(){
    var hasProps = false;

    function RecordedEmailMessageAttachment() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:recordedEmailMessageAttachment', enumerable: true });
        }

        RecordedEmailMessageAttachment._super.constructor.apply(this, arguments);
    }
    _util.inherits(RecordedEmailMessageAttachment, EmailMessageAttachmentBase);

    function defineProps() {
        Object.defineProperty(RecordedEmailMessageAttachment.prototype, 'attachmentId', {
            get: function() { return this.__prop_attachmentId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RecordedEmailMessageAttachment.attachmentId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_attachmentId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RecordedEmailMessageAttachment, '__type', { value: 'urn:inin.com:interactions.email:recordedEmailMessageAttachment' });

    Object.defineProperty(RecordedEmailMessageAttachment, '__propInfo', {
        get: function() {
            var pi = {
                'attachmentId': { required: true, nullable: false }
            };
            if (EmailMessageAttachmentBase.__propInfo) { _util.extend(pi, EmailMessageAttachmentBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:recordedEmailMessageAttachment'] = RecordedEmailMessageAttachment;

    return RecordedEmailMessageAttachment;
}());

var EmailMessageAttachment = (function(){
    var hasProps = false;

    function EmailMessageAttachment() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailMessageAttachment', enumerable: true });
        }

        EmailMessageAttachment._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailMessageAttachment, EmailMessageAttachmentBase);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(EmailMessageAttachment, '__type', { value: 'urn:inin.com:interactions.email:emailMessageAttachment' });

    Object.defineProperty(EmailMessageAttachment, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (EmailMessageAttachmentBase.__propInfo) { _util.extend(pi, EmailMessageAttachmentBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailMessageAttachment'] = EmailMessageAttachment;

    return EmailMessageAttachment;
}());

var EmailContentsMessage = (function(){
    var hasProps = false;

    function EmailContentsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailContentsMessage', enumerable: true });
        }

        EmailContentsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailContentsMessage, Messaging.Message);

    function defineProps() {
        Object.defineProperty(EmailContentsMessage.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailContentsMessage.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsMessage.prototype, 'parentInteractionId', {
            get: function() { return this.__prop_parentInteractionId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for EmailContentsMessage.parentInteractionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_parentInteractionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsMessage.prototype, 'conversationId', {
            get: function() { return this.__prop_conversationId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for EmailContentsMessage.conversationId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_conversationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsMessage.prototype, 'isEditable', {
            get: function() { return this.__prop_isEditable; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for EmailContentsMessage.isEditable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isEditable = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsMessage.prototype, 'emailType', {
            get: function() { return this.__prop_emailType; },
            set: function(value) {
                if (!(value instanceof EmailType || value === void 0)) {
                    try {
                        value = new EmailType(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentsMessage.emailType: ' + e.message);
                    }
                }

                this.__prop_emailType = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsMessage.prototype, 'supportedResponseTypes', {
            get: function() { return this.__prop_supportedResponseTypes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailResponseType); }))) {
                    try {
                        value = value.map(function(item){ return new EmailResponseType(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentsMessage.supportedResponseTypes: ' + e.message);
                    }
                }

                this.__prop_supportedResponseTypes = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsMessage.prototype, 'emailContent', {
            get: function() { return this.__prop_emailContent; },
            set: function(value) {
                if (!(value instanceof EmailContentsResponse || value === void 0)) {
                    try {
                        value = new EmailContentsResponse(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentsMessage.emailContent: ' + e.message);
                    }
                }

                this.__prop_emailContent = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsMessage.prototype, 'hasResponse', {
            get: function() { return this.__prop_hasResponse; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for EmailContentsMessage.hasResponse, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasResponse = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsMessage.prototype, 'edited', {
            get: function() { return this.__prop_edited; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for EmailContentsMessage.edited, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_edited = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsMessage.prototype, 'mailbox', {
            get: function() { return this.__prop_mailbox; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for EmailContentsMessage.mailbox, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mailbox = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsMessage.prototype, 'mailboxDisplayName', {
            get: function() { return this.__prop_mailboxDisplayName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for EmailContentsMessage.mailboxDisplayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mailboxDisplayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsMessage.prototype, 'hasLoadedExternalContent', {
            get: function() { return this.__prop_hasLoadedExternalContent; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for EmailContentsMessage.hasLoadedExternalContent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_hasLoadedExternalContent = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsMessage.prototype, 'unusedEmailAttachments', {
            get: function() { return this.__prop_unusedEmailAttachments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for EmailContentsMessage.unusedEmailAttachments, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_unusedEmailAttachments = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailContentsMessage, '__type', { value: 'urn:inin.com:interactions.email:emailContentsMessage' });

    Object.defineProperty(EmailContentsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'interactionId': { required: true, nullable: false },
                'parentInteractionId': { required: false, nullable: false },
                'conversationId': { required: false, nullable: false },
                'isEditable': { required: true, nullable: false },
                'emailType': { required: false, nullable: false },
                'supportedResponseTypes': { required: true, nullable: false },
                'emailContent': { required: false, nullable: false },
                'hasResponse': { required: false, nullable: false },
                'edited': { required: false, nullable: false },
                'mailbox': { required: false, nullable: false },
                'mailboxDisplayName': { required: false, nullable: false },
                'hasLoadedExternalContent': { required: false, nullable: false },
                'unusedEmailAttachments': { required: false, nullable: false }
            };
            if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailContentsMessage'] = EmailContentsMessage;

    return EmailContentsMessage;
}());

var EmailContentsResponse = (function(){
    var hasProps = false;

    function EmailContentsResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailContentsResponse', enumerable: true });
        }

        EmailContentsResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailContentsResponse, EmailContentsResponseBase);

    function defineProps() {
        Object.defineProperty(EmailContentsResponse.prototype, 'fileAttachments', {
            get: function() { return this.__prop_fileAttachments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailFileAttachment); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailFileAttachment(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentsResponse.fileAttachments: ' + e.message);
                    }
                }

                this.__prop_fileAttachments = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailContentsResponse.prototype, 'messageAttachments', {
            get: function() { return this.__prop_messageAttachments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof EmailMessageAttachment); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new EmailMessageAttachment(item); });
                    } catch (e) {
                        throw new TypeError('Error setting EmailContentsResponse.messageAttachments: ' + e.message);
                    }
                }

                this.__prop_messageAttachments = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailContentsResponse, '__type', { value: 'urn:inin.com:interactions.email:emailContentsResponse' });

    Object.defineProperty(EmailContentsResponse, '__propInfo', {
        get: function() {
            var pi = {
                'fileAttachments': { required: false, nullable: false },
                'messageAttachments': { required: false, nullable: false }
            };
            if (EmailContentsResponseBase.__propInfo) { _util.extend(pi, EmailContentsResponseBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailContentsResponse'] = EmailContentsResponse;

    return EmailContentsResponse;
}());

var RecordedEmailContentsResponse = (function(){
    var hasProps = false;

    function RecordedEmailContentsResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:recordedEmailContentsResponse', enumerable: true });
        }

        RecordedEmailContentsResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(RecordedEmailContentsResponse, EmailContentsResponseBase);

    function defineProps() {
        Object.defineProperty(RecordedEmailContentsResponse.prototype, 'fileAttachments', {
            get: function() { return this.__prop_fileAttachments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RecordedEmailFileAttachment); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new RecordedEmailFileAttachment(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RecordedEmailContentsResponse.fileAttachments: ' + e.message);
                    }
                }

                this.__prop_fileAttachments = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordedEmailContentsResponse.prototype, 'messageAttachments', {
            get: function() { return this.__prop_messageAttachments; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RecordedEmailMessageAttachment); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new RecordedEmailMessageAttachment(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RecordedEmailContentsResponse.messageAttachments: ' + e.message);
                    }
                }

                this.__prop_messageAttachments = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RecordedEmailContentsResponse, '__type', { value: 'urn:inin.com:interactions.email:recordedEmailContentsResponse' });

    Object.defineProperty(RecordedEmailContentsResponse, '__propInfo', {
        get: function() {
            var pi = {
                'fileAttachments': { required: false, nullable: false },
                'messageAttachments': { required: false, nullable: false }
            };
            if (EmailContentsResponseBase.__propInfo) { _util.extend(pi, EmailContentsResponseBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:recordedEmailContentsResponse'] = RecordedEmailContentsResponse;

    return RecordedEmailContentsResponse;
}());

var EmailUploadFileAttachmentResponse = (function(){
    var hasProps = false;

    function EmailUploadFileAttachmentResponse() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailUploadFileAttachmentResponse', enumerable: true });
        }

        EmailUploadFileAttachmentResponse._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailUploadFileAttachmentResponse, Common.AsyncOperationAcceptedResponse);

    function defineProps() {
        Object.defineProperty(EmailUploadFileAttachmentResponse.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailUploadFileAttachmentResponse.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailUploadFileAttachmentResponse.prototype, 'fileName', {
            get: function() { return this.__prop_fileName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailUploadFileAttachmentResponse.fileName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fileName = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailUploadFileAttachmentResponse.prototype, 'contentId', {
            get: function() { return this.__prop_contentId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for EmailUploadFileAttachmentResponse.contentId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_contentId = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailUploadFileAttachmentResponse.prototype, 'uploadUri', {
            get: function() { return this.__prop_uploadUri; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailUploadFileAttachmentResponse.uploadUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_uploadUri = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailUploadFileAttachmentResponse, '__type', { value: 'urn:inin.com:interactions.email:emailUploadFileAttachmentResponse' });

    Object.defineProperty(EmailUploadFileAttachmentResponse, '__propInfo', {
        get: function() {
            var pi = {
                'interactionId': { required: true, nullable: false },
                'fileName': { required: true, nullable: false },
                'contentId': { required: false, nullable: false },
                'uploadUri': { required: true, nullable: false }
            };
            if (Common.AsyncOperationAcceptedResponse.__propInfo) { _util.extend(pi, Common.AsyncOperationAcceptedResponse.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailUploadFileAttachmentResponse'] = EmailUploadFileAttachmentResponse;

    return EmailUploadFileAttachmentResponse;
}());

var CreateEmailResponseParameters = (function(){
    var hasProps = false;

    function CreateEmailResponseParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:createEmailResponseParameters', enumerable: true });
        }

        CreateEmailResponseParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateEmailResponseParameters, Interactions.CreateInteractionParameters);

    function defineProps() {
        Object.defineProperty(CreateEmailResponseParameters.prototype, 'emailContent', {
            get: function() { return this.__prop_emailContent; },
            set: function(value) {
                if (!(value instanceof EmailResponseContent)) {
                    try {
                        value = new EmailResponseContent(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateEmailResponseParameters.emailContent: ' + e.message);
                    }
                }

                this.__prop_emailContent = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateEmailResponseParameters.prototype, 'responseType', {
            get: function() { return this.__prop_responseType; },
            set: function(value) {
                if (!(value instanceof EmailResponseType)) {
                    try {
                        value = new EmailResponseType(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateEmailResponseParameters.responseType: ' + e.message);
                    }
                }

                this.__prop_responseType = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateEmailResponseParameters.prototype, 'parentInteractionId', {
            get: function() { return this.__prop_parentInteractionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CreateEmailResponseParameters.parentInteractionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_parentInteractionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateEmailResponseParameters.prototype, 'workgroup', {
            get: function() { return this.__prop_workgroup; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateEmailResponseParameters.workgroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroup = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateEmailResponseParameters, '__type', { value: 'urn:inin.com:interactions.email:createEmailResponseParameters' });

    Object.defineProperty(CreateEmailResponseParameters, '__propInfo', {
        get: function() {
            var pi = {
                'emailContent': { required: true, nullable: false },
                'responseType': { required: true, nullable: false },
                'parentInteractionId': { required: true, nullable: false },
                'workgroup': { required: false, nullable: false }
            };
            if (Interactions.CreateInteractionParameters.__propInfo) { _util.extend(pi, Interactions.CreateInteractionParameters.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:createEmailResponseParameters'] = CreateEmailResponseParameters;

    return CreateEmailResponseParameters;
}());

var EmailResponseContent = (function(){
    var hasProps = false;

    function EmailResponseContent() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailResponseContent', enumerable: true });
        }

        EmailResponseContent._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailResponseContent, EmailContentBase);

    function defineProps() {
        Object.defineProperty(EmailResponseContent.prototype, 'attachmentsFromParent', {
            get: function() { return this.__prop_attachmentsFromParent; },
            set: function(value) {
                if (!(value instanceof EmailResponseAttachments)) {
                    try {
                        value = new EmailResponseAttachments(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailResponseContent.attachmentsFromParent: ' + e.message);
                    }
                }

                this.__prop_attachmentsFromParent = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailResponseContent, '__type', { value: 'urn:inin.com:interactions.email:emailResponseContent' });

    Object.defineProperty(EmailResponseContent, '__propInfo', {
        get: function() {
            var pi = {
                'attachmentsFromParent': { required: true, nullable: false }
            };
            if (EmailContentBase.__propInfo) { _util.extend(pi, EmailContentBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailResponseContent'] = EmailResponseContent;

    return EmailResponseContent;
}());

var EmailContent = (function(){
    var hasProps = false;

    function EmailContent() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailContent', enumerable: true });
        }

        EmailContent._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailContent, EmailContentBase);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(EmailContent, '__type', { value: 'urn:inin.com:interactions.email:emailContent' });

    Object.defineProperty(EmailContent, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (EmailContentBase.__propInfo) { _util.extend(pi, EmailContentBase.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailContent'] = EmailContent;

    return EmailContent;
}());

var CreateEmailParameters = (function(){
    var hasProps = false;

    function CreateEmailParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:createEmailParameters', enumerable: true });
        }

        CreateEmailParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(CreateEmailParameters, Interactions.CreateInteractionParameters);

    function defineProps() {
        Object.defineProperty(CreateEmailParameters.prototype, 'emailContent', {
            get: function() { return this.__prop_emailContent; },
            set: function(value) {
                if (!(value instanceof EmailContent)) {
                    try {
                        value = new EmailContent(value);
                    } catch (e) {
                        throw new TypeError('Error setting CreateEmailParameters.emailContent: ' + e.message);
                    }
                }

                this.__prop_emailContent = value;
            },
            enumerable: true
        });

        Object.defineProperty(CreateEmailParameters.prototype, 'workgroup', {
            get: function() { return this.__prop_workgroup; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for CreateEmailParameters.workgroup, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_workgroup = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CreateEmailParameters, '__type', { value: 'urn:inin.com:interactions.email:createEmailParameters' });

    Object.defineProperty(CreateEmailParameters, '__propInfo', {
        get: function() {
            var pi = {
                'emailContent': { required: true, nullable: false },
                'workgroup': { required: false, nullable: false }
            };
            if (Interactions.CreateInteractionParameters.__propInfo) { _util.extend(pi, Interactions.CreateInteractionParameters.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:createEmailParameters'] = CreateEmailParameters;

    return CreateEmailParameters;
}());

var EmailUploadFileStatusMessage = (function(){
    var hasProps = false;

    function EmailUploadFileStatusMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailUploadFileStatusMessage', enumerable: true });
        }

        EmailUploadFileStatusMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailUploadFileStatusMessage, Messaging.AsyncOperationCompletedMessage);

    function defineProps() {
        Object.defineProperty(EmailUploadFileStatusMessage.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailUploadFileStatusMessage.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailUploadFileStatusMessage.prototype, 'fileName', {
            get: function() { return this.__prop_fileName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailUploadFileStatusMessage.fileName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_fileName = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailUploadFileStatusMessage.prototype, 'uploadSuccess', {
            get: function() { return this.__prop_uploadSuccess; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for EmailUploadFileStatusMessage.uploadSuccess, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_uploadSuccess = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailUploadFileStatusMessage, '__type', { value: 'urn:inin.com:interactions.email:emailUploadFileStatusMessage' });

    Object.defineProperty(EmailUploadFileStatusMessage, '__propInfo', {
        get: function() {
            var pi = {
                'interactionId': { required: true, nullable: false },
                'fileName': { required: true, nullable: false },
                'uploadSuccess': { required: true, nullable: false }
            };
            if (Messaging.AsyncOperationCompletedMessage.__propInfo) { _util.extend(pi, Messaging.AsyncOperationCompletedMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailUploadFileStatusMessage'] = EmailUploadFileStatusMessage;

    return EmailUploadFileStatusMessage;
}());

var EmailMessageAttachmentMessage = (function(){
    var hasProps = false;

    function EmailMessageAttachmentMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailMessageAttachmentMessage', enumerable: true });
        }

        EmailMessageAttachmentMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailMessageAttachmentMessage, Messaging.AsyncOperationCompletedMessage);

    function defineProps() {
        Object.defineProperty(EmailMessageAttachmentMessage.prototype, 'interactionId', {
            get: function() { return this.__prop_interactionId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for EmailMessageAttachmentMessage.interactionId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_interactionId = value;
            },
            enumerable: true
        });

        Object.defineProperty(EmailMessageAttachmentMessage.prototype, 'emailContent', {
            get: function() { return this.__prop_emailContent; },
            set: function(value) {
                if (!(value instanceof EmailMessageContentsResponse)) {
                    try {
                        value = new EmailMessageContentsResponse(value);
                    } catch (e) {
                        throw new TypeError('Error setting EmailMessageAttachmentMessage.emailContent: ' + e.message);
                    }
                }

                this.__prop_emailContent = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(EmailMessageAttachmentMessage, '__type', { value: 'urn:inin.com:interactions.email:emailMessageAttachmentMessage' });

    Object.defineProperty(EmailMessageAttachmentMessage, '__propInfo', {
        get: function() {
            var pi = {
                'interactionId': { required: true, nullable: false },
                'emailContent': { required: true, nullable: false }
            };
            if (Messaging.AsyncOperationCompletedMessage.__propInfo) { _util.extend(pi, Messaging.AsyncOperationCompletedMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailMessageAttachmentMessage'] = EmailMessageAttachmentMessage;

    return EmailMessageAttachmentMessage;
}());

var EmailSubscriptionStateMessage = (function(){
    var hasProps = false;

    function EmailSubscriptionStateMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.email:emailSubscriptionStateMessage', enumerable: true });
        }

        EmailSubscriptionStateMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(EmailSubscriptionStateMessage, Messaging.SubscriptionStateMessage);

    function defineProps() {
        hasProps = true;
    }

    Object.defineProperty(EmailSubscriptionStateMessage, '__type', { value: 'urn:inin.com:interactions.email:emailSubscriptionStateMessage' });

    Object.defineProperty(EmailSubscriptionStateMessage, '__propInfo', {
        get: function() {
            var pi = {
            };
            if (Messaging.SubscriptionStateMessage.__propInfo) { _util.extend(pi, Messaging.SubscriptionStateMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:interactions.email:emailSubscriptionStateMessage'] = EmailSubscriptionStateMessage;

    return EmailSubscriptionStateMessage;
}());

var $save = (function(){
    function emailSave(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof emailSave.params)) {
            try {
                params = new emailSave.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: emailSave.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(emailSave.method, emailSave.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(emailSave, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/email/save', enumerable: true }
    });

    emailSave.params = (function(){
        _util.inherits(emailSave_params, _util.RequestParams);

        function emailSave_params(properties) {
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
            if (!(properties.content instanceof EmailSaveParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Email.EmailSaveParameters');
            }

            emailSave_params._super.constructor.apply(this, arguments);
        }

        return emailSave_params;
    })();

    return Object.create(null, {
        emailSave: { value: emailSave, enumerable: true }
    });
})();

var $send = (function(){
    function emailSend(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof emailSend.params)) {
            try {
                params = new emailSend.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: emailSend.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(emailSend.method, emailSend.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(emailSend, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/{interactionId}/email/send', enumerable: true }
    });

    emailSend.params = (function(){
        _util.inherits(emailSend_params, _util.RequestParams);

        function emailSend_params(properties) {
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

            emailSend_params._super.constructor.apply(this, arguments);
        }

        return emailSend_params;
    })();

    return Object.create(null, {
        emailSend: { value: emailSend, enumerable: true }
    });
})();

var $resolveAddress = (function(){
    function emailResolveAddress(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof emailResolveAddress.params)) {
            try {
                params = new emailResolveAddress.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: emailResolveAddress.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof EmailResolvedAddresses) ? o : new EmailResolvedAddresses(o); };
        dc['400'] = dc['504'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(emailResolveAddress.method, emailResolveAddress.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(emailResolveAddress, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/interactions/email/resolve-address', enumerable: true }
    });

    emailResolveAddress.params = (function(){
        _util.inherits(emailResolveAddress_params, _util.RequestParams);

        function emailResolveAddress_params(properties) {
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
            if (!(properties.content instanceof EmailResolveAddressParameters)) {
                throw new TypeError('`properties.content` value does not match the expected type: Interactions.Email.EmailResolveAddressParameters');
            }

            emailResolveAddress_params._super.constructor.apply(this, arguments);
        }

        return emailResolveAddress_params;
    })();

    return Object.create(null, {
        emailResolveAddress: { value: emailResolveAddress, enumerable: true }
    });
})();

exports.BodyType = BodyType;
exports.EmailSignatureStatus = EmailSignatureStatus;
exports.EmailType = EmailType;
exports.EmailResponseType = EmailResponseType;
exports.EmailResponseAttachments = EmailResponseAttachments;
exports.EmailUploadFileStatusMessage = EmailUploadFileStatusMessage;
exports.EmailMessageAttachmentMessage = EmailMessageAttachmentMessage;
exports.EmailMessageContentsResponse = EmailMessageContentsResponse;
exports.EmailMessageContentsResponseBase = EmailMessageContentsResponseBase;
exports.EmailAddress = EmailAddress;
exports.EmailBody = EmailBody;
exports.EmailSignature = EmailSignature;
exports.EmailCertificate = EmailCertificate;
exports.RecordedEmailMessageContentsResponse = RecordedEmailMessageContentsResponse;
exports.RecordedEmailFileAttachment = RecordedEmailFileAttachment;
exports.BaseEmailFileAttachment = BaseEmailFileAttachment;
exports.EmailFileAttachment = EmailFileAttachment;
exports.RecordedEmailMessageAttachment = RecordedEmailMessageAttachment;
exports.EmailMessageAttachmentBase = EmailMessageAttachmentBase;
exports.EmailMessageAttachment = EmailMessageAttachment;
exports.EmailSubscriptionStateMessage = EmailSubscriptionStateMessage;
exports.EmailContentsMessage = EmailContentsMessage;
exports.EmailContentsResponse = EmailContentsResponse;
exports.EmailContentsResponseBase = EmailContentsResponseBase;
exports.RecordedEmailContentsResponse = RecordedEmailContentsResponse;
exports.EmailUploadFileAttachmentResponse = EmailUploadFileAttachmentResponse;
exports.CreateEmailResponseParameters = CreateEmailResponseParameters;
exports.EmailResponseContent = EmailResponseContent;
exports.EmailContentBase = EmailContentBase;
exports.EmailContent = EmailContent;
exports.CreateEmailParameters = CreateEmailParameters;
exports.EmailGetMessageParameters = EmailGetMessageParameters;
exports.EmailUploadFileAttachmentRequest = EmailUploadFileAttachmentRequest;
exports.EmailInsertResponseManagementRequest = EmailInsertResponseManagementRequest;
exports.EmailInsertResponseManagementResponse = EmailInsertResponseManagementResponse;
exports.EmailRemoveFileAttachmentRequest = EmailRemoveFileAttachmentRequest;
exports.EmailSaveParameters = EmailSaveParameters;
exports.EmailResolveAddressParameters = EmailResolveAddressParameters;
exports.EmailResolvedAddresses = EmailResolvedAddresses;
exports.EmailContact = EmailContact;
exports.$save = $save;
exports.$send = $send;
exports.$resolveAddress = $resolveAddress;
