import playwrightConfig from "playwright.config";
import { expect, Page } from "@playwright/test";
import { getNewestDownloadsFile } from "./getNewestDownloadsFile.helper";
import { readPDF } from "./readPDF.helper";
import { waitForFileDownload } from "./waitForFileDownload.helper";

// eslint-disable-next-line no-control-regex
const downloadsFolder = playwrightConfig.use?.launchOptions?.downloadsPath || "playwright/downloads";

function normalizeText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

async function PDFContainsText(value: string) {
  const newestFileLocation = getNewestDownloadsFile(downloadsFolder);
  if (!newestFileLocation) throw new Error("No downloaded PDF file found in the downloads folder");
  const pdfText = await readPDF(newestFileLocation);
  const normalizedPDFText = normalizeText(pdfText);
  const normalizedValue = normalizeText(value);
  expect(normalizedPDFText).toContain(normalizedValue);
}

let waitFlag = false; // In case we want to call this function twice, we wont be required to wait for api call 2nd time

//* * Verify some PDF value using its column name and expected value */
export const verifyPDFValues = async (page: Page, column: string, value: string) => {
  if (!waitFlag) {
    await waitForFileDownload(page);
    waitFlag = true;
  }
  await PDFContainsText(column);
  await PDFContainsText(value);
};

export function resetWaitFlag() {
  waitFlag = false;
}
