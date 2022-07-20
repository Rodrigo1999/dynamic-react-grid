import React, {forwardRef} from 'react';
import styled from '@emotion/styled'
import {media, mapMedia, breakpoints, getDefinedBreakPoint} from './utils';
import {Props, PropsMedia, Spacing, mapObjectParams, ReturnGrid} from './types';

let spacingConst = 4;

let getSpacing = (spacing: Spacing) => mapMedia(spacing, ([, val]:mapObjectParams) => val * spacingConst * 2);

let Media = styled.div((props: PropsMedia) => media(props.breakpoints)({
    flexDirection: props.row && props.direction,
    justifyContent: props.row && props.justify,
    alignContent: props.row && props.alignContent,
    alignItems: props.row && props.align,
    width: (
        props.row 
        && props.breakpoints
        && props[(Object.keys(props.breakpoints) as Array<keyof typeof props.breakpoints>)[0]] !== true 
        && mapMedia(props.spacingX, ([, val]:mapObjectParams) => `calc(100% + ${val * spacingConst * 2}px)`)
    ),
    marginLeft: props.row && props.spacingX && mapMedia(props.spacingX, ([, val]:mapObjectParams) => -(val * spacingConst)),
    marginRight: props.row && props.spacingX && mapMedia(props.spacingX, ([, val]:mapObjectParams) => -(val * spacingConst)),
    marginTop: props.row && props.spacingY && mapMedia(props.spacingY, ([, val]:mapObjectParams) => -(val * spacingConst)),
    marginBottom: props.row && props.spacingY && mapMedia(props.spacingY, ([, val]:mapObjectParams) => -(val * spacingConst)),
    flexWrap: props.row && props._wrap,
    alignSelf: props.self,
    maxWidth: mapMedia(props.breakpoints||{}, ([key]:mapObjectParams, i:number) => {
        let breakpoint = props[key];
        let spacing = getSpacing(props.spacingX);
        if(breakpoint && breakpoint !== true) return `calc(${100*breakpoint/12}% + ${spacing[key] || spacing}px)`;
        if(i===0 && !props.row) return '100%';
        return;
    }),
    flexBasis: mapMedia(props.breakpoints||{}, ([key]: mapObjectParams, i:number) => {
        let breakpoint = props[key];
        let spacing = getSpacing(props.spacingX);
        if(breakpoint && breakpoint !== true) return `calc(${100*breakpoint/12}% + ${spacing[key] || spacing}px)`;
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
            paddingLeft: props.spacingX && mapMedia(props.spacingX, ([, val]:mapObjectParams) => val * spacingConst),
            paddingRight: props.spacingX && mapMedia(props.spacingX, ([, val]:mapObjectParams) => val * spacingConst),
            paddingTop: props.spacingY && mapMedia(props.spacingY, ([, val]:mapObjectParams) => val * spacingConst),
            paddingBottom: props.spacingY && mapMedia(props.spacingY, ([, val]:mapObjectParams) => val * spacingConst),
        })}
    }
`

function MyGrid({
    children,
    row,
    self,
    wrap='wrap',
    spacing=0,
    spacingY,
    spacingX,
    direction,
    justify,
    alignContent,
    align,
    order,
    ...other
}: React.PropsWithoutRef<Props> & JSX.IntrinsicElements['div'], ref) {
    let _breakpoints = this?.breakpoints || breakpoints;
    _breakpoints = {..._breakpoints, ...getDefinedBreakPoint(other)}

    return (
        <Grid  
            {...other}
            row={row}
            breakpoints={_breakpoints} 
            _wrap={wrap}
            spacingY={spacingY || spacing}
            spacingX={spacingX || spacing}
            justify={justify} 
            align={align} 
            direction={direction} 
            alignContent={alignContent}
            ref={ref}
            order={order}
            self={self}
        >
            {children}
        </Grid>
    )
}
export {mapMedia, breakpoints, media} from './utils';
export let WithBreakpoints = (props:object) => forwardRef(MyGrid.bind({breakpoints:props})) as ReturnGrid;
export default forwardRef(MyGrid) as ReturnGrid;