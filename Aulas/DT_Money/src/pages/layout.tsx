import logo from '../assets/logoMain.svg'
import { LayoutStyled } from './styles/Layout'
import { Summary } from '../components/Summary'
import { SearchBar } from '../components/SearchBar'
import { Extract } from '../components/Extratct'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../components/NewTransactionModal'

export const Layout = () => {
  return (
    <LayoutStyled>
      <header>
        <img src={logo} />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>Nova Transação</button>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </header>

      <Summary />

      <SearchBar />

      <Extract />
    </LayoutStyled>
  )
}
