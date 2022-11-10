import { ShoppingCart } from 'phosphor-react'
import { ItemCatalogStyled } from './Styles/ItemCatalogStyled'
import { Count } from './Count'
import { useShoppingCart } from './../context/ShoppingCartProvider/useShoppingCart'
import { TItemShoppingCart } from '../context/ShoppingCartProvider/@types'
import { TItemCatalog } from '../@types/@types'

export const ItemCatalog = ({
  id,
  image,
  type,
  name,
  descripition,
  price
}: TItemCatalog) => {
  const shoppingCart = useShoppingCart()

  let amountItem = 1 //valor inicial do catalogo

  function handleAddItemToShoppingCart() {
    const newItemCart: TItemShoppingCart = {
      id: id,
      image: image,
      name: name,
      amount: amountItem,
      price: price
    }

    shoppingCart.AddItem(newItemCart)
  }

  function GetCounterValue(value: number) {
    amountItem = value
  }

  return (
    <ItemCatalogStyled>
      <div className="ItemCatalog">
        <img src={image} alt="" />

        <div className="type">
          {type.map(t => {
            return (
              <div className="coffeeStyle" key={t}>
                {t}
              </div>
            )
          })}
        </div>

        <div className="title">{name}</div>
        <div className="description">{descripition}</div>
        <div className="price_qtde">
          <strong className="price">{price}</strong>
          <Count CounterValue={GetCounterValue} InitialValue={amountItem} />
          <button
            title="Carrinho de Compras"
            className="shoppingCart"
            onClick={handleAddItemToShoppingCart}
          >
            <ShoppingCart size={19} weight="fill" />
          </button>
        </div>
      </div>
    </ItemCatalogStyled>
  )
}
