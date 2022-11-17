import { MagnifyingGlass, Watch } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchBarStyled } from './Styles/SearchBarStyled'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransaction } from '../contexts/TransactionsContext'

const searchFormSchema = z.object({
  query: z.string()
})

type TSearchForm = z.infer<typeof searchFormSchema>

export const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch
  } = useForm<TSearchForm>({
    resolver: zodResolver(searchFormSchema)
  })

  watch('query')
  const transactions = useTransaction()

  function handleSearchSubmit(data: TSearchForm) {
    transactions.fetchTransactions(data.query)
    // console.log(data)
  }

  return (
    <SearchBarStyled onSubmit={handleSubmit(handleSearchSubmit)}>
      <div className="container">
        <input
          type="text"
          placeholder="Busque por transações"
          {...register('query')}
        />
        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </div>
    </SearchBarStyled>
  )
}
