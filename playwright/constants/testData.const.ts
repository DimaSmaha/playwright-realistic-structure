import { generateUniqueNumber } from "playwright/utils/dataGeneration.utils";

export const randomOrderName = () => `TEST_ORDER_${generateUniqueNumber()}`;
