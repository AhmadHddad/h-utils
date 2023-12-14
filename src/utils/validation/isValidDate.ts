

/**
 *@description Will check if the passed param is a valid date;
 @example isValidDate("10/10/2010") // true;
 @example isValidDate("2010") // true;
 @example isValidDate("123") // false;
 */
export default function isValidDate(value: unknown): boolean {
  return !isNaN(new Date(value as string).getTime());
}
