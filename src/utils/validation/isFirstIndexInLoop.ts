/**
 * @description return true if the current index is the first index in the loop
 * @example [1,2,3].map((n, i) => isFirstIndexInLoop i)) => [false, false, true]
 */
export default function isFirstIndexInLoop(currentIndx: number): boolean {
  return currentIndx === 0;
}
