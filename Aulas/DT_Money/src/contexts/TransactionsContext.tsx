import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../liib/axios'

export interface TTransaction {
  description: string
  value: number
  category: string
  createdAt?: Date
  type: 'income' | 'outcome'
}

interface TTransactionsContext {
  transactions: TTransaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createNewTransaction: (dataTransaction: TTransaction) => Promise<void>
}

const TransactionsContext = createContext({} as TTransactionsContext)

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  // Dados da API
  const [transactions, setTransactions] = useState<TTransaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc'
      }
    })

    setTransactions(response.data)
  }

  async function createNewTransaction(dataNewTransaction: TTransaction) {
    const response = await api.post('transactions', {
      ...dataNewTransaction,
      createdAt: new Date()
    })

    setTransactions(state => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createNewTransaction
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransaction = () => {
  const context = useContext(TransactionsContext)
  return context
}
