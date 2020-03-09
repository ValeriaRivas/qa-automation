import {Selector, t} from 'testcafe';

class MainPage{
    constructor(){
        //var counter = 0;
        this.productsLabel = Selector('.product_label');

        this.burgerButton = Selector('.bm-burger-button');
        this.logoutLink = Selector('.menu-item').withExactText('Logout');
        this.inventoryItem0 = Selector('.btn_inventory').nth(0);
        this.inventoryItem1 = Selector('.btn_inventory').nth(1);
        this.inventoryItem2 = Selector('.btn_inventory').nth(2);
        this.inventoryItem3 = Selector('.btn_inventory').nth(3);
        this.inventoryItem4 = Selector('.btn_inventory').nth(4);
        this.inventoryItem5 = Selector('.btn_inventory').nth(5);
    }
    async isMainPageLoaded(){

        return this.productsLabel.exists;
       /*
        return (
        await t.expect(this.todoistIcon.exists).ok()
        && await t.expect(this.element2.exists.ok())
        );
        */
    }

    async addAnItem(){
        return t.click(this.inventoryItem0);   
    }
    async logout(){
        await t.click(this.burgerButton)
               .click(this.logoutLink);
    }

    async addAllItemstoCart(){   
        return t.click(this.inventoryItem0)
                .click(this.inventoryItem1)
                .click(this.inventoryItem2)
                .click(this.inventoryItem3)
                .click(this.inventoryItem4)
                .click(this.inventoryItem5);
    }

}
export default new MainPage();