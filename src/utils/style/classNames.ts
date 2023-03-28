//@ts-nocheck
import { classNames as classNamesType } from './styleTypes';
/**
 * @description It takes any number of arguments, and returns a string of all the arguments that are truthy,
 * separated by spaces.
 */
export default function classNames(...args: classNamesType.ArgumentArray): string {
  const classes = [];
  const hasOwn = {}.hasOwnProperty;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = classNames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === 'object') {
      if (arg.toString === Object.prototype.toString) {
        for (let key in arg as {}) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      } else {
        classes.push(arg.toString());
      }
    }
  }

  return classes.join(' ');
}
