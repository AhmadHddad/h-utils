import { regex } from '../../regex';
import { Key } from '../../types';
import {
  isNull,
  isNumber,
  isString,
  isUndefined,
} from '../validation/validationUtils';

/**
 *@description Will return the initials of the passed name at provided length;
 * @example visual studio => vs;
 * @example JavaScript => JS
 * @param {string} name
 * @param {number} [length=1]
 * @returns {string}
 */
export const getNameInitials = (name: string, length = 1): string =>
  splitUpperCase(name).reduce(
    (prev: string, curr: string, _: number, arr: string[]) => {
      if (arr.length === 1) return (prev += getFirstNLetters(curr, length));
      return prev.length >= length ? prev : (prev += getFirstNLetters(curr, 1));
    },
    ''
  );

/**
 *@description Will return the first n number of letters.
 * @example getFirstNLetters('javascript', 3) => jav
 * @param {string} str
 * @param {number} [n=1]
 * @returns {string}
 */
const getFirstNLetters = (str: string, n = 1) => {
  let val = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (val.length >= n) break;
    val += letter[0] || '';
  }

  return val;
};

/**
 * It splits a string into an array of strings, where each string is a word, number, or capitalized
 * word
 * @example splitUpperCase("JavaScript") => ["Java", "Script"]
 * @param {string} str - string - The string to split
 * @returns An array of strings.
 */
export const splitUpperCase = (str: string): string[] => {
  return str.match(regex.upperCaseRegex) || [];
};

/**
 * @description will check if the parameter is a white space;
 * @param {string} [str]
 * @returns {boolean}
 */
export const isWhiteSpace = (str: string): boolean => {
  return !str || str.trim().length === 0;
};

/**
 * Takes the number out of the string and returns number
 * if no number exists will return infinity
 * @example toNumber("3.35px") => 3.35;
 * @example toNumber("3.35") => 3.35;
 * @example toNumber("string") => infinity;
 * @param {string | number} strOrNum - string | number
 * @returns {number}
 */
export const toNumber = (strOrNum: Key): number => {
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

/**
 * The function takes a JWT token and returns the decoded payload as a JSON object.
 * @param {string} token - The JWT token that you want to parse.
 * @returns The JSON payload of the JWT.
 */
export function parseJwt(token: string) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
}

/**
 * It takes a string and get the extension file type.
 * @example getFileExtensionFromString("fileName.txt") => txt
 * @param {string} str - string - The string to get the file extension from.
 * @returns The file extension of the string.
 */
export function getFileExtensionFromString(str: string): string {
  if (!str || !isString(str)) return '';

  return str.split('.').at(-1) || '';
}

const testWhiteSpace = (char: string) => {
  let white = new RegExp(/^\s$/);
  return white.test(char.charAt(0));
};

export const breakWord = (str: string, maxWidth: number) => {
  const newLineStr = '\n';
  let wrappedText = '';
  let prefix = '';

  while (str.length > maxWidth) {
    let found = false;
    // Insert a new line at the first whitespace of the line
    for (let i = maxWidth - 1; i >= 0; i--) {
      if (testWhiteSpace(str.charAt(i))) {
        wrappedText = wrappedText + [str.slice(0, i), newLineStr].join('');
        str = str.slice(i + 1);
        found = true;
        break;
      }
    }
    // Insert a new line at the maxWidth position, the word is too long to wrap
    if (!found) {
      wrappedText += [str.slice(0, maxWidth), newLineStr].join('');
      str = str.slice(maxWidth);
    }
  }
  return prefix + wrappedText + str;
};

/**
 * It takes a string and returns the ASCII code for the first character in the string
 * @param {string} char - The character to get the ASCII code for.
 * @returns The ASCII code for the character.
 */
export function getAsciiCodeForChar(char: string): number {
  return char.charCodeAt(0);
}

/**
 * It takes a string, splits it into an array of characters, then reduces the array to a single number
 * by adding the ASCII code of each character to the previous value
 * @param {string} str - string
 * @returns The sum of the ASCII codes for each character in the string.
 */
export function getAsciiSumFromString(str: string) {
  return str
    .split('')
    .reduce((prev, curr) => prev + getAsciiCodeForChar(curr), 0);
}

/**
 * It takes a string, converts it to an array of ASCII codes, sums them up, and returns the sum
 * @param {string} str - The string to hash
 * @returns The sum of the ASCII values of the characters in the string.
 */
function hashString(str: string) {
  return getAsciiSumFromString(str);
}

/**
 * It takes a string and an array of colors and returns a color from the array based on the string
 * @param {string} str - The string you want to map to a color
 * @param {string[]} colorsArr - an array of colors
 * @returns A string
 */
export function mapStringToColorFromArr(
  str: string,
  colorsArr: string[]
): string {
  return colorsArr[hashString(str) % colorsArr.length];
}

/**
 * It takes a string, converts it to a number, then converts that number to a color
 * @param {string} str - The string to convert to a color.
 * @returns A string of the form #RRGGBB.
 */
export function stringToHexColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

/**
 * It takes a string, converts it to a number, and then uses that number to generate a color.
 *
 * The function is based on the [HSL color model](https://en.wikipedia.org/wiki/HSL_and_HSV).
 *
 * The function takes three arguments:
 *
 * - `string`: The string to convert to a color.
 * - `saturation`: The saturation of the color.
 * - `lightness`: The lightness of the color.
 *
 * The function returns a string in the format `hsl(hue, saturation, lightness)`.
 *
 * The function uses the [Fowler–Noll–Vo hash
 * function](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function) to convert the
 * string to a
 * @param string - The string to convert to a color.
 * @param [saturation=100] - 0-100
 * @param [lightness=75] - 0-100
 * @returns A string of the form `hsl(0, 100%, 75%)`
 */
export const stringToHslColor = (string, saturation = 100, lightness = 75) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  return `hsl(${hash % 360}, ${saturation}%, ${lightness}%)`;
};

/**
 * It takes an array of strings and returns a string with "And", "Or", "," in the sentance depending on their position.
 * @example ["Car", "Laptop", "Home"]=> Car, Laptop and Home.
 * @example ["Car", "Laptop", "-Home"]=> Car, Laptop or Home.
 * @example ["Car", "-Laptop", "Home"]=> Car or Laptop and Home.
 * @param {string[]} stringArray - string[]
 * @returns A string
 */
export function addAndOrConjunctionsToStrArray(stringArray: string[]) {
  if (!Array.isArray(stringArray)) return '';

  return stringArray.reduce((prev, curr, i, arr) => {
    const hasDash = curr[0] === '-';
    const hasAnd = curr[0] === '+';

    let word = hasDash ? curr.replace('-', '') : curr;
    word = hasAnd ? word.replace('+', '') : word;
    const next = i === arr.length - 1 ? '' : arr.at(i + 1) || '';
    const hasMoreThanOne = arr.length > 1;
    const nextHasDash = next[0] === '-';
    const secondNextHasDash = i === arr.length - 1 ? '' : arr.at(i + 2) || '';
    const x = secondNextHasDash[0] === '-';

    if (!hasMoreThanOne && curr.trim().length) return prev + word;

    if (next && next.at(0) !== '-' && arr.length - 2 !== i && !x) word += ',';
    if (!!next) word += ' ';
    if (
      (word.length && i === arr.length - 1 && !hasDash) ||
      hasAnd ||
      (nextHasDash && i !== 0)
    )
      word = 'and ' + word;
    if (hasDash) word = 'or ' + word;
    return prev + word;
  }, '');
}

/**
 * It takes a string, an object, and a navigation character, and returns the value of the object at the
 * string's path.
 * @param {string} string - the string you want to navigate with
 * @param object - {},
 * @param {string} [navigtationChr=.] - string = '.'
 * @returns The value of the key in the object.
 */
export function navigateObjWithString(
  string: string,
  object: {},
  navigtationChr: string = '.'
) {
  return string
    .split(navigtationChr)
    .reduce((a, key) => (a !== undefined ? a[key] : undefined), object);
}

/**
 * It takes a string and returns a number, boolean, null, undefined, or a string that has "undefined" as string
 * and returns the actual type.
 * if "123" will return the number 123 and so on.
 * @param {string | null | undefined | number} str - string | null | undefined | number
 * @param config - {
 */
export function parseString(
  str: string | null | undefined | number,
  config = { includeWholeStr: false, parseStrStartsWithZero: true }
) {
  const { includeWholeStr, parseStrStartsWithZero } = config;
  if (!isString(str)) {
    if (isUndefined(str)) return undefined;
    if (isNull(str)) return null;
  }

  if (isNumber(str)) return str;

  str = str?.toLowerCase();
  if (includeWholeStr && str?.includes('null')) return null;
  if (includeWholeStr && str?.includes('undefined')) return undefined;
  if (!parseStrStartsWithZero && str?.startsWith('0')) return str;
  if (str?.length && !isNaN(Number(str))) return Number(str);
  if (str?.length && str === 'true') return true;
  if (str?.length && str === 'false') return false;

  return str;
}

export function parseNumber(number: string) {
  return number.replace(/\D/g, '');
}

export function parseDate(date: string) {
  return new Date(date);
}

/**
 * It takes a string and a separator and returns an array of two strings, the first being the string up
 * to the separator and the second being the string after the separator.
 * @example splitOnFirst('key:value:value2', ':') => ['key', 'value:value2']
 * @param {string} string - string
 * @param {string} separator - The separator to split on.
 */
export function splitOnFirst(string: string, separator: string): string[] {
  if (!(typeof string === 'string' && typeof separator === 'string')) {
    throw new TypeError('Expected the arguments to be of type `string`');
  }

  if (string === '' || separator === '') {
    return [];
  }

  const separatorIndex = string.indexOf(separator);

  if (separatorIndex === -1) {
    return [];
  }

  return [
    string.slice(0, separatorIndex),
    string.slice(separatorIndex + separator.length),
  ];
}
