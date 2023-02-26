import getAsciiSumFromString from './getAsciiSumFromString';

/**
 * @description It takes a string, converts it to an array of ASCII codes, sums them up, and returns the sum
 * @param {string} str - The string to hash
 * @returns The sum of the ASCII values of the characters in the string.
 */
export default function hashString(str: string): number {
  return getAsciiSumFromString(str);
}
