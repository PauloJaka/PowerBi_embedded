// powerbi-models v1.14.0
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
export declare type KeyValuePair = {
    key: string;
    value: string;
};
export interface ITechnicalDetails {
    requestId?: string;
    errorInfo?: KeyValuePair[];
}
export interface IError {
    message: string;
    detailedMessage?: string;
    errorCode?: string;
    level?: TraceType;
    technicalDetails?: ITechnicalDetails;
}
export declare enum TraceType {
    Information = 0,
    Verbose = 1,
    Warning = 2,
    Error = 3,
    ExpectedError = 4,
    UnexpectedError = 5,
    Fatal = 6
}
export declare enum PageSizeType {
    Widescreen = 0,
    Standard = 1,
    Cortana = 2,
    Letter = 3,
    Custom = 4,
    Mobile = 5
}
export declare enum DisplayOption {
    FitToPage = 0,
    FitToWidth = 1,
    ActualSize = 2
}
export declare enum BackgroundType {
    Default = 0,
    Transparent = 1
}
export interface IPageSize {
    type: PageSizeType;
}
export interface ICustomPageSize extends IPageSize {
    width?: number;
    height?: number;
}
export declare type PagesLayout = {
    [key: string]: IPageLayout;
};
export declare type VisualsLayout = {
    [key: string]: IVisualLayout;
};
export interface IPageLayout {
    defaultLayout?: IVisualLayout;
    visualsLayout: VisualsLayout;
}
export declare enum VisualContainerDisplayMode {
    Visible = 0,
    Hidden = 1
}
export declare enum LayoutType {
    Master = 0,
    Custom = 1,
    MobilePortrait = 2,
    MobileLandscape = 3
}
export declare enum HyperlinkClickBehavior {
    Navigate = 0,
    NavigateAndRaiseEvent = 1,
    RaiseEvent = 2
}
export interface IVisualLayout {
    x?: number;
    y?: number;
    z?: number;
    width?: number;
    height?: number;
    displayState?: IVisualContainerDisplayState;
}
export interface IVisualContainerDisplayState {
    mode: VisualContainerDisplayMode;
}
export declare enum ReportAlignment {
    Left = 0,
    Center = 1,
    Right = 2,
    None = 3
}
export interface ICustomLayout {
    pageSize?: IPageSize;
    displayOption?: DisplayOption;
    pagesLayout?: PagesLayout;
    reportAlignment?: ReportAlignment;
}
export interface IReport {
    id: string;
    displayName: string;
}
export declare enum SectionVisibility {
    AlwaysVisible = 0,
    HiddenInViewMode = 1
}
export interface ICanvasStyle {
    color?: string;
    transparency?: number;
    hasImage?: boolean;
}
export interface IPageBackground extends ICanvasStyle {
}
export interface IPageWallpaper extends ICanvasStyle {
}
export interface IPage {
    name: string;
    displayName: string;
    isActive?: boolean;
    visibility?: SectionVisibility;
    defaultSize?: ICustomPageSize;
    mobileSize?: ICustomPageSize;
    defaultDisplayOption?: DisplayOption;
    background?: IPageBackground;
    wallpaper?: IPageWallpaper;
}
export interface IVisual {
    name: string;
    title: string;
    type: string;
    layout?: IVisualLayout;
    mobilePortraitLayout?: IVisualLayout;
}
export interface IDatasetBinding {
    datasetId?: string;
    paginatedReportBindings?: IPaginatedReportDatasetBinding[];
}
export interface IPaginatedReportDatasetBinding {
    sourceDatasetId: string;
    targetDatasetId: string;
}
export declare enum Permissions {
    Read = 0,
    ReadWrite = 1,
    Copy = 2,
    Create = 4,
    All = 7
}
export declare enum ViewMode {
    View = 0,
    Edit = 1
}
export declare enum TokenType {
    Aad = 0,
    Embed = 1
}
export declare enum ContrastMode {
    None = 0,
    HighContrast1 = 1,
    HighContrast2 = 2,
    HighContrastBlack = 3,
    HighContrastWhite = 4
}
export declare type PageView = "fitToWidth" | "oneColumn" | "actualSize";
export interface IQnaVisualRenderedEvent {
    question: string;
    normalizedQuestion?: string;
}
export interface IVisualCustomCommandEvent {
    visualName: string;
    command: string;
}
export interface ISelection {
    visual: IVisual;
    page: IPage;
    report: IReport;
    dataPoints: IIdentityValue<IEqualsDataReference>[];
    regions: IIdentityValue<IEqualsDataReference | IBetweenDataReference>[];
    filters: IFilter[];
}
export declare type ISelectable = IVisual;
export interface ICavasItemsSelection extends ISelection {
    selectedItems?: ISelectable[];
}
export interface ISwipeEvent {
    currentPosition: IPosition;
    startPosition: IPosition;
}
export interface EventHooks {
    applicationContextProvider?: Function;
    accessTokenProvider?: Function;
}
export interface IPosition {
    x: number;
    y: number;
}
export declare type Extensions = IExtension[] | IExtensions;
export interface IMenuExtensionBase extends IExtensionPoint {
    title?: string;
    icon?: string;
}
export interface IFlatMenuExtension extends IMenuExtensionBase {
    menuLocation?: MenuLocation;
}
export interface IGroupedMenuExtension extends IMenuExtensionBase {
    groupName: string;
}
export declare type IMenuExtension = IFlatMenuExtension | IGroupedMenuExtension;
export interface IExtensions {
    commands: ICommandExtension[];
    groups?: IMenuGroupExtension[];
}
export interface IExtension {
    command?: ICommandExtension;
}
export interface IExtensionItem {
    name: string;
    extend: IExtensionPoints;
}
export declare type CommandExtensionSelector = IVisualSelector | IVisualTypeSelector;
export interface IMenuGroupExtension {
    name: string;
    title: string;
    /**
     * If menu location is top, will locate the group at the top of the menu.
     * If more than one extension with top value, the latest to be added, will be on top.
     * If menu location is bottom or undefined, the group will be added at the bottom of the menu at the time of adding the group first command.
     */
    menuLocation?: MenuLocation;
}
export interface ICommandExtension extends IExtensionItem {
    title: string;
    icon?: string;
    selector?: CommandExtensionSelector;
}
export interface IExtensionPoints {
    visualContextMenu?: IMenuExtension;
    visualOptionsMenu?: IMenuExtension;
}
export interface IExtensionPoint {
}
export declare enum MenuLocation {
    Bottom = 0,
    Top = 1
}
export interface IBaseTarget {
    table: string;
    $schema?: string;
}
export interface IPercentOfGrandTotalTarget {
    percentOfGrandTotal?: boolean;
}
export interface IColumnTarget extends IBaseTarget {
    column: string;
}
export interface IKeyColumnsTarget extends IColumnTarget {
    keys: string[];
}
export interface IKeyHierarchyTarget extends IHierarchyLevelTarget {
    keys: string[];
}
export interface IHierarchyLevelTarget extends IBaseTarget {
    hierarchy: string;
    hierarchyLevel: string;
}
export interface INotSupportedTarget extends IBaseTarget {
}
export interface IMeasureTarget extends IBaseTarget, IPercentOfGrandTotalTarget {
    measure: string;
}
export interface IAggregationTarget extends IPercentOfGrandTotalTarget {
    aggregationFunction: string;
}
export interface IColumnAggrTarget extends IColumnTarget, IAggregationTarget {
}
export interface IHierarchyLevelAggrTarget extends IHierarchyLevelTarget, IAggregationTarget {
}
export declare type IKeyTarget = (IKeyColumnsTarget | IKeyHierarchyTarget);
export declare type ITarget = (IColumnTarget | IHierarchyLevelTarget | IMeasureTarget | INotSupportedTarget | IColumnAggrTarget | IHierarchyLevelAggrTarget);
export interface IBaseFilterTarget extends IBaseTarget {
}
export interface IFilterColumnTarget extends IBaseFilterTarget, IColumnTarget {
}
export interface IFilterKeyColumnsTarget extends IFilterColumnTarget, IKeyColumnsTarget {
}
export interface IFilterHierarchyTarget extends IBaseFilterTarget, IHierarchyLevelTarget {
}
export interface IFilterKeyHierarchyTarget extends IFilterHierarchyTarget, IKeyHierarchyTarget {
}
export interface INotSupportedFilterTarget extends IBaseFilterTarget, INotSupportedTarget {
}
export interface IFilterAggregationTarget extends IBaseFilterTarget, IAggregationTarget {
}
export interface IFilterMeasureTarget extends IBaseFilterTarget, IMeasureTarget {
}
export interface IFilterColumnAggrTarget extends IFilterColumnTarget, IFilterAggregationTarget {
}
export interface IFilterHierarchyAggrTarget extends IFilterHierarchyTarget, IFilterAggregationTarget {
}
export interface IFilterGroupedColumnsTarget extends IFilterColumnTarget {
    groupedColumns: IFilterTarget[];
}
export declare type IFilterKeyTarget = (IFilterKeyColumnsTarget | IFilterKeyHierarchyTarget);
export declare type IFilterTarget = (IFilterColumnTarget | IFilterHierarchyTarget | IFilterMeasureTarget | INotSupportedFilterTarget | IFilterColumnAggrTarget | IFilterHierarchyAggrTarget);
export declare type ITupleFilterTarget = IFilterTarget[];
export declare type IIdentityFilterTarget = number[];
export declare type IFilterGeneralTarget = IFilterTarget | IFilterKeyTarget | ITupleFilterTarget | IIdentityFilterTarget;
export interface IFilter {
    $schema: string;
    target: IFilterGeneralTarget;
    filterType: FilterType;
    displaySettings?: IFilterDisplaySettings;
}
export declare type IdentityFilterOperators = "In";
export interface IIdentityFilter extends IFilter {
    operator: IdentityFilterOperators;
    target: IIdentityFilterTarget;
}
export interface IFilterDisplaySettings {
    isLockedInViewMode?: boolean;
    isHiddenInViewMode?: boolean;
    displayName?: string;
}
export interface INotSupportedFilter extends IFilter {
    message: string;
    notSupportedTypeName: string;
}
export interface IIncludeExcludeFilter extends IFilter {
    values: (string | number | boolean)[];
    isExclude: boolean;
}
export interface ITopNFilter extends IFilter {
    operator: TopNFilterOperators;
    itemCount: number;
    orderBy: ITarget;
}
export interface IRelativeDateTimeFilter extends IFilter {
    operator: RelativeDateOperators;
    timeUnitsCount?: number;
    timeUnitType: RelativeDateFilterTimeUnit;
}
export interface IRelativeDateFilter extends IRelativeDateTimeFilter {
    includeToday: boolean;
}
export interface IRelativeTimeFilter extends IRelativeDateTimeFilter {
}
export interface IBasicFilter extends IFilter {
    operator: BasicFilterOperators;
    values: (string | number | boolean)[];
    requireSingleSelection?: boolean;
}
export interface IBasicFilterWithKeys extends IBasicFilter {
    target: IFilterKeyTarget;
    keyValues: (string | number | boolean)[][];
}
export declare type PrimitiveValueType = (string | number | boolean);
export interface ITupleElementValue {
    value: PrimitiveValueType;
    keyValues?: PrimitiveValueType[];
}
export declare type TupleValueType = ITupleElementValue[];
export declare type TupleFilterOperators = "In";
export interface ITupleFilter extends IFilter {
    $schema: string;
    filterType: FilterType;
    operator: TupleFilterOperators;
    target: ITupleFilterTarget;
    values: TupleValueType[];
}
export declare enum FiltersOperations {
    RemoveAll = 0,
    ReplaceAll = 1,
    Add = 2,
    Replace = 3
}
export interface IUpdateFiltersRequest {
    filtersOperation: FiltersOperations;
    filters?: ReportLevelFilters[] | PageLevelFilters[] | VisualLevelFilters[];
}
export declare enum FiltersLevel {
    Report = 0,
    Page = 1,
    Visual = 2
}
export declare type ReportLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter | ITupleFilter | IRelativeTimeFilter;
export declare type PageLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter | ITupleFilter | IRelativeTimeFilter;
export declare type VisualLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter | ITopNFilter | IIncludeExcludeFilter | IRelativeTimeFilter;
export declare type ISlicerFilter = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter | IRelativeTimeFilter | IHierarchyFilter;
export declare type TopNFilterOperators = "Top" | "Bottom";
export declare type BasicFilterOperators = "In" | "NotIn" | "All";
export declare type AdvancedFilterLogicalOperators = "And" | "Or";
export declare type AdvancedFilterConditionOperators = "None" | "LessThan" | "LessThanOrEqual" | "GreaterThan" | "GreaterThanOrEqual" | "Contains" | "DoesNotContain" | "StartsWith" | "DoesNotStartWith" | "Is" | "IsNot" | "IsBlank" | "IsNotBlank" | "IsEmptyString" | "IsNotEmptyString";
export declare type HierarchyFilterNodeOperators = "Selected" | "NotSelected" | "Inherited";
export interface OnLoadFiltersBase {
    operation: FiltersOperations;
    filters?: IFilter[];
}
export interface PageOnLoadFilters extends OnLoadFiltersBase {
    filters?: PageLevelFilters[];
}
export interface ReportOnLoadFilters extends OnLoadFiltersBase {
    filters?: ReportLevelFilters[];
}
export interface OnLoadFilters {
    allPages?: ReportOnLoadFilters;
    currentPage?: PageOnLoadFilters;
}
export interface IAdvancedFilterCondition {
    value?: (string | number | boolean | Date);
    operator: AdvancedFilterConditionOperators;
}
export interface IAdvancedFilter extends IFilter {
    logicalOperator: AdvancedFilterLogicalOperators;
    conditions?: IAdvancedFilterCondition[];
}
export interface IHierarchyFilterNode {
    value?: PrimitiveValueType;
    keyValues?: PrimitiveValueType[];
    children?: IHierarchyFilterNode[];
    operator?: HierarchyFilterNodeOperators;
}
export interface IHierarchyFilter extends IFilter {
    target: (IFilterTarget | IFilterKeyTarget)[];
    hierarchyData: IHierarchyFilterNode[];
}
export interface ISmartNarratives {
    summaryText: string;
}
export declare enum FilterType {
    Advanced = 0,
    Basic = 1,
    Unknown = 2,
    IncludeExclude = 3,
    RelativeDate = 4,
    TopN = 5,
    Tuple = 6,
    RelativeTime = 7,
    Identity = 8,
    Hierarchy = 9
}
export declare enum RelativeDateFilterTimeUnit {
    Days = 0,
    Weeks = 1,
    CalendarWeeks = 2,
    Months = 3,
    CalendarMonths = 4,
    Years = 5,
    CalendarYears = 6,
    Minutes = 7,
    Hours = 8
}
export declare enum RelativeDateOperators {
    InLast = 0,
    InThis = 1,
    InNext = 2
}
export declare abstract class Filter {
    static schema: string;
    protected static schemaUrl: string;
    target: IFilterGeneralTarget;
    filterType: FilterType;
    displaySettings: IFilterDisplaySettings;
    protected schemaUrl: string;
    constructor(target: IFilterGeneralTarget, filterType: FilterType);
    toJSON(): IFilter;
}
export declare class NotSupportedFilter extends Filter {
    static schemaUrl: string;
    message: string;
    notSupportedTypeName: string;
    constructor(target: IFilterTarget, message: string, notSupportedTypeName: string);
    toJSON(): INotSupportedFilter;
}
export declare class IncludeExcludeFilter extends Filter {
    static schemaUrl: string;
    values: (string | number | boolean)[];
    isExclude: boolean;
    constructor(target: IFilterTarget, isExclude: boolean, values: (string | number | boolean)[]);
    toJSON(): IIncludeExcludeFilter;
}
export declare class TopNFilter extends Filter {
    static schemaUrl: string;
    operator: TopNFilterOperators;
    orderBy: ITarget;
    itemCount: number;
    constructor(target: IFilterTarget, operator: TopNFilterOperators, itemCount: number, orderBy: ITarget);
    toJSON(): ITopNFilter;
}
export declare class RelativeDateFilter extends Filter {
    static schemaUrl: string;
    operator: RelativeDateOperators;
    timeUnitsCount: number;
    timeUnitType: RelativeDateFilterTimeUnit;
    includeToday: boolean;
    constructor(target: IFilterTarget, operator: RelativeDateOperators, timeUnitsCount: number, timeUnitType: RelativeDateFilterTimeUnit, includeToday: boolean);
    toJSON(): IRelativeDateFilter;
}
export declare class RelativeTimeFilter extends Filter {
    static schemaUrl: string;
    operator: RelativeDateOperators;
    timeUnitsCount: number;
    timeUnitType: RelativeDateFilterTimeUnit;
    constructor(target: IFilterTarget, operator: RelativeDateOperators, timeUnitsCount: number, timeUnitType: RelativeDateFilterTimeUnit);
    toJSON(): IRelativeTimeFilter;
}
export declare class BasicFilter extends Filter {
    static schemaUrl: string;
    operator: BasicFilterOperators;
    values: (string | number | boolean)[];
    keyValues: (string | number | boolean)[][];
    requireSingleSelection: boolean;
    constructor(target: IFilterTarget, operator: BasicFilterOperators, ...values: ((string | number | boolean) | (string | number | boolean)[])[]);
    toJSON(): IBasicFilter;
}
export declare class BasicFilterWithKeys extends BasicFilter {
    keyValues: (string | number | boolean)[][];
    target: IFilterKeyTarget;
    constructor(target: IFilterKeyTarget, operator: BasicFilterOperators, values: ((string | number | boolean) | (string | number | boolean)[]), keyValues: (string | number | boolean)[][]);
    toJSON(): IBasicFilter;
}
export declare class IdentityFilter extends Filter {
    static schemaUrl: string;
    operator: IdentityFilterOperators;
    target: IIdentityFilterTarget;
    constructor(target: IIdentityFilterTarget, operator: IdentityFilterOperators);
    toJSON(): IIdentityFilter;
}
export declare class TupleFilter extends Filter {
    static schemaUrl: string;
    operator: TupleFilterOperators;
    target: ITupleFilterTarget;
    values: TupleValueType[];
    constructor(target: ITupleFilterTarget, operator: TupleFilterOperators, values: TupleValueType[]);
    toJSON(): ITupleFilter;
}
export declare class AdvancedFilter extends Filter {
    static schemaUrl: string;
    logicalOperator: AdvancedFilterLogicalOperators;
    conditions: IAdvancedFilterCondition[];
    constructor(target: IFilterTarget, logicalOperator: AdvancedFilterLogicalOperators, ...conditions: (IAdvancedFilterCondition | IAdvancedFilterCondition[])[]);
    toJSON(): IAdvancedFilter;
}
export declare class HierarchyFilter extends Filter {
    static schemaUrl: string;
    target: (IFilterTarget | IFilterKeyTarget)[];
    hierarchyData: IHierarchyFilterNode[];
    constructor(target: (IFilterTarget | IFilterKeyTarget)[], hierarchyData: IHierarchyFilterNode[]);
    toJSON(): IHierarchyFilter;
}
export interface IDataReference {
    target: IFilterTarget;
}
export interface IEqualsDataReference extends IDataReference {
    equals: string | boolean | number | Date;
}
export interface IBetweenDataReference extends IDataReference {
    between: (string | boolean | number)[];
}
export interface IValueDataReference extends IDataReference {
    value: string | boolean | number | Date;
    formattedValue: string;
}
export interface IIdentityValue<T extends IDataReference> {
    identity: T[];
    values: IValueDataReference[];
}
export declare function isFilterKeyColumnsTarget(target: IFilterTarget): boolean;
export declare function isBasicFilterWithKeys(filter: IFilter): boolean;
export declare function getFilterType(filter: IFilter): FilterType;
export declare function isMeasure(arg: any): arg is IMeasureTarget;
export declare function isColumn(arg: any): arg is IColumnTarget;
export declare function isHierarchyLevel(arg: any): arg is IHierarchyLevelTarget;
export declare function isHierarchyLevelAggr(arg: any): arg is IHierarchyLevelAggrTarget;
export declare function isColumnAggr(arg: any): arg is IColumnAggrTarget;
export declare function isPercentOfGrandTotal(arg: any): arg is IPercentOfGrandTotalTarget;
export interface IBootstrapEmbedConfiguration {
    hostname?: string;
    embedUrl?: string;
    settings?: ISettings;
    uniqueId?: string;
    type?: string;
    groupId?: string;
    bootstrapped?: boolean;
}
export interface IEmbedConfigurationBase extends IBootstrapEmbedConfiguration {
    accessToken?: string;
    tokenType?: TokenType;
}
/**
 * @deprecated
 */
export interface IEmbedConfiguration extends IEmbedConfigurationBase {
    id?: string;
    settings?: ISettings;
    pageName?: string;
    filters?: IFilter[];
    pageView?: PageView;
    datasetId?: string;
    permissions?: Permissions;
    viewMode?: ViewMode;
    action?: string;
    dashboardId?: string;
    height?: number;
    width?: number;
    theme?: IReportTheme;
    slicers?: ISlicer[];
    bookmark?: IApplyBookmarkRequest;
    datasetBinding?: IDatasetBinding;
    contrastMode?: ContrastMode;
    eventHooks?: EventHooks;
}
export interface ICommonEmbedConfiguration extends IEmbedConfigurationBase {
    id?: string;
    settings?: ISettings;
    action?: string;
    contrastMode?: ContrastMode;
    permissions?: Permissions;
}
export interface IReportEmbedConfiguration extends ICommonEmbedConfiguration {
    filters?: ReportLevelFilters[] | OnLoadFilters;
    datasetBinding?: IDatasetBinding;
    bookmark?: IApplyBookmarkRequest;
    pageName?: string;
    slicers?: ISlicer[];
    viewMode?: ViewMode;
    theme?: IReportTheme;
    eventHooks?: EventHooks;
}
export interface IVisualEmbedConfiguration extends IReportEmbedConfiguration {
    visualName: string;
    height?: number;
    width?: number;
}
export interface IDashboardEmbedConfiguration extends ICommonEmbedConfiguration {
    filters?: IFilter[];
    pageView?: PageView;
}
export interface ITileEmbedConfiguration extends IDashboardEmbedConfiguration {
    dashboardId: string;
    height?: number;
    width?: number;
}
export interface IQnaEmbedConfiguration extends IEmbedConfigurationBase {
    datasetIds: string[];
    question?: string;
    viewMode?: QnaMode;
}
/**
 * @deprecated
 */
export interface IReportLoadConfiguration {
    accessToken: string;
    id: string;
    groupId?: string;
    settings?: ISettings;
    pageName?: string;
    filters?: ReportLevelFilters[];
    slicers?: ISlicer[];
    permissions?: Permissions;
    viewMode?: ViewMode;
    tokenType?: TokenType;
    bookmark?: IApplyBookmarkRequest;
    theme?: IReportTheme;
    embedUrl?: string;
    datasetBinding?: IDatasetBinding;
    contrastMode?: ContrastMode;
    eventHooks?: EventHooks;
}
export interface IReportCreateConfiguration {
    type?: "create";
    accessToken?: string;
    datasetId: string;
    groupId?: string;
    settings?: ISettings;
    tokenType?: TokenType;
    theme?: IReportTheme;
    embedUrl?: string;
    eventHooks?: EventHooks;
}
export interface IQuickCreateConfiguration {
    type?: "quickCreate";
    accessToken: string;
    groupId?: string;
    settings?: ISettings;
    tokenType?: TokenType;
    theme?: IReportTheme;
    embedUrl?: string;
    datasetCreateConfig: IDatasetCreateConfiguration;
    reportCreationMode?: ReportCreationMode;
    eventHooks?: EventHooks;
}
export interface IDatasetCreateConfiguration {
    mashupDocument?: string;
    locale: string;
    datasourceConnectionConfig?: IDatasourceConnectionConfiguration;
    tableSchemaList?: ITableSchema[];
    data?: IDataTable[];
}
export declare enum CredentialType {
    NoConnection = 0,
    OnBehalfOf = 1,
    Anonymous = 2
}
export interface IDatasourceConnectionConfiguration {
    dataCacheMode?: DataCacheMode;
    credentials?: ICredential;
}
export interface ICredential {
    credentialType: CredentialType;
    credentialDetails?: {
        [property: string]: string;
    };
}
export declare enum DataCacheMode {
    Import = 0,
    DirectQuery = 1
}
export interface ITableSchema {
    name: string;
    columns: IColumnSchema[];
}
export interface IColumnSchema {
    name: string;
    displayName?: string;
    dataType: DataType;
    aggregateFunction?: AggregateFunction;
}
export declare enum AggregateFunction {
    Default = 1,
    None = 2,
    Sum = 3,
    Min = 4,
    Max = 5,
    Count = 6,
    Average = 7,
    DistinctCount = 8
}
export declare const enum DataType {
    Number = "Number",
    Currency = "Currency",
    Int32 = "Int32",
    Percentage = "Percentage",
    DateTime = "DateTime",
    DateTimeZone = "DateTimeZone",
    Date = "Date",
    Time = "Time",
    Duration = "Duration",
    Text = "Text",
    Logical = "Logical",
    Binary = "Binary"
}
export interface IDataTable {
    name: string;
    rows: string[][];
}
/**
 * @deprecated
 */
export interface IDashboardLoadConfiguration {
    accessToken: string;
    id: string;
    groupId?: string;
    pageView?: PageView;
    tokenType?: TokenType;
    embedUrl?: string;
}
/**
 * @deprecated
 */
export interface ITileLoadConfiguration {
    accessToken: string;
    id: string;
    dashboardId: string;
    groupId?: string;
    tokenType?: TokenType;
    width?: number;
    height?: number;
}
export interface ILocaleSettings {
    language?: string;
    formatLocale?: string;
}
export declare enum BrowserPrintAdjustmentsMode {
    Default = 0,
    NoAdjustments = 1
}
export interface IPrintSettings {
    browserPrintAdjustmentsMode?: BrowserPrintAdjustmentsMode;
}
export declare const enum ReportCreationMode {
    Default = "Default",
    QuickExplore = "QuickExplore"
}
export interface ISettings {
    authoringHintsEnabled?: boolean;
    background?: BackgroundType;
    bars?: IReportBars;
    bookmarksPaneEnabled?: boolean;
    commands?: ICommandsSettings[] | IPaginatedReportsCommandsSettings;
    customLayout?: ICustomLayout;
    extensions?: Extensions;
    filterPaneEnabled?: boolean;
    hideErrors?: boolean;
    hyperlinkClickBehavior?: HyperlinkClickBehavior;
    layoutType?: LayoutType;
    navContentPaneEnabled?: boolean;
    panes?: IReportPanes;
    persistentFiltersEnabled?: boolean;
    personalBookmarksEnabled?: boolean;
    useCustomSaveAsDialog?: boolean;
    visualRenderedEvents?: boolean;
    visualSettings?: IVisualSettings;
    localeSettings?: ILocaleSettings;
    zoomLevel?: number;
    printSettings?: IPrintSettings;
}
export interface IReportBars {
    actionBar?: IActionBar;
    statusBar?: IStatusBar;
}
export interface IActionBar extends IHideable {
}
export interface IStatusBar extends IHideable {
}
export interface IReportPanes extends IPanes {
    bookmarks?: IBookmarksPane;
    fields?: IFieldsPane;
    pageNavigation?: IPageNavigationPane;
    selection?: ISelectionPane;
    syncSlicers?: ISyncSlicersPane;
    visualizations?: IVisualizationsPane;
}
export interface IPanes {
    filters?: IFiltersPane;
}
export interface IQnaPanes extends IPanes {
}
export interface IHideable {
    visible?: boolean;
}
export interface ICollapsible {
    expanded?: boolean;
}
export interface IBookmarksPane extends IHideable {
}
export interface IFieldsPane extends ICollapsible, IHideable {
}
export interface IFiltersPane extends ICollapsible, IHideable {
}
export declare enum PageNavigationPosition {
    Bottom = 0,
    Left = 1
}
export interface IPageNavigationPane extends IHideable {
    position?: PageNavigationPosition;
}
export interface ISelectionPane extends IHideable {
}
export interface ISyncSlicersPane extends IHideable {
}
export interface IVisualizationsPane extends ICollapsible, IHideable {
}
export interface ISaveAsParameters {
    name: string;
    targetWorkspaceId?: string;
}
export interface IPaginatedReportParameter {
    name: string;
    value: string | null;
}
export interface IPaginatedReportLoadConfiguration {
    accessToken: string;
    id: string;
    groupId?: string;
    settings?: IPaginatedReportSettings;
    tokenType?: TokenType;
    type?: string;
    embedUrl?: string;
    parameterValues?: IPaginatedReportParameter[];
    datasetBindings?: IPaginatedReportDatasetBinding[];
}
export interface IPaginatedReportSettings {
    commands?: IPaginatedReportsCommandsSettings;
}
export interface IQnaSettings {
    filterPaneEnabled?: boolean;
    hideErrors?: boolean;
    localeSettings?: ILocaleSettings;
    panes?: IQnaPanes;
}
/**
 * @deprecated
 */
export interface ILoadQnaConfiguration {
    accessToken: string;
    datasetIds: string[];
    groupId?: string;
    question?: string;
    viewMode?: QnaMode;
    settings?: IQnaSettings;
    tokenType?: TokenType;
}
export declare enum QnaMode {
    Interactive = 0,
    ResultOnly = 1
}
export declare enum ExportDataType {
    Summarized = 0,
    Underlying = 1
}
export declare enum BookmarksPlayMode {
    Off = 0,
    Presentation = 1
}
export declare const CommonErrorCodes: {
    TokenExpired: string;
    NotFound: string;
    InvalidParameters: string;
    LoadReportFailed: string;
    NotAuthorized: string;
    FailedToLoadModel: string;
};
export declare const TextAlignment: {
    Left: string;
    Center: string;
    Right: string;
};
export declare const LegendPosition: {
    Top: string;
    Bottom: string;
    Right: string;
    Left: string;
    TopCenter: string;
    BottomCenter: string;
    RightCenter: string;
    LeftCenter: string;
};
export interface IQnaInterpretInputData {
    question: string;
    datasetIds?: string[];
}
export interface IReportBookmark {
    name: string;
    displayName: string;
    state?: string;
    children?: IReportBookmark[];
}
export interface ICaptureBookmarkOptions {
    personalizeVisuals?: boolean;
    allPages?: boolean;
}
export interface IPlayBookmarkRequest {
    playMode: BookmarksPlayMode;
}
export interface IAddBookmarkRequest {
    state?: string;
    displayName?: string;
    apply?: boolean;
}
export declare type IApplyBookmarkRequest = IApplyBookmarkStateRequest | IApplyBookmarkByNameRequest;
export interface IApplyBookmarkStateRequest {
    state: string;
}
export interface IApplyBookmarkByNameRequest {
    name: string;
}
export interface ICaptureBookmarkRequest {
    options: ICaptureBookmarkOptions;
}
export interface IExportDataRequest {
    rows?: number;
    exportDataType?: ExportDataType;
}
export interface IExportDataResult {
    data: string;
}
export interface ICreateVisualRequest {
    visualType: string;
    layout?: IVisualLayout;
    autoFocus?: boolean;
}
export interface IVisualResponse {
    visual: IVisual;
}
export interface ICreateVisualResponse extends IVisualResponse {
}
export interface ICloneVisualRequest {
    filters?: IFilter[];
    layout?: IVisualLayout;
    autoFocus?: boolean;
}
export interface ICloneVisualResponse extends IVisualResponse {
    visualName: string;
}
export interface ISortByVisualRequest {
    orderBy: ITarget;
    direction: SortDirection;
}
export declare enum SortDirection {
    Ascending = 1,
    Descending = 2
}
export interface ISelector {
    $schema: string;
}
export interface IPageSelector extends ISelector {
    pageName: string;
}
export interface IVisualSelector extends ISelector {
    visualName: string;
}
export interface IVisualTypeSelector extends ISelector {
    visualType: string;
}
export interface ISlicerTargetSelector extends ISelector {
    target: SlicerTarget;
}
export declare abstract class Selector implements ISelector {
    $schema: string;
    constructor(schema: string);
    toJSON(): ISelector;
}
export declare class PageSelector extends Selector implements IPageSelector {
    static schemaUrl: string;
    pageName: string;
    constructor(pageName: string);
    toJSON(): IPageSelector;
}
export declare class VisualSelector extends Selector implements IVisualSelector {
    static schemaUrl: string;
    visualName: string;
    constructor(visualName: string);
    toJSON(): IVisualSelector;
}
export declare class VisualTypeSelector extends Selector implements IVisualTypeSelector {
    static schemaUrl: string;
    visualType: string;
    constructor(visualType: string);
    toJSON(): IVisualTypeSelector;
}
export declare class SlicerTargetSelector extends Selector implements ISlicerTargetSelector {
    static schemaUrl: string;
    target: SlicerTarget;
    constructor(target: SlicerTarget);
    toJSON(): ISlicerTargetSelector;
}
export declare type SlicerTarget = IFilterTarget | IFilterKeyTarget;
export declare type SlicerSelector = IVisualSelector | ISlicerTargetSelector;
export interface ISlicer {
    selector: SlicerSelector;
    state: ISlicerState;
}
export interface ISlicerState {
    filters: ISlicerFilter[];
    targets?: SlicerTarget[];
}
export declare type VisualHeaderSelector = IVisualSelector | IVisualTypeSelector;
export declare type VisualsHeaderSelector = VisualHeaderSelector;
export interface IVisualHeaderSettings {
    visible?: boolean;
}
export interface IVisualHeader {
    settings: IVisualHeaderSettings;
    selector?: VisualHeaderSelector;
}
export interface IVisualSettings {
    visualHeaders?: IVisualHeader[];
}
export interface IReportTheme {
}
export interface ICustomTheme extends IReportTheme {
    themeJson: any;
}
export declare type VisualCommandSelector = IVisualSelector | IVisualTypeSelector;
export declare enum CommandDisplayOption {
    Enabled = 0,
    Disabled = 1,
    Hidden = 2
}
export interface ICommandSettings {
    displayOption: CommandDisplayOption;
    selector?: VisualCommandSelector;
}
export interface ICommandsSettings {
    copy?: ICommandSettings;
    drill?: ICommandSettings;
    drillthrough?: ICommandSettings;
    expandCollapse?: ICommandSettings;
    exportData?: ICommandSettings;
    includeExclude?: ICommandSettings;
    removeVisual?: ICommandSettings;
    search?: ICommandSettings;
    seeData?: ICommandSettings;
    sort?: ICommandSettings;
    spotlight?: ICommandSettings;
    insightsAnalysis?: ICommandSettings;
    addComment?: ICommandSettings;
    groupVisualContainers?: ICommandSettings;
    summarize?: ICommandSettings;
    clearSelection?: ICommandSettings;
    focusMode?: ICommandSettings;
}
export interface IPaginatedReportsCommandSettings {
    enabled?: boolean;
}
export interface IParametersPanelCommandSettings extends IPaginatedReportsCommandSettings {
    expanded?: boolean;
}
export interface IPaginatedReportsCommandsSettings {
    parameterPanel?: IParametersPanelCommandSettings;
}
export declare enum VisualDataRoleKind {
    Grouping = 0,
    Measure = 1,
    GroupingOrMeasure = 2
}
export declare enum VisualDataRoleKindPreference {
    Measure = 0,
    Grouping = 1
}
export interface IVisualDataRole {
    name: string;
    kind: VisualDataRoleKind;
    kindPreference?: VisualDataRoleKindPreference;
    displayName?: string;
    description?: string;
}
export interface IVisualCapabilities {
    dataRoles?: IVisualDataRole[];
}
export interface IVisualPropertySelector {
    objectName: string;
    propertyName: string;
}
export interface IVisualPropertyValue {
    schema?: string;
    value: any;
}
export interface IDefaultProperty {
}
export interface IThemeColorProperty {
    id: number;
    shade: number;
}
export declare function isOnLoadFilters(filters: ReportLevelFilters[] | OnLoadFilters): filters is OnLoadFilters;
export declare function isReportFiltersArray(filters: ReportLevelFilters[] | OnLoadFilters): filters is ReportLevelFilters[];
export declare function isFlatMenuExtension(menuExtension: IMenuExtension): menuExtension is IFlatMenuExtension;
export declare function isGroupedMenuExtension(menuExtension: IMenuExtension): menuExtension is IGroupedMenuExtension;
export declare function isIExtensions(extensions: Extensions): extensions is IExtensions;
export declare function isIExtensionArray(extensions: Extensions): extensions is IExtension[];
export declare function validateVisualSelector(input: any): IError[];
export declare function validateSlicer(input: any): IError[];
export declare function validateSlicerState(input: any): IError[];
export declare function validatePlayBookmarkRequest(input: any): IError[];
export declare function validateAddBookmarkRequest(input: any): IError[];
export declare function validateApplyBookmarkByNameRequest(input: any): IError[];
export declare function validateApplyBookmarkStateRequest(input: any): IError[];
export declare function validateCaptureBookmarkRequest(input: any): IError[];
export declare function validateSettings(input: any): IError[];
export declare function validatePanes(input: any): IError[];
export declare function validateBookmarksPane(input: any): IError[];
export declare function validateFiltersPane(input: any): IError[];
export declare function validateFieldsPane(input: any): IError[];
export declare function validatePageNavigationPane(input: any): IError[];
export declare function validateSelectionPane(input: any): IError[];
export declare function validateSyncSlicersPane(input: any): IError[];
export declare function validateVisualizationsPane(input: any): IError[];
export declare function validateCustomPageSize(input: any): IError[];
export declare function validateExtension(input: any): IError[];
export declare function validateMenuGroupExtension(input: any): IError[];
export declare function validateReportLoad(input: any): IError[];
export declare function validatePaginatedReportLoad(input: any): IError[];
export declare function validateCreateReport(input: any): IError[];
export declare function validateQuickCreate(input: any): IError[];
export declare function validateDashboardLoad(input: any): IError[];
export declare function validateTileLoad(input: any): IError[];
export declare function validatePage(input: any): IError[];
export declare function validateFilter(input: any): IError[];
export declare function validateUpdateFiltersRequest(input: any): IError[];
export declare function validateSaveAsParameters(input: any): IError[];
export declare function validateLoadQnaConfiguration(input: any): IError[];
export declare function validateQnaInterpretInputData(input: any): IError[];
export declare function validateExportDataRequest(input: any): IError[];
export declare function validateVisualHeader(input: any): IError[];
export declare function validateVisualSettings(input: any): IError[];
export declare function validateCommandsSettings(input: any): IError[];
export declare function validateCustomTheme(input: any): IError[];
export declare function validateZoomLevel(input: any): IError[];
export declare function validatePrintSettings(input: any): IError[];
