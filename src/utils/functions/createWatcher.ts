import { ChangeCallback } from "../types";

/**
 * @description will call the passed object whenever the returned object is changed and will pass the prev and the current object.
 * @example const watchedObject = createWatcher({ name: 'John', age: 25 }, (prev, current) => {
  console.log('Object changed:', prev, '->', current);
});
watchedObject.age = 30;

// to unwatch 
const x = Object.getPrototypeOf(watchedObject);
console.log(x.unwatch());

 */
export default function createWatcher<T extends object>(
  target: T,
  callback: ChangeCallback<T>
): T {
  let watch = true;
  return new Proxy(target, {
    set: (obj, prop, value) => {
      const prevValue = { ...obj };
      obj[prop as keyof T] = value;
      Object.setPrototypeOf(obj, {
        unwatch: function () {
          watch = false;
        },
      });
      watch && callback(prevValue, { ...obj });
      return true;
    },
  });
}
