import { useTransaction } from '../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../utils/formater'
import { ExtractStyled, PriceHighLight } from './Styles/ExtratctStyled'

export const Extract = () => {
  // dados da API
  const extract = useTransaction()

  return (
    <ExtractStyled>
      <table className="Extract">
        <tbody>
          {extract.transactions.map(t => {
            return (
              <tr key={t.id}>
                <td>{t.description}</td>
                <td>
                  <PriceHighLight variant={t.type}>
                    {t.type === 'outcome' && '- '}
                    {priceFormatter.format(t.value)}
                  </PriceHighLight>
                </td>
                <td>{t.category}</td>
                <td>{dateFormatter.format(new Date(t.createdAt))}</td>
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
