import logo from '../assets/logoMain.svg'
import { LayoutStyled } from './styles/Layout'
import { Summary } from '../components/Summary'
import { SearchBar } from '../components/SearchBar'
import { Extract } from '../components/Extratct'

export const Layout = () => {
  return (
    <LayoutStyled>
      <header>
        <img src={logo} />
        <button>Nova Transação</button>
      </header>

      <Summary />

      <SearchBar />

      <Extract />
    </LayoutStyled>
  )
}
