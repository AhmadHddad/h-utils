/**
 *@description Will return the first n number of letters.
 * @example getFirstNLetters('javascript', 3) => jav
 * @param {string} str
 * @param {number} [n=1]
 * @returns {string}
 */
const getFirstNLetters = (str: string, n = 1): string => {
  let val = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (val.length >= n) break;
    val += letter[0] || '';
  }

  return val;
};

export default getFirstNLetters;
