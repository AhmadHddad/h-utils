/**
 * @description It takes an array of objects and sorts them by array of multiple properties.
 * if the property starts with "-" then it will be descending order otherwize ascending order
 * @param {T[]} arr - the array to be sorted
 * @param {string[]} proprieties - an array of strings, each string is a property name
 */
export default function sortByMultiProperties<T = {}>(
  arr: T[],
  proprieties: string[]
): T[] {
  if (!proprieties?.length) return arr;

  function _sortByAttr(attr) {
    let sortOrder = 1;
    if (attr[0] == '-') {
      sortOrder = -1;
      attr = attr.substr(1);
    }
    return function(a, b) {
      const result = a[attr] < b[attr] ? -1 : a[attr] > b[attr] ? 1 : 0;
      return result * sortOrder;
    };
  }

  function _getSortFunc(args) {
    return function(a, b) {
      let result = 0;
      for (let i = 0; result == 0 && i < args.length; i++) {
        result = _sortByAttr(args[i])(a, b);
      }
      return result;
    };
  }
  return arr.sort(_getSortFunc(proprieties));
}
