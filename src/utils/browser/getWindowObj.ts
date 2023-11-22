import getGlobalThis from '../general/getGlobalThis';
import isBrowser from '../validation/isBrowser';

export default function getWindowObj(): Window | typeof globalThis {
  return isBrowser() ? window || {} : getGlobalThis();
}
