import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globals'
import { Layout } from './pages/layout'
import { DefaultTheme } from './themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Layout />
      <GlobalStyle />
    </ThemeProvider>
  )
}
