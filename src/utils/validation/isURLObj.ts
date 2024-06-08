/**
 * @description will check if the passed url is instance of URL.
 * @example isURLObj("www.google.com") // false
 * @example isURLObj(new URL("https://google.com")) // true
 */
export default function isURLObj(url: URL): boolean {
  return url instanceof URL;
}
