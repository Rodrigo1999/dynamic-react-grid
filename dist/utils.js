"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakpoints = exports.media = exports.mapMedia = void 0;
var styled_components_1 = require("styled-components");
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
        return keys.map(function (key) {
            var _a, _b;
            if (!breakpoint && [undefined, false].includes(obj[key]))
                return null;
            if (!breakpoint)
                return styled_components_1.css((_a = {}, _a[key] = obj[key], _a)).join(';');
            if ([undefined, false].includes(obj[key][breakpoint]))
                return null;
            return styled_components_1.css((_b = {}, _b[key] = obj[key][breakpoint], _b)).join(';');
        }).filter(Boolean).join(';');
    }
    return function (obj) {
        var propertyIsObjStr = Object.keys(breakpoints || {}).map(function (breakpoint) {
            return "@media only screen and (min-width: " + breakpoints[breakpoint] + "px) {" + keyMap(obj, breakpoint, true) + "}";
        }).filter(Boolean).join(';');
        return keyMap(obj).concat(';', propertyIsObjStr);
    };
}
exports.media = media;
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
