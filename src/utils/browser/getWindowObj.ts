import { isBrowser } from '..';

export default function getWindowObj() : Window & typeof globalThis | {} {
  return isBrowser() ? window : {};
}
