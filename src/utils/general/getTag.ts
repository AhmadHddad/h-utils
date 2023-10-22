const toString = Object.prototype.toString;

/**
 * Gets the `toStringTag` of `value`.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
 * @description The Symbol.toStringTag static data property represents the well-known symbol @@toStringTag. 
 * @example getTag("foo"); // "[object String]"
 * @example getTag([1, 2]); // "[object Array]"
 */
function getTag(value: unknown): string {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}

export default getTag;