import { createContext, ReactNode, useState } from 'react'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
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
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
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

    setActiveCycleId(idCycle)

    // usar arrow function quando um estado depende do valor anterior do mesmo
    setCycles(state => [...state, newCycle])

    setSecondsPassed(0)
  }

  const activeCycle = cycles.find(c => c.id == activeCycleId)

  // seta o ciclo como finalizado
  function markCycleAsFinished() {
    setCycles(state =>
      state.map(c => {
        if (c.id === activeCycleId) {
          return { ...c, finishedDate: new Date() }
        } else {
          return c
        }
      })
    )
    setActiveCycleId(null)
  }

  // interrompe o ciclo
  function InterruptCycle() {
    setCycles(state =>
      state.map(c => {
        if (c.id === activeCycleId) {
          return { ...c, interruptedDate: new Date() }
        } else {
          return c
        }
      })
    )
    setActiveCycleId(null)
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
