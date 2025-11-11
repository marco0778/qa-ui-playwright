const { expect, test } = require("@playwright/test");
const { log } = require("console");

test('Invalid password and username', async ({ browser }) => {
    const context = await browser.newContext();
    const webPage = await context.newPage();
    await webPage.goto("https://www.saucedemo.com");

    await expect(webPage.locator(".login_logo")).toBeVisible();
    const usernameField = webPage.locator("[placeholder='Username']");
    const passwordField = webPage.locator("[placeholder='Password']");
    const loginButton = webPage.locator("#login-button");

    await usernameField.fill("standard_user");
    await passwordField.fill("tes123");
    await loginButton.click();

    await expect(webPage.locator('h3').nth(0)).toBeVisible();
    console.log("Error message password: ")
    console.log(await webPage.locator('.error-message-container h3').textContent());

    await usernameField.fill("");
    await usernameField.fill("user_standard");
    await passwordField.fill("secret_sauce");
    await loginButton.click();

    await expect(webPage.locator('h3').nth(0)).toBeVisible();
    console.log("Error message username: ")
    console.log(await webPage.locator('.error-message-container h3').textContent());

});


test('Locked Out User', async ({ browser }) => {
    const context = await browser.newContext();
    const webPage = await context.newPage();
    await webPage.goto("https://www.saucedemo.com");

    await expect(webPage.locator(".login_logo")).toBeVisible();
    const usernameField = webPage.locator("[placeholder='Username']");
    const passwordField = webPage.locator("[placeholder='Password']");
    const loginButton = webPage.locator("#login-button");

    await usernameField.fill("locked_out_user");
    await passwordField.fill("secret_sauce");
    await loginButton.click();

    await expect(webPage.locator('h3').nth(0)).toBeVisible();
    console.log("Error message: ")
    console.log(await webPage.locator('.error-message-container h3').textContent());
});