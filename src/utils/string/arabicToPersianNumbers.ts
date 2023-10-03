export default function arabicToPersianNumbers(str: string): string {
  return str.replace(
    /[\u0660-\u0669]/g,
    //@ts-ignore
    d => '۰۱۲۳۴۵۶۷۸۹'[d.charCodeAt() - 1632]
  );
}
