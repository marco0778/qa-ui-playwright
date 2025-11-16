const { expect, test } = require("@playwright/test");
const { LoginPage } = require("../pages/login");
const { CartPage } = require("../pages/cart");
const { CheckoutPage } = require("../pages/checkout");
const { log } = require("console");

test('Should complete checkout flow with multiple items', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    // const getRemoveText = await page.locator('button:has-text("Remove")');
    // console.log("To check whether remove button is exist :" + await getRemoveText.allTextContents());

    const count = await cartPage.items.count();
    for (let index = 0; index < count; index++) {
        await cartPage.addToCart(index);
    }


    //console.log("\nButton remove checked: \n"+await getRemoveText.allTextContents());
    console.log("\nRemoved Items : ");
    await cartPage.removeFromCart(1);
    await cartPage.removeFromCart(0);
    await expect(cartPage.cartIcon).toBeVisible();


    await cartPage.checkoutFromCart();
    await expect(cartPage.webPageCheckout).toBeVisible();

    await checkoutPage.fillCheckoutForm("marco", "test", "test");

    await expect(checkoutPage.halamanCheckout).toBeVisible();
    //console.log(await checkoutPage.totalPrice.textContent());
    const totalAmount = await checkoutPage.getTotalAmount();
    console.log("Your Total Amount is : " + totalAmount);

    expect(totalAmount).toBeGreaterThan(0);

    await checkoutPage.finishCheckout();
    console.log("Finish end to end");

    await expect(page.getByText("Thank you for your order!")).toBeVisible();


});