const indexPage = Cypress.env('indexPage');
const computer = Cypress.env('computer');

describe('Google Suggestions', () => {
  it('The zip code is a valid location.', () => {
    cy.visit(indexPage);
    cy.viewport(computer.width, computer.height);
    cy.get('[data-cy="places-search"]').type('875');
    cy.get('li[data-cy]').first().click();
    cy.wait(3000)
    cy.get('[data-cy="button_understood"]').scrollIntoView().click();
    cy.wait(2000)
  });
  it('Zip code is an invalid location', () => {
    cy.visit(indexPage);
    cy.viewport(computer.width, computer.height);
    cy.get('[data-cy="places-search"]').type('875');
    cy.get('li[data-cy]').eq(1).click();
    cy.wait(3000)
    cy.get('[data-cy="button_understood"]').scrollIntoView().click();
  });
});
