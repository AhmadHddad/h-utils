/**
 * @description It takes a string, converts it to a number, then converts that number to a color
 * @param {string} str - The string to convert to a color.
 * @returns A string of the form #RRGGBB.
 */
export default function stringToHexColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}
