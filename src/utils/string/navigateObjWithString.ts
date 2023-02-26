/**
 * @description It takes a string, an object, and a navigation character, and returns the value of the object at the
 * string's path.
 * @param {string} string - the string you want to navigate with
 * @param object - {},
 * @param {string} [navigationChr=.] - string = '.'
 * @returns The value of the key in the object.
 */

export default function navigateObjWithString(
  string: string,
  object: {},
  navigationChr: string = '.'
) {
  return string
    .split(navigationChr)
    .reduce((a, key) => (a !== undefined ? a[key] : undefined), object);
}
