import { LayoutStyled } from './styles/layout'
import logo from '../assets/logoMain.svg'
import { MagnifyingGlass } from 'phosphor-react'

export const Layout = () => {
  return (
    <LayoutStyled>
      <header>
        <img src={logo} />
        <button>
          <MagnifyingGlass size={20} />
          Nova Transação
        </button>
      </header>

      <div className="container">
        <main>
          <h1>oi</h1>
        </main>
      </div>
    </LayoutStyled>
  )
}
