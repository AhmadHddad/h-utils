import deepCompareObjects from '../object/deepCompare';

/**
 * @example removeDuplicatesFromArr([1,2,1]) => [1,2]
 * @example removeDuplicatesFromArr([{a:1}, {a:1}, {a:2}], key:"a") => [{a:1},{a:2}]
 * @example removeDuplicatesFromArr([{a:1}, {a:1}, {a:2}], key:"", deepCompare:true) => [{a:1},{a:2}]
 */
export default function removeDuplicatesFromArr<T = any>(
  arr: T[] = [],
  key?: string,
  deepCompare?: boolean
) {
  if (!Array.isArray(arr)) return [];
  if (!arr?.length) return arr;
  if (key?.length && !deepCompare) {
    return arr.filter((item, index, selfArr) => {
      if (typeof item === 'object' && item !== null) {
        console.log(item);
        return selfArr.findIndex(fItem => fItem[key] === item[key]) === index;
      }

      return selfArr.findIndex(fItem => fItem === item) === index;
    });
  }
  if (deepCompare) {
    return arr.filter((item, index, arr) => {
      return (
        arr.findIndex(x => deepCompareObjects(item as any, x as any)) === index
      );
    });
  } else {
    return Array.from(new Set(arr));
  }
}
