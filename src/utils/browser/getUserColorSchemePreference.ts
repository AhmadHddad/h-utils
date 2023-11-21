import { ColorScheme } from '../types';
import isBrowser from '../validation/isBrowser';
import getWindowObj from './getWindowObj';

/**
 * @description Retrieves the user's preferred color scheme ('light' or 'dark') based on their system settings.
 * @example
 * const userColorScheme = getUserColorSchemePreference();
 *
 * container.style.backgroundColor = userColorScheme === 'dark' ? '#121212' : '#ffffff';
 *
 */
export default function getUserColorSchemePreference(): ColorScheme {
  let color: ColorScheme = 'light';
  if (!isBrowser()) return color;

  const window = getWindowObj();
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    color = 'dark';
  }

  return color;
}
