import { Cookie } from '../types';
import getWindowObj from './getWindowObj';

/**
 * @description -- Browses only --
 * In this cookieUtils object:

findCookieByName: Searches for a cookie by name and returns its parsed value.
getCookies: Retrieves all cookies and returns them as an array of parsed objects.
setCookie: Creates or updates a cookie with the specified name, value, and expiration in days. It uses encodeURIComponent for encoding the cookie value.
parseCookie: Splits a cookie string into its name and value and decodes the value.
deleteCookie: Deletes a cookie by setting its expiration date to a past date.

 * 
 *@example 
 * cookieUtils.setCookie('test', '123', 7);
console.log(cookieUtils.findCookieByName('test'));
console.log(cookieUtils.getCookies());
cookieUtils.deleteCookie('test');


 */
const cookieUtils = {
    get cookie(){
    return getWindowObj().document.cookie;
  },
  findCookieByName: function (name: string): Cookie | null {
    const cookies = this.cookie.split('; ');
    const cookieString = cookies.find((cookie) =>
      cookie.startsWith(name + '=')
    );
    return cookieString ? this.parseCookie(cookieString) : null;
  },

  getCookies: function (): Cookie[] {
    const cookies = this.cookie.split('; ');
    return cookies.map((cookie) => this.parseCookie(cookie));
  },

  setCookie: function (
    name: string,
    value: string,
    days?: number,
    path?: string,
    domain?: string,
    httpOnly?: boolean,
    secure?: boolean
  ): void {
    let cookieString = name + '=' + encodeURIComponent(value);

    if (days !== undefined) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      cookieString += '; expires=' + date.toUTCString();
    }

    if (path) {
      cookieString += '; path=' + path;
    }

    if (domain) {
      cookieString += '; domain=' + domain;
    }

    if (httpOnly) {
      cookieString += '; HttpOnly';
    }

    if (secure) {
      cookieString += '; Secure';
    }

    getWindowObj().document.cookie = cookieString;
  },

  parseCookie: function (cookieString: string): Cookie {
    const segments = cookieString.split(';').map((segment) => segment.trim());
    const [name, rawValue] = segments[0].split('=');

    const cookie: Cookie = {
      name,
      value: decodeURIComponent(rawValue),
    };

    segments.slice(1).forEach((segment) => {
      const [key, value] = segment.split('=');
      if (key.toLowerCase() === 'path') {
        cookie.path = value;
      } else if (key.toLowerCase() === 'domain') {
        cookie.domain = value;
      }
      // HttpOnly and Secure flags cannot be parsed in JavaScript
    });

    return cookie;
  },

  deleteCookie: function (name: string): void {
    this.setCookie(name, '', -1);
  },
};

export default cookieUtils;
