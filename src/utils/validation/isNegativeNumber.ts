import isNumber from './isNumber';

/**
 * @description it will check if the passed number is positive (greater than 0)
 * @example isNegativeNumber(1) // false
 * @example isNegativeNumber(-1) // true
 */
export default function isNegativeNumber(n: number): boolean {
  return isNumber(n) && n < 0;
}
