import { StringOrNumber } from '../types';

/**
 * @description an implementation for bubbleSort algorithm, it will sort an array of numbers or strings.
 * @example bubbleSort([3,2,1]) // [1,2,3]
 */
export default function bubbleSort<T extends StringOrNumber>(arr: T[]): T[] {
  if (!arr?.length) return arr;

  for (let i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true
        // then swap them
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}