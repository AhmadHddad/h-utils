import isWhiteSpace from "../validation/isWhiteSpace";

/**
 * @description It will break the passed string into multiline string after a cretin length
 * @example breakStrAfterNChar("Javascript") => `Java
 * scri
 * pt`
 */
export default function breakStrAfterNChar(
  str: string,
  maxWidth: number
): string {
  const newLineStr = '\n';
  let wrappedText = '';
  let prefix = '';

  while (str.length > maxWidth) {
    let found = false;
    // Insert a new line at the first whitespace of the line
    for (let i = maxWidth - 1; i >= 0; i--) {
      if (isWhiteSpace(str.charAt(i))) {
        wrappedText = wrappedText + [str.slice(0, i), newLineStr].join('');
        str = str.slice(i + 1);
        found = true;
        break;
      }
    }
    // Insert a new line at the maxWidth position, the word is too long to wrap
    if (!found) {
      wrappedText += [str.slice(0, maxWidth), newLineStr].join('');
      str = str.slice(maxWidth);
    }
  }
  return prefix + wrappedText + str;
}
