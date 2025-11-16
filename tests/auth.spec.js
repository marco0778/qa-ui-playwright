const { expect, test } = require("@playwright/test");
const { log } = require("console");
const {LoginPage} = require("../pages/login");
const {CartPage} = require("../pages/cart");

test.beforeEach(async ({page})=>{
    await page.goto("https://www.saucedemo.com");
    await expect(page.locator(".login_logo")).toBeVisible();
});

test('Login and Logout', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);

    // const usernameField = page.locator("[placeholder='Username']");
    // const passwordField = page.locator("[placeholder='Password']");
    // const loginButton = page.locator("#login-button");

    await loginPage.login("standard_user","secret_sauce");

    await expect(cartPage.cartIcon).toBeVisible();
    console.log("Login Succeed");

    // const logoutButton = page.getByText('Logout');
    // await logoutButton.click();
    await loginPage.logout();
    await expect(loginPage.usernameField).toBeVisible();
    console.log("Logout Succeed");

});