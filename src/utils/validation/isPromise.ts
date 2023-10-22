/**
 * @function isPromise
 * @description will check if the passed param is a promise or not.
 * @example `isPromise({}) // false`
 * @example `isPromise(new Promise(()=>{})) // true`
 */
export default function isPromise(p: unknown): p is Promise<any> {
  return p instanceof Promise;
}
