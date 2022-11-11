import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderStyled } from './Styles/HeaderStyled'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from './../context/ShoppingCartProvider/useShoppingCart'

export const Header = () => {
  const shoppingCart = useShoppingCart()
  const countIconShow = shoppingCart.itens.length
    ? shoppingCart.itens.length
    : null

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
            <div className="iconCart">
              <ShoppingCart size={19} weight="fill" />
              <div className="amountIcon">{countIconShow}</div>
            </div>
          </NavLink>
        </div>
      </div>
    </HeaderStyled>
  )
}
