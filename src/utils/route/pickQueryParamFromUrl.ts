import includeKeys from '../object/includeKeys';
import { KeysArr, PredicateFunc } from '../types';
import parseUrl from './parseUrl';
import stringifyUrl from './stringifyUrl';

/**
 * @description Pick query parameters from a URL.
 * @example pickQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', ['foo']); // 'https://foo.bar?foo=1#hello';
 * @example pickQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', (name, value) => value === 2, {parseNumbers: true}); // 'https://foo.bar?bar=2#hello';
 */
export default function pickQueryParamFromUrl(
  urlOrQuery: string,
  filter: KeysArr | PredicateFunc<any>
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
