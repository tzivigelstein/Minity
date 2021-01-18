/// <reference types="cypress" />

describe("Admin", () => {
    it("<Projects/> - x", () => {
        cy.visit("/")
        cy.get("[data-cy=email-input]").type("correo00@correo.com")
        cy.get("[data-cy=password-input]").type("123456")
    })
})