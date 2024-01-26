/**
 * @description Delays a function for the given number of milliseconds, and then calls it with the arguments supplied.
 * @example delay(()=>{console.log(1)} , 1000) // will be called after 1s.
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
