/**
 * @description It takes a string and returns a number, boolean, null, undefined, or a string that has "undefined" as string
 * and returns the actual type.
 * if "123" will return the number 123 and so on.
 * @param {string | null | undefined | number} str - string | null | undefined | number
 * @param config - {
 */
export default function parseString(
  str: string | null | undefined | number,
  config = { includeWholeStr: false, parseStrStartsWithZero: true }
): number | undefined | null | string | boolean {
  const { includeWholeStr, parseStrStartsWithZero } = config;
  if (typeof str !== 'string') {
    if (typeof str === 'undefined') return undefined;
    if (str === null) return null;
  }

  if (typeof str === 'number') return str;

  str = str?.toLowerCase();
  if (includeWholeStr && str?.includes('null')) return null;
  if (includeWholeStr && str?.includes('undefined')) return undefined;
  if (!parseStrStartsWithZero && str?.startsWith('0')) return str;
  if (str?.length && !isNaN(Number(str))) return Number(str);
  if (str?.length && str === 'true') return true;
  if (str?.length && str === 'false') return false;

  return str;
}
