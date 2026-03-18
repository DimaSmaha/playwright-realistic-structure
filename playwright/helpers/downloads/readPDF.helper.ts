import fs from "fs";
import path from "path";
// import pdfParse from "pdf-parse";
// eslint-disable-next-line  @typescript-eslint/no-var-requires
const pdfParse = require("pdf-parse");

/**
 * Reads and parses a PDF file, returning its text content.
 * @param pathToPdf Absolute or relative path to the PDF file.
 * @returns Promise<string> with the PDF text content.
 */
export const readPDF = async (pathToPdf: string): Promise<string> => {
  const pdfPath = path.resolve(pathToPdf);
  const dataBuffer = fs.readFileSync(pdfPath);
  const { text } = await pdfParse(dataBuffer);
  return text;
};
