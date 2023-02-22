import { httpURLRegex, urlRegexForLongStr } from '../../regex/regex';
import { paramsToObject } from '../general/generalUtil';
import { includeKeys } from '../object/objectUtils';

/**
 * @description If the url doesn't contain http, add it to the url, otherwise return the url.
 * @param {string} url - string - the url to check
 * @param {boolean} secured - https instead of http
 * @example addHttpToURL("www.google.com") => "http://www.google.com"
 * @example addHttpToURL("www.google.com", true) => "https://www.google.com"
 * @returns {string}
 */
export function addHttpToURL(url: string, secured = false): string {
  return url.search(httpURLRegex) === -1
    ? `${secured ? 'https' : 'http'}://${url.trim()}`
    : url.trim(); //check if url contains http
}

/**
 * @description It takes a string, finds the first occurrence of the hash character, and returns the string without
 * the hash character and everything after it.
 * @example removeHashFromUrl("www.example.com/a#link") => "www.example.com/a"
 */
export function removeHashFromUrl(input: string) {
  const hashStart = input.indexOf('#');
  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input;
}

/**
 * @description It takes a URL and returns the query string
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

/**
 * @description Pick query parameters from a URL.
 * @example pickQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', ['foo']); => 'https://foo.bar?foo=1#hello';
 * @example pickQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', (name, value) => value === 2, {parseNumbers: true}); => 'https://foo.bar?bar=2#hello';
 */
export function pickQueryParamFromUrl(
  urlOrQuery: string,
  filter:
    | string[]
    | ((key: string | symbol, value: string, object: {}) => boolean)
): string {
  const { url, query } = parseUrl(urlOrQuery);

  return stringifyUrl({
    url,
    queryParams: includeKeys(query, filter),
  });
}

/**
 * @description Exclude query parameters from a URL.
 * @example excludeQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', ['foo']); => 'https://foo.bar?bar=2#hello'
 * @example excludeQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', (name, value) => value === 2, {parseNumbers: true}); => 'https://foo.bar?foo=1#hello'
 */
export function excludeQueryParamFromUrl(
  urlOrQuery: string,
  filter: string[] | ((key: string, value: string) => boolean)
): string {
  const exclusionFilter = Array.isArray(filter)
    ? key => !filter.includes(key)
    : (key, value) => !filter(key, value);

  return pickQueryParamFromUrl(urlOrQuery, exclusionFilter);
}

/**
 * @description Extract the URL and the query string as an object.
 * @example parseUrl('https://foo.bar?foo=bar') =>{url: 'https://foo.bar', query: {foo: 'bar'}}
 * @returns
 */
export function parseUrl(urlParam: string): { url: string; query: {} } {
  // will get only url www.youtube.com/watch?v=123 => www.youtube.com/watch
  const url = removeHashFromUrl(urlParam).split('?')[0] || '';
  const queryFromUrl = extractQueryFromUrl(
    urlParam.indexOf('?') > -1 ? urlParam : `?${urlParam}`
  );

  return { url, query: paramsToObject(new URLSearchParams(queryFromUrl)) };
}

/**
 * @description Stringify an object into a URL with a query string and sorting the keys. The inverse of .parseUrl();
 * @example stringifyUrl({url: 'https://foo.bar', query: {foo: 'bar'}}) => 'https://foo.bar?foo=bar';
 */
export function stringifyUrl({
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
