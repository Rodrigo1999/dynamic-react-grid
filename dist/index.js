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
exports.WithBreakpoints = exports.media = exports.breakpoints = exports.mapMedia = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_1 = __importDefault(require("@emotion/styled"));
var utils_1 = require("./utils");
var spacingConst = 4;
var getSpacing = function (spacing) { return utils_1.mapMedia(spacing, function (_a) {
    var val = _a[1];
    return val * spacingConst * 2;
}); };
var Media = styled_1.default.div(function (props) { return utils_1.media(props.breakpoints)({
    flexDirection: props.row && props.direction,
    justifyContent: props.row && props.justify,
    alignContent: props.row && props.alignContent,
    alignItems: props.row && props.align,
    width: (props.row
        && props.breakpoints
        && props[Object.keys(props.breakpoints)[0]] !== true
        && utils_1.mapMedia(props.spacingX, function (_a) {
            var val = _a[1];
            return "calc(100% + " + val * spacingConst * 2 + "px)";
        })),
    marginLeft: props.row && props.spacingX && utils_1.mapMedia(props.spacingX, function (_a) {
        var val = _a[1];
        return -(val * spacingConst);
    }),
    marginRight: props.row && props.spacingX && utils_1.mapMedia(props.spacingX, function (_a) {
        var val = _a[1];
        return -(val * spacingConst);
    }),
    marginTop: props.row && props.spacingY && utils_1.mapMedia(props.spacingY, function (_a) {
        var val = _a[1];
        return -(val * spacingConst);
    }),
    marginBottom: props.row && props.spacingY && utils_1.mapMedia(props.spacingY, function (_a) {
        var val = _a[1];
        return -(val * spacingConst);
    }),
    flexWrap: props.row && props._wrap,
    alignSelf: props.self,
    maxWidth: utils_1.mapMedia(props.breakpoints || {}, function (_a, i) {
        var key = _a[0];
        var breakpoint = props[key];
        var spacing = getSpacing(props.spacingX);
        if (breakpoint && breakpoint !== true)
            return "calc(" + 100 * breakpoint / 12 + "% + " + (spacing[key] || spacing) + "px)";
        if (i === 0 && !props.row)
            return '100%';
        return;
    }),
    flexBasis: utils_1.mapMedia(props.breakpoints || {}, function (_a, i) {
        var key = _a[0];
        var breakpoint = props[key];
        var spacing = getSpacing(props.spacingX);
        if (breakpoint && breakpoint !== true)
            return "calc(" + 100 * breakpoint / 12 + "% + " + (spacing[key] || spacing) + "px)";
        if (i === 0 && breakpoint !== true)
            return '100%';
        return;
    }),
    order: props.order
}); });
var Grid = styled_1.default(Media)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display:", ";\n    box-sizing: border-box;\n    flex-grow: 1;\n    & > *{\n        ", "\n    }\n"], ["\n    display:", ";\n    box-sizing: border-box;\n    flex-grow: 1;\n    & > *{\n        ",
    "\n    }\n"])), function (_a) {
    var row = _a.row;
    return row && 'flex';
}, function (props) { return props.row && utils_1.media(props.breakpoints)({
    paddingLeft: props.spacingX && utils_1.mapMedia(props.spacingX, function (_a) {
        var val = _a[1];
        return val * spacingConst;
    }),
    paddingRight: props.spacingX && utils_1.mapMedia(props.spacingX, function (_a) {
        var val = _a[1];
        return val * spacingConst;
    }),
    paddingTop: props.spacingY && utils_1.mapMedia(props.spacingY, function (_a) {
        var val = _a[1];
        return val * spacingConst;
    }),
    paddingBottom: props.spacingY && utils_1.mapMedia(props.spacingY, function (_a) {
        var val = _a[1];
        return val * spacingConst;
    }),
}); });
function MyGrid(_a, ref) {
    var children = _a.children, row = _a.row, self = _a.self, _b = _a.wrap, wrap = _b === void 0 ? 'wrap' : _b, _c = _a.spacing, spacing = _c === void 0 ? 0 : _c, spacingY = _a.spacingY, spacingX = _a.spacingX, direction = _a.direction, justify = _a.justify, alignContent = _a.alignContent, align = _a.align, order = _a.order, other = __rest(_a, ["children", "row", "self", "wrap", "spacing", "spacingY", "spacingX", "direction", "justify", "alignContent", "align", "order"]);
    var _breakpoints = (this === null || this === void 0 ? void 0 : this.breakpoints) || utils_1.breakpoints;
    _breakpoints = __assign(__assign({}, _breakpoints), utils_1.getDefinedBreakPoint(other));
    return (jsx_runtime_1.jsx(Grid, __assign({}, other, { row: row, breakpoints: _breakpoints, _wrap: wrap, spacingY: spacingY || spacing, spacingX: spacingX || spacing, justify: justify, align: align, direction: direction, alignContent: alignContent, ref: ref, order: order, self: self }, { children: children }), void 0));
}
var utils_2 = require("./utils");
Object.defineProperty(exports, "mapMedia", { enumerable: true, get: function () { return utils_2.mapMedia; } });
Object.defineProperty(exports, "breakpoints", { enumerable: true, get: function () { return utils_2.breakpoints; } });
Object.defineProperty(exports, "media", { enumerable: true, get: function () { return utils_2.media; } });
var WithBreakpoints = function (props) { return react_1.forwardRef(MyGrid.bind({ breakpoints: props })); };
exports.WithBreakpoints = WithBreakpoints;
exports.default = react_1.forwardRef(MyGrid);
var templateObject_1;
