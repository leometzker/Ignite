import { ItemCatalog } from './ItemCatalog'
import { CatalogStyeled } from './Styles/CatalogStyleg'
import { uuid } from 'uuidv4'
import { TItemCatalog } from '../@types/@types'

// *********** Itens do Catálogo *******************

const catalog: TItemCatalog[] = [
  {
    id: '1',
    image: '/public/Catalogo/Expresso.svg',
    type: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    descripition: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.99
  },

  {
    id: '2',
    image: '/public/Catalogo/Americano.svg',
    type: ['TRADICIONAL'],
    name: ' Expresso Americano',
    descripition: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.99
  },

  {
    id: '3',
    image: 'public/Catalogo/Expresso_Cremoso.svg',
    type: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    descripition: 'Café expresso tradicional com espuma cremosa',
    price: 9.99
  },

  {
    id: '4',
    image: 'public/Catalogo/Cafe_Gelado.svg',
    type: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    descripition: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.99
  },

  {
    id: '5',
    image: 'public/Catalogo/Cafe_com_Leite.svg',
    type: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    descripition: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.99
  },
  {
    id: '6',
    image: 'public/Catalogo/Latte.svg',
    type: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    descripition:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.99
  },

  {
    id: '7',
    image: 'public/Catalogo/Capuccino.svg',
    type: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    descripition:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.99
  },

  {
    id: '8',
    image: 'public/Catalogo/Macchiato.svg',
    type: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    descripition:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.99
  },

  {
    id: '9',
    image: 'public/Catalogo/Mochaccino.svg',
    type: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    descripition: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.99
  },

  {
    id: '10',
    image: 'public/Catalogo/Chocolate_Quente.svg',
    type: ['ESPECIAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    descripition:
      'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.99
  },

  {
    id: '11',
    image: 'public/Catalogo/Cubano.svg',
    type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    descripition:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.99
  },

  {
    id: '12',
    image: 'public/Catalogo/Havaiano.svg',
    type: ['ESPECIAL'],
    name: 'Havaiano',
    descripition: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.99
  },

  {
    id: '13',
    image: 'public/Catalogo/Arabe.svg',
    type: ['ESPECIAL'],
    name: 'Árabe',
    descripition: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.99
  },

  {
    id: '14',
    image: 'public/Catalogo/Irlandês.svg',
    type: ['ESPECIAL'],
    name: 'Irlandês',
    descripition: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.99
  }
]
// ***********  *******************

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
              type={i.type}
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
