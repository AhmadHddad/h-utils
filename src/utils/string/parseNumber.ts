import isNumber from '../validation/isNumber';

/**
 * It takes a string, removes all non-numeric characters, and returns the result
 * @param {string} number - string - The string to be parsed.
 * @example parseNumber("123 ") => 123
 * @returns A function that takes a string and returns a string with all non-digit characters removed.
 */
export default function parseNumber(number: string | number): number {
  if(!number) return 0;
  if(isNumber(number)) return number;

  const parsedN = number.replace(/\D/g, '');
  return isNumber(parsedN) ? parsedN : 0;
}
