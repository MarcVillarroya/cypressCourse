import { CommonPageMethods } from "../commonPage/commonPage.methods";
import { SignupElements} from "./signup.elements";

export class SignupMethods{
    static insertUsername(username){
        SignupElements.textboxes.username.invoke('val', username)
    }

    static insertPassword(password){
        SignupElements.textboxes.password.invoke('val', password)
    }

    static clickOnSignupButton(){
        SignupElements.buttons.signupButton.click()
    }

    static signup(username, password){
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignupButton();
    }

    static VerifySignupAlert(){
        CommonPageMethods.verifyAlert('Sign up successful.');
    }

    static VerifyInvalidSignupAlert(){
        CommonPageMethods.verifyAlert('This user already exist.');
    }
}