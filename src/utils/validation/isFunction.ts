/**
 * @description  If the type of the value is a function, then return true, otherwise return false.
 * @param {unknown} value - unknown
 */
const isFunction = (value: unknown): value is (args: any) => any => typeof value === 'function';
export default isFunction;
