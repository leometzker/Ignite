import { CountdownButton, HomeContainer, StopButton } from './styles'
import { HandPalm, Play } from 'phosphor-react'

import { Countdown } from './components/Countdown'
import { createContext, useState } from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { NewCycleForm } from './components/NewCycleForm'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
}

// criação e exportação do contexto
export const CyclesContext = createContext({} as CyclesContextType)

export function Home() {
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(1).max(60)
  })

  type newCycleFormData = Zod.infer<typeof newCycleFormValidationSchema>

  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function handleCreateNewCicle(data: newCycleFormData) {
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

  const { handleSubmit, watch, reset } = newCycleForm

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
    reset()

    document.title = `Ignite Timer`
    // clearInterval(interval)
  }

  // interrompe o ciclo
  function handleInterruptCycle() {
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

    reset()
    document.title = `Ignite Timer`
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  console.log(cycles)

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)} action="">
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCycleAsFinished,
            amountSecondsPassed,
            setSecondsPassed
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>

          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <StopButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            interromper
          </StopButton>
        ) : (
          <CountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </CountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
