import isLength from './isLength';

/**
 * @description It checks if the input is empty.
 * @example isEmpty({}) => true;
 * @example isEmpty([]) => true;
 * @example isEmpty(0) => true;
 * @example isEmpty(false) => true;
 * @example isEmpty(true) => false;
 * @example isEmpty("") => true;
 * @example isEmpty("") => true;
 * @returns A function that takes a value and returns a boolean.
 */
export default function isEmpty(input?: [] | {} | string | number | boolean | unknown | any) {
  return !isLength(input);
}
