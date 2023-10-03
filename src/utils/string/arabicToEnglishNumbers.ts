export default function arabicToEnglishNumbers(number: string): string {
  //@ts-ignore
  return number.replace(/[\u0660-\u0669]/g, d => d.charCodeAt() - 1632);
}
