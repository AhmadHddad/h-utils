import addHttpToURL from './addHttpToURL';

/**
 * @description will make a new URL object for the passed url string.
 * its like parseURL, more lightweight but with less functionalities.
 */
export default function getUrlObj(url: string): URL {
  if (!(url.startsWith('http') || url.startsWith('https'))) {
    url = addHttpToURL(url);
  }

  return new URL(url);
}
