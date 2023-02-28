
/**
 *
 * @description it will throttlePromise the call of the function param to wait for n seconds.
 * @example const func = (hello: string) => { console.log(new Date().getTime(), '>>>', hello) }
 * const thrFunc = throttlePromise(func, 1000)
 * thrFunc('hello 1')
 */
const throttlePromise = <F extends (...args: any[]) => any>(
    func: F,
    waitFor: number = 200
  ) => {
    const now = () => new Date().getTime();
    let startTime: number = now() - waitFor;
    let timeout: number | NodeJS.Timeout;
    const resetStartTime = () => (startTime = now());
  
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
  
  export default throttlePromise;
  
  
  