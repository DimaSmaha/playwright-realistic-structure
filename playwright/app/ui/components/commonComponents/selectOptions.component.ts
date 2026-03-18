import { Page, expect } from "@playwright/test";

export class SelectOptions {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  selectOption = () => this.page.getByTestId("");
  selectOptionByValue = (value: string) => this.selectOption().getByText(value, { exact: true });
  selectOptionByNumber = (value: number) => this.selectOption().nth(value);

  async selectOptionByNumberWithKeys(value: number) {
    await expect(this.selectOption().first()).toBeVisible();
    for (let i = 0; i < value; i++) {
      // eslint-disable-next-line no-await-in-loop
      await this.page.keyboard.press("ArrowDown");
    }
    await this.page.keyboard.press("Enter");
  }

  async selectAsyncOptionByNumber(value: number) {
    await this.selectOptionByNumber(value).click();
  }

  async selectFirstAsyncOption() {
    await expect(this.selectOption().nth(-1)).toBeVisible();
    await this.page.keyboard.press("Enter");
  }

  async selectAsyncOptionByNumberWithKeys(value: number) {
    await expect(this.selectOption().nth(-1)).toBeVisible();
    for (let i = 0; i < value; i++) {
      // eslint-disable-next-line no-await-in-loop
      await this.page.keyboard.press("ArrowDown");
    }
    await this.page.keyboard.press("Enter");
  }
}
