import { hexColorRegex } from "../../regex";

/**
 * @description Function to check if the parameter is a valid hex color
 */
export default function isHexColor(color: string): boolean {
  return hexColorRegex.test(color);
}