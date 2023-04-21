// @ts-check
///<reference path="../../global.d.ts" />
// Document: https://docs.cypress.io/guides/end-to-end-testing/auth0-authentication#Login-with-cyorigin

function loginViaAuth0Ui() {
  // App landing page redirects to Auth0.
  cy.visit("/");

  // Click on <a> "Log in"
  cy.get("#login-btn").click();

  // Login on Auth0.
  cy.origin(Cypress.env("auth0_domain"), () => {
    cy.get('input[name="email"]').type("usertest1@gmail.com");
    cy.get('input[name="password"]').type("1qaz!QAZ", { log: false });
    cy.get("form").submit();
  });

  // Ensure Auth0 has redirected us back to the RWA.
  cy.url().should("equal", "http://localhost:3000/");
}

Cypress.Commands.add("loginToAuth0", () => {
  const log = Cypress.log({
    displayName: "AUTH0 LOGIN",
    message: [`🔐 Authenticating`],
    // @ts-ignore
    autoEnd: false,
  });
  log.snapshot("before");

  loginViaAuth0Ui();

  log.snapshot("after");
  log.end();
});
