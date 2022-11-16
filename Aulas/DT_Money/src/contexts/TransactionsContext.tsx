import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

export interface TTransaction {
  id: number
  description: string
  value: number
  category: string
  createdAt: Date
  type: 'income' | 'outcome'
}

interface TTransactionsContext {
  transactions: TTransaction[]
}

const TransactionsContext = createContext({} as TTransactionsContext)

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  //\/\/\/\/\/  Dados da API  \/\/\/\/\/\/
  const [transactions, setTransactions] = useState<TTransaction[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(
    () => {
      loadTransactions()
    },

    // fetch('http://localhost:3000/transactions')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    []
  )

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransaction = () => useContext(TransactionsContext)

// {

//   const context = useContext(TransactionsContext)
//    return context
// }
