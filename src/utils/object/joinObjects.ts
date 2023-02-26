/**
 * @description will return a new object that combines all of the passed objects as new copy (not reference as Object.assign).
 * @example joinObjects({a:1},{b:2}) => {a:1, b:2}
 * @example joinObjects(({ a: 1 }, { b: 2 })) => { a: 1, b: 2 }
 * @example joinObjects(({ a: 1 }, null || undefined || !object)) => { a: 1 }
 */
const joinObjects = <T>(...args: (T | undefined | {})[]) =>
  args.reduce((prev, curr) => ({ ...(prev || {}), ...(curr || {}) }), {});
export default joinObjects;
