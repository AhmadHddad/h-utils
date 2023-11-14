/**
 * @description The arrayContainsSubstring function is designed to determine whether any string within a given array (stringArr) includes a specified substring or any of the substrings contained in an array (strComparer). The function is flexible, accommodating scenarios where strComparer can be either a single string or an array of strings.
 * @example 
const sites = ['www.google.com', 'www.youtube.com'];
sites.includes('www'); // false;
arrayContainsSubstring(sites, 'www'); // true;

const y = ['apple', 'orange', 'banana'];

arrayContainsSubstring(y, 'app'); // true;
arrayContainsSubstring(y, ['app', 'grape']); // true;
 * 
 * 
 * @param stringArr
 * @param strComparer
 * @returns
 */
export default function arrayContainsSubstring(
  stringArr: string[],
  strComparer: string | string[]
): boolean {
  if (typeof strComparer === 'string') {
    strComparer = [strComparer];
  }

  return stringArr.some((str) =>
    (strComparer as string[]).some((comparer) => str.includes(comparer))
  );
}
