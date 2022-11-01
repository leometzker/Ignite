import { ConfirmationStyled } from './Styles/ConfirmationStyled'
import image from '../assets/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export const Confirmation = () => {
  return (
    <ConfirmationStyled>
      <div className="text">
        <h1 className="titleConfirmed"> Uhu! Pedido confirmado </h1>
        <p className="subTC">
          Agora é só aguardar que logo o café chegará até você{' '}
        </p>
      </div>

      <div className="content">
        <div className="info">
          <table>
            <tr>
              <td>
                <div className="icon locale">
                  <MapPin size={16} weight="fill" />
                </div>
              </td>
              <td>
                <p>
                  Entrega em <strong> Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="icon timer">
                  <Timer size={16} weight="bold" />
                </div>
              </td>
              <td>
                <p> Previsão de entrega</p>
                <strong>20 min - 30 min </strong>
              </td>
            </tr>
            <tr>
              <td>
                <div className="icon paymenttype">
                  <CurrencyDollar size={16} weight="bold" />
                </div>
              </td>
              <td>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </td>
            </tr>
          </table>
        </div>

        <img src={image} alt="" />
      </div>
    </ConfirmationStyled>
  )
}
