import isObject from './isObject';
import isTruthy from './isTruthy';

/**
 * @description will check if the passed object has values.
 * If truthyValues is passed then will check if values are truthy => 0 is false, empty string also false and so on.
 * you can pass predict callback.
 *
 * @example isObjHasValues({a:1}) => true
 * @example isObjHasValues({a:""}) => true
 * @example isObjHasValues({a:""}, {truthyValues:true}) => false
 * @example isObjHasValues({a:"1"}, {truthyValues:true}) => true
 * @example isObjHasValues({a:"1"}, {predict:val => typeof val === "number"}) => false
 */
export default function isObjHasValues(
  param: {} | object,
  {
    predict,
    truthyValues = false,
  }: { truthyValues: boolean; predict?: (p?: any) => boolean }
) {
  if (!isObject(param)) {
    console.error('the passed param is not an object');
    return false;
  }

  if (predict) return Object.values(param).some(predict);

  return !truthyValues
    ? Object.values(param).length > 0
    : Object.values(param).some(isTruthy);
}
