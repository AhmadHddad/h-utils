import { ChangeCallback } from "../types";

export interface Watcher<T> {
  target: T;
  observe(callback: ChangeCallback<T>): void;
  unobserve(): void;
}


/**
 * @description will call the passed object whenever the returned object is changed and will pass the prev and the current object.target.
 * @example const watcher = createWatcher({ name: 'John', age: 25 });

// Observer function
const callbackFunction: ChangeCallback<{ name: string; age: number }> = (prev, current) => {
  console.log('Object changed:', prev, '->', current);
};

// Start observing
watcher.observe(callbackFunction);

// Trigger changes
watcher.target.name = 'Alice';
watcher.target.age = 30;

// Stop observing
watcher.unobserve(callbackFunction);
 */
export default function createWatchers<T extends object>(
  target: T,
): Watcher<T> {
  const callbacks: ChangeCallback<T>[] = [];

  const proxy = new Proxy(target, {
    set: (obj, prop, value) => {
      const prevValue = { ...obj };
      obj[prop as keyof T] = value;
      callbacks.forEach((callback) => callback(prevValue, { ...obj }));
      return true;
    },
  });

  return {
    target: proxy,
    observe: (callback: ChangeCallback<T>) => {
      callbacks.push(callback);
    },
    unobserve: () => {
      callbacks.length = 0;
    },
  };
}
