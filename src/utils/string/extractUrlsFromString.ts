import { urlRegexForLongStr } from '../../regex';

/**
 * @description will extract all urls from a long string and return a list of the urls.
 * @example "Hello, visit me at www.example.com!" => ["www.example.com"]
 */
export default function extractUrlsFromString(str: string): string[] {
  return str.match(urlRegexForLongStr);
}
