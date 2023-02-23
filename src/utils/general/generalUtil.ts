/**
 * @description Will return the length of the passed param wether if it was obj, array or a string.
 * @example count([1,2,3]) => 3
 * @example count("js") => 2
 * @example count("  ", {trimString:true}) => 0
 * @example count("  ", {trimString:false}) => 2
 * @example count({a:1,b:2}) => 2
 * @example count(true) => 1
 * @example count(false) => 0
 * @example count({a:1,b:2}) => 2
 */
export function count(
  input?: {} | [] | string | number | boolean,
  options?: { trimString: boolean }
): number {
  if (!input) return 0;

  if (Array.isArray(input)) {
    return input.length;
  }

  if (typeof input === 'object') {
    return Object.keys(input).length;
  }

  if (typeof input === 'string') {
    if (options.trimString) input = input.trim();
    return (input as string).length;
  }

  if (typeof input === 'number') return input;

  if (typeof input === 'boolean') return input ? 1 : 0;

  return 0;
}

/**
 * @description Will generate a s4 Guid
 * @example generateGuid() => "741baba3-1efc-b52e-5d9c-75b1fc80395a"
 */
export function generateGuid(): string {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  const result = `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
  return result;
}

/**
 * @description It takes a URLSearchParams object and returns a normal js object
 * @example paramsToObject(new URLSearchParams()) => {}
 */
export function paramsToObject(entries: URLSearchParams) {
  const result = {};
  //@ts-ignore
  for (const [key, value] of entries) {
    result[key] = value;
  }
  return result;
}

/**
 * @example conditionalReturn([].length > 0, "has items") => if true will return "has items" if not will return val2 (null if not provided)
 */
export function conditionalReturn(condition: boolean, val1: any, val2 = null) {
  condition ? val1 : val2;
}

/**
 * @description If the source is null or undefined, return an empty array, otherwise return the source as an array.
 * @param {unknown} source - unknown
 * @returns An array.
 */
export function toArray(source: unknown) {
  if (!source) return [];
  return Array.isArray(source) ? source : [source];
}

/**
 * @description will return a new object that combines all of the passed objects as new copy (not reference as Object.assign).
 * @example joinObjects({a:1},{b:2}) => {a:1, b:2}
 * @example joinObjects(({ a: 1 }, { b: 2 })) => { a: 1, b: 2 }
 * @example joinObjects(({ a: 1 }, null || undefined || !object)) => { a: 1 }
 */
export const joinObjects = <T>(...args: (T | undefined | {})[]) =>
  args.reduce((prev, curr) => ({ ...(prev || {}), ...(curr || {}) }), {});
