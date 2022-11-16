import {
  DialogContent,
  DialogOverlay,
  NewTransactionModalStyled
} from './Styles/NewTransactionModalStyled'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

function handleNewTransaction(dataNewTransaction: any) {
  // event.preventDefault()
  console.log(dataNewTransaction)
}

export const NewTransactionModa = () => {
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
              onSubmit={handleNewTransaction}
              className="NewTransactionForm"
            >
              <input type="text" placeholder="Descrição" required />
              <input type="number" placeholder="Valor" required />
              <input type="text" placeholder="Categoria" required />
              <div className="in-out">
                <input
                  type="radio"
                  name="in-out"
                  id="income"
                  value={'income'}
                  required
                />
                <label htmlFor="income" className="income">
                  <ArrowCircleUp size={32} />
                  Entrada
                </label>
                <input
                  type="radio"
                  name="in-out"
                  id="outcome"
                  value={'outcome'}
                  required
                />
                <label htmlFor="outcome" className="outcome">
                  <ArrowCircleDown size={32} /> Saída
                </label>
              </div>
              <button type="submit">Cadastrar</button>
            </form>
          </DialogContent>
        </DialogOverlay>
      </NewTransactionModalStyled>
    </Dialog.Portal>
  )
}
