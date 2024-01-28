import isBrowser from '../validation/isBrowser';

/**
 * @description a reliable way to call a callback after a certain ms time.
 * @example // Usage
const controller = new AbortController();

// Create an animation callback every second:
animationInterval(1000, controller.signal, time => {
  console.log('tick!', time);
});

// And to stop it:
controller.abort();
 */
export default function animationInterval(
  ms: number,
  signal: AbortSignal,
  callback: (time: number) => void
) {
  if (!isBrowser()) {
    console.error('This util is for browsers only!');
    return;
  }

  // Prefer currentTime, as it'll better sync animtions queued in the
  // same frame, but if it isn't supported, performance.now() is fine.
  const start = ((document?.timeline
    ? document?.timeline?.currentTime
    : performance.now()) || 0) as number;

  function frame(time: number) {
    if (signal.aborted) return;
    callback(time);
    scheduleFrame(time);
  }

  function scheduleFrame(time: number) {
    const elapsed = time - (start as number);
    const roundedElapsed = Math.round(elapsed / ms) * ms;
    const targetNext = start + roundedElapsed + ms;
    const delay = targetNext - performance.now();
    setTimeout(() => requestAnimationFrame(frame), delay);
  }

  scheduleFrame(start);
}
