import { StringOrNumber } from "../types";

/**
 * @description an implementation for quickSort algorithm, it will sort an array of numbers or strings.
 */
export default function quickSort(arr: StringOrNumber[] = []): StringOrNumber[] {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let leftArr: StringOrNumber[] = [];
  let rightArr: StringOrNumber[] = [];

  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    if (item < pivot) {
      leftArr.push(item);
    } else {
      rightArr.push(item);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
