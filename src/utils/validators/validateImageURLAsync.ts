import isBrowser from '../validation/isBrowser';


/**
 * @description will validate the passed image url, it will make a fetch call to the passed url,
 * and check if it returns a valid image or not.
 * @example validateImageURLAsync("valid-image-url").then(v => console.log(v)) // true
 * @example validateImageURLAsync("invalid-image-url").then(v => console.log(v)) // false
 */
export default function validateImageURLAsync(url: string): Promise<boolean> {
  if (isBrowser()) {
    const img = new Image();
    img.src = url;
    return new Promise((res) => {
      img.onload = () => res(true);
      img.onerror = () => res(false);
    });
  }

  if (typeof fetch === 'undefined') {
    return Promise.resolve(false);
  }

  return new Promise((resolve) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          // Check if the response is an image (you may need to customize this check)
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.startsWith('image/')) {
            resolve(true);
          } else {
            resolve(false);
          }
        } else {
          resolve(false);
        }
      })
      .catch(() => {
        resolve(false);
      });
  });
}
