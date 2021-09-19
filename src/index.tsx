import React, {forwardRef} from 'react';
import styled from 'styled-components';
import {media, mapMedia, breakpoints} from './utils';
import {Props, PropsMedia, Spacing, mapObjectParams} from './types';

let spacingConst = 4;

let getSpacing = (spacing: Spacing) => mapMedia(spacing, ([, val]:mapObjectParams) => val * spacingConst * 2);
let Media = styled.div((props: PropsMedia) => media(props.breakpoints)({
    flexDirection: props.row && props.direction,
    justifyContent: props.row && props.justify,
    alignContent: props.row && props.align,
    alignItems: props.row && props.alignItems,
    width: props.row && props[(Object.keys(props.breakpoints) as Array<keyof typeof props.breakpoints>)[0]] !== true && mapMedia(props._spacing, ([, val]:mapObjectParams) => `calc(100% + ${val * spacingConst * 2}px)`),
    margin: props.row && mapMedia(props._spacing, ([, val]:mapObjectParams) => -(val * spacingConst)),
    flexWrap: props.row && props._wrap,
    alignSelf: props.self,
    maxWidth: mapMedia(props.breakpoints||{}, ([key]:mapObjectParams, i:number) => {
        let breakpoint = props[key];
        let spacing = getSpacing(props._spacing);
        if(breakpoint && breakpoint !== true) return `calc(${100*breakpoint/12}% + ${spacing[key]||spacing}px)`;
        if(i===0 && !props.row) return '100%';
        return;
    }),
    flexBasis: mapMedia(props.breakpoints||{}, ([key]: mapObjectParams, i:number) => {
        let breakpoint = props[key];
        let spacing = getSpacing(props._spacing);
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
            padding: mapMedia(props._spacing, ([, val]:mapObjectParams) => val * spacingConst),
        })}
    }
`

let MyGrid: React.ForwardRefRenderFunction<HTMLDivElement, Props & JSX.IntrinsicElements['div']>  = function({
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
    let _breakpoints = this?.breakpoints || breakpoints;
    return (
        <Grid  
            {...other}
            row={row}
            breakpoints={_breakpoints} 
            _spacing={spacing} 
            _wrap={wrap}
            justify={justify} 
            align={align} 
            direction={direction} 
            alignItems={alignItems}
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