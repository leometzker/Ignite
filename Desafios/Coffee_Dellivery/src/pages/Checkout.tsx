import { CheckoutStyled } from './Styles/CheckoutStyled'
import { FormAdress } from '../components/FormAdress'

import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { ItenShoppingCart } from '../components/ItemShoppingCart'
import { useShoppingCart } from './../context/ShoppingCartProvider/useShoppingCart'

export const Checkout = () => {
  const shoppingCart = useShoppingCart()

  return (
    <CheckoutStyled>
      <div className="formContainer">
        <p className="title">Complete seu pedido</p>
        <div className="dataContainer">
          <div className="info">
            <MapPin size={22} />
            <span>
              <strong>Enderço de Entrega</strong>Informe o endereço onde deseja
              receber seu pedido
            </span>
          </div>

          <FormAdress />
        </div>
        <div className="paymentContainer">
          <div className="info">
            <CurrencyDollar size={22} />
            <span>
              <strong>Pagamento</strong>O pagamento é feito na entrega. Escolha
              a forma que deseja pagar
            </span>
          </div>

          <div className="paymentChange">
            <button>
              <CreditCard size={16} />
              CARTÃO DE CREDITO
            </button>
            <button>
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </button>
            <button>
              <Money size={16} />
              DINHEIRO
            </button>
          </div>
        </div>
      </div>
      <div className="checkoutContaines">
        <p className="title">Cafés selecionados</p>

        <div className="cartContainer">
          <div className="cartList">
            {shoppingCart.itens.map(i => {
              return (
                <ItenShoppingCart
                  key={i.id}
                  id={i.id}
                  image={i.image}
                  name={i.name}
                  amount={i.amount}
                  price={i.price}
                />
              )
            })}
          </div>

          <div className="totals">
            <p>
              Total de itens <span>9.99</span>
            </p>
            <p>
              Entrega <span>9.99</span>
            </p>
            <strong>
              Total <span>9.99</span>
            </strong>
          </div>
          <NavLink to="/confirmation">
            <button className="confirm">CONFIRMAR PEDIDO</button>
          </NavLink>
        </div>
      </div>
    </CheckoutStyled>
  )
}
