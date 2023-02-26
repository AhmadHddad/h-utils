import isBiggerThan from '../validation/isBiggerThan';
import isSmallerThan from "../validation/isBiggerThan";
import isObject from '../validation/isObject';

/**
 * @description It sorts an array of objects or strings or numbers, and if the array is an array of objects, it can
 * sort by a property of the objects.
 * @param {T[]} arr - The array to be sorted
 * @param {string} [property] - The property of the object to sort by.
 * @param {boolean} [desc] - boolean - if true, the array will be sorted in descending order
 * @returns An array of objects sorted by the property passed in.
 */
export default function sortArr<T = string | {} | number>(
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
