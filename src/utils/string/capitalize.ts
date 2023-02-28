import isString from '../validation/isString';


/**
 * @description will return the passed string with the first character capitalized.
 * @example capitalize("javascript") => "Javascript"
 */
export default function capitalize(str: string): string {
  if (!isString(str)) return '';

  return str.split('').reduce((prev, curr, i) => {
    if (i === 0) return (prev += curr.toUpperCase());
    return (prev += curr);
  }, '');
}
