import {Selector, t} from 'testcafe';

class OverviewPage {

    /**
     * documentacion
     */
    constructor(){
        this.overviewLabel = Selector('.checkout_summary_container');
        this.finishButton = Selector('.cart_button').withExactText('FINISH');
        this.finishLabel = Selector('.subheader').withExactText('Finish');
        this.cartItem0 = Selector('#item_0_title_link');
        this.cartItem1 = Selector('#item_1_title_link');
        this.cartItem2 = Selector('#item_2_title_link');
        this.cartItem3 = Selector('#item_3_title_link');
        this.cartItem4 = Selector('#item_4_title_link');
        this.cartItem5 = Selector('#item_5_title_link');
    }
    async isCheckoutOverviewLoaded(){
        return this.overviewLabel.exists;
    }
    async clickFinishOrderButton(){
        await t.click(this.finishButton);
    }
    async isOrderFinished(){
        return this.finishLabel.exists;
    }
    async allItemsAddedMatch(){
        return this.cartItem0.exists && this.cartItem1.exists && this.cartItem2.exists && this.cartItem3.exists
                && this.cartItem4.exists && this.cartItem5.exists;

    }

}
export default new OverviewPage();