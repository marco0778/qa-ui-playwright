const { expect, test } = require("@playwright/test");
const {LoginPage} = require("../pages/login");
const { log } = require("console");


test('Invalid password and username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user","tes123");

    await expect(loginPage.errorMessage).toBeVisible();
    console.log("Error message password: ")
    console.log(await loginPage.errorMessage.textContent());

    await loginPage.usernameField.fill("");
    await loginPage.login("user_standard","secret_sauce");

    await expect(loginPage.errorMessage).toBeVisible();
    console.log("Error message username: ")
    console.log(await loginPage.errorMessage.textContent());

});


test('Locked Out User', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("locked_out_user", "secret_sauce")

    await expect(loginPage.errorMessage).toBeVisible();
    console.log("Error message: ")
    console.log(await (loginPage.errorMessage).textContent());
});