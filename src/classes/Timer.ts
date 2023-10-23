/**
 * @see https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript
 * @class Timer
 * @description Creates a timer so it calculates the time between start and end, so you can
 * check time in ms.
 * @example `
 * const timer = new Timer(initialStartTimer (optional));
 * timer.start();
 * //after 1 second
 * timer.stop();
 * console.log(timer.getTime()) // 1000
 *
 * `
 */
export default class Timer {
  public isRunning = false;
  private startTime = 0;
  private overallTime = 0;

  constructor(initialStartTime = 0) {
    this.startTime = initialStartTime;
  }

  _getTimeElapsedSinceLastStart() {
    if (!this.startTime) {
      return 0;
    }

    return Date.now() - this.startTime;
  }

  start() {
    if (this.isRunning) {
      return console.error('Timer is already running');
    }

    this.isRunning = true;

    this.startTime = Date.now();
  }

  stop() {
    if (!this.isRunning) {
      return console.error('Timer is already stopped');
    }

    this.isRunning = false;

    this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart();
  }

  reset() {
    this.overallTime = 0;

    if (this.isRunning) {
      this.startTime = Date.now();
      return;
    }

    this.startTime = 0;
  }

  getTime() {
    if (!this.startTime) {
      return 0;
    }

    if (this.isRunning) {
      return this.overallTime + this._getTimeElapsedSinceLastStart();
    }

    return this.overallTime;
  }
}
