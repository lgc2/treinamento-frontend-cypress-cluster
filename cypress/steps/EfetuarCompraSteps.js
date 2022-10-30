import EfetuarCompraPage from '../pages/EfetuarCompraPage'

Given(/^que acesso a página de Produtos$/, () => {
	EfetuarCompraPage.acessarAplicacaoEFazerLogin()
})

When(/^adiciono ao carrinho os produtos que desejo comprar$/, () => {
	EfetuarCompraPage.adicionarProdutosAoCarrinho()
})

When(/^confirmo os produtos no carrinho$/, () => {
	EfetuarCompraPage.confirmarProdutosNoCarrinho()
})

When(/^informo os dados para entrega do pedido$/, () => {
	EfetuarCompraPage.informarDadosParaEntregaDoPedido()
})

When(/^finalizo a compra$/, () => {
	EfetuarCompraPage.finalizarACompra()
})

Then(/^devo visualizar mensagem indicando que a compra foi efetivada$/, () => {
	EfetuarCompraPage.visualizarMensagemDeCompraEfetivada()
})
