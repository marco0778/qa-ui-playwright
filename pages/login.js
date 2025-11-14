exports.LoginPage = class LoginPage {
  constructor(constructorPage) {
    this.page = constructorPage;
    this.usernameField = constructorPage.locator('[placeholder="Username"]');
    this.passwordField = constructorPage.locator('[placeholder="Password"]');
    this.loginButton = constructorPage.locator('#login-button');
    this.errorMessage = constructorPage.locator('.error-message-container h3');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
};