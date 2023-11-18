import getUrlObj from './getUrlObj';


/**
 * @description will get url search params for the passed url
 */
export default function getUrlSearchParams(url: string): URLSearchParams {
  return getUrlObj(url).searchParams;
}
