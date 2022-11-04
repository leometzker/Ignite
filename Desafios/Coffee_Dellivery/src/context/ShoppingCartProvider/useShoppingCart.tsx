import { useContext } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext)
  return context
}
