import { CloudSlash, HandPalm, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import {
  CountContainer,
  CountdownButton,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StopButton,
  TaskInput
} from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { differenceInSeconds } from 'date-fns'

const newCicleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(1).max(60)
})

type newCicleFormData = zod.infer<typeof newCicleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<newCicleFormData>({
    resolver: zodResolver(newCicleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
    // register recebe o nome do input e retorna os metodos do mesmo
    // handleSubmit função de handle -> recebe a nossa função handle como parametro
    // watch => observa o conteude de determinado campo
  })

  function handleCreateNewCicle(data: newCicleFormData) {
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

    setAmountSecondsPassed(0)
  }

  const activeCycle = cycles.find(c => c.id == activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

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
          setAmountSecondsPassed(secondsDifference)
        } else {
          // conlui o ciclo
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
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

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

  console.log(cycles)

  // atualiza os segundos passados ate o momento
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  // variaveis para exibição do contador
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const showMinutes = String(minutesAmount).padStart(2, '0')
  const showSeconds = String(secondsAmount).padStart(2, '0')

  const task = watch('task')
  const isSubmitDisabled = !task

  // atualiza o titulo da pagina para o valor do contador
  useEffect(() => {
    if (activeCycle) {
      document.title = `${showMinutes}:${showSeconds}`
    }
  }, [showMinutes, showSeconds, activeCycle])

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="de um nome para seu projeto"
            list="task-list"
            disabled={!!activeCycle}
            {...register('task')}
          />

          <datalist id="task-list">
            <option value="Projeto 01" />
            <option value="Projeto 02" />
            <option value="Projeto 03" />
            <option value="outro qualquer" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            max={60}
            min={1}
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountContainer>
          <span>{showMinutes[0]} </span>
          <span>{showMinutes[1]}</span>
          <Separator>:</Separator>
          <span>{showSeconds[0]}</span>
          <span>{showSeconds[1]}</span>
        </CountContainer>

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
