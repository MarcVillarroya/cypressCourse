const { CartMethods } = require("./pages/cart/cart.methods");
const { HomeMethods } = require("./pages/home/home.methods");
const { LoginMethods } = require("./pages/login/login.methods");
const { SignupMethods } = require("./pages/signup/signup.methods");

describe('SignUp', () => {
  it('should signUp correctly with correct credentials', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#signInModal"]').click()
    SignupMethods.signup('arco', 'arco')

    
  });
});


describe('login', () => {
  it('should login given correct credentials', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login('arco', 'arco')
    cy.get('a#nameofuser').should('contain.text', 'arco')
  });
});

describe('Click on product', () => {
  it('should show product details', () => {
    cy.visit('https://www.demoblaze.com/')
    HomeMethods.clickOnProductLink('Iphone 6 32gb')
    cy.wait(5000)
  });
});


describe('Click on product', () => {
  it('should show product details', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.wait(30000)
    CartMethods.clickOnDeleteLink('Nokia lumia 1520')
    cy.wait(20000)
  });
});
