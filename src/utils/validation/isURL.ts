import { regex } from '../../index';


export default function isURL(input: string): boolean {
  return !!input.match(regex.urlRegexForShortStr);
}
