describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("footer is displayed correctly", () => {
      // check that each link leads to the correct page
      cy.get("footer").contains("Version");

      cy.get("footer").contains("Docs");

      cy.get("footer").contains("API");

      cy.get("footer").contains("Help");

      cy.get("footer").contains("Community");
    });
  });
});
