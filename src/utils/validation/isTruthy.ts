/**
 * @description This function takes a value and returns true if the value is truthy, otherwise it returns false.
 * @param {any} value - any
 */
const isTruthy = (value: unknown): value is true => !!value;
export default isTruthy;
