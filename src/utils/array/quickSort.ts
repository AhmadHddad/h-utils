/**
 * @description an implmentaion for quickSort algorightm, it will sort an array of numbers.
 */
export default function quickSort(arr: (number | string)[] = []): (number | string)[] {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let leftArr: (number | string)[] = [];
  let rightArr: (number | string)[] = [];

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
