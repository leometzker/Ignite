import { CountStyled } from './Styles/CountStyled'
import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

export type TCounter = {
  InitialValue: number
  CounterValue: (value: number) => void
}

export const Count = ({ CounterValue, InitialValue }: TCounter) => {
  const [count, setCount] = useState(InitialValue)

  function IncCounter() {
    setCount(count + 1)
    CounterValue(count + 1)
  }

  function DecCounter() {
    if (count > 1) {
      setCount(count - 1)
      CounterValue(count - 1)
    }
  }

  return (
    <CountStyled>
      <div className="count">
        <button className="inc_dec" onClick={DecCounter}>
          <Minus size={14} weight={'bold'} />
        </button>
        <span id="counter">{count}</span>
        <button className="inc_dec" onClick={IncCounter}>
          <Plus size={14} weight={'bold'} />
        </button>
      </div>
    </CountStyled>
  )
}
