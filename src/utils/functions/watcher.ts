type ChangeCallback<T> = (prevValue: T, newValue: T) => void;

interface Watcher<T> {
  target: T;
  observe(callback: ChangeCallback<T>): void;
  unobserve(): void;
}

function createWatcher<T extends object>(target: T): Watcher<T> {
  const callbacks: ChangeCallback<T>[] = [];

  const proxy = new Proxy(target, {
    set: (obj, prop, value) => {
      const prevValue = { ...obj };
      obj[prop as keyof T] = value;
      callbacks.forEach(callback => callback(prevValue, { ...obj }));
      return true;
    },
  });

  return {
    target: proxy,
    observe: (callback: ChangeCallback<T>) => {
      callbacks.push(callback);
    },
    unobserve: () => {
      // Remove all callbacks
      callbacks.length = 0;
    },
  };
}