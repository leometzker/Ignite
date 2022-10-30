import { ItemCatalog, ItemCatalogType } from './ItemCatalog'
import { CatalogStyeled } from './Styles/CatalogStyleg'

const catalog: ItemCatalogType[] = [
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
    <CatalogStyeled>
      <h2>Nossos cafés</h2>
      <div className="catalogList">
        {catalog.map(i => {
          return (
            <ItemCatalog
              key={i.id}
              id={i.id}
              image={i.image}
              name={i.name}
              descripition={i.descripition}
              price={i.price}
            />
          )
        })}
      </div>
    </CatalogStyeled>
  )
}
