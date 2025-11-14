const { expect, test } = require("@playwright/test");
const { log } = require("console");

test.beforeEach(async ({page})=>{
    await page.goto("https://www.saucedemo.com");
    await expect(page.locator(".login_logo")).toBeVisible();
});

test('Login and Logout', async ({ page }) => {

    const usernameField = page.locator("[placeholder='Username']");
    const passwordField = page.locator("[placeholder='Password']");
    const loginButton = page.locator("#login-button");

    await usernameField.fill("standard_user");
    await passwordField.fill("secret_sauce");
    await loginButton.click();

    await expect(page.locator(".shopping_cart_container")).toBeVisible();
    console.log("Login Succeed");

    const expandMenuButton = page.locator("#react-burger-menu-btn");
    await expandMenuButton.click();

    const logoutButton = page.getByText('Logout');
    await logoutButton.click();
    await expect(page.locator(".login_logo")).toBeVisible();
    await expect(usernameField).toBeVisible();
    console.log("Logout Succeed");

});