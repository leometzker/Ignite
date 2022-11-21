import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { SearchBar } from '../components/SearchBar'
import { api } from '../database/api'
import { HomeStyled } from './styles/HomeStyled'

interface ICard {
  title: string
  url: string
  createdAt: Date
  id: number
  body: string
}

export const Home = () => {
  const [user, setUser] = useState({})
  const [cards, setCards] = useState<ICard[]>([])

  async function fetchGitUser() {
    const response = await api.get('/users/leometzker')
    // const response = await api.get('/leometzker/MyBlog/issues/1')
    // setUser(response.data)
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
    // searchPosts('useState')
    searchPosts('Catequese hoje')
    // console.log(user)
    console.log(cards)
  }, [])

  return (
    <HomeStyled>
      <Header />

      <main>
        <div className="infoMain">
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>

        <SearchBar />

        <div className="cardsContainer">
          {cards.map(card => {
            return (
              <a key={card.id} href={card.url} target="_blank">
                <div className="card">
                  <h3>{card.title}</h3>

                  <div className="contentBase">{card.body}</div>
                </div>
              </a>
            )
          })}
        </div>
      </main>
    </HomeStyled>
  )
}
