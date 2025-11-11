const { expect, test } = require("@playwright/test");
const { log } = require("console");

test('Login and Logout', async ({ browser }) => {
    const context = await browser.newContext();
    const webPage = await context.newPage();
    await webPage.goto("https://www.saucedemo.com");

    await expect(webPage.locator(".login_logo")).toBeVisible();
    const usernameField = webPage.locator("[placeholder='Username']");
    const passwordField = webPage.locator("[placeholder='Password']");
    const loginButton = webPage.locator("#login-button");

    await usernameField.fill("standard_user");
    await passwordField.fill("secret_sauce");
    await loginButton.click();

    await expect(webPage.locator(".shopping_cart_container")).toBeVisible();
    console.log("Login Succeed");

    const expandMenuButton = webPage.locator("#react-burger-menu-btn");

    await expandMenuButton.click();

    const logoutButton = webPage.getByText('Logout');

    await logoutButton.click();
    await expect(webPage.locator(".login_logo")).toBeVisible();
    await expect(usernameField).toBeVisible();
    console.log("Logout Succeed");

});