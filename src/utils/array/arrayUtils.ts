import { Key } from '../../types';
import {
  isBiggerThan,
  isObject,
  isSmallerThan,
} from '../validation/validationUtils';

/**
 * @description It takes two arguments, a and b, and returns an array of numbers or letters from a to b
 * @param {Key} a - The starting point of the array.
 * @param {Key} b - The ending value of the range.
 * @param {number} step - The step value.
 * @returns An array of strings.
 */
export function arrayRange(a: Key, b: Key, step: number) {
  let A: Key[] = [];

  if (typeof a == 'number' && typeof b == 'number') {
    A[0] = a;
    step = step || 1;
    while (a + step <= b) {
      A[A.length] = a += step;
    }
  } else if (typeof a == 'string' && typeof b == 'string') {
    var s = 'abcdefghijklmnopqrstuvwxyz';
    if (a === a.toUpperCase()) {
      b = b.toUpperCase();
      s = s.toUpperCase();
    }
    s = s.substring(s.indexOf(a), s.indexOf(b) + 1);
    A = s.split('');
  }
  return A;
}

/**
 * @description It takes two items of the same type, swaps them, and returns them as an array
 * @param {T} item1 - The first item to swap.
 * @param {T} item2 - T
 * @returns Nothing.
 */
export function swap<T>(item1: T, item2: T): Array<T> {
  const tmp = item1;
  item1 = item2;
  item2 = tmp;
  return [item1, item2];
}

/**
 * @description It sorts an array of objects or strings or numbers, and if the array is an array of objects, it can
 * sort by a property of the objects.
 * @param {T[]} arr - The array to be sorted
 * @param {string} [property] - The property of the object to sort by.
 * @param {boolean} [desc] - boolean - if true, the array will be sorted in descending order
 * @returns An array of objects sorted by the property passed in.
 */
export function sortArr<T = string | {} | number>(
  arr: T[],
  property?: string,
  desc?: boolean
): T[] {
  const sortedArr = [...arr];
  const sortFunc = (a, b) => {
    const condA = desc ? isSmallerThan : isBiggerThan;
    const condB = desc ? isBiggerThan : isSmallerThan;
    const prop = property || '';
    const valueA = isObject(a) ? a[prop] : a;
    const valueB = isObject(b) ? b[prop] : b;

    return condA(valueA, valueB) ? -1 : condB(valueA, valueB) ? 1 : 0;
  };

  return sortedArr.sort(sortFunc);
}

/**
 * @description It takes an array of objects and sorts them by array of multiple properties.
 * if the property starts with "-" then it will be descending order otherwize ascending order
 * @param {T[]} arr - the array to be sorted
 * @param {string[]} proprieties - an array of strings, each string is a property name
 */
export function sortByMultiProperties<T = {}>(
  arr: T[],
  proprieties: string[]
): T[] {
  if (!proprieties?.length) return arr;

  function _sortByAttr(attr) {
    let sortOrder = 1;
    if (attr[0] == '-') {
      sortOrder = -1;
      attr = attr.substr(1);
    }
    return function(a, b) {
      const result = a[attr] < b[attr] ? -1 : a[attr] > b[attr] ? 1 : 0;
      return result * sortOrder;
    };
  }

  function _getSortFunc(args) {
    return function(a, b) {
      let result = 0;
      for (let i = 0; result == 0 && i < args.length; i++) {
        result = _sortByAttr(args[i])(a, b);
      }
      return result;
    };
  }
  return arr.sort(_getSortFunc(proprieties));
}
