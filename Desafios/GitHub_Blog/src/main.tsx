import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { Globals } from './globals'
import { DefaultTheme } from './themes/Default'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <App />
      <Globals />
    </ThemeProvider>
  </React.StrictMode>
)
