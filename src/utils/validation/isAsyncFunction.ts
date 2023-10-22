import isFunction from './isFunction';
import isPromise from './isPromise';

/**
 * @function isAsyncFunction
 * @description will check if the passed function is async function.
 * @example `isAsyncFunction(async function(){}) // true`
 * @example `isAsyncFunction(function(){}) // false`
 */
export default function isAsyncFunction(fun: unknown): boolean {
  return isFunction(fun) && isPromise(fun());
}
