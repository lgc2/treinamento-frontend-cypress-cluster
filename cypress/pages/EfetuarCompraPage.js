import EfetuarCompraElements from "./Elements/EfetuarCompraElements"
import dadosParaCompra from "../fixtures/dados-para-compra.json"

export default new class EfetuarCompraPage {

  acessarAplicacaoEFazerLogin() {
    cy.login()
  }

  adicionarProdutosAoCarrinho() {
    for (let i = 0; i < dadosParaCompra.produtos.length; i++) {
      cy.get(EfetuarCompraElements.btnAddToCart(dadosParaCompra.produtos[i].seletorPaginaDeProdutos))
        .click()
    }
  }

  confirmarProdutosNoCarrinho() {

    cy.get(EfetuarCompraElements.btnShoppingCart())
      .click()

    cy.get(EfetuarCompraElements.tabelaDoCarrinho())
      .find(EfetuarCompraElements.itensDaTabelaDoCarrinho())
      .its('length')
      .should('eq', dadosParaCompra.produtos.length)

    cy.get(EfetuarCompraElements.btnCheckout())
      .click()
  }

  informarDadosParaEntregaDoPedido() {
    cy.get(EfetuarCompraElements.iptFirstName())
      .type(dadosParaCompra.firstName)
      .should('have.value', dadosParaCompra.firstName)

    cy.get(EfetuarCompraElements.iptLastName())
      .type(dadosParaCompra.lastName)
      .should('have.value', dadosParaCompra.lastName)

    cy.get(EfetuarCompraElements.iptZipCode())
      .type(dadosParaCompra.zipCode)
      .should('have.value', dadosParaCompra.zipCode)

    cy.get(EfetuarCompraElements.btnContinue())
      .click()
  }

  finalizarACompra() {

    cy.get(EfetuarCompraElements.lblItemTotal())
      .should('have.text', `Item total: $${dadosParaCompra.subtotal}`)

    cy.get(EfetuarCompraElements.lblTax())
      .should('have.text', `Tax: $${dadosParaCompra.taxa}`)

    cy.get(EfetuarCompraElements.lblTotal())
      .should('have.text', `Total: $${dadosParaCompra.total}`)

    cy.get(EfetuarCompraElements.btnFinish())
      .click()
  }

  visualizarMensagemDeCompraEfetivada() {
    cy.get(EfetuarCompraElements.textoDeCompraEfetivada())
      .should('be.visible')
      .and('have.text', 'THANK YOU FOR YOUR ORDER')
  }


}