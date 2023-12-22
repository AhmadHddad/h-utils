/**
 * @description If the type of the value is a object, return true, otherwise return false. You can pass a function to check for a specific key inside the object
 * @example isObject({}) //true
 * @example isObject({}, (obj) => !!obj.name) //false
 */
const isObject = <T = {}>(
  val: unknown,
  predicate?: (val: T) => boolean
): val is T => {
  const isJSObj = !!val && !Array.isArray(val) && typeof val === 'object';

  return predicate ? predicate(val as T) && isJSObj : isJSObj;
};
export default isObject;

