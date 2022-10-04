/// <reference types="Cypress" />

describe("Subscribe page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should render successfully", () => {
    cy.get("#logo");
    cy.get("form");
  });

  describe("If the form is complete", () => {
    it("Should send successfully", () => {
      cy.get('input[placeholder="Email"]').type("sergio@gmail.com");
      cy.get('input[placeholder="Nome"]').type("Sergio");
      cy.get('input[placeholder="Sobrenome"]').type("Henrique");
      cy.get("select").select("Básico");
      cy.get("button").contains("Próximo").click();
      /* Após a assinatura, um alerta é exibido para o que pedimos
         se renderizar corretamente */
      cy.on("window:alert", (str) => {
        expect(str).to.equal(`Sua conta foi registrada com sucesso!`);
      });
    });
  });

  describe("If the form is incomplete", () => {
    it("Should not send ", () => {
      cy.get('input[placeholder="Nome"]').type("Sergio");
      cy.get('input[placeholder="Sobrenome"]').type("Henrique");
      cy.get("select").select("Premium");
      cy.get("button").contains("Próximo").should("be.disabled");
    });
  });

  describe("On add profile", () => {
    it("Should add a new input correctly", () => {
      cy.get('input[placeholder="Nome do perfil"]').should("not.exist");
      cy.get("#add-profile-btn").click();
      cy.get('input[placeholder="Nome do perfil"]');
      cy.get("#add-profile-btn").click();
      cy.get('input[placeholder="Nore do perfil"]').should("have.length", 2);
    });
  });
});
