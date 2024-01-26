import { UnknownFunction } from '../utilityTypes';
import pipe from './pipe';

// Copied from https://github.com/unsplash/pipe-ts/blob/master/src/index.ts
/**
 * @description Transform a value by piping it through the listed functions. Sugar syntax for pipe(f, g)(value).
 * @example 
 * const add1 = (n: number) => n + 1;
const times2 = (n: number) => n * 2;

const result: number = pipeWith(1, add1, times2) // 4;
 */
function pipeWith<A, B>(a: A, ab: (this: void, a: A) => B): B;
function pipeWith<A, B, C>(
  a: A,
  ab: (this: void, a: A) => B,
  bc: (this: void, b: B) => C
): C;
function pipeWith<A, B, C, D>(
  a: A,
  ab: (this: void, a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D
): D;
function pipeWith<A, B, C, D, E>(
  a: A,
  ab: (this: void, a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D,
  de: (this: void, d: D) => E
): E;
function pipeWith<A, B, C, D, E, F>(
  a: A,
  ab: (this: void, a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D,
  de: (this: void, d: D) => E,
  ef: (this: void, e: E) => F
): F;
function pipeWith<A, B, C, D, E, F, G>(
  a: A,
  ab: (this: void, a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D,
  de: (this: void, d: D) => E,
  ef: (this: void, e: E) => F,
  fg: (this: void, f: F) => G
): G;
function pipeWith<A, B, C, D, E, F, G, H>(
  a: A,
  ab: (this: void, a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D,
  de: (this: void, d: D) => E,
  ef: (this: void, e: E) => F,
  fg: (this: void, f: F) => G,
  gh: (this: void, g: G) => H
): H;
function pipeWith<A, B, C, D, E, F, G, H, I>(
  a: A,
  ab: (this: void, a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D,
  de: (this: void, d: D) => E,
  ef: (this: void, e: E) => F,
  fg: (this: void, f: F) => G,
  gh: (this: void, g: G) => H,
  hi: (this: void, h: H) => I
): I;
function pipeWith<A, B, C, D, E, F, G, H, I, J>(
  a: A,
  ab: (this: void, a: A) => B,
  bc: (this: void, b: B) => C,
  cd: (this: void, c: C) => D,
  de: (this: void, d: D) => E,
  ef: (this: void, e: E) => F,
  fg: (this: void, f: F) => G,
  gh: (this: void, g: G) => H,
  hi: (this: void, h: H) => I,
  ij: (this: void, i: I) => J
): J;
function pipeWith(value: unknown, ...fns: UnknownFunction[]): unknown {
  return pipe(
    // Our overloads do not currently support arrays
    // @ts-ignore
    ...fns
  )(value);
}

export default pipeWith;
