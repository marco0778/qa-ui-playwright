const { expect, test } = require("@playwright/test");
const { LoginPage } = require("../pages/login");
const { CartPage } = require("../pages/cart");
const { CheckoutPage } = require("../pages/checkout");
const { log } = require("console");

test('Add items to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    const getRemoveText = await page.locator('button:has-text("Remove")');
    // console.log(await getRemoveText.allTextContents());

    for (let index = 0; index < 4; index++) {
        await cartPage.addToCartbyIndex(index);
    }

    //console.log("\nButton remove checked: \n"+await getRemoveText.allTextContents());
    console.log("\nRemoved Items : ");
    await cartPage.removeFromCartbyIndex(1);
    await cartPage.removeFromCartbyIndex(0);
    await expect(cartPage.cartIcon).toBeVisible();


    await cartPage.checkoutFromCart();
    await expect(cartPage.checkOutPage).toBeVisible();

    await checkoutPage.fillCheckoutForm("marco","test","test");

    await expect(checkoutPage.halamanCheckout).toBeVisible();
    //console.log(await checkoutPage.totalPrice.textContent());
    await checkoutPage.toConfirmtheCheckout();
    console.log("Finish end to end");
});