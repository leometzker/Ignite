import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderStyled } from './Styles/HeaderStyled'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartProvider/ShoppingCartContext'
import { TItemShoppingCart } from '../context/ShoppingCartProvider/@types'

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="nav">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>

        <div>
          <span>
            <MapPin size={19} weight="fill" />
            Gov. Valadares, MG
          </span>

          <NavLink
            className="shoppingCart"
            title="Carrinho de Compras"
            to="/checkout"
          >
            <ShoppingCart size={19} weight="fill" />
          </NavLink>
        </div>
      </div>
    </HeaderStyled>
  )
}
