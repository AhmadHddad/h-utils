/**
 * @description Shortcut function for checking if an object has a given property directly on itself.
 * @example has({a:1, b:2}, ["a"]) => true
 *
 */
export default function has(
  objectType: {} | Function | [],
  key: string
): boolean {
  return Object.prototype.hasOwnProperty.call(objectType, key);
}
