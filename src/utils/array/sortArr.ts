import isBiggerThan from '../validation/isBiggerThan';
import isSmallerThan from '../validation/isSmallerThan';
import isObject from '../validation/isObject';
import { Key } from '../utilityTypes';

/**
 * @description It sorts an array of objects or strings or numbers, and if the array is an array of objects, it can
 * sort by a key of the objects.
 * @example sortArr([4,2,1]) // [1,2,4]
 * @example sortArr([{a:2}, {a:1}], {key:"a"}) // [{a:1}, {a:2}]
 */
export default function sortArr<T>(
  arr: T[],
  options?: { key?: string; desc?: boolean }
): T[] {
  const { desc, key } = options || {};

  const sortedArr = [...arr];
  const isObjectArray = isObject(arr[0]);
  const condA = desc ? isBiggerThan : isSmallerThan;
  const condB = desc ? isSmallerThan : isBiggerThan;

  const sortFunc = (a, b) => {
    const prop = key || '';
    let valueA: Key;
    let valueB: Key;

    if (isObjectArray) {
      valueA = a[prop];
      valueB = b[prop];
    } else {
      valueA = a;
      valueB = b;
    }

    return condA(valueA, valueB) ? -1 : condB(valueA, valueB) ? 1 : 0;
  };

  return sortedArr.sort(sortFunc);
}
