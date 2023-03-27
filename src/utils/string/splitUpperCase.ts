import { regex } from '../../index';

/**
 * @description It splits a string into an array of strings, where each string is a word, number, or capitalized
 * word
 * @example splitUpperCase("JavaScript") => ["Java", "Script"]
 * @param {string} str - string - The string to split
 * @returns An array of strings.
 */
const splitUpperCase = (str: string): string[] => {
  return str.match(regex.upperCaseRegex) || [];
};

export default splitUpperCase;
