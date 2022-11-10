import { createContext, useReducer } from 'react'
import {
  defaultAddressShoppingCart,
  defaultResumeShoppingCart,
  TAction,
  TAddressShoppingCart,
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
      case 'edit-item':
        return {
          ...state,
          itens: state.itens.map(i => {
            if (i.id !== action.payload.id) {
              return i
            } else {
              return { ...i, amount: action.payload.quantidade }
            }
          })
        }
      case 'set-payment':
        return {
          ...state,
          resume: { ...state.resume, forma_pagamento: action.payload }
        }
      case 'set-address':
        return {
          ...state,
          address: action.payload
        }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    itens: [],
    address: defaultAddressShoppingCart,
    resume: defaultResumeShoppingCart
  })

  function AddItem(item: TItemShoppingCart) {
    let amountItemSelected = 0

    const isItemExist = state.itens.filter(i => {
      if (i.id === item.id) return (amountItemSelected = i.amount)
    }).length

    if (isItemExist) {
      dispatch({
        type: 'edit-item',
        payload: { id: item.id, quantidade: item.amount + amountItemSelected }
      })
    } else {
      dispatch({
        type: 'add-item',
        payload: item
      })
    }
  }

  function RemoveItem(itemId: string) {
    dispatch({
      type: 'remove-item',
      payload: itemId
    })
  }

  function EditItem(itemId: string, value: number) {
    dispatch({
      type: 'edit-item',
      payload: { id: itemId, quantidade: value }
    })
  }

  function SetPaymentForm(payForm: string) {
    dispatch({
      type: 'set-payment',
      payload: payForm
    })
  }

  function SetAddress(address: TAddressShoppingCart) {
    dispatch({
      type: 'set-address',
      payload: address
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        ...state,
        AddItem,
        RemoveItem,
        EditItem,
        SetAddress,
        SetPaymentForm
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
