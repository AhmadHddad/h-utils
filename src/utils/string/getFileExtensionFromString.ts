/**
 * @description It takes a string and get the extension file type.
 * @example getFileExtensionFromString("fileName.txt") => txt
 * @param {string} str - string - The string to get the file extension from.
 * @returns The file extension of the string.
 */
export default function getFileExtensionFromString(str: string): string {
  if (!str || typeof str !== 'string') return '';

  return str.split('.').at(-1) || '';
}
