import { Logger } from "../../util/logger";
import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val', username)
    }

    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val', password)
    }

    static clickOnLoginButton(){
        LoginElements.buttons.loginButton.click()
    }

    static login(username, password){
        Logger.subStep('Insert username')
        this.insertUsername(username);
        Logger.subStep('insert password')
        this.insertPassword(password);
        Logger.subStep('click on loggin button')
        this.clickOnLoginButton();
    }
}