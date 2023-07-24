/**
 * @description will convert passed path string into object path for navigation
 * @example stringToPath("a.b.c[0]") => ["a", "b", "c", "0"]
 */
export default function stringToPath(path: string): string[] {
  return path
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.');
}
