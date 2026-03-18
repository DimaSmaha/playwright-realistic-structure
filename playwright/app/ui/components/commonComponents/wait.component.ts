import { Page } from "@playwright/test";

export class Wait {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitFor(ms: number) {
    await this.page.waitForTimeout(ms);
    return this;
  }
}
