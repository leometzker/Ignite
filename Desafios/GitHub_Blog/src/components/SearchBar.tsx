import { useApi } from '../contexts/ApiContext'
import { SearchBarStyled } from './Styles/SearchBarStyled'
import { useForm } from 'react-hook-form'

type TForm = { query: string }

export const SearchBar = () => {
  const api = useApi()

  const { handleSubmit, register, watch, reset } = useForm<TForm>()

  watch('query')

  function handleQuerySubmit(data: TForm) {
    api.searchPosts(data.query)
    reset()
  }

  return (
    <SearchBarStyled onSubmit={handleSubmit(handleQuerySubmit)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchBarStyled>
  )
}
