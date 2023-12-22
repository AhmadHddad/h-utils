import { urlRegexForShortStr } from '../../regex/index';

/**
 * @description will check if the passed input is a valid url, if tryUrlObj will try to create a URL object
 * if it was successful will return true, otherwise will return the result of the regex result.
 * @example isURL("www.google.com") // true
 * @example isURL("www.google.com", true) // false
 */
export default function isURL(input: string, tryUrlObj?: boolean): boolean {
  let res = false;

  if (tryUrlObj) {
    try {
      res = !!new URL(input);
    } catch (error) {
      res = false;
    }
  } else {
    res = !!input.match(urlRegexForShortStr);
  }

  return res;
}
