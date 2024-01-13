
/**
 * @description give the ability to create two-way data binding without any js library.
 * @example
 * const inputElement = document.getElementById('textInput') as HTMLInputElement;
    const outputElement = document.getElementById('textDisplay') as HTMLElement;

    const binder = new TwoWayBinder(
        inputElement,
        outputElement
    );
 */
export default class TwoWayBinder {
    private inputElement: HTMLInputElement;
    private outputElement: HTMLElement;
    private eventType: string;

    constructor(
        inputElement: HTMLInputElement,
        outputElement: HTMLElement,
        eventType: string = 'input'
    ) {
        this.inputElement = inputElement;
        this.outputElement = outputElement;
        this.eventType = eventType;

        // Initialize the input and output elements
        this.updateElements();

        // Update property when the input event is triggered
        this.inputElement.addEventListener(this.eventType, this.onInputChanged.bind(this));
    }

    private onInputChanged(): void {
        this.value = this.inputElement.value;
    }

    private updateElements(): void {
        this.inputElement.value = this.value;
        this.outputElement.textContent = this.value;
    }

    public updateInput(): void {
        this.inputElement.value = this.value;
    }

    public updateOutput(): void {
        this.outputElement.textContent = this.value;
    }

    get value(): string {
        return this.inputElement.value;
    }

    set value(newValue: string) {
        this.inputElement.value = newValue;
        this.outputElement.textContent = newValue;
    }
}
