import { Page } from "@playwright/test";
import { TestController } from "./testController.api";

class ControllerManager {
  testController: TestController;
  constructor(page: Page) {
    this.testController = new TestController(page);
  }
}

export default ControllerManager;
