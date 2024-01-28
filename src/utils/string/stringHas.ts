
/**
 * @param {string} string
 * @param {string[]} valArr
 * @returns {boolean}
 * @description returns true if a string has one of the passed string values.
 * @example stringHas("www.google.com", ["google", "www"]) // true
 * @example stringHas("www.google.com", ["google"]) // true
 * @example stringHas("www.google.com", ["no"]) // false
 * @example stringHas("www.google.com", ["no", "com"]) // true
 */
export default function stringHas(string: string, valArr: string[] = []) {
  let val = false;

  for (let i = 0; i < valArr.length; i++) {
    const stringKey = valArr[i];

    if (string.includes(stringKey)) {
      val = true;
      break;
    }
  }

  return val;
}
