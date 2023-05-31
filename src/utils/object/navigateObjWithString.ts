/**
 * @description It takes a string, an object, and a navigation character, and returns the value of the object at the
 * string's path.
 * @example navigateObjWithString({foo:{bar:"baz"}}, "foo.bar") => "baz"
 * @returns The value of the key in the object.
 */
export default function navigateObjWithString(
  object: object | {},
  string: string,
  navigationChr: string = '.'
) {
  return string
    .split(navigationChr)
    .reduce((a, key) => a?.[key] ?? object, object);
}


