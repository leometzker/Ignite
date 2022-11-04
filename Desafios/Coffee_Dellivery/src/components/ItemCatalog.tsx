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

  const newItemCart: TItemShoppingCart = {
    id: uuidv4(),
    image: image,
    name: name,
    quantidade: 1,
    price: price
  }

  function handleAddItemToShoppingCart() {
    shoppingCart.AddItem(newItemCart)
  }

  // <button onClick={() => RemoveItem(0)}> testar</button>

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
          <Count />
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
