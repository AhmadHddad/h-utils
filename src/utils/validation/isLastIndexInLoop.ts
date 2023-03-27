/**
 * @description return true if the current index is the last index in the loop
 * @example [1,2,3].map((n, i, arr) => isLastIndexInLoop(arr, i)) => [false, false, true]
 */
export default function isLastIndexInLoop(
  arr: any[],
  currentIndx: number
): boolean {
  return arr.length === currentIndx - 1;
}
