import { createContext, useReducer } from 'react'
import {
  TAction,
  TShoppingCartContext,
  TShoppingCartProvider,
  TState
} from './@types'

export const ShoppingCartContext = createContext<TShoppingCartContext>(
  {} as TShoppingCartContext
)

export function ShoppingCartProvider({ children }: TShoppingCartProvider) {
  // \/\/\/\/\//\/\/\/\/\/\//\/\/\/\//\/\/\//\/\/

  const reducer = (state: TState, action: TAction) => {
    return state
  }

  const [state, dispatch] = useReducer(reducer, shoppingCartDefault)

  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
