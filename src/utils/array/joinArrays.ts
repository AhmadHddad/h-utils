import isArray from '../validation/isArray';
import isNullOrUndefined from '../validation/isNullOrUndefined';

/**
 * @description will join all of the passed arrays to one single array, if the passed item is not an array it WILL NOT Add it.
 * @example joinArrays([1,2,3], [4,5,6], null ,undefined, "hello") // [1,2,3,4,5,6]
 */
export default function joinArrays<T>(...args: (T[] | null | undefined)[]) {
  const res: Array<T> = [];

  for (let i = 0; i < args.length; i++) {
    const arr = args[i];

    if (isNullOrUndefined(arr)) continue;

    if (isArray(arr)) {
      res.push(...(arr as T[]));
    }
  }

  return res;
}
