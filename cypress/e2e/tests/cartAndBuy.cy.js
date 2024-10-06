import { CommonPageData } from "../pages/commonPage/commonPage.data";
import { CommonPageMethods } from "../pages/commonPage/commonPage.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { ProductDetailsMethods } from "../pages/productDetails/productDetails.methods";
import { Logger } from "../util/logger";

const username = LoginData.validCredentials;
describe(CommonPageData.testSuites.catalogeAndBuy,() => {
    it('Category navegation', () => {

        Logger.stepNumber(1)
        Logger.stepDescription("Navigate to main page")
        CommonPageMethods.navigateUrl()
        Logger.subStep('Click on Login')
        CommonPageMethods.clickOnLogin()
        LoginMethods.login(username.username, username.password)

        Logger.stepNumber(2)
        Logger.stepDescription("Navigate main page")
        CommonPageMethods.clickOnHome()
        
        Logger.stepNumber(3)
        Logger.stepDescription("Select a category")
        HomeMethods.clickOnMonitorsOption()
        Logger.verification('The list is showing correct products')
        HomeMethods.verifyProductDisplay('Apple monitor 24')
        HomeMethods.verifyProductDisplay('ASUS Full HD')


    });

    it('Add product to the cart', () => {

        Logger.stepNumber(1)
        Logger.stepDescription("Navigate to main page")
        CommonPageMethods.navigateUrl()
        Logger.subStep('Click on Login')
        CommonPageMethods.clickOnLogin()
        LoginMethods.login(username.username, username.password)

        Logger.stepNumber(2)
        Logger.stepDescription("Navigate main page")
        CommonPageMethods.clickOnHome()
        
        Logger.stepNumber(3)
        Logger.stepDescription("Select a category")
        HomeMethods.clickOnMonitorsOption()
        Logger.verification('The list is showing correct products')
        HomeMethods.verifyProductDisplay('Apple monitor 24')
        HomeMethods.verifyProductDisplay('ASUS Full HD')

        Logger.stepNumber(4)
        Logger.stepDescription("Select a product")
        HomeMethods.clickOnProductLink('Apple monitor 24')

        Logger.stepNumber(5)
        Logger.stepDescription("Verify detailing page and click on add to cart")
        ProductDetailsMethods.clickAddToCart()
        

    });
})
