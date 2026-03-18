// eslint-disable-next-line import/no-import-module-exports, import/no-duplicates
import fs from "fs";

export const deleteFolder = (folderName: string) => {
  if (fs.existsSync(folderName)) {
    console.log("deleting folder %s", folderName);

    return new Promise((resolve, reject) => {
      fs.rm(
        folderName,
        { maxRetries: 10, recursive: true },
        // eslint-disable-next-line consistent-return
        (err: NodeJS.ErrnoException | null) => {
          if (err) {
            console.error(`ERROR: ${err}`);

            return reject(err);
          }

          resolve(null);
        },
      );
    });
  }
  return null;
};
