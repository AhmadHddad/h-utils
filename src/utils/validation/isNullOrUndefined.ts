/**
 * @description checks if the passed value is null or undefined
 * @example isNullOrUndefined("value") => false
 * @example isNullOrUndefined(null) => true
 * @param val unknown
 * @returns boolean
 */
export const isNullOrUndefined = (val: unknown): val is null | undefined => val == null || val == undefined;
export default isNullOrUndefined;
