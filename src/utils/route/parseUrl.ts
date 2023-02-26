import splitOnFirst from '../string/splitOnFirst';
import extractQueryFromUrl from './extractQueryFromUrl';
import parse from './parse';
import { decode } from './routeHelpers';
import { ParsedUrl, ParseOptions } from './types';

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
export default function parseUrl(url: string, options?: ParseOptions): ParsedUrl {
  options = {
    decode: true,
    ...options
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
      : {})
  };
}
