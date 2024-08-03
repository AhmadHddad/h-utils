/**
 * @description will return a new object that combines all of the passed objects as new copy (not reference as Object.assign).
 * @example joinObjects({a:1},{b:2}) => {a:1, b:2}
 * @example joinObjects([1,2]) => {}
 * @example joinObjects(({ a: 1 }, { b: 2 })) => { a: 1, b: 2 }
 * @example joinObjects(({ a: 1 }, null || undefined || !object)) => { a: 1 }
 */
export default function joinObjects<T extends object | null | undefined | {}>(
  ...args: (T | any)[]
): T {
  let newObj: Record<string, any> = {};

  for (let index = 0; index < args.length; index++) {
    const object = args[index];

    if (!!object && typeof object === 'object' && !Array.isArray(object)) {
      newObj = { ...newObj, ...object };
    } else {
      continue;
    }
  }

  return newObj as T;
}
