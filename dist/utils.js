"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefinedBreakPoint = exports.media = exports.mapMedia = exports.breakpoints = void 0;
var react_1 = require("@emotion/react");
exports.breakpoints = {
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
function mapMedia(value, map) {
    if (typeof value != 'object')
        return [value].concat(map([value, value], 0)).slice(-2)[1];
    var obj = Object.entries(value).map(function (e, i) { return [e[0]].concat(map(e, i)).slice(-2); });
    return Object.fromEntries(obj);
}
exports.mapMedia = mapMedia;
function media(breakpoints) {
    if (breakpoints === void 0) { breakpoints = (typeof (this === null || this === void 0 ? void 0 : this.globalThis) != 'undefined' ? this === null || this === void 0 ? void 0 : this.globalThis : window).breakpoints; }
    function keyMap(obj, breakpoint, onlyObject) {
        var keys = Object.keys(obj);
        if (onlyObject) {
            keys = keys.filter(function (e) { return typeof obj[e] == 'object'; });
        }
        else {
            keys = keys.filter(function (e) { return typeof obj[e] != 'object'; });
        }
        var mapCss = keys.map(function (key) {
            var _a, _b;
            if (!breakpoint && [undefined, false].includes(obj[key]))
                return null;
            if (!breakpoint)
                return react_1.css((_a = {}, _a[key] = obj[key], _a)).styles;
            if ([undefined, false].includes(obj[key][breakpoint]))
                return null;
            return react_1.css((_b = {}, _b[key] = obj[key][breakpoint], _b)).styles;
        }).filter(Boolean).join('');
        return mapCss;
    }
    return function (obj) {
        var propertyIsObjStr = Object.keys(breakpoints || {}).map(function (breakpoint) {
            var css = keyMap(obj, breakpoint, true);
            if (!css)
                return null;
            return "@media only screen and (min-width: " + breakpoints[breakpoint] + "px) {" + css + "};";
        }).filter(Boolean).join('');
        return keyMap(obj).concat(propertyIsObjStr);
    };
}
exports.media = media;
function getDefinedBreakPoint(props) {
    var keys = Object.keys(props);
    var keysFiltered = keys.filter(function (e) { return ~e.indexOf('bp-'); });
    var breakpoints = keysFiltered.reduce(function (obj, keys) {
        obj[keys.replace('bp-', '')] = props[keys];
        return obj;
    }, {});
    return breakpoints;
}
exports.getDefinedBreakPoint = getDefinedBreakPoint;
