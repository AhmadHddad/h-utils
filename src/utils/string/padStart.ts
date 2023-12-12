
/**
* @description function which takes a string of characters and adds a "padding" string of your choice to the start (or left) of the passed string.
 * @example 
 *  
padStart('foo', 5)
// => "  foo"
 
padStart('foobar', 6)
// => "foobar"
 
padStart(1, 2, '0')
// => "01"
 
padStart(17, 5, 0)
// => "00017"
 */
export default function padStart(
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
    padString
      .repeat(Math.ceil(padLength / padString.length))
      .slice(0, padLength) + str;

  return paddedString;
}
