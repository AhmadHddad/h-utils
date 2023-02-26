/**
 * @description It takes a string, converts it to a number, and then uses that number to generate a color.
 *
 * The function is based on the [HSL color model](https://en.wikipedia.org/wiki/HSL_and_HSV).
 *
 * The function takes three arguments:
 *
 * - `string`: The string to convert to a color.
 * - `saturation`: The saturation of the color.
 * - `lightness`: The lightness of the color.
 *
 * The function returns a string in the format `hsl(hue, saturation, lightness)`.
 *
 * The function uses the [Fowler–Noll–Vo hash
 * function](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function) to convert the
 * string to a
 * @param string - The string to convert to a color.
 * @param [saturation=100] - 0-100
 * @param [lightness=75] - 0-100
 * @returns A string of the form `hsl(0, 100%, 75%)`
 */
const stringToHslColor = (
  string: string,
  saturation = 100,
  lightness = 75
): string => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  return `hsl(${hash % 360}, ${saturation}%, ${lightness}%)`;
};
export default stringToHslColor;
