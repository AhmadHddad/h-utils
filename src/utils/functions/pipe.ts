import { PipeFunction } from "../types";

export default function pipe<T>(...fns: PipeFunction<any, any>[]): (input: T) => any {
  return (input: T) => fns.reduce((result, fn) => fn(result), input);
}