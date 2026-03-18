/**
 * Special test file to run the Playwright Agents
 * https://playwright.dev/docs/test-agents
 * A seed test that sets up the environment necessary to interact with your app
 */

import { test } from "playwright/app/fixtures/mergeFixtures";

test.describe("Test group", () => {
  test("seed", async ({ page }) => {
    // generate code here.
  });
});
