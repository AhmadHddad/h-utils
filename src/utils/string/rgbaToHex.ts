import isRgbColor from "../validation/isRgbColor";

/**
 * @description converts rgba colors to hex color.
 * @example RGBAToHexA("rgba(255, 255, 255, 0)"), "#ffffff00"
 */
export default function RGBAToHex(rgba: string, forceRemoveAlpha = false) {
  if(!isRgbColor(rgba)) throw new Error("No a valid color")
  
  return (
    '#' +
    rgba
      .replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
      .split(',') // splits them at ","
      .filter((_, index) => !forceRemoveAlpha || index !== 3)
      .map((string) => parseFloat(string)) // Converts them to numbers
      .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
      .map((number) => number.toString(16)) // Converts numbers to hex
      .map((string) => (string.length === 1 ? '0' + string : string)) // Adds 0 when length of one number is 1
      .join('')
  ); // Puts the array to together to a string
}
