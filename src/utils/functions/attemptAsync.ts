import { AttemptOptions } from "../types";

/**
 * @description Attempts to invoke `func` async, returning either the result or will adjust to the options,
 * if nothing was passed to the options, it will return nothing
 *
 * @example await attemptAsync(selector =>
 *   document.querySelectorAll(selector),{errorHander:(e)=> console.error(e)}, '>_>')
 */
async function attemptAsync<T = any>(
  func: (...args: any[]) => T,
  options?: AttemptOptions,
  ...args: any[]
) {
  const { errorHander, returnError, throwError } = options || {};
  try {
    return await func(...args);
  } catch (e) {
    if (returnError) return errorHander ? errorHander(e) : e;
    if (throwError) throw new Error(JSON.stringify(e));
    if (errorHander) errorHander(e);
  }
}

export default attemptAsync;
