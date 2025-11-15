exports.CartPage = class CartPage {
    constructor(cartClass) {
        this.page = cartClass;
        this.items = cartClass.locator('button:has-text("Add to cart")');
        this.itemsName = cartClass.locator('.inventory_item_name');
        this.itemsRemove = cartClass.locator('button:has-text("Remove")');
        this.cartIcon = cartClass.locator('a.shopping_cart_link');//page.locator('a.shopping_cart_link')
        this.buttonCheckout = cartClass.locator('#checkout');
        this.checkOutPage = cartClass.getByText('Checkout: Your Information');
    }

    async addToCartbyIndex(index) {
        const name = await this.itemsName.nth(index).textContent();
        console.log(name);
        await this.items.first().click();
    }

    async removeFromCartbyIndex(index) {
        await this.itemsRemove.nth(index).click();
        const removedItemName = await this.itemsName.nth(index).textContent();
        console.log(removedItemName);
    }

    async checkoutFromCart() { 
        await this.cartIcon.click();
        const getIteminCart = await this.itemsName.allTextContents();
        console.log(getIteminCart);
        await this.buttonCheckout.click();
    }
};