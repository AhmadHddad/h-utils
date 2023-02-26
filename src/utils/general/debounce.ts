/**
 * @description It takes a function and returns a new function that will call the original function after a delay.
 * @param {T} cb - The callback function to be debounced.
 * @param [wait=20] - The amount of time to wait before calling the callback.
 * @returns A function that is a copy of the function passed in, but with a debounce wrapper.
 * @example let f = debounce((a: string, b: number, c?: number) => console.log(a.length + b + c || 0));
 */
export default function debounce<T extends Function>(cb: T, wait = 20) {
  let timeout: NodeJS.Timeout | number = 0;
  let callable = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), wait);
  };
  return <T>(<any>callable);
}
