// powerbi-models v1.14.0
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["powerbi-models"] = factory();
	else
		root["powerbi-models"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextAlignment = exports.CommonErrorCodes = exports.BookmarksPlayMode = exports.ExportDataType = exports.QnaMode = exports.PageNavigationPosition = exports.BrowserPrintAdjustmentsMode = exports.AggregateFunction = exports.DataCacheMode = exports.CredentialType = exports.isPercentOfGrandTotal = exports.isColumnAggr = exports.isHierarchyLevelAggr = exports.isHierarchyLevel = exports.isColumn = exports.isMeasure = exports.getFilterType = exports.isBasicFilterWithKeys = exports.isFilterKeyColumnsTarget = exports.HierarchyFilter = exports.AdvancedFilter = exports.TupleFilter = exports.IdentityFilter = exports.BasicFilterWithKeys = exports.BasicFilter = exports.RelativeTimeFilter = exports.RelativeDateFilter = exports.TopNFilter = exports.IncludeExcludeFilter = exports.NotSupportedFilter = exports.Filter = exports.RelativeDateOperators = exports.RelativeDateFilterTimeUnit = exports.FilterType = exports.FiltersLevel = exports.FiltersOperations = exports.MenuLocation = exports.ContrastMode = exports.TokenType = exports.ViewMode = exports.Permissions = exports.SectionVisibility = exports.ReportAlignment = exports.HyperlinkClickBehavior = exports.LayoutType = exports.VisualContainerDisplayMode = exports.BackgroundType = exports.DisplayOption = exports.PageSizeType = exports.TraceType = void 0;
exports.validateVisualHeader = exports.validateExportDataRequest = exports.validateQnaInterpretInputData = exports.validateLoadQnaConfiguration = exports.validateSaveAsParameters = exports.validateUpdateFiltersRequest = exports.validateFilter = exports.validatePage = exports.validateTileLoad = exports.validateDashboardLoad = exports.validateQuickCreate = exports.validateCreateReport = exports.validatePaginatedReportLoad = exports.validateReportLoad = exports.validateMenuGroupExtension = exports.validateExtension = exports.validateCustomPageSize = exports.validateVisualizationsPane = exports.validateSyncSlicersPane = exports.validateSelectionPane = exports.validatePageNavigationPane = exports.validateFieldsPane = exports.validateFiltersPane = exports.validateBookmarksPane = exports.validatePanes = exports.validateSettings = exports.validateCaptureBookmarkRequest = exports.validateApplyBookmarkStateRequest = exports.validateApplyBookmarkByNameRequest = exports.validateAddBookmarkRequest = exports.validatePlayBookmarkRequest = exports.validateSlicerState = exports.validateSlicer = exports.validateVisualSelector = exports.isIExtensionArray = exports.isIExtensions = exports.isGroupedMenuExtension = exports.isFlatMenuExtension = exports.isReportFiltersArray = exports.isOnLoadFilters = exports.VisualDataRoleKindPreference = exports.VisualDataRoleKind = exports.CommandDisplayOption = exports.SlicerTargetSelector = exports.VisualTypeSelector = exports.VisualSelector = exports.PageSelector = exports.Selector = exports.SortDirection = exports.LegendPosition = void 0;
exports.validatePrintSettings = exports.validateZoomLevel = exports.validateCustomTheme = exports.validateCommandsSettings = exports.validateVisualSettings = void 0;
var validator_1 = __webpack_require__(1);
var TraceType;
(function (TraceType) {
    TraceType[TraceType["Information"] = 0] = "Information";
    TraceType[TraceType["Verbose"] = 1] = "Verbose";
    TraceType[TraceType["Warning"] = 2] = "Warning";
    TraceType[TraceType["Error"] = 3] = "Error";
    TraceType[TraceType["ExpectedError"] = 4] = "ExpectedError";
    TraceType[TraceType["UnexpectedError"] = 5] = "UnexpectedError";
    TraceType[TraceType["Fatal"] = 6] = "Fatal";
})(TraceType = exports.TraceType || (exports.TraceType = {}));
var PageSizeType;
(function (PageSizeType) {
    PageSizeType[PageSizeType["Widescreen"] = 0] = "Widescreen";
    PageSizeType[PageSizeType["Standard"] = 1] = "Standard";
    PageSizeType[PageSizeType["Cortana"] = 2] = "Cortana";
    PageSizeType[PageSizeType["Letter"] = 3] = "Letter";
    PageSizeType[PageSizeType["Custom"] = 4] = "Custom";
    PageSizeType[PageSizeType["Mobile"] = 5] = "Mobile";
})(PageSizeType = exports.PageSizeType || (exports.PageSizeType = {}));
var DisplayOption;
(function (DisplayOption) {
    DisplayOption[DisplayOption["FitToPage"] = 0] = "FitToPage";
    DisplayOption[DisplayOption["FitToWidth"] = 1] = "FitToWidth";
    DisplayOption[DisplayOption["ActualSize"] = 2] = "ActualSize";
})(DisplayOption = exports.DisplayOption || (exports.DisplayOption = {}));
var BackgroundType;
(function (BackgroundType) {
    BackgroundType[BackgroundType["Default"] = 0] = "Default";
    BackgroundType[BackgroundType["Transparent"] = 1] = "Transparent";
})(BackgroundType = exports.BackgroundType || (exports.BackgroundType = {}));
var VisualContainerDisplayMode;
(function (VisualContainerDisplayMode) {
    VisualContainerDisplayMode[VisualContainerDisplayMode["Visible"] = 0] = "Visible";
    VisualContainerDisplayMode[VisualContainerDisplayMode["Hidden"] = 1] = "Hidden";
})(VisualContainerDisplayMode = exports.VisualContainerDisplayMode || (exports.VisualContainerDisplayMode = {}));
var LayoutType;
(function (LayoutType) {
    LayoutType[LayoutType["Master"] = 0] = "Master";
    LayoutType[LayoutType["Custom"] = 1] = "Custom";
    LayoutType[LayoutType["MobilePortrait"] = 2] = "MobilePortrait";
    LayoutType[LayoutType["MobileLandscape"] = 3] = "MobileLandscape";
})(LayoutType = exports.LayoutType || (exports.LayoutType = {}));
var HyperlinkClickBehavior;
(function (HyperlinkClickBehavior) {
    HyperlinkClickBehavior[HyperlinkClickBehavior["Navigate"] = 0] = "Navigate";
    HyperlinkClickBehavior[HyperlinkClickBehavior["NavigateAndRaiseEvent"] = 1] = "NavigateAndRaiseEvent";
    HyperlinkClickBehavior[HyperlinkClickBehavior["RaiseEvent"] = 2] = "RaiseEvent";
})(HyperlinkClickBehavior = exports.HyperlinkClickBehavior || (exports.HyperlinkClickBehavior = {}));
var ReportAlignment;
(function (ReportAlignment) {
    ReportAlignment[ReportAlignment["Left"] = 0] = "Left";
    ReportAlignment[ReportAlignment["Center"] = 1] = "Center";
    ReportAlignment[ReportAlignment["Right"] = 2] = "Right";
    ReportAlignment[ReportAlignment["None"] = 3] = "None";
})(ReportAlignment = exports.ReportAlignment || (exports.ReportAlignment = {}));
var SectionVisibility;
(function (SectionVisibility) {
    SectionVisibility[SectionVisibility["AlwaysVisible"] = 0] = "AlwaysVisible";
    SectionVisibility[SectionVisibility["HiddenInViewMode"] = 1] = "HiddenInViewMode";
})(SectionVisibility = exports.SectionVisibility || (exports.SectionVisibility = {}));
var Permissions;
(function (Permissions) {
    Permissions[Permissions["Read"] = 0] = "Read";
    Permissions[Permissions["ReadWrite"] = 1] = "ReadWrite";
    Permissions[Permissions["Copy"] = 2] = "Copy";
    Permissions[Permissions["Create"] = 4] = "Create";
    Permissions[Permissions["All"] = 7] = "All";
})(Permissions = exports.Permissions || (exports.Permissions = {}));
var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["View"] = 0] = "View";
    ViewMode[ViewMode["Edit"] = 1] = "Edit";
})(ViewMode = exports.ViewMode || (exports.ViewMode = {}));
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Aad"] = 0] = "Aad";
    TokenType[TokenType["Embed"] = 1] = "Embed";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
var ContrastMode;
(function (ContrastMode) {
    ContrastMode[ContrastMode["None"] = 0] = "None";
    ContrastMode[ContrastMode["HighContrast1"] = 1] = "HighContrast1";
    ContrastMode[ContrastMode["HighContrast2"] = 2] = "HighContrast2";
    ContrastMode[ContrastMode["HighContrastBlack"] = 3] = "HighContrastBlack";
    ContrastMode[ContrastMode["HighContrastWhite"] = 4] = "HighContrastWhite";
})(ContrastMode = exports.ContrastMode || (exports.ContrastMode = {}));
var MenuLocation;
(function (MenuLocation) {
    MenuLocation[MenuLocation["Bottom"] = 0] = "Bottom";
    MenuLocation[MenuLocation["Top"] = 1] = "Top";
})(MenuLocation = exports.MenuLocation || (exports.MenuLocation = {}));
var FiltersOperations;
(function (FiltersOperations) {
    FiltersOperations[FiltersOperations["RemoveAll"] = 0] = "RemoveAll";
    FiltersOperations[FiltersOperations["ReplaceAll"] = 1] = "ReplaceAll";
    FiltersOperations[FiltersOperations["Add"] = 2] = "Add";
    FiltersOperations[FiltersOperations["Replace"] = 3] = "Replace";
})(FiltersOperations = exports.FiltersOperations || (exports.FiltersOperations = {}));
var FiltersLevel;
(function (FiltersLevel) {
    FiltersLevel[FiltersLevel["Report"] = 0] = "Report";
    FiltersLevel[FiltersLevel["Page"] = 1] = "Page";
    FiltersLevel[FiltersLevel["Visual"] = 2] = "Visual";
})(FiltersLevel = exports.FiltersLevel || (exports.FiltersLevel = {}));
var FilterType;
(function (FilterType) {
    FilterType[FilterType["Advanced"] = 0] = "Advanced";
    FilterType[FilterType["Basic"] = 1] = "Basic";
    FilterType[FilterType["Unknown"] = 2] = "Unknown";
    FilterType[FilterType["IncludeExclude"] = 3] = "IncludeExclude";
    FilterType[FilterType["RelativeDate"] = 4] = "RelativeDate";
    FilterType[FilterType["TopN"] = 5] = "TopN";
    FilterType[FilterType["Tuple"] = 6] = "Tuple";
    FilterType[FilterType["RelativeTime"] = 7] = "RelativeTime";
    FilterType[FilterType["Identity"] = 8] = "Identity";
    FilterType[FilterType["Hierarchy"] = 9] = "Hierarchy";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
var RelativeDateFilterTimeUnit;
(function (RelativeDateFilterTimeUnit) {
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Days"] = 0] = "Days";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Weeks"] = 1] = "Weeks";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["CalendarWeeks"] = 2] = "CalendarWeeks";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Months"] = 3] = "Months";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["CalendarMonths"] = 4] = "CalendarMonths";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Years"] = 5] = "Years";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["CalendarYears"] = 6] = "CalendarYears";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Minutes"] = 7] = "Minutes";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Hours"] = 8] = "Hours";
})(RelativeDateFilterTimeUnit = exports.RelativeDateFilterTimeUnit || (exports.RelativeDateFilterTimeUnit = {}));
var RelativeDateOperators;
(function (RelativeDateOperators) {
    RelativeDateOperators[RelativeDateOperators["InLast"] = 0] = "InLast";
    RelativeDateOperators[RelativeDateOperators["InThis"] = 1] = "InThis";
    RelativeDateOperators[RelativeDateOperators["InNext"] = 2] = "InNext";
})(RelativeDateOperators = exports.RelativeDateOperators || (exports.RelativeDateOperators = {}));
var Filter = /** @class */ (function () {
    function Filter(target, filterType) {
        this.target = target;
        this.filterType = filterType;
    }
    Filter.prototype.toJSON = function () {
        var filter = {
            $schema: this.schemaUrl,
            target: this.target,
            filterType: this.filterType
        };
        // Add displaySettings only when defined
        if (this.displaySettings !== undefined) {
            filter.displaySettings = this.displaySettings;
        }
        return filter;
    };
    return Filter;
}());
exports.Filter = Filter;
var NotSupportedFilter = /** @class */ (function (_super) {
    __extends(NotSupportedFilter, _super);
    function NotSupportedFilter(target, message, notSupportedTypeName) {
        var _this = _super.call(this, target, FilterType.Unknown) || this;
        _this.message = message;
        _this.notSupportedTypeName = notSupportedTypeName;
        _this.schemaUrl = NotSupportedFilter.schemaUrl;
        return _this;
    }
    NotSupportedFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.message = this.message;
        filter.notSupportedTypeName = this.notSupportedTypeName;
        return filter;
    };
    NotSupportedFilter.schemaUrl = "http://powerbi.com/product/schema#notSupported";
    return NotSupportedFilter;
}(Filter));
exports.NotSupportedFilter = NotSupportedFilter;
var IncludeExcludeFilter = /** @class */ (function (_super) {
    __extends(IncludeExcludeFilter, _super);
    function IncludeExcludeFilter(target, isExclude, values) {
        var _this = _super.call(this, target, FilterType.IncludeExclude) || this;
        _this.values = values;
        _this.isExclude = isExclude;
        _this.schemaUrl = IncludeExcludeFilter.schemaUrl;
        return _this;
    }
    IncludeExcludeFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.isExclude = this.isExclude;
        filter.values = this.values;
        return filter;
    };
    IncludeExcludeFilter.schemaUrl = "http://powerbi.com/product/schema#includeExclude";
    return IncludeExcludeFilter;
}(Filter));
exports.IncludeExcludeFilter = IncludeExcludeFilter;
var TopNFilter = /** @class */ (function (_super) {
    __extends(TopNFilter, _super);
    function TopNFilter(target, operator, itemCount, orderBy) {
        var _this = _super.call(this, target, FilterType.TopN) || this;
        _this.operator = operator;
        _this.itemCount = itemCount;
        _this.schemaUrl = TopNFilter.schemaUrl;
        _this.orderBy = orderBy;
        return _this;
    }
    TopNFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.operator = this.operator;
        filter.itemCount = this.itemCount;
        filter.orderBy = this.orderBy;
        return filter;
    };
    TopNFilter.schemaUrl = "http://powerbi.com/product/schema#topN";
    return TopNFilter;
}(Filter));
exports.TopNFilter = TopNFilter;
var RelativeDateFilter = /** @class */ (function (_super) {
    __extends(RelativeDateFilter, _super);
    function RelativeDateFilter(target, operator, timeUnitsCount, timeUnitType, includeToday) {
        var _this = _super.call(this, target, FilterType.RelativeDate) || this;
        _this.operator = operator;
        _this.timeUnitsCount = timeUnitsCount;
        _this.timeUnitType = timeUnitType;
        _this.includeToday = includeToday;
        _this.schemaUrl = RelativeDateFilter.schemaUrl;
        return _this;
    }
    RelativeDateFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.operator = this.operator;
        filter.timeUnitsCount = this.timeUnitsCount;
        filter.timeUnitType = this.timeUnitType;
        filter.includeToday = this.includeToday;
        return filter;
    };
    RelativeDateFilter.schemaUrl = "http://powerbi.com/product/schema#relativeDate";
    return RelativeDateFilter;
}(Filter));
exports.RelativeDateFilter = RelativeDateFilter;
var RelativeTimeFilter = /** @class */ (function (_super) {
    __extends(RelativeTimeFilter, _super);
    function RelativeTimeFilter(target, operator, timeUnitsCount, timeUnitType) {
        var _this = _super.call(this, target, FilterType.RelativeTime) || this;
        _this.operator = operator;
        _this.timeUnitsCount = timeUnitsCount;
        _this.timeUnitType = timeUnitType;
        _this.schemaUrl = RelativeTimeFilter.schemaUrl;
        return _this;
    }
    RelativeTimeFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.operator = this.operator;
        filter.timeUnitsCount = this.timeUnitsCount;
        filter.timeUnitType = this.timeUnitType;
        return filter;
    };
    RelativeTimeFilter.schemaUrl = "http://powerbi.com/product/schema#relativeTime";
    return RelativeTimeFilter;
}(Filter));
exports.RelativeTimeFilter = RelativeTimeFilter;
var BasicFilter = /** @class */ (function (_super) {
    __extends(BasicFilter, _super);
    function BasicFilter(target, operator) {
        var values = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            values[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this, target, FilterType.Basic) || this;
        _this.operator = operator;
        _this.schemaUrl = BasicFilter.schemaUrl;
        if (values.length === 0 && operator !== "All") {
            throw new Error("values must be a non-empty array unless your operator is \"All\".");
        }
        /**
         * Accept values as array instead of as individual arguments
         * new BasicFilter('a', 'b', 1, 2);
         * new BasicFilter('a', 'b', [1,2]);
         */
        if (Array.isArray(values[0])) {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            _this.values = values[0];
        }
        else {
            _this.values = values;
        }
        return _this;
    }
    BasicFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.operator = this.operator;
        filter.values = this.values;
        filter.requireSingleSelection = !!this.requireSingleSelection;
        return filter;
    };
    BasicFilter.schemaUrl = "http://powerbi.com/product/schema#basic";
    return BasicFilter;
}(Filter));
exports.BasicFilter = BasicFilter;
var BasicFilterWithKeys = /** @class */ (function (_super) {
    __extends(BasicFilterWithKeys, _super);
    function BasicFilterWithKeys(target, operator, values, keyValues) {
        var _this = _super.call(this, target, operator, values) || this;
        _this.keyValues = keyValues;
        _this.target = target;
        var numberOfKeys = target.keys ? target.keys.length : 0;
        if (numberOfKeys > 0 && !keyValues) {
            throw new Error("You should pass the values to be filtered for each key. You passed: no values and ".concat(numberOfKeys, " keys"));
        }
        if (numberOfKeys === 0 && keyValues && keyValues.length > 0) {
            throw new Error("You passed key values but your target object doesn't contain the keys to be filtered");
        }
        for (var _i = 0, _a = _this.keyValues; _i < _a.length; _i++) {
            var keyValue = _a[_i];
            if (keyValue) {
                var lengthOfArray = keyValue.length;
                if (lengthOfArray !== numberOfKeys) {
                    throw new Error("Each tuple of key values should contain a value for each of the keys. You passed: ".concat(lengthOfArray, " values and ").concat(numberOfKeys, " keys"));
                }
            }
        }
        return _this;
    }
    BasicFilterWithKeys.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.keyValues = this.keyValues;
        return filter;
    };
    return BasicFilterWithKeys;
}(BasicFilter));
exports.BasicFilterWithKeys = BasicFilterWithKeys;
var IdentityFilter = /** @class */ (function (_super) {
    __extends(IdentityFilter, _super);
    function IdentityFilter(target, operator) {
        var _this = _super.call(this, target, FilterType.Identity) || this;
        _this.operator = operator;
        _this.schemaUrl = IdentityFilter.schemaUrl;
        return _this;
    }
    IdentityFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.operator = this.operator;
        filter.target = this.target;
        return filter;
    };
    IdentityFilter.schemaUrl = "http://powerbi.com/product/schema#identity";
    return IdentityFilter;
}(Filter));
exports.IdentityFilter = IdentityFilter;
var TupleFilter = /** @class */ (function (_super) {
    __extends(TupleFilter, _super);
    function TupleFilter(target, operator, values) {
        var _this = _super.call(this, target, FilterType.Tuple) || this;
        _this.operator = operator;
        _this.schemaUrl = TupleFilter.schemaUrl;
        _this.values = values;
        return _this;
    }
    TupleFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.operator = this.operator;
        filter.values = this.values;
        filter.target = this.target;
        return filter;
    };
    TupleFilter.schemaUrl = "http://powerbi.com/product/schema#tuple";
    return TupleFilter;
}(Filter));
exports.TupleFilter = TupleFilter;
var AdvancedFilter = /** @class */ (function (_super) {
    __extends(AdvancedFilter, _super);
    function AdvancedFilter(target, logicalOperator) {
        var conditions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            conditions[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this, target, FilterType.Advanced) || this;
        _this.schemaUrl = AdvancedFilter.schemaUrl;
        // Guard statements
        if (typeof logicalOperator !== "string" || logicalOperator.length === 0) {
            // TODO: It would be nicer to list out the possible logical operators.
            throw new Error("logicalOperator must be a valid operator, You passed: ".concat(logicalOperator));
        }
        _this.logicalOperator = logicalOperator;
        var extractedConditions;
        /**
         * Accept conditions as array instead of as individual arguments
         * new AdvancedFilter('a', 'b', "And", { value: 1, operator: "Equals" }, { value: 2, operator: "IsGreaterThan" });
         * new AdvancedFilter('a', 'b', "And", [{ value: 1, operator: "Equals" }, { value: 2, operator: "IsGreaterThan" }]);
         */
        if (Array.isArray(conditions[0])) {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            extractedConditions = conditions[0];
        }
        else {
            extractedConditions = conditions;
        }
        if (extractedConditions.length > 2) {
            throw new Error("AdvancedFilters may not have more than two conditions. You passed: ".concat(conditions.length));
        }
        if (extractedConditions.length === 1 && logicalOperator !== "And") {
            throw new Error("Logical Operator must be \"And\" when there is only one condition provided");
        }
        _this.conditions = extractedConditions;
        return _this;
    }
    AdvancedFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.logicalOperator = this.logicalOperator;
        filter.conditions = this.conditions;
        return filter;
    };
    AdvancedFilter.schemaUrl = "http://powerbi.com/product/schema#advanced";
    return AdvancedFilter;
}(Filter));
exports.AdvancedFilter = AdvancedFilter;
var HierarchyFilter = /** @class */ (function (_super) {
    __extends(HierarchyFilter, _super);
    function HierarchyFilter(target, hierarchyData) {
        var _this = _super.call(this, target, FilterType.Hierarchy) || this;
        _this.schemaUrl = HierarchyFilter.schemaUrl;
        _this.hierarchyData = hierarchyData;
        return _this;
    }
    HierarchyFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.hierarchyData = this.hierarchyData;
        filter.target = this.target;
        return filter;
    };
    HierarchyFilter.schemaUrl = "http://powerbi.com/product/schema#hierarchy";
    return HierarchyFilter;
}(Filter));
exports.HierarchyFilter = HierarchyFilter;
function isFilterKeyColumnsTarget(target) {
    return isColumn(target) && !!target.keys;
}
exports.isFilterKeyColumnsTarget = isFilterKeyColumnsTarget;
function isBasicFilterWithKeys(filter) {
    return getFilterType(filter) === FilterType.Basic && !!filter.keyValues;
}
exports.isBasicFilterWithKeys = isBasicFilterWithKeys;
function getFilterType(filter) {
    if (filter.filterType) {
        return filter.filterType;
    }
    var basicFilter = filter;
    var advancedFilter = filter;
    if ((typeof basicFilter.operator === "string")
        && (Array.isArray(basicFilter.values))) {
        return FilterType.Basic;
    }
    else if ((typeof advancedFilter.logicalOperator === "string")
        && (Array.isArray(advancedFilter.conditions))) {
        return FilterType.Advanced;
    }
    else {
        return FilterType.Unknown;
    }
}
exports.getFilterType = getFilterType;
function isMeasure(arg) {
    return arg.table !== undefined && arg.measure !== undefined;
}
exports.isMeasure = isMeasure;
function isColumn(arg) {
    return !!(arg.table && arg.column && !arg.aggregationFunction);
}
exports.isColumn = isColumn;
function isHierarchyLevel(arg) {
    return !!(arg.table && arg.hierarchy && arg.hierarchyLevel && !arg.aggregationFunction);
}
exports.isHierarchyLevel = isHierarchyLevel;
function isHierarchyLevelAggr(arg) {
    return !!(arg.table && arg.hierarchy && arg.hierarchyLevel && arg.aggregationFunction);
}
exports.isHierarchyLevelAggr = isHierarchyLevelAggr;
function isColumnAggr(arg) {
    return !!(arg.table && arg.column && arg.aggregationFunction);
}
exports.isColumnAggr = isColumnAggr;
function isPercentOfGrandTotal(arg) {
    return !!arg.percentOfGrandTotal;
}
exports.isPercentOfGrandTotal = isPercentOfGrandTotal;
var CredentialType;
(function (CredentialType) {
    CredentialType[CredentialType["NoConnection"] = 0] = "NoConnection";
    CredentialType[CredentialType["OnBehalfOf"] = 1] = "OnBehalfOf";
    CredentialType[CredentialType["Anonymous"] = 2] = "Anonymous";
})(CredentialType = exports.CredentialType || (exports.CredentialType = {}));
var DataCacheMode;
(function (DataCacheMode) {
    DataCacheMode[DataCacheMode["Import"] = 0] = "Import";
    DataCacheMode[DataCacheMode["DirectQuery"] = 1] = "DirectQuery";
})(DataCacheMode = exports.DataCacheMode || (exports.DataCacheMode = {}));
var AggregateFunction;
(function (AggregateFunction) {
    AggregateFunction[AggregateFunction["Default"] = 1] = "Default";
    AggregateFunction[AggregateFunction["None"] = 2] = "None";
    AggregateFunction[AggregateFunction["Sum"] = 3] = "Sum";
    AggregateFunction[AggregateFunction["Min"] = 4] = "Min";
    AggregateFunction[AggregateFunction["Max"] = 5] = "Max";
    AggregateFunction[AggregateFunction["Count"] = 6] = "Count";
    AggregateFunction[AggregateFunction["Average"] = 7] = "Average";
    AggregateFunction[AggregateFunction["DistinctCount"] = 8] = "DistinctCount";
})(AggregateFunction = exports.AggregateFunction || (exports.AggregateFunction = {}));
var BrowserPrintAdjustmentsMode;
(function (BrowserPrintAdjustmentsMode) {
    BrowserPrintAdjustmentsMode[BrowserPrintAdjustmentsMode["Default"] = 0] = "Default";
    BrowserPrintAdjustmentsMode[BrowserPrintAdjustmentsMode["NoAdjustments"] = 1] = "NoAdjustments";
})(BrowserPrintAdjustmentsMode = exports.BrowserPrintAdjustmentsMode || (exports.BrowserPrintAdjustmentsMode = {}));
var PageNavigationPosition;
(function (PageNavigationPosition) {
    PageNavigationPosition[PageNavigationPosition["Bottom"] = 0] = "Bottom";
    PageNavigationPosition[PageNavigationPosition["Left"] = 1] = "Left";
})(PageNavigationPosition = exports.PageNavigationPosition || (exports.PageNavigationPosition = {}));
var QnaMode;
(function (QnaMode) {
    QnaMode[QnaMode["Interactive"] = 0] = "Interactive";
    QnaMode[QnaMode["ResultOnly"] = 1] = "ResultOnly";
})(QnaMode = exports.QnaMode || (exports.QnaMode = {}));
var ExportDataType;
(function (ExportDataType) {
    ExportDataType[ExportDataType["Summarized"] = 0] = "Summarized";
    ExportDataType[ExportDataType["Underlying"] = 1] = "Underlying";
})(ExportDataType = exports.ExportDataType || (exports.ExportDataType = {}));
var BookmarksPlayMode;
(function (BookmarksPlayMode) {
    BookmarksPlayMode[BookmarksPlayMode["Off"] = 0] = "Off";
    BookmarksPlayMode[BookmarksPlayMode["Presentation"] = 1] = "Presentation";
})(BookmarksPlayMode = exports.BookmarksPlayMode || (exports.BookmarksPlayMode = {}));
// This is not an enum because enum strings require
// us to upgrade typeScript version and change SDK build definition
exports.CommonErrorCodes = {
    TokenExpired: 'TokenExpired',
    NotFound: 'PowerBIEntityNotFound',
    InvalidParameters: 'Invalid parameters',
    LoadReportFailed: 'LoadReportFailed',
    NotAuthorized: 'PowerBINotAuthorizedException',
    FailedToLoadModel: 'ExplorationContainer_FailedToLoadModel_DefaultDetails',
};
exports.TextAlignment = {
    Left: 'left',
    Center: 'center',
    Right: 'right',
};
exports.LegendPosition = {
    Top: 'Top',
    Bottom: 'Bottom',
    Right: 'Right',
    Left: 'Left',
    TopCenter: 'TopCenter',
    BottomCenter: 'BottomCenter',
    RightCenter: 'RightCenter',
    LeftCenter: 'LeftCenter',
};
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["Ascending"] = 1] = "Ascending";
    SortDirection[SortDirection["Descending"] = 2] = "Descending";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
var Selector = /** @class */ (function () {
    function Selector(schema) {
        this.$schema = schema;
    }
    Selector.prototype.toJSON = function () {
        return {
            $schema: this.$schema
        };
    };
    return Selector;
}());
exports.Selector = Selector;
var PageSelector = /** @class */ (function (_super) {
    __extends(PageSelector, _super);
    function PageSelector(pageName) {
        var _this = _super.call(this, PageSelector.schemaUrl) || this;
        _this.pageName = pageName;
        return _this;
    }
    PageSelector.prototype.toJSON = function () {
        var selector = _super.prototype.toJSON.call(this);
        selector.pageName = this.pageName;
        return selector;
    };
    PageSelector.schemaUrl = "http://powerbi.com/product/schema#pageSelector";
    return PageSelector;
}(Selector));
exports.PageSelector = PageSelector;
var VisualSelector = /** @class */ (function (_super) {
    __extends(VisualSelector, _super);
    function VisualSelector(visualName) {
        var _this = _super.call(this, VisualSelector.schemaUrl) || this;
        _this.visualName = visualName;
        return _this;
    }
    VisualSelector.prototype.toJSON = function () {
        var selector = _super.prototype.toJSON.call(this);
        selector.visualName = this.visualName;
        return selector;
    };
    VisualSelector.schemaUrl = "http://powerbi.com/product/schema#visualSelector";
    return VisualSelector;
}(Selector));
exports.VisualSelector = VisualSelector;
var VisualTypeSelector = /** @class */ (function (_super) {
    __extends(VisualTypeSelector, _super);
    function VisualTypeSelector(visualType) {
        var _this = _super.call(this, VisualSelector.schemaUrl) || this;
        _this.visualType = visualType;
        return _this;
    }
    VisualTypeSelector.prototype.toJSON = function () {
        var selector = _super.prototype.toJSON.call(this);
        selector.visualType = this.visualType;
        return selector;
    };
    VisualTypeSelector.schemaUrl = "http://powerbi.com/product/schema#visualTypeSelector";
    return VisualTypeSelector;
}(Selector));
exports.VisualTypeSelector = VisualTypeSelector;
var SlicerTargetSelector = /** @class */ (function (_super) {
    __extends(SlicerTargetSelector, _super);
    function SlicerTargetSelector(target) {
        var _this = _super.call(this, VisualSelector.schemaUrl) || this;
        _this.target = target;
        return _this;
    }
    SlicerTargetSelector.prototype.toJSON = function () {
        var selector = _super.prototype.toJSON.call(this);
        selector.target = this.target;
        return selector;
    };
    SlicerTargetSelector.schemaUrl = "http://powerbi.com/product/schema#slicerTargetSelector";
    return SlicerTargetSelector;
}(Selector));
exports.SlicerTargetSelector = SlicerTargetSelector;
var CommandDisplayOption;
(function (CommandDisplayOption) {
    CommandDisplayOption[CommandDisplayOption["Enabled"] = 0] = "Enabled";
    CommandDisplayOption[CommandDisplayOption["Disabled"] = 1] = "Disabled";
    CommandDisplayOption[CommandDisplayOption["Hidden"] = 2] = "Hidden";
})(CommandDisplayOption = exports.CommandDisplayOption || (exports.CommandDisplayOption = {}));
/*
 * Visual CRUD
 */
var VisualDataRoleKind;
(function (VisualDataRoleKind) {
    // Indicates that the role should be bound to something that evaluates to a grouping of values.
    VisualDataRoleKind[VisualDataRoleKind["Grouping"] = 0] = "Grouping";
    // Indicates that the role should be bound to something that evaluates to a single value in a scope.
    VisualDataRoleKind[VisualDataRoleKind["Measure"] = 1] = "Measure";
    // Indicates that the role can be bound to either Grouping or Measure.
    VisualDataRoleKind[VisualDataRoleKind["GroupingOrMeasure"] = 2] = "GroupingOrMeasure";
})(VisualDataRoleKind = exports.VisualDataRoleKind || (exports.VisualDataRoleKind = {}));
// Indicates the visual preference on Grouping or Measure. Only applicable if kind is GroupingOrMeasure.
var VisualDataRoleKindPreference;
(function (VisualDataRoleKindPreference) {
    VisualDataRoleKindPreference[VisualDataRoleKindPreference["Measure"] = 0] = "Measure";
    VisualDataRoleKindPreference[VisualDataRoleKindPreference["Grouping"] = 1] = "Grouping";
})(VisualDataRoleKindPreference = exports.VisualDataRoleKindPreference || (exports.VisualDataRoleKindPreference = {}));
function isOnLoadFilters(filters) {
    return filters && !isReportFiltersArray(filters);
}
exports.isOnLoadFilters = isOnLoadFilters;
function isReportFiltersArray(filters) {
    return Array.isArray(filters);
}
exports.isReportFiltersArray = isReportFiltersArray;
function isFlatMenuExtension(menuExtension) {
    return menuExtension && !isGroupedMenuExtension(menuExtension);
}
exports.isFlatMenuExtension = isFlatMenuExtension;
function isGroupedMenuExtension(menuExtension) {
    return menuExtension && !!menuExtension.groupName;
}
exports.isGroupedMenuExtension = isGroupedMenuExtension;
function isIExtensions(extensions) {
    return extensions && !isIExtensionArray(extensions);
}
exports.isIExtensions = isIExtensions;
function isIExtensionArray(extensions) {
    return Array.isArray(extensions);
}
exports.isIExtensionArray = isIExtensionArray;
function normalizeError(error) {
    var message = error.message;
    if (!message) {
        message = "".concat(error.path, " is invalid. Not meeting ").concat(error.keyword, " constraint");
    }
    return {
        message: message
    };
}
function validateVisualSelector(input) {
    var errors = validator_1.Validators.visualSelectorValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateVisualSelector = validateVisualSelector;
function validateSlicer(input) {
    var errors = validator_1.Validators.slicerValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateSlicer = validateSlicer;
function validateSlicerState(input) {
    var errors = validator_1.Validators.slicerStateValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateSlicerState = validateSlicerState;
function validatePlayBookmarkRequest(input) {
    var errors = validator_1.Validators.playBookmarkRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validatePlayBookmarkRequest = validatePlayBookmarkRequest;
function validateAddBookmarkRequest(input) {
    var errors = validator_1.Validators.addBookmarkRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateAddBookmarkRequest = validateAddBookmarkRequest;
function validateApplyBookmarkByNameRequest(input) {
    var errors = validator_1.Validators.applyBookmarkByNameRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateApplyBookmarkByNameRequest = validateApplyBookmarkByNameRequest;
function validateApplyBookmarkStateRequest(input) {
    var errors = validator_1.Validators.applyBookmarkStateRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateApplyBookmarkStateRequest = validateApplyBookmarkStateRequest;
function validateCaptureBookmarkRequest(input) {
    var errors = validator_1.Validators.captureBookmarkRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateCaptureBookmarkRequest = validateCaptureBookmarkRequest;
function validateSettings(input) {
    var errors = validator_1.Validators.settingsValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateSettings = validateSettings;
function validatePanes(input) {
    var errors = validator_1.Validators.reportPanesValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validatePanes = validatePanes;
function validateBookmarksPane(input) {
    var errors = validator_1.Validators.bookmarksPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateBookmarksPane = validateBookmarksPane;
function validateFiltersPane(input) {
    var errors = validator_1.Validators.filtersPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateFiltersPane = validateFiltersPane;
function validateFieldsPane(input) {
    var errors = validator_1.Validators.fieldsPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateFieldsPane = validateFieldsPane;
function validatePageNavigationPane(input) {
    var errors = validator_1.Validators.pageNavigationPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validatePageNavigationPane = validatePageNavigationPane;
function validateSelectionPane(input) {
    var errors = validator_1.Validators.selectionPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateSelectionPane = validateSelectionPane;
function validateSyncSlicersPane(input) {
    var errors = validator_1.Validators.syncSlicersPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateSyncSlicersPane = validateSyncSlicersPane;
function validateVisualizationsPane(input) {
    var errors = validator_1.Validators.visualizationsPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateVisualizationsPane = validateVisualizationsPane;
function validateCustomPageSize(input) {
    var errors = validator_1.Validators.customPageSizeValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateCustomPageSize = validateCustomPageSize;
function validateExtension(input) {
    var errors = validator_1.Validators.extensionValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateExtension = validateExtension;
function validateMenuGroupExtension(input) {
    var errors = validator_1.Validators.menuGroupExtensionValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateMenuGroupExtension = validateMenuGroupExtension;
function validateReportLoad(input) {
    var errors = validator_1.Validators.reportLoadValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateReportLoad = validateReportLoad;
function validatePaginatedReportLoad(input) {
    var errors = validator_1.Validators.paginatedReportLoadValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validatePaginatedReportLoad = validatePaginatedReportLoad;
function validateCreateReport(input) {
    var errors = validator_1.Validators.reportCreateValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateCreateReport = validateCreateReport;
function validateQuickCreate(input) {
    var errors = validator_1.Validators.quickCreateValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateQuickCreate = validateQuickCreate;
function validateDashboardLoad(input) {
    var errors = validator_1.Validators.dashboardLoadValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateDashboardLoad = validateDashboardLoad;
function validateTileLoad(input) {
    var errors = validator_1.Validators.tileLoadValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateTileLoad = validateTileLoad;
function validatePage(input) {
    var errors = validator_1.Validators.pageValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validatePage = validatePage;
function validateFilter(input) {
    var errors = validator_1.Validators.filterValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateFilter = validateFilter;
function validateUpdateFiltersRequest(input) {
    var errors = validator_1.Validators.updateFiltersRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateUpdateFiltersRequest = validateUpdateFiltersRequest;
function validateSaveAsParameters(input) {
    var errors = validator_1.Validators.saveAsParametersValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateSaveAsParameters = validateSaveAsParameters;
function validateLoadQnaConfiguration(input) {
    var errors = validator_1.Validators.loadQnaValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateLoadQnaConfiguration = validateLoadQnaConfiguration;
function validateQnaInterpretInputData(input) {
    var errors = validator_1.Validators.qnaInterpretInputDataValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateQnaInterpretInputData = validateQnaInterpretInputData;
function validateExportDataRequest(input) {
    var errors = validator_1.Validators.exportDataRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateExportDataRequest = validateExportDataRequest;
function validateVisualHeader(input) {
    var errors = validator_1.Validators.visualHeaderValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateVisualHeader = validateVisualHeader;
function validateVisualSettings(input) {
    var errors = validator_1.Validators.visualSettingsValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateVisualSettings = validateVisualSettings;
function validateCommandsSettings(input) {
    var errors = validator_1.Validators.commandsSettingsValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateCommandsSettings = validateCommandsSettings;
function validateCustomTheme(input) {
    var errors = validator_1.Validators.customThemeValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateCustomTheme = validateCustomTheme;
function validateZoomLevel(input) {
    var errors = validator_1.Validators.zoomLevelValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateZoomLevel = validateZoomLevel;
function validatePrintSettings(input) {
    var errors = validator_1.Validators.printSettingsValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validatePrintSettings = validatePrintSettings;


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Validators = void 0;
var barsValidator_1 = __webpack_require__(2);
var bookmarkValidator_1 = __webpack_require__(5);
var commandsSettingsValidator_1 = __webpack_require__(6);
var customThemeValidator_1 = __webpack_require__(7);
var dashboardLoadValidator_1 = __webpack_require__(8);
var datasetBindingValidator_1 = __webpack_require__(9);
var exportDataValidator_1 = __webpack_require__(10);
var extensionsValidator_1 = __webpack_require__(11);
var filtersValidator_1 = __webpack_require__(12);
var layoutValidator_1 = __webpack_require__(13);
var pageValidator_1 = __webpack_require__(14);
var panesValidator_1 = __webpack_require__(15);
var qnaValidator_1 = __webpack_require__(16);
var reportCreateValidator_1 = __webpack_require__(17);
var reportLoadValidator_1 = __webpack_require__(18);
var paginatedReportLoadValidator_1 = __webpack_require__(19);
var saveAsParametersValidator_1 = __webpack_require__(20);
var selectorsValidator_1 = __webpack_require__(21);
var settingsValidator_1 = __webpack_require__(22);
var slicersValidator_1 = __webpack_require__(23);
var tileLoadValidator_1 = __webpack_require__(24);
var visualSettingsValidator_1 = __webpack_require__(25);
var anyOfValidator_1 = __webpack_require__(26);
var fieldForbiddenValidator_1 = __webpack_require__(27);
var fieldRequiredValidator_1 = __webpack_require__(28);
var mapValidator_1 = __webpack_require__(29);
var typeValidator_1 = __webpack_require__(4);
var parameterPanelValidator_1 = __webpack_require__(30);
var datasetCreateConfigValidator_1 = __webpack_require__(31);
var quickCreateValidator_1 = __webpack_require__(32);
var printSettingsValidator_1 = __webpack_require__(33);
var paginatedReportDatasetBindingValidator_1 = __webpack_require__(34);
exports.Validators = {
    addBookmarkRequestValidator: new bookmarkValidator_1.AddBookmarkRequestValidator(),
    advancedFilterTypeValidator: new typeValidator_1.EnumValidator([0]),
    advancedFilterValidator: new filtersValidator_1.AdvancedFilterValidator(),
    anyArrayValidator: new typeValidator_1.ArrayValidator([new anyOfValidator_1.AnyOfValidator([new typeValidator_1.StringValidator(), new typeValidator_1.NumberValidator(), new typeValidator_1.BooleanValidator()])]),
    anyFilterValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.BasicFilterValidator(), new filtersValidator_1.AdvancedFilterValidator(), new filtersValidator_1.IncludeExcludeFilterValidator(), new filtersValidator_1.NotSupportedFilterValidator(), new filtersValidator_1.RelativeDateFilterValidator(), new filtersValidator_1.TopNFilterValidator(), new filtersValidator_1.RelativeTimeFilterValidator(), new filtersValidator_1.HierarchyFilterValidator()]),
    anyValueValidator: new anyOfValidator_1.AnyOfValidator([new typeValidator_1.StringValidator(), new typeValidator_1.NumberValidator(), new typeValidator_1.BooleanValidator()]),
    actionBarValidator: new barsValidator_1.ActionBarValidator(),
    statusBarValidator: new barsValidator_1.StatusBarValidator(),
    applyBookmarkByNameRequestValidator: new bookmarkValidator_1.ApplyBookmarkByNameRequestValidator(),
    applyBookmarkStateRequestValidator: new bookmarkValidator_1.ApplyBookmarkStateRequestValidator(),
    applyBookmarkValidator: new anyOfValidator_1.AnyOfValidator([new bookmarkValidator_1.ApplyBookmarkByNameRequestValidator(), new bookmarkValidator_1.ApplyBookmarkStateRequestValidator()]),
    backgroundValidator: new typeValidator_1.EnumValidator([0, 1]),
    basicFilterTypeValidator: new typeValidator_1.EnumValidator([1]),
    basicFilterValidator: new filtersValidator_1.BasicFilterValidator(),
    booleanArrayValidator: new typeValidator_1.BooleanArrayValidator(),
    booleanValidator: new typeValidator_1.BooleanValidator(),
    bookmarksPaneValidator: new panesValidator_1.BookmarksPaneValidator(),
    captureBookmarkOptionsValidator: new bookmarkValidator_1.CaptureBookmarkOptionsValidator(),
    captureBookmarkRequestValidator: new bookmarkValidator_1.CaptureBookmarkRequestValidator(),
    columnSchemaArrayValidator: new typeValidator_1.ArrayValidator([new datasetCreateConfigValidator_1.ColumnSchemaValidator()]),
    commandDisplayOptionValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
    commandExtensionSelectorValidator: new anyOfValidator_1.AnyOfValidator([new selectorsValidator_1.VisualSelectorValidator(), new selectorsValidator_1.VisualTypeSelectorValidator()]),
    commandExtensionArrayValidator: new typeValidator_1.ArrayValidator([new extensionsValidator_1.CommandExtensionValidator()]),
    commandExtensionValidator: new extensionsValidator_1.CommandExtensionValidator(),
    commandsSettingsArrayValidator: new typeValidator_1.ArrayValidator([new commandsSettingsValidator_1.CommandsSettingsValidator()]),
    commandsSettingsValidator: new commandsSettingsValidator_1.CommandsSettingsValidator(),
    conditionItemValidator: new filtersValidator_1.ConditionItemValidator(),
    contrastModeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4]),
    credentialDetailsValidator: new mapValidator_1.MapValidator([new typeValidator_1.StringValidator()], [new typeValidator_1.StringValidator()]),
    credentialsValidator: new datasetCreateConfigValidator_1.CredentialsValidator(),
    credentialTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
    customLayoutDisplayOptionValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
    customLayoutValidator: new layoutValidator_1.CustomLayoutValidator(),
    customPageSizeValidator: new pageValidator_1.CustomPageSizeValidator(),
    customThemeValidator: new customThemeValidator_1.CustomThemeValidator(),
    dashboardLoadValidator: new dashboardLoadValidator_1.DashboardLoadValidator(),
    dataCacheModeValidator: new typeValidator_1.EnumValidator([0, 1]),
    datasetBindingValidator: new datasetBindingValidator_1.DatasetBindingValidator(),
    datasetCreateConfigValidator: new datasetCreateConfigValidator_1.DatasetCreateConfigValidator(),
    datasourceConnectionConfigValidator: new datasetCreateConfigValidator_1.DatasourceConnectionConfigValidator(),
    displayStateModeValidator: new typeValidator_1.EnumValidator([0, 1]),
    displayStateValidator: new layoutValidator_1.DisplayStateValidator(),
    exportDataRequestValidator: new exportDataValidator_1.ExportDataRequestValidator(),
    extensionArrayValidator: new typeValidator_1.ArrayValidator([new extensionsValidator_1.ExtensionValidator()]),
    extensionsValidator: new anyOfValidator_1.AnyOfValidator([new typeValidator_1.ArrayValidator([new extensionsValidator_1.ExtensionValidator()]), new extensionsValidator_1.ExtensionsValidator()]),
    extensionPointsValidator: new extensionsValidator_1.ExtensionPointsValidator(),
    extensionValidator: new extensionsValidator_1.ExtensionValidator(),
    fieldForbiddenValidator: new fieldForbiddenValidator_1.FieldForbiddenValidator(),
    fieldRequiredValidator: new fieldRequiredValidator_1.FieldRequiredValidator(),
    fieldsPaneValidator: new panesValidator_1.FieldsPaneValidator(),
    filterColumnTargetValidator: new filtersValidator_1.FilterColumnTargetValidator(),
    filterDisplaySettingsValidator: new filtersValidator_1.FilterDisplaySettingsValidator(),
    filterConditionsValidator: new typeValidator_1.ArrayValidator([new filtersValidator_1.ConditionItemValidator()]),
    filterHierarchyTargetValidator: new filtersValidator_1.FilterHierarchyTargetValidator(),
    filterMeasureTargetValidator: new filtersValidator_1.FilterMeasureTargetValidator(),
    filterTargetValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.FilterColumnTargetValidator(), new filtersValidator_1.FilterHierarchyTargetValidator(), new filtersValidator_1.FilterMeasureTargetValidator(), new typeValidator_1.ArrayValidator([new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.FilterColumnTargetValidator(), new filtersValidator_1.FilterHierarchyTargetValidator(), new filtersValidator_1.FilterMeasureTargetValidator(), new filtersValidator_1.FilterKeyColumnsTargetValidator(), new filtersValidator_1.FilterKeyHierarchyTargetValidator()])])]),
    filterValidator: new filtersValidator_1.FilterValidator(),
    filterTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5, 6, 7, 9]),
    filtersArrayValidator: new typeValidator_1.ArrayValidator([new filtersValidator_1.FilterValidator()]),
    filtersOperationsUpdateValidator: new typeValidator_1.EnumValidator([1, 2, 3]),
    filtersOperationsRemoveAllValidator: new typeValidator_1.EnumValidator([0]),
    filtersPaneValidator: new panesValidator_1.FiltersPaneValidator(),
    hyperlinkClickBehaviorValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
    includeExcludeFilterValidator: new filtersValidator_1.IncludeExcludeFilterValidator(),
    includeExludeFilterTypeValidator: new typeValidator_1.EnumValidator([3]),
    hierarchyFilterTypeValidator: new typeValidator_1.EnumValidator([9]),
    hierarchyFilterValuesValidator: new typeValidator_1.ArrayValidator([new filtersValidator_1.HierarchyFilterNodeValidator()]),
    layoutTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3]),
    loadQnaValidator: new qnaValidator_1.LoadQnaValidator(),
    menuExtensionValidator: new anyOfValidator_1.AnyOfValidator([new extensionsValidator_1.FlatMenuExtensionValidator(), new extensionsValidator_1.GroupedMenuExtensionValidator()]),
    menuGroupExtensionArrayValidator: new typeValidator_1.ArrayValidator([new extensionsValidator_1.MenuGroupExtensionValidator()]),
    menuGroupExtensionValidator: new extensionsValidator_1.MenuGroupExtensionValidator(),
    menuLocationValidator: new typeValidator_1.EnumValidator([0, 1]),
    notSupportedFilterTypeValidator: new typeValidator_1.EnumValidator([2]),
    notSupportedFilterValidator: new filtersValidator_1.NotSupportedFilterValidator(),
    numberArrayValidator: new typeValidator_1.NumberArrayValidator(),
    numberValidator: new typeValidator_1.NumberValidator(),
    onLoadFiltersBaseValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.OnLoadFiltersBaseValidator(), new filtersValidator_1.OnLoadFiltersBaseRemoveOperationValidator()]),
    pageLayoutValidator: new mapValidator_1.MapValidator([new typeValidator_1.StringValidator()], [new layoutValidator_1.VisualLayoutValidator()]),
    pageNavigationPaneValidator: new panesValidator_1.PageNavigationPaneValidator(),
    pageNavigationPositionValidator: new typeValidator_1.EnumValidator([0, 1]),
    pageSizeTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5]),
    pageSizeValidator: new pageValidator_1.PageSizeValidator(),
    pageValidator: new pageValidator_1.PageValidator(),
    pageViewFieldValidator: new pageValidator_1.PageViewFieldValidator(),
    pagesLayoutValidator: new mapValidator_1.MapValidator([new typeValidator_1.StringValidator()], [new layoutValidator_1.PageLayoutValidator()]),
    paginatedReportCommandsValidator: new commandsSettingsValidator_1.PaginatedReportCommandsValidator(),
    paginatedReportDatasetBindingArrayValidator: new typeValidator_1.ArrayValidator([new paginatedReportDatasetBindingValidator_1.PaginatedReportDatasetBindingValidator()]),
    paginatedReportLoadValidator: new paginatedReportLoadValidator_1.PaginatedReportLoadValidator(),
    paginatedReportsettingsValidator: new settingsValidator_1.PaginatedReportSettingsValidator(),
    parameterValuesArrayValidator: new typeValidator_1.ArrayValidator([new paginatedReportLoadValidator_1.ReportParameterFieldsValidator()]),
    parametersPanelValidator: new parameterPanelValidator_1.ParametersPanelValidator(),
    permissionsValidator: new typeValidator_1.EnumValidator([0, 1, 2, 4, 7]),
    playBookmarkRequestValidator: new bookmarkValidator_1.PlayBookmarkRequestValidator(),
    printSettingsValidator: new printSettingsValidator_1.PrintSettingsValidator(),
    qnaInterpretInputDataValidator: new qnaValidator_1.QnaInterpretInputDataValidator(),
    qnaPanesValidator: new panesValidator_1.QnaPanesValidator(),
    qnaSettingValidator: new qnaValidator_1.QnaSettingsValidator(),
    quickCreateValidator: new quickCreateValidator_1.QuickCreateValidator(),
    rawDataValidator: new typeValidator_1.ArrayValidator([new typeValidator_1.ArrayValidator([new typeValidator_1.StringValidator()])]),
    relativeDateFilterOperatorValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
    relativeDateFilterTimeUnitTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5, 6]),
    relativeDateFilterTypeValidator: new typeValidator_1.EnumValidator([4]),
    relativeDateFilterValidator: new filtersValidator_1.RelativeDateFilterValidator(),
    relativeDateTimeFilterTypeValidator: new typeValidator_1.EnumValidator([4, 7]),
    relativeDateTimeFilterUnitTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    relativeTimeFilterTimeUnitTypeValidator: new typeValidator_1.EnumValidator([7, 8]),
    relativeTimeFilterTypeValidator: new typeValidator_1.EnumValidator([7]),
    relativeTimeFilterValidator: new filtersValidator_1.RelativeTimeFilterValidator(),
    reportBarsValidator: new barsValidator_1.ReportBarsValidator(),
    reportCreateValidator: new reportCreateValidator_1.ReportCreateValidator(),
    reportLoadFiltersValidator: new anyOfValidator_1.AnyOfValidator([new typeValidator_1.ArrayValidator([new filtersValidator_1.FilterValidator()]), new filtersValidator_1.OnLoadFiltersValidator()]),
    reportLoadValidator: new reportLoadValidator_1.ReportLoadValidator(),
    reportPanesValidator: new panesValidator_1.ReportPanesValidator(),
    saveAsParametersValidator: new saveAsParametersValidator_1.SaveAsParametersValidator(),
    selectionPaneValidator: new panesValidator_1.SelectionPaneValidator(),
    settingsValidator: new settingsValidator_1.SettingsValidator(),
    singleCommandSettingsValidator: new commandsSettingsValidator_1.SingleCommandSettingsValidator(),
    slicerSelectorValidator: new anyOfValidator_1.AnyOfValidator([new selectorsValidator_1.VisualSelectorValidator(), new selectorsValidator_1.SlicerTargetSelectorValidator()]),
    slicerStateValidator: new slicersValidator_1.SlicerStateValidator(),
    slicerTargetValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.FilterColumnTargetValidator(), new filtersValidator_1.FilterHierarchyTargetValidator(), new filtersValidator_1.FilterMeasureTargetValidator(), new filtersValidator_1.FilterKeyColumnsTargetValidator(), new filtersValidator_1.FilterKeyHierarchyTargetValidator()]),
    slicerValidator: new slicersValidator_1.SlicerValidator(),
    stringArrayValidator: new typeValidator_1.StringArrayValidator(),
    stringValidator: new typeValidator_1.StringValidator(),
    syncSlicersPaneValidator: new panesValidator_1.SyncSlicersPaneValidator(),
    tableDataArrayValidator: new typeValidator_1.ArrayValidator([new datasetCreateConfigValidator_1.TableDataValidator()]),
    tableSchemaListValidator: new typeValidator_1.ArrayValidator([new datasetCreateConfigValidator_1.TableSchemaValidator()]),
    tileLoadValidator: new tileLoadValidator_1.TileLoadValidator(),
    tokenTypeValidator: new typeValidator_1.EnumValidator([0, 1]),
    topNFilterTypeValidator: new typeValidator_1.EnumValidator([5]),
    topNFilterValidator: new filtersValidator_1.TopNFilterValidator(),
    updateFiltersRequestValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.UpdateFiltersRequestValidator(), new filtersValidator_1.RemoveFiltersRequestValidator()]),
    viewModeValidator: new typeValidator_1.EnumValidator([0, 1]),
    visualCommandSelectorValidator: new anyOfValidator_1.AnyOfValidator([new selectorsValidator_1.VisualSelectorValidator(), new selectorsValidator_1.VisualTypeSelectorValidator()]),
    visualHeaderSelectorValidator: new anyOfValidator_1.AnyOfValidator([new selectorsValidator_1.VisualSelectorValidator(), new selectorsValidator_1.VisualTypeSelectorValidator()]),
    visualHeaderSettingsValidator: new visualSettingsValidator_1.VisualHeaderSettingsValidator(),
    visualHeaderValidator: new visualSettingsValidator_1.VisualHeaderValidator(),
    visualHeadersValidator: new typeValidator_1.ArrayValidator([new visualSettingsValidator_1.VisualHeaderValidator()]),
    visualizationsPaneValidator: new panesValidator_1.VisualizationsPaneValidator(),
    visualLayoutValidator: new layoutValidator_1.VisualLayoutValidator(),
    visualSelectorValidator: new selectorsValidator_1.VisualSelectorValidator(),
    visualSettingsValidator: new visualSettingsValidator_1.VisualSettingsValidator(),
    visualTypeSelectorValidator: new selectorsValidator_1.VisualTypeSelectorValidator(),
    zoomLevelValidator: new typeValidator_1.RangeValidator(0.25, 4),
};


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusBarValidator = exports.ActionBarValidator = exports.ReportBarsValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var ReportBarsValidator = /** @class */ (function (_super) {
    __extends(ReportBarsValidator, _super);
    function ReportBarsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportBarsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "actionBar",
                validators: [validator_1.Validators.actionBarValidator]
            },
            {
                field: "statusBar",
                validators: [validator_1.Validators.statusBarValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ReportBarsValidator;
}(typeValidator_1.ObjectValidator));
exports.ReportBarsValidator = ReportBarsValidator;
var ActionBarValidator = /** @class */ (function (_super) {
    __extends(ActionBarValidator, _super);
    function ActionBarValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionBarValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ActionBarValidator;
}(typeValidator_1.ObjectValidator));
exports.ActionBarValidator = ActionBarValidator;
var StatusBarValidator = /** @class */ (function (_super) {
    __extends(StatusBarValidator, _super);
    function StatusBarValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBarValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return StatusBarValidator;
}(typeValidator_1.ObjectValidator));
exports.StatusBarValidator = StatusBarValidator;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MultipleFieldsValidator = void 0;
var MultipleFieldsValidator = /** @class */ (function () {
    function MultipleFieldsValidator(fieldValidatorsPairs) {
        this.fieldValidatorsPairs = fieldValidatorsPairs;
    }
    MultipleFieldsValidator.prototype.validate = function (input, path, field) {
        if (!this.fieldValidatorsPairs) {
            return null;
        }
        var fieldsPath = path ? path + "." + field : field;
        for (var _i = 0, _a = this.fieldValidatorsPairs; _i < _a.length; _i++) {
            var fieldValidators = _a[_i];
            for (var _b = 0, _c = fieldValidators.validators; _b < _c.length; _b++) {
                var validator = _c[_b];
                var errors = validator.validate(input[fieldValidators.field], fieldsPath, fieldValidators.field);
                if (errors) {
                    return errors;
                }
            }
        }
        return null;
    };
    return MultipleFieldsValidator;
}());
exports.MultipleFieldsValidator = MultipleFieldsValidator;


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RangeValidator = exports.NumberArrayValidator = exports.BooleanArrayValidator = exports.StringArrayValidator = exports.EnumValidator = exports.SchemaValidator = exports.ValueValidator = exports.NumberValidator = exports.BooleanValidator = exports.StringValidator = exports.TypeValidator = exports.ArrayValidator = exports.ObjectValidator = void 0;
var ObjectValidator = /** @class */ (function () {
    function ObjectValidator() {
    }
    ObjectValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        if (typeof input !== "object" || Array.isArray(input)) {
            return [{
                    message: field !== undefined ? field + " must be an object" : "input must be an object",
                    path: path,
                    keyword: "type"
                }];
        }
        return null;
    };
    return ObjectValidator;
}());
exports.ObjectValidator = ObjectValidator;
var ArrayValidator = /** @class */ (function () {
    function ArrayValidator(itemValidators) {
        this.itemValidators = itemValidators;
    }
    ArrayValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        if (!(Array.isArray(input))) {
            return [{
                    message: field + " property is invalid",
                    path: (path ? path + "." : "") + field,
                    keyword: "type"
                }];
        }
        for (var i = 0; i < input.length; i++) {
            var fieldsPath = (path ? path + "." : "") + field + "." + i.toString();
            for (var _i = 0, _a = this.itemValidators; _i < _a.length; _i++) {
                var validator = _a[_i];
                var errors = validator.validate(input[i], fieldsPath, field);
                if (errors) {
                    return [{
                            message: field + " property is invalid",
                            path: (path ? path + "." : "") + field,
                            keyword: "type"
                        }];
                }
            }
        }
        return null;
    };
    return ArrayValidator;
}());
exports.ArrayValidator = ArrayValidator;
var TypeValidator = /** @class */ (function () {
    function TypeValidator(expectedType) {
        this.expectedType = expectedType;
    }
    TypeValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        if (!(typeof input === this.expectedType)) {
            return [{
                    message: field + " must be a " + this.expectedType,
                    path: (path ? path + "." : "") + field,
                    keyword: "type"
                }];
        }
        return null;
    };
    return TypeValidator;
}());
exports.TypeValidator = TypeValidator;
var StringValidator = /** @class */ (function (_super) {
    __extends(StringValidator, _super);
    function StringValidator() {
        return _super.call(this, "string") || this;
    }
    return StringValidator;
}(TypeValidator));
exports.StringValidator = StringValidator;
var BooleanValidator = /** @class */ (function (_super) {
    __extends(BooleanValidator, _super);
    function BooleanValidator() {
        return _super.call(this, "boolean") || this;
    }
    return BooleanValidator;
}(TypeValidator));
exports.BooleanValidator = BooleanValidator;
var NumberValidator = /** @class */ (function (_super) {
    __extends(NumberValidator, _super);
    function NumberValidator() {
        return _super.call(this, "number") || this;
    }
    return NumberValidator;
}(TypeValidator));
exports.NumberValidator = NumberValidator;
var ValueValidator = /** @class */ (function () {
    function ValueValidator(possibleValues) {
        this.possibleValues = possibleValues;
    }
    ValueValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        if (this.possibleValues.indexOf(input) < 0) {
            return [{
                    message: field + " property is invalid",
                    path: (path ? path + "." : "") + field,
                    keyword: "invalid"
                }];
        }
        return null;
    };
    return ValueValidator;
}());
exports.ValueValidator = ValueValidator;
var SchemaValidator = /** @class */ (function (_super) {
    __extends(SchemaValidator, _super);
    function SchemaValidator(schemaValue) {
        var _this = _super.call(this, [schemaValue]) || this;
        _this.schemaValue = schemaValue;
        return _this;
    }
    SchemaValidator.prototype.validate = function (input, path, field) {
        return _super.prototype.validate.call(this, input, path, field);
    };
    return SchemaValidator;
}(ValueValidator));
exports.SchemaValidator = SchemaValidator;
var EnumValidator = /** @class */ (function (_super) {
    __extends(EnumValidator, _super);
    function EnumValidator(possibleValues) {
        var _this = _super.call(this) || this;
        _this.possibleValues = possibleValues;
        return _this;
    }
    EnumValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var valueValidator = new ValueValidator(this.possibleValues);
        return valueValidator.validate(input, path, field);
    };
    return EnumValidator;
}(NumberValidator));
exports.EnumValidator = EnumValidator;
var StringArrayValidator = /** @class */ (function (_super) {
    __extends(StringArrayValidator, _super);
    function StringArrayValidator() {
        return _super.call(this, [new StringValidator()]) || this;
    }
    StringArrayValidator.prototype.validate = function (input, path, field) {
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return [{
                    message: field + " must be an array of strings",
                    path: (path ? path + "." : "") + field,
                    keyword: "type"
                }];
        }
        return null;
    };
    return StringArrayValidator;
}(ArrayValidator));
exports.StringArrayValidator = StringArrayValidator;
var BooleanArrayValidator = /** @class */ (function (_super) {
    __extends(BooleanArrayValidator, _super);
    function BooleanArrayValidator() {
        return _super.call(this, [new BooleanValidator()]) || this;
    }
    BooleanArrayValidator.prototype.validate = function (input, path, field) {
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return [{
                    message: field + " must be an array of booleans",
                    path: (path ? path + "." : "") + field,
                    keyword: "type"
                }];
        }
        return null;
    };
    return BooleanArrayValidator;
}(ArrayValidator));
exports.BooleanArrayValidator = BooleanArrayValidator;
var NumberArrayValidator = /** @class */ (function (_super) {
    __extends(NumberArrayValidator, _super);
    function NumberArrayValidator() {
        return _super.call(this, [new NumberValidator()]) || this;
    }
    NumberArrayValidator.prototype.validate = function (input, path, field) {
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return [{
                    message: field + " must be an array of numbers",
                    path: (path ? path + "." : "") + field,
                    keyword: "type"
                }];
        }
        return null;
    };
    return NumberArrayValidator;
}(ArrayValidator));
exports.NumberArrayValidator = NumberArrayValidator;
var RangeValidator = /** @class */ (function (_super) {
    __extends(RangeValidator, _super);
    function RangeValidator(minValue, maxValue) {
        var _this = _super.call(this) || this;
        _this.minValue = minValue;
        _this.maxValue = maxValue;
        return _this;
    }
    RangeValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        // input is a number, now check if it's in the given range
        if (input > this.maxValue || input < this.minValue) {
            return [{
                    message: field + " must be a number between " + this.minValue.toString() + " and " + this.maxValue.toString(),
                    path: (path ? path + "." : "") + field,
                    keyword: "range"
                }];
        }
        return null;
    };
    return RangeValidator;
}(NumberValidator));
exports.RangeValidator = RangeValidator;


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CaptureBookmarkRequestValidator = exports.CaptureBookmarkOptionsValidator = exports.ApplyBookmarkStateRequestValidator = exports.ApplyBookmarkByNameRequestValidator = exports.AddBookmarkRequestValidator = exports.PlayBookmarkRequestValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var PlayBookmarkRequestValidator = /** @class */ (function (_super) {
    __extends(PlayBookmarkRequestValidator, _super);
    function PlayBookmarkRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayBookmarkRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "playMode",
                validators: [validator_1.Validators.fieldRequiredValidator, new typeValidator_1.EnumValidator([0, 1])]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PlayBookmarkRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.PlayBookmarkRequestValidator = PlayBookmarkRequestValidator;
var AddBookmarkRequestValidator = /** @class */ (function (_super) {
    __extends(AddBookmarkRequestValidator, _super);
    function AddBookmarkRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddBookmarkRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "state",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "displayName",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "apply",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return AddBookmarkRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.AddBookmarkRequestValidator = AddBookmarkRequestValidator;
var ApplyBookmarkByNameRequestValidator = /** @class */ (function (_super) {
    __extends(ApplyBookmarkByNameRequestValidator, _super);
    function ApplyBookmarkByNameRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplyBookmarkByNameRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ApplyBookmarkByNameRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.ApplyBookmarkByNameRequestValidator = ApplyBookmarkByNameRequestValidator;
var ApplyBookmarkStateRequestValidator = /** @class */ (function (_super) {
    __extends(ApplyBookmarkStateRequestValidator, _super);
    function ApplyBookmarkStateRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplyBookmarkStateRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "state",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ApplyBookmarkStateRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.ApplyBookmarkStateRequestValidator = ApplyBookmarkStateRequestValidator;
var CaptureBookmarkOptionsValidator = /** @class */ (function (_super) {
    __extends(CaptureBookmarkOptionsValidator, _super);
    function CaptureBookmarkOptionsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaptureBookmarkOptionsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "personalizeVisuals",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "allPages",
                validators: [validator_1.Validators.booleanValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CaptureBookmarkOptionsValidator;
}(typeValidator_1.ObjectValidator));
exports.CaptureBookmarkOptionsValidator = CaptureBookmarkOptionsValidator;
var CaptureBookmarkRequestValidator = /** @class */ (function (_super) {
    __extends(CaptureBookmarkRequestValidator, _super);
    function CaptureBookmarkRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaptureBookmarkRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "options",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.captureBookmarkOptionsValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CaptureBookmarkRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.CaptureBookmarkRequestValidator = CaptureBookmarkRequestValidator;


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginatedReportCommandsValidator = exports.SingleCommandSettingsValidator = exports.CommandsSettingsValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var CommandsSettingsValidator = /** @class */ (function (_super) {
    __extends(CommandsSettingsValidator, _super);
    function CommandsSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandsSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "copy",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "drill",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "drillthrough",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "expandCollapse",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "exportData",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "includeExclude",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "removeVisual",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "search",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "seeData",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "sort",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "spotlight",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "insightsAnalysis",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "addComment",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "groupVisualContainers",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "summarize",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "clearSelection",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CommandsSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.CommandsSettingsValidator = CommandsSettingsValidator;
var SingleCommandSettingsValidator = /** @class */ (function (_super) {
    __extends(SingleCommandSettingsValidator, _super);
    function SingleCommandSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SingleCommandSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "displayOption",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.commandDisplayOptionValidator]
            },
            {
                field: "selector",
                validators: [validator_1.Validators.visualCommandSelectorValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SingleCommandSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.SingleCommandSettingsValidator = SingleCommandSettingsValidator;
var PaginatedReportCommandsValidator = /** @class */ (function (_super) {
    __extends(PaginatedReportCommandsValidator, _super);
    function PaginatedReportCommandsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginatedReportCommandsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "parameterPanel",
                validators: [validator_1.Validators.parametersPanelValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PaginatedReportCommandsValidator;
}(typeValidator_1.ObjectValidator));
exports.PaginatedReportCommandsValidator = PaginatedReportCommandsValidator;


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomThemeValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var CustomThemeValidator = /** @class */ (function (_super) {
    __extends(CustomThemeValidator, _super);
    function CustomThemeValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomThemeValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "themeJson",
                validators: [new typeValidator_1.ObjectValidator()]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CustomThemeValidator;
}(typeValidator_1.ObjectValidator));
exports.CustomThemeValidator = CustomThemeValidator;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardLoadValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var DashboardLoadValidator = /** @class */ (function (_super) {
    __extends(DashboardLoadValidator, _super);
    function DashboardLoadValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashboardLoadValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "id",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "pageView",
                validators: [validator_1.Validators.pageViewFieldValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "embedUrl",
                validators: [validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return DashboardLoadValidator;
}(typeValidator_1.ObjectValidator));
exports.DashboardLoadValidator = DashboardLoadValidator;


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatasetBindingValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var DatasetBindingValidator = /** @class */ (function (_super) {
    __extends(DatasetBindingValidator, _super);
    function DatasetBindingValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatasetBindingValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        if (!input["datasetId"] && !input["paginatedReportBindings"]) {
            return [{
                    message: "datasetBinding cannot be empty",
                    path: (path ? path + "." : "") + field,
                    keyword: "invalid"
                }];
        }
        var fields = [
            {
                field: "datasetId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "paginatedReportBindings",
                validators: [validator_1.Validators.paginatedReportDatasetBindingArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return DatasetBindingValidator;
}(typeValidator_1.ObjectValidator));
exports.DatasetBindingValidator = DatasetBindingValidator;


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExportDataRequestValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var ExportDataRequestValidator = /** @class */ (function (_super) {
    __extends(ExportDataRequestValidator, _super);
    function ExportDataRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExportDataRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "rows",
                validators: [new typeValidator_1.NumberValidator()]
            },
            {
                field: "exportDataType",
                validators: [new typeValidator_1.EnumValidator([0, 1])]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ExportDataRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.ExportDataRequestValidator = ExportDataRequestValidator;


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExtensionsValidator = exports.MenuGroupExtensionValidator = exports.ExtensionValidator = exports.CommandExtensionValidator = exports.ExtensionItemValidator = exports.ExtensionPointsValidator = exports.GroupedMenuExtensionValidator = exports.FlatMenuExtensionValidator = exports.MenuExtensionBaseValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var MenuExtensionBaseValidator = /** @class */ (function (_super) {
    __extends(MenuExtensionBaseValidator, _super);
    function MenuExtensionBaseValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuExtensionBaseValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "title",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "icon",
                validators: [validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return MenuExtensionBaseValidator;
}(typeValidator_1.ObjectValidator));
exports.MenuExtensionBaseValidator = MenuExtensionBaseValidator;
var FlatMenuExtensionValidator = /** @class */ (function (_super) {
    __extends(FlatMenuExtensionValidator, _super);
    function FlatMenuExtensionValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlatMenuExtensionValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "menuLocation",
                validators: [validator_1.Validators.menuLocationValidator]
            },
            {
                field: "groupName",
                validators: [validator_1.Validators.fieldForbiddenValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FlatMenuExtensionValidator;
}(MenuExtensionBaseValidator));
exports.FlatMenuExtensionValidator = FlatMenuExtensionValidator;
var GroupedMenuExtensionValidator = /** @class */ (function (_super) {
    __extends(GroupedMenuExtensionValidator, _super);
    function GroupedMenuExtensionValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupedMenuExtensionValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "groupName",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "menuLocation",
                validators: [validator_1.Validators.fieldForbiddenValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return GroupedMenuExtensionValidator;
}(MenuExtensionBaseValidator));
exports.GroupedMenuExtensionValidator = GroupedMenuExtensionValidator;
var ExtensionPointsValidator = /** @class */ (function (_super) {
    __extends(ExtensionPointsValidator, _super);
    function ExtensionPointsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionPointsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visualContextMenu",
                validators: [validator_1.Validators.menuExtensionValidator]
            },
            {
                field: "visualOptionsMenu",
                validators: [validator_1.Validators.menuExtensionValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ExtensionPointsValidator;
}(typeValidator_1.ObjectValidator));
exports.ExtensionPointsValidator = ExtensionPointsValidator;
var ExtensionItemValidator = /** @class */ (function (_super) {
    __extends(ExtensionItemValidator, _super);
    function ExtensionItemValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionItemValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "extend",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.extensionPointsValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ExtensionItemValidator;
}(typeValidator_1.ObjectValidator));
exports.ExtensionItemValidator = ExtensionItemValidator;
var CommandExtensionValidator = /** @class */ (function (_super) {
    __extends(CommandExtensionValidator, _super);
    function CommandExtensionValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandExtensionValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "title",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "icon",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "selector",
                validators: [validator_1.Validators.commandExtensionSelectorValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CommandExtensionValidator;
}(ExtensionItemValidator));
exports.CommandExtensionValidator = CommandExtensionValidator;
var ExtensionValidator = /** @class */ (function (_super) {
    __extends(ExtensionValidator, _super);
    function ExtensionValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "command",
                validators: [validator_1.Validators.commandExtensionValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ExtensionValidator;
}(typeValidator_1.ObjectValidator));
exports.ExtensionValidator = ExtensionValidator;
var MenuGroupExtensionValidator = /** @class */ (function (_super) {
    __extends(MenuGroupExtensionValidator, _super);
    function MenuGroupExtensionValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuGroupExtensionValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "title",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "menuLocation",
                validators: [validator_1.Validators.menuLocationValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return MenuGroupExtensionValidator;
}(typeValidator_1.ObjectValidator));
exports.MenuGroupExtensionValidator = MenuGroupExtensionValidator;
var ExtensionsValidator = /** @class */ (function (_super) {
    __extends(ExtensionsValidator, _super);
    function ExtensionsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "commands",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.commandExtensionArrayValidator]
            },
            {
                field: "groups",
                validators: [validator_1.Validators.menuGroupExtensionArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ExtensionsValidator;
}(typeValidator_1.ObjectValidator));
exports.ExtensionsValidator = ExtensionsValidator;


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnLoadFiltersValidator = exports.OnLoadFiltersBaseRemoveOperationValidator = exports.OnLoadFiltersBaseValidator = exports.ConditionItemValidator = exports.RemoveFiltersRequestValidator = exports.UpdateFiltersRequestValidator = exports.FilterValidator = exports.HierarchyFilterNodeValidator = exports.HierarchyFilterValidator = exports.IncludeExcludeFilterValidator = exports.NotSupportedFilterValidator = exports.TopNFilterValidator = exports.RelativeTimeFilterValidator = exports.RelativeDateFilterValidator = exports.RelativeDateTimeFilterValidator = exports.AdvancedFilterValidator = exports.BasicFilterValidator = exports.FilterValidatorBase = exports.FilterDisplaySettingsValidator = exports.FilterMeasureTargetValidator = exports.FilterKeyHierarchyTargetValidator = exports.FilterHierarchyTargetValidator = exports.FilterKeyColumnsTargetValidator = exports.FilterColumnTargetValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var FilterColumnTargetValidator = /** @class */ (function (_super) {
    __extends(FilterColumnTargetValidator, _super);
    function FilterColumnTargetValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterColumnTargetValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "table",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "column",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterColumnTargetValidator;
}(typeValidator_1.ObjectValidator));
exports.FilterColumnTargetValidator = FilterColumnTargetValidator;
var FilterKeyColumnsTargetValidator = /** @class */ (function (_super) {
    __extends(FilterKeyColumnsTargetValidator, _super);
    function FilterKeyColumnsTargetValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterKeyColumnsTargetValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "keys",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringArrayValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterKeyColumnsTargetValidator;
}(FilterColumnTargetValidator));
exports.FilterKeyColumnsTargetValidator = FilterKeyColumnsTargetValidator;
var FilterHierarchyTargetValidator = /** @class */ (function (_super) {
    __extends(FilterHierarchyTargetValidator, _super);
    function FilterHierarchyTargetValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterHierarchyTargetValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "table",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "hierarchy",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "hierarchyLevel",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterHierarchyTargetValidator;
}(typeValidator_1.ObjectValidator));
exports.FilterHierarchyTargetValidator = FilterHierarchyTargetValidator;
var FilterKeyHierarchyTargetValidator = /** @class */ (function (_super) {
    __extends(FilterKeyHierarchyTargetValidator, _super);
    function FilterKeyHierarchyTargetValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterKeyHierarchyTargetValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "keys",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringArrayValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterKeyHierarchyTargetValidator;
}(FilterHierarchyTargetValidator));
exports.FilterKeyHierarchyTargetValidator = FilterKeyHierarchyTargetValidator;
var FilterMeasureTargetValidator = /** @class */ (function (_super) {
    __extends(FilterMeasureTargetValidator, _super);
    function FilterMeasureTargetValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterMeasureTargetValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "table",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "measure",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterMeasureTargetValidator;
}(typeValidator_1.ObjectValidator));
exports.FilterMeasureTargetValidator = FilterMeasureTargetValidator;
var FilterDisplaySettingsValidator = /** @class */ (function (_super) {
    __extends(FilterDisplaySettingsValidator, _super);
    function FilterDisplaySettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterDisplaySettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "isLockedInViewMode",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "isHiddenInViewMode",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "displayName",
                validators: [validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterDisplaySettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.FilterDisplaySettingsValidator = FilterDisplaySettingsValidator;
var FilterValidatorBase = /** @class */ (function (_super) {
    __extends(FilterValidatorBase, _super);
    function FilterValidatorBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterValidatorBase.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "target",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filterTargetValidator]
            },
            {
                field: "$schema",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.filterTypeValidator]
            },
            {
                field: "displaySettings",
                validators: [validator_1.Validators.filterDisplaySettingsValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterValidatorBase;
}(typeValidator_1.ObjectValidator));
exports.FilterValidatorBase = FilterValidatorBase;
var BasicFilterValidator = /** @class */ (function (_super) {
    __extends(BasicFilterValidator, _super);
    function BasicFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "operator",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "values",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.anyArrayValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.basicFilterTypeValidator]
            },
            {
                field: "requireSingleSelection",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return BasicFilterValidator;
}(FilterValidatorBase));
exports.BasicFilterValidator = BasicFilterValidator;
var AdvancedFilterValidator = /** @class */ (function (_super) {
    __extends(AdvancedFilterValidator, _super);
    function AdvancedFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "logicalOperator",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "conditions",
                validators: [validator_1.Validators.filterConditionsValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.advancedFilterTypeValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return AdvancedFilterValidator;
}(FilterValidatorBase));
exports.AdvancedFilterValidator = AdvancedFilterValidator;
var RelativeDateTimeFilterValidator = /** @class */ (function (_super) {
    __extends(RelativeDateTimeFilterValidator, _super);
    function RelativeDateTimeFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RelativeDateTimeFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "operator",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeDateFilterOperatorValidator]
            },
            {
                field: "timeUnitsCount",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "timeUnitType",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeDateTimeFilterUnitTypeValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.relativeDateTimeFilterTypeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return RelativeDateTimeFilterValidator;
}(FilterValidatorBase));
exports.RelativeDateTimeFilterValidator = RelativeDateTimeFilterValidator;
var RelativeDateFilterValidator = /** @class */ (function (_super) {
    __extends(RelativeDateFilterValidator, _super);
    function RelativeDateFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RelativeDateFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "includeToday",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.booleanValidator]
            },
            {
                field: "timeUnitType",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeDateFilterTimeUnitTypeValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.relativeDateFilterTypeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return RelativeDateFilterValidator;
}(RelativeDateTimeFilterValidator));
exports.RelativeDateFilterValidator = RelativeDateFilterValidator;
var RelativeTimeFilterValidator = /** @class */ (function (_super) {
    __extends(RelativeTimeFilterValidator, _super);
    function RelativeTimeFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RelativeTimeFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "timeUnitType",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeTimeFilterTimeUnitTypeValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.relativeTimeFilterTypeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return RelativeTimeFilterValidator;
}(RelativeDateTimeFilterValidator));
exports.RelativeTimeFilterValidator = RelativeTimeFilterValidator;
var TopNFilterValidator = /** @class */ (function (_super) {
    __extends(TopNFilterValidator, _super);
    function TopNFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopNFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "operator",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "itemCount",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.numberValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.topNFilterTypeValidator]
            },
            {
                field: "orderBy",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filterTargetValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return TopNFilterValidator;
}(FilterValidatorBase));
exports.TopNFilterValidator = TopNFilterValidator;
var NotSupportedFilterValidator = /** @class */ (function (_super) {
    __extends(NotSupportedFilterValidator, _super);
    function NotSupportedFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotSupportedFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "message",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "notSupportedTypeName",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.notSupportedFilterTypeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return NotSupportedFilterValidator;
}(FilterValidatorBase));
exports.NotSupportedFilterValidator = NotSupportedFilterValidator;
var IncludeExcludeFilterValidator = /** @class */ (function (_super) {
    __extends(IncludeExcludeFilterValidator, _super);
    function IncludeExcludeFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IncludeExcludeFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "isExclude",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.booleanValidator]
            },
            {
                field: "values",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.anyArrayValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.includeExludeFilterTypeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return IncludeExcludeFilterValidator;
}(FilterValidatorBase));
exports.IncludeExcludeFilterValidator = IncludeExcludeFilterValidator;
var HierarchyFilterValidator = /** @class */ (function (_super) {
    __extends(HierarchyFilterValidator, _super);
    function HierarchyFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HierarchyFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "hierarchyData",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.hierarchyFilterValuesValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.hierarchyFilterTypeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return HierarchyFilterValidator;
}(FilterValidatorBase));
exports.HierarchyFilterValidator = HierarchyFilterValidator;
var HierarchyFilterNodeValidator = /** @class */ (function (_super) {
    __extends(HierarchyFilterNodeValidator, _super);
    function HierarchyFilterNodeValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HierarchyFilterNodeValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "value",
                validators: [validator_1.Validators.anyValueValidator]
            },
            {
                field: "keyValues",
                validators: [validator_1.Validators.anyArrayValidator]
            },
            {
                field: "children",
                validators: [validator_1.Validators.hierarchyFilterValuesValidator]
            },
            {
                field: "operator",
                validators: [validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return HierarchyFilterNodeValidator;
}(typeValidator_1.ObjectValidator));
exports.HierarchyFilterNodeValidator = HierarchyFilterNodeValidator;
var FilterValidator = /** @class */ (function (_super) {
    __extends(FilterValidator, _super);
    function FilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        return validator_1.Validators.anyFilterValidator.validate(input, path, field);
    };
    return FilterValidator;
}(typeValidator_1.ObjectValidator));
exports.FilterValidator = FilterValidator;
var UpdateFiltersRequestValidator = /** @class */ (function (_super) {
    __extends(UpdateFiltersRequestValidator, _super);
    function UpdateFiltersRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateFiltersRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "filtersOperation",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersOperationsUpdateValidator]
            },
            {
                field: "filters",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return UpdateFiltersRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.UpdateFiltersRequestValidator = UpdateFiltersRequestValidator;
var RemoveFiltersRequestValidator = /** @class */ (function (_super) {
    __extends(RemoveFiltersRequestValidator, _super);
    function RemoveFiltersRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoveFiltersRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "filtersOperation",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersOperationsRemoveAllValidator]
            },
            {
                field: "filters",
                validators: [validator_1.Validators.fieldForbiddenValidator, validator_1.Validators.filtersArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return RemoveFiltersRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.RemoveFiltersRequestValidator = RemoveFiltersRequestValidator;
var ConditionItemValidator = /** @class */ (function (_super) {
    __extends(ConditionItemValidator, _super);
    function ConditionItemValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionItemValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "value",
                validators: [validator_1.Validators.anyValueValidator]
            },
            {
                field: "operator",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ConditionItemValidator;
}(typeValidator_1.ObjectValidator));
exports.ConditionItemValidator = ConditionItemValidator;
var OnLoadFiltersBaseValidator = /** @class */ (function (_super) {
    __extends(OnLoadFiltersBaseValidator, _super);
    function OnLoadFiltersBaseValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnLoadFiltersBaseValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "operation",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersOperationsUpdateValidator]
            },
            {
                field: "filters",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return OnLoadFiltersBaseValidator;
}(typeValidator_1.ObjectValidator));
exports.OnLoadFiltersBaseValidator = OnLoadFiltersBaseValidator;
var OnLoadFiltersBaseRemoveOperationValidator = /** @class */ (function (_super) {
    __extends(OnLoadFiltersBaseRemoveOperationValidator, _super);
    function OnLoadFiltersBaseRemoveOperationValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnLoadFiltersBaseRemoveOperationValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "operation",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersOperationsRemoveAllValidator]
            },
            {
                field: "filters",
                validators: [validator_1.Validators.fieldForbiddenValidator, validator_1.Validators.filtersArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return OnLoadFiltersBaseRemoveOperationValidator;
}(typeValidator_1.ObjectValidator));
exports.OnLoadFiltersBaseRemoveOperationValidator = OnLoadFiltersBaseRemoveOperationValidator;
var OnLoadFiltersValidator = /** @class */ (function (_super) {
    __extends(OnLoadFiltersValidator, _super);
    function OnLoadFiltersValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnLoadFiltersValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "allPages",
                validators: [validator_1.Validators.onLoadFiltersBaseValidator]
            },
            {
                field: "currentPage",
                validators: [validator_1.Validators.onLoadFiltersBaseValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return OnLoadFiltersValidator;
}(typeValidator_1.ObjectValidator));
exports.OnLoadFiltersValidator = OnLoadFiltersValidator;


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PageLayoutValidator = exports.DisplayStateValidator = exports.VisualLayoutValidator = exports.CustomLayoutValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var CustomLayoutValidator = /** @class */ (function (_super) {
    __extends(CustomLayoutValidator, _super);
    function CustomLayoutValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomLayoutValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "pageSize",
                validators: [validator_1.Validators.pageSizeValidator]
            },
            {
                field: "displayOption",
                validators: [validator_1.Validators.customLayoutDisplayOptionValidator]
            },
            {
                field: "pagesLayout",
                validators: [validator_1.Validators.pagesLayoutValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CustomLayoutValidator;
}(typeValidator_1.ObjectValidator));
exports.CustomLayoutValidator = CustomLayoutValidator;
var VisualLayoutValidator = /** @class */ (function (_super) {
    __extends(VisualLayoutValidator, _super);
    function VisualLayoutValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualLayoutValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "x",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "y",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "z",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "width",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "height",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "displayState",
                validators: [validator_1.Validators.displayStateValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualLayoutValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualLayoutValidator = VisualLayoutValidator;
var DisplayStateValidator = /** @class */ (function (_super) {
    __extends(DisplayStateValidator, _super);
    function DisplayStateValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisplayStateValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "mode",
                validators: [validator_1.Validators.displayStateModeValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return DisplayStateValidator;
}(typeValidator_1.ObjectValidator));
exports.DisplayStateValidator = DisplayStateValidator;
var PageLayoutValidator = /** @class */ (function (_super) {
    __extends(PageLayoutValidator, _super);
    function PageLayoutValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageLayoutValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visualsLayout",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.pageLayoutValidator]
            },
            {
                field: "defaultLayout",
                validators: [validator_1.Validators.visualLayoutValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PageLayoutValidator;
}(typeValidator_1.ObjectValidator));
exports.PageLayoutValidator = PageLayoutValidator;


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PageViewFieldValidator = exports.PageValidator = exports.CustomPageSizeValidator = exports.PageSizeValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var PageSizeValidator = /** @class */ (function (_super) {
    __extends(PageSizeValidator, _super);
    function PageSizeValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageSizeValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "type",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.pageSizeTypeValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PageSizeValidator;
}(typeValidator_1.ObjectValidator));
exports.PageSizeValidator = PageSizeValidator;
var CustomPageSizeValidator = /** @class */ (function (_super) {
    __extends(CustomPageSizeValidator, _super);
    function CustomPageSizeValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomPageSizeValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "width",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "height",
                validators: [validator_1.Validators.numberValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CustomPageSizeValidator;
}(PageSizeValidator));
exports.CustomPageSizeValidator = CustomPageSizeValidator;
var PageValidator = /** @class */ (function (_super) {
    __extends(PageValidator, _super);
    function PageValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PageValidator;
}(typeValidator_1.ObjectValidator));
exports.PageValidator = PageValidator;
var PageViewFieldValidator = /** @class */ (function (_super) {
    __extends(PageViewFieldValidator, _super);
    function PageViewFieldValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageViewFieldValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var possibleValues = ["actualSize", "fitToWidth", "oneColumn"];
        if (possibleValues.indexOf(input) < 0) {
            return [{
                    message: "pageView must be a string with one of the following values: \"actualSize\", \"fitToWidth\", \"oneColumn\""
                }];
        }
        return null;
    };
    return PageViewFieldValidator;
}(typeValidator_1.StringValidator));
exports.PageViewFieldValidator = PageViewFieldValidator;


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VisualizationsPaneValidator = exports.SyncSlicersPaneValidator = exports.SelectionPaneValidator = exports.PageNavigationPaneValidator = exports.FiltersPaneValidator = exports.FieldsPaneValidator = exports.BookmarksPaneValidator = exports.QnaPanesValidator = exports.ReportPanesValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var ReportPanesValidator = /** @class */ (function (_super) {
    __extends(ReportPanesValidator, _super);
    function ReportPanesValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportPanesValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "bookmarks",
                validators: [validator_1.Validators.bookmarksPaneValidator]
            },
            {
                field: "fields",
                validators: [validator_1.Validators.fieldsPaneValidator]
            },
            {
                field: "filters",
                validators: [validator_1.Validators.filtersPaneValidator]
            },
            {
                field: "pageNavigation",
                validators: [validator_1.Validators.pageNavigationPaneValidator]
            },
            {
                field: "selection",
                validators: [validator_1.Validators.selectionPaneValidator]
            },
            {
                field: "syncSlicers",
                validators: [validator_1.Validators.syncSlicersPaneValidator]
            },
            {
                field: "visualizations",
                validators: [validator_1.Validators.visualizationsPaneValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ReportPanesValidator;
}(typeValidator_1.ObjectValidator));
exports.ReportPanesValidator = ReportPanesValidator;
var QnaPanesValidator = /** @class */ (function (_super) {
    __extends(QnaPanesValidator, _super);
    function QnaPanesValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QnaPanesValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "filters",
                validators: [validator_1.Validators.filtersPaneValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return QnaPanesValidator;
}(typeValidator_1.ObjectValidator));
exports.QnaPanesValidator = QnaPanesValidator;
var BookmarksPaneValidator = /** @class */ (function (_super) {
    __extends(BookmarksPaneValidator, _super);
    function BookmarksPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BookmarksPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return BookmarksPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.BookmarksPaneValidator = BookmarksPaneValidator;
var FieldsPaneValidator = /** @class */ (function (_super) {
    __extends(FieldsPaneValidator, _super);
    function FieldsPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldsPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "expanded",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FieldsPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.FieldsPaneValidator = FieldsPaneValidator;
var FiltersPaneValidator = /** @class */ (function (_super) {
    __extends(FiltersPaneValidator, _super);
    function FiltersPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FiltersPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "expanded",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FiltersPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.FiltersPaneValidator = FiltersPaneValidator;
var PageNavigationPaneValidator = /** @class */ (function (_super) {
    __extends(PageNavigationPaneValidator, _super);
    function PageNavigationPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageNavigationPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "position",
                validators: [validator_1.Validators.pageNavigationPositionValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PageNavigationPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.PageNavigationPaneValidator = PageNavigationPaneValidator;
var SelectionPaneValidator = /** @class */ (function (_super) {
    __extends(SelectionPaneValidator, _super);
    function SelectionPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SelectionPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.SelectionPaneValidator = SelectionPaneValidator;
var SyncSlicersPaneValidator = /** @class */ (function (_super) {
    __extends(SyncSlicersPaneValidator, _super);
    function SyncSlicersPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SyncSlicersPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SyncSlicersPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.SyncSlicersPaneValidator = SyncSlicersPaneValidator;
var VisualizationsPaneValidator = /** @class */ (function (_super) {
    __extends(VisualizationsPaneValidator, _super);
    function VisualizationsPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualizationsPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "expanded",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualizationsPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualizationsPaneValidator = VisualizationsPaneValidator;


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QnaInterpretInputDataValidator = exports.QnaSettingsValidator = exports.LoadQnaValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var LoadQnaValidator = /** @class */ (function (_super) {
    __extends(LoadQnaValidator, _super);
    function LoadQnaValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadQnaValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "datasetIds",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringArrayValidator]
            },
            {
                field: "question",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "viewMode",
                validators: [validator_1.Validators.viewModeValidator]
            },
            {
                field: "settings",
                validators: [validator_1.Validators.qnaSettingValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return LoadQnaValidator;
}(typeValidator_1.ObjectValidator));
exports.LoadQnaValidator = LoadQnaValidator;
var QnaSettingsValidator = /** @class */ (function (_super) {
    __extends(QnaSettingsValidator, _super);
    function QnaSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QnaSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "filterPaneEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "hideErrors",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "panes",
                validators: [validator_1.Validators.qnaPanesValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return QnaSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.QnaSettingsValidator = QnaSettingsValidator;
var QnaInterpretInputDataValidator = /** @class */ (function (_super) {
    __extends(QnaInterpretInputDataValidator, _super);
    function QnaInterpretInputDataValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QnaInterpretInputDataValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "datasetIds",
                validators: [validator_1.Validators.stringArrayValidator]
            },
            {
                field: "question",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return QnaInterpretInputDataValidator;
}(typeValidator_1.ObjectValidator));
exports.QnaInterpretInputDataValidator = QnaInterpretInputDataValidator;


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportCreateValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var ReportCreateValidator = /** @class */ (function (_super) {
    __extends(ReportCreateValidator, _super);
    function ReportCreateValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportCreateValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "datasetId",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "theme",
                validators: [validator_1.Validators.customThemeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ReportCreateValidator;
}(typeValidator_1.ObjectValidator));
exports.ReportCreateValidator = ReportCreateValidator;


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportLoadValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var ReportLoadValidator = /** @class */ (function (_super) {
    __extends(ReportLoadValidator, _super);
    function ReportLoadValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportLoadValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "id",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "settings",
                validators: [validator_1.Validators.settingsValidator]
            },
            {
                field: "pageName",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "filters",
                validators: [validator_1.Validators.reportLoadFiltersValidator]
            },
            {
                field: "permissions",
                validators: [validator_1.Validators.permissionsValidator]
            },
            {
                field: "viewMode",
                validators: [validator_1.Validators.viewModeValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "bookmark",
                validators: [validator_1.Validators.applyBookmarkValidator]
            },
            {
                field: "theme",
                validators: [validator_1.Validators.customThemeValidator]
            },
            {
                field: "embedUrl",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "datasetBinding",
                validators: [validator_1.Validators.datasetBindingValidator]
            },
            {
                field: "contrastMode",
                validators: [validator_1.Validators.contrastModeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ReportLoadValidator;
}(typeValidator_1.ObjectValidator));
exports.ReportLoadValidator = ReportLoadValidator;


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportParameterFieldsValidator = exports.PaginatedReportLoadValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var PaginatedReportLoadValidator = /** @class */ (function (_super) {
    __extends(PaginatedReportLoadValidator, _super);
    function PaginatedReportLoadValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginatedReportLoadValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "id",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "settings",
                validators: [validator_1.Validators.paginatedReportsettingsValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "embedUrl",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "type",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "parameterValues",
                validators: [validator_1.Validators.parameterValuesArrayValidator]
            },
            {
                field: "datasetBindings",
                validators: [validator_1.Validators.paginatedReportDatasetBindingArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PaginatedReportLoadValidator;
}(typeValidator_1.ObjectValidator));
exports.PaginatedReportLoadValidator = PaginatedReportLoadValidator;
var ReportParameterFieldsValidator = /** @class */ (function () {
    function ReportParameterFieldsValidator() {
    }
    ReportParameterFieldsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "value",
                validators: [validator_1.Validators.stringValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ReportParameterFieldsValidator;
}());
exports.ReportParameterFieldsValidator = ReportParameterFieldsValidator;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SaveAsParametersValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var SaveAsParametersValidator = /** @class */ (function (_super) {
    __extends(SaveAsParametersValidator, _super);
    function SaveAsParametersValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaveAsParametersValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SaveAsParametersValidator;
}(typeValidator_1.ObjectValidator));
exports.SaveAsParametersValidator = SaveAsParametersValidator;


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SlicerTargetSelectorValidator = exports.VisualTypeSelectorValidator = exports.VisualSelectorValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var typeValidator_2 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var VisualSelectorValidator = /** @class */ (function (_super) {
    __extends(VisualSelectorValidator, _super);
    function VisualSelectorValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualSelectorValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                // Not required for this selector only - Backward compatibility
                field: "$schema",
                validators: [validator_1.Validators.stringValidator, new typeValidator_2.SchemaValidator("http://powerbi.com/product/schema#visualSelector")]
            },
            {
                field: "visualName",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualSelectorValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualSelectorValidator = VisualSelectorValidator;
var VisualTypeSelectorValidator = /** @class */ (function (_super) {
    __extends(VisualTypeSelectorValidator, _super);
    function VisualTypeSelectorValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualTypeSelectorValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "$schema",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator, new typeValidator_2.SchemaValidator("http://powerbi.com/product/schema#visualTypeSelector")]
            },
            {
                field: "visualType",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualTypeSelectorValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualTypeSelectorValidator = VisualTypeSelectorValidator;
var SlicerTargetSelectorValidator = /** @class */ (function (_super) {
    __extends(SlicerTargetSelectorValidator, _super);
    function SlicerTargetSelectorValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlicerTargetSelectorValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "$schema",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator, new typeValidator_2.SchemaValidator("http://powerbi.com/product/schema#slicerTargetSelector")]
            },
            {
                field: "target",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.slicerTargetValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SlicerTargetSelectorValidator;
}(typeValidator_1.ObjectValidator));
exports.SlicerTargetSelectorValidator = SlicerTargetSelectorValidator;


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginatedReportSettingsValidator = exports.SettingsValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var SettingsValidator = /** @class */ (function (_super) {
    __extends(SettingsValidator, _super);
    function SettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "filterPaneEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "navContentPaneEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "bookmarksPaneEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "useCustomSaveAsDialog",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "extensions",
                validators: [validator_1.Validators.extensionsValidator]
            },
            {
                field: "layoutType",
                validators: [validator_1.Validators.layoutTypeValidator]
            },
            {
                field: "customLayout",
                validators: [validator_1.Validators.customLayoutValidator]
            },
            {
                field: "background",
                validators: [validator_1.Validators.backgroundValidator]
            },
            {
                field: "visualSettings",
                validators: [validator_1.Validators.visualSettingsValidator]
            },
            {
                field: "hideErrors",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "commands",
                validators: [validator_1.Validators.commandsSettingsArrayValidator]
            },
            {
                field: "hyperlinkClickBehavior",
                validators: [validator_1.Validators.hyperlinkClickBehaviorValidator]
            },
            {
                field: "bars",
                validators: [validator_1.Validators.reportBarsValidator]
            },
            {
                field: "panes",
                validators: [validator_1.Validators.reportPanesValidator]
            },
            {
                field: "personalBookmarksEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "persistentFiltersEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "visualRenderedEvents",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "authoringHintsEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "printSettings",
                validators: [validator_1.Validators.printSettingsValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.SettingsValidator = SettingsValidator;
var PaginatedReportSettingsValidator = /** @class */ (function (_super) {
    __extends(PaginatedReportSettingsValidator, _super);
    function PaginatedReportSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginatedReportSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "commands",
                validators: [validator_1.Validators.paginatedReportCommandsValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PaginatedReportSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.PaginatedReportSettingsValidator = PaginatedReportSettingsValidator;


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SlicerStateValidator = exports.SlicerValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var SlicerValidator = /** @class */ (function (_super) {
    __extends(SlicerValidator, _super);
    function SlicerValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlicerValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "selector",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.slicerSelectorValidator]
            },
            {
                field: "state",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.slicerStateValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SlicerValidator;
}(typeValidator_1.ObjectValidator));
exports.SlicerValidator = SlicerValidator;
var SlicerStateValidator = /** @class */ (function (_super) {
    __extends(SlicerStateValidator, _super);
    function SlicerStateValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlicerStateValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "filters",
                validators: [validator_1.Validators.filtersArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SlicerStateValidator;
}(typeValidator_1.ObjectValidator));
exports.SlicerStateValidator = SlicerStateValidator;


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TileLoadValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var TileLoadValidator = /** @class */ (function (_super) {
    __extends(TileLoadValidator, _super);
    function TileLoadValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileLoadValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "id",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "dashboardId",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "pageView",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "width",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "height",
                validators: [validator_1.Validators.numberValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return TileLoadValidator;
}(typeValidator_1.ObjectValidator));
exports.TileLoadValidator = TileLoadValidator;


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VisualHeaderValidator = exports.VisualHeaderSettingsValidator = exports.VisualSettingsValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var VisualSettingsValidator = /** @class */ (function (_super) {
    __extends(VisualSettingsValidator, _super);
    function VisualSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visualHeaders",
                validators: [validator_1.Validators.visualHeadersValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualSettingsValidator = VisualSettingsValidator;
var VisualHeaderSettingsValidator = /** @class */ (function (_super) {
    __extends(VisualHeaderSettingsValidator, _super);
    function VisualHeaderSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualHeaderSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualHeaderSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualHeaderSettingsValidator = VisualHeaderSettingsValidator;
var VisualHeaderValidator = /** @class */ (function (_super) {
    __extends(VisualHeaderValidator, _super);
    function VisualHeaderValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualHeaderValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "settings",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.visualHeaderSettingsValidator]
            },
            {
                field: "selector",
                validators: [validator_1.Validators.visualHeaderSelectorValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualHeaderValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualHeaderValidator = VisualHeaderValidator;


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnyOfValidator = void 0;
var AnyOfValidator = /** @class */ (function () {
    function AnyOfValidator(validators) {
        this.validators = validators;
    }
    AnyOfValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var valid = false;
        for (var _i = 0, _a = this.validators; _i < _a.length; _i++) {
            var validator = _a[_i];
            var errors = validator.validate(input, path, field);
            if (!errors) {
                valid = true;
                break;
            }
        }
        if (!valid) {
            return [{
                    message: field + " property is invalid",
                    path: (path ? path + "." : "") + field,
                    keyword: "invalid"
                }];
        }
        return null;
    };
    return AnyOfValidator;
}());
exports.AnyOfValidator = AnyOfValidator;


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FieldForbiddenValidator = void 0;
var FieldForbiddenValidator = /** @class */ (function () {
    function FieldForbiddenValidator() {
    }
    FieldForbiddenValidator.prototype.validate = function (input, path, field) {
        if (input !== undefined) {
            return [{
                    message: field + " is forbidden",
                    path: (path ? path + "." : "") + field,
                    keyword: "forbidden"
                }];
        }
        return null;
    };
    return FieldForbiddenValidator;
}());
exports.FieldForbiddenValidator = FieldForbiddenValidator;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FieldRequiredValidator = void 0;
var FieldRequiredValidator = /** @class */ (function () {
    function FieldRequiredValidator() {
    }
    FieldRequiredValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return [{
                    message: field + " is required",
                    path: (path ? path + "." : "") + field,
                    keyword: "required"
                }];
        }
        return null;
    };
    return FieldRequiredValidator;
}());
exports.FieldRequiredValidator = FieldRequiredValidator;


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapValidator = void 0;
var typeValidator_1 = __webpack_require__(4);
var MapValidator = /** @class */ (function (_super) {
    __extends(MapValidator, _super);
    function MapValidator(keyValidators, valueValidators) {
        var _this = _super.call(this) || this;
        _this.keyValidators = keyValidators;
        _this.valueValidators = valueValidators;
        return _this;
    }
    MapValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        for (var key in input) {
            if (input.hasOwnProperty(key)) {
                var fieldsPath = (path ? path + "." : "") + field + "." + key;
                for (var _i = 0, _a = this.keyValidators; _i < _a.length; _i++) {
                    var keyValidator = _a[_i];
                    errors = keyValidator.validate(key, fieldsPath, field);
                    if (errors) {
                        return errors;
                    }
                }
                for (var _b = 0, _c = this.valueValidators; _b < _c.length; _b++) {
                    var valueValidator = _c[_b];
                    errors = valueValidator.validate(input[key], fieldsPath, field);
                    if (errors) {
                        return errors;
                    }
                }
            }
        }
        return null;
    };
    return MapValidator;
}(typeValidator_1.ObjectValidator));
exports.MapValidator = MapValidator;


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParametersPanelValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var ParametersPanelValidator = /** @class */ (function (_super) {
    __extends(ParametersPanelValidator, _super);
    function ParametersPanelValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParametersPanelValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "expanded",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "enabled",
                validators: [validator_1.Validators.booleanValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ParametersPanelValidator;
}(typeValidator_1.ObjectValidator));
exports.ParametersPanelValidator = ParametersPanelValidator;


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableDataValidator = exports.TableSchemaValidator = exports.ColumnSchemaValidator = exports.CredentialsValidator = exports.DatasourceConnectionConfigValidator = exports.DatasetCreateConfigValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var DatasetCreateConfigValidator = /** @class */ (function (_super) {
    __extends(DatasetCreateConfigValidator, _super);
    function DatasetCreateConfigValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatasetCreateConfigValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "locale",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "mashupDocument",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "datasourceConnectionConfig",
                validators: [validator_1.Validators.datasourceConnectionConfigValidator]
            },
            {
                field: "tableSchemaList",
                validators: [validator_1.Validators.tableSchemaListValidator]
            },
            {
                field: "data",
                validators: [validator_1.Validators.tableDataArrayValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        errors = multipleFieldsValidator.validate(input, path, field);
        if (errors) {
            return errors;
        }
        if (input["datasourceConnectionConfig"] && input["mashupDocument"] == null) {
            return [{
                    message: "mashupDocument cannot be empty when datasourceConnectionConfig is presented"
                }];
        }
        if (input["data"] && input["tableSchemaList"] == null) {
            return [{
                    message: "tableSchemaList cannot be empty when data is provided"
                }];
        }
        if (input["data"] == null && input["mashupDocument"] == null) {
            return [{
                    message: "At least one of data or mashupDocument must be provided"
                }];
        }
    };
    return DatasetCreateConfigValidator;
}(typeValidator_1.ObjectValidator));
exports.DatasetCreateConfigValidator = DatasetCreateConfigValidator;
var DatasourceConnectionConfigValidator = /** @class */ (function (_super) {
    __extends(DatasourceConnectionConfigValidator, _super);
    function DatasourceConnectionConfigValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatasourceConnectionConfigValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "dataCacheMode",
                validators: [validator_1.Validators.dataCacheModeValidator]
            },
            {
                field: "credentials",
                validators: [validator_1.Validators.credentialsValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return DatasourceConnectionConfigValidator;
}(typeValidator_1.ObjectValidator));
exports.DatasourceConnectionConfigValidator = DatasourceConnectionConfigValidator;
var CredentialsValidator = /** @class */ (function (_super) {
    __extends(CredentialsValidator, _super);
    function CredentialsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CredentialsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "credentialType",
                validators: [validator_1.Validators.credentialTypeValidator]
            },
            {
                field: "credentialDetails",
                validators: [validator_1.Validators.credentialDetailsValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CredentialsValidator;
}(typeValidator_1.ObjectValidator));
exports.CredentialsValidator = CredentialsValidator;
var ColumnSchemaValidator = /** @class */ (function (_super) {
    __extends(ColumnSchemaValidator, _super);
    function ColumnSchemaValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnSchemaValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "displayName",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "dataType",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ColumnSchemaValidator;
}(typeValidator_1.ObjectValidator));
exports.ColumnSchemaValidator = ColumnSchemaValidator;
var TableSchemaValidator = /** @class */ (function (_super) {
    __extends(TableSchemaValidator, _super);
    function TableSchemaValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableSchemaValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "columns",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.columnSchemaArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return TableSchemaValidator;
}(typeValidator_1.ObjectValidator));
exports.TableSchemaValidator = TableSchemaValidator;
var TableDataValidator = /** @class */ (function (_super) {
    __extends(TableDataValidator, _super);
    function TableDataValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableDataValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "rows",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.rawDataValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return TableDataValidator;
}(typeValidator_1.ObjectValidator));
exports.TableDataValidator = TableDataValidator;


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuickCreateValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var QuickCreateValidator = /** @class */ (function (_super) {
    __extends(QuickCreateValidator, _super);
    function QuickCreateValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickCreateValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "theme",
                validators: [validator_1.Validators.customThemeValidator]
            },
            {
                field: "datasetCreateConfig",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.datasetCreateConfigValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return QuickCreateValidator;
}(typeValidator_1.ObjectValidator));
exports.QuickCreateValidator = QuickCreateValidator;


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrintSettingsValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var PrintSettingsValidator = /** @class */ (function (_super) {
    __extends(PrintSettingsValidator, _super);
    function PrintSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrintSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "browserPrintAdjustmentsMode",
                validators: [new typeValidator_1.EnumValidator([0, 1])]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PrintSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.PrintSettingsValidator = PrintSettingsValidator;


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginatedReportDatasetBindingValidator = void 0;
var multipleFieldsValidator_1 = __webpack_require__(3);
var typeValidator_1 = __webpack_require__(4);
var validator_1 = __webpack_require__(1);
var PaginatedReportDatasetBindingValidator = /** @class */ (function (_super) {
    __extends(PaginatedReportDatasetBindingValidator, _super);
    function PaginatedReportDatasetBindingValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginatedReportDatasetBindingValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "sourceDatasetId",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "targetDatasetId",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PaginatedReportDatasetBindingValidator;
}(typeValidator_1.ObjectValidator));
exports.PaginatedReportDatasetBindingValidator = PaginatedReportDatasetBindingValidator;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=models.js.map
// SIG // Begin signature block
// SIG // MIIr4gYJKoZIhvcNAQcCoIIr0zCCK88CAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // WNb2+8Nx7D6LpbfhohPb+cdkaBYb+kv1f6wvqYYucZ+g
// SIG // ghFuMIIIfjCCB2agAwIBAgITNgAAAchkggAwtCOCeAAC
// SIG // AAAByDANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjMwMzIwMjAw
// SIG // MDMxWhcNMjQwMzE5MjAwMDMxWjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArKhH7cINkFWa
// SIG // NPbW4CGpQwfhD2vWIwm5iDQIGjc5Siq9Ay9yIB0MPvck
// SIG // Xnp402u+fVvy8Zb+cPXCyiemnyFG7wYwKgPF4+x2awd4
// SIG // beHkFvcWtTV+Yz5oEKVVT0oWR5NfsUHuqEGDlIVFAYB/
// SIG // 7FIlZQWRiC4emeka+jYoFTl50U2mDQ/CvdCquvAd+dBc
// SIG // hoH0BLXWh00rK3NqRoqQj50vTHl+EB5HCer6+uP7iFKi
// SIG // a3vFw1uDonKVKmcz4x8GJo4y5p7plcr4VAB5FdwTpZrz
// SIG // hFObBzJxcxdIT3qMm07RYM6K1EbUn3AKKTEG2O9etQ06
// SIG // oIKCcGHltvj0NZp37NkEJwIDAQABo4IFijCCBYYwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUskGhjtP5WCMqHOBI
// SIG // YEqYPR0vFkMwDgYDVR0PAQH/BAQDAgeAMEUGA1UdEQQ+
// SIG // MDykOjA4MR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xFjAUBgNVBAUTDTIzNjE2Nys1MDAzNjAwggHm
// SIG // BgNVHR8EggHdMIIB2TCCAdWgggHRoIIBzYY/aHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraWluZnJhL0NSTC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMS5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMi5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsMy5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshjFodHRwOi8vY3JsNC5hbWUuZ2Js
// SIG // L2NybC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshoG9
// SIG // bGRhcDovLy9DTj1BTUUlMjBDUyUyMENBJTIwMDEoMiks
// SIG // Q049QlkyUEtJQ1NDQTAxLENOPUNEUCxDTj1QdWJsaWMl
// SIG // MjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1D
// SIG // b25maWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlm
// SIG // aWNhdGVSZXZvY2F0aW9uTGlzdD9iYXNlP29iamVjdENs
// SIG // YXNzPWNSTERpc3RyaWJ1dGlvblBvaW50MB8GA1UdIwQY
// SIG // MBaAFJZRhOBrb3v+2Aarw/KF5imuavnUMB8GA1UdJQQY
// SIG // MBYGCisGAQQBgjdbAQEGCCsGAQUFBwMDMA0GCSqGSIb3
// SIG // DQEBCwUAA4IBAQDG1533NPfZ4bL0nuae9PWCGH0ZmNci
// SIG // CejMn71r/igTKxx635KmcI38lYY/vhbu++jhMlN3V3Ke
// SIG // AJEmuUdbTxtaXlhhJwWW/3i4GfQGjFIot6N3F9OuXURf
// SIG // 8jc4LypadrWJV1l1bmZ/G75FiqMoEDF7DYjyYJ9BNUU3
// SIG // alOgYyXygBJJjSfJR/8Vgd8hYCExm9DJgXDlSuKZ7ZeD
// SIG // ailP2EGIO5+m0QGI1tyMKdc/YgPrJUw7NI9wmx8ET/J5
// SIG // fxrrh21fdowYoGCYnphYtGhGBvnqDdaHXbVECC3gzbU+
// SIG // nLfeFF30rr/jHxoXWzKfFcYCj5Xnw52bu5mDZB8jF/dH
// SIG // vhlPMIII6DCCBtCgAwIBAgITHwAAAFHqj/accwyoOwAA
// SIG // AAAAUTANBgkqhkiG9w0BAQsFADA8MRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRAw
// SIG // DgYDVQQDEwdhbWVyb290MB4XDTIxMDUyMTE4NDQxNFoX
// SIG // DTI2MDUyMTE4NTQxNFowQTETMBEGCgmSJomT8ixkARkW
// SIG // A0dCTDETMBEGCgmSJomT8ixkARkWA0FNRTEVMBMGA1UE
// SIG // AxMMQU1FIENTIENBIDAxMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAyZpSCX0Bno1W1yqXMhT6BUlJ
// SIG // ZWpa4p3xFeiTHO4vm2Q6C/azR5xwxnyYHrkSGDtS2P9X
// SIG // +KDE64V20mmEQkubxnPNeOVnE2RvdPGxgwlq+BhS3ONd
// SIG // VsQPj79q7XgHM9HhzB9+qk0PC9KN1zm9p/seyiRS6JF1
// SIG // dbOqRf1pUl7FAVxmgiCFgV8hHIb/rDPXig7FDi3S0yEx
// SIG // 2CUDVpIq8jEhG8anUFE1WYxM+ni0S5KHwwKPKV4qyGDo
// SIG // DO+9AmDoma3Chyu5WDlW5cdtqXTWsGPE3umtnX6Amlld
// SIG // UFLms4OVR4guKf+n5LIBCC6bTiocfXPomqYjYTKx7AGM
// SIG // faVLaaXmhQIDAQABo4IE3DCCBNgwEgYJKwYBBAGCNxUB
// SIG // BAUCAwIAAjAjBgkrBgEEAYI3FQIEFgQUEmgkQiFHy9Rr
// SIG // vjHPIKTACyN/P0cwHQYDVR0OBBYEFJZRhOBrb3v+2Aar
// SIG // w/KF5imuavnUMIIBBAYDVR0lBIH8MIH5BgcrBgEFAgMF
// SIG // BggrBgEFBQcDAQYIKwYBBQUHAwIGCisGAQQBgjcUAgEG
// SIG // CSsGAQQBgjcVBgYKKwYBBAGCNwoDDAYJKwYBBAGCNxUG
// SIG // BggrBgEFBQcDCQYIKwYBBQUIAgIGCisGAQQBgjdAAQEG
// SIG // CysGAQQBgjcKAwQBBgorBgEEAYI3CgMEBgkrBgEEAYI3
// SIG // FQUGCisGAQQBgjcUAgIGCisGAQQBgjcUAgMGCCsGAQUF
// SIG // BwMDBgorBgEEAYI3WwEBBgorBgEEAYI3WwIBBgorBgEE
// SIG // AYI3WwMBBgorBgEEAYI3WwUBBgorBgEEAYI3WwQBBgor
// SIG // BgEEAYI3WwQCMBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIA
// SIG // QwBBMAsGA1UdDwQEAwIBhjASBgNVHRMBAf8ECDAGAQH/
// SIG // AgEAMB8GA1UdIwQYMBaAFCleUV5krjS566ycDaeMdQHR
// SIG // CQsoMIIBaAYDVR0fBIIBXzCCAVswggFXoIIBU6CCAU+G
// SIG // MWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2lpbmZy
// SIG // YS9jcmwvYW1lcm9vdC5jcmyGI2h0dHA6Ly9jcmwyLmFt
// SIG // ZS5nYmwvY3JsL2FtZXJvb3QuY3JshiNodHRwOi8vY3Js
// SIG // My5hbWUuZ2JsL2NybC9hbWVyb290LmNybIYjaHR0cDov
// SIG // L2NybDEuYW1lLmdibC9jcmwvYW1lcm9vdC5jcmyGgaps
// SIG // ZGFwOi8vL0NOPWFtZXJvb3QsQ049QU1FUm9vdCxDTj1D
// SIG // RFAsQ049UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049
// SIG // U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUs
// SIG // REM9R0JMP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Q
// SIG // b2ludDCCAasGCCsGAQUFBwEBBIIBnTCCAZkwRwYIKwYB
// SIG // BQUHMAKGO2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9w
// SIG // a2lpbmZyYS9jZXJ0cy9BTUVSb290X2FtZXJvb3QuY3J0
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMi5hbWUuZ2Js
// SIG // L2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcGCCsGAQUF
// SIG // BzAChitodHRwOi8vY3JsMy5hbWUuZ2JsL2FpYS9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMS5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MIGiBggrBgEFBQcwAoaBlWxkYXA6Ly8vQ049
// SIG // YW1lcm9vdCxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIw
// SIG // U2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJh
// SIG // dGlvbixEQz1BTUUsREM9R0JMP2NBQ2VydGlmaWNhdGU/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jZXJ0aWZpY2F0aW9uQXV0
// SIG // aG9yaXR5MA0GCSqGSIb3DQEBCwUAA4ICAQBQECO3Tw/o
// SIG // 317Rrd7yadqcswPx1LvIYymkaTN6KcmuRt6HKa0Xe73U
// SIG // x2/AQ30TfgA9GBJngweRykKBusRzyOU17iIubJvy3gA2
// SIG // 1dwtqtB0DsoEv1U/ptVu2v++doTCJ/i+GbssVXkgaX8H
// SIG // +6EOGEmT4evp4GbwR4HwWlc+Dvf8HH8PdUA2Z04CvcwI
// SIG // fckSipbNm84jxJ8XjmTFTWscldL9edj2NsY6iGnyJFIy
// SIG // ur2PS7VRYyV3p1VAJp91gj1jRQtWEyCB8P5g9nE3z8u0
// SIG // ANaU/hjwEQCrdGyravWgnf2JtG+bT26YAokbc8m+32zU
// SIG // tXRO+NK3tAjhOu2FdsG3qNrF4sc7y37R/C+7Pcb/cFfh
// SIG // ttqsirepZii4xStcjMODYuXzGm3IJs0b0owHG6oKd7ZO
// SIG // GvHpmmh9K8/DLriD/sq8bURD10qi/wuW8zM7IpLg1vcR
// SIG // 9dIK2mc0pj44pc6UX0XbttP/VEJgu3lT2eI9VjWtaKjx
// SIG // 38xE9woSMyekPRtzTwgfuysF9DkJisr+yA4po/FPxpbB
// SIG // w9c/hBf32DH/GFxteS2pmjgKIbMP8sDukmEq3lVvuWNJ
// SIG // sybrZwQvQpvaM49fv+JKpLK5YWYEfwksYRR9wU8Hh/ID
// SIG // 9hRCEkbUoQ2W7mMpsp2Nbp/kcn4ivfolUy3Q9Yf0scsQ
// SIG // 6WTLYpm+AoCUJTGCGcwwghnIAgEBMFgwQTETMBEGCgmS
// SIG // JomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixkARkWA0FN
// SIG // RTEVMBMGA1UEAxMMQU1FIENTIENBIDAxAhM2AAAByGSC
// SIG // ADC0I4J4AAIAAAHIMA0GCWCGSAFlAwQCAQUAoIGuMBkG
// SIG // CSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisGAQQB
// SIG // gjcCAQsxDjAMBgorBgEEAYI3AgEVMC8GCSqGSIb3DQEJ
// SIG // BDEiBCDVsRlmuqGGWLZSefk2CBRUhBuBOD+bHy0Gwl8T
// SIG // 0JKkqjBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBpAGMA
// SIG // cgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBADFsQE1+4mJA
// SIG // S6P65AMT7BcL1WNe0RUuA0Bt+CuVtbwa1zq+ZGDtexdb
// SIG // CWxBr5U4oZF6mHY6AyKf+NTFgvZczY3QqYh19SMKGujp
// SIG // FgxBvG0aQ/dVQDtKC5Le2cce15l4X6SAsYk+8q0xMjti
// SIG // QgSfBIEkJZ8FtDwtFaHO5GN/OkEt8M7NEzQOZQcfvSgb
// SIG // lMV8hY3Lf0dAPg4jyay3bQcPjOLsPs5G4GmTDM4qdPYM
// SIG // w5+IzUudbU8mNTmPppT3u2A2xGoQ8Ky5/mava+b11bSM
// SIG // GaJ1QFVCATVph88Fw/958W9et3okjG8TffdVb9J/KW09
// SIG // +oUXuBUjmljUn2ExNxJUxGyhgheUMIIXkAYKKwYBBAGC
// SIG // NwMDATGCF4Awghd8BgkqhkiG9w0BBwKgghdtMIIXaQIB
// SIG // AzEPMA0GCWCGSAFlAwQCAQUAMIIBUgYLKoZIhvcNAQkQ
// SIG // AQSgggFBBIIBPTCCATkCAQEGCisGAQQBhFkKAwEwMTAN
// SIG // BglghkgBZQMEAgEFAAQgVH8KNp+SiwyXjVpLA60gPo3S
// SIG // 9GbqNxZ81BNBirXMZRMCBmVWyBjWNBgTMjAyMzExMjkx
// SIG // MDA3MTguNDMyWjAEgAIB9KCB0aSBzjCByzELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjElMCMGA1UECxMcTWljcm9zb2Z0IEFt
// SIG // ZXJpY2EgT3BlcmF0aW9uczEnMCUGA1UECxMeblNoaWVs
// SIG // ZCBUU1MgRVNOOkEwMDAtMDVFMC1EOTQ3MSUwIwYDVQQD
// SIG // ExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNloIIR
// SIG // 6jCCByAwggUIoAMCAQICEzMAAAHQdwiq76MXxt0AAQAA
// SIG // AdAwDQYJKoZIhvcNAQELBQAwfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTAwHhcNMjMwNTI1MTkxMjE0WhcNMjQw
// SIG // MjAxMTkxMjE0WjCByzELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEl
// SIG // MCMGA1UECxMcTWljcm9zb2Z0IEFtZXJpY2EgT3BlcmF0
// SIG // aW9uczEnMCUGA1UECxMeblNoaWVsZCBUU1MgRVNOOkEw
// SIG // MDAtMDVFMC1EOTQ3MSUwIwYDVQQDExxNaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBTZXJ2aWNlMIICIjANBgkqhkiG9w0B
// SIG // AQEFAAOCAg8AMIICCgKCAgEA3zJX59+X7zNFwFEpiOao
// SIG // htFMT4tuR5EsgYM5N86WDt9dXdThBBc9EKQCtt7NXSRa
// SIG // 4weYA/kjMOc+hMMQuAq11PSmkOFjR6h64Vn7aYKNzJCX
// SIG // sfX65jvTJXVH41BuerCFumFRemI1/va09SQ3Qgx26OZ2
// SIG // YmrDIoBimsBm9h6g+/5I0Ueu0b1Ye0OJ2rQFbuOmX+TC
// SIG // 74kdMTeXDRttMcAcILbWmBJOV5VC2gR+Tp189nlqCMfk
// SIG // owzuwbeQbgAVmPEr5kUHwck9nKaRM047f37NMaeAdXAB
// SIG // 1Q8JRsGbr/UX3N53XcYBaygPDFh2yRdPmllFGCAUfBct
// SIG // oLhVR6B3js3uyLG8r0a2sf//N4GKqPHOWf9f7u5Iy3E4
// SIG // IqYsmfFxEbCxBAieaMdQQS2OgI5m4AMw3TZdi3no/qiG
// SIG // 3Qa/0lLyhAvl8OMYxTDk1FVilnprdpIcJ3VHwTUezc7t
// SIG // c/S9Fr+0wGP7/r+qTYQHqITzAhSXPmpOrjA/Eyks1hY8
// SIG // OWgA5Jg/ZhrgvOsr0ipCCODGss6FHbHk9J35PGNHz47X
// SIG // cNlp3o5esyx7mF8HA2rtjtQzLqInnTVY0xd+1BJmE/qM
// SIG // QvzhV1BjwxELfbc4G0fYPBy7VHxHljrDhA+cYG+a8Mn7
// SIG // yLLOx/3HRxXCIiHM80IGJ7C8hBnqaGQ5CoUjEeXggein
// SIG // L/0CAwEAAaOCAUkwggFFMB0GA1UdDgQWBBQz4QGFktKA
// SIG // PpTrSE34ybcpdJJ0UTAfBgNVHSMEGDAWgBSfpxVdAF5i
// SIG // XYP05dJlpxtTNRnpcjBfBgNVHR8EWDBWMFSgUqBQhk5o
// SIG // dHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2Ny
// SIG // bC9NaWNyb3NvZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIw
// SIG // MjAxMCgxKS5jcmwwbAYIKwYBBQUHAQEEYDBeMFwGCCsG
// SIG // AQUFBzAChlBodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpb3BzL2NlcnRzL01pY3Jvc29mdCUyMFRpbWUtU3Rh
// SIG // bXAlMjBQQ0ElMjAyMDEwKDEpLmNydDAMBgNVHRMBAf8E
// SIG // AjAAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMIMA4GA1Ud
// SIG // DwEB/wQEAwIHgDANBgkqhkiG9w0BAQsFAAOCAgEAl4fn
// SIG // JApGWgNOkjVvqsbUvYB0KeMexvoHYpJ4CiLRK/KLZFyK
// SIG // 5lj2K2q0VgZWPdZahoopR8iJWd4jQVG2jRJmigBjGeWH
// SIG // EuyGVCj2qtY1NJrMpfvKINLfQv2duvmrcd77IR6xULko
// SIG // MEx2Vac7+5PAmJwWKMXYSNbhoah+feZqi77TLMRDf9bK
// SIG // O1Pm91Oiwq8ubsMHM+fo/Do9BlF92/omYPgLNMUzek9E
// SIG // GvATXnPy8HMqmDRGjJFtlQCq5ob1h/Dgg03F4DjZ5wAU
// SIG // BwX1yv3ywGxxRktVzTra+tv4mhwRgJKwhpegYvD38LOn
// SIG // 7PsPrBPa94V/VYNILETKB0bjGol7KxphrLmJy59wME4L
// SIG // jGrcPUfFObybVkpbtQhTuT9CxL0EIjGddrEErEAJDQ07
// SIG // Pa041TY4yFIKGelzzMZXDyA3I8cPG33m+MuMAMTNkUaF
// SIG // nMaZMfuiCH9i/m+4Cx7QcVwlieWzFu1sFAti5bW7q1MA
// SIG // b9EoI6Q7WxKsP7g4FgXqwk/mbctzXPeu4hmkI8mEB+h/
// SIG // 4fV3PLJptp+lY8kkcdrMJ1t4a+kMet1P8WPRy+hTYaxo
// SIG // hRA+2USq58L717zFUFCBJAexlBHjeoXmPIBy7dIy1d8s
// SIG // w4kAPEfKeWBoBgFbfTBMIACTWNYh7x//L84SUmRTZB/L
// SIG // L0c7Tv4t07yq42/GccIwggdxMIIFWaADAgECAhMzAAAA
// SIG // FcXna54Cm0mZAAAAAAAVMA0GCSqGSIb3DQEBCwUAMIGI
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMTIwMAYDVQQDEylNaWNy
// SIG // b3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkg
// SIG // MjAxMDAeFw0yMTA5MzAxODIyMjVaFw0zMDA5MzAxODMy
// SIG // MjVaMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMT
// SIG // HU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMIIC
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA5OGm
// SIG // TOe0ciELeaLL1yR5vQ7VgtP97pwHB9KpbE51yMo1V/YB
// SIG // f2xK4OK9uT4XYDP/XE/HZveVU3Fa4n5KWv64NmeFRiMM
// SIG // tY0Tz3cywBAY6GB9alKDRLemjkZrBxTzxXb1hlDcwUTI
// SIG // cVxRMTegCjhuje3XD9gmU3w5YQJ6xKr9cmmvHaus9ja+
// SIG // NSZk2pg7uhp7M62AW36MEBydUv626GIl3GoPz130/o5T
// SIG // z9bshVZN7928jaTjkY+yOSxRnOlwaQ3KNi1wjjHINSi9
// SIG // 47SHJMPgyY9+tVSP3PoFVZhtaDuaRr3tpK56KTesy+uD
// SIG // RedGbsoy1cCGMFxPLOJiss254o2I5JasAUq7vnGpF1tn
// SIG // YN74kpEeHT39IM9zfUGaRnXNxF803RKJ1v2lIH1+/Nme
// SIG // Rd+2ci/bfV+AutuqfjbsNkz2K26oElHovwUDo9Fzpk03
// SIG // dJQcNIIP8BDyt0cY7afomXw/TNuvXsLz1dhzPUNOwTM5
// SIG // TI4CvEJoLhDqhFFG4tG9ahhaYQFzymeiXtcodgLiMxhy
// SIG // 16cg8ML6EgrXY28MyTZki1ugpoMhXV8wdJGUlNi5UPkL
// SIG // iWHzNgY1GIRH29wb0f2y1BzFa/ZcUlFdEtsluq9QBXps
// SIG // xREdcu+N+VLEhReTwDwV2xo3xwgVGD94q0W29R6HXtqP
// SIG // nhZyacaue7e3PmriLq0CAwEAAaOCAd0wggHZMBIGCSsG
// SIG // AQQBgjcVAQQFAgMBAAEwIwYJKwYBBAGCNxUCBBYEFCqn
// SIG // Uv5kxJq+gpE8RjUpzxD/LwTuMB0GA1UdDgQWBBSfpxVd
// SIG // AF5iXYP05dJlpxtTNRnpcjBcBgNVHSAEVTBTMFEGDCsG
// SIG // AQQBgjdMg30BATBBMD8GCCsGAQUFBwIBFjNodHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL0RvY3MvUmVw
// SIG // b3NpdG9yeS5odG0wEwYDVR0lBAwwCgYIKwYBBQUHAwgw
// SIG // GQYJKwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYDVR0P
// SIG // BAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgw
// SIG // FoAU1fZWy4/oolxiaNE9lJBb186aGMQwVgYDVR0fBE8w
// SIG // TTBLoEmgR4ZFaHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0XzIw
// SIG // MTAtMDYtMjMuY3JsMFoGCCsGAQUFBwEBBE4wTDBKBggr
// SIG // BgEFBQcwAoY+aHR0cDovL3d3dy5taWNyb3NvZnQuY29t
// SIG // L3BraS9jZXJ0cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0y
// SIG // My5jcnQwDQYJKoZIhvcNAQELBQADggIBAJ1VffwqreEs
// SIG // H2cBMSRb4Z5yS/ypb+pcFLY+TkdkeLEGk5c9MTO1OdfC
// SIG // cTY/2mRsfNB1OW27DzHkwo/7bNGhlBgi7ulmZzpTTd2Y
// SIG // urYeeNg2LpypglYAA7AFvonoaeC6Ce5732pvvinLbtg/
// SIG // SHUB2RjebYIM9W0jVOR4U3UkV7ndn/OOPcbzaN9l9qRW
// SIG // qveVtihVJ9AkvUCgvxm2EhIRXT0n4ECWOKz3+SmJw7wX
// SIG // sFSFQrP8DJ6LGYnn8AtqgcKBGUIZUnWKNsIdw2FzLixr
// SIG // e24/LAl4FOmRsqlb30mjdAy87JGA0j3mSj5mO0+7hvoy
// SIG // GtmW9I/2kQH2zsZ0/fZMcm8Qq3UwxTSwethQ/gpY3UA8
// SIG // x1RtnWN0SCyxTkctwRQEcb9k+SS+c23Kjgm9swFXSVRk
// SIG // 2XPXfx5bRAGOWhmRaw2fpCjcZxkoJLo4S5pu+yFUa2pF
// SIG // EUep8beuyOiJXk+d0tBMdrVXVAmxaQFEfnyhYWxz/gq7
// SIG // 7EFmPWn9y8FBSX5+k77L+DvktxW/tM4+pTFRhLy/AsGC
// SIG // onsXHRWJjXD+57XQKBqJC4822rpM+Zv/Cuk0+CQ1Zyvg
// SIG // DbjmjJnW4SLq8CdCPSWU5nR0W2rRnj7tfqAxM328y+l7
// SIG // vzhwRNGQ8cirOoo6CGJ/2XBjU02N7oJtpQUQwXEGahC0
// SIG // HVUzWLOhcGbyoYIDTTCCAjUCAQEwgfmhgdGkgc4wgcsx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xJTAjBgNVBAsTHE1pY3Jv
// SIG // c29mdCBBbWVyaWNhIE9wZXJhdGlvbnMxJzAlBgNVBAsT
// SIG // Hm5TaGllbGQgVFNTIEVTTjpBMDAwLTA1RTAtRDk0NzEl
// SIG // MCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vy
// SIG // dmljZaIjCgEBMAcGBSsOAwIaAxUAvLfIU/CilF/dZVOR
// SIG // akT/Qn7vTImggYMwgYCkfjB8MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0EgMjAxMDANBgkqhkiG9w0BAQsFAAIFAOkRFtcw
// SIG // IhgPMjAyMzExMjkwMTQ4MDdaGA8yMDIzMTEzMDAxNDgw
// SIG // N1owdDA6BgorBgEEAYRZCgQBMSwwKjAKAgUA6REW1wIB
// SIG // ADAHAgEAAgIVNTAHAgEAAgITvDAKAgUA6RJoVwIBADA2
// SIG // BgorBgEEAYRZCgQCMSgwJjAMBgorBgEEAYRZCgMCoAow
// SIG // CAIBAAIDB6EgoQowCAIBAAIDAYagMA0GCSqGSIb3DQEB
// SIG // CwUAA4IBAQBDRkay9YCY6kJnV49gl7qHdAW9dEHIdQJ7
// SIG // 8yScGB6ENXSC13GxUFyytoxGBQuLs+Do9DZQSOP/HfOq
// SIG // w2K4SIOd4ewrz11vl9nl2lgufCXAWW81VM4r0tFNbjA0
// SIG // yD7gRQRBuEGiAqS/Vfa7ECvQFT3fRsQzK5X4u755LI0e
// SIG // +XskhL+1sOYwu5DPyUzbMKWilqtTRJBmQr/o7Cy5WqQj
// SIG // kLyW2jR4B8HEoKwozp/j8/RViWSSjRpwa6JVyglX6eVR
// SIG // Qwd9K9+7ry7q6q+UEB89aV7eZw+BtGsnJXK8QMpXhOm9
// SIG // 2ksvWCSb6T56pCKmyOh5qljtvtwH0Vcl3zqxoGLk3YPG
// SIG // MYIEDTCCBAkCAQEwgZMwfDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAg
// SIG // UENBIDIwMTACEzMAAAHQdwiq76MXxt0AAQAAAdAwDQYJ
// SIG // YIZIAWUDBAIBBQCgggFKMBoGCSqGSIb3DQEJAzENBgsq
// SIG // hkiG9w0BCRABBDAvBgkqhkiG9w0BCQQxIgQgsygGDo1N
// SIG // QTgwixwnk3X7lr4fEQUSawZLdl+M2Eq4GN4wgfoGCyqG
// SIG // SIb3DQEJEAIvMYHqMIHnMIHkMIG9BCAIlUAGX7TT/zHd
// SIG // RNmMPnwV2vcOn45k2eVgHq600j8J1zCBmDCBgKR+MHwx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jv
// SIG // c29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwAhMzAAAB0HcI
// SIG // qu+jF8bdAAEAAAHQMCIEIJIeQdfA4XjI5/3kM0OGSarc
// SIG // drYw3rRohew8uLY7gBZSMA0GCSqGSIb3DQEBCwUABIIC
// SIG // AEB1eCPx7oSkWVD/gJDRN3f6QS/1B4Cg6YJ3wuB6H3si
// SIG // 0G6esnx2UWYfPxhqmvqnebeRPY9yHvAuMNhEqOa0z1xP
// SIG // /ezMKbdyZZ1KSnpf+G30pg7OvBkxoBT+y0w4TuXct76M
// SIG // R8AhK40oE6Lcom5sbvRvimzKlh3vgQkZWknZ5zqUsidp
// SIG // O8+TBvf9vQG1StTehatPSf2sH/bAwcw20gRij6ozBD2D
// SIG // l7oi0W5UhaO5GrsdLe14Y8POi2aqY+fPZlRtM5ocAJ2a
// SIG // nfyCChsYbzcM1+lgBEJMu2qSsERBeq9lbVFCJ7NMwH/N
// SIG // a/ztGKzpDIJz81dhqX/GgGmFzEGc1/1jMkLLbWYoKgaa
// SIG // e6ZIAbgkmW4ezZ6hU2GZhcetbId1rJMmtaZw/yos3goK
// SIG // Shrmfk/OBTUMs9wh2NqrSVDD8YHPPKO9Uh9igKw8TXXD
// SIG // Ld2LM20WU7t52keJNmptgb6//7mOc2f4jhX6gpQTYAmb
// SIG // iBco7ZsIPLnBEXeo3tqZY3x/9eJ3yWiXwOreceKo0xMN
// SIG // Om+ijo4ghC9Ud0aY8hTLm6NrmmbwR5KjtFBMRs0+jNIP
// SIG // Asg7HDJ2NpLpA08AG+1XOSKghGxm+UQMbuNFMeLlK+QX
// SIG // 55chb2/UprBeGk83G+GHOM7Hr4fuUN1JAUM3zwt3GpXo
// SIG // 0BNZKjbAXaYgx1eeh6dNirnW
// SIG // End signature block
