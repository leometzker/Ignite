import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../hooks/useSummary'

import { priceFormatter } from '../utils/formater'
import { SummaryStyled } from './Styles/Summary'

export const Summary = () => {
  const summary = useSummary()

  return (
    <SummaryStyled>
      <div className="card income">
        <span>
          Entradas <ArrowCircleUp size={32} />
        </span>
        {priceFormatter.format(summary.income)}
      </div>
      <div className="card outcome">
        <span>
          Saídas <ArrowCircleDown size={32} />
        </span>
        {priceFormatter.format(summary.outcome)}
      </div>
      <div className="card total" /*variant= 'green'*/>
        <span>
          Totais <CurrencyDollar size={32} />
        </span>
        {priceFormatter.format(summary.total)}
      </div>
    </SummaryStyled>
  )
}
