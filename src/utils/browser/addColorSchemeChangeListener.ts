import { ColorScheme } from '../types';
import isBrowser from '../validation/isBrowser';
import getWindowObj from './getWindow';

/**
 * @description  tracks changes in the user's color scheme preference and invokes a callback with the updated scheme ('dark' or 'light'). Use the returned function to remove the listener when necessary. Ideal for adapting visual elements to user preferences.
 * @example const removeListener = addColorSchemeChangeListener((newColorScheme, event) => {
  console.log(`Color scheme changed to: ${newColorScheme}`);
});

// Later, when you want to stop listening for color scheme changes
removeListener();
 */
export default function addColorSchemeChangeListener(
  callback: (colorScheme: ColorScheme, event: MediaQueryListEvent) => void
): () => void {
  if (!isBrowser()) return () => {};
  
  const window = getWindowObj();

  const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

  const listener = (e: MediaQueryListEvent) => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    callback?.(newColorScheme, e);
  };

  mediaQueryList?.addEventListener('change', listener);

  return () => mediaQueryList?.removeEventListener('change', listener);
}
