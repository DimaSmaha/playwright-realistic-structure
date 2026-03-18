import { Page } from "@playwright/test";

abstract class Common {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}

export default Common;
