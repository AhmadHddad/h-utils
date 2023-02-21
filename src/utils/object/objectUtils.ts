export type IsEmptyObjectProps = (obj: object) => boolean;

/**
 * @description It returns true if the object is empty, and false if it's not
 * @param {object} obj - object
 * @example IsEmptyObject({}) => true
 * @example IsEmptyObject({a:1}) => false
 * @returns {boolean}
 */
export const isEmptyObject: IsEmptyObjectProps = obj => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

/**
 * @description It compares two objects and returns true if they are equal, false if they are not
 * @param {object[]} objects - object[]
 * @example deepCompareObjects([{a:1}, {a:1}]) => true
 * @returns A function that takes an array of objects and returns a boolean.
 */
export const deepCompareObjects = (...objects: object[]): boolean => {
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
 * @description It compares two objects based on the keys array passed to it.
 * @param prevObj - the previous object
 * @param nextObj - {
 * @param {string[]} keysArr - string[] = [] - an array of keys that you want to compare.
 */
export function compare2ObjectsBaseOnKeysArr(
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

/**
 * @description "It returns a new object that contains only the enumerable properties of the original object that
 * match the predicate."
 * 
 * The predicate can be either an array of keys or a function that takes the key, value, and object as
 * arguments
 * @param object - The object to copy enumerable properties from.
 * @param predicate - A function that returns true if the key should be included in the result.
 * @example includeKeys({
	foo: true,
	bar: false
}, (key, value) => value === true) => {foo: true}
 * @returns A new object with the same enumerable properties as the original object, but with the
 * values filtered by the predicate.
 */
export function includeKeys(
  object: {},
  predicate: (key: string, value: any, object: {}) => boolean
) {
  const result = {};

  if (Array.isArray(predicate)) {
    for (const key of predicate) {
      const descriptor = Object.getOwnPropertyDescriptor(object, key);
      if (descriptor?.enumerable) {
        Object.defineProperty(result, key, descriptor);
      }
    }
  } else {
    // `Reflect.ownKeys()` is required to retrieve symbol properties
    for (const key of Reflect.ownKeys(object)) {
      const descriptor = Object.getOwnPropertyDescriptor(object, key);
      if (descriptor?.enumerable) {
        const value = object[key];
        if (predicate(key as string, value, object)) {
          Object.defineProperty(result, key, descriptor);
        }
      }
    }
  }

  return result;
}

/**
 * "It returns a new object with the same keys as the original object, except for the keys that match
 * the predicate."
 *
 * The predicate is a function that takes three arguments: the key, the value, and the object. It
 * returns true if the key should be included in the new object, and false if it should be excluded
 * @example excludeKeys({
	foo: true,
	bar: false
}, (key, value) => value === true) => {bar: false}
 * @param object - The object to filter.
 * @param predicate - A function that returns true if the key should be included.
 */
export function excludeKeys(
  object: {},
  predicate: (key: string, value: any, object: {}) => boolean
) {
  if (Array.isArray(predicate)) {
    const set = new Set(predicate);
    return includeKeys(object, key => !set.has(key));
  }

  return includeKeys(
    object,
    (key, value, object) => !predicate(key, value, object)
  );
}

export const filterObj = { excludeKeys, includeKeys };

/**
 * @description will return the smallest array in record or object
 * @example getSmallestArrInObj({a:[1,2,3], b:[1,2,3,4,5]}) => {a:[1,2,3]}
 */
export function getSmallestArrInObj(obj: Record<string, any[]> | {}): {} {
  let smallest = {};
  let smallestLength = 0;
  let i = 0;

  for (const key in obj) {
    const val = obj[key];
    if (i === 0) {
      smallest = {
        [key]: val,
      };
      smallestLength = val.length;
    } else {
      if (val.length < smallestLength) {
        smallestLength = val.length;
        smallest = {
          [key]: val,
        };
      }
    }
    i++;
  }

  return smallest;
}
