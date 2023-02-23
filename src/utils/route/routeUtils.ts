import { httpURLRegex } from '../../regex/regex';
import { includeKeys } from '../object/objectUtils';
import { getHashFromString, splitOnFirst } from '../string/stringUtils';
import {
  decode,
  keysSorter,
  parserForArrayFormat,
  parseValue,
  stringify,
  validateArrayFormatSeparator,
} from './routeHelpers';
import { ParsedUrl, ParseOptions, StringifyOptions, UrlObject } from './types';

export function parse(query, options) {
  options = {
    decode: true,
    sort: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ',',
    parseNumbers: false,
    parseBooleans: false,
    ...options,
  };

  validateArrayFormatSeparator(options.arrayFormatSeparator);

  const formatter = parserForArrayFormat(options);

  // Create an object with no prototype
  const returnValue = Object.create(null);

  if (typeof query !== 'string') {
    return returnValue;
  }

  query = query.trim().replace(/^[?#&]/, '');

  if (!query) {
    return returnValue;
  }

  for (const parameter of query.split('&')) {
    if (parameter === '') {
      continue;
    }

    const parameter_ = options.decode
      ? parameter.replace(/\+/g, ' ')
      : parameter;

    let [key, value] = splitOnFirst(parameter_, '=');

    if (key === undefined) {
      key = parameter_;
    }

    // Missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    value =
      value === undefined
        ? null
        : ['comma', 'separator', 'bracket-separator'].includes(
            options.arrayFormat
          )
        ? value
        : decode(value, options);
    formatter(decode(key, options), value, returnValue);
  }

  for (const [key, value] of Object.entries(returnValue)) {
    if (typeof value === 'object' && value !== null) {
      for (const [key2, value2] of Object.entries(value)) {
        value[key2] = parseValue(value2, options);
      }
    } else {
      returnValue[key] = parseValue(value, options);
    }
  }

  if (options.sort === false) {
    return returnValue;
  }

  // eslint-disable-next-line unicorn/no-array-reduce
  return (options.sort === true
    ? Object.keys(returnValue).sort()
    : Object.keys(returnValue).sort(options.sort)
  ).reduce((result, key) => {
    const value = returnValue[key];
    if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
      // Sort object keys, not values
      result[key] = keysSorter(value);
    } else {
      result[key] = value;
    }

    return result;
  }, Object.create(null));
}

const encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');

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
  const { url, query } = parseUrl(urlOrQuery, {});

  return stringifyUrl(
    {
      url,
      query: includeKeys(query, filter),
    },
    {}
  );
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
 * If the `parseFragmentIdentifier` option is `true`, the object will also contain a `fragmentIdentifier` property.
 * @example
```
import queryString from 'query-string';

queryString.parseUrl('https://foo.bar?foo=bar');
//=> {url: 'https://foo.bar', query: {foo: 'bar'}}

queryString.parseUrl('https://foo.bar?foo=bar#xyz', {parseFragmentIdentifier: true});
//=> {url: 'https://foo.bar', query: {foo: 'bar'}, fragmentIdentifier: 'xyz'}
```
*/
export function parseUrl(url: string, options?: ParseOptions): ParsedUrl {
  options = {
    decode: true,
    ...options,
  };

  let [url_, hash] = splitOnFirst(url, '#');

  if (url_ === undefined) {
    url_ = url;
  }

  return {
    url: url_?.split('?')?.[0] ?? '',
    query: parse(extractQueryFromUrl(url), options),
    ...(options && options.parseFragmentIdentifier && hash
      ? { fragmentIdentifier: decode(hash, options) }
      : {}),
  };
}

/**
 * @description Stringify an object into a URL with a query string and sorting the keys. The inverse of .parseUrl();
* @example
```
queryString.stringifyUrl({url: 'https://foo.bar', query: {foo: 'bar'}});
//=> 'https://foo.bar?foo=bar'

queryString.stringifyUrl({url: 'https://foo.bar?foo=baz', query: {foo: 'bar'}});
//=> 'https://foo.bar?foo=bar'

queryString.stringifyUrl({
	url: 'https://foo.bar',
	query: {
		top: 'foo'
	},
	fragmentIdentifier: 'bar'
});
//=> 'https://foo.bar?top=foo#bar'
``` */
export function stringifyUrl(
  object: UrlObject,
  options?: StringifyOptions
): string {
  options = {
    encode: true,
    strict: true,
    //@ts-ignore
    [encodeFragmentIdentifier]: true,
    ...options,
  };

  const url = removeHashFromUrl(object.url).split('?')[0] || '';
  const queryFromUrl = extractQueryFromUrl(object.url);

  const query = {
    ...parse(queryFromUrl, { sort: false }),
    ...object.query,
  };

  let queryString = stringify(query, options);
  if (queryString) {
    queryString = `?${queryString}`;
  }

  let hash = getHashFromString(object.url);
  if (object.fragmentIdentifier) {
    const urlObjectForFragmentEncode = new URL(url);
    urlObjectForFragmentEncode.hash = object.fragmentIdentifier;
    hash = options[encodeFragmentIdentifier]
      ? urlObjectForFragmentEncode.hash
      : `#${object.fragmentIdentifier}`;
  }

  return `${url}${queryString}${hash}`;
}
