type Step<T> = T | ((...args: any[]) => T);
type Options = Partial<{
  defaultStepIndex: number;
  circularPoint: boolean;
}>;

/**
 * @description A class to manage a series of steps, allowing navigation between them.
 * @example const stepper = new Stepper(["step1", "step2", (condition) => condition ? "step3" : "step4"]);
 * stepper.next(); // "step1"
 * stepper.next(); // "step2"
 * stepper.next(true); // "step3"
 * stepper.previous(); // "step2"
 */
export default class Stepper<T> {
  private steps: Step<T>[];
  private defaultStepIndex: number;
  private currentIndex: number;
  private isCircular: boolean;

  constructor(steps: Step<T>[], options?: Options) {
    this.steps = steps;
    this.defaultStepIndex = options?.defaultStepIndex ?? 0;
    this.isCircular = !!options?.circularPoint;
    this.currentIndex = options?.defaultStepIndex ?? 0;
  }

  getCurrentStepIndex(): number {
    return this.currentIndex;
  }

  getSteps(): Step<T>[] {
    return this.steps;
  }

  /**
   * Moves to the next step and returns its value.
   * If there are no more steps, it returns undefined.
   */
  next(...args: any[]): T | undefined {
    if (this.currentIndex < this.steps.length - 1) {
      this.currentIndex++;

      if (typeof this.steps[this.currentIndex] === 'function') {
        return (this.steps[this.currentIndex] as any)(...args) as T;
      }
      return this.steps[this.currentIndex] as T;
    } else if (this.isCircular) {
      this.currentIndex = this.defaultStepIndex;
      return this.current(...args);
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
        return (this.steps[this.currentIndex] as any)(...args) as T;
      }
      return this.steps[this.currentIndex] as T;
    } else if (this.isCircular) {
      this.currentIndex = this.steps.length -1;
      return this.current(...args);
    }
    return undefined;
  }

  /**
   * Returns the value of the current step without changing the current index.
   */
  current(...args: any[]): T | undefined {
    if (this.currentIndex >= 0 && this.currentIndex < this.steps.length) {
      if (typeof this.steps[this.currentIndex] === 'function') {
        return (this.steps[this.currentIndex] as any)(...args) as T;
      }
      return this.steps[this.currentIndex] as T;
    }

    return undefined;
  }

  /**
   * Resets the stepper to the initial step.
   */
  reset(): void {
    this.currentIndex = this.defaultStepIndex;
  }

  /**
   * Sets a new set of steps and resets the stepper.
   * @param steps - An array of step functions.
   */
  setSteps(steps: (Step<T> | T)[]): void {
    this.steps = steps;
    this.reset();
  }
}