import count from "../general/count";

/**
 * @description It returns true if the object or array is not empty, false otherwise
 * @returns A function that takes an unknown type and returns a boolean.
 * @example isLength([1,2]) => true
 * @example isLength([]) => false
 * @example isLength(null) => false
 */
export default function isLength(input?: any): boolean {
  return count(input) > 0;
}
