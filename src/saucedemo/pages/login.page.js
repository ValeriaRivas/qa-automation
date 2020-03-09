import {Selector, t} from 'testcafe';

class LoginPage {

    /**
     * documentacion
     */
    constructor(){
        this.userNameField = Selector('#user-name');
        this.passwordField = Selector('#password');
        this.loginButton = Selector('.btn_action');
    }
    async login(userName, password){
       /**Solo en una llamada */
        await t.typeText(this.userNameField, userName)
               .typeText(this.passwordField, password)
               .click(this.loginButton);
    }      
}
export default new LoginPage();