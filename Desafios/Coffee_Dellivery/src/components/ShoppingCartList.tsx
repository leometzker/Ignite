import { ReactNode } from 'react'
import { ItenShoppingCart, itenShoppingCartType } from './ItemShoppingCart'

const shoppingCartList: itenShoppingCartType[] = [
  {
    id: '1',
    image: '../Catalogo/Chocolate_Quente.svg',
    name: 'cafe 01',
    quantidade: 1,
    price: 9.99
  },
  {
    id: '2',
    image: '../Catalogo/Americano.svg',
    name: 'cafe 02',
    quantidade: 2,
    price: 9.99
  },
  {
    id: '3',
    image: '../Catalogo/Arabe.svg',
    name: 'cafe 03',
    quantidade: 1,
    price: 9.99
  }
]

export const ShoppingCartList = () => {
  return shoppingCartList.map(i => {
    return (
      <ItenShoppingCart
        key={i.id}
        id={i.id}
        image={i.image}
        name={i.name}
        quantidade={i.quantidade}
        price={i.price}
      />
    )
  })
}
