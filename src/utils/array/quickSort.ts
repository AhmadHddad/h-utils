import { StringOrNumber } from '../types';

/**
 * @description an implementation for quickSort algorithm, it will sort an array of numbers or strings.
 * @example quickSort([3,2,1]) //[1,2,3]
 */
export default function quickSort<T extends StringOrNumber>(
  arr: T[] = []
): T[] {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let leftArr: T[] = [];
  let rightArr: T[] = [];

  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    if (item < pivot) {
      leftArr.push(item);
    } else {
      rightArr.push(item);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)] as T[];
}
