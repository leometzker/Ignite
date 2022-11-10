import { CheckoutStyled } from './Styles/CheckoutStyled'

import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { ItenShoppingCart } from '../components/ItemShoppingCart'
import { useShoppingCart } from './../context/ShoppingCartProvider/useShoppingCart'
import { Formaddress } from '../components/FormAdress'
import { v4 as uuidv4 } from 'uuid'
import { NavLink } from 'react-router-dom'

export const Checkout = () => {
  const shoppingCart = useShoppingCart()

  let totalItens = 0
  let somaTotal = 0
  let frete = shoppingCart.resume.taxa_entrega
  let paymentForm = 'Dinheiro'

  const hasItens =
    !shoppingCart.itens.length || !shoppingCart.resume.forma_pagamento

  shoppingCart.itens.forEach(i => {
    totalItens = totalItens + i.amount * i.price
    somaTotal = totalItens + frete
  })

  function changePaymentForm() {
    const ele: any = document.getElementsByName('rdPayment')

    for (let index = 0; index < ele.length; index++) {
      if (ele[index].checked) {
        paymentForm = ele[index].value
      }
    }
    shoppingCart.SetPaymentForm(paymentForm)
  }

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

          <Formaddress />
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
                onClick={() => changePaymentForm()}
                className="payFormChange"
                type="radio"
                name="rdPayment"
                id="rdCredit"
                value="Cartão de Crédito"
              />
              <label htmlFor="rdCredit">CARTÃO DE CREDITO</label>
            </div>
            <div className="payChange">
              <Bank size={16} />
              <input
                onClick={() => changePaymentForm()}
                className="payFormChange"
                type="radio"
                name="rdPayment"
                id="rdDebt"
                value="Cartão de Débito"
              />
              <label htmlFor="rdDebt">CARTÃO DE DÉBITO</label>
            </div>
            <div className="payChange">
              <Money size={16} />
              <input
                onClick={() => changePaymentForm()}
                className="payFormChange"
                type="radio"
                name="rdPayment"
                id="rdMoney"
                value="Dinheiro"
                // defaultChecked={true}
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
                  key={uuidv4()}
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

          <button
            form="addressForm"
            type="submit"
            className="confirm"
            disabled={hasItens}
          >
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </CheckoutStyled>
  )
}
