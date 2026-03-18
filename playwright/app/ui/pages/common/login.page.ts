import { expect } from "@playwright/test";
import { getEnvVariables } from "playwright/helpers/getEnvVariables/getEnvVariables.helper";
import Header from "./header.page";

class LoginPage extends Header {
  emailInput = () => this.page.locator("");
  passwordInput = () => this.page.locator("");
  loginButton = () => this.page.locator("");
  loggedInLogo = () => this.page.locator("");

  async login(email: string, password: string) {
    await this.page.goto("/");
    await this.loader.isLoaded();
    // eslint-disable-next-line playwright/no-networkidle
    await this.page.waitForLoadState("networkidle");
    await this.loader.isLoaded();
    await this.emailInput().fill(email);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
    await expect(this.loggedInLogo()).toBeVisible();
  }

  async loginAs(userType: "USER" | "ADMIN") {
    // TODO: implement multiple usertypes
    const ENV = getEnvVariables.env;
    let email;
    let password;
    if (ENV === "dev") {
      email = getEnvVariables.userEmailDev;
      password = getEnvVariables.userPassDev;
    }
    if (ENV === "qa") {
      email = getEnvVariables.userEmailQa;
      password = getEnvVariables.userPassQa;
    }
    await this.login(email as string, password as string);
  }
}

export default LoginPage;
