import { httpURLRegex } from '../../regex/regex';

/**
 * @description If the url doesn't contain http, add it to the url, otherwise return the url.
 * @param {string} url - string - the url to check
 * @param {boolean} secured - https instead of http
 * @example addHttpToURL("www.google.com") => "http://www.google.com"
 * @example addHttpToURL("www.google.com", true) => "https://www.google.com"
 * @returns {string}
 */
export default function addHttpToURL(url: string, secured = false): string {
  return url.search(httpURLRegex) === -1
    ? `${secured ? 'https' : 'http'}://${url.trim()}`
    : url.trim(); //check if url contains http
}
