import React from 'react';
export interface Breakpoints {
    /**
     * * xs -> `0`
     * * xs-m -> `300`
     * * sm -> `600`
     * * sm-m -> `780`
     * * md -> `960`
     * * md-m -> `1120`
     * * lg -> `1280`
     * * lg-m -> `1600`
     * * xl -> `1920`
     * ----------------------------------------
     * grid to **@media(min-width: `0px`)**.
     * ### Default `0px`
     * @example
     * <Grid row>
     *    <Grid xs={4}>Hello</Grid>
     *    <Grid xs={8}>World</Grid>
     * </Grid>
     */
    xs?: number;
    /**
     * * xs -> `0`
     * * xs-m -> `300`
     * * sm -> `600`
     * * sm-m -> `780`
     * * md -> `960`
     * * md-m -> `1120`
     * * lg -> `1280`
     * * lg-m -> `1600`
     * * xl -> `1920`
     * ----------------------------------------
     * grid to **@media(min-width: `300px`)**.
     * ### Default `300px`
     * @example
     * <Grid row>
     *    <Grid xs-m={4}>Hello</Grid>
     *    <Grid xs-m={8}>World</Grid>
     * </Grid>
     */
    'xs-m'?: number;
    /**
     * * xs -> `0`
     * * xs-m -> `300`
     * * sm -> `600`
     * * sm-m -> `780`
     * * md -> `960`
     * * md-m -> `1120`
     * * lg -> `1280`
     * * lg-m -> `1600`
     * * xl -> `1920`
     * ----------------------------------------
     * grid to **@media(min-width: `600px`)**.
     * ### Default `600px`
     * @example
     * <Grid row>
     *    <Grid sm={4}>Hello</Grid>
     *    <Grid sm={8}>World</Grid>
     * </Grid>
     */
    sm?: number;
    /**
     * * xs -> `0`
     * * xs-m -> `300`
     * * sm -> `600`
     * * sm-m -> `780`
     * * md -> `960`
     * * md-m -> `1120`
     * * lg -> `1280`
     * * lg-m -> `1600`
     * * xl -> `1920`
     * ----------------------------------------
     * grid to **@media(min-width: `780px`)**.
     * ### Default `780px`
     * @example
     * <Grid row>
     *    <Grid sm-m={4}>Hello</Grid>
     *    <Grid sm-m={8}>World</Grid>
     * </Grid>
     */
    'sm-m'?: number;
    /**
     * * xs -> `0`
     * * xs-m -> `300`
     * * sm -> `600`
     * * sm-m -> `780`
     * * md -> `960`
     * * md-m -> `1120`
     * * lg -> `1280`
     * * lg-m -> `1600`
     * * xl -> `1920`
     * ----------------------------------------
     * grid to **@media(min-width: `960px`)**.
     * ### Default `960px`
     * @example
     * <Grid row>
     *    <Grid md={4}>Hello</Grid>
     *    <Grid md={8}>World</Grid>
     * </Grid>
     */
    md?: number;
    /**
     * * xs -> `0`
     * * xs-m -> `300`
     * * sm -> `600`
     * * sm-m -> `780`
     * * md -> `960`
     * * md-m -> `1120`
     * * lg -> `1280`
     * * lg-m -> `1600`
     * * xl -> `1920`
     * ----------------------------------------
     * grid to **@media(min-width: `1120px`)**.
     * ### Default `1120px`
     * @example
     * <Grid row>
     *    <Grid md-m={4}>Hello</Grid>
     *    <Grid md-m={8}>World</Grid>
     * </Grid>
     */
    'md-m'?: number;
    /**
     * * xs -> `0`
     * * xs-m -> `300`
     * * sm -> `600`
     * * sm-m -> `780`
     * * md -> `960`
     * * md-m -> `1120`
     * * lg -> `1280`
     * * lg-m -> `1600`
     * * xl -> `1920`
     * ----------------------------------------
     * grid to **@media(min-width: `1280px`)**.
     * ### Default `1280px`
     * @example
     * <Grid row>
     *    <Grid lg={4}>Hello</Grid>
     *    <Grid lg={8}>World</Grid>
     * </Grid>
     */
    lg?: number;
    /**
     * * xs -> `0`
     * * xs-m -> `300`
     * * sm -> `600`
     * * sm-m -> `780`
     * * md -> `960`
     * * md-m -> `1120`
     * * lg -> `1280`
     * * lg-m -> `1600`
     * * xl -> `1920`
     * ----------------------------------------
     * grid to **@media(min-width: `1600px`)**.
     * ### Default `1600px`
     * @example
     * <Grid row>
     *    <Grid lg-m={4}>Hello</Grid>
     *    <Grid lg-m={8}>World</Grid>
     * </Grid>
     */
    'lg-m'?: number;
    /**
     * * xs -> `0`
     * * xs-m -> `300`
     * * sm -> `600`
     * * sm-m -> `780`
     * * md -> `960`
     * * md-m -> `1120`
     * * lg -> `1280`
     * * lg-m -> `1600`
     * * xl -> `1920`
     * ----------------------------------------
     * grid to **@media(min-width: `1920px`)**.
     * ### Default `1920px`
     * @example
     * <Grid row>
     *    <Grid xl={4}>Hello</Grid>
     *    <Grid xl={8}>World</Grid>
     * </Grid>
     */
    xl?: number;
}
interface PropsBase {
    /**
     * If assigned, indicates to component that it should be a line. (`true/false`).
     * @example
     * <Grid row>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     */
    row?: boolean;
    /**
     * flex-direction values.
     * @example
     * <Grid row direction='row-reverse'>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     *
     * // or
     *
     * <Grid row direction={{xs: 'row', md: 'row-reverse', ...}}>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     */
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit' | 'initial' | 'unset';
    /**
     * justify-content values.
     * @example
     * <Grid row justify='center'>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     *
     * // or
     *
     * <Grid row justify={{xs: 'center', md: 'space-between', ...}}>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     */
    justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'inherit' | 'initial' | 'unset';
    /**
     * align-content values
     * @example
     * <Grid row alignContent='center'>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     *
     * // or
     *
     * <Grid row alignContent={{xs: 'center', md: 'stretch', ...}}>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     */
    alignContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'stretch' | 'inherit' | 'initial' | 'unset';
    /**
     * align-items values
     * @example
     * <Grid row align='center'>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     *
     * // or
     *
     * <Grid row align={{xs: 'center', md: 'stretch', ...}}>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     */
    align?: 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset';
    /**
     * Defined in Grid tag with row props. Indicates column spacing, ranging from 0 to infinity. Default 0.
     * @example
     * <Grid row spacing={2}>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     *
     * // or
     *
     * <Grid row spacing={{xs: 2, md: 5, ...}}>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     */
    spacing?: number;
    /**
     * Defined in the Grid tag with row props. Indicates the vertical spacing of columns, ranging from 0 to infinity.
     * @example
     * <Grid row spacing={2} spacingY={6}>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     *
     * // or
     *
     * <Grid row spacingY={{xs: 2, md: 5, ...}}>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     */
    spacingY?: number;
    /**
     * Defined in the Grid tag with row props. Indicates the horizontal column spacing, ranging from 0 to infinity.
     * @example
     * <Grid row spacing={2} spacingX={6}>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     *
     * // or
     *
     * <Grid row spacingX={{xs: 2, md: 5, ...}}>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     */
    spacingX?: number;
    /**
     * flex-wrap values
     * @example
     * <Grid row wrap='nowrap'>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     *
     * // or
     *
     * <Grid row wrap={{xs: 'wrap', md: 'wrap-reverse', ...}}>
     *    <Grid md={6}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     */
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit' | 'initial' | 'unset';
    /**
     * align-self values. Default wrap
     * @example
     * <Grid row>
     *    <Grid md={6} self='center'>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     *
     * // or
     *
     * <Grid row>
     *    <Grid md={6} self={{xs: 'flex-start', md: 'baseline', ...}}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     */
    self?: 'auto' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch' | 'inherit' | 'initial' | 'unset';
    /**
     * order values
     * @example
     * <Grid row>
     *    <Grid md={6} order={2}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     *
     * // or
     *
     * <Grid row>
     *    <Grid md={6} order={{xs: 2, md: 1, ...}}>Hello</Grid>
     *    <Grid md={6}>World</Grid>
     * </Grid>
     */
    order?: number;
}
declare type mapPropsBase = {
    [Property in keyof PropsBase]: PropsBase[Property] | {
        [key: string]: PropsBase[Property];
    };
};
export interface Props extends mapPropsBase, Breakpoints {
}
export declare type Spacing = Props['spacing'];
export declare type mapObjectParams = [any, number];
export interface PropsMedia extends Props {
    _wrap?: Props['wrap'];
    breakpoints: Breakpoints & {
        [key: string]: number;
    };
}
export declare type ReturnGrid = React.ForwardRefExoticComponent<React.PropsWithoutRef<Props> & JSX.IntrinsicElements['div'] & {
    [x: string]: any;
}>;
export {};
