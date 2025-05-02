import { NonArrayObject, NonNullableObject } from '../utilityTypes';
import isObject from '../validation/isObject';


/**
 * @description will return a new object that combines all of the passed objects as new copy (not reference as Object.assign).
 * @example joinObjects2({a:1},{b:2}) => {a:1, b:2}
 * @example joinObjects2([1,2]) => {}
 * @example joinObjects2(({ a: 1 }, { b: 2 })) => { a: 1, b: 2 }
 * @example joinObjects2(({ a: 1 }, null || undefined || !object)) => { a: 1 }
 */
export function joinObjects2<T extends object | null | undefined>(
  target: T
): NonArrayObject<NonNullableObject<T>>;
export function joinObjects2<T extends object | null | undefined, U = T>(
  target: T,
  source: U
): NonArrayObject<NonNullableObject<T>> & NonArrayObject<NonNullableObject<U>>;
export function joinObjects2<T extends object | null | undefined, U = T, V = T>(
  target: T,
  source1: U,
  source2: V
): NonArrayObject<NonNullableObject<T>> &
  NonArrayObject<NonNullableObject<U>> &
  NonArrayObject<NonNullableObject<V>>;
export function joinObjects2<
  T extends object | null | undefined,
  U = T,
  V = T,
  W = T
>(
  target: T,
  source1: U,
  source2: V,
  source3: W
): NonArrayObject<NonNullableObject<T>> &
  NonArrayObject<NonNullableObject<U>> &
  NonArrayObject<NonNullableObject<V>> &
  NonArrayObject<NonNullableObject<W>>;

export default function joinObjects2<T extends object | null | undefined>(
  target: T,
  ...sources: any[]
): NonArrayObject<NonNullableObject<T>> {
  let newObj: Record<string, any> = isObject(target) ? { ...target } : {};

  for (let index = 0; index < sources.length; index++) {
    const object = sources[index];

    if (isObject(object)) {
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          newObj[key] = object[key];
        }
      }
    } else {
      continue;
    }
  }

  return newObj as NonArrayObject<NonNullableObject<T>>;
}

// const otraObj = {
//   a: 1,
// };

// function name<T>(object: Partial<T>) {
// return joinObjects2(object, {b:1});

// }

// // Example usage
// const result1 = joinObjects2({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
// const result2 = joinObjects2({ a: 1 }, null, undefined, { c: 3 }); // { a: 1, c: 3 }
// const result3 = joinObjects2([1, 2]); // {}

// const a = { foo: 1 };
// const b = { bar: 1 };
// const x = { ...a, ...b };

// const y = Object.assign(a, b, { n: 1 });

// console.log({ result1, result2, result3 });
