import { Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
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
  const { RemoveItem } = useShoppingCart()

  const [counter, setCounter] = useState(amount)

  function GetCounterValue(value: number) {
    setCounter(value)
  }

  function deleteItem() {
    RemoveItem(id)
  }

  useEffect(() => {}, [counter])

  return (
    <ItenShoppingCartStyled>
      <div className="itenContainer">
        <div className="item" key={id}>
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
