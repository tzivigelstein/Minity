/// <reference types="cypress" />

describe('<Forms/>', () => {
  it('<Login/> - Verificar Login', () => {
    cy.visit('/')

    //Malas practicas de cypress
    cy.contains('h1', 'Login')

    //Buenas practicas de cypress
    cy.get('[data-cy=titulo]').invoke('text').should('equal', 'Login')

    //Revisar que el formulario exista
    cy.get('[data-cy=form-login]').should('exist')
    cy.get('[data-cy=email-input]').should('exist')
    cy.get('[data-cy=password-input]').should('exist')

    //Revisar los dos inputs
    cy.get('[data-cy=submit-login]').should('exist').should('have.value', 'Login').should('have.class', 'btn-primario')

    cy.get('[data-cy=get-account]')
      .should('exist')
      .should('have.text', "Don't have an account?. Signup")
      .should('have.prop', 'tagName')
      .should('eq', 'A')

    cy.get('[data-cy=get-account]').should('have.attr', 'href').should('eq', '/signup')
  })
  it('<Signup/> - Verificar Signup', () => {
    cy.visit('/signup')

    cy.get('[data-cy=title]').invoke('text').should('eq', 'Signup')

    cy.get('[data-cy=signup-form]').should('exist')
    cy.get('[data-cy=name-input]').should('exist')
    cy.get('[data-cy=email-input]').should('exist')
    cy.get('[data-cy=password-input]').should('exist')
    cy.get('[data-cy=confirm-password-input]').should('exist')

    cy.get('[data-cy=submit-signup]')
      .should('exist')
      .should('have.value', 'Signup')
      .should('have.class', 'btn-primario')

    cy.get('[data-cy=login-link]')
      .should('exist')
      .should('have.text', "You have an account?. Login")
      .should('have.prop', 'tagName')
      .should('eq', 'A')

    cy.get('[data-cy=login-link]').should('have.attr', 'href').should('eq', '/')
  })
})
