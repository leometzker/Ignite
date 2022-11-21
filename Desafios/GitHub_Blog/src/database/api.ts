import axios from 'axios'
import { useEffect, useState } from 'react'
import { ICard, IUser } from '../interfaces/interfaces'

const api = axios.create({
  baseURL: 'https://api.github.com'
})

export const useApi = () => {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [cards, setCards] = useState<ICard[]>([])

  async function fetchGitUser() {
    // const response = await api.get('/users/leometzker')
    const response = await api.get('/users/diego3g')

    setUser(response.data)
  }

  async function searchPosts(query: string) {
    const response = await api.get('/search/issues', {
      params: {
        q: query
      }
    })

    const { items } = await response.data

    setCards(items)
  }

  useEffect(() => {
    fetchGitUser()
    searchPosts('useState')
    // searchPosts('Catequese hoje')
    console.log(user)
    console.log(cards)
  }, [])
  return { user, cards }
}
