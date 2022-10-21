import { CountdownButton, HomeContainer, StopButton } from './styles'
import { HandPalm, Play } from 'phosphor-react'

import { Countdown } from './components/Countdown'
import { useContext } from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { NewCycleForm } from './components/NewCycleForm'
import { CyclesContext } from '../../context/CycleContext'

export function Home() {
  const { activeCycle, CreateNewCycle, InterruptCycle } =
    useContext(CyclesContext)

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(1).max(60)
  })

  type newCycleFormData = Zod.infer<typeof newCycleFormValidationSchema>

  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleInterruptCycle() {
    InterruptCycle()
    reset()
    document.title = `Ignite Timer`
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(CreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

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
