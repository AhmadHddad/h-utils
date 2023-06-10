/**
 * @description will convert numbers to arabic string numbers
 * @example convertToArabicNumbers(123) => '١٢٣'
 */
export default function convertToArabicNumbers(num: number | string): string {
  const arabicNumbers =
    '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
  return new String(num).replace(/[0123456789]/g, d => {
    return arabicNumbers[d];
  });
}
