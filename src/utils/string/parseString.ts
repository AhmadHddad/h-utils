import { ParseStringOptions } from '../types';

/**
 * @description It takes a string and returns a number, boolean, null, undefined, or a string that has "undefined" as string
 * and returns the actual type.
 * if "123" will return the number 123 and so on.
 */
export default function parseString<T = number | undefined | null | string | boolean | [] | {}>(
  str: string | null | undefined | number,
  config?: ParseStringOptions
): T {
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
    if (typeof str === 'undefined') return undefined as T;
    if (str === null) return null as T;
  }
  if (typeof str === 'number') return str as T;

  str = str?.toLowerCase();
  if (str?.includes('null')) return null as T;
  if (str?.includes('undefined')) return undefined as T;
  if (!parseStrStartsWithZero && str?.startsWith('0')) return str as T;
  if (str?.length && !isNaN(Number(str))) return Number(str) as T;
  if (str?.length && str.toLocaleLowerCase() === 'true') return true as T;
  if (str?.length && str.toLocaleLowerCase() === 'false') return false as T;

  return str as T;
}


