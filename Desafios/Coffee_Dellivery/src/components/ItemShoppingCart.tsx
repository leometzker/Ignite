import { Trash } from 'phosphor-react'
import { TItemShoppingCart } from '../context/ShoppingCartProvider/@types'
import { Count } from './Count'
import { ItenShoppingCartStyled } from './Styles/ItenShoppingCartStyled'

export const ItenShoppingCart = ({
  id,
  image,
  name,
  quantidade,
  price
}: TItemShoppingCart) => {
  const [count, setCount] = useState(0)

  function CounterValue(value: number) {
    return value
  }

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
