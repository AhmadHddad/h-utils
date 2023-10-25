import deepCompare from './deepCompare';

/**
 * @description It compares two objects based on the keys array passed to it.
 */
export default function compare2ObjectsBaseOnKeysArr(
  prevObj = {},
  nextObj = {},
  keysArr: string[] = []
) {
  let areEqual = false;

  for (const key of keysArr) {
    if (!deepCompare(prevObj[key], nextObj[key])) {
      areEqual = true;
      break;
    }
  }
  return areEqual;
}
