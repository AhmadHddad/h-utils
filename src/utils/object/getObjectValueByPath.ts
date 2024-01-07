/**
 * @description It takes a string, an object, and a navigation character, and returns the value of the object at the
 * string's path.
 * @example getObjectValueByPath({foo:{bar:"baz"}}, "foo.bar") // "baz"
 * @example getObjectValueByPath({b:{ f: [1, 2, 3]}}, 'b.f[2]') // 3
 * @returns The value of the key in the object.
 */
export default function getObjectValueByPath<T>(
  obj: Record<string, any>,
  path: string,
  navigationChr: string = '.'
): T | null {
  const segments = path.split(navigationChr);

  let current: any = obj;
  for (const segment of segments) {
    // Handling array indices in the path
    const arrayMatch = segment.match(/(\w+)\[(\d+)\]/);
    if (arrayMatch) {
      const [_, arrayKey, index] = arrayMatch;
      current = current[arrayKey];
      if (typeof current === 'undefined' || !Array.isArray(current)) {
        return null;
      }
      current = current[parseInt(index)];
    } else {
      current = current[segment];
    }

    if (typeof current === 'undefined') {
      return null;
    }
  }

  return current;
}
