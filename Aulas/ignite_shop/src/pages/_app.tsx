import type { AppProps } from 'next/app'
import { Global } from './../styles/globals'
import logo from '../assets/logo.svg'
import Image from 'next/image'
import { Header, LayoutConteiner } from './../styles/pages/appStyle'
import { CartProvider } from 'use-shopping-cart'
import { Handbag } from 'phosphor-react'
import Cart from '../components/shoppingCart'
import { useState } from 'react'

Global()

export default function App({ Component, pageProps }: AppProps) {
  const [showCart, setShowCart] = useState(false)

  function closeCart() {
    setShowCart(false)
  }

  console.log(showCart)
  return (
    <LayoutConteiner>
      <CartProvider
        cartMode="checkout-session"
        stripe=""
        currency="BRL"
        // loading={<p aria-live="polite">Loading redux-persist...</p>}
        shouldPersist={false}
      >
        <Header>
          <Image src={logo} alt="Landscape picture" width={130} height={50} />
          <button
            className="buttonCart"
            onClick={() => {
              return setShowCart(true)
            }}
          >
            <Handbag size={32} weight="bold" />
          </button>
        </Header>
        <Component {...pageProps} />
        {showCart ? <Cart close={closeCart} /> : null}
      </CartProvider>
    </LayoutConteiner>
  )
}
