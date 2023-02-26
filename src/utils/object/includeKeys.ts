/**
 * @description "It returns a new object that contains only the enumerable properties of the original object that
 * match the predicate."
 *
 * The predicate can be either an array of keys or a function that takes the key, value, and object as
 * arguments
 * @param object - The object to copy enumerable properties from.
 * @param predicate - A function that returns true if the key should be included in the result.
 * @example includeKeys({
    foo: true,
    bar: false
}, (key, value) => value === true) => {foo: true}
 * @returns A new object with the same enumerable properties as the original object, but with the
 * values filtered by the predicate.
 */

export default function includeKeys(
  object: {},
  predicate: string[] |
    ((key: string | symbol, value: string, object: {}) => boolean)
) {
  const result = {};

  if (Array.isArray(predicate)) {
    for (const key of predicate) {
      const descriptor = Object.getOwnPropertyDescriptor(object, key);
      if (descriptor?.enumerable) {
        Object.defineProperty(result, key, descriptor);
      }
    }
  } else {
    // `Reflect.ownKeys()` is required to retrieve symbol properties
    for (const key of Reflect.ownKeys(object)) {
      const descriptor = Object.getOwnPropertyDescriptor(object, key);
      if (descriptor?.enumerable) {
        const value = object[key];
        if (predicate(key as string, value, object)) {
          Object.defineProperty(result, key, descriptor);
        }
      }
    }
  }

  return result;
}
