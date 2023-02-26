/**
 * @description It takes an array of strings and returns a string with "And", "Or", "," in the sentance depending on their position.
 * @example ["Car", "Laptop", "Home"]=> Car, Laptop and Home.
 * @example ["Car", "Laptop", "-Home"]=> Car, Laptop or Home.
 * @example ["Car", "-Laptop", "Home"]=> Car or Laptop and Home.
 * @param {string[]} stringArray - string[]
 * @returns A string
 */

export default function addAndOrConjunctionsToStrArray(stringArray: string[]) {
  if (!Array.isArray(stringArray))
    return '';

  return stringArray.reduce((prev, curr, i, arr) => {
    const hasDash = curr[0] === '-';
    const hasAnd = curr[0] === '+';

    let word = hasDash ? curr.replace('-', '') : curr;
    word = hasAnd ? word.replace('+', '') : word;
    const next = i === arr.length - 1 ? '' : arr.at(i + 1) || '';
    const hasMoreThanOne = arr.length > 1;
    const nextHasDash = next[0] === '-';
    const secondNextHasDash = i === arr.length - 1 ? '' : arr.at(i + 2) || '';
    const x = secondNextHasDash[0] === '-';

    if (!hasMoreThanOne && curr.trim().length)
      return prev + word;

    if (next && next.at(0) !== '-' && arr.length - 2 !== i && !x)
      word += ',';
    if (!!next)
      word += ' ';
    if ((word.length && i === arr.length - 1 && !hasDash) ||
      hasAnd ||
      (nextHasDash && i !== 0))
      word = 'and ' + word;
    if (hasDash)
      word = 'or ' + word;
    return prev + word;
  }, '');
}
