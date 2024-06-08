import isString from '../validation/isString';
import isURL from '../validation/isURL';
import addHttpToURL from './addHttpToURL';

/**
 * @description will return the url params of the passed Url
 * @example getUrlPathParams("www.example.com/1/2", {filterEmpty:true}) // ["1", "2"]
 * @example getUrlPathParams("www.example.com/1/2", {filterEmpty:false}) // ["", "1", "2"]
 */
export default function getUrlPathParams(
  url: string,
  options?: { filterEmpty?: boolean }
): string[] {
  if (!(isString(url) && isURL(url))) return [];

  const paramList = new URL(addHttpToURL(url)).pathname.split('/');

  return options?.filterEmpty
    ? paramList.filter((s) => s.trim().length)
    : paramList;
}
