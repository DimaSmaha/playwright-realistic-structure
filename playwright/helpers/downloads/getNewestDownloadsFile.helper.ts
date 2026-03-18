// eslint-disable-next-line import/no-import-module-exports
import fs from "fs";
/**
 * We need this functionality to get the latest file in downloads folder;
 */

export const getNewestDownloadsFile = (pathToDownloadsFolder: string) => {
  const files = fs.readdirSync(pathToDownloadsFolder);
  const newestFile = files.filter((file) => file.includes(".pdf"));

  return `${pathToDownloadsFolder}/${newestFile[0]}`;
};
