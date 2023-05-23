import { urlRegexForShortStr } from "../../regex/index";


export default function isURL(input: string): boolean {
  return !!input.match(urlRegexForShortStr);
}
