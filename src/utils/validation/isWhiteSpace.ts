/**
 * @description will check if the parameter is a white space;
 * @param {string} [str]
 * @returns {boolean}
 */

export default function isWhiteSpace(char: string): boolean {
  let white = new RegExp(/^\s$/);
  return white.test(char.charAt(0));
}
