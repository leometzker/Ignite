import { ExtractStyled } from './Styles/ExtratctStyled'

const transactions = [
  {
    description: 'Desenvolvimento de site',
    value: 'R$ 12.000,00',
    category: 'Venda',
    date: '13/04/202'
  },
  {
    description: 'Desenvolvimento de site',
    value: 'R$ 12.000,00',
    category: 'Venda',
    date: '13/04/202'
  },
  {
    description: 'Desenvolvimento de site',
    value: 'R$ 12.000,00',
    category: 'Venda',
    date: '13/04/202'
  },
  {
    description: 'Desenvolvimento de site',
    value: 'R$ 12.000,00',
    category: 'Venda',
    date: '13/04/202'
  },
  {
    description: 'Desenvolvimento de site',
    value: 'R$ 12.000,00',
    category: 'Venda',
    date: '13/04/202'
  },
  {
    description: 'Desenvolvimento de site',
    value: 'R$ 12.000,00',
    category: 'Venda',
    date: '13/04/202'
  },
  {
    description: 'Desenvolvimento de site',
    value: 'R$ 12.000,00',
    category: 'Venda',
    date: '13/04/202'
  },
  {
    description: 'Desenvolvimento de site',
    value: 'R$ 12.000,00',
    category: 'Venda',
    date: '13/04/202'
  },
  {
    description: 'Desenvolvimento de site',
    value: 'R$ 12.000,00',
    category: 'Venda',
    date: '13/04/202'
  },
  {
    description: 'Desenvolvimento de site',
    value: 'R$ 12.000,00',
    category: 'Venda',
    date: '13/04/202'
  },
  {
    description: 'Desenvolvimento de site',
    value: 'R$ 12.000,00',
    category: 'Venda',
    date: '13/04/202'
  },
  {
    description: 'Desenvolvimento de site',
    value: 'R$ 12.000,00',
    category: 'Venda',
    date: '13/04/202'
  }
]

type TTransaction = typeof transactions

export const Extract = () => {
  return (
    <ExtractStyled>
      <table className="Extract">
        <tbody>
          {transactions.map(t => {
            return (
              <tr>
                <td>{t.description}</td>
                <td>{t.value}</td>
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
