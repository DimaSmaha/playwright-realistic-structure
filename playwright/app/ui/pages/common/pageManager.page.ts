import { Page } from "@playwright/test";
import Common from "./common.page";
import LoginPage from "./login.page";

class PageManager extends Common {
  loginPage: LoginPage;

  constructor(page: Page) {
    super(page);
    this.loginPage = new LoginPage(page);
  }
}
export default PageManager;
