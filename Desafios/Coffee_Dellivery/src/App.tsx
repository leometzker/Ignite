import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globals'
import { DefaultTheme } from './Themes/defaultThema'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
// - Listagem de produtos (cafés) disponíveis para compra
// - Adicionar uma quantidade específicas de itens no carrinho
// - Aumentar ou remover a quantidade de itens no carrinho
// - Formulário para o usuário preencher o seu endereço
// - Exibir o total de itens no carrinho no Header
// - Exibir o valor total da soma de itens no carrinho multiplicados pelo valor
