import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from './contexts/ApiContext'
import { Router } from './router'

export function App() {
  return (
    <BrowserRouter>
      <ApiProvider>
        s<Router />
      </ApiProvider>
    </BrowserRouter>
  )
}
