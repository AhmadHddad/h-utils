import { Fn } from "../../types";

/**
 * @description will check if the passed object accepts removeEventListener and add it.
 * @example  removeEventListener(target.current, "touchend", preventDefault);
 */
export default function removeEventListener<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T | null,
    ...args: Parameters<T["removeEventListener"]> | [string, Fn | null, ...any]
  ): void {
    if (obj && obj.removeEventListener) {
      obj.removeEventListener(
        ...(args as Parameters<HTMLElement["removeEventListener"]>)
      );
    }
  }
