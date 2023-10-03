
/**
 * @function arabicToEnglishNumbers
 * @description convert arabic numbers to english numbers
 * 
 * @example `
 * arabicToEnglishNumbers('١٢٣') //'123'
 * `
 *
 */
export default function arabicToEnglishNumbers(number: string): string {
  //@ts-ignore
  return number.replace(/[\u0660-\u0669]/g, d => d.charCodeAt() - 1632);
}
