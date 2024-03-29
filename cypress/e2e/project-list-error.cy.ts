describe("Project List Error", () => {
  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the error container if the api call fails", () => {
      cy.intercept("GET", "https://prolog-api.profy.dev/project", (req) => {
        req.reply({
          statusCode: 404,
          forceNetworkError: false,
        });
      }).as("err");

      // open projects page
      cy.visit("http://localhost:3000/dashboard");

      cy.wait("@err");
      cy.wait("@err");
      cy.wait("@err");
      cy.wait("@err");

      const errorMsg = "There was a problem";
      cy.get("main").contains(errorMsg).should("be.visible");
    });
  });
});
