import { StringOrNumber } from '../types';

/**
 * @description an implementation for mergeSort algorithm, it will sort an array of numbers or strings.
 * @example
 *  const arrayToSort = [3, 1,-1, 0,  4, 1, 5, 9, 2, 6, 5, 3, 5];
     mergeSort(arrayToSort)  // [ -1, 0, 1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9 ];
 * @param left 
 * @param right 
 * @returns 
 */
export default function mergeSort<T extends StringOrNumber>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort<T>(left), mergeSort(right)) as T[];
}

function merge(left: StringOrNumber[], right: StringOrNumber[]) {
  let result: StringOrNumber[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
