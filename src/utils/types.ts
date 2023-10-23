export type Fn = (this: any, ...args: any[]) => any;
export type {Falsy, KeysArr, PredicateFunc , Key,Primitive } from './utilityTypes';
export type DebounceOptions = {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
  };
  