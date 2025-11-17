const { expect, test } = require("@playwright/test");
const { LoginPage } = require("../pages/login");
const { CartPage } = require("../pages/cart");
const { CheckoutPage } = require("../pages/checkout");
const { log } = require("console");


test('Invalid password and username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "tes123");

    await expect(loginPage.errorMessage).toBeVisible();
    console.log("Error message password: ")
    console.log(await loginPage.errorMessage.textContent());

    await loginPage.usernameField.fill("");
    await loginPage.login("user_standard", "secret_sauce");

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

test.only('Checkout Form contains empty field', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const webPageCheckout = new CheckoutPage(page);
    
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    await cartPage.addToCart(1);
    await cartPage.addToCart(1);
    console.log("Success Add to Cart");

    await cartPage.checkoutFromCart();

    await expect(webPageCheckout.firstNameField).toBeVisible();

    await webPageCheckout.fillCheckoutForm("", "Test", "15318");
    await expect(webPageCheckout.errorMessage).toBeVisible();
    console.log(await webPageCheckout.errorMessage.textContent());

    await webPageCheckout.fillCheckoutForm("Test", "", "111111");
    await expect(webPageCheckout.errorMessage).toBeVisible();
    console.log(await webPageCheckout.errorMessage.textContent());

    await webPageCheckout.fillCheckoutForm("Test", "Marco", "");
    await expect(webPageCheckout.errorMessage).toBeVisible();
    console.log(await webPageCheckout.errorMessage.textContent());
});