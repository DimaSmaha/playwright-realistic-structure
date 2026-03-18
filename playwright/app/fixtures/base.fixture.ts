import { test as base } from "@playwright/test";
import PageManager from "../ui/pages/common/pageManager.page";
import ControllerManager from "../api/controllers/controllerManager.api";

type MyPages = {
  pages: PageManager;
  api: ControllerManager;
};

export const extendedTest = base.extend<MyPages>({
  pages: async ({ page }, use) => {
    const pages = new PageManager(page);
    await use(pages);
    await pages.loginPage.logout();
  },
  api: async ({ page }, use) => {
    const api = new ControllerManager(page);
    await use(api);
  },
});
