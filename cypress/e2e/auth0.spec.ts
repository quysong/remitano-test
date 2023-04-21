describe("Auth0", function () {
  beforeEach(function () {
    cy.loginToAuth0();
    // cy.visit('/')
  });

  it("shows logged in", function () {
    cy.contains("usertest1@gmail.com").should("be.visible");
  });
});
