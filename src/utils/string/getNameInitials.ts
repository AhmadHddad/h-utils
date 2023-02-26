import getFirstNLetters from './getFirstNLetters';
import splitUpperCase from './splitUpperCase';

/**
 *@description Will return the initials of the passed name at provided length;
 * @example visual studio => vs;
 * @example JavaScript => JS
 * @param {string} name
 * @param {number} [length=1]
 * @returns {string}
 */
const getNameInitials = (name: string, length = 1): string =>
  splitUpperCase(name).reduce(
    (prev: string, curr: string, _: number, arr: string[]) => {
      if (arr.length === 1) return (prev += getFirstNLetters(curr, length));
      return prev.length >= length ? prev : (prev += getFirstNLetters(curr, 1));
    },
    ''
  );

export default getNameInitials;
