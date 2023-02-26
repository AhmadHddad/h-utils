/**
 * @description will return the hash (fragment) part of a url
 * @example "www.example.com#link" => "#link"
 */
export default function getHashFromString(url: string): string {
  let hash = '';
  const hashStart = url.indexOf('#');
  if (hashStart !== -1) {
    hash = url.slice(hashStart);
  }

  return hash;
}
