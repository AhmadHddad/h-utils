export default class HMap<K extends string | symbol, V> extends Map<K, V> {
  static from<K extends string | symbol, V>(obj: Record<K, V>): HMap<K, V> {
    return new HMap<K, V>(Object.entries(obj) as [K, V][]);
  }

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

  getValuesArray = (): V[] => {
    return Array.from(this.values());
  };

  map = <U>(callback: (value: V, key: K, map: HMap<K, V>) => U): HMap<K, U> => {
    const mapped = new HMap<K, U>();
    this.forEach((value, key) => {
      mapped.set(key, callback(value, key, this));
    });
    return mapped;
  };

  mapArray = <U>(callback: (value: V, key: K, map: HMap<K, V>) => U): U[] => {
    const arr: U[] = [];
    this.forEach((v, k) => {
      arr.push(callback(v, k, this));
    });
    return arr;
  };

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

  every = (
    callback: (value: V, key: K, map: HMap<K, V>) => boolean
  ): boolean => {
    return this.map(callback).getValuesArray().every(Boolean);
  };

  getAllKeys = (): K[] => {
    return Array.from(this.keys());
  };

  some = (
    callback: (value: V, key: K, map: HMap<K, V>) => boolean
  ): boolean => {
    return this.map(callback).getValuesArray().some(Boolean);
  };

  getAllValues = (): V[] => {
    return Array.from(this.values());
  };
}
