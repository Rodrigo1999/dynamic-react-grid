import {css} from '@emotion/react';


export const breakpoints = {
    xs: 0,
    'xs-m': 300,
    sm: 600,
    'sm-m': 780,
    md: 960,
    'md-m': 1120,
    lg: 1280,
    'lg-m': 1600,
    xl: 1920
}
export function mapMedia(value, map){
    if(typeof value != 'object') return [value].concat(map([value, value], 0)).slice(-2)[1];
    let obj = Object.entries(value).map((e, i) => [e[0]].concat(map(e, i)).slice(-2));
    return Object.fromEntries(obj);
}

export function media(breakpoints=(typeof this?.globalThis != 'undefined' ? this?.globalThis : window).breakpoints){

    function keyMap(obj: {[key: string]: any}, breakpoint?: string, onlyObject?: boolean){
        let keys = Object.keys(obj);
        if(onlyObject){
            keys = keys.filter(e => typeof obj[e] == 'object');
        }else{
            keys = keys.filter(e => typeof obj[e] != 'object');
        }
        
        const mapCss = keys.map(key => {
            if(!breakpoint && [undefined, false].includes(obj[key])) return null;
            if(!breakpoint) return css({[key]:obj[key]}).styles;
            if([undefined, false].includes(obj[key][breakpoint])) return null;
            return css({[key]:obj[key][breakpoint]}).styles;
        }).filter(Boolean).join(';')

        return mapCss
    }
    
    return function(obj){  

        let propertyIsObjStr = Object.keys(breakpoints||{}).map(breakpoint => {

            const css = keyMap(obj, breakpoint, true)
            if(!css) return null
            return `@media only screen and (min-width: ${breakpoints[breakpoint]}px) {${css}}`
        }).filter(Boolean).join(';')

        return keyMap(obj).concat(';', propertyIsObjStr);
    }
}

export function getDefinedBreakPoint(props: {[key: string]: any}){
    const keys = Object.keys(props)
    const keysFiltered = keys.filter(e => ~e.indexOf('bp-'))
    const breakpoints = keysFiltered.reduce((obj, keys) => {
      obj[keys.replace('bp-', '')] = props[keys]
      return obj
    }, {})
    
    return breakpoints
}