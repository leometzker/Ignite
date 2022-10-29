import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ItemCatalogStyled } from './Styles/ItemCatalogStyled'

const itenCatalogInit = {
  id: '',
  image: '../assets/Logo.svg',
  name: 'nome do cafe',
  descripition: 'quais as propriedades e atributos deste café',
  price: 9.99
}

export type ItemCatalog = typeof itenCatalogInit

// const catalog: ItemCatalog[] = [
//   {
//     id: '1',
//     image: '../Catalogo/Chocolate_Quente.svg',
//     name: 'cafe 01',
//     descripition: 'quais as propriedades e atributos deste café',
//     price: 9.99
//   },
//   {
//     id: '2',
//     image: '../Catalogo/Americano.svg',
//     name: 'cafe 02',
//     descripition: 'quais as propriedades e atributos deste café',
//     price: 9.99
//   },
//   {
//     id: '3',
//     image: '../Catalogo/Arabe.svg',
//     name: 'cafe 03',
//     descripition: 'quais as propriedades e atributos deste café',
//     price: 9.99
//   }
// ]

export const ItemCatalog = () => {
  return (
    <ItemCatalogStyled>
      return (
      {/* <div className="ItemCatalog" key={i.id}>
        <img src={i.image} alt="" />
        <div className="coffeeStyle">TRADICIONAL</div>
        <div className="title">{i.name}</div>
        <div className="description">{i.descripition}</div>
        <div className="price_qtde">
          <strong>
            <span>R$ </span> {i.price}
          </strong>{' '}
          <div className="count">
            <button>
              <Minus size={14} />
            </button>
            1
            <button>
              <Plus size={14} />
            </button>
          </div>
          <button title="Carrinho de Compras" className="shoppingCart">
            <ShoppingCart size={19} weight="fill" />
          </button>
        </div>
      </div> */}
      )
    </ItemCatalogStyled>
  )
}
