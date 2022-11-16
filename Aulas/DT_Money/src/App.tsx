import { ThemeProvider } from 'styled-components'
import { TransactionProvider } from './contexts/TransactionsContext'
import { GlobalStyle } from './globals'
import { Layout } from './pages/Layout'

import { DefaultTheme } from './themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <TransactionProvider>
        <Layout />
      </TransactionProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
