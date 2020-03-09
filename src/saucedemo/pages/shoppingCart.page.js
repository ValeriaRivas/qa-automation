import {Selector, t} from 'testcafe';

class ShoppingCartPage {

    /**
     * documentacion
     */
    constructor(){
        this.shoppingCartIcon = Selector('.shopping_cart_link');
        this.yourCartText = Selector('.subheader');
        this.cartCount = Selector('.shopping_cart_badge').withExactText('1'); 
        this.cartCountFull = Selector('.shopping_cart_badge').withExactText('6');
        this.checkoutButton = Selector('.checkout_button').withExactText('CHECKOUT');
    }
    async goShoppingCart(){
       /**Solo en una llamada */
        await t.click(this.shoppingCartIcon);
    }    
    async isShoppingCartPageLoaded(){
        return this.yourCartText.exists;
    }  
    async goCheckoutPage(){
        await t.click(this.checkoutButton);
    }
    async isAnItemInCart(){
        return this.cartCount.exists;
    }
    async areAllItemsInCart(){
        return this.cartCountFull.exists;
    }

    


}
export default new ShoppingCartPage();