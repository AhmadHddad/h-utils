/** Function that count occurrences count of a substring in a string;
 * @param {String} string               The string
 * @param {String} subString            The sub string to search for
 * @param {Boolean} [allowOverlapping]  Optional. (Default:false)
 *
 * @example `
 * occurrencesIndex("foofoofoo", "bar"); // []

   occurrencesIndex("foofoofoo", "foo"); //[ 3, 6, 9 ]

   occurrencesIndex("foofoofoo", "foofoo"); //[6]

   //allowOverlapping:true
   occurrencesIndex("foofoofoo", "foofoo", true); //[ 1, 4 ]
    foofoofoo
  1`----´
    2  `----´

 * `
 * 
 * @author Vitim.us https://gist.github.com/victornpb/7736865
 * @see Unit Test https://jsfiddle.net/Victornpb/5axuh96u/
 * @see https://stackoverflow.com/a/7924240/938822
 */
export default function occurrencesIndex(
  string: string,
  subString: string,
  allowOverlapping?: boolean
): number[] {
  string += '';
  subString += '';
  if (subString.length <= 0) return [];

  let indexesArr: number[] = [];
  let pos = 0;
  let step = allowOverlapping ? 1 : subString.length;

  while (true) {
    pos = string.indexOf(subString, pos);
    if (pos >= 0) {
      pos += step;
      indexesArr.push(pos);
    } else break;
  }
  return indexesArr;
}
