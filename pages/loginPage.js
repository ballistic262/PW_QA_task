exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginWrapper = this.page.locator('[id="login_button_container"]');
    this.usernameInput = this.loginWrapper.locator('[data-test="username"]');
    this.passwordInput = this.loginWrapper.locator('[data-test="password"]');
    this.loginBtn = this.loginWrapper.locator('[data-test="login-button"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickOnLoginButton() {
    await this.loginBtn.click();
  }

  async typeUsername(username) {
    await this.usernameInput.type(username);
  }

  async typePassword(password) {
    await this.passwordInput.type(password);
  }

  async loginUser({ username, password }) {
    await this.typeUsername(username);
    await this.typePassword(password);

    await this.clickOnLoginButton();
  }
};
