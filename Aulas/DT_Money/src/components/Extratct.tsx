import { ExtractStyled, PriceHighLight } from './Styles/ExtratctStyled'

interface Ttransactions {
  description: string
  value: number
  category: string
  date: string
  type: 'income' | 'outcome'
}

const transactions: Ttransactions[] = [
  {
    description: 'Desenvolvimento de site',
    value: 2000,
    category: 'Venda',
    date: '13/04/202',
    type: 'income'
  },
  {
    description: 'Lanche',
    value: 130.5,
    category: 'Venda',
    date: '13/04/202',
    type: 'outcome'
  }
]

export const Extract = () => {
  return (
    <ExtractStyled>
      <table className="Extract">
        <tbody>
          {transactions.map(t => {
            return (
              <tr key={t.description}>
                <td>{t.description}</td>
                <td>
                  <PriceHighLight variant={t.type}>{t.value}</PriceHighLight>
                </td>
                <td>{t.category}</td>
                <td>{t.date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {/* <footer>
        <div className="pages">
          <button>anterior</button>
          <button>próxima</button>
        </div>
      </footer> */}
    </ExtractStyled>
  )
}
