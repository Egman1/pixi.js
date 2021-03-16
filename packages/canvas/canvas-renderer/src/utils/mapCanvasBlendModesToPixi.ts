import { BLEND_MODES } from '@pixi/constants';
import { canUseNewCanvasBlendModes } from './canUseNewCanvasBlendModes';

/**
 * Maps blend combinations to Canvas.
 *
 * @memberof PIXI
 * @function mapCanvasBlendModesToPixi
 * @private
 * @param {string[]} [array=[]] - The array to output into.
 * @return {string[]} Mapped modes.
 */
export function mapCanvasBlendModesToPixi(array: string[] = []): string[]
{
    if (canUseNewCanvasBlendModes())
    {
        array[BLEND_MODES.NORMAL] = 'source-over';
        array[BLEND_MODES.ADD] = 'lighter'; // IS THIS OK???
        array[BLEND_MODES.MULTIPLY] = 'multiply';
        array[BLEND_MODES.SCREEN] = 'screen';
        array[BLEND_MODES.OVERLAY] = 'overlay';
        array[BLEND_MODES.DARKEN] = 'darken';
        array[BLEND_MODES.LIGHTEN] = 'lighten';
        array[BLEND_MODES.COLOR_DODGE] = 'color-dodge';
        array[BLEND_MODES.COLOR_BURN] = 'color-burn';
        array[BLEND_MODES.HARD_LIGHT] = 'hard-light';
        array[BLEND_MODES.SOFT_LIGHT] = 'soft-light';
        array[BLEND_MODES.DIFFERENCE] = 'difference';
        array[BLEND_MODES.EXCLUSION] = 'exclusion';
        array[BLEND_MODES.HUE] = 'hue';
        array[BLEND_MODES.SATURATION] = 'saturate';
        array[BLEND_MODES.COLOR] = 'color';
        array[BLEND_MODES.LUMINOSITY] = 'luminosity';
        array[BLEND_MODES.LINEAR_BURN] = 'linear-burn';
        array[BLEND_MODES.DARKER_COLOR] = 'darker-color';
        array[BLEND_MODES.LINEAR_DODGE] = 'linear-dodge';
        array[BLEND_MODES.LIGHTER_COLOR] = 'lighter-color';
        array[BLEND_MODES.VIVID_LIGHT] = 'vivid-light';
        array[BLEND_MODES.LINEAR_LIGHT] = 'linear-light';
        array[BLEND_MODES.PIN_LIGHT] = 'pin-light';
        array[BLEND_MODES.HARD_MIX] = 'hard-mix';
        array[BLEND_MODES.DIVIDE] = 'divide';
    }
    else
    {
        // this means that the browser does not support the cool new blend modes in canvas 'cough' ie 'cough'
        array[BLEND_MODES.NORMAL] = 'source-over';
        array[BLEND_MODES.ADD] = 'lighter'; // IS THIS OK???
        array[BLEND_MODES.MULTIPLY] = 'source-over';
        array[BLEND_MODES.SCREEN] = 'source-over';
        array[BLEND_MODES.OVERLAY] = 'source-over';
        array[BLEND_MODES.DARKEN] = 'source-over';
        array[BLEND_MODES.LIGHTEN] = 'source-over';
        array[BLEND_MODES.COLOR_DODGE] = 'source-over';
        array[BLEND_MODES.COLOR_BURN] = 'source-over';
        array[BLEND_MODES.HARD_LIGHT] = 'source-over';
        array[BLEND_MODES.SOFT_LIGHT] = 'source-over';
        array[BLEND_MODES.DIFFERENCE] = 'source-over';
        array[BLEND_MODES.EXCLUSION] = 'source-over';
        array[BLEND_MODES.HUE] = 'source-over';
        array[BLEND_MODES.SATURATION] = 'source-over';
        array[BLEND_MODES.COLOR] = 'source-over';
        array[BLEND_MODES.LUMINOSITY] = 'source-over';
        array[BLEND_MODES.LINEAR_BURN] = 'source-over';
        array[BLEND_MODES.DARKER_COLOR] = 'source-over';
        array[BLEND_MODES.LINEAR_DODGE] = 'source-over';
        array[BLEND_MODES.LIGHTER_COLOR] = 'source-over';
        array[BLEND_MODES.VIVID_LIGHT] = 'source-over';
        array[BLEND_MODES.LINEAR_LIGHT] = 'source-over';
        array[BLEND_MODES.PIN_LIGHT] = 'source-over';
        array[BLEND_MODES.HARD_MIX] = 'source-over';
        array[BLEND_MODES.DIVIDE] = 'source-over';
    }
    // not-premultiplied, only for webgl
    array[BLEND_MODES.NORMAL_NPM] = array[BLEND_MODES.NORMAL];
    array[BLEND_MODES.ADD_NPM] = array[BLEND_MODES.ADD];
    array[BLEND_MODES.SCREEN_NPM] = array[BLEND_MODES.SCREEN];

    // composite operations
    array[BLEND_MODES.SRC_IN] = 'source-in';
    array[BLEND_MODES.SRC_OUT] = 'source-out';
    array[BLEND_MODES.SRC_ATOP] = 'source-atop';
    array[BLEND_MODES.DST_OVER] = 'destination-over';
    array[BLEND_MODES.DST_IN] = 'destination-in';
    array[BLEND_MODES.DST_OUT] = 'destination-out';
    array[BLEND_MODES.DST_ATOP] = 'destination-atop';
    array[BLEND_MODES.XOR] = 'xor';

    // SUBTRACT from flash, does not exist in canvas
    array[BLEND_MODES.SUBTRACT] = 'source-over';

    return array;
}
