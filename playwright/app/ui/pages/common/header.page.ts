import { Page } from "@playwright/test";
import Common from "./common.page";
import { Wait } from "../../components/commonComponents/wait.component";
import { Loader } from "../../components/commonComponents/loader.component";
import { PageActions } from "../../components/commonComponents/pageActions.component";
import { TableActionButtons } from "../../components/commonComponents/tableButtons.component";
import { SelectOptions } from "../../components/commonComponents/selectOptions.component";
import { LocatorsBuilders } from "../../components/commonComponents/locatorBuilders.component";

abstract class Header extends Common {
  public wait: Wait;
  public loader: Loader;
  public pageActions: PageActions;
  public tableButtons: TableActionButtons;
  public selectOptions: SelectOptions;
  public locatorBuilders: LocatorsBuilders;

  constructor(page: Page) {
    super(page);
    this.wait = new Wait(page);
    this.loader = new Loader(page);
    this.pageActions = new PageActions(page);
    this.tableButtons = new TableActionButtons(page);
    this.selectOptions = new SelectOptions(page);
    this.locatorBuilders = new LocatorsBuilders(page);
  }

  logoutButton = () => this.page.getByTestId("");

  async goHome() {
    await this.page.goto("/");
  }

  async logout() {
    await this.logoutButton().click();
  }
}

export default Header;
