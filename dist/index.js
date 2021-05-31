"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithBreakpoints = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("./utils");
var spacingConst = 4;
var getSpacing = function (spacing) { return utils_1.mapObject(spacing, function (_a) {
    var key = _a[0], val = _a[1];
    return val * spacingConst * 2;
}); };
var Media = styled_components_1.default.div(function (props) { return utils_1.media(props.breakpoints)({
    flexDirection: props.row && props.direction,
    justifyContent: props.row && props.justify,
    alignContent: props.row && props.align,
    alignItems: props.row && props.alignItems,
    width: props.row && props[Object.keys(props.breakpoints)[0]] != true && utils_1.mapObject(props.spacing, function (_a) {
        var key = _a[0], val = _a[1];
        return "calc(100% + " + val * spacingConst * 2 + "px)";
    }),
    margin: props.row && utils_1.mapObject(props.spacing, function (_a) {
        var key = _a[0], val = _a[1];
        return -(val * spacingConst);
    }),
    flexWrap: props.row && props.wrap,
    alignSelf: props.self,
    maxWidth: utils_1.mapObject(props.breakpoints || {}, function (_a, i) {
        var key = _a[0];
        var breakpoint = props[key];
        var spacing = getSpacing(props.spacing);
        if (breakpoint && breakpoint !== true)
            return "calc(" + 100 * breakpoint / 12 + "% + " + (spacing[key] || spacing) + "px)";
        if (i == 0 && !props.row)
            return '100%';
        return;
    }),
    flexBasis: utils_1.mapObject(props.breakpoints || {}, function (_a, i) {
        var key = _a[0];
        var breakpoint = props[key];
        var spacing = getSpacing(props.spacing);
        if (breakpoint && breakpoint !== true)
            return "calc(" + 100 * breakpoint / 12 + "% + " + (spacing[key] || spacing) + "px)";
        if (i == 0 && breakpoint !== true)
            return '100%';
        return;
    }),
    order: props.order
}); });
var Grid = styled_components_1.default(Media)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display:", ";\n    box-sizing: border-box;\n    flex-grow: 1;\n    & > *{\n        ", "\n    }\n"], ["\n    display:", ";\n    box-sizing: border-box;\n    flex-grow: 1;\n    & > *{\n        ",
    "\n    }\n"])), function (_a) {
    var row = _a.row;
    return row && 'flex';
}, function (props) { return props.row && utils_1.media(props.breakpoints)({
    padding: utils_1.mapObject(props.spacing, function (_a) {
        var key = _a[0], val = _a[1];
        return val * spacingConst;
    }),
}); });
var MyGrid = function (_a, ref) {
    var children = _a.children, row = _a.row, self = _a.self, _b = _a.wrap, wrap = _b === void 0 ? 'wrap' : _b, _c = _a.spacing, spacing = _c === void 0 ? 0 : _c, direction = _a.direction, justify = _a.justify, alignItems = _a.alignItems, align = _a.align, order = _a.order, other = __rest(_a, ["children", "row", "self", "wrap", "spacing", "direction", "justify", "alignItems", "align", "order"]);
    var breakpoints = (this === null || this === void 0 ? void 0 : this.breakpoints) || {
        xs: 0,
        'xs-m': 300,
        sm: 600,
        'sm-m': 780,
        md: 960,
        'md-m': 1120,
        lg: 1280,
        'lg-m': 1600,
        xl: 1920
    };
    return (jsx_runtime_1.jsx(Grid, __assign({}, other, { row: row, breakpoints: breakpoints, spacing: spacing, justify: justify, align: align, direction: direction, alignItems: alignItems, wrap: wrap, ref: ref, order: order, self: self }, { children: children }), void 0));
};
__exportStar(require("./utils"), exports);
var WithBreakpoints = function (props) { return react_1.forwardRef(MyGrid.bind({ breakpoints: props })); };
exports.WithBreakpoints = WithBreakpoints;
exports.default = react_1.forwardRef(MyGrid);
var templateObject_1;
