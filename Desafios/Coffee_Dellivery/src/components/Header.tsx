import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderStyled } from './Styles/HeaderStyled'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartProvider/ShoppingCartContext'
import { TItemShoppingCart } from '../context/ShoppingCartProvider/@types'

export const Header = () => {
  const { AddItem, RemoveItem } = useContext(ShoppingCartContext)

  const newItem: TItemShoppingCart = {
    id: 0,
    descricao: '',
    quantidade: 0,
    price: 0
  }

  return (
    <HeaderStyled>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <button onClick={() => AddItem(newItem)}> testar</button>
      <button onClick={() => RemoveItem(0)}> testar</button>

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
    </HeaderStyled>
  )
}
