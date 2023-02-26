/**
 * @description It takes a string, finds the first occurrence of the hash character, and returns the string without
 * the hash character and everything after it.
 * @example removeHashFromUrl("www.example.com/a#link") => "www.example.com/a"
 */
export default function removeHashFromUrl(input: string) {
  const hashStart = input.indexOf('#');
  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input;
}
