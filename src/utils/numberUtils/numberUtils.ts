/**
 * If the values are undefined, return undefined, otherwise return the values multiplied by the factor.
 * @param {number[] | undefined} values - number[] | undefined
 * @param {number} [factor=1] - number = 1
 * @returns An array of numbers or undefined.
 */
export function multiplyAll(
  values: number[] | undefined,
  factor: number = 1
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map(x => x * factor);
  }
}

/**
 * The sum function takes a variable number of arguments, and returns the sum of all the arguments.
 * @param {number[]} args - number[]
 */
export function getSum(...args: number[]) {
  return args.reduce((prev, curr) => prev + curr, 0);
}

/**
 * The function takes a variable number of arguments, and returns the average of those arguments
 * @param {number[]} args - number[]
 * @returns The sum of the arguments divided by the number of arguments.
 */
export function getAvarage(...args: number[]) {
  return getSum(...args) / args.length;
}
