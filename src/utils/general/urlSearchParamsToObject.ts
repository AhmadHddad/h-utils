
/**
 * @description It takes a URLSearchParams object and returns a normal js object
 * @example urlSearchParamsToObject(new URLSearchParams()) => {}
 */
export default function urlSearchParamsToObject(entries: URLSearchParams) {
    const result = {};
    //@ts-ignore
    for (const [key, value] of entries) {
      result[key] = value;
    }
    return result;
  }