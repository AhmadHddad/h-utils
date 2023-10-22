/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} ignoreType
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * isEqual("1", 1, true) // true
 * isEqual("1", 1) // false
 *
 * const object = { 'a': 1 }
 * const other = { 'a': 1 }
 *
 * isEqual(object, object) // true
 *
 * isEqual(object, other) // false
 *
 * isEqual('a', 'a') // true
 *
 * isEqual('a', Object('a')) // false;
 *
 * isEqual(NaN, NaN) // true
 *
 */
function isEqual(value: any, other: any, ignoreType: boolean): boolean {
  if (ignoreType) return value == other || (value != value && other != other);

  return value === other || (value !== value && other !== other);
}

export default isEqual;
