/** Function that count occurrences of a substring in a string;
 * @param {String} string               The string
 * @param {String} subString            The sub string to search for
 * @param {Boolean} [allowOverlapping]  Optional. (Default:false)
 *
 * @example `
 * occurrences("foofoofoo", "bar"); //0

   occurrences("foofoofoo", "foo"); //3

   occurrences("foofoofoo", "foofoo"); //1

   //allowOverlapping:true
   occurrences("foofoofoo", "foofoo", true); //2
    foofoofoo
  1`----´
    2  `----´

 * `
 * 
 * @author Vitim.us https://gist.github.com/victornpb/7736865
 * @see Unit Test https://jsfiddle.net/Victornpb/5axuh96u/
 * @see https://stackoverflow.com/a/7924240/938822
 */
export default function occurrences(
  string: string,
  subString: string,
  allowOverlapping?: boolean
): number {
  string += "";
  subString += "";
  if (subString.length <= 0) return string.length + 1;

  var n = 0,
    pos = 0,
    step = allowOverlapping ? 1 : subString.length;

  while (true) {
    pos = string.indexOf(subString, pos);
    if (pos >= 0) {
      ++n;
      pos += step;
    } else break;
  }
  return n;
}
