import { Key } from '../utilityTypes';

/**
 * @example isSmallerThan(1,2) => true
 * @description The function isSmallerThan takes two arguments, a and b, and returns true if a is smaller than b,
 * otherwise it returns false.
 */
const isSmallerThan = (a: Key, b: Key) => a < b;
export default isSmallerThan;
