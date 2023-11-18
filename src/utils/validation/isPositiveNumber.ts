import isNumber from './isNumber';

/**
 * @description it will check if the passed number is positive (greater than 0)
 * @example isPositiveNumber(1) // true
 * @example isPositiveNumber(-1) // false
 */
export default function isPositiveNumber(n: number): boolean {
  return isNumber(n) && n > 0;
}
