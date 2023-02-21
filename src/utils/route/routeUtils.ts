import { httpURLRegex, urlRegexForLongStr } from '../../regex/regex';
import { paramsToObject } from '../general/generalUtil';

/**
 * If the url doesn't contain http, add it to the url, otherwise return the url.
 * @param {string} url - string - the url to check
 * @param {boolean} secured - https instead of http
 * @example addHttpToURL("www.google.com") => "http://www.google.com"
 * @example addHttpToURL("www.google.com", true) => "https://www.google.com"
 * @returns {string}
 */
export const addHttpToURL = (url: string, secured = false) => {
  return url.search(httpURLRegex) === -1
    ? `${secured ? 'https' : 'http'}://${url.trim()}`
    : url.trim(); //check if url contains http
};

/**
 * It takes a query string and returns an object with the query parameters as keys and their values as
 * values
 * @param queryString  - The query string to parse.
 * @default window.location.search
 * @returns {Record<string, string>}
 * @example parseQueryParams("https://www.youtube.com/watch?v=ABCD") => {v:"ABCD"}
 */
export function parseQueryParams(
  queryString = window?.location?.search || ''
): Record<string, string> {
  const query: any = {};
  if (!queryString?.trim()?.length) return query;

  const pairs = (queryString[0] === '?'
    ? queryString.substr(1)
    : queryString
  ).split('&');
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

/**
 * It takes a string, finds the first occurrence of the hash character, and returns the string without
 * the hash character and everything after it.
 * @param {string} input - The string to remove the hash from.
 * @returns The input string with the hash removed.
 * @example removeHashFromUrl("www.google.com/a=abc#anchor") => "www.google.com/?a=abc"
 */
export function removeHashFromUrl(input: string) {
  const hashStart = input.indexOf('#');
  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input;
}

/**
 * It takes a URL and returns the query string
 * @param {string} input - The URL to extract the query from.
 * @returns The query string from the URL.
 * @example extractQueryFromUrl("https://www.youtube.com/watch?v=ABCD#anchor") => "v=ABCD"
 */
export function extractQueryFromUrl(input: string) {
  input = removeHashFromUrl(input);
  const queryStart = input.indexOf('?');
  if (queryStart === -1) {
    return '';
  }

  return input.slice(queryStart + 1);
}

export function extractUrlsFromString(str: string): string[] {
  return str.match(urlRegexForLongStr);
}


export function includeKeys(
  object: {},
  predicate:
    | string[]
    | ((key: string | symbol, value: string, object: {}) => boolean)
) {
  const result = {};

  if (Array.isArray(predicate)) {
    for (const key of predicate) {
      const descriptor = Object.getOwnPropertyDescriptor(object, key);
      if (descriptor?.enumerable) {
        Object.defineProperty(result, key, descriptor);
      }
    }
  } else {
    // `Reflect.ownKeys()` is required to retrieve symbol properties
    for (const key of Reflect.ownKeys(object)) {
      const descriptor = Object.getOwnPropertyDescriptor(object, key);
      if (descriptor?.enumerable) {
        const value = object[key];
        if (predicate(key, value, object)) {
          Object.defineProperty(result, key, descriptor);
        }
      }
    }
  }

  return result;
}

export function pick(
  urlOrQuery: string,
  filter:
    | string[]
    | ((key: string | symbol, value: string, object: {}) => boolean)
) {
  const { url, query } = parseUrl(urlOrQuery);

  return stringifyUrl({
    url,
    queryParams: includeKeys(paramsToObject(query), filter),
  });
}

export function exclude(
  urlOrQuery: string,
  filter: string[] | ((key: string, value: string) => boolean)
) {
  const exclusionFilter = Array.isArray(filter)
    ? key => !filter.includes(key)
    : (key, value) => !filter(key, value);

  return pick(urlOrQuery, exclusionFilter);
}

function parseUrl(urlParam: string): { url: string; query: URLSearchParams } {
  // will get only url www.youtube.com/watch?v=123 => www.youtube.com/watch
  const url = removeHashFromUrl(urlParam).split('?')[0] || '';
  const queryFromUrl = extractQueryFromUrl(
    urlParam.indexOf('?') > -1 ? urlParam : `?${urlParam}`
  );

  console.log(queryFromUrl);

  return { url, query: new URLSearchParams(queryFromUrl) };
}

/**
 * Description placeholder
 * @returns {string}
 */
function stringifyUrl({
  url = '',
  queryParams,
}: {
  url?: string;
  queryParams?: {};
}): string {
  const queryFromUrl = extractQueryFromUrl(url);
  const urlOnly = removeHashFromUrl(url).split('?')[0] || '';

  const stringifiedParams = new URLSearchParams(queryParams).toString();

  const hashIndex = url.indexOf('#');
  const hash = hashIndex === -1 ? '' : url.slice(hashIndex);
  const andSign = queryFromUrl?.length > 0 ? '&' : '';
  return `${urlOnly}?${stringifiedParams}${andSign}${queryFromUrl}${hash}`;
}


