const { LoginMethods } = require("./pages/login/login.methods");

describe('login', () => {
  it('should fail login given incorrect credentials', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login('arco', 'arco')
    cy.get('a#nameofuser').should('contain.text', 'arco')
  });
});
