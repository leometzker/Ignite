import axios from 'axios'
import React, {
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
  html_url: string
  created_at: string
  id: number
  body: string
  comments: number
}

export interface TApiContext {
  user: IUser
  cards: ICard[]
  selectedPost: ICard | null
  searchPosts: (query?: string) => void
  setPost: (post: ICard) => void
}

const ApiContext = createContext({} as TApiContext)

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const api = axios.create({
    baseURL: 'https://api.github.com'
  })

  const [user, setUser] = useState<IUser>({} as IUser)

  const [cards, setCards] = useState<ICard[]>([])

  const [selectedPost, setSelectPost] = useState<ICard | null>(null)

  function setPost(post: ICard) {
    setSelectPost(post)
  }

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
    <ApiContext.Provider
      value={{ user, cards, searchPosts, selectedPost, setPost }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export const useApi = () => {
  const context = useContext(ApiContext)
  return context
}
