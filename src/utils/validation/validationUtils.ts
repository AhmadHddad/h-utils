import { regex } from '../..';
import { Key } from '../../types';
import { count } from '../general/generalUtil';

export function isURL(input: string): boolean {
  return !!input.match(regex.urlRegexForShortStr);
}

export function isEmail(input: string): boolean {
  return !!input.match(regex.emailRegexForShortStr);
}

/**
 * @description checks if the passed value is null or undefined
 * @example isNullOrUndefined("value") => false
 * @example isNullOrUndefined(null) => true
 * @param val unknown
 * @returns boolean
 */
export const isNullOrUndefined = (val: unknown): val is null | undefined =>
  val == null || val == undefined;

/**
 * @description If the value is undefined, return true, otherwise return false.
 * @param {unknown} val - unknown - The value to check if it's undefined.
 */
export const isUndefined = (val: unknown): val is undefined => val == undefined;

/**
 * It checks if the value is null.
 * @param {unknown} val - unknown
 */
export const isNull = (val: unknown): val is null => val == null;

/**
 * @description The function isArray takes a value and returns true if the value is an array, otherwise it returns
 * false.
 * @param {any} value - unknown
 */
export const isArray = (value: unknown): value is [] => Array.isArray(value);

/**
 * @description  If the type of the value is a function, then return true, otherwise return false.
 * @param {unknown} value - unknown
 */
export const isFunction = (value: unknown): value is (args: any) => any =>
  typeof value === 'function';

/**
 * @description If the type of the value is a string, return true, otherwise return false.
 * @param {unknown} value - unknown
 */
export const isString = (value: unknown): value is string =>
  typeof value === 'string';

/**
 * @description If the type of the value is a object ({}), return true, otherwise return false.
 * @param {unknown} value - unknown
 */
export const isObject = (val: unknown): val is {} =>
  !!val && !Array.isArray(val) && typeof val === 'object';

/**
 * @description This function takes a value and returns true if the value is truthy, otherwise it returns false.
 * @param {any} value - any
 */
export const isTruthy = (value: unknown): value is true => !!value;

/**
 * @description It returns true if the value is null, undefined, or an empty string
 * @param {string | null} [value] - The value to check.
 */
export const isNullOrEmptyString = (value?: string | null) =>
  isNullOrUndefined(value) || (isString(value) && value.length === 0);

/**
 * @description If the value is not a number, then it is not a number.
 * @param {any} value - any - The value to be checked
 */
export const isNumber = (value: any): value is number =>
  !isNaN(value - parseFloat(value));

/**
 * @description  If the value is truthy and is a Date type, then return true, otherwise return false.
 * @param {any} value - any
 */
export const isDateType = (value: any): value is Date =>
  Boolean(value && value.getTime);

/**
 * @example isBiggerThan(1,2) => false
 * @description The function isBiggerThan takes two arguments, a and b, and returns true if a is greater than b,
 * otherwise it returns false.
 */
export const isBiggerThan = (a: Key, b: Key) => a > b;

/**
 * @example isSmallerThan(1,2) => true
 * @description  It returns true if the first argument is smaller than the second argument
 */
export const isSmallerThan = (a: Key, b: Key) => a < b;

/**
 * @description It returns true if the object or array is not empty, false otherwise
 * @returns A function that takes an unknown type and returns a boolean.
 * @example isLength([1,2]) => true
 * @example isLength([]) => false
 * @example isLength(null) => false
 */
export function isLength(input?: any): boolean {
  return count(input) > 0;
}

/**
 * @description will check if the parameter is a white space;
 * @param {string} [str]
 * @returns {boolean}
 */
export function isWhiteSpace(char: string): boolean {
  let white = new RegExp(/^\s$/);
  return white.test(char.charAt(0));
}

/**
 * @description It returns true if the value is an array of strings, otherwise it returns false
 * @returns A function that takes a value and returns a boolean.
 */
export function isArrayOfStrings(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(item => typeof item === 'string');
}

/**
 * @description It checks if the input is empty.
 * @example isEmpty({}) => true;
 * @example isEmpty([]) => true;
 * @example isEmpty(0) => true;
 * @example isEmpty(false) => true;
 * @example isEmpty(true) => false;
 * @example isEmpty("") => true;
 * @example isEmpty("") => true;
 * @returns A function that takes a value and returns a boolean.
 */
export function isEmpty(input?: [] | {} | string | number | boolean) {
  return !isLength(input);
}
