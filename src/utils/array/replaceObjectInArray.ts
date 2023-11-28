import isObject from '../validation/isObject';
import isString from '../validation/isString';

/**
 * @description it will replace object inside the array with a new object bases on a key or predictor function.
 * @example 
 * const originalArray = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' },
];
const newObject = { id: 2, name: 'Updated Jane' };
 * replaceObjectByKey(originalArray, 'id', newObject) // [
  { id: 1, name: 'John' },
  { id: 2, name: 'Updated Jane' },
  { id: 3, name: 'Doe' },
];

replaceObjectByKey(originalArray, (obj)=> obj.id === 2, newObject)// [
  { id: 1, name: 'John' },
  { id: 2, name: 'Updated Jane' },
  { id: 3, name: 'Doe' },
]
 */
export default function replaceObjectInArray<T>(
  arr: T[],
  keyOrPredictor: string | ((v: T) => boolean),
  newObject: T
): T[] {
  const isKey = isString(keyOrPredictor);

  return arr.map((obj) => {
    if (!isObject(obj)) return obj;

    if (
      isKey
        ? obj[keyOrPredictor] === newObject[keyOrPredictor]
        : keyOrPredictor(obj)
    ) {
      return newObject;
    } else {
      return obj;
    }
  });
}
