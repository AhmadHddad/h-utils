/**
 * @description it will format numbers to string if its bigger than 1000 with a K, million M and so on.
 * @example nFormatter(1000) => "1K"
 */
export default function nFormatter(num: number): string {
  //@ts-ignore
  return Intl.NumberFormat('en', { notation: 'compact' }).format(num);
}
