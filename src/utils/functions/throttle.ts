/**
 *
 * @description it will throttle the call of the function param to wait for n seconds.
 * @example const func = (hello: string) => { console.log(new Date().getTime(), '>>>', hello) }
 * const thrFunc = throttle(func, 1000)
 * thrFunc('hello 1')
 */
const throttle = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number = 200
) => {
  const now = () => new Date().getTime();
  const resetStartTime = () => (startTime = now());
  let timeout: number | NodeJS.Timeout;
  let startTime: number = now() - waitFor;

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise(resolve => {
      const timeLeft = startTime + waitFor - now();
      if (timeout) {
        clearTimeout(timeout);
      }
      if (startTime + waitFor <= now()) {
        resetStartTime();
        resolve(func(...args));
      } else {
        timeout = setTimeout(() => {
          resetStartTime();
          resolve(func(...args));
        }, timeLeft);
      }
    });
};

export default throttle;
