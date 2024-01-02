/**
 * @description The stringIncludes function is designed to determine whether any string within a given array (stringArr) includes a specified substring or any of the substrings contained in an array (searchStrings). The function is flexible, accommodating scenarios where searchStrings can be either a single string or an array of strings.
 * @example 
const sites = ['www.google.com', 'www.youtube.com'];
sites.includes('www'); // false;
stringIncludes(sites, 'www'); // true;

const y = ['apple', 'orange', 'banana'];

stringIncludes(y, 'app'); // true;
stringIncludes(y, ['app', 'grape']); // true;
 * 
 */
export default function stringIncludes(
  stringOrStrings: string | string[],
  searchStrings: string | string[]
): boolean {
  if (typeof searchStrings === 'string') {
    searchStrings = [searchStrings];
  }

  if (typeof stringOrStrings === 'string') stringOrStrings = [stringOrStrings];

  return stringOrStrings.some((str) =>
    (searchStrings as string[]).some((comparer) => str.includes(comparer))
  );
}
