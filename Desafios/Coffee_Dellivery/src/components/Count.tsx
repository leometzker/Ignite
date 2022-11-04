import { CountStyled } from './Styles/CountStyled'
import { CloudFog, Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'

export interface TCounter {
  CounterValue: (value: number) => number
}

export const Count = (value: TCounter) => {
  const [count, setCount] = useState(0)

  console.log(count)
  return (
    <CountStyled>
      <div className="count">
        <button
          className="inc_dec"
          onClick={() => {
            if (count > 0) {
              return () => setCount(count - 1)
            }
          }}
        >
          <Minus size={14} weight={'bold'} />
        </button>
        <span id="counter">{count}</span>
        <button
          className="inc_dec"
          onClick={() => {
            return () => setCount(count + 1)
          }}
        >
          <Plus size={14} weight={'bold'} />
        </button>
      </div>
    </CountStyled>
  )
}
