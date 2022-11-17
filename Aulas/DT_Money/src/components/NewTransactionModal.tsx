import {
  DialogContent,
  DialogOverlay,
  NewTransactionModalStyled
} from './Styles/NewTransactionModalStyled'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const NewTransactionFormSchema = z.object({
  description: z.string().min(1),
  value: z.number(),
  category: z.string().min(1),
  type: z.enum(['income', 'outcome'])
})

type TNewTransactionForm = z.infer<typeof NewTransactionFormSchema>

export const NewTransactionModal = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<TNewTransactionForm>({
    resolver: zodResolver(NewTransactionFormSchema)
    // defaultValues: { type: 'income' }
  })

  async function handleNewTransactionSubmit(
    dataNewTransaction: TNewTransactionForm
  ) {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(dataNewTransaction)
  }

  return (
    <Dialog.Portal>
      <NewTransactionModalStyled>
        <DialogOverlay>
          <DialogContent>
            <Dialog.Close className="Close">
              <X size={24} />
            </Dialog.Close>

            <Dialog.Title className="Title">Nova Transação</Dialog.Title>

            <form
              onSubmit={handleSubmit(handleNewTransactionSubmit)}
              className="NewTransactionForm"
            >
              <input
                type="text"
                placeholder="Descrição"
                required
                {...register('description')}
              />
              <input
                type="number"
                placeholder="Valor"
                required
                {...register('value', { valueAsNumber: true })}
              />
              <input
                type="text"
                placeholder="Categoria"
                required
                {...register('category')}
              />
              <div className="in-out">
                <input
                  type="radio"
                  id="income"
                  value={'income'}
                  required
                  {...register('type')}
                />
                <label htmlFor="income" className="income">
                  <ArrowCircleUp size={32} />
                  Entrada
                </label>
                <input
                  type="radio"
                  id="outcome"
                  value={'outcome'}
                  required
                  {...register('type')}
                />
                <label htmlFor="outcome" className="outcome">
                  <ArrowCircleDown size={32} /> Saída
                </label>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Cadastrar
              </button>
            </form>
          </DialogContent>
        </DialogOverlay>
      </NewTransactionModalStyled>
    </Dialog.Portal>
  )
}
