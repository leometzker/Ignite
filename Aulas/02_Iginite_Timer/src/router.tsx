import { Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { History } from "./pages/History"
import { DefaultLayout } from './pages/DefaultLayout/home';


export function Router() {
  return (
    <Routes>
      {/* coloca o path raiz para aplicar em todas as paginas */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}