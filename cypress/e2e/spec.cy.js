const { CartMethods } = require("./pages/cart/cart.methods");
const { HomeMethods } = require("./pages/home/home.methods");
const { LoginMethods } = require("./pages/login/login.methods");
const { SignupMethods } = require("./pages/signup/signup.methods");
const { Logger } = require("./util/logger");

describe('SignUp', () => {
  it('should signUp correctly with correct credentials', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#signInModal"]').click()
    SignupMethods.signup('arco', 'arco')

    
  });
});


describe('login', () => {
  it('should login given correct credentials', () => {
    

    Logger.stepNumber(1)
    Logger.stepDescription("navigate to Demoblaze")
    cy.visit('https://www.demoblaze.com/')


    Logger.stepNumber(2)
    Logger.stepDescription('click en loguin to Demoblaze')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login('arco', 'arco')
    cy.get('a#nameofuser').should('contain.text', 'arco')
    Logger.verification('Should say "Welcome y el nombre"')
  });
});

describe('Click on product', () => {
  it('should show product details', () => {
    cy.visit('https://www.demoblaze.com/')
    HomeMethods.clickOnProductLink('Iphone 6 32gb')
    cy.wait(5000)
  });
});


