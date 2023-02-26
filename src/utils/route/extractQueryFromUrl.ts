import removeHashFromUrl from './removeHashFromUrl';

/**
 * @description It takes a URL and returns the query string
 * @param {string} input - The URL to extract the query from.
 * @returns The query string from the URL.
 * @example extractQueryFromUrl("https://www.youtube.com/watch?v=ABCD#anchor") => "v=ABCD"
 */
export default function extractQueryFromUrl(input: string) {
  input = removeHashFromUrl(input);
  const queryStart = input.indexOf('?');
  if (queryStart === -1) {
    return '';
  }

  return input.slice(queryStart + 1);
}
