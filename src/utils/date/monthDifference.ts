import isValidDate from '../validation/isValidDate';

/**
 * @description will get the deference between 2 dates in months.
 * @description Warning: value can be minus if the you passed dates in reverse.
 *
 * @example monthDifference("2022", "2023") // 12
 * @example monthDifference("2023", "2022") // -12
 */
export default function monthDifference(
  first: string | Date,
  last: string | Date
): number {
  if (!isValidDate(first) || !isValidDate(last))
    throw new Error('Not a valid Date');
  const firstDate = new Date(first);
  const lastDate = new Date(last);

  let diff = (lastDate.getFullYear() - firstDate.getFullYear()) * 12;

  diff -= firstDate.getMonth();
  diff += lastDate.getMonth();

  return diff;
}
