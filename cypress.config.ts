import { defineConfig } from "cypress";
require("dotenv").config();

export default defineConfig({
  env: {
    auth0_username: "testuser1@gmail.com",
    auth0_password: "1qaz!QAZ",
    auth0_domain: process.env.AUTH0_ISSUER_BASE_URL,
    auth0_audience: process.env.AUTH0_AUDIENCE,
    auth0_scope: process.env.AUTH0_SCOPE,
    auth0_client_id: process.env.AUTH0_CLIENT_ID,
    auth0_client_secret: process.env.AUTH0_CLIENT_SECRET,
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/**/*.spec.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
    viewportHeight: 1000,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      // Add plugin import here 👇
      require("@deploysentinel/cypress-recorder")(on, config);
    },
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
