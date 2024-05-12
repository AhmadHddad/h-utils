import isNullOrEmptyString from "../validation/isNullOrEmptyString";
import isString from "../validation/isString";

/**
 * @description will return the url params of the passed Url
 * @example getUrlParams("www.example.com/1/2") // ["1", "2"]
 * @example getUrlParams("www.example2.com/1") // ["1"]
 */
export default function getUrlParams(
  url: string,
  filterPredicate: (s: string, index:number) => boolean
): string[] {
    
  if (isString(url)) {
    return url
      .split("/")
      .filter((s) => filterPredicate || !isNullOrEmptyString(s))
      .splice(1);
  }

  if (url instanceof URL) {
  }
}
