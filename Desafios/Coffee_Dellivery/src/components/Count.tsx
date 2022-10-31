import { CountStyled } from './Styles/CountStyled'
import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

export const Count = () => {
  const [count, setCount] = useState(0)
  return (
    <CountStyled>
      <div className="count">
        <button
          className="inc_dec"
          onClick={() => {
            if (count > 0) {
              return setCount(count - 1)
            }
          }}
        >
          <Minus size={14} weight={'bold'} />
        </button>
        <span id="visor">{count}</span>
        <button
          className="inc_dec"
          onClick={() => {
            return setCount(count + 1)
          }}
        >
          <Plus size={14} weight={'bold'} />
        </button>
      </div>
    </CountStyled>
  )
}
