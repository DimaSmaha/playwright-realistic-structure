import { Page } from "@playwright/test";

export class LocatorsBuilders {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /** Locator builders  */
  inputByLabelTestId = (labelTestId: string) => this.page.locator(``).first();
  selectBoxByLabelTestId = (labelTestId: string) => this.page.locator(``).first();
}
