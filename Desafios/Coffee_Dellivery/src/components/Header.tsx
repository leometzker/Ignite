import { HeaderStyled } from './HeaderStyled'
import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

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
