/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe("Common behavior", () => {
  it("should have common elements", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Block movie and pagination exist
    cy.get('#movie-block').should('exist');
    cy.get('#pagination').should('exist');

    // Should have login button
    cy.contains("Log in").should("be.visible");

    // Default page is 1
    cy.get('.active').should('have.length', 1)
    cy.contains('[class=active]', '1').should("be.visible");
  });

  it("should change active page if change page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    cy.get('.pagination span:nth-child(2)').click();

    // Current page is 2
    cy.get('.active').should('have.length', 1)
    cy.contains('[class=active]', '2').should("be.visible");
  });
});
