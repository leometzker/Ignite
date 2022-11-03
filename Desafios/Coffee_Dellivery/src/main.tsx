import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ShoppingCartProvider } from './context/ShoppingCartProvider/ShoppingCartContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </React.StrictMode>
)
