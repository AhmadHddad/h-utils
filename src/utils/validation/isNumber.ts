/**
 * @description If the value is not a number, then it is not a number.
 * @example isNumber("123") => false;
 * @example isNumber("123", true) => false;
 * @example isNumber(1, true) => true;
 */
export default function isNumber(value: any, sloppy?: boolean): value is number {
  let res = !isNaN(value - parseFloat(value));
  return !sloppy ? typeof value === "number" && res : res;
}