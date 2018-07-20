/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
'use strict';

var _util = require('./_util');
var _typemap = require('./_typemap');
var Common = require('./Common');

var Dictionary = (function(){
    var hasProps = false;

    function Dictionary() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:dictionary' });
        }

        Dictionary._super.constructor.apply(this, arguments);
    }
    _util.inherits(Dictionary, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Dictionary.prototype, 'tables', {
            get: function() { return this.__prop_tables; },
            set: function(value) {
                if (!(value instanceof Tables || value === void 0)) {
                    try {
                        value = new Tables(value);
                    } catch (e) {
                        throw new TypeError('Error setting Dictionary.tables: ' + e.message);
                    }
                }

                this.__prop_tables = value;
            },
            enumerable: true
        });

        Object.defineProperty(Dictionary.prototype, 'views', {
            get: function() { return this.__prop_views; },
            set: function(value) {
                if (!(value instanceof Views || value === void 0)) {
                    try {
                        value = new Views(value);
                    } catch (e) {
                        throw new TypeError('Error setting Dictionary.views: ' + e.message);
                    }
                }

                this.__prop_views = value;
            },
            enumerable: true
        });

        Object.defineProperty(Dictionary.prototype, 'storedProcedures', {
            get: function() { return this.__prop_storedProcedures; },
            set: function(value) {
                if (!(value instanceof StoredProcedures || value === void 0)) {
                    try {
                        value = new StoredProcedures(value);
                    } catch (e) {
                        throw new TypeError('Error setting Dictionary.storedProcedures: ' + e.message);
                    }
                }

                this.__prop_storedProcedures = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Dictionary, '__type', { value: 'urn:inin.com:dataDictionary:dictionary' });

    Object.defineProperty(Dictionary, '__propInfo', {
        get: function() {
            var pi = {
                'tables': { required: false, nullable: false },
                'views': { required: false, nullable: false },
                'storedProcedures': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:dictionary'] = Dictionary;

    return Dictionary;
}());

var Tables = (function(){
    var hasProps = false;

    function Tables() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:tables' });
        }

        Tables._super.constructor.apply(this, arguments);
    }
    _util.inherits(Tables, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Tables.prototype, 'tableList', {
            get: function() { return this.__prop_tableList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Table); }))) {
                    try {
                        value = value.map(function(item){ return new Table(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Tables.tableList: ' + e.message);
                    }
                }

                this.__prop_tableList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Tables, '__type', { value: 'urn:inin.com:dataDictionary:tables' });

    Object.defineProperty(Tables, '__propInfo', {
        get: function() {
            var pi = {
                'tableList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:tables'] = Tables;

    return Tables;
}());

var Table = (function(){
    var hasProps = false;

    function Table() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:table' });
        }

        Table._super.constructor.apply(this, arguments);
    }
    _util.inherits(Table, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Table.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Table.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'dateTimeFilterColumn', {
            get: function() { return this.__prop_dateTimeFilterColumn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Table.dateTimeFilterColumn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dateTimeFilterColumn = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'siteIdFilterColumn', {
            get: function() { return this.__prop_siteIdFilterColumn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Table.siteIdFilterColumn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_siteIdFilterColumn = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'schema', {
            get: function() { return this.__prop_schema; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Table.schema, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_schema = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'shortDescription', {
            get: function() { return this.__prop_shortDescription; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Table.shortDescription, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shortDescription = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'longDescription', {
            get: function() { return this.__prop_longDescription; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Table.longDescription, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_longDescription = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'cicProductCode', {
            get: function() { return this.__prop_cicProductCode; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Table.cicProductCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_cicProductCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'loggingType', {
            get: function() { return this.__prop_loggingType; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Table.loggingType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_loggingType = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'lastChangeVersion', {
            get: function() { return this.__prop_lastChangeVersion; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Table.lastChangeVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastChangeVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'lastChangeReason', {
            get: function() { return this.__prop_lastChangeReason; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Table.lastChangeReason, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastChangeReason = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'column', {
            get: function() { return this.__prop_column; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Column); }))) {
                    try {
                        value = value.map(function(item){ return new Column(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Table.column: ' + e.message);
                    }
                }

                this.__prop_column = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'primaryKey', {
            get: function() { return this.__prop_primaryKey; },
            set: function(value) {
                if (!(value instanceof PrimaryKey || value === void 0)) {
                    try {
                        value = new PrimaryKey(value);
                    } catch (e) {
                        throw new TypeError('Error setting Table.primaryKey: ' + e.message);
                    }
                }

                this.__prop_primaryKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'foreignKey', {
            get: function() { return this.__prop_foreignKey; },
            set: function(value) {
                if (!(value instanceof ForeignKey || value === void 0)) {
                    try {
                        value = new ForeignKey(value);
                    } catch (e) {
                        throw new TypeError('Error setting Table.foreignKey: ' + e.message);
                    }
                }

                this.__prop_foreignKey = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'feature', {
            get: function() { return this.__prop_feature; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Feature); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Feature(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Table.feature: ' + e.message);
                    }
                }

                this.__prop_feature = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'dataSetName', {
            get: function() { return this.__prop_dataSetName; },
            set: function(value) {
                if (!(value instanceof DataSetName || value === void 0)) {
                    try {
                        value = new DataSetName(value);
                    } catch (e) {
                        throw new TypeError('Error setting Table.dataSetName: ' + e.message);
                    }
                }

                this.__prop_dataSetName = value;
            },
            enumerable: true
        });

        Object.defineProperty(Table.prototype, 'index', {
            get: function() { return this.__prop_index; },
            set: function(value) {
                if (!(value instanceof Index || value === void 0)) {
                    try {
                        value = new Index(value);
                    } catch (e) {
                        throw new TypeError('Error setting Table.index: ' + e.message);
                    }
                }

                this.__prop_index = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Table, '__type', { value: 'urn:inin.com:dataDictionary:table' });

    Object.defineProperty(Table, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'dateTimeFilterColumn': { required: false, nullable: false },
                'siteIdFilterColumn': { required: false, nullable: false },
                'schema': { required: true, nullable: false },
                'shortDescription': { required: true, nullable: false },
                'longDescription': { required: true, nullable: false },
                'cicProductCode': { required: true, nullable: false },
                'loggingType': { required: false, nullable: false },
                'lastChangeVersion': { required: true, nullable: false },
                'lastChangeReason': { required: true, nullable: false },
                'column': { required: true, nullable: false },
                'primaryKey': { required: false, nullable: false },
                'foreignKey': { required: false, nullable: false },
                'feature': { required: false, nullable: false },
                'dataSetName': { required: false, nullable: false },
                'index': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:table'] = Table;

    return Table;
}());

var Column = (function(){
    var hasProps = false;

    function Column() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:column' });
        }

        Column._super.constructor.apply(this, arguments);
    }
    _util.inherits(Column, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Column.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Column.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(Column.prototype, 'dataType', {
            get: function() { return this.__prop_dataType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Column.dataType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dataType = value;
            },
            enumerable: true
        });

        Object.defineProperty(Column.prototype, 'maxLength', {
            get: function() { return this.__prop_maxLength; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value)) {
                    throw new TypeError('Expected type Number (integer) for Column.maxLength, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxLength = value;
            },
            enumerable: true
        });

        Object.defineProperty(Column.prototype, 'encoding', {
            get: function() { return this.__prop_encoding; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Column.encoding, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_encoding = value;
            },
            enumerable: true
        });

        Object.defineProperty(Column.prototype, 'precision', {
            get: function() { return this.__prop_precision; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Column.precision, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_precision = value;
            },
            enumerable: true
        });

        Object.defineProperty(Column.prototype, 'scale', {
            get: function() { return this.__prop_scale; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Column.scale, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_scale = value;
            },
            enumerable: true
        });

        Object.defineProperty(Column.prototype, 'allowsNulls', {
            get: function() { return this.__prop_allowsNulls; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Column.allowsNulls, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_allowsNulls = value;
            },
            enumerable: true
        });

        Object.defineProperty(Column.prototype, 'lastChangeVersion', {
            get: function() { return this.__prop_lastChangeVersion; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Column.lastChangeVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastChangeVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(Column.prototype, 'lastChangeReason', {
            get: function() { return this.__prop_lastChangeReason; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Column.lastChangeReason, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastChangeReason = value;
            },
            enumerable: true
        });

        Object.defineProperty(Column.prototype, 'containsPII', {
            get: function() { return this.__prop_containsPII; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Column.containsPII, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_containsPII = value;
            },
            enumerable: true
        });

        Object.defineProperty(Column.prototype, 'seqNo', {
            get: function() { return this.__prop_seqNo; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Column.seqNo, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_seqNo = value;
            },
            enumerable: true
        });

        Object.defineProperty(Column.prototype, 'shortDescription', {
            get: function() { return this.__prop_shortDescription; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Column.shortDescription, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shortDescription = value;
            },
            enumerable: true
        });

        Object.defineProperty(Column.prototype, 'longDescription', {
            get: function() { return this.__prop_longDescription; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Column.longDescription, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_longDescription = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Column, '__type', { value: 'urn:inin.com:dataDictionary:column' });

    Object.defineProperty(Column, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'dataType': { required: true, nullable: false },
                'maxLength': { required: true, nullable: false },
                'encoding': { required: false, nullable: false },
                'precision': { required: false, nullable: false },
                'scale': { required: false, nullable: false },
                'allowsNulls': { required: false, nullable: false },
                'lastChangeVersion': { required: true, nullable: false },
                'lastChangeReason': { required: true, nullable: false },
                'containsPII': { required: true, nullable: false },
                'seqNo': { required: false, nullable: false },
                'shortDescription': { required: true, nullable: false },
                'longDescription': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:column'] = Column;

    return Column;
}());

var PrimaryKey = (function(){
    var hasProps = false;

    function PrimaryKey() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:primaryKey' });
        }

        PrimaryKey._super.constructor.apply(this, arguments);
    }
    _util.inherits(PrimaryKey, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PrimaryKey.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PrimaryKey.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(PrimaryKey.prototype, 'primaryKeyType', {
            get: function() { return this.__prop_primaryKeyType; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PrimaryKey.primaryKeyType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_primaryKeyType = value;
            },
            enumerable: true
        });

        Object.defineProperty(PrimaryKey.prototype, 'primaryKeyColumns', {
            get: function() { return this.__prop_primaryKeyColumns; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof PrimaryKeyColumn); }))) {
                    try {
                        value = value.map(function(item){ return new PrimaryKeyColumn(item); });
                    } catch (e) {
                        throw new TypeError('Error setting PrimaryKey.primaryKeyColumns: ' + e.message);
                    }
                }

                this.__prop_primaryKeyColumns = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PrimaryKey, '__type', { value: 'urn:inin.com:dataDictionary:primaryKey' });

    Object.defineProperty(PrimaryKey, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'primaryKeyType': { required: false, nullable: false },
                'primaryKeyColumns': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:primaryKey'] = PrimaryKey;

    return PrimaryKey;
}());

var PrimaryKeyColumn = (function(){
    var hasProps = false;

    function PrimaryKeyColumn() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:primaryKeyColumn' });
        }

        PrimaryKeyColumn._super.constructor.apply(this, arguments);
    }
    _util.inherits(PrimaryKeyColumn, _util.DataContract);

    function defineProps() {
        Object.defineProperty(PrimaryKeyColumn.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for PrimaryKeyColumn.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(PrimaryKeyColumn.prototype, 'sortOrder', {
            get: function() { return this.__prop_sortOrder; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for PrimaryKeyColumn.sortOrder, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sortOrder = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(PrimaryKeyColumn, '__type', { value: 'urn:inin.com:dataDictionary:primaryKeyColumn' });

    Object.defineProperty(PrimaryKeyColumn, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'sortOrder': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:primaryKeyColumn'] = PrimaryKeyColumn;

    return PrimaryKeyColumn;
}());

var ForeignKey = (function(){
    var hasProps = false;

    function ForeignKey() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:foreignKey' });
        }

        ForeignKey._super.constructor.apply(this, arguments);
    }
    _util.inherits(ForeignKey, _util.DataContract);

    function defineProps() {
        Object.defineProperty(ForeignKey.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ForeignKey.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(ForeignKey.prototype, 'column', {
            get: function() { return this.__prop_column; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ForeignKey.column, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_column = value;
            },
            enumerable: true
        });

        Object.defineProperty(ForeignKey.prototype, 'referenceTable', {
            get: function() { return this.__prop_referenceTable; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ForeignKey.referenceTable, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_referenceTable = value;
            },
            enumerable: true
        });

        Object.defineProperty(ForeignKey.prototype, 'referenceColumn', {
            get: function() { return this.__prop_referenceColumn; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for ForeignKey.referenceColumn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_referenceColumn = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(ForeignKey, '__type', { value: 'urn:inin.com:dataDictionary:foreignKey' });

    Object.defineProperty(ForeignKey, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'column': { required: true, nullable: false },
                'referenceTable': { required: true, nullable: false },
                'referenceColumn': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:foreignKey'] = ForeignKey;

    return ForeignKey;
}());

var Feature = (function(){
    var hasProps = false;

    function Feature() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:feature' });
        }

        Feature._super.constructor.apply(this, arguments);
    }
    _util.inherits(Feature, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Feature.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Feature.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Feature, '__type', { value: 'urn:inin.com:dataDictionary:feature' });

    Object.defineProperty(Feature, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:feature'] = Feature;

    return Feature;
}());

var DataSetName = (function(){
    var hasProps = false;

    function DataSetName() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:dataSetName' });
        }

        DataSetName._super.constructor.apply(this, arguments);
    }
    _util.inherits(DataSetName, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DataSetName.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for DataSetName.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DataSetName, '__type', { value: 'urn:inin.com:dataDictionary:dataSetName' });

    Object.defineProperty(DataSetName, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:dataSetName'] = DataSetName;

    return DataSetName;
}());

var Index = (function(){
    var hasProps = false;

    function Index() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:index' });
        }

        Index._super.constructor.apply(this, arguments);
    }
    _util.inherits(Index, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Index.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Index.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(Index.prototype, 'indexType', {
            get: function() { return this.__prop_indexType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Index.indexType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_indexType = value;
            },
            enumerable: true
        });

        Object.defineProperty(Index.prototype, 'indexColumns', {
            get: function() { return this.__prop_indexColumns; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof IndexColumn); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new IndexColumn(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Index.indexColumns: ' + e.message);
                    }
                }

                this.__prop_indexColumns = value;
            },
            enumerable: true
        });

        Object.defineProperty(Index.prototype, 'includedColumns', {
            get: function() { return this.__prop_includedColumns; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof IncludedColumn); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new IncludedColumn(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Index.includedColumns: ' + e.message);
                    }
                }

                this.__prop_includedColumns = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Index, '__type', { value: 'urn:inin.com:dataDictionary:index' });

    Object.defineProperty(Index, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'indexType': { required: true, nullable: false },
                'indexColumns': { required: false, nullable: false },
                'includedColumns': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:index'] = Index;

    return Index;
}());

var IndexColumn = (function(){
    var hasProps = false;

    function IndexColumn() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:indexColumn' });
        }

        IndexColumn._super.constructor.apply(this, arguments);
    }
    _util.inherits(IndexColumn, _util.DataContract);

    function defineProps() {
        Object.defineProperty(IndexColumn.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for IndexColumn.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(IndexColumn.prototype, 'sortOrder', {
            get: function() { return this.__prop_sortOrder; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for IndexColumn.sortOrder, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_sortOrder = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(IndexColumn, '__type', { value: 'urn:inin.com:dataDictionary:indexColumn' });

    Object.defineProperty(IndexColumn, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'sortOrder': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:indexColumn'] = IndexColumn;

    return IndexColumn;
}());

var IncludedColumn = (function(){
    var hasProps = false;

    function IncludedColumn() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:includedColumn' });
        }

        IncludedColumn._super.constructor.apply(this, arguments);
    }
    _util.inherits(IncludedColumn, _util.DataContract);

    function defineProps() {
        Object.defineProperty(IncludedColumn.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for IncludedColumn.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(IncludedColumn, '__type', { value: 'urn:inin.com:dataDictionary:includedColumn' });

    Object.defineProperty(IncludedColumn, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:includedColumn'] = IncludedColumn;

    return IncludedColumn;
}());

var Views = (function(){
    var hasProps = false;

    function Views() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:views' });
        }

        Views._super.constructor.apply(this, arguments);
    }
    _util.inherits(Views, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Views.prototype, 'viewList', {
            get: function() { return this.__prop_viewList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof View); }))) {
                    try {
                        value = value.map(function(item){ return new View(item); });
                    } catch (e) {
                        throw new TypeError('Error setting Views.viewList: ' + e.message);
                    }
                }

                this.__prop_viewList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Views, '__type', { value: 'urn:inin.com:dataDictionary:views' });

    Object.defineProperty(Views, '__propInfo', {
        get: function() {
            var pi = {
                'viewList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:views'] = Views;

    return Views;
}());

var View = (function(){
    var hasProps = false;

    function View() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:view' });
        }

        View._super.constructor.apply(this, arguments);
    }
    _util.inherits(View, _util.DataContract);

    function defineProps() {
        Object.defineProperty(View.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for View.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(View.prototype, 'dateTimeFilterColumn', {
            get: function() { return this.__prop_dateTimeFilterColumn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for View.dateTimeFilterColumn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dateTimeFilterColumn = value;
            },
            enumerable: true
        });

        Object.defineProperty(View.prototype, 'siteIdFilterColumn', {
            get: function() { return this.__prop_siteIdFilterColumn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for View.siteIdFilterColumn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_siteIdFilterColumn = value;
            },
            enumerable: true
        });

        Object.defineProperty(View.prototype, 'schema', {
            get: function() { return this.__prop_schema; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for View.schema, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_schema = value;
            },
            enumerable: true
        });

        Object.defineProperty(View.prototype, 'shortDescription', {
            get: function() { return this.__prop_shortDescription; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for View.shortDescription, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shortDescription = value;
            },
            enumerable: true
        });

        Object.defineProperty(View.prototype, 'longDescription', {
            get: function() { return this.__prop_longDescription; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for View.longDescription, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_longDescription = value;
            },
            enumerable: true
        });

        Object.defineProperty(View.prototype, 'cicProductCode', {
            get: function() { return this.__prop_cicProductCode; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for View.cicProductCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_cicProductCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(View.prototype, 'dataSetName', {
            get: function() { return this.__prop_dataSetName; },
            set: function(value) {
                if (!(value instanceof DataSetName || value === void 0)) {
                    try {
                        value = new DataSetName(value);
                    } catch (e) {
                        throw new TypeError('Error setting View.dataSetName: ' + e.message);
                    }
                }

                this.__prop_dataSetName = value;
            },
            enumerable: true
        });

        Object.defineProperty(View.prototype, 'lastChangeVersion', {
            get: function() { return this.__prop_lastChangeVersion; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for View.lastChangeVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastChangeVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(View.prototype, 'lastChangeReason', {
            get: function() { return this.__prop_lastChangeReason; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for View.lastChangeReason, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastChangeReason = value;
            },
            enumerable: true
        });

        Object.defineProperty(View.prototype, 'column', {
            get: function() { return this.__prop_column; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Column); }))) {
                    try {
                        value = value.map(function(item){ return new Column(item); });
                    } catch (e) {
                        throw new TypeError('Error setting View.column: ' + e.message);
                    }
                }

                this.__prop_column = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(View, '__type', { value: 'urn:inin.com:dataDictionary:view' });

    Object.defineProperty(View, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'dateTimeFilterColumn': { required: false, nullable: false },
                'siteIdFilterColumn': { required: false, nullable: false },
                'schema': { required: true, nullable: false },
                'shortDescription': { required: true, nullable: false },
                'longDescription': { required: true, nullable: false },
                'cicProductCode': { required: true, nullable: false },
                'dataSetName': { required: false, nullable: false },
                'lastChangeVersion': { required: false, nullable: false },
                'lastChangeReason': { required: false, nullable: false },
                'column': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:view'] = View;

    return View;
}());

var StoredProcedures = (function(){
    var hasProps = false;

    function StoredProcedures() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:storedProcedures' });
        }

        StoredProcedures._super.constructor.apply(this, arguments);
    }
    _util.inherits(StoredProcedures, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StoredProcedures.prototype, 'storedProcedureList', {
            get: function() { return this.__prop_storedProcedureList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StoredProcedure); }))) {
                    try {
                        value = value.map(function(item){ return new StoredProcedure(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StoredProcedures.storedProcedureList: ' + e.message);
                    }
                }

                this.__prop_storedProcedureList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StoredProcedures, '__type', { value: 'urn:inin.com:dataDictionary:storedProcedures' });

    Object.defineProperty(StoredProcedures, '__propInfo', {
        get: function() {
            var pi = {
                'storedProcedureList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:storedProcedures'] = StoredProcedures;

    return StoredProcedures;
}());

var StoredProcedure = (function(){
    var hasProps = false;

    function StoredProcedure() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:storedProcedure' });
        }

        StoredProcedure._super.constructor.apply(this, arguments);
    }
    _util.inherits(StoredProcedure, _util.DataContract);

    function defineProps() {
        Object.defineProperty(StoredProcedure.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StoredProcedure.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(StoredProcedure.prototype, 'dateTimeFilterColumn', {
            get: function() { return this.__prop_dateTimeFilterColumn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for StoredProcedure.dateTimeFilterColumn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dateTimeFilterColumn = value;
            },
            enumerable: true
        });

        Object.defineProperty(StoredProcedure.prototype, 'siteIdFilterColumn', {
            get: function() { return this.__prop_siteIdFilterColumn; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for StoredProcedure.siteIdFilterColumn, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_siteIdFilterColumn = value;
            },
            enumerable: true
        });

        Object.defineProperty(StoredProcedure.prototype, 'schema', {
            get: function() { return this.__prop_schema; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StoredProcedure.schema, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_schema = value;
            },
            enumerable: true
        });

        Object.defineProperty(StoredProcedure.prototype, 'lastChangeVersion', {
            get: function() { return this.__prop_lastChangeVersion; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StoredProcedure.lastChangeVersion, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastChangeVersion = value;
            },
            enumerable: true
        });

        Object.defineProperty(StoredProcedure.prototype, 'lastChangeReason', {
            get: function() { return this.__prop_lastChangeReason; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StoredProcedure.lastChangeReason, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_lastChangeReason = value;
            },
            enumerable: true
        });

        Object.defineProperty(StoredProcedure.prototype, 'shortDescription', {
            get: function() { return this.__prop_shortDescription; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StoredProcedure.shortDescription, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shortDescription = value;
            },
            enumerable: true
        });

        Object.defineProperty(StoredProcedure.prototype, 'longDescription', {
            get: function() { return this.__prop_longDescription; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for StoredProcedure.longDescription, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_longDescription = value;
            },
            enumerable: true
        });

        Object.defineProperty(StoredProcedure.prototype, 'cicProductCode', {
            get: function() { return this.__prop_cicProductCode; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StoredProcedure.cicProductCode, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_cicProductCode = value;
            },
            enumerable: true
        });

        Object.defineProperty(StoredProcedure.prototype, 'dataSetName', {
            get: function() { return this.__prop_dataSetName; },
            set: function(value) {
                if (!(value instanceof DataSetName || value === void 0)) {
                    try {
                        value = new DataSetName(value);
                    } catch (e) {
                        throw new TypeError('Error setting StoredProcedure.dataSetName: ' + e.message);
                    }
                }

                this.__prop_dataSetName = value;
            },
            enumerable: true
        });

        Object.defineProperty(StoredProcedure.prototype, 'containsPII', {
            get: function() { return this.__prop_containsPII; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for StoredProcedure.containsPII, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_containsPII = value;
            },
            enumerable: true
        });

        Object.defineProperty(StoredProcedure.prototype, 'parameters', {
            get: function() { return this.__prop_parameters; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Parameter); }) || value === void 0)) {
                    try {
                        value = value.map(function(item){ return new Parameter(item); });
                    } catch (e) {
                        throw new TypeError('Error setting StoredProcedure.parameters: ' + e.message);
                    }
                }

                this.__prop_parameters = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(StoredProcedure, '__type', { value: 'urn:inin.com:dataDictionary:storedProcedure' });

    Object.defineProperty(StoredProcedure, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'dateTimeFilterColumn': { required: false, nullable: false },
                'siteIdFilterColumn': { required: false, nullable: false },
                'schema': { required: true, nullable: false },
                'lastChangeVersion': { required: true, nullable: false },
                'lastChangeReason': { required: true, nullable: false },
                'shortDescription': { required: true, nullable: false },
                'longDescription': { required: false, nullable: false },
                'cicProductCode': { required: true, nullable: false },
                'dataSetName': { required: false, nullable: false },
                'containsPII': { required: true, nullable: false },
                'parameters': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:storedProcedure'] = StoredProcedure;

    return StoredProcedure;
}());

var Parameter = (function(){
    var hasProps = false;

    function Parameter() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:parameter' });
        }

        Parameter._super.constructor.apply(this, arguments);
    }
    _util.inherits(Parameter, _util.DataContract);

    function defineProps() {
        Object.defineProperty(Parameter.prototype, 'name', {
            get: function() { return this.__prop_name; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Parameter.name, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_name = value;
            },
            enumerable: true
        });

        Object.defineProperty(Parameter.prototype, 'parameterType', {
            get: function() { return this.__prop_parameterType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Parameter.parameterType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_parameterType = value;
            },
            enumerable: true
        });

        Object.defineProperty(Parameter.prototype, 'seqNo', {
            get: function() { return this.__prop_seqNo; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Parameter.seqNo, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_seqNo = value;
            },
            enumerable: true
        });

        Object.defineProperty(Parameter.prototype, 'dataType', {
            get: function() { return this.__prop_dataType; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Parameter.dataType, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_dataType = value;
            },
            enumerable: true
        });

        Object.defineProperty(Parameter.prototype, 'maxLength', {
            get: function() { return this.__prop_maxLength; },
            set: function(value) {
                if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                    throw new TypeError('Expected type Number (integer) for Parameter.maxLength, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_maxLength = value;
            },
            enumerable: true
        });

        Object.defineProperty(Parameter.prototype, 'encoding', {
            get: function() { return this.__prop_encoding; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Parameter.encoding, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_encoding = value;
            },
            enumerable: true
        });

        Object.defineProperty(Parameter.prototype, 'shortDescription', {
            get: function() { return this.__prop_shortDescription; },
            set: function(value) {
                if (!(_util.isString(value))) {
                    throw new TypeError('Expected type String for Parameter.shortDescription, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_shortDescription = value;
            },
            enumerable: true
        });

        Object.defineProperty(Parameter.prototype, 'longDescription', {
            get: function() { return this.__prop_longDescription; },
            set: function(value) {
                if (!(_util.isString(value) || value === void 0)) {
                    throw new TypeError('Expected type String for Parameter.longDescription, but got ' + _util.inspect(value) + '.');
                }

                this.__prop_longDescription = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(Parameter, '__type', { value: 'urn:inin.com:dataDictionary:parameter' });

    Object.defineProperty(Parameter, '__propInfo', {
        get: function() {
            var pi = {
                'name': { required: true, nullable: false },
                'parameterType': { required: true, nullable: false },
                'seqNo': { required: false, nullable: false },
                'dataType': { required: true, nullable: false },
                'maxLength': { required: false, nullable: false },
                'encoding': { required: true, nullable: false },
                'shortDescription': { required: true, nullable: false },
                'longDescription': { required: false, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:parameter'] = Parameter;

    return Parameter;
}());

var DataSetNames = (function(){
    var hasProps = false;

    function DataSetNames() {
        if (!hasProps) { defineProps(); }

        if (!_util.hasProp(this, '__type')) {
            Object.defineProperty(this, '__type', { value: 'urn:inin.com:dataDictionary:dataSetNames' });
        }

        DataSetNames._super.constructor.apply(this, arguments);
    }
    _util.inherits(DataSetNames, _util.DataContract);

    function defineProps() {
        Object.defineProperty(DataSetNames.prototype, 'dataSetNameList', {
            get: function() { return this.__prop_dataSetNameList; },
            set: function(value) {
                if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof DataSetName); }))) {
                    try {
                        value = value.map(function(item){ return new DataSetName(item); });
                    } catch (e) {
                        throw new TypeError('Error setting DataSetNames.dataSetNameList: ' + e.message);
                    }
                }

                this.__prop_dataSetNameList = value;
            },
            enumerable: true
        });

        hasProps = true;
    }

    Object.defineProperty(DataSetNames, '__type', { value: 'urn:inin.com:dataDictionary:dataSetNames' });

    Object.defineProperty(DataSetNames, '__propInfo', {
        get: function() {
            var pi = {
                'dataSetNameList': { required: true, nullable: false }
            };
            if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
            pi.__type = { required: false, nullable: false };
            return pi;
        }
    });

    _typemap['urn:inin.com:dataDictionary:dataSetNames'] = DataSetNames;

    return DataSetNames;
}());

var $dataDictionary = (function(){
    function getDictionary(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDictionary.params)) {
            try {
                params = new getDictionary.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDictionary.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Dictionary) ? o : new Dictionary(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDictionary.method, getDictionary.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDictionary, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/data-dictionary', enumerable: true }
    });

    getDictionary.params = (function(){
        _util.inherits(getDictionary_params, _util.RequestParams);

        function getDictionary_params(properties) {
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

            getDictionary_params._super.constructor.apply(this, arguments);
        }

        return getDictionary_params;
    })();

    return Object.create(null, {
        getDictionary: { value: getDictionary, enumerable: true }
    });
})();

var $tables = (function(){
    function getTables(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getTables.params)) {
            try {
                params = new getTables.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getTables.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Tables) ? o : new Tables(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getTables.method, getTables.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getTables, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/data-dictionary/tables', enumerable: true }
    });

    getTables.params = (function(){
        _util.inherits(getTables_params, _util.RequestParams);

        function getTables_params(properties) {
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

            getTables_params._super.constructor.apply(this, arguments);
        }

        return getTables_params;
    })();

    return Object.create(null, {
        getTables: { value: getTables, enumerable: true }
    });
})();

var $views = (function(){
    function getViews(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getViews.params)) {
            try {
                params = new getViews.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getViews.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof Views) ? o : new Views(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getViews.method, getViews.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getViews, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/data-dictionary/views', enumerable: true }
    });

    getViews.params = (function(){
        _util.inherits(getViews_params, _util.RequestParams);

        function getViews_params(properties) {
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

            getViews_params._super.constructor.apply(this, arguments);
        }

        return getViews_params;
    })();

    return Object.create(null, {
        getViews: { value: getViews, enumerable: true }
    });
})();

var $storedProcedures = (function(){
    function getStoredProcedures(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getStoredProcedures.params)) {
            try {
                params = new getStoredProcedures.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStoredProcedures.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof StoredProcedures) ? o : new StoredProcedures(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getStoredProcedures.method, getStoredProcedures.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getStoredProcedures, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/data-dictionary/stored-procedures', enumerable: true }
    });

    getStoredProcedures.params = (function(){
        _util.inherits(getStoredProcedures_params, _util.RequestParams);

        function getStoredProcedures_params(properties) {
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

            getStoredProcedures_params._super.constructor.apply(this, arguments);
        }

        return getStoredProcedures_params;
    })();

    return Object.create(null, {
        getStoredProcedures: { value: getStoredProcedures, enumerable: true }
    });
})();

var $dataSetNames = (function(){
    function getDataSetNames(params, callbacks) {
        var cb = callbacks || {};
        if (!(params instanceof getDataSetNames.params)) {
            try {
                params = new getDataSetNames.params(params);
            }
            catch (e) {
                throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDataSetNames.params');
            }
        }

        if (!_util.isObject(cb)) {
            throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
        }

        var dc = {};
        dc['200'] = function(o){ return (o instanceof DataSetNames) ? o : new DataSetNames(o); };
        dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

        return _util.xhr(getDataSetNames.method, getDataSetNames.urlTemplate, params, dc, cb);
    }

    Object.defineProperties(getDataSetNames, {
        'method': { value: 'GET', enumerable: true },
        'urlTemplate': { value: '/icws/{sessionId}/data-dictionary/data-set-names', enumerable: true }
    });

    getDataSetNames.params = (function(){
        _util.inherits(getDataSetNames_params, _util.RequestParams);

        function getDataSetNames_params(properties) {
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

            getDataSetNames_params._super.constructor.apply(this, arguments);
        }

        return getDataSetNames_params;
    })();

    return Object.create(null, {
        getDataSetNames: { value: getDataSetNames, enumerable: true }
    });
})();

exports.Dictionary = Dictionary;
exports.Tables = Tables;
exports.Table = Table;
exports.Column = Column;
exports.PrimaryKey = PrimaryKey;
exports.PrimaryKeyColumn = PrimaryKeyColumn;
exports.ForeignKey = ForeignKey;
exports.Feature = Feature;
exports.DataSetName = DataSetName;
exports.Index = Index;
exports.IndexColumn = IndexColumn;
exports.IncludedColumn = IncludedColumn;
exports.Views = Views;
exports.View = View;
exports.StoredProcedures = StoredProcedures;
exports.StoredProcedure = StoredProcedure;
exports.Parameter = Parameter;
exports.DataSetNames = DataSetNames;
exports.$dataDictionary = $dataDictionary;
exports.$tables = $tables;
exports.$views = $views;
exports.$storedProcedures = $storedProcedures;
exports.$dataSetNames = $dataSetNames;
