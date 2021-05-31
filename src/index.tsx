import React, {forwardRef} from 'react';
import styled from 'styled-components';
import {media, mapObject} from './utils';
import {Props, Spacing, mapObjectParams} from './types';

let spacingConst = 4;

let getSpacing = (spacing: Spacing) => mapObject(spacing, ([key, val]:mapObjectParams) => val * spacingConst * 2);
let Media = styled.div((props: Props) => media(props.breakpoints)({
    flexDirection: props.row && props.direction,
    justifyContent: props.row && props.justify,
    alignContent: props.row && props.align,
    alignItems: props.row && props.alignItems,
    width: props.row && props[(Object.keys(props.breakpoints) as Array<keyof typeof props.breakpoints>)[0]] !== true && mapObject(props.spacing, ([key, val]:mapObjectParams) => `calc(100% + ${val * spacingConst * 2}px)`),
    margin: props.row && mapObject(props.spacing, ([key, val]:mapObjectParams) => -(val * spacingConst)),
    flexWrap: props.row && props.wrap,
    alignSelf: props.self,
    maxWidth: mapObject(props.breakpoints||{}, ([key]:mapObjectParams, i:number) => {
        let breakpoint = props[key];
        let spacing = getSpacing(props.spacing);
        if(breakpoint && breakpoint !== true) return `calc(${100*breakpoint/12}% + ${spacing[key]||spacing}px)`;
        if(i===0 && !props.row) return '100%';
        return;
    }),
    flexBasis: mapObject(props.breakpoints||{}, ([key]: mapObjectParams, i:number) => {
        let breakpoint = props[key];
        let spacing = getSpacing(props.spacing);
        if(breakpoint && breakpoint !== true) return `calc(${100*breakpoint/12}% + ${spacing[key]||spacing}px)`;
        if(i===0 && breakpoint !== true) return '100%';
        return;
    }),
    order: props.order
}));
let Grid = styled(Media)`
    display:${({row}) => row && 'flex'};
    box-sizing: border-box;
    flex-grow: 1;
    & > *{
        ${props => props.row && media(props.breakpoints)({
            padding: mapObject(props.spacing, ([key, val]:mapObjectParams) => val * spacingConst),
        })}
    }
`


let MyGrid: React.ForwardRefRenderFunction<HTMLDivElement, Props>  = function({
    children,
    row,
    self,
    wrap='wrap',
    spacing=0,
    direction,
    justify,
    alignItems,
    align,
    order,
    ...other
}, ref) {
    let breakpoints = this?.breakpoints || {
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
    return (
        <Grid  
            {...other}
            row={row}
            breakpoints={breakpoints} 
            spacing={spacing} 
            justify={justify} 
            align={align} 
            direction={direction} 
            alignItems={alignItems}
            wrap={wrap}
            ref={ref}
            order={order}
            self={self}
        >
            {children}
        </Grid>
    )
}
export * from './utils';
export let WithBreakpoints = (props:object) => forwardRef(MyGrid.bind({breakpoints:props}));
export default forwardRef(MyGrid);