import { StringOrNumber } from "../types";

/**
* @description function which takes a string of characters and adds a "padding" string of your choice to the left.
 * @example 
 *  
leftPad('foo', 5)
// => "  foo"
 
leftPad('foobar', 6)
// => "foobar"
 
leftPad(1, 2, '0')
// => "01"
 
leftPad(17, 5, 0)
// => "00017"
 */
export default function leftPad(str: StringOrNumber, len: number, ch: StringOrNumber):string{
    str = String(str);
    var i = -1;
    if (!ch && ch !== 0) ch = " ";
    len = len - str.length;
    while (++i < len) {
        str = ch + str;
    }
    return str as string;
}
