
/**
 * @description HMap is an extension of Map object, that adds more functionalities to the Map object, such as .from, .filter, .map, .mapFields and others.
 * its great utility to deal with Map and normal JS objects.
 * @example HMap.from({ a: 1, b: 2 }).mapArray((val) => val); // [ 1, 2 ]
 */
export default class HMap<K extends string | symbol, V> extends Map<K, V> {
  /**
   * @description takes a normal js object and reruns HMap instance.
   * @example const hmap = HMap.from({a:1}).
   */
  static from<K extends string | symbol, V>(obj: Record<K, V>): HMap<K, V> {
    return new HMap<K, V>(Object.entries(obj) as [K, V][]);
  }

  /**
   * @description similar to [].filter() it takes a callback with key value and reruns the keys and values the condition is applied to them.
   * @example HMap.from({a:1}).filter((v, k) => v === 1).toObject() // {a:1}
   */
  filter = (
    callback: (value: V, key: K, map: HMap<K, V>) => boolean
  ): HMap<K, V> => {
    const filtered = new HMap<K, V>();
    this.forEach((value, key) => {
      if (callback(value, key, this)) {
        filtered.set(key, value);
      }
    });
    return filtered;
  };

  /**
   * @description will behave like .map in arrays where you can change the keys and the values, will return a new HMap object.
   * @example HMap.from({a:1}).mapFields((v, k) => ([v + 1, "b"])).toObject() // {b:2}
   */
  mapFields = <U extends string | symbol>(
    callback: (value: V, key: K, map: HMap<K, V>) => [V, U]
  ): HMap<U, V> => {
    const mapped = new HMap<U, V>();
    this.forEach((value, key) => {
      const [newVal, newKey] = callback(value, key, this);

      mapped.set(newKey, newVal);
    });
    return mapped;
  };

  /**
   * @description will behave like .map in arrays, but you can't change the keys but you can change the values, will return a new HMap object.
   * @example HMap.from({a:1}).mapFields((v, k) => ([v + 1, "b"])).toObject() // { a: [ 2, 'b' ] }
   */
  map = <U>(callback: (value: V, key: K, map: HMap<K, V>) => U): HMap<K, U> => {
    const mapped = new HMap<K, U>();
    this.forEach((value, key) => {
      mapped.set(key, callback(value, key, this));
    });
    return mapped;
  };

  /**
   * @description will behave like .map in arrays, but you can't change the keys but you can change the values, will return a new HMap object.
   * @example HMap.from({a:1, b:2}).mapArray((val) => (val)) // [ 1, 2 ]
   */
  mapArray = <U>(callback: (value: V, key: K, map: HMap<K, V>) => U): U[] => {
    const arr: U[] = [];
    this.forEach((v, k) => {
      arr.push(callback(v, k, this));
    });
    return arr;
  };

  /**
   * @description will return the value based on a callback that returns a boolean
   * @example HMap.from({a:1}).findValue((val, key) => val > 0) // 1;
   */
  findValue = (
    callback: (value: V, key: K, map: HMap<K, V>) => boolean
  ): V | undefined => {
    let found: V | undefined;
    this.forEach((value, key) => {
      if (callback(value, key, this)) {
        found = value;
      }
    });
    return found;
  };

  /**
   * @description acts like [].every(), where you provide a function that takes the key and value and return boolean if the condition is applied on every.
   * @example HMap.from({a:1}).every((val, key) => val === 1) // true
   */
  every = (
    callback: (value: V, key: K, map: HMap<K, V>) => boolean
  ): boolean => {
    return this.map(callback).getAllValues().every(Boolean);
  };

  /**
   * @description will get all of the HMap object keys in an array.
   * @example HMap.from({a:1}).getAllKeys() // ["a"]
   */
  getAllKeys = (): K[] => {
    return Array.from(this.keys());
  };

  /**
   * @description acts like [].some(), where you provide a function that takes the key and value and return boolean if the condition is applied on some.
   * @example HMap.from({a:1}).some((val, key) => val === 1) // true
   */
  some = (
    callback: (value: V, key: K, map: HMap<K, V>) => boolean
  ): boolean => {
    return this.map(callback).getAllValues().some(Boolean);
  };

  /**
   * @description will get all of the HMap object values in an array.
   * @example HMap.from({a:1}).getAllVAlues() // [1]
   */
  getAllValues = (): V[] => {
    return Array.from(this.values());
  };

  /**
   * @description will convert the HMap to normal JS object.
   * @example HMap.from({a:1}).toObject() // {a:1}
   */
  toObject = (): Record<K, V> => {
    return Object.fromEntries(this) as Record<K, V>;
  };
}
