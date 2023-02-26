/**
 * @description If the type of the value is a object ({}), return true, otherwise return false.
 * @param {unknown} value - unknown
 */
const isObject = (val: unknown): val is {} => !!val && !Array.isArray(val) && typeof val === 'object';
export default isObject;
