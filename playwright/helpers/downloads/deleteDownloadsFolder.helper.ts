import playwrightConfig from "playwright.config";
import { deleteFolder } from "./deleteFolder.helper";

export const deleteDownloadsFolder = () => {
  const downloadsFolder = playwrightConfig.use?.launchOptions?.downloadsPath || "playwright/downloads";

  deleteFolder(downloadsFolder as string);
};
