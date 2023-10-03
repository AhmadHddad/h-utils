/** Function that count occurrences count of a substring in a string;
 * @param {String} string               The string
 * @param {String} subString            The sub string to search for
 * @param {Boolean} [allowOverlapping]  Optional. (Default:false)
 *
 * @example `
 * occurrencesCount("foofoofoo", "bar"); //0

   occurrencesCount("foofoofoo", "foo"); //3

   occurrencesCount("foofoofoo", "foofoo"); //1

   //allowOverlapping:true
   occurrencesCount("foofoofoo", "foofoo", true); //2
    foofoofoo
  1`----´
    2  `----´

 * `
 * 
 * @author Vitim.us https://gist.github.com/victornpb/7736865
 * @see Unit Test https://jsfiddle.net/Victornpb/5axuh96u/
 * @see https://stackoverflow.com/a/7924240/938822
 */
export default function occurrencesCount(
  string: string,
  subString: string,
  allowOverlapping?: boolean
): number {
  string += '';
  subString += '';
  if (subString.length <= 0) return string.length + 1;

  let n = 0;
  let pos = 0;
  let step = allowOverlapping ? 1 : subString.length;

  while (true) {
    pos = string.indexOf(subString, pos);
    if (pos >= 0) {
      ++n;
      pos += step;
    } else break;
  }
  return n;
}
