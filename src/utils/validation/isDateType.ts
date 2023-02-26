/**
 * @description  If the value is truthy and is a Date type, then return true, otherwise return false.
 * @param {any} value - any
 */
const isDateType = (value: any): value is Date => Boolean(value && value.getTime);
export default isDateType;
