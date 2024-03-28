describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    cy.intercept(
      {
        method: "GET",
        url: "https://prolog-api.profy.dev/project",
        middleware: true,
      },
      (req) => {
        req.on("response", (res) => {
          res.setThrottle(1000);
        });
      },
    );

    // open projects page
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the loading icon while the projects are loading", () => {
      cy.get("main")
        .get('[alt="Spinner"')
        .should("have.attr", "src", "/icons/loading-circle.svg");
    });
  });
});
