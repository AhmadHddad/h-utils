/**
 * @description  If the value is truthy and is a Date type, then return true, otherwise return false.
 */
const isDateType = (value: unknown): value is Date => value instanceof Date;
export default isDateType;
