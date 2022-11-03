import { createContext, useReducer } from 'react'
import {
  defaultAdressShoppingCart,
  defaultItemShoppingCart,
  defaultResumeShoppingCart,
  TAction,
  TItemShoppingCart,
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
    switch (action.type) {
      case 'add-item':
        return {
          ...state,
          itens: [...state.itens, action.payload]
        }
      case 'remove-item':
        return {
          ...state,
          itens: state.itens.filter(i => {
            if (i.id !== action.payload) {
              return i
            }
          })
        }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    itens: [],
    adress: defaultAdressShoppingCart,
    resume: defaultResumeShoppingCart
  })

  function AddItem(item: TItemShoppingCart) {
    dispatch({
      type: 'add-item',
      payload: item
    })
  }

  console.log(state.itens)

  function RemoveItem(itemId: number) {
    dispatch({
      type: 'remove-item',
      payload: itemId
    })
    console.log(state.itens)
  }

  return (
    <ShoppingCartContext.Provider value={{ ...state, AddItem, RemoveItem }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
