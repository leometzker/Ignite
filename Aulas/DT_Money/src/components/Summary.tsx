import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryStyled } from './Styles/Summary'

export const Summary = () => {
  return (
    <SummaryStyled>
      <div className="card income">
        <span>
          Entradas <ArrowCircleUp size={32} />
        </span>
        R$ 17.400,00
      </div>
      <div className="card outcome">
        <span>
          Saídas <ArrowCircleDown size={32} />
        </span>
        R$ 1.259,00
      </div>
      <div className="card total" /*variant= 'green'*/>
        <span>
          Totais <CurrencyDollar size={32} />
        </span>
        R$ 16.141,00
      </div>
    </SummaryStyled>
  )
}
