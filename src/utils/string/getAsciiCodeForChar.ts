/**
 * @description It takes a string and returns the ASCII code for the first character in the string
 * @param {string} char - The character to get the ASCII code for.
 * @returns The ASCII code for the character.
 */
export default function getAsciiCodeForChar(char: string): number {
  return char.charCodeAt(0);
}
