import { Header } from '../components/Header'
import { SearchBar } from '../components/SearchBar'
import { useApi } from '../contexts/ApiContext'
import { HomeStyled } from './styles/HomeStyled'
import { Card } from '../components/Card'

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
            return <Card key={card.id} card={card} />
          })}
        </div>
      </main>
    </HomeStyled>
  )
}
