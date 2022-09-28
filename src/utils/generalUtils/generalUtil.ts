import { Key } from '../../types';

/**
 * checks if the passed value is null or undefied
 * isNullOrUndefined("value") reutrns false
 * isNullOrUndefined(null) reutrns true
 * @param val unknown
 * @returns boolean
 */
export const isNullOrUndefined = (val: unknown): val is null | undefined =>
  val == null || val == undefined;

/**
 * If the value is undefined, return true, otherwise return false.
 * @param {unknown} val - unknown - The value to check if it's undefined.
 */
export const isUndefined = (val: unknown): val is undefined => val == undefined;

/**
 * It checks if the value is null.
 * @param {unknown} val - unknown
 */
export const isNull = (val: unknown): val is null => val == null;

/**
 * @description will convert passed params into object and return a new copy (not reference as Object.assign) of them merged to gother
 * toObject({a:1},{b:2}) reutrns {a:1, b:2}
 * @param args objects
 * @returns object
 */

export const toObject = <T>(...args: (T | undefined | {})[]) =>
  args.reduce((prev, curr) => ({ ...(prev || {}), ...(curr || {}) }), {});

/**
 * If the source is null or undefined, return an empty array, otherwise return the source as an array.
 * @param {unknown} source - unknown
 * @returns An array.
 */
export function toArray(source: unknown) {
  if (isNullOrUndefined(source)) return [];
  return Array.isArray(source) ? source : [source];
}

/**
 * The function isArray takes a value and returns true if the value is an array, otherwise it returns
 * false.
 * @param {any} value - unknown
 */
export const isArray = (value: unknown): value is [] => Array.isArray(value);

/**
 * If the type of the value is a function, then return true, otherwise return false.
 * @param {unknown} value - unknown
 */
export const isFunction = (value: unknown): value is (args: any) => any =>
  typeof value === 'function';

/**
 * If the type of the value is a string, return true, otherwise return false.
 * @param {unknown} value - unknown
 */
export const isString = (value: unknown): value is string =>
  typeof value === 'string';

/**
 * If the type of the value is a object ({}), return true, otherwise return false.
 * @param {unknown} value - unknown
 */
export const isObject = (val: unknown): val is {} =>
  !!val && !Array.isArray(val) && typeof val === 'object';

/**
 * This function takes a value and returns true if the value is truthy, otherwise it returns false.
 * @param {any} value - any
 */
export const isTruthy = (value: unknown): value is true => !!value;

/**
 * It returns true if the value is null, undefined, or an empty string
 * @param {string | null} [value] - The value to check.
 */
export const isNullOrEmptyString = (value?: string | null) =>
  isNullOrUndefined(value) || value?.trim().length === 0;

/**
 * If the value is not a number, then it is not a number.
 * @param {any} value - any - The value to be checked
 */
export const isNumber = (value: any): value is number =>
  !isNaN(value - parseFloat(value));

/**
 * If the value is truthy and is a Date type, then return true, otherwise return false.
 * @param {any} value - any
 */
export const isDateType = (value: any): value is Date =>
  Boolean(value && value.getTime);

/**
 * The function isBiggerThan takes two arguments, a and b, and returns true if a is greater than b,
 * otherwise it returns false.
 * @param {Key} a - Key
 * @param {Key} b - Key
 */
export const isBiggerThan = (a: Key, b: Key) => a > b;

/**
 * It returns true if the first argument is smaller than the second argument
 * @param {Key} a - Key
 * @param {Key} b - Key
 */
export const isSmallerThan = (a: Key, b: Key) => a < b;

/**
 * It returns true if the object or array is not empty, false otherwise
 * @param {unknown} objOrArr - The object or array to check.
 * @returns A function that takes an unknown type and returns a boolean.
 */
export function isLength(objOrArr: unknown) {
  if (!objOrArr) return false;

  if (isArray(objOrArr)) {
    return !!objOrArr.length;
  }

  if (isObject(objOrArr)) {
    return !!Object.keys(objOrArr).length;
  }

  return false;
}

/**
 * It returns true if the value is an array of strings, otherwise it returns false
 * @param {unknown} value - unknown
 * @returns A function that takes a value and returns a boolean.
 */
export function isArrayOfStrings(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(item => typeof item === 'string');
}

/**
 * If the argument is an object, then loop through it and print each item, otherwise just print the
 * argument.
 * @param {any} strs - any
 */
export function printAll(strs: any) {
  if (typeof strs === 'object') {
    for (const s of strs) {
      console.log(s);
    }
  } else {
    console.log(strs);
  }
}

export function generateGuid(): string {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  const result = `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
  return result;
}
