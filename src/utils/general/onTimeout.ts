

/**
 * @description a cleaner way to use setTimeout with ability to clear timeout wihtout saving the timeoutId;
 * @example `const cancelTimeout = onTimeout(100, ()=>{
 * // Do something here
 * });
 * 
 * // on destory.
 * cancelTimeout();
 * `
 */
export default function onTimeout(timeout: number, callback: () => void) {
  const timeoutId = setTimeout(callback, timeout);

  return () => clearTimeout(timeoutId);
}
