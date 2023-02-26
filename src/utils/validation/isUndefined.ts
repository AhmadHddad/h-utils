/**
 * @description If the value is undefined, return true, otherwise return false.
 * @param {unknown} val - unknown - The value to check if it's undefined.
 */
const isUndefined = (val: unknown): val is undefined => val == undefined;
export default isUndefined;
