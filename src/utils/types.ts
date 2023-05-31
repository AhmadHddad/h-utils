export type Key = string | number;
export type Fn = (this: any, ...args: any[]) => any;

export type Keys<T> = keyof T;
export type Values<T> = T[Keys<T>];

export type ExcludeFromArray<T extends any[], ToExclude> = Exclude<
  T[number],
  ToExclude
>[];

export type PredicateFunc<T> = (
  key: string | symbol,
  value: Values<T>,
  object: {} | object
) => boolean;
