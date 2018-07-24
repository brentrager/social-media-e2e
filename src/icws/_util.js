/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _typemap = require('./_typemap');

var __cls = function(o){ return Object.prototype.toString.call(o); },
    __guidRegExp = /^[0-9A-F]{8}\-[0-9A-F]{4}\-[0-9A-F]{4}\-[0-9A-F]{4}\-[0-9A-F]{12}$/i,
    isArray = Array.isArray,
    isObject = function(o){ return o === Object(o); },
    isFunction = function(o){ return __cls(o) === '[object Function]'; },
    isString = function(o){ return __cls(o) === '[object String]'; },
    isNumber = function(o){ return __cls(o) === '[object Number]'; },
    isBoolean = function(o){ return o === true || o === false || __cls(o) === '[object Boolean]'; },
    isDate = function(o){ return __cls(o) === '[object Date]'; },
    isValidDate = function(o){ return isDate(o) && !isNaN(o.getTime()); },
    isDuration = function(o){ return o instanceof Duration; },
    isGuid = function(o){ return o instanceof Guid; },
    isEnum = function(o){ return o instanceof EnumValue; },
    isBitFlagsEnum = function(o){ return o instanceof BitFlagsEnumValue; },
    noop = function(){},
    hasProp = function(obj, key){ return Object.prototype.hasOwnProperty.call(obj, key); },
    inspect = function(o) {
        if (o === void 0) { return 'undefined'; }
        if (o === null) { return 'null'; }
        return o + ' ' + __cls(o);
    },

    __sessionId = null, __sessionToken = null,
    __sessionIdHeader = 'ININ-ICWS-Session-ID',
    __sessionIdTemplate = 'sessionId',
    __sessionTokenHeader = 'ININ-ICWS-CSRF-Token',
    __sessionTokenTemplate = 'sessionToken',
    __createConnectionUrlTemplate = '/icws/connection',
    __connectionCreatedStatusCode = 201,
    __messagesUrlTemplate = '/icws/{sessionId}/messaging/messages',
    __requestTimeout = 10000,
    getRequestTimeout = function(){ return __requestTimeout; },
    setRequestTimeout = function(timeout){ return __requestTimeout = Number(timeout); },
    __baseUrl = '',
    getBaseUrl = function(){ return __baseUrl; },
    setBaseUrl = function(url){ return __baseUrl = String(url); },

    __chromeDevToolsExtensionPresent = (typeof window !== 'undefined' && window.document && window.document.body && isFunction(window.document.body.hasAttribute) && window.document.body.hasAttribute('data-icwspanel')),
    __chromeDevToolsMessageTarget = null,
    __chromeDevToolsPanelInitMessage = 'icws-chrome-devtools-panel-init',
    __postMessageToDevTools = function(type, content){
        if (!__chromeDevToolsExtensionPresent || (!__chromeDevToolsMessageTarget && type !== __chromeDevToolsPanelInitMessage)) {{ return; }}
        window.postMessage({ type: type, source: 'icwsjs', target: __chromeDevToolsMessageTarget, timestamp: Date.now(), content: JSON.stringify(content) }, window.location.origin);
    },

    isValidDataContract = function(dc) {
        if (!(dc instanceof DataContract)) { return false; }
        var propInfoMap = _typemap[dc.__type].__propInfo;
        if (!propInfoMap) { return true; }

        return Object.keys(propInfoMap).every(function(propName) {
            var p = propInfoMap[propName];
            var propValue = dc[propName];
            if (p.required && propValue === undefined) { return false; }
            if (!p.nullable && propValue === null) { return false; }
            if (propValue != null && hasProp(propValue, '__type') && !isValidDataContract(propValue)) { return false; }
            return true;
        });
    },

    copyProps = function(src, dst) {
        if (!src || !dst) { return; }
        Object.keys(src).forEach(function(p) {
            var descriptor = Object.getOwnPropertyDescriptor(dst, p);
            if (descriptor && !(isFunction(descriptor.set) || descriptor.writable)) { return; }
            dst[p] = src[p];
        });
    },

    extend = function(target, source) {
        Object.getOwnPropertyNames(source).forEach(function(p){
            Object.defineProperty(target, p, Object.getOwnPropertyDescriptor(source, p));
        });
    },

    inherits = function(child, parent) {
        var childProto = Object.create(parent.prototype);
        extend(childProto, child.prototype);
        child.prototype = childProto;
        child.prototype.constructor = child;
        Object.defineProperty(child, '_super', { value: parent.prototype });
    },

    dateFromISO8601String = function(iso8601str) {
        var iso8601StandardDateRegExp = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}(?:\.\d*)?))?Z$/;
        var iso8601CompactDateRegExp = /^(\d{4})(\d{2})(\d{2})T?(\d{2})(\d{2})(\d{2}(?:\.\d*)?)?Z$/;
        var d = iso8601StandardDateRegExp.exec(iso8601str) || iso8601CompactDateRegExp.exec(iso8601str);
        if (d) {
            return new Date(Date.UTC(parseInt(d[1], 10), parseInt(d[2], 10) - 1, parseInt(d[3], 10), parseInt(d[4], 10), parseInt(d[5], 10), parseInt(d[6], 10)));
        }
        return new Date(NaN);
    },

    jsonReviver = function (key, value) {
        if (value && hasProp(value, '__type') && isFunction(_typemap[value['__type']])) {
            return new _typemap[value['__type']](value);
        }
        return value;
    },

    jsonStringify = function (s) {
        return JSON.stringify(s);
    },

    jsonParse = function (o) {
        return JSON.parse(o, jsonReviver);
    },

    __xhrLastCorrelationId = 0,

    xhr = function(verb, urlTemplate, params, dataContractMap, callbackMap) {
        var correlationId = __xhrLastCorrelationId++;
        extend(params.header, { 'X-ICWS-DevTools-CorrelationId': correlationId });
        var url = resourceMethodUrl(urlTemplate, params), content = params.content, timeout = getRequestTimeout();

        if (content instanceof DataContract) {
            content = jsonStringify(content);
        }

        if (content !== null && !isString(content)) {
            throw new TypeError('`params.content` argument must be null, a string, or an instance of DataContract');
        }

        var requestData = {
            correlationId: correlationId,
            timeout: timeout,
            verb: verb,
            urlTemplate: urlTemplate,
            params: params,
            url: url
        };
        __postMessageToDevTools('icws-request', requestData);

        var req = new XMLHttpRequest();

        var postResponseToDevTools = function(result, content) {
            var responseData = {
                correlationId: correlationId,
                result: result,
                status: req.status,
                content: content,
                size: {
                    headers: (req && isFunction(req.getAllResponseHeaders)) ? req.getAllResponseHeaders().length : 0,
                    body: req && req.response && req.response.length
                }
            };
            __postMessageToDevTools('icws-response', responseData);
        };

        var failback = function(result, types){ return function(e){ postResponseToDevTools(result); for(var i=0;i<types.length;i++){ if (isFunction(callbackMap[types[i]])) { callbackMap[types[i]](req); break; }} }; };

        req.onabort = failback('abort', ['abort', 'error', 'default']);
        req.onerror = failback('error', ['error', 'default']);
        req.ontimeout = failback('timeout', ['timeout', 'error', 'default']);
        req.onload = function(e) {
            var responseObject = null, dataContract = null, dataContractGenerator, sessionIdHeaderValue, sessionTokenHeaderValue;

            try {
                if (urlTemplate === __createConnectionUrlTemplate && req.status === __connectionCreatedStatusCode) {
                    sessionIdHeaderValue = req.getResponseHeader(__sessionIdHeader);
                    if (sessionIdHeaderValue) {
                        __sessionId = sessionIdHeaderValue;
                    }

                    sessionTokenHeaderValue = req.getResponseHeader(__sessionTokenHeader);
                    if (sessionTokenHeaderValue) {
                        __sessionToken = sessionTokenHeaderValue;
                    }
                }

                if ((req.getResponseHeader('Content-Type')||'').split(/\s*;\s*/)[0].toLowerCase() === 'application/vnd.inin.icws+json' && isString(req.responseText) && req.responseText.length > 0) {
                    responseObject = jsonParse(req.responseText);
                    dataContractGenerator = dataContractMap[String(req.status)];
                    dataContract = isFunction(dataContractGenerator) ? dataContractGenerator(responseObject) : responseObject;
                }

                postResponseToDevTools('complete', dataContract);

                if (urlTemplate === __messagesUrlTemplate && isArray(dataContract)) {
                    for (var messageIndex = 0; messageIndex < dataContract.length; messageIndex++) {
                        __postMessageToDevTools('icws-message', dataContract[messageIndex]);
                    }
                }
            } catch(e) { dataContract = e; }

            invokeResponseCallback(req, callbackMap, dataContract);
        };

        req.open(verb, url, true);
        req.withCredentials = true;
        req.timeout = timeout;
        req.setRequestHeader('Accept', 'application/vnd.inin.icws+JSON');
        req.setRequestHeader('Content-Type', 'application/vnd.inin.icws+JSON;charset=utf-8');
        Object.keys(params.header).forEach(function(key){
            req.setRequestHeader(key, params.header[key]);
        });
        req.send(content);
        return req;
    },

    IcwsEventSource = (function(){
        var NativeEventSource = typeof EventSource !== 'undefined' ? EventSource : Object;

        function IcwsEventSource(urlTemplate, params, callbackMap, dataContractType) {
            /*jshint validthis:true */
            if (NativeEventSource === Object) {
                throw new TypeError('"EventSource" is not supported in this environment.');
            }

            var url = resourceMethodUrl(urlTemplate, params),
                openCallback = callbackMap.open,
                errorCallback = callbackMap.error,
                messageCallback = callbackMap.message,
                eventSource = new NativeEventSource(url, { withCredentials: true });

            eventSource.onopen = function (e) { if (isFunction(openCallback)) { openCallback(e); } };
            eventSource.onerror = function (e) { if (isFunction(errorCallback)) { errorCallback(e); } };
            eventSource.onmessage = function(e) {
                try {
                    if (isFunction(messageCallback)) {
                        var data = jsonParse(e.data);
                        if (!(data instanceof dataContractType)) {
                            data = new dataContractType(data);
                        }
                        __postMessageToDevTools('icws-message', data);
                        messageCallback(data);
                    }
                }
                catch (err) {
                    if (isFunction(errorCallback)) {
                        errorCallback(err, e);
                    }
                }
            };

            Object.defineProperties(this, {
                'url': { get: function() { return eventSource.url; }, enumerable: true },
                'withCredentials': { get: function() { return eventSource.withCredentials; }, enumerable: true },
                'readyState': { get: function() { return eventSource.readyState; }, enumerable: true },
                'close': { value: function() { return eventSource.close(); } }
            });
        }

        Object.keys(NativeEventSource).forEach(function(prop) {
            // Certain implementations of EventSource expose additional properties that should not be copied.
            if (['prototype', 'toString'].indexOf(prop) === -1) {
                Object.defineProperty(IcwsEventSource, prop, Object.getOwnPropertyDescriptor(NativeEventSource, prop));
            }
        });

        return IcwsEventSource;
    }()),

    resourceMethodUrlParts = function (tmpl, params) {
        var url = tmpl, hasQS = (url.indexOf('?') !== -1), tokens = url.match(/\{([^\}]+)\}/g) || [];
        tokens.forEach(function(m){
            var tkn = m.slice(1, -1);
            if (hasProp(params.template, tkn)) {
                url = url.replace(m, encodeURIComponent(params.template[tkn]));
            }
        });
        var queryString = '';
        Object.keys(params.query).forEach(function(q){
            var value = params.query[q];
            if (isArray(value)) { value = value.join(','); }
            queryString += (hasQS ? '&' : '?') + encodeURIComponent(q) + '=' + encodeURIComponent(value);
            hasQS = true;
        });

        return {
            apiUrl: url,
            queryString: queryString
        };
    },

    resourceMethodUrl = function (tmpl, params) {
        var urlParts = resourceMethodUrlParts(tmpl, params);
        return __baseUrl + urlParts.apiUrl + urlParts.queryString;
    },

    addSessionIdHeader = function (p) {
        if (__sessionId && isObject(p) && !hasProp(p.header || (p.header = {}), __sessionIdHeader)) {
            p.header[__sessionIdHeader] = __sessionId;
        }
    },

    addSessionIdTemplate = function (p) {
        if (__sessionId && isObject(p) && !hasProp(p.template || (p.template = {}), __sessionIdTemplate)) {
            p.template[__sessionIdTemplate] = __sessionId;
        }
    },

    addSessionTokenHeader = function (p) {
        if (__sessionToken && isObject(p) && !hasProp(p.header || (p.header = {}), __sessionTokenHeader)) {
            p.header[__sessionTokenHeader] = __sessionToken;
        }
    },

    addSessionTokenTemplate = function (p) {
        if (__sessionToken && isObject(p) && !hasProp(p.template || (p.template = {}), __sessionTokenTemplate)) {
            p.template[__sessionTokenTemplate] = __sessionToken;
        }
    },

    invokeResponseCallback = function (xhr, callbackMap, dataContract) {
        var statusCode = xhr.status, sc = String(statusCode), callbacksToTry = ['default'];

        if (statusCode < 100 || statusCode > 999 || (statusCode >= 400 && statusCode <= 599)) {
            callbacksToTry.unshift('error');
        }
        if (sc.length === 3) {
            callbacksToTry.unshift(sc, sc.slice(0,2)+'x', sc.slice(0,1)+'xx');
        }
        if (dataContract instanceof Error) {
            callbacksToTry.unshift('error');
        }

        for (var i = 0; i < callbacksToTry.length; i++) {
            var cb = callbacksToTry[i];
            if (isFunction(callbackMap[cb])) {
                callbackMap[cb](xhr, dataContract);
                break;
            }
        }
    },

    Duration = (function(){
        var SECONDS_PER_MILLISECOND = 0.001,
            SECONDS_PER_MINUTE = 60,
            SECONDS_PER_HOUR = 3600,
            SECONDS_PER_DAY = 86400;

        function Duration(input) {
            this.value = isNumber(input) ? input : parseFloat(input);
        }

        Duration.fromMilliseconds = function(milliseconds) {
            return new Duration(SECONDS_PER_MILLISECOND * parseFloat(milliseconds));
        };

        Duration.fromSeconds = function(seconds) {
            return new Duration(seconds);
        };

        Duration.fromMinutes = function(minutes, seconds) {
            return new Duration((SECONDS_PER_MINUTE * parseFloat(minutes)) + parseFloat(seconds || 0));
        };

        Duration.fromHours = function(hours, minutes, seconds) {
            return new Duration((SECONDS_PER_HOUR * parseFloat(hours)) + (SECONDS_PER_MINUTE * parseFloat(minutes || 0)) + parseFloat(seconds || 0));
        };

        Duration.fromDays = function(days, hours, minutes, seconds) {
            return new Duration((SECONDS_PER_DAY * parseFloat(days)) + (SECONDS_PER_HOUR * parseFloat(hours || 0)) + (SECONDS_PER_MINUTE * parseFloat(minutes || 0)) + parseFloat(seconds || 0));
        };

        Duration.prototype.toJSON = Duration.prototype.valueOf = function() {
            return isNumber(this.value) ? this.value : NaN;
        };

        Duration.prototype.toString = function() {
            return this.value.toString();
        };

        return Duration;
    }()),

    DataContract = (function(){
        function DataContract(properties) {
            if (isString(properties)) {
                properties = jsonParse(properties);
            }
            copyProps(properties, this);
        }

        DataContract.prototype.toJSON = function() {
            if (this.__type && isFunction(_typemap[this.__type]) && _typemap[this.__type].__propInfo) {
                var that = this, toSerialize = {};
                this.keys().forEach(function(p) {
                    toSerialize[p] = that[p];
                });
                if (!_typemap[this.__type].__propInfo.__type.required) { 
                    delete toSerialize.__type;
                }
                return toSerialize;
            }
            return this;
        };

        DataContract.prototype.clone = function() {
            if (this.__type && isFunction(_typemap[this.__type])) {
                var that = this, newInstance = new _typemap[this.__type]();
                this.keys().forEach(function(p){
                    if (p.indexOf('__type') !== 0) {
                        newInstance[p] = (that[p] && isFunction(that[p].clone)) ? that[p].clone() : that[p];
                    }
                });
                return newInstance;
            }
        };
        DataContract.prototype.keys = function() {
            if (this.__type && isFunction(_typemap[this.__type]) && _typemap[this.__type].__propInfo) {
                var that = this, props = [];
                Object.keys(_typemap[this.__type].__propInfo).forEach(function(p) {
                    if (props.indexOf(p) < 0 && p.indexOf('__prop_') !== 0) {
                        props.push(p);
                    }
                });
                Object.getOwnPropertyNames(this).forEach(function(p){
                    if (props.indexOf(p) < 0 && p.indexOf('__prop_') !== 0) {
                        props.push(p);
                    }
                });
                return props;
            }
            return Object.keys(this);
        };
        return DataContract;
    }()),

    EnumValue = (function(){
        function EnumValue(value, name) {
            if (!isNumber(value)) {
                throw new TypeError('`value` argument must be a number');
            }
            Object.defineProperty(this, 'value', { 'value': value, 'enumerable': true });

            if (!isString(name)) {
                throw new TypeError('`name` argument must be a string');
            }
            Object.defineProperty(this, 'name', { 'value': name });
        }
        inherits(EnumValue, DataContract);

        EnumValue.prototype.valueOf = EnumValue.prototype.toJSON = function() {
            return this.value;
        };

        EnumValue.prototype.clone = function() {
            return this;
        };

        EnumValue.prototype.toString = function() {
            return this.name;
        };

        return EnumValue;
    }()),

    BitFlagsEnumValue = (function(){
        function BitFlagsEnumValue(value, name) {
            EnumValue.call(this, value, name);
        }
        inherits(BitFlagsEnumValue, EnumValue);

        BitFlagsEnumValue.prototype.valueOf = BitFlagsEnumValue.prototype.toJSON = function() {
            return this.value;
        };

        BitFlagsEnumValue.prototype.toString = function() {
            return this.name;
        };

        return BitFlagsEnumValue;
    }()),

    Guid = (function(){
        function Guid(value) {
            if (!isString(value) || !__guidRegExp.test(value)) {
                throw new TypeError('`value` argument must be a GUID');
            }
            Object.defineProperty(this, 'value', { 'value': value });
        }

        Guid.prototype.valueOf = Guid.prototype.toString = Guid.prototype.toJSON = function() {
            return this.value;
        };

        Object.defineProperty(Guid, 'createPseudoGuid', { value: function Guid_createPseudoGuid() {
            /*jshint bitwise:false */
            // Create a pseudo-GUID in JavaScript. This is not a "true" GUID, but it's allowed according to RFC4122, Section 4.4.
            // The technique used here appears in the following StackOverflow answer, contributed by user 'broofa':
            // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript#2117523
            return new Guid('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c==='x'?r:r&0x3|0x8;return v.toString(16);}));
        }});

        return Guid;
    }()),

    RequestParams = (function(){
        function RequestParams(properties) {
            Object.defineProperty(this, 'template', { value: {}, writable: true, enumerable: true });
            Object.defineProperty(this, 'header', { value: {}, writable: true, enumerable: true });
            Object.defineProperty(this, 'query', { value: {}, writable: true, enumerable: true });

            Object.defineProperty(this, 'content', { value: hasProp(properties, 'content') && properties.content instanceof DataContract ? properties.content : null, enumerable: true });

            if (hasProp(properties, 'template') && isObject(properties.template)) {
                copyProps(properties.template, this.template);
            }
            if (hasProp(properties, 'header') && isObject(properties.header)) {
                copyProps(properties.header, this.header);
            }
            if (hasProp(properties, 'query') && isObject(properties.query)) {
                copyProps(properties.query, this.query);
            }
        }
        return RequestParams;
    }());

if (__chromeDevToolsExtensionPresent) {
    window.addEventListener('message', function(event){
        var message = event.data;
        if (message.target !== 'icwsjs'){ return; }
        if (message && message.type === __chromeDevToolsPanelInitMessage && message.source && message.source !== __chromeDevToolsMessageTarget) {
            __chromeDevToolsMessageTarget = message.source;
            __postMessageToDevTools(__chromeDevToolsPanelInitMessage);
        }
    });
    __postMessageToDevTools(__chromeDevToolsPanelInitMessage);
}

exports.isArray = isArray;
exports.isObject = isObject;
exports.isFunction = isFunction;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isBoolean = isBoolean;
exports.isDate = isDate;
exports.isValidDate = isValidDate;
exports.isDuration = isDuration;
exports.isGuid = isGuid;
exports.isEnum = isEnum;
exports.isBitFlagsEnum = isBitFlagsEnum;
exports.noop = noop;
exports.hasProp = hasProp;
exports.inspect = inspect;
exports.getRequestTimeout = getRequestTimeout;
exports.setRequestTimeout = setRequestTimeout;
exports.getBaseUrl = getBaseUrl;
exports.setBaseUrl = setBaseUrl;
exports.isValidDataContract = isValidDataContract;
exports.copyProps = copyProps;
exports.extend = extend;
exports.inherits = inherits;
exports.dateFromISO8601String = dateFromISO8601String;
exports.xhr = xhr;
exports.IcwsEventSource = IcwsEventSource;
exports.resourceMethodUrlParts = resourceMethodUrlParts;
exports.resourceMethodUrl = resourceMethodUrl;
exports.addSessionIdHeader = addSessionIdHeader;
exports.addSessionIdTemplate = addSessionIdTemplate;
exports.addSessionTokenHeader = addSessionTokenHeader;
exports.addSessionTokenTemplate = addSessionTokenTemplate;
exports.invokeResponseCallback = invokeResponseCallback;
exports.Duration = Duration;
exports.DataContract = DataContract;
exports.EnumValue = EnumValue;
exports.BitFlagsEnumValue = BitFlagsEnumValue;
exports.Guid = Guid;
exports.RequestParams = RequestParams;
