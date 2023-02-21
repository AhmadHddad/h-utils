/**
 * @description If the values are undefined, return undefined, otherwise return the values multiplied by the factor.
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
 * @description The sum function takes a variable number of arguments, and returns the sum of all the arguments.
 * @param {number[]} args - number[]
 */
export function getSum(...args: number[]) {
  return args.reduce((prev, curr) => prev + curr, 0);
}

/**
 * @description The function takes a variable number of arguments, and returns the average of those arguments
 * @param {number[]} args - number[]
 * @returns The sum of the arguments divided by the number of arguments.
 */
export function getAverage(...args: number[]) {
  return getSum(...args) / args.length;
}

/**
 * @description it will format numbers to string if its bigger than 1000 with a K, million M and so on.
 * @example nFormatter(1000) => "1K"
 */
export function nFormatter(num: number): string {
  return Intl.NumberFormat('en', { notation: 'compact' }).format(num);
}
