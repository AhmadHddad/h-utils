/**
 * @description The function isArray takes a value and returns true if the value is an array, otherwise it returns
 * false.
 * @param {any} value - unknown
 */
const isArray = (value: unknown): value is [] => Array.isArray(value);
export default isArray;
