import LoginElements from "../pages/Elements/LoginElements"

Cypress.Commands.add('login', () => {
    cy.visit('/')

    cy.get(LoginElements.iptUsername())
        .type(Cypress.env('usuarioValido'))
        .should('have.value', Cypress.env('usuarioValido'))

    cy.get(LoginElements.iptPassword())
        .type(Cypress.env('senhaValida'))
        .should('have.value', Cypress.env('senhaValida'))

    cy.get(LoginElements.btnLogin())
        .click()
})