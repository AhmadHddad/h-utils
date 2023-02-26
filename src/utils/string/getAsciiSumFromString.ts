import getAsciiCodeForChar from './getAsciiCodeForChar';

/**
 * @description It takes a string, splits it into an array of characters, then reduces the array to a single number
 * by adding the ASCII code of each character to the previous value
 * @param {string} str - string
 * @returns The sum of the ASCII codes for each character in the string.
 */
export default function getAsciiSumFromString(str: string): number {
  return str
    .split('')
    .reduce((prev, curr) => prev + getAsciiCodeForChar(curr), 0);
}
