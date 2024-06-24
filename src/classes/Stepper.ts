export type StepFunction<T> = (...args: any[]) => T | undefined;

/**
 * @description A class to manage a series of steps, allowing navigation between them.
 * @example const stepper = new Stepper(["step1", "step2", (condition) => condition ? "step3" : "step4"]);
 * stepper.next(); // "step1"
 * stepper.next(); // "step2"
 * stepper.next(true); // "step3"
 * stepper.previous(); // "step2"
 */
export default class Stepper<T> {
  private steps: StepFunction<T>[];
  private currentIndex: number;

  constructor(
    steps: StepFunction<T>[],
    options?: Partial<{
      defaultStepIndex: number;
    }>
  ) {
    this.steps = steps;
    this.currentIndex = options?.defaultStepIndex ?? -1; // Initialized to -1 to start from the first step on first next() call
  }

  /**
   * Moves to the next step and returns its value.
   * If there are no more steps, it returns undefined.
   */
  next(...args: any[]): T | undefined {
    if (this.currentIndex < this.steps.length - 1) {
      this.currentIndex++;

      if (typeof this.steps[this.currentIndex] === 'function') {
        return this.steps[this.currentIndex](...(args as any));
      }

      return this.steps[this.currentIndex]();
    }
    return undefined;
  }

  /**
   * Moves to the previous step and returns its value.
   * If already at the first step, it returns undefined.
   */
  previous(...args: any[]): T | undefined {
    if (this.currentIndex > 0) {
      this.currentIndex--;

      if (typeof this.steps[this.currentIndex] === 'function') {
        return this.steps[this.currentIndex](...(args as any));
      }
      return this.steps[this.currentIndex]();
    }

    return undefined;
  }

  /**
   * Returns the value of the current step without changing the current index.
   */
  current(): T | undefined {
    if (this.currentIndex >= 0 && this.currentIndex < this.steps.length) {
      return this.steps[this.currentIndex]();
    }
    return undefined;
  }

  /**
   * Resets the stepper to the initial step.
   */
  reset(): void {
    this.currentIndex = -1;
  }

  /**
   * Sets a new set of steps and resets the stepper.
   * @param steps - An array of step functions.
   */
  setSteps(steps: StepFunction<T>[]): void {
    this.steps = steps;
    this.reset();
  }
}
