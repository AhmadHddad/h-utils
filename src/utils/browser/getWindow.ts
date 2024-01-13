import isBrowser from '../validation/isBrowser';
import getDocument from './getDocument';

interface MockImage {
  width: number;
  height: number;
  src: string;
  alt: string;
  onload: () => void;
  onerror: () => void;
  simulateLoad: () => void;
  simulateError: () => void;
}

const windowMock = {
  Image: class Image implements MockImage {
    width: number;
    height: number;
    src: string;
    alt: string;
    onload: () => void;
    onerror: () => void;
    simulateError: () => void;
    simulateLoad: () => void;
    constructor(width, height) {
      this.width = width || 0;
      this.height = height || 0;
      this.src = '';
      this.alt = '';
      this.onload = function () {
        /* ... */
      };
      this.onerror = function () {
        /* ... */
      };

      // Methods to simulate loading and error
      this.simulateLoad = function () {
        if (this.onload) {
          this.onload();
        }
      };
      this.simulateError = function () {
        if (this.onerror) {
          this.onerror();
        }
      };
    }
  },
  // Document Object
  document: getDocument(),

  // Location Object
  location: {
    href: '',
    protocol: 'http:',
    host: 'localhost',
    hostname: 'localhost',
    port: '',
    pathname: '/',
    search: '',
    hash: '',
    reload: function () {
      /* ... */
    },
    replace: function () {
      /* ... */
    },
    assign: function () {
      /* ... */
    },
    // ... other location methods and properties
  },

  // History Object
  history: {
    pushState: function () {
      /* ... */
    },
    replaceState: function () {
      /* ... */
    },
    back: function () {
      /* ... */
    },
    forward: function () {
      /* ... */
    },
    go: function () {
      /* ... */
    },
    // ... other history methods
  },

  // Navigator Object
  navigator: {
    userAgent: 'Mozilla/5.0',
    platform: 'Win32',
    language: 'en-US',
    // ... other navigator properties
  },

  // Screen Object
  screen: {
    width: 1024,
    height: 768,
    orientation: {
      /* ... */
    },
    // ... other screen properties
  },

  // Storage Objects
  localStorage: {
    /* ... */
  },
  sessionStorage: {
    /* ... */
  },

  // Methods
  alert: function (message) {
    console.log('Alert:', message);
  },
  confirm: function () {
    /* ... */
  },
  prompt: function () {
    /* ... */
  },
  setTimeout: function () {
    /* ... */
  },
  clearTimeout: function () {
    /* ... */
  },
  setInterval: function () {
    /* ... */
  },
  clearInterval: function () {
    /* ... */
  },

  // Event Handling
  addEventListener: function () {
    /* ... */
  },
  removeEventListener: function () {
    /* ... */
  },
  // ... more properties and methods as required
} as unknown as Window & typeof globalThis;

export default function getWindowObj(): Window & typeof globalThis {
  return isBrowser() && !!window ? window : windowMock;
}
