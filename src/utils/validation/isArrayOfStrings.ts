/**
 * @description It returns true if the value is an array of strings, otherwise it returns false
 * @returns A function that takes a value and returns a boolean.
 */

export default function isArrayOfStrings(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(item => typeof item === 'string');
}
