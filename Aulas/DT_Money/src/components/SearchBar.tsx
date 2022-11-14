import { MagnifyingGlass } from 'phosphor-react'
import { SearchBarStyled } from './Styles/SearchBarStyled'

export const SearchBar = () => {
  return (
    <SearchBarStyled>
      <div className="container">
        <input type="text" placeholder="Busque por transações" />
        <button type="submit">
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </div>
    </SearchBarStyled>
  )
}
