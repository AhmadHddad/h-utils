/**
 * @description The function isArray takes a value and returns true if the value is an array, otherwise it returns
 * false.
 * @param {any} value - unknown
 */
const isArray = <T>(value: unknown): value is Array<T> => Array.isArray(value);
export default isArray;
