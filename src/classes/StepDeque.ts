type Step<T> = T | ((...args: any[]) => T);
type Options = Partial<{
  defaultStepIndex: number;
  circularPoint: boolean;
}>;

/**
 * @description A class to manage a sequence of steps, allowing navigation and dynamic modification..
 * Supports adding and removing steps at the beginning, end, and specific positions.
 * @example const stepper = new StepDeque(["step1", "step2", (condition) => condition ? "step3" : "step4"]);
 * stepper.next(); // "step1"
 * stepper.next(); // "step2"
 * stepper.next(true); // "step3"
 * stepper.previous(); // "step2"
 */
export default class StepDeque<T> {
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

      if (typeof this.steps[this.currentIndex] === "function") {
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

      if (typeof this.steps[this.currentIndex] === "function") {
        return (this.steps[this.currentIndex] as any)(...args) as T;
      }
      return this.steps[this.currentIndex] as T;
    } else if (this.isCircular) {
      this.currentIndex = this.steps.length - 1;
      return this.current(...args);
    }
    return undefined;
  }

  /**
   * Returns the value of the current step without changing the current index.
   */
  current(...args: any[]): T | undefined {
    if (this.currentIndex >= 0 && this.currentIndex < this.steps.length) {
      if (typeof this.steps[this.currentIndex] === "function") {
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
   * Adds a new step at the beginning.
   * @param step - The step to add.
   */
  addFirst(step: T): void {
    this.steps.unshift(step);
    // Adjust currentIndex to point to the same logical step if it's not at the beginning
    if (this.currentIndex > 0) {
      this.currentIndex++;
    }
  }

  /**
   * Adds a new step at the end.
   * @param step - The step to add.
   */
  addLast(step: T): void {
    this.steps.push(step);
  }

  /**
   * Adds a new step at a specific index.
   * @param step - The step to add.
   * @param index - The index at which to add the step.
   * @throws If the index is out of bounds.
   */
  addAt(step: T, index: number): void {
    if (index < 0 || index > this.steps.length) {
      throw new Error("Index out of bounds.");
    }
    this.steps.splice(index, 0, step);
    // Adjust currentIndex if the new step is added before the current index
    if (index <= this.currentIndex) {
      this.currentIndex++;
    }
  }

  /**
   * Sets a new set of steps and resets the stepper.
   * @param steps - An array of step functions.
   */
  setSteps(steps: (Step<T> | T)[]): void {
    this.steps = steps;
    this.reset();
  }

  /**
   * Removes the first step.
   * @throws If there are no steps.
   */
  removeFirst(): void {
    if (this.steps.length === 0) {
      throw new Error("No steps to remove.");
    }
    this.steps.shift();
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  /**
   * Removes the last step.
   * @throws If there are no steps.
   */
  removeLast(): void {
    if (this.steps.length === 0) {
      throw new Error("No steps to remove.");
    }
    this.steps.pop();
  }

  /**
   * Removes the step at a specific index.
   * @param index - The index of the step to remove.
   * @throws If the index is out of bounds.
   */
  removeAt(index: number): void {
    if (index < 0 || index >= this.steps.length) {
      throw new Error("Index out of bounds.");
    }
    this.steps.splice(index, 1);
    if (index < this.currentIndex) {
      this.currentIndex--;
    } else if (index === this.currentIndex) {
      this.currentIndex = Math.min(this.currentIndex, this.steps.length - 1);
    }
  }
}
