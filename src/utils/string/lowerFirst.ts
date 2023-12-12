
/**
 * @description will turn the first character to lower case;
 * @example lowerFirst("Hello") // "hello"
 */
export default function lowerFirst(input: string): string {
  if (typeof input !== 'string' || input.length === 0) {
    return input;
  }

  return input.charAt(0).toLowerCase() + input.slice(1);
}
