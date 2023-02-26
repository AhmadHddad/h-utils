/**
 * @description If the type of the value is a string, return true, otherwise return false.
 * @param {unknown} value - unknown
 */
export const isString = (value: unknown): value is string => typeof value === 'string';
export default isString;
