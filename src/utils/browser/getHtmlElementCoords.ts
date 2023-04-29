import isBrowser from '../validation/isBrowser';

type Options = {
  position:
    | 'top left'
    | 'top center'
    | 'top right'
    | 'center left'
    | 'center'
    | 'center right'
    | 'bottom left'
    | 'bottom center'
    | 'bottom right';
  precise: boolean;
};

/**
 * @description Finding element's position (x, y coordinates) relative to the document.
 * @example getElementCoords(document.getElementById("id")) // {x:1, y:1}
 * @example getElementCoords(document.getElementById("id"), {position:"center"}) // {x:1, y:0}
 * @example getElementCoords(document.getElementById("id"), {position:"top right"}) // {x:1, y:2}
 * @example getElementCoords(document.getElementById("id"), {position:"top left"}) // {x:2, y:1}
 * @example getElementCoords(document.getElementById("id"), {precise:true}) // {x:2.123, y:1.123}
 */
export default function getHtmlElementCoords(
  element: HTMLElement,
  options: Options = { position: 'top left', precise: false }
): { x: number; y: number } {
  if (!isBrowser()) return { x: 0, y: 0 };

  const position = options?.position;
  const precise = options?.precise;

  const { top, left, width, height } = element.getBoundingClientRect();

  let point = {
    x: 0,
    y: 0,
  };

  switch (position) {
    case 'top left':
    default:
      point = {
        x: left + window.pageXOffset,
        y: top + window.pageYOffset,
      };
      break;
    case 'top center':
      point = {
        x: left + width / 2 + window.pageXOffset,
        y: top + window.pageYOffset,
      };
      break;
    case 'top right':
      point = {
        x: left + width + window.pageXOffset,
        y: top + window.pageYOffset,
      };
      break;
    case 'center left':
      point = {
        x: left + window.pageXOffset,
        y: top + height / 2 + window.pageYOffset,
      };
      break;
    case 'center':
      point = {
        x: left + width / 2 + window.pageXOffset,
        y: top + height / 2 + window.pageYOffset,
      };
      break;
    case 'center right':
      point = {
        x: left + width + window.pageXOffset,
        y: top + height / 2 + window.pageYOffset,
      };
      break;
    case 'bottom left':
      point = {
        x: left + window.pageXOffset,
        y: top + height + window.pageYOffset,
      };
      break;
    case 'bottom center':
      point = {
        x: left + width / 2 + window.pageXOffset,
        y: top + height + window.pageYOffset,
      };
      break;
    case 'bottom right':
      point = {
        x: left + width + window.pageXOffset,
        y: top + height + window.pageYOffset,
      };
      break;
  }

  if (!precise) {
    return {
      x: Math.round(point.x),
      y: Math.round(point.y),
    };
  }

  return point;
}
