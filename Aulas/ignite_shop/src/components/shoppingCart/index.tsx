import { CartContainer, Overlay } from './style'

import {
  useShoppingCart,
  DebugCart,
  formatCurrencyString
} from 'use-shopping-cart'
import {
  Product,
  CartActions,
  CartEntry as ICartEntry
} from 'use-shopping-cart/core'
import { useEffect } from 'react'

const products: Product[] = [
  {
    name: 'Sunglasses',
    id: 'price_1GwzfVCNNrtKkPVCh2MVxRkO',
    price: 15_00,
    image: 'https://files.stripe.com/links/fl_test_FR8EZTS7UDXE0uljMfT7hwmH',
    currency: 'USD',
    description: 'A pair of average black sunglasses.'
  },
  {
    name: '3 Stripe Streak Scoop Neck Flowy T-Shirt',
    id: 'price_OkRxVM2hCVPkKtrNNCVfzwG1',
    price: 30_00,
    image:
      'https://static.musictoday.com/store/bands/4806/product_600/5QCTBL052.jpg',
    description:
      'A black scoop neck flowy t-shirt with 3 bright yellow strips behind the words Black Lives Matter.',
    currency: 'USD'
  },
  {
    name: 'Sunglasses',
    id: 'price_1GwzfVCNNrtKkPVCh2MVxRkO',
    price: 15_00,
    image: 'https://files.stripe.com/links/fl_test_FR8EZTS7UDXE0uljMfT7hwmH',
    currency: 'USD',
    description: 'A pair of average black sunglasses.'
  },
  {
    name: '3 Stripe Streak Scoop Neck Flowy T-Shirt',
    id: 'price_OkRxVM2hCVPkKtrNNCVfzwG1',
    price: 30_00,
    image:
      'https://static.musictoday.com/store/bands/4806/product_600/5QCTBL052.jpg',
    description:
      'A black scoop neck flowy t-shirt with 3 bright yellow strips behind the words Black Lives Matter.',
    currency: 'USD'
  }
]

function CartEntry({
  entry,
  removeItem
}: {
  entry: ICartEntry
  removeItem: CartActions['removeItem']
}) {
  return (
    <div>
      <h3>{entry.name}</h3>
      {entry.image ? (
        <img width={100} src={entry.image} alt={entry.description} />
      ) : null}
      <p>
        {entry.quantity} x{' '}
        {formatCurrencyString({ value: entry.price, currency: 'USD' })} ={' '}
        {entry.formattedValue}
      </p>
      <button onClick={() => removeItem(entry.id)}>Remove</button>
    </div>
  )
}

function Cart() {
  const cart = useShoppingCart()
  const { removeItem, cartDetails, clearCart, formattedTotalPrice } = cart

  const cartEntries = Object.values(cartDetails ?? {}).map(entry => (
    <CartEntry key={entry.id} entry={entry} removeItem={removeItem} />
  ))

  return (
    <div>
      <h2>Cart</h2>
      <p>Total: {formattedTotalPrice}</p>
      {cartEntries.length === 0 ? <p>Cart is empty.</p> : null}
      {cartEntries.length > 0 ? (
        <>
          <button onClick={() => clearCart()}>Clear cart</button>
          {cartEntries}
        </>
      ) : null}
    </div>
  )
}

function ProductListing({
  product,
  addItem
}: {
  product: Product
  addItem: CartActions['addItem']
}) {
  return (
    <div key={product.id}>
      <h3>{product.name}</h3>
      {product.image ? (
        <img width={300} src={product.image} alt={product.description} />
      ) : null}
      <p>{formatCurrencyString({ value: product.price, currency: 'USD' })}</p>
      <button
        onClick={() => addItem(product)}
        aria-label={`Add one ${product.name} to your cart.`}
      >
        Add 1 to Cart
      </button>
    </div>
  )
}

function ShowItens() {
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <Cart />
      {/* <DebugCart /> */}
    </div>
  )
}

type cartProps = { close: () => void }

export default function ShoppingCart({ close }: cartProps) {
  const { addItem } = useShoppingCart()

  function ProductList() {
    products.forEach(item => {
      addItem(item)
      console.log('rodou')
    })
  }

  useEffect(() => {
    ProductList()
  }, [])

  return (
    <Overlay>
      <CartContainer>
        <p>carrinho de compras</p>
        <button onClick={close}>fechar</button>
        <ShowItens />
      </CartContainer>
    </Overlay>
  )
}
