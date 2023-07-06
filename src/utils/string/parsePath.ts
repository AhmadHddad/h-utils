/**
 * @description will convert passed path string into object path for navigation
 * @example parsePath("a.b.c[0]") => ["a", "b", "c", "0"]
 */
export default function parsePath(path: string): string[] {
  return path
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.');
}
