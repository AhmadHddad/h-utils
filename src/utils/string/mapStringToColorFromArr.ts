import hashString from './hashString';

/**
 * @description It takes a string and an array of colors and returns a color from the array based on the string
 * @param {string} str - The string you want to map to a color
 * @param {string[]} colorsArr - an array of colors
 * @returns A string
 */
export default function mapStringToColorFromArr(
  str: string,
  colorsArr: string[]
): string {
  return colorsArr[hashString(str) % colorsArr.length];
}
