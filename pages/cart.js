exports.CartPage = class CartPage {
    constructor(cartClass) {
        this.page = cartClass;
        this.items = cartClass.getByText('Add to cart');
        this.itemsRemove = cartClass.locator('button:has-text("Remove")');
    }

    async addToCart() {

    }

    async removeFromCart() {

    }

    async checkoutFromCart() {

    }
};