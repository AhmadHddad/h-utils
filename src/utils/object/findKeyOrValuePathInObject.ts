/**
 * @description function that takes an object and find the path for the passed key or value, you can pass a predicate function.
 * @example 
const myObject = {
    a: 1,
    b: {
        c: 'hello',
        d: {
            e: 'world'
        },
        f: [1, 2, 3]
    }
};

console.log(findKeyOrValuePathInObject(myObject, 'e')); // 'b.d.e'
console.log(findKeyOrValuePathInObject(myObject, (key, val) => Array.isArray(val))); // 'b.f'
 */
export default function findKeyOrValuePathInObject(
  obj: Record<string, any>,
  keyOrPredicate: string | ((key: string, value: any) => boolean),
  navigationChr = '.',
  currentPath: string = ''
): string | null {
  for (const key in obj) {
    const newPath = currentPath ? `${currentPath}${navigationChr}${key}` : key;
    let isMatch = false;

    if (typeof keyOrPredicate === 'function') {
      isMatch = keyOrPredicate(key, obj[key]);
    } else if (key === keyOrPredicate) {
      isMatch = true;
    }

    if (isMatch) {
      return newPath;
    }

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      const result = findKeyOrValuePathInObject(
        obj[key],
        keyOrPredicate,
        navigationChr,
        newPath
      );
      if (result) {
        return result;
      }
    }
  }

  return null;
}
