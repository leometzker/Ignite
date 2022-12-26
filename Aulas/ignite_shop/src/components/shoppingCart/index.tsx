import { CartContainer, Overlay } from './style'

type cartProps = { close: () => void }

export default function Cart({ close }: cartProps) {
  return (
    <Overlay>
      <CartContainer>
        <p>carrinho de compras</p>
        <button onClick={close}>fechar</button>
      </CartContainer>
    </Overlay>

    // const cart = useShoppingCart()
    // const { removeItem, cartDetails, clearCart, formattedTotalPrice } = cart

    // const cartEntries = Object.values(cartDetails ?? {}).map((entry) => (
    //   <CartEntry key={entry.id} entry={entry} removeItem={removeItem} />
    // ))

    // return (
    //   <div>
    //     <h2>Cart</h2>
    //     <p>Total: {formattedTotalPrice}</p>
    //     {cartEntries.length === 0 ? <p>Cart is empty.</p> : null}
    //     {cartEntries.length > 0 ? (
    //       <>
    //         <button onClick={() => clearCart()}>Clear cart</button>
    //         {cartEntries}
    //       </>
    //     ) : null}
    //   </div>
  )
}

function CartEntry() {
  return {
    /* 
    
    //   entry,
    //   removeItem
   
    //   entry: ICartEntry
    //   removeItem: CartActions['removeItem']
    // }) {
    //   return (
    //     <div>
    //       <h3>{entry.name}</h3>
    //       {entry.image ? (
    //         <img width={100} src={entry.image} alt={entry.description} />
    //       ) : null}
    //       <p>
    //         {entry.quantity} x{' '}
    //         {formatCurrencyString({ value: entry.price, currency: 'USD' })} ={' '}
    //         {entry.formattedValue}
    //       </p>
    //       <button onClick={() => removeItem(entry.id)}>Remove</button>
    //     </div>
    //   )
    // } */
  }
}
