import noop from '../general/noop';
import isBrowser from '../validation/isBrowser';

const documentMock = {
  // Basic properties
  title: 'Mocked Document',
  body: {},
  URL: 'http://localhost/',
  domain: 'localhost',
  referrer: '',
  doctype: {}, // This would be an object representing the doctype
  documentElement: {}, // Represents the root element

  // Forms, images, and links collections
  forms: [],
  images: [],
  links: [],

  getElementsByClassName: noop,
  getElementsByTagName: noop,
  getElementsByName: noop,
  querySelector: noop,
  querySelectorAll: noop,
  createTextNode: noop,
  createDocumentFragment: noop,
  addEventListener: noop,
  removeEventListener: noop,
  dispatchEvent: noop,

  // Style and script management
  styleSheets: [],

  // Cookie management
  cookie: '',

  // InnerHTML and OuterHTML
  innerHTML: '',
  outerHTML: '',
  createElement: (element:any) => {
    return {
      nodeName: element.toUpperCase(),
      style: {},
      appendChild: noop,
      setAttribute: noop,
      getAttribute: noop,
    };
  },
  getElementById: (id:any) => {
    return {
      id: id,
      style: {},
      appendChild: noop,
      setAttribute: noop,
      getAttribute: noop,
    };
  },
  head: {
    appendChild: noop,
  },
  // Other methods and properties as needed...
} as unknown as Document;

export default function getDocument(): Document {
  return isBrowser() && !!window ? window.document : (documentMock as Document);
}
