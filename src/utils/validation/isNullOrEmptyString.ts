import isNullOrUndefined from './isNullOrUndefined';
import { isString } from './isString';

/**
 * @description It returns true if the value is null, undefined, or an empty string
 * @param {string | null} [value] - The value to check.
 */
const isNullOrEmptyString = (value?: string | null) => isNullOrUndefined(value) || (isString(value) && value.length === 0);
export default isNullOrEmptyString;
