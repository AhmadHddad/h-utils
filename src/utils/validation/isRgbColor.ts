import { rgbColorRegex } from "../../regex/index";

/**
 * @description // Function to check if the parameter is a valid RGB or RGBA color;
 */
export default function isRgbColor(color: string): boolean {
  return rgbColorRegex.test(color);
}