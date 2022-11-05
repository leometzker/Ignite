import { Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { TItemShoppingCart } from '../context/ShoppingCartProvider/@types'
import { Count } from './Count'
import { ItenShoppingCartStyled } from './Styles/ItenShoppingCartStyled'

export const ItenShoppingCart = ({
  id,
  image,
  name,
  amount,
  price
}: TItemShoppingCart) => {
  const [counter, setCounter] = useState(amount)

  console.log(amount)

  function GetCounterValue(value: number) {
    setCounter(value)
  }

  return (
    <ItenShoppingCartStyled>
      <div className="itenContainer">
        <div className="item" key={id}>
          <img src={image} alt="" />
          <div className="desc">
            <span className="title">{name}</span>

            <div className="quantidade">
              <Count CounterValue={GetCounterValue} InitialValue={amount} />
              <button title="Remover item" className="remove">
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
