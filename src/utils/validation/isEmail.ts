import { regex } from '../../index';


export default function isEmail(input: string): boolean {
  return !!input.match(regex.emailRegexForShortStr);
}
