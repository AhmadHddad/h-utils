//@ts-nocheck

export default class HMap<K = string, V> extends Map<K, V> {
  static from(obj: {}): HMap {
    return new HMap(Object.entries(obj));
  }

  filter = (
    callbackfn: (value: V, key: K, map: HMap<K, V>) => boolean
  ): this => {
    const filtered = new HMap();
    this.forEach((value, key, map) => {
      if (callback(value, key, map)) {
        filtered.set(key, value);
      }
    });
    return filtered;
  };

  getValuesArray = (): [V] => {
    return Array.from(this.values());
  };

  map = (callback: (value: V, key: K, map: HMap<K, V>) => any): this => {
    const mapped = new HMap();
    this.forEach((value, key, map) => {
      mapped.set(key, callback(value, key, map));
    });
    return mapped;
  };

  mapArray = (
    callback: (value: V, key: K, map: HMap<K, V>) => boolean
  ): any[] => {
    const arr = [];
    this.forEach((v, k) => {
      arr.push(callback(v, k));
    });
    return arr;
  };

  findValue = (
    callbackfn: (value: V, key: K, map: HMap<K, V>) => boolean
  ): V => {
    let found;
    this.forEach((value, key, map) => {
      if (callback(value, key, map)) {
        found = value;
      }
    });
    return found;
  };

  all = (callback: (value: V, key: K, map: HMap<K, V>) => boolean): boolean => {
    return (
      this.map(callback)
        .getValuesArray()
        .indexOf(false) === -1
    );
  };

  any = (callback: (value: V, key: K, map: HMap<K, V>) => boolean): boolean => {
    return (
      this.map(callback)
        .getValuesArray()
        .indexOf(true) !== -1
    );
  };
}
