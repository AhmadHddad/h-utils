/**
 * If the condition is true, return val1, otherwise return val2.
 * @param {boolean} condition - boolean
 * @param {any} val1 - The value to return if the condition is true
 * @param [val2=null] - The value to return if the condition is false.
 * @example conditionalReturn([].length > 0, "has items") => if true will return "has items" if not will return val2 (null if not provided)
 */
export default function conditionalReturn<V1 = any, V2 = null>(
  condition: boolean,
  val1: V1,
  val2 : V2 
): V1 | V2 {
  return condition ? val1 : val2;
}