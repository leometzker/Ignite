import { ShoppingCart, Trash } from 'phosphor-react'
import { Count } from './Count'
import { ItenShoppingCartStyled } from './Styles/ItenShoppingCartStyled'

const itenShoppingCart = {
  id: '',
  image: '../assets/Logo.svg',
  name: 'nome do cafe',
  quantidade: 0,
  price: 9.99
}

export type itenShoppingCartType = typeof itenShoppingCart

export const ItenShoppingCart = ({
  id,
  image,
  name,
  quantidade,
  price
}: itenShoppingCartType) => {
  return (
    <ItenShoppingCartStyled>
      <div className="itenContainer">
        <div className="item" key={id}>
          <img src={image} alt="" />
          <div className="desc">
            <span className="title">{name}</span>

            <div className="quantidade">
              {/* {quantidade} */}
              <Count />
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
