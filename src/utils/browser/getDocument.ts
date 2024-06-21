import isBrowser from '../validation/isBrowser';
import getWindow from './getWindow';

const window = getWindow();
const documentMock = {
  // Basic properties
  title: 'Mocked Document',
  body: {},
  head: {},
  URL: 'http://localhost/',
  domain: 'localhost',
  referrer: '',
  doctype: {}, // This would be an object representing the doctype
  documentElement: {}, // Represents the root element

  // Forms, images, and links collections
  forms: [],
  images: [],
  links: [],

  // Commonly used methods
  getElementById: function () {
    /* ... */
  },
  getElementsByClassName: function () {
    /* ... */
  },
  getElementsByTagName: function () {
    /* ... */
  },
  getElementsByName: function () {
    /* ... */
  },
  querySelector: function () {
    /* ... */
  },
  querySelectorAll: function () {
    /* ... */
  },
  createElement: function () {
    /* ... */
  },
  createTextNode: function () {
    /* ... */
  },
  createDocumentFragment: function () {
    /* ... */
  },
  addEventListener: function () {
    /* ... */
  },
  removeEventListener: function () {
    /* ... */
  },
  dispatchEvent: function () {
    /* ... */
  },

  // Style and script management
  styleSheets: [],

  // Cookie management
  cookie: '',

  // InnerHTML and OuterHTML
  innerHTML: '',
  outerHTML: '',

  // Other methods and properties as needed...
} as unknown as Document;

export default function getDocument(): Document {
  return isBrowser() && !!window ? window.document : (documentMock as Document);
}
