import { regexIsUrl, regxIsHttpUrl } from '../../regex';
import {
  GenerateQueryParamsStringType,
  GetPathNameType,
  GetQueryParam,
  GetObjectFromQueryStringType,
} from './types';

export const generateQueryParamsString: GenerateQueryParamsStringType = <
  T = object
>(
  queryObject
) => {
  let result = '?';
  const entries: any = Object.entries(queryObject);
  for (const [key, value] of entries) {
    result = result.concat(`${key}=${encodeURIComponent(value)}&`);
  }
  return result.substr(0, result.length - 1);
};

export const getQueryParam: GetQueryParam = param => {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));
  const sURLVariables = sPageURL.split('&');

  for (const item of sURLVariables) {
    const sParameterName = item.split('=');

    if (sParameterName[0] === param) {
      return sParameterName[1] === undefined ? null : sParameterName[1];
    }
  }
  return null;
};

export const getPathName: GetPathNameType = () => {
  return window?.location?.pathname?.toString();
};

export const getObjectFromQueryString: GetObjectFromQueryStringType = () => {
  const pageUrl = decodeURIComponent(window.location.search.substring(1));
  const queryItems = pageUrl.split('&');

  return queryItems.reduce((acc, queryItem) => {
    const [queryName, queryValue] = queryItem.split('=');
    acc[queryName] = queryValue;
    return acc;
  }, {});
};

export function parseObjToQueryParams(obj = {}) {
  let str = '';

  Object.keys(obj).forEach((key, index, arr) => {
    const val = obj[key] || '';

    str += `${key}=${val}`;

    if (index + 1 !== arr.length) {
      str += '&';
    }
  });
  return str;
}

export function formatQueryURL(url = '', obj = {}) {
  const queryString = Object.keys(obj)
    .filter(key => obj[key] !== undefined)
    .map(key => `${key}=${obj[key]}`)
    .join('&');

  return url.includes('?') ? url + '&' + queryString : url + '?' + queryString;
}

/**
 * If the url doesn't contain http, add it to the url, otherwise return the url.
 * @param {string} url - string - the url to check
 * @returns A function that takes a string and returns a string.
 */
export const addHttpToURL = (url: string) => {
  return url.search(regxIsHttpUrl) === -1 ? `http://${url.trim()}` : url.trim(); //check if url contains http
};

/**
 * It takes a string and returns an array of strings
 * @param {string} text - string
 */
export const splitUrl = (text: string): Array<string> =>
  text?.split(regexIsUrl);
