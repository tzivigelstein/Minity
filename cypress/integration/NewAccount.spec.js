/// <reference types="cypress" />

describe('<NewAccount/>', () => {
  it('<NewAccount/> - Validación y alertas', () => {
    cy.visit('/signup')

    cy.get('[data-cy=submit-signup]').click()

    cy.get('[data-cy=alert]')
      .should('exist')
      .should('have.class', 'alerta-error')
      .invoke('text')
      .should('eq', 'All fields are required')

    cy.get('[data-cy=name-input]').type('Tzivi')
    cy.get('[data-cy=email-input]').type('correo00@correo.com')
    cy.get('[data-cy=password-input]').type('123')
    cy.get('[data-cy=confirm-password-input]').type('123')

    cy.get('[data-cy=submit-signup]').click()

    cy.get('[data-cy=alert]')
      .should('exist')
      .should('have.class', 'alerta-error')
      .invoke('text')
      .should('eq', 'Password must contain at least 6 characters')

    cy.get('[data-cy=password-input]').clear().type('123456')
    cy.get('[data-cy=confirm-password-input]').clear().type('12345')

    cy.get('[data-cy=submit-signup]').click()

    cy.get('[data-cy=alert]')
      .should('exist')
      .should('have.class', 'alerta-error')
      .invoke('text')
      .should('eq', 'Passwords must be the same')

    cy.get('[data-cy=password-input]').clear().type('123456')
    cy.get('[data-cy=confirm-password-input]').clear().type('123456')

    cy.get('[data-cy=submit-signup]').click()

    cy.get('[data-cy=alert]')
      .should('exist')
      .should('have.class', 'alerta-error')
      .invoke('text')
      .should('eq', 'There is an user with those credentials')
  })

  it('<Login/> - Validación, alertas y crear nueva cuenta', () => {
    cy.visit('/')

    cy.get('[data-cy=submit-login]').click()

    cy.get('[data-cy=alert]')
      .should('exist')
      .should('have.class', 'alerta')
      .invoke('text')
      .should('eq', 'All fields are required')

    cy.get('[data-cy=email-input]').type('user')
    cy.get('[data-cy=password-input]').type('123')

    cy.get('[data-cy=submit-login]').click()

    cy.get('[data-cy=alert]')
      .should('exist')
      .should('have.class', 'alerta')
      .invoke('text')
      .should('eq', 'User doesnt exist')

    cy.get('[data-cy=email-input]').clear()
    cy.get('[data-cy=email-input]').type('correo00@correo.com')
    cy.get('[data-cy=password-input]').type('123456')

    cy.get('[data-cy=submit-login]').click()

    cy.get('[data-cy=alert]')
      .should('exist')
      .should('have.class', 'alerta')
      .invoke('text')
      .should('eq', 'Incorrect password')

    cy.get('[data-cy=email-input]').clear()
    cy.get('[data-cy=password-input]').clear()
    cy.get('[data-cy=email-input]').type('correo00@correo.com')
    cy.get('[data-cy=password-input]').type('123456')

    cy.get('[data-cy=submit-login]').click()

    cy.get('[data-cy=select-project]').should('exist').invoke('text').should('eq', 'Select a project')

    cy.get('[data-cy=logout]').click()
  })
})
