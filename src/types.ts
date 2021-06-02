export type Spacing = number | object;
export type mapObjectParams = [any, number]
export interface Props {
    breakpoints: object;
    row: boolean;
    direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit' | 'initial' | 'unset';
    justify: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' |    'right' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset';
    align: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'normal' | 'baseline' | 'first baseline' | 'last baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset';
    alignItems: 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset';
    spacing:Spacing;
    wrap: 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit' | 'initial' | 'unset';
    self: 'auto' | 'normal' | 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end' | 'baseline' | 'first baseline' | 'last baseline' | 'stretch' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset';
    order: number;
    xs?: number,
    'xs-m'?: number,
    sm?: number,
    'sm-m'?: number,
    md?: number,
    'md-m'?: number,
    lg?: number,
    'lg-m'?: number,
    xl?: number
}
