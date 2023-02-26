/**
 * @description If the values are undefined, return undefined, otherwise return the values multiplied by the factor.
 * @param {number[] | undefined} values - number[] | undefined
 * @param {number} [factor=1] - number = 1
 * @returns An array of numbers or undefined.
 */
export default function multiplyAll(
    values: number[] | undefined,
    factor: number = 1
  ): number[] | undefined {
    if (!values) {
      return values;
    } else {
      return values.map(x => x * factor);
    }
  }