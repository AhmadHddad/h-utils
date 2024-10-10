
/**
 * @description If the source is null or undefined, return an empty array, otherwise return the source as an array.
 * @example toArray(null) // []
 * @example toArray([21]) // [21]
 * @example toArray({}) // [{}]
 * @param {unknown} source - unknown
 * @returns An array.
 */
export default function toArray(source: unknown) {
    if (!source) return [];
    return Array.isArray(source) ? source : [source];
  }

  