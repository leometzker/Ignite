import { ShoppingCart } from 'phosphor-react'
import { ItemCatalogStyled } from './Styles/ItemCatalogStyled'
import { Count } from './Count'
import { useShoppingCart } from './../context/ShoppingCartProvider/useShoppingCart'
import { TItemShoppingCart } from '../context/ShoppingCartProvider/@types'
import { v4 as uuidv4 } from 'uuid'
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

  let amountIten = 1 //valor inicial do catalogo

  function handleAddItemToShoppingCart() {
    const newItemCart: TItemShoppingCart = {
      id: uuidv4(),
      image: image,
      name: name,
      amount: amountIten,
      price: price
    }

    shoppingCart.AddItem(newItemCart)
  }

  function GetCounterValue(value: number) {
    amountIten = value
  }

  return (
    <ItemCatalogStyled>
      <div className="ItemCatalog" key={id}>
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
          <Count CounterValue={GetCounterValue} InitialValue={amountIten} />
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
