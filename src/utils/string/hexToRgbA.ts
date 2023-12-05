import { StringOrNumber } from '../types';
import isHexColor from '../validation/isHexColor';

/**
 * @description converts hex colors to rgba color.
 * @example hexToRgbA("#fff") // rgba(255,255,255,1)
 */
export default function hexToRgbA(
  hex: string,
  alpha: StringOrNumber = 1
): string {
  if (!isHexColor(hex)) throw new Error('Bad Hex');

  let c;
  c = hex.substring(1).split('');
  if (c.length == 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }
  c = '0x' + c.join('');
  return (
    'rgba(' +
    [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
    `,${alpha})`
  );
}
