import isArray from '../validation/isArray';


/**
 * @description Creates a new array by replacing the element at a specified index with a given value, and returns the new modified array.
 * @example 
 * replaceAtIndex([1, 2, 3, 4, 5], 2, 10) // [1, 2, 10, 4, 5];
 */
export default function replaceAtIndex<T>(
  arr: T[],
  index: number,
  newValue: T
): T[] {
  if (!isArray<T>(arr)) return arr;

  // Check if the index is within the bounds of the array
  if (index < 0 || index >= arr.length) {
    throw new Error('Index out of bounds');
  }

  // Create a copy of the original array
  const newArray = [...arr];

  // Replace the value at the specified index with the new value
  newArray[index] = newValue;

  // Return the new array
  return newArray;
}
