import { Page } from "@playwright/test";

export class Pagination {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  pagination = () => this.page.getByTestId("");
  paginationArrowFirst = () => this.page.getByTestId("");
  paginationArrowNext = () => this.page.getByTestId("");
}
