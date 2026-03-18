import { Page, Download } from "@playwright/test";
import playwrightConfig from "playwright.config";

/**
 * Waits for a PDF or CSV to download.
 * To start and finish downloading using Playwright's download event.
 * @param page Playwright Page object
 * @returns The Playwright Download object
 */
export const waitForFileDownload = async (page: Page): Promise<Download> => {
  const downloadsFolder = playwrightConfig.use?.launchOptions?.downloadsPath || "playwright/downloads";

  const download = await page.waitForEvent("download", { timeout: 60000 });
  await download.saveAs(`${downloadsFolder}/${download.suggestedFilename()}`);
  await page.waitForTimeout(1500); // Wait for filesystem update if needed
  return download;
};
