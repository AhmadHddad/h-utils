export type AttemptOptions = {
  errorHander?: (e: any) => any;
  returnError?: boolean;
  throwError?: boolean;
};

/**
 * @description Attempts to invoke `func`, returning either the result or will adjust to the options,
 * if nothing was passed to the options, it will return nothing
 *
 * @example  attempt(selector =>
 *   document.querySelectorAll(selector),{errorHander:(e)=> console.error(e)}, '>_>')
 */
function attempt<T = any>(
  func: (...args: any[]) => T,
  options?: AttemptOptions,
  ...args: any[]
) {
  const { errorHander, returnError, throwError } = options || {};
  try {
    return func(...args);
  } catch (e) {
    if (returnError) return errorHander ? errorHander(e) : e;
    if (throwError) throw new Error(JSON.stringify(e));
    if (errorHander) errorHander(e);
  }
}

export default attempt;
