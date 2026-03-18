import { Page, expect } from "@playwright/test";

export class Loader {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  loader = () => this.page.getByTestId("");

  async isVisible() {
    await expect(this.loader().first()).toBeVisible();
  }

  async loaderShouldNotExist() {
    await expect(this.loader()).toHaveCount(0);
  }

  async loaderShouldNotBeVisible() {
    await expect(this.loader()).toBeHidden();
  }

  async isLoaded() {
    await this.loaderShouldNotExist();
    return this;
  }
}
