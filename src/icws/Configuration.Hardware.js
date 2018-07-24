/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Messaging = require('./Messaging');
var Configuration = require('./Configuration');
var Common = require('./Common');

var StationType = (function(){
    var instanceCache = {};
    function StationType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:stationType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(StationType, _util.EnumValue);

    Object.defineProperties(StationType, {
        'StandAlonePhone': { value: new StationType(0, 'StandAlonePhone'), enumerable: true },
        'Workstation': { value: new StationType(1, 'Workstation'), enumerable: true },
        'StandAloneFaxMachine': { value: new StationType(2, 'StandAloneFaxMachine'), enumerable: true },
        'RemoteStation': { value: new StationType(3, 'RemoteStation'), enumerable: true },
        'UnifiedMessaging': { value: new StationType(4, 'UnifiedMessaging'), enumerable: true }
    });

    Object.defineProperty(StationType, '__type', { value: 'urn:inin.com:configuration.hardware:stationType' });

    _typemap['urn:inin.com:configuration.hardware:stationType'] = StationType;

    return StationType;
}());

var StructuredParameterType = (function(){
    var instanceCache = {};
    function StructuredParameterType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameterType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(StructuredParameterType, _util.EnumValue);

    Object.defineProperties(StructuredParameterType, {
        'Secrets': { value: new StructuredParameterType(0, 'Secrets'), enumerable: true },
        'String': { value: new StructuredParameterType(1, 'String'), enumerable: true },
        'MultiString': { value: new StructuredParameterType(2, 'MultiString'), enumerable: true }
    });

    Object.defineProperty(StructuredParameterType, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameterType' });

    _typemap['urn:inin.com:configuration.hardware:structuredParameterType'] = StructuredParameterType;

    return StructuredParameterType;
}());

var LineAddressFamily = (function(){
    var instanceCache = {};
    function LineAddressFamily(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineAddressFamily' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineAddressFamily, _util.EnumValue);

    Object.defineProperties(LineAddressFamily, {
        'Ipv4': { value: new LineAddressFamily(0, 'Ipv4'), enumerable: true },
        'Ipv6': { value: new LineAddressFamily(1, 'Ipv6'), enumerable: true },
        'TelephonyDefault': { value: new LineAddressFamily(2, 'TelephonyDefault'), enumerable: true }
    });

    Object.defineProperty(LineAddressFamily, '__type', { value: 'urn:inin.com:configuration.hardware:lineAddressFamily' });

    _typemap['urn:inin.com:configuration.hardware:lineAddressFamily'] = LineAddressFamily;

    return LineAddressFamily;
}());

var LineAudioPath = (function(){
    var instanceCache = {};
    function LineAudioPath(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineAudioPath' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineAudioPath, _util.EnumValue);

    Object.defineProperties(LineAudioPath, {
        'Dynamic': { value: new LineAudioPath(0, 'Dynamic'), enumerable: true },
        'AlwaysIn': { value: new LineAudioPath(1, 'AlwaysIn'), enumerable: true }
    });

    Object.defineProperty(LineAudioPath, '__type', { value: 'urn:inin.com:configuration.hardware:lineAudioPath' });

    _typemap['urn:inin.com:configuration.hardware:lineAudioPath'] = LineAudioPath;

    return LineAudioPath;
}());

var LineAudioProtocol = (function(){
    var instanceCache = {};
    function LineAudioProtocol(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineAudioProtocol' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineAudioProtocol, _util.EnumValue);

    Object.defineProperties(LineAudioProtocol, {
        'RTP': { value: new LineAudioProtocol(0, 'RTP'), enumerable: true },
        'SRTP': { value: new LineAudioProtocol(1, 'SRTP'), enumerable: true }
    });

    Object.defineProperty(LineAudioProtocol, '__type', { value: 'urn:inin.com:configuration.hardware:lineAudioProtocol' });

    _typemap['urn:inin.com:configuration.hardware:lineAudioProtocol'] = LineAudioProtocol;

    return LineAudioProtocol;
}());

var LineCallAnalysisType = (function(){
    var instanceCache = {};
    function LineCallAnalysisType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallAnalysisType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineCallAnalysisType, _util.EnumValue);

    Object.defineProperties(LineCallAnalysisType, {
        'MediaServer': { value: new LineCallAnalysisType(0, 'MediaServer'), enumerable: true },
        'MediaServerToInteractionGateway': { value: new LineCallAnalysisType(1, 'MediaServerToInteractionGateway'), enumerable: true },
        'InteractionGateway': { value: new LineCallAnalysisType(2, 'InteractionGateway'), enumerable: true }
    });

    Object.defineProperty(LineCallAnalysisType, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallAnalysisType' });

    _typemap['urn:inin.com:configuration.hardware:lineCallAnalysisType'] = LineCallAnalysisType;

    return LineCallAnalysisType;
}());

var LineCalledAddressSelection = (function(){
    var instanceCache = {};
    function LineCalledAddressSelection(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCalledAddressSelection' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineCalledAddressSelection, _util.EnumValue);

    Object.defineProperties(LineCalledAddressSelection, {
        'UseRequestURI': { value: new LineCalledAddressSelection(0, 'UseRequestURI'), enumerable: true },
        'UseToHeader': { value: new LineCalledAddressSelection(1, 'UseToHeader'), enumerable: true }
    });

    Object.defineProperty(LineCalledAddressSelection, '__type', { value: 'urn:inin.com:configuration.hardware:lineCalledAddressSelection' });

    _typemap['urn:inin.com:configuration.hardware:lineCalledAddressSelection'] = LineCalledAddressSelection;

    return LineCalledAddressSelection;
}());

var LineSendExtension = (function(){
    var instanceCache = {};
    function LineSendExtension(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineSendExtension' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineSendExtension, _util.EnumValue);

    Object.defineProperties(LineSendExtension, {
        'None': { value: new LineSendExtension(0, 'None'), enumerable: true },
        'PostConnect': { value: new LineSendExtension(1, 'PostConnect'), enumerable: true },
        'UseExtEquals': { value: new LineSendExtension(2, 'UseExtEquals'), enumerable: true }
    });

    Object.defineProperty(LineSendExtension, '__type', { value: 'urn:inin.com:configuration.hardware:lineSendExtension' });

    _typemap['urn:inin.com:configuration.hardware:lineSendExtension'] = LineSendExtension;

    return LineSendExtension;
}());

var LineDiversionMethod = (function(){
    var instanceCache = {};
    function LineDiversionMethod(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineDiversionMethod' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineDiversionMethod, _util.EnumValue);

    Object.defineProperties(LineDiversionMethod, {
        'UseDiversionHeader': { value: new LineDiversionMethod(0, 'UseDiversionHeader'), enumerable: true }
    });

    Object.defineProperty(LineDiversionMethod, '__type', { value: 'urn:inin.com:configuration.hardware:lineDiversionMethod' });

    _typemap['urn:inin.com:configuration.hardware:lineDiversionMethod'] = LineDiversionMethod;

    return LineDiversionMethod;
}());

var LineCallingAddressDivertedCalls = (function(){
    var instanceCache = {};
    function LineCallingAddressDivertedCalls(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressDivertedCalls' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineCallingAddressDivertedCalls, _util.EnumValue);

    Object.defineProperties(LineCallingAddressDivertedCalls, {
        'None': { value: new LineCallingAddressDivertedCalls(0, 'None'), enumerable: true },
        'UseDivertedValue': { value: new LineCallingAddressDivertedCalls(1, 'UseDivertedValue'), enumerable: true },
        'UseLineValue1': { value: new LineCallingAddressDivertedCalls(2, 'UseLineValue1'), enumerable: true },
        'UseLineValue2': { value: new LineCallingAddressDivertedCalls(3, 'UseLineValue2'), enumerable: true },
        'UsePassedValueIfPresent': { value: new LineCallingAddressDivertedCalls(4, 'UsePassedValueIfPresent'), enumerable: true }
    });

    Object.defineProperty(LineCallingAddressDivertedCalls, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressDivertedCalls' });

    _typemap['urn:inin.com:configuration.hardware:lineCallingAddressDivertedCalls'] = LineCallingAddressDivertedCalls;

    return LineCallingAddressDivertedCalls;
}());

var LineCallingAddressDivertedCallsFromHeaderAddress = (function(){
    var instanceCache = {};
    function LineCallingAddressDivertedCallsFromHeaderAddress(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressDivertedCallsFromHeaderAddress' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineCallingAddressDivertedCallsFromHeaderAddress, _util.EnumValue);

    Object.defineProperties(LineCallingAddressDivertedCallsFromHeaderAddress, {
        'UseDivertedValue': { value: new LineCallingAddressDivertedCallsFromHeaderAddress(0, 'UseDivertedValue'), enumerable: true },
        'UseLineValue1': { value: new LineCallingAddressDivertedCallsFromHeaderAddress(1, 'UseLineValue1'), enumerable: true },
        'UseLineValue2': { value: new LineCallingAddressDivertedCallsFromHeaderAddress(2, 'UseLineValue2'), enumerable: true },
        'UsePassedValueIfPresent': { value: new LineCallingAddressDivertedCallsFromHeaderAddress(3, 'UsePassedValueIfPresent'), enumerable: true }
    });

    Object.defineProperty(LineCallingAddressDivertedCallsFromHeaderAddress, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressDivertedCallsFromHeaderAddress' });

    _typemap['urn:inin.com:configuration.hardware:lineCallingAddressDivertedCallsFromHeaderAddress'] = LineCallingAddressDivertedCallsFromHeaderAddress;

    return LineCallingAddressDivertedCallsFromHeaderAddress;
}());

var LineCallingAddressNormalCalls = (function(){
    var instanceCache = {};
    function LineCallingAddressNormalCalls(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressNormalCalls' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineCallingAddressNormalCalls, _util.EnumValue);

    Object.defineProperties(LineCallingAddressNormalCalls, {
        'None': { value: new LineCallingAddressNormalCalls(0, 'None'), enumerable: true },
        'UseLineValue1': { value: new LineCallingAddressNormalCalls(1, 'UseLineValue1'), enumerable: true },
        'UseLineValue2': { value: new LineCallingAddressNormalCalls(2, 'UseLineValue2'), enumerable: true },
        'UsePassedValueIfPresent': { value: new LineCallingAddressNormalCalls(3, 'UsePassedValueIfPresent'), enumerable: true }
    });

    Object.defineProperty(LineCallingAddressNormalCalls, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressNormalCalls' });

    _typemap['urn:inin.com:configuration.hardware:lineCallingAddressNormalCalls'] = LineCallingAddressNormalCalls;

    return LineCallingAddressNormalCalls;
}());

var LineCallingAddressNormalCallsFromHeaderAddress = (function(){
    var instanceCache = {};
    function LineCallingAddressNormalCallsFromHeaderAddress(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressNormalCallsFromHeaderAddress' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineCallingAddressNormalCallsFromHeaderAddress, _util.EnumValue);

    Object.defineProperties(LineCallingAddressNormalCallsFromHeaderAddress, {
        'UseLineValue1': { value: new LineCallingAddressNormalCallsFromHeaderAddress(0, 'UseLineValue1'), enumerable: true },
        'UseLineValue2': { value: new LineCallingAddressNormalCallsFromHeaderAddress(1, 'UseLineValue2'), enumerable: true },
        'UsePassedValueIfPresent': { value: new LineCallingAddressNormalCallsFromHeaderAddress(2, 'UsePassedValueIfPresent'), enumerable: true }
    });

    Object.defineProperty(LineCallingAddressNormalCallsFromHeaderAddress, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressNormalCallsFromHeaderAddress' });

    _typemap['urn:inin.com:configuration.hardware:lineCallingAddressNormalCallsFromHeaderAddress'] = LineCallingAddressNormalCallsFromHeaderAddress;

    return LineCallingAddressNormalCallsFromHeaderAddress;
}());

var LineCallingAddressSelection = (function(){
    var instanceCache = {};
    function LineCallingAddressSelection(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressSelection' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineCallingAddressSelection, _util.EnumValue);

    Object.defineProperties(LineCallingAddressSelection, {
        'UseFromHeaderOnly': { value: new LineCallingAddressSelection(0, 'UseFromHeaderOnly'), enumerable: true },
        'UsePAssertedIdentityHeaderOnly': { value: new LineCallingAddressSelection(1, 'UsePAssertedIdentityHeaderOnly'), enumerable: true },
        'UsePAssertedIdentityHeaderThenFromHeader': { value: new LineCallingAddressSelection(2, 'UsePAssertedIdentityHeaderThenFromHeader'), enumerable: true }
    });

    Object.defineProperty(LineCallingAddressSelection, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressSelection' });

    _typemap['urn:inin.com:configuration.hardware:lineCallingAddressSelection'] = LineCallingAddressSelection;

    return LineCallingAddressSelection;
}());

var LineDiversionInfo = (function(){
    var instanceCache = {};
    function LineDiversionInfo(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineDiversionInfo' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineDiversionInfo, _util.EnumValue);

    Object.defineProperties(LineDiversionInfo, {
        'UseMostRecent': { value: new LineDiversionInfo(0, 'UseMostRecent'), enumerable: true },
        'UseOriginal': { value: new LineDiversionInfo(1, 'UseOriginal'), enumerable: true }
    });

    Object.defineProperty(LineDiversionInfo, '__type', { value: 'urn:inin.com:configuration.hardware:lineDiversionInfo' });

    _typemap['urn:inin.com:configuration.hardware:lineDiversionInfo'] = LineDiversionInfo;

    return LineDiversionInfo;
}());

var LineDTMFType = (function(){
    var instanceCache = {};
    function LineDTMFType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineDTMFType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineDTMFType, _util.EnumValue);

    Object.defineProperties(LineDTMFType, {
        'DoNotUseRFC2833': { value: new LineDTMFType(0, 'DoNotUseRFC2833'), enumerable: true },
        'RFC2833IfSupported': { value: new LineDTMFType(1, 'RFC2833IfSupported'), enumerable: true },
        'RFC2833Only': { value: new LineDTMFType(2, 'RFC2833Only'), enumerable: true }
    });

    Object.defineProperty(LineDTMFType, '__type', { value: 'urn:inin.com:configuration.hardware:lineDTMFType' });

    _typemap['urn:inin.com:configuration.hardware:lineDTMFType'] = LineDTMFType;

    return LineDTMFType;
}());

var LineFaxProtocol = (function(){
    var instanceCache = {};
    function LineFaxProtocol(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineFaxProtocol' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineFaxProtocol, _util.EnumValue);

    Object.defineProperties(LineFaxProtocol, {
        'None': { value: new LineFaxProtocol(0, 'None'), enumerable: true },
        'T30Only': { value: new LineFaxProtocol(1, 'T30Only'), enumerable: true },
        'T38Only': { value: new LineFaxProtocol(2, 'T38Only'), enumerable: true },
        'T38ThenT30': { value: new LineFaxProtocol(3, 'T38ThenT30'), enumerable: true }
    });

    Object.defineProperty(LineFaxProtocol, '__type', { value: 'urn:inin.com:configuration.hardware:lineFaxProtocol' });

    _typemap['urn:inin.com:configuration.hardware:lineFaxProtocol'] = LineFaxProtocol;

    return LineFaxProtocol;
}());

var LineUsage = (function(){
    var instanceCache = {};
    function LineUsage(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineUsage' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineUsage, _util.EnumValue);

    Object.defineProperties(LineUsage, {
        'GeneralPurpose': { value: new LineUsage(0, 'GeneralPurpose'), enumerable: true },
        'StationConnections': { value: new LineUsage(1, 'StationConnections'), enumerable: true }
    });

    Object.defineProperty(LineUsage, '__type', { value: 'urn:inin.com:configuration.hardware:lineUsage' });

    _typemap['urn:inin.com:configuration.hardware:lineUsage'] = LineUsage;

    return LineUsage;
}());

var LineMediaAddressFamily = (function(){
    var instanceCache = {};
    function LineMediaAddressFamily(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineMediaAddressFamily' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineMediaAddressFamily, _util.EnumValue);

    Object.defineProperties(LineMediaAddressFamily, {
        'Ipv4': { value: new LineMediaAddressFamily(0, 'Ipv4'), enumerable: true },
        'Ipv6': { value: new LineMediaAddressFamily(1, 'Ipv6'), enumerable: true },
        'TelephonyDefault': { value: new LineMediaAddressFamily(2, 'TelephonyDefault'), enumerable: true }
    });

    Object.defineProperty(LineMediaAddressFamily, '__type', { value: 'urn:inin.com:configuration.hardware:lineMediaAddressFamily' });

    _typemap['urn:inin.com:configuration.hardware:lineMediaAddressFamily'] = LineMediaAddressFamily;

    return LineMediaAddressFamily;
}());

var LineSecurity = (function(){
    var instanceCache = {};
    function LineSecurity(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineSecurity' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineSecurity, _util.EnumValue);

    Object.defineProperties(LineSecurity, {
        'EndToEdge': { value: new LineSecurity(0, 'EndToEdge'), enumerable: true },
        'Minimal': { value: new LineSecurity(1, 'Minimal'), enumerable: true }
    });

    Object.defineProperty(LineSecurity, '__type', { value: 'urn:inin.com:configuration.hardware:lineSecurity' });

    _typemap['urn:inin.com:configuration.hardware:lineSecurity'] = LineSecurity;

    return LineSecurity;
}());

var LineAccessValidation = (function(){
    var instanceCache = {};
    function LineAccessValidation(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineAccessValidation' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineAccessValidation, _util.EnumValue);

    Object.defineProperties(LineAccessValidation, {
        'LastHop': { value: new LineAccessValidation(0, 'LastHop'), enumerable: true },
        'Originator': { value: new LineAccessValidation(1, 'Originator'), enumerable: true }
    });

    Object.defineProperty(LineAccessValidation, '__type', { value: 'urn:inin.com:configuration.hardware:lineAccessValidation' });

    _typemap['urn:inin.com:configuration.hardware:lineAccessValidation'] = LineAccessValidation;

    return LineAccessValidation;
}());

var LineTransportProtocol = (function(){
    var instanceCache = {};
    function LineTransportProtocol(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineTransportProtocol' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineTransportProtocol, _util.EnumValue);

    Object.defineProperties(LineTransportProtocol, {
        'UDP': { value: new LineTransportProtocol(0, 'UDP'), enumerable: true },
        'TCP': { value: new LineTransportProtocol(1, 'TCP'), enumerable: true },
        'TLS': { value: new LineTransportProtocol(2, 'TLS'), enumerable: true }
    });

    Object.defineProperty(LineTransportProtocol, '__type', { value: 'urn:inin.com:configuration.hardware:lineTransportProtocol' });

    _typemap['urn:inin.com:configuration.hardware:lineTransportProtocol'] = LineTransportProtocol;

    return LineTransportProtocol;
}());

var LineUserToUserConversion = (function(){
    var instanceCache = {};
    function LineUserToUserConversion(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineUserToUserConversion' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineUserToUserConversion, _util.EnumValue);

    Object.defineProperties(LineUserToUserConversion, {
        'Hex': { value: new LineUserToUserConversion(0, 'Hex'), enumerable: true },
        'Ascii': { value: new LineUserToUserConversion(1, 'Ascii'), enumerable: true },
        'ExtendedAscii': { value: new LineUserToUserConversion(2, 'ExtendedAscii'), enumerable: true }
    });

    Object.defineProperty(LineUserToUserConversion, '__type', { value: 'urn:inin.com:configuration.hardware:lineUserToUserConversion' });

    _typemap['urn:inin.com:configuration.hardware:lineUserToUserConversion'] = LineUserToUserConversion;

    return LineUserToUserConversion;
}());

var LineUserToUserHeader = (function(){
    var instanceCache = {};
    function LineUserToUserHeader(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineUserToUserHeader' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(LineUserToUserHeader, _util.EnumValue);

    Object.defineProperties(LineUserToUserHeader, {
        'XUserToUser': { value: new LineUserToUserHeader(0, 'XUserToUser'), enumerable: true },
        'UserToUser': { value: new LineUserToUserHeader(1, 'UserToUser'), enumerable: true },
        'UserToUserPdAttribute': { value: new LineUserToUserHeader(2, 'UserToUserPdAttribute'), enumerable: true }
    });

    Object.defineProperty(LineUserToUserHeader, '__type', { value: 'urn:inin.com:configuration.hardware:lineUserToUserHeader' });

    _typemap['urn:inin.com:configuration.hardware:lineUserToUserHeader'] = LineUserToUserHeader;

    return LineUserToUserHeader;
}());

var AddressFamily = (function(){
    var instanceCache = {};
    function AddressFamily(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:addressFamily' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(AddressFamily, _util.EnumValue);

    Object.defineProperties(AddressFamily, {
        'Any': { value: new AddressFamily(0, 'Any'), enumerable: true },
        'IPv4': { value: new AddressFamily(1, 'IPv4'), enumerable: true },
        'IPv6': { value: new AddressFamily(2, 'IPv6'), enumerable: true }
    });

    Object.defineProperty(AddressFamily, '__type', { value: 'urn:inin.com:configuration.hardware:addressFamily' });

    _typemap['urn:inin.com:configuration.hardware:addressFamily'] = AddressFamily;

    return AddressFamily;
}());

var PhoneStatus = (function(){
    var instanceCache = {};
    function PhoneStatus(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:phoneStatus' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(PhoneStatus, _util.EnumValue);

    Object.defineProperties(PhoneStatus, {
        'NotProvisioned': { value: new PhoneStatus(0, 'NotProvisioned'), enumerable: true },
        'Current': { value: new PhoneStatus(1, 'Current'), enumerable: true },
        'ReloadRequired': { value: new PhoneStatus(2, 'ReloadRequired'), enumerable: true },
        'ReloadScheduled': { value: new PhoneStatus(3, 'ReloadScheduled'), enumerable: true },
        'Reloading': { value: new PhoneStatus(4, 'Reloading'), enumerable: true },
        'NotConnected': { value: new PhoneStatus(5, 'NotConnected'), enumerable: true }
    });

    Object.defineProperty(PhoneStatus, '__type', { value: 'urn:inin.com:configuration.hardware:phoneStatus' });

    _typemap['urn:inin.com:configuration.hardware:phoneStatus'] = PhoneStatus;

    return PhoneStatus;
}());

var ApplyTemplateResultCode = (function(){
    var instanceCache = {};
    function ApplyTemplateResultCode(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:applyTemplateResultCode' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(ApplyTemplateResultCode, _util.EnumValue);

    Object.defineProperties(ApplyTemplateResultCode, {
        'Success': { value: new ApplyTemplateResultCode(0, 'Success'), enumerable: true },
        'TemplateDoesNotExist': { value: new ApplyTemplateResultCode(1, 'TemplateDoesNotExist'), enumerable: true },
        'PhoneDoesNotExist': { value: new ApplyTemplateResultCode(2, 'PhoneDoesNotExist'), enumerable: true },
        'ManufacturerDoesNotMatch': { value: new ApplyTemplateResultCode(3, 'ManufacturerDoesNotMatch'), enumerable: true },
        'ModelDoesNotMatch': { value: new ApplyTemplateResultCode(4, 'ModelDoesNotMatch'), enumerable: true },
        'TypeDoesNotMatch': { value: new ApplyTemplateResultCode(5, 'TypeDoesNotMatch'), enumerable: true }
    });

    Object.defineProperty(ApplyTemplateResultCode, '__type', { value: 'urn:inin.com:configuration.hardware:applyTemplateResultCode' });

    _typemap['urn:inin.com:configuration.hardware:applyTemplateResultCode'] = ApplyTemplateResultCode;

    return ApplyTemplateResultCode;
}());

var PhoneResultCode = (function(){
    var instanceCache = {};
    function PhoneResultCode(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:phoneResultCode' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(PhoneResultCode, _util.EnumValue);

    Object.defineProperties(PhoneResultCode, {
        'Success': { value: new PhoneResultCode(0, 'Success'), enumerable: true },
        'DoesNotExist': { value: new PhoneResultCode(1, 'DoesNotExist'), enumerable: true },
        'ReloadScheduled': { value: new PhoneResultCode(2, 'ReloadScheduled'), enumerable: true },
        'NotProvisioned': { value: new PhoneResultCode(3, 'NotProvisioned'), enumerable: true },
        'NoIpAddress': { value: new PhoneResultCode(4, 'NoIpAddress'), enumerable: true },
        'NoStatus': { value: new PhoneResultCode(5, 'NoStatus'), enumerable: true },
        'ReloadNotScheduled': { value: new PhoneResultCode(6, 'ReloadNotScheduled'), enumerable: true }
    });

    Object.defineProperty(PhoneResultCode, '__type', { value: 'urn:inin.com:configuration.hardware:phoneResultCode' });

    _typemap['urn:inin.com:configuration.hardware:phoneResultCode'] = PhoneResultCode;

    return PhoneResultCode;
}());

var DynamicAttributeDataType = (function(){
    var instanceCache = {};
    function DynamicAttributeDataType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:dynamicAttributeDataType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DynamicAttributeDataType, _util.EnumValue);

    Object.defineProperties(DynamicAttributeDataType, {
        'Text': { value: new DynamicAttributeDataType(0, 'Text'), enumerable: true },
        'Bool': { value: new DynamicAttributeDataType(1, 'Bool'), enumerable: true },
        'Enum': { value: new DynamicAttributeDataType(2, 'Enum'), enumerable: true }
    });

    Object.defineProperty(DynamicAttributeDataType, '__type', { value: 'urn:inin.com:configuration.hardware:dynamicAttributeDataType' });

    _typemap['urn:inin.com:configuration.hardware:dynamicAttributeDataType'] = DynamicAttributeDataType;

    return DynamicAttributeDataType;
}());

var DynamicAttributeMetadataType = (function(){
    var instanceCache = {};
    function DynamicAttributeMetadataType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:dynamicAttributeMetadataType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(DynamicAttributeMetadataType, _util.EnumValue);

    Object.defineProperties(DynamicAttributeMetadataType, {
        'Attribute': { value: new DynamicAttributeMetadataType(0, 'Attribute'), enumerable: true },
        'Group': { value: new DynamicAttributeMetadataType(1, 'Group'), enumerable: true },
        'Enum': { value: new DynamicAttributeMetadataType(2, 'Enum'), enumerable: true }
    });

    Object.defineProperty(DynamicAttributeMetadataType, '__type', { value: 'urn:inin.com:configuration.hardware:dynamicAttributeMetadataType' });

    _typemap['urn:inin.com:configuration.hardware:dynamicAttributeMetadataType'] = DynamicAttributeMetadataType;

    return DynamicAttributeMetadataType;
}());

var OptionGroupType = (function(){
    var instanceCache = {};
    function OptionGroupType(value, name) {
        if (_util.hasProp(instanceCache, value)) {
            return instanceCache[value];
        }
        if (!_util.isNumber(value)) {
            throw new Error('value does not match the expected type: Number');
        }

        Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:optionGroupType' });

        _util.EnumValue.call(this, value, name || String(value));
        instanceCache[value] = this;
    }
    _util.inherits(OptionGroupType, _util.EnumValue);

    Object.defineProperties(OptionGroupType, {
        'Options': { value: new OptionGroupType(0, 'Options'), enumerable: true },
        'AdvancedOptions': { value: new OptionGroupType(1, 'AdvancedOptions'), enumerable: true }
    });

    Object.defineProperty(OptionGroupType, '__type', { value: 'urn:inin.com:configuration.hardware:optionGroupType' });

    _typemap['urn:inin.com:configuration.hardware:optionGroupType'] = OptionGroupType;

    return OptionGroupType;
}());

var AudioSource = (function(){
    var hasProps = false;

    function AudioSource() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:audioSource' });
        }

        AudioSource._super.constructor.apply(this, arguments);
    }
    _util.inherits(AudioSource, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AudioSource.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting AudioSource.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(AudioSource.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for AudioSource.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(AudioSource.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AudioSource.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(AudioSource.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for AudioSource.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(AudioSource.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for AudioSource.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AudioSource, '__type', { value: 'urn:inin.com:configuration.hardware:audioSource' });

    Object.defineProperty(AudioSource, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:audioSource'] = AudioSource;

    return AudioSource;
}());

var RecordingBeepTone = (function(){
    var hasProps = false;

    function RecordingBeepTone() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:recordingBeepTone' });
        }

        RecordingBeepTone._super.constructor.apply(this, arguments);
    }
    _util.inherits(RecordingBeepTone, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RecordingBeepTone.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting RecordingBeepTone.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordingBeepTone.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for RecordingBeepTone.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordingBeepTone.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RecordingBeepTone.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordingBeepTone.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for RecordingBeepTone.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordingBeepTone.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for RecordingBeepTone.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordingBeepTone.prototype, 'toneAmplitudeOne', {
            get: function() { return this.__prop_toneAmplitudeOne; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for RecordingBeepTone.toneAmplitudeOne, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_toneAmplitudeOne = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordingBeepTone.prototype, 'toneAmplitudeTwo', {
            get: function() { return this.__prop_toneAmplitudeTwo; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for RecordingBeepTone.toneAmplitudeTwo, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_toneAmplitudeTwo = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordingBeepTone.prototype, 'toneDuration', {
            get: function() { return this.__prop_toneDuration; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for RecordingBeepTone.toneDuration, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_toneDuration = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordingBeepTone.prototype, 'toneFrequencyOne', {
            get: function() { return this.__prop_toneFrequencyOne; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for RecordingBeepTone.toneFrequencyOne, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_toneFrequencyOne = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordingBeepTone.prototype, 'toneFrequencyTwo', {
            get: function() { return this.__prop_toneFrequencyTwo; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for RecordingBeepTone.toneFrequencyTwo, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_toneFrequencyTwo = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordingBeepTone.prototype, 'toneInterval', {
            get: function() { return this.__prop_toneInterval; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for RecordingBeepTone.toneInterval, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_toneInterval = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RecordingBeepTone, '__type', { value: 'urn:inin.com:configuration.hardware:recordingBeepTone' });

    Object.defineProperty(RecordingBeepTone, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'toneAmplitudeOne': { required: false, nullable: false },
                'toneAmplitudeTwo': { required: false, nullable: false },
                'toneDuration': { required: false, nullable: false },
                'toneFrequencyOne': { required: false, nullable: false },
                'toneFrequencyTwo': { required: false, nullable: false },
                'toneInterval': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:recordingBeepTone'] = RecordingBeepTone;

    return RecordingBeepTone;
}());

var Station = (function(){
    var hasProps = false;

    function Station() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:station' });
        }

        Station._super.constructor.apply(this, arguments);
    }
    _util.inherits(Station, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Station.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Station.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Station.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Station.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Station.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Station.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'shouldAlwaysRing', {
            get: function() { return this.__prop_shouldAlwaysRing; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Station.shouldAlwaysRing, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shouldAlwaysRing = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'callsPerLineKey', {
            get: function() { return this.__prop_callsPerLineKey; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Station.callsPerLineKey, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callsPerLineKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'connectionAddress', {
            get: function() { return this.__prop_connectionAddress; },
            set: function(value) {
                if (!(value instanceof SipAddress || value === void 0 || value === null)) {
                    try {
                        value = new SipAddress(value);
                    } catch (e) {
                        throw new TypeError('Error setting Station.connectionAddress: ' + e.message);
                    }
                }

                this.__prop_connectionAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'contactLine', {
            get: function() { return this.__prop_contactLine; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Station.contactLine: ' + e.message);
                    }
                }

                this.__prop_contactLine = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'isShareable', {
            get: function() { return this.__prop_isShareable; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Station.isShareable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isShareable = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'lineKeys', {
            get: function() { return this.__prop_lineKeys; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Station.lineKeys, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lineKeys = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'offeringCallTimeout', {
            get: function() { return this.__prop_offeringCallTimeout; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Station.offeringCallTimeout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_offeringCallTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'order', {
            get: function() { return this.__prop_order; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Station.order, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_order = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'phoneNumberClassifications', {
            get: function() { return this.__prop_phoneNumberClassifications; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Station.phoneNumberClassifications: ' + e.message);
                    }
                }

                this.__prop_phoneNumberClassifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'requireForcedAuthorizationCode', {
            get: function() { return this.__prop_requireForcedAuthorizationCode; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Station.requireForcedAuthorizationCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_requireForcedAuthorizationCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'ringSet', {
            get: function() { return this.__prop_ringSet; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Station.ringSet: ' + e.message);
                    }
                }

                this.__prop_ringSet = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'security', {
            get: function() { return this.__prop_security; },
            set: function(value) {
                if (!(value instanceof Configuration.SecurityLevel || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.SecurityLevel(value);
                    } catch (e) {
                        throw new TypeError('Error setting Station.security: ' + e.message);
                    }
                }

                this.__prop_security = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Station.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'active', {
            get: function() { return this.__prop_active; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Station.active, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_active = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'allowSipRegistration', {
            get: function() { return this.__prop_allowSipRegistration; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Station.allowSipRegistration, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowSipRegistration = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'extension', {
            get: function() { return this.__prop_extension; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Station.extension, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_extension = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'identificationAddress', {
            get: function() { return this.__prop_identificationAddress; },
            set: function(value) {
                if (!(value instanceof SipAddress || value === void 0 || value === null)) {
                    try {
                        value = new SipAddress(value);
                    } catch (e) {
                        throw new TypeError('Error setting Station.identificationAddress: ' + e.message);
                    }
                }

                this.__prop_identificationAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'machineName', {
            get: function() { return this.__prop_machineName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Station.machineName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_machineName = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'stationLicenseProperties', {
            get: function() { return this.__prop_stationLicenseProperties; },
            set: function(value) {
                if (!(value instanceof Configuration.StationLicenseProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.StationLicenseProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting Station.stationLicenseProperties: ' + e.message);
                    }
                }

                this.__prop_stationLicenseProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(Station.prototype, 'stationType', {
            get: function() { return this.__prop_stationType; },
            set: function(value) {
                if (!(value instanceof StationType || value === void 0)) {
                    try {
                        value = new StationType(value);
                    } catch (e) {
                        throw new TypeError('Error setting Station.stationType: ' + e.message);
                    }
                }

                this.__prop_stationType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Station, '__type', { value: 'urn:inin.com:configuration.hardware:station' });

    Object.defineProperty(Station, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'shouldAlwaysRing': { required: false, nullable: true },
                'callsPerLineKey': { required: false, nullable: true },
                'connectionAddress': { required: false, nullable: true },
                'contactLine': { required: false, nullable: true },
                'isShareable': { required: false, nullable: true },
                'lineKeys': { required: false, nullable: true },
                'offeringCallTimeout': { required: false, nullable: true },
                'order': { required: false, nullable: true },
                'phoneNumberClassifications': { required: false, nullable: true },
                'requireForcedAuthorizationCode': { required: false, nullable: true },
                'ringSet': { required: false, nullable: true },
                'security': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'active': { required: false, nullable: true },
                'allowSipRegistration': { required: false, nullable: true },
                'extension': { required: false, nullable: true },
                'identificationAddress': { required: false, nullable: true },
                'machineName': { required: false, nullable: true },
                'stationLicenseProperties': { required: false, nullable: true },
                'stationType': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:station'] = Station;

    return Station;
}());

var SipAddress = (function(){
    var hasProps = false;

    function SipAddress() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:sipAddress' });
        }

        SipAddress._super.constructor.apply(this, arguments);
    }
    _util.inherits(SipAddress, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SipAddress.prototype, 'alternateFormat', {
            get: function() { return this.__prop_alternateFormat; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SipAddress.alternateFormat, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_alternateFormat = value;
            },
            enumerable: true
        });

        Object.defineProperty(SipAddress.prototype, 'host', {
            get: function() { return this.__prop_host; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SipAddress.host, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_host = value;
            },
            enumerable: true
        });

        Object.defineProperty(SipAddress.prototype, 'port', {
            get: function() { return this.__prop_port; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SipAddress.port, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_port = value;
            },
            enumerable: true
        });

        Object.defineProperty(SipAddress.prototype, 'user', {
            get: function() { return this.__prop_user; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SipAddress.user, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_user = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SipAddress, '__type', { value: 'urn:inin.com:configuration.hardware:sipAddress' });

    Object.defineProperty(SipAddress, '__propInfo', {
        get: function() {
            var pi = {
                'alternateFormat': { required: false, nullable: true },
                'host': { required: false, nullable: true },
                'port': { required: false, nullable: true },
                'user': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:sipAddress'] = SipAddress;

    return SipAddress;
}());

var StructuredParameter = (function(){
    var hasProps = false;

    function StructuredParameter() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameter' });
        }

        StructuredParameter._super.constructor.apply(this, arguments);
    }
    _util.inherits(StructuredParameter, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StructuredParameter.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting StructuredParameter.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(StructuredParameter.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for StructuredParameter.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StructuredParameter.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StructuredParameter.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(StructuredParameter.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for StructuredParameter.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StructuredParameter.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StructuredParameter.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(StructuredParameter.prototype, 'description', {
            get: function() { return this.__prop_description; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StructuredParameter.description, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_description = value;
            },
            enumerable: true
        });

        Object.defineProperty(StructuredParameter.prototype, 'parameters', {
            get: function() { return this.__prop_parameters; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StructuredParameterValue); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new StructuredParameterValue(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StructuredParameter.parameters: ' + e.message);
                    }
                }

                this.__prop_parameters = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StructuredParameter, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameter' });

    Object.defineProperty(StructuredParameter, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'description': { required: false, nullable: true },
                'parameters': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:structuredParameter'] = StructuredParameter;

    return StructuredParameter;
}());

var StructuredParameterValue = (function(){
    var hasProps = false;

    function StructuredParameterValue() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameterValue' });
        }

        StructuredParameterValue._super.constructor.apply(this, arguments);
    }
    _util.inherits(StructuredParameterValue, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StructuredParameterValue.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StructuredParameterValue.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(StructuredParameterValue.prototype, 'parameterType', {
            get: function() { return this.__prop_parameterType; },
            set: function(value) {
                if (!(value instanceof StructuredParameterType)) {
                    try {
                        value = new StructuredParameterType(value);
                    } catch (e) {
                        throw new TypeError('Error setting StructuredParameterValue.parameterType: ' + e.message);
                    }
                }

                this.__prop_parameterType = value;
            },
            enumerable: true
        });

        Object.defineProperty(StructuredParameterValue.prototype, 'values', {
            get: function() { return this.__prop_values; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === null)) {
                    throw new TypeError('Expected type String[] for StructuredParameterValue.values, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_values = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StructuredParameterValue, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameterValue' });

    Object.defineProperty(StructuredParameterValue, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'parameterType': { required: true, nullable: false },
                'values': { required: true, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:structuredParameterValue'] = StructuredParameterValue;

    return StructuredParameterValue;
}());

var AudioSources = (function(){
    var hasProps = false;

    function AudioSources() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:audioSources' });
        }

        AudioSources._super.constructor.apply(this, arguments);
    }
    _util.inherits(AudioSources, _util.DataContract);

    function defineProps() {
        Object.defineProperty(AudioSources.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AudioSource); }))) {
                    try {
                        value = value.map(function(item){ return new AudioSource(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AudioSources.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AudioSources, '__type', { value: 'urn:inin.com:configuration.hardware:audioSources' });

    Object.defineProperty(AudioSources, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:audioSources'] = AudioSources;

    return AudioSources;
}());

var DefaultLocation = (function(){
    var hasProps = false;

    function DefaultLocation() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:defaultLocation' });
        }

        DefaultLocation._super.constructor.apply(this, arguments);
    }
    _util.inherits(DefaultLocation, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DefaultLocation.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting DefaultLocation.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultLocation.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for DefaultLocation.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultLocation.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DefaultLocation.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultLocation.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for DefaultLocation.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultLocation.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DefaultLocation.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(DefaultLocation.prototype, 'timezone', {
            get: function() { return this.__prop_timezone; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DefaultLocation.timezone, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timezone = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DefaultLocation, '__type', { value: 'urn:inin.com:configuration.hardware:defaultLocation' });

    Object.defineProperty(DefaultLocation, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'timezone': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:defaultLocation'] = DefaultLocation;

    return DefaultLocation;
}());

var LineGroups = (function(){
    var hasProps = false;

    function LineGroups() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineGroups' });
        }

        LineGroups._super.constructor.apply(this, arguments);
    }
    _util.inherits(LineGroups, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LineGroups.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LineGroup); }))) {
                    try {
                        value = value.map(function(item){ return new LineGroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LineGroups.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LineGroups, '__type', { value: 'urn:inin.com:configuration.hardware:lineGroups' });

    Object.defineProperty(LineGroups, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:lineGroups'] = LineGroups;

    return LineGroups;
}());

var LineGroup = (function(){
    var hasProps = false;

    function LineGroup() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineGroup' });
        }

        LineGroup._super.constructor.apply(this, arguments);
    }
    _util.inherits(LineGroup, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LineGroup.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting LineGroup.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(LineGroup.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for LineGroup.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(LineGroup.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LineGroup.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(LineGroup.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for LineGroup.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(LineGroup.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for LineGroup.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(LineGroup.prototype, 'lines', {
            get: function() { return this.__prop_lines; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting LineGroup.lines: ' + e.message);
                    }
                }

                this.__prop_lines = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LineGroup, '__type', { value: 'urn:inin.com:configuration.hardware:lineGroup' });

    Object.defineProperty(LineGroup, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'lines': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:lineGroup'] = LineGroup;

    return LineGroup;
}());

var Lines = (function(){
    var hasProps = false;

    function Lines() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lines' });
        }

        Lines._super.constructor.apply(this, arguments);
    }
    _util.inherits(Lines, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Lines.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Line); }))) {
                    try {
                        value = value.map(function(item){ return new Line(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Lines.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Lines, '__type', { value: 'urn:inin.com:configuration.hardware:lines' });

    Object.defineProperty(Lines, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:lines'] = Lines;

    return Lines;
}());

var Line = (function(){
    var hasProps = false;

    function Line() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:line' });
        }

        Line._super.constructor.apply(this, arguments);
    }
    _util.inherits(Line, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Line.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Line.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Line.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Line.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Line.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'active', {
            get: function() { return this.__prop_active; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.active, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_active = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'adapterName', {
            get: function() { return this.__prop_adapterName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Line.adapterName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_adapterName = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'addressFamily', {
            get: function() { return this.__prop_addressFamily; },
            set: function(value) {
                if (!(value instanceof LineAddressFamily || value === void 0)) {
                    try {
                        value = new LineAddressFamily(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.addressFamily: ' + e.message);
                    }
                }

                this.__prop_addressFamily = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'allowDeferredAnswer', {
            get: function() { return this.__prop_allowDeferredAnswer; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.allowDeferredAnswer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowDeferredAnswer = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'allowMultipleCodecsInOutboundSDPOffer', {
            get: function() { return this.__prop_allowMultipleCodecsInOutboundSDPOffer; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.allowMultipleCodecsInOutboundSDPOffer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowMultipleCodecsInOutboundSDPOffer = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'asrEnabled', {
            get: function() { return this.__prop_asrEnabled; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.asrEnabled, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_asrEnabled = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'audioPath', {
            get: function() { return this.__prop_audioPath; },
            set: function(value) {
                if (!(value instanceof LineAudioPath || value === void 0)) {
                    try {
                        value = new LineAudioPath(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.audioPath: ' + e.message);
                    }
                }

                this.__prop_audioPath = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'audioProtocol', {
            get: function() { return this.__prop_audioProtocol; },
            set: function(value) {
                if (!(value instanceof LineAudioProtocol || value === void 0)) {
                    try {
                        value = new LineAudioProtocol(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.audioProtocol: ' + e.message);
                    }
                }

                this.__prop_audioProtocol = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'authentication', {
            get: function() { return this.__prop_authentication; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.authentication, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_authentication = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'authenticationPassword', {
            get: function() { return this.__prop_authenticationPassword; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Line.authenticationPassword, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_authenticationPassword = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'authenticationUsername', {
            get: function() { return this.__prop_authenticationUsername; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Line.authenticationUsername, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_authenticationUsername = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'autoDisconnectWhenSilenceDetectedInVoicemail', {
            get: function() { return this.__prop_autoDisconnectWhenSilenceDetectedInVoicemail; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.autoDisconnectWhenSilenceDetectedInVoicemail, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_autoDisconnectWhenSilenceDetectedInVoicemail = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'boardType', {
            get: function() { return this.__prop_boardType; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Line.boardType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_boardType = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callAnalysisType', {
            get: function() { return this.__prop_callAnalysisType; },
            set: function(value) {
                if (!(value instanceof LineCallAnalysisType || value === void 0)) {
                    try {
                        value = new LineCallAnalysisType(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callAnalysisType: ' + e.message);
                    }
                }

                this.__prop_callAnalysisType = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callAttributeHeaders', {
            get: function() { return this.__prop_callAttributeHeaders; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for Line.callAttributeHeaders, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callAttributeHeaders = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'calledAddressSelection', {
            get: function() { return this.__prop_calledAddressSelection; },
            set: function(value) {
                if (!(value instanceof LineCalledAddressSelection || value === void 0)) {
                    try {
                        value = new LineCalledAddressSelection(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.calledAddressSelection: ' + e.message);
                    }
                }

                this.__prop_calledAddressSelection = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'calledAddressSendExtension', {
            get: function() { return this.__prop_calledAddressSendExtension; },
            set: function(value) {
                if (!(value instanceof LineSendExtension || value === void 0)) {
                    try {
                        value = new LineSendExtension(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.calledAddressSendExtension: ' + e.message);
                    }
                }

                this.__prop_calledAddressSendExtension = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressDiversionMethod', {
            get: function() { return this.__prop_callingAddressDiversionMethod; },
            set: function(value) {
                if (!(value instanceof LineDiversionMethod || value === void 0)) {
                    try {
                        value = new LineDiversionMethod(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressDiversionMethod: ' + e.message);
                    }
                }

                this.__prop_callingAddressDiversionMethod = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressDivertedCallsDivertedHeaderAddress', {
            get: function() { return this.__prop_callingAddressDivertedCallsDivertedHeaderAddress; },
            set: function(value) {
                if (!(value instanceof LineCallingAddressDivertedCalls || value === void 0)) {
                    try {
                        value = new LineCallingAddressDivertedCalls(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressDivertedCallsDivertedHeaderAddress: ' + e.message);
                    }
                }

                this.__prop_callingAddressDivertedCallsDivertedHeaderAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressDivertedCallsDivertedHeaderName', {
            get: function() { return this.__prop_callingAddressDivertedCallsDivertedHeaderName; },
            set: function(value) {
                if (!(value instanceof LineCallingAddressDivertedCalls || value === void 0)) {
                    try {
                        value = new LineCallingAddressDivertedCalls(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressDivertedCallsDivertedHeaderName: ' + e.message);
                    }
                }

                this.__prop_callingAddressDivertedCallsDivertedHeaderName = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressDivertedCallsFromHeaderAddress', {
            get: function() { return this.__prop_callingAddressDivertedCallsFromHeaderAddress; },
            set: function(value) {
                if (!(value instanceof LineCallingAddressDivertedCallsFromHeaderAddress || value === void 0)) {
                    try {
                        value = new LineCallingAddressDivertedCallsFromHeaderAddress(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressDivertedCallsFromHeaderAddress: ' + e.message);
                    }
                }

                this.__prop_callingAddressDivertedCallsFromHeaderAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressDivertedCallsFromHeaderHame', {
            get: function() { return this.__prop_callingAddressDivertedCallsFromHeaderHame; },
            set: function(value) {
                if (!(value instanceof LineCallingAddressDivertedCalls || value === void 0)) {
                    try {
                        value = new LineCallingAddressDivertedCalls(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressDivertedCallsFromHeaderHame: ' + e.message);
                    }
                }

                this.__prop_callingAddressDivertedCallsFromHeaderHame = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressDivertedCallsPAssertedIdentityAddress', {
            get: function() { return this.__prop_callingAddressDivertedCallsPAssertedIdentityAddress; },
            set: function(value) {
                if (!(value instanceof LineCallingAddressDivertedCalls || value === void 0)) {
                    try {
                        value = new LineCallingAddressDivertedCalls(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressDivertedCallsPAssertedIdentityAddress: ' + e.message);
                    }
                }

                this.__prop_callingAddressDivertedCallsPAssertedIdentityAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressDivertedCallsPAssertedIdentityName', {
            get: function() { return this.__prop_callingAddressDivertedCallsPAssertedIdentityName; },
            set: function(value) {
                if (!(value instanceof LineCallingAddressDivertedCalls || value === void 0)) {
                    try {
                        value = new LineCallingAddressDivertedCalls(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressDivertedCallsPAssertedIdentityName: ' + e.message);
                    }
                }

                this.__prop_callingAddressDivertedCallsPAssertedIdentityName = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressLineValueAddress1', {
            get: function() { return this.__prop_callingAddressLineValueAddress1; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Line.callingAddressLineValueAddress1, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callingAddressLineValueAddress1 = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressLineValueAddress2', {
            get: function() { return this.__prop_callingAddressLineValueAddress2; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Line.callingAddressLineValueAddress2, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callingAddressLineValueAddress2 = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressLineValueName1', {
            get: function() { return this.__prop_callingAddressLineValueName1; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Line.callingAddressLineValueName1, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callingAddressLineValueName1 = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressLineValueName2', {
            get: function() { return this.__prop_callingAddressLineValueName2; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Line.callingAddressLineValueName2, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callingAddressLineValueName2 = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressNormalCallsDivertedHeaderAddress', {
            get: function() { return this.__prop_callingAddressNormalCallsDivertedHeaderAddress; },
            set: function(value) {
                if (!(value instanceof LineCallingAddressNormalCalls || value === void 0)) {
                    try {
                        value = new LineCallingAddressNormalCalls(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressNormalCallsDivertedHeaderAddress: ' + e.message);
                    }
                }

                this.__prop_callingAddressNormalCallsDivertedHeaderAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressNormalCallsDivertedHeaderName', {
            get: function() { return this.__prop_callingAddressNormalCallsDivertedHeaderName; },
            set: function(value) {
                if (!(value instanceof LineCallingAddressNormalCalls || value === void 0)) {
                    try {
                        value = new LineCallingAddressNormalCalls(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressNormalCallsDivertedHeaderName: ' + e.message);
                    }
                }

                this.__prop_callingAddressNormalCallsDivertedHeaderName = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressNormalCallsFromHeaderAddress', {
            get: function() { return this.__prop_callingAddressNormalCallsFromHeaderAddress; },
            set: function(value) {
                if (!(value instanceof LineCallingAddressNormalCallsFromHeaderAddress || value === void 0)) {
                    try {
                        value = new LineCallingAddressNormalCallsFromHeaderAddress(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressNormalCallsFromHeaderAddress: ' + e.message);
                    }
                }

                this.__prop_callingAddressNormalCallsFromHeaderAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressNormalCallsFromHeaderName', {
            get: function() { return this.__prop_callingAddressNormalCallsFromHeaderName; },
            set: function(value) {
                if (!(value instanceof LineCallingAddressNormalCalls || value === void 0)) {
                    try {
                        value = new LineCallingAddressNormalCalls(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressNormalCallsFromHeaderName: ' + e.message);
                    }
                }

                this.__prop_callingAddressNormalCallsFromHeaderName = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressNormalCallsPAssertedIdentityHeaderAddress', {
            get: function() { return this.__prop_callingAddressNormalCallsPAssertedIdentityHeaderAddress; },
            set: function(value) {
                if (!(value instanceof LineCallingAddressNormalCalls || value === void 0)) {
                    try {
                        value = new LineCallingAddressNormalCalls(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressNormalCallsPAssertedIdentityHeaderAddress: ' + e.message);
                    }
                }

                this.__prop_callingAddressNormalCallsPAssertedIdentityHeaderAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressNormalCallsPAssertedIdentityHeaderName', {
            get: function() { return this.__prop_callingAddressNormalCallsPAssertedIdentityHeaderName; },
            set: function(value) {
                if (!(value instanceof LineCallingAddressNormalCalls || value === void 0)) {
                    try {
                        value = new LineCallingAddressNormalCalls(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressNormalCallsPAssertedIdentityHeaderName: ' + e.message);
                    }
                }

                this.__prop_callingAddressNormalCallsPAssertedIdentityHeaderName = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'callingAddressSelection', {
            get: function() { return this.__prop_callingAddressSelection; },
            set: function(value) {
                if (!(value instanceof LineCallingAddressSelection || value === void 0)) {
                    try {
                        value = new LineCallingAddressSelection(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.callingAddressSelection: ' + e.message);
                    }
                }

                this.__prop_callingAddressSelection = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'connectTimerMs', {
            get: function() { return this.__prop_connectTimerMs; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Line.connectTimerMs, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_connectTimerMs = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'direction', {
            get: function() { return this.__prop_direction; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Line.direction, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_direction = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'disableFaxDetection', {
            get: function() { return this.__prop_disableFaxDetection; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.disableFaxDetection, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_disableFaxDetection = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'disableMediaServerPassthru', {
            get: function() { return this.__prop_disableMediaServerPassthru; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.disableMediaServerPassthru, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_disableMediaServerPassthru = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'disconnectOnBrokenRtp', {
            get: function() { return this.__prop_disconnectOnBrokenRtp; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Line.disconnectOnBrokenRtp, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_disconnectOnBrokenRtp = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'diversionInfo', {
            get: function() { return this.__prop_diversionInfo; },
            set: function(value) {
                if (!(value instanceof LineDiversionInfo || value === void 0)) {
                    try {
                        value = new LineDiversionInfo(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.diversionInfo: ' + e.message);
                    }
                }

                this.__prop_diversionInfo = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'dnsSrv', {
            get: function() { return this.__prop_dnsSrv; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.dnsSrv, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dnsSrv = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'domainName', {
            get: function() { return this.__prop_domainName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Line.domainName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_domainName = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'dtmfPayload', {
            get: function() { return this.__prop_dtmfPayload; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Line.dtmfPayload, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dtmfPayload = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'dtmfType', {
            get: function() { return this.__prop_dtmfType; },
            set: function(value) {
                if (!(value instanceof LineDTMFType || value === void 0)) {
                    try {
                        value = new LineDTMFType(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.dtmfType: ' + e.message);
                    }
                }

                this.__prop_dtmfType = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'echoCancellation', {
            get: function() { return this.__prop_echoCancellation; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.echoCancellation, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_echoCancellation = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'enableProcessingOfReceivedSipReferMessages', {
            get: function() { return this.__prop_enableProcessingOfReceivedSipReferMessages; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.enableProcessingOfReceivedSipReferMessages, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_enableProcessingOfReceivedSipReferMessages = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'enableSendingSipReferMessages', {
            get: function() { return this.__prop_enableSendingSipReferMessages; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.enableSendingSipReferMessages, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_enableSendingSipReferMessages = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'enableSendingSipReferMessagesToLinesInOtherLineGroups', {
            get: function() { return this.__prop_enableSendingSipReferMessagesToLinesInOtherLineGroups; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Line.enableSendingSipReferMessagesToLinesInOtherLineGroups, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_enableSendingSipReferMessagesToLinesInOtherLineGroups = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'enableSipPrackUpdateForEarlyMediaSupport', {
            get: function() { return this.__prop_enableSipPrackUpdateForEarlyMediaSupport; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.enableSipPrackUpdateForEarlyMediaSupport, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_enableSipPrackUpdateForEarlyMediaSupport = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'encryptRecordings', {
            get: function() { return this.__prop_encryptRecordings; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.encryptRecordings, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_encryptRecordings = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'faxProtocol', {
            get: function() { return this.__prop_faxProtocol; },
            set: function(value) {
                if (!(value instanceof LineFaxProtocol || value === void 0)) {
                    try {
                        value = new LineFaxProtocol(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.faxProtocol: ' + e.message);
                    }
                }

                this.__prop_faxProtocol = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'ignoreAddressIfUserPortionIsNotNumeric', {
            get: function() { return this.__prop_ignoreAddressIfUserPortionIsNotNumeric; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.ignoreAddressIfUserPortionIsNotNumeric, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ignoreAddressIfUserPortionIsNotNumeric = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'inboundProgressTimerMs', {
            get: function() { return this.__prop_inboundProgressTimerMs; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Line.inboundProgressTimerMs, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_inboundProgressTimerMs = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'includeEarlyAudio', {
            get: function() { return this.__prop_includeEarlyAudio; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.includeEarlyAudio, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_includeEarlyAudio = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'includeHoldMusic', {
            get: function() { return this.__prop_includeHoldMusic; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.includeHoldMusic, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_includeHoldMusic = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'keepTelSchemeWhenUsingAProxy', {
            get: function() { return this.__prop_keepTelSchemeWhenUsingAProxy; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.keepTelSchemeWhenUsingAProxy, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_keepTelSchemeWhenUsingAProxy = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'lineUsage', {
            get: function() { return this.__prop_lineUsage; },
            set: function(value) {
                if (!(value instanceof LineUsage || value === void 0)) {
                    try {
                        value = new LineUsage(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.lineUsage: ' + e.message);
                    }
                }

                this.__prop_lineUsage = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'location', {
            get: function() { return this.__prop_location; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Line.location, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_location = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'maximumInviteRetry', {
            get: function() { return this.__prop_maximumInviteRetry; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Line.maximumInviteRetry, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximumInviteRetry = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'maximumPacketRetry', {
            get: function() { return this.__prop_maximumPacketRetry; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Line.maximumPacketRetry, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maximumPacketRetry = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'maxNumberOfCallsCombinedLimit', {
            get: function() { return this.__prop_maxNumberOfCallsCombinedLimit; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Line.maxNumberOfCallsCombinedLimit, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxNumberOfCallsCombinedLimit = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'maxNumberOfCallsInboundLimit', {
            get: function() { return this.__prop_maxNumberOfCallsInboundLimit; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Line.maxNumberOfCallsInboundLimit, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxNumberOfCallsInboundLimit = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'maxNumberOfCallsOutboundLimit', {
            get: function() { return this.__prop_maxNumberOfCallsOutboundLimit; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Line.maxNumberOfCallsOutboundLimit, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxNumberOfCallsOutboundLimit = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'maxNumberOfCallsUseCombined', {
            get: function() { return this.__prop_maxNumberOfCallsUseCombined; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Line.maxNumberOfCallsUseCombined, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxNumberOfCallsUseCombined = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'maxNumberOfFaxesCombinedLimit', {
            get: function() { return this.__prop_maxNumberOfFaxesCombinedLimit; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Line.maxNumberOfFaxesCombinedLimit, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxNumberOfFaxesCombinedLimit = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'maxNumberOfFaxesInboundLimit', {
            get: function() { return this.__prop_maxNumberOfFaxesInboundLimit; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Line.maxNumberOfFaxesInboundLimit, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxNumberOfFaxesInboundLimit = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'maxNumberOfFaxesOutboundLimit', {
            get: function() { return this.__prop_maxNumberOfFaxesOutboundLimit; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for Line.maxNumberOfFaxesOutboundLimit, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxNumberOfFaxesOutboundLimit = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'maxNumberOfFaxesUseCombined', {
            get: function() { return this.__prop_maxNumberOfFaxesUseCombined; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for Line.maxNumberOfFaxesUseCombined, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxNumberOfFaxesUseCombined = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'maxProbationTime', {
            get: function() { return this.__prop_maxProbationTime; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Line.maxProbationTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxProbationTime = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'mediaAddressFamily', {
            get: function() { return this.__prop_mediaAddressFamily; },
            set: function(value) {
                if (!(value instanceof LineMediaAddressFamily || value === void 0)) {
                    try {
                        value = new LineMediaAddressFamily(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.mediaAddressFamily: ' + e.message);
                    }
                }

                this.__prop_mediaAddressFamily = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'mediaReinviteTiming', {
            get: function() { return this.__prop_mediaReinviteTiming; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.mediaReinviteTiming, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mediaReinviteTiming = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'mediaTiming', {
            get: function() { return this.__prop_mediaTiming; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.mediaTiming, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_mediaTiming = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'permanent', {
            get: function() { return this.__prop_permanent; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.permanent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_permanent = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'playbackEarlyMediaToInboundCalls', {
            get: function() { return this.__prop_playbackEarlyMediaToInboundCalls; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.playbackEarlyMediaToInboundCalls, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_playbackEarlyMediaToInboundCalls = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'proxyIpList', {
            get: function() { return this.__prop_proxyIpList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LineSipProxy); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new LineSipProxy(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Line.proxyIpList: ' + e.message);
                    }
                }

                this.__prop_proxyIpList = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'receivePort', {
            get: function() { return this.__prop_receivePort; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Line.receivePort, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_receivePort = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'registarExternalList', {
            get: function() { return this.__prop_registarExternalList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for Line.registarExternalList, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_registarExternalList = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'registrarAddressList', {
            get: function() { return this.__prop_registrarAddressList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LineRegistrarAddress); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new LineRegistrarAddress(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Line.registrarAddressList: ' + e.message);
                    }
                }

                this.__prop_registrarAddressList = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'reinviteDelayMs', {
            get: function() { return this.__prop_reinviteDelayMs; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Line.reinviteDelayMs, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_reinviteDelayMs = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'retryableCauseCodes', {
            get: function() { return this.__prop_retryableCauseCodes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Line.retryableCauseCodes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_retryableCauseCodes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'retryableReasonCodes', {
            get: function() { return this.__prop_retryableReasonCodes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Line.retryableReasonCodes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_retryableReasonCodes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'security', {
            get: function() { return this.__prop_security; },
            set: function(value) {
                if (!(value instanceof LineSecurity || value === void 0)) {
                    try {
                        value = new LineSecurity(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.security: ' + e.message);
                    }
                }

                this.__prop_security = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'silenceTimeMs', {
            get: function() { return this.__prop_silenceTimeMs; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Line.silenceTimeMs, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_silenceTimeMs = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'sipAccessDefaultDenyAll', {
            get: function() { return this.__prop_sipAccessDefaultDenyAll; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.sipAccessDefaultDenyAll, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sipAccessDefaultDenyAll = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'sipAccessDeniedList', {
            get: function() { return this.__prop_sipAccessDeniedList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LineAccessLevel); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new LineAccessLevel(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Line.sipAccessDeniedList: ' + e.message);
                    }
                }

                this.__prop_sipAccessDeniedList = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'sipAccessGrantedList', {
            get: function() { return this.__prop_sipAccessGrantedList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LineAccessLevel); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new LineAccessLevel(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Line.sipAccessGrantedList: ' + e.message);
                    }
                }

                this.__prop_sipAccessGrantedList = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'sipAnswerDelayMs', {
            get: function() { return this.__prop_sipAnswerDelayMs; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Line.sipAnswerDelayMs, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sipAnswerDelayMs = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'sipDSCPValue', {
            get: function() { return this.__prop_sipDSCPValue; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Line.sipDSCPValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sipDSCPValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'sipSessionTimeout', {
            get: function() { return this.__prop_sipSessionTimeout; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Line.sipSessionTimeout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sipSessionTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'terminateAnalysisOnConnect', {
            get: function() { return this.__prop_terminateAnalysisOnConnect; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.terminateAnalysisOnConnect, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_terminateAnalysisOnConnect = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'tOneTimerMs', {
            get: function() { return this.__prop_tOneTimerMs; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Line.tOneTimerMs, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_tOneTimerMs = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'transferHeaders', {
            get: function() { return this.__prop_transferHeaders; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for Line.transferHeaders, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_transferHeaders = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'transportProtocol', {
            get: function() { return this.__prop_transportProtocol; },
            set: function(value) {
                if (!(value instanceof LineTransportProtocol || value === void 0)) {
                    try {
                        value = new LineTransportProtocol(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.transportProtocol: ' + e.message);
                    }
                }

                this.__prop_transportProtocol = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'tTwoTimerMs', {
            get: function() { return this.__prop_tTwoTimerMs; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Line.tTwoTimerMs, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_tTwoTimerMs = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'useDiversionInfoIfPresent', {
            get: function() { return this.__prop_useDiversionInfoIfPresent; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.useDiversionInfoIfPresent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_useDiversionInfoIfPresent = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'useOnlyNumericPortion', {
            get: function() { return this.__prop_useOnlyNumericPortion; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.useOnlyNumericPortion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_useOnlyNumericPortion = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'useProactiveRecording', {
            get: function() { return this.__prop_useProactiveRecording; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.useProactiveRecording, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_useProactiveRecording = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'userToUserConversion', {
            get: function() { return this.__prop_userToUserConversion; },
            set: function(value) {
                if (!(value instanceof LineUserToUserConversion || value === void 0 || value === null)) {
                    try {
                        value = new LineUserToUserConversion(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.userToUserConversion: ' + e.message);
                    }
                }

                this.__prop_userToUserConversion = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'userToUserHeader', {
            get: function() { return this.__prop_userToUserHeader; },
            set: function(value) {
                if (!(value instanceof LineUserToUserHeader || value === void 0 || value === null)) {
                    try {
                        value = new LineUserToUserHeader(value);
                    } catch (e) {
                        throw new TypeError('Error setting Line.userToUserHeader: ' + e.message);
                    }
                }

                this.__prop_userToUserHeader = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'useSipSessionTimer', {
            get: function() { return this.__prop_useSipSessionTimer; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.useSipSessionTimer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_useSipSessionTimer = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'useSipsScheme', {
            get: function() { return this.__prop_useSipsScheme; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.useSipsScheme, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_useSipsScheme = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'uuiProtocolDiscriminator', {
            get: function() { return this.__prop_uuiProtocolDiscriminator; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Line.uuiProtocolDiscriminator, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_uuiProtocolDiscriminator = value;
            },
            enumerable: true
        });

        Object.defineProperty(Line.prototype, 'voiceActivationDetection', {
            get: function() { return this.__prop_voiceActivationDetection; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0)) {
                    throw new TypeError('Expected type Boolean for Line.voiceActivationDetection, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_voiceActivationDetection = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Line, '__type', { value: 'urn:inin.com:configuration.hardware:line' });

    Object.defineProperty(Line, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'active': { required: false, nullable: false },
                'adapterName': { required: false, nullable: false },
                'addressFamily': { required: false, nullable: false },
                'allowDeferredAnswer': { required: false, nullable: false },
                'allowMultipleCodecsInOutboundSDPOffer': { required: false, nullable: false },
                'asrEnabled': { required: false, nullable: false },
                'audioPath': { required: false, nullable: false },
                'audioProtocol': { required: false, nullable: false },
                'authentication': { required: false, nullable: false },
                'authenticationPassword': { required: false, nullable: false },
                'authenticationUsername': { required: false, nullable: false },
                'autoDisconnectWhenSilenceDetectedInVoicemail': { required: false, nullable: false },
                'boardType': { required: false, nullable: true },
                'callAnalysisType': { required: false, nullable: false },
                'callAttributeHeaders': { required: false, nullable: true },
                'calledAddressSelection': { required: false, nullable: false },
                'calledAddressSendExtension': { required: false, nullable: false },
                'callingAddressDiversionMethod': { required: false, nullable: false },
                'callingAddressDivertedCallsDivertedHeaderAddress': { required: false, nullable: false },
                'callingAddressDivertedCallsDivertedHeaderName': { required: false, nullable: false },
                'callingAddressDivertedCallsFromHeaderAddress': { required: false, nullable: false },
                'callingAddressDivertedCallsFromHeaderHame': { required: false, nullable: false },
                'callingAddressDivertedCallsPAssertedIdentityAddress': { required: false, nullable: false },
                'callingAddressDivertedCallsPAssertedIdentityName': { required: false, nullable: false },
                'callingAddressLineValueAddress1': { required: false, nullable: false },
                'callingAddressLineValueAddress2': { required: false, nullable: true },
                'callingAddressLineValueName1': { required: false, nullable: true },
                'callingAddressLineValueName2': { required: false, nullable: true },
                'callingAddressNormalCallsDivertedHeaderAddress': { required: false, nullable: false },
                'callingAddressNormalCallsDivertedHeaderName': { required: false, nullable: false },
                'callingAddressNormalCallsFromHeaderAddress': { required: false, nullable: false },
                'callingAddressNormalCallsFromHeaderName': { required: false, nullable: false },
                'callingAddressNormalCallsPAssertedIdentityHeaderAddress': { required: false, nullable: false },
                'callingAddressNormalCallsPAssertedIdentityHeaderName': { required: false, nullable: false },
                'callingAddressSelection': { required: false, nullable: false },
                'connectTimerMs': { required: false, nullable: true },
                'direction': { required: false, nullable: true },
                'disableFaxDetection': { required: false, nullable: false },
                'disableMediaServerPassthru': { required: false, nullable: false },
                'disconnectOnBrokenRtp': { required: false, nullable: false },
                'diversionInfo': { required: false, nullable: false },
                'dnsSrv': { required: false, nullable: false },
                'domainName': { required: false, nullable: false },
                'dtmfPayload': { required: false, nullable: false },
                'dtmfType': { required: false, nullable: false },
                'echoCancellation': { required: false, nullable: false },
                'enableProcessingOfReceivedSipReferMessages': { required: false, nullable: false },
                'enableSendingSipReferMessages': { required: false, nullable: false },
                'enableSendingSipReferMessagesToLinesInOtherLineGroups': { required: false, nullable: true },
                'enableSipPrackUpdateForEarlyMediaSupport': { required: false, nullable: false },
                'encryptRecordings': { required: false, nullable: false },
                'faxProtocol': { required: false, nullable: false },
                'ignoreAddressIfUserPortionIsNotNumeric': { required: false, nullable: false },
                'inboundProgressTimerMs': { required: false, nullable: false },
                'includeEarlyAudio': { required: false, nullable: false },
                'includeHoldMusic': { required: false, nullable: false },
                'keepTelSchemeWhenUsingAProxy': { required: false, nullable: false },
                'lineUsage': { required: false, nullable: false },
                'location': { required: false, nullable: true },
                'maximumInviteRetry': { required: false, nullable: false },
                'maximumPacketRetry': { required: false, nullable: false },
                'maxNumberOfCallsCombinedLimit': { required: false, nullable: true },
                'maxNumberOfCallsInboundLimit': { required: false, nullable: true },
                'maxNumberOfCallsOutboundLimit': { required: false, nullable: true },
                'maxNumberOfCallsUseCombined': { required: false, nullable: true },
                'maxNumberOfFaxesCombinedLimit': { required: false, nullable: true },
                'maxNumberOfFaxesInboundLimit': { required: false, nullable: true },
                'maxNumberOfFaxesOutboundLimit': { required: false, nullable: true },
                'maxNumberOfFaxesUseCombined': { required: false, nullable: true },
                'maxProbationTime': { required: false, nullable: false },
                'mediaAddressFamily': { required: false, nullable: false },
                'mediaReinviteTiming': { required: false, nullable: false },
                'mediaTiming': { required: false, nullable: false },
                'permanent': { required: false, nullable: false },
                'playbackEarlyMediaToInboundCalls': { required: false, nullable: false },
                'proxyIpList': { required: false, nullable: true },
                'receivePort': { required: false, nullable: false },
                'registarExternalList': { required: false, nullable: true },
                'registrarAddressList': { required: false, nullable: true },
                'reinviteDelayMs': { required: false, nullable: false },
                'retryableCauseCodes': { required: false, nullable: false },
                'retryableReasonCodes': { required: false, nullable: false },
                'security': { required: false, nullable: false },
                'silenceTimeMs': { required: false, nullable: false },
                'sipAccessDefaultDenyAll': { required: false, nullable: false },
                'sipAccessDeniedList': { required: false, nullable: true },
                'sipAccessGrantedList': { required: false, nullable: true },
                'sipAnswerDelayMs': { required: false, nullable: false },
                'sipDSCPValue': { required: false, nullable: false },
                'sipSessionTimeout': { required: false, nullable: false },
                'terminateAnalysisOnConnect': { required: false, nullable: false },
                'tOneTimerMs': { required: false, nullable: false },
                'transferHeaders': { required: false, nullable: true },
                'transportProtocol': { required: false, nullable: false },
                'tTwoTimerMs': { required: false, nullable: false },
                'useDiversionInfoIfPresent': { required: false, nullable: false },
                'useOnlyNumericPortion': { required: false, nullable: false },
                'useProactiveRecording': { required: false, nullable: false },
                'userToUserConversion': { required: false, nullable: true },
                'userToUserHeader': { required: false, nullable: true },
                'useSipSessionTimer': { required: false, nullable: false },
                'useSipsScheme': { required: false, nullable: false },
                'uuiProtocolDiscriminator': { required: false, nullable: false },
                'voiceActivationDetection': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:line'] = Line;

    return Line;
}());

var LineSipProxy = (function(){
    var hasProps = false;

    function LineSipProxy() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineSipProxy' });
        }

        LineSipProxy._super.constructor.apply(this, arguments);
    }
    _util.inherits(LineSipProxy, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LineSipProxy.prototype, 'ip', {
            get: function() { return this.__prop_ip; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for LineSipProxy.ip, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ip = value;
            },
            enumerable: true
        });

        Object.defineProperty(LineSipProxy.prototype, 'port', {
            get: function() { return this.__prop_port; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for LineSipProxy.port, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_port = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LineSipProxy, '__type', { value: 'urn:inin.com:configuration.hardware:lineSipProxy' });

    Object.defineProperty(LineSipProxy, '__propInfo', {
        get: function() {
            var pi = {
                'ip': { required: true, nullable: false },
                'port': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:lineSipProxy'] = LineSipProxy;

    return LineSipProxy;
}());

var LineRegistrarAddress = (function(){
    var hasProps = false;

    function LineRegistrarAddress() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineRegistrarAddress' });
        }

        LineRegistrarAddress._super.constructor.apply(this, arguments);
    }
    _util.inherits(LineRegistrarAddress, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LineRegistrarAddress.prototype, 'ip', {
            get: function() { return this.__prop_ip; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for LineRegistrarAddress.ip, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ip = value;
            },
            enumerable: true
        });

        Object.defineProperty(LineRegistrarAddress.prototype, 'port', {
            get: function() { return this.__prop_port; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for LineRegistrarAddress.port, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_port = value;
            },
            enumerable: true
        });

        Object.defineProperty(LineRegistrarAddress.prototype, 'registrationTime', {
            get: function() { return this.__prop_registrationTime; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for LineRegistrarAddress.registrationTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_registrationTime = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LineRegistrarAddress, '__type', { value: 'urn:inin.com:configuration.hardware:lineRegistrarAddress' });

    Object.defineProperty(LineRegistrarAddress, '__propInfo', {
        get: function() {
            var pi = {
                'ip': { required: true, nullable: false },
                'port': { required: true, nullable: false },
                'registrationTime': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:lineRegistrarAddress'] = LineRegistrarAddress;

    return LineRegistrarAddress;
}());

var LineAccessLevel = (function(){
    var hasProps = false;

    function LineAccessLevel() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineAccessLevel' });
        }

        LineAccessLevel._super.constructor.apply(this, arguments);
    }
    _util.inherits(LineAccessLevel, _util.DataContract);

    function defineProps() {
        Object.defineProperty(LineAccessLevel.prototype, 'ip', {
            get: function() { return this.__prop_ip; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for LineAccessLevel.ip, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ip = value;
            },
            enumerable: true
        });

        Object.defineProperty(LineAccessLevel.prototype, 'subnetPrefixLength', {
            get: function() { return this.__prop_subnetPrefixLength; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for LineAccessLevel.subnetPrefixLength, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_subnetPrefixLength = value;
            },
            enumerable: true
        });

        Object.defineProperty(LineAccessLevel.prototype, 'accessValidation', {
            get: function() { return this.__prop_accessValidation; },
            set: function(value) {
                if (!(value instanceof LineAccessValidation)) {
                    try {
                        value = new LineAccessValidation(value);
                    } catch (e) {
                        throw new TypeError('Error setting LineAccessLevel.accessValidation: ' + e.message);
                    }
                }

                this.__prop_accessValidation = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(LineAccessLevel, '__type', { value: 'urn:inin.com:configuration.hardware:lineAccessLevel' });

    Object.defineProperty(LineAccessLevel, '__propInfo', {
        get: function() {
            var pi = {
                'ip': { required: true, nullable: false },
                'subnetPrefixLength': { required: true, nullable: false },
                'accessValidation': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:lineAccessLevel'] = LineAccessLevel;

    return LineAccessLevel;
}());

var Locations = (function(){
    var hasProps = false;

    function Locations() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:locations' });
        }

        Locations._super.constructor.apply(this, arguments);
    }
    _util.inherits(Locations, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Locations.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Location); }))) {
                    try {
                        value = value.map(function(item){ return new Location(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Locations.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Locations, '__type', { value: 'urn:inin.com:configuration.hardware:locations' });

    Object.defineProperty(Locations, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:locations'] = Locations;

    return Locations;
}());

var Location = (function(){
    var hasProps = false;

    function Location() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:location' });
        }

        Location._super.constructor.apply(this, arguments);
    }
    _util.inherits(Location, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Location.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Location.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(Location.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Location.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Location.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Location.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Location.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for Location.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(Location.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Location.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(Location.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting Location.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(Location.prototype, 'sntpServer', {
            get: function() { return this.__prop_sntpServer; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for Location.sntpServer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sntpServer = value;
            },
            enumerable: true
        });

        Object.defineProperty(Location.prototype, 'timezone', {
            get: function() { return this.__prop_timezone; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Location.timezone, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_timezone = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Location, '__type', { value: 'urn:inin.com:configuration.hardware:location' });

    Object.defineProperty(Location, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'sntpServer': { required: false, nullable: true },
                'timezone': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:location'] = Location;

    return Location;
}());

var ManagedExternalRegistrationsDeprecatedBulkUpdate = (function(){
    var hasProps = false;

    function ManagedExternalRegistrationsDeprecatedBulkUpdate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedExternalRegistrationsDeprecatedBulkUpdate' });
        }

        ManagedExternalRegistrationsDeprecatedBulkUpdate._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedExternalRegistrationsDeprecatedBulkUpdate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedExternalRegistrationsDeprecatedBulkUpdate.prototype, 'add', {
            get: function() { return this.__prop_add; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ManagedExternalRegistrationDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ManagedExternalRegistrationDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedExternalRegistrationsDeprecatedBulkUpdate.add: ' + e.message);
                    }
                }

                this.__prop_add = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedExternalRegistrationsDeprecatedBulkUpdate.prototype, 'modify', {
            get: function() { return this.__prop_modify; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ManagedExternalRegistrationDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ManagedExternalRegistrationDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedExternalRegistrationsDeprecatedBulkUpdate.modify: ' + e.message);
                    }
                }

                this.__prop_modify = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedExternalRegistrationsDeprecatedBulkUpdate.prototype, 'remove', {
            get: function() { return this.__prop_remove; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for ManagedExternalRegistrationsDeprecatedBulkUpdate.remove, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remove = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedExternalRegistrationsDeprecatedBulkUpdate, '__type', { value: 'urn:inin.com:configuration.hardware:managedExternalRegistrationsDeprecatedBulkUpdate' });

    Object.defineProperty(ManagedExternalRegistrationsDeprecatedBulkUpdate, '__propInfo', {
        get: function() {
            var pi = {
                'add': { required: false, nullable: true },
                'modify': { required: false, nullable: true },
                'remove': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedExternalRegistrationsDeprecatedBulkUpdate'] = ManagedExternalRegistrationsDeprecatedBulkUpdate;

    return ManagedExternalRegistrationsDeprecatedBulkUpdate;
}());

var ManagedExternalRegistrationDeprecated = (function(){
    var hasProps = false;

    function ManagedExternalRegistrationDeprecated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedExternalRegistrationDeprecated' });
        }

        ManagedExternalRegistrationDeprecated._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedExternalRegistrationDeprecated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedExternalRegistrationDeprecated.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedExternalRegistrationDeprecated.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedExternalRegistrationDeprecated.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedExternalRegistrationDeprecated.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedExternalRegistrationDeprecated.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedExternalRegistrationDeprecated.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedExternalRegistrationDeprecated.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedExternalRegistrationDeprecated.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedExternalRegistrationDeprecated.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedExternalRegistrationDeprecated.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedExternalRegistrationDeprecated.prototype, 'callsPerLineKey', {
            get: function() { return this.__prop_callsPerLineKey; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedExternalRegistrationDeprecated.callsPerLineKey, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callsPerLineKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedExternalRegistrationDeprecated.prototype, 'lineKeys', {
            get: function() { return this.__prop_lineKeys; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedExternalRegistrationDeprecated.lineKeys, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lineKeys = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedExternalRegistrationDeprecated.prototype, 'order', {
            get: function() { return this.__prop_order; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedExternalRegistrationDeprecated.order, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_order = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedExternalRegistrationDeprecated, '__type', { value: 'urn:inin.com:configuration.hardware:managedExternalRegistrationDeprecated' });

    Object.defineProperty(ManagedExternalRegistrationDeprecated, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'callsPerLineKey': { required: false, nullable: true },
                'lineKeys': { required: false, nullable: true },
                'order': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedExternalRegistrationDeprecated'] = ManagedExternalRegistrationDeprecated;

    return ManagedExternalRegistrationDeprecated;
}());

var ManagedPhoneRegistrationGroupsDeprecated = (function(){
    var hasProps = false;

    function ManagedPhoneRegistrationGroupsDeprecated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneRegistrationGroupsDeprecated' });
        }

        ManagedPhoneRegistrationGroupsDeprecated._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedPhoneRegistrationGroupsDeprecated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedPhoneRegistrationGroupsDeprecated.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ManagedPhoneRegistrationGroupDeprecated); }))) {
                    try {
                        value = value.map(function(item){ return new ManagedPhoneRegistrationGroupDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneRegistrationGroupsDeprecated.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedPhoneRegistrationGroupsDeprecated, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneRegistrationGroupsDeprecated' });

    Object.defineProperty(ManagedPhoneRegistrationGroupsDeprecated, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedPhoneRegistrationGroupsDeprecated'] = ManagedPhoneRegistrationGroupsDeprecated;

    return ManagedPhoneRegistrationGroupsDeprecated;
}());

var ManagedPhoneRegistrationGroupDeprecated = (function(){
    var hasProps = false;

    function ManagedPhoneRegistrationGroupDeprecated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneRegistrationGroupDeprecated' });
        }

        ManagedPhoneRegistrationGroupDeprecated._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedPhoneRegistrationGroupDeprecated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedPhoneRegistrationGroupDeprecated.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneRegistrationGroupDeprecated.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRegistrationGroupDeprecated.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedPhoneRegistrationGroupDeprecated.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRegistrationGroupDeprecated.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneRegistrationGroupDeprecated.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRegistrationGroupDeprecated.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedPhoneRegistrationGroupDeprecated.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRegistrationGroupDeprecated.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedPhoneRegistrationGroupDeprecated.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRegistrationGroupDeprecated.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneRegistrationGroupDeprecated.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRegistrationGroupDeprecated.prototype, 'certificateAuthority', {
            get: function() { return this.__prop_certificateAuthority; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedPhoneRegistrationGroupDeprecated.certificateAuthority, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_certificateAuthority = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRegistrationGroupDeprecated.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for ManagedPhoneRegistrationGroupDeprecated.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRegistrationGroupDeprecated.prototype, 'permanent', {
            get: function() { return this.__prop_permanent; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneRegistrationGroupDeprecated.permanent, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_permanent = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRegistrationGroupDeprecated.prototype, 'registrations', {
            get: function() { return this.__prop_registrations; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RegistrationGroupRegistration); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new RegistrationGroupRegistration(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneRegistrationGroupDeprecated.registrations: ' + e.message);
                    }
                }

                this.__prop_registrations = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRegistrationGroupDeprecated.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedPhoneRegistrationGroupDeprecated.type, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedPhoneRegistrationGroupDeprecated, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneRegistrationGroupDeprecated' });

    Object.defineProperty(ManagedPhoneRegistrationGroupDeprecated, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'certificateAuthority': { required: false, nullable: true },
                'name': { required: false, nullable: false },
                'permanent': { required: false, nullable: true },
                'registrations': { required: false, nullable: true },
                'type': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedPhoneRegistrationGroupDeprecated'] = ManagedPhoneRegistrationGroupDeprecated;

    return ManagedPhoneRegistrationGroupDeprecated;
}());

var RegistrationGroupRegistration = (function(){
    var hasProps = false;

    function RegistrationGroupRegistration() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:registrationGroupRegistration' });
        }

        RegistrationGroupRegistration._super.constructor.apply(this, arguments);
    }
    _util.inherits(RegistrationGroupRegistration, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RegistrationGroupRegistration.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RegistrationGroupRegistration.type, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        Object.defineProperty(RegistrationGroupRegistration.prototype, 'address', {
            get: function() { return this.__prop_address; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RegistrationGroupRegistration.address, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_address = value;
            },
            enumerable: true
        });

        Object.defineProperty(RegistrationGroupRegistration.prototype, 'port', {
            get: function() { return this.__prop_port; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for RegistrationGroupRegistration.port, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_port = value;
            },
            enumerable: true
        });

        Object.defineProperty(RegistrationGroupRegistration.prototype, 'transportProtocol', {
            get: function() { return this.__prop_transportProtocol; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for RegistrationGroupRegistration.transportProtocol, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_transportProtocol = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RegistrationGroupRegistration, '__type', { value: 'urn:inin.com:configuration.hardware:registrationGroupRegistration' });

    Object.defineProperty(RegistrationGroupRegistration, '__propInfo', {
        get: function() {
            var pi = {
                'type': { required: true, nullable: false },
                'address': { required: true, nullable: false },
                'port': { required: true, nullable: false },
                'transportProtocol': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:registrationGroupRegistration'] = RegistrationGroupRegistration;

    return RegistrationGroupRegistration;
}());

var ManagedPhoneRingSetsDeprecated = (function(){
    var hasProps = false;

    function ManagedPhoneRingSetsDeprecated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneRingSetsDeprecated' });
        }

        ManagedPhoneRingSetsDeprecated._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedPhoneRingSetsDeprecated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedPhoneRingSetsDeprecated.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ManagedPhoneRingSetDeprecated); }))) {
                    try {
                        value = value.map(function(item){ return new ManagedPhoneRingSetDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneRingSetsDeprecated.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedPhoneRingSetsDeprecated, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneRingSetsDeprecated' });

    Object.defineProperty(ManagedPhoneRingSetsDeprecated, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedPhoneRingSetsDeprecated'] = ManagedPhoneRingSetsDeprecated;

    return ManagedPhoneRingSetsDeprecated;
}());

var ManagedPhoneRingSetDeprecated = (function(){
    var hasProps = false;

    function ManagedPhoneRingSetDeprecated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneRingSetDeprecated' });
        }

        ManagedPhoneRingSetDeprecated._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedPhoneRingSetDeprecated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedPhoneRingSetDeprecated.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneRingSetDeprecated.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRingSetDeprecated.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedPhoneRingSetDeprecated.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRingSetDeprecated.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneRingSetDeprecated.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRingSetDeprecated.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedPhoneRingSetDeprecated.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRingSetDeprecated.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedPhoneRingSetDeprecated.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneRingSetDeprecated.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneRingSetDeprecated.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedPhoneRingSetDeprecated, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneRingSetDeprecated' });

    Object.defineProperty(ManagedPhoneRingSetDeprecated, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedPhoneRingSetDeprecated'] = ManagedPhoneRingSetDeprecated;

    return ManagedPhoneRingSetDeprecated;
}());

var ManagedPhonesDeprecated = (function(){
    var hasProps = false;

    function ManagedPhonesDeprecated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhonesDeprecated' });
        }

        ManagedPhonesDeprecated._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedPhonesDeprecated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedPhonesDeprecated.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ManagedPhoneDeprecated); }))) {
                    try {
                        value = value.map(function(item){ return new ManagedPhoneDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhonesDeprecated.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedPhonesDeprecated, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhonesDeprecated' });

    Object.defineProperty(ManagedPhonesDeprecated, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedPhonesDeprecated'] = ManagedPhonesDeprecated;

    return ManagedPhonesDeprecated;
}());

var ManagedPhoneDeprecated = (function(){
    var hasProps = false;

    function ManagedPhoneDeprecated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneDeprecated' });
        }

        ManagedPhoneDeprecated._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedPhoneDeprecated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'addressFamily', {
            get: function() { return this.__prop_addressFamily; },
            set: function(value) {
                if (!(value instanceof AddressFamily || value === void 0 || value === null)) {
                    try {
                        value = new AddressFamily(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.addressFamily: ' + e.message);
                    }
                }

                this.__prop_addressFamily = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'audioProtocol', {
            get: function() { return this.__prop_audioProtocol; },
            set: function(value) {
                if (!(value instanceof Configuration.AudioProtocol || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.AudioProtocol(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.audioProtocol: ' + e.message);
                    }
                }

                this.__prop_audioProtocol = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'expansionModules', {
            get: function() { return this.__prop_expansionModules; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneDeprecated.expansionModules, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_expansionModules = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'isActive', {
            get: function() { return this.__prop_isActive; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneDeprecated.isActive, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isActive = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'isSupportedMacAddress', {
            get: function() { return this.__prop_isSupportedMacAddress; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneDeprecated.isSupportedMacAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSupportedMacAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'isSupportedRingSets', {
            get: function() { return this.__prop_isSupportedRingSets; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneDeprecated.isSupportedRingSets, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSupportedRingSets = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'isSupportedSharedAppearances', {
            get: function() { return this.__prop_isSupportedSharedAppearances; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneDeprecated.isSupportedSharedAppearances, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSupportedSharedAppearances = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'isSupportedSipBridge', {
            get: function() { return this.__prop_isSupportedSipBridge; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneDeprecated.isSupportedSipBridge, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSupportedSipBridge = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'isSupportedSrtp', {
            get: function() { return this.__prop_isSupportedSrtp; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneDeprecated.isSupportedSrtp, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSupportedSrtp = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'isSupportedTimeZone', {
            get: function() { return this.__prop_isSupportedTimeZone; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneDeprecated.isSupportedTimeZone, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSupportedTimeZone = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'location', {
            get: function() { return this.__prop_location; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.location: ' + e.message);
                    }
                }

                this.__prop_location = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'manufacturer', {
            get: function() { return this.__prop_manufacturer; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedPhoneDeprecated.manufacturer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_manufacturer = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'maxCallsPerLineKey', {
            get: function() { return this.__prop_maxCallsPerLineKey; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneDeprecated.maxCallsPerLineKey, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxCallsPerLineKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'maxExpansionModules', {
            get: function() { return this.__prop_maxExpansionModules; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneDeprecated.maxExpansionModules, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxExpansionModules = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'maxLineKeys', {
            get: function() { return this.__prop_maxLineKeys; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneDeprecated.maxLineKeys, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxLineKeys = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'maxLineKeysPerExpansionModule', {
            get: function() { return this.__prop_maxLineKeysPerExpansionModule; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneDeprecated.maxLineKeysPerExpansionModule, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxLineKeysPerExpansionModule = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'maxRegistrations', {
            get: function() { return this.__prop_maxRegistrations; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneDeprecated.maxRegistrations, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxRegistrations = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'maxRegistrationsPerExpansionModule', {
            get: function() { return this.__prop_maxRegistrationsPerExpansionModule; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneDeprecated.maxRegistrationsPerExpansionModule, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxRegistrationsPerExpansionModule = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'model', {
            get: function() { return this.__prop_model; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedPhoneDeprecated.model, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_model = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'phoneAttributes', {
            get: function() { return this.__prop_phoneAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.phoneAttributes: ' + e.message);
                    }
                }

                this.__prop_phoneAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'preferredLanguage', {
            get: function() { return this.__prop_preferredLanguage; },
            set: function(value) {
                if (!(value instanceof Configuration.IdDisplayName || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.IdDisplayName(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.preferredLanguage: ' + e.message);
                    }
                }

                this.__prop_preferredLanguage = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'registrationGroup', {
            get: function() { return this.__prop_registrationGroup; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.registrationGroup: ' + e.message);
                    }
                }

                this.__prop_registrationGroup = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'sipBridge', {
            get: function() { return this.__prop_sipBridge; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.sipBridge: ' + e.message);
                    }
                }

                this.__prop_sipBridge = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'status', {
            get: function() { return this.__prop_status; },
            set: function(value) {
                if (!(value instanceof PhoneStatus || value === void 0 || value === null)) {
                    try {
                        value = new PhoneStatus(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.status: ' + e.message);
                    }
                }

                this.__prop_status = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'timeZone', {
            get: function() { return this.__prop_timeZone; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.timeZone: ' + e.message);
                    }
                }

                this.__prop_timeZone = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(value instanceof StationType || value === void 0)) {
                    try {
                        value = new StationType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.type: ' + e.message);
                    }
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedPhoneDeprecated.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedPhoneDeprecated.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedPhoneDeprecated.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'ipAddress', {
            get: function() { return this.__prop_ipAddress; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedPhoneDeprecated.ipAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_ipAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'lastReloaded', {
            get: function() { return this.__prop_lastReloaded; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedPhoneDeprecated.lastReloaded, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastReloaded = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'managedExternalRegistrationsDeprecated', {
            get: function() { return this.__prop_managedExternalRegistrationsDeprecated; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ManagedExternalRegistrationDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ManagedExternalRegistrationDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.managedExternalRegistrationsDeprecated: ' + e.message);
                    }
                }

                this.__prop_managedExternalRegistrationsDeprecated = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'managedSipProperties', {
            get: function() { return this.__prop_managedSipProperties; },
            set: function(value) {
                if (!(value instanceof Configuration.ManagedSipProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ManagedSipProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.managedSipProperties: ' + e.message);
                    }
                }

                this.__prop_managedSipProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'managedStationsDeprecated', {
            get: function() { return this.__prop_managedStationsDeprecated; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ManagedStationDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ManagedStationDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.managedStationsDeprecated: ' + e.message);
                    }
                }

                this.__prop_managedStationsDeprecated = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'networkID', {
            get: function() { return this.__prop_networkID; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedPhoneDeprecated.networkID, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_networkID = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'scheduledReload', {
            get: function() { return this.__prop_scheduledReload; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedPhoneDeprecated.scheduledReload, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scheduledReload = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneDeprecated.prototype, 'sharedStationsDeprecated', {
            get: function() { return this.__prop_sharedStationsDeprecated; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SharedStationDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SharedStationDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneDeprecated.sharedStationsDeprecated: ' + e.message);
                    }
                }

                this.__prop_sharedStationsDeprecated = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedPhoneDeprecated, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneDeprecated' });

    Object.defineProperty(ManagedPhoneDeprecated, '__propInfo', {
        get: function() {
            var pi = {
                'addressFamily': { required: false, nullable: true },
                'audioProtocol': { required: false, nullable: true },
                'expansionModules': { required: false, nullable: true },
                'isActive': { required: false, nullable: true },
                'isSupportedMacAddress': { required: false, nullable: true },
                'isSupportedRingSets': { required: false, nullable: true },
                'isSupportedSharedAppearances': { required: false, nullable: true },
                'isSupportedSipBridge': { required: false, nullable: true },
                'isSupportedSrtp': { required: false, nullable: true },
                'isSupportedTimeZone': { required: false, nullable: true },
                'location': { required: false, nullable: true },
                'manufacturer': { required: false, nullable: true },
                'maxCallsPerLineKey': { required: false, nullable: true },
                'maxExpansionModules': { required: false, nullable: true },
                'maxLineKeys': { required: false, nullable: true },
                'maxLineKeysPerExpansionModule': { required: false, nullable: true },
                'maxRegistrations': { required: false, nullable: true },
                'maxRegistrationsPerExpansionModule': { required: false, nullable: true },
                'model': { required: false, nullable: true },
                'phoneAttributes': { required: false, nullable: true },
                'preferredLanguage': { required: false, nullable: true },
                'registrationGroup': { required: false, nullable: true },
                'sipBridge': { required: false, nullable: true },
                'status': { required: false, nullable: true },
                'timeZone': { required: false, nullable: false },
                'type': { required: false, nullable: false },
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'ipAddress': { required: false, nullable: true },
                'lastReloaded': { required: false, nullable: true },
                'managedExternalRegistrationsDeprecated': { required: false, nullable: true },
                'managedSipProperties': { required: false, nullable: true },
                'managedStationsDeprecated': { required: false, nullable: true },
                'networkID': { required: false, nullable: true },
                'scheduledReload': { required: false, nullable: true },
                'sharedStationsDeprecated': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedPhoneDeprecated'] = ManagedPhoneDeprecated;

    return ManagedPhoneDeprecated;
}());

var ManagedStationDeprecated = (function(){
    var hasProps = false;

    function ManagedStationDeprecated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedStationDeprecated' });
        }

        ManagedStationDeprecated._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedStationDeprecated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedStationDeprecated.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationDeprecated.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedStationDeprecated.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationDeprecated.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedStationDeprecated.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedStationDeprecated.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'shouldAlwaysRing', {
            get: function() { return this.__prop_shouldAlwaysRing; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedStationDeprecated.shouldAlwaysRing, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shouldAlwaysRing = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'callsPerLineKey', {
            get: function() { return this.__prop_callsPerLineKey; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedStationDeprecated.callsPerLineKey, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callsPerLineKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'connectionAddress', {
            get: function() { return this.__prop_connectionAddress; },
            set: function(value) {
                if (!(value instanceof SipAddress || value === void 0 || value === null)) {
                    try {
                        value = new SipAddress(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationDeprecated.connectionAddress: ' + e.message);
                    }
                }

                this.__prop_connectionAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'contactLine', {
            get: function() { return this.__prop_contactLine; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationDeprecated.contactLine: ' + e.message);
                    }
                }

                this.__prop_contactLine = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'isShareable', {
            get: function() { return this.__prop_isShareable; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedStationDeprecated.isShareable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isShareable = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'lineKeys', {
            get: function() { return this.__prop_lineKeys; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedStationDeprecated.lineKeys, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lineKeys = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'offeringCallTimeout', {
            get: function() { return this.__prop_offeringCallTimeout; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedStationDeprecated.offeringCallTimeout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_offeringCallTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'order', {
            get: function() { return this.__prop_order; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedStationDeprecated.order, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_order = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'phoneNumberClassifications', {
            get: function() { return this.__prop_phoneNumberClassifications; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationDeprecated.phoneNumberClassifications: ' + e.message);
                    }
                }

                this.__prop_phoneNumberClassifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'requireForcedAuthorizationCode', {
            get: function() { return this.__prop_requireForcedAuthorizationCode; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedStationDeprecated.requireForcedAuthorizationCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_requireForcedAuthorizationCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'ringSet', {
            get: function() { return this.__prop_ringSet; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationDeprecated.ringSet: ' + e.message);
                    }
                }

                this.__prop_ringSet = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'security', {
            get: function() { return this.__prop_security; },
            set: function(value) {
                if (!(value instanceof Configuration.SecurityLevel || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.SecurityLevel(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationDeprecated.security: ' + e.message);
                    }
                }

                this.__prop_security = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationDeprecated.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'active', {
            get: function() { return this.__prop_active; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedStationDeprecated.active, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_active = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'extension', {
            get: function() { return this.__prop_extension; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedStationDeprecated.extension, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_extension = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'identificationAddress', {
            get: function() { return this.__prop_identificationAddress; },
            set: function(value) {
                if (!(value instanceof SipAddress || value === void 0 || value === null)) {
                    try {
                        value = new SipAddress(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationDeprecated.identificationAddress: ' + e.message);
                    }
                }

                this.__prop_identificationAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'machineName', {
            get: function() { return this.__prop_machineName; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedStationDeprecated.machineName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_machineName = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'stationLicenseProperties', {
            get: function() { return this.__prop_stationLicenseProperties; },
            set: function(value) {
                if (!(value instanceof Configuration.StationLicenseProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.StationLicenseProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationDeprecated.stationLicenseProperties: ' + e.message);
                    }
                }

                this.__prop_stationLicenseProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationDeprecated.prototype, 'stationType', {
            get: function() { return this.__prop_stationType; },
            set: function(value) {
                if (!(value instanceof StationType || value === void 0)) {
                    try {
                        value = new StationType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationDeprecated.stationType: ' + e.message);
                    }
                }

                this.__prop_stationType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedStationDeprecated, '__type', { value: 'urn:inin.com:configuration.hardware:managedStationDeprecated' });

    Object.defineProperty(ManagedStationDeprecated, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'shouldAlwaysRing': { required: false, nullable: true },
                'callsPerLineKey': { required: false, nullable: true },
                'connectionAddress': { required: false, nullable: true },
                'contactLine': { required: false, nullable: true },
                'isShareable': { required: false, nullable: true },
                'lineKeys': { required: false, nullable: true },
                'offeringCallTimeout': { required: false, nullable: true },
                'order': { required: false, nullable: true },
                'phoneNumberClassifications': { required: false, nullable: true },
                'requireForcedAuthorizationCode': { required: false, nullable: true },
                'ringSet': { required: false, nullable: true },
                'security': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'active': { required: false, nullable: true },
                'extension': { required: false, nullable: true },
                'identificationAddress': { required: false, nullable: true },
                'machineName': { required: false, nullable: true },
                'stationLicenseProperties': { required: false, nullable: true },
                'stationType': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedStationDeprecated'] = ManagedStationDeprecated;

    return ManagedStationDeprecated;
}());

var SharedStationDeprecated = (function(){
    var hasProps = false;

    function SharedStationDeprecated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:sharedStationDeprecated' });
        }

        SharedStationDeprecated._super.constructor.apply(this, arguments);
    }
    _util.inherits(SharedStationDeprecated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SharedStationDeprecated.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SharedStationDeprecated.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationDeprecated.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SharedStationDeprecated.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationDeprecated.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SharedStationDeprecated.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationDeprecated.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SharedStationDeprecated.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationDeprecated.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SharedStationDeprecated.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationDeprecated.prototype, 'callsPerLineKey', {
            get: function() { return this.__prop_callsPerLineKey; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for SharedStationDeprecated.callsPerLineKey, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callsPerLineKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationDeprecated.prototype, 'lineKeys', {
            get: function() { return this.__prop_lineKeys; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for SharedStationDeprecated.lineKeys, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lineKeys = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationDeprecated.prototype, 'order', {
            get: function() { return this.__prop_order; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for SharedStationDeprecated.order, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_order = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationDeprecated.prototype, 'sharedStationId', {
            get: function() { return this.__prop_sharedStationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SharedStationDeprecated.sharedStationId: ' + e.message);
                    }
                }

                this.__prop_sharedStationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SharedStationDeprecated, '__type', { value: 'urn:inin.com:configuration.hardware:sharedStationDeprecated' });

    Object.defineProperty(SharedStationDeprecated, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'callsPerLineKey': { required: false, nullable: true },
                'lineKeys': { required: false, nullable: true },
                'order': { required: false, nullable: true },
                'sharedStationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:sharedStationDeprecated'] = SharedStationDeprecated;

    return SharedStationDeprecated;
}());

var ApplyTemplateArgument = (function(){
    var hasProps = false;

    function ApplyTemplateArgument() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:applyTemplateArgument' });
        }

        ApplyTemplateArgument._super.constructor.apply(this, arguments);
    }
    _util.inherits(ApplyTemplateArgument, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ApplyTemplateArgument.prototype, 'phones', {
            get: function() { return this.__prop_phones; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for ApplyTemplateArgument.phones, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phones = value;
            },
            enumerable: true
        });

        Object.defineProperty(ApplyTemplateArgument.prototype, 'template', {
            get: function() { return this.__prop_template; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ApplyTemplateArgument.template, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_template = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ApplyTemplateArgument, '__type', { value: 'urn:inin.com:configuration.hardware:applyTemplateArgument' });

    Object.defineProperty(ApplyTemplateArgument, '__propInfo', {
        get: function() {
            var pi = {
                'phones': { required: true, nullable: false },
                'template': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:applyTemplateArgument'] = ApplyTemplateArgument;

    return ApplyTemplateArgument;
}());

var ApplyTemplateResult = (function(){
    var hasProps = false;

    function ApplyTemplateResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:applyTemplateResult' });
        }

        ApplyTemplateResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(ApplyTemplateResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ApplyTemplateResult.prototype, 'applyTemplate', {
            get: function() { return this.__prop_applyTemplate; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ApplyTemplateEntry); }))) {
                    try {
                        value = value.map(function(item){ return new ApplyTemplateEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ApplyTemplateResult.applyTemplate: ' + e.message);
                    }
                }

                this.__prop_applyTemplate = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ApplyTemplateResult, '__type', { value: 'urn:inin.com:configuration.hardware:applyTemplateResult' });

    Object.defineProperty(ApplyTemplateResult, '__propInfo', {
        get: function() {
            var pi = {
                'applyTemplate': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:applyTemplateResult'] = ApplyTemplateResult;

    return ApplyTemplateResult;
}());

var ApplyTemplateEntry = (function(){
    var hasProps = false;

    function ApplyTemplateEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:applyTemplateEntry' });
        }

        ApplyTemplateEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(ApplyTemplateEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ApplyTemplateEntry.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ApplyTemplateEntry.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(ApplyTemplateEntry.prototype, 'result', {
            get: function() { return this.__prop_result; },
            set: function(value) {
                if (!(value instanceof ApplyTemplateResultCode)) {
                    try {
                        value = new ApplyTemplateResultCode(value);
                    } catch (e) {
                        throw new TypeError('Error setting ApplyTemplateEntry.result: ' + e.message);
                    }
                }

                this.__prop_result = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ApplyTemplateEntry, '__type', { value: 'urn:inin.com:configuration.hardware:applyTemplateEntry' });

    Object.defineProperty(ApplyTemplateEntry, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'result': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:applyTemplateEntry'] = ApplyTemplateEntry;

    return ApplyTemplateEntry;
}());

var CancelScheduledReloadsArgument = (function(){
    var hasProps = false;

    function CancelScheduledReloadsArgument() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:cancelScheduledReloadsArgument' });
        }

        CancelScheduledReloadsArgument._super.constructor.apply(this, arguments);
    }
    _util.inherits(CancelScheduledReloadsArgument, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CancelScheduledReloadsArgument.prototype, 'phones', {
            get: function() { return this.__prop_phones; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for CancelScheduledReloadsArgument.phones, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phones = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CancelScheduledReloadsArgument, '__type', { value: 'urn:inin.com:configuration.hardware:cancelScheduledReloadsArgument' });

    Object.defineProperty(CancelScheduledReloadsArgument, '__propInfo', {
        get: function() {
            var pi = {
                'phones': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:cancelScheduledReloadsArgument'] = CancelScheduledReloadsArgument;

    return CancelScheduledReloadsArgument;
}());

var CancelScheduledReloadsResult = (function(){
    var hasProps = false;

    function CancelScheduledReloadsResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:cancelScheduledReloadsResult' });
        }

        CancelScheduledReloadsResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(CancelScheduledReloadsResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CancelScheduledReloadsResult.prototype, 'cancelScheduledReloads', {
            get: function() { return this.__prop_cancelScheduledReloads; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof CancelScheduledReloadsEntry); }))) {
                    try {
                        value = value.map(function(item){ return new CancelScheduledReloadsEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting CancelScheduledReloadsResult.cancelScheduledReloads: ' + e.message);
                    }
                }

                this.__prop_cancelScheduledReloads = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CancelScheduledReloadsResult, '__type', { value: 'urn:inin.com:configuration.hardware:cancelScheduledReloadsResult' });

    Object.defineProperty(CancelScheduledReloadsResult, '__propInfo', {
        get: function() {
            var pi = {
                'cancelScheduledReloads': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:cancelScheduledReloadsResult'] = CancelScheduledReloadsResult;

    return CancelScheduledReloadsResult;
}());

var CancelScheduledReloadsEntry = (function(){
    var hasProps = false;

    function CancelScheduledReloadsEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:cancelScheduledReloadsEntry' });
        }

        CancelScheduledReloadsEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(CancelScheduledReloadsEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(CancelScheduledReloadsEntry.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for CancelScheduledReloadsEntry.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(CancelScheduledReloadsEntry.prototype, 'result', {
            get: function() { return this.__prop_result; },
            set: function(value) {
                if (!(value instanceof PhoneResultCode)) {
                    try {
                        value = new PhoneResultCode(value);
                    } catch (e) {
                        throw new TypeError('Error setting CancelScheduledReloadsEntry.result: ' + e.message);
                    }
                }

                this.__prop_result = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(CancelScheduledReloadsEntry, '__type', { value: 'urn:inin.com:configuration.hardware:cancelScheduledReloadsEntry' });

    Object.defineProperty(CancelScheduledReloadsEntry, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'result': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:cancelScheduledReloadsEntry'] = CancelScheduledReloadsEntry;

    return CancelScheduledReloadsEntry;
}());

var SupportedPhonesAttributesResult = (function(){
    var hasProps = false;

    function SupportedPhonesAttributesResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:supportedPhonesAttributesResult' });
        }

        SupportedPhonesAttributesResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(SupportedPhonesAttributesResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SupportedPhonesAttributesResult.prototype, 'dynamicAttributes', {
            get: function() { return this.__prop_dynamicAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DynamicAttributeInformation); }))) {
                    try {
                        value = value.map(function(item){ return new DynamicAttributeInformation(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SupportedPhonesAttributesResult.dynamicAttributes: ' + e.message);
                    }
                }

                this.__prop_dynamicAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupportedPhonesAttributesResult.prototype, 'maxLineKeys', {
            get: function() { return this.__prop_maxLineKeys; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for SupportedPhonesAttributesResult.maxLineKeys, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxLineKeys = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupportedPhonesAttributesResult.prototype, 'maxExpansionModules', {
            get: function() { return this.__prop_maxExpansionModules; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for SupportedPhonesAttributesResult.maxExpansionModules, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxExpansionModules = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupportedPhonesAttributesResult.prototype, 'maxCallsPerLineKey', {
            get: function() { return this.__prop_maxCallsPerLineKey; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for SupportedPhonesAttributesResult.maxCallsPerLineKey, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxCallsPerLineKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupportedPhonesAttributesResult.prototype, 'maxLineKeysPerExpansionModule', {
            get: function() { return this.__prop_maxLineKeysPerExpansionModule; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for SupportedPhonesAttributesResult.maxLineKeysPerExpansionModule, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxLineKeysPerExpansionModule = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupportedPhonesAttributesResult.prototype, 'maxRegistrations', {
            get: function() { return this.__prop_maxRegistrations; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for SupportedPhonesAttributesResult.maxRegistrations, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxRegistrations = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupportedPhonesAttributesResult.prototype, 'maxRegistrationsPerExpansionModule', {
            get: function() { return this.__prop_maxRegistrationsPerExpansionModule; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for SupportedPhonesAttributesResult.maxRegistrationsPerExpansionModule, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxRegistrationsPerExpansionModule = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupportedPhonesAttributesResult.prototype, 'supportsMacAddress', {
            get: function() { return this.__prop_supportsMacAddress; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for SupportedPhonesAttributesResult.supportsMacAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_supportsMacAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupportedPhonesAttributesResult.prototype, 'supportsRingSets', {
            get: function() { return this.__prop_supportsRingSets; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for SupportedPhonesAttributesResult.supportsRingSets, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_supportsRingSets = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupportedPhonesAttributesResult.prototype, 'supportsTimeZones', {
            get: function() { return this.__prop_supportsTimeZones; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for SupportedPhonesAttributesResult.supportsTimeZones, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_supportsTimeZones = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupportedPhonesAttributesResult.prototype, 'supportsSharedAppearances', {
            get: function() { return this.__prop_supportsSharedAppearances; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for SupportedPhonesAttributesResult.supportsSharedAppearances, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_supportsSharedAppearances = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupportedPhonesAttributesResult.prototype, 'supportsSRTP', {
            get: function() { return this.__prop_supportsSRTP; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for SupportedPhonesAttributesResult.supportsSRTP, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_supportsSRTP = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupportedPhonesAttributesResult.prototype, 'supportsSipBridge', {
            get: function() { return this.__prop_supportsSipBridge; },
            set: function(value) {
                if (!(_util.isBoolean(value))) {
                    throw new TypeError('Expected type Boolean for SupportedPhonesAttributesResult.supportsSipBridge, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_supportsSipBridge = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SupportedPhonesAttributesResult, '__type', { value: 'urn:inin.com:configuration.hardware:supportedPhonesAttributesResult' });

    Object.defineProperty(SupportedPhonesAttributesResult, '__propInfo', {
        get: function() {
            var pi = {
                'dynamicAttributes': { required: true, nullable: false },
                'maxLineKeys': { required: true, nullable: false },
                'maxExpansionModules': { required: true, nullable: false },
                'maxCallsPerLineKey': { required: true, nullable: false },
                'maxLineKeysPerExpansionModule': { required: true, nullable: false },
                'maxRegistrations': { required: true, nullable: false },
                'maxRegistrationsPerExpansionModule': { required: true, nullable: false },
                'supportsMacAddress': { required: true, nullable: false },
                'supportsRingSets': { required: true, nullable: false },
                'supportsTimeZones': { required: true, nullable: false },
                'supportsSharedAppearances': { required: true, nullable: false },
                'supportsSRTP': { required: true, nullable: false },
                'supportsSipBridge': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:supportedPhonesAttributesResult'] = SupportedPhonesAttributesResult;

    return SupportedPhonesAttributesResult;
}());

var DynamicAttributeInformation = (function(){
    var hasProps = false;

    function DynamicAttributeInformation() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:dynamicAttributeInformation' });
        }

        DynamicAttributeInformation._super.constructor.apply(this, arguments);
    }
    _util.inherits(DynamicAttributeInformation, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DynamicAttributeInformation.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DynamicAttributeInformation.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(DynamicAttributeInformation.prototype, 'displayName', {
            get: function() { return this.__prop_displayName; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DynamicAttributeInformation.displayName, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_displayName = value;
            },
            enumerable: true
        });

        Object.defineProperty(DynamicAttributeInformation.prototype, 'order', {
            get: function() { return this.__prop_order; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for DynamicAttributeInformation.order, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_order = value;
            },
            enumerable: true
        });

        Object.defineProperty(DynamicAttributeInformation.prototype, 'groupId', {
            get: function() { return this.__prop_groupId; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for DynamicAttributeInformation.groupId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_groupId = value;
            },
            enumerable: true
        });

        Object.defineProperty(DynamicAttributeInformation.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(value instanceof DynamicAttributeDataType)) {
                    try {
                        value = new DynamicAttributeDataType(value);
                    } catch (e) {
                        throw new TypeError('Error setting DynamicAttributeInformation.type: ' + e.message);
                    }
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        Object.defineProperty(DynamicAttributeInformation.prototype, 'defaultValue', {
            get: function() { return this.__prop_defaultValue; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DynamicAttributeInformation.defaultValue, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_defaultValue = value;
            },
            enumerable: true
        });

        Object.defineProperty(DynamicAttributeInformation.prototype, 'isSortable', {
            get: function() { return this.__prop_isSortable; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for DynamicAttributeInformation.isSortable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSortable = value;
            },
            enumerable: true
        });

        Object.defineProperty(DynamicAttributeInformation.prototype, 'allowNull', {
            get: function() { return this.__prop_allowNull; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for DynamicAttributeInformation.allowNull, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowNull = value;
            },
            enumerable: true
        });

        Object.defineProperty(DynamicAttributeInformation.prototype, 'enumId', {
            get: function() { return this.__prop_enumId; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for DynamicAttributeInformation.enumId, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_enumId = value;
            },
            enumerable: true
        });

        Object.defineProperty(DynamicAttributeInformation.prototype, 'metadataType', {
            get: function() { return this.__prop_metadataType; },
            set: function(value) {
                if (!(value instanceof DynamicAttributeMetadataType)) {
                    try {
                        value = new DynamicAttributeMetadataType(value);
                    } catch (e) {
                        throw new TypeError('Error setting DynamicAttributeInformation.metadataType: ' + e.message);
                    }
                }

                this.__prop_metadataType = value;
            },
            enumerable: true
        });

        Object.defineProperty(DynamicAttributeInformation.prototype, 'optionGroupType', {
            get: function() { return this.__prop_optionGroupType; },
            set: function(value) {
                if (!(value instanceof OptionGroupType)) {
                    try {
                        value = new OptionGroupType(value);
                    } catch (e) {
                        throw new TypeError('Error setting DynamicAttributeInformation.optionGroupType: ' + e.message);
                    }
                }

                this.__prop_optionGroupType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DynamicAttributeInformation, '__type', { value: 'urn:inin.com:configuration.hardware:dynamicAttributeInformation' });

    Object.defineProperty(DynamicAttributeInformation, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'displayName': { required: true, nullable: false },
                'order': { required: true, nullable: false },
                'groupId': { required: true, nullable: false },
                'type': { required: true, nullable: false },
                'defaultValue': { required: false, nullable: true },
                'isSortable': { required: false, nullable: true },
                'allowNull': { required: false, nullable: true },
                'enumId': { required: false, nullable: true },
                'metadataType': { required: true, nullable: false },
                'optionGroupType': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:dynamicAttributeInformation'] = DynamicAttributeInformation;

    return DynamicAttributeInformation;
}());

var SupportedPhonesResult = (function(){
    var hasProps = false;

    function SupportedPhonesResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:supportedPhonesResult' });
        }

        SupportedPhonesResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(SupportedPhonesResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SupportedPhonesResult.prototype, 'supportedPhones', {
            get: function() { return this.__prop_supportedPhones; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SupportedPhonesEntry); }))) {
                    try {
                        value = value.map(function(item){ return new SupportedPhonesEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SupportedPhonesResult.supportedPhones: ' + e.message);
                    }
                }

                this.__prop_supportedPhones = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SupportedPhonesResult, '__type', { value: 'urn:inin.com:configuration.hardware:supportedPhonesResult' });

    Object.defineProperty(SupportedPhonesResult, '__propInfo', {
        get: function() {
            var pi = {
                'supportedPhones': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:supportedPhonesResult'] = SupportedPhonesResult;

    return SupportedPhonesResult;
}());

var SupportedPhonesEntry = (function(){
    var hasProps = false;

    function SupportedPhonesEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:supportedPhonesEntry' });
        }

        SupportedPhonesEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(SupportedPhonesEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SupportedPhonesEntry.prototype, 'phoneManufacturer', {
            get: function() { return this.__prop_phoneManufacturer; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for SupportedPhonesEntry.phoneManufacturer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phoneManufacturer = value;
            },
            enumerable: true
        });

        Object.defineProperty(SupportedPhonesEntry.prototype, 'phoneModels', {
            get: function() { return this.__prop_phoneModels; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for SupportedPhonesEntry.phoneModels, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phoneModels = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SupportedPhonesEntry, '__type', { value: 'urn:inin.com:configuration.hardware:supportedPhonesEntry' });

    Object.defineProperty(SupportedPhonesEntry, '__propInfo', {
        get: function() {
            var pi = {
                'phoneManufacturer': { required: true, nullable: false },
                'phoneModels': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:supportedPhonesEntry'] = SupportedPhonesEntry;

    return SupportedPhonesEntry;
}());

var ScheduledForReloadResult = (function(){
    var hasProps = false;

    function ScheduledForReloadResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:scheduledForReloadResult' });
        }

        ScheduledForReloadResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(ScheduledForReloadResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ScheduledForReloadResult.prototype, 'scheduledForReload', {
            get: function() { return this.__prop_scheduledForReload; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ScheduledForReloadEntry); }))) {
                    try {
                        value = value.map(function(item){ return new ScheduledForReloadEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ScheduledForReloadResult.scheduledForReload: ' + e.message);
                    }
                }

                this.__prop_scheduledForReload = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ScheduledForReloadResult, '__type', { value: 'urn:inin.com:configuration.hardware:scheduledForReloadResult' });

    Object.defineProperty(ScheduledForReloadResult, '__propInfo', {
        get: function() {
            var pi = {
                'scheduledForReload': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:scheduledForReloadResult'] = ScheduledForReloadResult;

    return ScheduledForReloadResult;
}());

var ScheduledForReloadEntry = (function(){
    var hasProps = false;

    function ScheduledForReloadEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:scheduledForReloadEntry' });
        }

        ScheduledForReloadEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(ScheduledForReloadEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ScheduledForReloadEntry.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ScheduledForReloadEntry.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduledForReloadEntry.prototype, 'time', {
            get: function() { return this.__prop_time; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for ScheduledForReloadEntry.time, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_time = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ScheduledForReloadEntry, '__type', { value: 'urn:inin.com:configuration.hardware:scheduledForReloadEntry' });

    Object.defineProperty(ScheduledForReloadEntry, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'time': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:scheduledForReloadEntry'] = ScheduledForReloadEntry;

    return ScheduledForReloadEntry;
}());

var ReloadAllWithPendingChangesResult = (function(){
    var hasProps = false;

    function ReloadAllWithPendingChangesResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:reloadAllWithPendingChangesResult' });
        }

        ReloadAllWithPendingChangesResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(ReloadAllWithPendingChangesResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ReloadAllWithPendingChangesResult.prototype, 'phones', {
            get: function() { return this.__prop_phones; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for ReloadAllWithPendingChangesResult.phones, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phones = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ReloadAllWithPendingChangesResult, '__type', { value: 'urn:inin.com:configuration.hardware:reloadAllWithPendingChangesResult' });

    Object.defineProperty(ReloadAllWithPendingChangesResult, '__propInfo', {
        get: function() {
            var pi = {
                'phones': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:reloadAllWithPendingChangesResult'] = ReloadAllWithPendingChangesResult;

    return ReloadAllWithPendingChangesResult;
}());

var ReloadArgument = (function(){
    var hasProps = false;

    function ReloadArgument() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:reloadArgument' });
        }

        ReloadArgument._super.constructor.apply(this, arguments);
    }
    _util.inherits(ReloadArgument, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ReloadArgument.prototype, 'phones', {
            get: function() { return this.__prop_phones; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for ReloadArgument.phones, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phones = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ReloadArgument, '__type', { value: 'urn:inin.com:configuration.hardware:reloadArgument' });

    Object.defineProperty(ReloadArgument, '__propInfo', {
        get: function() {
            var pi = {
                'phones': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:reloadArgument'] = ReloadArgument;

    return ReloadArgument;
}());

var ReloadResult = (function(){
    var hasProps = false;

    function ReloadResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:reloadResult' });
        }

        ReloadResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(ReloadResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ReloadResult.prototype, 'reload', {
            get: function() { return this.__prop_reload; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ReloadEntry); }))) {
                    try {
                        value = value.map(function(item){ return new ReloadEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ReloadResult.reload: ' + e.message);
                    }
                }

                this.__prop_reload = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ReloadResult, '__type', { value: 'urn:inin.com:configuration.hardware:reloadResult' });

    Object.defineProperty(ReloadResult, '__propInfo', {
        get: function() {
            var pi = {
                'reload': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:reloadResult'] = ReloadResult;

    return ReloadResult;
}());

var ReloadEntry = (function(){
    var hasProps = false;

    function ReloadEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:reloadEntry' });
        }

        ReloadEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(ReloadEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ReloadEntry.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ReloadEntry.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(ReloadEntry.prototype, 'result', {
            get: function() { return this.__prop_result; },
            set: function(value) {
                if (!(value instanceof PhoneResultCode)) {
                    try {
                        value = new PhoneResultCode(value);
                    } catch (e) {
                        throw new TypeError('Error setting ReloadEntry.result: ' + e.message);
                    }
                }

                this.__prop_result = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ReloadEntry, '__type', { value: 'urn:inin.com:configuration.hardware:reloadEntry' });

    Object.defineProperty(ReloadEntry, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'result': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:reloadEntry'] = ReloadEntry;

    return ReloadEntry;
}());

var ScheduleReloadArgument = (function(){
    var hasProps = false;

    function ScheduleReloadArgument() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:scheduleReloadArgument' });
        }

        ScheduleReloadArgument._super.constructor.apply(this, arguments);
    }
    _util.inherits(ScheduleReloadArgument, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ScheduleReloadArgument.prototype, 'phones', {
            get: function() { return this.__prop_phones; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for ScheduleReloadArgument.phones, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phones = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleReloadArgument.prototype, 'reloadTime', {
            get: function() { return this.__prop_reloadTime; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value))) {
                    throw new TypeError('Expected type Date for ScheduleReloadArgument.reloadTime, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_reloadTime = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ScheduleReloadArgument, '__type', { value: 'urn:inin.com:configuration.hardware:scheduleReloadArgument' });

    Object.defineProperty(ScheduleReloadArgument, '__propInfo', {
        get: function() {
            var pi = {
                'phones': { required: true, nullable: false },
                'reloadTime': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:scheduleReloadArgument'] = ScheduleReloadArgument;

    return ScheduleReloadArgument;
}());

var ScheduleReloadResult = (function(){
    var hasProps = false;

    function ScheduleReloadResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:scheduleReloadResult' });
        }

        ScheduleReloadResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(ScheduleReloadResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ScheduleReloadResult.prototype, 'scheduleReload', {
            get: function() { return this.__prop_scheduleReload; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ScheduleReloadEntry); }))) {
                    try {
                        value = value.map(function(item){ return new ScheduleReloadEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ScheduleReloadResult.scheduleReload: ' + e.message);
                    }
                }

                this.__prop_scheduleReload = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ScheduleReloadResult, '__type', { value: 'urn:inin.com:configuration.hardware:scheduleReloadResult' });

    Object.defineProperty(ScheduleReloadResult, '__propInfo', {
        get: function() {
            var pi = {
                'scheduleReload': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:scheduleReloadResult'] = ScheduleReloadResult;

    return ScheduleReloadResult;
}());

var ScheduleReloadEntry = (function(){
    var hasProps = false;

    function ScheduleReloadEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:scheduleReloadEntry' });
        }

        ScheduleReloadEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(ScheduleReloadEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ScheduleReloadEntry.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ScheduleReloadEntry.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(ScheduleReloadEntry.prototype, 'result', {
            get: function() { return this.__prop_result; },
            set: function(value) {
                if (!(value instanceof PhoneResultCode)) {
                    try {
                        value = new PhoneResultCode(value);
                    } catch (e) {
                        throw new TypeError('Error setting ScheduleReloadEntry.result: ' + e.message);
                    }
                }

                this.__prop_result = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ScheduleReloadEntry, '__type', { value: 'urn:inin.com:configuration.hardware:scheduleReloadEntry' });

    Object.defineProperty(ScheduleReloadEntry, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'result': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:scheduleReloadEntry'] = ScheduleReloadEntry;

    return ScheduleReloadEntry;
}());

var UnprovisionArgument = (function(){
    var hasProps = false;

    function UnprovisionArgument() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:unprovisionArgument' });
        }

        UnprovisionArgument._super.constructor.apply(this, arguments);
    }
    _util.inherits(UnprovisionArgument, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UnprovisionArgument.prototype, 'phones', {
            get: function() { return this.__prop_phones; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                    throw new TypeError('Expected type String[] for UnprovisionArgument.phones, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_phones = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UnprovisionArgument, '__type', { value: 'urn:inin.com:configuration.hardware:unprovisionArgument' });

    Object.defineProperty(UnprovisionArgument, '__propInfo', {
        get: function() {
            var pi = {
                'phones': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:unprovisionArgument'] = UnprovisionArgument;

    return UnprovisionArgument;
}());

var UnprovisionResult = (function(){
    var hasProps = false;

    function UnprovisionResult() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:unprovisionResult' });
        }

        UnprovisionResult._super.constructor.apply(this, arguments);
    }
    _util.inherits(UnprovisionResult, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UnprovisionResult.prototype, 'unprovision', {
            get: function() { return this.__prop_unprovision; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof UnprovisionEntry); }))) {
                    try {
                        value = value.map(function(item){ return new UnprovisionEntry(item); });
                    } catch (e) {
                        throw new TypeError('Error setting UnprovisionResult.unprovision: ' + e.message);
                    }
                }

                this.__prop_unprovision = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UnprovisionResult, '__type', { value: 'urn:inin.com:configuration.hardware:unprovisionResult' });

    Object.defineProperty(UnprovisionResult, '__propInfo', {
        get: function() {
            var pi = {
                'unprovision': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:unprovisionResult'] = UnprovisionResult;

    return UnprovisionResult;
}());

var UnprovisionEntry = (function(){
    var hasProps = false;

    function UnprovisionEntry() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:unprovisionEntry' });
        }

        UnprovisionEntry._super.constructor.apply(this, arguments);
    }
    _util.inherits(UnprovisionEntry, _util.DataContract);

    function defineProps() {
        Object.defineProperty(UnprovisionEntry.prototype, 'id', {
            get: function() { return this.__prop_id; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for UnprovisionEntry.id, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_id = value;
            },
            enumerable: true
        });

        Object.defineProperty(UnprovisionEntry.prototype, 'result', {
            get: function() { return this.__prop_result; },
            set: function(value) {
                if (!(value instanceof PhoneResultCode)) {
                    try {
                        value = new PhoneResultCode(value);
                    } catch (e) {
                        throw new TypeError('Error setting UnprovisionEntry.result: ' + e.message);
                    }
                }

                this.__prop_result = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(UnprovisionEntry, '__type', { value: 'urn:inin.com:configuration.hardware:unprovisionEntry' });

    Object.defineProperty(UnprovisionEntry, '__propInfo', {
        get: function() {
            var pi = {
                'id': { required: true, nullable: false },
                'result': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:unprovisionEntry'] = UnprovisionEntry;

    return UnprovisionEntry;
}());

var ManagedPhoneTemplatesDeprecated = (function(){
    var hasProps = false;

    function ManagedPhoneTemplatesDeprecated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneTemplatesDeprecated' });
        }

        ManagedPhoneTemplatesDeprecated._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedPhoneTemplatesDeprecated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedPhoneTemplatesDeprecated.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ManagedPhoneTemplateDeprecated); }))) {
                    try {
                        value = value.map(function(item){ return new ManagedPhoneTemplateDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplatesDeprecated.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedPhoneTemplatesDeprecated, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneTemplatesDeprecated' });

    Object.defineProperty(ManagedPhoneTemplatesDeprecated, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedPhoneTemplatesDeprecated'] = ManagedPhoneTemplatesDeprecated;

    return ManagedPhoneTemplatesDeprecated;
}());

var ManagedPhoneTemplateDeprecated = (function(){
    var hasProps = false;

    function ManagedPhoneTemplateDeprecated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneTemplateDeprecated' });
        }

        ManagedPhoneTemplateDeprecated._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedPhoneTemplateDeprecated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'addressFamily', {
            get: function() { return this.__prop_addressFamily; },
            set: function(value) {
                if (!(value instanceof AddressFamily || value === void 0 || value === null)) {
                    try {
                        value = new AddressFamily(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.addressFamily: ' + e.message);
                    }
                }

                this.__prop_addressFamily = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'audioProtocol', {
            get: function() { return this.__prop_audioProtocol; },
            set: function(value) {
                if (!(value instanceof Configuration.AudioProtocol || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.AudioProtocol(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.audioProtocol: ' + e.message);
                    }
                }

                this.__prop_audioProtocol = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'expansionModules', {
            get: function() { return this.__prop_expansionModules; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneTemplateDeprecated.expansionModules, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_expansionModules = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'isActive', {
            get: function() { return this.__prop_isActive; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneTemplateDeprecated.isActive, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isActive = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'isSupportedMacAddress', {
            get: function() { return this.__prop_isSupportedMacAddress; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneTemplateDeprecated.isSupportedMacAddress, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSupportedMacAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'isSupportedRingSets', {
            get: function() { return this.__prop_isSupportedRingSets; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneTemplateDeprecated.isSupportedRingSets, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSupportedRingSets = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'isSupportedSharedAppearances', {
            get: function() { return this.__prop_isSupportedSharedAppearances; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneTemplateDeprecated.isSupportedSharedAppearances, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSupportedSharedAppearances = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'isSupportedSipBridge', {
            get: function() { return this.__prop_isSupportedSipBridge; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneTemplateDeprecated.isSupportedSipBridge, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSupportedSipBridge = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'isSupportedSrtp', {
            get: function() { return this.__prop_isSupportedSrtp; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneTemplateDeprecated.isSupportedSrtp, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSupportedSrtp = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'isSupportedTimeZone', {
            get: function() { return this.__prop_isSupportedTimeZone; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedPhoneTemplateDeprecated.isSupportedTimeZone, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isSupportedTimeZone = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'location', {
            get: function() { return this.__prop_location; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.location: ' + e.message);
                    }
                }

                this.__prop_location = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'manufacturer', {
            get: function() { return this.__prop_manufacturer; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedPhoneTemplateDeprecated.manufacturer, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_manufacturer = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'maxCallsPerLineKey', {
            get: function() { return this.__prop_maxCallsPerLineKey; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneTemplateDeprecated.maxCallsPerLineKey, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxCallsPerLineKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'maxExpansionModules', {
            get: function() { return this.__prop_maxExpansionModules; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneTemplateDeprecated.maxExpansionModules, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxExpansionModules = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'maxLineKeys', {
            get: function() { return this.__prop_maxLineKeys; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneTemplateDeprecated.maxLineKeys, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxLineKeys = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'maxLineKeysPerExpansionModule', {
            get: function() { return this.__prop_maxLineKeysPerExpansionModule; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneTemplateDeprecated.maxLineKeysPerExpansionModule, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxLineKeysPerExpansionModule = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'maxRegistrations', {
            get: function() { return this.__prop_maxRegistrations; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneTemplateDeprecated.maxRegistrations, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxRegistrations = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'maxRegistrationsPerExpansionModule', {
            get: function() { return this.__prop_maxRegistrationsPerExpansionModule; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedPhoneTemplateDeprecated.maxRegistrationsPerExpansionModule, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxRegistrationsPerExpansionModule = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'model', {
            get: function() { return this.__prop_model; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedPhoneTemplateDeprecated.model, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_model = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'phoneAttributes', {
            get: function() { return this.__prop_phoneAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.phoneAttributes: ' + e.message);
                    }
                }

                this.__prop_phoneAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'preferredLanguage', {
            get: function() { return this.__prop_preferredLanguage; },
            set: function(value) {
                if (!(value instanceof Configuration.IdDisplayName || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.IdDisplayName(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.preferredLanguage: ' + e.message);
                    }
                }

                this.__prop_preferredLanguage = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'registrationGroup', {
            get: function() { return this.__prop_registrationGroup; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.registrationGroup: ' + e.message);
                    }
                }

                this.__prop_registrationGroup = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'sipBridge', {
            get: function() { return this.__prop_sipBridge; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.sipBridge: ' + e.message);
                    }
                }

                this.__prop_sipBridge = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'status', {
            get: function() { return this.__prop_status; },
            set: function(value) {
                if (!(value instanceof PhoneStatus || value === void 0 || value === null)) {
                    try {
                        value = new PhoneStatus(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.status: ' + e.message);
                    }
                }

                this.__prop_status = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'timeZone', {
            get: function() { return this.__prop_timeZone; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.timeZone: ' + e.message);
                    }
                }

                this.__prop_timeZone = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'type', {
            get: function() { return this.__prop_type; },
            set: function(value) {
                if (!(value instanceof StationType || value === void 0)) {
                    try {
                        value = new StationType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.type: ' + e.message);
                    }
                }

                this.__prop_type = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedPhoneTemplateDeprecated.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedPhoneTemplateDeprecated.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedPhoneTemplateDeprecated.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'managedSipProperties', {
            get: function() { return this.__prop_managedSipProperties; },
            set: function(value) {
                if (!(value instanceof Configuration.ManagedSipProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ManagedSipProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.managedSipProperties: ' + e.message);
                    }
                }

                this.__prop_managedSipProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'managedStationTemplates', {
            get: function() { return this.__prop_managedStationTemplates; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ManagedStationTemplateDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ManagedStationTemplateDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.managedStationTemplates: ' + e.message);
                    }
                }

                this.__prop_managedStationTemplates = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedPhoneTemplateDeprecated.prototype, 'sharedStationTemplates', {
            get: function() { return this.__prop_sharedStationTemplates; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SharedStationTemplateDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SharedStationTemplateDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedPhoneTemplateDeprecated.sharedStationTemplates: ' + e.message);
                    }
                }

                this.__prop_sharedStationTemplates = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedPhoneTemplateDeprecated, '__type', { value: 'urn:inin.com:configuration.hardware:managedPhoneTemplateDeprecated' });

    Object.defineProperty(ManagedPhoneTemplateDeprecated, '__propInfo', {
        get: function() {
            var pi = {
                'addressFamily': { required: false, nullable: true },
                'audioProtocol': { required: false, nullable: true },
                'expansionModules': { required: false, nullable: true },
                'isActive': { required: false, nullable: true },
                'isSupportedMacAddress': { required: false, nullable: true },
                'isSupportedRingSets': { required: false, nullable: true },
                'isSupportedSharedAppearances': { required: false, nullable: true },
                'isSupportedSipBridge': { required: false, nullable: true },
                'isSupportedSrtp': { required: false, nullable: true },
                'isSupportedTimeZone': { required: false, nullable: true },
                'location': { required: false, nullable: true },
                'manufacturer': { required: false, nullable: true },
                'maxCallsPerLineKey': { required: false, nullable: true },
                'maxExpansionModules': { required: false, nullable: true },
                'maxLineKeys': { required: false, nullable: true },
                'maxLineKeysPerExpansionModule': { required: false, nullable: true },
                'maxRegistrations': { required: false, nullable: true },
                'maxRegistrationsPerExpansionModule': { required: false, nullable: true },
                'model': { required: false, nullable: true },
                'phoneAttributes': { required: false, nullable: true },
                'preferredLanguage': { required: false, nullable: true },
                'registrationGroup': { required: false, nullable: true },
                'sipBridge': { required: false, nullable: true },
                'status': { required: false, nullable: true },
                'timeZone': { required: false, nullable: false },
                'type': { required: false, nullable: false },
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'managedSipProperties': { required: false, nullable: true },
                'managedStationTemplates': { required: false, nullable: true },
                'sharedStationTemplates': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedPhoneTemplateDeprecated'] = ManagedPhoneTemplateDeprecated;

    return ManagedPhoneTemplateDeprecated;
}());

var ManagedStationTemplateDeprecated = (function(){
    var hasProps = false;

    function ManagedStationTemplateDeprecated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedStationTemplateDeprecated' });
        }

        ManagedStationTemplateDeprecated._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedStationTemplateDeprecated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationTemplateDeprecated.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedStationTemplateDeprecated.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationTemplateDeprecated.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for ManagedStationTemplateDeprecated.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for ManagedStationTemplateDeprecated.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'shouldAlwaysRing', {
            get: function() { return this.__prop_shouldAlwaysRing; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedStationTemplateDeprecated.shouldAlwaysRing, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shouldAlwaysRing = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'callsPerLineKey', {
            get: function() { return this.__prop_callsPerLineKey; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedStationTemplateDeprecated.callsPerLineKey, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callsPerLineKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'connectionAddress', {
            get: function() { return this.__prop_connectionAddress; },
            set: function(value) {
                if (!(value instanceof SipAddress || value === void 0 || value === null)) {
                    try {
                        value = new SipAddress(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationTemplateDeprecated.connectionAddress: ' + e.message);
                    }
                }

                this.__prop_connectionAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'contactLine', {
            get: function() { return this.__prop_contactLine; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationTemplateDeprecated.contactLine: ' + e.message);
                    }
                }

                this.__prop_contactLine = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'isShareable', {
            get: function() { return this.__prop_isShareable; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedStationTemplateDeprecated.isShareable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isShareable = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'lineKeys', {
            get: function() { return this.__prop_lineKeys; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedStationTemplateDeprecated.lineKeys, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lineKeys = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'offeringCallTimeout', {
            get: function() { return this.__prop_offeringCallTimeout; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedStationTemplateDeprecated.offeringCallTimeout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_offeringCallTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'order', {
            get: function() { return this.__prop_order; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for ManagedStationTemplateDeprecated.order, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_order = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'phoneNumberClassifications', {
            get: function() { return this.__prop_phoneNumberClassifications; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationTemplateDeprecated.phoneNumberClassifications: ' + e.message);
                    }
                }

                this.__prop_phoneNumberClassifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'requireForcedAuthorizationCode', {
            get: function() { return this.__prop_requireForcedAuthorizationCode; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for ManagedStationTemplateDeprecated.requireForcedAuthorizationCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_requireForcedAuthorizationCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'ringSet', {
            get: function() { return this.__prop_ringSet; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationTemplateDeprecated.ringSet: ' + e.message);
                    }
                }

                this.__prop_ringSet = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'security', {
            get: function() { return this.__prop_security; },
            set: function(value) {
                if (!(value instanceof Configuration.SecurityLevel || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.SecurityLevel(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationTemplateDeprecated.security: ' + e.message);
                    }
                }

                this.__prop_security = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationTemplateDeprecated.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'stationTemplateLicenseProperties', {
            get: function() { return this.__prop_stationTemplateLicenseProperties; },
            set: function(value) {
                if (!(value instanceof Configuration.StationTemplateLicenseProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.StationTemplateLicenseProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationTemplateDeprecated.stationTemplateLicenseProperties: ' + e.message);
                    }
                }

                this.__prop_stationTemplateLicenseProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplateDeprecated.prototype, 'stationType', {
            get: function() { return this.__prop_stationType; },
            set: function(value) {
                if (!(value instanceof StationType || value === void 0 || value === null)) {
                    try {
                        value = new StationType(value);
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationTemplateDeprecated.stationType: ' + e.message);
                    }
                }

                this.__prop_stationType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedStationTemplateDeprecated, '__type', { value: 'urn:inin.com:configuration.hardware:managedStationTemplateDeprecated' });

    Object.defineProperty(ManagedStationTemplateDeprecated, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'shouldAlwaysRing': { required: false, nullable: true },
                'callsPerLineKey': { required: false, nullable: true },
                'connectionAddress': { required: false, nullable: true },
                'contactLine': { required: false, nullable: true },
                'isShareable': { required: false, nullable: true },
                'lineKeys': { required: false, nullable: true },
                'offeringCallTimeout': { required: false, nullable: true },
                'order': { required: false, nullable: true },
                'phoneNumberClassifications': { required: false, nullable: true },
                'requireForcedAuthorizationCode': { required: false, nullable: true },
                'ringSet': { required: false, nullable: true },
                'security': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'stationTemplateLicenseProperties': { required: false, nullable: true },
                'stationType': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedStationTemplateDeprecated'] = ManagedStationTemplateDeprecated;

    return ManagedStationTemplateDeprecated;
}());

var SharedStationTemplateDeprecated = (function(){
    var hasProps = false;

    function SharedStationTemplateDeprecated() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:sharedStationTemplateDeprecated' });
        }

        SharedStationTemplateDeprecated._super.constructor.apply(this, arguments);
    }
    _util.inherits(SharedStationTemplateDeprecated, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SharedStationTemplateDeprecated.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SharedStationTemplateDeprecated.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationTemplateDeprecated.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SharedStationTemplateDeprecated.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationTemplateDeprecated.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SharedStationTemplateDeprecated.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationTemplateDeprecated.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SharedStationTemplateDeprecated.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationTemplateDeprecated.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SharedStationTemplateDeprecated.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationTemplateDeprecated.prototype, 'callsPerLineKey', {
            get: function() { return this.__prop_callsPerLineKey; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for SharedStationTemplateDeprecated.callsPerLineKey, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callsPerLineKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationTemplateDeprecated.prototype, 'lineKeys', {
            get: function() { return this.__prop_lineKeys; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for SharedStationTemplateDeprecated.lineKeys, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lineKeys = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationTemplateDeprecated.prototype, 'order', {
            get: function() { return this.__prop_order; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for SharedStationTemplateDeprecated.order, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_order = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationTemplateDeprecated.prototype, 'sharedStationId', {
            get: function() { return this.__prop_sharedStationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SharedStationTemplateDeprecated.sharedStationId: ' + e.message);
                    }
                }

                this.__prop_sharedStationId = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SharedStationTemplateDeprecated, '__type', { value: 'urn:inin.com:configuration.hardware:sharedStationTemplateDeprecated' });

    Object.defineProperty(SharedStationTemplateDeprecated, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'callsPerLineKey': { required: false, nullable: true },
                'lineKeys': { required: false, nullable: true },
                'order': { required: false, nullable: true },
                'sharedStationId': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:sharedStationTemplateDeprecated'] = SharedStationTemplateDeprecated;

    return SharedStationTemplateDeprecated;
}());

var ManagedStationsDeprecatedBulkUpdate = (function(){
    var hasProps = false;

    function ManagedStationsDeprecatedBulkUpdate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedStationsDeprecatedBulkUpdate' });
        }

        ManagedStationsDeprecatedBulkUpdate._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedStationsDeprecatedBulkUpdate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedStationsDeprecatedBulkUpdate.prototype, 'add', {
            get: function() { return this.__prop_add; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ManagedStationDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ManagedStationDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationsDeprecatedBulkUpdate.add: ' + e.message);
                    }
                }

                this.__prop_add = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationsDeprecatedBulkUpdate.prototype, 'modify', {
            get: function() { return this.__prop_modify; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ManagedStationDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ManagedStationDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationsDeprecatedBulkUpdate.modify: ' + e.message);
                    }
                }

                this.__prop_modify = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationsDeprecatedBulkUpdate.prototype, 'remove', {
            get: function() { return this.__prop_remove; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for ManagedStationsDeprecatedBulkUpdate.remove, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remove = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedStationsDeprecatedBulkUpdate, '__type', { value: 'urn:inin.com:configuration.hardware:managedStationsDeprecatedBulkUpdate' });

    Object.defineProperty(ManagedStationsDeprecatedBulkUpdate, '__propInfo', {
        get: function() {
            var pi = {
                'add': { required: false, nullable: true },
                'modify': { required: false, nullable: true },
                'remove': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedStationsDeprecatedBulkUpdate'] = ManagedStationsDeprecatedBulkUpdate;

    return ManagedStationsDeprecatedBulkUpdate;
}());

var ManagedStationTemplatesDeprecatedBulkUpdate = (function(){
    var hasProps = false;

    function ManagedStationTemplatesDeprecatedBulkUpdate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:managedStationTemplatesDeprecatedBulkUpdate' });
        }

        ManagedStationTemplatesDeprecatedBulkUpdate._super.constructor.apply(this, arguments);
    }
    _util.inherits(ManagedStationTemplatesDeprecatedBulkUpdate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ManagedStationTemplatesDeprecatedBulkUpdate.prototype, 'add', {
            get: function() { return this.__prop_add; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ManagedStationTemplateDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ManagedStationTemplateDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationTemplatesDeprecatedBulkUpdate.add: ' + e.message);
                    }
                }

                this.__prop_add = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplatesDeprecatedBulkUpdate.prototype, 'modify', {
            get: function() { return this.__prop_modify; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof ManagedStationTemplateDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new ManagedStationTemplateDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting ManagedStationTemplatesDeprecatedBulkUpdate.modify: ' + e.message);
                    }
                }

                this.__prop_modify = value;
            },
            enumerable: true
        });

        Object.defineProperty(ManagedStationTemplatesDeprecatedBulkUpdate.prototype, 'remove', {
            get: function() { return this.__prop_remove; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for ManagedStationTemplatesDeprecatedBulkUpdate.remove, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remove = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ManagedStationTemplatesDeprecatedBulkUpdate, '__type', { value: 'urn:inin.com:configuration.hardware:managedStationTemplatesDeprecatedBulkUpdate' });

    Object.defineProperty(ManagedStationTemplatesDeprecatedBulkUpdate, '__propInfo', {
        get: function() {
            var pi = {
                'add': { required: false, nullable: true },
                'modify': { required: false, nullable: true },
                'remove': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:managedStationTemplatesDeprecatedBulkUpdate'] = ManagedStationTemplatesDeprecatedBulkUpdate;

    return ManagedStationTemplatesDeprecatedBulkUpdate;
}());

var MediaServers = (function(){
    var hasProps = false;

    function MediaServers() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:mediaServers' });
        }

        MediaServers._super.constructor.apply(this, arguments);
    }
    _util.inherits(MediaServers, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MediaServers.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MediaServer); }))) {
                    try {
                        value = value.map(function(item){ return new MediaServer(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MediaServers.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MediaServers, '__type', { value: 'urn:inin.com:configuration.hardware:mediaServers' });

    Object.defineProperty(MediaServers, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:mediaServers'] = MediaServers;

    return MediaServers;
}());

var MediaServer = (function(){
    var hasProps = false;

    function MediaServer() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:mediaServer' });
        }

        MediaServer._super.constructor.apply(this, arguments);
    }
    _util.inherits(MediaServer, _util.DataContract);

    function defineProps() {
        Object.defineProperty(MediaServer.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting MediaServer.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaServer.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for MediaServer.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaServer.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting MediaServer.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaServer.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for MediaServer.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaServer.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for MediaServer.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaServer.prototype, 'licenseType', {
            get: function() { return this.__prop_licenseType; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for MediaServer.licenseType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_licenseType = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaServer.prototype, 'location', {
            get: function() { return this.__prop_location; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for MediaServer.location, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_location = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaServer.prototype, 'version', {
            get: function() { return this.__prop_version; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for MediaServer.version, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_version = value;
            },
            enumerable: true
        });

        Object.defineProperty(MediaServer.prototype, 'webConfigUri', {
            get: function() { return this.__prop_webConfigUri; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for MediaServer.webConfigUri, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_webConfigUri = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(MediaServer, '__type', { value: 'urn:inin.com:configuration.hardware:mediaServer' });

    Object.defineProperty(MediaServer, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'licenseType': { required: false, nullable: true },
                'location': { required: false, nullable: true },
                'version': { required: false, nullable: true },
                'webConfigUri': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:mediaServer'] = MediaServer;

    return MediaServer;
}());

var RecordingBeepTones = (function(){
    var hasProps = false;

    function RecordingBeepTones() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:recordingBeepTones' });
        }

        RecordingBeepTones._super.constructor.apply(this, arguments);
    }
    _util.inherits(RecordingBeepTones, _util.DataContract);

    function defineProps() {
        Object.defineProperty(RecordingBeepTones.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RecordingBeepTone); }))) {
                    try {
                        value = value.map(function(item){ return new RecordingBeepTone(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RecordingBeepTones.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RecordingBeepTones, '__type', { value: 'urn:inin.com:configuration.hardware:recordingBeepTones' });

    Object.defineProperty(RecordingBeepTones, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:recordingBeepTones'] = RecordingBeepTones;

    return RecordingBeepTones;
}());

var SelectionRules = (function(){
    var hasProps = false;

    function SelectionRules() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:selectionRules' });
        }

        SelectionRules._super.constructor.apply(this, arguments);
    }
    _util.inherits(SelectionRules, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SelectionRules.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SelectionRule); }))) {
                    try {
                        value = value.map(function(item){ return new SelectionRule(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SelectionRules.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SelectionRules, '__type', { value: 'urn:inin.com:configuration.hardware:selectionRules' });

    Object.defineProperty(SelectionRules, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:selectionRules'] = SelectionRules;

    return SelectionRules;
}());

var SelectionRule = (function(){
    var hasProps = false;

    function SelectionRule() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:selectionRule' });
        }

        SelectionRule._super.constructor.apply(this, arguments);
    }
    _util.inherits(SelectionRule, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SelectionRule.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SelectionRule.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SelectionRule.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SelectionRule.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SelectionRule.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SelectionRule.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SelectionRule.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SelectionRule.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SelectionRule.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SelectionRule.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SelectionRule, '__type', { value: 'urn:inin.com:configuration.hardware:selectionRule' });

    Object.defineProperty(SelectionRule, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:selectionRule'] = SelectionRule;

    return SelectionRule;
}());

var SharedStationsDeprecatedBulkUpdate = (function(){
    var hasProps = false;

    function SharedStationsDeprecatedBulkUpdate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:sharedStationsDeprecatedBulkUpdate' });
        }

        SharedStationsDeprecatedBulkUpdate._super.constructor.apply(this, arguments);
    }
    _util.inherits(SharedStationsDeprecatedBulkUpdate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SharedStationsDeprecatedBulkUpdate.prototype, 'add', {
            get: function() { return this.__prop_add; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SharedStationDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SharedStationDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SharedStationsDeprecatedBulkUpdate.add: ' + e.message);
                    }
                }

                this.__prop_add = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationsDeprecatedBulkUpdate.prototype, 'modify', {
            get: function() { return this.__prop_modify; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SharedStationDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SharedStationDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SharedStationsDeprecatedBulkUpdate.modify: ' + e.message);
                    }
                }

                this.__prop_modify = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationsDeprecatedBulkUpdate.prototype, 'remove', {
            get: function() { return this.__prop_remove; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for SharedStationsDeprecatedBulkUpdate.remove, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remove = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SharedStationsDeprecatedBulkUpdate, '__type', { value: 'urn:inin.com:configuration.hardware:sharedStationsDeprecatedBulkUpdate' });

    Object.defineProperty(SharedStationsDeprecatedBulkUpdate, '__propInfo', {
        get: function() {
            var pi = {
                'add': { required: false, nullable: true },
                'modify': { required: false, nullable: true },
                'remove': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:sharedStationsDeprecatedBulkUpdate'] = SharedStationsDeprecatedBulkUpdate;

    return SharedStationsDeprecatedBulkUpdate;
}());

var SharedStationTemplatesDeprecatedBulkUpdate = (function(){
    var hasProps = false;

    function SharedStationTemplatesDeprecatedBulkUpdate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:sharedStationTemplatesDeprecatedBulkUpdate' });
        }

        SharedStationTemplatesDeprecatedBulkUpdate._super.constructor.apply(this, arguments);
    }
    _util.inherits(SharedStationTemplatesDeprecatedBulkUpdate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SharedStationTemplatesDeprecatedBulkUpdate.prototype, 'add', {
            get: function() { return this.__prop_add; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SharedStationTemplateDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SharedStationTemplateDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SharedStationTemplatesDeprecatedBulkUpdate.add: ' + e.message);
                    }
                }

                this.__prop_add = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationTemplatesDeprecatedBulkUpdate.prototype, 'modify', {
            get: function() { return this.__prop_modify; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SharedStationTemplateDeprecated); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new SharedStationTemplateDeprecated(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SharedStationTemplatesDeprecatedBulkUpdate.modify: ' + e.message);
                    }
                }

                this.__prop_modify = value;
            },
            enumerable: true
        });

        Object.defineProperty(SharedStationTemplatesDeprecatedBulkUpdate.prototype, 'remove', {
            get: function() { return this.__prop_remove; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String[] for SharedStationTemplatesDeprecatedBulkUpdate.remove, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_remove = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SharedStationTemplatesDeprecatedBulkUpdate, '__type', { value: 'urn:inin.com:configuration.hardware:sharedStationTemplatesDeprecatedBulkUpdate' });

    Object.defineProperty(SharedStationTemplatesDeprecatedBulkUpdate, '__propInfo', {
        get: function() {
            var pi = {
                'add': { required: false, nullable: true },
                'modify': { required: false, nullable: true },
                'remove': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:sharedStationTemplatesDeprecatedBulkUpdate'] = SharedStationTemplatesDeprecatedBulkUpdate;

    return SharedStationTemplatesDeprecatedBulkUpdate;
}());

var SipBridges = (function(){
    var hasProps = false;

    function SipBridges() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:sipBridges' });
        }

        SipBridges._super.constructor.apply(this, arguments);
    }
    _util.inherits(SipBridges, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SipBridges.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SipBridge); }))) {
                    try {
                        value = value.map(function(item){ return new SipBridge(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SipBridges.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SipBridges, '__type', { value: 'urn:inin.com:configuration.hardware:sipBridges' });

    Object.defineProperty(SipBridges, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:sipBridges'] = SipBridges;

    return SipBridges;
}());

var SipBridge = (function(){
    var hasProps = false;

    function SipBridge() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:sipBridge' });
        }

        SipBridge._super.constructor.apply(this, arguments);
    }
    _util.inherits(SipBridge, _util.DataContract);

    function defineProps() {
        Object.defineProperty(SipBridge.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting SipBridge.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(SipBridge.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SipBridge.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SipBridge.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting SipBridge.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(SipBridge.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for SipBridge.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(SipBridge.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for SipBridge.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(SipBridge, '__type', { value: 'urn:inin.com:configuration.hardware:sipBridge' });

    Object.defineProperty(SipBridge, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:sipBridge'] = SipBridge;

    return SipBridge;
}());

var StationGroups = (function(){
    var hasProps = false;

    function StationGroups() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:stationGroups' });
        }

        StationGroups._super.constructor.apply(this, arguments);
    }
    _util.inherits(StationGroups, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StationGroups.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StationGroup); }))) {
                    try {
                        value = value.map(function(item){ return new StationGroup(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StationGroups.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StationGroups, '__type', { value: 'urn:inin.com:configuration.hardware:stationGroups' });

    Object.defineProperty(StationGroups, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:stationGroups'] = StationGroups;

    return StationGroups;
}());

var StationGroup = (function(){
    var hasProps = false;

    function StationGroup() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:stationGroup' });
        }

        StationGroup._super.constructor.apply(this, arguments);
    }
    _util.inherits(StationGroup, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StationGroup.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationGroup.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationGroup.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for StationGroup.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationGroup.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StationGroup.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationGroup.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for StationGroup.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationGroup.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StationGroup.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StationGroup, '__type', { value: 'urn:inin.com:configuration.hardware:stationGroup' });

    Object.defineProperty(StationGroup, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:stationGroup'] = StationGroup;

    return StationGroup;
}());

var Stations = (function(){
    var hasProps = false;

    function Stations() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:stations' });
        }

        Stations._super.constructor.apply(this, arguments);
    }
    _util.inherits(Stations, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Stations.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Station); }))) {
                    try {
                        value = value.map(function(item){ return new Station(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Stations.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Stations, '__type', { value: 'urn:inin.com:configuration.hardware:stations' });

    Object.defineProperty(Stations, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:stations'] = Stations;

    return Stations;
}());

var StationTemplates = (function(){
    var hasProps = false;

    function StationTemplates() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:stationTemplates' });
        }

        StationTemplates._super.constructor.apply(this, arguments);
    }
    _util.inherits(StationTemplates, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StationTemplates.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StationTemplate); }))) {
                    try {
                        value = value.map(function(item){ return new StationTemplate(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplates.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StationTemplates, '__type', { value: 'urn:inin.com:configuration.hardware:stationTemplates' });

    Object.defineProperty(StationTemplates, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:stationTemplates'] = StationTemplates;

    return StationTemplates;
}());

var StationTemplate = (function(){
    var hasProps = false;

    function StationTemplate() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:stationTemplate' });
        }

        StationTemplate._super.constructor.apply(this, arguments);
    }
    _util.inherits(StationTemplate, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StationTemplate.prototype, 'configurationId', {
            get: function() { return this.__prop_configurationId; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplate.configurationId: ' + e.message);
                    }
                }

                this.__prop_configurationId = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'createdDate', {
            get: function() { return this.__prop_createdDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for StationTemplate.createdDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_createdDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'customAttributes', {
            get: function() { return this.__prop_customAttributes; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplate.customAttributes: ' + e.message);
                    }
                }

                this.__prop_customAttributes = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'lastModifiedDate', {
            get: function() { return this.__prop_lastModifiedDate; },
            set: function(value) {
                if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                if (!(_util.isDate(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Date for StationTemplate.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastModifiedDate = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'notes', {
            get: function() { return this.__prop_notes; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type String for StationTemplate.notes, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_notes = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'shouldAlwaysRing', {
            get: function() { return this.__prop_shouldAlwaysRing; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StationTemplate.shouldAlwaysRing, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shouldAlwaysRing = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'callsPerLineKey', {
            get: function() { return this.__prop_callsPerLineKey; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for StationTemplate.callsPerLineKey, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_callsPerLineKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'connectionAddress', {
            get: function() { return this.__prop_connectionAddress; },
            set: function(value) {
                if (!(value instanceof SipAddress || value === void 0 || value === null)) {
                    try {
                        value = new SipAddress(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplate.connectionAddress: ' + e.message);
                    }
                }

                this.__prop_connectionAddress = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'contactLine', {
            get: function() { return this.__prop_contactLine; },
            set: function(value) {
                if (!(value instanceof Configuration.InheritableConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.InheritableConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplate.contactLine: ' + e.message);
                    }
                }

                this.__prop_contactLine = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'isShareable', {
            get: function() { return this.__prop_isShareable; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StationTemplate.isShareable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_isShareable = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'lineKeys', {
            get: function() { return this.__prop_lineKeys; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for StationTemplate.lineKeys, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lineKeys = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'offeringCallTimeout', {
            get: function() { return this.__prop_offeringCallTimeout; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for StationTemplate.offeringCallTimeout, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_offeringCallTimeout = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'order', {
            get: function() { return this.__prop_order; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Number (integer) for StationTemplate.order, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_order = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'phoneNumberClassifications', {
            get: function() { return this.__prop_phoneNumberClassifications; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                    try {
                        value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplate.phoneNumberClassifications: ' + e.message);
                    }
                }

                this.__prop_phoneNumberClassifications = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'requireForcedAuthorizationCode', {
            get: function() { return this.__prop_requireForcedAuthorizationCode; },
            set: function(value) {
                if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                    throw new TypeError('Expected type Boolean for StationTemplate.requireForcedAuthorizationCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_requireForcedAuthorizationCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'ringSet', {
            get: function() { return this.__prop_ringSet; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplate.ringSet: ' + e.message);
                    }
                }

                this.__prop_ringSet = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'security', {
            get: function() { return this.__prop_security; },
            set: function(value) {
                if (!(value instanceof Configuration.SecurityLevel || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.SecurityLevel(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplate.security: ' + e.message);
                    }
                }

                this.__prop_security = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'accessControlGroupAssignment', {
            get: function() { return this.__prop_accessControlGroupAssignment; },
            set: function(value) {
                if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                    try {
                        value = new Configuration.ConfigurationId(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplate.accessControlGroupAssignment: ' + e.message);
                    }
                }

                this.__prop_accessControlGroupAssignment = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'stationTemplateLicenseProperties', {
            get: function() { return this.__prop_stationTemplateLicenseProperties; },
            set: function(value) {
                if (!(value instanceof Configuration.StationTemplateLicenseProperties || value === void 0 || value === null)) {
                    try {
                        value = new Configuration.StationTemplateLicenseProperties(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplate.stationTemplateLicenseProperties: ' + e.message);
                    }
                }

                this.__prop_stationTemplateLicenseProperties = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationTemplate.prototype, 'stationType', {
            get: function() { return this.__prop_stationType; },
            set: function(value) {
                if (!(value instanceof StationType || value === void 0 || value === null)) {
                    try {
                        value = new StationType(value);
                    } catch (e) {
                        throw new TypeError('Error setting StationTemplate.stationType: ' + e.message);
                    }
                }

                this.__prop_stationType = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StationTemplate, '__type', { value: 'urn:inin.com:configuration.hardware:stationTemplate' });

    Object.defineProperty(StationTemplate, '__propInfo', {
        get: function() {
            var pi = {
                'configurationId': { required: false, nullable: false },
                'createdDate': { required: false, nullable: true },
                'customAttributes': { required: false, nullable: true },
                'lastModifiedDate': { required: false, nullable: true },
                'notes': { required: false, nullable: true },
                'shouldAlwaysRing': { required: false, nullable: true },
                'callsPerLineKey': { required: false, nullable: true },
                'connectionAddress': { required: false, nullable: true },
                'contactLine': { required: false, nullable: true },
                'isShareable': { required: false, nullable: true },
                'lineKeys': { required: false, nullable: true },
                'offeringCallTimeout': { required: false, nullable: true },
                'order': { required: false, nullable: true },
                'phoneNumberClassifications': { required: false, nullable: true },
                'requireForcedAuthorizationCode': { required: false, nullable: true },
                'ringSet': { required: false, nullable: true },
                'security': { required: false, nullable: true },
                'accessControlGroupAssignment': { required: false, nullable: false },
                'stationTemplateLicenseProperties': { required: false, nullable: true },
                'stationType': { required: false, nullable: true }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:stationTemplate'] = StationTemplate;

    return StationTemplate;
}());

var StructuredParameters = (function(){
    var hasProps = false;

    function StructuredParameters() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameters' });
        }

        StructuredParameters._super.constructor.apply(this, arguments);
    }
    _util.inherits(StructuredParameters, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StructuredParameters.prototype, 'items', {
            get: function() { return this.__prop_items; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StructuredParameter); }))) {
                    try {
                        value = value.map(function(item){ return new StructuredParameter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StructuredParameters.items: ' + e.message);
                    }
                }

                this.__prop_items = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StructuredParameters, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameters' });

    Object.defineProperty(StructuredParameters, '__propInfo', {
        get: function() {
            var pi = {
                'items': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:structuredParameters'] = StructuredParameters;

    return StructuredParameters;
}());

var AudioSourcesMessage = (function(){
    var hasProps = false;

    function AudioSourcesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:audioSourcesMessage', enumerable: true });
        }

        AudioSourcesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(AudioSourcesMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(AudioSourcesMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AudioSource); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AudioSource(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AudioSourcesMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(AudioSourcesMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AudioSource); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new AudioSource(item); });
                    } catch (e) {
                        throw new TypeError('Error setting AudioSourcesMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(AudioSourcesMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for AudioSourcesMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(AudioSourcesMessage, '__type', { value: 'urn:inin.com:configuration.hardware:audioSourcesMessage' });

    Object.defineProperty(AudioSourcesMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:audioSourcesMessage'] = AudioSourcesMessage;

    return AudioSourcesMessage;
}());

var RecordingBeepTonesMessage = (function(){
    var hasProps = false;

    function RecordingBeepTonesMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:recordingBeepTonesMessage', enumerable: true });
        }

        RecordingBeepTonesMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(RecordingBeepTonesMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(RecordingBeepTonesMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RecordingBeepTone); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new RecordingBeepTone(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RecordingBeepTonesMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordingBeepTonesMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RecordingBeepTone); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new RecordingBeepTone(item); });
                    } catch (e) {
                        throw new TypeError('Error setting RecordingBeepTonesMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(RecordingBeepTonesMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for RecordingBeepTonesMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(RecordingBeepTonesMessage, '__type', { value: 'urn:inin.com:configuration.hardware:recordingBeepTonesMessage' });

    Object.defineProperty(RecordingBeepTonesMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:recordingBeepTonesMessage'] = RecordingBeepTonesMessage;

    return RecordingBeepTonesMessage;
}());

var StationsMessage = (function(){
    var hasProps = false;

    function StationsMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:stationsMessage', enumerable: true });
        }

        StationsMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(StationsMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(StationsMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Station); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Station(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StationsMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationsMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Station); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Station(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StationsMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(StationsMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for StationsMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StationsMessage, '__type', { value: 'urn:inin.com:configuration.hardware:stationsMessage' });

    Object.defineProperty(StationsMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:stationsMessage'] = StationsMessage;

    return StationsMessage;
}());

var StructuredParametersMessage = (function(){
    var hasProps = false;

    function StructuredParametersMessage() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParametersMessage', enumerable: true });
        }

        StructuredParametersMessage._super.constructor.apply(this, arguments);
    }
    _util.inherits(StructuredParametersMessage, Messaging.MultipleSubscriptionMessage);

    function defineProps() {
        Object.defineProperty(StructuredParametersMessage.prototype, 'added', {
            get: function() { return this.__prop_added; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StructuredParameter); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new StructuredParameter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StructuredParametersMessage.added: ' + e.message);
                    }
                }

                this.__prop_added = value;
            },
            enumerable: true
        });

        Object.defineProperty(StructuredParametersMessage.prototype, 'changed', {
            get: function() { return this.__prop_changed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StructuredParameter); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new StructuredParameter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StructuredParametersMessage.changed: ' + e.message);
                    }
                }

                this.__prop_changed = value;
            },
            enumerable: true
        });

        Object.defineProperty(StructuredParametersMessage.prototype, 'removed', {
            get: function() { return this.__prop_removed; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                    throw new TypeError('Expected type String[] for StructuredParametersMessage.removed, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_removed = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StructuredParametersMessage, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParametersMessage' });

    Object.defineProperty(StructuredParametersMessage, '__propInfo', {
        get: function() {
            var pi = {
                'added': { required: false, nullable: false },
                'changed': { required: false, nullable: false },
                'removed': { required: false, nullable: false }
            };
            if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
            pi.__type = { required: true, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:configuration.hardware:structuredParametersMessage'] = StructuredParametersMessage;

    return StructuredParametersMessage;
}());

var $audioSources = (function(){
    function getAudioSources(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAudioSources.params)) {
            try {
                params = new getAudioSources.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAudioSources.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AudioSources) ? o : new AudioSources(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAudioSources.method, getAudioSources.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAudioSources, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/audio-sources', enumerable: true }
    });

    getAudioSources.params = (function(){
        _util.inherits(getAudioSources_params, _util.RequestParams);

        function getAudioSources_params(properties) {
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

            getAudioSources_params._super.constructor.apply(this, arguments);
        }

        return getAudioSources_params;
    })();

    function createAudioSource(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createAudioSource.params)) {
            try {
                params = new createAudioSource.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createAudioSource.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createAudioSource.method, createAudioSource.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createAudioSource, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/audio-sources', enumerable: true }
    });

    createAudioSource.params = (function(){
        _util.inherits(createAudioSource_params, _util.RequestParams);

        function createAudioSource_params(properties) {
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
            if (!(properties.content instanceof AudioSource)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.AudioSource');
            }

            createAudioSource_params._super.constructor.apply(this, arguments);
        }

        return createAudioSource_params;
    })();

    function getAudioSource(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getAudioSource.params)) {
            try {
                params = new getAudioSource.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAudioSource.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof AudioSource) ? o : new AudioSource(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getAudioSource.method, getAudioSource.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getAudioSource, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/audio-sources/{id}', enumerable: true }
    });

    getAudioSource.params = (function(){
        _util.inherits(getAudioSource_params, _util.RequestParams);

        function getAudioSource_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getAudioSource_params._super.constructor.apply(this, arguments);
        }

        return getAudioSource_params;
    })();

    function deleteAudioSource(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteAudioSource.params)) {
            try {
                params = new deleteAudioSource.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteAudioSource.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteAudioSource.method, deleteAudioSource.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteAudioSource, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/audio-sources/{id}', enumerable: true }
    });

    deleteAudioSource.params = (function(){
        _util.inherits(deleteAudioSource_params, _util.RequestParams);

        function deleteAudioSource_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteAudioSource_params._super.constructor.apply(this, arguments);
        }

        return deleteAudioSource_params;
    })();

    function updateAudioSource(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateAudioSource.params)) {
            try {
                params = new updateAudioSource.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAudioSource.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateAudioSource.method, updateAudioSource.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateAudioSource, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/audio-sources/{id}', enumerable: true }
    });

    updateAudioSource.params = (function(){
        _util.inherits(updateAudioSource_params, _util.RequestParams);

        function updateAudioSource_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof AudioSource)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.AudioSource');
            }

            updateAudioSource_params._super.constructor.apply(this, arguments);
        }

        return updateAudioSource_params;
    })();

    return Object.create(null, {
        getAudioSources: { value: getAudioSources, enumerable: true },
        createAudioSource: { value: createAudioSource, enumerable: true },
        getAudioSource: { value: getAudioSource, enumerable: true },
        deleteAudioSource: { value: deleteAudioSource, enumerable: true },
        updateAudioSource: { value: updateAudioSource, enumerable: true }
    });
})();

var $defaultLocation = (function(){
    function getDefaultLocation(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDefaultLocation.params)) {
            try {
                params = new getDefaultLocation.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaultLocation.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof DefaultLocation) ? o : new DefaultLocation(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDefaultLocation.method, getDefaultLocation.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDefaultLocation, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/default-location', enumerable: true }
    });

    getDefaultLocation.params = (function(){
        _util.inherits(getDefaultLocation_params, _util.RequestParams);

        function getDefaultLocation_params(properties) {
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

            getDefaultLocation_params._super.constructor.apply(this, arguments);
        }

        return getDefaultLocation_params;
    })();

    return Object.create(null, {
        getDefaultLocation: { value: getDefaultLocation, enumerable: true }
    });
})();

var $lineGroups = (function(){
    function getLineGroups(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLineGroups.params)) {
            try {
                params = new getLineGroups.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLineGroups.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LineGroups) ? o : new LineGroups(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLineGroups.method, getLineGroups.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLineGroups, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/line-groups', enumerable: true }
    });

    getLineGroups.params = (function(){
        _util.inherits(getLineGroups_params, _util.RequestParams);

        function getLineGroups_params(properties) {
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

            getLineGroups_params._super.constructor.apply(this, arguments);
        }

        return getLineGroups_params;
    })();

    function createLineGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createLineGroup.params)) {
            try {
                params = new createLineGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createLineGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createLineGroup.method, createLineGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createLineGroup, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/line-groups', enumerable: true }
    });

    createLineGroup.params = (function(){
        _util.inherits(createLineGroup_params, _util.RequestParams);

        function createLineGroup_params(properties) {
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
            if (!(properties.content instanceof LineGroup)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.LineGroup');
            }

            createLineGroup_params._super.constructor.apply(this, arguments);
        }

        return createLineGroup_params;
    })();

    function getLineGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLineGroup.params)) {
            try {
                params = new getLineGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLineGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof LineGroup) ? o : new LineGroup(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLineGroup.method, getLineGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLineGroup, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/line-groups/{id}', enumerable: true }
    });

    getLineGroup.params = (function(){
        _util.inherits(getLineGroup_params, _util.RequestParams);

        function getLineGroup_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getLineGroup_params._super.constructor.apply(this, arguments);
        }

        return getLineGroup_params;
    })();

    function deleteLineGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteLineGroup.params)) {
            try {
                params = new deleteLineGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteLineGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteLineGroup.method, deleteLineGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteLineGroup, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/line-groups/{id}', enumerable: true }
    });

    deleteLineGroup.params = (function(){
        _util.inherits(deleteLineGroup_params, _util.RequestParams);

        function deleteLineGroup_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteLineGroup_params._super.constructor.apply(this, arguments);
        }

        return deleteLineGroup_params;
    })();

    function updateLineGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateLineGroup.params)) {
            try {
                params = new updateLineGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateLineGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateLineGroup.method, updateLineGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateLineGroup, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/line-groups/{id}', enumerable: true }
    });

    updateLineGroup.params = (function(){
        _util.inherits(updateLineGroup_params, _util.RequestParams);

        function updateLineGroup_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof LineGroup)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.LineGroup');
            }

            updateLineGroup_params._super.constructor.apply(this, arguments);
        }

        return updateLineGroup_params;
    })();

    return Object.create(null, {
        getLineGroups: { value: getLineGroups, enumerable: true },
        createLineGroup: { value: createLineGroup, enumerable: true },
        getLineGroup: { value: getLineGroup, enumerable: true },
        deleteLineGroup: { value: deleteLineGroup, enumerable: true },
        updateLineGroup: { value: updateLineGroup, enumerable: true }
    });
})();

var $lines = (function(){
    function getLines(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLines.params)) {
            try {
                params = new getLines.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLines.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Lines) ? o : new Lines(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLines.method, getLines.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLines, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/lines', enumerable: true }
    });

    getLines.params = (function(){
        _util.inherits(getLines_params, _util.RequestParams);

        function getLines_params(properties) {
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

            getLines_params._super.constructor.apply(this, arguments);
        }

        return getLines_params;
    })();

    function createLine(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createLine.params)) {
            try {
                params = new createLine.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createLine.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createLine.method, createLine.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createLine, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/lines', enumerable: true }
    });

    createLine.params = (function(){
        _util.inherits(createLine_params, _util.RequestParams);

        function createLine_params(properties) {
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
            if (!(properties.content instanceof Line)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.Line');
            }

            createLine_params._super.constructor.apply(this, arguments);
        }

        return createLine_params;
    })();

    function getLine(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLine.params)) {
            try {
                params = new getLine.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLine.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Line) ? o : new Line(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLine.method, getLine.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLine, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/lines/{id}', enumerable: true }
    });

    getLine.params = (function(){
        _util.inherits(getLine_params, _util.RequestParams);

        function getLine_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getLine_params._super.constructor.apply(this, arguments);
        }

        return getLine_params;
    })();

    function deleteLine(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteLine.params)) {
            try {
                params = new deleteLine.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteLine.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteLine.method, deleteLine.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteLine, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/lines/{id}', enumerable: true }
    });

    deleteLine.params = (function(){
        _util.inherits(deleteLine_params, _util.RequestParams);

        function deleteLine_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteLine_params._super.constructor.apply(this, arguments);
        }

        return deleteLine_params;
    })();

    function updateLine(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateLine.params)) {
            try {
                params = new updateLine.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateLine.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateLine.method, updateLine.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateLine, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/lines/{id}', enumerable: true }
    });

    updateLine.params = (function(){
        _util.inherits(updateLine_params, _util.RequestParams);

        function updateLine_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Line)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.Line');
            }

            updateLine_params._super.constructor.apply(this, arguments);
        }

        return updateLine_params;
    })();

    return Object.create(null, {
        getLines: { value: getLines, enumerable: true },
        createLine: { value: createLine, enumerable: true },
        getLine: { value: getLine, enumerable: true },
        deleteLine: { value: deleteLine, enumerable: true },
        updateLine: { value: updateLine, enumerable: true }
    });
})();

var $locations = (function(){
    function getLocations(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLocations.params)) {
            try {
                params = new getLocations.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLocations.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Locations) ? o : new Locations(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLocations.method, getLocations.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLocations, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/locations', enumerable: true }
    });

    getLocations.params = (function(){
        _util.inherits(getLocations_params, _util.RequestParams);

        function getLocations_params(properties) {
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

            getLocations_params._super.constructor.apply(this, arguments);
        }

        return getLocations_params;
    })();

    function createLocation(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createLocation.params)) {
            try {
                params = new createLocation.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createLocation.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createLocation.method, createLocation.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createLocation, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/locations', enumerable: true }
    });

    createLocation.params = (function(){
        _util.inherits(createLocation_params, _util.RequestParams);

        function createLocation_params(properties) {
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
            if (!(properties.content instanceof Location)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.Location');
            }

            createLocation_params._super.constructor.apply(this, arguments);
        }

        return createLocation_params;
    })();

    function getLocation(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getLocation.params)) {
            try {
                params = new getLocation.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLocation.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Location) ? o : new Location(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getLocation.method, getLocation.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getLocation, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/locations/{id}', enumerable: true }
    });

    getLocation.params = (function(){
        _util.inherits(getLocation_params, _util.RequestParams);

        function getLocation_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getLocation_params._super.constructor.apply(this, arguments);
        }

        return getLocation_params;
    })();

    return Object.create(null, {
        getLocations: { value: getLocations, enumerable: true },
        createLocation: { value: createLocation, enumerable: true },
        getLocation: { value: getLocation, enumerable: true }
    });
})();

var $managedPhoneRegistrationGroupsDeprecated = (function(){
    function getManagedPhoneRegistrationGroupsDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getManagedPhoneRegistrationGroupsDeprecated.params)) {
            try {
                params = new getManagedPhoneRegistrationGroupsDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getManagedPhoneRegistrationGroupsDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ManagedPhoneRegistrationGroupsDeprecated) ? o : new ManagedPhoneRegistrationGroupsDeprecated(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getManagedPhoneRegistrationGroupsDeprecated.method, getManagedPhoneRegistrationGroupsDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getManagedPhoneRegistrationGroupsDeprecated, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phone-registration-groups-deprecated', enumerable: true }
    });

    getManagedPhoneRegistrationGroupsDeprecated.params = (function(){
        _util.inherits(getManagedPhoneRegistrationGroupsDeprecated_params, _util.RequestParams);

        function getManagedPhoneRegistrationGroupsDeprecated_params(properties) {
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

            getManagedPhoneRegistrationGroupsDeprecated_params._super.constructor.apply(this, arguments);
        }

        return getManagedPhoneRegistrationGroupsDeprecated_params;
    })();

    function createManagedPhoneRegistrationGroupDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createManagedPhoneRegistrationGroupDeprecated.params)) {
            try {
                params = new createManagedPhoneRegistrationGroupDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createManagedPhoneRegistrationGroupDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createManagedPhoneRegistrationGroupDeprecated.method, createManagedPhoneRegistrationGroupDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createManagedPhoneRegistrationGroupDeprecated, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phone-registration-groups-deprecated', enumerable: true }
    });

    createManagedPhoneRegistrationGroupDeprecated.params = (function(){
        _util.inherits(createManagedPhoneRegistrationGroupDeprecated_params, _util.RequestParams);

        function createManagedPhoneRegistrationGroupDeprecated_params(properties) {
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
            if (!(properties.content instanceof ManagedPhoneRegistrationGroupDeprecated)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.ManagedPhoneRegistrationGroupDeprecated');
            }

            createManagedPhoneRegistrationGroupDeprecated_params._super.constructor.apply(this, arguments);
        }

        return createManagedPhoneRegistrationGroupDeprecated_params;
    })();

    function getManagedPhoneRegistrationGroupDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getManagedPhoneRegistrationGroupDeprecated.params)) {
            try {
                params = new getManagedPhoneRegistrationGroupDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getManagedPhoneRegistrationGroupDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ManagedPhoneRegistrationGroupDeprecated) ? o : new ManagedPhoneRegistrationGroupDeprecated(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getManagedPhoneRegistrationGroupDeprecated.method, getManagedPhoneRegistrationGroupDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getManagedPhoneRegistrationGroupDeprecated, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phone-registration-groups-deprecated/{id}', enumerable: true }
    });

    getManagedPhoneRegistrationGroupDeprecated.params = (function(){
        _util.inherits(getManagedPhoneRegistrationGroupDeprecated_params, _util.RequestParams);

        function getManagedPhoneRegistrationGroupDeprecated_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getManagedPhoneRegistrationGroupDeprecated_params._super.constructor.apply(this, arguments);
        }

        return getManagedPhoneRegistrationGroupDeprecated_params;
    })();

    return Object.create(null, {
        getManagedPhoneRegistrationGroupsDeprecated: { value: getManagedPhoneRegistrationGroupsDeprecated, enumerable: true },
        createManagedPhoneRegistrationGroupDeprecated: { value: createManagedPhoneRegistrationGroupDeprecated, enumerable: true },
        getManagedPhoneRegistrationGroupDeprecated: { value: getManagedPhoneRegistrationGroupDeprecated, enumerable: true }
    });
})();

var $managedPhoneRingSetsDeprecated = (function(){
    function getManagedPhoneRingSetsDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getManagedPhoneRingSetsDeprecated.params)) {
            try {
                params = new getManagedPhoneRingSetsDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getManagedPhoneRingSetsDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ManagedPhoneRingSetsDeprecated) ? o : new ManagedPhoneRingSetsDeprecated(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getManagedPhoneRingSetsDeprecated.method, getManagedPhoneRingSetsDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getManagedPhoneRingSetsDeprecated, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phone-ring-sets-deprecated', enumerable: true }
    });

    getManagedPhoneRingSetsDeprecated.params = (function(){
        _util.inherits(getManagedPhoneRingSetsDeprecated_params, _util.RequestParams);

        function getManagedPhoneRingSetsDeprecated_params(properties) {
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

            getManagedPhoneRingSetsDeprecated_params._super.constructor.apply(this, arguments);
        }

        return getManagedPhoneRingSetsDeprecated_params;
    })();

    function getManagedPhoneRingSetDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getManagedPhoneRingSetDeprecated.params)) {
            try {
                params = new getManagedPhoneRingSetDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getManagedPhoneRingSetDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ManagedPhoneRingSetDeprecated) ? o : new ManagedPhoneRingSetDeprecated(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getManagedPhoneRingSetDeprecated.method, getManagedPhoneRingSetDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getManagedPhoneRingSetDeprecated, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phone-ring-sets-deprecated/{id}', enumerable: true }
    });

    getManagedPhoneRingSetDeprecated.params = (function(){
        _util.inherits(getManagedPhoneRingSetDeprecated_params, _util.RequestParams);

        function getManagedPhoneRingSetDeprecated_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getManagedPhoneRingSetDeprecated_params._super.constructor.apply(this, arguments);
        }

        return getManagedPhoneRingSetDeprecated_params;
    })();

    return Object.create(null, {
        getManagedPhoneRingSetsDeprecated: { value: getManagedPhoneRingSetsDeprecated, enumerable: true },
        getManagedPhoneRingSetDeprecated: { value: getManagedPhoneRingSetDeprecated, enumerable: true }
    });
})();

var $managedPhonesDeprecated = (function(){
    function getManagedPhonesDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getManagedPhonesDeprecated.params)) {
            try {
                params = new getManagedPhonesDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getManagedPhonesDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ManagedPhonesDeprecated) ? o : new ManagedPhonesDeprecated(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getManagedPhonesDeprecated.method, getManagedPhonesDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getManagedPhonesDeprecated, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated', enumerable: true }
    });

    getManagedPhonesDeprecated.params = (function(){
        _util.inherits(getManagedPhonesDeprecated_params, _util.RequestParams);

        function getManagedPhonesDeprecated_params(properties) {
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

            getManagedPhonesDeprecated_params._super.constructor.apply(this, arguments);
        }

        return getManagedPhonesDeprecated_params;
    })();

    function createManagedPhoneDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createManagedPhoneDeprecated.params)) {
            try {
                params = new createManagedPhoneDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createManagedPhoneDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createManagedPhoneDeprecated.method, createManagedPhoneDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createManagedPhoneDeprecated, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated', enumerable: true }
    });

    createManagedPhoneDeprecated.params = (function(){
        _util.inherits(createManagedPhoneDeprecated_params, _util.RequestParams);

        function createManagedPhoneDeprecated_params(properties) {
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
            if (!(properties.content instanceof ManagedPhoneDeprecated)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.ManagedPhoneDeprecated');
            }

            createManagedPhoneDeprecated_params._super.constructor.apply(this, arguments);
        }

        return createManagedPhoneDeprecated_params;
    })();

    function getManagedPhoneDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getManagedPhoneDeprecated.params)) {
            try {
                params = new getManagedPhoneDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getManagedPhoneDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ManagedPhoneDeprecated) ? o : new ManagedPhoneDeprecated(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getManagedPhoneDeprecated.method, getManagedPhoneDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getManagedPhoneDeprecated, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/{id}', enumerable: true }
    });

    getManagedPhoneDeprecated.params = (function(){
        _util.inherits(getManagedPhoneDeprecated_params, _util.RequestParams);

        function getManagedPhoneDeprecated_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getManagedPhoneDeprecated_params._super.constructor.apply(this, arguments);
        }

        return getManagedPhoneDeprecated_params;
    })();

    function deleteManagedPhoneDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteManagedPhoneDeprecated.params)) {
            try {
                params = new deleteManagedPhoneDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteManagedPhoneDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteManagedPhoneDeprecated.method, deleteManagedPhoneDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteManagedPhoneDeprecated, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/{id}', enumerable: true }
    });

    deleteManagedPhoneDeprecated.params = (function(){
        _util.inherits(deleteManagedPhoneDeprecated_params, _util.RequestParams);

        function deleteManagedPhoneDeprecated_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteManagedPhoneDeprecated_params._super.constructor.apply(this, arguments);
        }

        return deleteManagedPhoneDeprecated_params;
    })();

    function updateManagedPhoneDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateManagedPhoneDeprecated.params)) {
            try {
                params = new updateManagedPhoneDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateManagedPhoneDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateManagedPhoneDeprecated.method, updateManagedPhoneDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateManagedPhoneDeprecated, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phones-deprecated/{id}', enumerable: true }
    });

    updateManagedPhoneDeprecated.params = (function(){
        _util.inherits(updateManagedPhoneDeprecated_params, _util.RequestParams);

        function updateManagedPhoneDeprecated_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof ManagedPhoneDeprecated)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.ManagedPhoneDeprecated');
            }

            updateManagedPhoneDeprecated_params._super.constructor.apply(this, arguments);
        }

        return updateManagedPhoneDeprecated_params;
    })();

    return Object.create(null, {
        getManagedPhonesDeprecated: { value: getManagedPhonesDeprecated, enumerable: true },
        createManagedPhoneDeprecated: { value: createManagedPhoneDeprecated, enumerable: true },
        getManagedPhoneDeprecated: { value: getManagedPhoneDeprecated, enumerable: true },
        deleteManagedPhoneDeprecated: { value: deleteManagedPhoneDeprecated, enumerable: true },
        updateManagedPhoneDeprecated: { value: updateManagedPhoneDeprecated, enumerable: true }
    });
})();

var $managedPhoneTemplatesDeprecated = (function(){
    function getManagedPhoneTemplatesDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getManagedPhoneTemplatesDeprecated.params)) {
            try {
                params = new getManagedPhoneTemplatesDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getManagedPhoneTemplatesDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ManagedPhoneTemplatesDeprecated) ? o : new ManagedPhoneTemplatesDeprecated(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getManagedPhoneTemplatesDeprecated.method, getManagedPhoneTemplatesDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getManagedPhoneTemplatesDeprecated, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phone-templates-deprecated', enumerable: true }
    });

    getManagedPhoneTemplatesDeprecated.params = (function(){
        _util.inherits(getManagedPhoneTemplatesDeprecated_params, _util.RequestParams);

        function getManagedPhoneTemplatesDeprecated_params(properties) {
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

            getManagedPhoneTemplatesDeprecated_params._super.constructor.apply(this, arguments);
        }

        return getManagedPhoneTemplatesDeprecated_params;
    })();

    function getManagedPhoneTemplateDeprecated(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getManagedPhoneTemplateDeprecated.params)) {
            try {
                params = new getManagedPhoneTemplateDeprecated.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getManagedPhoneTemplateDeprecated.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof ManagedPhoneTemplateDeprecated) ? o : new ManagedPhoneTemplateDeprecated(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getManagedPhoneTemplateDeprecated.method, getManagedPhoneTemplateDeprecated.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getManagedPhoneTemplateDeprecated, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/managed-phone-templates-deprecated/{id}', enumerable: true }
    });

    getManagedPhoneTemplateDeprecated.params = (function(){
        _util.inherits(getManagedPhoneTemplateDeprecated_params, _util.RequestParams);

        function getManagedPhoneTemplateDeprecated_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getManagedPhoneTemplateDeprecated_params._super.constructor.apply(this, arguments);
        }

        return getManagedPhoneTemplateDeprecated_params;
    })();

    return Object.create(null, {
        getManagedPhoneTemplatesDeprecated: { value: getManagedPhoneTemplatesDeprecated, enumerable: true },
        getManagedPhoneTemplateDeprecated: { value: getManagedPhoneTemplateDeprecated, enumerable: true }
    });
})();

var $mediaServers = (function(){
    function getMediaServers(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getMediaServers.params)) {
            try {
                params = new getMediaServers.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getMediaServers.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof MediaServers) ? o : new MediaServers(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getMediaServers.method, getMediaServers.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getMediaServers, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/media-servers', enumerable: true }
    });

    getMediaServers.params = (function(){
        _util.inherits(getMediaServers_params, _util.RequestParams);

        function getMediaServers_params(properties) {
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

            getMediaServers_params._super.constructor.apply(this, arguments);
        }

        return getMediaServers_params;
    })();

    function getMediaServer(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getMediaServer.params)) {
            try {
                params = new getMediaServer.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getMediaServer.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof MediaServer) ? o : new MediaServer(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getMediaServer.method, getMediaServer.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getMediaServer, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/media-servers/{id}', enumerable: true }
    });

    getMediaServer.params = (function(){
        _util.inherits(getMediaServer_params, _util.RequestParams);

        function getMediaServer_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getMediaServer_params._super.constructor.apply(this, arguments);
        }

        return getMediaServer_params;
    })();

    return Object.create(null, {
        getMediaServers: { value: getMediaServers, enumerable: true },
        getMediaServer: { value: getMediaServer, enumerable: true }
    });
})();

var $recordingBeepTones = (function(){
    function getRecordingBeepTones(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getRecordingBeepTones.params)) {
            try {
                params = new getRecordingBeepTones.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getRecordingBeepTones.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof RecordingBeepTones) ? o : new RecordingBeepTones(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getRecordingBeepTones.method, getRecordingBeepTones.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getRecordingBeepTones, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/recording-beep-tones', enumerable: true }
    });

    getRecordingBeepTones.params = (function(){
        _util.inherits(getRecordingBeepTones_params, _util.RequestParams);

        function getRecordingBeepTones_params(properties) {
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

            getRecordingBeepTones_params._super.constructor.apply(this, arguments);
        }

        return getRecordingBeepTones_params;
    })();

    function createRecordingBeepTone(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createRecordingBeepTone.params)) {
            try {
                params = new createRecordingBeepTone.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createRecordingBeepTone.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createRecordingBeepTone.method, createRecordingBeepTone.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createRecordingBeepTone, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/recording-beep-tones', enumerable: true }
    });

    createRecordingBeepTone.params = (function(){
        _util.inherits(createRecordingBeepTone_params, _util.RequestParams);

        function createRecordingBeepTone_params(properties) {
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
            if (!(properties.content instanceof RecordingBeepTone)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.RecordingBeepTone');
            }

            createRecordingBeepTone_params._super.constructor.apply(this, arguments);
        }

        return createRecordingBeepTone_params;
    })();

    function getRecordingBeepTone(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getRecordingBeepTone.params)) {
            try {
                params = new getRecordingBeepTone.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getRecordingBeepTone.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof RecordingBeepTone) ? o : new RecordingBeepTone(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getRecordingBeepTone.method, getRecordingBeepTone.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getRecordingBeepTone, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/recording-beep-tones/{id}', enumerable: true }
    });

    getRecordingBeepTone.params = (function(){
        _util.inherits(getRecordingBeepTone_params, _util.RequestParams);

        function getRecordingBeepTone_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getRecordingBeepTone_params._super.constructor.apply(this, arguments);
        }

        return getRecordingBeepTone_params;
    })();

    function deleteRecordingBeepTone(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteRecordingBeepTone.params)) {
            try {
                params = new deleteRecordingBeepTone.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteRecordingBeepTone.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteRecordingBeepTone.method, deleteRecordingBeepTone.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteRecordingBeepTone, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/recording-beep-tones/{id}', enumerable: true }
    });

    deleteRecordingBeepTone.params = (function(){
        _util.inherits(deleteRecordingBeepTone_params, _util.RequestParams);

        function deleteRecordingBeepTone_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteRecordingBeepTone_params._super.constructor.apply(this, arguments);
        }

        return deleteRecordingBeepTone_params;
    })();

    function updateRecordingBeepTone(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateRecordingBeepTone.params)) {
            try {
                params = new updateRecordingBeepTone.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateRecordingBeepTone.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateRecordingBeepTone.method, updateRecordingBeepTone.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateRecordingBeepTone, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/recording-beep-tones/{id}', enumerable: true }
    });

    updateRecordingBeepTone.params = (function(){
        _util.inherits(updateRecordingBeepTone_params, _util.RequestParams);

        function updateRecordingBeepTone_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof RecordingBeepTone)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.RecordingBeepTone');
            }

            updateRecordingBeepTone_params._super.constructor.apply(this, arguments);
        }

        return updateRecordingBeepTone_params;
    })();

    return Object.create(null, {
        getRecordingBeepTones: { value: getRecordingBeepTones, enumerable: true },
        createRecordingBeepTone: { value: createRecordingBeepTone, enumerable: true },
        getRecordingBeepTone: { value: getRecordingBeepTone, enumerable: true },
        deleteRecordingBeepTone: { value: deleteRecordingBeepTone, enumerable: true },
        updateRecordingBeepTone: { value: updateRecordingBeepTone, enumerable: true }
    });
})();

var $selectionRules = (function(){
    function getSelectionRules(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSelectionRules.params)) {
            try {
                params = new getSelectionRules.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSelectionRules.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SelectionRules) ? o : new SelectionRules(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSelectionRules.method, getSelectionRules.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSelectionRules, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/selection-rules', enumerable: true }
    });

    getSelectionRules.params = (function(){
        _util.inherits(getSelectionRules_params, _util.RequestParams);

        function getSelectionRules_params(properties) {
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

            getSelectionRules_params._super.constructor.apply(this, arguments);
        }

        return getSelectionRules_params;
    })();

    function getSelectionRule(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSelectionRule.params)) {
            try {
                params = new getSelectionRule.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSelectionRule.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SelectionRule) ? o : new SelectionRule(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSelectionRule.method, getSelectionRule.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSelectionRule, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/selection-rules/{id}', enumerable: true }
    });

    getSelectionRule.params = (function(){
        _util.inherits(getSelectionRule_params, _util.RequestParams);

        function getSelectionRule_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getSelectionRule_params._super.constructor.apply(this, arguments);
        }

        return getSelectionRule_params;
    })();

    return Object.create(null, {
        getSelectionRules: { value: getSelectionRules, enumerable: true },
        getSelectionRule: { value: getSelectionRule, enumerable: true }
    });
})();

var $sipBridges = (function(){
    function getSipBridges(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSipBridges.params)) {
            try {
                params = new getSipBridges.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSipBridges.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SipBridges) ? o : new SipBridges(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSipBridges.method, getSipBridges.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSipBridges, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/sip-bridges', enumerable: true }
    });

    getSipBridges.params = (function(){
        _util.inherits(getSipBridges_params, _util.RequestParams);

        function getSipBridges_params(properties) {
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

            getSipBridges_params._super.constructor.apply(this, arguments);
        }

        return getSipBridges_params;
    })();

    function getSipBridge(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getSipBridge.params)) {
            try {
                params = new getSipBridge.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSipBridge.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof SipBridge) ? o : new SipBridge(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getSipBridge.method, getSipBridge.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getSipBridge, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/sip-bridges/{id}', enumerable: true }
    });

    getSipBridge.params = (function(){
        _util.inherits(getSipBridge_params, _util.RequestParams);

        function getSipBridge_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getSipBridge_params._super.constructor.apply(this, arguments);
        }

        return getSipBridge_params;
    })();

    return Object.create(null, {
        getSipBridges: { value: getSipBridges, enumerable: true },
        getSipBridge: { value: getSipBridge, enumerable: true }
    });
})();

var $stationGroups = (function(){
    function getStationGroups(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStationGroups.params)) {
            try {
                params = new getStationGroups.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStationGroups.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StationGroups) ? o : new StationGroups(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStationGroups.method, getStationGroups.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStationGroups, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/station-groups', enumerable: true }
    });

    getStationGroups.params = (function(){
        _util.inherits(getStationGroups_params, _util.RequestParams);

        function getStationGroups_params(properties) {
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

            getStationGroups_params._super.constructor.apply(this, arguments);
        }

        return getStationGroups_params;
    })();

    function getStationGroup(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStationGroup.params)) {
            try {
                params = new getStationGroup.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStationGroup.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StationGroup) ? o : new StationGroup(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStationGroup.method, getStationGroup.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStationGroup, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/station-groups/{id}', enumerable: true }
    });

    getStationGroup.params = (function(){
        _util.inherits(getStationGroup_params, _util.RequestParams);

        function getStationGroup_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getStationGroup_params._super.constructor.apply(this, arguments);
        }

        return getStationGroup_params;
    })();

    return Object.create(null, {
        getStationGroups: { value: getStationGroups, enumerable: true },
        getStationGroup: { value: getStationGroup, enumerable: true }
    });
})();

var $stations = (function(){
    function getStations(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStations.params)) {
            try {
                params = new getStations.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStations.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Stations) ? o : new Stations(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStations.method, getStations.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStations, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/stations', enumerable: true }
    });

    getStations.params = (function(){
        _util.inherits(getStations_params, _util.RequestParams);

        function getStations_params(properties) {
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

            getStations_params._super.constructor.apply(this, arguments);
        }

        return getStations_params;
    })();

    function createStation(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createStation.params)) {
            try {
                params = new createStation.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createStation.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createStation.method, createStation.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createStation, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/stations', enumerable: true }
    });

    createStation.params = (function(){
        _util.inherits(createStation_params, _util.RequestParams);

        function createStation_params(properties) {
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
            if (!(properties.content instanceof Station)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.Station');
            }

            createStation_params._super.constructor.apply(this, arguments);
        }

        return createStation_params;
    })();

    function getStation(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStation.params)) {
            try {
                params = new getStation.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStation.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Station) ? o : new Station(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStation.method, getStation.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStation, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/stations/{id}', enumerable: true }
    });

    getStation.params = (function(){
        _util.inherits(getStation_params, _util.RequestParams);

        function getStation_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getStation_params._super.constructor.apply(this, arguments);
        }

        return getStation_params;
    })();

    function deleteStation(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteStation.params)) {
            try {
                params = new deleteStation.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteStation.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteStation.method, deleteStation.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteStation, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/stations/{id}', enumerable: true }
    });

    deleteStation.params = (function(){
        _util.inherits(deleteStation_params, _util.RequestParams);

        function deleteStation_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteStation_params._super.constructor.apply(this, arguments);
        }

        return deleteStation_params;
    })();

    function updateStation(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateStation.params)) {
            try {
                params = new updateStation.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateStation.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateStation.method, updateStation.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateStation, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/stations/{id}', enumerable: true }
    });

    updateStation.params = (function(){
        _util.inherits(updateStation_params, _util.RequestParams);

        function updateStation_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof Station)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.Station');
            }

            updateStation_params._super.constructor.apply(this, arguments);
        }

        return updateStation_params;
    })();

    return Object.create(null, {
        getStations: { value: getStations, enumerable: true },
        createStation: { value: createStation, enumerable: true },
        getStation: { value: getStation, enumerable: true },
        deleteStation: { value: deleteStation, enumerable: true },
        updateStation: { value: updateStation, enumerable: true }
    });
})();

var $stationTemplates = (function(){
    function getStationTemplates(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStationTemplates.params)) {
            try {
                params = new getStationTemplates.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStationTemplates.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StationTemplates) ? o : new StationTemplates(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStationTemplates.method, getStationTemplates.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStationTemplates, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/station-templates', enumerable: true }
    });

    getStationTemplates.params = (function(){
        _util.inherits(getStationTemplates_params, _util.RequestParams);

        function getStationTemplates_params(properties) {
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

            getStationTemplates_params._super.constructor.apply(this, arguments);
        }

        return getStationTemplates_params;
    })();

    function getStationTemplate(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStationTemplate.params)) {
            try {
                params = new getStationTemplate.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStationTemplate.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StationTemplate) ? o : new StationTemplate(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStationTemplate.method, getStationTemplate.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStationTemplate, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/station-templates/{id}', enumerable: true }
    });

    getStationTemplate.params = (function(){
        _util.inherits(getStationTemplate_params, _util.RequestParams);

        function getStationTemplate_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getStationTemplate_params._super.constructor.apply(this, arguments);
        }

        return getStationTemplate_params;
    })();

    return Object.create(null, {
        getStationTemplates: { value: getStationTemplates, enumerable: true },
        getStationTemplate: { value: getStationTemplate, enumerable: true }
    });
})();

var $structuredParameters = (function(){
    function getStructuredParameters(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStructuredParameters.params)) {
            try {
                params = new getStructuredParameters.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStructuredParameters.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StructuredParameters) ? o : new StructuredParameters(o); };
        dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStructuredParameters.method, getStructuredParameters.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStructuredParameters, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/structured-parameters', enumerable: true }
    });

    getStructuredParameters.params = (function(){
        _util.inherits(getStructuredParameters_params, _util.RequestParams);

        function getStructuredParameters_params(properties) {
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

            getStructuredParameters_params._super.constructor.apply(this, arguments);
        }

        return getStructuredParameters_params;
    })();

    function createStructuredParameter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof createStructuredParameter.params)) {
            try {
                params = new createStructuredParameter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createStructuredParameter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(createStructuredParameter.method, createStructuredParameter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(createStructuredParameter, {
        'method': { value: 'POST', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/structured-parameters', enumerable: true }
    });

    createStructuredParameter.params = (function(){
        _util.inherits(createStructuredParameter_params, _util.RequestParams);

        function createStructuredParameter_params(properties) {
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
            if (!(properties.content instanceof StructuredParameter)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.StructuredParameter');
            }

            createStructuredParameter_params._super.constructor.apply(this, arguments);
        }

        return createStructuredParameter_params;
    })();

    function getStructuredParameter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStructuredParameter.params)) {
            try {
                params = new getStructuredParameter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStructuredParameter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StructuredParameter) ? o : new StructuredParameter(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStructuredParameter.method, getStructuredParameter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStructuredParameter, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/structured-parameters/{id}', enumerable: true }
    });

    getStructuredParameter.params = (function(){
        _util.inherits(getStructuredParameter_params, _util.RequestParams);

        function getStructuredParameter_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            getStructuredParameter_params._super.constructor.apply(this, arguments);
        }

        return getStructuredParameter_params;
    })();

    function deleteStructuredParameter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof deleteStructuredParameter.params)) {
            try {
                params = new deleteStructuredParameter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteStructuredParameter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(deleteStructuredParameter.method, deleteStructuredParameter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(deleteStructuredParameter, {
        'method': { value: 'DELETE', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/structured-parameters/{id}', enumerable: true }
    });

    deleteStructuredParameter.params = (function(){
        _util.inherits(deleteStructuredParameter_params, _util.RequestParams);

        function deleteStructuredParameter_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }

            deleteStructuredParameter_params._super.constructor.apply(this, arguments);
        }

        return deleteStructuredParameter_params;
    })();

    function updateStructuredParameter(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof updateStructuredParameter.params)) {
            try {
                params = new updateStructuredParameter.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateStructuredParameter.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
        dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(updateStructuredParameter.method, updateStructuredParameter.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(updateStructuredParameter, {
        'method': { value: 'PUT', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/configuration/structured-parameters/{id}', enumerable: true }
    });

    updateStructuredParameter.params = (function(){
        _util.inherits(updateStructuredParameter_params, _util.RequestParams);

        function updateStructuredParameter_params(properties) {
            /*jshint validthis:true */
            if (!properties) { properties = {}; }
            _util.addSessionIdTemplate(properties);
            _util.addSessionTokenHeader(properties);
            if (properties.template === void 0) {
                throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
            }
            if (!_util.hasProp(properties.template, 'sessionId')) {
                throw new Error('`properties.template` is missing required property: `sessionId`');
            }
            if (!_util.hasProp(properties.template, 'id')) {
                throw new Error('`properties.template` is missing required property: `id`');
            }
            if (properties.header === void 0) {
                throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
            }
            if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
            }
            if (!(properties.content instanceof StructuredParameter)) {
                throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.StructuredParameter');
            }

            updateStructuredParameter_params._super.constructor.apply(this, arguments);
        }

        return updateStructuredParameter_params;
    })();

    return Object.create(null, {
        getStructuredParameters: { value: getStructuredParameters, enumerable: true },
        createStructuredParameter: { value: createStructuredParameter, enumerable: true },
        getStructuredParameter: { value: getStructuredParameter, enumerable: true },
        deleteStructuredParameter: { value: deleteStructuredParameter, enumerable: true },
        updateStructuredParameter: { value: updateStructuredParameter, enumerable: true }
    });
})();

exports.StationType = StationType;
exports.StructuredParameterType = StructuredParameterType;
exports.LineAddressFamily = LineAddressFamily;
exports.LineAudioPath = LineAudioPath;
exports.LineAudioProtocol = LineAudioProtocol;
exports.LineCallAnalysisType = LineCallAnalysisType;
exports.LineCalledAddressSelection = LineCalledAddressSelection;
exports.LineSendExtension = LineSendExtension;
exports.LineDiversionMethod = LineDiversionMethod;
exports.LineCallingAddressDivertedCalls = LineCallingAddressDivertedCalls;
exports.LineCallingAddressDivertedCallsFromHeaderAddress = LineCallingAddressDivertedCallsFromHeaderAddress;
exports.LineCallingAddressNormalCalls = LineCallingAddressNormalCalls;
exports.LineCallingAddressNormalCallsFromHeaderAddress = LineCallingAddressNormalCallsFromHeaderAddress;
exports.LineCallingAddressSelection = LineCallingAddressSelection;
exports.LineDiversionInfo = LineDiversionInfo;
exports.LineDTMFType = LineDTMFType;
exports.LineFaxProtocol = LineFaxProtocol;
exports.LineUsage = LineUsage;
exports.LineMediaAddressFamily = LineMediaAddressFamily;
exports.LineSecurity = LineSecurity;
exports.LineAccessValidation = LineAccessValidation;
exports.LineTransportProtocol = LineTransportProtocol;
exports.LineUserToUserConversion = LineUserToUserConversion;
exports.LineUserToUserHeader = LineUserToUserHeader;
exports.AddressFamily = AddressFamily;
exports.PhoneStatus = PhoneStatus;
exports.ApplyTemplateResultCode = ApplyTemplateResultCode;
exports.PhoneResultCode = PhoneResultCode;
exports.DynamicAttributeDataType = DynamicAttributeDataType;
exports.DynamicAttributeMetadataType = DynamicAttributeMetadataType;
exports.OptionGroupType = OptionGroupType;
exports.AudioSourcesMessage = AudioSourcesMessage;
exports.AudioSource = AudioSource;
exports.RecordingBeepTonesMessage = RecordingBeepTonesMessage;
exports.RecordingBeepTone = RecordingBeepTone;
exports.StationsMessage = StationsMessage;
exports.Station = Station;
exports.SipAddress = SipAddress;
exports.StructuredParametersMessage = StructuredParametersMessage;
exports.StructuredParameter = StructuredParameter;
exports.StructuredParameterValue = StructuredParameterValue;
exports.AudioSources = AudioSources;
exports.DefaultLocation = DefaultLocation;
exports.LineGroups = LineGroups;
exports.LineGroup = LineGroup;
exports.Lines = Lines;
exports.Line = Line;
exports.LineSipProxy = LineSipProxy;
exports.LineRegistrarAddress = LineRegistrarAddress;
exports.LineAccessLevel = LineAccessLevel;
exports.Locations = Locations;
exports.Location = Location;
exports.ManagedExternalRegistrationsDeprecatedBulkUpdate = ManagedExternalRegistrationsDeprecatedBulkUpdate;
exports.ManagedExternalRegistrationDeprecated = ManagedExternalRegistrationDeprecated;
exports.ManagedPhoneRegistrationGroupsDeprecated = ManagedPhoneRegistrationGroupsDeprecated;
exports.ManagedPhoneRegistrationGroupDeprecated = ManagedPhoneRegistrationGroupDeprecated;
exports.RegistrationGroupRegistration = RegistrationGroupRegistration;
exports.ManagedPhoneRingSetsDeprecated = ManagedPhoneRingSetsDeprecated;
exports.ManagedPhoneRingSetDeprecated = ManagedPhoneRingSetDeprecated;
exports.ManagedPhonesDeprecated = ManagedPhonesDeprecated;
exports.ManagedPhoneDeprecated = ManagedPhoneDeprecated;
exports.ManagedStationDeprecated = ManagedStationDeprecated;
exports.SharedStationDeprecated = SharedStationDeprecated;
exports.ApplyTemplateArgument = ApplyTemplateArgument;
exports.ApplyTemplateResult = ApplyTemplateResult;
exports.ApplyTemplateEntry = ApplyTemplateEntry;
exports.CancelScheduledReloadsArgument = CancelScheduledReloadsArgument;
exports.CancelScheduledReloadsResult = CancelScheduledReloadsResult;
exports.CancelScheduledReloadsEntry = CancelScheduledReloadsEntry;
exports.SupportedPhonesAttributesResult = SupportedPhonesAttributesResult;
exports.DynamicAttributeInformation = DynamicAttributeInformation;
exports.SupportedPhonesResult = SupportedPhonesResult;
exports.SupportedPhonesEntry = SupportedPhonesEntry;
exports.ScheduledForReloadResult = ScheduledForReloadResult;
exports.ScheduledForReloadEntry = ScheduledForReloadEntry;
exports.ReloadAllWithPendingChangesResult = ReloadAllWithPendingChangesResult;
exports.ReloadArgument = ReloadArgument;
exports.ReloadResult = ReloadResult;
exports.ReloadEntry = ReloadEntry;
exports.ScheduleReloadArgument = ScheduleReloadArgument;
exports.ScheduleReloadResult = ScheduleReloadResult;
exports.ScheduleReloadEntry = ScheduleReloadEntry;
exports.UnprovisionArgument = UnprovisionArgument;
exports.UnprovisionResult = UnprovisionResult;
exports.UnprovisionEntry = UnprovisionEntry;
exports.ManagedPhoneTemplatesDeprecated = ManagedPhoneTemplatesDeprecated;
exports.ManagedPhoneTemplateDeprecated = ManagedPhoneTemplateDeprecated;
exports.ManagedStationTemplateDeprecated = ManagedStationTemplateDeprecated;
exports.SharedStationTemplateDeprecated = SharedStationTemplateDeprecated;
exports.ManagedStationsDeprecatedBulkUpdate = ManagedStationsDeprecatedBulkUpdate;
exports.ManagedStationTemplatesDeprecatedBulkUpdate = ManagedStationTemplatesDeprecatedBulkUpdate;
exports.MediaServers = MediaServers;
exports.MediaServer = MediaServer;
exports.RecordingBeepTones = RecordingBeepTones;
exports.SelectionRules = SelectionRules;
exports.SelectionRule = SelectionRule;
exports.SharedStationsDeprecatedBulkUpdate = SharedStationsDeprecatedBulkUpdate;
exports.SharedStationTemplatesDeprecatedBulkUpdate = SharedStationTemplatesDeprecatedBulkUpdate;
exports.SipBridges = SipBridges;
exports.SipBridge = SipBridge;
exports.StationGroups = StationGroups;
exports.StationGroup = StationGroup;
exports.Stations = Stations;
exports.StationTemplates = StationTemplates;
exports.StationTemplate = StationTemplate;
exports.StructuredParameters = StructuredParameters;
exports.$audioSources = $audioSources;
exports.$defaultLocation = $defaultLocation;
exports.$lineGroups = $lineGroups;
exports.$lines = $lines;
exports.$locations = $locations;
exports.$managedPhoneRegistrationGroupsDeprecated = $managedPhoneRegistrationGroupsDeprecated;
exports.$managedPhoneRingSetsDeprecated = $managedPhoneRingSetsDeprecated;
exports.$managedPhonesDeprecated = $managedPhonesDeprecated;
exports.$managedPhoneTemplatesDeprecated = $managedPhoneTemplatesDeprecated;
exports.$mediaServers = $mediaServers;
exports.$recordingBeepTones = $recordingBeepTones;
exports.$selectionRules = $selectionRules;
exports.$sipBridges = $sipBridges;
exports.$stationGroups = $stationGroups;
exports.$stations = $stations;
exports.$stationTemplates = $stationTemplates;
exports.$structuredParameters = $structuredParameters;
