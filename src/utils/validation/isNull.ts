/**
 * It checks if the value is null.
 * @param {unknown} val - unknown
 */
const isNull = (val: unknown): val is null => val == null;
export default isNull;
