import { CommonPageData } from "./commonPage.data";
import { CommonPageElements } from "./commonPage.elements";

export class CommonPageMethods{
    static navigateUrl(){
        cy.clearCookies()
        cy.visit(CommonPageData.url);
    }
    static clickOnHome(){
        CommonPageElements.topLinks.home.click()
    }
    static clickOnContact(){
        CommonPageElements.topLinks.contact.click()
    } 
    static clickOnCart(){
        CommonPageElements.topLinks.cart.click()
    } 
    static clickOnLogin(){
        CommonPageElements.topLinks.login.click()
    } 
    static clickOnSignUp(){
        CommonPageElements.topLinks.signup.click()
    }
    static clickOnAbout(){
        CommonPageElements.topLinks.about.click()
    } 
    static clickOnLogout(){
        CommonPageElements.topLinks.logout.click()
    } 
    static verifyAlert(expectedMessage){
        cy.on('window:alert', (str) =>{
            expect(str).to.equal(expectedMessage)
        })
    }
}