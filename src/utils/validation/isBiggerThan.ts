import { Key } from '../../types';

/**
 * @example isBiggerThan(1,2) => false
 * @description The function isBiggerThan takes two arguments, a and b, and returns true if a is greater than b,
 * otherwise it returns false.
 */
const isBiggerThan = (a: Key, b: Key) => a > b;
export default isBiggerThan;
