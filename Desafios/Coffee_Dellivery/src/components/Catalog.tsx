import { CatalogStyeled } from './Styles/CatalogStyleg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ItemCatalogStyled } from './Styles/ItemCatalogStyled'
import { ItemCatalog } from './ItemCatalog'

const catalog: ItemCatalog[] = [
  {
    id: '1',
    image: '../Catalogo/Chocolate_Quente.svg',
    name: 'cafe 01',
    descripition: 'quais as propriedades e atributos deste café',
    price: 9.99
  },
  {
    id: '2',
    image: '../Catalogo/Americano.svg',
    name: 'cafe 02',
    descripition: 'quais as propriedades e atributos deste café',
    price: 9.99
  },
  {
    id: '3',
    image: '../Catalogo/Arabe.svg',
    name: 'cafe 03',
    descripition: 'quais as propriedades e atributos deste café',
    price: 9.99
  },
  {
    id: '4',
    image: '../Catalogo/Chocolate_Quente.svg',
    name: 'cafe 01',
    descripition: 'quais as propriedades e atributos deste café',
    price: 9.99
  },
  {
    id: '5',
    image: '../Catalogo/Americano.svg',
    name: 'cafe 02',
    descripition: 'quais as propriedades e atributos deste café',
    price: 9.99
  },
  {
    id: '6',
    image: '../Catalogo/Arabe.svg',
    name: 'cafe 03',
    descripition: 'quais as propriedades e atributos deste café',
    price: 9.99
  },
  {
    id: '7',
    image: '../Catalogo/Chocolate_Quente.svg',
    name: 'cafe 01',
    descripition: 'quais as propriedades e atributos deste café',
    price: 9.99
  },
  {
    id: '8',
    image: '../Catalogo/Americano.svg',
    name: 'cafe 02',
    descripition: 'quais as propriedades e atributos deste café',
    price: 9.99
  },
  {
    id: '9',
    image: '../Catalogo/Arabe.svg',
    name: 'cafe 03',
    descripition: 'quais as propriedades e atributos deste café',
    price: 9.99
  }
]

export const Catalog = () => {
  return (
    <>
      <h2>Nossos Cafés</h2>
      <CatalogStyeled>
        {catalog.map(i => {
          return (
            <ItemCatalogStyled>
              <div className="ItemCatalog" key={i.id}>
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
              </div>
            </ItemCatalogStyled>
          )
        })}
      </CatalogStyeled>
    </>
  )
}
