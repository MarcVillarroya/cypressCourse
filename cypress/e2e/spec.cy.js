const { LoginMethods } = require("./pages/login/login.methods");

describe('Invalid login', () => {
  it('should fail login given incorrect credentials', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login('username', 'password')
    cy.wait(5000)
  });
});
