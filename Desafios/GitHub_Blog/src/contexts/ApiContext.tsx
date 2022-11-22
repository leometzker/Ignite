import axios from 'axios'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

export interface IUser {
  avatar_url: string
  login: string
  company: string
  name: string
  followers: number
  bio: string
  html_url: string
}

export interface ICard {
  title: string
  url: string
  created_at: string
  id: number
  body: string
}

export interface TApiContext {
  user: IUser
  cards: ICard[]
  searchPosts: (query?: string) => void
}

const ApiContext = createContext({} as TApiContext)

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const api = axios.create({
    baseURL: 'https://api.github.com'
  })

  const [user, setUser] = useState<IUser>({} as IUser)

  const [cards, setCards] = useState<ICard[]>([])

  async function fetchGitUser() {
    const response = await api.get('/users/leometzker')
    // const response = await api.get('/users/diego3g')
    setUser(response.data)
  }

  async function searchPosts(query?: string) {
    let search = 'repo:leometzker/MyBlog'

    if (query) {
      search = query + ' ' + search
    }

    const response = await api.get('/search/issues', {
      params: {
        q: search
      }
    })

    const { items } = await response.data

    setCards(items)
  }

  useEffect(() => {
    fetchGitUser()
    searchPosts()
    // searchPosts('Catequese hoje')

    // console.log(cards)
  }, [])

  return (
    <ApiContext.Provider value={{ user, cards, searchPosts }}>
      {children}
    </ApiContext.Provider>
  )
}

export const useApi = () => {
  return useContext(ApiContext)
}
