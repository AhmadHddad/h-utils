import { emailRegexForShortStr } from "../../regex/index";


export default function isEmail(input: string): boolean {
  return !!input.match(emailRegexForShortStr);
}
