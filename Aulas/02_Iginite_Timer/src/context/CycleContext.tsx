import { createContext, ReactNode, useReducer, useState } from 'react'
import {
  addNewCycleAction,
  setFinishedCycleAction,
  setInterruptCycleAction
} from '../components/Reducers/Cycles/Actions'
import { Cycle, CyclesReducer } from '../components/Reducers/Cycles/Cycles'

export interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  CreateNewCycle: (data: CycleDataType) => void
  InterruptCycle: () => void
}

interface CycleDataType {
  task: string
  minutesAmount: number
}

interface CycleContextType {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({ children }: CycleContextType) {
  const [{ cycles, activeCycleId }, dispatch] = useReducer(CyclesReducer, {
    cycles: [],
    activeCycleId: null
  })

  console.log(cycles)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function CreateNewCycle(data: CycleDataType) {
    const idCycle: string = String(new Date().getTime())

    const newCycle: Cycle = {
      id: idCycle,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    dispatch(addNewCycleAction(newCycle))

    setSecondsPassed(0)
  }

  const activeCycle = cycles.find(c => c.id == activeCycleId)

  // seta o ciclo como finalizado
  function markCycleAsFinished() {
    dispatch(setFinishedCycleAction())
  }

  // interrompe o ciclo
  function InterruptCycle() {
    dispatch(setInterruptCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        CreateNewCycle,
        InterruptCycle
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
