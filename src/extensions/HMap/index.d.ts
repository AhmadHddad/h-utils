export default class HMap<K = string, V = string> extends Map<K, V> {
  clear(): void;
  delete(key: K): boolean;
  forEach(
    callbackfn: (value: V, key: K, map: HMap<K, V>) => void,
    thisArg?: any
  ): void;
  filter: (callbackfn: (value: V, key: K, map: HMap<K, V>) => boolean) => this;
  getValuesArray(): [V];
  map(): (callbackfn: (value: V, key: K, map: HMap<K, V>) => any) => this;
  mapArray(): (
    callbackfn: (value: V, key: K, map: HMap<K, V>) => boolean
  ) => any[];
  get(key: K): V | undefined;
  has(key: K): boolean;
  findValue(callbackfn: (value: V, key: K, map: HMap<K, V>) => boolean): V;
  all(callbackfn: (value: V, key: K, map: HMap<K, V>) => boolean): boolean;
  any(callbackfn: (value: V, key: K, map: HMap<K, V>) => boolean): boolean;
  static from(obj: {}): HMap;
  set(key: K, value: V): this;
  readonly size: number;
}
