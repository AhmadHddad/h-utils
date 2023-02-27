/**
 * @description Delays a function for the given number of milliseconds, and then calls it with the arguments supplied.
 */
export default function delay<T = any>(
  cb: (...args: any[]) => T,
  time = 200,
  ...args: any[]
) {
  return new Promise<T>(res => {
    setTimeout(() => {
      res(cb?.(...args));
    }, time);
  });
}
