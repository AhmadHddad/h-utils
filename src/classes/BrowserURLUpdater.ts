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
  private url: URL;
  private reload: boolean;
  private state: any = {};

  constructor(url = window.location.href, reload?: boolean | undefined) {
    if (isNullOrEmptyString(url)) throw new Error('URL must be passed');

    this.url = getUrlObj(url);
    this.reload = !!reload;

    window.addEventListener('popstate', () => {
      if (this.reload) {
        window.location.reload();
      }
    });
  }

  updateURL(): void {
    if (this.reload) {
      window.location.reload();
      return;
    }

    window.history.pushState(this.state, '', this.url.toString());
  }

  setQueryParam(key: string, value: string | undefined): void {
    if (value !== undefined) {
      this.url.searchParams.set(key, value);
    } else {
      this.url.searchParams.delete(key);
    }
    this.updateURL();
  }

  removeQueryParam(key: string): void {
    this.url.searchParams.delete(key);
    this.updateURL();
  }

  getQueryParam(key: string): string | null {
    return this.url.searchParams.get(key);
  }

  getPath(): string {
    return this.url.pathname;
  }

  setPath(path: string): void {
    this.url.pathname = path;
    this.updateURL();
  }

  removePath(): void {
    this.url.pathname = '/';
    this.updateURL();
  }

  setFragment(fragment: string): void {
    this.url.hash = fragment;
    this.updateURL();
  }

  getFragment(): string {
    return this.url.hash;
  }

  removeFragment(): void {
    this.url.hash = '';
    this.updateURL();
  }

  set URL(value: string) {
    this.url = getUrlObj(value);
  }

  get URL(): string {
    return this.url.toString();
  }

  get Reload(): boolean {
    return this.reload;
  }

  set Reload(value: boolean) {
    this.reload = value;
  }

  get State(): any {
    return this.state;
  }

  set State(value: any) {
    this.state = value;
  }
}
