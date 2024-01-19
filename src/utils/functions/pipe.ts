import { PipeFunction } from "../types";

/**
 * @example 
 * 
// Functions to be piped
const addTwo = (x: number) => x + 2;
const square = (x: number) => x * x;
const toString = (x: number) => x.toString();

// Pipe the functions
const pipeline = pipe(addTwo, square, toString);

// Use the pipeline
const result = pipeline(3);
 */
export default function pipe<T>(...fns: PipeFunction<any, any>[]): (input: T) => any {
  return (input: T) => fns.reduce((result, fn) => fn(result), input);
}