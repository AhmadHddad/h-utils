/**
 * If the condition is true, return val1, otherwise return val2.
 * @param {boolean} condition - boolean
 * @param {any} val1 - The value to return if the condition is true
 * @param [val2=null] - The value to return if the condition is false.
 * @example conditionalReturn([].length > 0, "has items") => if true will return "has items" if not will return val2 (null if not provided)
 */
export default function conditionalReturn(condition: boolean, val1: any, val2 = null) {
    condition ? val1 : val2;
  }
  