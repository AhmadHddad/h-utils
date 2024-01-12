/**
 * @description function that takes an object and find the path for the passed key or value, you can pass a predicate function.
 * @example 
const myObject = {
    a: 1,
    b: {
      a:2,
        c: 'hello',
        d: {
            e: 'world'
        },
        f: [1, 2, 3]
    }
};

console.log(findKeyOrValuePathInObject(myObject, 'e')); // ['b.d.e']
console.log(findKeyOrValuePathInObject(myObject, (key, val) => Array.isArray(val))); // ['b.f']
console.log(findKeyOrValuePathInObject(myObject, "a")); // ["a", "b.a"]
 */
export default function findKeyOrValuePathInObject(
  obj: Record<string, any>,
  keyOrPredicate: string | ((key: string, value: any) => boolean),
  navigationChr = '.',
  currentPath: string = ''
): string[] {
  const paths: string[] = [];

  for (const key in obj) {
    const newPath = currentPath ? `${currentPath}${navigationChr}${key}` : key;
    let isMatch = false;

    if (typeof keyOrPredicate === 'function') {
      isMatch = keyOrPredicate(key, obj[key]);
    } else if (key === keyOrPredicate) {
      isMatch = true;
    }

    if (isMatch) {
      paths.push(newPath);
    }

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      const subPaths = findKeyOrValuePathInObject(
        obj[key],
        keyOrPredicate,
        navigationChr,
        newPath
      );
      paths.push(...subPaths);
    }
  }

  return paths;
}
