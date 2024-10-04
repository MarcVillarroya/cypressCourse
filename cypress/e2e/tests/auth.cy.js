import { CommonPageData } from "../pages/commonPage/commonPage.data"
import { CommonPageMethods } from "../pages/commonPage/commonPage.methods"
import { SignupMethods } from "../pages/signup/signup.methods"
import { Logger } from "../util/logger"

describe(CommonPageData.testSuites.register, ()=>{
    it('Valid registration', ()=>{
        Logger.stepNumber(1)
        Logger.stepDescription("Navigate to main page")
        CommonPageMethods.navigateUrl();

        Logger.stepNumber(2)
        Logger.stepDescription("Click on Signup")
        CommonPageMethods.clickOnSignUp();

        Logger.stepNumber(3)
        Logger.stepDescription("Put Correct Credentials")
        SignupMethods.insertUsername('random')
        SignupMethods.insertPassword('random')

        Logger.stepNumber(4)
        Logger.stepDescription("Click on signup Button")
        SignupMethods.clickOnSignupButton()
        cy.wait(1000)
        Logger.verification('Verify that user receives an alert.')
        SignupMethods.VerifySignupAlert();


    })
})