import { StringOrNumber } from "../types";

/**
 * @description an implmentaion for bubbleSort algorightm, it will sort an array of numbers or strings.
 */
export default function bubbleSort(arr: StringOrNumber[]): StringOrNumber[] {
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