import { Key } from '../../types';

/**
 * @description Takes the number out of the string and returns number
 * if no number exists will return infinity
 * @example getNumberFromString("3.35px") => 3.35;
 * @example getNumberFromString("3.35") => 3.35;
 * @example getNumberFromString("string") => infinity;
 * @param {string | number} strOrNum - string | number
 * @returns {number}
 */
const getNumberFromString = (strOrNum: Key): number => {
  if (!['number', 'string'].includes(typeof strOrNum)) return Math.max();
  const number =
    typeof strOrNum === 'number'
      ? strOrNum
      : strOrNum
          .split('')
          .filter(v => v === '.' || !Number.isNaN(Number(v)))
          .join('');

  return Number.isNaN(Number(number)) ? Math.max() : Number(number);
};

export default getNumberFromString;
