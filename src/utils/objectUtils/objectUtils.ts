export type IsEmptyObjectProps = (obj: object) => boolean;
/*
Return true if obj is empty object,
if undefined, null, not empty return false.
 */
export const IsEmptyObject: IsEmptyObjectProps = obj => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};


/**
 * It compares two objects and returns true if they are equal, false if they are not
 * @param {object[]} objects - object[]
 * @returns A function that takes an array of objects and returns a boolean.
 */
export const deebCompareObjects = (...objects: object[]): boolean => {
  let i, l, leftChain, rightChain;

  const compare2Objects = (x, y) => {
    let p;

    // remember that NaN === NaN returns false
    // and isNaN(undefined) returns true
    if (
      isNaN(x) &&
      isNaN(y) &&
      typeof x === 'number' &&
      typeof y === 'number'
    ) {
      return true;
    }

    // Compare primitives and functions.
    // Check if both arguments link to the same object.
    // Especially useful on the step where we compare prototypes
    if (x === y) {
      return true;
    }

    // Works in case when functions are created in constructor.
    // Comparing dates is a common scenario. Another built-ins?
    // We can even handle functions passed across iframes
    if (
      (typeof x === 'function' && typeof y === 'function') ||
      (x instanceof Date && y instanceof Date) ||
      (x instanceof RegExp && y instanceof RegExp) ||
      (x instanceof String && y instanceof String) ||
      (x instanceof Number && y instanceof Number)
    ) {
      return x.toString() === y.toString();
    }

    // At last checking prototypes as good as we can
    if (!(x instanceof Object && y instanceof Object)) {
      return false;
    }

    if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
      return false;
    }

    if (x.constructor !== y.constructor) {
      return false;
    }

    if (x.prototype !== y.prototype) {
      return false;
    }

    // Check for infinitive linking loops
    if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
      return false;
    }

    // Quick checking of one object being a subset of another.
    // todo: cache the structure of arguments[0] for performance
    for (p in y) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      } else if (typeof y[p] !== typeof x[p]) {
        return false;
      }
    }

    for (p in x) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      } else if (typeof y[p] !== typeof x[p]) {
        return false;
      }

      switch (typeof x[p]) {
        case 'object':
        case 'function':
          leftChain.push(x);
          rightChain.push(y);

          if (!compare2Objects(x[p], y[p])) {
            return false;
          }

          leftChain.pop();
          rightChain.pop();
          break;

        default:
          if (x[p] !== y[p]) {
            return false;
          }
          break;
      }
    }

    return true;
  };

  if (objects.length < 1) {
    return true; //Die silently? Don't know how to handle such case, please help...
    // throw "Need two or more arguments to compare";
  }

  for (i = 1, l = objects.length; i < l; i++) {
    leftChain = []; //Todo: this can be cached
    rightChain = [];

    if (!compare2Objects(objects[0], objects[i])) {
      return false;
    }
  }

  return true;
};

/**
 * It compares two objects based on the keys array passed to it.
 * @param prevObj - the previous object
 * @param nextObj - {
 * @param {string[]} keysArr - string[] = [] - an array of keys that you want to compare.
 */
export function compare2ObjectsBaesOnKeysArr(prevObj = {}, nextObj = {}, keysArr: string[] = []) {
  let areEqual = false;

  for (const key of keysArr) {
    if (!deebCompareObjects(prevObj[key], nextObj[key])) {
      areEqual = true;
      break;
    }
  }
  return areEqual;
}


