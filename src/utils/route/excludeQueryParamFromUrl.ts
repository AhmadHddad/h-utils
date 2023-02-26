import pickQueryParamFromUrl from './pickQueryParamFromUrl';

/**
 * @description Exclude query parameters from a URL.
 * @example excludeQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', ['foo']); => 'https://foo.bar?bar=2#hello'
 * @example excludeQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', (name, value) => value === 2, {parseNumbers: true}); => 'https://foo.bar?foo=1#hello'
 */
export default function excludeQueryParamFromUrl(
  urlOrQuery: string,
  filter: string[] | ((key: string, value: string) => boolean)
): string {
  const exclusionFilter = Array.isArray(filter)
    ? key => !filter.includes(key)
    : (key, value) => !filter(key, value);

  return pickQueryParamFromUrl(urlOrQuery, exclusionFilter);
}
