/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @since 4.0.0
 * @category Lang
 * @example
 * isObjectLike({}) // true
 *
 * isObjectLike([1, 2, 3]) // true
 *
 * isObjectLike(Function) // false
 *
 * isObjectLike(null) // false
 */
function isObjectLike(value: any): value is object {
  return typeof value === 'object' && value !== null;
}

export default isObjectLike;
