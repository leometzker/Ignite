import { IntroStyled } from './Styles/IntroStyled'
import IntroImage from '../assets/Imagem.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export const Intro = () => {
  return (
    <IntroStyled>
      <div className="introInfo">
        <strong>Encontre o café perfeito para qualquer hora do dia</strong>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <table>
          <tr>
            <td>
              <div className="icon cart">
                <ShoppingCart size={18} weight="fill" />
              </div>
              Compra simples e segura
            </td>
            <td>
              <div className="icon pack">
                <Package size={18} weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </td>
          </tr>
          <tr>
            <td>
              <div className="icon timer">
                <Timer size={18} weight="fill" />
              </div>
              Entrega rápida e rastreada
            </td>
            <td>
              <div className="icon coffee">
                <Coffee size={18} weight="fill" />
              </div>
              O café chega fresquinho até você
            </td>
          </tr>
        </table>
      </div>
      <div className="introImage">
        <img src={IntroImage} alt="" />
      </div>
    </IntroStyled>
  )
}
