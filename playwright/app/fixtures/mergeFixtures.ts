import { mergeTests } from "@playwright/test";
import { extendedTest } from "./base.fixture";

export const test = mergeTests(extendedTest);
export { expect, Page, test as beforeAll } from "@playwright/test";
