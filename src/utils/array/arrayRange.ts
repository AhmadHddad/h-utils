import { Key } from '../../types';

/**
 * @description It takes two arguments, a and b, and returns an array of numbers or letters from a to b
 * @example arrayRange(1,5) => [ 1, 2, 3, 4, 5 ]
 * @example arrayRange("a", "c") => ["a", "b", "c"]
 * @param {Key} a - The starting point of the array.
 * @param {Key} b - The ending value of the range.
 * @param {number} step - The step value.
 * @returns An array of strings.
 */
export default function arrayRange(a: Key, b: Key, step: number) {
  let A: Key[] = [];

  if (typeof a == 'number' && typeof b == 'number') {
    A[0] = a;
    step = step || 1;
    while (a + step <= b) {
      A[A.length] = a += step;
    }
  } else if (typeof a == 'string' && typeof b == 'string') {
    var s = 'abcdefghijklmnopqrstuvwxyz';
    if (a === a.toUpperCase()) {
      b = b.toUpperCase();
      s = s.toUpperCase();
    }
    s = s.substring(s.indexOf(a), s.indexOf(b) + 1);
    A = s.split('');
  }
  return A;
}
