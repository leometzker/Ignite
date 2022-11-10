import { Trash } from 'phosphor-react'
import { TItemShoppingCart } from '../context/ShoppingCartProvider/@types'
import { useShoppingCart } from '../context/ShoppingCartProvider/useShoppingCart'
import { Count } from './Count'
import { ItenShoppingCartStyled } from './Styles/ItenShoppingCartStyled'

export const ItenShoppingCart = ({
  id,
  image,
  name,
  amount,
  price
}: TItemShoppingCart) => {
  const { RemoveItem, EditItem } = useShoppingCart()

  function GetCounterValue(value: number) {
    EditItem(id, value)
  }

  function deleteItem() {
    RemoveItem(id)
  }

  return (
    <ItenShoppingCartStyled>
      <div className="itenContainer">
        <div className="item">
          <img src={image} alt="" />
          <div className="desc">
            <span className="title">{name}</span>

            <div className="quantidade">
              <Count CounterValue={GetCounterValue} InitialValue={amount} />
              <button
                onClick={deleteItem}
                title="Remover item"
                className="remove"
              >
                <Trash size={16} /> REMOVER
              </button>
            </div>
          </div>
        </div>
        <strong className="price">{price}</strong>
      </div>
    </ItenShoppingCartStyled>
  )
}
