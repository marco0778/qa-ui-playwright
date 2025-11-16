exports.CartPage = class CartPage {
    constructor(cartClass) {
        this.page = cartClass;
        this.items = cartClass.locator('button:has-text("Add to cart")');
        this.itemsName = cartClass.locator('.inventory_item_name');
        this.itemsRemove = cartClass.locator('button:has-text("Remove")');
        this.cartIcon = cartClass.locator('a.shopping_cart_link');//page.locator('a.shopping_cart_link')
        this.buttonCheckout = cartClass.locator('#checkout');
        this.webPageCheckout = cartClass.getByText('Checkout: Your Information');
    }

    async addToCart(index) {
        const name = await this.itemsName.nth(index).textContent();
        console.log(name);
        await this.items.first().click();
    }

    async removeFromCart(index) {
        const removedItemName = await this.itemsName.nth(index).textContent();
        console.log(removedItemName);
        await this.itemsRemove.nth(index).click();
    }

    async checkoutFromCart() {
        await this.cartIcon.click();
        const getIteminCart = await this.itemsName.allTextContents();
        console.log(getIteminCart);
        await this.buttonCheckout.click();
    }
};