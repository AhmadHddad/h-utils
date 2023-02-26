import getSum from "./getSum";

/**
 * @description The function takes a variable number of arguments, and returns the average of those arguments
 * @param {number[]} args - number[]
 * @returns The sum of the arguments divided by the number of arguments.
 */
export default function getAverage(...args: number[]) {
    return getSum(...args) / args.length;
  }