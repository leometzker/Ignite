import { useTransaction } from '../contexts/TransactionsContext'

export const useSummary = () => {
  const transactions = useTransaction()

  const summary = transactions.transactions.reduce(
    (acc, t) => {
      if (t.type === 'income') {
        acc.income += t.value
        acc.total += t.value
      } else {
        if (t.type === 'outcome') {
          acc.outcome += t.value
          acc.total -= t.value
        }
      }
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  )

  return summary
}
