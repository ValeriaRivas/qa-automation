import {Selector, t} from 'testcafe';

class LoginInvalidPage {

    /**
     * documentacion
     */
    constructor(){
        this.userNameField = Selector('#user-name');
        this.passwordField = Selector('#password');
        this.loginButton = Selector('.btn_action');
        this.errorIcon = Selector('.error-button');
    }
    async loginInvalid(userName, wrongPassword){
       /**Solo en una llamada */
        await t.typeText(this.userNameField, userName)
            .typeText(this.passwordField, wrongPassword)
            .click(this.loginButton);
    }    
    async isErrorDisplayed(){
        return this.errorIcon.exists;
    }  
}
export default new LoginInvalidPage();