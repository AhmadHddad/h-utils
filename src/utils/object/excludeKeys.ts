import includeKeys from './includeKeys';

/**
 * "It returns a new object with the same keys as the original object, except for the keys that match
 * the predicate."
 *
 * The predicate is a function that takes three arguments: the key, the value, and the object. It
 * returns true if the key should be included in the new object, and false if it should be excluded
 * @example excludeKeys({
    foo: true,
    bar: false
}, (key, value) => value === true) => {bar: false}
 * @param object - The object to filter.
 * @param predicate - A function that returns true if the key should be included.
 */
export default function excludeKeys(
  object: {},
  predicate:
    | (string | symbol)[]
    | ((key: string | symbol, value: any, object: {}) => boolean)
) {
  
  if (Array.isArray(predicate)) {
    const set = new Set(predicate);
    return includeKeys(object, key => !set.has(key));
  }

  return includeKeys(
    object,
    (key, value, object) => !predicate(key, value, object)
  );
}
