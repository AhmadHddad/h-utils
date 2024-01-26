import { UnknownFunction } from '../utilityTypes';

// Copied from https://github.com/unsplash/pipe-ts/blob/master/src/index.ts
/**
 * @description Create a new function which pipes its value through the list functions.
 * @example 
 * const difference = (a: number, b: number) => a - b;
const add1 = (n: number) => n + 1;

const differenceThenAdd1 = pipe(
    difference,
    add1,
);
const result: number = differenceThenAdd1(5, 4); //2
 */
function pipe<A extends unknown[], B>(
  ab: (this: void, ...a: A) => B
): (...args: A) => B;
function pipe<A extends unknown[], B, C>(
  ab: (this: void, ...a: A) => B,
  bc: (this: void, b: B) => C
): (...args: A) => C;
function pipe<A extends unknown[], B, C, D>(
  ab: (this: void, ...a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D
): (...args: A) => D;
function pipe<A extends unknown[], B, C, D, E>(
  ab: (this: void, ...a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D,
  de: (this: void, d: D) => E
): (...args: A) => E;
function pipe<A extends unknown[], B, C, D, E, F>(
  ab: (this: void, ...a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D,
  de: (this: void, d: D) => E,
  ef: (this: void, e: E) => F
): (...args: A) => F;
function pipe<A extends unknown[], B, C, D, E, F, G>(
  ab: (this: void, ...a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D,
  de: (this: void, d: D) => E,
  ef: (this: void, e: E) => F,
  fg: (this: void, f: F) => G
): (...args: A) => G;
function pipe<A extends unknown[], B, C, D, E, F, G, H>(
  ab: (this: void, ...a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D,
  de: (this: void, d: D) => E,
  ef: (this: void, e: E) => F,
  fg: (this: void, f: F) => G,
  gh: (this: void, g: G) => H
): (...args: A) => H;
function pipe<A extends unknown[], B, C, D, E, F, G, H, I>(
  ab: (this: void, ...a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D,
  de: (this: void, d: D) => E,
  ef: (this: void, e: E) => F,
  fg: (this: void, f: F) => G,
  gh: (this: void, g: G) => H,
  hi: (this: void, h: H) => I
): (...args: A) => I;
function pipe<A extends unknown[], B, C, D, E, F, G, H, I, J>(
  ab: (this: void, ...a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D,
  de: (this: void, d: D) => E,
  ef: (this: void, e: E) => F,
  fg: (this: void, f: F) => G,
  gh: (this: void, g: G) => H,
  hi: (this: void, h: H) => I,
  ij: (this: void, i: I) => J
): (...args: A) => J;
function pipe(...fns: UnknownFunction[]): UnknownFunction {
  return (...initialParams: unknown[]): unknown =>
    fns.reduce<unknown>((value, fn, index) => {
      const params = index === 0 ? (value as unknown[]) : [value];
      return fn(...params);
    }, initialParams);
}

export default pipe;
