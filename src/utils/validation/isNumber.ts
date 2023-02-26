/**
 * @description If the value is not a number, then it is not a number.
 * @param {any} value - any - The value to be checked
 */
const isNumber = (value: any): value is number => !isNaN(value - parseFloat(value));
export default isNumber;
