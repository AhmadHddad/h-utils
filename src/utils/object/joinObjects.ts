import isObject from '../validation/isObject';

/**
 * @description will return a new object that combines all of the passed objects as new copy (not reference as Object.assign).
 * @example joinObjects({a:1},{b:2}) => {a:1, b:2}
 * @example joinObjects(({ a: 1 }, { b: 2 })) => { a: 1, b: 2 }
 * @example joinObjects(({ a: 1 }, null || undefined || !object)) => { a: 1 }
 */
function joinObjects<T extends object | null | undefined | {}>(
  ...args: T[]
): T {
  return args.reduce((prev, curr) => {
    return { ...(prev || {}), ...(isObject(curr) ? curr : {}) };
  }, {}) as T;
}

export default joinObjects;
