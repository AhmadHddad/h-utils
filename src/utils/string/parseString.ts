import { ParseStringOptions } from '../types';

/**
 * @description It takes a string and returns a number, boolean, null, undefined, or a string that has "undefined" as string
 * and returns the actual type.
 * if "123" will return the number 123 and so on.
 */
export default function parseString(
  str: string | null | undefined | number,
  config?: ParseStringOptions
): number | undefined | null | string | boolean | [] | {} {
  const { parseStrStartsWithZero = true, decode = true } = config ?? {};

  try {
    if (typeof str === 'string') str = decode ? decodeURIComponent(str) : str;
  } catch (error) {}

  try {
    if (parseStrStartsWithZero && typeof str === 'string') {
      const validJsonString = str.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":');
      return JSON.parse(validJsonString);
    }
  } catch (error) {}

  if (typeof str !== 'string') {
    if (typeof str === 'undefined') return undefined;
    if (str === null) return null;
  }
  if (typeof str === 'number') return str;

  str = str?.toLowerCase();
  if (str?.includes('null')) return null;
  if (str?.includes('undefined')) return undefined;
  if (!parseStrStartsWithZero && str?.startsWith('0')) return str;
  if (str?.length && !isNaN(Number(str))) return Number(str);
  if (str?.length && str === 'true') return true;
  if (str?.length && str === 'false') return false;

  return str;
}


