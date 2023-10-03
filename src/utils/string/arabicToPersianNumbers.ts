
/**
 * @function arabicToPersianNumbers
 * @description convert arabic numbers to persian numbers
 * 
 * @example `
 * arabicToPersianNumbers('It is ٣٠/٠٨/٢٠١٩ at ٨:٢٤ AM') //It is ۳۰/۰۸/۲۰۱۹ at ۸:۲۴ AM
 * `
 *
 */
export default function arabicToPersianNumbers(str: string): string {
  return str.replace(
    /[\u0660-\u0669]/g,
    //@ts-ignore
    d => '۰۱۲۳۴۵۶۷۸۹'[d.charCodeAt() - 1632]
  );
}
