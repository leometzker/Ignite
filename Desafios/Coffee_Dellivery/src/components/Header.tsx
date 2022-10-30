import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderStyled } from './Styles/HeaderStyled'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <div>
        <span>
          <MapPin size={19} weight="fill" />
          Gov. Valadares, MG
        </span>

        <Link
          className="shoppingCart"
          title="Carrinho de Compras"
          to="/checkout"
        >
          <ShoppingCart size={19} weight="fill" />
        </Link>
      </div>
    </HeaderStyled>
  )
}
