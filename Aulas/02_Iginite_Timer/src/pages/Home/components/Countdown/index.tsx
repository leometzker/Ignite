import { useContext, useEffect } from 'react'
import { CountContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../..'

export function Countdown() {
  const {
    activeCycle,
    markCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  // variaveis para exibição do contador
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const showMinutes = String(minutesAmount).padStart(2, '0')
  const showSeconds = String(secondsAmount).padStart(2, '0')

  // atualiza os segundos passados ate o momento

  // faz o contador funcionar
  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        )

        if (secondsDifference <= totalSeconds) {
          setSecondsPassed(secondsDifference)
        } else {
          markCycleAsFinished()
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  // atualiza o titulo da pagina para o valor do contador
  useEffect(() => {
    if (activeCycle) {
      document.title = `${showMinutes}:${showSeconds}`
    }
  }, [showMinutes, showSeconds, activeCycle, setSecondsPassed])

  return (
    <CountContainer>
      <span>{showMinutes[0]} </span>
      <span>{showMinutes[1]}</span>
      <Separator>:</Separator>
      <span>{showSeconds[0]}</span>
      <span>{showSeconds[1]}</span>
    </CountContainer>
  )
}
