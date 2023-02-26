import deepCompareObjects from './deepCompareObjects';

/**
 * @description It compares two objects based on the keys array passed to it.
 * @param prevObj - the previous object
 * @param nextObj - {
 * @param {string[]} keysArr - string[] = [] - an array of keys that you want to compare.
 */
export default function compare2ObjectsBaseOnKeysArr(
  prevObj = {},
  nextObj = {},
  keysArr: string[] = []
) {
  let areEqual = false;

  for (const key of keysArr) {
    if (!deepCompareObjects(prevObj[key], nextObj[key])) {
      areEqual = true;
      break;
    }
  }
  return areEqual;
}
