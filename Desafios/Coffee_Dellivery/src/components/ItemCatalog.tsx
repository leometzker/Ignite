import { ShoppingCart } from 'phosphor-react'
import { ItemCatalogStyled } from './Styles/ItemCatalogStyled'
import { Count } from './Count'
import { ItemCatalogType } from '../@types/@types'

export const ItemCatalog = ({
  id,
  image,
  type,
  name,
  descripition,
  price
}: ItemCatalogType) => {
  return (
    <ItemCatalogStyled>
      <div className="ItemCatalog" key={id}>
        <img src={image} alt="" />

        <div className="type">
          {type.map(t => {
            return <div className="coffeeStyle">{t}</div>
          })}
        </div>

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
