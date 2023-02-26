/**
 * @description The sum function takes a variable number of arguments, and returns the sum of all the arguments.
 * @param {number[]} args - number[]
 */
export default function getSum(...args: number[]) {
    return args.reduce((prev, curr) => prev + curr, 0);
  }