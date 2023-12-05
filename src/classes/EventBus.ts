import { EventCallback } from "../utils/types";

/**
 * @description EventBus implementation for handling custom events within a JavaScript application. It enables communication between different modules by providing methods for subscribing to, unsubscribing from, and publishing events. This fosters a decoupled architecture, allowing components to exchange information and trigger actions based on custom events.
 * @example
 * 
// Create an instance of the event bus
const eventBus = new EventBus();

// Subscribe to an event
function handleEvent1(data?: any) {
  console.log('Event 1 handled with data:', data);
}

eventBus.subscribe('event1', handleEvent1);

// Publish an event
eventBus.publish('event1', { message: 'Hello, Event 1!' });

// Unsubscribe from an event
eventBus.unsubscribe('event1', handleEvent1);

// The following publish won't trigger the handleEvent1 function because it's unsubscribed
eventBus.publish('event1', { message: 'This will not be handled.' });

 */
export default class EventBus {
  private listeners: Map<string, EventCallback[]>;

  constructor() {
    // Create a Map to store event listeners
    this.listeners = new Map();
  }

  // Method to subscribe to an event
  subscribe(event: string, callback: EventCallback): void {
    // If the event doesn't have any listeners yet, create an empty array
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    // Add the callback function to the array of listeners for the event
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      eventListeners.push(callback);
    }
  }

  // Method to unsubscribe from an event
  unsubscribe(event: string, callback: EventCallback): void {
    // If the event has listeners
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      // Remove the specified callback function from the array of listeners
      this.listeners.set(
        event,
        eventListeners.filter((listener) => listener !== callback)
      );
    }
  }

  // Method to publish (emit) an event
  publish(event: string, data?: any): void {
    // If the event has listeners
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      // Call each listener with the provided data
      eventListeners.forEach((listener) => {
        listener(data);
      });
    }
  }
}
