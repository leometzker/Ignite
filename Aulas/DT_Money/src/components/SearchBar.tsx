import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchBarStyled } from './Styles/SearchBarStyled'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string()
})

type TSearchForm = z.infer<typeof searchFormSchema>

export const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<TSearchForm>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchSubmit(data: TSearchForm) {
    console.log(data)
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
