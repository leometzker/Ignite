import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ItemCatalogStyled } from './Styles/ItemCatalogStyled'
import { Count } from './Count'

const itenCatalogInit = {
  id: '',
  image: '../assets/Logo.svg',
  name: 'nome do cafe',
  descripition: 'quais as propriedades e atributos deste café',
  price: 9.99
}

export type ItemCatalogType = typeof itenCatalogInit

export const ItemCatalog = ({
  id,
  image,
  name,
  descripition,
  price
}: ItemCatalogType) => {
  return (
    <ItemCatalogStyled>
      <div className="ItemCatalog" key={id}>
        <img src={image} alt="" />
        <div className="coffeeStyle">TRADICIONAL</div>
        <div className="title">{name}</div>
        <div className="description">{descripition}</div>
        <div className="price_qtde">
          <strong className="price">{price}</strong>
          <Count />
          <button title="Carrinho de Compras" className="shoppingCart">
            <ShoppingCart size={19} weight="fill" />
          </button>
        </div>
      </div>
    </ItemCatalogStyled>
  )
}
