import { test } from "playwright/app/fixtures/mergeFixtures";

test.describe("Make an Order tests", () => {
  test.beforeEach(async ({ pages }) => {
    await pages.loginPage.loginAs("USER");
  });

  test("Make an order", async ({ page, pages }) => {});
});
