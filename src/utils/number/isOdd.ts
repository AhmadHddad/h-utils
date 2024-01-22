import isEven from "./isEven";

/**
 * @description Will check if the passed number is odd or not.
 * @example isOdd(10) // false;
 */
export default function isOdd(n: number): boolean {
    return !isEven(n)
  }
  
  