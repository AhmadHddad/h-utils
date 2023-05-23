import { urlRegexForLongStr } from "../../regex/index";

/**
 * @description will extract all urls from a long string and return a list of the urls.
 * @example "Hello, visit me at www.example.com!" => ["www.example.com"]
 */
export default function extractUrlsFromString(
  str: string
): RegExpMatchArray | [] {
  return str.match(urlRegexForLongStr) || [];
}
