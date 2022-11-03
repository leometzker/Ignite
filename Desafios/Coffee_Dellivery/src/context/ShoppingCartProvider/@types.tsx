import { type } from 'os'
import { ReactNode } from 'react'

export const defaultItemShoppingCart = {
  id: 0,
  descricao: '',
  quantidade: 0,
  price: 0
}

export const defaultAdressShoppingCart = {
  cep: '00.000-000',
  rua: '',
  numero: 0,
  complemento: '',
  bairro: '',
  cidade: 'Governador Valadares',
  estado: 'MG'
}

export const defaultResumeShoppingCart = {
  forma_pagamento: 'dinheiro',
  quantidade: 0,
  taxa_entrega: 0,
  total: 0
}

export type TAdressShoppingCart = typeof defaultAdressShoppingCart
export type TItemShoppingCart = typeof defaultItemShoppingCart
export type TResumeShoppingCart = typeof defaultResumeShoppingCart

export type TAction = { type: 'add-item' } | { type: 'remove-item' }
export interface TState {}

export interface TShoppingCartContext {
  itens?: TItemShoppingCart[]
  adress?: TAdressShoppingCart
  resume?: TResumeShoppingCart

  AddItem: (item: TItemShoppingCart) => void
  RemoveItem: (item: TItemShoppingCart) => void
}

export interface TShoppingCartProvider {
  children: ReactNode
}
