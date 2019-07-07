import {browser} from "protractor";
import {promise} from "selenium-webdriver";

export class AppPage {

  /**
   * Navigates browser to given target.
   */
  public navigateTo(target: string): promise.Promise<any> {
    const path = `${browser.baseUrl}/${target}`;
    return browser.get(path);
  }
}
