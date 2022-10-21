import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './router'
import { CyclesContextProvider } from './context/CycleContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* class Paginas e Rotas -> React Router Dom */}
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
