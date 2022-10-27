import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderStyled } from './Styles/HeaderStyled'

export const Header = () => {
  return (
    <HeaderStyled>
      <img src={logo} alt="" />

      <div>
        <span>
          <MapPin size={19} weight="fill" />
          Gov. Valadares, MG
        </span>
        <button title="Carrinho de Compras">
          {' '}
          <ShoppingCart size={19} weight="fill" />{' '}
        </button>
      </div>
    </HeaderStyled>
  )
}
