import { Page, expect } from "@playwright/test";
import { Loader } from "./loader.component";
import { Wait } from "./wait.component";

export class PageActions {
  page: Page;
  loader: Loader;
  wait: Wait;

  constructor(page: Page) {
    this.page = page;
    this.loader = new Loader(page);
    this.wait = new Wait(page);
  }

  async reloadPage() {
    await this.page.reload();
    await this.loader.isLoaded();
    return this;
  }

  async urlContains(val: string) {
    await expect(this.page).toHaveURL(new RegExp(val));
  }

  async setQueryParameter(parameter: string, value: string) {
    const url = `?${parameter}=${value}`;
    await this.page.goto(url);
    return this;
  }

  async pressDownArrow(pressTimes: number) {
    for (let i = 0; i < pressTimes; i++) {
      // eslint-disable-next-line no-await-in-loop
      await this.page.keyboard.press("ArrowDown");
    }
  }

  async verifyLastCopiedTextInClipboard(text: string) {
    const copiedText = await this.page.evaluate(() => navigator.clipboard.readText());
    expect(copiedText).toContain(text);
  }
}
