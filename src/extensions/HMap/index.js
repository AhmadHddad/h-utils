export default class HMap extends Map {
  static from(obj) {
    return new HMap(Object.entries(obj));
  }

  filter = callback => {
    const filtered = new HMap();
    this.forEach((value, key, map) => {
      if (callback(value, key, map)) {
        filtered.set(key, value);
      }
    });
    return filtered;
  };

  getValuesArray = () => {
    return Array.from(this.values());
  };

  map = callback => {
    const mapped = new HMap();
    this.forEach((value, key, map) => {
      mapped.set(key, callback(value, key, map));
    });
    return mapped;
  };

  mapArray = callback => {
    const arr = [];
    this.forEach((v, k) => {
      arr.push(callback(v, k));
    });
    return arr;
  };

  findValue = callback => {
    let found;
    this.forEach((value, key, map) => {
      if (callback(value, key, map)) {
        found = value;
      }
    });
    return found;
  };

  all = callback => {
    return (
      this.map(callback)
        .getValuesArray()
        .indexOf(false) === -1
    );
  };

  any = callback => {
    return (
      this.map(callback)
        .getValuesArray()
        .indexOf(true) !== -1
    );
  };
}
