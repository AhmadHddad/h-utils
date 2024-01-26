/**
 * @description Takes an array and a chunk size as parameters and returns an array of arrays.
 * @example chunk(['a', 'b', 'c', 'd'], 2) //[['a', 'b'], ['c', 'd']]
 */
export default function chunk<T>(array: T[], size: number): T[][] {
  if (!array || !array.length) return [];

  const result: T[][] = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, (index += size)));
  }

  return result;
}
