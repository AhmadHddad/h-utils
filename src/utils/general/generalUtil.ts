/**
 * @description Will return the length of the passed param wether if it was obj, array or a string.
 * @example count([1,2,3]) => 3
 * @example count("js") => 2
 * @example count({a:1,b:2}) => 2
 */
export function count(input?: {} | [] | string): number {
  if (!input) return 0;

  if (Array.isArray(input)) {
    return input.length;
  }

  if (typeof input === 'object') {
    return Object.keys(input).length;
  }

  if (typeof input === 'string') {
    return (input as string).length;
  }

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
 * @description will return a new object that combines all of the passed objects.
 * @example joinObjects(({ a: 1 }, { b: 2 })) => { a: 1, b: 2 }
 * @example joinObjects(({ a: 1 }, null || undefined || !object)) => { a: 1 }
 */
export function joinObjects(...args): {} {
  return args.reduce((prev, curr) => {
    const currObj =
      !!curr && !Array.isArray(curr) && typeof curr === 'object' ? curr : {};
    return { ...prev, ...currObj };
  }, {});
}

/**
 * @example conditionalReturn([].length > 0, "has items") => if true will return "has items" if not will return val2 (null if not provided)
 */
export function conditionalReturn(condition: boolean, val1: any, val2 = null) {
  condition ? val1 : val2;
}
