import { Header } from '../components/Header'
import { SearchBar } from '../components/SearchBar'
import { useApi } from '../database/api'
import { HomeStyled } from './styles/HomeStyled'

export const Home = () => {
  const { user, cards } = useApi()

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
              <a key={card.id} href={card.url} target="_blank" className="card">
                <div>
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
