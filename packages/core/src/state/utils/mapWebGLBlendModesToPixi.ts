import { BLEND_MODES } from '@pixi/constants';

/**
 * Maps gl blend combinations to WebGL.
 *
 * @memberof PIXI
 * @function mapWebGLBlendModesToPixi
 * @private
 * @param {WebGLRenderingContext} gl - The rendering context.
 * @param {number[][]} [array=[]] - The array to output into.
 * @return {number[][]} Mapped modes.
 */
export function mapWebGLBlendModesToPixi(gl: WebGLRenderingContextBase, array: number[][] = []): number[][]
{
    // TODO - premultiply alpha would be different.
    // add a boolean for that!
    array[BLEND_MODES.NORMAL] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.ADD] = [gl.ONE, gl.ONE];
    array[BLEND_MODES.MULTIPLY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.SCREEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.OVERLAY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DARKEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.LIGHTEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.COLOR_DODGE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.COLOR_BURN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.HARD_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.SOFT_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DIFFERENCE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.EXCLUSION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.HUE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.SATURATION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.LUMINOSITY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.NONE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.LINEAR_BURN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DARKER_COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.LINEAR_DODGE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.LIGHTER_COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.VIVID_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.LINEAR_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.PIN_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.HARD_MIX] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DIVIDE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.NONE_2] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];

    // not-premultiplied blend modes
    array[BLEND_MODES.NORMAL_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.ADD_NPM] = [gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE];
    array[BLEND_MODES.SCREEN_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];

    // composite operations
    array[BLEND_MODES.SRC_IN] = [gl.DST_ALPHA, gl.ZERO];
    array[BLEND_MODES.SRC_OUT] = [gl.ONE_MINUS_DST_ALPHA, gl.ZERO];
    array[BLEND_MODES.SRC_ATOP] = [gl.DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DST_OVER] = [gl.ONE_MINUS_DST_ALPHA, gl.ONE];
    array[BLEND_MODES.DST_IN] = [gl.ZERO, gl.SRC_ALPHA];
    array[BLEND_MODES.DST_OUT] = [gl.ZERO, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DST_ATOP] = [gl.ONE_MINUS_DST_ALPHA, gl.SRC_ALPHA];
    array[BLEND_MODES.XOR] = [gl.ONE_MINUS_DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA];

    // SUBTRACT from flash
    array[BLEND_MODES.SUBTRACT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];

    return array;
}
