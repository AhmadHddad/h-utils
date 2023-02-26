
/**
 * @description It takes a URLSearchParams object and returns a normal js object
 * @example paramsToObject(new URLSearchParams()) => {}
 */
export default function paramsToObject(entries: URLSearchParams) {
    const result = {};
    //@ts-ignore
    for (const [key, value] of entries) {
      result[key] = value;
    }
    return result;
  }