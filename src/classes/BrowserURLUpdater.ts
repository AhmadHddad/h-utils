import getWindow from '../utils/browser/getWindow';
import getUrlObj from '../utils/route/getUrlObj';
import isNullOrEmptyString from '../utils/validation/isNullOrEmptyString';

const window = getWindow();

/**
 *@important --Browser Only --
 *@description A utility class for handling and updating URL parameters, paths, and fragments in the browser with/without page refresh."
 *@example const browserUrl = new BrowserURLUpdater("www.foo.com");
 * browserUrl.setQueryParam("bar", "1"); // will set the url to "www.foo.com/?bar=1" and update the url without refresh.
 *
 */
export default class BrowserURLUpdater {
  private _url: URL;
  private _reload: boolean;
  private _state: any = {};

  constructor(url = window.location.href, reloadOnEveryChange?: boolean | undefined) {
    if (isNullOrEmptyString(url)) throw new Error('URL must be passed');

    this._url = getUrlObj(url);
    this._reload = !!reloadOnEveryChange;
  }

  updateURL(): void {
    if (this._reload) {
      window.location.reload();
      return;
    }

    window.history.pushState(this._state, '', this._url.toString());
  }

  setQueryParam(key: string, value: string | undefined): void {
    if (value !== undefined) {
      this._url.searchParams.set(key, value);
    } else {
      this._url.searchParams.delete(key);
    }
    this.updateURL();
  }

  removeQueryParam(key: string): void {
    this._url.searchParams.delete(key);
    this.updateURL();
  }

  getQueryParam(key: string): string | null {
    return this._url.searchParams.get(key);
  }

  getPath(): string {
    return this._url.pathname;
  }

  setPath(path: string): void {
    this._url.pathname = path;
    this.updateURL();
  }

  removePath(): void {
    this._url.pathname = '/';
    this.updateURL();
  }

  setFragment(fragment: string): void {
    this._url.hash = fragment;
    this.updateURL();
  }

  getFragment(): string {
    return this._url.hash;
  }

  removeFragment(): void {
    this._url.hash = '';
    this.updateURL();
  }

  set url(value: string) {
    this._url = getUrlObj(value);
  }

  get url(): string {
    return this._url.toString();
  }

  get reload(): boolean {
    return this._reload;
  }

  set reload(value: boolean) {
    this._reload = value;
  }

  get state(): any {
    return this._state;
  }

  set state(value: any) {
    this._state = value;
  }
}
