import { ConfirmationStyled } from './Styles/ConfirmationStyled'
import image from '../assets/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useShoppingCart } from '../context/ShoppingCartProvider/useShoppingCart'

export const Confirmation = () => {
  const shoppingCart = useShoppingCart()

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
            <tbody>
              <tr>
                <td>
                  <div className="icon locale">
                    <MapPin size={16} weight="fill" />
                  </div>
                </td>
                <td>
                  <p>
                    Entrega em
                    <strong>
                      {` rua ${shoppingCart.address.rua}, número 
                      ${shoppingCart.address.numero}`}
                    </strong>
                  </p>
                  <p>{`${shoppingCart.address.cidade} -
                      ${shoppingCart.address.estado}`}</p>
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
                  <strong>{shoppingCart.resume.forma_pagamento}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <img src={image} alt="" />
      </div>
    </ConfirmationStyled>
  )
}
