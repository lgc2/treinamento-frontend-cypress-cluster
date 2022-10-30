export default new class EfetuarCompraElements {

  btnAddToCart = (nomeDoProduto) => `[data-test="add-to-cart-sauce-labs-${nomeDoProduto}"]`

  btnShoppingCart = () => '#shopping_cart_container'

  tabelaDoCarrinho = () => '#cart_contents_container'

  itensDaTabelaDoCarrinho = () => '.cart_item'

  btnCheckout = () => '[data-test="checkout"]'

  iptFirstName = () => '[data-test="firstName"]'

  iptLastName = () => '[data-test="lastName"]'

  iptZipCode = () => '[data-test="postalCode"]'

  btnContinue = () => '[data-test="continue"]'

  lblItemTotal = () => '.summary_subtotal_label'

  lblTax = () => '.summary_tax_label'

  lblTotal = () => '.summary_total_label'

  btnFinish = () => '[data-test="finish"]'

  textoDeCompraEfetivada = () => '.complete-header'
}