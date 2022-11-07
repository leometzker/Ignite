import { CheckoutStyled } from './Styles/CheckoutStyled'
import { FormAdress } from '../components/FormAdress'

import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { ItenShoppingCart } from '../components/ItemShoppingCart'
import { useShoppingCart } from './../context/ShoppingCartProvider/useShoppingCart'

export const Checkout = () => {
  const shoppingCart = useShoppingCart()

  let totalItens = 0
  let somaTotal = 0
  let frete = 5.8

  shoppingCart.itens.forEach(i => {
    totalItens = totalItens + i.amount * i.price
    somaTotal = totalItens + frete
  })

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
            <div className="payChange">
              <CreditCard size={16} />
              <input
                className="payFormChange"
                type="radio"
                name="radio"
                id="rdCredit"
              />
              <label htmlFor="rdCredit">CARTÃO DE CREDITO</label>
            </div>
            <div className="payChange">
              <Bank size={16} />
              <input
                className="payFormChange"
                type="radio"
                name="radio"
                id="rdDebt"
              />
              <label htmlFor="rdDebt">CARTÃO DE DÉBITO</label>
            </div>
            <div className="payChange">
              <Money size={16} />
              <input
                className="payFormChange"
                type="radio"
                name="radio"
                id="rdMoney"
              />
              <label htmlFor="rdMoney">DINHEIRO</label>
            </div>
          </div>
        </div>
      </div>

      <div className="checkoutContaines">
        <p className="title">Cafés selecionados</p>

        {/* lista de compras */}
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
              Total de itens{' '}
              <span className="currency">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(totalItens)}
              </span>
            </p>
            <p>
              Entrega{' '}
              <span className="currency">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(frete)}
              </span>
            </p>
            <strong>
              Total{' '}
              <span className="currency">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(somaTotal)}
              </span>
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
