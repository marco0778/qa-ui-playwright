exports.CheckoutPage = class CheckoutPage{
    constructor(constructorCheckout){
        this.page = constructorCheckout;
        this.firstNameField = constructorCheckout.getByPlaceholder('First Name'); //page.getByPlaceholder('First Name')
        this.lastNameField = constructorCheckout.getByPlaceholder('Last Name');
        this.zipCode = constructorCheckout.getByPlaceholder('Zip/Postal Code');//page.getByPlaceholder('Zip/Postal Code')
        this.errorMessage = constructorCheckout.locator('[data-test="error"]');//page.locator(".error-message-container.error")
        this.buttonContinue = constructorCheckout.locator('[name="continue"]');//page.locator('[name="continue"]')
        this.halamanCheckout = constructorCheckout.locator('.title');
        this.totalPrice = constructorCheckout.locator('[data-test="total-label"]'); //page.getByTestId('total-label')
        this.buttonFinish = constructorCheckout.locator('#finish');
    }

    async fillCheckoutForm(firstName, lastName, codeZIP){
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.zipCode.fill(codeZIP);
        await this.buttonContinue.click();
        // const showErrorMessage = this.errorMessage.textContent();
        // console.log(showErrorMessage);
    }

    async toConfirmtheCheckout(){
        const b = await this.totalPrice.textContent();
        const number = b.match(/\d+(\.\d+)?/)[0];
        const total = parseFloat(number);

        if (total > 0) {
            await this.buttonFinish.click();
        }
        else{
            console.log("Assumed to be failed test");
        }
    }


};