/**
 * @description Memoize an expensive function by storing its results.
 */
export default function memoize<T = any>(func: (...args: any[]) => T, hasher) {
  const memoize = function(key: string) {
    const cache = memoize.cache;
    //@ts-ignore
    const address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!memoize.hasOwnProperty(address))
    //@ts-ignore
      cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize.cache = {};
  return memoize;
}
