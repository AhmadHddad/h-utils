import { GroupedObject } from '../types';

/**
 * @description function to categorizes an array of objects by a key or condition. It also supports optional object transformation before grouping.
 * @example 
 * 
groupBy(
  [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 },
],
  'age',
  (person) => ({ ...person, isNew: person.age < 30 })
) // 
{
  25: [
    { name: 'Alice', age: 25, isNew: true },
    { name: 'Charlie', age: 25, isNew: true },
  ],
  30: [
    { name: 'Bob', age: 30, isNew: false },
    { name: 'David', age: 30, isNew: false },
  ],
};

 */
export default function groupBy<T>(
  array: T[],
  keyOrCondition: string | ((item: T) => string),
  transform?: (item: T) => T
): GroupedObject<T> {
  const isFunction = typeof keyOrCondition === 'function';
  return array.reduce((result: GroupedObject<T>, item: T) => {
    const key = isFunction
      ? (keyOrCondition as (item: T) => string)(item)
      : (item as T)[keyOrCondition];

    if (!result[key]) {
      result[key] = [];
    }

    const transformedItem = transform ? transform(item) : item;
    result[key].push(transformedItem);

    return result;
  }, {});
}
