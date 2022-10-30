import LoginElements from "./Elements/LoginElements"

export default new class LoginPage {

  acessarPaginaDeLogin() {
    cy.visit('/')
  }

  realizarLoginComCredenciaisValidas() {

    cy.get(LoginElements.iptUsername())
      .type(Cypress.env('usuarioValido'))
      .should('have.value', Cypress.env('usuarioValido'))

    cy.get(LoginElements.iptPassword())
      .type(Cypress.env('senhaValida'))
      .should('have.value', Cypress.env('senhaValida'))

    cy.get(LoginElements.btnLogin())
      .click()
  }

  realizarLoginComCredenciaisInvalidas(userName, password) {
    cy.get(LoginElements.iptUsername())
      .type(userName)
      .should('have.value', userName)

    cy.get(LoginElements.iptPassword())
      .type(password)
      .should('have.value', password)

    cy.get(LoginElements.btnLogin())
      .click()
  }

  verificarUrlDaPaginaDeProdutos() {
    cy.url()
      .should('equal', `${Cypress.config('baseUrl')}/inventory.html`)
  }

  verificarAlertaDeCredenciaisInvalidas(mensagemDeErro) {
    cy.get(LoginElements.toastDoAlertaDeCredenciaisInvalidas())
      .should('contain', mensagemDeErro)
  }
}