import { regex } from '../..';


export default function isURL(input: string): boolean {
  return !!input.match(regex.urlRegexForShortStr);
}
