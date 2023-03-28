import { isBrowser } from '../index';

export default function getWindowObj() : Window & typeof globalThis | {} {
  return isBrowser() ? window : {};
}
