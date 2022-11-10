import { ReactNode } from 'react'

export const defaultItemShoppingCart = {
  id: '',
  image: '',
  name: '',
  amount: 0,
  price: 0
}

export const defaultAddressShoppingCart = {
  cep: '',
  rua: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: 'Governador Valadares',
  estado: 'MG'
}

export const defaultResumeShoppingCart = {
  forma_pagamento: '',
  taxa_entrega: 5.5
}

export type TAddressShoppingCart = typeof defaultAddressShoppingCart
export type TItemShoppingCart = typeof defaultItemShoppingCart
export type TResumeShoppingCart = typeof defaultResumeShoppingCart

export type TAction =
  | { type: 'add-item'; payload: TItemShoppingCart }
  | { type: 'remove-item'; payload: string }
  | { type: 'edit-item'; payload: { id: string; quantidade: number } }
  | { type: 'set-payment'; payload: string }
  | { type: 'set-address'; payload: TAddressShoppingCart }

export type TState = {
  itens: TItemShoppingCart[]
  address: TAddressShoppingCart
  resume: TResumeShoppingCart
}

export interface TShoppingCartContext extends TState {
  AddItem: (item: TItemShoppingCart) => void
  RemoveItem: (itemId: string) => void
  EditItem: (itemId: string, quantidade: number) => void
  SetPaymentForm: (payForm: string) => void
  SetAddress: (address: TAddressShoppingCart) => void
}

export interface TShoppingCartProvider {
  children: ReactNode
}
