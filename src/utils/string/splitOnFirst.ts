/**
 * @description It takes a string and a separator and returns an array of two strings, the first being the string up
 * to the separator and the second being the string after the separator.
 * @example splitOnFirst('key:value:value2', ':') // ['key', 'value:value2']
 * @param {string} string - string
 * @param {string} separator - The separator to split on.
 */
export default function splitOnFirst(string: string, separator: string): string[] {
  if (string === '' || separator === '') {
    return [];
  }

  const separatorIndex = string.indexOf(separator);

  if (separatorIndex === -1) {
    return [];
  }

  return [
    string.slice(0, separatorIndex),
    string.slice(separatorIndex + separator.length),
  ];
}
