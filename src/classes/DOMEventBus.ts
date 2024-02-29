import getWindow from '../utils/browser/getWindow';
import { EventCallback } from '../utils/types';
import { Nullable } from '../utils/utilityTypes';

/**
 * @important --Browser Only--
 * @description DOMEventBus class implementation tailored for the Document Object Model (DOM). It serves as a centralized event manager, allowing components to subscribe to and publish custom events within a web application. With methods like subscribe, unsubscribe, and publish, it enables a modular and efficient communication system, enhancing the decoupling of components. This class leverages standard DOM event handling mechanisms, such as addEventListener and dispatchEvent, to facilitate seamless interaction and information exchange between different parts of a web application.
 * @example
 * 
// Create an instance of the DOM event bus with a specific element as the eventBusContainer
const specificElement = document.getElementById('myElement');
const specificElementEventBus = new DOMEventBus(specificElement);

// Subscribe to an event on the specific element
function handleSpecificElementEvent(event: CustomEvent) {
  console.log('Specific Element Event handled with data:', event.detail);
}

specificElementEventBus.subscribe('SpecificElementEvent', handleSpecificElementEvent);

// Publish an event on the specific element
specificElementEventBus.publish('SpecificElementEvent', { message: 'Hello, Specific Element Event!' });

// Unsubscribe from an event on the specific element
specificElementEventBus.unsubscribe('SpecificElementEvent', handleSpecificElementEvent);

// Create an instance of the DOM event bus with a DocumentFragment as the eventBusContainer
const defaultEventBus = new DOMEventBus();

// Subscribe to an event on the default event bus
function handleDefaultEvent(event: CustomEvent) {
  console.log('Default Event handled with data:', event.detail);
}

defaultEventBus.subscribe('DefaultEvent', handleDefaultEvent);

// Publish an event on the default event bus
defaultEventBus.publish('DefaultEvent', { message: 'Hello, Default Event!' });

// Unsubscribe from an event on the default event bus
defaultEventBus.unsubscribe('DefaultEvent', handleDefaultEvent);
 */
export default class DOMEventBus {
  private eventBusContainer: DocumentFragment | HTMLElement;
  private document = getWindow().document;

  constructor(eventBusContainer?: Nullable<DocumentFragment | HTMLElement>) {
    // Use the provided eventBusContainer or create a DocumentFragment
    this.eventBusContainer =
      eventBusContainer || this.document.createDocumentFragment();
  }

  // Method to subscribe to an event
  subscribe(event: string, callback: EventCallback): void {
    this.eventBusContainer.addEventListener(event, callback);
  }

  // Method to unsubscribe from an event
  unsubscribe(event: string, callback: EventCallback): void {
    this.eventBusContainer.removeEventListener(event, callback);
  }

  // Method to publish (emit) an event
  publish(event: string, data?: any): void {
    // Create a custom event with the provided data
    const customEvent = new CustomEvent(event, { detail: data });

    // Dispatch the custom event on the event bus container
    this.eventBusContainer.dispatchEvent(customEvent);
  }
}
