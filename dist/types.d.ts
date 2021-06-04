export interface Props {
    breakpoints: object;
    row: boolean;
    direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit' | 'initial' | 'unset';
    justify: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'inherit' | 'initial' | 'unset';
    align: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'stretch' | 'inherit' | 'initial' | 'unset';
    alignItems: 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset';
    spacing: number | object;
    wrap: 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit' | 'initial' | 'unset';
    self: 'auto' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch' | 'inherit' | 'initial' | 'unset';
    order: number;
    xs?: number;
    'xs-m'?: number;
    sm?: number;
    'sm-m'?: number;
    md?: number;
    'md-m'?: number;
    lg?: number;
    'lg-m'?: number;
    xl?: number;
}
export declare type Spacing = Props['spacing'];
export declare type mapObjectParams = [any, number];
export interface PropsMedia extends Props {
    _spacing: Props['spacing'];
    _wrap: Props['wrap'];
}
