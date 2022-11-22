import { Header } from '../components/Header'
import { SearchBar } from '../components/SearchBar'
import { useApi } from '../contexts/ApiContext'
import { HomeStyled } from './styles/HomeStyled'
import { formatDistanceToNow } from 'date-fns'
import parseISO from 'date-fns/esm/fp/parseISO/index.js'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'

export const Home = () => {
  const { cards } = useApi()

  return (
    <HomeStyled>
      <Header />

      <main>
        <div className="infoMain">
          <h2>Publicações</h2>
          <span>{`${cards.length} publicações`}</span>
        </div>

        <SearchBar />

        <div className="cardsContainer">
          {cards.map(card => {
            return (
              <a key={card.id} href={card.url} target="_blank" className="card">
                <div className="cardInfo">
                  <h3 className="cardTitle">{card.title}</h3>
                  <span className="cardDate">
                    {formatDistanceToNow(parseISO(card.created_at), {
                      addSuffix: true,
                      locale: ptBR
                    })}
                  </span>
                </div>
                <div className="cardContent">{card.body}</div>
              </a>
            )
          })}
        </div>
      </main>
    </HomeStyled>
  )
}
