/**
 * @description function which takes a string of characters and adds a "padding" string of your choice to the end (or right) of the passed string.
 * @example
 *  padEnd("123", 5, '0') // '12300'
 */
export default function padEnd(
  input: string,
  targetLength: number,
  padString: string = ' '
): string {
  // Convert input to string
  let str = String(input);

  // If the target length is already met or exceeded, return the original string
  if (str.length >= targetLength) {
    return str;
  }

  // Calculate the number of characters to pad
  const padLength = targetLength - str.length;

  // Ensure the padString is not empty
  if (padString.length === 0) {
    throw new Error('padString cannot be empty');
  }

  // Repeat the padString to create the padding and concatenate it with the original string
  const paddedString =
    str +
    padString
      .repeat(Math.ceil(padLength / padString.length))
      .slice(0, padLength);

  return paddedString;
}
