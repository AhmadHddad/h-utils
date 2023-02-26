/**
 * @description will return the smallest array in record or object
 * @example getSmallestArrInObj({a:[1,2,3], b:[1,2,3,4,5]}) => {a:[1,2,3]}
 */

export default function getSmallestArrInObj(obj: Record<string, any[]> | {}): {} {
  let smallest = {};
  let smallestLength = 0;
  let i = 0;

  for (const key in obj) {
    const val = obj[key];
    if (i === 0) {
      smallest = {
        [key]: val
      };
      smallestLength = val.length;
    } else {
      if (val.length < smallestLength) {
        smallestLength = val.length;
        smallest = {
          [key]: val
        };
      }
    }
    i++;
  }

  return smallest;
}
