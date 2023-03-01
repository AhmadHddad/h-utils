import { Fn } from '../../types';

/**
 * @description will check if the passed object accepts addEventListener and add it.
 * @example  addEventListener(event.target, "touchend", preventDefault, { passive: false });
 */
export default function addEventListener<
  T extends Window | Document | HTMLElement | EventTarget
>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Fn | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement['addEventListener']>)
    );
  }
}
