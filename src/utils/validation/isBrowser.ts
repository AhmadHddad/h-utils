/**
 * @description Return true if the current environment is running on browser.
 */
export default function isBrowser(): boolean {
  return typeof window !== 'undefined';
}
