import getHashFromString from '../string/getHashFromString';
import extractQueryFromUrl from './extractQueryFromUrl';
import parse from './parse';
import removeHashFromUrl from './removeHashFromUrl';
import { encodeFragmentIdentifier, stringify } from './routeHelpers';
import { StringifyOptions, UrlObject } from '../types';

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

queryString.stringifyUrl({
    url: 'https://foo.bar',
    params: [1,"foo"]
}); //=> 'https://foo.bar/1/foo
``` */
export default function stringifyUrl(
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
  let url = removeHashFromUrl(object.url).split('?')[0] || '';

  if (options?.params?.length) {
    const joinedParams = options.params.join('/');
    url = url.endsWith('/') ? url + joinedParams : `${url}/${joinedParams}`;
  }

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
    options ??= {};
    hash = (options as any)[encodeFragmentIdentifier]
      ? urlObjectForFragmentEncode.hash
      : `#${object.fragmentIdentifier}`;
  }

  return `${url}${queryString}${hash}`;
}
