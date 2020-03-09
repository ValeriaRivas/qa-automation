import {Selector, t} from 'testcafe';

class CheckoutPage {

    /**
     * documentacion
     */
    constructor(){
        this.checkoutHeaderLabel = Selector('.subheader').withExactText('Checkout: Your Information');
        this.continueButton = Selector('.cart_button');
        this.firstNameField = Selector('#first-name');
        this.lastNameField = Selector('#last-name');
        this.zipCodeField = Selector('#postal-code'); 
        this.errorIconCheckout = Selector('.error-button');
        

    }
    async isCheckoutPageLoaded(){
       /**Solo en una llamada */
        await this.checkoutHeaderLabel.exists;
    }    
    async clickInContinueCheckout(){
         await t.click(this.continueButton);
    }  
    async writeInfoNames(firstName, secondName){
        await t.typeText(this.firstNameField, firstName);
        await t.typeText(this.lastNameField, secondName);
    }
    async writeZipCode(zipCode){
        await t.typeText(this.zipCodeField, zipCode);
    }
    async isErrorDisplayedCheckout(){
        return this.errorIconCheckout.exists;
    }
}
export default new CheckoutPage();