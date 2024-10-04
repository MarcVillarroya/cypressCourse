import { CommonPageData } from "../pages/commonPage/commonPage.data";
import { CommonPageMethods } from "../pages/commonPage/commonPage.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.login,()=>(
    it ('Login with valid credentials', ()=>{
        Logger.stepNumber(1)
        Logger.stepDescription("Navigate to main page")
        CommonPageMethods.navigateUrl();

        Logger.stepNumber(2)
        Logger.stepDescription("Click on Login")
        CommonPageMethods.clickOnLogin();

        Logger.stepNumber(3)
        Logger.stepDescription("Put Correct Credentials")
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(4)
        Logger.stepDescription("Click on login")
        LoginMethods.clickOnLoginButton()
        Logger.verification('Verify Welcome to the page')
        CommonPageMethods.verifyWelcome(LoginData.validCredentials.username)
    }),

    it ('Login with invalid credentials', ()=>{
        Logger.stepNumber(1)
        Logger.stepDescription("Navigate to main page")
        CommonPageMethods.navigateUrl();

        Logger.stepNumber(2)
        Logger.stepDescription("Click on Login")
        CommonPageMethods.clickOnLogin();

        Logger.stepNumber(3)
        Logger.stepDescription("Put Incorrect Credentials")
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.invalidCredentials.password)

        Logger.stepNumber(4)
        Logger.stepDescription("Click on login")
        LoginMethods.clickOnLoginButton()
        Logger.verification('Verify alert')
        LoginMethods.VerifyIncorrectLoginAlert()
    })
))