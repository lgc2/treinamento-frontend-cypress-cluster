import LoginPage from '../pages/LoginPage'

Given(/^que acesso a página de Login$/, () => {
	LoginPage.acessarPaginaDeLogin()
})

When(/^informo credenciais válidas$/, () => {
	LoginPage.realizarLoginComCredenciaisValidas()
})

Then(/^devo ser direcionado para a página de produtos$/, () => {
	LoginPage.verificarUrlDaPaginaDeProdutos()
})

When(/^informo credenciais inválidas$/, (datatable) => {
	datatable.hashes().forEach(element => {
		LoginPage.realizarLoginComCredenciaisInvalidas(element.Username, element.Password)
	})
})

Then(/^devo visualizar a mensagem "([^"]*)"$/, (mensagemDeErro) => {
	LoginPage.verificarAlertaDeCredenciaisInvalidas(mensagemDeErro)
})


