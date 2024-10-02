describe('Allure Test', () => {
  it('should pass and generate results', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
    cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com');
  });
});
